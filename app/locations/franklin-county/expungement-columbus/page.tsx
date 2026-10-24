import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Columbus Expungement Attorney | Jwayyed Law LLC',
  description: 'Seal your criminal record in Columbus. R.C. 2953.32 expungement for misdemeanor and felony convictions. Franklin County Municipal Court. (614) 285-5482.',
  keywords: [
    'Columbus expungement lawyer',
    'Columbus record sealing attorney',
    'expungement Columbus Ohio',
    'Franklin County expungement attorney',
    'Ohio record sealing Columbus',
    'ORC 2953.32 Columbus attorney',
    'Columbus criminal record sealing',
  ],
  openGraph: {
    title: 'Columbus Expungement Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/expungement-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/expungement-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Expungement — Columbus', href: '/locations/franklin-county/expungement-columbus' },
];

const faqs = [
  {
    question: 'What is expungement in Ohio and what does it do?',
    answer: 'Ohio expungement under R.C. 2953.32 is a court order that seals a criminal record from public view. Once sealed, the conviction is removed from public court records, law enforcement databases accessible to the public, and most background check systems. The sealed conviction cannot be disclosed on most job applications, housing applications, or professional license applications. The record is not destroyed — it remains accessible to law enforcement and courts — but for most practical purposes the conviction disappears from your history.',
  },
  {
    question: 'Who is eligible for expungement in Columbus under Ohio law?',
    answer: 'Under R.C. 2953.32 (as amended by HB 96, effective September 30, 2025), most misdemeanor convictions, F3/F4/F5 felony convictions, and minor misdemeanor convictions are eligible for expungement after applicable waiting periods. The applicant must have completed all terms of their sentence. Ineligible offenses include domestic violence (R.C. 2919.25), most traffic violations under chapters 4506–4511, OVI convictions under R.C. 4511.19, first or second-degree felonies generally, sexually oriented offenses requiring registration, and offenses against victims under 13.',
  },
  {
    question: 'What are the waiting periods for expungement in Columbus?',
    answer: 'Ohio expungement waiting periods under R.C. 2953.32: minor misdemeanor — 6 months after final discharge; M1 through M4 misdemeanor — 1 year after final discharge; F4 or F5 felony — 1 year after final discharge; F3 felony — 3 years after final discharge. "Final discharge" means completion of all sentence requirements including probation, payment of all fines and costs, and completion of any ordered treatment. The waiting period runs from final discharge, not from the date of conviction.',
  },
  {
    question: 'Can an OVI or DUI conviction be expunged in Columbus?',
    answer: 'No. OVI convictions under R.C. 4511.19 are specifically listed as ineligible for expungement under Ohio law. An OVI conviction is permanent and cannot be sealed regardless of how much time passes or how clean the rest of your record is. However, if your OVI charge was reduced to reckless operation under R.C. 4511.20 by plea agreement, the reckless operation conviction may be eligible for expungement after the applicable waiting period. This is one reason our firm strongly advocates for reckless operation reductions in OVI cases.',
  },
  {
    question: 'How does the expungement process work in Franklin County?',
    answer: 'The Columbus expungement process begins with filing an application in the court of conviction — Franklin County Municipal Court at 375 S. High Street for misdemeanors, Franklin County Court of Common Pleas for felonies. The application includes the conviction information, proof of eligibility, and a statement of why expungement is in the interest of justice. The prosecutor is notified and may file an objection. The court holds a hearing within 60 days of the application. If granted, the order is sent to the BMV, BCI, and other agencies to seal the records.',
  },
  {
    question: 'Can multiple convictions be expunged at once in Columbus?',
    answer: 'Yes. Ohio law allows filing a single expungement application to seal multiple eligible convictions simultaneously, subject to eligibility requirements for each conviction. Under HB 96 (effective September 30, 2025), Ohio expanded multi-conviction expungement eligibility — persons with a higher number of prior convictions may now qualify who could not before. Our firm evaluates your complete criminal history to identify all eligible convictions and files a comprehensive application where possible.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for Columbus expungement?',
    answer: 'Jwayyed Law LLC handles expungement and record sealing in Franklin County Municipal Court, Franklin County Court of Common Pleas, and other Ohio courts. We evaluate your eligibility under the current R.C. 2953.32 framework (including HB 96 expanded eligibility), prepare the application, represent you at the hearing, and ensure all agencies receive the sealing order. A sealed record opens doors that a visible conviction closes — employment, housing, professional licensing. Call (614) 285-5482 to evaluate your eligibility.',
  },
];

