import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Debt Collection Defense Lawyer in Ohio',
  description:
    'Sued for a debt in Ohio? You usually have 28 days to answer. Defenses, garnishment limits, exemptions and FDCPA rights, explained.',
  keywords: ['debt collection defense lawyer Columbus OH', 'Ohio debt collection defense', 'debt collection defense attorney', 'debt collection attorney Ohio', 'debt defense lawyer', 'Franklin County debt collection attorney'],
  openGraph: {
    title: 'Debt Collection Defense Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Defending debt collection lawsuits in Ohio: the answer deadline, the statute of limitations, exemptions and FDCPA claims.',
    url: 'https://www.jjlawohio.com/civil/debt-collection-defense',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/civil/debt-collection-defense' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Debt Collection Defense', href: '/civil/debt-collection-defense' },
];

const faqs = [
  {
    question: 'What should I do if I am sued for a debt in Ohio?',
    answer:
      'File a written Answer with the court within 28 days (for Common Pleas Court) or by the deadline in the summons. If you do not respond, the court will enter a default judgment, which the creditor can use to garnish wages or levy bank accounts. The Answer should raise every defense that applies, including the statute of limitations, lack of standing, improper service and any FDCPA violations. Do not ignore the lawsuit; talk to an attorney as soon as you are served.',
  },
  {
    question: 'What is the statute of limitations on credit card debt in Ohio?',
    answer:
      'Credit card debt based on a written agreement has a 6-year statute of limitations under ORC 2305.06. Oral contract debts are also generally subject to a 6-year limit under ORC 2305.07. Once the period expires, the debt is time-barred and the creditor cannot get a judgment in court, though the debt may still appear on your credit report. Making a payment or acknowledging the debt in writing can restart the clock. If you are sued on an old debt, the statute of limitations can be a complete bar to the lawsuit.',
  },
  {
    question: 'Can my wages be garnished in Ohio to collect a debt?',
    answer:
      "Yes, within limits. Under ORC 2716.02, the most that can be garnished is the lesser of 25% of your disposable earnings or the amount by which your weekly disposable earnings exceed 30 times the federal minimum wage. Social Security, workers' compensation and unemployment benefits are generally exempt. Before garnishing, the creditor must get a court judgment, serve you with a garnishment notice and give you a chance to object. An attorney can challenge an improper garnishment and assert your exemptions.",
  },
  {
    question: 'What property is exempt from debt collection in Ohio?',
    answer:
      "ORC 2329.66 protects certain assets from creditors even after a judgment. Key exemptions: up to $145,425 in equity in your primary residence (homestead), up to $4,000 in vehicle equity, household goods up to $625 per item and $13,400 in total, tools of the trade up to $2,550, and certain retirement accounts. Social Security, workers' compensation and unemployment benefits are also exempt. Exemptions are not automatic. You must assert them in response to a garnishment or levy.",
  },
  {
    question: 'What is the Fair Debt Collection Practices Act (FDCPA) and how does it protect me?',
    answer:
      'The FDCPA, 15 U.S.C. § 1692, bars third-party debt collectors from abusive, deceptive or unfair practices. That includes calling before 8 a.m. or after 9 p.m., calling your workplace after being told not to, threatening legal action they do not intend to take, misrepresenting the amount owed, using profane or abusive language, and contacting you after you ask in writing that they stop. A violation entitles you to actual damages, statutory damages up to $1,000 and attorney fees. The Ohio Consumer Sales Practices Act (OCSPA), ORC Chapter 1345, adds state-law protections.',
  },
  {
    question: 'Can debt collectors call me at night or at work in Ohio?',
    answer:
      'Under the FDCPA, 15 U.S.C. § 1692c, collectors may not contact you before 8 a.m. or after 9 p.m. your local time. They may not contact you at work if they know or have reason to know your employer prohibits it. If you tell a collector in writing to stop, they must generally stop, except to notify you of specific actions. Calling after that request is a violation. Keep a log of collector call times, caller ID and voicemails as evidence for an FDCPA claim.',
  },
  {
    question: 'How do I challenge a debt collection lawsuit in Ohio?',
    answer:
      'File a timely Answer raising every affirmative defense that applies. Key defenses: the statute of limitations (ORC 2305.06, 6 years for written contracts), lack of standing (a debt buyer must prove it owns the debt through a complete chain of assignment), failure to state a claim, improper service of process, and payment or account stated. Debt buyers often struggle to prove a complete chain of title from the original creditor. Demanding debt validation under the FDCPA, 15 U.S.C. § 1692g, is also an important early step: the collector must verify the debt before continuing collection.',
  },
  {
    question: 'What is a debt validation letter and how do I use it?',
    answer:
      "Under the FDCPA, 15 U.S.C. § 1692g, you can request validation of a debt within 30 days of first receiving written notice from a collector. A written request requires the collector to stop collecting until it verifies the debt, including the name and address of the original creditor. Many debt buyers, especially after several assignments, cannot produce the original account agreement, the statements or a complete chain of title. If the collector cannot validate the debt, it must stop collecting. An attorney can draft the letter and judge whether the collector's response is legally sufficient.",
  },
];

