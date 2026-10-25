import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Greene County Court Representation',
  description:
    'Fairborn and Xenia Municipal Courts, Greene County Common Pleas and Yellow Springs Mayor’s Court: which court hears your case and what the firm handles.',
  keywords: [
    'Greene County OVI attorney',
    'Fairborn Municipal Court lawyer',
    'Xenia Municipal Court attorney',
    'Greene County criminal defense',
    'Beavercreek OVI attorney',
    'Yellow Springs criminal defense',
    'Greene County DUI attorney',
    'Greene County Common Pleas',
  ],
  openGraph: {
    title: 'Greene County Court Representation | Jwayyed Law LLC',
    description: 'Greene County has two municipal courts. Which one hears your case, and what the firm handles in each.',
    url: 'https://www.jjlawohio.com/courts/greene-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/greene-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
];

const faqs = [
  {
    question: 'What is the difference between Fairborn Municipal Court and Xenia Municipal Court in Greene County?',
    answer:
      "Greene County has two separate municipal courts. Fairborn Municipal Court (1 W. Main St, Fairborn, OH 45324) covers the City of Fairborn, the City of Bath and Beavercreek City, so OVI, misdemeanor and traffic charges from those areas are heard there. Xenia Municipal Court (101 N. Detroit St, Xenia, OH 45385) serves the City of Xenia. A charge in Beavercreek goes to Fairborn Municipal Court, not Xenia; a charge in Xenia itself goes to Xenia Municipal Court. Yellow Springs has its own Mayor's Court for minor traffic and misdemeanor matters, though defendants can request transfer to the appropriate municipal court. Each court has its own procedures, local rules and prosecutorial practices.",
  },
  {
    question: 'What OVI penalties apply in Greene County courts?',
    answer:
      'OVI is governed by ORC 4511.19. A first offense, in Fairborn or Xenia Municipal Court, is a first-degree misdemeanor with a minimum 3 days in jail (or a 3-day driver intervention program), a fine of $375 to $1,075, and a license suspension of 1 to 3 years. With a BAC of 0.17% or higher ("high tier"), the minimum jail time doubles to 6 days. A second OVI within 10 years carries a mandatory 10-day minimum jail sentence, higher fines and possible 90-day vehicle immobilization. Under House Bill 37 (effective April 9, 2025), courts may waive the 15-day hard suspension for defendants who agree to install an ignition interlock device. Oral fluid testing is now an authorized chemical test alongside breath and blood.',
  },
  {
    question: 'How does the ALS appeal process work in Greene County?',
    answer:
      'The arresting officer imposes an Administrative License Suspension (ALS) at an OVI arrest in Greene County when the driver refuses a chemical test or tests at or above 0.08% BAC (ORC 4511.191). It is separate from the criminal case. Under ORC 4511.197, you have 30 days from the date of arrest to appeal in the right municipal court: Fairborn or Xenia, depending on where the arrest happened. The appeal can argue a lack of reasonable suspicion for the stop, failure to properly advise you of the ALS consequences, or improper testing. Winning can restore full driving privileges while the criminal case continues. The 30-day window cannot be extended.',
  },
  {
    question: 'What types of criminal cases does Greene County Common Pleas Court handle?',
    answer:
      'Greene County Common Pleas Court (45 N. Detroit St, Xenia, OH 45385) hears felony cases in Greene County. Ohio felonies run from F1 (most serious) through F5, plus aggravated murder and murder. Common Greene County felonies include felony OVI (third offense in 10 years = F4; fourth offense = F3 under ORC 4511.19(G)), felonious assault (ORC 2903.11), burglary (ORC 2911.12), drug trafficking (ORC 2925.03) and theft of $1,000 or more (ORC 2913.02). A felony starts in Fairborn or Xenia Municipal Court for arraignment and preliminary hearing, then is bound over to Common Pleas. Sentences range from 6 to 36 months for F5 offenses up to life in prison for F1 offenses, plus fines and post-release supervision.',
  },
  {
    question: "Does Yellow Springs Mayor's Court handle OVI and criminal cases in Greene County?",
    answer:
      "Yellow Springs Mayor's Court is a limited-jurisdiction court for minor misdemeanors and traffic offenses inside the village. Ohio mayor's courts cannot handle first-degree misdemeanors, fourth-degree misdemeanors that are domestic violence, or OVI charges; those must be transferred to the appropriate municipal court, here Fairborn Municipal Court, which covers the surrounding township area. With a citation returnable to Yellow Springs Mayor's Court, you may in some cases request transfer to Fairborn Municipal Court. Mayor's courts do not have the full procedural protections of a municipal court, so talk to an attorney about your options. For serious charges, Fairborn Municipal Court offers more procedural protection and a formal record.",
  },
  {
    question: 'What civil matters can be heard in Greene County courts?',
    answer:
      'Fairborn and Xenia Municipal Courts each hear civil cases up to $15,000 within their jurisdictions, including small claims, evictions (forcible entry and detainer under ORC Chapter 1923) and collections. Greene County Common Pleas Court hears civil cases over $15,000, including breach of contract, personal injury and business disputes, and has a Domestic Relations division for divorce, custody and support and a Probate division for estates and guardianships. The firm handles civil litigation, landlord-tenant matters, personal injury claims and business disputes in Greene County courts.',
  },
  {
    question: 'What should I know about expungement eligibility in Greene County?',
    answer:
      "Ohio's expanded sealing law (Senate Bill 288, effective October 2023) allows sealing of many misdemeanor and some felony convictions under ORC 2953.32. For misdemeanors, the waiting period is generally one year after completing the sentence, including probation. Exclusions include OVI convictions (not eligible under ORC 2953.36), domestic violence convictions, most traffic offenses and certain sex offenses. The application is filed in the court of conviction: Fairborn Municipal Court, Xenia Municipal Court or Greene County Common Pleas Court. The court holds a hearing and weighs your rehabilitation against the state's record-keeping interest. A sealed conviction is generally hidden from private employers and landlords. The firm handles the full sealing process for qualifying clients.",
  },
  {
    question: 'Why should I hire Jwayyed Law LLC for my Greene County OVI or criminal case?',
    answer:
      'You work directly with the attorney, not a paralegal or case manager. The firm practices in Fairborn and Xenia Municipal Courts and follows current Ohio law, including the 2025 OVI changes. On an OVI, it reviews the traffic stop, field sobriety test administration (NHTSA standards), breathalyzer calibration records (Ohio Administrative Code requirements) and the chain of custody for blood samples. It files timely ALS appeals, negotiates for reduced charges or diversion where appropriate, and tries the case if needed. Call (614) 285-5482 to schedule a consultation.',
  },
];

