import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Employment Disputes Lawyer in Ohio',
  description:
    'Wrongful termination, discrimination, harassment and retaliation claims in Ohio, with the EEOC, OCRC and court filing deadlines that apply.',
  keywords: ['employment disputes lawyer Columbus OH', 'employment attorney Ohio', 'wrongful termination lawyer', 'Franklin County employment attorney'],
  openGraph: {
    title: 'Employment Disputes Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Employee claims under Ohio and federal law, and the deadlines for filing them.',
    url: 'https://www.jjlawohio.com/civil/employment-disputes',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/civil/employment-disputes' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Employment Disputes', href: '/civil/employment-disputes' },
];

const faqs = [
  {
    question: 'What is wrongful termination in Ohio?',
    answer:
      "Ohio is an at-will employment state: in most situations an employer can fire an employee for any reason, or no reason, without liability. A termination is wrongful when it violates a statute, a contract or public policy. In Greeley v. Miami Valley Maintenance Contractors, Inc. (1990), the Ohio Supreme Court recognized a public policy exception that protects employees fired for exercising a legal right or duty, such as filing a workers' compensation claim, serving on a jury or reporting illegal activity. Wrongful termination can also come from violations of the Ohio Civil Rights Act (ORC Chapter 4112), federal anti-discrimination statutes or the terms of an employment contract.",
  },
  {
    question: 'How do I file a discrimination complaint in Ohio?',
    answer:
      'There are two main administrative routes. A charge with the Ohio Civil Rights Commission (OCRC) under ORC Chapter 4112 must be filed within 2 years of the discriminatory act. A charge with the Equal Employment Opportunity Commission (EEOC) under federal law must be filed within 300 days, because Ohio is a deferral state (the limit is 180 days in non-deferral states). You can file with either or both. An EEOC charge is generally required before a federal lawsuit. An attorney can preserve your claims in both forums and help you choose the better route.',
  },
  {
    question: 'What is the Ohio Civil Rights Act and what does it protect?',
    answer:
      "ORC Chapter 4112 is Ohio's main employment anti-discrimination law. It bars discrimination against employees and applicants based on race, color, religion, sex, national origin, disability, age (40 and older), military status, ancestry and pregnancy. It covers employers with four or more employees and applies to hiring, firing, pay, job assignments, promotions and other terms of employment. ORC 4112.99 allows a civil lawsuit directly in court within 2 years of the discriminatory act, alongside the OCRC route. Remedies can include back pay, front pay, compensatory damages and attorney fees.",
  },
  {
    question: "What is Ohio's whistleblower protection law?",
    answer:
      "Ohio's Whistleblower Protection Act, ORC 4113.52, protects employees who report certain illegal activity by their employer. An employee who reasonably believes a violation of state or federal law has occurred, is occurring or will occur must first notify the employer in writing and give it 24 hours to correct the violation before reporting to a government agency. If the employer retaliates (termination, demotion, a pay cut or other adverse action), the employee may sue for reinstatement, back pay and attorney fees. The lawsuit must be filed within 180 days of the retaliatory act. Federal industry-specific whistleblower laws may add remedies with different procedures.",
  },
  {
    question: 'What are the filing deadlines for employment discrimination claims in Ohio?',
    answer:
      "Missing a deadline is usually fatal to the claim. EEOC charges under Title VII, the ADEA or the ADA: within 300 days of the discriminatory act, because Ohio is a deferral state. OCRC charges under ORC Chapter 4112: within 2 years. A direct lawsuit in Ohio court under ORC 4112.99: within 2 years. FMLA retaliation claims under 29 U.S.C. § 2617: 2 years (3 years for willful violations). Workers' compensation retaliation claims under ORC 4123.90: 180 days.",
  },
  {
    question: 'What is a hostile work environment in Ohio?',
    answer:
      "It is workplace harassment based on a protected characteristic, such as race, sex, age, disability or national origin, that is severe or pervasive enough to create an abusive work environment. Under ORC Chapter 4112 and Title VII, isolated incidents and petty slights generally do not qualify. A reasonable person must find the environment hostile or abusive, and so must the victim. Courts look at how often it happened, how severe it was, whether it was physically threatening or humiliating, and whether it interfered with the employee's work. An employer can be liable for harassment by supervisors or coworkers if it knew or should have known and failed to correct it.",
  },
  {
    question: "Can I be fired for filing a workers' compensation claim in Ohio?",
    answer:
      "No. ORC 4123.90 bars employers from retaliating against an employee for filing a workers' compensation claim, taking part in a workers' compensation proceeding, or exercising any other right under Ohio's workers' compensation laws. Retaliation can include termination, demotion, a pay cut or other adverse action. The employee may sue for reinstatement, back pay and other damages, and the lawsuit must be filed within 180 days of the retaliatory act. This protection is part of the public policy exception to at-will employment recognized in Greeley v. Miami Valley.",
  },
  {
    question: 'Do I need an attorney for an employment dispute in Ohio?',
    answer:
      'Employment disputes involve federal and state laws, strict administrative deadlines, and an employer that has its own lawyers. An attorney can evaluate your claims, identify the strongest legal theories, handle the EEOC or OCRC process, conduct discovery, negotiate a settlement and represent you in court or arbitration. EEOC charges must be filed within 300 days and some state claims have shorter deadlines, so talk to an attorney soon after an adverse employment action.',
  },
];

