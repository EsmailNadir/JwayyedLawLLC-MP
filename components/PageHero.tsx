'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import OfficeStatus from '@/components/OfficeStatus';

interface PageHeroProps {
  title: string;
  description: string;
  phoneNumber?: string;
  showCTA?: boolean;
  className?: string;
}

/**
 * The opening of every inner page: a navy field carrying the firm's mark,
 * the page's headline in the display serif, one line saying what the page
 * covers, and the two ways to act. It continues the Breadcrumbs strip above
 * it, which is the same navy, so the two read as one band.
 *
 * The entrance is pure CSS (.jw-enter), so it plays on first paint with no
 * script and holds still under reduced motion.
 */
export default function PageHero({
  title,
  description,
  phoneNumber = '(614) 285-5482',
  showCTA = true,
  className = '',
}: PageHeroProps) {
  const tel = `tel:+1${phoneNumber.replace(/\D/g, '')}`;
  return (
    <section className={`jw jw-mark relative overflow-hidden bg-navy-950 text-white ${className}`}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24">
        <div className="max-w-5xl">
          <h1 className="jw-enter jw-display text-[clamp(2.25rem,1.4rem+3.6vw,4.5rem)] leading-[1.06] text-balance">{title}</h1>
          <p
            className="jw-enter mt-6 max-w-[46rem] text-[length:var(--step-lead)] leading-snug text-white/80 text-pretty"
            style={{ '--d': '90ms' } as React.CSSProperties}
          >
            {description}
          </p>
          {showCTA && (
            <div className="jw-enter mt-10 flex flex-col sm:flex-row sm:items-center gap-3" style={{ '--d': '180ms' } as React.CSSProperties}>
              <a
                href={tel}
                className="group inline-flex items-center justify-center gap-2 min-h-[56px] px-7 bg-sky text-navy-950 font-semibold tabular-nums hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call {phoneNumber}
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 min-h-[56px] px-7 border border-white/50 font-semibold hover:bg-white hover:text-navy-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
              >
                Schedule a consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          )}
          <div className="jw-enter mt-8 min-h-[1.6em]" style={{ '--d': '260ms' } as React.CSSProperties}>
            <OfficeStatus tone="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
