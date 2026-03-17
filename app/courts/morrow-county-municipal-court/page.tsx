import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Morrow County Municipal Court Attorney | OVI & Misdemeanor Lawyer Mount Gilead | Jwayyed Law LLC',
  description: 'Experienced attorney for Morrow County Municipal Court in Mount Gilead, Ohio. OVI/DUI defense, misdemeanor criminal charges, and traffic violations on US 42. Call (614) 285-5482.',
  keywords: ['Morrow County Municipal Court attorney', 'Morrow County OVI lawyer', 'Mount Gilead misdemeanor defense', 'Morrow County criminal attorney', 'OVI lawyer Mount Gilead Ohio'],
  openGraph: {
    title: 'Morrow County Municipal Court Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/morrow-county-municipal-court',
  },
  alternates: { canonical: '/courts/morrow-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Morrow County', href: '/courts/morrow-county' },
  { label: 'Morrow County Municipal Court', href: '/courts/morrow-county-municipal-court' },
];

const faqs = [
  {
    question: `What types of cases does Morrow County Municipal Court handle?`,
    answer: `Morrow County Municipal Court handles misdemeanor criminal offenses, OVI/DUI charges under ORC 4511.19, traffic violations, civil disputes up to $15,000, and small claims matters arising in Morrow County, Ohio. As the county seat, Mount Gilead hosts the primary municipal court for the county. Felony charges are bound over to the Morrow County Common Pleas Court. Our firm does not handle juvenile, probate, or immigration matters in this court.`,
  },
  {
    question: `Where is Morrow County Municipal Court located?`,
    answer: `Morrow County Municipal Court is located at 48 E High St, Mount Gilead, OH 43338. Mount Gilead is the county seat of Morrow County, a rural county approximately 40 miles north of Columbus. The court serves all of Morrow County, which is crossed by US 42 (a key north-south route), SR 61, and other state routes that generate traffic enforcement. Court hours are generally Monday through Friday; an attorney can advise on specific hearing schedules.`,
  },
  {
    question: `What are the OVI penalties in Morrow County Municipal Court under HB 37?`,
    answer: `Under ORC 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Morrow County carries: mandatory minimum 3 days in jail (or 3-day driver intervention program), fines of $565–$1,075, a class five license suspension of 1–3 years, and 6 points added to your license. A first high-tier OVI (BAC 0.17% or higher) carries a mandatory 6-day minimum. HB 37 eliminated the 15-day hard suspension for non-refusal first OVI offenses when the defendant installs an ignition interlock device, allowing faster access to limited driving privileges.`,
  },
  {
    question: `Does Morrow County Municipal Court handle traffic cases from US 42?`,
    answer: `Yes. US 42 runs through Morrow County and is a primary enforcement corridor for the Ohio State Highway Patrol and local law enforcement. OVI, speeding, and reckless operation charges arising from US 42 stops in Morrow County are typically heard in Morrow County Municipal Court. SR 61 and other rural roads in the county also generate traffic enforcement. Our attorney challenges both the validity of the traffic stop and the basis for any OVI or criminal charges arising from these encounters.`,
  },
  {
    question: `What is the deadline to appeal an Administrative License Suspension (ALS) after a Morrow County OVI arrest?`,
    answer: `Under ORC 4511.191, an ALS takes effect immediately at the time of arrest when you test above the legal limit or refuse a chemical test. You have exactly 30 days from the arrest date to file an appeal of the ALS with Morrow County Municipal Court. Missing this deadline permanently forfeits your right to challenge the administrative suspension. An attorney must file the appeal and supporting motion within this window, and can concurrently challenge the constitutionality of the stop and the validity of the chemical test.`,
  },
  {
    question: `What common misdemeanor charges are heard in Morrow County Municipal Court?`,
    answer: `Morrow County Municipal Court handles misdemeanor assault (ORC 2903.13), domestic violence (ORC 2919.25), theft (ORC 2913.02), criminal trespass, disorderly conduct, drug possession (minor misdemeanor marijuana under 100g under ORC 2925.11), and other M1–M4 offenses. Rural Morrow County also generates agricultural trespass, hunting violation, and property-related misdemeanor matters. Under ORC 2929.21, an M1 conviction can include up to 180 days in jail and a $1,000 fine.`,
  },
  {
    question: `Can I get limited driving privileges in Morrow County Municipal Court after an OVI?`,
    answer: `Yes. Morrow County Municipal Court can grant limited driving privileges (LDP) for work, school, medical, and other necessary purposes under ORC 4510.021. Under HB 37, for non-refusal first OVI offenses, the 15-day hard suspension period before LDP is available has been eliminated when an ignition interlock device is installed. This is an important benefit for rural Morrow County residents, where public transportation alternatives are limited. Our attorney petitions for LDP as quickly as possible to preserve your ability to drive to work and meet daily obligations.`,
  },
  {
    question: `Do I need an attorney for Morrow County Municipal Court charges?`,
    answer: `Yes. Retaining experienced legal counsel is important for any misdemeanor criminal, OVI, or serious traffic matter in Morrow County Municipal Court. In a smaller rural county, a misdemeanor or OVI conviction can have significant consequences for your reputation and employment, particularly since the community is smaller and background checks are commonly used by employers in the area. An attorney can file suppression motions, negotiate with prosecutors, and defend your case at trial if necessary to achieve the best possible result.`,
  },
];

export default function MorrowCountyMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Morrow County Municipal Court Attorney"
        description="OVI/DUI defense, misdemeanor criminal charges, and traffic matters in Morrow County Municipal Court. Serving Mount Gilead and Morrow County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Morrow County Municipal Court: OVI Defense and Misdemeanor Representation
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Morrow County Municipal Court, located at 48 E High St in Mount Gilead, Ohio, serves this rural county north of Columbus. The court handles misdemeanor criminal cases, OVI/DUI charges under <strong>ORC 4511.19</strong>, and traffic violations throughout Morrow County. Jwayyed Law LLC represents individuals charged in Morrow County Municipal Court — from OVI arrests on US 42 to misdemeanor criminal charges in the county. If you have been charged with OVI, the 30-day deadline to appeal your Administrative License Suspension under <strong>ORC 4511.191</strong> begins immediately upon arrest — time is critical.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              US 42 runs through Morrow County and is actively patrolled by the Ohio State Highway Patrol. OVI arrests in the county frequently arise from traffic stops on US 42 and SR 61. Our attorney reviews the basis for every stop, challenges the administration of standardized field sobriety tests, and examines the calibration and maintenance records for breath testing instruments. Under <strong>HB 37</strong> (effective April 9, 2025), minimum OVI fines are $565–$1,075 for a first offense, and the mandatory 15-day hard suspension for non-refusal first OVI offenses has been eliminated when an ignition interlock device is installed — a significant benefit for rural residents who depend on their vehicles.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Misdemeanor Defense in Morrow County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The court also handles misdemeanor charges including assault, domestic violence, theft, drug possession, and disorderly conduct. <strong>ORC 2929.21</strong> provides for up to 180 days in jail and a $1,000 fine for an M1 offense. In a small rural county, misdemeanor convictions can have an outsized impact on community standing and employment. Our attorney evaluates every available defense, seeks suppression or dismissal where appropriate, and works to minimize consequences for our clients in Morrow County.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC at (614) 285-5482 or via{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link> for representation in Morrow County Municipal Court. See our{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">OVI/DUI defense</Link> and{' '}
              <Link href="/criminal-defense" className="text-[#b87333] underline hover:opacity-80">criminal defense</Link> practice areas for more.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
