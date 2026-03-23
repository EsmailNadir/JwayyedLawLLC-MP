import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Fairborn Municipal Court Attorney',
  description: 'Experienced attorney for Fairborn Municipal Court. OVI/DUI defense, misdemeanor criminal charges, and traffic violations in Greene County, Ohio.',
  keywords: ['Fairborn Municipal Court attorney', 'Greene County OVI lawyer', 'Fairborn misdemeanor defense', 'Wright-Patterson AFB OVI defense', 'Beavercreek criminal attorney'],
  openGraph: {
    title: 'Fairborn Municipal Court Attorney',
    url: 'https://www.jjlawohio.com/courts/fairborn-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/courts/fairborn-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
  { label: 'Fairborn Municipal Court', href: '/courts/fairborn-municipal-court' },
];

const faqs = [
  {
    question: `What types of cases does Fairborn Municipal Court handle?`,
    answer: `Fairborn Municipal Court has jurisdiction over misdemeanor criminal offenses, OVI/DUI charges under ORC 4511.19, traffic violations, civil disputes up to $15,000, and small claims matters arising within the court's territorial jurisdiction in Greene County. The court's jurisdiction includes Fairborn, Bath Township, Beavercreek, Beavercreek Township, and other communities. Felony cases are bound over to the Greene County Common Pleas Court. Our firm does not handle juvenile, probate, or immigration matters.`,
  },
  {
    question: `Where is Fairborn Municipal Court located?`,
    answer: `Fairborn Municipal Court is located at 1148 Kauffman Ave, Fairborn, OH 45324. Fairborn is in western Greene County adjacent to Wright-Patterson Air Force Base and Dayton. The court handles a significant volume of OVI and traffic cases, including charges arising from SR 444 (the primary access road to Wright-Patterson AFB), US 35, and I-675. Familiarity with this court's procedures is essential for effective representation.`,
  },
  {
    question: `What are the OVI penalties in Fairborn Municipal Court under current Ohio law?`,
    answer: `Under ORC 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Fairborn Municipal Court carries: mandatory minimum 3 days in jail (or 3-day driver intervention program), fines of $565–$1,075, a class five license suspension of 1–3 years, and 6 points on your license. A high-tier first OVI (BAC 0.17%+ or test refusal with a prior refusal on record) carries a mandatory 6-day minimum in jail. Under HB 37, the 15-day hard suspension for non-refusal first OVI offenses is eliminated when an ignition interlock device is installed.`,
  },
  {
    question: `Does an OVI conviction in Fairborn affect military status or security clearances?`,
    answer: `Yes. For active-duty military, reservists, and government contractors near Wright-Patterson AFB, an OVI conviction in Fairborn Municipal Court can have serious collateral consequences beyond the criminal sentence. The military services have their own administrative processes for misconduct on or off base, and an OVI conviction — or in some cases even an arrest — may trigger review of security clearances under Executive Order 12968 and related guidelines. Our attorney advises clients on how the criminal case intersects with potential military or security clearance consequences, and pursues the best criminal outcome to minimize those risks.`,
  },
  {
    question: `What is the 30-day ALS appeal deadline after a Fairborn or Greene County OVI arrest?`,
    answer: `An Administrative License Suspension (ALS) under ORC 4511.191 takes effect immediately at arrest when you test above 0.08% BAC or refuse a chemical test. You have 30 days from the date of arrest to file an appeal of the ALS with Fairborn Municipal Court. Missing this deadline forfeits your right to challenge the suspension. Our attorney files the appeal and supporting motion promptly and simultaneously pursues suppression of the traffic stop and the chemical test to build a comprehensive defense.`,
  },
  {
    question: `What misdemeanor criminal charges are common in Fairborn Municipal Court?`,
    answer: `Fairborn Municipal Court handles misdemeanor assault (ORC 2903.13), domestic violence (ORC 2919.25), theft (ORC 2913.02), disorderly conduct, drug possession, and other M1–M4 charges. The Beavercreek and Fairborn area's retail corridors generate misdemeanor theft and disorderly conduct cases. Under ORC 2929.21, an M1 conviction carries up to 180 days in jail and a $1,000 fine. Many misdemeanor convictions are eligible for sealing under ORC 2953.32 after a one-year waiting period from final discharge.`,
  },
  {
    question: `Can I get limited driving privileges after an OVI charge in Fairborn Municipal Court?`,
    answer: `Yes. Limited driving privileges (LDP) for work, school, medical appointments, and other essential travel can be granted by Fairborn Municipal Court under ORC 4510.021. Under HB 37, for non-refusal first OVI offenses, the former mandatory 15-day hard suspension before LDP is available has been eliminated when an ignition interlock device is installed. Our attorney pursues LDP at the earliest opportunity to ensure you can continue working and meeting your responsibilities while your case proceeds.`,
  },
  {
    question: `Does Fairborn Municipal Court handle charges from Beavercreek and Bath Township?`,
    answer: `Yes. Fairborn Municipal Court's territorial jurisdiction includes Beavercreek, Bath Township, and other communities in addition to the city of Fairborn. Beavercreek is a substantial suburban community adjacent to Fairborn, and traffic enforcement along SR 35, I-675, and US 35 generates cases heard in this court. If you received a citation or were arrested in Beavercreek or Bath Township, your case will typically be filed in Fairborn Municipal Court unless the charge is a felony, which would go to the Greene County Common Pleas Court.`,
  },
];

