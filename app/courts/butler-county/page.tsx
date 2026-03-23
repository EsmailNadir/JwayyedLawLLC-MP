import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Butler County Court Representation',
  description: 'Experienced legal representation in Butler County courts including Area Courts I, II, III and Hamilton Municipal Court. OVI defense, criminal defense.',
  keywords: [
    'Butler County court attorney',
    'Hamilton Municipal Court attorney',
    'OVI lawyer Butler County Ohio',
    'Butler County Area Court attorney',
    'West Chester criminal defense attorney',
    'Oxford OVI lawyer',
  ],
  openGraph: {
    title: 'Butler County Court Representation',
    url: 'https://www.jjlawohio.com/courts/butler-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/courts/butler-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Butler County', href: '/courts/butler-county' },
];

const faqs = [
  {
    question: `What are the OVI penalties for a first offense in Butler County, Ohio?`,
    answer: `A first-offense OVI in Ohio under ORC 4511.19 is a first-degree misdemeanor. The mandatory minimum penalties include: three days in jail or a mandatory driver intervention program, fines between $375 and $1,075, and a license suspension of one to three years. If your BAC was 0.17 or higher (high-tier OVI), the mandatory minimums increase to six consecutive days in jail, higher fines, and a longer suspension. A first OVI conviction also requires yellow restricted license plates and an ignition interlock device if you receive limited driving privileges. Butler County Area Courts and Hamilton Municipal Court impose these mandatory penalties — there is no way to waive them without a proper defense. An experienced OVI attorney can challenge the stop, the field sobriety tests, and the chemical test results to seek a reduction or dismissal.`,
  },
  {
    question: `Which Butler County court will my case be heard in?`,
    answer: `Butler County uses a unique structure with three Area Courts and a separate Hamilton Municipal Court. Butler County Area I Court (118 W. High St, Oxford) serves Oxford and surrounding western townships. Area II Court (101 High St, Hamilton) serves Hamilton and surrounding northern townships. Area III Court (9577 Beckett Rd, West Chester) serves West Chester and surrounding eastern townships. Hamilton Municipal Court (700 Hanover St, Hamilton) handles cases arising within the City of Hamilton. If you are unsure which court has jurisdiction over your case, Jwayyed Law LLC can identify the correct venue and represent you there. We practice in all four courts.`,
  },
  {
    question: `What is the 30-day ALS appeal deadline and how does it apply in Butler County?`,
    answer: `If you are arrested for OVI in Butler County and you refuse or fail a breath, blood, or urine test, the Ohio Bureau of Motor Vehicles automatically suspends your driver's license — this is an Administrative License Suspension (ALS). Ohio law provides exactly 30 days from the date of arrest to file an ALS appeal with the court handling your case. In Butler County, this means filing in the appropriate Area Court or in Hamilton Municipal Court. A successful ALS appeal can restore driving privileges while your criminal case proceeds, which is critical for Butler County residents who commute to Cincinnati, Dayton, or Columbus. Missing the 30-day deadline makes the suspension final and non-appealable through that process. Contact our firm immediately after an OVI arrest.`,
  },
  {
    question: `What types of misdemeanor cases do Butler County Area Courts handle?`,
    answer: `Butler County's Area Courts handle a full range of misdemeanor criminal cases including OVI/DUI, domestic violence, disorderly conduct, criminal damaging, petty theft, drug paraphernalia possession, underage alcohol consumption, and assault. Traffic-related misdemeanors such as reckless operation and driving under suspension are also common. Under ORC 2935.26, minor misdemeanors may result in a citation rather than an arrest, but first- and second-degree misdemeanors involve formal arrest and court proceedings. A first-degree misdemeanor carries up to 180 days in jail and fines up to $1,000 under ORC 2929.24. Miami University's presence in Oxford (Area I jurisdiction) also generates a share of student-related misdemeanor cases. Jwayyed Law LLC evaluates every case for defenses, diversion opportunities, and negotiated outcomes.`,
  },
  {
    question: `What is the statute of limitations for a personal injury claim in Butler County?`,
    answer: `Under ORC 2305.10, Ohio's statute of limitations for personal injury claims — including car accidents, premises liability, dog bites, and other negligence-based injuries — is two years from the date of the injury. If you do not file your lawsuit within that two-year window, your claim is permanently barred, regardless of the severity of your injuries or the clarity of fault. Butler County's I-75 corridor, U.S. Route 27, and heavily trafficked suburban roads in West Chester and Hamilton see significant accident activity. If you have been injured in Butler County, contact Jwayyed Law LLC promptly. Early legal involvement helps preserve evidence, identify witnesses, and protect your right to full compensation.`,
  },
  {
    question: `Can Jwayyed Law LLC help me form a business in Butler County?`,
    answer: `Yes. Butler County is one of the most economically dynamic counties in Ohio, with a strong business presence in West Chester, Fairfield, Hamilton, and Oxford. Jwayyed Law LLC assists with business formation under Ohio law, most commonly through LLC formation under ORC Chapter 1706. An LLC provides personal liability protection, flexible tax treatment, and operational simplicity. We prepare Articles of Organization, draft customized Operating Agreements, and advise on registered agent requirements and ongoing compliance. We also handle commercial contract drafting, partnership agreements, and general business legal matters. Whether you are launching a startup in West Chester or expanding an existing business in Hamilton, our firm provides practical legal guidance for Butler County business owners.`,
  },
  {
    question: `Am I eligible for expungement of a Butler County conviction?`,
    answer: `Ohio's expungement statute, ORC 2953.31, allows many misdemeanor and certain felony convictions to be sealed from public record. For misdemeanor convictions, the waiting period is one year from the completion of your sentence. For eligible felony convictions, it is generally three years. Expungement removes the conviction from most public databases — a significant benefit for employment, housing, and professional licensing purposes. OVI convictions, most domestic violence offenses, and serious violent felonies are not eligible for sealing. However, a broad range of first-time and non-violent convictions — including many Butler County misdemeanor offenses — can qualify. Jwayyed Law LLC can evaluate your eligibility and file the expungement petition in Butler County Common Pleas Court.`,
  },
  {
    question: `Why hire Jwayyed Law LLC for Butler County courts rather than handling the case myself?`,
    answer: `Representing yourself in any criminal or civil matter carries significant risks. In Butler County's Area Courts and Hamilton Municipal Court, prosecutors are experienced and familiar with local procedure. Even a seemingly minor misdemeanor can result in a permanent record, driver's license suspension, and fines that compound over time. For OVI charges specifically, the technical aspects of breath and blood testing, field sobriety test administration, and ALS appeals require specialized knowledge. An attorney can identify issues with the stop, the testing procedure, or the chain of custody of evidence that a non-lawyer would not recognize. For civil and business matters, an attorney protects your legal rights and helps you avoid costly mistakes. Jwayyed Law LLC offers consultations to help you understand your options before making any decisions.`,
  },
];

