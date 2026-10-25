import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Partnership Disputes Lawyer Ohio',
  description:
    'Ohio partnership disputes under ORC Chapter 1776: fiduciary breaches, profit-sharing conflicts, expulsion, buyouts and judicial dissolution.',
  keywords: ['partnership disputes lawyer Columbus OH', 'Ohio partnership dispute attorney', 'ORC 1776 attorney', 'partnership dissolution Ohio', 'fiduciary duty partner Ohio', 'Franklin County partnership attorney'],
  openGraph: {
    title: 'Partnership Disputes Lawyer Ohio | Jwayyed Law LLC',
    description: 'Disputes between Ohio partners, from fiduciary claims to dissolution.',
    url: 'https://www.jjlawohio.com/business/partnership-disputes',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/business/partnership-disputes' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Partnership Disputes', href: '/business/partnership-disputes' },
];

const faqs = [
  {
    question: 'What law governs partnerships in Ohio?',
    answer:
      'General partnerships are governed by the Ohio Uniform Partnership Act, ORC Chapter 1776. Limited partnerships are governed separately by ORC Chapter 1782. These statutes set default rules on partner rights, duties and dissolution that apply whenever the partnership agreement is silent. A written agreement can change many of the defaults, but it cannot eliminate core fiduciary duties between partners without the express consent of every affected partner.',
  },
  {
    question: 'What are the most common types of partnership disputes in Ohio?',
    answer:
      "(1) Profit-sharing and capital account disagreements over how earnings are allocated or contributions valued; (2) breach of fiduciary duty, such as a managing partner's self-dealing or diverting business opportunities; (3) management deadlock between equal partners; (4) wrongful dissociation, when a partner exits in violation of the agreement; (5) expulsion of a partner, which must follow the agreement or ORC 1776.51; and (6) disputes over the value of a departing partner's interest.",
  },
  {
    question: 'What fiduciary duties do Ohio partners owe each other?',
    answer:
      'Under ORC 1776.35, each general partner owes the partnership and the other partners a duty of loyalty and a duty of care. Loyalty means accounting for and holding as trustee any property, profit or benefit from partnership business; not dealing with the partnership as an adverse party; and not competing with the partnership before dissolution. Care means acting as a reasonably prudent person would in a like position under similar circumstances. Ohio courts have allowed partnership agreements to limit these duties, but not eliminate them.',
  },
  {
    question: 'Can a court judicially dissolve a partnership in Ohio?',
    answer:
      'Yes. Under ORC 1776.66, a partner may petition the Common Pleas Court for dissolution if another partner engaged in wrongful conduct that hurts the partnership business; willfully or persistently breached the agreement or made it not reasonably practicable to carry on business with that partner; or it is otherwise not reasonably practicable to carry on the business under the agreement. Courts have broad equitable power, including ordering a buyout instead of dissolution to avoid destroying the business.',
  },
  {
    question: 'What is a buy-sell agreement and why does it matter in partnership disputes?',
    answer:
      "A buy-sell (buyout) agreement, inside the partnership agreement or separate from it, governs what happens to a partner's interest on triggering events such as death, disability, retirement, divorce or a decision to exit. It sets a valuation method (fixed price, formula or independent appraisal), payment terms and rights of first refusal. Without one, a departing partner under ORC 1776.54 is entitled to a buyout at the greater of liquidation value or going-concern value from a sale of the whole business, which often leads to valuation disputes in Common Pleas Court.",
  },
  {
    question: 'Can a partner bring a lawsuit on behalf of the partnership?',
    answer:
      'Yes. In a derivative action, a partner sues on behalf of the partnership for wrongs done to the partnership itself, as opposed to a direct claim for wrongs done to the partner personally. Derivative suits are governed by Ohio Civil Rule 23.1 and require the partner to allege that the partnership has failed or refused to pursue the claim. Common derivative claims include breach of fiduciary duty by a managing partner, misappropriation of partnership assets and self-dealing. Whether a claim is direct or derivative affects remedies and standing.',
  },
  {
    question: 'How are damages calculated in Ohio partnership disputes?',
    answer:
      'It depends on the wrong. For self-dealing or misappropriation, courts may order disgorgement of the profits the wrongdoer kept. For breach of the partnership agreement, expectation damages: what you would have received had the agreement been performed. For wrongful dissolution, ORC 1776.80 gives partners damages for the loss caused and the right to continue the business. Attorney fees may be awarded when the agreement or a statute provides for them, and punitive damages may be available for fraud or egregious misconduct.',
  },
  {
    question: 'Should I try mediation before litigating a partnership dispute?',
    answer:
      "Often, yes. Litigation can permanently end an ongoing business relationship. Franklin County Common Pleas Court's business docket and courts in Montgomery, Hamilton and other counties may schedule complex business cases months out. And many partnership agreements require arbitration, so court may not be an option at all. The first step is reviewing the agreement to see whether alternative dispute resolution is required or advisable.",
  },
];

const RELATED = [
  { href: '/business/shareholder-disputes', title: 'Shareholder disputes', subtitle: 'Minority shareholder rights and corporate disputes' },
  { href: '/business/business-litigation', title: 'Business litigation', subtitle: 'Commercial disputes and business lawsuits' },
  { href: '/business/business-dissolution', title: 'Business dissolution', subtitle: 'Winding down and dissolving an Ohio business' },
  { href: '/business/contract-drafting-review', title: 'Contract drafting and review', subtitle: 'Business contracts, NDAs and vendor agreements' },
  { href: '/civil/breach-of-contract', title: 'Breach of contract', subtitle: 'Claims when a partnership agreement is broken' },
];