const SERVICES = [
  { href: '/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court', title: 'OVI/DUI defense', subtitle: 'Fairborn Municipal Court' },
  { href: '/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court', title: 'Misdemeanor criminal defense', subtitle: 'Fairborn Municipal Court' },
  { href: '/locations/greene-county/personal-injury-greene-county', title: 'Personal injury', subtitle: 'Greene County' },
  { href: '/locations/greene-county/business-formation-llc-greene-county', title: 'Business formation and LLC', subtitle: 'Greene County' },
];

export default function GreeneCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Greene County courts"
        description="Greene County has two separate municipal courts. An OVI arrest in Beavercreek goes to Fairborn Municipal Court, not Xenia, and the 30-day license suspension appeal is filed there."
      />

      <Section
        title="Find your court"
        intro={
          <p>
            Greene County sits in southwestern Ohio, bordered by Montgomery County to the west, and is home to Wright-Patterson Air
            Force Base. Its two municipal courts have separate judges, prosecutors, local rules and practices, so getting jurisdiction
            right matters from the first appearance.
          </p>
        }
      >
        <FactTable
          title="Fairborn Municipal Court"
          rows={[
            { label: 'Address', value: '1 W. Main St, Fairborn, OH 45324' },
            { label: 'Jurisdiction', value: 'City of Fairborn, Bath, Beavercreek City' },
            { label: 'Hears', value: 'OVI, misdemeanor criminal cases, traffic, civil up to $15,000' },
          ]}
        />
        <FactTable
          title="Xenia Municipal Court"
          rows={[
            { label: 'Address', value: '101 N. Detroit St, Xenia, OH 45385' },
            { label: 'Jurisdiction', value: 'City of Xenia' },
            { label: 'Hears', value: 'OVI, misdemeanor criminal cases, traffic, civil up to $15,000' },
          ]}
        />
        <FactTable
          title="Greene County Common Pleas Court"
          rows={[
            { label: 'Address', value: '45 N. Detroit St, Xenia, OH 45385' },
            { label: 'Hears', value: 'Felony criminal cases, civil cases over $15,000, domestic relations, probate' },
          ]}
        />
        <FactTable
          title="Yellow Springs Mayor's Court"
          rows={[
            { label: 'Location', value: 'Yellow Springs, OH' },
            {
              label: 'Hears',
              value: 'Minor misdemeanors and traffic violations within the Village of Yellow Springs; OVI and first-degree misdemeanors transfer to Fairborn Municipal Court',
            },
          ]}
        />
        <LinkGrid
          columns={2}
          links={[{ href: '/courts/fairborn-municipal-court', title: 'Fairborn Municipal Court guide', subtitle: 'OVI, misdemeanors and military clients' }]}
        />
      </Section>

      <Section title="OVI charges in Greene County" tone="ice">
        <p>Every OVI arrest under ORC 4511.19 has several points the defense can test.</p>
        <PointGrid
          points={[
            { title: 'The stop', body: 'Whether the officer had constitutionally sufficient reasonable articulable suspicion.' },
            { title: 'Field sobriety tests', body: 'Whether they were given in strict compliance with NHTSA standardized protocols.' },
            {
              title: 'The breath test',
              body: 'Whether the instrument (typically an Intoxilyzer 8000 in Ohio) was calibrated and the operator certified under the Ohio Administrative Code.',
            },
            { title: 'The ALS advisement', body: 'Whether it was properly given.' },
          ]}
        />
        <Callout title="Appeal the license suspension within 30 days">
          Under ORC 4511.197, the ALS appeal is due within 30 days of arrest, in Fairborn or Xenia Municipal Court depending on where
          the arrest happened.
        </Callout>
      </Section>

      <Section title="Misdemeanor and felony charges">
        <p>
          The firm defends assault, domestic violence, theft, drug possession and disorderly conduct charges from arraignment through
          trial. Under ORC 2935.26, officers may issue a citation instead of an arrest for most misdemeanors that are not first-degree.
          First-degree misdemeanor arrests (OVI, first-offense domestic violence, felonious assault reduced to a misdemeanor) usually
          lead to arraignment, where bond and release conditions are set. Counsel from the start keeps you from waiving rights or
          entering a plea you do not fully understand.
        </p>
        <p>
          Felony OVI, charged when a defendant has three or more prior OVI convictions within 10 years, is prosecuted in Common Pleas
          Court with possible prison time. The firm represents clients at both the municipal and Common Pleas levels, so the same counsel
          stays with the case.
        </p>
        <FactTable
          title="Charges the firm handles in Greene County"
          rows={[
            { label: 'Misdemeanors', value: 'Domestic violence (ORC 2919.25), assault (ORC 2903.13), theft (ORC 2913.02), drug possession (ORC 2925.11), disorderly conduct (ORC 2917.11)' },
            { label: 'Felonies', value: 'Felony OVI, felonious assault, drug trafficking, theft and other felonies in Common Pleas Court' },
            { label: 'Traffic', value: 'Driving under suspension (ORC 4510.11), reckless operation (ORC 4511.20) and other traffic matters' },
            { label: 'Civil', value: 'Contract disputes, landlord-tenant evictions, personal injury claims' },
            { label: 'Record sealing', value: 'Eligibility analysis and applications under ORC 2953.32' },
          ]}
        />
      </Section>

      <Section title="What the firm handles in Greene County" tone="ice">
        <LinkGrid links={SERVICES} columns={2} />
        <p>
          The firm serves clients throughout Greene County, including Xenia (the county seat), Fairborn, Beavercreek, Kettering,
          Centerville, Springboro and Yellow Springs. The attorney appears personally in both Fairborn and Xenia Municipal Courts. Call{' '}
          <strong>(614) 285-5482</strong> to schedule a consultation.
        </p>
        <h3>Neighboring counties</h3>
        <LinkGrid
          links={[
            { href: '/courts/montgomery-county', title: 'Montgomery County' },
            { href: '/courts/clinton-county', title: 'Clinton County' },
            { href: '/courts/franklin-county', title: 'Franklin County' },
          ]}
        />
      </Section>

      <LocationsWeServe title="Greene County Legal Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
