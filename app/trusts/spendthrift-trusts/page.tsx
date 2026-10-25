import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Spendthrift Trusts Lawyer Ohio',
  description:
    'Ohio spendthrift trusts under ORC 5805.01 keep creditors away from an inheritance until it is paid out. The support exceptions and how to draft one.',
  keywords: [
    'spendthrift trust Columbus OH',
    'spendthrift trust attorney Ohio',
    'ORC 5805.01 spendthrift provision',
    'creditor protection trust Ohio',
    'Ohio Legacy Trust ORC 5816',
    'asset protection trust Ohio',
    'discretionary trust Ohio',
    'spendthrift provision beneficiary Ohio',
    'trust creditor protection Columbus',
    'self-settled spendthrift trust Ohio',
  ],
  openGraph: {
    title: 'Spendthrift Trusts Lawyer Ohio | Jwayyed Law LLC',
    description: 'Protect an inheritance from a beneficiary’s creditors with an Ohio spendthrift trust. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/trusts/spendthrift-trusts',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/trusts/spendthrift-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Spendthrift Trusts', href: '/trusts/spendthrift-trusts' },
];

const faqs = [
  {
    question: 'What is a spendthrift trust?',
    answer:
      "It is a trust with a spendthrift provision: a clause that (1) stops the beneficiary from assigning or pledging their interest, and (2) stops creditors from attaching or garnishing that interest before it is distributed. Ohio gives spendthrift provisions full legal effect under ORC 5805.01. While assets stay in the trust, a creditor generally cannot force a distribution or reach them to pay the beneficiary's debts.",
  },
  {
    question: 'Can creditors ever reach a spendthrift trust in Ohio?',
    answer:
      "Yes, in limited cases. ORC 5805.06 lets several kinds of creditors reach the trust despite the provision: (1) a child, spouse or former spouse with a judgment or court order for support or maintenance; (2) a judgment creditor who provided services to protect the beneficiary's interest in the trust; and (3) in some circumstances, a state or governmental entity with a valid claim. And once money is distributed to the beneficiary, it is no longer protected.",
  },
  {
    question: 'What are the exceptions for child support and alimony in Ohio spendthrift trusts?',
    answer:
      "Under ORC 5805.06(B), a former spouse or child holding a court order for support, maintenance or alimony can reach the beneficiary's interest. This reflects Ohio's public policy of enforcing support obligations. The holder of the support order can petition the probate court to order the trustee to pay enough from the trust to satisfy it, subject to the trustee's existing duties to other beneficiaries. The exception covers support orders only: ordinary tort judgments, credit card debt and business debt cannot pierce the protection.",
  },
  {
    question: 'Can you create a spendthrift trust for yourself in Ohio?',
    answer:
      'Generally no, with one exception. Under ORC 5805.06(A), a spendthrift provision does not work to the extent the beneficiary is also the settlor, so you cannot shield your own assets from your own creditors with a trust that names you as beneficiary. The Ohio Legacy Trust Act, ORC Chapter 5816, does allow qualified self-settled asset protection trusts if strict requirements are met: among others, the trust must be irrevocable, the trustee must be an Ohio resident or a qualified Ohio trust company, and assets must be transferred without fraudulent intent.',
  },
  {
    question: 'What happens when the trustee distributes funds from a spendthrift trust?',
    answer:
      "Once distributed, the money loses its spendthrift protection and becomes the beneficiary's own, open to their creditors. So distribution decisions matter. If the trustee knows a beneficiary has large debts or judgments, the trustee must weigh whether a distribution serves the beneficiary's long-term interest, since it could be seized at once. Ohio courts have held that a trustee who distributes knowing a creditor is trying to collect may, in some circumstances, be liable to that creditor.",
  },
  {
    question: 'What is the difference between a mandatory and discretionary spendthrift trust?',
    answer:
      'A mandatory trust requires distributions on a fixed schedule or formula, such as all net income quarterly. A discretionary trust leaves whether, when and how much to the trustee. Discretionary trusts protect far better, because a creditor cannot force a distribution the trustee is free to withhold. Under Ohio law a fully discretionary trust with a spendthrift provision is nearly impenetrable to general creditors, and most asset protection spendthrift trusts in Ohio are drafted that way.',
  },
  {
    question: 'Can you change who receives the money in a spendthrift trust?',
    answer:
      'It depends on whether the trust is revocable. A revocable trust can be amended or revoked at any time, but its protection is limited because your creditors can reach revocable trust assets. Changing beneficiaries of an irrevocable trust (which most strong spendthrift trusts are) generally requires court approval under ORC 5804.11 or ORC 5804.12, or a trust protector with modification powers. Many irrevocable spendthrift trusts give the beneficiary a limited power of appointment to redirect their interest among a defined class at death.',
  },
  {
    question: 'How do you set up a spendthrift trust in Ohio?',
    answer:
      'You need a written trust agreement, signed by the settlor, with a valid spendthrift provision that complies with ORC 5805.01. It must name the trustee and beneficiaries, set the distribution standards and state the restraint on voluntary and involuntary transfers. Then fund it with the assets you want protected. For a third party such as a child or grandchild, it can be a testamentary trust in your will or a stand-alone trust funded during your lifetime. It must comply with the Ohio Trust Code, ORC Chapters 5801 through 5811.',
  },
];

