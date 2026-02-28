import Link from 'next/link';

const items = [
  {
    icon: '⭐',
    label1: 'Best of 2026',
    label2: 'BusinessRate',
    href: '/our-law-firm/about-us#accolades',
  },
  {
    icon: '📚',
    label1: 'OSBA Leadership',
    label2: 'Academy 2023',
    href: '/our-law-firm/about-us#accolades',
  },
  {
    icon: '🏆',
    label1: 'CALI Award',
    label2: 'Recipient',
    href: '/our-law-firm/about-us#accolades',
  },
  {
    icon: '⚖️',
    label1: 'Ohio State Bar',
    label2: 'Association',
    href: '/our-law-firm/about-us#accolades',
  },
];

export default function TrustStrip() {
  return (
    <section
      className="py-6 sm:py-8 border-y border-[#b87333]/20 bg-[#2c2c2c]/95 backdrop-blur-sm"
      aria-label="Recognition and credentials"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="flex items-center gap-3 sm:gap-4 py-3 sm:py-4 px-3 sm:px-4 rounded-lg border border-white/10 hover:border-[#b87333]/30 hover:bg-white/5 transition-colors"
            >
              <span
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-xl rounded-full"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <div className="min-w-0">
                <span className="block text-sm font-semibold text-white leading-tight">
                  {item.label1}
                </span>
                <span className="block text-xs text-gray-400 leading-tight">
                  {item.label2}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
