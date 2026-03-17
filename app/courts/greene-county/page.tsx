import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Greene County Court Representation | OVI, Criminal & Civil Attorney | Jwayyed Law LLC',
  description: 'OVI defense, criminal defense, and civil representation in Greene County courts including Fairborn Municipal Court and Xenia Municipal Court. Serving Xenia, Fairborn, Beavercreek, Yellow Springs & more. Call (614) 285-5482.',
  keywords: [
    'Greene County OVI attorney',
    'Fairborn Municipal Court lawyer',
    'Xenia Municipal Court attorney',
    'Greene County criminal defense',
    'Beavercreek OVI attorney',
    'Yellow Springs criminal defense',
    'Greene County DUI attorney',
    'Greene County Common Pleas',
  ],
  openGraph: {
    title: 'Greene County Court Representation | OVI, Criminal & Civil | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/greene-county',
  },
  alternates: { canonical: '/courts/greene-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
];

const faqs = [
  {
    question: `What is the difference between Fairborn Municipal Court and Xenia Municipal Court in Greene County?`,
    answer: `Greene County has two separate municipal courts serving different jurisdictions. Fairborn Municipal Court (1 W. Main St, Fairborn, OH 45324) has jurisdiction over the City of Fairborn, the City of Bath, and Beavercreek City—meaning OVI, misdemeanor, and traffic charges arising in those areas are heard there. Xenia Municipal Court (101 N. Detroit St, Xenia, OH 45385) serves the City of Xenia. If you are charged with an OVI or misdemeanor in Beavercreek, it goes to Fairborn Municipal Court—not Xenia. If your charge occurred in Xenia itself, it goes to Xenia Municipal Court. Yellow Springs has its own Mayor's Court for minor traffic and misdemeanor matters, though defendants can request transfer to the appropriate municipal court. Knowing which court has jurisdiction matters because each court has its own procedures, local rules, and prosecutorial practices.`,
  },
  {
    question: `What OVI penalties apply in Greene County courts?`,
    answer: `OVI in Ohio is governed by ORC 4511.19. A first-offense OVI in Greene County—whether charged in Fairborn Municipal Court or Xenia Municipal Court—is a first-degree misdemeanor carrying a minimum 3 days in jail (or a 3-day driver intervention program), a fine of $375 to $1,075, and a license suspension of 1 to 3 years. If your BAC tested at 0.17% or higher ("high tier"), minimum jail time doubles to 6 days. A second OVI within 10 years carries a mandatory 10-day minimum jail sentence, elevated fines, and possible 90-day vehicle immobilization. Under House Bill 37 (effective April 9, 2025), courts may waive the 15-day hard suspension period for defendants who agree to install an ignition interlock device. Oral fluid testing is now an authorized chemical test method alongside breath and blood testing.`,
  },
  {
    question: `How does the ALS appeal process work in Greene County?`,
    answer: `An Administrative License Suspension (ALS) is imposed by the arresting officer immediately upon an OVI arrest in Greene County when the driver either refuses a chemical test or tests at or above 0.08% BAC (ORC 4511.191). The ALS is separate from any criminal OVI case. Under ORC 4511.197, you have 30 days from the date of arrest to file an appeal of the ALS in the appropriate municipal court—Fairborn Municipal Court or Xenia Municipal Court, depending on where the arrest occurred. An ALS appeal challenges the suspension on grounds such as lack of reasonable suspicion for the stop, failure to properly advise the driver of ALS consequences, or improper test administration. Winning the appeal can restore your full driving privileges while the criminal case continues. This 30-day window cannot be extended, making it critical to contact an attorney immediately after an OVI arrest in Greene County.`,
  },
  {
    question: `What types of criminal cases does Greene County Common Pleas Court handle?`,
    answer: `Greene County Common Pleas Court (45 N. Detroit St, Xenia, OH 45385) has jurisdiction over felony criminal cases in Greene County. Felonies in Ohio are classified from F1 (most serious) through F5, plus aggravated murder and murder. Common felony cases in Greene County include felony OVI (third offense in 10 years = F4; fourth offense = F3 under ORC 4511.19(G)), felonious assault (ORC 2903.11), burglary (ORC 2911.12), drug trafficking (ORC 2925.03), and theft of $1,000 or more (ORC 2913.02). When a felony arrest occurs in Greene County, the case begins in Fairborn or Xenia Municipal Court for arraignment and preliminary hearing, then is bound over to Common Pleas Court. Felony convictions carry prison sentences of 6 to 36 months for F5 offenses, up to life in prison for F1 offenses, in addition to fines and post-release supervision.`,
  },
  {
    question: `Does Yellow Springs Mayor's Court handle OVI and criminal cases in Greene County?`,
    answer: `Yellow Springs has a Mayor's Court, which is a limited jurisdiction court that handles minor misdemeanors and traffic offenses occurring within the village. Mayor's Courts in Ohio cannot handle first-degree misdemeanors, fourth-degree misdemeanors that are domestic violence, or OVI charges—those must be transferred to the appropriate municipal court (in this case, Fairborn Municipal Court, which has jurisdiction over the surrounding township area). If you receive a citation returnable to Yellow Springs Mayor's Court, you may in some cases request transfer to Fairborn Municipal Court. Mayor's Courts do not have the full procedural protections of a municipal court, so consulting with an attorney about your best option is advisable. For serious charges, transfer to Fairborn Municipal Court or representation there provides more procedural protections and a formal record.`,
  },
  {
    question: `What civil matters can be heard in Greene County courts?`,
    answer: `Both Fairborn Municipal Court and Xenia Municipal Court handle civil cases with claims up to $15,000 within their respective jurisdictions, including small claims, evictions (forcible entry and detainer under ORC Chapter 1923), and civil collection matters. Greene County Common Pleas Court has jurisdiction over civil cases exceeding $15,000, including breach of contract, personal injury, and business disputes. The Common Pleas Court also has a Domestic Relations division for divorce, custody, and support matters, and a Probate division for estate administration and guardianships. Jwayyed Law LLC handles civil litigation, landlord-tenant matters, personal injury claims, and business disputes in Greene County courts, bringing the same thorough Ohio legal analysis to civil matters as to criminal defense.`,
  },
  {
    question: `What should I know about expungement eligibility in Greene County?`,
    answer: `Ohio's expanded expungement and record-sealing law (Senate Bill 288, effective October 2023) allows sealing of many misdemeanor and some felony convictions under ORC 2953.32. For misdemeanors, the waiting period is generally one year after completing the sentence including probation. Important exclusions include OVI convictions (not eligible under ORC 2953.36), domestic violence convictions, most traffic offenses, and certain sex offenses. For eligible offenses, the sealing application is filed in the court of conviction—either Fairborn Municipal Court, Xenia Municipal Court, or Greene County Common Pleas Court, depending on the offense level and where the case was prosecuted. A hearing is scheduled, and the court weighs rehabilitation interests against the state's record-keeping interest. A sealed conviction is generally invisible to private employers and landlords. Our firm handles the entire sealing process in Greene County for qualifying clients.`,
  },
  {
    question: `Why should I hire Jwayyed Law LLC for my Greene County OVI or criminal case?`,
    answer: `Jwayyed Law LLC provides personal, direct representation—you work with the attorney, not a paralegal or case manager. Our firm understands Fairborn Municipal Court and Xenia Municipal Court procedures, knows how Greene County prosecutors approach OVI and criminal cases, and stays current on Ohio law including the 2025 OVI changes. For OVI cases, we review every aspect of your case: the traffic stop, field sobriety test administration (NHTSA standards), breathalyzer calibration records (Ohio Administrative Code requirements), and chain of custody for blood samples. We file timely ALS appeals, negotiate with prosecutors for reduced charges or diversion where appropriate, and represent you aggressively at trial if necessary. For a free initial consultation on your Greene County case, call (614) 285-5482.`,
  },
];

