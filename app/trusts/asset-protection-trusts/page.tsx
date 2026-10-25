import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Asset Protection Trusts Lawyer in Ohio',
  description:
    'Ohio Legacy Trusts under ORC Chapter 5816 protect your assets from future creditors while you stay a discretionary beneficiary. Requirements and timing.',
  keywords: [
    'asset protection trust Ohio',
    'Ohio Legacy Trust attorney',
    'asset protection trusts lawyer',
    'domestic asset protection trust Ohio',
    'ORC 5816 trust attorney',
    'spendthrift trust Columbus OH',
    'creditor protection trust Ohio',
    'asset protection lawyer Columbus',
    'Ohio DAPT attorney',
  ],
  openGraph: {
    title: 'Asset Protection Trusts Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Ohio Legacy Trusts under ORC Chapter 5816 to protect assets from future creditors. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/trusts/asset-protection-trusts',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/trusts/asset-protection-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Asset Protection Trusts', href: '/trusts/asset-protection-trusts' },
];

const faqs = [
  {
    question: 'What is the Ohio Legacy Trust and how does it work?',
    answer:
      "The Ohio Legacy Trust (OLT) is Ohio's domestic asset protection trust (DAPT), authorized under ORC Chapter 5816. It is a self-settled irrevocable trust in which you can be a discretionary beneficiary: you transfer assets into a trust that protects them from future creditors and stay eligible for distributions at the trustee's discretion. The trust must be irrevocable, contain a spendthrift provision and be governed by Ohio law. At least one qualified trustee must be an Ohio resident individual or an Ohio-authorized trust company. The trustee has sole discretion over distributions and cannot be instructed by you to make one.",
  },
  {
    question: 'What is the 18-month seasoning period for Ohio Legacy Trusts?',
    answer:
      'Under ORC 5816.05, protection does not start the moment you transfer assets. A qualifying transfer must "season" for 18 months (one year and six months) before it is protected from creditors whose claims arose before the transfer. More precisely, protection applies to claims arising after the transfer once the seasoning period has passed, and to pre-transfer creditors only if the transfer was not a fraudulent conveyance. Set up and fund the trust well before any known or foreseeable creditor threat, not in response to pending litigation.',
  },
  {
    question: 'What are "qualified dispositions" under ORC Chapter 5816?',
    answer:
      'Under ORC 5816.02, a qualified disposition is a transfer of property to an Ohio Legacy Trust by the settlor, directly or indirectly, that meets the statute: the trust is irrevocable, has a spendthrift provision, names at least one qualified trustee, is governed by Ohio law, and the transfer is made with intent to defraud no one. At the time of transfer you must also sign a qualified affidavit, a sworn statement confirming among other things that the transfer does not make you insolvent, that no litigation is pending or threatened, and that the assets are not proceeds of a wrongful act. The affidavit must be completed at the same time as the transfer.',
  },
  {
    question: 'What assets can be transferred into an Ohio Legacy Trust?',
    answer:
      'Ohio does not restrict the type of asset. Common ones are cash and investment accounts, real estate (by deed), business interests (LLC membership interests, partnership interests, shares), intellectual property and other personal property. Practical limits apply. Mortgaged real estate may need lender consent under a due-on-sale clause. Retirement accounts (IRAs, 401(k)s) cannot be moved into a trust without immediate taxation, so coordinate them through beneficiary designations instead. Transfers made within 30 days of incurring a debt are treated differently from transfers made with a longer horizon. Have an attorney review every asset before it is transferred.',
  },
  {
    question: 'What are the fraudulent transfer limitations on Ohio Legacy Trusts?',
    answer:
      "An Ohio Legacy Trust does not protect a fraudulent transfer. Under Ohio's Uniform Fraudulent Transfer Act (ORC 1336.04), a transfer is fraudulent if made with actual intent to hinder, delay or defraud a creditor, or made without reasonably equivalent value while the transferor was insolvent. A creditor who proves it can void the transfer. The trust is for claims that arise in the future, not known, present claims. Funding it after a lawsuit is filed or threatened may be a fraudulent transfer and can expose both the settlor and the attorney to significant liability.",
  },
  {
    question: 'How does an Ohio Legacy Trust compare to an LLC for asset protection?',
    answer:
      "Both are legitimate tools and they work differently. An LLC protects the company's assets from its members' personal creditors, and protects personal assets from the business's liabilities, when it is properly structured and maintained. An Ohio Legacy Trust protects the assets transferred into it from your personal creditors, subject to the 18-month seasoning limit. Many clients use both: business assets in a properly structured LLC and excess personal investments in an Ohio Legacy Trust. Neither is a guarantee, and both need ongoing compliance. The firm sets up both structures.",
  },
  {
    question: 'Is an Ohio Legacy Trust appropriate for Medicaid planning?',
    answer:
      "No. Do not confuse it with a Medicaid asset protection trust. A Medicaid trust must leave you no beneficial interest and no ability to receive principal, which conflicts with the Legacy Trust's defining feature: that you can be a discretionary beneficiary. Ohio Medicaid would likely count the assets in an OLT as available resources. For long-term care planning, ask about a properly structured irrevocable trust and planning around the Medicaid five-year lookback.",
  },
  {
    question: 'How do I establish an Ohio Legacy Trust with Jwayyed Law LLC?',
    answer:
      'The firm starts with a review of your assets, liabilities and goals. It then drafts the trust with every statutory requirement (irrevocability, a spendthrift provision, Ohio governing law, a qualified trustee) and prepares the qualified affidavit required by ORC 5816.05. It works with you to transfer qualifying assets, preparing deeds, assignment agreements and account transfer letters, and advises on how the trust fits your revocable living trust, will and beneficiary designations. Call the Columbus office at (614) 285-5482 to schedule a consultation.',
  },
];

