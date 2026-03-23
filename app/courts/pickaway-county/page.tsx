import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Pickaway County Court Representation',
  description: 'Experienced legal representation in Pickaway County courts including Circleville Municipal Court and Common Pleas. OVI defense, criminal defense.',
  keywords: [
    'Pickaway County court attorney',
    'OVI lawyer Pickaway County Ohio',
    'Circleville Municipal Court attorney',
    'Pickaway County criminal defense attorney',
    'Circleville DUI lawyer',
    'U.S. 23 OVI attorney',
  ],
  openGraph: {
    title: 'Pickaway County Court Representation',
    url: 'https://www.jjlawohio.com/courts/pickaway-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/courts/pickaway-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Pickaway County', href: '/courts/pickaway-county' },
];

const faqs = [
  {
    question: `What courts handle OVI and criminal cases in Pickaway County?`,
    answer: `Pickaway County has two main courts. Circleville Municipal Court at 141 S. Court St, Circleville, OH 43113 handles misdemeanor criminal cases, OVI/DUI charges, traffic violations, and civil disputes under $15,000. Pickaway County Common Pleas Court at 207 S. Court St, Circleville, OH 43113 handles felony criminal cases, major civil disputes, domestic relations, and probate matters. If you receive an OVI or misdemeanor charge in Circleville, Ashville, Commercial Point, South Bloomfield, Williamsport, Kingston, or Tarlton, your case will generally begin in Circleville Municipal Court. Felony charges proceed through Common Pleas. Jwayyed Law LLC represents clients in both Pickaway County courts.`,
  },
  {
    question: `I was stopped for OVI on U.S. 23 in Pickaway County — what should I do?`,
    answer: `U.S. Route 23 is one of the most heavily traveled corridors in Pickaway County, and law enforcement agencies patrol it regularly for OVI offenses. If you were arrested on U.S. 23 or elsewhere in Pickaway County, the most important step is to contact an OVI defense attorney immediately. Under ORC 4511.19, a first-offense OVI is a first-degree misdemeanor with mandatory minimum penalties including fines of $375–$1,075, a license suspension of one to three years, and either three days in jail or a mandatory driver intervention program. You also have only 30 days from your arrest to appeal the Administrative License Suspension in Circleville Municipal Court. Missing that window forfeits your right to challenge the suspension. Call Jwayyed Law LLC at (614) 285-5482 as soon as possible.`,
  },
  {
    question: `What is the ALS appeal and why is the 30-day deadline so important in Pickaway County?`,
    answer: `An Administrative License Suspension (ALS) is an automatic suspension of your Ohio driver's license that occurs at the time of an OVI arrest if you refuse or fail a chemical test (breath, blood, or urine). Ohio law gives you exactly 30 days from the arrest date to file an ALS appeal with Circleville Municipal Court. If you miss this deadline, the suspension becomes final and cannot be challenged through the appeal process. Given that Pickaway County is a mix of rural and suburban areas where most residents depend on their vehicles, losing your driving privileges can affect your employment, your family's daily needs, and your ability to appear in court. A successful ALS appeal can restore limited or full driving privileges while your underlying OVI case is still pending.`,
  },
  {
    question: `What misdemeanor charges are commonly handled in Circleville Municipal Court?`,
    answer: `Circleville Municipal Court regularly handles a broad range of misdemeanor offenses including disorderly conduct, domestic violence, petty theft, criminal damaging, drug paraphernalia possession, assault, and driving-related offenses such as driving under suspension and reckless operation. The Pickaway County Pumpkin Show, held annually in Circleville and drawing hundreds of thousands of visitors, sometimes results in a spike in disorderly conduct, underage alcohol consumption, and related charges during the festival period. Under Ohio law, a first-degree misdemeanor carries up to 180 days in jail and fines up to $1,000. Our firm evaluates every case — whether a routine traffic matter or a more serious charge — for opportunities to challenge the evidence, negotiate favorable outcomes, or pursue dismissal.`,
  },
  {
    question: `Can I get a Pickaway County conviction expunged from my record?`,
    answer: `Many Pickaway County residents are eligible for expungement (record sealing) under ORC 2953.31. For misdemeanor convictions, you may petition the court one year after your sentence is complete. For eligible felony convictions, the waiting period is generally three years. Expungement seals your record from most public databases, which can make a significant difference in employment, housing, and professional licensing applications. OVI convictions, most domestic violence convictions, and certain violent offenses are not eligible for sealing. However, a wide range of first-time and non-violent convictions can be expunged. If you have a prior conviction in Pickaway County and want to understand your options, Jwayyed Law LLC can assess your eligibility and file the petition in Pickaway County Common Pleas Court.`,
  },
  {
    question: `Does Jwayyed Law LLC handle personal injury cases in Pickaway County?`,
    answer: `Yes. Personal injury claims arising from car accidents on U.S. Route 23, State Route 56, or other Pickaway County roads are an important part of our practice. We also handle premises liability claims, dog bite injuries, and other personal injury matters throughout Pickaway County. Ohio's statute of limitations for personal injury claims is two years under ORC 2305.10, meaning you must file your lawsuit within two years of the injury or lose your right to recover. If you were injured in Pickaway County, contact Jwayyed Law LLC promptly to protect your claim. We can investigate the accident, gather evidence, communicate with insurance carriers, and pursue compensation for your medical bills, lost wages, and pain and suffering.`,
  },
  {
    question: `Can Jwayyed Law LLC help with business formation in Pickaway County?`,
    answer: `Yes. Pickaway County's growing suburban communities along the U.S. 23 corridor — including Commercial Point and South Bloomfield — and its rural towns have an active small business community. Jwayyed Law LLC assists with LLC formation under ORC Chapter 1706, which provides business owners with personal liability protection and significant operational flexibility. We draft Articles of Organization, Operating Agreements, and can advise on the choice of entity best suited to your goals. We also handle commercial contracts, landlord-tenant disputes for business owners, and general business legal matters. Whether you are starting a new venture in Circleville or expanding an existing business in Pickaway County, our firm can provide the legal foundation you need to succeed.`,
  },
  {
    question: `Why hire Jwayyed Law LLC for a Pickaway County legal matter?`,
    answer: `Pickaway County is approximately 30–40 minutes south of Columbus, and Jwayyed Law LLC regularly serves clients throughout central Ohio including Pickaway County. Our attorney understands Ohio criminal law, OVI defense, civil litigation, and business law, and brings that knowledge to bear in Circleville Municipal Court and Pickaway County Common Pleas Court. We are committed to clear communication, thorough preparation, and aggressive advocacy for our clients. For OVI and criminal matters, the stakes are high — a conviction can affect your career, your family, and your future. For civil and business matters, the right legal guidance can mean the difference between a favorable outcome and a costly mistake. Contact us at (614) 285-5482 or use our online form to schedule a consultation.`,
  },
];

