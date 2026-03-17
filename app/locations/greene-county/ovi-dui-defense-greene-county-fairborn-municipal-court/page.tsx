import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'OVI / DUI Lawyer for Fairborn & Xenia, Ohio | Greene County Courts | Jwayyed Law LLC',
  description: 'OVI/DUI defense attorney for Fairborn, Beavercreek, Xenia, and Greene County, Ohio. Fairborn Municipal Court and Xenia Municipal Court. Military OVI defense. Call (614) 285-5482.',
  keywords: ['OVI lawyer Fairborn Ohio', 'DUI attorney Greene County', 'OVI defense Beavercreek Ohio', 'Fairborn Municipal Court OVI', 'military OVI attorney Ohio'],
  openGraph: {
    title: 'OVI / DUI Lawyer for Fairborn & Xenia, Ohio | Greene County | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court',
  },
  alternates: { canonical: '/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
  { label: 'OVI/DUI Defense - Greene County Courts', href: '/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court' },
];

const faqs = [
  {
    question: `What are the OVI penalties in Fairborn Municipal Court and Xenia Municipal Court?`,
    answer: `Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction carries 3 to 180 days in jail (minimum 3 mandatory days or driver intervention program), fines of $565 to $1,075, and a license suspension of 1 to 3 years. The license reinstatement fee is $315. Fairborn Municipal Court (1 W. Main St, Fairborn) and Xenia Municipal Court (101 N. Detroit St, Xenia) both apply these state minimums, though local judicial practices may differ.`,
  },
  {
    question: `How does an OVI arrest affect military personnel at Wright-Patterson Air Force Base?`,
    answer: `Military personnel stationed at Wright-Patterson AFB who are charged with OVI in Greene County face dual consequences: Ohio criminal proceedings in Fairborn or Xenia Municipal Court and potential military disciplinary action under the Uniform Code of Military Justice (UCMJ). A conviction can result in loss of security clearance, reduction in rank, or discharge. Our attorney understands these military collateral consequences and works to minimize both civilian and military exposure.`,
  },
  {
    question: `How do I appeal an ALS in Greene County?`,
    answer: `Under ORC 4511.191, you have 30 days from the date of your OVI arrest to file an Administrative License Suspension appeal in the court of jurisdiction — either Fairborn Municipal Court or Xenia Municipal Court depending on where the arrest occurred. The ALS takes effect immediately upon arrest. Missing the 30-day deadline forfeits your right to administratively contest the suspension. Our firm files ALS appeals immediately and requests a stay of suspension to protect your driving privileges.`,
  },
  {
    question: `Can the 15-day hard suspension be waived in Greene County under HB 37?`,
    answer: `Yes. HB 37 (effective April 9, 2025) authorizes both Fairborn Municipal Court and Xenia Municipal Court to waive the 15-day hard suspension waiting period for limited driving privileges if a first-time OVI defendant agrees to use a certified ignition interlock device. For military members who need to access Wright-Patterson AFB, this provision can be especially valuable. An experienced attorney can present this option to the court effectively.`,
  },
  {
    question: `What OVI defenses are available in Greene County courts?`,
    answer: `Common defenses our firm evaluates for Greene County OVI cases include: challenging the traffic stop for lack of reasonable suspicion; disputing field sobriety test administration under NHTSA standards; challenging breathalyzer calibration records and operator certification; asserting the rising BAC defense; and filing motions to suppress improperly obtained evidence under ORC 2935.26. We obtain all available body-cam and dash-cam footage and breathalyzer maintenance logs before assessing any prosecutor offer.`,
  },
  {
    question: `Which court handles my OVI — Fairborn Municipal Court or Xenia Municipal Court?`,
    answer: `Jurisdiction depends on where the OVI offense occurred. Fairborn Municipal Court at 1 W. Main St, Fairborn handles cases from Fairborn, Beavercreek, and surrounding areas. Xenia Municipal Court at 101 N. Detroit St, Xenia handles cases from Xenia, Yellow Springs, Centerville portions, and other Greene County communities. Our attorney practices in both courts and is familiar with the procedures and tendencies of each.`,
  },
  {
    question: `Can I get limited driving privileges in Greene County after an OVI?`,
    answer: `Yes. Both Fairborn and Xenia Municipal Courts can grant limited driving privileges for work, school, medical, and court-ordered program purposes. Under HB 37, first-time defendants who accept ignition interlock may avoid the standard waiting period entirely. For military personnel, the ability to commute to Wright-Patterson AFB may be argued as a work-related necessity. Our firm petitions for privileges as quickly as possible.`,
  },
  {
    question: `Why hire Jwayyed Law LLC for a Greene County OVI?`,
    answer: `Jwayyed Law LLC provides dedicated OVI/DUI defense in both Fairborn Municipal Court and Xenia Municipal Court. We understand the unique considerations facing military personnel near Wright-Patterson AFB, act immediately on ALS appeals under ORC 4511.191, and build defense strategies based on thorough review of all evidence. Call (614) 285-5482 for a consultation about your Greene County OVI case.`,
  },
];

