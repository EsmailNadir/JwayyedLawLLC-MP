'use client';

import { useEffect, useRef, useState } from 'react';
import type { Map as MapLibreMap } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

/**
 * The office on a map drawn in the site's own navy and sky.
 *
 * MapLibre with OpenFreeMap's vector tiles: no API key, no tracking, and the
 * style can be recoloured layer by layer, which a Google embed cannot. The
 * library (about 250 KB) is only fetched once the map is about to scroll into
 * view, so the rest of the page never waits on it. Until then, and if it
 * fails, the navy field and the address card around it still say everything.
 *
 * Scroll-wheel zoom is off and touch needs two fingers, so the page scrolls
 * past the map instead of getting stuck in it.
 */

export const OFFICE: [number, number] = [-83.0170041, 40.1191818]; // lng, lat (same as the JSON-LD)
const STYLE_URL = 'https://tiles.openfreemap.org/styles/dark';

const C = {
  ground: '#0b1a2e', // navy-950
  land: '#0f2136',
  park: '#122a3a',
  water: '#1b3150', // navy-800
  building: '#16294a',
  road: '#26406a', // navy-700
  roadMajor: '#3a5a8c',
  label: '#a8b5c4', // mist
  labelMajor: '#dbe6f2',
  halo: '#0b1a2e',
};

/** Recolours the dark base style into the site's palette. */
function recolour(map: MapLibreMap) {
  for (const layer of map.getStyle().layers ?? []) {
    const id = layer.id.toLowerCase();
    try {
      if (layer.type === 'background') map.setPaintProperty(layer.id, 'background-color', C.ground);
      else if (layer.type === 'fill') {
        const colour = id.includes('water')
          ? C.water
          : id.includes('building')
            ? C.building
            : /park|wood|grass|landcover|cemetery/.test(id)
              ? C.park
              : C.land;
        map.setPaintProperty(layer.id, 'fill-color', colour);
        if (id.includes('building')) map.setPaintProperty(layer.id, 'fill-outline-color', C.ground);
      } else if (layer.type === 'line') {
        if (id.includes('water') || id.includes('river')) map.setPaintProperty(layer.id, 'line-color', C.water);
        else if (/motorway|trunk|primary/.test(id)) map.setPaintProperty(layer.id, 'line-color', C.roadMajor);
        else if (/road|street|highway|path|tunnel|bridge|rail/.test(id)) map.setPaintProperty(layer.id, 'line-color', C.road);
        else if (id.includes('boundary')) map.setPaintProperty(layer.id, 'line-color', C.road);
      } else if (layer.type === 'symbol') {
        const major = /place|city|town/.test(id);
        map.setPaintProperty(layer.id, 'text-color', major ? C.labelMajor : C.label);
        map.setPaintProperty(layer.id, 'text-halo-color', C.halo);
        if (/poi/.test(id)) map.setLayoutProperty(layer.id, 'visibility', 'none');
      }
    } catch {
      // A layer without that property: leave it as the base style drew it.
    }
  }
}

/** The pin: the firm's JL mark on navy, with a sky ring that pulses. */
function markerElement(): HTMLElement {
  const el = document.createElement('div');
  el.className = 'jw-map-pin';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML =
    '<span class="jw-map-pin__pulse"></span><span class="jw-map-pin__badge"><img src="/assets/jl-monogram.png" alt="" width="34" height="26" /></span>';
  return el;
}

export default function OfficeMap({ className = '' }: { className?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'idle' | 'ready' | 'failed'>('idle');

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    let map: MapLibreMap | null = null;
    let cancelled = false;

    const start = async () => {
      try {
        const maplibre = (await import('maplibre-gl')).default;
        if (cancelled) return;
        const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        map = new maplibre.Map({
          container: el,
          style: STYLE_URL,
          center: OFFICE,
          zoom: still ? 14.6 : 12.4,
          pitch: still ? 0 : 20,
          attributionControl: { compact: true },
          cooperativeGestures: true,
          scrollZoom: false,
          dragRotate: false,
        });
        map.addControl(new maplibre.NavigationControl({ showCompass: false }), 'top-right');
        new maplibre.Marker({ element: markerElement(), anchor: 'center' }).setLngLat(OFFICE).addTo(map);
        map.on('style.load', () => map && recolour(map));
        map.once('load', () => {
          if (cancelled || !map) return;
          setState('ready');
          if (!still) map.flyTo({ center: OFFICE, zoom: 14.6, pitch: 35, duration: 2600, essential: false });
        });
        map.on('error', (e) => {
          // Missing glyphs or a single tile are not fatal; only a failed style is.
          if (!map?.isStyleLoaded() && String(e.error?.message ?? '').includes('style')) setState('failed');
        });
      } catch {
        if (!cancelled) setState('failed');
      }
    };

    if (!('IntersectionObserver' in window)) {
      void start();
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            io.disconnect();
            void start();
          }
        },
        { rootMargin: '1200px 0px' }
      );
      io.observe(el);
      return () => {
        cancelled = true;
        io.disconnect();
        map?.remove();
      };
    }
    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div className={`relative bg-navy-950 ${className}`}>
      {/* The fade lives on a wrapper: MapLibre adds its own classes to the
          element it draws in, and a React className change on that element
          would wipe them and break its layout. */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${state === 'ready' ? 'opacity-100' : 'opacity-0'}`}>
        {/* Sized by width and height, not inset: MapLibre's own stylesheet
            sets its container to position: relative, outside Tailwind's
            layers, so `absolute inset-0` here would lose. */}
        <div ref={box} className="h-full w-full" role="region" aria-label="Map of the office at 100 E. Campus View Blvd, Columbus" />
      </div>
      {state === 'failed' && (
        <p className="absolute inset-0 flex items-center justify-center text-mist text-[length:var(--step-small)]">
          The map could not load. The address and directions are beside it.
        </p>
      )}
    </div>
  );
}
