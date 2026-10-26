import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Civil Protection Orders Lawyer in Ohio',
  description:
    'Seeking or defending an Ohio civil protection order: the ex parte order, the full hearing within 10 days, and orders lasting up to five years.',
  keywords: ['civil protection orders lawyer Columbus OH', 'protection order attorney Ohio', 'CPO lawyer', 'Franklin County protection order attorney', 'civil protection orders attorney Ohio', 'protection order defense'],
  openGraph: {
    title: 'Civil Protection Orders Lawyer in Ohio | Jwayyed Law LLC',
    description: 'CPOs and civil stalking protection orders in Ohio, for petitioners and respondents.',
    url: 'https://www.jjlawohio.com/civil/civil-protection-orders',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/civil/civil-protection-orders' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Civil Protection Orders', href: '/civil/civil-protection-orders' },
];

const faqs = [
  {
    question: 'What is a civil protection order (CPO) in Ohio?',
    answer:
      'A CPO under ORC 3113.31 is a court order from the Domestic Relations Division of the Common Pleas Court that protects victims of domestic violence from family or household members. It can prohibit contact, require the respondent to leave a shared residence, address temporary custody and support, and require the surrender of firearms. A CPO is a civil order, but violating it is a criminal offense under ORC 2919.27. In Franklin County, CPO petitions are filed in the Franklin County Common Pleas Court, Domestic Relations Division.',
  },
  {
    question: 'What is the difference between a CPO and a CSPO in Ohio?',
    answer:
      'A CPO under ORC 3113.31 covers domestic violence between family or household members: spouses, former spouses, people who share a child or people who have lived together. A CSPO (civil stalking protection order) under ORC 2903.214 is available to anyone who has been a victim of menacing by stalking or a sexually oriented offense, whatever the relationship. CSPOs are filed in the General Division of the Common Pleas Court, not the Domestic Relations Division. Both can impose no-contact and stay-away terms.',
  },
  {
    question: 'What can a civil protection order require in Ohio?',
    answer:
      "Under ORC 3113.31, a CPO can bar the respondent from contacting, threatening or harassing the petitioner and household members; require the respondent to leave and stay away from the petitioner's home, workplace and school; give the petitioner temporary exclusive occupancy of a shared residence; award temporary custody of children; require temporary support; and order the respondent to surrender firearms and other deadly weapons. Courts tailor the terms to each case.",
  },
  {
    question: 'How long does a civil protection order last in Ohio?',
    answer:
      'There are two stages. A judge or magistrate can issue an ex parte (emergency) temporary CPO the same day the petition is filed, without the respondent present, on a finding of immediate and present danger. It lasts up to 10 days, until a full hearing. At the full hearing both sides may present evidence. A CPO granted after the full hearing can last up to five years and is renewable. A CSPO under ORC 2903.214 follows a similar timeline and can also last up to five years.',
  },
  {
    question: 'What happens if a respondent violates a civil protection order?',
    answer:
      'Under ORC 2919.27, a first violation is a first-degree misdemeanor, with up to 180 days in jail and a $1,000 fine. A second violation within five years becomes a fifth-degree felony (6 to 12 months in prison, $2,500 fine). Violations involving weapons or prior felony domestic violence convictions carry enhanced penalties. A violation can also lead to contempt proceedings in the civil case. If the respondent violates your order, contact law enforcement right away and document the violation.',
  },
  {
    question: 'Can a civil protection order be contested or vacated in Ohio?',
    answer:
      'Yes. The respondent can contest the CPO at the full hearing, scheduled within 10 days of the ex parte order. Both sides may present evidence and testimony and cross-examine witnesses. The petitioner must prove the case by a preponderance of the evidence. If the court denies the CPO, the ex parte order expires. After a CPO issues, either party may later move to modify or terminate it if circumstances change.',
  },
  {
    question: 'Can I get a protection order for stalking in Ohio?',
    answer:
      'Yes. If you have been a victim of menacing by stalking under ORC 2903.211, even by someone outside your family or household, you can petition for a Civil Stalking Protection Order (CSPO) under ORC 2903.214. It can prohibit all contact, require the respondent to stay away from your home, workplace and school, and last up to five years. CSPOs are filed in the General Division of the Common Pleas Court. You will need to document the pattern of conduct.',
  },
  {
    question: 'Do I need an attorney for a civil protection order proceeding?',
    answer:
      'You are not required to have one. Protection order cases move fast, sometimes within 24 to 48 hours for an ex parte hearing, and the outcome can affect your custody arrangements and housing. Whether you are seeking a CPO or defending against one, an attorney makes sure the evidence is presented properly and the legal arguments are made. Jwayyed Law LLC represents clients on both sides of CPO proceedings throughout Ohio.',
  },
];

const RELATED = [
  { href: '/criminal-defense/domestic-violence', title: 'Domestic violence defense', subtitle: 'Criminal defense for domestic violence charges in Ohio' },
  { href: '/civil/appeals', title: 'Appeals', subtitle: 'Challenging a court decision in the Ohio appellate courts' },
  { href: '/civil', title: 'All civil matters', subtitle: 'Including landlord-tenant disputes and defamation claims' },
  { href: '/our-law-firm/blog/ohio-civil-protection-order-guide', title: 'Guide to Ohio civil protection orders', subtitle: 'From the firm’s blog' },
];

