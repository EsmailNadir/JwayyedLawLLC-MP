import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, Mail, ArrowRight, Star } from 'lucide-react';
import { BTN_PRIMARY, BTN_MD } from '@/components/uiClasses';

const PHONE_DISPLAY = '(614) 285-5482';
const PHONE_TEL = 'tel:+16142855482';
const ADDRESS = '100 E. Campus View Blvd, Suite 250, Columbus, OH 43235';

/**
 * Grouped rather than a single flat list. Every destination from the previous
 * flat footer is still present — they are load-bearing internal links for
 * local SEO — but columns make the block scannable instead of a wall.
 */
const FOOTER_COLUMNS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: 'Criminal & OVI',
    links: [
      { href: '/criminal-defense', label: 'Criminal Defense' },
      { href: '/criminal-defense/domestic-violence', label: 'Domestic Violence' },
      { href: '/criminal-defense/expungement-record-sealing', label: 'Expungement' },
      { href: '/ovi-dui-defense', label: 'OVI / DUI Defense' },
      { href: '/ovi-dui-defense/first-ovi', label: 'First OVI' },
    ],
  },
  {
    heading: 'Injury & Civil',
    links: [
      { href: '/personal-injury', label: 'Personal Injury' },
      { href: '/personal-injury/car-accidents', label: 'Car Accidents' },
      { href: '/personal-injury/slip-and-fall', label: 'Slip & Fall' },
      { href: '/civil', label: 'Civil Litigation' },
      { href: '/civil/breach-of-contract', label: 'Breach of Contract' },
    ],
  },
  {
    heading: 'Business & Estates',
    links: [
      { href: '/business', label: 'Business Law' },
      { href: '/business/llc-formation', label: 'LLC Formation' },
      { href: '/business/contract-drafting-review', label: 'Contract Review' },
      { href: '/trusts', label: 'Trusts' },
      { href: '/trusts/revocable-living-trusts', label: 'Living Trusts' },
      { href: '/other-services/probate', label: 'Probate' },
      { href: '/other-services/estate-planning-wills', label: 'Wills' },
    ],
  },
  {
    heading: 'Firm & Local',
    links: [
      { href: '/our-law-firm/our-attorneys', label: 'Our Team' },
      { href: '/our-law-firm/case-results', label: 'Case Results' },
      { href: '/our-law-firm/blog', label: 'Blog' },
      { href: '/our-law-firm/document-templates', label: 'Document Templates' },
      { href: '/courts/franklin-county', label: 'Franklin County Courts' },
      { href: '/locations/franklin-county/ovi-dui-defense-columbus', label: 'Columbus OVI Attorney' },
      { href: '/locations/franklin-county/ovi-dui-defense-franklin-county-municipal-court', label: 'Franklin County OVI' },
      { href: '/services', label: 'All Services' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="aurora-deep text-white/70 border-t border-copper-500/25">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid gap-10 lg:gap-8 lg:grid-cols-[minmax(0,1.15fr)_repeat(4,minmax(0,1fr))]">
          {/* Brand + contact */}
          <div>
            <Link href="/" aria-label="Jwayyed Law LLC home" className="inline-flex">
              <Image
                src="/assets/jwayyed-logo-light.png"
                alt="Jwayyed Law LLC"
                width={2521}
                height={407}
                sizes="200px"
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/75 max-w-xs">
              Strategic representation across Ohio in criminal defense, OVI/DUI, personal injury, civil, business, and
              estate matters.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-2.5 text-white hover:text-copper-300 transition-colors font-semibold"
                >
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-copper-400 to-copper-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm shadow-copper-600/30">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </span>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/75">
                <MapPin className="w-4 h-4 text-copper-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="leading-relaxed">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/75">
                <Clock className="w-4 h-4 text-copper-400 flex-shrink-0" aria-hidden="true" />
                <span>Mon–Fri · 9:00 AM – 5:00 PM</span>
              </li>
            </ul>

            <Link href="/contact" className={`mt-6 ${BTN_PRIMARY} ${BTN_MD} group`}>
              <Mail className="w-4 h-4" aria-hidden="true" />
              Schedule a Consultation
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              {/* Not a heading element: the nav landmark is already labelled, and
                  extra h2s here would dilute each page's heading outline. */}
              <div className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-copper-300 mb-4">
                {column.heading}
              </div>
              <ul className="space-y-2.5">
                {column.links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/75 hover:text-copper-300 transition-colors leading-snug"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Trust row */}
        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          <a
            href="https://www.bbb.org/us/oh/columbus/profile/attorneys-lawyers/jwayyed-law-llc-0302-70166716/#sealclick"
            target="_blank"
            rel="nofollow noreferrer"
            className="relative glass glass-sheen flex items-center gap-3 px-4 py-3 hover:-translate-y-0.5 transition-transform"
          >
            {/* Remote seal served by BBB; next/image would need a loader for it. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://seal-centralohio.bbb.org/seals/blue-seal-200-42-bbb-70166716.png"
              style={{ border: 0 }}
              alt="Jwayyed Law LLC BBB Business Review"
              width={90}
              height={19}
              className="relative object-contain flex-shrink-0"
            />
            <span className="relative text-xs text-white/80">A+ Accredited Business</span>
          </a>

          <a
            href="https://www.google.com/search?q=Jwayyed+Law+LLC+Columbus+Ohio+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="relative glass glass-sheen flex items-center gap-3 px-4 py-3 hover:-translate-y-0.5 transition-transform"
          >
            <span className="relative flex items-center gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-copper-300 text-copper-300" />
              ))}
            </span>
            <span className="relative text-xs text-white/80">
              <span className="font-semibold text-white">5.0</span> · 100+ Google Reviews
            </span>
          </a>

          <div className="relative glass glass-sheen flex items-center gap-3 px-4 py-3">
            <Image
              src="/assets/jwayyed-law-llc-plaque.png"
              alt="Jwayyed Law LLC — BusinessRate Best of 2026 award winner"
              width={1540}
              height={1900}
              sizes="34px"
              className="relative h-10 w-auto rounded-sm flex-shrink-0"
            />
            <span className="relative text-xs text-white/80">
              <span className="font-semibold text-white">Best of 2026</span> · BusinessRate
            </span>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-10 pt-6 border-t border-white/10 space-y-3 text-center">
          <p className="text-xs leading-relaxed text-white/60 max-w-4xl mx-auto">
            Notice: This website is not to be considered legal advice. Consult with an attorney to receive legal advice.
            Ohio content reflects Ohio law as of 2026. Local court rules and procedures may differ. Laws can change.
          </p>
          <p className="text-xs text-copper-300/70">
            © Copyright 2026 Jwayyed Law LLC (JJ Law Ohio). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
