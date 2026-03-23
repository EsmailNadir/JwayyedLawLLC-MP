import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Morrow County Court Representation',
  description: 'Experienced legal representation in Morrow County courts including Morrow County Municipal Court and Common Pleas. OVI defense, criminal defense.',
  keywords: [
    'Morrow County court attorney',
    'OVI lawyer Morrow County Ohio',
    'Morrow County Municipal Court attorney',
    'Mt. Gilead criminal defense attorney',
    'Morrow County DUI lawyer',
    'rural Ohio OVI attorney',
  ],
  openGraph: {
    title: 'Morrow County Court Representation',
    url: 'https://www.jjlawohio.com/courts/morrow-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/courts/morrow-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Morrow County', href: '/courts/morrow-county' },
];

const faqs = [
  {
    question: `What courts handle OVI and criminal cases in Morrow County?`,
    answer: `Morrow County has two primary courts. Morrow County Municipal Court at 60 E. High St, Mt. Gilead, OH 43338 handles misdemeanor criminal cases, OVI/DUI charges, traffic violations, and civil disputes under $15,000. Morrow County Common Pleas Court at 48 E. High St, Mt. Gilead, OH 43338 handles felony criminal cases and larger civil matters. If you are charged with an OVI or misdemeanor in Mt. Gilead, Cardington, Marengo, Edison, or Chesterville, your case will most likely be heard in Morrow County Municipal Court. For a fourth- or fifth-offense felony OVI or any felony charge, the case proceeds through Common Pleas Court. Jwayyed Law LLC represents clients in both courts.`,
  },
  {
    question: `I was stopped for OVI on a rural road in Morrow County. What are my rights?`,
    answer: `Ohio's OVI statute, ORC 4511.19, prohibits operating a vehicle with a BAC of 0.08 or higher, or while impaired by alcohol or drugs. In rural Morrow County, law enforcement may conduct traffic stops based on observed driving behavior, and sobriety checkpoints are permitted under Ohio law. You have the right to remain silent beyond providing your license, registration, and proof of insurance. Field sobriety tests are voluntary, though refusal can still be used as evidence. Refusing a chemical test (breath, blood, or urine) triggers an automatic Administrative License Suspension. You then have 30 days to appeal that suspension in Morrow County Municipal Court. An experienced OVI attorney can challenge the stop, the field sobriety tests, and the chemical test results.`,
  },
  {
    question: `What is the 30-day ALS appeal deadline and how does it affect Morrow County residents?`,
    answer: `When a Morrow County driver is arrested for OVI and refuses or fails a chemical test, the Ohio Bureau of Motor Vehicles automatically suspends that driver's license — this is the Administrative License Suspension (ALS). Ohio law gives you exactly 30 days from the date of arrest to file an appeal of the ALS with Morrow County Municipal Court. In a rural county like Morrow, where public transportation is essentially unavailable and most residents rely entirely on their vehicles for work, family obligations, and daily errands, a license suspension can be economically devastating. Filing a timely ALS appeal and potentially obtaining limited driving privileges while your case is pending is one of the most important early steps in your defense. Contact Jwayyed Law LLC immediately after an OVI arrest.`,
  },
  {
    question: `What misdemeanor charges are common in Morrow County courts?`,
    answer: `Morrow County Municipal Court handles a range of misdemeanor offenses. Common charges include disorderly conduct, domestic violence (often a first-degree misdemeanor under ORC 2919.25), criminal damaging, petty theft, drug paraphernalia possession, and assault. Traffic-related offenses such as reckless operation, driving under suspension, and hit-and-run are also frequently prosecuted. Under Ohio law, a first-degree misdemeanor carries up to 180 days in jail and fines up to $1,000. Under ORC 2935.26, officers may issue a citation in lieu of arrest for minor misdemeanors, but more serious misdemeanors result in a formal arrest and court process. Our firm evaluates every case for potential defenses and works to protect your rights from the first court appearance through resolution.`,
  },
  {
    question: `Can I get my Morrow County conviction expunged?`,
    answer: `Many Morrow County residents are eligible to have past convictions sealed under Ohio's expungement statute, ORC 2953.31. For misdemeanor convictions, you may apply one year after the completion of your sentence. For eligible felony convictions, the waiting period is generally three years. Expungement seals the record from public view, which can significantly improve your prospects for employment, housing, and professional licensing. Not all offenses are eligible — OVI convictions, most violent felonies, and certain sex offenses cannot be expunged. However, a large number of first-time, non-violent offenders qualify. If you have a past conviction in Morrow County and are unsure of your eligibility, Jwayyed Law LLC can review your record and explain your options.`,
  },
  {
    question: `Does Jwayyed Law LLC handle personal injury cases in Morrow County?`,
    answer: `Yes. Personal injury claims arising from car accidents on U.S. Route 42, State Route 61, or other Morrow County roads, as well as slip-and-fall incidents, dog bites, and other injury-causing events, are handled by our firm. Under ORC 2305.10, Ohio has a two-year statute of limitations for most personal injury claims. This means you must file suit within two years of the date of injury or your right to recover compensation is permanently lost. If you were injured in Morrow County, do not delay in speaking with an attorney. We can evaluate your claim, communicate with insurance companies on your behalf, and pursue the compensation you deserve for medical expenses, lost wages, and pain and suffering.`,
  },
  {
    question: `Can Jwayyed Law LLC help me start a small business or farm operation in Morrow County?`,
    answer: `Absolutely. Morrow County has a strong agricultural and small business tradition, and Jwayyed Law LLC can assist with the legal side of forming and operating a business. We help clients form limited liability companies (LLCs) under ORC Chapter 1706, which protects your personal assets from business debts and liabilities. We also assist with general partnerships, sole proprietorships, and other business structures. For agricultural operations, we can assist with land use agreements, contracts for goods and services, and business succession planning. Our firm also handles commercial landlord-tenant disputes and contract review for business clients throughout Morrow County and central Ohio. Call us to discuss your business needs.`,
  },
  {
    question: `Why should I hire a Columbus-area attorney for my Morrow County case?`,
    answer: `Morrow County is approximately 45 minutes north of Columbus, well within the service area of Jwayyed Law LLC. Our firm regularly represents clients in courts throughout central Ohio, and we understand the procedures and expectations of rural Ohio courts including Morrow County Municipal Court and Common Pleas Court. Hiring an experienced attorney — even one based in Columbus — gives you significant advantages: we can challenge the evidence, identify procedural defects in your case, negotiate with prosecutors, and advocate for outcomes such as diversion, dismissal, or reduced charges. For OVI cases in particular, the technical and legal complexities of breath testing, field sobriety tests, and ALS appeals require skilled representation. Contact us at (614) 285-5482 to schedule a consultation.`,
  },
];

