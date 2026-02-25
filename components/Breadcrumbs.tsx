import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generate BreadcrumbList schema markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com'
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com'}${item.href}`
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav className="relative z-[1000] bg-gray-100 py-3 pointer-events-auto" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li className="relative z-[1001]">
              <a
                href="/"
                className="inline-flex items-center gap-1.5 px-2 py-1 -mx-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-200/60 transition-colors min-h-[32px] cursor-pointer pointer-events-auto"
                aria-label="Home"
              >
                <Home className="w-4 h-4" />
                <span className="font-medium font-['Inter',_'Arial',_sans-serif]">Home</span>
              </a>
            </li>
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                {index === items.length - 1 ? (
                  <span className="text-gray-900 font-medium font-['Inter',_'Arial',_sans-serif]" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-orange-500 transition-colors font-['Inter',_'Arial',_sans-serif]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
