'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Suburb {
  suburb: string;
  slug: string;
  hasMayorsCourt: boolean;
}

const suburbs: Suburb[] = [
  { suburb: 'Bexley', slug: 'bexley', hasMayorsCourt: true },
  { suburb: 'Canal Winchester', slug: 'canal-winchester', hasMayorsCourt: true },
  { suburb: 'Dublin', slug: 'dublin', hasMayorsCourt: true },
  { suburb: 'Grandview Heights', slug: 'grandview-heights', hasMayorsCourt: false },
  { suburb: 'Grove City', slug: 'grove-city', hasMayorsCourt: true },
  { suburb: 'Groveport', slug: 'groveport', hasMayorsCourt: true },
  { suburb: 'Hilliard', slug: 'hilliard', hasMayorsCourt: true },
  { suburb: 'Marble Cliff', slug: 'marble-cliff', hasMayorsCourt: false },
  { suburb: 'New Albany', slug: 'new-albany', hasMayorsCourt: false },
  { suburb: 'Obetz', slug: 'obetz', hasMayorsCourt: true },
  { suburb: 'Pickerington', slug: 'pickerington', hasMayorsCourt: true },
  { suburb: 'Reynoldsburg', slug: 'reynoldsburg', hasMayorsCourt: true },
  { suburb: 'Upper Arlington', slug: 'upper-arlington', hasMayorsCourt: true },
  { suburb: 'Westerville', slug: 'westerville', hasMayorsCourt: true },
  { suburb: 'Whitehall', slug: 'whitehall', hasMayorsCourt: true },
  { suburb: 'Worthington', slug: 'worthington', hasMayorsCourt: true },
];

function getPracticeAreas(slug: string, hasMayorsCourt: boolean) {
  return [
    { label: 'OVI / DUI', href: `/locations/franklin-county/ovi-dui-defense-${slug}` },
    { label: 'Assault', href: `/locations/franklin-county/assault-defense-${slug}` },
    { label: 'Theft', href: `/locations/franklin-county/theft-defense-${slug}` },
    { label: 'Domestic Violence', href: `/locations/franklin-county/domestic-violence-defense-${slug}` },
    { label: 'Drug Possession', href: `/locations/franklin-county/drug-possession-defense-${slug}` },
    { label: 'Disorderly Conduct', href: `/locations/franklin-county/disorderly-conduct-defense-${slug}` },
    { label: 'Open Container', href: `/locations/franklin-county/open-container-defense-${slug}` },
    ...(hasMayorsCourt ? [{ label: "Mayor's Court", href: `/locations/franklin-county/mayors-court-${slug}` }] : []),
  ];
}

export default function FranklinCountySuburbGrid() {
  const [selected, setSelected] = useState<Suburb | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => setVisible(true));
    } else {
      document.body.style.overflow = '';
      setVisible(false);
    }
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  function close() {
    setVisible(false);
    setTimeout(() => setSelected(null), 300);
  }

  return (
    <>
      <div className="not-prose grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
        {suburbs.map(({ suburb, slug, hasMayorsCourt }) => {
          const count = getPracticeAreas(slug, hasMayorsCourt).length;
          return (
            <button
              key={slug}
              onClick={() => setSelected({ suburb, slug, hasMayorsCourt })}
              className="group text-left bg-white border border-navy-950/10 p-4 hover:border-sky-deep transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-deep focus:ring-offset-2"
            >
              <div className="w-8 h-0.5 bg-navy-950 mb-3 group-hover:w-12 transition-all duration-200" />
              <p className="jw-serif font-bold text-navy-950 text-sm leading-snug mb-2">
                {suburb}
              </p>
              <p className="text-xs text-navy-950/50 group-hover:text-sky-deep transition-colors">
                {count} practice areas →
              </p>
            </button>
          );
        })}
      </div>

      {/* Backdrop */}
      {selected && (
        <div
          className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${visible ? 'opacity-50' : 'opacity-0'}`}
          onClick={close}
        />
      )}

      {/* Bottom sheet */}
      {selected && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 bg-white transition-transform duration-300 ease-out ${visible ? 'translate-y-0' : 'translate-y-full'}`}
          style={{ maxHeight: '80vh', overflowY: 'auto' }}
        >
          {/* Handle bar */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 bg-navy-950/10 rounded-full" />
          </div>

          <div className="px-6 pb-8 pt-3">
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="w-8 h-0.5 bg-navy-950 mb-2" />
                <h3 className="jw-serif text-2xl font-bold text-navy-950">
                  {selected.suburb}
                </h3>
                <p className="text-sm text-navy-950/60 mt-0.5">
                  Select a practice area
                </p>
              </div>
              <button
                onClick={close}
                className="ml-4 mt-1 text-navy-950/50 hover:text-navy-950/70 transition-colors p-1 rounded-full hover:bg-ice"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Practice area links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {getPracticeAreas(selected.slug, selected.hasMayorsCourt).map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={close}
                  className="flex items-center justify-between group bg-ice hover:bg-navy-950 px-4 py-3 transition-all duration-150"
                >
                  <span className="text-sm font-medium text-navy-950 group-hover:text-white transition-colors">
                    {label}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-navy-950/50 group-hover:text-white transition-colors flex-shrink-0 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
