'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Star, X } from 'lucide-react';

/**
 * A small card that slides in shortly after a visitor arrives, showing the
 * Google rating and a few real client reviews, so the reviews are seen
 * without scrolling to the bottom of the home page. Once per browser session;
 * closing it keeps it closed. The quotes are verbatim Google reviews (see
 * components/OVIReviewsSwiper.tsx), kept inline so this site-wide component
 * does not pull the carousel's code into every page.
 *
 * Each review stays up for ROTATE_MS; the sky bar along the top shows the
 * time left, and hovering or focusing the card pauses it.
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
    name: 'Jesse Chapman',
    text: "I messed up and got reckless and 4 point speed charge in washington court house. I was facing jail time and 8 total points. JJ somehow got it down to a no point speed. I'm so thankful and he will be the go to call going forward!",
  },
];

const STORAGE_KEY = 'jw-review-toast-closed';
const SHOW_AFTER_MS = 2200;
const ROTATE_MS = 6000;

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

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('');
}

export default function ReviewToast() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // Storage blocked: still show it, just without remembering a close.
    }
    const t = window.setTimeout(() => setOpen(true), SHOW_AFTER_MS);
    return () => window.clearTimeout(t);
  }, []);

  // The timer restarts for each review and stops while paused; the bar's CSS
  // animation runs on the same clock (and pauses with it).
  useEffect(() => {
    if (!open || paused) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % QUOTES.length), ROTATE_MS);
    return () => window.clearTimeout(t);
  }, [open, paused, index]);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // Ignore: the card simply returns on the next page load.
    }
  };

  const quote = QUOTES[index];

  return (
    <aside
      aria-label="Client reviews"
      aria-hidden={!open}
      inert={!open}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className={`fixed z-40 left-4 bottom-4 right-20 sm:right-auto sm:w-[25rem] motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] ${
        open ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
      }`}
    >
      {/* A second card peeking out behind, so it reads as a stack of reviews. */}
      <div className="absolute inset-x-3 -bottom-1.5 h-full bg-navy-700 ring-1 ring-white/15" aria-hidden="true" />

      <div className="relative overflow-hidden bg-navy-950/95 text-white backdrop-blur-md ring-1 ring-sky/30 shadow-[0_24px_60px_-18px_rgba(0,0,0,0.8),0_0_40px_-12px_rgba(108,180,238,0.45)]">
        {/* Time left on this review. */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-white/10" aria-hidden="true">
          <div
            key={index}
            className="h-full origin-left bg-sky motion-safe:animate-[jw-progress_linear_forwards]"
            style={{ animationDuration: `${ROTATE_MS}ms`, animationPlayState: paused ? 'paused' : 'running' }}
          />
        </div>

        <div className="relative px-4 pt-3.5 pb-2.5 sm:px-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white">
                <GoogleG className="h-4 w-4" />
              </span>
              <div className="min-w-0 leading-tight">
                <p className="flex items-center gap-1.5">
                  <span className="jw-display text-[18px]">5.0</span>
                  <span className="flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-sky text-sky" />
                    ))}
                  </span>
                </p>
                <p className="text-[12px] text-mist truncate">130+ Google reviews</p>
              </div>
            </div>
            <button
              type="button"
              onClick={close}
              className="-m-2 p-2 text-white/55 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
              aria-label="Close reviews"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <figure key={index} className="relative mt-2.5 motion-safe:animate-[jw-fade-in_600ms_cubic-bezier(0.16,1,0.3,1)]">
            <span className="jw-display pointer-events-none absolute -left-1 -top-5 select-none text-[64px] leading-none text-sky/25" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="relative jw-serif italic text-[15px] sm:text-[16px] leading-snug text-white/90 line-clamp-2">
              {quote.text}
            </blockquote>
            <figcaption className="mt-2 flex items-center gap-2 text-[12px] text-mist">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky/15 text-[10px] font-semibold text-sky">
                {initials(quote.name)}
              </span>
              {quote.name}
            </figcaption>
          </figure>

          <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-2.5">
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
                    i === index ? 'w-5 bg-sky' : 'w-1.5 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
            <a
              href="/#reviews"
              onClick={close}
              className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-sky hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
            >
              Read the reviews
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
