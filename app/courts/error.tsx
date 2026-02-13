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
    <section className="py-16 bg-white min-h-[50vh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>
        <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
          We couldn&apos;t load this court page. Please try again or return to the courts list.
        </p>
        {process.env.NODE_ENV === 'development' && error?.message && (
          <pre className="text-left text-sm bg-gray-100 p-4 rounded-lg overflow-auto mb-6">
            {error.message}
          </pre>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center bg-accent hover:bg-[#a0622b] text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Try again
          </button>
          <Link
            href="/courts"
            className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
          >
            Back to Ohio Courts
          </Link>
        </div>
      </div>
    </section>
  );
}