export default function MorrowCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Morrow County Court Representation"
        description="Experienced legal representation for OVI, criminal defense, and civil matters in Morrow County courts — including Morrow County Municipal Court and Morrow County Common Pleas Court."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Morrow County Legal Representation
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Morrow County is a rural county located about 45 minutes north of Columbus, bordered by Knox, Delaware,
              Marion, and Richland counties. The county seat of Mt. Gilead serves as the hub for local government and the
              court system. Communities including Cardington, Marengo, Edison, and Chesterville make up a county where
              agriculture, small businesses, and family farms form the backbone of the local economy. Jwayyed Law LLC
              serves Morrow County residents in OVI and DUI defense, misdemeanor criminal defense, personal injury claims,
              civil disputes, and business formation. Whether you are facing a legal challenge or planning a new business
              venture, our firm provides straightforward, experienced legal guidance tailored to your needs.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI charges are a serious concern throughout rural Ohio, including Morrow County. Under{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">
                ORC 4511.19
              </Link>
              , it is illegal to operate a vehicle with a blood alcohol concentration (BAC) of 0.08 or higher, or while
              impaired by alcohol, drugs, or a combination of both. A first-offense OVI in Ohio is a first-degree
              misdemeanor carrying mandatory minimum penalties: a three-day jail term or mandatory driver intervention
              program, fines of $375 to $1,075, and a license suspension of one to three years. For a &ldquo;high-tier&rdquo;
              OVI (BAC of 0.17 or higher), the minimum penalties are steeper. For Morrow County residents who rely on
              their vehicles for work and daily life — with no meaningful public transit alternative — a license suspension
              is particularly devastating. If you are arrested for OVI, you have just 30 days to appeal the Administrative
              License Suspension in Morrow County Municipal Court.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Misdemeanor criminal defense is another important service area for Morrow County clients. Morrow County
              Municipal Court at 60 E. High St, Mt. Gilead handles everything from disorderly conduct and petty theft to
              domestic violence and drug-related offenses. Under ORC 2935.26, minor misdemeanors may result in a citation
              rather than arrest, but first- and second-degree misdemeanors carry up to 180 days in jail and fines up to
              $1,000, and they create a permanent criminal record. Our firm examines every case for constitutional
              violations, evidentiary weaknesses, and opportunities to negotiate reduced charges or pursue dismissal.
              We also handle expungement petitions under ORC 2953.31 for clients who have completed their sentences and
              want a clean record.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Morrow County&rsquo;s agricultural and small business economy creates a steady need for business and civil legal
              services. Jwayyed Law LLC assists with LLC formation under ORC Chapter 1706, protecting business owners from
              personal liability while providing operational flexibility. For personal injury matters — including vehicle
              accidents on U.S. Route 42 or State Route 61, premises liability, or other injury claims — Ohio&rsquo;s
              two-year statute of limitations under ORC 2305.10 applies, and early legal consultation is essential to
              preserve your right to compensation. Our firm also handles contract disputes, landlord-tenant matters, and
              other civil litigation for Morrow County clients.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Morrow County Courts
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Morrow County Municipal Court</h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif]">60 E. High St, Mt. Gilead, OH 43338</p>
                <p className="text-sm text-gray-600 mt-1">Misdemeanors, OVI/DUI, traffic violations, civil claims under $15,000</p>
                <p className="text-sm mt-2">
                  <a
                    href="https://www.google.com/maps?q=60+E+High+St,+Mt+Gilead,+OH+43338"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b87333] underline hover:opacity-80"
                  >
                    Get directions (Google Maps)
                  </a>
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Morrow County Common Pleas Court</h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif]">48 E. High St, Mt. Gilead, OH 43338</p>
                <p className="text-sm text-gray-600 mt-1">Felony cases, major civil disputes, domestic relations, probate</p>
                <p className="text-sm mt-2">
                  <a
                    href="https://www.google.com/maps?q=48+E+High+St,+Mt+Gilead,+OH+43338"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b87333] underline hover:opacity-80"
                  >
                    Get directions (Google Maps)
                  </a>
                </p>
              </div>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Services We Provide in Morrow County
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li>
                <Link
                  href="/locations/morrow-county/ovi-dui-defense-morrow-county-municipal-court"
                  className="text-[#b87333] underline hover:opacity-80"
                >
                  OVI/DUI Defense
                </Link>
                : Challenging breath and blood test results, filing ALS appeals within the 30-day deadline, and pursuing
                the best possible outcome in Morrow County Municipal Court and Common Pleas Court.
              </li>
              <li>
                <Link
                  href="/locations/morrow-county/criminal-misdemeanor-defense-morrow-county-municipal-court"
                  className="text-[#b87333] underline hover:opacity-80"
                >
                  Misdemeanor Criminal Defense
                </Link>
                : Representation for disorderly conduct, domestic violence, petty theft, drug offenses, and other
                misdemeanor charges in Morrow County Municipal Court.
              </li>
              <li>
                <Link
                  href="/locations/morrow-county/personal-injury-morrow-county"
                  className="text-[#b87333] underline hover:opacity-80"
                >
                  Personal Injury
                </Link>
                : Pursuing compensation for accident victims in Morrow County within Ohio&rsquo;s two-year statute of
                limitations under ORC 2305.10.
              </li>
              <li>
                <Link
                  href="/locations/morrow-county/business-formation-llc-morrow-county"
                  className="text-[#b87333] underline hover:opacity-80"
                >
                  Business Formation &amp; LLC
                </Link>
                : LLC formation under ORC Chapter 1706, operating agreements, and commercial contracts for Morrow County
                businesses and agricultural operations.
              </li>
              <li>
                <strong>Expungement &amp; Record Sealing</strong>: Petitioning to seal eligible criminal records under
                ORC 2953.31 so clients can move forward without the burden of a past conviction.
              </li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Choose Jwayyed Law LLC for Morrow County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Jwayyed Law LLC is a Columbus-based law firm that regularly serves clients in central Ohio counties including
              Morrow County. We understand the practical realities of rural life in Ohio — the reliance on personal vehicles,
              the tight-knit community dynamics, and the economic pressures facing farmers and small business owners. Our
              attorney provides thorough, personalized legal representation for Morrow County clients, from an initial
              consultation through court appearances in Mt. Gilead. We are committed to protecting your rights and achieving
              the best possible outcome in your case. Call us at (614) 285-5482 or contact us online to discuss your legal
              matter. We do not handle immigration, juvenile, or probate matters.
            </p>

            <LocationsWeServe title="Morrow County Legal Services" />
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
