import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Butler County Court Representation',
  description:
    'Butler County Area Courts I, II and III and Hamilton Municipal Court: addresses, phone numbers, which court hears your case, and what the firm handles.',
  keywords: [
    'Butler County court attorney',
    'Hamilton Municipal Court attorney',
    'OVI lawyer Butler County Ohio',
    'Butler County Area Court attorney',
    'West Chester criminal defense attorney',
    'Oxford OVI lawyer',
  ],
  openGraph: {
    title: 'Butler County Court Representation | Jwayyed Law LLC',
    description: 'The four Butler County courts for misdemeanor, OVI and traffic cases, and the cases the firm handles there.',
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
    question: 'What are the OVI penalties for a first offense in Butler County, Ohio?',
    answer:
      'A first-offense OVI under ORC 4511.19 is a first-degree misdemeanor. The mandatory minimums are three days in jail or a mandatory driver intervention program, fines between $375 and $1,075, and a license suspension of one to three years. With a BAC of 0.17 or higher (high-tier OVI), the minimums rise to six consecutive days in jail, higher fines and a longer suspension. A first OVI conviction also requires yellow restricted license plates and an ignition interlock device if you receive limited driving privileges. The Butler County Area Courts and Hamilton Municipal Court impose these mandatory penalties. An OVI attorney can challenge the stop, the field sobriety tests and the chemical test results to seek a reduction or dismissal.',
  },
  {
    question: 'Which Butler County court will my case be heard in?',
    answer:
      'Butler County has three Area Courts and a separate Hamilton Municipal Court. Area I Court (118 W. High St, Oxford) serves Oxford and the surrounding western townships. Area II Court (101 High St, Hamilton) serves Hamilton and the surrounding northern townships. Area III Court (9577 Beckett Rd, West Chester) serves West Chester and the surrounding eastern townships. Hamilton Municipal Court (700 Hanover St, Hamilton) handles cases arising within the City of Hamilton. If you are not sure which court has your case, the firm can identify the right one. It practices in all four.',
  },
  {
    question: 'What is the 30-day ALS appeal deadline and how does it apply in Butler County?',
    answer:
      "If you are arrested for OVI in Butler County and refuse or fail a breath, blood or urine test, the Ohio Bureau of Motor Vehicles automatically suspends your license. This is an Administrative License Suspension (ALS). You have exactly 30 days from the date of arrest to file an ALS appeal with the court handling your case: the right Area Court or Hamilton Municipal Court. A successful appeal can restore driving privileges while the criminal case proceeds, which matters for residents who commute to Cincinnati, Dayton or Columbus. Missing the deadline makes the suspension final and non-appealable through that process. Contact the firm right after an OVI arrest.",
  },
  {
    question: 'What types of misdemeanor cases do Butler County Area Courts handle?',
    answer:
      "OVI/DUI, domestic violence, disorderly conduct, criminal damaging, petty theft, drug paraphernalia possession, underage alcohol consumption and assault, along with traffic misdemeanors such as reckless operation and driving under suspension. Under ORC 2935.26, minor misdemeanors may lead to a citation instead of an arrest, but first- and second-degree misdemeanors involve formal arrest and court proceedings. A first-degree misdemeanor carries up to 180 days in jail and fines up to $1,000 under ORC 2929.24. Miami University's presence in Oxford (Area I jurisdiction) adds student-related cases. The firm looks at every case for defenses, diversion and negotiated outcomes.",
  },
  {
    question: 'What is the statute of limitations for a personal injury claim in Butler County?',
    answer:
      "Under ORC 2305.10, Ohio's statute of limitations for personal injury claims, including car accidents, premises liability, dog bites and other negligence-based injuries, is two years from the date of injury. If you do not file within that window, the claim is permanently barred, however serious the injuries or clear the fault. Butler County's I-75 corridor, U.S. Route 27 and busy suburban roads in West Chester and Hamilton see many accidents. If you were injured in Butler County, contact the firm promptly; early involvement helps preserve evidence and identify witnesses.",
  },
  {
    question: 'Can Jwayyed Law LLC help me form a business in Butler County?',
    answer:
      'Yes. Butler County has a strong business presence in West Chester, Fairfield, Hamilton and Oxford. The firm handles business formation under Ohio law, most often LLC formation under ORC Chapter 1706, which offers personal liability protection, flexible tax treatment and simple operation. It prepares Articles of Organization, drafts Operating Agreements, and advises on registered agent requirements and ongoing compliance. It also handles commercial contract drafting, partnership agreements and general business matters, whether you are launching a startup in West Chester or expanding a business in Hamilton.',
  },
  {
    question: 'Am I eligible for expungement of a Butler County conviction?',
    answer:
      "Ohio's expungement statute, ORC 2953.31, allows many misdemeanor and certain felony convictions to be sealed. For misdemeanors, the waiting period is one year from the completion of your sentence. For eligible felonies, it is generally three years. Sealing removes the conviction from most public databases, which helps with employment, housing and professional licensing. OVI convictions, most domestic violence offenses and serious violent felonies are not eligible, but many first-time and non-violent convictions, including many Butler County misdemeanors, can qualify. The firm can evaluate your eligibility and file the petition in Butler County Common Pleas Court.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for Butler County courts rather than handling the case myself?',
    answer:
      "In the Area Courts and Hamilton Municipal Court, the prosecutors know local procedure well. Even a seemingly minor misdemeanor can mean a permanent record, a license suspension and fines that add up. On an OVI, breath and blood testing, field sobriety test administration and ALS appeals are technical. An attorney can spot problems with the stop, the testing procedure or the chain of custody that a non-lawyer would miss. In civil and business matters, an attorney protects your rights and helps you avoid costly mistakes. The firm offers consultations so you can understand your options before you decide.",
  },
];

