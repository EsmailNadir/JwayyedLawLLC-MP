import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Revocable Living Trusts Lawyer in Ohio',
  description:
    'Set up an Ohio revocable living trust to avoid probate and keep your estate private. Funding, the pour-over will and successor trustees explained.',
  keywords: [
    'revocable living trust Columbus OH',
    'living trust attorney Ohio',
    'avoid probate Ohio',
    'estate planning lawyer Columbus',
    'revocable trust Ohio',
    'pour-over will Ohio',
    'trust funding Ohio',
    'Ohio Trust Code attorney',
  ],
  openGraph: {
    title: 'Revocable Living Trusts Lawyer in Ohio | Jwayyed Law LLC',
    description:
      'Set up an Ohio revocable living trust to avoid probate and keep your estate private. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/trusts/revocable-living-trusts',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/trusts/revocable-living-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Revocable Living Trusts', href: '/trusts/revocable-living-trusts' },
];

const faqs = [
  {
    question: 'What is a revocable living trust under Ohio law?',
    answer:
      'It is a trust governed by the Ohio Trust Code (ORC Chapters 5801 to 5811). As the grantor, you transfer your assets to the trust during your lifetime and keep the right to amend or revoke it at any time under ORC 5805.06. You usually serve as your own trustee and keep full control. When you die or become incapacitated, the successor trustee you named manages and distributes the trust property under your written instructions, outside probate court.',
  },
  {
    question: 'How does a revocable living trust avoid probate in Ohio?',
    answer:
      'Probate in Ohio is the court-supervised process of validating a will and authorizing distribution of assets through the Franklin County or another county probate court. Trust assets are owned by the trust, not by you individually at death, so they are not part of that process. A properly funded revocable trust lets your successor trustee transfer real estate, bank accounts, investments and other property to beneficiaries within weeks, rather than the six to twelve months Ohio probate often takes, and without fees that can run from one to four percent of the estate.',
  },
  {
    question: 'What is a pour-over will and why do I need one with my trust?',
    answer:
      "A pour-over will catches any assets you did not transfer into the trust during your lifetime and directs them into the trust at death, so the trust's terms govern them. Those assets still pass through probate, but nothing is left out of the plan. A valid Ohio will must meet the ORC 2107.03 formalities (two witnesses and notarization). Jwayyed Law LLC drafts a pour-over will alongside every revocable living trust.",
  },
  {
    question: 'What does "funding the trust" mean and what happens if I forget?',
    answer:
      'Funding means retitling assets in the name of the trust: for example, changing a deed to read "John Smith, Trustee of the John Smith Revocable Living Trust dated January 1, 2025" and updating beneficiary designations on bank and investment accounts. An unfunded or partly funded trust is the most common estate planning mistake, because any asset never transferred into the trust must go through probate. The firm helps clients finish funding by preparing Ohio deeds, drafting assignments for business interests and providing account change instructions.',
  },
  {
    question: 'Can I change or revoke my revocable living trust?',
    answer:
      'Yes. Under ORC 5805.06 you can amend, restate or revoke a revocable trust at any time while you have legal capacity, unless the trust instrument says otherwise. When circumstances change a lot, a full restatement (replacing the whole document) is often cleaner than a string of amendments. If you revoke the trust, assets titled in its name must be retitled back to you. No court approval is needed.',
  },
  {
    question: 'How does a revocable living trust compare to a will?',
    answer:
      'Both say who receives your property at death. A will must be probated: filed with the county probate court, published in a legal notice and supervised by a judge, and it becomes a public record. A revocable trust passes assets privately and right away on death or incapacity. A trust also covers incapacity: if you become disabled, your successor trustee manages your affairs without a court-appointed guardian. The trade-off is cost. A trust-based plan costs more to draft and needs funding, but it usually saves on probate costs and delay.',
  },
  {
    question: 'Who should serve as successor trustee?',
    answer:
      'The successor trustee takes over the trust assets if you die or become incapacitated, so choose someone trustworthy, organized and willing to carry out detailed legal and financial duties. Common choices are an adult child, a sibling, a trusted friend or a corporate trustee such as a bank trust department. Under ORC 5808.01, trustees owe duties of loyalty, prudent administration and impartiality among beneficiaries. The firm advises on the choice and can prepare letters of instruction to guide the trustee.',
  },
  {
    question: 'Does a revocable living trust protect assets from creditors or reduce estate taxes?',
    answer:
      'No. Because you keep full control and the right to revoke, the IRS and Ohio courts treat trust assets as yours. Creditors can reach them during your lifetime and they are included in your taxable estate. A revocable trust gives you probate avoidance and privacy. Ohio eliminated its state estate tax in 2013, so for most Ohio residents the concerns are federal estate tax (for estates over $13.99 million in 2025) and probate avoidance, which is what a revocable trust delivers.',
  },
];

const RELATED = [
  { href: '/trusts/special-needs-trusts', title: 'Special needs trusts', subtitle: 'Protecting benefits eligibility for a disabled loved one' },
  { href: '/trusts/irrevocable-trusts', title: 'Irrevocable trusts', subtitle: 'Estate tax planning and Medicaid planning options' },
  { href: '/trusts/asset-protection-trusts', title: 'Asset protection trusts', subtitle: 'Ohio Legacy Trusts under ORC Chapter 5816' },
  { href: '/other-services/powers-of-attorney', title: 'Powers of attorney', subtitle: 'Financial and healthcare decision-making authority' },
];

