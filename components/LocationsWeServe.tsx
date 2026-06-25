import Link from 'next/link';

const COUNTIES = [
  { slug: 'franklin-county', name: 'Franklin County', subtitle: 'Columbus & surrounding areas' },
  { slug: 'delaware-county', name: 'Delaware County', subtitle: 'Delaware & surrounding areas' },
  { slug: 'butler-county', name: 'Butler County', subtitle: 'Hamilton, Oxford, West Chester' },
  { slug: 'greene-county', name: 'Greene County', subtitle: 'Fairborn & surrounding areas' },
  { slug: 'montgomery-county', name: 'Montgomery County', subtitle: 'Dayton & surrounding areas' },
  { slug: 'pickaway-county', name: 'Pickaway County', subtitle: 'Circleville & surrounding areas' },
  { slug: 'athens-county', name: 'Athens County', subtitle: 'Athens & surrounding areas' },
  { slug: 'morrow-county', name: 'Morrow County', subtitle: 'Mount Gilead, Cardington & surrounding areas' },
  { slug: 'clinton-county', name: 'Clinton County', subtitle: 'Wilmington & surrounding areas' },
] as const;

type LocationsWeServeProps = {
  /** e.g. "Criminal Defense", "Civil", "Trusts", "Other Services" */
  title: string;
};

export default function LocationsWeServe({ title }: LocationsWeServeProps) {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mb-2">
          {title} – Locations We Serve
        </h3>
        <p className="font-['Inter',_'Arial',_sans-serif] text-gray-600 text-sm mb-6">
          We serve clients in the following Ohio counties. Click through for court information and local details.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {COUNTIES.map(({ slug, name, subtitle }) => (
            <Link
              key={slug}
              href={`/locations/${slug}`}
              className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-[inset_4px_0_0_#b87333] transition-all font-['Inter',_'Arial',_sans-serif] no-underline group"
            >
              <span className="font-semibold text-gray-900 text-sm group-hover:text-[#b87333] transition-colors">{name}</span>
              <span className="block text-xs text-gray-500 mt-0.5">{subtitle}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
