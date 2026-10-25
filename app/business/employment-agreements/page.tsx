import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Employment Agreement Lawyer Ohio',
  description:
    'Ohio employment agreements, offer letters, severance agreements and contractor agreements, drafted and reviewed against at-will law and Ohio wage rules.',
  keywords: ['employment agreement lawyer Columbus OH', 'Ohio employment contract attorney', 'at-will employment Ohio', 'severance agreement Ohio', 'independent contractor misclassification Ohio', 'ORC 4111 employment lawyer'],
  openGraph: {
    title: 'Employment Agreement Lawyer Ohio | Jwayyed Law LLC',
    description: 'Employment contracts in an at-will state, for Ohio employers and employees.',
    url: 'https://www.jjlawohio.com/business/employment-agreements',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/business/employment-agreements' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Employment Agreements', href: '/business/employment-agreements' },
];

const faqs = [
  {
    question: 'Is Ohio an at-will employment state?',
    answer:
      "Yes. Without a written contract saying otherwise, either side can end the employment at any time, for any reason or no reason, without notice. Ohio courts have applied this rule for well over a century. The exceptions: (1) federal and Ohio statutes bar firing for protected characteristics (race, sex, age, disability and others) or protected activity (whistleblowing, workers' compensation claims, jury duty); (2) implied contracts, when a handbook or oral promise limits at-will termination; and (3) the public policy exception from Greeley v. Miami Valley Maintenance Contractors, Inc. (Ohio 1990). An employment agreement can replace the at-will default with agreed procedures.",
  },
  {
    question: 'What key provisions should an Ohio employment agreement include?',
    answer:
      '(1) Job title and duties; (2) compensation (base salary, bonus eligibility, commission formulas and payment timing that complies with ORC Chapter 4113, the Ohio Wage Payment Act); (3) benefits, including how accrued PTO is treated at termination (Ohio does not require payout of accrued vacation unless the agreement provides for it); (4) the employment term, at-will or fixed or "for cause"; (5) termination procedures, notice, severance and what counts as cause; (6) restrictive covenants (non-compete, non-solicitation and non-disclosure; see the non-compete page for Ohio enforceability); (7) IP assignment; (8) dispute resolution, choice of law (Ohio) and venue; and (9) an integration clause.',
  },
  {
    question: 'What wage and hour laws must Ohio employers comply with in employment agreements?',
    answer:
      "Under ORC Chapter 4111, Ohio's minimum wage (currently $10.45/hour for non-tipped employees as of 2024, indexed annually) applies to covered employees, and an agreement cannot waive it. Under ORC Chapter 4113, wages must be paid on regular paydays set in advance, without unauthorized deductions. Wages due at termination must be paid on the next regular payday, not immediately. For exempt salaried employees, the agreement should meet federal FLSA salary-basis rules to avoid misclassification. Bonus and commission terms should say when the pay is \"earned\": Ohio courts have held that a promised bonus can become a vested contractual obligation, even in at-will employment, once the employee met the conditions before termination.",
  },
  {
    question: 'What is the difference between an offer letter and a formal employment agreement?',
    answer:
      "An offer letter confirms the basic terms of a job offer (salary, start date, title, and whether employment is at-will) and is shorter and less formal. Ohio courts have held that a sufficiently specific offer letter can create binding obligations. A formal employment agreement governs the whole relationship, including restrictive covenants, IP assignment, dispute resolution, termination procedures and detailed pay terms. Senior executives, salespeople with customer relationships and employees with trade secret access should have a full agreement. An entry-level role may need only an at-will offer letter, though a confidentiality agreement is often wise.",
  },
  {
    question: 'How should Ohio employers structure severance agreements?',
    answer:
      "A severance agreement gives the departing employee extra pay or benefits, beyond what is already owed, in exchange for a release of legal claims; that extra consideration is what makes it enforceable. For employees 40 or older, the federal Older Workers Benefit Protection Act (OWBPA) requires that the agreement expressly reference the ADEA, give 21 days to consider it (45 days in a group termination), allow a 7-day revocation period after signing, and be in plain language. Ohio employers often add non-disparagement, cooperation and reaffirmed restrictive covenants. Employees should have counsel review a severance agreement first: the release is permanent.",
  },
  {
    question: 'What are the risks of misclassifying workers as independent contractors in Ohio?',
    answer:
      "Ohio applies a multi-factor test, similar to the IRS common-law test: how much control the employer has over the work, whether the worker runs a distinct business, how permanent the relationship is, who supplies the tools and workspace, and how the worker is paid. Misclassification can bring back payroll taxes and penalties from the IRS and the Ohio Department of Taxation, unpaid overtime under the federal FLSA and ORC 4111.03, workers' compensation and unemployment insurance liability, and lawsuits by the workers. The contractor agreement must reflect a real independent relationship, and the actual arrangement must match it.",
  },
  {
    question: 'Can an employee handbook create an enforceable contract in Ohio?',
    answer:
      'Potentially, yes. Ohio courts have found implied contractual obligations in handbooks, particularly specific promises about termination procedures, discipline or job security, unless the handbook has a clear, conspicuous disclaimer that it is not a contract. The disclaimer should appear at the start and be separately acknowledged in writing by the employee. Without one, a statement like "employees will be terminated only for cause after progressive discipline" has been held to override the at-will default. Review the handbook whenever policies change so it matches actual practice.',
  },
  {
    question: 'How does intellectual property assignment work in Ohio employment agreements?',
    answer:
      'Work an employee creates within the scope of employment is generally owned by the employer as a "work made for hire" under federal copyright law. There are gaps: inventions and works made outside the job, or on the employee\'s own time and resources, may belong to the employee. An IP assignment clause expressly assigns to the employer all inventions, work product, discoveries and improvements made during employment that relate to its business, and may reach ideas that stem from the job for a set period after it ends. Ohio has no statute limiting these clauses, but overly broad ones may face scrutiny.',
  },
];