export default function RevocableLivingTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Revocable living trusts in Ohio"
        description="A funded revocable trust passes your home, accounts and investments to your family without probate, which in Ohio often takes six to twelve months. You keep control and can revoke it at any time."
      />

      <Section
        title="What a revocable living trust does"
        intro={
          <p>
            The Ohio Trust Code, ORC Chapters 5801 through 5811, governs revocable trusts. You move your home, bank accounts,
            investments and other property into the trust, serve as your own trustee and can amend or revoke it at any time under
            ORC 5805.06.
          </p>
        }
      >
        <p>
          Nothing changes in how you use your property while you are alive and well. The difference shows when you die or become
          incapacitated: the successor trustee you named distributes your estate under your written instructions, with no probate
          and no court supervision.
        </p>
        <p>
          Probate in Ohio runs through the county probate courts. In Franklin County, for example, a modest estate can take six to
          eighteen months to close, and the executor and attorney fees set by ORC 2113.35 can consume one to four percent of the gross
          estate. Assets titled in a funded trust pass straight to beneficiaries. The trust document also stays private, while a
          probated will becomes a public court record anyone can search.
        </p>
        <p>
          If you own real estate in more than one state, the trust matters more. Without one, your family may have to open ancillary
          probate in each state where you own real property. With one, the trustee signs a new deed for the trust in each place, with
          no court involved.
        </p>
      </Section>

      <Section title="What a revocable trust will not do" tone="ice">
        <p>
          Many Ohio families believe a revocable trust protects assets from creditors or cuts estate taxes. It does neither. You keep
          full power to revoke the trust and take the assets back, so creditors (including nursing homes and Medicaid) can reach them
          during your lifetime, and the IRS counts them in your taxable estate.
        </p>
        <FactTable
          title="Tax and creditor rules for a revocable trust"
          rows={[
            { label: 'Ohio estate tax', value: 'None. Ohio eliminated its state estate tax in 2013.' },
            { label: 'Federal estate tax', value: 'Only a concern for estates over the federal exemption ($13.99 million in 2025).' },
            { label: 'Taxable estate', value: 'Trust assets are included, because you can revoke the trust.' },
            { label: 'Creditors', value: 'Can reach trust assets during your lifetime, including nursing homes and Medicaid.' },
          ]}
        />
        <p>
          A revocable trust is a probate-avoidance and incapacity-planning tool. For creditor protection you need a different
          structure, such as an <Link href="/trusts/asset-protection-trusts">Ohio Legacy Trust</Link> or a properly structured LLC.
          For Medicaid planning, the vehicle is an <Link href="/trusts/irrevocable-trusts">irrevocable trust</Link> planned around the
          five-year lookback.
        </p>
      </Section>

      <Section title="Grantor, trustee and beneficiary">
        <PointGrid
          points={[
            {
              title: 'Grantor',
              body: 'Also called the settlor or trustor. The person who creates and funds the trust.',
            },
            {
              title: 'Trustee',
              body: 'Holds legal title to the trust assets and manages them under the trust terms. During your lifetime, that is you.',
            },
            {
              title: 'Beneficiary',
              body: 'Receives the economic benefit. During your life you are the primary beneficiary; after your death, your named heirs receive distributions.',
            },
            {
              title: 'Successor trustee',
              body: 'Takes over when you die or become incapacitated. Manages accounts, sells or transfers real estate, files tax returns and distributes assets exactly as the trust says.',
            },
          ]}
        />
        <p>
          One person can hold the first three roles at once. The successor trustee is the choice that matters most. Ohio law imposes
          fiduciary duties on trustees under ORC Chapter 5808, including loyalty, prudent administration and impartiality among
          beneficiaries. The firm works through that choice, and the written instructions that go with it, with every client.
        </p>
      </Section>

      <Section title="Setting up and funding the trust" tone="ice">
        <p>
          A trust that has not been funded holds nothing, so it avoids no probate. Funding means retitling every significant asset in
          the trust&rsquo;s name.
        </p>
        <Steps
          steps={[
            { title: 'Draft the trust', body: 'The trust document names you as trustee, your beneficiaries and your successor trustee.' },
            {
              title: 'Deed your real estate',
              body: 'Execute and record new Ohio deeds for real property. The firm prepares deeds for Ohio real estate as part of trust planning.',
            },
            { title: 'Retitle accounts', body: 'Update account titles at banks and brokerage firms.' },
            { title: 'Assign business interests', body: 'Assign LLC membership interests and partnership interests to the trust.' },
            {
              title: 'Review beneficiary designations',
              body: 'Life insurance and IRAs already pass outside probate. They usually name the trust as beneficiary only when there is a specific planning reason.',
            },
            {
              title: 'Sign the pour-over will',
              body: 'It catches anything left outside the trust and directs it into the trust at death.',
            },
          ]}
        />
        <p>
          The firm gives every client a funding checklist for the remaining assets, and every client who sets up a revocable trust
          with Jwayyed Law LLC also receives a <strong>pour-over will</strong>. Assets it catches still go through probate: a
          simplified process called summary release from administration if they are small enough, a full probate otherwise. Either
          way, your trust&rsquo;s distribution instructions govern them.
        </p>
      </Section>

      <LocationsWeServe title="Trusts" />

      <Section title="Related planning" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
        <Callout title="Changing your plan later">
          Under ORC 5805.06 you can amend, restate or revoke the trust while you have capacity, with no court approval.
        </Callout>
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
