import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Probate Administration Lawyer in Ohio',
  description:
    'Ohio probate administration step by step: letters, creditor notice, the three-month inventory, claims, tax returns and closing the estate.',
  keywords: ['probate administration lawyer Columbus OH', 'probate attorney Ohio', 'Ohio probate administration lawyer', 'Ohio probate administration process', 'probate administration', 'Franklin County probate attorney'],
  openGraph: {
    title: 'Probate Administration Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Each step of Ohio probate administration, from the petition to closing the estate.',
    url: 'https://www.jjlawohio.com/other-services/probate-administration',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/other-services/probate-administration' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Probate', href: '/other-services/probate' },
  { label: 'Probate Administration', href: '/other-services/probate-administration' },
];

const faqs = [
  {
    question: 'What is probate in Ohio?',
    answer:
      "Probate is the court-supervised process of administering a deceased person's estate. In Ohio it is governed by Title 21 of the Revised Code, from the appointment of executors and administrators (ORC Chapter 2113) to the rights of creditors (ORC Chapter 2117) and the distribution of assets. The probate court validates the will (if there is one), appoints a fiduciary, makes sure debts are paid and oversees the transfer of assets to beneficiaries or heirs. Accounts with beneficiary designations, jointly owned property and transfer-on-death accounts generally pass outside probate.",
  },
  {
    question: 'How long does probate take in Ohio?',
    answer:
      'Simple estates may close in six to nine months; contested or complex estates can take two or more years. A major factor is the creditor claim period: under ORC 2117.06, creditors generally have six months from the date of the first publication of the notice to creditors to file claims. Final distributions wait until that window closes and all valid claims are resolved. Disputes among beneficiaries, hard-to-find assets, real estate sales and tax issues add time.',
  },
  {
    question: 'What assets go through probate in Ohio?',
    answer:
      "Assets owned solely in the decedent's name with no designated beneficiary or survivorship feature: real estate titled only to the decedent, bank accounts without a POD (payable-on-death) designation, vehicles titled solely to the decedent, and personal property. Non-probate assets pass automatically: joint tenancy property with right of survivorship, accounts with beneficiary designations (life insurance, IRAs, 401(k)s), payable-on-death bank accounts, transfer-on-death (TOD) brokerage accounts, and real estate transferred by a TOD deed under ORC 5302.22.",
  },
  {
    question: 'What is the difference between an executor and an administrator?',
    answer:
      'An executor (or personal representative) is named in the will to carry out its terms and administer the estate. An administrator is appointed by the probate court when there is no valid will (intestate), when the named executor cannot serve, or when no executor is named. Either way, the fiduciary must be appointed by the Franklin County Probate Court (or the relevant county probate court) and issued Letters Testamentary or Letters of Administration under ORC Chapter 2113. The letters give legal authority to act for the estate: opening accounts, selling property and paying debts.',
  },
  {
    question: 'How long do creditors have to file claims in Ohio probate?',
    answer:
      "Under ORC 2117.06, creditors generally must file claims within six months after the decedent's death, or within two months after the executor or administrator first publishes notice to creditors in a newspaper of general circulation, whichever is later. Late claims are typically barred. The executor or administrator reviews timely claims, allows or rejects them, and pays allowed claims before making distributions. Disputed claims may be resolved through the probate court.",
  },
  {
    question: 'What is the Summary Release from Administration in Ohio?',
    answer:
      "The Summary Release from Administration (ORC 2113.031) is a simplified procedure for small Ohio estates. If the estate does not exceed $35,000 (or $100,000 if the surviving spouse is the sole beneficiary), it may qualify. The surviving spouse or next of kin applies to the probate court for a release instead of a full administration. There is then no executor to appoint, no notice to creditors to publish and no inventory to file, which saves cost and time. An attorney can check whether your loved one's estate qualifies and help with the application.",
  },
  {
    question: 'Do I need a probate attorney in Ohio?',
    answer:
      'Ohio law does not require one. The process does involve court filings, legal deadlines, creditor claims, tax obligations and fiduciary duties, and mistakes such as failing to notify creditors properly, missing deadlines or distributing too early can make the executor or administrator personally liable. An attorney can file the correct documents with the Franklin County Probate Court at 373 S. High St, Columbus, OH 43215, meet the statutory deadlines and administer the estate correctly.',
  },
  {
    question: "What are the executor's duties during Ohio probate?",
    answer:
      "Under ORC Chapter 2113: (1) file the will and the petition for appointment with the probate court; (2) obtain Letters Testamentary; (3) notify known creditors and publish notice to unknown creditors; (4) prepare and file an inventory and appraisal of estate assets within three months of appointment (ORC 2115.02); (5) collect and safeguard estate assets; (6) pay valid debts, taxes and expenses; (7) file the estate's final income tax return and any required estate tax returns; and (8) distribute the remaining assets as the will or Ohio intestate succession statutes direct. The executor has a fiduciary duty to act in the best interests of the estate and its beneficiaries.",
  },
];

