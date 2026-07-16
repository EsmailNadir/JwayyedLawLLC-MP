import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Franklin County Criminal Defense Attorney | Jwayyed Law LLC',
  description: 'Criminal misdemeanor defense at Franklin County Municipal Court (375 S. High St). Assault, theft, domestic violence, drug possession. (614) 285-5482.',
  keywords: ['Franklin County Municipal Court criminal defense', 'Franklin County Municipal Court lawyer', 'Columbus misdemeanor defense attorney', 'Franklin County Municipal Court misdemeanor', 'criminal defense 375 S High St Columbus'],
  openGraph: {
    title: 'Franklin County Criminal Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Criminal Defense — Franklin County Municipal Court', href: '/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court' },
];

const faqs = [
  {
    question: 'What types of criminal cases does Franklin County Municipal Court handle?',
    answer: 'Franklin County Municipal Court (375 S. High St., Columbus) handles all misdemeanor criminal cases arising in Franklin County, including assault (R.C. 2903.13), domestic violence (R.C. 2919.25), theft and shoplifting (R.C. 2913.02), drug possession (R.C. 2925.11), disorderly conduct (R.C. 2917.11), open container (R.C. 4301.62), criminal trespass (R.C. 2911.21), criminal damaging (R.C. 2909.06), menacing (R.C. 2903.22), and violations of protection orders (R.C. 2919.27). It also handles cases transferred from Franklin County suburb mayor\'s courts when charges exceed a mayor\'s court\'s jurisdiction.',
  },
  {
    question: 'What are the misdemeanor penalties at Franklin County Municipal Court?',
    answer: 'Misdemeanor penalties at Franklin County Municipal Court follow the Ohio Revised Code sentencing structure. First-degree misdemeanors (M1): up to 180 days in jail and fines up to $1,000. Second-degree misdemeanors (M2): up to 90 days and fines up to $750. Third-degree misdemeanors (M3): up to 60 days and fines up to $500. Fourth-degree misdemeanors (M4): up to 30 days and fines up to $250. Minor misdemeanors: no jail time, fines up to $150. The court also has broad sentencing options including probation, community service, treatment programs, and other alternatives to incarceration.',
  },
  {
    question: 'Where is Franklin County Municipal Court located and when does it operate?',
    answer: 'Franklin County Municipal Court is located at 375 S. High Street, Columbus, OH 43215, on floors 12 through 15 of the Franklin County Common Pleas courthouse. The court\'s phone number is (614) 645-8186. The clerk\'s office is open Monday through Friday, 8:00 a.m. to 5:00 p.m. Criminal arraignments are typically held on weekday mornings. Our firm appears regularly at Franklin County Municipal Court and is familiar with the court\'s scheduling and procedures.',
  },
  {
    question: 'What is Intervention in Lieu of Conviction (ILC) at Franklin County Municipal Court?',
    answer: 'Intervention in Lieu of Conviction (ILC) under R.C. 2951.041 is a diversion program available at Franklin County Municipal Court for first-time offenders charged with drug-related offenses or offenses driven by substance use or mental health issues. Upon successful completion of the ILC program — including treatment, drug testing, and any other court conditions — the charge is dismissed without a conviction. ILC eligibility requires prosecutor consent and court approval. Our firm evaluates ILC availability in every drug possession and substance-related misdemeanor case at FCMC.',
  },
  {
    question: 'Can I get a misdemeanor conviction expunged in Franklin County?',
    answer: 'Yes. Most misdemeanor convictions from Franklin County Municipal Court are eligible for expungement under R.C. 2953.32. Waiting periods from final discharge: minor misdemeanors — six months; M4 through M1 misdemeanors — one year. The expanded provisions of H.B. 96 (effective September 30, 2025) increased the number of convictions that can be sealed and reduced barriers to eligibility. OVI convictions and domestic violence convictions are not eligible for expungement under Ohio law. Our firm handles expungement petitions at Franklin County Municipal Court.',
  },
  {
    question: 'How does Franklin County Municipal Court handle domestic violence cases?',
    answer: 'Domestic violence charges at Franklin County Municipal Court are prosecuted by the Columbus City Attorney\'s office (for Columbus arrests) or the Franklin County Prosecutor (for unincorporated Franklin County arrests). Prosecution typically proceeds regardless of whether the alleged victim wishes to proceed. Ohio law also requires the court to inquire about firearms possession and may impose firearm restrictions. A domestic violence conviction permanently triggers the Lautenberg Amendment firearm prohibition under 18 U.S.C. § 922(g)(9). Our firm pursues non-DV resolutions — including disorderly conduct pleas — in appropriate cases to protect clients from these permanent consequences.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Franklin County Municipal Court criminal case?',
    answer: 'Franklin County Municipal Court is Ohio\'s busiest misdemeanor court, processing thousands of criminal cases per year. Cases move quickly, deadlines are strict, and the prosecutors and court have established practices that defense counsel must understand to achieve the best outcomes. Jwayyed Law LLC practices regularly at Franklin County Municipal Court and knows the local prosecutors, judges, and court procedures. Whether the charge is assault, theft, domestic violence, drug possession, or disorderly conduct, we pursue every available avenue — dismissal, diversion, reduction, or suppression — to protect your record. Call (614) 285-5482.',
  },
  {
    question: 'Do I need a lawyer for a minor misdemeanor at Franklin County Municipal Court?',
    answer: 'Even for minor misdemeanor charges, representation is valuable. A minor misdemeanor conviction creates a criminal record that appears on background checks, affects professional licensing, and can be used against you in future proceedings. A defense attorney can often secure dismissal, diversion, or a plea arrangement that avoids a conviction record entirely — outcomes that are far more difficult to achieve without counsel. For any criminal charge at Franklin County Municipal Court, consulting with an attorney before your first court date costs nothing and protects your options.',
  },
];

