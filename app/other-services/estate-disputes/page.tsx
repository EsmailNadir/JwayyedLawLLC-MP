import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Ohio Estate Disputes & Litigation Lawyer',
  description:
    'Ohio estate disputes: will contests, executor and trustee misconduct, removal and surcharge, accountings, Medicaid recovery and inherited property.',
  keywords: [
    'estate disputes lawyer Columbus OH',
    'estate dispute attorney Ohio',
    'executor misconduct attorney Ohio',
    'will contest lawyer Columbus',
    'trust dispute attorney Ohio',
    'remove executor Ohio',
    'fiduciary breach Ohio attorney',
    'beneficiary rights Ohio probate',
    'ORC 2109 fiduciary attorney',
    'Franklin County estate dispute attorney',
  ],
  openGraph: {
    title: 'Ohio Estate Disputes & Litigation Lawyer | Jwayyed Law LLC',
    description: 'Will contests, executor misconduct and trust disputes in Ohio probate and common pleas courts.',
    url: 'https://www.jjlawohio.com/other-services/estate-disputes',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/other-services/estate-disputes' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Estate Disputes', href: '/other-services/estate-disputes' },
];

const faqs = [
  {
    question: 'What are valid grounds to remove an executor in Ohio?',
    answer:
      "Under ORC 2109.24, an Ohio Probate Court may remove an executor or administrator for good cause. Recognized grounds include neglecting duties, failing to file a required inventory or account, wasting or mismanaging estate assets, breach of fiduciary duty, a felony conviction after appointment, becoming mentally incompetent, or a conflict of interest that makes faithful administration impossible. Disagreeing with the executor's decisions is generally not enough; courts look for concrete evidence of actual or threatened harm to the estate or beneficiaries. The removal petition is filed in the Probate Court where the estate is pending.",
  },
  {
    question: 'How do you challenge a trust in Ohio?',
    answer:
      'Differently from a will. Ohio adopted the Uniform Trust Code (UTC), codified in ORC Chapter 5806, which governs trust modification, termination and judicial oversight. A trust can be challenged for lack of capacity when it was created, undue influence, fraud or duress, failure to follow execution formalities, or impossibility of the trust purpose. Trust disputes may be heard in the county Common Pleas Court or, for a testamentary trust created in a will, in the Probate Court. Will contests have a strict filing deadline; trust challenges may have different limitation periods depending on the claim.',
  },
  {
    question: 'What if I believe the executor is stealing from the estate?',
    answer:
      'Executor theft or self-dealing is a serious breach of fiduciary duty under ORC 2113.61. If an executor is converting estate assets, paying themselves or family members improperly, or failing to account for assets that belong in the estate, you can petition the Franklin County Probate Court for a surcharge, an order requiring the executor to repay the estate for the losses. You can also petition for removal and the appointment of a successor fiduciary. In egregious cases, executor theft can also be prosecuted under Ohio theft and theft in office statutes.',
  },
  {
    question: 'Can a beneficiary demand an accounting from the executor?',
    answer:
      'Yes. Under ORC 2109.301, an executor must file periodic accounts with the Probate Court showing all receipts, disbursements and distributions. Beneficiaries may examine them and object to specific items, and may also ask the executor for informal accountings and documents at any reasonable time. If the executor refuses or delays, beneficiaries can petition the Probate Court to compel an accounting. Beneficiaries of irrevocable trusts have statutory rights to trustee information and annual reports under the Ohio UTC.',
  },
  {
    question: 'How long do you have to contest a will in Ohio?',
    answer:
      "Under ORC 2107.76, within three months after the will is admitted to probate. Courts rarely grant extensions, and missing the deadline generally bars any challenge to the will's validity, however strong the grounds. Consult an estate disputes attorney as soon as you learn a will has been admitted. The contest is filed as a civil action in the Common Pleas Court of the county where the will was probated, not in the Probate Court itself.",
  },
  {
    question: 'What is undue influence in an Ohio estate dispute?',
    answer:
      "Undue influence is when someone substitutes their own will for the testator's free choice, usually by exploiting a position of trust or the testator's vulnerability. Ohio courts look at whether the influencer had the opportunity; whether they had a motive, such as standing to benefit; whether the testator was susceptible because of age, illness, cognitive decline or emotional dependence; and whether the document reflects the influencer's wishes instead of the testator's. It is usually proven through circumstantial evidence: sudden changes to estate documents, isolation of the testator from family, and the influencer's active part in the drafting.",
  },
  {
    question: 'Can I sue a trustee personally for breach of fiduciary duty?',
    answer:
      "Yes. A trustee can be personally liable for losses caused by a breach. Under Ohio's UTC and ORC 5808.01 et seq., a trustee must act in the beneficiaries' best interests, invest prudently, avoid self-dealing, keep trust property separate from personal assets and provide accurate information. For a breach such as investing trust assets in the trustee's own business, failing to make required distributions or commingling funds, beneficiaries may seek a surcharge (damages), removal, disgorgement of profits and, in some egregious cases, punitive damages. An attorney can assess the strength of the claim and the remedies available.",
  },
  {
    question: 'What if I was left out of a will in Ohio?',
    answer:
      'Being left out does not by itself give you grounds to contest the will or claim a share. Ohioans have broad freedom to dispose of their property, and a will can disinherit most family members. The limited exceptions: a surviving spouse has a right of election under ORC 2106.01 to a statutory share whatever the will says; a "pretermitted heir" statute, ORC 2107.34, may protect children accidentally omitted through a drafting oversight; and children born after the will was signed may have rights in some circumstances. If you were left out because of undue influence, fraud or the testator\'s incapacity, those grounds may support a will contest.',
  },
];