const linkClass = 'text-sky-deep underline';

function directions(href: string) {
  return (
    <a className={linkClass} href={href} target="_blank" rel="noopener noreferrer">
      Get directions (Google Maps)
    </a>
  );
}

const SERVICES = [
  {
    href: '/locations/butler-county/ovi-dui-defense-butler-county-area-courts',
    title: 'OVI/DUI defense',
    subtitle: 'ALS appeals and challenges to field sobriety and chemical tests in every Butler County court',
  },
  {
    href: '/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts',
    title: 'Misdemeanor criminal defense',
    subtitle: 'Disorderly conduct, domestic violence, theft, drug offenses and more',
  },
  {
    href: '/locations/butler-county/personal-injury-butler-county',
    title: 'Personal injury',
    subtitle: 'Claims within the two-year limit under ORC 2305.10',
  },
  {
    href: '/locations/butler-county/business-formation-llc-butler-county',
    title: 'Business formation and LLC',
    subtitle: 'LLC formation under ORC Chapter 1706, operating agreements, commercial contracts',
  },
];

export default function ButlerCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Butler County courts"
        description="Butler County misdemeanor, OVI and traffic cases go to one of three Area Courts, in Oxford, Hamilton and West Chester, or to Hamilton Municipal Court for the city itself."
      />

      <Section
        title="Find your court"
        intro={
          <p>
            Where the case arose decides the court. Each Area Court has its own territory, and the City of Hamilton has its own
            municipal court, separate from Area II Court even though both sit in Hamilton.
          </p>
        }
      >
        <div id="area-i-court" className="scroll-mt-24">
          <FactTable
            title="Butler County Area I Court (Oxford)"
            rows={[
              { label: 'Address', value: '118 West High Street, Oxford, OH 45056' },
              { label: 'Phone', value: '(513) 523-4748' },
              { label: 'Serves', value: 'City of Oxford; Hanover, Milford, Morgan, Oxford, Reily and Wayne Townships' },
              { label: 'Directions', value: directions('https://www.google.com/maps?q=118+West+High+Street,+Oxford,+OH+45056') },
            ]}
            note="Miami University's Oxford campus adds student-related cases to this court's docket."
          />
        </div>
        <div id="area-ii-court" className="scroll-mt-24">
          <FactTable
            title="Butler County Area II Court (Hamilton)"
            rows={[
              { label: 'Address', value: '101 High St, Hamilton, OH 45011' },
              { label: 'Phone', value: '(513) 887-3459' },
              { label: 'Serves', value: 'Hamilton and the surrounding northern townships' },
              { label: 'Directions', value: directions('https://www.google.com/maps?q=101+High+St,+Hamilton,+OH+45011') },
            ]}
          />
        </div>
        <div id="area-iii-court" className="scroll-mt-24">
          <FactTable
            title="Butler County Area III Court (West Chester)"
            rows={[
              { label: 'Address', value: '9577 Beckett Rd #300, West Chester, OH 45069' },
              { label: 'Phone', value: '(513) 867-5070' },
              { label: 'Serves', value: 'West Chester and the surrounding eastern townships' },
              { label: 'Directions', value: directions('https://www.google.com/maps?q=9577+Beckett+Rd,+West+Chester,+OH+45069') },
            ]}
          />
        </div>
        <p>
          The three Area Courts hear misdemeanor and traffic cases, OVI, domestic violence and civil matters within their
          jurisdictions. For jurisdiction and hours, see the Butler County Area Courts at{' '}
          <a href="https://areacourts.bcohio.gov" target="_blank" rel="noopener noreferrer">
            areacourts.bcohio.gov
          </a>{' '}
          (
          <a href="https://areacourts.bcohio.gov/about/area_i_court.php" target="_blank" rel="noopener noreferrer">
            Area I jurisdiction
          </a>
          ).
        </p>
        <FactTable
          title="Hamilton Municipal Court (City of Hamilton)"
          rows={[
            { label: 'Address', value: '700 Hanover Street, Hamilton, OH 45011' },
            { label: 'Hears', value: 'Misdemeanor cases, OVI/DUI, traffic violations and civil matters arising within the City of Hamilton' },
          ]}
        />
        <LinkGrid
          columns={2}
          links={[{ href: '/courts/hamilton-municipal-court', title: 'Hamilton Municipal Court guide', subtitle: '700 Hanover Street: misdemeanors, OVI/DUI, traffic' }]}
        />
        <p>The firm represents clients in all four courts. It does not handle immigration, juvenile or probate matters in these courts.</p>
      </Section>

      <Section title="OVI charges in Butler County" tone="ice">
        <p>
          Ohio imposes mandatory minimum penalties on OVI convictions under <Link href="/ovi-dui-defense">ORC 4511.19</Link>.
        </p>
        <FactTable
          title="First-offense OVI"
          rows={[
            { label: 'Level', value: 'First-degree misdemeanor' },
            { label: 'Jail', value: 'At least three days, or a mandatory driver intervention program' },
            { label: 'Fines', value: '$375 to $1,075' },
            { label: 'License', value: 'Suspension of one to three years' },
            { label: 'High tier', value: 'BAC 0.17 or higher: six consecutive days in jail, higher fines and a longer suspension' },
            { label: 'Privileges', value: 'Yellow restricted plates and an ignition interlock device if you receive limited driving privileges' },
          ]}
        />
        <Callout title="Appeal the license suspension within 30 days">
          An Administrative License Suspension (ALS) is imposed automatically at arrest, and you have 30 days to appeal it in the
          court handling your case. With so many residents commuting between West Chester, Hamilton, Oxford and the Cincinnati and
          Dayton areas, losing a license is a serious disruption.
        </Callout>
        <p>The firm files ALS appeals promptly and challenges the traffic stop, the field sobriety testing and the chemical testing.</p>
      </Section>

      <Section title="Misdemeanor charges in Butler County">
        <p>
          The Area Courts and Hamilton Municipal Court hear hundreds of misdemeanor cases each year: disorderly conduct, domestic
          violence, petty theft, drug paraphernalia and driving-related offenses among them. A first-degree misdemeanor carries up to
          180 days in jail and $1,000 in fines, and a conviction creates a permanent record (ORC 2935.26) that affects employment,
          housing and professional licensing.
        </p>
        <p>
          The firm looks for evidentiary weaknesses, constitutional violations and diversion, including intervention in lieu of
          conviction and other programs. Eligible records can later be sealed under ORC 2953.31.
        </p>
      </Section>

      <Section title="Business, injury and civil matters" tone="ice">
        <p>
          West Chester&rsquo;s corporate corridor, Hamilton&rsquo;s industrial base and Oxford&rsquo;s university economy all need business
          and civil legal work. The firm handles LLC formation under ORC Chapter 1706, commercial contract drafting, business disputes,
          landlord-tenant disputes and civil litigation.
        </p>
        <p>
          For injuries from accidents on I-75, I-275, U.S. Route 27 or local roads, Ohio&rsquo;s two-year statute of limitations under
          ORC 2305.10 applies.
        </p>
      </Section>

      <Section title="What the firm handles in Butler County">
        <LinkGrid links={SERVICES} columns={2} />
        <p>
          Whether your case is in Oxford, Hamilton or West Chester, call (614) 285-5482 to discuss it and schedule a consultation.
        </p>
      </Section>

      <LocationsWeServe title="Butler County Legal Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
