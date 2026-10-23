'use client';

import { useEffect, useRef, useState } from 'react';

const PROFILE_URL = 'https://www.ncdd.com/attorneys/5317-jwayyed-jwayyed';
const BADGE_URL = 'https://www.ncdd.com/getbadge.php?pid=5317&bid=general';
const ALT = 'National College for DUI Defense profile badge for Attorney Jwayyed';

/**
 * National College for DUI Defense profile badge.
 *
 * NCDD's embed snippet renders <img src="#"> and fills in the src from a
 * window.onload script; a static src loads the same badge without the script
 * or the broken placeholder. ncdd.com sits behind Cloudflare, which can refuse
 * the image, so a failed load falls back gracefully instead of leaving a long
 * line of alt text: the inline variant becomes a text link, the card variant
 * drops just the image. Remote image, so not next/image (that would need a
 * loader configured for ncdd.com).
 *
 * - `inline`: the footer trust row.
 * - `card`: matches the Google and BBB cards above the review carousels.
 */
export default function NCDDBadge({ variant = 'inline' }: { variant?: 'inline' | 'card' }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The img is server-rendered, so it can fail before hydration attaches
  // onError. A finished load with no pixels is the same failure.
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  const image = (className: string) =>
    failed ? null : (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        ref={imgRef}
        src={BADGE_URL}
        alt={ALT}
        loading="lazy"
        onError={() => setFailed(true)}
        className={className}
      />
    );

  if (variant === 'card') {
    return (
      <a
        href={PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="View Attorney Jwayyed's NCDD profile"
        className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm min-w-[220px] hover:border-slate-300 hover:shadow-md transition-all duration-200"
      >
        {image('h-9 w-auto max-w-[72px] object-contain flex-shrink-0')}
        <div className="text-left">
          <p className="text-sm font-bold text-slate-900">NCDD</p>
          <p className="text-xs text-slate-500">National College for DUI Defense</p>
        </div>
      </a>
    );
  }

  return (
    <a
      href={PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="View Attorney Jwayyed's NCDD profile"
      className="flex items-center opacity-70 hover:opacity-100 transition-opacity"
    >
      {failed ? <span className="text-xs text-gray-400">NCDD Profile</span> : image('h-10 w-auto')}
    </a>
  );
}
