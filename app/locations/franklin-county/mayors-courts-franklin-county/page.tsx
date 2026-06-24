import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: "Franklin County Mayor's Courts Defense | Jwayyed Law LLC",
  description: "Mayor's courts in Franklin County suburbs handle OVI, traffic, and misdemeanor charges. Jwayyed Law LLC appears in all Franklin County mayor's courts. (614) 285-5482.",
  keywords: ["Franklin County mayor's court lawyer", "Franklin County mayor's court OVI", "Columbus suburb mayor's court attorney", "Franklin County municipal court suburbs", "Ohio mayor's court defense"],
  openGraph: {
    title: "Franklin County Mayor's Courts Defense | Jwayyed Law LLC",
    url: "https://www.jjlawohio.com/locations/franklin-county/mayors-courts-franklin-county",
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/mayors-courts-franklin-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: "Mayor's Courts — Franklin County", href: '/locations/franklin-county/mayors-courts-franklin-county' },
];

const faqs = [
  {
    question: "What is a mayor's court in Ohio?",
    answer: "Ohio's mayor's courts operate under R.C. Chapter 1905. They are limited-jurisdiction courts presided over by the mayor of a municipality or, more commonly, a licensed attorney appointed as the mayor's court magistrate. Mayor's courts have jurisdiction over minor misdemeanor and unclassified misdemeanor violations of municipal ordinances and state traffic laws that occur within the municipality. They do not have jurisdiction over felony charges or over state criminal misdemeanor charges beyond a narrow scope. Cases beyond a mayor's court's jurisdiction are transferred to Franklin County Municipal Court.",
  },
  {
    question: "What charges are handled at Franklin County mayor's courts?",
    answer: "Franklin County suburb mayor's courts typically handle: minor misdemeanor traffic violations; first-offense OVI citations under R.C. 4511.19 (the arraignment occurs at the mayor's court but OVI cases are usually transferred to Franklin County Municipal Court for trial); minor misdemeanor disorderly conduct; open container violations; minor drug paraphernalia citations; and municipal ordinance violations such as noise complaints, parking offenses, and code violations. If a charge is elevated beyond a minor misdemeanor during proceedings, it must transfer to Franklin County Municipal Court.",
  },
  {
    question: "Does a mayor's court decision have the same legal effect as a Municipal Court decision?",
    answer: "Yes. A conviction entered at a Franklin County suburb mayor's court is a valid Ohio criminal conviction with the same legal weight as a conviction at Franklin County Municipal Court. An OVI conviction from a mayor's court counts as a prior OVI for Ohio's 10-year look-back period. Fines imposed at mayor's court are enforced through the same mechanisms. The primary difference is that appeals from a mayor's court go to the Franklin County Municipal Court (not directly to the Court of Appeals), providing an additional appeal layer.",
  },
  {
    question: "Can I appeal a mayor's court conviction in Franklin County?",
    answer: "Yes. Under R.C. 1905.27, a mayor's court conviction can be appealed to Franklin County Municipal Court, where the case is retried de novo — meaning entirely from scratch, with no deference to the mayor's court's finding. A de novo appeal effectively gives the defendant a second chance to contest the charge at a full Municipal Court proceeding. Our firm files de novo appeals from Franklin County mayor's court convictions and handles the retrial at Franklin County Municipal Court.",
  },
  {
    question: "Which Franklin County suburbs operate active mayor's courts?",
    answer: "As of 2026, the following Franklin County suburbs operate active mayor's courts where Jwayyed Law LLC appears: Bexley, Canal Winchester, Dublin, Grove City, Groveport, Hilliard, Obetz, Pickerington, Reynoldsburg, Upper Arlington, Westerville, Whitehall, and Worthington. Grandview Heights closed its mayor's court on December 31, 2023, and Marble Cliff has no independent court — both route directly to Franklin County Municipal Court. New Albany Mayor's Court is administered by a separate municipality; cases that do not resolve there transfer to Franklin County Municipal Court. Shawnee Hills and Valleyview also have no active mayor's courts.",
  },
  {
    question: "Why hire Jwayyed Law LLC for a Franklin County mayor's court case?",
    answer: "Franklin County suburb mayor's courts move quickly — arraignments and hearings often happen on a set schedule with limited public notice. Having an attorney appear on your behalf means you do not need to take time off work for court dates, and the attorney can evaluate whether transfer to Franklin County Municipal Court or a de novo appeal is strategically advantageous for your case. Jwayyed Law LLC appears in all Franklin County mayor's courts. Call (614) 285-5482.",
  },
];