export default function FCMCCriminalDefensePage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Criminal Defense in Franklin County", "serviceType": "Criminal Defense", "areaServed": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court"};

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
        title="Franklin County Municipal Court Criminal Defense Attorney"
        description="Misdemeanor charges at Franklin County Municipal Court (375 S. High St.)? Assault, theft, domestic violence, drug possession. Jwayyed Law LLC. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Criminal Misdemeanor Defense at Franklin County Municipal Court
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court at 375 S. High Street, Columbus is Ohio&apos;s busiest misdemeanor court — processing tens of thousands of criminal cases each year from Columbus and every Franklin County municipality. Every misdemeanor criminal charge in Franklin County eventually passes through this courthouse, whether filed directly or transferred from a suburb mayor&apos;s court. Assault, domestic violence, theft, shoplifting, drug possession, disorderly conduct, open container, criminal damaging — these charges are handled daily in the courtrooms on floors 12 through 15. A conviction at Franklin County Municipal Court is a real criminal conviction with lasting record consequences. Jwayyed Law LLC provides experienced criminal misdemeanor defense at Franklin County Municipal Court. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              as soon as you receive a summons or are released from custody.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Franklin County Municipal Court — Court Overview
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court is located at 375 S. High Street, Columbus, OH 43215, occupying floors 12 through 15 of the Franklin County courthouse complex. The court&apos;s main number is (614) 645-8186, and the clerk&apos;s office is open Monday through Friday, 8:00 a.m. to 5:00 p.m. The court exercises jurisdiction over all misdemeanor criminal cases arising in Franklin County, including transfers from the thirteen active suburb mayor&apos;s courts (Bexley, Canal Winchester, Dublin, Grove City, Groveport, Hilliard, Obetz, Pickerington, Reynoldsburg, Upper Arlington, Westerville, Whitehall, and Worthington) as well as all cases from Columbus, Grandview Heights, Marble Cliff, and New Albany, which route directly to the Municipal Court.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The court is also the venue for all Administrative License Suspension (ALS) appeals, which must be filed within 30 days of an OVI arrest. Franklin County Municipal Court handles civil cases up to $15,000 and small claims up to $6,000, but the criminal and OVI dockets are the primary focus of our practice at this courthouse.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Criminal Charges We Defend at Franklin County Municipal Court
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Jwayyed Law LLC defends the full range of misdemeanor criminal charges at Franklin County Municipal Court:
            </p>
            <ul className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed space-y-2 list-disc pl-6">
              <li><Link href="/locations/franklin-county/assault-defense-columbus" className="text-[#b87333] underline hover:opacity-80">Assault</Link> (R.C. 2903.13) — M1 misdemeanor with M1 mandatory minimum, felony escalation if victim is protected class</li>
              <li><Link href="/locations/franklin-county/domestic-violence-defense-columbus" className="text-[#b87333] underline hover:opacity-80">Domestic Violence</Link> (R.C. 2919.25) — M1 baseline, permanent Lautenberg Amendment firearm prohibition upon conviction</li>
              <li><Link href="/locations/franklin-county/theft-defense-columbus" className="text-[#b87333] underline hover:opacity-80">Theft and Shoplifting</Link> (R.C. 2913.02) — M1 for amounts up to $1,000, civil demand letters, retail employer consequences</li>
              <li><Link href="/locations/franklin-county/drug-possession-defense-columbus" className="text-[#b87333] underline hover:opacity-80">Drug Possession</Link> (R.C. 2925.11) — misdemeanor amounts, ILC eligibility, Fourth Amendment suppression issues</li>
              <li><Link href="/locations/franklin-county/marijuana-possession-columbus" className="text-[#b87333] underline hover:opacity-80">Marijuana Possession</Link> — above adult-use limits, under-21 possession, weight determination challenges</li>
              <li><Link href="/locations/franklin-county/disorderly-conduct-defense-columbus" className="text-[#b87333] underline hover:opacity-80">Disorderly Conduct</Link> (R.C. 2917.11) — MM baseline, M4 if intoxicated or persistent</li>
              <li><Link href="/locations/franklin-county/open-container-defense-columbus" className="text-[#b87333] underline hover:opacity-80">Open Container</Link> (R.C. 4301.62) — vehicle and public place citations, ORA zone edge cases</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Diversion, ILC, and Alternatives to Conviction at FCMC
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court operates several programs that allow eligible first-time offenders to avoid a permanent criminal conviction. Intervention in Lieu of Conviction (ILC) under R.C. 2951.041 is available for drug-related or substance-driven offenses where the defendant agrees to complete a treatment program. Successful ILC completion results in case dismissal. Pre-trial diversion is separately available through the prosecutor&apos;s office for certain first-time, low-level offenses. Our firm evaluates ILC and diversion eligibility in every criminal case and pursues these alternatives where they serve the client&apos;s interests.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court also operates specialty dockets — including a drug court, mental health docket, and veterans court — for defendants whose criminal conduct is driven by underlying health or service-related issues. These dockets offer intensive supervision and support in exchange for avoiding incarceration. Our firm evaluates specialty docket eligibility and advocates for placement in appropriate cases.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Why Franklin County Municipal Court Cases Require Experienced Counsel
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court processes one of the highest volumes of criminal cases of any court in Ohio. The court moves efficiently — arraignments, pretrial hearings, and trial dates follow tight schedules. Prosecutors at this court are experienced and handle high caseloads; they respond well to defense counsel who have reviewed the case thoroughly and come to negotiations with a clear factual and legal position. Defense attorneys who appear regularly at FCMC understand the specific procedures, docket assignment practices, and how particular judges handle suppression motions, plea negotiations, and sentencing.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>.
              Our firm defends the full range of criminal misdemeanor charges at Franklin County Municipal Court.
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