export default function ColumbusExpungementPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Expungement and Record Sealing in Columbus", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/expungement-columbus"};


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Columbus Expungement Attorney — Criminal Record Sealing"
        description="Seal your criminal record in Columbus, Ohio. Jwayyed Law LLC handles expungement petitions at Franklin County Municipal Court and Common Pleas under R.C. 2953.32. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Expungement and Record Sealing in Columbus, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A criminal conviction in Columbus — whether a misdemeanor in Franklin County Municipal Court or a felony in Franklin County Court of Common Pleas — creates a permanent public record that appears in background checks used by employers, landlords, and professional licensing boards. For many Ohio residents, this record is the most lasting consequence of a past arrest: it follows them into every job application, housing search, and licensing review for years or decades. Ohio&apos;s expungement statute, R.C. 2953.32, provides a legal mechanism to seal eligible convictions from public view — effectively removing them from the background check systems that most employers and landlords use. Jwayyed Law LLC handles{' '}
              <Link href="/criminal-defense/expungement-record-sealing" className="text-[#b87333] underline hover:opacity-80">expungement and record sealing</Link>{' '}
              petitions in Franklin County Municipal Court and Franklin County Court of Common Pleas. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              to evaluate your eligibility.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s expungement law was significantly expanded by HB 96, effective September 30, 2025. More people are now eligible than ever before — including persons with multiple prior convictions who previously did not qualify, and persons with F3 felonies that were previously ineligible. If you were told years ago that you were not eligible for expungement, that assessment may be outdated. Our firm re-evaluates eligibility for returning clients and for anyone whose prior assessment predates the HB 96 amendments.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              What Expungement Does — And Does Not Do
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When a Columbus court grants an expungement under R.C. 2953.32, it issues an order sealing the records of the conviction — removing them from the public-access sections of court databases, directing the Bureau of Criminal Identification to seal the record in its statewide database, and directing the BMV to seal any related entries. For most purposes, the conviction then no longer appears in background checks conducted by employers, landlords, and private background check services. Ohio law allows persons with sealed records to answer &ldquo;no&rdquo; to questions about prior convictions on most applications.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              However, expungement is not erasure. Law enforcement agencies, prosecutors, and courts retain access to sealed records for future criminal proceedings. The sealed conviction is also disclosed in applications for employment with law enforcement, federal employment, and certain licensed professions where the state licensing statute requires complete disclosure. Expungement removes a conviction from public view; it does not pretend the conviction never happened for all purposes. Our firm advises every client fully on the scope of what a particular sealed record will and will not affect before filing.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Eligible and Ineligible Offenses for Expungement in Columbus
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Most misdemeanor convictions in Columbus are eligible for expungement under R.C. 2953.32, including: first-degree misdemeanor assault (R.C. 2903.13), petty theft (R.C. 2913.02), disorderly conduct (R.C. 2917.11), drug possession (R.C. 2925.11), driving under suspension, criminal damaging, obstructing official business, and most other misdemeanor offenses. Third, fourth, and fifth-degree felony convictions are also eligible after applicable waiting periods under the HB 96 amendments. Minor misdemeanor convictions are generally eligible after 6 months.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ineligible offenses in Columbus include: OVI convictions under R.C. 4511.19 (not sealable regardless of how long ago); domestic violence convictions under R.C. 2919.25; most traffic offenses classified under chapters 4506–4511 and 4549; first and second-degree felonies generally; sexually oriented offenses with registration requirements; and offenses against victims under 13. When an OVI charge was reduced to reckless operation (R.C. 4511.20) by plea agreement, the reckless operation conviction may be eligible for sealing — this is a meaningful distinction for OVI defendants who negotiated a plea reduction.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              The Expungement Process at Franklin County Municipal Court
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For Columbus misdemeanor convictions, the expungement application is filed at Franklin County Municipal Court, 375 S. High Street. The application includes the case number, conviction information, certification that the waiting period has passed, and a statement of why expungement is in the interest of justice. The Franklin County prosecutor&apos;s office is served with the application and has 60 days to file an objection. Even if the prosecutor objects, the court conducts its own analysis weighing the applicant&apos;s interest in rehabilitation against any interest in maintaining the public record. An attorney can represent you at this hearing and advocate effectively for the granting of the expungement.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For Columbus felony convictions, the application is filed at Franklin County Court of Common Pleas. The process is similar — application, prosecutor notification, 60-day period, hearing. Felony expungements face more scrutiny than misdemeanor expungements, and having an attorney argue on your behalf at the hearing significantly improves the likelihood of a favorable outcome. Once an expungement is granted, our firm ensures that all required notifications go to BCI, the BMV, and any other agencies holding records of the conviction.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Eligibility evaluation:</strong> Complete review of your criminal history under current R.C. 2953.32 eligibility rules, including HB 96 amendments</li>
              <li><strong>Waiting period calculation:</strong> Confirming whether your waiting period has elapsed from final discharge</li>
              <li><strong>Application preparation:</strong> Drafting the expungement application, supporting documents, and statement for the court</li>
              <li><strong>Hearing representation:</strong> Appearing on your behalf before Franklin County Municipal Court or Common Pleas to argue for expungement</li>
              <li><strong>Post-order compliance:</strong> Ensuring BCI, BMV, and all relevant agencies receive and process the sealing order</li>
              <li><strong>Multi-conviction expungements:</strong> Filing comprehensive applications covering all eligible convictions in your history</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have a conviction in Columbus or Franklin County that you want to seal, contact Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>.
              We will evaluate your eligibility under current Ohio law and advise you on the best path forward.
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
