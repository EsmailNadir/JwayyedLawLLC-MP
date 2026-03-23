import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Hamilton Municipal Court Attorney',
  description: 'Experienced attorney for Hamilton Municipal Court in Hamilton, Ohio. OVI/DUI defense, misdemeanor criminal charges.',
  keywords: ['Hamilton Municipal Court attorney', 'Butler County OVI lawyer', 'Hamilton Ohio misdemeanor defense', 'Hamilton Ohio criminal attorney', 'Butler County DUI lawyer'],
  openGraph: {
    title: 'Hamilton Municipal Court Attorney',
    url: 'https://www.jjlawohio.com/courts/hamilton-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/courts/hamilton-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Butler County', href: '/courts/butler-county' },
  { label: 'Hamilton Municipal Court', href: '/courts/hamilton-municipal-court' },
];

const faqs = [
  {
    question: `What types of cases does Hamilton Municipal Court handle?`,
    answer: `Hamilton Municipal Court handles misdemeanor criminal cases, OVI/DUI charges under ORC 4511.19, traffic violations, civil disputes up to $15,000, and small claims matters arising within the city of Hamilton and its surrounding jurisdictional area in Butler County. The court also handles landlord-tenant eviction matters and protection orders. Felony charges are bound over to the Butler County Common Pleas Court. Our firm does not handle juvenile, probate, or immigration matters in this court.`,
  },
  {
    question: `Where is Hamilton Municipal Court located?`,
    answer: `Hamilton Municipal Court is located at 700 Hanover Street, Hamilton, OH 45011. The court moved to this location in 2025. Hamilton is the county seat of Butler County in southwestern Ohio, approximately 20 miles north of Cincinnati. The court serves the city of Hamilton, which is traversed by US 27, SR 4 (Dixie Highway), and other corridors that see active traffic enforcement.`,
  },
  {
    question: `What are the OVI penalties in Hamilton Municipal Court under current Ohio law?`,
    answer: `Under ORC 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Hamilton Municipal Court carries: mandatory minimum 3 days in jail (or a 3-day driver intervention program), fines of $565–$1,075, a class five license suspension of 1–3 years, and 6 points on your license. A first high-tier OVI (BAC 0.17% or higher, or test refusal with a prior refusal on record) carries a mandatory 6-day minimum. HB 37 eliminated the 15-day hard suspension for non-refusal first OVI offenses when an ignition interlock device is installed.`,
  },
  {
    question: `What is the 30-day ALS appeal deadline after a Hamilton OVI arrest?`,
    answer: `Under ORC 4511.191, an Administrative License Suspension (ALS) takes effect immediately at arrest when you test above 0.08% BAC or refuse a chemical test in Hamilton or anywhere in Butler County. You have exactly 30 days from the date of arrest to file an appeal of the ALS with Hamilton Municipal Court. An attorney must file the appeal and a supporting memorandum of law within this window. Missing the deadline forfeits your right to challenge the suspension. Contact our office immediately after an OVI arrest in the Hamilton area to preserve your appeal rights.`,
  },
  {
    question: `Does Hamilton Municipal Court handle traffic violations on US 27 and SR 4?`,
    answer: `Yes. Hamilton Municipal Court has jurisdiction over traffic violations and OVI charges arising within the city of Hamilton. US 27 and SR 4 (Dixie Highway) run through Hamilton and are actively patrolled. Points accumulation under ORC 4510.036 — 12 points in two years — triggers a mandatory license suspension. Our attorney challenges underlying traffic violations to prevent points from accumulating and to avoid the consequences of a suspension. Speeding, reckless operation, and driving under suspension charges arising from these corridors are among the most common cases handled in this court.`,
  },
  {
    question: `What misdemeanor criminal charges are common in Hamilton Municipal Court?`,
    answer: `Hamilton Municipal Court handles misdemeanor assault (ORC 2903.13), domestic violence (ORC 2919.25), theft (ORC 2913.02), disorderly conduct, criminal trespass, drug possession (minor misdemeanor marijuana under 100g under ORC 2925.11), and other M1–M4 offenses. Hamilton is a mid-size city with active commercial and residential areas, and the court handles a broad range of misdemeanor matters. Under ORC 2929.21, an M1 offense carries up to 180 days in jail and a $1,000 fine.`,
  },
  {
    question: `Can I get limited driving privileges after an OVI in Hamilton Municipal Court?`,
    answer: `Yes. Hamilton Municipal Court can grant limited driving privileges (LDP) for work, school, medical appointments, and other essential purposes under ORC 4510.021. Under HB 37, the mandatory 15-day hard suspension before LDP is available has been eliminated for non-refusal first OVI offenses when an ignition interlock device is installed. Our attorney petitions the court for LDP as early as possible — at or shortly after arraignment — to minimize disruption to your employment and daily responsibilities.`,
  },
  {
    question: `Can misdemeanor convictions from Hamilton Municipal Court be sealed?`,
    answer: `Yes. Most misdemeanor convictions — M1 through M4 and minor misdemeanor offenses — are eligible for sealing under ORC 2953.32 after a one-year waiting period from final discharge (completion of all incarceration, probation, and payment of fines and costs). Dismissed charges and not-guilty verdicts can be sealed immediately under ORC 2953.52 with no waiting period. OVI convictions under ORC 4511.19 are not sealable in Ohio. After sealing, the record will not appear on standard background checks, and you may lawfully answer no on most private employer applications asking about prior convictions.`,
  },
];

