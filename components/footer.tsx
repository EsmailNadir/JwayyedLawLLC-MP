import Link from 'next/link';

const FOOTER_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/criminal-defense', label: 'Criminal Defense' },
  { href: '/ovi-dui-defense', label: 'OVI / DUI' },
  { href: '/personal-injury', label: 'Personal Injury' },
  { href: '/civil', label: 'Civil' },
  { href: '/business', label: 'Business' },
  { href: '/other-services', label: 'Other Services' },
  { href: '/courts', label: 'Courts' },
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
  