export default function PartnershipDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Partnership disputes in Ohio"
        description="Profit splits, fiduciary breaches, expulsions and buyouts between partners, governed by ORC Chapter 1776. A court can dissolve the partnership or order a buyout instead."
      />

      <Section
        title="What Ohio partnership law covers"
        intro={
          <p>
            Ohio&rsquo;s Uniform Partnership Act, ORC Chapter 1776, sets the rights and duties of general partners. Limited partnerships
            fall under ORC Chapter 1782.
          </p>
        }
      >
        <p>
          The firm represents individual partners and partnerships in disputes across Columbus and central Ohio, as part of its{' '}
          <Link href="/business">Ohio business law services</Link>, and works to preserve the business relationship when that is
          possible.
        </p>
        <p>
          A single event, such as an unexpected exit, a financial irregularity or a strategic split, often exposes tensions that built
          for months or years. A talk about distributions can turn into fiduciary duty claims, a demand for an accounting and a suit for
          judicial dissolution.
        </p>
        <Callout title="Get advice before you act">
          Moving partnership assets, locking a co-partner out of the accounts or expelling a partner without following the agreement
          can create serious liability, even for the partner who was wronged.
        </Callout>
      </Section>

      <Section title="Fiduciary duties between partners" tone="ice">
        <FactTable
          title="Duties under ORC 1776.35"
          rows={[
            { label: 'Duty of loyalty', value: 'Account for and hold as trustee any profit from partnership business, do not deal with the partnership as an adverse party, do not compete before dissolution, and avoid self-dealing without the partners’ consent.' },
            { label: 'Duty of care', value: 'Act as a reasonably prudent person would in a similar position.' },
            { label: 'Limits', value: 'An agreement can limit these duties, but cannot eliminate them without the express consent of every affected partner.' },
            { label: 'Typical breaches', value: 'Diverting a business opportunity, paying yourself excessive compensation, or hiding a material conflict of interest.' },
            { label: 'Remedies', value: 'Disgorgement of profits, compensatory damages and, in egregious cases, punitive damages.' },
          ]}
        />
      </Section>

      <LocationsWeServe title="Business Law" />

      <Section title="Disputes the firm handles" tone="ice">
        <PointGrid
          points={[
            { title: 'Profit-sharing and capital accounts', body: 'How earnings are allocated, how contributions are valued, and whether draws comply with the agreement.' },
            { title: 'Breach of fiduciary duty', body: 'Self-dealing, diverted opportunities, competing with the partnership or concealing material information.' },
            { title: 'Expulsion and wrongful dissociation', body: 'Whether an expulsion followed the agreement and ORC 1776.51, or an exit was wrongful dissociation with liability under ORC 1776.80.' },
            { title: 'Books and records', body: 'Demands for a full accounting and inspection of financial records under ORC 1776.34.' },
            { title: 'Buy-sell enforcement and valuation', body: 'Whether a buyout was triggered and what the departing partner’s interest is worth. Without an agreement, ORC 1776.54 sets the buyout price.' },
            { title: 'Judicial dissolution and winding up', body: 'Petitions under ORC 1776.66 and winding up under ORC 1776.69 through 1776.78.' },
            { title: 'Derivative actions', body: 'Suits for the partnership against a wrongdoing partner or a third party under Ohio Civil Rule 23.1.' },
          ]}
        />
      </Section>

      <Section title="Judicial dissolution">
        <p>
          When the relationship is past repair, a partner may petition the Common Pleas Court under ORC 1776.66 if another partner
          engaged in wrongful conduct affecting the business, persistently breached the agreement, or made it not reasonably practicable
          to carry on. Courts often consider a buyout instead, especially when the business is profitable and dissolution would destroy
          value. The agreement&rsquo;s terms, the valuation method and each side&rsquo;s equitable arguments all matter.
        </p>
      </Section>

      <Section title="How a partnership dispute is resolved" tone="ice">
        <p>
          Cases are usually filed in the Common Pleas Court of the county where the partnership&rsquo;s principal office is, and Franklin
          County Common Pleas Court handles many from the Columbus area.
        </p>
        <Steps
          steps={[
            { title: 'Review the agreement', body: 'It decides most disputes, and may require arbitration through the American Arbitration Association (AAA) or JAMS.' },
            { title: 'Demand letter', body: 'States the breach, the remedy sought and a deadline to respond. Many disputes settle here or in mediation.' },
            { title: 'Emergency relief if needed', body: 'A TRO or preliminary injunction under Civil Rule 65, for example to stop a departing partner from taking client lists or redirecting payments.' },
            { title: 'Litigation', body: 'Complaint and answer, discovery (partner depositions and financial record reviews, often with forensic accounting), pretrial motions and trial if there is no settlement.' },
          ]}
        />
        <p>
          See <Link href="/business/business-litigation">Ohio business litigation</Link> for the full litigation process.
        </p>
      </Section>

      <Section title="What the firm does for partners">
        <PointGrid
          points={[
            { title: 'Reads the agreement first', body: 'Then assesses the claims under ORC Chapter 1776 and Ohio case law.' },
            { title: 'Sets realistic expectations', body: 'The likely range of outcomes for your side.' },
            { title: 'Resolves it informally when possible', body: 'Demand letters, negotiation and mediation.' },
            { title: 'Litigates when needed', body: 'To protect your financial interests and legal rights, whether you were wronged or accused.' },
            { title: 'Prevents the next dispute', body: 'Drafts and reviews partnership agreements and buy-sell provisions.' },
          ]}
        />
        <p>
          Related services include <Link href="/civil/breach-of-contract">breach of contract claims</Link>. Call{' '}
          <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation online</Link>.
        </p>
      </Section>

      <Section title="Related business matters" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
