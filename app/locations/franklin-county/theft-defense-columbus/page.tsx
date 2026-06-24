import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Columbus Theft & Shoplifting Defense | Jwayyed Law LLC',
  description: 'Theft and shoplifting defense in Columbus, Ohio. R.C. 2913.02, petty theft M1, felony theft. Franklin County Municipal Court. Jwayyed Law LLC. (614) 285-5482.',
  keywords: [
    'Columbus theft lawyer',
    'Columbus shoplifting attorney',
    'theft defense Columbus Ohio',
    'Franklin County theft defense',
    'Columbus Ohio shoplifting defense',
    'petty theft lawyer Columbus',
    'theft charge attorney Columbus',
  ],
  openGraph: {
    title: 'Columbus Theft & Shoplifting Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Theft Defense — Columbus', href: '/locations/franklin-county/theft-defense-columbus' },
];

const faqs = [
  {
    question: 'Where are Columbus theft cases heard?',
    answer: 'Misdemeanor theft and shoplifting charges from Columbus are heard at Franklin County Municipal Court, 375 S. High Street (floors 12–15), (614) 645-8186. Petty theft (under $1,000) is tried as an M1 misdemeanor there. Felony theft ($1,000 or more) is arraigned at Franklin County Municipal Court and then bound over to Franklin County Court of Common Pleas for trial. An attorney can appear at both venues.',
  },
  {
    question: 'What is petty theft in Columbus and what are the penalties?',
    answer: 'Under R.C. 2913.02, petty theft is theft of property or services valued under $1,000 — a first-degree misdemeanor carrying up to 180 days in jail and a $1,000 fine. This is the most common theft charge for Columbus shoplifting incidents. Theft of $1,000–$7,499 is an F5 felony (up to 12 months prison, $2,500 fine). Amounts above $7,500 escalate further through F4, F3, F2, and F1 felonies. The degree is determined by the fair market value of the property at the time of the offense.',
  },
  {
    question: 'Can a Columbus theft charge be dismissed or diverted?',
    answer: 'Many first-time Columbus theft defendants — particularly for low-value shoplifting charges — qualify for diversion or conditional dismissal. Franklin County prosecutor programs typically require restitution, community service, and no new arrests during a probationary period. Successful completion results in dismissal of the charge with no conviction on the record. First-offender diversion is far better than any plea, and our firm pursues it aggressively before recommending any other resolution.',
  },
  {
    question: 'Does a theft conviction in Columbus affect employment?',
    answer: 'Yes. Theft convictions — even first-offense misdemeanor petty theft — are flagged in background checks used by virtually every employer. Retail employment, financial services, healthcare, and government positions often automatically disqualify applicants with theft records. Many professional licensing boards in Ohio treat theft convictions as grounds for investigation or license denial. This is why our firm focuses on diversion and dismissal options before any plea in Columbus theft cases.',
  },
  {
    question: 'Can a Columbus theft conviction be expunged?',
    answer: 'Misdemeanor theft convictions are eligible for expungement under ORC 2953.32 after a 1-year waiting period from final discharge, provided the defendant meets all other eligibility requirements. Felony theft convictions of the F4 or F5 degree may also be eligible after applicable waiting periods. Our firm evaluates expungement eligibility at the outset of every case to inform plea strategy — because a plea that retains expungement eligibility is meaningfully better than one that does not.',
  },
  {
    question: 'What defenses apply to Columbus theft charges?',
    answer: 'Columbus theft defenses include: challenging whether the defendant had the intent to permanently deprive the owner of the property (R.C. 2913.02\'s required mental state); challenging the valuation of the property used to determine the degree of the offense; challenging video or witness identification; examining whether a civil demand settlement was paid and its effect; and Fourth Amendment challenges to any search that produced evidence. Obtaining all surveillance footage, loss prevention reports, and police documentation is the first step.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus theft charge?',
    answer: 'Jwayyed Law LLC provides experienced theft and shoplifting defense in Columbus and throughout Franklin County. Theft convictions affect employment and licensing far longer than the immediate penalties. Our firm knows when a Columbus theft case can be diverted, reduced, or dismissed — and fights for that outcome before any plea is entered. Call (614) 285-5482 to discuss your situation.',
  },
];

