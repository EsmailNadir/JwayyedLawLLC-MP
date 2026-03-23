import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Athens Municipal Court Attorney',
  description: 'Experienced attorney for Athens Municipal Court. OVI/DUI defense, misdemeanor criminal charges, and traffic violations in Athens County, Ohio.',
  keywords: ['Athens Municipal Court attorney', 'Athens County OVI lawyer', 'Athens misdemeanor defense', 'Ohio University OVI defense', 'Athens Ohio criminal attorney'],
  openGraph: {
    title: 'Athens Municipal Court Attorney',
    url: 'https://www.jjlawohio.com/courts/athens-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/courts/athens-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Athens County', href: '/courts/athens-county' },
  { label: 'Athens Municipal Court', href: '/courts/athens-municipal-court' },
];

const faqs = [
  {
    question: `What types of cases does Athens Municipal Court handle?`,
    answer: `Athens Municipal Court has jurisdiction over misdemeanor criminal offenses, OVI/DUI charges under ORC 4511.19, traffic violations, civil disputes up to $15,000, and small claims under $6,000 arising within the court's territorial jurisdiction in Athens County. The court also handles landlord-tenant matters and temporary protection orders. Felony cases are bound over to the Athens County Common Pleas Court. Our firm does not handle juvenile, probate, or immigration matters.`,
  },
  {
    question: `Where is Athens Municipal Court located?`,
    answer: `Athens Municipal Court is located at 8 E Washington St, Athens, OH 45701. The court is in the center of Athens, adjacent to Ohio University's campus area. Court hours are generally Monday through Friday. Parking is available near the courthouse. Because the court is near a large university, OVI and alcohol-related misdemeanor charges are among the most common matters handled there.`,
  },
  {
    question: `What are the penalties for a first OVI conviction in Athens Municipal Court?`,
    answer: `Under ORC 4511.19 and as updated by HB 37 (effective April 9, 2025), a first OVI conviction in Athens Municipal Court carries: mandatory minimum 3 days in jail (or 3-day driver intervention program), fines of $565–$1,075, a class five license suspension of 1–3 years, and 6 points on your license. A first high-tier OVI (BAC 0.17+ or refusing a prior test) carries a mandatory 6 days in jail and higher fines. Ignition interlock device (IID) conditions are common. An attorney can pursue dismissal, reduction, or minimum penalties.`,
  },
  {
    question: `How does Ohio's 30-day deadline for ALS appeals work after an Athens County OVI arrest?`,
    answer: `When you are arrested for OVI in Athens County and either test above 0.08% BAC or refuse a chemical test, the Ohio Bureau of Motor Vehicles imposes an Administrative License Suspension (ALS) under ORC 4511.191. You have 30 days from the date of arrest to appeal the ALS to Athens Municipal Court. Missing this deadline forfeits your right to challenge the suspension administratively. An attorney must file the appeal promptly, and can simultaneously challenge the constitutionality of the traffic stop and the validity of the chemical testing procedures.`,
  },
  {
    question: `What happens if I have an Ohio University-related charge in Athens Municipal Court?`,
    answer: `Ohio University students and staff charged in Athens Municipal Court face both court consequences and potential University disciplinary proceedings under the Student Code of Conduct. These are separate processes — a conviction in court can trigger academic discipline, suspension, or expulsion independently of the criminal outcome. Our attorney can represent you in the court proceedings and advise on how to manage the intersection of criminal defense and university discipline. We serve Athens County residents, students, faculty, and visitors.`,
  },
  {
    question: `Can misdemeanor charges in Athens Municipal Court affect my criminal record long-term?`,
    answer: `Yes. A misdemeanor conviction in Athens Municipal Court creates a permanent criminal record visible on background checks. Under ORC 2929.21, misdemeanor sentences can include up to 180 days in jail (M1), substantial fines, and probation. Ohio's record sealing statute (ORC 2953.32) allows many misdemeanor convictions to be sealed after a one-year waiting period from final discharge, provided you meet eligibility requirements. An attorney can fight the charge to avoid a conviction, or advise on post-conviction sealing if applicable.`,
  },
  {
    question: `Do I need an attorney for Athens Municipal Court matters?`,
    answer: `Yes, having experienced counsel is strongly advisable for any Athens Municipal Court matter involving criminal charges or OVI. Municipal Court misdemeanor convictions carry jail time, fines, license suspension, and permanent criminal records. Evidence challenges — including the legality of the traffic stop, the calibration of breath testing devices, and the validity of field sobriety tests — require legal knowledge to pursue effectively. An attorney can negotiate plea agreements, file suppression motions, and represent you at trial.`,
  },
  {
    question: `What should I bring to my Athens Municipal Court arraignment?`,
    answer: `At your arraignment in Athens Municipal Court you will be formally advised of the charges against you and asked to enter a plea. You should bring any paperwork you received at the time of arrest (citation, ALS notice, bond paperwork), photo identification, and contact information for any witnesses. You do not need to enter a plea of guilty at arraignment — your attorney will typically enter a not guilty plea to preserve all options and allow time for evidence review. If you have not yet retained an attorney, contact one before your arraignment date.`,
  },
];

export default function AthensMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Athens Municipal Court Attorney"
        description="OVI/DUI defense, misdemeanor criminal charges, and traffic violations in Athens Municipal Court. Serving Athens County and the Ohio University community."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Athens Municipal Court: Jurisdiction, Charges, and Defense
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Athens Municipal Court, located at 8 E Washington St in Athens, Ohio, handles misdemeanor criminal cases, OVI/DUI charges under <strong>ORC 4511.19</strong>, traffic violations, and civil disputes for Athens County. Jwayyed Law LLC represents individuals charged in Athens Municipal Court — including Ohio University students, faculty, and visitors — in OVI defense, misdemeanor criminal defense, and traffic matters. If you are facing charges in Athens Municipal Court, prompt action is critical: the 30-day window to appeal an Administrative License Suspension (ALS) under <strong>ORC 4511.191</strong> begins running immediately upon arrest.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The presence of Ohio University makes Athens Municipal Court one of the more active municipal courts in southeastern Ohio for alcohol-related offenses. OVI charges — whether based on a breath test result above the 0.08% legal limit or an officer&apos;s observation of impairment — require careful evidentiary review. Our attorney examines the basis for the traffic stop, the administration of standardized field sobriety tests (SFSTs), and whether the breath or blood testing instrument was properly calibrated and maintained. Under HB 37, effective April 9, 2025, a first non-refusal OVI no longer carries a mandatory 15-day hard suspension if the defendant installs an ignition interlock device — a development that can meaningfully improve outcomes for clients.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Misdemeanor Criminal Defense in Athens County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Beyond OVI, Athens Municipal Court handles a full range of misdemeanor offenses including assault (ORC 2903.13), theft (ORC 2913.02), drug possession misdemeanors, disorderly conduct, criminal trespass, and domestic violence. A misdemeanor of the first degree carries up to 180 days in jail and a $1,000 fine under <strong>ORC 2929.21</strong>. Our attorney evaluates every available defense — constitutional challenges to the stop or search, factual challenges to the state&apos;s evidence, and mitigating factors for sentencing — to pursue the best possible result. Many misdemeanor charges in Athens Municipal Court can be resolved through diversion programs, reduced charges, or dismissal.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing charges in Athens Municipal Court, contact Jwayyed Law LLC at (614) 285-5482 or visit{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link>. Learn more about our{' '}
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
