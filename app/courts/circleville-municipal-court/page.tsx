import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Circleville Municipal Court Attorney | Pickaway County OVI & Misdemeanor Lawyer | Jwayyed Law LLC',
  description: 'Experienced attorney for Circleville Municipal Court. OVI/DUI defense, misdemeanor criminal charges, and traffic violations in Pickaway County, Ohio. US 23 corridor. Call (614) 285-5482.',
  keywords: ['Circleville Municipal Court attorney', 'Pickaway County OVI lawyer', 'Circleville misdemeanor defense', 'Circleville Ohio criminal attorney', 'Pickaway County DUI attorney'],
  openGraph: {
    title: 'Circleville Municipal Court Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/circleville-municipal-court',
  },
  alternates: { canonical: '/courts/circleville-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Pickaway County', href: '/courts/pickaway-county' },
  { label: 'Circleville Municipal Court', href: '/courts/circleville-municipal-court' },
];

const faqs = [
  {
    question: `What types of cases does Circleville Municipal Court handle?`,
    answer: `Circleville Municipal Court handles misdemeanor criminal cases, OVI/DUI charges under ORC 4511.19, traffic violations, civil disputes up to $15,000, small claims matters, and landlord-tenant disputes arising within Pickaway County. Circleville, as the county seat of Pickaway County, hosts the primary municipal court for the county. Felony charges are bound over to the Pickaway County Common Pleas Court. Our firm does not handle juvenile, probate, or immigration matters in this court.`,
  },
  {
    question: `Where is Circleville Municipal Court located?`,
    answer: `Circleville Municipal Court is located at 111 S Paint St, Circleville, OH 43113. Circleville sits along the US 23 corridor approximately 30 miles south of Columbus. The court handles OVI and traffic charges arising from US 23 enforcement as well as SR 56 and US 22. If you were stopped along US 23 in Pickaway County, your case will likely be heard in Circleville Municipal Court or the Pickaway County Common Pleas Court depending on the severity of the charges.`,
  },
  {
    question: `What are the OVI penalties in Circleville Municipal Court?`,
    answer: `Under ORC 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Circleville Municipal Court carries: mandatory 3 days in jail (or 3-day driver intervention program), fines of $565–$1,075, a class five license suspension of 1–3 years, and 6 points on your license. For a high-tier first OVI (BAC 0.17% or higher, or test refusal with a prior refusal), the mandatory minimum is 6 days in jail. HB 37 also eliminated the 15-day hard suspension for non-refusal first OVI offenses when an ignition interlock device is installed, allowing limited driving privileges to be available sooner.`,
  },
  {
    question: `Does Circleville Municipal Court handle OVI charges arising from US 23?`,
    answer: `Yes. US 23 is a major north-south highway passing through Pickaway County, and the Ohio State Highway Patrol and Circleville Police Department actively enforce OVI and traffic laws along this corridor. Charges arising from US 23 stops within Pickaway County are typically handled in Circleville Municipal Court (for misdemeanor OVI) or the Pickaway County Common Pleas Court (for felony OVI). Our attorney is familiar with enforcement patterns on US 23 and builds defenses accordingly.`,
  },
  {
    question: `What is the 30-day ALS appeal deadline after a Pickaway County OVI arrest?`,
    answer: `An Administrative License Suspension (ALS) under ORC 4511.191 goes into effect immediately when you are arrested for OVI in Pickaway County and either test above 0.08% BAC or refuse a chemical test. You have 30 days from the date of arrest to file an appeal of the ALS with Circleville Municipal Court. This deadline is absolute — missing it forfeits your right to challenge the suspension. An attorney must file the appeal and supporting memorandum within the 30-day window and can simultaneously pursue suppression of the stop or the test.`,
  },
  {
    question: `What misdemeanor criminal charges are common in Circleville Municipal Court?`,
    answer: `Common misdemeanor criminal charges in Circleville Municipal Court include assault (ORC 2903.13), domestic violence (ORC 2919.25), theft (ORC 2913.02), criminal trespass, disorderly conduct, and minor misdemeanor drug possession (marijuana under 100g, ORC 2925.11). Pickaway County's rural character also generates agricultural and property-related misdemeanor matters. Under ORC 2929.21, an M1 offense carries up to 180 days in jail and a $1,000 fine. An attorney can explore diversion, plea negotiation, or suppression to minimize consequences.`,
  },
  {
    question: `Can I get limited driving privileges after a Circleville Municipal Court OVI charge?`,
    answer: `Yes. Under ORC 4510.021, Circleville Municipal Court can grant limited driving privileges for work, school, medical appointments, and other essential travel during the pendency of your OVI case and following a conviction. Under HB 37, for non-refusal first OVI offenses, the former mandatory 15-day hard suspension before LDP is available has been eliminated when an ignition interlock device is installed. Our attorney petitions the court for LDP as early as possible to minimize disruption to your employment and daily responsibilities.`,
  },
  {
    question: `Can misdemeanor convictions from Circleville Municipal Court be sealed?`,
    answer: `Yes. Most misdemeanor convictions — including M1 through M4 offenses — are eligible for record sealing under ORC 2953.32 after a one-year waiting period from final discharge. Dismissed charges and not-guilty verdicts can be sealed immediately under ORC 2953.52 with no waiting period. OVI/DUI convictions under ORC 4511.19 are not sealable in Ohio. After sealing, the record is removed from most background checks and you may lawfully answer no on most private employer applications asking about prior convictions.`,
  },
];

export default function CirclevilleMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Circleville Municipal Court Attorney"
        description="OVI/DUI defense, misdemeanor criminal charges, and traffic matters in Circleville Municipal Court. Serving Pickaway County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Circleville Municipal Court: OVI Defense and Misdemeanor Representation
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Circleville Municipal Court, located at 111 S Paint St in Circleville, Ohio, serves Pickaway County — a rural county south of Columbus along the US 23 corridor. The court handles misdemeanor criminal cases, OVI/DUI charges under <strong>ORC 4511.19</strong>, and traffic violations arising throughout Pickaway County. Jwayyed Law LLC represents defendants in Circleville Municipal Court, including individuals stopped on US 23 and SR 56. If you face an OVI charge, the 30-day deadline to appeal your Administrative License Suspension (ALS) under <strong>ORC 4511.191</strong> begins running from the date of arrest — do not delay in contacting our office.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI enforcement on US 23 in Pickaway County is conducted by both the Ohio State Highway Patrol and the Circleville Police Department. Our attorney examines whether the traffic stop was supported by reasonable articulable suspicion, whether standardized field sobriety tests were properly administered, and whether the breath or blood testing instrument was properly maintained. Under <strong>HB 37</strong> (effective April 9, 2025), the mandatory 15-day hard suspension for non-refusal first OVI offenses is eliminated when an ignition interlock device (IID) is installed, and fines have been updated to $565–$1,075 for a first offense — important changes that can improve outcomes for our clients.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Misdemeanor Defense in Pickaway County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Circleville Municipal Court also handles misdemeanor assault, domestic violence, theft, disorderly conduct, and drug possession charges. Under <strong>ORC 2929.21</strong>, an M1 conviction can result in up to 180 days in jail and a $1,000 fine. Many misdemeanor convictions can be sealed after one year under <strong>ORC 2953.32</strong>. Our attorney carefully evaluates defenses, pursues suppression motions where applicable, and works toward dismissal or reduced charges to protect your record and your future.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC at (614) 285-5482 or through{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link> if you have a matter in Circleville Municipal Court. Learn more about our{' '}
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
