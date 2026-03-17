import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Montgomery County Court Representation | OVI, Criminal & Civil Attorney | Jwayyed Law LLC',
  description: 'OVI defense, criminal defense, and civil representation in Montgomery County courts including Dayton Municipal Court and Kettering Municipal Court. Serving Dayton, Kettering, Huber Heights, Miamisburg & more. Call (614) 285-5482.',
  keywords: [
    'Montgomery County OVI attorney',
    'Dayton Municipal Court lawyer',
    'Kettering Municipal Court attorney',
    'Montgomery County criminal defense',
    'Dayton OVI attorney',
    'Kettering DUI attorney',
    'Huber Heights criminal defense',
    'Montgomery County Common Pleas',
  ],
  openGraph: {
    title: 'Montgomery County Court Representation | OVI, Criminal & Civil | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/montgomery-county',
  },
  alternates: { canonical: '/courts/montgomery-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Montgomery County', href: '/courts/montgomery-county' },
];

const faqs = [
  {
    question: `What is the difference between Dayton Municipal Court and Kettering Municipal Court in Montgomery County?`,
    answer: `Montgomery County has multiple municipal courts serving different jurisdictions. Dayton Municipal Court (301 W. Third St, Dayton, OH 45402) is the largest and handles misdemeanor criminal cases, OVI, traffic violations, civil claims up to $15,000, small claims, and evictions arising within the City of Dayton and certain surrounding jurisdictions. Kettering Municipal Court (2325 Wilmington Pike, Kettering, OH 45420) serves the City of Kettering and surrounding communities. If you are charged with an OVI or misdemeanor in Kettering, your case goes to Kettering Municipal Court—not Dayton. Huber Heights has its own Mayor's Court for minor violations. Filing in the wrong court, or not knowing which court has jurisdiction, can create procedural complications. Jwayyed Law LLC appears in both Dayton Municipal Court and Kettering Municipal Court and can immediately identify the correct venue for your case.`,
  },
  {
    question: `What are the OVI penalties in Montgomery County courts?`,
    answer: `OVI in Ohio is governed by ORC 4511.19. A first-offense OVI in Montgomery County is a first-degree misdemeanor carrying a minimum 3 days in jail (or a 3-day driver intervention program), a fine between $375 and $1,075, a license suspension of 1 to 3 years, and possible vehicle immobilization. If BAC was 0.17% or higher (high tier), the minimum jail time doubles to 6 days. A second OVI within 10 years carries a minimum 10-day jail sentence, higher fines, and mandatory 90-day vehicle immobilization. Under House Bill 37 (effective April 9, 2025), courts have discretion to waive the 15-day hard suspension if the defendant agrees to install an ignition interlock device, and oral fluid testing (saliva) is now an authorized chemical test method alongside breath and blood testing. The 2025 changes also increased minimum fines for repeat offenders.`,
  },
  {
    question: `How does the ALS appeal process work in Montgomery County?`,
    answer: `An Administrative License Suspension (ALS) is imposed under ORC 4511.191 immediately upon an OVI arrest when the driver either refuses a chemical test or tests at or above 0.08% BAC (0.04% for commercial drivers; 0.02% for drivers under 21). You have exactly 30 days from the date of arrest to file an ALS appeal in the appropriate court—either Dayton Municipal Court or Kettering Municipal Court depending on where the arrest occurred. The appeal is separate from the criminal OVI case and challenges the suspension on legal and procedural grounds: lack of reasonable suspicion for the initial stop, failure to properly advise the driver of ALS consequences under the implied consent law, improper test administration, or officer certification issues. Winning an ALS appeal can restore your driving privileges before the criminal case is resolved. This deadline cannot be waived or extended—call an attorney immediately after any OVI arrest in Montgomery County.`,
  },
  {
    question: `What types of misdemeanor cases does Dayton Municipal Court handle?`,
    answer: `Dayton Municipal Court handles the full range of first, second, third, and fourth degree misdemeanors, as well as minor misdemeanors, for offenses arising within its jurisdiction. Common cases include OVI (ORC 4511.19), domestic violence (ORC 2919.25), assault (ORC 2903.13), theft under $1,000 (ORC 2913.02), drug possession (ORC 2925.11), disorderly conduct (ORC 2917.11), criminal damaging (ORC 2909.06), driving under suspension (ORC 4510.11), and reckless operation (ORC 4511.20). Under ORC 2929.24, the maximum jail sentence for a first-degree misdemeanor is 180 days; maximum fine is $1,000. Dayton Municipal Court also has a specialty Drug Court docket for eligible defendants with substance abuse issues, which can result in treatment-oriented outcomes rather than traditional incarceration. An attorney can evaluate whether diversion programs or specialty courts are available for your situation.`,
  },
  {
    question: `What felony cases are handled in Montgomery County Common Pleas Court?`,
    answer: `Montgomery County Common Pleas Court (41 N. Perry St, Dayton, OH 45422) handles all felony criminal matters for offenses occurring within Montgomery County. Common felony cases include drug trafficking (ORC 2925.03), felonious assault (ORC 2903.11), aggravated robbery (ORC 2911.01), burglary (ORC 2911.12), and felony OVI (third offense within 10 years = F4; fourth offense = F3 under ORC 4511.19(G)). Felony cases begin in municipal court for arraignment, then are bound over or indicted. Felony sentences range from 6 months for an F5 to 11 years or more for an F1, plus post-release control supervision. Montgomery County has a Drug Court, Mental Health Court, and Veterans Treatment Court in Common Pleas Court—specialty dockets that provide alternative sentencing for qualifying defendants. Experienced representation is critical when felony charges are involved given the severity of potential consequences.`,
  },
  {
    question: `How does Kettering Municipal Court handle OVI and criminal cases differently from Dayton Municipal Court?`,
    answer: `Kettering Municipal Court and Dayton Municipal Court are entirely separate courts with different judges, court staff, prosecutors (the Kettering City Prosecutor versus the Dayton City Prosecutor), and local procedures. While both apply the same Ohio Revised Code provisions, each court's culture—how judges approach sentencing, what plea offers prosecutors typically extend, how pretrial conferences are conducted—differs based on local practice. Kettering Municipal Court serves a suburban community and its docket may move at a different pace than Dayton's higher-volume urban court. If your OVI or criminal charge occurred in Kettering, Centerville, Oakwood, or another Kettering jurisdiction community, your case is in Kettering Municipal Court. Having an attorney familiar with Kettering's specific court procedures and prosecutor tendencies provides a meaningful advantage over one who only knows the Dayton courthouse.`,
  },
  {
    question: `Can a Montgomery County OVI or criminal conviction be sealed or expunged?`,
    answer: `Ohio's expanded record-sealing law (Senate Bill 288, effective October 2023) permits sealing of many misdemeanor convictions under ORC 2953.32, with a typical waiting period of one year after completing the sentence including any probation. However, certain categories are permanently excluded: OVI convictions (ORC 2953.36), domestic violence convictions, most traffic offenses, and specified sex offenses. If your conviction qualifies, the sealing application is filed in the court of conviction—Dayton Municipal Court, Kettering Municipal Court, or Montgomery County Common Pleas Court, depending on the offense and court level. A hearing is scheduled; the judge weighs your rehabilitation against the state's interest. Once sealed, the conviction is generally not visible to private employers or landlords. Jwayyed Law LLC evaluates eligibility and handles the full sealing process for Montgomery County clients.`,
  },
  {
    question: `Why hire Jwayyed Law LLC for a Montgomery County OVI or criminal case?`,
    answer: `At Jwayyed Law LLC, the attorney personally handles every Montgomery County case from first consultation to final resolution—no passing your case to an associate or paralegal. Our firm appears in Dayton Municipal Court and Kettering Municipal Court, understanding the procedural differences and prosecutor tendencies in each. For OVI cases, we meticulously review the traffic stop justification, NHTSA field sobriety test administration, breathalyzer calibration history, and chain of custody for blood samples. We file ALS appeals within the 30-day deadline, pursue suppression motions when evidence was unlawfully obtained, and negotiate aggressively with Montgomery County prosecutors for the best possible outcome. For a free initial consultation on your Dayton or Kettering OVI or criminal matter, call (614) 285-5482.`,
  },
];