export default function HamiltonMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Hamilton Municipal Court Attorney"
        description="OVI/DUI defense, misdemeanor criminal charges, and traffic matters in Hamilton Municipal Court. Serving Hamilton and Butler County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Hamilton Municipal Court: OVI Defense and Misdemeanor Representation
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Hamilton Municipal Court, located at 700 Hanover Street in Hamilton, Ohio, serves the city of Hamilton — the county seat of Butler County in southwestern Ohio. The court handles misdemeanor criminal cases, OVI/DUI charges under <strong>ORC 4511.19</strong>, traffic violations, and civil matters for the city of Hamilton and its surrounding jurisdictional area. Jwayyed Law LLC represents defendants in Hamilton Municipal Court across all misdemeanor criminal, OVI, and traffic matters. If you have been arrested for OVI, the 30-day window to appeal your Administrative License Suspension (ALS) under <strong>ORC 4511.191</strong> begins running from the date of arrest.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Hamilton is served by US 27 and SR 4 (Dixie Highway), both of which see active OVI and traffic enforcement. Our attorney examines the basis for the traffic stop, the administration of field sobriety tests, and the calibration of the breath testing instrument. Under <strong>HB 37</strong> (effective April 9, 2025), the minimum fine for a first OVI is $565–$1,075, and the mandatory 15-day hard suspension for non-refusal first OVI offenses has been eliminated when an ignition interlock device (IID) is installed — allowing earlier access to limited driving privileges.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Misdemeanor Defense in Hamilton and Butler County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Hamilton Municipal Court handles a full range of misdemeanor offenses including domestic violence (<strong>ORC 2919.25</strong>), assault, theft, drug possession, and disorderly conduct. Under <strong>ORC 2929.21</strong>, an M1 conviction can result in up to 180 days in jail and a $1,000 fine. Our attorney pursues suppression motions, challenges evidence, negotiates with prosecutors, and represents clients at trial when necessary to achieve the best possible outcome. Many misdemeanor convictions can be sealed under <strong>ORC 2953.32</strong> after a one-year waiting period.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC at (614) 285-5482 or via{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link> for representation in Hamilton Municipal Court. Learn more about our{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">OVI/DUI defense</Link> and{' '}
              <Link href="/criminal-defense" className="text-[#b87333] underline hover:opacity-80">criminal defense</Link> services throughout Ohio.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