const RELATED = [
  { href: '/civil/breach-of-contract', title: 'Breach of contract', subtitle: 'Enforcing or defending contract obligations and recovering damages' },
  { href: '/civil', title: 'All civil matters', subtitle: 'Including landlord-tenant disputes, security deposit claims and habitability issues' },
  { href: '/civil/employment-disputes', title: 'Employment disputes', subtitle: 'Wrongful termination, discrimination and workplace retaliation claims' },
  { href: '/civil/appeals', title: 'Appeals', subtitle: 'Challenging a court decision in the Ohio appellate courts' },
];

export default function DebtCollectionDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Debt collection defense in Ohio"
        description="If you are sued for a debt in Ohio, the Answer is usually due within 28 days. Miss it and the creditor can get a default judgment and garnish your wages."
      />

      <KeyFacts
        facts={[
          { figure: '28 days', label: 'to file an Answer in Common Pleas Court, or the deadline in the summons' },
          { figure: '6 years', label: 'statute of limitations on a written-agreement debt (ORC 2305.06)' },
          { figure: '25%', label: 'of disposable earnings is the most that can be garnished, or less' },
          { figure: '30 days', label: 'to request validation after the collector’s first written notice' },
        ]}
      />

      <Section
        title="Understanding debt collection defense in Ohio"
        intro={
          <p>
            Ohio consumers are protected by the federal Fair Debt Collection Practices Act (FDCPA), 15 U.S.C. § 1692, the Ohio Consumer
            Sales Practices Act (OCSPA), ORC Chapter 1345, and Ohio&rsquo;s statute of limitations and property exemption laws.
          </p>
        }
      >
        <p>
          The firm handles Ohio debt collection defense for consumers sued in Columbus, Cincinnati, Dayton and throughout Ohio, and pursues
          claims against collectors who break the law, as part of its <Link href="/civil">civil litigation practice</Link>.
        </p>
        <Callout title="Do not ignore the summons">
          A missed Answer leads to a default judgment, and a default judgment can be used to garnish wages or levy bank accounts.
        </Callout>
      </Section>

      <Section title="Statute of limitations on debt" tone="ice">
        <FactTable
          title="How long a creditor has to sue"
          rows={[
            {
              label: 'Written contract',
              value: '6 years from the date the debt became due (ORC 2305.06). Covers most credit card agreements, personal loans and medical debts based on written agreements.',
            },
            { label: 'Oral contract', value: 'The same 6-year period (ORC 2305.07).' },
            { label: 'UCC-governed transactions', value: '4 years (ORC 1309.625).' },
          ]}
          note="Once the period runs, a court cannot enter judgment even if you owe the money. A partial payment or a written acknowledgment can restart the clock."
        />
        <p>
          If you have been sued on an old debt, <Link href="/contact">contact Jwayyed Law LLC</Link> promptly.
        </p>
      </Section>

      <Section title="Garnishment limits and property exemptions">
        <p>
          With a judgment, a creditor may try to garnish wages, levy bank accounts or place liens on real property. Ohio and federal law
          limit what it can reach.
        </p>
        <FactTable
          title="Wage garnishment (ORC 2716.02)"
          rows={[
            { label: 'Maximum', value: 'The lesser of 25% of disposable earnings or the amount by which weekly disposable earnings exceed 30 times the federal minimum wage.' },
            { label: 'Before garnishing', value: 'The creditor needs a court judgment, must serve a garnishment notice and must give you a chance to object.' },
            { label: 'Generally exempt income', value: "Social Security, workers' compensation and unemployment benefits." },
          ]}
        />
        <FactTable
          title="Property exemptions (ORC 2329.66)"
          rows={[
            { label: 'Homestead', value: 'Up to $145,425 in equity in your primary residence.' },
            { label: 'Vehicle', value: 'Up to $4,000 in equity.' },
            { label: 'Household goods', value: 'Up to $625 per item and $13,400 in total.' },
            { label: 'Tools of the trade', value: 'Up to $2,550.' },
            { label: 'Retirement', value: 'Certain retirement accounts.' },
          ]}
          note="Exemptions are not automatic. They must be asserted by filing timely objections with the court."
        />
      </Section>

      <LocationsWeServe title="Civil" />

      <Section title="How to respond to a collection lawsuit" tone="ice">
        <Steps
          steps={[
            { title: 'Request validation', body: 'Within 30 days of the first written notice, demand validation under 15 U.S.C. § 1692g. Collection must stop until the debt is verified.' },
            { title: 'File the Answer', body: 'Within 28 days in Common Pleas Court, or by the summons deadline, raising every defense that applies.' },
            { title: 'Use discovery', body: 'Demand the account agreement, statements and assignment documents that prove who owns the debt.' },
            { title: 'Resolve or try the case', body: 'Negotiate a settlement on workable terms, or defend the case in court.' },
          ]}
        />
      </Section>

      <Section title="Defenses and counterclaims">
        <PointGrid
          points={[
            {
              title: 'Statute of limitations',
              body: 'A time-barred debt cannot support a judgment. This can be a complete bar to the lawsuit.',
            },
            {
              title: 'Debt buyer standing',
              body: 'Many suits are filed by companies that bought portfolios of delinquent accounts. They must prove a complete chain of title from the original creditor. Assignment agreements, bills of sale or the original account agreement are often missing.',
            },
            {
              title: 'Procedural defenses',
              body: 'Failure to state a claim, improper service of process, and payment or account stated.',
            },
            {
              title: 'FDCPA counterclaims',
              body: 'Calls outside 8 a.m. to 9 p.m., contact after a written cease request, misstating the amount owed, empty threats of legal action, or abusive language. You can recover actual damages, up to $1,000 in statutory damages and attorney fees under 15 U.S.C. § 1692k, as a counterclaim or in your own suit.',
            },
            {
              title: 'Ohio consumer law',
              body: 'The Ohio Consumer Sales Practices Act (ORC Chapter 1345) gives additional remedies for deceptive collection practices.',
            },
          ]}
        />
      </Section>

      <Section title="What a debt collection defense attorney does on your case" tone="ice">
        <PointGrid
          points={[
            { title: 'Challenges the debt', body: 'Its validity, the statute of limitations and the debt buyer’s standing.' },
            { title: 'Sends validation demands', body: 'FDCPA validation letters, and a review of whether the response is legally sufficient.' },
            { title: 'Pursues FDCPA violations', body: 'Statutory damages and attorney fees when a collector breaks the law.' },
            { title: 'Defends against garnishment', body: 'Challenges improper garnishments and asserts exemptions under ORC 2329.66.' },
            { title: 'Negotiates', body: 'Settlements that resolve the debt on terms you can meet.' },
            { title: 'Represents you in court', body: 'Defends the collection lawsuit through judgment.' },
          ]}
        />
      </Section>

      <Section title="Related civil matters">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
