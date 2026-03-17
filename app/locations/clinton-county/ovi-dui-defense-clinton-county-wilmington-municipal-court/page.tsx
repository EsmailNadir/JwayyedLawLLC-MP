import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'OVI / DUI Lawyer for Wilmington, Ohio | Wilmington Municipal Court | Jwayyed Law LLC',
  description: 'OVI/DUI defense attorney for Wilmington and Clinton County, Ohio. Wilmington Municipal Court. HB 37 penalties, ALS appeals, license defense. Call (614) 285-5482.',
  keywords: ['OVI lawyer Wilmington Ohio', 'DUI attorney Clinton County', 'OVI defense Clinton County', 'Wilmington Municipal Court OVI'],
  openGraph: {
    title: 'OVI / DUI Lawyer for Wilmington, Ohio | Clinton County | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/clinton-county/ovi-dui-defense-clinton-county-wilmington-municipal-court',
  },
  alternates: { canonical: '/locations/clinton-county/ovi-dui-defense-clinton-county-wilmington-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Clinton County', href: '/courts/clinton-county' },
  { label: 'OVI/DUI Defense - Wilmington Municipal Court', href: '/locations/clinton-county/ovi-dui-defense-clinton-county-wilmington-municipal-court' },
];

const faqs = [
  {
    question: `What are the OVI penalties in Wilmington Municipal Court?`,
    answer: `Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Wilmington Municipal Court carries 3 to 180 days in jail (minimum 3 mandatory days or driver intervention program), fines of $565 to $1,075, and a license suspension of 1 to 3 years. The license reinstatement fee is $315. High-tier OVI (BAC 0.17% or above) carries enhanced minimums. An experienced OVI attorney can help challenge evidence and negotiate reduced penalties.`,
  },
  {
    question: `How do I appeal an ALS suspension in Clinton County?`,
    answer: `Under ORC 4511.191, you have only 30 days from the date of your OVI arrest to file an Administrative License Suspension (ALS) appeal in Wilmington Municipal Court. The ALS is separate from the criminal OVI case and goes into effect immediately upon arrest. An attorney can file the appeal, request a stay of suspension, and challenge the suspension on procedural or substantive grounds to protect your ability to drive.`,
  },
  {
    question: `Can the 15-day hard suspension be waived in Clinton County under HB 37?`,
    answer: `Yes. Under HB 37 (effective April 9, 2025), Wilmington Municipal Court judges may waive the 15-day hard suspension waiting period for limited driving privileges if the defendant agrees to install and use an ignition interlock device. This is a significant change that first-time OVI defendants in Clinton County can take advantage of with the help of an experienced attorney.`,
  },
  {
    question: `What OVI defenses apply in Wilmington Municipal Court?`,
    answer: `Effective OVI defenses in Clinton County include challenging the legality of the traffic stop, disputing field sobriety test administration under NHTSA standards, challenging breathalyzer calibration and maintenance records, asserting rising BAC defense (BAC was below 0.08% while driving), and filing motions to suppress unlawfully obtained evidence. Each case is unique and requires thorough review of police reports, videos, and test records.`,
  },
  {
    question: `Can I get limited driving privileges in Clinton County after an OVI?`,
    answer: `Limited driving privileges are typically available in Wilmington Municipal Court after an OVI suspension for work, school, medical, and other essential purposes. For ALS-related suspensions, privileges may be granted after the hard suspension period expires (or waived under HB 37 with ignition interlock). An attorney can petition the court and ensure compliance with all ignition interlock requirements.`,
  },
  {
    question: `What is the difference between low-tier and high-tier OVI in Ohio?`,
    answer: `Ohio law distinguishes between low-tier OVI (BAC of 0.08% to 0.169%) and high-tier OVI (BAC of 0.17% or above, or certain drug concentration levels). High-tier OVI carries enhanced minimum penalties under ORC 4511.19, including mandatory 6 days in jail (or 3 days jail plus 3 days in a driver intervention program) even for a first offense. Contesting the BAC result is therefore critically important in high-tier cases.`,
  },
  {
    question: `Can an OVI be expunged in Ohio?`,
    answer: `OVI convictions are generally not eligible for expungement or record sealing under ORC 2953.31 in Ohio. This makes fighting the charge vigorously at the outset especially important. However, charges that are dismissed or reduced to a non-OVI offense such as reckless operation may be eligible for expungement after applicable waiting periods. An attorney can evaluate your eligibility after resolution of the case.`,
  },
  {
    question: `Why should I hire Jwayyed Law LLC for an OVI in Clinton County?`,
    answer: `Jwayyed Law LLC provides dedicated OVI/DUI defense in Wilmington Municipal Court and throughout Clinton County. Our attorney understands local court procedures, prosecutor practices, and judicial expectations in this rural southwestern Ohio county. We act quickly to file ALS appeals within the 30-day deadline, review all evidence, and build a defense strategy tailored to your specific circumstances. Call (614) 285-5482 for a consultation.`,
  },
];