const RELATED = [
  { href: '/trusts', title: 'All trust services', subtitle: 'Every type of trust the firm sets up' },
  { href: '/trusts/special-needs-trusts', title: 'Special needs trusts', subtitle: 'Spendthrift terms that protect SSI and Medicaid' },
  { href: '/trusts/dynasty-trusts', title: 'Dynasty trusts', subtitle: 'Spendthrift protection at every generation' },
  { href: '/trusts/irrevocable-trusts', title: 'Irrevocable trusts', subtitle: 'Modification, decanting and tax planning' },
];

export default function SpendthriftTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Spendthrift trusts in Ohio"
        description="Under ORC 5805.01, a spendthrift provision stops a beneficiary's creditors from reaching trust assets until they are distributed. Support orders are the main exception."
      />

      <Section
        title="How a spendthrift provision works"
        intro={
          <p>
            Ohio gives spendthrift provisions full legal effect under ORC 5805.01. The protection covers a beneficiary&rsquo;s
            reckless spending, a lawsuit, a failed business, credit card debt or a divorce.
          </p>
        }
      >
        <p>
          A person who creates and funds a trust for someone else can set reasonable conditions on how that benefit is received and
          whether the beneficiary&rsquo;s creditors can reach it. Ohio courts have consistently upheld spendthrift provisions on that
          basis. The protection runs in two directions:
        </p>
        <PointGrid
          points={[
            {
              title: 'The beneficiary cannot give it away',
              body: 'They cannot assign, pledge or transfer their interest to anyone, including offering it as collateral for a loan.',
            },
            {
              title: 'Creditors cannot attach it',
              body: 'A judgment creditor cannot garnish the trustee or demand payment. The creditor must wait, possibly indefinitely, for the trustee to make a distribution, and only then can it collect from the money paid out.',
            },
          ]}
        />
        <p>
          Jwayyed Law LLC advises clients in Columbus, Cincinnati, Dayton and across Ohio on building spendthrift protection into
          their estate plans.
        </p>
      </Section>

      <Section title="Mandatory or discretionary distributions" tone="ice">
        <p>The distribution standard you choose decides how well the trust holds up against creditors.</p>
        <PointGrid
          points={[
            {
              title: 'Mandatory spendthrift trust',
              body: 'The trustee must pay on a set schedule or formula, such as all net income monthly or a fixed amount each quarter. A creditor cannot attach the right in advance, but a court may order the trustee to redirect a mandatory payment to a judgment creditor once it is due.',
            },
            {
              title: 'Fully discretionary spendthrift trust',
              body: 'The trustee decides whether, when and how much to pay, within the trust’s standards (often health, education, maintenance and support, or HEMS). The beneficiary cannot compel a payment, so a creditor has no attachable interest.',
            },
          ]}
        />
        <p>
          Ohio courts and the Ohio Trust Code recognize the difference, which makes fully discretionary trusts much stronger than
          mandatory or income-only trusts. It also puts a burden on the trustee. Ohio law does not forbid distributions while
          creditors are pursuing a beneficiary, but a trustee who distributes knowing creditors are actively collecting may be liable
          to them in equity. The trustee should talk to counsel before paying a beneficiary with significant debts or active
          litigation.
        </p>
      </Section>

      <Section title="Who can still reach the trust">
        <p>Ohio&rsquo;s spendthrift protection has limits. ORC 5805.06 lists the claimants who can get past it.</p>
        <FactTable
          title="Exceptions under ORC 5805.06"
          rows={[
            {
              label: 'Support orders',
              value:
                'Under ORC 5805.06(B)(1), a former spouse or child with a valid court order for spousal support, child support or other domestic relations support may petition for an order directing the trustee to pay it from the trust. This is the exception seen most often.',
            },
            {
              label: 'Services protecting the trust',
              value: 'A creditor who provided services to protect the beneficiary’s interest, such as an attorney who successfully defended the trust.',
            },
            { label: 'Government claims', value: 'In some circumstances, a state or governmental entity for unpaid taxes or Medicaid estate recovery.' },
            { label: 'Self-settled trusts', value: 'Under ORC 5805.06(A), the provision does not protect a beneficiary who is also the settlor.' },
            { label: 'Tort judgments', value: 'Generally not an exception. A judgment from a car accident or other personal injury claim cannot pierce the protection.' },
          ]}
        />
        <Callout title="If divorce or support is a risk">
          The spendthrift provision alone will not shield the trust from support claims. Pairing it with a fully discretionary
          standard lets the trustee withhold distributions while the risk is high, which is the best protection available.
        </Callout>
      </Section>

      <Section title="Setting up a spendthrift trust" tone="ice">
        <Steps
          steps={[
            {
              title: 'Write the trust agreement',
              body: 'A written agreement signed by the settlor, with a spendthrift provision that complies with ORC 5805.01.',
            },
            {
              title: 'Set the terms',
              body: 'Name the trustee and beneficiaries, set the distribution standard and state the restraint on voluntary and involuntary transfers.',
            },
            {
              title: 'Choose the form',
              body: 'For a child or grandchild, a testamentary trust in your will or a stand-alone trust funded during your lifetime.',
            },
            { title: 'Fund it', body: 'Transfer the assets you want protected.' },
          ]}
        />
        <p>
          The firm drafts each spendthrift trust around the family&rsquo;s circumstances, so the distribution standard, the trustee
          and the protective terms fit together. Call (614) 285-5482 to schedule a consultation.
        </p>
      </Section>

      <Section title="Combining spendthrift protection with other trusts">
        <PointGrid
          points={[
            {
              title: 'Ohio Legacy Trust',
              body: (
                <>
                  To protect your own assets, Ohio offers a self-settled, irrevocable, discretionary spendthrift trust under ORC
                  Chapter 5816. The trustee must be an Ohio resident individual or a qualified Ohio trust company, the transfer must be
                  made without fraudulent intent, you must stay solvent after it, and a five-year statute of limitations applies to
                  creditors who existed at the time of the transfer. See{' '}
                  <Link href="/trusts/asset-protection-trusts">asset protection trusts</Link>.
                </>
              ),
            },
            {
              title: 'Special needs trust',
              body: 'Nearly always includes a spendthrift provision so the beneficiary’s interest is not counted as an available resource for Medicaid or SSI.',
            },
            {
              title: 'Dynasty trust',
              body: 'Uses spendthrift terms at every generation so a creditor, divorcing spouse or careless beneficiary cannot drain the trust before it reaches later generations.',
            },
            {
              title: 'Who uses a Legacy Trust',
              body: 'Business owners, physicians, attorneys and others in high-liability work who want protection beyond what liability insurance provides.',
            },
          ]}
        />
      </Section>

      <LocationsWeServe title="Spendthrift Trusts" />

      <Section title="Related trust pages" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
