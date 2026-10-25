import Link from 'next/link';

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
      {/* Same navy as the PageHero below, so breadcrumb and hero read as one
          band; the trail sits small at its top edge. */}
      <nav className="jw bg-navy-950 text-[length:var(--step-small)]" aria-label="Breadcrumb">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pt-6 sm:pt-8">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-mist">
            <li>
              <Link href="/" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky">
                Home
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-white/30">
                  /
                </span>
                {index === items.length - 1 ? (
                  <span className="text-white" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky">
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