const RELATED = [
  { href: '/business/contract-drafting-review', title: 'Contract drafting and review', subtitle: 'Business contracts of every kind under Ohio law' },
  { href: '/business/non-compete-agreements', title: 'Non-compete agreements', subtitle: 'Restrictive covenants under Ohio’s Raimonde standard' },
  { href: '/business/business-litigation', title: 'Business litigation', subtitle: 'Employment and business disputes in Ohio courts' },
  { href: '/business/business-compliance', title: 'Business compliance', subtitle: 'Ohio employment law and regulatory obligations' },
];

export default function EmploymentAgreementsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Employment agreements in Ohio"
        description="Ohio is an at-will state: without a written agreement, either side can end the job at any time. An employment agreement replaces that default with terms both sides know in advance."
      />

      <Section
        title="At-will employment and its exceptions"
        intro={
          <p>
            Unless an agreement says otherwise, Ohio employment can end at any time, for virtually any reason, without notice. A clear
            agreement sets termination, pay, benefits, dispute resolution and post-employment restrictions instead.
          </p>
        }
      >
        <p>
          The firm drafts, reviews and negotiates employment agreements for employers and employees in Columbus and throughout Ohio as
          part of its <Link href="/business">Ohio business law practice</Link>. A poorly drafted agreement, or none at all, leaves both
          sides open to disputes they never intended.
        </p>
        <PointGrid
          points={[
            { title: 'Protected characteristics', body: 'Federal and Ohio civil rights laws bar firing based on race, color, religion, sex, national origin, age (40 and older), disability, pregnancy and other characteristics.' },
            { title: 'Whistleblowing', body: 'ORC 4113.52 protects employees who report certain employer violations to the proper authorities.' },
            {
              title: 'Public policy',
              body: 'Under Greeley v. Miami Valley Maintenance Contractors, Inc. (1990), no firing in violation of a clear public policy in the Ohio Constitution, statutes or regulations, such as for a workers’ compensation claim, jury service or a safety report.',
            },
            { title: 'Implied contract', body: 'Handbooks and oral promises can limit at-will termination.' },
          ]}
        />
      </Section>

      <Section title="Pay rules the agreement must follow" tone="ice">
        <FactTable
          title="Ohio wage and hour requirements"
          rows={[
            { label: 'Minimum wage (ORC Chapter 4111)', value: '$10.45/hour for non-tipped employees as of 2024, indexed to inflation annually under the Ohio Constitution. Cannot be waived.' },
            { label: 'Wage payment (ORC Chapter 4113)', value: 'Regular paydays set in advance and no unauthorized deductions.' },
            { label: 'Final pay', value: 'On the next regular payday after termination.' },
            { label: 'Accrued vacation', value: 'Ohio does not require payout unless the agreement provides for it.' },
            { label: 'Exempt employees', value: 'Must meet federal FLSA salary-basis rules.' },
            { label: 'Overtime', value: 'Under the federal FLSA and ORC 4111.03.' },
          ]}
        />
        <Callout title="Say when bonuses and commissions are earned">
          Ohio courts have held that once an employee meets the conditions for a bonus or commission, it becomes a vested contractual
          right. An employer cannot fire someone on the eve of a large commission and avoid paying it.
        </Callout>
      </Section>

      <LocationsWeServe title="Business Law" />

      <Section title="Protecting the employer's business" tone="ice">
        <p>
          Non-compete, non-solicitation and non-disclosure terms must satisfy Ohio&rsquo;s reasonableness standard under{' '}
          <em>Raimonde v. Van Vlerah</em> and fit with the employer&rsquo;s wider IP protections. An IP assignment clause fills the gaps
          in the federal &ldquo;work made for hire&rdquo; doctrine. Clauses choosing arbitration, Ohio law and a venue such as Franklin
          County affect how fast disputes resolve and what procedural rights each side has. These provisions interact, so the agreement
          has to be read as a whole.
        </p>
        <FactTable
          title="Severance for employees 40 and older (OWBPA)"
          rows={[
            { label: 'Consideration', value: 'Pay or benefits beyond what the employee is already owed.' },
            { label: 'ADEA reference', value: 'The agreement must expressly reference the Age Discrimination in Employment Act.' },
            { label: 'Time to consider', value: '21 days, or 45 days in a group termination.' },
            { label: 'Revocation', value: '7 days after signing.' },
            { label: 'Language', value: 'Plain language.' },
          ]}
        />
      </Section>

      <Section title="Agreements the firm drafts and reviews">
        <PointGrid
          points={[
            { title: 'Executive agreements', body: '"For cause" definitions, severance, equity or bonus terms and post-employment restrictions for senior management.' },
            { title: 'Standard employment agreements', body: 'Agreed termination procedures and pay terms in place of at-will defaults for professional employees.' },
            { title: 'Offer letters', body: 'Proper at-will disclaimers and clear pay terms, without the implied-contract risk of loose wording.' },
            { title: 'Severance and releases', body: 'Drafted to meet OWBPA, or reviewed for a departing employee for adequate consideration and release scope.' },
            { title: 'Independent contractor agreements', body: 'Built to reflect a real contractor relationship that withstands IRS and Ohio Department of Taxation scrutiny.' },
            { title: 'Handbook review', body: 'At-will disclaimers, policies that match practice, and no accidental implied contracts.' },
            { title: 'Separation and transition agreements', body: 'Cooperation, references and continued benefits after termination.' },
          ]}
        />
      </Section>

      <Section title="Reducing wrongful termination risk" tone="ice">
        <p>
          For employers, an agreement that defines cause, sets the steps before termination (warnings, improvement plans or HR review)
          and includes a valid arbitration clause, paired with documented performance management and a compliant handbook, guards
          against improvised firings and gives a private forum for disputes.
        </p>
        <p>
          For employees, what the agreement actually says matters more than what HR says it says. Specialized knowledge, customer
          relationships or potential claims the employer would rather settle privately can give you leverage. A review before signing a
          severance agreement or non-compete can make a real financial difference.
        </p>
        <p>
          See also <Link href="/business/non-compete-agreements">Ohio non-compete agreements</Link> and{' '}
          <Link href="/business/contract-drafting-review">contract drafting and review</Link>. To discuss an employment agreement,{' '}
          <Link href="/contact">contact the office</Link> to schedule a consultation.
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
