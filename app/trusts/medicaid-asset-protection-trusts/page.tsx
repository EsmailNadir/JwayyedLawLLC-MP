import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Medicaid Asset Protection Trusts Ohio',
  description:
    'A Medicaid Asset Protection Trust funded five years before you apply keeps your home and savings out of Ohio Medicaid spend-down and estate recovery.',
  keywords: [
    'medicaid asset protection trust Columbus OH',
    'MAPT attorney Ohio',
    'medicaid planning attorney Ohio',
    'medicaid 5-year lookback Ohio',
    'Ohio Medicaid estate recovery ORC 5163.21',
    'income-only trust Ohio',
    'protect home from Medicaid Ohio',
    'Medicaid spend-down planning Ohio',
    'Miller trust Ohio QIT',
    'long-term care planning Columbus OH',
  ],
  openGraph: {
    title: 'Medicaid Asset Protection Trusts Ohio | Jwayyed Law LLC',
    description: 'Protect your home and savings from Ohio Medicaid spend-down with a MAPT. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/trusts/medicaid-asset-protection-trusts',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/trusts/medicaid-asset-protection-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Medicaid Asset Protection Trusts', href: '/trusts/medicaid-asset-protection-trusts' },
];

const faqs = [
  {
    question: 'What is a Medicaid Asset Protection Trust (MAPT)?',
    answer:
      'A MAPT is an irrevocable trust you fund with assets, often your home, savings or investment accounts, so you can later qualify for Ohio Medicaid long-term care benefits. You cannot be a beneficiary of the principal (you give up the right to get it back), so once the five-year lookback has passed the assets are no longer "countable resources" for Medicaid. It is usually an income-only trust: you may receive the income the assets generate, but not the principal.',
  },
  {
    question: "How does Ohio's five-year Medicaid lookback work?",
    answer:
      "Under 42 U.S.C. 1396p, Ohio Medicaid reviews every asset transfer made within 60 months (five years) of a long-term care application. Assets transferred to a MAPT inside that window are treated as if you still own them. A transfer penalty applies: a period of ineligibility equal to the value transferred divided by Ohio's average monthly nursing facility cost (approximately $9,000 to $10,000 per month in 2024). The penalty does not start until you are otherwise eligible except for the transfer, which can leave a dangerous gap in coverage if the transfer was made too close to the application.",
  },
  {
    question: 'Can I keep my house if I establish a MAPT?',
    answer:
      'Many Ohio clients set up a MAPT to protect the home. Your primary residence is exempt for eligibility while you or your spouse live there. But Ohio Medicaid estate recovery under ORC 5163.21 lets the state recoup Medicaid costs from your probate estate after you die, which can include a lien on the home if it passes through probate. Transferring the home to a MAPT more than five years before applying removes it from both your countable resources and your probate estate, so your heirs receive it free of estate recovery.',
  },
  {
    question: 'What happens if I need Medicaid before the five-year lookback period has passed?',
    answer:
      'An application within five years of funding the MAPT triggers a penalty period of ineligibility, and you pay for care privately during that gap. That is why planning should start well ahead, ideally 5 to 10 years before care is needed. If a health crisis forces an early application, an elder law attorney can sometimes use other strategies, such as converting countable assets to exempt ones or buying an immediate annuity to "spend down" in a compliant way, to shrink or bridge the penalty.',
  },
  {
    question: 'Who should serve as trustee of a MAPT?',
    answer:
      'Not you, if you want the assets out of your countable resources. That much control over the principal would lead Ohio Medicaid to treat the assets as still available to you. Common choices are an adult child, another trusted relative or a professional corporate trustee. The trustee must follow the trust terms faithfully and never make unauthorized principal distributions to you. Because you give up the right to demand the principal back, this is one of the most important choices in MAPT planning.',
  },
  {
    question: 'Can I change my mind after I set up a MAPT?',
    answer:
      'A MAPT is irrevocable by design, which is what makes it work. You cannot take the assets back, make yourself a principal beneficiary or revoke it alone. You trade control of the principal for Medicaid protection after five years. If things change, for example you recover and no longer expect to need Medicaid, the trust usually continues and the assets pass to your remainder beneficiaries. A court may modify a trust in extreme circumstances under ORC 5804.12, but that is neither reliable nor cheap.',
  },
  {
    question: 'What is an income-only trust, and how is it different from a regular MAPT?',
    answer:
      'Most MAPTs are income-only trusts: you may receive all the income the assets produce (interest, dividends, rent) but no principal. That is what keeps the principal out of your countable resources. If you kept a right to principal, Medicaid would treat it as fully available and count it toward the $2,000 resource limit. The income you receive counts as income for Medicaid and must go toward your cost of care if you are receiving Medicaid nursing facility benefits.',
  },
  {
    question: 'What is a Miller Trust (Qualified Income Trust) and how is it different from a MAPT?',
    answer:
      "A Miller Trust, or Qualified Income Trust (QIT), is used when your monthly income is above Ohio's Medicaid income limit for nursing facility coverage (currently $2,829/month in 2024 for a single person). Ohio is an \"income cap\" state for nursing facility Medicaid, so applicants above the cap cannot qualify unless the excess income goes into a QIT each month. The QIT is an irrevocable trust that receives your income above the cap and uses it to pay for your care. A MAPT deals with what you own; a QIT deals with what you receive each month. Many clients need both.",
  },
];

