import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Wilmington Municipal Court Attorney',
  description: 'Experienced attorney for Wilmington Municipal Court (Clinton County Municipal Court). OVI/DUI defense, misdemeanor charges.',
  keywords: ['Wilmington Municipal Court attorney', 'Clinton County OVI lawyer', 'Wilmington Ohio misdemeanor defense', 'Clinton County criminal attorney', 'Clinton County DUI lawyer'],
  openGraph: {
    title: 'Wilmington Municipal Court Attorney',
    url: 'https://www.jjlawohio.com/courts/wilmington-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/courts/wilmington-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Clinton County', href: '/courts/clinton-county' },
  { label: 'Wilmington Municipal Court', href: '/courts/wilmington-municipal-court' },
];

const faqs = [
  {
    question: `What types of cases does Wilmington Municipal Court handle?`,
    answer: `Wilmington Municipal Court (officially the Clinton County Municipal Court) handles misdemeanor criminal cases, OVI/DUI charges under ORC 4511.19, traffic violations, civil disputes up to $15,000, and small claims matters arising throughout Clinton County. As the county seat, Wilmington hosts the primary municipal court for all of Clinton County. Felony charges are bound over to the Clinton County Common Pleas Court. Our firm does not handle juvenile, probate, or immigration matters in this court.`,
  },
  {
    question: `Where is Wilmington Municipal Court located?`,
    answer: `Wilmington Municipal Court (Clinton County Municipal Court) is located at 69 N South Street, Wilmington, OH 45177. Wilmington is the county seat of Clinton County, a rural southwestern Ohio county. The court serves all of Clinton County, including Sabina, Blanchester, Clarksville, and Port William. US 68 runs north-south through the county and is a common source of OVI and traffic charges heard in this court.`,
  },
  {
    question: `What are the OVI penalties in Wilmington Municipal Court under current Ohio law?`,
    answer: `Under ORC 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Wilmington Municipal Court carries: mandatory minimum 3 days in jail (or 3-day driver intervention program), fines of $565–$1,075, a class five license suspension of 1–3 years, and 6 points on your license. A high-tier first OVI (BAC 0.17% or higher, or test refusal with a prior refusal) carries a mandatory minimum of 6 days in jail. HB 37 eliminated the 15-day hard suspension for non-refusal first OVI offenses when an ignition interlock device is installed — important for rural Clinton County residents who rely on their vehicles.`,
  },
  {
    question: `What is the 30-day ALS appeal deadline after a Clinton County OVI arrest?`,
    answer: `Under ORC 4511.191, an Administrative License Suspension (ALS) takes effect immediately at arrest when you test above 0.08% BAC or refuse a chemical test in Clinton County. You have exactly 30 days from the arrest date to appeal the ALS to Wilmington Municipal Court. Missing this deadline permanently forfeits your right to challenge the suspension administratively. An attorney must file the appeal and supporting memorandum within this 30-day window, and can simultaneously challenge the validity of the traffic stop and the chemical test to pursue full dismissal.`,
  },
  {
    question: `Does Wilmington Municipal Court handle rural road OVI charges, including animal-vehicle collision scenarios?`,
    answer: `Yes. Clinton County's rural character means OVI charges sometimes arise from accidents involving deer, farm equipment, or other hazards on rural roads including US 68 and SR 73. In these cases, the mere occurrence of an accident does not establish impairment, and our attorney challenges both the basis for any OVI charge and the accident causation analysis. A thorough investigation of road conditions, sight lines, and the circumstances of the incident is essential to building a complete defense.`,
  },
  {
    question: `What misdemeanor criminal charges are common in Wilmington Municipal Court?`,
    answer: `Wilmington Municipal Court handles misdemeanor assault (ORC 2903.13), domestic violence (ORC 2919.25), theft (ORC 2913.02), criminal trespass, disorderly conduct, and drug possession (minor misdemeanor marijuana under 100g, ORC 2925.11). Clinton County's agricultural and rural character generates a range of property-related misdemeanor matters as well. Under ORC 2929.21, an M1 conviction carries up to 180 days in jail and a $1,000 fine. Many misdemeanor convictions can be sealed under ORC 2953.32 after a one-year waiting period from final discharge.`,
  },
  {
    question: `Can I get limited driving privileges after a Clinton County OVI charge?`,
    answer: `Yes. Wilmington Municipal Court can grant limited driving privileges (LDP) for work, school, medical appointments, and other essential travel under ORC 4510.021. Under HB 37, the 15-day hard suspension before LDP is available has been eliminated for non-refusal first OVI offenses when an ignition interlock device is installed. For rural Clinton County residents without public transit alternatives, preserving driving privileges is critical — our attorney petitions for LDP as early as possible to protect your ability to work and meet daily obligations.`,
  },
  {
    question: `Do I need an attorney for Wilmington Municipal Court charges?`,
    answer: `Yes, experienced legal representation is strongly advisable for any criminal, OVI, or serious traffic matter in Wilmington Municipal Court. In a smaller rural county, misdemeanor and OVI convictions can have significant community and professional consequences. An attorney can file suppression motions, challenge the admissibility of evidence, negotiate with the Clinton County prosecuting attorney, and represent you at trial. Our firm provides experienced representation for defendants in Clinton County Municipal Court and throughout southwestern Ohio.`,
  },
];

export default function WilmingtonMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Wilmington Municipal Court Attorney"
        description="OVI/DUI defense, misdemeanor criminal charges, and traffic matters in Wilmington Municipal Court. Serving Clinton County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Wilmington Municipal Court: OVI Defense and Misdemeanor Representation
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Wilmington Municipal Court (officially the Clinton County Municipal Court), located at 69 N South Street in Wilmington, Ohio, serves all of Clinton County — a rural southwestern Ohio county along US 68 between Columbus and Cincinnati. The court handles misdemeanor criminal cases, OVI/DUI charges under <strong>ORC 4511.19</strong>, traffic violations, and civil matters for the entirety of Clinton County. Jwayyed Law LLC represents defendants in Wilmington Municipal Court in OVI defense, misdemeanor criminal matters, and traffic cases. If you were arrested for OVI, the 30-day ALS appeal window under <strong>ORC 4511.191</strong> runs from the date of arrest — contact our office immediately.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI arrests in Clinton County frequently arise from US 68 and SR 73 enforcement. Clinton County&apos;s rural roads present unique defense considerations — accidents involving animals, adverse road conditions, or agricultural equipment can be misconstrued as impairment-related events. Our attorney investigates the full circumstances of each stop and arrest, challenging field sobriety tests, breath test calibration, and the legal basis for the stop. Under <strong>HB 37</strong> (effective April 9, 2025), fines for a first OVI are $565–$1,075, and the mandatory 15-day hard suspension for non-refusal first OVI offenses has been eliminated when an ignition interlock device is installed — critical for rural residents who depend on their vehicles.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Misdemeanor Defense in Clinton County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The court also handles misdemeanor assault, domestic violence (<strong>ORC 2919.25</strong>), theft, drug possession, and disorderly conduct. Under <strong>ORC 2929.21</strong>, an M1 conviction carries up to 180 days in jail and a $1,000 fine. In a smaller rural county, misdemeanor convictions can have significant reputational and professional consequences. Our attorney pursues suppression motions, seeks dismissal or reduced charges, and represents clients at trial when necessary to achieve the best possible outcome in Wilmington Municipal Court.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC at (614) 285-5482 or via{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link> for representation in Wilmington Municipal Court. See our{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">OVI/DUI defense</Link> and{' '}
              <Link href="/criminal-defense" className="text-[#b87333] underline hover:opacity-80">criminal defense</Link> pages for more information.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
