import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Ohio Trusts Attorney',
  description:
    'Revocable, irrevocable, special needs, asset protection and other trusts for Ohio families in Columbus, Cincinnati, Dayton and across the state.',
  keywords: ['Ohio trusts attorney', 'Columbus trusts attorney', 'Cincinnati trusts attorney', 'Dayton trusts attorney', 'revocable living trusts', 'asset protection trusts', 'asset protection trust Ohio', 'special needs trusts', 'trusts lawyer Ohio'],
  openGraph: {
    title: 'Ohio Trusts Attorney | Jwayyed Law LLC',
    description:
      'Trusts and estate planning across Ohio: asset protection, revocable living and special needs trusts. Columbus, Cincinnati and Dayton. (614) 285-5482.',
    url: 'https://www.jjlawohio.com/trusts',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/trusts' },
};

const breadcrumbItems = [{ label: 'Trusts', href: '/trusts' }];

const faqs = [
  {
    question: 'What is a trust?',
    answer:
      'A trust is a legal arrangement in which a person (the grantor) transfers assets to a trustee, who manages and distributes them for a beneficiary. In estate planning, trusts are used to control how assets are distributed after death, minimize federal estate taxes (Ohio has no state estate tax since 2013) and avoid probate.',
  },
  {
    question: 'What is the difference between a revocable and irrevocable trust?',
    answer:
      'The grantor can change or dissolve a revocable trust at any time during their lifetime. An irrevocable trust cannot be changed once it is established. A revocable trust gives flexibility; an irrevocable trust gives stronger asset protection and tax advantages.',
  },
  {
    question: 'Why should I create a trust?',
    answer:
      'A trust can avoid probate, control how your assets are distributed, minimize federal estate taxes (Ohio has no state estate tax since 2013) and protect assets from creditors or lawsuits. It also allows detailed planning, such as providing for minor children, making charitable gifts or providing for a beneficiary with special needs.',
  },
  {
    question: 'Do I need an attorney to create a trust?',
    answer:
      'Yes. A trust involves legal and tax questions. An attorney can help you choose the right type of trust, make sure it complies with Ohio law and draft the documents to fit your estate planning goals.',
  },
  {
    question: 'What is the cost of setting up a trust in Ohio?',
    answer:
      'It depends on how complex the trust is and what services the attorney provides. Simple trusts may cost a few hundred dollars, while more complex estate plans can involve higher fees.',
  },
  {
    question: 'What is an asset protection trust in Ohio?',
    answer:
      'An asset protection trust is an irrevocable trust designed to shield assets from future creditors, lawsuits and judgments. While Ohio does not have a domestic asset protection trust statute, Ohio residents can use irrevocable trusts with spendthrift provisions under Ohio Revised Code Chapter 5805, or set up asset protection trusts in states with favorable laws. An Ohio trusts attorney can help you decide which approach fits.',
  },
  {
    question: 'Who should consider an asset protection trust?',
    answer:
      'Business owners, physicians, real estate investors and other professionals with higher exposure to lawsuits and liability claims. These trusts are also used in Medicaid planning to protect assets while qualifying for long-term care benefits. The trust must be set up before any known claims arise; timing and structure decide whether it survives a fraudulent transfer challenge.',
  },
  {
    question: 'What is the role of a trustee in Ohio and what fiduciary duties do they owe?',
    answer:
      "A trustee is the person or institution that manages a trust and its assets for the beneficiaries. Under Ohio Revised Code 5808.02, a trustee owes a duty of loyalty: the trust must be administered solely in the beneficiaries' interest, not the trustee's. The trustee is also bound by the prudent investor standard under ORC Chapter 5809, which requires investing and managing trust assets as a prudent investor would, considering the trust's purposes and terms, risk tolerance and the need for liquidity. Ohio trustees also owe a duty to inform and report: keeping beneficiaries reasonably informed about administration and giving regular accountings of assets and transactions. A trustee who fails these duties can be personally liable. If you are a trustee, or choosing one, an Ohio trusts attorney can help make sure the trust is administered under Ohio law.",
  },
];

