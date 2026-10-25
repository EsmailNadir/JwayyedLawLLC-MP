import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Montgomery County Court Representation',
  description:
    'Dayton and Kettering Municipal Courts, Montgomery County Common Pleas and Huber Heights Mayor’s Court: which court hears your case and what the firm handles.',
  keywords: [
    'Montgomery County OVI attorney',
    'Dayton Municipal Court lawyer',
    'Kettering Municipal Court attorney',
    'Montgomery County criminal defense',
    'Dayton OVI attorney',
    'Kettering DUI attorney',
    'Huber Heights criminal defense',
    'Montgomery County Common Pleas',
  ],
  openGraph: {
    title: 'Montgomery County Court Representation | Jwayyed Law LLC',
    description: 'The Montgomery County courts, from Dayton Municipal Court to the Common Pleas specialty dockets, and what the firm handles.',
    url: 'https://www.jjlawohio.com/courts/montgomery-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/montgomery-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Montgomery County', href: '/courts/montgomery-county' },
];

const faqs = [
  {
    question: 'What is the difference between Dayton Municipal Court and Kettering Municipal Court in Montgomery County?',
    answer:
      "Montgomery County has several municipal courts with different jurisdictions. Dayton Municipal Court (301 W. Third St, Dayton, OH 45402) is the largest. It handles misdemeanor criminal cases, OVI, traffic violations, civil claims up to $15,000, small claims and evictions arising within the City of Dayton and certain surrounding jurisdictions. Kettering Municipal Court (2325 Wilmington Pike, Kettering, OH 45420) serves the City of Kettering and surrounding communities. An OVI or misdemeanor charged in Kettering goes to Kettering Municipal Court, not Dayton. Huber Heights has its own Mayor's Court for minor violations. Not knowing which court has jurisdiction can cause procedural problems. The firm appears in both Dayton and Kettering Municipal Courts and can identify the right venue.",
  },
  {
    question: 'What are the OVI penalties in Montgomery County courts?',
    answer:
      'OVI is governed by ORC 4511.19. A first offense is a first-degree misdemeanor with a minimum 3 days in jail (or a 3-day driver intervention program), a fine between $375 and $1,075, a license suspension of 1 to 3 years, and possible vehicle immobilization. With a BAC of 0.17% or higher (high tier), the minimum jail time doubles to 6 days. A second OVI within 10 years carries a minimum 10-day jail sentence, higher fines and mandatory 90-day vehicle immobilization. Under House Bill 37 (effective April 9, 2025), courts may waive the 15-day hard suspension if the defendant agrees to install an ignition interlock device, and oral fluid (saliva) testing is now an authorized chemical test alongside breath and blood. The 2025 changes also raised minimum fines for repeat offenders.',
  },
  {
    question: 'How does the ALS appeal process work in Montgomery County?',
    answer:
      'An Administrative License Suspension (ALS) is imposed under ORC 4511.191 at an OVI arrest when the driver refuses a chemical test or tests at or above 0.08% BAC (0.04% for commercial drivers; 0.02% for drivers under 21). You have exactly 30 days from the date of arrest to file an ALS appeal in Dayton or Kettering Municipal Court, depending on where the arrest happened. The appeal is separate from the criminal case and can argue a lack of reasonable suspicion for the stop, failure to properly advise you of the ALS consequences under the implied consent law, improper testing, or officer certification problems. Winning can restore your driving privileges before the criminal case ends. The deadline cannot be waived or extended.',
  },
  {
    question: 'What types of misdemeanor cases does Dayton Municipal Court handle?',
    answer:
      'Dayton Municipal Court handles first, second, third, and fourth degree misdemeanors, as well as minor misdemeanors, arising within its jurisdiction. Common cases include OVI (ORC 4511.19), domestic violence (ORC 2919.25), assault (ORC 2903.13), theft under $1,000 (ORC 2913.02), drug possession (ORC 2925.11), disorderly conduct (ORC 2917.11), criminal damaging (ORC 2909.06), driving under suspension (ORC 4510.11) and reckless operation (ORC 4511.20). Under ORC 2929.24, the maximum for a first-degree misdemeanor is 180 days in jail and a $1,000 fine. The court also has a Drug Court docket for eligible defendants with substance abuse issues, which can lead to treatment instead of jail. An attorney can tell you whether diversion or a specialty court is open to you.',
  },
  {
    question: 'What felony cases are handled in Montgomery County Common Pleas Court?',
    answer:
      'Montgomery County Common Pleas Court (41 N. Perry St, Dayton, OH 45422) handles all felony cases from Montgomery County. Common ones include drug trafficking (ORC 2925.03), felonious assault (ORC 2903.11), aggravated robbery (ORC 2911.01), burglary (ORC 2911.12) and felony OVI (third offense within 10 years = F4; fourth offense = F3 under ORC 4511.19(G)). Felony cases start in municipal court for arraignment, then are bound over or indicted. Sentences range from 6 months for an F5 to 11 years or more for an F1, plus post-release control. The court runs a Drug Court, Mental Health Court and Veterans Treatment Court, specialty dockets that offer alternative sentencing for qualifying defendants.',
  },
  {
    question: 'How does Kettering Municipal Court handle OVI and criminal cases differently from Dayton Municipal Court?',
    answer:
      "They are separate courts with different judges, staff, prosecutors (the Kettering City Prosecutor and the Dayton City Prosecutor) and local procedures. Both apply the same Ohio Revised Code, but how judges approach sentencing, what plea offers prosecutors usually make and how pretrial conferences run differ by court. Kettering Municipal Court serves a suburban community and its docket may move at a different pace than Dayton's higher-volume court. If your charge arose in Kettering, Centerville, Oakwood or another community in Kettering's jurisdiction, your case is in Kettering Municipal Court.",
  },
  {
    question: 'Can a Montgomery County OVI or criminal conviction be sealed or expunged?',
    answer:
      "Ohio's expanded sealing law (Senate Bill 288, effective October 2023) permits sealing of many misdemeanor convictions under ORC 2953.32, usually one year after completing the sentence, including probation. Some categories are permanently excluded: OVI convictions (ORC 2953.36), domestic violence convictions, most traffic offenses and specified sex offenses. If your conviction qualifies, the application is filed in the court of conviction: Dayton Municipal Court, Kettering Municipal Court or Montgomery County Common Pleas Court. The judge holds a hearing and weighs your rehabilitation against the state's interest. Once sealed, the conviction is generally hidden from private employers and landlords. The firm evaluates eligibility and handles the full process.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Montgomery County OVI or criminal case?',
    answer:
      'The attorney personally handles every Montgomery County case from first consultation to final resolution, and appears in both Dayton and Kettering Municipal Courts. On an OVI, the firm reviews the justification for the stop, the NHTSA field sobriety test administration, the breathalyzer calibration history and the chain of custody for blood samples. It files ALS appeals within the 30-day deadline, moves to suppress unlawfully obtained evidence, and negotiates with Montgomery County prosecutors. For a consultation on your Dayton or Kettering matter, call (614) 285-5482.',
  },
];