const RELATED = [
  { href: '/civil/breach-of-contract', title: 'Breach of contract', subtitle: 'Enforcing or defending contract obligations and recovering damages' },
  { href: '/civil/debt-collection-defense', title: 'Debt collection defense', subtitle: 'Defending a collection lawsuit and unfair collection practices' },
  { href: '/civil', title: 'Defamation and other civil matters', subtitle: 'Protecting your reputation against false and harmful statements' },
  { href: '/civil/appeals', title: 'Appeals', subtitle: 'Challenging a court decision in the Ohio appellate courts' },
];

export default function EmploymentDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Employment disputes in Ohio"
        description="Wrongful termination, discrimination, harassment and retaliation claims for Ohio employees. An EEOC charge must be filed within 300 days of the discriminatory act."
      />

      <KeyFacts
        facts={[
          { figure: '300 days', label: 'to file an EEOC charge (Ohio is a deferral state)' },
          { figure: '2 years', label: 'to file with the OCRC or sue under ORC 4112.99' },
          { figure: '180 days', label: 'to sue for whistleblower or workers’ compensation retaliation' },
          { figure: '4 employees', label: 'is enough for the Ohio Civil Rights Act to apply' },
        ]}
      />

      <Section
        title="What Ohio and federal law protect"
        intro={
          <p>
            Ohio is an at-will state, but the Ohio Civil Rights Act (ORC Chapter 4112) and federal laws including Title VII, the ADEA,
            the ADA and the FMLA still limit what an employer can do.
          </p>
        }
      >
        <p>
          The firm represents employees in Columbus, Cincinnati, Dayton and throughout Ohio in wrongful termination, discrimination,
          harassment, retaliation, whistleblower and wage and hour disputes, as part of its{' '}
          <Link href="/civil">civil litigation practice</Link>. Some disputes also turn on an{' '}
          <Link href="/business/employment-agreements">employment agreement</Link>, such as a non-compete clause or severance terms.
        </p>
        <FactTable
          title="The Ohio Civil Rights Act (ORC Chapter 4112)"
          rows={[
            { label: 'Protected classes', value: 'Race, color, religion, sex, national origin, disability, age (40 and older), military status, ancestry and pregnancy.' },
            { label: 'Covered employers', value: 'Four or more employees.' },
            { label: 'What it covers', value: 'Hiring, firing, promotions, pay, job assignments and other terms and conditions of employment.' },
            { label: 'Remedies', value: 'Back pay, front pay, compensatory damages and attorney fees.' },
          ]}
          note="Federal parallels: Title VII (race, sex, religion, national origin), the ADEA (29 U.S.C. § 623) and the ADA (42 U.S.C. § 12101), each with its own procedures and remedies."
        />
      </Section>

      <Section title="Filing deadlines" tone="ice">
        <FactTable
          title="Deadlines for employment claims"
          rows={[
            { label: 'EEOC charge', value: '300 days from the discriminatory act (180 days in non-deferral states). Generally required before a federal lawsuit.' },
            { label: 'OCRC charge', value: '2 years.' },
            { label: 'Lawsuit under ORC 4112.99', value: '2 years.' },
            { label: 'FMLA retaliation (29 U.S.C. § 2617)', value: '2 years, or 3 years for willful violations.' },
            { label: 'Whistleblower suit (ORC 4113.52)', value: '180 days from the retaliatory act.' },
            { label: 'Workers’ compensation retaliation (ORC 4123.90)', value: '180 days.' },
          ]}
          note="These deadlines are strictly enforced. Missing one permanently bars the claim."
        />
        <p>
          <Link href="/contact">Contact Jwayyed Law LLC</Link> soon after an adverse employment action to preserve every claim you have.
        </p>
      </Section>

      <LocationsWeServe title="Civil" />

      <Section title="Claims an employee can bring" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Wrongful termination (public policy)',
              body: 'Under Greeley v. Miami Valley Maintenance Contractors, Inc. (1990), an employer cannot fire you for exercising a legal right, complying with a legal duty, refusing to break the law or reporting illegal activity. Examples: filing a workers’ compensation claim (ORC 4123.90), jury duty, or reporting wage theft or safety violations. The claim needs a clear public policy in an Ohio statute, constitutional provision or regulation.',
            },
            {
              title: 'Discrimination',
              body: 'Adverse treatment based on a protected class under ORC Chapter 4112 or federal law.',
            },
            {
              title: 'Hostile work environment',
              body: 'Harassment based on a protected characteristic that is severe or pervasive enough to be abusive. Isolated incidents and petty slights generally do not qualify.',
            },
            {
              title: 'Whistleblower retaliation',
              body: 'ORC 4113.52 protects employees who report violations of state or federal law, after written notice to the employer and 24 hours to correct it.',
            },
            {
              title: 'Other retaliation',
              body: 'Title VII and the Ohio Civil Rights Act bar retaliation for discrimination charges; the FMLA (29 U.S.C. § 2615) for protected leave; the ADEA for opposing age discrimination. A reasonable, good-faith belief is enough even if the underlying claim is not proven.',
            },
            {
              title: 'Workers’ compensation retaliation',
              body: 'ORC 4123.90 protects employees who file a claim or take part in a workers’ compensation proceeding.',
            },
          ]}
        />
      </Section>

      <Section title="How a discrimination claim proceeds">
        <Steps
          steps={[
            { title: 'Evaluate the claim', body: 'Identify the legal theories that fit and the deadlines that apply to each.' },
            { title: 'File the charge', body: 'With the EEOC within 300 days, the OCRC within 2 years, or both.' },
            { title: 'Negotiate', body: 'Severance, settlement or reinstatement, often during the administrative process.' },
            { title: 'Litigate', body: 'A lawsuit in court or a claim in arbitration if the dispute does not resolve.' },
          ]}
        />
        <Callout title="Notice comes first for whistleblowers">
          Under ORC 4113.52, written notice to the employer and a 24-hour chance to correct the violation come before a report to a
          government agency.
        </Callout>
      </Section>

      <Section title="What the firm does for employees" tone="ice">
        <PointGrid
          points={[
            { title: 'Evaluates your claims', body: 'Which legal theories are viable and how strong they are.' },
            { title: 'Files the charges', body: 'Timely EEOC (300 days) and OCRC (2 years) charges.' },
            { title: 'Negotiates', body: 'Severance agreements, settlements and reinstatement.' },
            { title: 'Litigates', body: 'Represents you in court or arbitration.' },
            { title: 'Pursues retaliation claims', body: 'Wrongful termination, retaliation and workers’ compensation retaliation under ORC 4123.90.' },
            { title: 'Handles whistleblower claims', body: 'Advice and claims under ORC 4113.52.' },
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