export default function ColumbusTheftPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Theft Defense in Columbus", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/theft-defense-columbus"};

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
        title="Columbus Theft / Shoplifting Defense Attorney"
        description="Theft or shoplifting charge in Columbus, Ohio? Jwayyed Law LLC defends petty theft and felony theft at Franklin County Municipal Court. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Theft and Shoplifting Defense in Columbus, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Columbus is Ohio&apos;s largest retail market, with major shopping districts along Easton Town Center, Polaris Fashion Place, Short North, the Continent, and Westland — and retail loss prevention operations at every major Columbus retailer that result in hundreds of theft and shoplifting arrests each year. A theft charge under Ohio Revised Code 2913.02, even for a first-time misdemeanor involving a relatively small-value item, creates a permanent public criminal record accessible to employers, landlords, and professional licensing boards. Jwayyed Law LLC provides experienced{' '}
              <Link href="/criminal-defense/petty-theft" className="text-[#b87333] underline hover:opacity-80">theft and shoplifting defense</Link>{' '}
              for Columbus residents charged in Franklin County Municipal Court. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              to discuss your situation.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Columbus theft arrests occur across a wide range of circumstances — shoplifting from major retailers, theft from employers, theft from vehicles, theft from persons, and property taken by deception. Loss prevention officers at Easton, Polaris, and other Columbus retail areas can detain suspected shoplifters and call Columbus Division of Police to make formal arrests. The charge follows the defendant from the arrest into a Franklin County Municipal Court case that, if not handled correctly, results in a permanent criminal record.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Theft Under R.C. 2913.02 — Degrees and Penalties
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 2913.02 defines theft as knowingly obtaining or exerting control over property or services of another person, either without consent, by deception, threat, or intimidation. The critical element is <em>purposeful deprivation</em> — the prosecution must prove the defendant knowingly took the property with intent to permanently deprive the owner of it. Accidentally taking merchandise, good-faith price disputes, and situations where the defendant did not intend to permanently deprive the owner are defenses to the intent element.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The degree of a Columbus theft charge is determined by the value of the property: theft under $1,000 is petty theft, a first-degree misdemeanor (M1 — up to 180 days jail, $1,000 fine); $1,000–$7,499 is F5 (up to 12 months prison, $2,500 fine); $7,500–$149,999 is F4; $150,000–$749,999 is F3; $750,000–$1,499,999 is F2; and $1,500,000 or more is F1. Certain specific property types trigger enhanced charges regardless of dollar amount — theft of a firearm, a motor vehicle, an elderly person&apos;s property, and certain other categories carry enhanced degrees under R.C. 2913.02(B).
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Franklin County Municipal Court — Columbus Theft Proceedings
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Misdemeanor theft cases from Columbus are processed at Franklin County Municipal Court, 375 S. High Street. For M1 petty theft, arraignment and all subsequent proceedings — pretrial, plea, and sentencing — occur there. For felony theft ($1,000 or more), arraignment occurs at Franklin County Municipal Court but the case is then bound over to Franklin County Court of Common Pleas for trial. Our firm handles both venues and ensures continuity of representation across both courts.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County prosecutors handling Columbus theft cases evaluate diversion eligibility for first-time offenders, particularly for low-value misdemeanor theft. Diversion agreements typically require restitution to the retail victim, community service, and no new arrests. Successful completion results in dismissal of the charge — no conviction, no permanent record. Our firm identifies and pursues diversion availability before any plea is entered.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Defense Strategies for Columbus Theft Cases
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our Columbus theft defense begins with obtaining all available evidence: store surveillance footage (often recorded at multiple angles), loss prevention incident reports, police body-cam footage, and receipts or payment records. We evaluate the quality of any video identification evidence — Columbus retail surveillance footage often provides clear or contested images of the defendant&apos;s identity. We scrutinize the stated value of the property used to determine the degree of the charge, since even a modest reduction in the assessed value can drop a felony to a misdemeanor.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              In cases where the defendant did not intend to permanently deprive the owner — an absent-minded departure from the store, a pricing dispute, or taking an item believed to be abandoned or available — we build the factual defense around the mental state element of R.C. 2913.02. Theft requires purposeful deprivation, not mere negligence. Where the intent element is genuinely in question, pressing for trial or dismissal may be more valuable than any plea offer.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Evidence analysis:</strong> Surveillance footage, loss prevention reports, police documentation reviewed before any hearing</li>
              <li><strong>Diversion and dismissal:</strong> Pursuing first-offender diversion for dismissal without conviction</li>
              <li><strong>Intent challenges:</strong> Evaluating whether the prosecution can prove purposeful deprivation</li>
              <li><strong>Valuation challenges:</strong> Contesting the stated value of property to reduce the degree of offense</li>
              <li><strong>Identification challenges:</strong> Evaluating surveillance footage quality and the basis for the defendant&apos;s identification</li>
              <li><strong>Expungement planning:</strong> Advising on ORC 2953.32 sealing eligibility from the start</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing theft or shoplifting charges in Columbus or anywhere in Franklin County, contact Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>.
              Early action — before a plea is entered and before the record becomes permanent — is when an attorney can make the most difference.
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
