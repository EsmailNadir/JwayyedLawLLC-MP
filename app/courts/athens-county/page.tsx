import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Athens County Court Representation | OVI, Criminal & Civil Attorney | Jwayyed Law LLC',
  description: 'Experienced legal representation in Athens County courts including Athens Municipal Court and Common Pleas. OVI defense, criminal defense, and civil matters in Athens County, Ohio. Call (614) 285-5482.',
  keywords: [
    'Athens County court attorney',
    'OVI lawyer Athens Ohio',
    'Athens Municipal Court attorney',
    'Ohio University OVI defense',
    'Athens County criminal defense attorney',
    'Athens County DUI lawyer',
  ],
  openGraph: {
    title: 'Athens County Court Representation | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/athens-county',
  },
  alternates: { canonical: '/courts/athens-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Athens County', href: '/courts/athens-county' },
];

const faqs = [
  {
    question: `I was charged with OVI near Ohio University. What should I do first?`,
    answer: `An OVI charge near Ohio University falls under the jurisdiction of Athens Municipal Court at 8 E. Washington St, Athens, OH 45701. Your first step should be to contact an experienced OVI defense attorney immediately. Under Ohio law (ORC 4511.19), an OVI conviction carries serious consequences including fines, license suspension, and possible jail time. Critically, you have only 30 days from the date of your arrest to request an Administrative License Suspension (ALS) appeal with the court. Missing that deadline means your license suspension becomes final. As a student, a conviction can also affect your financial aid, housing, and academic standing. Do not wait — call Jwayyed Law LLC at (614) 285-5482 as soon as possible after your arrest.`,
  },
  {
    question: `What types of cases does Athens Municipal Court handle?`,
    answer: `Athens Municipal Court at 8 E. Washington St, Athens, OH 45701 handles misdemeanor criminal cases, OVI and DUI charges, traffic violations, and civil cases where the amount in dispute is under $15,000. This includes first- and second-degree misdemeanors such as disorderly conduct, minor in possession (MIP), criminal trespassing, petty theft, and domestic violence. For charges arising on or near Ohio University's campus, Municipal Court is typically where those matters are heard. More serious felony charges are transferred to Athens County Common Pleas Court at 1 S. Court St. Our firm represents clients in both courts.`,
  },
  {
    question: `What is the ALS appeal deadline and why does it matter in Athens County?`,
    answer: `If your license was administratively suspended at the time of your OVI arrest in Athens County — which occurs automatically when you refuse or fail a breath, blood, or urine test — you have exactly 30 days to file an Administrative License Suspension (ALS) appeal with Athens Municipal Court. This deadline is set by Ohio statute and cannot be extended. A successful ALS appeal can restore your driving privileges while your criminal case is still pending. Given the limited transportation options in Athens and the surrounding Appalachian region, a license suspension can have a severe impact on your daily life, your job, and your academic schedule if you are a student. Jwayyed Law LLC can file your ALS appeal quickly and fight the suspension on your behalf.`,
  },
  {
    question: `What are the penalties for a misdemeanor conviction in Ohio?`,
    answer: `Ohio classifies misdemeanors in five tiers. A first-degree misdemeanor (M1), the most serious, carries up to 180 days in jail and fines up to $1,000 under ORC 2929.24 and 2929.28. A second-degree misdemeanor (M2) carries up to 90 days in jail and fines up to $750. Third- and fourth-degree misdemeanors carry lesser penalties, and minor misdemeanors carry only a fine of up to $150 with no jail time. Common charges in Athens County — such as disorderly conduct, open container, underage alcohol consumption, and petty theft — are often M4s or minor misdemeanors, but OVI is typically an M1. Even minor convictions can show up on background checks and affect employment and academic opportunities. Jwayyed Law LLC works to minimize or eliminate these consequences.`,
  },
  {
    question: `Am I eligible for expungement of my Athens County conviction?`,
    answer: `Ohio's expungement law (ORC 2953.31 et seq.) allows many misdemeanor and even some felony convictions to be sealed from public record. For misdemeanors, you are generally eligible to apply one year after your case concludes. For felonies, the waiting period is typically three years. Certain convictions — including most OVI/DUI convictions, first-degree misdemeanor domestic violence, and some violent offenses — are not eligible for expungement. For Athens County residents and Ohio University students who may face employment or academic consequences from a record, expungement can be life-changing. Our firm can evaluate your eligibility and handle the expungement petition process in Athens County Common Pleas Court.`,
  },
  {
    question: `Can Jwayyed Law LLC help me form a business in Athens County?`,
    answer: `Yes. Athens County has a growing small business community, including many businesses that serve the Ohio University population. Jwayyed Law LLC can assist with business formation and structuring under Ohio law. Forming a limited liability company (LLC) under ORC Chapter 1706 is one of the most popular choices for small business owners because it provides personal liability protection and tax flexibility. We can prepare your Articles of Organization, draft an Operating Agreement, advise on registered agent requirements, and help you understand your obligations as a new business owner. Whether you are opening a restaurant, a retail shop, or a professional services firm in Athens or the surrounding communities, we can help you start on solid legal footing.`,
  },
  {
    question: `What is the difference between Athens Municipal Court and Athens County Common Pleas Court?`,
    answer: `Athens Municipal Court (8 E. Washington St) handles misdemeanor criminal cases, traffic matters, OVI charges, and civil claims under $15,000. It is a court of limited jurisdiction. Athens County Common Pleas Court (1 S. Court St, Athens, OH 45701) is the court of general jurisdiction and handles felony criminal cases, serious civil disputes exceeding $15,000, domestic relations matters, and the probate of estates. If you are charged with a felony — such as felony OVI (fourth or fifth offense), drug trafficking, or felony assault — your case will be heard in Common Pleas. Jwayyed Law LLC is experienced in both courts and can represent you at every stage of your case.`,
  },
  {
    question: `Why should I hire an attorney for a charge in Athens County rather than just paying the fine?`,
    answer: `Many people assume minor charges are not worth fighting, but this can be a costly mistake. Even a minor misdemeanor conviction creates a permanent criminal record that can affect employment, professional licensing, housing applications, and educational opportunities. For Ohio University students, a conviction may trigger disciplinary proceedings under the university's student code of conduct. For OVI charges specifically, even a first offense under ORC 4511.19 results in a mandatory license suspension, fines, and potential jail time — consequences that affect your livelihood, not just your wallet. An experienced attorney can challenge the evidence, negotiate reduced charges, pursue diversion programs, or in some cases achieve a dismissal. The investment in legal representation nearly always outweighs the long-term cost of a conviction.`,
  },
];

