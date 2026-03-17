import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Delaware County Court Representation | OVI, Criminal & Civil Attorney | Jwayyed Law LLC',
  description: 'OVI, criminal defense, and civil representation in Delaware County courts including Delaware County Municipal Court and Common Pleas Court. Serving Powell, Dublin, Lewis Center & more. Call (614) 285-5482.',
  keywords: [
    'Delaware County OVI attorney',
    'Delaware County criminal defense',
    'Delaware County Municipal Court lawyer',
    'Delaware County DUI attorney',
    'Powell OVI attorney',
    'Lewis Center criminal defense',
    'Delaware County Common Pleas',
    'ALS appeal Delaware County',
  ],
  openGraph: {
    title: 'Delaware County Court Representation | OVI, Criminal & Civil | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/delaware-county',
  },
  alternates: { canonical: '/courts/delaware-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Delaware County', href: '/courts/delaware-county' },
];

const faqs = [
  {
    question: `What are the OVI penalties in Delaware County, Ohio?`,
    answer: `OVI (Operating a Vehicle Impaired) in Ohio is governed by ORC 4511.19. A first-offense OVI in Delaware County is a first-degree misdemeanor carrying a minimum 3 days in jail (or 3-day driver intervention program), a fine of $375–$1,075, a mandatory license suspension of 1–3 years, and possible vehicle immobilization. A second offense within 10 years increases penalties significantly—minimum 10 days in jail, higher fines, and potential ignition interlock requirements. Under changes effective April 9, 2025 (House Bill 37), courts now have discretion to waive the 15-day hard suspension if the defendant agrees to use an ignition interlock device. An experienced OVI attorney can challenge the traffic stop, field sobriety tests, and breath or blood test procedures to pursue reduced charges or dismissal.`,
  },
  {
    question: `What does Delaware County Municipal Court handle?`,
    answer: `Delaware County Municipal Court (70 N. Union St, Delaware, OH 43015) has jurisdiction over misdemeanor criminal offenses, OVI and DUI charges, traffic violations, civil cases with claims up to $15,000, small claims, and evictions within Delaware County. The court also handles arraignments and preliminary hearings for felony cases before they are bound over to the Delaware County Common Pleas Court. Municipal Court judges and magistrates preside over most misdemeanor and traffic matters, including OVI cases. If you are charged with a misdemeanor or OVI in Delaware, Powell, Westerville, Lewis Center, Galena, Sunbury, or other Delaware County communities, your case will be heard in Delaware County Municipal Court.`,
  },
  {
    question: `How long do I have to appeal my Administrative License Suspension (ALS) in Delaware County?`,
    answer: `If you are arrested for OVI in Delaware County and either refuse a breath/blood test or test over the legal limit (0.08% BAC for adults, 0.04% for commercial drivers, 0.02% for minors under ORC 4511.19), the arresting officer will immediately impose an Administrative License Suspension (ALS) under ORC 4511.191. You have only 30 days from the date of the ALS to file an appeal in Delaware County Municipal Court. This is a hard deadline—missing it forfeits your right to challenge the suspension. An ALS appeal is separate from your criminal OVI case. During the appeal, you or your attorney must show grounds such as improper stop, failure to properly inform you of consequences, or procedural errors. Acting quickly is essential—contact an attorney immediately after an OVI arrest.`,
  },
  {
    question: `What are the maximum penalties for misdemeanor charges in Delaware County?`,
    answer: `Ohio classifies misdemeanors in five degrees under ORC 2929.24. A first-degree misdemeanor—the most serious—carries up to 180 days in jail and a fine up to $1,000. Second-degree misdemeanors carry up to 90 days jail and $750 fine. Third-degree misdemeanors carry up to 60 days jail and $500 fine. Fourth-degree misdemeanors carry up to 30 days jail and $250 fine. Minor misdemeanors carry no jail time but a fine up to $150. Common first-degree misdemeanors in Delaware County include OVI (first offense), domestic violence (first offense), assault, theft under $1,000, and drug possession of small quantities. An attorney can often negotiate with Delaware County prosecutors for reduced charges, diversion programs, or community service in lieu of jail time.`,
  },
  {
    question: `How do I choose the right attorney for my Delaware County case?`,
    answer: `When facing OVI, criminal, or civil charges in Delaware County, look for an attorney who has experience in Delaware County Municipal Court and knows the local prosecutors, judges, and court procedures. Ask whether the attorney handles cases personally or passes them off to associates. Look for someone who will explain your rights, the realistic range of outcomes, and a clear strategy for your case. For OVI cases specifically, ask about the attorney's experience challenging breathalyzer calibration records, field sobriety test administration under NHTSA standards, and whether the initial traffic stop was constitutionally valid. At Jwayyed Law LLC, we personally handle every case in Delaware County courts and provide direct, honest communication from your first consultation through resolution.`,
  },
  {
    question: `What is the difference between Delaware County Municipal Court and Common Pleas Court?`,
    answer: `Delaware County Municipal Court handles misdemeanors (OVI, traffic, minor criminal charges) and civil cases up to $15,000. Delaware County Common Pleas Court (91 N. Sandusky St, Delaware, OH 43015) handles felony criminal cases, civil cases over $15,000, domestic relations (divorce, custody), and probate matters. When someone is charged with a felony in Delaware County, the case usually begins in Municipal Court for arraignment and preliminary hearing, then is transferred (bound over) to Common Pleas Court. If your OVI charge is elevated to a felony—for example, a fourth OVI offense within 10 years under ORC 4511.19(G)(1)(d)—your case will be prosecuted in Common Pleas Court with correspondingly higher stakes and penalties.`,
  },
  {
    question: `Am I eligible for expungement of a criminal record in Ohio?`,
    answer: `Ohio's expungement and sealing statutes were significantly expanded under Senate Bill 288 (effective October 2023) and allow sealing of many misdemeanor and felony convictions. Under ORC 2953.32, most first-degree misdemeanor convictions become eligible for sealing one year after discharge (completion of sentence including probation). Some offenses—including OVI convictions, most traffic violations, domestic violence, and certain sex offenses—are not eligible for sealing regardless of time elapsed. If eligible, a sealed record is not visible to most employers or the general public. Delaware County has its own process for filing a sealing application in Common Pleas Court, and a hearing is scheduled where the court weighs your rehabilitation against the state's interest. An attorney can evaluate your specific record and advise whether expungement is available.`,
  },
  {
    question: `What should I do immediately if I am charged with OVI in Delaware County?`,
    answer: `First, do not make any statements to police beyond identifying yourself—anything you say can be used against you. Second, note the details of the stop: time, location, reason the officer gave for stopping you, what tests you were asked to take, and your responses. Third, contact an OVI attorney as soon as possible—ideally within 24–48 hours of arrest—because the 30-day ALS appeal deadline begins immediately. Fourth, write down everything you remember while it is fresh. Fifth, gather any witnesses or video footage that may have captured the stop. At your first court appearance (arraignment), you will enter a plea—having an attorney present ensures you do not inadvertently waive rights or enter a plea without fully understanding the consequences. Jwayyed Law LLC offers consultations for Delaware County OVI charges; call (614) 285-5482 to discuss your case.`,
  },
];