const mayorsCourts = [
  { suburb: 'Bexley', slug: 'bexley', description: 'Bexley Mayor\'s Court handles OVI, traffic, and misdemeanor matters for this inner-ring Columbus suburb.' },
  { suburb: 'Canal Winchester', slug: 'canal-winchester', description: 'Canal Winchester Mayor\'s Court serves this growing southeastern Franklin County community.' },
  { suburb: 'Dublin', slug: 'dublin', description: 'Dublin Mayor\'s Court serves one of Franklin County\'s largest and most active suburbs, with significant OVI enforcement on U.S. 33 and S.R. 161.' },
  { suburb: 'Grove City', slug: 'grove-city', description: 'Grove City Mayor\'s Court handles traffic and misdemeanor matters along Southwest Boulevard and S.R. 665 corridors.' },
  { suburb: 'Groveport', slug: 'groveport', description: 'Groveport Mayor\'s Court serves this southeastern Franklin County logistics hub near I-270 and Rickenbacker.' },
  { suburb: 'Hilliard', slug: 'hilliard', description: 'Hilliard Mayor\'s Court handles charges arising in this major northwest Franklin County suburb along Cemetery Road and I-270.' },
  { suburb: 'Obetz', slug: 'obetz', description: 'Obetz Mayor\'s Court handles matters for this small south Franklin County municipality near Rickenbacker.' },
  { suburb: 'Pickerington', slug: 'pickerington', description: 'Pickerington Mayor\'s Court serves this eastern Franklin County suburb where I-270 and S.R. 256 meet.' },
  { suburb: 'Reynoldsburg', slug: 'reynoldsburg', description: 'Reynoldsburg Mayor\'s Court handles charges from this active eastern suburb along I-70 and U.S. 40.' },
  { suburb: 'Upper Arlington', slug: 'upper-arlington', description: 'Upper Arlington Mayor\'s Court serves this inner-ring suburb adjacent to OSU with active neighborhood enforcement.' },
  { suburb: 'Westerville', slug: 'westerville', description: 'Westerville Mayor\'s Court handles matters in this north Franklin County suburb along I-270 and S.R. 3.' },
  { suburb: 'Whitehall', slug: 'whitehall', description: 'Whitehall Mayor\'s Court serves this east Columbus suburb along I-270 and Main Street.' },
  { suburb: 'Worthington', slug: 'worthington', description: 'Worthington Mayor\'s Court handles matters for this north Columbus suburb along High Street and U.S. 23.' },
];

export default function FranklinCountyMayorsCourtHubPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Mayor's Court Representation in Franklin County", "serviceType": "Criminal Defense", "areaServed": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/mayors-courts-franklin-county"};

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((f: { question: string; answer: string }) => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': { '@type': 'Answer', 'text': f.answer },
    })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map(
      (item: { label: string; href: string }, idx: number) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': item.label,
        'item': `https://www.jjlawohio.com${item.href}`,
      })
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Franklin County Mayor's Courts — Suburb Criminal Defense"
        description="Charged in a Franklin County suburb mayor's court? Jwayyed Law LLC appears in all 13 active Franklin County mayor's courts for OVI, traffic, and misdemeanor defense. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Franklin County Mayor&apos;s Courts — What They Are and How They Work
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County is home to Columbus and 42 other municipalities — and many of those suburbs operate their own local courts known as mayor&apos;s courts. Under R.C. Chapter 1905, Ohio municipalities with a population under the threshold for a municipal court may establish a mayor&apos;s court to handle minor misdemeanor charges, traffic violations, and local ordinance matters that occur within the municipality. As of 2026, thirteen Franklin County suburbs operate active mayor&apos;s courts where Jwayyed Law LLC appears: Bexley, Canal Winchester, Dublin, Grove City, Groveport, Hilliard, Obetz, Pickerington, Reynoldsburg, Upper Arlington, Westerville, Whitehall, and Worthington. Mayor&apos;s courts are not courts of record and operate with limited jurisdiction — but a conviction entered there has the same legal weight as a Franklin County Municipal Court conviction and counts in Ohio&apos;s criminal history for purposes like OVI look-back periods. Jwayyed Law LLC appears in all thirteen active Franklin County mayor&apos;s courts. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              if you have been cited in any Franklin County suburb.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How Ohio Mayor&apos;s Courts Work
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s mayor&apos;s court system is established by R.C. Chapter 1905. The mayor of a qualifying municipality presides, or — more commonly in Franklin County — the municipality appoints a licensed attorney as a mayor&apos;s court magistrate. Mayor&apos;s courts are limited to jurisdiction over: minor misdemeanor violations of municipal ordinances, minor misdemeanor violations of state statutes (including traffic laws), and first appearances and bail hearings for more serious charges that will be transferred to the appropriate court.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When a Franklin County suburb mayor&apos;s court encounters a charge that exceeds its jurisdiction — a fourth-degree misdemeanor or higher, a charge the defendant contests beyond the mayor&apos;s court&apos;s capacity to try — the case transfers to Franklin County Municipal Court at 375 S. High Street, Columbus. OVI charges (R.C. 4511.19) in particular often start at the local mayor&apos;s court for arraignment and then transfer to Franklin County Municipal Court for trial and disposition.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              De Novo Appeals from Franklin County Mayor&apos;s Courts
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              One important feature of Ohio&apos;s mayor&apos;s court system is the de novo appeal right. Under R.C. 1905.27, any person convicted at a Franklin County mayor&apos;s court has the right to appeal to Franklin County Municipal Court for a completely fresh hearing — the case is retried from scratch, with no weight given to the mayor&apos;s court&apos;s original findings. This means a defendant who accepts a mayor&apos;s court plea or is found guilty can, in some circumstances, appeal and retry the case at the Municipal Court level.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm uses the de novo appeal strategically in Franklin County mayor&apos;s court cases. If additional evidence has emerged, if witnesses have become available, or if the original defense was inadequate, a de novo appeal can be the path to a different outcome. The appeal must be filed promptly after conviction — the deadline under Ohio rules is 30 days — so immediate contact with counsel is important if a mayor&apos;s court conviction has recently occurred.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Franklin County Mayor&apos;s Courts — All Active Suburbs
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              Jwayyed Law LLC appears in all thirteen active Franklin County mayor&apos;s courts. Select your suburb for specific defense information:
            </p>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {mayorsCourts.map(({ suburb, slug, description }) => (
                <div key={slug} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-bold text-gray-900 mb-2">
                    <Link href={`/locations/franklin-county/mayors-court-${slug}`} className="text-[#b87333] hover:opacity-80">
                      {suburb} Mayor&apos;s Court
                    </Link>
                  </h4>
                  <p className="font-['Inter',_'Arial',_sans-serif] text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Suburbs Routing Directly to Franklin County Municipal Court
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Not all Franklin County suburbs operate active mayor&apos;s courts. Grandview Heights closed its mayor&apos;s court effective December 31, 2023, and Marble Cliff has never operated an independent court. Residents of these two communities who are cited for OVI, traffic offenses, or misdemeanor charges within those municipality boundaries will have their cases heard at Franklin County Municipal Court, 375 S. High Street, Columbus, OH 43215. Our firm defends{' '}
              <Link href="/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court" className="text-[#b87333] underline hover:opacity-80">criminal and misdemeanor cases at Franklin County Municipal Court</Link>{' '}
              as well as at every suburb mayor&apos;s court.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>.
              Our firm appears in every Franklin County mayor&apos;s court — find out how we can help with your charge.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