export default function ProbateAdministrationPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Probate administration in Ohio"
        description="An Ohio executor must file an inventory within three months of appointment and cannot make final distributions until the creditor claim period has run."
      />

      <KeyFacts
        facts={[
          { figure: '3 months', label: 'to file the inventory and appraisal after appointment (ORC 2115.02)' },
          { figure: '6 months', label: "after death, or 2 months after first publication if later, for creditor claims (ORC 2117.06)" },
          { figure: '$35,000', label: 'estate limit for a Summary Release ($100,000 when the spouse is sole beneficiary)' },
        ]}
      />

      <Section
        title="How Ohio probate administration is governed"
        intro={
          <p>
            When someone dies in Ohio, their estate usually goes through probate before assets can transfer to heirs or beneficiaries.
          </p>
        }
      >
        <FactTable
          title="The statutes that apply (Title 21, Ohio Revised Code)"
          rows={[
            { label: 'Fiduciaries', value: 'Appointment of executors and administrators, ORC Chapter 2113.' },
            { label: 'Creditors', value: 'Rights of creditors, ORC Chapter 2117.' },
            { label: 'Wills', value: 'Requirements for valid wills, ORC Chapter 2107.' },
            { label: 'No will', value: 'Intestate succession, ORC Chapter 2105.' },
          ]}
        />
        <p>
          The estate opens in the probate court of the county where the decedent was domiciled. Under ORC 2107.10, a will must be in
          writing, signed by the testator and attested by two competent witnesses in the testator&rsquo;s conscious presence. Without a
          valid will, the order of descent and distribution under ORC 2105.06 controls who inherits. Franklin County Probate Court, at 373
          S. High St., Columbus, OH 43215, handles probate for estates in Franklin County.
        </p>
      </Section>

      <Section title="The Ohio probate administration process, step by step" tone="ice">
        <Steps
          steps={[
            {
              title: 'File the petition',
              body: "File the will (if any) and a petition to appoint an executor or administrator in the probate court of the decedent's county of domicile.",
            },
            {
              title: 'Obtain letters',
              body: 'Letters Testamentary or Letters of Administration give court-issued authority to act for the estate under ORC Chapter 2113.',
            },
            {
              title: 'Notify creditors',
              body: 'Publish notice to unknown creditors in a newspaper of general circulation and notify known creditors directly.',
            },
            {
              title: 'Inventory and appraisal',
              body: 'File a complete inventory and appraisal of all probate assets within three months of appointment (ORC 2115.02).',
            },
            {
              title: 'Pay claims and expenses',
              body: 'Resolve creditor claims filed within the ORC 2117.06 deadline; pay administration expenses, taxes and valid debts.',
            },
            {
              title: 'File tax returns',
              body: "The decedent's final income tax return, any fiduciary income tax returns, and federal estate tax returns if required.",
            },
            {
              title: 'Final distribution',
              body: 'Distribute the remaining assets to the beneficiaries named in the will, or under Ohio intestate succession, ORC 2105.06.',
            },
            { title: 'Close the estate', body: 'File a final account with the probate court and obtain an order closing the estate.' },
          ]}
        />
      </Section>

      <Section title="The creditor claims period">
        <p>
          Under ORC 2117.06, creditors generally must file claims within six months of the date of death or within two months of the
          executor&rsquo;s or administrator&rsquo;s first publication of notice to creditors, whichever is later. The deadline is strictly
          enforced, and late claims are typically barred.
        </p>
        <Callout title="No distribution until the window closes">
          The estate cannot distribute assets to beneficiaries until the claims period has passed and all allowed claims, administration
          expenses, taxes and other obligations are paid.
        </Callout>
      </Section>

      <Section title="Small estates: the Summary Release" tone="ice">
        <p>
          Under ORC 2113.031, when the estate subject to administration does not exceed $35,000 (or $100,000 when the surviving spouse is
          the sole beneficiary), the surviving spouse or next of kin can apply directly to the probate court for a release. No full
          administrator is appointed, no creditor notice is published and no complete inventory is filed. The firm can check whether an
          estate qualifies and prepare the application.
        </p>
      </Section>

      <Section title="What goes through probate and what does not">
        <PointGrid
          points={[
            {
              title: 'Probate assets',
              body: "Only assets titled solely in the decedent's name with no designated beneficiary or survivorship feature.",
            },
            {
              title: 'Non-probate assets',
              body: 'Real estate held in joint tenancy with right of survivorship, POD bank accounts, life insurance and retirement accounts (IRAs, 401(k)s) with a named beneficiary, TOD brokerage accounts, and real estate conveyed by a TOD deed under ORC 5302.22.',
            },
          ]}
        />
        <p>
          Beneficiary designations and titling set up in{' '}
          <Link href="/other-services/estate-planning">an estate plan</Link> can reduce or remove the need for probate.
        </p>
        <FactTable
          title="Estate tax"
          rows={[
            { label: 'Ohio estate tax', value: 'None. Repealed in 2013.' },
            { label: 'Federal estate tax', value: 'May apply to very large estates. The federal exemption for 2024 is approximately $13.61 million per person.' },
          ]}
        />
      </Section>

      <Section title="What the firm does" tone="ice">
        <p>
          Jwayyed Law LLC handles probate administration from the initial petition in Franklin County Probate Court to final
          distribution, throughout Ohio, including Columbus, Cincinnati, Dayton and the surrounding communities. The firm explains the
          executor&rsquo;s or administrator&rsquo;s duties, prepares and files the court documents, works through the creditor claims
          process and makes proper distributions, so the fiduciary is not exposed to personal liability through avoidable mistakes. Call
          (614) 285-5482 to schedule a consultation.
        </p>
      </Section>

      <LocationsWeServe title="Other Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