export default function CivilProtectionOrdersPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Civil protection orders in Ohio"
        description="An emergency protection order can issue the same day a petition is filed, and the full hearing follows within 10 days. A final order can last up to five years."
      />

      <KeyFacts
        facts={[
          { figure: 'Same day', label: 'an ex parte order can issue after the petition is filed' },
          { figure: '10 days', label: 'the ex parte order lasts, until the full hearing' },
          { figure: '5 years', label: 'maximum length of a CPO or CSPO after a full hearing' },
          { figure: '180 days', label: 'jail, plus a $1,000 fine, for a first violation' },
        ]}
      />

      <Section
        title="Two kinds of protection order"
        intro={
          <p>
            A protection order can protect a victim of domestic violence or stalking. For a respondent, it can change housing, custody
            arrangements and firearms rights overnight.
          </p>
        }
      >
        <p>
          The firm represents petitioners and respondents in Columbus, Cincinnati, Dayton and throughout Ohio as part of its{' '}
          <Link href="/civil">civil litigation practice</Link>. For more background, read the firm&rsquo;s{' '}
          <Link href="/our-law-firm/blog/ohio-civil-protection-order-guide">guide to Ohio civil protection orders</Link>.
        </p>
        <FactTable
          title="CPO and CSPO compared"
          rows={[
            { label: 'CPO (ORC 3113.31)', value: 'Domestic violence by a family or household member: spouses, former spouses, people who share a child, or people who have lived together. Filed in the Domestic Relations Division of the Common Pleas Court.' },
            { label: 'CSPO (ORC 2903.214)', value: 'Menacing by stalking (ORC 2903.211) or a sexually oriented offense, by anyone. Filed in the General Division of the Common Pleas Court.' },
            { label: 'Length', value: 'Either can last up to five years after a full hearing. A CPO is renewable.' },
            { label: 'Burden of proof', value: 'The petitioner must prove the case by a preponderance of the evidence.' },
          ]}
        />
      </Section>

      <Section title="The CPO process in Franklin County and Ohio" tone="ice">
        <p>
          In Franklin County, CPO petitions are filed in the Domestic Relations Division of the Franklin County Common Pleas Court.
        </p>
        <Steps
          steps={[
            { title: 'Petition', body: 'The petitioner files a verified petition describing the domestic violence or the threat of it.' },
            {
              title: 'Ex parte order',
              body: 'A judge or magistrate reviews the petition the same day and may issue a temporary order without notice to the respondent, on a finding of immediate and present danger.',
            },
            { title: 'Service', body: 'The respondent is served. The ex parte order lasts up to 10 days while the full hearing is scheduled.' },
            {
              title: 'Full hearing',
              body: 'Both sides present evidence and witnesses. The court decides whether to issue a full CPO lasting up to five years.',
            },
          ]}
        />
        <p>
          Protection orders often run alongside <Link href="/criminal-defense/domestic-violence">domestic violence criminal charges</Link>,
          and the civil and criminal strategy need to fit together.
        </p>
      </Section>

      <Section title="What a CPO can order">
        <PointGrid
          points={[
            { title: 'No contact', body: 'With the petitioner or household members, including threats and harassment.' },
            { title: 'Stay away', body: 'From the petitioner’s home, workplace, school and children’s school.' },
            { title: 'Leave the home', body: 'Vacate a shared residence, with temporary exclusive occupancy for the petitioner.' },
            { title: 'Custody and support', body: 'Temporary custody of children and temporary support payments.' },
            { title: 'Surrender weapons', body: 'Firearms and other deadly weapons, to law enforcement.' },
          ]}
        />
        <Callout title="Civil, until it is violated">
          A CPO is a civil order and does not put a criminal conviction on the respondent&rsquo;s record. It lasts up to five years and
          must be renewed to stay in effect. A violation is a crime.
        </Callout>
      </Section>

      <LocationsWeServe title="Civil" />

      <Section title="Protection order defense for respondents" tone="ice">
        <p>
          A respondent served with an ex parte CPO can contest it at the full hearing, which often takes place within 10 days of
          service. That leaves little time to prepare.
        </p>
        <PointGrid
          points={[
            { title: 'The conduct does not qualify', body: 'It does not meet the legal definition of domestic violence under ORC 3113.31.' },
            { title: 'The allegations are false or exaggerated', body: 'Shown through witnesses, cross-examination of the petitioner and documents.' },
            { title: 'A mutual order fits better', body: 'A mutual protection order may be more appropriate than a one-sided CPO.' },
            { title: 'Changed circumstances', body: 'After a CPO issues, either party can move to modify or terminate it.' },
          ]}
        />
        <p>
          If you have been served with a protection order, <Link href="/contact">contact Jwayyed Law LLC</Link> right away.
        </p>
      </Section>

      <Section title="Violations and enforcement">
        <FactTable
          title="Violating a protection order (ORC 2919.27)"
          rows={[
            { label: 'First violation', value: 'First-degree misdemeanor: up to 180 days in jail and a $1,000 fine.' },
            { label: 'Second violation within five years', value: 'Fifth-degree felony: 6 to 12 months in prison and a $2,500 fine.' },
            { label: 'Weapons or prior felony DV', value: 'Enhanced penalties.' },
            { label: 'Arrest', value: 'Police may arrest without a warrant on probable cause of a violation.' },
            { label: 'Contempt', value: 'A motion for contempt in the civil case can lead to fines or incarceration.' },
          ]}
          note="Petitioners should contact law enforcement right away and document every violation."
        />
      </Section>

      <Section title="How a civil protection orders lawyer helps" tone="ice">
        <PointGrid
          points={[
            { title: 'Files petitions', body: 'CPO or CSPO petitions, with emergency ex parte orders when needed.' },
            { title: 'Defends respondents', body: 'Contests ex parte orders and defends at the full hearing.' },
            { title: 'Tries the hearing', body: 'Presents evidence, examines witnesses and argues the case.' },
            { title: 'Modifies or ends orders', body: 'When circumstances change.' },
            { title: 'Enforces orders', body: 'Helps petitioners document violations and pursue charges.' },
          ]}
        />
      </Section>

      <Section title="Related pages">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
