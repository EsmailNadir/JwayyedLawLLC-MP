import Link from 'next/link';

const FOOTER_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/criminal-defense', label: 'Criminal Defense' },
  { href: '/criminal-defense/domestic-violence', label: 'Domestic Violence' },
  { href: '/criminal-defense/expungement-record-sealing', label: 'Expungement' },
  { href: '/ovi-dui-defense', label: 'OVI / DUI Defense' },
  { href: '/ovi-dui-defense/first-ovi', label: 'First OVI' },
  { href: '/personal-injury', label: 'Personal Injury' },
  { href: '/personal-injury/car-accidents', label: 'Car Accidents' },
  { href: '/personal-injury/slip-and-fall', label: 'Slip & Fall' },
  { href: '/civil', label: 'Civil Litigation' },
  { href: '/civil/landlord-tenant-disputes', label: 'Landlord-Tenant' },
  { href: '/civil/breach-of-contract', label: 'Breach of Contract' },
  { href: '/business', label: 'Business Law' },
  { href: '/business/llc-formation', label: 'LLC Formation' },
  { href: '/business/contract-drafting-review', label: 'Contract Review' },
  { href: '/trusts', label: 'Trusts' },
  { href: '/trusts/revocable-living-trusts', label: 'Living Trusts' },
  { href: '/other-services/probate', label: 'Probate' },
  { href: '/other-services/estate-planning-wills', label: 'Wills' },
  { href: '/our-law-firm/blog', label: 'Blog' },
  { href: '/our-law-firm/document-templates', label: 'Document Templates' },
  { href: '/our-law-firm/case-results', label: 'Case Results' },
  { href: '/our-law-firm/our-attorneys', label: 'Our Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#2c2c2c] text-gray-400 text-center text-xs sm:text-sm px-6 py-6 border-t border-[#b87333]/25">
      <div className="max-w-5xl mx-auto space-y-4">
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          {FOOTER_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-400 hover:text-[#b87333] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="leading-relaxed">
          Notice: This website is not to be considered legal advice. Consult with an attorney to receive legal advice. Ohio content reflects Ohio law as of 2026. Local court rules and procedures may differ. Laws can change.
        </p>
        <p className="text-[#b87333]/70">© Copyright 2026 Jwayyed Law LLC (JJ Law Ohio). All Rights Reserved.</p>
      </div>
    </footer>
  );
}
  