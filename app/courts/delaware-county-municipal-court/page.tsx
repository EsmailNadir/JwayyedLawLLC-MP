import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Delaware County Municipal Court Attorney | OVI & Misdemeanor Lawyer | Jwayyed Law LLC',
  description: 'Experienced attorney for Delaware County Municipal Court in Delaware, Ohio. OVI/DUI defense, misdemeanor criminal charges, and traffic violations. North of Columbus on US 23. Call (614) 285-5482.',
  keywords: ['Delaware County Municipal Court attorney', 'Delaware County OVI lawyer', 'Delaware County misdemeanor defense', 'Delaware Ohio criminal attorney', 'OVI lawyer Delaware Ohio'],
  openGraph: {
    title: 'Delaware County Municipal Court Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/delaware-county-municipal-court',
  },
  alternates: { canonical: '/courts/delaware-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Delaware County', href: '/courts/delaware-county' },
  { label: 'Delaware County Municipal Court', href: '/courts/delaware-county-municipal-court' },
];

const faqs = [
  {
    question: `What types of cases does Delaware County Municipal Court handle?`,
    answer: `Delaware County Municipal Court has jurisdiction over misdemeanor criminal cases, OVI/DUI charges under ORC 4511.19, traffic violations, civil disputes up to $15,000, and small claims matters arising in Delaware County. The court covers Delaware city and the unincorporated areas and townships of Delaware County. Felony charges are bound over to the Delaware County Common Pleas Court. Our firm does not handle juvenile, probate, or immigration matters.`,
  },
  {
    question: `Where is Delaware County Municipal Court located?`,
    answer: `Delaware County Municipal Court is located at 70 N. Union St, Delaware, OH 43015. The courthouse is in downtown Delaware, the county seat, approximately 25 miles north of Columbus on US 23. The court handles a growing volume of OVI and traffic cases reflecting Delaware County's rapid residential and commercial growth along the US 23 corridor and State Route 36/37.`,
  },
  {
    question: `What are the OVI penalties in Delaware County Municipal Court?`,
    answer: `Under ORC 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction carries a mandatory minimum 3 days in jail (or 3-day driver intervention program), fines of $565–$1,075, a class five license suspension of 1–3 years, and 6 points on your license. A high-tier first OVI (BAC 0.17+ or test refusal with a prior refusal) carries 6 mandatory days. HB 37 eliminated the 15-day hard suspension for non-refusal first OVI offenses when an ignition interlock device is installed — allowing faster restoration of limited driving privileges.`,
  },
  {
    question: `How do I appeal my Administrative License Suspension (ALS) after a Delaware County OVI arrest?`,
    answer: `After an OVI arrest in Delaware County where you tested above 0.08% or refused a chemical test, an Administrative License Suspension (ALS) under ORC 4511.191 takes effect immediately. You have 30 days from the arrest date to appeal the ALS to Delaware County Municipal Court. An attorney must file the appeal and supporting motion within this window — failure to do so forfeits your right to challenge the suspension administratively. Our attorney files ALS appeals promptly and simultaneously challenges the stop, the testing procedures, and the basis for the field sobriety tests.`,
  },
  {
    question: `Does Delaware County Municipal Court handle traffic offenses on US 23?`,
    answer: `Yes. US 23 is one of the primary north-south corridors through Delaware County, and the Municipal Court handles a significant number of speeding, reckless operation, and OVI charges arising from US 23 enforcement. State Route 36/37 and US 42 also generate traffic enforcement in the court's jurisdiction. Points accumulation on an Ohio license is governed by ORC 4510.036 — 12 points in two years triggers a mandatory license suspension. An attorney can challenge the underlying violation to prevent points from accumulating.`,
  },
  {
    question: `Can I get limited driving privileges after a Delaware County OVI charge?`,
    answer: `Yes. Limited driving privileges (LDP) for work, school, medical appointments, and other essential purposes can be obtained from Delaware County Municipal Court under ORC 4510.021. Under HB 37, the former 15-day hard suspension period before LDP eligibility has been eliminated for non-refusal first OVI offenses when the defendant installs an ignition interlock device. Our attorney petitions for LDP at the earliest available opportunity so your ability to drive to work and fulfill daily obligations is restored as quickly as possible.`,
  },
  {
    question: `What misdemeanor criminal charges are common in Delaware County Municipal Court?`,
    answer: `Delaware County Municipal Court handles misdemeanor assault (ORC 2903.13), domestic violence (ORC 2919.25), theft (ORC 2913.02), criminal trespass, drug possession (minor misdemeanor marijuana under 100g under ORC 2925.11), disorderly conduct, and other M1–M4 offenses. Delaware County's population growth has also increased misdemeanor cases arising from residential developments in Powell, Lewis Center, and Westerville areas served by the court. Maximum penalties under ORC 2929.21 for an M1 offense include 180 days in jail and a $1,000 fine.`,
  },
  {
    question: `Do I need an attorney for Delaware County Municipal Court?`,
    answer: `Yes, retaining experienced counsel is strongly recommended for any criminal, OVI, or serious traffic matter in Delaware County Municipal Court. Misdemeanor convictions — including OVI — create permanent criminal records, result in license suspensions, and can affect employment. An attorney can file suppression motions challenging the legality of the stop or the chemical test, negotiate with prosecutors for reduced charges or dismissal, and represent you at trial if necessary. Delaware County is a rapidly growing suburban county with an active prosecutorial office; having representation levels the playing field.`,
  },
];