const RELATED = [
  { href: '/trusts', title: 'All trust services', subtitle: 'Every type of trust the firm sets up' },
  { href: '/trusts/irrevocable-trusts', title: 'Irrevocable trusts', subtitle: 'Tax planning and modification options' },
  { href: '/other-services/estate-planning-wills', title: 'Estate planning and wills', subtitle: 'The documents a MAPT works alongside' },
  { href: '/trusts/revocable-living-trusts', title: 'Revocable living trusts', subtitle: 'Probate avoidance, without Medicaid protection' },
];

export default function MedicaidAssetProtectionTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Medicaid asset protection trusts in Ohio"
        description="Ohio Medicaid looks back 60 months at every asset transfer. A Medicaid Asset Protection Trust funded before that window protects your home and savings from spend-down and estate recovery under ORC 5163.21."
      />

      <KeyFacts
        facts={[
          { figure: '60 months', label: 'Medicaid lookback on asset transfers before an application' },
          { figure: '$2,000', label: 'countable resource limit for a single person' },
          { figure: '$9,000 to $11,000', label: 'average monthly nursing facility cost in the Columbus area' },
          { figure: '$2,829', label: 'monthly income cap for single applicants (2024)' },
        ]}
      />

      <Section
        title="What long-term care costs, and what Medicaid requires"
        intro={
          <p>
            Nursing facility care in the Columbus area averages $9,000 to $11,000 per month, and memory care and assisted living
            charge comparable amounts. A single year can use up $100,000 to $130,000 in savings.
          </p>
        }
      >
        <p>
          Ohio Medicaid, the joint state-federal program that covers long-term care for eligible residents, is administered under
          ORC Chapter 5163 and governed federally by 42 U.S.C. 1396 et seq. A single applicant must have no more than $2,000 in
          countable resources before benefits begin. A MAPT set up at least five years before you apply removes the transferred
          assets from that count and shields them from Ohio&rsquo;s Medicaid estate recovery program. Jwayyed Law LLC advises clients
          in Columbus, Cincinnati, Dayton and surrounding Ohio communities on setting up and funding MAPTs.
        </p>
        <FactTable
          title="Countable and exempt resources"
          rows={[
            { label: 'Countable', value: 'Bank accounts, CDs, stocks, bonds, real estate other than your primary residence, and most other financial assets.' },
            {
              label: 'Exempt',
              value: 'Your primary residence (while you or your spouse live there), one vehicle, personal household goods, prepaid funeral arrangements and a few other categories.',
            },
            {
              label: 'Patient pay amount',
              value: 'Most of your monthly income goes to the nursing facility; Medicaid covers the balance up to the Medicaid rate.',
            },
          ]}
        />
      </Section>

      <Section title="The five-year lookback and the penalty period" tone="ice">
        <p>
          Under 42 U.S.C. 1396p(c), any transfer for less than fair market value within 60 months of an application causes a penalty
          period, during which Medicaid will not pay for nursing facility care.
        </p>
        <FactTable
          title="How the penalty is calculated"
          rows={[
            { label: 'Formula', value: 'Value transferred divided by the average monthly cost of nursing care in Ohio (approximately $9,500 per month in 2024 for this calculation).' },
            { label: 'Example', value: 'A $190,000 home transfer could result in a 20-month penalty period.' },
            {
              label: 'When it starts',
              value: 'Only once you would otherwise be eligible except for the transfer. An applicant with $190,000 transferred and no other resources could face a 20-month gap with no coverage and nothing to pay privately.',
            },
          ]}
        />
        <Callout title="When to start">
          Ideally five to ten years before you expect to need long-term care, while you are healthy enough to transfer assets and
          start the lookback clock. If you or a parent are in your 60s or 70s and have not planned for long-term care, call (614)
          285-5482 to schedule a consultation.
        </Callout>
      </Section>

      <Section title="How a MAPT is structured">
        <Steps
          steps={[
            {
              title: 'Sign the irrevocable trust',
              body: 'Name an independent trustee (typically an adult child or trusted third party) and remainder beneficiaries (your heirs).',
            },
            {
              title: 'Give up the principal',
              body: 'You cannot be a beneficiary of the principal. If you can take principal on demand, Ohio Medicaid treats the trust as a revocable resource and counts it toward the $2,000 limit.',
            },
            {
              title: 'Keep the income',
              body: 'As an income-only trust, you can receive all net income (interest, dividends, rent). It counts as your income for Medicaid and goes toward your cost of care once you receive benefits.',
            },
            {
              title: 'Fund it',
              body: 'With your home, a brokerage account or a bank CD. You keep receiving whatever interest or rent they produce.',
            },
            {
              title: 'Wait out the lookback',
              body: 'Once the five years have passed, the principal is no longer a countable resource.',
            },
          ]}
        />
        <h3>Protecting the family home</h3>
        <p>
          Your residence is exempt during your lifetime but subject to Ohio Medicaid estate recovery under ORC 5163.21 after you die.
          The state can claim against your probate estate, including the home if it passes through probate, to recoup all Medicaid
          benefits paid for you after age 55. A home transferred to a MAPT more than five years before you apply passes outside
          probate, so your heirs receive it free of any estate recovery claim.
        </p>
      </Section>

      <Section title="If there is no time for a MAPT" tone="ice">
        <p>When a nursing home admission is close, other strategies may still apply. Each must be checked against the lookback rules.</p>
        <PointGrid
          points={[
            {
              title: 'Legitimate spend-down',
              body: 'Prepaying funeral costs, paying off a mortgage, buying home modifications or medical equipment, or gifts to adult children (with the lookback in mind) can bring you to the $2,000 limit sooner.',
            },
            {
              title: 'Medicaid-compliant annuity',
              body: 'An immediate annuity converts a countable asset into an income stream that is not a countable resource.',
            },
            {
              title: 'Miller Trust (QIT) for income',
              body: 'If your income is over the cap ($2,829/month in 2024 for single individuals), a QIT is required. Income above the cap goes into it each month and it pays the facility directly. There is no lookback, and it is set up quickly as part of the application.',
            },
            {
              title: 'MAPT and QIT together',
              body: 'A MAPT is a pre-planning tool for assets. A QIT is an eligibility tool for income over the limit. Many clients need both.',
            },
          ]}
        />
      </Section>

      <LocationsWeServe title="Medicaid Asset Protection Trusts" />

      <Section title="Related trust pages" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