export default function FairbornMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Fairborn Municipal Court Attorney"
        description="OVI/DUI defense, misdemeanor criminal charges, and traffic matters in Fairborn Municipal Court. Serving Fairborn, Beavercreek, and Greene County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Fairborn Municipal Court: OVI Defense and Misdemeanor Representation
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Fairborn Municipal Court, located at 1148 Kauffman Ave in Fairborn, Ohio, serves the western portion of Greene County — including Fairborn, Beavercreek, Bath Township, and communities adjacent to Wright-Patterson Air Force Base. The court handles misdemeanor criminal cases, OVI/DUI charges under <strong>ORC 4511.19</strong>, and traffic violations in its jurisdiction. Jwayyed Law LLC represents defendants in Fairborn Municipal Court for OVI defense, misdemeanor criminal matters, and traffic charges. If you face an OVI charge, the 30-day ALS appeal window under <strong>ORC 4511.191</strong> runs from the date of arrest — contact our office immediately.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The Fairborn and Beavercreek area features significant traffic on US 35, SR 444, and I-675, and OVI enforcement is active in these corridors. For military personnel and government contractors near Wright-Patterson AFB, an OVI conviction carries collateral risks beyond the criminal sentence, including potential security clearance implications. Our attorney understands these intersecting concerns and pursues the best criminal outcome — including suppression motions, ALS appeals, and plea negotiations — to protect both your record and your career. Under <strong>HB 37</strong> (effective April 9, 2025), the mandatory 15-day hard suspension for non-refusal first OVI offenses is eliminated when an ignition interlock device is installed.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Misdemeanor Defense in Greene County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Beyond OVI, Fairborn Municipal Court handles misdemeanor assault, domestic violence (<strong>ORC 2919.25</strong>), theft, drug possession, and disorderly conduct. Under <strong>ORC 2929.21</strong>, an M1 offense carries up to 180 days in jail and a $1,000 fine. Our attorney evaluates suppression, plea negotiations, and diversion options to pursue the best available outcome and protect your record. Many misdemeanor convictions are eligible for sealing under <strong>ORC 2953.32</strong> after a one-year waiting period.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC at (614) 285-5482 or through{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link> for representation in Fairborn Municipal Court. Learn more about our{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">OVI/DUI defense</Link> and{' '}
              <Link href="/criminal-defense" className="text-[#b87333] underline hover:opacity-80">criminal defense</Link> practice areas.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