const RELATED = [
  { href: '/trusts/irrevocable-trusts', title: 'Irrevocable trusts', subtitle: 'Estate tax planning, Medicaid planning and more' },
  { href: '/trusts/revocable-living-trusts', title: 'Revocable living trusts', subtitle: 'Probate avoidance and incapacity planning' },
  { href: '/trusts/spendthrift-trusts', title: 'Spendthrift trusts', subtitle: 'Protecting beneficiaries from their own creditors' },
  { href: '/trusts/medicaid-asset-protection-trusts', title: 'Medicaid asset protection trusts', subtitle: 'Long-term care planning with the five-year lookback' },
];

export default function AssetProtectionTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Asset protection trusts in Ohio"
        description="An Ohio Legacy Trust under ORC Chapter 5816 shields assets from future creditors while you remain a discretionary beneficiary. Protection starts after an 18-month seasoning period."
      />

      <KeyFacts
        facts={[
          { figure: '18 months', label: 'seasoning period before a transfer is protected (ORC 5816.05)' },
          { figure: '2013', label: 'year the Ohio Legacy Trust Act took effect' },
          { figure: '$145,425', label: 'home equity protected by the Ohio homestead exemption (ORC 2329.66)' },
        ]}
      />

      <Section
        title="How an Ohio Legacy Trust works"
        intro={
          <p>
            Ohio authorizes domestic asset protection trusts (DAPTs), in which you can be a discretionary beneficiary of the trust that
            protects your assets from your creditors. Ohio&rsquo;s version is the Ohio Legacy Trust, governed by ORC Chapter 5816.
          </p>
        }
      >
        <p>
          Before the Ohio Legacy Trust Act took effect in 2013, Ohioans who wanted this protection had to use offshore trusts or trusts
          in states like Nevada or Delaware, often with significant complexity and expense. Now the trust can be set up under Ohio
          law, run by Ohio trustees, with the benefit of Ohio&rsquo;s spendthrift provisions in ORC Chapter 5805.
        </p>
        <p>
          You transfer assets into an irrevocable trust, name at least one qualified Ohio trustee and include a spendthrift
          provision. A traditional irrevocable trust requires you to give up every beneficial interest; an OLT lets you remain a{' '}
          <em>discretionary</em> beneficiary. The trustee alone decides whether to make or withhold distributions. You cannot compel
          one, so your creditors cannot either. After the 18-month seasoning period under ORC 5816.05, the assets are protected from
          claims that arose after the transfer date.
        </p>
      </Section>

      <Section title="Who an Ohio Legacy Trust is for" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Professionals with liability risk',
              body: 'Physicians, attorneys, contractors and business owners exposed to malpractice or commercial litigation.',
            },
            { title: 'Real estate investors', body: 'Owners of multiple properties.' },
            {
              title: 'Anyone guarding savings',
              body: 'People who want to make sure a catastrophic judgment or divorce settlement cannot wipe out a lifetime of savings.',
            },
          ]}
        />
        <Callout title="Plan before there is a claim">
          The trust cannot shelter assets from existing or reasonably anticipated creditors. Transfers made with intent to hinder,
          delay or defraud a creditor remain voidable under Ohio&rsquo;s fraudulent transfer law (ORC Chapter 1336).
        </Callout>
      </Section>

      <Section title="What the statute requires">
        <FactTable
          title="Ohio Legacy Trust requirements under ORC Chapter 5816"
          rows={[
            { label: 'Irrevocable', value: 'You cannot keep the right to take assets back.' },
            { label: 'Spendthrift provision', value: 'Prevents both voluntary and involuntary assignment of your beneficial interest.' },
            {
              label: 'Qualified trustee',
              value: 'At least one must be an Ohio resident individual or a trust company authorized to do trust business in Ohio, and must hold custody of assets, keep trust records and prepare accountings.',
            },
            { label: 'Governing law', value: 'The trust must be expressly governed by Ohio law.' },
            { label: 'Seasoning', value: '18 months before a transfer is protected (ORC 5816.05).' },
          ]}
        />
        <h3>The qualified affidavit</h3>
        <p>
          Before or at the same time as each transfer, you sign a qualified affidavit under ORC 5816.05. It swears that:
        </p>
        <ul>
          <li>the transfer does not make you insolvent or unable to pay debts as they come due;</li>
          <li>you are not about to file for bankruptcy and have not filed within the preceding 5 years;</li>
          <li>no civil or criminal actions are pending or threatened against you (with certain exceptions);</li>
          <li>the assets did not come from unlawful activity; and</li>
          <li>you are not in default on any child support obligation.</li>
        </ul>
        <p>
          A defective affidavit can void the statutory protection for that transfer, so it is tailored to your circumstances and
          signed with counsel.
        </p>
      </Section>

      <Section title="Setting up and funding the trust" tone="ice">
        <Steps
          steps={[
            { title: 'Review', body: 'A review of your assets, liabilities and goals.' },
            {
              title: 'Draft',
              body: 'The trust document with every statutory requirement: irrevocability, a spendthrift provision, Ohio governing law and a qualified trustee.',
            },
            { title: 'Sign the qualified affidavit', body: 'Required by ORC 5816.05 with each transfer.' },
            { title: 'Transfer assets', body: 'Deeds, assignment agreements and account transfer letters as needed.' },
            { title: 'Coordinate the plan', body: 'Fit the trust to your revocable living trust, will and beneficiary designations.' },
          ]}
        />
      </Section>

      <Section title="Other Ohio asset protection tools">
        <p>An Ohio Legacy Trust is one piece of a wider plan. Map every asset against the protections that already exist.</p>
        <PointGrid
          points={[
            {
              title: 'Retirement accounts',
              body: 'IRAs and 401(k)s have strong federal and state creditor protection and should be maximized before a trust transfer.',
            },
            { title: 'Homestead exemption', body: 'Protects up to $145,425 in home equity from most creditor claims under ORC 2329.66.' },
            { title: 'LLCs', body: 'A properly structured LLC protects business assets and separates personal assets from business risk.' },
            { title: 'Life insurance and annuities', body: 'Cash value and annuities have statutory protection under ORC 3911.10 and 3911.14.' },
          ]}
        />
        <p>
          The Legacy Trust then covers what fits nowhere else: brokerage accounts, real estate beyond the homestead and business sale
          proceeds.
        </p>
      </Section>

      <LocationsWeServe title="Trusts" />

      <Section title="Related trust pages" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