const RELATED = [
  { href: '/other-services', title: 'All other legal services', subtitle: 'Estate planning, probate and dispute resolution' },
  { href: '/other-services/will-contests', title: 'Will contests in Ohio', subtitle: 'Grounds, standing and the three-month deadline' },
  { href: '/other-services/probate', title: 'Ohio probate administration', subtitle: 'How an estate moves through probate court' },
  { href: '/trusts/revocable-living-trusts', title: 'Revocable living trusts', subtitle: 'How trusts are set up and administered' },
];

export default function EstateDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Estate disputes in Ohio"
        description="Will contests, executor and trustee misconduct, and fights over estate property. A will contest must be filed within three months after the will is admitted to probate."
      />

      <Section
        title="What estate disputes are about"
        intro={
          <p>
            Disputes arise over whether the will is valid, how the executor or trustee is behaving, how assets are divided, and what
            unclear estate documents mean.
          </p>
        }
      >
        <p>
          Jwayyed Law LLC represents beneficiaries, heirs, executors and trustees in estate and probate disputes in the Franklin County
          Probate Court and throughout Ohio.
        </p>
        <FactTable
          title="The statutes that usually apply"
          rows={[
            { label: 'Wills', value: 'ORC Chapter 2107.' },
            { label: 'Fiduciary duties', value: 'ORC Chapter 2109.' },
            { label: 'Estate administration and fiduciary misconduct', value: 'ORC Chapter 2113.' },
            { label: 'Intestate succession', value: 'ORC Chapter 2105.' },
          ]}
          note="Depending on the claim, the case may be in the Probate Court, the Common Pleas Court or both. Which court has jurisdiction, and the deadline that applies, needs to be settled early."
        />
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> as soon as a dispute arises, so the situation can be assessed before a
          deadline passes.
        </p>
      </Section>

      <Section title="Will contests and challenges to estate documents" tone="ice">
        <p>
          A will contest under ORC 2107.71 challenges the validity of a will admitted to probate. It must be filed as a civil action in
          the Common Pleas Court of the county where probate is pending within three months after the will is admitted, under ORC
          2107.76. See <Link href="/other-services/will-contests">will contests</Link> for the full process.
        </p>
        <PointGrid
          points={[
            {
              title: 'Lack of testamentary capacity',
              body: 'The testator did not understand the nature and extent of their property, who their natural heirs were, or what a will does.',
            },
            {
              title: 'Undue influence',
              body: "Someone with power over the testator substituted their wishes for the testator's own. This is the most frequently litigated ground in Ohio will contests.",
            },
            { title: 'Fraud', body: 'The testator was deceived about the nature of what they signed.' },
            { title: 'Improper execution', body: 'The will was not signed or witnessed as ORC 2107.02 requires.' },
          ]}
        />
        <p>
          Ohio courts do not require direct evidence of undue influence. Advanced age or illness, isolation from family, dependence on
          the alleged influencer, the influencer&rsquo;s active part in procuring or drafting the will, and a sudden sharp change from
          earlier plans can together establish it. Capacity disputes over elderly testators with dementia or Alzheimer&rsquo;s disease
          are common and often turn on medical records, witness testimony and expert psychiatric opinion about the testator&rsquo;s
          state of mind at signing.
        </p>
        <h3>Other document disputes</h3>
        <p>
          Disputes also arise over the meaning of will provisions (ambiguous bequests, what falls in the residuary estate, how specific
          property should be valued); whether beneficiary designations on non-probate assets reflect the decedent&rsquo;s intent; and
          pre-death transfers made under duress or while the decedent lacked capacity. Digital assets, such as cryptocurrency, online
          financial accounts, intellectual property and social media accounts, add the problem of accessing, valuing and dividing them.
        </p>
      </Section>

      <Section title="Executor and trustee misconduct">
        <p>
          An executor or administrator is a fiduciary, legally bound to act in the interests of the estate and its beneficiaries.
          ORC Chapter 2109 imposes the duties of loyalty, prudent administration, accounting and impartial treatment of all
          beneficiaries.
        </p>
        <FactTable
          title="Breaches and remedies"
          rows={[
            {
              label: 'Common breaches',
              value: 'Self-dealing, improper distributions, paying creditors out of priority order, not filing required court accounts, letting estate assets waste.',
            },
            {
              label: 'Surcharge (ORC 2113.61)',
              value: 'An executor who wastes or converts estate assets can be charged with them and surcharged for the losses. The court can order repayment, restoration of assets improperly transferred, and reimbursement of costs the breach caused.',
            },
            {
              label: 'Removal (ORC 2109.24)',
              value: 'In serious cases the court removes the executor and appoints a successor. The petition must show actual harm or a serious threat of harm; disagreement with the executor\'s decisions is not enough.',
            },
          ]}
        />
        <h3>Trust disputes</h3>
        <p>
          These follow a similar framework under Ohio&rsquo;s Uniform Trust Code instead of the probate statutes. A trustee who breaches
          a fiduciary duty can be surcharged, ordered to disgorge profits, removed, and in some cases held personally liable beyond the
          amount taken. Beneficiaries of irrevocable trusts have statutory rights to annual accountings, information about the trust&rsquo;s
          assets and administration, and notice of significant transactions. If a trustee withholds information or proper accounts, the
          court can compel disclosure and impose sanctions.
        </p>
        <Callout title="Surviving spouse's right of election">
          The firm also handles disputes over the right of election under ORC 2106.01, which lets a surviving spouse claim a share of
          the augmented estate even when the will leaves them less.
        </Callout>
      </Section>

      <Section title="Medicaid recovery and inherited real estate" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Medicaid estate recovery',
              body: "The Ohio Department of Medicaid must seek reimbursement from a deceased recipient's estate for benefits paid. Families dispute the scope of the claim, the value of assets subject to recovery, or whether exemptions apply, especially when the home is the main asset. A challenge or a negotiated compromise depends on both estate law and Medicaid regulations.",
            },
            {
              title: 'Real property',
              body: 'With a family home, farm or investment property, beneficiaries disagree over selling or distributing in kind, how to value it for an equal split, and whether a beneficiary who lived in or managed it has a stronger claim.',
            },
            {
              title: 'Partition actions',
              body: 'When beneficiaries who inherit jointly cannot agree, co-owners can ask the court to divide or sell the property. The firm represents clients in partition proceedings and estate real property disputes.',
            },
          ]}
        />
      </Section>

      <Section title="Related pages">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <LocationsWeServe title="Other Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