const TRUST_TYPES = [
  { href: '/trusts/revocable-living-trusts', title: 'Revocable living trusts', subtitle: 'Keep control of your assets while avoiding probate for your heirs' },
  { href: '/trusts/irrevocable-trusts', title: 'Irrevocable trusts', subtitle: 'Federal estate tax planning, Medicaid planning and asset protection' },
  { href: '/trusts/irrevocable-life-insurance-trusts', title: 'Irrevocable life insurance trusts (ILITs)', subtitle: 'Keep life insurance proceeds out of your taxable estate' },
  { href: '/trusts/special-needs-trusts', title: 'Special needs trusts', subtitle: 'Provide for a loved one with a disability without losing government benefits' },
  { href: '/trusts/dynasty-trusts', title: 'Dynasty trusts', subtitle: 'Hold wealth across generations with GST and estate tax planning' },
  { href: '/trusts/charitable-trusts', title: 'Charitable trusts', subtitle: 'Support a charity, with income and tax benefits for you or your heirs' },
  { href: '/trusts/spendthrift-trusts', title: 'Spendthrift trusts', subtitle: 'Protect an inheritance from a beneficiary’s creditors' },
  { href: '/trusts/asset-protection-trusts', title: 'Asset protection trusts', subtitle: 'Shield your wealth from future creditors and lawsuits' },
  { href: '/trusts/medicaid-asset-protection-trusts', title: 'Medicaid asset protection trusts', subtitle: 'Protect your home and savings from long-term care costs' },
  { href: '/trusts/land-trusts', title: 'Land trusts', subtitle: 'Hold real property privately, outside probate' },
  { href: '/trusts/qtip-trusts', title: 'QTIP trusts', subtitle: 'Provide for a surviving spouse and control who receives the remainder' },
];

export default function TrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Trusts in Ohio"
        description="Trusts that avoid probate, protect assets, provide for a family member with special needs and reduce federal estate tax. Ohio has had no state estate tax since 2013."
      />

      <Section title="Find the right trust" intro={<p>Each page covers how that trust works, what it costs or saves, and how it is set up.</p>}>
        <LinkGrid links={TRUST_TYPES} />
      </Section>

      <Section
        title="What a trust can do for your estate plan"
        tone="ice"
        intro={
          <p>
            A trust lets you protect assets, provide for the people who depend on you and keep your estate out of the probate process.
            Trusts in Ohio are governed by state law, and the document has to meet its requirements to work.
          </p>
        }
      >
        <p>
          Jwayyed Law LLC sets up revocable living trusts, irrevocable trusts, special needs trusts and the other trusts listed
          above. The right choice depends on what you are trying to do:
        </p>
        <PointGrid
          points={[
            { title: 'Avoid probate', body: 'Assets held in a funded trust pass to your heirs without the probate process.' },
            { title: 'Control distributions', body: 'You decide who receives what, and when, after your death.' },
            {
              title: 'Reduce federal estate tax',
              body: 'Ohio has no state estate tax since 2013, so the tax planning is federal.',
            },
            { title: 'Protect assets', body: 'Some trusts shield assets from creditors and other risks.' },
            { title: 'Protect the family home', body: 'Through Medicaid planning and asset protection trusts.' },
            { title: 'Provide for a loved one with special needs', body: 'Without disrupting their government benefits.' },
          ]}
        />
      </Section>

      <LocationsWeServe title="Trusts" />

      <Section title="Asset protection trusts in Ohio" tone="ice">
        <p>
          An <strong>asset protection trust</strong> is an irrevocable trust designed to shield your wealth from future creditors,
          lawsuits and judgments. A standard revocable living trust avoids probate but gives no creditor protection. An asset
          protection trust moves legal ownership to the trust, which puts the assets beyond the reach of most claimants. Once the trust
          is properly funded, its assets are generally no longer treated as part of your personal estate for creditor claims.
        </p>
        <p>
          Ohio does not currently have a domestic asset protection trust statute like some states (such as Delaware and Nevada).
          Ohio residents can still set up <strong>asset protection trusts</strong> in recognized ways:
        </p>
        <PointGrid
          points={[
            {
              title: 'Ohio irrevocable trust with spendthrift terms',
              body: 'Irrevocable trusts with spendthrift provisions under Ohio Revised Code Chapter 5805 can protect against beneficiary creditors.',
            },
            {
              title: 'Out-of-state DAPT',
              body: 'Ohio residents may create asset protection trusts in states with favorable domestic asset protection trust (DAPT) laws, if the trust is properly structured, uses a qualified trustee in that state and meets state and federal requirements.',
            },
          ]}
        />
        <p>
          These trusts suit business owners, physicians, real estate investors and other professionals with higher exposure to
          lawsuits and liability claims. They are also used in Medicaid planning to protect assets while qualifying for long-term care
          benefits.
        </p>
        <Callout title="Timing matters">
          An asset protection trust must be set up before any known claims or legal actions arise. Moving assets into a trust to avoid
          an existing or reasonably anticipated creditor can be challenged as a fraudulent transfer under Ohio&rsquo;s Uniform
          Voidable Transactions Act (Ohio Revised Code Chapter 1336).
        </Callout>
        <p>
          This information is for general educational purposes only and is not legal advice. Asset protection planning involves legal
          and tax questions that depend on your circumstances. Contact Jwayyed Law LLC to schedule a consultation about your
          situation, whether you are setting up a trust or need help with an existing one.
        </p>
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
