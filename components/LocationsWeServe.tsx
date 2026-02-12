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
  /** When true, adds note that we do not handle criminal matters in Franklin County. */
  criminalDisclaimer?: boolean;
};

export default function LocationsWeServe({ title, criminalDisclaimer }: LocationsWeServeProps) {
  return (
    <>
      <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
        {title} – Locations We Serve
      </h3>
      <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
        We serve clients in the following Ohio counties. Each county has its own page; click through for court information and local details.
        {criminalDisclaimer && ' (We do not handle criminal matters in Franklin County due to a conflict—see Franklin County for civil, business, and estate planning.)'}
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {COUNTIES.map(({ slug, name, subtitle }) => (
          <Link
            key={slug}
            href={`/courts/${slug}`}
            className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]"
          >
            <span className="font-semibold text-gray-900">{name}</span>
            <span className="block text-sm text-gray-600 mt-1">{subtitle}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
