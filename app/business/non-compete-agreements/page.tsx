import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Non-Compete Agreement Lawyer Ohio',
  description:
    'Ohio non-competes under the Raimonde reasonableness test: drafting, challenging and enforcing restrictive covenants, and the trade secret claims that come with them.',
  keywords: ['non-compete agreement lawyer Columbus OH', 'non-compete attorney Ohio', 'Raimonde v Van Vlerah Ohio', 'trade secrets ORC 1333.61', 'non-solicitation agreement Ohio', 'blue pencil doctrine Ohio'],
  openGraph: {
    title: 'Non-Compete Agreement Lawyer Ohio | Jwayyed Law LLC',
    description: 'How Ohio courts decide whether a non-compete is enforceable, for employers and employees.',
    url: 'https://www.jjlawohio.com/business/non-compete-agreements',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/business/non-compete-agreements' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Non-Compete Agreements', href: '/business/non-compete-agreements' },
];

const faqs = [
  {
    question: 'Are non-compete agreements enforceable in Ohio?',
    answer:
      'Yes, under the reasonableness standard the Ohio Supreme Court set in Raimonde v. Van Vlerah (1975) and later case law. A non-compete is enforced only if it (1) is no greater than needed to protect a legitimate employer interest; (2) does not impose undue hardship on the employee; and (3) is not injurious to the public. Courts weigh duration, geography and the activities restricted together; no single factor decides it. Ohio has no statute banning non-competes outright, though federal developments (see the 2024 FTC rule below) still create uncertainty.',
  },
  {
    question: 'What is the Raimonde reasonableness test and how do Ohio courts apply it?',
    answer:
      "In Raimonde v. Van Vlerah, 325 N.E.2d 544 (Ohio 1975), the Ohio Supreme Court rejected both a strict approach (enforcing no non-competes) and a liberal one (enforcing them as written) in favor of a reasonableness test. Courts weigh the length of the restriction (1 to 2 years is commonly upheld; longer faces more scrutiny), the territory (it must relate to where the employee actually worked), the activities barred (they must track what the employee actually did), the employer's protectable interests (customer relationships, confidential information, specialized training), the employee's hardship and the availability of comparable work. A very short duration can save an overbroad territory, or the reverse.",
  },
  {
    question: 'What is "blue penciling" and can Ohio courts modify an overbroad non-compete?',
    answer:
      'Yes. Under the "blue pencil" doctrine, a court may modify an overbroad non-compete instead of voiding it. If a 3-year restriction should be 2, the court can enforce it at 2 years; a national territory can be narrowed to a region. But blue penciling is discretionary. An employer who drafts an extremely overbroad agreement risks having it voided entirely, while a carefully tailored one is more likely to be enforced or trimmed to a still-useful scope.',
  },
  {
    question: 'What is the difference between a non-compete agreement and a non-solicitation agreement in Ohio?',
    answer:
      "A non-compete bars a former employee from working for competitors or starting a competing business within a set time and area. A non-solicitation agreement is narrower: it bars soliciting the employer's customers or employees but allows competitive employment. Non-solicitation agreements are generally easier to enforce in Ohio because they impose less hardship while protecting customer relationships and workforce stability. Ohio courts have upheld non-solicitation agreements with broad geography because the actual restriction, not contacting specific customers, is tied closely to the employer's interest.",
  },
  {
    question: 'How does Ohio law protect trade secrets, and how do trade secrets relate to non-competes?',
    answer:
      'Ohio adopted the Uniform Trade Secrets Act at ORC 1333.61 through 1333.69. Under ORC 1333.61(D), a trade secret is information (formulas, patterns, compilations, programs, devices, methods, techniques or processes) that has independent economic value from not being generally known and is subject to reasonable secrecy efforts. Misappropriation under ORC 1333.63 exposes a defendant to injunctions, damages (including unjust enrichment) and possibly attorney fees for willful misappropriation. Employers often sue for both trade secret misappropriation and breach of a non-compete when an employee takes confidential information to a competitor. Even without a non-compete, Ohio trade secret law limits how former employees can use confidential information.',
  },
  {
    question: 'What happened with the FTC non-compete rule and does it apply in Ohio?',
    answer:
      'In April 2024, the Federal Trade Commission issued a rule that would have banned most non-competes nationwide. In August 2024 a federal district court in Texas vacated it before it took effect, and as of early 2026 it is not in force. Ohio employers and employees should not rely on it to override existing agreements. The Raimonde reasonableness standard continues to govern in Ohio, though the regulatory picture may still change.',
  },
  {
    question: 'What can happen if I violate a non-compete agreement in Ohio?',
    answer:
      'If the agreement is enforceable and you violated it, a court may issue a TRO or preliminary injunction under Ohio Civil Rule 65 ordering you to stop, often before a full trial. The employer can also seek damages for provable lost profits and, if the agreement provides for it, attorney fees. Some courts have extended the non-compete period by the length of the violation (the "tolling" doctrine). If the agreement is unenforceable under Raimonde, none of these remedies are available.',
  },
  {
    question: 'Should I sign a non-compete agreement as a condition of employment?',
    answer:
      'Have an attorney review it first. Many employees sign without understanding the scope and later find they cannot work in their field. An attorney can judge whether it is likely enforceable under Ohio\'s reasonableness standard, flag the riskiest terms and negotiate changes. Employers often have more room to negotiate at hiring than they admit. Push back on long durations (anything over 2 years deserves scrutiny), territories beyond where you actually work, and activity restrictions broader than your role.',
  },
];

