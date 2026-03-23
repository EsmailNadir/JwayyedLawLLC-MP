import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clinton County Court Representation',
  description: 'OVI defense, criminal defense, and civil representation in Clinton County courts including Wilmington Municipal Court and Clinton County Common Pleas.',
  keywords: [
    'Clinton County OVI attorney',
    'Wilmington Municipal Court lawyer',
    'Clinton County criminal defense',
    'Wilmington Ohio OVI attorney',
    'Clinton County DUI attorney',
    'Blanchester criminal defense',
    'Sabina Ohio attorney',
    'Clinton County Common Pleas',
  ],
  openGraph: {
    title: 'Clinton County Court Representation',
    url: 'https://www.jjlawohio.com/courts/clinton-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/courts/clinton-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Clinton County', href: '/courts/clinton-county' },
];

const faqs = [
  {
    question: `What does Wilmington Municipal Court handle in Clinton County?`,
    answer: `Wilmington Municipal Court (69 N. South St, Wilmington, OH 45177) is the primary trial court for misdemeanor criminal cases, OVI and DUI charges, traffic violations, civil claims up to $15,000, small claims, and eviction proceedings in Clinton County. The court also conducts arraignments and preliminary hearings for felony arrests before those cases are bound over to Clinton County Common Pleas Court. If you are charged with an OVI, assault, theft, drug possession, or any other misdemeanor anywhere in Clinton County—whether in Wilmington, Sabina, Blanchester, Clarksville, or the rural townships—Wilmington Municipal Court is where your case will be heard. Appearance at arraignment is required, and having an attorney present at that first hearing protects your rights and helps you understand the full range of options available.`,
  },
  {
    question: `What are the OVI penalties for a first offense in Clinton County?`,
    answer: `Under ORC 4511.19, a first-offense OVI in Clinton County is a first-degree misdemeanor. Mandatory minimum penalties include at least 3 days in jail (or completion of a 3-day driver intervention program as an alternative), a fine of $375 to $1,075, a driver's license suspension of 1 to 3 years, and possible vehicle immobilization for 30 days. If your BAC was 0.17% or higher (a "high test"), the minimum jail time doubles to 6 days. Administrative License Suspension (ALS) takes effect immediately upon arrest under ORC 4511.191 and is separate from any court-imposed suspension—meaning you could face two overlapping suspensions. A skilled OVI defense attorney can challenge the legality of the stop, the field sobriety test administration, and the accuracy of the chemical test to seek dismissal, reduction, or minimized penalties.`,
  },
  {
    question: `How long do I have to appeal an Administrative License Suspension after an OVI arrest in Clinton County?`,
    answer: `You have 30 days from the date of your OVI arrest to file an Administrative License Suspension (ALS) appeal in Wilmington Municipal Court. This 30-day window is set by ORC 4511.197 and is a hard deadline—if you miss it, you lose the right to challenge the ALS in court. The ALS takes effect 30 days after the arrest for those who take the chemical test and fail, or immediately (with a longer suspension) for those who refuse. An ALS appeal argues grounds such as: the officer lacked reasonable suspicion for the stop, the officer failed to properly inform you of ALS consequences, or the test was administered improperly. Winning an ALS appeal can restore your driving privileges while the criminal OVI case is still pending. Contact Jwayyed Law LLC immediately after an OVI arrest in Clinton County to protect your right to drive.`,
  },
  {
    question: `What misdemeanor charges are commonly handled in Wilmington Municipal Court?`,
    answer: `Common misdemeanor charges in Wilmington Municipal Court include OVI (ORC 4511.19), domestic violence (ORC 2919.25, first offense is a first-degree misdemeanor), assault (ORC 2903.13), theft under $1,000 (ORC 2913.02, first-degree misdemeanor), possession of marijuana up to 100 grams (ORC 2925.11, minor misdemeanor), disorderly conduct (ORC 2917.11), criminal damaging (ORC 2909.06), and traffic offenses including driving under suspension (ORC 4510.11) and reckless operation (ORC 4511.20). Ohio Revised Code 2935.26 permits law enforcement to issue citations in lieu of arrest for most misdemeanors other than first-degree misdemeanors. An attorney can often negotiate reduced charges, diversion programs, or community service in lieu of jail time for clients with no prior record.`,
  },
  {
    question: `What is the difference between Wilmington Municipal Court and Clinton County Common Pleas Court?`,
    answer: `Wilmington Municipal Court handles misdemeanors (maximum 180 days jail) and civil cases up to $15,000. Clinton County Common Pleas Court (46 S. South St, Wilmington, OH 45177) handles felony criminal cases (which carry more than one year in prison), civil cases over $15,000, domestic relations matters (divorce, custody), and probate. When a felony arrest occurs in Clinton County, the case starts in Wilmington Municipal Court for arraignment, then is either dismissed, reduced to a misdemeanor, or bound over to Common Pleas Court for grand jury proceedings and trial. OVI can be elevated to a felony (F4 or F3) on a third or fourth offense within 10 years under ORC 4511.19(G), at which point it is prosecuted in Common Pleas Court with prison time possible.`,
  },
  {
    question: `How does an attorney help with a Clinton County OVI case compared to representing myself?`,
    answer: `Self-representation in an OVI case carries serious risks. OVI law is highly technical—it involves constitutional search and seizure issues under the Fourth Amendment, specific NHTSA standards for field sobriety tests, Ohio Administrative Code requirements for breath test instrument calibration and operator certification, and strict timelines for ALS appeals. A single missed deadline or procedural misstep can permanently harm your case. An experienced OVI attorney reviews all discovery materials, identifies weaknesses in the prosecution's evidence, files suppression motions where appropriate, negotiates with the Clinton County prosecutor for reduced charges (such as a "wet reckless" or physical control), and advocates for you at sentencing. The consequences of an OVI conviction—lost license, insurance rate increases, potential job loss, and a permanent criminal record—make professional representation a sound investment.`,
  },
  {
    question: `Am I eligible to have a conviction sealed or expunged in Clinton County?`,
    answer: `Ohio expanded its record-sealing laws significantly through Senate Bill 288 (effective October 2023). Under ORC 2953.32, many misdemeanor convictions become eligible for sealing one year after the offender completes their sentence including probation. Certain offenses are permanently excluded from sealing: OVI convictions, most traffic offenses, domestic violence convictions, and certain sex offenses. If eligible, you file an application in Clinton County Common Pleas Court, which schedules a hearing where the judge weighs your interest in rehabilitation against the state's interest in maintaining records. Sealed records are generally not accessible to private employers or landlords. Jwayyed Law LLC can review your specific Clinton County record, advise whether sealing is available, and handle the application and hearing.`,
  },
  {
    question: `What civil matters does Jwayyed Law LLC handle in Clinton County?`,
    answer: `In addition to OVI and criminal defense, Jwayyed Law LLC handles civil matters in Clinton County including contract disputes, landlord-tenant cases (evictions and security deposit claims under ORC Chapter 5321), personal injury claims, and small claims assistance. Civil cases with claims up to $15,000 are filed in Wilmington Municipal Court; larger claims go to Clinton County Common Pleas Court. We also assist Clinton County clients with business formation—LLCs under ORC Chapter 1706, operating agreements, and business contract drafting—as well as estate planning documents including wills and powers of attorney for Wilmington and surrounding area residents. Whether your matter is a straightforward small claims dispute or complex civil litigation, we bring the same level of dedication and Ohio legal expertise to every case.`,
  },
];