export default function MontgomeryCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Montgomery County Court Representation"
        description="OVI defense, criminal defense, and civil representation in Dayton Municipal Court, Kettering Municipal Court, and Montgomery County Common Pleas Court. Serving Dayton, Kettering, Huber Heights, Miamisburg, and all of Montgomery County. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Montgomery County Court Representation
            </h2>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Montgomery County is home to Dayton, one of Ohio&apos;s largest cities, and a diverse array of
              suburban communities including Kettering, Trotwood, Huber Heights, Centerville, Englewood, Miamisburg,
              and Vandalia. The county&apos;s courts handle a high volume of OVI, criminal, and civil matters.
              Jwayyed Law LLC provides experienced OVI defense, misdemeanor and felony criminal defense, and civil
              representation for individuals and businesses throughout Montgomery County.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Montgomery County has two primary municipal courts—Dayton Municipal Court and Kettering Municipal
              Court—along with several Mayor&apos;s Courts (including Huber Heights) for minor violations. Dayton
              Municipal Court (301 W. Third St, Dayton, OH 45402) is a high-volume court handling thousands of
              cases annually, with dedicated dockets for OVI, criminal cases, domestic violence, and civil matters.
              Kettering Municipal Court (2325 Wilmington Pike, Kettering, OH 45420) serves Kettering and surrounding
              communities and operates with its own prosecutors and judicial culture. Jurisdiction depends on where
              the offense occurred, and our firm is familiar with both courts.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI defense under ORC 4511.19 requires a systematic review of every element of the government&apos;s
              case. Ohio requires law enforcement to follow strict NHTSA protocols for the three standardized field
              sobriety tests (Horizontal Gaze Nystagmus, Walk and Turn, One Leg Stand). Any deviation from the
              prescribed administration procedure can make the test results unreliable and subject to a suppression
              motion. Ohio&apos;s breath test instruments (Intoxilyzer 8000) must be calibrated according to the
              Ohio Administrative Code, and the operator must hold a current OAC-required certification. Our firm
              reviews all of this documentation for every Montgomery County OVI client before advising on strategy.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Beyond OVI, Montgomery County courts see substantial misdemeanor criminal caseloads including domestic
              violence, assault, theft, and drug possession. Under ORC 2935.26, officers may issue a citation in lieu
              of arrest for most non-first-degree misdemeanors, but first-degree misdemeanors and OVI typically
              result in arrest and arraignment. Dayton Municipal Court has specialty dockets including a Drug Court
              program for qualifying defendants, which can provide treatment-focused outcomes rather than traditional
              incarceration. Our firm evaluates whether diversion or specialty court programs may be appropriate
              for each individual client&apos;s circumstances.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For felony matters, Montgomery County Common Pleas Court (41 N. Perry St, Dayton, OH 45422) handles
              everything from felony OVI (which can be charged as an F4 or F3 for repeat offenders under ORC 4511.19(G))
              to drug trafficking, robbery, and violent felonies. Montgomery County Common Pleas also has specialty
              dockets including a Drug Court, Mental Health Court, and Veterans Treatment Court—alternative pathways
              for qualifying defendants that can result in reduced sentences or treatment-based outcomes. Having an
              attorney who knows how to navigate these specialty programs can make a significant difference in the
              outcome of a Montgomery County felony case.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Courts We Appear In
            </h3>

            <div className="grid md:grid-cols-1 gap-6 mb-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Dayton Municipal Court
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">301 W. Third St, Dayton, OH 45402</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  OVI &bull; Misdemeanor criminal defense &bull; Traffic violations &bull; Civil claims up to $15,000 &bull; Small claims &bull; Drug Court docket
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Kettering Municipal Court
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">2325 Wilmington Pike, Kettering, OH 45420</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  OVI &bull; Misdemeanor criminal defense &bull; Traffic violations &bull; Civil claims up to $15,000 &bull; Serves Kettering and surrounding communities
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Montgomery County Common Pleas Court
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">41 N. Perry St, Dayton, OH 45422</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  Felony criminal cases &bull; Civil cases over $15,000 &bull; Domestic relations &bull; Probate &bull; Drug Court, Mental Health Court, Veterans Treatment Court
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Huber Heights Mayor&apos;s Court
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">Huber Heights, OH</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  Minor traffic violations and minor misdemeanors within the City of Huber Heights; OVI and first-degree misdemeanors transfer to the appropriate municipal court
                </p>
              </div>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Practice Areas in Montgomery County
            </h3>
            <ul className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 space-y-2 leading-relaxed">
              <li><strong>OVI / DUI Defense:</strong> Traffic stop challenges, NHTSA field sobriety analysis, breathalyzer calibration review, ALS appeals under ORC 4511.191 (30-day deadline)</li>
              <li><strong>Misdemeanor Criminal Defense:</strong> Domestic violence (ORC 2919.25), assault (ORC 2903.13), theft (ORC 2913.02), drug possession (ORC 2925.11), disorderly conduct (ORC 2917.11)</li>
              <li><strong>Felony Defense:</strong> Felony OVI, drug trafficking, robbery, assault, and other felonies in Montgomery County Common Pleas Court</li>
              <li><strong>Traffic Violations:</strong> Driving under suspension (ORC 4510.11), reckless operation (ORC 4511.20), and other traffic offenses in Dayton and Kettering courts</li>
              <li><strong>Civil Litigation:</strong> Contract disputes, landlord-tenant evictions (ORC Chapter 1923), personal injury claims in Montgomery County courts</li>
              <li><strong>Record Sealing:</strong> Eligibility analysis and sealing applications under ORC 2953.32 in Montgomery County courts</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Communities We Serve in Montgomery County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We serve clients throughout Montgomery County including Dayton (county seat), Kettering, Trotwood,
              Huber Heights, Fairborn, Centerville, Englewood, Miamisburg, and Vandalia. For representation in
              neighboring counties, see our pages for{' '}
              <Link href="/courts/greene-county" className="text-[#b87333] underline hover:opacity-80">Greene County</Link>,{' '}
              <Link href="/courts/clinton-county" className="text-[#b87333] underline hover:opacity-80">Clinton County</Link>, and{' '}
              <Link href="/courts/butler-county" className="text-[#b87333] underline hover:opacity-80">Butler County</Link>.
              Also see our dedicated page for{' '}
              <Link href="/courts/dayton-municipal-court" className="text-[#b87333] underline hover:opacity-80">Dayton Municipal Court</Link>.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Choose Jwayyed Law LLC for Montgomery County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our attorney personally handles every Montgomery County case—from first consultation through final
              resolution—appearing directly in Dayton Municipal Court and Kettering Municipal Court. We know
              the procedural tendencies of both courts, how local prosecutors approach OVI and criminal cases,
              and the specialty dockets available for qualifying clients. We stay current on Ohio OVI law
              including the 2025 House Bill 37 amendments, and we apply that knowledge strategically for every
              client. Call <strong>(614) 285-5482</strong> to schedule your free initial consultation.
            </p>

            <LocationsWeServe title="Montgomery County Legal Services" criminalDisclaimer={true} />

          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