export default function GreeneOVIDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI / DUI Lawyer for Fairborn &amp; Xenia, Ohio"
        description="Greene County OVI defense in Fairborn Municipal Court and Xenia Municipal Court. Serving Fairborn, Beavercreek, Xenia, Yellow Springs, and military personnel near Wright-Patterson AFB."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              OVI/DUI Defense in Greene County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Greene County OVI and DUI cases are handled by two municipal courts: Fairborn Municipal Court at 1 W. Main St, Fairborn, OH 45324, which serves Fairborn, Beavercreek, and surrounding areas; and Xenia Municipal Court at 101 N. Detroit St, Xenia, OH 45385, which serves Xenia, Yellow Springs, Centerville, and other Greene County communities. Jwayyed Law LLC provides aggressive{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">OVI defense</Link>{' '}
              in both courts under Ohio Revised Code 4511.19.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Greene County is home to Wright-Patterson Air Force Base, one of the largest Air Force installations in the United States. Many OVI arrests in the Fairborn and Beavercreek areas involve active-duty military members, veterans, or civilian base employees. An OVI arrest creates unique challenges for this population: in addition to Ohio criminal court proceedings, military personnel may face action under the Uniform Code of Military Justice (UCMJ), jeopardizing security clearances, promotions, and military careers. Our firm is highly attuned to these collateral consequences and works to achieve outcomes that protect both the civilian record and military status.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI Penalties in Greene County Under HB 37
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under HB 37, effective April 9, 2025, a first OVI conviction in either Fairborn or Xenia Municipal Court carries mandatory minimum penalties under ORC 4511.19: at least 3 days in jail or 3 days in a certified driver intervention program, fines between $565 and $1,075, and a license suspension of 1 to 3 years. The license reinstatement fee is $315. A key HB 37 innovation allows the court to waive the 15-day hard suspension waiting period for first-time defendants who agree to ignition interlock — directly relevant to military personnel who need to access the base for duty.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              High-tier OVI charges where the BAC is 0.17% or above carry enhanced mandatory minimums: at least 6 days in jail (or 3 days jail plus 3 days in a driver intervention program) for first offenses. Second OVI within 10 years means at least 10 mandatory days in jail, fines of $715 to $1,625, and suspension of 1 to 7 years. These escalating penalties make it critical to fight OVI charges vigorously at the outset, before a conviction goes on the record.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Administrative License Suspension — 30-Day Deadline
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An OVI arrest in Greene County triggers an immediate Administrative License Suspension under ORC 4511.191. The ALS is separate from the criminal case and begins on the day of arrest. You have only 30 days from the date of arrest to appeal the ALS in the appropriate municipal court — Fairborn or Xenia, depending on where the offense occurred. Our firm treats ALS appeals as urgent matters and files them immediately upon being retained. We also request a stay of suspension so you can continue driving while the appeal proceeds.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              ALS appeals can be won on procedural grounds including failure to properly advise on consequences of refusal, improper chemical test administration, or breathalyzer maintenance deficiencies. For military personnel, preserving driving privileges during the appeal is especially important to maintain reporting obligations and base access. Even a successful ALS appeal that reduces the suspension period can provide significant practical relief.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI Defense Strategies in Greene County Courts
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm investigates every aspect of the traffic stop and testing procedure for Greene County OVI clients. We review whether the stop was supported by reasonable articulable suspicion; whether Standardized Field Sobriety Tests were administered in strict compliance with NHTSA protocols; whether the breathalyzer instrument was properly calibrated and maintained; and whether there are grounds to suppress evidence under ORC 2935.26 or constitutional protections. We obtain all available body-cam and dash-cam footage. Where the BAC result is close to 0.08%, a rising BAC defense may apply if the defendant consumed alcohol shortly before driving.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Military OVI Defense Near Wright-Patterson AFB
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Active-duty military and civilian base employees charged with OVI in Greene County face consequences beyond Ohio criminal law. A conviction or even an arrest can trigger security clearance reviews, which can end careers dependent on classified access. Non-judicial punishment or court-martial proceedings under the UCMJ may run parallel to the civilian criminal case. Our firm communicates with military defense counsel when appropriate and works to achieve civilian outcomes — such as reduction to reckless operation under ORC 4511.20 or outright dismissal — that minimize the likelihood of adverse UCMJ action.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing OVI or DUI charges in Greene County, contact Jwayyed Law LLC immediately at (614) 285-5482. Whether your case is in Fairborn Municipal Court or Xenia Municipal Court, time is critical — you have only 30 days from arrest to appeal your administrative license suspension. We will review your case, explain your rights, and develop a defense strategy tailored to your specific circumstances and the court where your case will be heard.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