export default function ClintonCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Clinton County Court Representation"
        description="OVI defense, criminal defense, and civil representation in Wilmington Municipal Court and Clinton County Common Pleas Court. Serving Wilmington, Sabina, Blanchester, and all of Clinton County. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Clinton County Court Representation
            </h2>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Clinton County is a rural southwest Ohio county centered on Wilmington, the county seat. Despite its
              smaller size, Clinton County courts handle a full spectrum of legal matters—OVI and DUI charges, misdemeanor
              criminal cases, traffic violations, civil disputes, and more. Wilmington Municipal Court (69 N. South St,
              Wilmington, OH 45177) and Clinton County Common Pleas Court (46 S. South St, Wilmington, OH 45177)
              together serve the legal needs of communities including Wilmington, Sabina, Blanchester, Clarksville,
              Port William, Midland, and Martinsville. Jwayyed Law LLC provides experienced legal representation
              for Clinton County residents and businesses facing these legal challenges.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI defense is one of the most important practice areas we handle in Clinton County. Ohio&apos;s OVI law
              (ORC 4511.19) is among the most litigated statutes in the state because the consequences are severe and
              the process involves multiple stages where constitutional and procedural errors can occur. From the
              initial traffic stop—which must be supported by reasonable articulable suspicion under the Fourth
              Amendment—to field sobriety test administration under NHTSA standardized protocols, to the breath or
              blood test procedure, each step must be done correctly. Our firm reviews body camera footage, police
              reports, breath test calibration records, and officer certification records to build the strongest
              possible defense for every OVI client in Clinton County.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For misdemeanor criminal matters in Clinton County, Ohio Revised Code 2935.26 allows officers to issue
              citations rather than make physical arrests for misdemeanors that are not first-degree misdemeanors.
              However, first-degree misdemeanors—including OVI, first-offense domestic violence, and assault—typically
              result in arrest and arraignment. At arraignment, bail or bond conditions may be set, and defendants
              who appear without counsel risk inadvertently waiving rights or entering pleas they do not fully
              understand. Having an attorney present from the first hearing through sentencing or trial ensures that
              every available defense and mitigation argument is properly presented to Wilmington Municipal Court.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Clinton County residents also come to us for civil legal matters. Whether you are a Wilmington landlord
              seeking to evict a non-paying tenant under ORC Chapter 1923, a small-business owner in Blanchester
              with a contract dispute, or a Sabina resident who was injured in a car accident, Jwayyed Law LLC
              brings Ohio legal expertise and personal attention to every civil case. We handle landlord-tenant
              matters through Wilmington Municipal Court, larger civil claims through Clinton County Common Pleas
              Court, and assist with business formation and estate planning for residents throughout the county.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s 2025 OVI law changes (House Bill 37, effective April 9, 2025) introduced new provisions
              regarding ignition interlock devices and the hard suspension period following OVI arrests. Under the
              updated law, courts may waive the 15-day hard suspension if the defendant agrees to install an ignition
              interlock device, giving defendants more options to maintain limited driving privileges during the
              pendency of their case. Our firm monitors these legislative developments and applies them strategically
              for every Clinton County OVI client.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Courts We Appear In
            </h3>

            <div className="grid md:grid-cols-1 gap-6 mb-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Wilmington Municipal Court
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">69 N. South St, Wilmington, OH 45177</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  OVI &bull; Misdemeanor criminal defense &bull; Traffic violations &bull; Civil claims up to $15,000 &bull; Small claims &bull; Evictions
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Clinton County Common Pleas Court
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">46 S. South St, Wilmington, OH 45177</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  Felony criminal cases &bull; Civil cases over $15,000 &bull; Domestic relations &bull; Probate
                </p>
              </div>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Practice Areas in Clinton County
            </h3>
            <ul className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 space-y-2 leading-relaxed">
              <li><strong>OVI / DUI Defense:</strong> Traffic stop challenges, field sobriety test analysis, ALS appeals under ORC 4511.191 (30-day deadline), license reinstatement</li>
              <li><strong>Misdemeanor Criminal Defense:</strong> Domestic violence (ORC 2919.25), assault (ORC 2903.13), theft (ORC 2913.02), drug offenses (ORC 2925.11)</li>
              <li><strong>Traffic Violations:</strong> Driving under suspension (ORC 4510.11), reckless operation (ORC 4511.20), speeding, and other traffic matters</li>
              <li><strong>Civil Litigation:</strong> Contract disputes, landlord-tenant evictions, security deposit claims (ORC Chapter 5321)</li>
              <li><strong>Personal Injury:</strong> Auto accidents, premises liability, and tort claims in Clinton County</li>
              <li><strong>Business Formation &amp; Estate Planning:</strong> LLCs (ORC Chapter 1706), wills, powers of attorney for Wilmington and surrounding area clients</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Communities We Serve in Clinton County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We serve clients throughout Clinton County including Wilmington (county seat), Sabina, Blanchester,
              Clarksville, Port William, Midland, and Martinsville. For representation in neighboring counties, visit
              our pages for{' '}
              <Link href="/courts/greene-county" className="text-[#b87333] underline hover:opacity-80">Greene County</Link>,{' '}
              <Link href="/courts/montgomery-county" className="text-[#b87333] underline hover:opacity-80">Montgomery County</Link>, and{' '}
              <Link href="/courts/franklin-county" className="text-[#b87333] underline hover:opacity-80">Franklin County</Link>.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Choose Jwayyed Law LLC for Clinton County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Jwayyed Law LLC provides direct, personal representation in every Clinton County case. Our attorney
              understands Wilmington Municipal Court procedures, the Clinton County prosecutor&apos;s approach to
              OVI and criminal cases, and current Ohio law including 2025 OVI amendments. We do not hand cases off
              to associates—when you hire our firm, you work directly with the attorney from the first consultation
              through the final resolution. Call <strong>(614) 285-5482</strong> or contact us online to schedule
              your consultation.
            </p>

            <LocationsWeServe title="Clinton County Legal Services" criminalDisclaimer={true} />

          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
