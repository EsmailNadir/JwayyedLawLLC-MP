'use client';

import { useEffect, useRef, useState } from 'react';

const PROFILE_URL = 'https://www.ncdd.com/attorneys/5317-jwayyed-jwayyed';
const BADGE_URL = 'https://www.ncdd.com/getbadge.php?pid=5317&bid=general';

/**
 * National College for DUI Defense profile badge.
 *
 * NCDD's embed snippet renders <img src="#"> and fills in the src from a
 * window.onload script; a static src loads the same badge without the script
 * or the broken placeholder. ncdd.com sits behind Cloudflare, which can refuse
 * the image, so on error this falls back to a text link instead of leaving a
 * long line of alt text in the footer. Remote image, so not next/image (that
 * would need a loader configured for ncdd.com).
 */
export default function NCDDBadge() {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The img is server-rendered, so it can fail before hydration attaches
  // onError. A finished load with no pixels is the same failure.
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <a
      href={PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="View Attorney Jwayyed's NCDD profile"
      className="flex items-center opacity-70 hover:opacity-100 transition-opacity"
    >
      {failed ? (
        <span className="text-xs text-gray-400">NCDD Profile</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={BADGE_URL}
          alt="National College for DUI Defense profile badge for Attorney Jwayyed"
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-10 w-auto"
        />
      )}
    </a>
  );
}
