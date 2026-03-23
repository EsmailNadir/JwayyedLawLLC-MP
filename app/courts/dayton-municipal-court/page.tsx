import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Dayton Municipal Court Attorney',
  description: 'Experienced attorney for Dayton Municipal Court. OVI/DUI defense, misdemeanor criminal charges, traffic violations, and civil matters in Montgomery County.',
  keywords: ['Dayton Municipal Court attorney', 'Montgomery County OVI lawyer', 'Dayton misdemeanor defense', 'Dayton Ohio criminal attorney', 'Montgomery County DUI lawyer'],
  openGraph: {
    title: 'Dayton Municipal Court Attorney',
    url: 'https://www.jjlawohio.com/courts/dayton-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/courts/dayton-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Montgomery County', href: '/courts/montgomery-county' },
  { label: 'Dayton Municipal Court', href: '/courts/dayton-municipal-court' },
];

const faqs = [
  {
    question: `What types of cases does Dayton Municipal Court handle?`,
    answer: `Dayton Municipal Court handles misdemeanor criminal charges, OVI/DUI charges under ORC 4511.19, traffic violations, civil disputes up to $15,000, and small claims under $6,000 arising within the city of Dayton and portions of Montgomery County. The court also maintains specialty dockets for driving under suspension and domestic violence matters. Felony cases are bound over to the Montgomery County Common Pleas Court. Our firm does not handle juvenile, probate, or immigration matters.`,
  },
  {
    question: `Where is Dayton Municipal Court located?`,
    answer: `Dayton Municipal Court is located at 301 W Third St, Dayton, OH 45402. The courthouse is in downtown Dayton and serves the city of Dayton and surrounding unincorporated areas of Montgomery County within the court's territorial jurisdiction. The court handles a high volume of cases across criminal, OVI, traffic, and civil divisions. Hearings are scheduled in divisions, and navigating the court's docket requires familiarity with local procedures.`,
  },
  {
    question: `What are the OVI penalties in Dayton Municipal Court under current Ohio law?`,
    answer: `Under ORC 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Dayton Municipal Court carries: 3-day mandatory minimum jail (or 3-day driver intervention program), fines of $565–$1,075, a class five license suspension of 1–3 years, and 6 points on your license. A first high-tier OVI (BAC 0.17+ or test refusal with a prior test refusal) carries a mandatory 6 days in jail. HB 37 eliminated the mandatory 15-day hard suspension for non-refusal first OVI offenses when an ignition interlock device is installed — an important development for preserving driving privileges.`,
  },
  {
    question: `Does Dayton Municipal Court have a specialty driving under suspension docket?`,
    answer: `Yes. Dayton Municipal Court actively prosecutes driving under OVI-related suspension charges under ORC 4510.14, which carries a mandatory minimum 30 days in jail for a first offense when the underlying suspension was OVI-related. The court also handles driving under financial responsibility law suspension (ORC 4510.16) and other license suspension categories. These charges are often brought alongside OVI charges and require separate analysis and defense strategy.`,
  },
  {
    question: `How does the 30-day ALS appeal deadline work after a Dayton OVI arrest?`,
    answer: `An Administrative License Suspension (ALS) under ORC 4511.191 takes effect immediately at arrest when a driver in Dayton either tests above the legal limit or refuses a chemical test. You have 30 days from the date of arrest to appeal the ALS to Dayton Municipal Court. Missing this deadline means you forfeit the right to challenge the suspension. Our attorney files the appeal promptly, challenges the probable cause for the stop, and argues the validity of the BAC test or refusal to maximize the chances of ALS termination.`,
  },
  {
    question: `What misdemeanor drug offenses are handled in Dayton Municipal Court?`,
    answer: `Dayton Municipal Court handles misdemeanor drug possession charges including possession of marijuana under 100 grams (a minor misdemeanor under ORC 2925.11), possession of drug paraphernalia (ORC 2925.14), and other minor drug misdemeanors. More serious drug charges — possession of controlled substances in larger quantities or trafficking offenses — are felonies handled in the Montgomery County Common Pleas Court. Misdemeanor drug convictions can be sealed under ORC 2953.32 after a one-year waiting period in many cases.`,
  },
  {
    question: `Can I get limited driving privileges after an OVI charge in Dayton Municipal Court?`,
    answer: `Yes. Limited driving privileges (LDP) for work, school, medical, and other essential purposes can be granted by Dayton Municipal Court under ORC 4510.021. Under HB 37, the mandatory 15-day hard suspension period before LDP is available has been eliminated for non-refusal first OVI offenses when the defendant agrees to install an ignition interlock device. This means LDP can often be obtained quickly after an arrest. Our attorney petitions the court for LDP at the earliest opportunity to minimize disruption to your daily life.`,
  },
  {
    question: `What should I do after being charged in Dayton Municipal Court?`,
    answer: `After a charge in Dayton Municipal Court, you should: (1) retain an attorney before your arraignment — entering a not-guilty plea preserves all your options; (2) if charged with OVI, note the exact date of arrest as the 30-day ALS appeal deadline runs from that date; (3) do not discuss your case with police, insurance adjusters, or anyone other than your attorney; (4) preserve any evidence — dashcam footage, witness contact information, or other documentation; and (5) contact Jwayyed Law LLC promptly to begin building your defense.`,
  },
];

