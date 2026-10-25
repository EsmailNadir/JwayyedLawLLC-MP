import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Delaware County Court Representation',
  description:
    'Delaware County Municipal Court and Common Pleas Court in Delaware, Ohio: addresses, what each hears, and the OVI, criminal and civil cases the firm handles.',
  keywords: [
    'Delaware County OVI attorney',
    'Delaware County criminal defense',
    'Delaware County Municipal Court lawyer',
    'Delaware County DUI attorney',
    'Powell OVI attorney',
    'Lewis Center criminal defense',
    'Delaware County Common Pleas',
    'ALS appeal Delaware County',
  ],
  openGraph: {
    title: 'Delaware County Court Representation | Jwayyed Law LLC',
    description: 'The Delaware County courts and the OVI, criminal and civil cases the firm handles there, from Powell to Sunbury.',
    url: 'https://www.jjlawohio.com/courts/delaware-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/delaware-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Delaware County', href: '/courts/delaware-county' },
];

const faqs = [
  {
    question: 'What are the OVI penalties in Delaware County, Ohio?',
    answer:
      'OVI (Operating a Vehicle Impaired) is governed by ORC 4511.19. A first offense is a first-degree misdemeanor with a minimum 3 days in jail (or a 3-day driver intervention program), a fine of $375 to $1,075, a mandatory license suspension of 1 to 3 years, and possible vehicle immobilization. A second offense within 10 years brings a minimum 10 days in jail, higher fines and possible ignition interlock requirements. Under House Bill 37 (effective April 9, 2025), courts have discretion to waive the 15-day hard suspension if the defendant agrees to use an ignition interlock device. An OVI attorney can challenge the stop, the field sobriety tests and the breath or blood test procedures to pursue reduced charges or dismissal.',
  },
  {
    question: 'What does Delaware County Municipal Court handle?',
    answer:
      'Delaware County Municipal Court (70 N. Union St, Delaware, OH 43015) hears misdemeanor criminal offenses, OVI and DUI charges, traffic violations, civil cases up to $15,000, small claims and evictions within Delaware County. It also handles arraignments and preliminary hearings in felony cases before they are bound over to the Delaware County Common Pleas Court. Judges and magistrates preside over most misdemeanor and traffic matters, including OVI. A misdemeanor or OVI charge in Delaware, Powell, Westerville, Lewis Center, Galena, Sunbury or another Delaware County community is heard there.',
  },
  {
    question: 'How long do I have to appeal my Administrative License Suspension (ALS) in Delaware County?',
    answer:
      'If you are arrested for OVI in Delaware County and refuse a breath or blood test or test over the legal limit (0.08% BAC for adults, 0.04% for commercial drivers, 0.02% for minors under ORC 4511.19), the officer imposes an Administrative License Suspension (ALS) under ORC 4511.191 on the spot. You have only 30 days from the date of the ALS to file an appeal in Delaware County Municipal Court. Missing that hard deadline forfeits your right to challenge the suspension. The appeal is separate from the criminal case and must show grounds such as an improper stop, failure to properly inform you of the consequences, or procedural errors. Contact an attorney right after the arrest.',
  },
  {
    question: 'What are the maximum penalties for misdemeanor charges in Delaware County?',
    answer:
      'Ohio has five degrees of misdemeanor under ORC 2929.24. A first-degree misdemeanor carries up to 180 days in jail and a $1,000 fine; second-degree, up to 90 days and $750; third-degree, up to 60 days and $500; fourth-degree, up to 30 days and $250. A minor misdemeanor carries no jail and a fine up to $150. Common first-degree misdemeanors in Delaware County include a first OVI, first-offense domestic violence, assault, theft under $1,000 and possession of small quantities of drugs. An attorney can often negotiate with Delaware County prosecutors for reduced charges, diversion or community service in place of jail.',
  },
  {
    question: 'How do I choose the right attorney for my Delaware County case?',
    answer:
      "Look for an attorney with experience in Delaware County Municipal Court who knows the local prosecutors, judges and procedures. Ask whether the attorney handles cases personally or passes them to associates. Expect a plain explanation of your rights, the realistic range of outcomes and a strategy for your case. On an OVI, ask about experience challenging breathalyzer calibration records, field sobriety test administration under NHTSA standards, and the constitutionality of the stop. At Jwayyed Law LLC, the attorney personally handles every Delaware County case, from the first consultation through resolution.",
  },
  {
    question: 'What is the difference between Delaware County Municipal Court and Common Pleas Court?',
    answer:
      'Delaware County Municipal Court handles misdemeanors (OVI, traffic, minor criminal charges) and civil cases up to $15,000. Delaware County Common Pleas Court (91 N. Sandusky St, Delaware, OH 43015) handles felony cases, civil cases over $15,000, domestic relations (divorce, custody) and probate. A felony charge usually starts in Municipal Court for arraignment and preliminary hearing, then is bound over to Common Pleas. If an OVI is elevated to a felony, for example a fourth OVI within 10 years under ORC 4511.19(G)(1)(d), it is prosecuted in Common Pleas with higher penalties.',
  },
  {
    question: 'Am I eligible for expungement of a criminal record in Ohio?',
    answer:
      "Ohio's sealing law was expanded by Senate Bill 288 (effective October 2023) and now covers many misdemeanor and felony convictions. Under ORC 2953.32, most first-degree misdemeanor convictions become eligible for sealing one year after discharge (completion of the sentence, including probation). Some offenses, including OVI convictions, most traffic violations, domestic violence and certain sex offenses, cannot be sealed however much time passes. A sealed record is hidden from most employers and the public. In Delaware County the application is filed in Common Pleas Court, which holds a hearing to weigh your rehabilitation against the state's interest. An attorney can review your record and advise whether sealing is available.",
  },
  {
    question: 'What should I do immediately if I am charged with OVI in Delaware County?',
    answer:
      'First, do not say anything to police beyond identifying yourself. Second, note the details of the stop: the time, the location, the reason the officer gave, the tests you were asked to take and your responses. Third, contact an OVI attorney as soon as possible, ideally within 24 to 48 hours, because the 30-day ALS appeal deadline is already running. Fourth, write down everything you remember while it is fresh. Fifth, find any witnesses or video of the stop. At arraignment you will enter a plea, and an attorney there makes sure you do not waive rights or plead without understanding the consequences. Call Jwayyed Law LLC at (614) 285-5482 to schedule a consultation.',
  },
];