export default function DelawareCountyMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Delaware County Municipal Court Attorney"
        description="OVI/DUI defense, misdemeanor criminal charges, and traffic matters in Delaware County Municipal Court. Serving Delaware County, Ohio — north of Columbus on US 23."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Delaware County Municipal Court: OVI Defense and Misdemeanor Representation
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County Municipal Court, located at 70 N. Union St in Delaware, Ohio, serves one of Ohio&apos;s fastest-growing counties — a suburban area north of Columbus along the US 23 corridor that has seen significant population expansion in communities like Powell, Lewis Center, and Dublin. The court handles misdemeanor criminal cases, OVI/DUI charges under <strong>ORC 4511.19</strong>, and traffic violations arising throughout Delaware County. Jwayyed Law LLC represents defendants in Delaware County Municipal Court in OVI defense, misdemeanor criminal defense, and traffic matters. The 30-day ALS appeal deadline under <strong>ORC 4511.191</strong> begins running at arrest — contact our office immediately.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County is served by active state highway enforcement on US 23, SR 36/37, and SR 315. OVI arrests frequently occur in the US 23 corridor and near entertainment districts in Powell and Lewis Center. Our attorney reviews the traffic stop basis, the administration of standardized field sobriety tests, and the DataMaster breath instrument records to build a comprehensive defense. Under <strong>HB 37</strong> (effective April 9, 2025), the mandatory 15-day hard suspension for non-refusal first OVI offenses is eliminated when an ignition interlock device is installed, and fines are updated to $565–$1,075 for a first offense.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Misdemeanor Defense in Delaware County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County Municipal Court handles a range of misdemeanor offenses including domestic violence (<strong>ORC 2919.25</strong>), assault, theft, disorderly conduct, and drug possession. Under <strong>ORC 2929.21</strong>, an M1 conviction carries up to 180 days in jail and a $1,000 fine. Many misdemeanor convictions are eligible for sealing under <strong>ORC 2953.32</strong> after a one-year waiting period, which can remove the record from most background checks. Our attorney pursues the best possible resolution — including dismissal, diversion, or reduced charges — tailored to the specific facts of your case.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC at (614) 285-5482 or via{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link> for representation in Delaware County Municipal Court. For more information, see our{' '}
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