export default function DaytonMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Dayton Municipal Court Attorney"
        description="OVI/DUI defense, misdemeanor criminal charges, and traffic matters in Dayton Municipal Court. Serving Montgomery County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Dayton Municipal Court: Jurisdiction, OVI Defense, and Misdemeanor Representation
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Dayton Municipal Court, located at 301 W Third St in downtown Dayton, Ohio, is one of Ohio&apos;s busiest municipal courts, handling misdemeanor criminal cases, OVI/DUI charges, traffic violations, and civil matters for the city of Dayton and portions of Montgomery County. Jwayyed Law LLC represents defendants in Dayton Municipal Court across all misdemeanor criminal and OVI matters. If you are charged in this court, understanding the court&apos;s procedures — including the critical 30-day deadline to appeal an Administrative License Suspension (ALS) under <strong>ORC 4511.191</strong> — is essential to protecting your rights.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI defense in Dayton Municipal Court requires challenging multiple layers of evidence. The legality of the initial traffic stop, the administration of standardized field sobriety tests (SFSTs) under NHTSA protocols, and the maintenance and calibration records of the breath testing instrument (typically a DataMaster DMT) must all be scrutinized. Under <strong>HB 37</strong> (effective April 9, 2025), the mandatory 15-day hard suspension for non-refusal first OVI offenses has been eliminated when the defendant agrees to install an ignition interlock device — a significant improvement that our attorney pursues where applicable. Minimum fines for a first OVI are now $565 to $1,075 under HB 37.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Montgomery County Misdemeanor Defense
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Beyond OVI, Dayton Municipal Court handles assault (ORC 2903.13), domestic violence (ORC 2919.25), theft (ORC 2913.02), drug possession misdemeanors, disorderly conduct, criminal trespass, and other misdemeanor charges. Misdemeanor penalties under <strong>ORC 2929.21</strong> include up to 180 days in jail and $1,000 in fines for an M1 offense. The court&apos;s driving under suspension docket under <strong>ORC 4510.14</strong> is particularly active, with mandatory minimum 30-day jail sentences for OVI-related suspension violations. Our attorney examines each case for constitutional challenges, suppression motions, and negotiated resolutions to minimize consequences.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC at (614) 285-5482 or via{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link> for representation in Dayton Municipal Court. See our{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">OVI/DUI defense</Link> and{' '}
              <Link href="/criminal-defense" className="text-[#b87333] underline hover:opacity-80">criminal defense</Link> practice pages for more information on how we approach these cases.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
