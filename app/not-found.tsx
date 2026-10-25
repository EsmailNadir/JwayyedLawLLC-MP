import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { LinkGrid } from '@/components/practice';

/** The site's 404: the navy band, the way back, and the phone number. */
export default function NotFound() {
  return (
    <>
      <section className="jw jw-mark bg-navy-950 text-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24">
          <p className="jw-enter text-sky font-semibold">Page not found</p>
          <h1 className="jw-enter jw-display mt-4 text-[clamp(2.25rem,1.4rem+3.6vw,4.5rem)] leading-[1.06] max-w-4xl" style={{ '--d': '80ms' } as React.CSSProperties}>
            This page has moved or no longer exists.
          </h1>
          <p className="jw-enter mt-6 max-w-[42rem] text-[length:var(--step-lead)] leading-snug text-white/80" style={{ '--d': '160ms' } as React.CSSProperties}>
            If you need help with a legal matter, the fastest route is a call.
          </p>
          <div className="jw-enter mt-10 flex flex-col sm:flex-row gap-3" style={{ '--d': '240ms' } as React.CSSProperties}>
            <a
              href="tel:+16142855482"
              className="inline-flex items-center justify-center gap-2 min-h-[56px] px-7 bg-sky text-navy-950 font-semibold tabular-nums hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call (614) 285-5482
            </a>
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 min-h-[56px] px-7 border border-white/50 font-semibold hover:bg-white hover:text-navy-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
            >
              Go to the home page
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white text-navy-950 py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <h2 className="jw-display text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)] leading-tight">Where people usually go</h2>
          <LinkGrid
            links={[
              { href: '/ovi-dui-defense', title: 'OVI / DUI defense' },
              { href: '/criminal-defense', title: 'Criminal defense' },
              { href: '/personal-injury', title: 'Personal injury' },
              { href: '/courts', title: 'Ohio court guides' },
              { href: '/services', title: 'All services' },
              { href: '/contact', title: 'Contact the firm' },
            ]}
          />
        </div>
      </section>
    </>
  );
}
