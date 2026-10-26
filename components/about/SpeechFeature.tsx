'use client';

import { useRef, useState } from 'react';
import { Play } from 'lucide-react';

/**
 * Attorney Jwayyed's talk at the Ohio Bar Association Leadership Academy,
 * set as a feature: the portrait clip in an offset sky frame on a navy panel,
 * with the talk's opening line beside it. The browser's controls appear only
 * once it plays; before that a single play button sits over the first frame.
 */
export default function SpeechFeature() {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    const v = ref.current;
    if (!v) return;
    setStarted(true);
    v.muted = false;
    void v.play();
  };

  return (
    <div className="jw-mark relative overflow-hidden bg-navy-950 text-white mb-12">
      {/* Soft sky glow behind the clip. */}
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-sky/20 blur-[110px]"
        aria-hidden="true"
      />
      <div className="relative grid items-center gap-10 p-6 sm:p-10 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-14 lg:p-12">
        <figure className="relative mx-auto w-full max-w-[17rem] md:mx-0">
          {/* Offset frame. */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 border border-sky/60" aria-hidden="true" />
          <div className="relative overflow-hidden bg-black shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
            <video
              ref={ref}
              src="/videos/osba-speech.mp4#t=0.1"
              className="block w-full aspect-[9/16] object-cover"
              controls={started}
              playsInline
              preload="metadata"
              onEnded={() => setStarted(false)}
              aria-label="Attorney Jwayyed speaking at the Ohio Bar Association Leadership Academy"
            />
            {!started && (
              <button
                type="button"
                onClick={play}
                className="group absolute inset-0 flex items-end justify-center bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent pb-8 focus-visible:outline-none"
                aria-label="Play the Leadership Academy talk"
              >
                <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-navy-950 shadow-lg transition-transform duration-500 ease-out group-hover:scale-110 group-focus-visible:ring-4 group-focus-visible:ring-sky">
                  <span className="absolute inset-0 rounded-full border border-white/70 motion-safe:animate-ping" aria-hidden="true" />
                  <Play className="relative ml-1 h-6 w-6 fill-navy-950" aria-hidden="true" />
                </span>
              </button>
            )}
          </div>
          <figcaption className="sr-only">Speaking at the Ohio Bar Association Leadership Academy.</figcaption>
        </figure>

        <div className="text-center md:text-left">
          <p className="text-[length:var(--step-small)] font-semibold uppercase tracking-[0.14em] text-sky">
            Ohio Bar Association Leadership Academy
          </p>
          <p className="mt-5 jw-display text-[clamp(1.9rem,1.3rem+2.2vw,3.1rem)] leading-[1.05] text-balance">
            &ldquo;What makes a person a leader?&rdquo;
          </p>
          <p className="mt-5 max-w-[36ch] mx-auto md:mx-0 text-white/80 leading-relaxed">
            Speaking at the Ohio Bar Association Leadership Academy, where he was one of 27 attorneys selected for the 2023
            class.
          </p>
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4 text-[length:var(--step-small)] text-white/70">
            <span className="h-px w-10 bg-sky" aria-hidden="true" />
            Class of 2023
          </div>
        </div>
      </div>
    </div>
  );
}