export default function AthensCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Athens County Court Representation"
        description="Experienced legal representation for OVI, criminal defense, and civil matters in Athens County courts — including Athens Municipal Court and Athens County Common Pleas Court."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Athens County Legal Representation
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Athens County sits in the heart of southeastern Ohio, a region known for its Appalachian character, rolling hills,
              and close-knit communities. The county seat is Athens, home to Ohio University — one of the largest universities
              in the state — which means Athens Municipal Court and Common Pleas Court regularly handle matters involving
              students, faculty, and staff alongside the broader local population. Jwayyed Law LLC represents individuals and
              businesses across Athens County in OVI and DUI defense, misdemeanor criminal defense, civil litigation, personal
              injury claims, and business formation. We understand what is at stake for our clients — whether you are a local
              resident, a university student, or a small business owner in communities such as Albany, The Plains, Nelsonville,
              Coolville, or Glouster.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI charges under{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">
                ORC 4511.19
              </Link>{' '}
              are among the most frequently prosecuted offenses in Athens County, particularly given the presence of Ohio
              University and the social environment surrounding a large college campus. A first-offense OVI in Ohio is a
              first-degree misdemeanor carrying mandatory minimum penalties: a three-day jail term (or a mandatory driver
              intervention program), fines between $375 and $1,075, and a license suspension of one to three years. If your
              blood alcohol concentration (BAC) was 0.17 or higher — the so-called &ldquo;high-tier&rdquo; OVI — the penalties
              increase significantly. Under Ohio&rsquo;s Administrative License Suspension law, your license is automatically
              suspended at the time of arrest if you refuse or fail a chemical test, and you have just 30 days to appeal that
              suspension in Athens Municipal Court. Acting quickly is essential.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Beyond OVI, Athens Municipal Court sees a wide range of misdemeanor cases each year, many involving Ohio
              University students and young adults. Common charges include disorderly conduct, criminal trespassing, petty
              theft, minor in possession of alcohol (MIP), drug paraphernalia possession, and domestic violence. Under ORC
              2935.26, law enforcement officers may issue a citation in lieu of arrest for minor misdemeanors, but for first-
              and second-degree misdemeanors, a formal court process is typical. A first-degree misdemeanor conviction can
              result in up to 180 days in jail and fines up to $1,000. Jwayyed Law LLC evaluates every case for potential
              defenses, plea negotiations, and diversion opportunities that can spare clients the lasting consequences of a
              criminal conviction.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Athens County also presents opportunities for civil and business legal services. Personal injury matters —
              including car accidents on U.S. Route 33 and State Route 50, premises liability incidents, and similar claims
              — are governed by Ohio&rsquo;s two-year statute of limitations under ORC 2305.10. Missing this deadline
              extinguishes your right to compensation, making early legal consultation critical. For small businesses and
              entrepreneurs in Athens County, Jwayyed Law LLC assists with LLC formation under ORC Chapter 1706, partnership
              agreements, commercial contract drafting, and landlord-tenant disputes. Athens&rsquo;s economy, anchored by
              Ohio University, supports a vibrant ecosystem of restaurants, retail shops, and service businesses, many of
              which benefit from sound legal guidance at startup and throughout their operations.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Athens County Courts
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Athens Municipal Court</h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif]">8 E. Washington St, Athens, OH 45701</p>
                <p className="text-sm text-gray-600 mt-1">Misdemeanors, OVI/DUI, traffic violations, civil claims under $15,000</p>
                <p className="text-sm mt-2">
                  <a
                    href="https://www.google.com/maps?q=8+E+Washington+St,+Athens,+OH+45701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b87333] underline hover:opacity-80"
                  >
                    Get directions (Google Maps)
                  </a>
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Athens County Common Pleas Court</h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif]">1 S. Court St, Athens, OH 45701</p>
                <p className="text-sm text-gray-600 mt-1">Felony cases, major civil disputes, domestic relations, probate</p>
                <p className="text-sm mt-2">
                  <a
                    href="https://www.google.com/maps?q=1+S+Court+St,+Athens,+OH+45701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b87333] underline hover:opacity-80"
                  >
                    Get directions (Google Maps)
                  </a>
                </p>
              </div>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Services We Provide in Athens County
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li>
                <Link
                  href="/locations/athens-county/ovi-dui-defense-athens-municipal-court"
                  className="text-[#b87333] underline hover:opacity-80"
                >
                  OVI/DUI Defense
                </Link>
                : Challenging breath and blood test results, filing ALS appeals, pursuing dismissals and reduced charges in
                Athens Municipal Court and Common Pleas Court.
              </li>
              <li>
                <Link
                  href="/locations/athens-county/criminal-misdemeanor-defense-athens-municipal-court"
                  className="text-[#b87333] underline hover:opacity-80"
                >
                  Misdemeanor Criminal Defense
                </Link>
                : Representation for disorderly conduct, MIP, petty theft, drug paraphernalia, domestic violence, and
                other misdemeanor charges in Athens Municipal Court.
              </li>
              <li>
                <Link
                  href="/locations/athens-county/personal-injury-athens-county"
                  className="text-[#b87333] underline hover:opacity-80"
                >
                  Personal Injury
                </Link>
                : Pursuing compensation for accident victims within Ohio&rsquo;s two-year statute of limitations under ORC 2305.10.
              </li>
              <li>
                <Link
                  href="/locations/athens-county/business-formation-llc-athens-county"
                  className="text-[#b87333] underline hover:opacity-80"
                >
                  Business Formation &amp; LLC
                </Link>
                : LLC formation under ORC Chapter 1706, operating agreements, and commercial contracts for Athens County businesses.
              </li>
              <li>
                <strong>Expungement &amp; Record Sealing</strong>: Petitioning for record sealing under ORC 2953.31 to give
                clients a fresh start after eligible convictions.
              </li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Choose Jwayyed Law LLC for Athens County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Jwayyed Law LLC is a Columbus-based firm serving clients across Ohio, including Athens County and the broader
              southeastern Ohio region. We understand that Athens County presents unique circumstances — from Ohio University
              students facing their first criminal charge to long-time residents dealing with a civil dispute or personal injury
              matter. We take the time to understand your specific situation, explain your options clearly, and pursue the
              strategy most likely to achieve a favorable outcome. We are available for consultations by phone, and we appear
              regularly in courts throughout Ohio. Call us at (614) 285-5482 or contact us online to discuss your Athens County
              legal matter. Please note that we do not handle immigration, juvenile, or probate matters.
            </p>

            <LocationsWeServe title="Athens County Legal Services" />
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
