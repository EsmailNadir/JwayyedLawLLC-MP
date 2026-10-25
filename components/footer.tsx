import Link from 'next/link';
import Image from 'next/image';
import NCDDBadge from '@/components/NCDDBadge';

const PHONE_DISPLAY = '(614) 285-5482';
const PHONE_TEL = 'tel:+16142855482';
const EMAIL = 'jwayyedlawllc@outlook.com';

/**
 * Every destination from the earlier footers and the old home page's county
 * list is still here: these are load-bearing internal links for local SEO.
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
      { href: '/civil/appeals', label: 'Civil Appeals' },
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
      { href: '/other-services', label: 'Other Services' },
    ],
  },
  {
    heading: 'Counties',
    links: [
      { href: '/locations/franklin-county', label: 'Franklin County' },
      { href: '/locations/delaware-county', label: 'Delaware County' },
      { href: '/locations/butler-county', label: 'Butler County' },
      { href: '/locations/greene-county', label: 'Greene County' },
      { href: '/locations/montgomery-county', label: 'Montgomery County' },
      { href: '/locations/pickaway-county', label: 'Pickaway County' },
      { href: '/locations/athens-county', label: 'Athens County' },
      { href: '/locations/morrow-county', label: 'Morrow County' },
      { href: '/locations/clinton-county', label: 'Clinton County' },
    ],
  },
  {
    heading: 'Firm & Local',
    links: [
      { href: '/our-law-firm/our-attorneys', label: 'Our Attorney' },
      { href: '/our-law-firm/case-results', label: 'Case Results' },
      { href: '/our-law-firm/blog', label: 'Blog' },
      { href: '/our-law-firm/document-templates', label: 'Document Templates' },
      { href: '/courts', label: 'Courts' },
      { href: '/courts/franklin-county', label: 'Franklin County Courts' },
      { href: '/locations/franklin-county/ovi-dui-defense-columbus', label: 'Columbus OVI Attorney' },
      { href: '/locations/franklin-county/ovi-dui-defense-franklin-county-municipal-court', label: 'Franklin County OVI' },
      { href: '/services', label: 'All Services' },
    ],
  },
];

const LINK = 'hover:text-sky hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky';

/**
 * The close of every page: the name first, at full width, in the navy close
 * after the sky call band; then the ways to reach the firm, the link columns,
 * the trust marks and the legal line.
 */
export default function Footer() {
  return (
    <footer className="jw jw-mark bg-navy-950 text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-8">
        <p className="jw-display whitespace-nowrap text-[clamp(3.5rem,15.2vw,13.5rem)] leading-[0.82]" aria-hidden="true">
          Jwayyed Law
        </p>

        <div className="mt-16 sm:mt-20 grid gap-14 lg:grid-cols-12 lg:gap-8">
          <ul className="lg:col-span-5 grid content-start gap-3 text-[length:var(--step-lead)] leading-tight font-medium text-sky">
            <li>
              <a href={PHONE_TEL} className={`tabular-nums ${LINK}`}>
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className={`break-all ${LINK}`}>
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=100+E+Campus+View+Blvd+Suite+250+Columbus+OH+43235"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                100 E. Campus View Blvd, Suite 250, Columbus
              </a>
            </li>
            <li className="text-white/80 text-[length:var(--step-body)] font-normal pt-2">Monday to Friday, 9am to 5pm</li>
          </ul>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10 text-[length:var(--step-small)]">
            {FOOTER_COLUMNS.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                {/* Not a heading element: the nav landmark is already labelled,
                    and extra h2s here would dilute each page's outline. */}
                <div className="font-medium text-mist mb-3">{column.heading}</div>
                <ul className="grid gap-1">
                  {column.links.map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className={`inline-block py-1 text-white/85 ${LINK}`}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Trust marks */}
        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-5 text-[length:var(--step-small)]">
          <a
            href="https://www.bbb.org/us/oh/columbus/profile/attorneys-lawyers/jwayyed-law-llc-0302-70166716/#sealclick"
            target="_blank"
            rel="nofollow noreferrer"
            className={`inline-flex items-center gap-3 font-medium ${LINK}`}
          >
            {/* Remote seal served by BBB; next/image would need a loader for it. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://seal-centralohio.bbb.org/seals/blue-seal-200-42-bbb-70166716.png"
              alt="Jwayyed Law LLC BBB Business Review"
              width={110}
              height={23}
              loading="lazy"
              className="object-contain flex-shrink-0"
            />
            A+ accredited
          </a>
          <NCDDBadge variant="inline" tone="dark" />
          <span className="inline-flex items-center gap-3 font-medium">
            <Image
              src="/assets/jwayyed-law-llc-plaque.png"
              alt="Jwayyed Law LLC, BusinessRate Best of 2026 award winner"
              width={1540}
              height={1900}
              sizes="32px"
              className="h-10 w-auto flex-shrink-0"
            />
            BusinessRate Best of 2026
          </span>
        </div>

        {/* Legal */}
        <div className="mt-14 grid gap-4 text-[length:var(--step-small)] text-white/70 lg:grid-cols-12">
          <div className="lg:col-span-9 grid gap-2">
            <p className="max-w-[90ch]">
              Notice: This website is not to be considered legal advice. Consult with an attorney to receive legal advice.
              Ohio content reflects Ohio law as of 2026. Local court rules and procedures may differ. Laws can change.
            </p>
            <p>
              © 2026 Jwayyed Law LLC (JJ Law Ohio). All rights reserved.{' '}
              <Link href="/privacy" className={`underline underline-offset-4 ${LINK}`}>
                Privacy Policy
              </Link>
            </p>
            <p>
              Picture:{' '}
              <a href="https://commons.wikimedia.org/w/index.php?curid=221770" className={`underline ${LINK}`}>
                Ohio Statehouse
              </a>
              ,{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/" className={`underline ${LINK}`}>
                CC BY-SA 3.0
              </a>
              , via Wikimedia Commons.
            </p>
          </div>
          <div className="lg:col-span-3 lg:text-right">
            <a href="#main-content" className={`underline underline-offset-4 ${LINK}`}>
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