const SERVICES = [
  { href: '/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court', title: 'OVI/DUI defense', subtitle: 'Delaware County Municipal Court' },
  { href: '/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court', title: 'Misdemeanor criminal defense', subtitle: 'Delaware County Municipal Court' },
  { href: '/locations/delaware-county/personal-injury-delaware-county', title: 'Personal injury', subtitle: 'Delaware County' },
  { href: '/locations/delaware-county/business-formation-llc-delaware-county', title: 'Business formation and LLC', subtitle: 'Delaware County' },
];

export default function DelawareCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Delaware County courts"
        description="Delaware County cases are heard in two courts in downtown Delaware. Misdemeanors, OVI and felony arraignments start at Delaware County Municipal Court on N. Union St."
      />

      <Section
        title="Find your court"
        intro={
          <p>
            Delaware County is one of Ohio&rsquo;s fastest-growing counties, running north of Columbus through Powell, Lewis Center,
            part of Dublin, part of Westerville, Sunbury, Galena and the county seat of Delaware. The caseload in both courts has grown
            with it.
          </p>
        }
      >
        <FactTable
          title="Delaware County Municipal Court"
          rows={[
            { label: 'Address', value: '70 N. Union St, Delaware, OH 43015' },
            { label: 'Hears', value: 'OVI, misdemeanor criminal cases, traffic violations, civil claims up to $15,000, small claims, evictions' },
            { label: 'Felony cases', value: 'Arraignments and preliminary hearings before bindover to Common Pleas' },
          ]}
        />
        <FactTable
          title="Delaware County Common Pleas Court"
          rows={[
            { label: 'Address', value: '91 N. Sandusky St, Delaware, OH 43015' },
            { label: 'Hears', value: 'Felony criminal cases, civil cases over $15,000, domestic relations, probate' },
          ]}
        />
        <LinkGrid
          columns={2}
          links={[{ href: '/courts/delaware-county-municipal-court', title: 'Delaware County Municipal Court guide', subtitle: 'OVI, misdemeanors and US 23 traffic cases' }]}
        />
      </Section>

      <Section title="OVI charges in Delaware County" tone="ice">
        <FactTable
          title="Legal limits under ORC 4511.19"
          rows={[
            { label: 'Adults', value: 'BAC of 0.08% or higher' },
            { label: 'Commercial drivers', value: '0.04%' },
            { label: 'Drivers under 21', value: '0.02%' },
          ]}
        />
        <p>
          Every step of an OVI case (the stop, the field sobriety tests, the breath test and the advisement of rights) must follow
          strict protocols under the Ohio Administrative Code and NHTSA standards. An error at any stage can lead to suppression of
          evidence or dismissal. The firm reviews every piece of evidence for those errors.
        </p>
        <Callout title="HB 37 (effective April 9, 2025)">
          House Bill 37 updated OVI sentencing and administrative license suspension procedures, giving courts broader discretion over
          ignition interlock requirements and the hard suspension period.
        </Callout>
        <h3>Right after an OVI arrest</h3>
        <Steps
          steps={[
            { title: 'Say nothing beyond your identity', body: 'Anything you say can be used against you.' },
            { title: 'Note the details', body: 'Time, location, the reason given for the stop, the tests you were asked to take and your responses.' },
            { title: 'Call an attorney within 24 to 48 hours', body: 'The 30-day ALS appeal deadline is already running.' },
            { title: 'Gather witnesses and video', body: 'Anything that may have captured the stop.' },
          ]}
        />
      </Section>

      <Section title="Misdemeanor charges in Delaware County">
        <p>
          Delaware County Municipal Court hears the full range of misdemeanors, including domestic violence under ORC 2919.25, assault
          under ORC 2903.13, theft under ORC 2913.02, drug possession under ORC 2925.11 and disorderly conduct under ORC 2917.11. A
          conviction can bring fines, jail, probation and a permanent record that affects employment, housing and professional
          licensing.
        </p>
        <FactTable
          title="Ohio misdemeanor penalties (ORC 2929.24)"
          rows={[
            { label: 'First-degree misdemeanor', value: 'Up to 180 days in jail and a $1,000 fine' },
            { label: 'Second-degree misdemeanor', value: 'Up to 90 days and $750' },
            { label: 'Third-degree misdemeanor', value: 'Up to 60 days and $500' },
            { label: 'Fourth-degree misdemeanor', value: 'Up to 30 days and $250' },
            { label: 'Minor misdemeanor', value: 'No jail; a fine up to $150' },
          ]}
        />
      </Section>

      <Section title="Civil and injury matters" tone="ice">
        <p>
          The firm handles landlord-tenant disputes, contract claims and other civil litigation in Delaware County Municipal Court (up
          to $15,000) and Delaware County Common Pleas Court (over $15,000), along with personal injury cases. That might be a breach of
          contract with a Powell business, a security deposit dispute with a Delaware landlord, or an injury from a crash on Route 23.
        </p>
        <PointGrid
          points={[
            { title: 'OVI / DUI defense', body: 'Stops, field sobriety tests, breath and blood tests; ALS appeals (ORC 4511.191); license reinstatement.' },
            { title: 'Misdemeanor defense', body: 'Domestic violence, assault, theft and drug possession.' },
            { title: 'Traffic violations', body: 'Reckless operation, driving under suspension, speeding, following too closely.' },
            { title: 'Civil litigation', body: 'Contract disputes, landlord-tenant matters and small claims.' },
            { title: 'Personal injury', body: 'Auto accidents, premises liability and other injury claims.' },
            { title: 'Record sealing', body: 'Eligibility review and sealing applications under ORC 2953.32.' },
          ]}
        />
      </Section>

      <Section title="What the firm handles in Delaware County">
        <LinkGrid links={SERVICES} columns={2} />
        <p>
          The firm serves Delaware, Powell, Lewis Center, Westerville, Dublin, Sunbury, Galena, Ostrander and the surrounding
          communities. The attorney personally handles every Delaware County case; you are not passed to a paralegal or associate.
          Call <strong>(614) 285-5482</strong> or contact the firm online to schedule a consultation.
        </p>
        <h3>Neighboring counties</h3>
        <LinkGrid
          links={[
            { href: '/courts/franklin-county', title: 'Franklin County' },
            { href: '/courts/morrow-county', title: 'Morrow County' },
            { href: '/courts/pickaway-county', title: 'Pickaway County' },
          ]}
        />
      </Section>

      <LocationsWeServe title="Delaware County Legal Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
