'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, Star } from 'lucide-react';

/**
 * A real Google review in the home page's opening screen, so visitors see
 * what clients say before they scroll. One quote at a time, changing every
 * ROTATE_MS (paused while hovered or focused); the link jumps to the full
 * reviews section. The quotes are verbatim Google reviews (see
 * components/OVIReviewsSwiper.tsx).
 */
const QUOTES = [
  {
    name: 'anay',
    text: 'I called JJ for a DUS case that carried jail time in Franklin County. He got it dismissed in one court date and was easy to work with!',
  },
  {
    name: 'Trenity Hayes',
    text: 'Great lawyer. I got charged with physical control and he got me reckless opp which is an mm (minor misdemeanor) with minimal fines. Highly recommend him.',
  },
  {
    name: 'Randy Perry',
    text: 'JJ got me out of a jam. I had a prior ovi long time ago they wanted to throw me away in jail and he got my charge taken care of with no jail. Thank you JJ!',
  },
  {
    name: 'felicia henderson',
    text: 'I hired jj to represent me and my charges got dropped and I was happy with the outcome everyone was so nice and I was handled with care',
  },
];

const ROTATE_MS = 6500;

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function HeroReview({ rating, count }: { rating: string; count: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % QUOTES.length), ROTATE_MS);
    return () => window.clearTimeout(t);
  }, [paused, index]);

  const quote = QUOTES[index];

  return (
    <figure
      className="mx-auto w-full max-w-[40rem] border border-white/15 bg-navy-950/55 px-5 py-4 text-left backdrop-blur-md sm:px-6 sm:py-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <p className="flex items-center gap-2.5">
          <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white">
            <GoogleG className="h-3.5 w-3.5" />
          </span>
          <span className="jw-display text-[18px] leading-none">{rating}</span>
          <span className="flex gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-sky text-sky" />
            ))}
          </span>
          <span className="text-[13px] text-white/70">{count} Google reviews</span>
        </p>
        <div className="flex gap-1.5" role="tablist" aria-label="Choose a review">
          {QUOTES.map((q, i) => (
            <button
              key={q.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Review ${i + 1} of ${QUOTES.length}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky ${
                i === index ? 'w-5 bg-sky' : 'w-1.5 bg-white/35 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Fixed height so the hero does not jump as quotes change length. */}
      <div className="mt-3 min-h-[4.5rem] sm:min-h-[3.25rem]">
        <blockquote key={index} className="jw-serif italic text-[16px] sm:text-[17px] leading-snug text-white/90 line-clamp-3 sm:line-clamp-2 motion-safe:animate-[jw-fade-in_600ms_cubic-bezier(0.16,1,0.3,1)]">
          &ldquo;{quote.text}&rdquo;
        </blockquote>
      </div>

      <figcaption className="mt-3 flex items-center justify-between gap-4 text-[13px]">
        <span className="min-w-0 truncate text-white/60">{quote.name}</span>
        <a
          href="#reviews"
          className="group inline-flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap font-semibold text-sky hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
        >
          Read all reviews
          <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  );
}