const RELATED = [
  { href: '/business/employment-agreements', title: 'Employment agreements', subtitle: 'Employment contracts with properly drafted restrictive covenants' },
  { href: '/business/contract-drafting-review', title: 'Contract drafting and review', subtitle: 'Contract services for Ohio businesses' },
  { href: '/business/business-litigation', title: 'Business litigation', subtitle: 'Non-compete enforcement and defense in Ohio courts' },
  { href: '/business/partnership-disputes', title: 'Partnership disputes', subtitle: 'Disputes between business partners and co-owners' },
];

export default function NonCompeteAgreementsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Non-compete agreements in Ohio"
        description="Ohio enforces a non-compete only if it is reasonable under Raimonde v. Van Vlerah. Restrictions of 1 to 2 years are commonly upheld, and a court can trim an overbroad one."
      />

      <Section
        title="The Raimonde reasonableness test"
        intro={
          <p>
            Ohio&rsquo;s rule comes from <strong>Raimonde v. Van Vlerah</strong>, 325 N.E.2d 544 (Ohio 1975), and it is still the
            controlling framework.
          </p>
        }
      >
        <p>
          An employer who drafts an overbroad agreement may find it unenforceable when it matters. An employee who signs it as routine
          boilerplate can be barred from a field for years. The firm advises and represents employers and employees in Columbus and
          throughout Ohio on drafting, negotiation, enforcement and defense, as part of its{' '}
          <Link href="/business">Ohio business law practice</Link>.
        </p>
        <FactTable
          title="What a court weighs"
          rows={[
            { label: 'The three requirements', value: 'No greater than needed to protect a legitimate interest, no undue hardship on the employee, and no injury to the public.' },
            { label: 'Duration', value: '1 to 2 years is commonly upheld. Longer restrictions face more scrutiny.' },
            { label: 'Geography', value: 'Must bear a reasonable relationship to where the employee actually worked.' },
            { label: 'Activities', value: 'Must track what the employee actually did. "Any competitive activity" clauses are more vulnerable.' },
            { label: 'Employer interest', value: 'Customer relationships, confidential information or specialized training.' },
            { label: 'Employee side', value: 'Hardship and the availability of other employment.' },
          ]}
          note="No single factor decides the case. The same restriction can be enforced against one employee and rejected for another."
        />
        <Callout title="Courts can blue pencil">
          A court may cut a 3-year restriction to 2 years, or narrow a national territory to a region, and enforce the rest. It is
          discretionary, so neither side should count on a court to fix a bad draft.
        </Callout>
      </Section>

      <Section title="Types of restrictive covenants" tone="ice">
        <PointGrid
          points={[
            { title: 'Non-compete', body: 'Bars working for competitors or running a competing business for a set time and area. Full Raimonde analysis.' },
            { title: 'Customer non-solicitation', body: 'Bars contacting the employer’s clients after leaving. Generally easier to enforce because it targets specific relationships.' },
            { title: 'Employee non-solicitation', body: 'Bars recruiting the employer’s workforce. Enforceable if reasonable in duration and scope.' },
            { title: 'Non-disclosure', body: 'Bars disclosing or using confidential information, with no geographic or time limits, for as long as the information stays confidential. Overlaps with ORC 1333.61.' },
            { title: 'Non-disparagement', body: 'Limits negative public statements, common in separation agreements. Enforceability depends on specificity and on not restricting NLRA-protected activity.' },
          ]}
        />
      </Section>

      <LocationsWeServe title="Business Law" />

      <Section title="Trade secrets alongside the non-compete" tone="ice">
        <p>
          The Ohio Uniform Trade Secrets Act, ORC 1333.61 through 1333.69, protects formulas, customer lists, pricing data, methods and
          processes that have independent economic value because they are not generally known and are kept reasonably secret. When an
          employee takes confidential information to a competitor, the employer may sue for both breach of the non-compete and
          misappropriation.
        </p>
        <FactTable
          title="Trade secret remedies"
          rows={[
            { label: 'Injunctive relief', value: 'An order stopping use or disclosure.' },
            { label: 'Damages', value: 'Actual loss and disgorgement of unjust enrichment.' },
            { label: 'Attorney fees', value: 'For willful misappropriation, under ORC 1333.65.' },
          ]}
          note="General skill and knowledge gained on the job are not trade secrets and can lawfully be used in a new position."
        />
      </Section>

      <Section title="When a non-compete dispute starts">
        <Steps
          steps={[
            { title: 'Demand letter', body: 'The employer usually starts by demanding that the competing activity stop.' },
            {
              title: 'TRO and preliminary injunction',
              body: 'Under Civil Rule 65, the employer must show a likelihood of success, irreparable harm, a balance of hardships in its favor and no harm to the public. Franklin County and other busy business courts can rule within days.',
            },
            { title: 'Damages and fees', body: 'Provable lost profits, attorney fees if the agreement provides for them, and possibly a tolling extension of the restriction.' },
          ]}
        />
        <PointGrid
          points={[
            { title: 'Defense: unreasonable restriction', body: 'The agreement fails the Raimonde test.' },
            { title: 'Defense: changed circumstances', body: 'Enforcement has become unreasonable.' },
            { title: 'Defense: employer breach', body: 'A material breach of the employment contract by the employer may release the employee.' },
            { title: 'Defense: no protectable interest', body: 'The information does not meet the legal definition of a protectable interest.' },
          ]}
        />
      </Section>

      <Section title="What the firm does on non-competes" tone="ice">
        <PointGrid
          points={[
            { title: 'Drafts for employers', body: 'Restrictions tailored enough to be enforced.' },
            { title: 'Reviews for employees', body: 'Before you sign, with the riskiest terms flagged and negotiated.' },
            { title: 'Enforces', body: 'Demand letters, TROs and injunctions in Ohio courts.' },
            { title: 'Defends', body: 'Against enforcement actions and trade secret claims.' },
          ]}
        />
        <p>
          See also <Link href="/business/employment-agreements">Ohio employment agreements</Link> and{' '}
          <Link href="/business/contract-drafting-review">contract drafting and review</Link>. To discuss a non-compete,{' '}
          <Link href="/contact">contact Jwayyed Law LLC</Link> for a consultation.
        </p>
      </Section>

      <Section title="Related business matters">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
