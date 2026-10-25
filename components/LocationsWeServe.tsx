import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const COUNTIES = [
  { slug: 'franklin-county', name: 'Franklin County', subtitle: 'Columbus & surrounding areas' },
  { slug: 'delaware-county', name: 'Delaware County', subtitle: 'Delaware & surrounding areas' },
  { slug: 'butler-county', name: 'Butler County', subtitle: 'Hamilton, Oxford, West Chester' },
  { slug: 'greene-county', name: 'Greene County', subtitle: 'Fairborn & surrounding areas' },
  { slug: 'montgomery-county', name: 'Montgomery County', subtitle: 'Dayton & surrounding areas' },
  { slug: 'pickaway-county', name: 'Pickaway County', subtitle: 'Circleville & surrounding areas' },
  { slug: 'athens-county', name: 'Athens County', subtitle: 'Athens & surrounding areas' },
  { slug: 'morrow-county', name: 'Morrow County', subtitle: 'Mount Gilead, Cardington & nearby' },
  { slug: 'clinton-county', name: 'Clinton County', subtitle: 'Wilmington & surrounding areas' },
] as const;

type LocationsWeServeProps = {
  /** e.g. "Criminal Defense", "Civil", "Trusts", "Other Services" */
  title: string;
};

export default function LocationsWeServe({ title }: LocationsWeServeProps) {
  return (
    <section className="jw bg-white text-navy-950 py-20 sm:py-24" aria-labelledby="locations-we-serve">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="locations-we-serve" className="jw-display text-[clamp(1.875rem,1.3rem+1.8vw,2.75rem)] leading-tight">
            {title} in these Ohio counties
          </h2>
          <p className="mt-4 text-navy-950/75 max-w-[36ch]">Each county page covers its courts and what to expect locally.</p>
        </div>
        <ul className="lg:col-span-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-px bg-navy-950/10 border border-navy-950/10">
          {COUNTIES.map(({ slug, name, subtitle }) => (
            <li key={slug} className="bg-white">
              <Link
                href={`/locations/${slug}`}
                className="group flex h-full items-start justify-between gap-4 p-5 hover:bg-ice transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-deep"
              >
                <span>
                  <span className="block font-semibold group-hover:text-sky-deep transition-colors">{name}</span>
                  <span className="block mt-0.5 text-[length:var(--step-small)] text-navy-950/65">{subtitle}</span>
                </span>
                <ArrowRight className="mt-1 w-4 h-4 flex-shrink-0 text-sky-deep transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