const SERVICES = [
  { href: '/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court', title: 'OVI/DUI defense', subtitle: 'Dayton Municipal Court' },
  {
    href: '/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court',
    title: 'Misdemeanor criminal defense',
    subtitle: 'Dayton Municipal Court',
  },
  { href: '/locations/montgomery-county/personal-injury-montgomery-county', title: 'Personal injury', subtitle: 'Montgomery County' },
  { href: '/locations/montgomery-county/business-formation-llc-montgomery-county', title: 'Business formation and LLC', subtitle: 'Montgomery County' },
];

export default function MontgomeryCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Montgomery County courts"
        description="Where the offense happened decides the court: Dayton Municipal Court for the city, Kettering Municipal Court for Kettering and its neighbors, and Common Pleas for felonies."
      />

      <Section
        title="Find your court"
        intro={
          <p>
            Montgomery County is home to Dayton, one of Ohio&rsquo;s largest cities, and suburbs including Kettering, Trotwood, Huber
            Heights, Centerville, Englewood, Miamisburg and Vandalia. It has two primary municipal courts, several mayor&rsquo;s courts
            for minor violations, and Common Pleas for felonies.
          </p>
        }
      >
        <FactTable
          title="Dayton Municipal Court"
          rows={[
            { label: 'Address', value: '301 W. Third St, Dayton, OH 45402' },
            { label: 'Hears', value: 'OVI, misdemeanor criminal cases, traffic violations, civil claims up to $15,000, small claims, Drug Court docket' },
            { label: 'Volume', value: 'Thousands of cases a year, with dedicated dockets for OVI, criminal, domestic violence and civil matters' },
          ]}
        />
        <FactTable
          title="Kettering Municipal Court"
          rows={[
            { label: 'Address', value: '2325 Wilmington Pike, Kettering, OH 45420' },
            { label: 'Hears', value: 'OVI, misdemeanor criminal cases, traffic violations, civil claims up to $15,000' },
            { label: 'Serves', value: 'Kettering and surrounding communities, with its own prosecutors' },
          ]}
        />
        <FactTable
          title="Montgomery County Common Pleas Court"
          rows={[
            { label: 'Address', value: '41 N. Perry St, Dayton, OH 45422' },
            { label: 'Hears', value: 'Felony criminal cases, civil cases over $15,000, domestic relations, probate' },
            { label: 'Specialty dockets', value: 'Drug Court, Mental Health Court, Veterans Treatment Court' },
          ]}
        />
        <FactTable
          title="Huber Heights Mayor's Court"
          rows={[
            { label: 'Location', value: 'Huber Heights, OH' },
            {
              label: 'Hears',
              value: 'Minor traffic violations and minor misdemeanors within the City of Huber Heights; OVI and first-degree misdemeanors transfer to the appropriate municipal court',
            },
          ]}
        />
        <LinkGrid
          columns={2}
          links={[{ href: '/courts/dayton-municipal-court', title: 'Dayton Municipal Court guide', subtitle: 'OVI, driving under suspension and misdemeanors' }]}
        />
      </Section>

      <Section title="OVI charges in Montgomery County" tone="ice">
        <p>An OVI defense under ORC 4511.19 starts with a systematic review of every element of the state&rsquo;s case.</p>
        <PointGrid
          points={[
            {
              title: 'Field sobriety tests',
              body: 'Ohio requires officers to follow NHTSA protocols for the three standardized tests (Horizontal Gaze Nystagmus, Walk and Turn, One Leg Stand). A deviation can make the results unreliable and open them to a suppression motion.',
            },
            {
              title: 'The breath instrument',
              body: 'Ohio’s Intoxilyzer 8000 must be calibrated under the Ohio Administrative Code, and the operator must hold a current OAC-required certification.',
            },
            { title: 'The stop', body: 'Whether the officer had reasonable suspicion for the initial stop.' },
            { title: 'Blood samples', body: 'The chain of custody from draw to lab.' },
          ]}
        />
        <Callout title="Appeal the license suspension within 30 days">
          ALS appeals under ORC 4511.191 must be filed within 30 days of arrest, in Dayton or Kettering Municipal Court depending on
          where the arrest happened.
        </Callout>
      </Section>

      <Section title="Misdemeanor and felony charges">
        <p>
          Montgomery County courts carry heavy misdemeanor caseloads: domestic violence, assault, theft and drug possession. Under ORC
          2935.26, officers may issue a citation instead of an arrest for most misdemeanors that are not first-degree, but first-degree
          misdemeanors and OVI usually mean arrest and arraignment. Dayton Municipal Court&rsquo;s Drug Court program can offer
          treatment-focused outcomes for qualifying defendants, and the firm looks at whether diversion or a specialty court fits your
          circumstances.
        </p>
        <p>
          Common Pleas hears everything from felony OVI (an F4 or F3 for repeat offenders under ORC 4511.19(G)) to drug trafficking,
          robbery and violent felonies. Its Drug Court, Mental Health Court and Veterans Treatment Court can lead to reduced sentences
          or treatment-based outcomes for qualifying defendants.
        </p>
        <FactTable
          title="Charges the firm handles in Montgomery County"
          rows={[
            { label: 'OVI / DUI', value: 'Traffic stop challenges, NHTSA field sobriety analysis, breathalyzer calibration review, ALS appeals' },
            { label: 'Misdemeanors', value: 'Domestic violence (ORC 2919.25), assault (ORC 2903.13), theft (ORC 2913.02), drug possession (ORC 2925.11), disorderly conduct (ORC 2917.11)' },
            { label: 'Felonies', value: 'Felony OVI, drug trafficking, robbery, assault and other felonies in Common Pleas Court' },
            { label: 'Traffic', value: 'Driving under suspension (ORC 4510.11), reckless operation (ORC 4511.20) and other traffic offenses' },
            { label: 'Civil', value: 'Contract disputes, landlord-tenant evictions (ORC Chapter 1923), personal injury claims' },
            { label: 'Record sealing', value: 'Eligibility analysis and applications under ORC 2953.32' },
          ]}
        />
      </Section>

      <Section title="What the firm handles in Montgomery County" tone="ice">
        <LinkGrid links={SERVICES} columns={2} />
        <p>
          The firm serves clients throughout Montgomery County, including Dayton (the county seat), Kettering, Trotwood, Huber Heights,
          Fairborn, Centerville, Englewood, Miamisburg and Vandalia. The attorney personally handles every case and appears directly in
          Dayton and Kettering Municipal Courts. Call <strong>(614) 285-5482</strong> to schedule a consultation.
        </p>
        <h3>Neighboring counties</h3>
        <LinkGrid
          links={[
            { href: '/courts/greene-county', title: 'Greene County' },
            { href: '/courts/clinton-county', title: 'Clinton County' },
            { href: '/courts/butler-county', title: 'Butler County' },
          ]}
        />
      </Section>

      <LocationsWeServe title="Montgomery County Legal Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