export default function PickawayCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Pickaway County Court Representation"
        description="Experienced legal representation for OVI, criminal defense, and civil matters in Pickaway County courts — including Circleville Municipal Court and Pickaway County Common Pleas Court."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Pickaway County Legal Representation
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Pickaway County lies just 30 to 40 minutes south of Columbus along the U.S. Route 23 corridor, making it
              one of the fastest-growing counties in central Ohio. The county seat of Circleville — famous for the annual
              Pumpkin Show — anchors a county that blends rural farmland with increasingly suburban communities such as
              Commercial Point, South Bloomfield, and Ashville. Residents of Circleville, Kingston, Tarlton, Williamsport,
              and surrounding communities face the same legal challenges as people anywhere: OVI and traffic charges,
              misdemeanor offenses, personal injury claims, and the need to form and protect small businesses. Jwayyed Law
              LLC is committed to providing experienced, client-focused legal representation throughout Pickaway County.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI defense is one of the most critical services we offer Pickaway County clients. Under{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">
                ORC 4511.19
              </Link>
              , Ohio prohibits operating a vehicle with a BAC of 0.08 or higher or while impaired by alcohol, controlled
              substances, or other drugs. U.S. Route 23, which runs north-south through Pickaway County connecting
              Columbus to Chillicothe, is actively patrolled, and OVI arrests along this corridor are common. A first
              OVI conviction in Ohio carries mandatory minimum penalties: three days in jail or a driver intervention
              program, fines of $375 to $1,075, and a license suspension of one to three years. High-tier OVI
              (BAC 0.17 or above) triggers higher mandatory minimums. Upon arrest, if you refuse or fail a chemical
              test, your license is automatically suspended, and you have only 30 days to appeal that suspension in
              Circleville Municipal Court.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Misdemeanor criminal defense is another major area of representation in Pickaway County. Circleville
              Municipal Court at 141 S. Court St handles charges ranging from disorderly conduct and petty theft to
              domestic violence and drug-related offenses. The county&rsquo;s Pumpkin Show, one of the largest free street
              festivals in the United States, can generate additional misdemeanor charges each October. Under Ohio law,
              first-degree misdemeanors (ORC 2929.24) carry penalties up to 180 days in jail and $1,000 in fines. A
              conviction creates a permanent record that can follow you in employment, housing, and licensing contexts.
              Our firm investigates each case thoroughly, challenges the evidence, and pursues every available avenue
              to achieve a dismissal, reduction, or diversion for our clients.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Civil and business legal needs are equally important for Pickaway County residents and entrepreneurs.
              Personal injury claims from accidents on U.S. 23 or county roads must be filed within Ohio&rsquo;s two-year
              statute of limitations under ORC 2305.10 — delaying contact with an attorney puts your claim at risk.
              For business owners and entrepreneurs along the U.S. 23 growth corridor, Jwayyed Law LLC provides LLC
              formation services under ORC Chapter 1706, commercial contract drafting, and landlord-tenant dispute
              resolution. Whether you are a lifelong Pickaway County resident or a Columbus-area resident with a legal
              matter in Circleville, our firm is ready to help.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Pickaway County Courts
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Circleville Municipal Court</h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif]">141 S. Court St, Circleville, OH 43113</p>
                <p className="text-sm text-gray-600 mt-1">Misdemeanors, OVI/DUI, traffic violations, civil claims under $15,000</p>
                <p className="text-sm mt-2">
                  <a
                    href="https://www.google.com/maps?q=141+S+Court+St,+Circleville,+OH+43113"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b87333] underline hover:opacity-80"
                  >
                    Get directions (Google Maps)
                  </a>
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Pickaway County Common Pleas Court</h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif]">207 S. Court St, Circleville, OH 43113</p>
                <p className="text-sm text-gray-600 mt-1">Felony cases, major civil disputes, domestic relations, probate</p>
                <p className="text-sm mt-2">
                  <a
                    href="https://www.google.com/maps?q=207+S+Court+St,+Circleville,+OH+43113"
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
              Services We Provide in Pickaway County
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li>
                <Link
                  href="/locations/pickaway-county/ovi-dui-defense-circleville-municipal-court"
                  className="text-[#b87333] underline hover:opacity-80"
                >
                  OVI/DUI Defense
                </Link>
                : Challenging stops, field sobriety tests, and chemical test results; filing ALS appeals within the
                30-day deadline; and pursuing the best possible outcome in Circleville Municipal Court and Pickaway
                County Common Pleas Court.
              </li>
              <li>
                <Link
                  href="/locations/pickaway-county/criminal-misdemeanor-defense-circleville-municipal-court"
                  className="text-[#b87333] underline hover:opacity-80"
                >
                  Misdemeanor Criminal Defense
                </Link>
                : Representation for disorderly conduct, domestic violence, petty theft, drug offenses, and other
                misdemeanor charges in Circleville Municipal Court.
              </li>
              <li>
                <Link
                  href="/locations/pickaway-county/personal-injury-pickaway-county"
                  className="text-[#b87333] underline hover:opacity-80"
                >
                  Personal Injury
                </Link>
                : Pursuing compensation for car accident victims and injury claimants in Pickaway County within Ohio&rsquo;s
                two-year statute of limitations under ORC 2305.10.
              </li>
              <li>
                <Link
                  href="/locations/pickaway-county/business-formation-llc-pickaway-county"
                  className="text-[#b87333] underline hover:opacity-80"
                >
                  Business Formation &amp; LLC
                </Link>
                : LLC formation under ORC Chapter 1706, operating agreements, and commercial contracts for Pickaway
                County businesses along the U.S. 23 corridor and throughout the county.
              </li>
              <li>
                <strong>Expungement &amp; Record Sealing</strong>: Petitioning to seal eligible criminal records under
                ORC 2953.31 so clients can move forward without the burden of a past conviction.
              </li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Choose Jwayyed Law LLC for Pickaway County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Jwayyed Law LLC is based in Columbus and regularly serves clients throughout central and southern Ohio,
              including Pickaway County. We are familiar with the local court environment in Circleville, the legal
              landscape of U.S. Route 23 OVI enforcement, and the needs of Pickaway County&rsquo;s growing community.
              Our attorney provides clear communication, diligent preparation, and strong advocacy at every stage of
              your case. Whether you are facing an OVI charge, a misdemeanor, a civil dispute, or a business legal
              matter, we are here to help. Contact us at (614) 285-5482 or reach out online to schedule a consultation.
              We do not handle immigration, juvenile, or probate matters.
            </p>

            <LocationsWeServe title="Pickaway County Legal Services" />
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
