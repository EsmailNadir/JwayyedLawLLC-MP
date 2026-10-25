'use client';

import Link from 'next/link';

export default function CourtsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-white text-navy-950 py-16 sm:py-24 min-h-[50vh]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <h1 className="jw-display text-[clamp(1.875rem,1.3rem+2vw,3rem)] leading-[1.08] text-balance mb-4">
            This court page did not load
          </h1>
          <p className="text-navy-950/80 mb-8 leading-relaxed">
            Try again, or go back to the list of Ohio court guides.
          </p>
          {process.env.NODE_ENV === 'development' && error?.message && (
            <pre className="text-left text-sm bg-ice border-l-4 border-sky-deep p-4 overflow-auto mb-8">{error.message}</pre>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center bg-navy-950 hover:bg-sky-deep text-white font-semibold px-6 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-deep focus-visible:ring-offset-2"
            >
              Try again
            </button>
            <Link
              href="/courts"
              className="inline-flex items-center justify-center border-2 border-navy-950/20 text-navy-950 font-semibold px-6 py-3 hover:bg-ice transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-deep"
            >
              Back to Ohio courts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