export default function GreeneCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Greene County Court Representation"
        description="OVI defense, criminal defense, and civil representation in Fairborn Municipal Court, Xenia Municipal Court, and Greene County Common Pleas Court. Serving Xenia, Fairborn, Beavercreek, Yellow Springs, and all of Greene County. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Greene County Court Representation
            </h2>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Greene County sits in southwestern Ohio, bordered by Montgomery County to the west and stretching
              through communities including Xenia (the county seat), Fairborn, Beavercreek, Kettering, Centerville,
              Springboro, and Yellow Springs. The county is home to Wright-Patterson Air Force Base and a large
              population of working families, veterans, and students who may face legal challenges in Greene County
              courts. Jwayyed Law LLC provides experienced OVI defense, misdemeanor criminal defense, and civil
              representation in all Greene County courts.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              One of the most important things to understand about Greene County is that it has two separate
              municipal courts: Fairborn Municipal Court (1 W. Main St, Fairborn, OH 45324) and Xenia Municipal Court
              (101 N. Detroit St, Xenia, OH 45385). These are distinct courts with separate judges, prosecutors, local
              rules, and procedural cultures. Fairborn Municipal Court has jurisdiction over the City of Fairborn,
              Bath, and Beavercreek City—so an OVI arrest in Beavercreek will be heard in Fairborn Municipal Court,
              not Xenia. Xenia Municipal Court serves the City of Xenia. Getting jurisdiction right matters from
              your very first appearance, and our firm appears in both courts.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI defense under ORC 4511.19 is a major focus of our Greene County practice. Every OVI arrest involves
              multiple potential defense points: whether the officer had constitutionally sufficient reasonable
              articulable suspicion to stop the vehicle, whether field sobriety tests were administered in strict
              compliance with NHTSA standardized protocols, whether the breath test instrument (typically an Intoxilyzer
              8000 in Ohio) was properly calibrated and the operator properly certified under the Ohio Administrative
              Code, and whether the ALS advisement was properly given. Our firm reviews all of this evidence for
              every Greene County OVI client to identify suppression motions and negotiating leverage.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For misdemeanor criminal matters in Greene County—assault, domestic violence, theft, drug possession,
              disorderly conduct—our firm provides defense representation at every stage from arraignment through
              trial. Under ORC 2935.26, officers may issue a citation in lieu of arrest for most non-first-degree
              misdemeanors. First-degree misdemeanor arrests (OVI, first-offense domestic violence, felonious assault
              reduced to misdemeanor) typically result in arraignment where bond and conditions of release are set.
              Having counsel present from the start ensures you do not waive important rights or enter a plea without
              fully understanding the consequences.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Greene County Common Pleas Court (45 N. Detroit St, Xenia, OH 45385) handles all felony criminal cases,
              civil cases over $15,000, domestic relations matters, and probate. Felony OVI—charged when a defendant
              has three or more prior OVI convictions within 10 years—is prosecuted in Common Pleas Court with
              potential prison sentences. Our firm handles both municipal-level and Common Pleas-level representation
              in Greene County, providing continuity of counsel throughout the entire case.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Courts We Appear In
            </h3>

            <div className="grid md:grid-cols-1 gap-6 mb-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Fairborn Municipal Court
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">1 W. Main St, Fairborn, OH 45324</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  Jurisdiction: City of Fairborn, Bath, Beavercreek City &bull; OVI &bull; Misdemeanor criminal defense &bull; Traffic &bull; Civil up to $15,000
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Xenia Municipal Court
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">101 N. Detroit St, Xenia, OH 45385</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  Jurisdiction: City of Xenia &bull; OVI &bull; Misdemeanor criminal defense &bull; Traffic &bull; Civil up to $15,000
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Greene County Common Pleas Court
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">45 N. Detroit St, Xenia, OH 45385</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  Felony criminal cases &bull; Civil cases over $15,000 &bull; Domestic relations &bull; Probate
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Yellow Springs Mayor&apos;s Court
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">Yellow Springs, OH</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  Minor misdemeanors and traffic violations within the Village of Yellow Springs; OVI and first-degree misdemeanors transfer to Fairborn Municipal Court
                </p>
              </div>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Practice Areas in Greene County
            </h3>
            <ul className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 space-y-2 leading-relaxed">
              <li><strong>OVI / DUI Defense:</strong> Traffic stop challenges, NHTSA field sobriety test analysis, ALS appeals (ORC 4511.191 — 30-day deadline), breathalyzer calibration review</li>
              <li><strong>Misdemeanor Criminal Defense:</strong> Domestic violence (ORC 2919.25), assault (ORC 2903.13), theft (ORC 2913.02), drug possession (ORC 2925.11), disorderly conduct (ORC 2917.11)</li>
              <li><strong>Felony Defense:</strong> Felony OVI, felonious assault, drug trafficking, theft, and other felonies in Greene County Common Pleas Court</li>
              <li><strong>Traffic Violations:</strong> Driving under suspension (ORC 4510.11), reckless operation (ORC 4511.20), and other traffic matters in Fairborn and Xenia Municipal Courts</li>
              <li><strong>Civil Litigation:</strong> Contract disputes, landlord-tenant evictions, personal injury claims in Greene County courts</li>
              <li><strong>Record Sealing:</strong> Eligibility analysis and applications under ORC 2953.32 in Greene County courts</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Communities We Serve in Greene County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We serve clients throughout Greene County including Xenia (county seat), Fairborn, Beavercreek,
              Kettering, Centerville, Springboro, and Yellow Springs. For legal representation in neighboring counties,
              see our pages for{' '}
              <Link href="/courts/montgomery-county" className="text-[#b87333] underline hover:opacity-80">Montgomery County</Link>,{' '}
              <Link href="/courts/clinton-county" className="text-[#b87333] underline hover:opacity-80">Clinton County</Link>, and{' '}
              <Link href="/courts/franklin-county" className="text-[#b87333] underline hover:opacity-80">Franklin County</Link>.
              Also see our dedicated page for{' '}
              <Link href="/courts/fairborn-municipal-court" className="text-[#b87333] underline hover:opacity-80">Fairborn Municipal Court</Link>.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Choose Jwayyed Law LLC for Greene County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our attorney appears personally in both Fairborn Municipal Court and Xenia Municipal Court, providing
              firsthand knowledge of each court&apos;s procedures and prosecutorial tendencies. We are current on Ohio
              OVI law including the 2025 House Bill 37 amendments, and we apply that knowledge strategically for
              every Greene County client. Whether your case involves a first OVI arrest in Beavercreek, a misdemeanor
              in Xenia, or a felony drug charge in Common Pleas Court, Jwayyed Law LLC delivers dedicated, professional
              representation. Call <strong>(614) 285-5482</strong> to schedule a consultation.
            </p>

            <LocationsWeServe title="Greene County Legal Services" criminalDisclaimer={true} />

          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