export default function DelawareCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Delaware County Court Representation"
        description="OVI defense, criminal defense, and civil representation in Delaware County. Serving Delaware, Powell, Lewis Center, Westerville, and surrounding communities. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Delaware County Court Representation
            </h2>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County is one of Ohio&apos;s fastest-growing counties, stretching north of Columbus through
              communities like Powell, Lewis Center, Dublin (partly), Westerville (partly), Sunbury, Galena, and the
              county seat of Delaware. As the population grows, so does the caseload at Delaware County Municipal
              Court and Delaware County Common Pleas Court. Jwayyed Law LLC provides experienced OVI defense,
              misdemeanor criminal defense, and civil representation for clients throughout Delaware County.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s OVI statute, ORC 4511.19, prohibits operating any vehicle with a blood alcohol concentration
              of 0.08% or higher (0.04% for commercial drivers; 0.02% for drivers under 21). OVI is one of the most
              defensible charges in Ohio criminal law because every element of the process—the traffic stop, field
              sobriety tests, breath test administration, and proper advisement—must follow strict protocols under the
              Ohio Administrative Code and NHTSA standards. Errors at any stage can result in suppression of evidence
              or dismissal of the charge. Our firm carefully reviews every piece of evidence in Delaware County OVI
              cases to identify and exploit any weaknesses in the prosecution&apos;s case.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Beyond OVI, Delaware County Municipal Court handles the full range of misdemeanor criminal offenses
              including domestic violence under ORC 2919.25, assault under ORC 2903.13, theft under ORC 2913.02,
              drug possession under ORC 2925.11, and disorderly conduct under ORC 2917.11. Misdemeanor convictions
              carry real consequences—fines, possible jail time, probation, and a permanent criminal record that can
              affect employment, housing, and professional licensing. Having an attorney represent you at every stage,
              from arraignment through pretrial hearings and trial, ensures your rights are protected and the best
              possible outcome is pursued.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For civil matters in Delaware County, our firm assists with landlord-tenant disputes, contract claims,
              and other civil litigation in Delaware County Municipal Court (jurisdiction up to $15,000) and Delaware
              County Common Pleas Court (jurisdiction over $15,000). We also handle personal injury cases arising
              in Delaware County. Whether your matter involves a breach of contract with a Powell business, a
              security deposit dispute with a Delaware landlord, or a personal injury claim from a traffic accident
              on Route 23, Jwayyed Law LLC provides thorough, client-focused representation.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under changes to Ohio law effective April 9, 2025 (House Bill 37), OVI sentencing and administrative
              license suspension procedures were updated. Courts now have broader discretion regarding ignition
              interlock requirements and the hard suspension period. These changes underscore why it is important
              to work with an attorney who stays current on Ohio OVI law. Jwayyed Law LLC monitors legislative and
              case law developments affecting our Delaware County clients and adjusts defense strategies accordingly.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Courts We Appear In
            </h3>

            <div className="grid md:grid-cols-1 gap-6 mb-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Delaware County Municipal Court
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">70 N. Union St, Delaware, OH 43015</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  OVI &bull; Misdemeanor criminal defense &bull; Traffic violations &bull; Civil claims up to $15,000 &bull; Small claims &bull; Evictions
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Delaware County Common Pleas Court
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">91 N. Sandusky St, Delaware, OH 43015</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  Felony criminal cases &bull; Civil cases over $15,000 &bull; Domestic relations &bull; Probate
                </p>
              </div>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Practice Areas in Delaware County
            </h3>
            <ul className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 space-y-2 leading-relaxed">
              <li><strong>OVI / DUI Defense:</strong> Challenging stops, field sobriety tests, breath and blood tests; ALS appeals (ORC 4511.191); license reinstatement</li>
              <li><strong>Misdemeanor Criminal Defense:</strong> Domestic violence (ORC 2919.25), assault (ORC 2903.13), theft (ORC 2913.02), drug possession (ORC 2925.11)</li>
              <li><strong>Traffic Violations:</strong> Reckless operation, driving under suspension, speeding, following too closely</li>
              <li><strong>Civil Litigation:</strong> Contract disputes, landlord-tenant matters, small claims in Delaware County Municipal Court</li>
              <li><strong>Personal Injury:</strong> Auto accidents, premises liability, and injury claims in Delaware County</li>
              <li><strong>Expungement / Record Sealing:</strong> Evaluating eligibility and filing sealing applications under ORC 2953.32</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Communities We Serve in Delaware County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We serve clients throughout Delaware County including Delaware (county seat), Powell, Lewis Center,
              Westerville, Dublin, Sunbury, Galena, Ostrander, and all surrounding communities. For neighboring
              county representation, see our pages for{' '}
              <Link href="/courts/franklin-county" className="text-[#b87333] underline hover:opacity-80">Franklin County</Link>,{' '}
              <Link href="/courts/morrow-county" className="text-[#b87333] underline hover:opacity-80">Morrow County</Link>, and{' '}
              <Link href="/courts/pickaway-county" className="text-[#b87333] underline hover:opacity-80">Pickaway County</Link>.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Choose Jwayyed Law LLC for Delaware County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our attorney personally handles every Delaware County case—you will not be passed off to a paralegal
              or associate. We know Delaware County Municipal Court procedures, understand how local prosecutors
              approach OVI and criminal cases, and stay current on Ohio law changes. From your first consultation
              through the final resolution of your case, we provide honest advice, clear communication, and aggressive
              advocacy. Call <strong>(614) 285-5482</strong> or contact us online to schedule a consultation.
            </p>

            <LocationsWeServe title="Delaware County Legal Services" criminalDisclaimer={true} />

          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
