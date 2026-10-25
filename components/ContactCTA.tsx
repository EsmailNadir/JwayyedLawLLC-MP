import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ContactCTAProps {
  phoneNumber?: string;
  email?: string;
  address?: string;
  className?: string;
}

/**
 * The close of every inner page, in the same sky band as the home page's
 * closing call: a plain invitation on the left, the number set large on the
 * right with the booking button under it, and the email and office beneath.
 */
export default function ContactCTA({
  phoneNumber = '(614) 285-5482',
  email = 'jwayyedlawllc@outlook.com',
  address = '100 E. Campus View Blvd, Suite 250, Columbus, OH 43235',
  className = '',
}: ContactCTAProps) {
  const tel = `tel:+1${phoneNumber.replace(/\D/g, '')}`;
  return (
    <section
      className={`jw jw-mark jw-mark--navy bg-sky text-navy-950 ${className}`}
      style={{ '--jw-mark-opacity': 0.09 } as React.CSSProperties}
      aria-label="Contact the firm"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-16 sm:py-24 grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="jw-display text-[clamp(2rem,1.3rem+2.6vw,3.5rem)] leading-[1.08]">Talk to an attorney about your case.</p>
          <p className="mt-5 max-w-[40rem] text-[length:var(--step-lead)] leading-snug">
            Every call, voicemail and email is returned within one business day.
          </p>
        </div>
        <div className="lg:col-span-5 lg:justify-self-end flex flex-col gap-5 lg:items-end">
          <a
            href={tel}
            className="jw-display text-[clamp(2.25rem,1.6rem+2.4vw,3.5rem)] leading-none tabular-nums hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy-950"
          >
            {phoneNumber}
          </a>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 min-h-[54px] px-7 bg-navy-950 text-white font-semibold hover:bg-white hover:text-navy-950 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy-950"
          >
            Schedule a consultation
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <p className="text-[length:var(--step-small)] lg:text-right">
            <a href={`mailto:${email}`} className="underline underline-offset-4 hover:text-white transition-colors">
              {email}
            </a>
            <br />
            {address}
          </p>
        </div>
      </div>
    </section>
  );
}