export default function ButlerCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Butler County Court Representation"
        description="Experienced legal representation in Butler County courts including Area Courts I, II, III and Hamilton Municipal Court. Serving OVI, criminal defense, personal injury, and business law clients throughout Butler County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Butler County Court Representation
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The greater Cincinnati area has multiple courts and counties. Butler County is served by three Area Courts
              (I, II, and III) located in Oxford, Hamilton, and West Chester, plus Hamilton Municipal Court in the city
              of Hamilton. Butler County courts handle various legal matters including criminal cases, OVI/DUI charges,
              civil disputes, and traffic violations. At Jwayyed Law LLC, we provide experienced representation in Butler
              County courts. Please note that we do not handle immigration matters, juvenile matters, or probate matters
              in these courts.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI defense is a cornerstone of our Butler County practice. Under{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">
                ORC 4511.19
              </Link>
              , Ohio imposes mandatory minimum penalties on OVI convictions that courts cannot waive without a proper
              defense. A first offense carries fines of $375 to $1,075, a license suspension of one to three years, and
              at least three days in jail or a mandatory driver intervention program. High-tier OVI — where your BAC is
              0.17 or higher — carries steeper mandatory minimums. When you are arrested for OVI in Butler County, an
              Administrative License Suspension (ALS) is imposed automatically, and you have just 30 days to appeal
              it in the appropriate court. Given Butler County&rsquo;s suburban density and the significant commuting
              patterns between West Chester, Hamilton, Oxford, and the greater Cincinnati and Dayton metro areas, losing
              your license is a serious disruption. Our firm files ALS appeals promptly and builds comprehensive defenses
              challenging the traffic stop, field sobriety testing, and chemical testing procedures.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Misdemeanor criminal defense is equally important for Butler County residents. The Area Courts and Hamilton
              Municipal Court handle hundreds of misdemeanor cases each year — disorderly conduct, domestic violence,
              petty theft, drug paraphernalia, and driving-related offenses among them. Miami University&rsquo;s Oxford campus
              contributes to the caseload in Area I Court. Under Ohio law, first-degree misdemeanors carry penalties up
              to 180 days in jail and $1,000 in fines, and convictions create permanent records under ORC 2935.26 that
              affect employment, housing, and professional licensing. Our firm examines every case for evidentiary
              weaknesses, constitutional violations, and diversion opportunities — including intervention in lieu of
              conviction and other programs — to achieve the best possible outcome for our clients.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Butler County&rsquo;s dynamic economy — anchored by West Chester&rsquo;s corporate corridor, Hamilton&rsquo;s industrial
              heritage, and Oxford&rsquo;s university ecosystem — creates substantial need for business and civil legal
              services. Jwayyed Law LLC assists Butler County entrepreneurs with LLC formation under ORC Chapter 1706,
              commercial contract drafting, and business dispute resolution. For personal injury matters arising from
              accidents on I-75, I-275, U.S. Route 27, or local roads, Ohio&rsquo;s two-year statute of limitations under
              ORC 2305.10 means time is always a factor. We also handle landlord-tenant disputes and civil litigation
              for Butler County clients.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Butler County Area Courts I, II &amp; III
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              Located in <strong>Oxford</strong>, <strong>Hamilton</strong>, and <strong>West Chester</strong>, these
              three Area Courts handle misdemeanor and traffic cases, OVI, domestic violence, and civil matters within
              their jurisdictions. Each court has its own territorial jurisdiction — for example, Area I serves the City
              of Oxford and Hanover, Milford, Morgan, Oxford, Reily, and Wayne Townships. If your case is in one of
              these courts, having an attorney who knows the court, the judges, and local procedures can make a real
              difference. We represent clients in all three Area Courts and can help with misdemeanor criminal defense,
              OVI/DUI, traffic matters, and civil cases within the court&rsquo;s jurisdictional limits.
            </p>
            <div className="grid md:grid-cols-1 gap-6 mb-6">
              <div id="area-i-court" className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Butler County Area I Court</h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif]">118 West High Street, Oxford, OH 45056</p>
                <p className="text-sm text-gray-600 mt-1">Phone: (513) 523-4748</p>
                <p className="text-sm text-gray-600 mt-1">Serves: City of Oxford; Hanover, Milford, Morgan, Oxford, Reily, and Wayne Townships</p>
                <p className="text-sm mt-1">
                  <a
                    href="https://www.google.com/maps?q=118+West+High+Street,+Oxford,+OH+45056"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b87333] underline hover:opacity-80"
                  >
                    Get directions (Google Maps)
                  </a>
                </p>
              </div>
              <div id="area-ii-court" className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Butler County Area II Court</h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif]">101 High St, Hamilton, OH 45011</p>
                <p className="text-sm text-gray-600 mt-1">Phone: (513) 887-3459</p>
                <p className="text-sm mt-1">
                  <a
                    href="https://www.google.com/maps?q=101+High+St,+Hamilton,+OH+45011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b87333] underline hover:opacity-80"
                  >
                    Get directions (Google Maps)
                  </a>
                </p>
              </div>
              <div id="area-iii-court" className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Butler County Area III Court</h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif]">9577 Beckett Rd #300, West Chester, OH 45069</p>
                <p className="text-sm text-gray-600 mt-1">Phone: (513) 867-5070</p>
                <p className="text-sm mt-1">
                  <a
                    href="https://www.google.com/maps?q=9577+Beckett+Rd,+West+Chester,+OH+45069"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b87333] underline hover:opacity-80"
                  >
                    Get directions (Google Maps)
                  </a>
                </p>
              </div>
            </div>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-600 text-sm mb-8">
              For more information on jurisdiction and hours, visit the Butler County Area Courts at{' '}
              <a
                href="https://areacourts.bcohio.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b87333] underline hover:opacity-80"
              >
                areacourts.bcohio.gov
              </a>{' '}
              (
              <a
                href="https://areacourts.bcohio.gov/about/area_i_court.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b87333] underline hover:opacity-80"
              >
                Area I jurisdiction
              </a>
              ).
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Hamilton Municipal Court (City of Hamilton)
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              The City of Hamilton has its own Municipal Court, separate from the Butler County Area II Court (which is
              also located in Hamilton). Hamilton Municipal Court is located at 700 Hanover Street, Hamilton, OH 45011.
              If your case is in Hamilton Municipal Court, we can help with misdemeanor criminal defense, OVI/DUI,
              traffic violations, and civil matters within the court&rsquo;s jurisdiction. Our attorney is familiar with
              court procedures and can work to achieve the best possible outcome for your case.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link
                href="/courts/hamilton-municipal-court"
                className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Hamilton Municipal Court</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  700 Hanover Street, Hamilton, OH 45011. Misdemeanor cases, OVI/DUI, and traffic violations.
                </p>
              </Link>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Services We Provide in Butler County
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li>
                <Link
                  href="/locations/butler-county/ovi-dui-defense-butler-county-area-courts"
                  className="text-[#b87333] underline hover:opacity-80"
                >
                  OVI/DUI Defense
                </Link>
                : ALS appeals, challenging field sobriety and chemical tests, and pursuing the best possible outcome
                in all Butler County courts.
              </li>
              <li>
                <Link
                  href="/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts"
                  className="text-[#b87333] underline hover:opacity-80"
                >
                  Misdemeanor Criminal Defense
                </Link>
                : Representation for disorderly conduct, domestic violence, theft, drug offenses, and other
                misdemeanor charges in Butler County Area Courts and Hamilton Municipal Court.
              </li>
              <li>
                <Link
                  href="/locations/butler-county/personal-injury-butler-county"
                  className="text-[#b87333] underline hover:opacity-80"
                >
                  Personal Injury
                </Link>
                : Pursuing compensation for accident victims in Butler County within Ohio&rsquo;s two-year statute of
                limitations under ORC 2305.10.
              </li>
              <li>
                <Link
                  href="/locations/butler-county/business-formation-llc-butler-county"
                  className="text-[#b87333] underline hover:opacity-80"
                >
                  Business Formation &amp; LLC
                </Link>
                : LLC formation under ORC Chapter 1706, operating agreements, and commercial contracts for Butler
                County businesses.
              </li>
              <li>
                <strong>Expungement &amp; Record Sealing</strong>: Petitioning to seal eligible criminal records under
                ORC 2953.31 for a fresh start.
              </li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Why Choose Jwayyed Law LLC for Butler County Courts
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We represent clients in the Butler County Area Courts (I, II, and III) and in Hamilton Municipal Court.
              Whether your case is in Oxford, Hamilton, or West Chester, we can help with misdemeanor criminal defense,
              OVI/DUI charges, traffic matters, civil cases, personal injury claims, and business legal needs. Our
              attorney understands local procedures and works to protect your rights and achieve the best possible
              outcome. Contact us to discuss your case and schedule a consultation at (614) 285-5482.
            </p>

            <LocationsWeServe title="Butler County Legal Services" />
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