export default function ClintonOVIDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI / DUI Lawyer for Wilmington, Ohio"
        description="Wilmington Municipal Court OVI defense. Experienced representation for Clinton County OVI and DUI charges under HB 37 and ORC 4511.19."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              OVI/DUI Defense in Clinton County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An OVI arrest in Clinton County is a serious matter. Wilmington Municipal Court, located at 69 N. South St, Wilmington, OH 45177, handles all misdemeanor OVI and DUI cases arising in this rural southwestern Ohio county. At Jwayyed Law LLC, we provide aggressive OVI/DUI defense representation for clients charged in Wilmington Municipal Court under{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">Ohio Revised Code 4511.19</Link>.
              Our attorney understands the court&apos;s procedures, local prosecutor practices, and the judicial expectations specific to Clinton County.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Clinton County is a close-knit agricultural community in southwestern Ohio, encompassing Wilmington, Sabina, Blanchester, Clarksville, and Port William. Many OVI stops in Clinton County occur on rural state routes and US highways running through the county. Officers conducting these stops must still comply with constitutional requirements for reasonable suspicion and proper field sobriety test administration — deficiencies that our firm investigates thoroughly for every client.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI Penalties in Clinton County Under HB 37
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s House Bill 37, effective April 9, 2025, updated the mandatory minimum penalties for OVI convictions under ORC 4511.19. For a first OVI offense in Wilmington Municipal Court, the court must impose at least 3 days in jail or 3 days in a certified driver intervention program, a fine between $565 and $1,075, and a license suspension of 1 to 3 years. The license reinstatement fee is $315. Critically, HB 37 authorizes the court to waive the 15-day hard suspension waiting period for limited driving privileges if the defendant agrees to ignition interlock — a provision that can preserve your ability to drive to work much sooner than before.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Second OVI offenses within 10 years carry significantly harsher consequences: a minimum of 10 days in jail, fines of $715 to $1,625, and license suspension of 1 to 7 years. High-tier OVI (BAC 0.17% or above) triggers enhanced minimums even for first offenses, making it especially important to challenge breathalyzer results in those cases. Our firm examines calibration records, operator certification, and the testing procedure itself to identify grounds for suppression or reduction.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Administrative License Suspension (ALS) — 30-Day Deadline
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When you are arrested for OVI in Clinton County, the arresting officer immediately confiscates your license and issues a notice of an Administrative License Suspension under ORC 4511.191. This suspension is entirely separate from any criminal penalties and takes effect on the day of arrest. You have only 30 days from the date of arrest to appeal the ALS in Wilmington Municipal Court. Missing this deadline forfeits your right to contest the suspension administratively. Jwayyed Law LLC moves immediately to file ALS appeals and request a stay of suspension so you can continue driving while the matter is pending.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              ALS appeals can succeed on procedural grounds — for example, if the officer failed to properly advise you of your rights, failed to properly administer the chemical test, or if the testing equipment was not properly maintained. Even partial success on an ALS appeal can significantly reduce the period during which you are unable to drive.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI Defense Strategies in Wilmington Municipal Court
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Every OVI case is different, but common defense strategies our firm evaluates for Clinton County clients include: challenging the initial traffic stop for lack of reasonable suspicion under the Fourth Amendment; disputing the administration of Standardized Field Sobriety Tests (SFSTs) under NHTSA guidelines; challenging the reliability and calibration of the breathalyzer instrument used; presenting a rising BAC defense where BAC was below 0.08% at the time of driving; and filing motions to suppress evidence obtained in violation of ORC 2935.26 or constitutional rights. We obtain police dash-cam and body-cam footage, breathalyzer maintenance logs, and all relevant records before evaluating plea offers from the Clinton County prosecutor.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Limited Driving Privileges in Clinton County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For residents of rural Clinton County who depend on a vehicle to reach work, medical appointments, or treatment programs, limited driving privileges are often a critical lifeline. Wilmington Municipal Court can grant limited privileges for work, school, medical care, and court-ordered programs. Under HB 37, first-time OVI defendants who agree to ignition interlock may be eligible for privileges immediately, bypassing the standard 15-day wait. Our firm petitions the court for privileges as quickly as possible and helps clients navigate ignition interlock requirements.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing OVI or DUI charges in Clinton County, contact Jwayyed Law LLC immediately at (614) 285-5482. The 30-day ALS appeal deadline cannot be extended, and early retention of counsel can mean the difference between keeping and losing your license. We will review your case at no obligation, explain your rights, and develop a defense strategy tailored to the specific facts of your case and the procedures of Wilmington Municipal Court.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
