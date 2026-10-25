import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Ohio Probate Lawyer | Columbus',
  description:
    'Ohio probate for executors and beneficiaries in Franklin County Probate Court: the steps, creditor claims, executor fees and small-estate release.',
  keywords: [
    'probate lawyer Columbus OH',
    'probate attorney Ohio',
    'probate administration lawyer',
    'Franklin County probate attorney',
    'executor attorney Ohio',
    'estate administration Columbus',
    'intestate probate Ohio',
    'simplified estate Ohio',
    'release from administration Ohio',
    'ORC 2113 attorney',
  ],
  openGraph: {
    title: 'Ohio Probate Lawyer | Columbus | Jwayyed Law LLC',
    description: 'Estate administration, creditor claims and small-estate release in Ohio probate court.',
    url: 'https://www.jjlawohio.com/other-services/probate',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/other-services/probate' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Probate', href: '/other-services/probate' },
];

const faqs = [
  {
    question: 'How long does Ohio probate take?',
    answer:
      "Most Ohio probate estates take between six and eighteen months to close. The time depends on the size and complexity of the estate, creditor claims, whether real property must be sold, and any disputes among beneficiaries. Simple estates with few assets and no creditor disputes can sometimes close in six to nine months. Larger or contested estates routinely take well over a year. Creditors have six months from the executor's appointment to file claims under ORC 2117.06, which sets a floor on how quickly any estate can close.",
  },
  {
    question: "What are the executor's duties in Ohio probate?",
    answer:
      'An executor appointed under ORC Chapter 2113 must collect and protect estate assets, file an inventory and appraisal with the Probate Court within three months of appointment under ORC 2109.302, notify known creditors, publish a notice to creditors, pay valid debts and taxes, file an account of receipts and disbursements, and distribute what remains under the will or the intestate succession laws. The executor owes a fiduciary duty to all beneficiaries and can be personally liable for losses caused by self-dealing or negligent administration.',
  },
  {
    question: 'What happens if someone dies without a will in Ohio?',
    answer:
      'The person dies "intestate." The Probate Court still administers the estate, but distribution follows ORC 2105.06 instead of the decedent\'s wishes. The surviving spouse typically receives the entire estate if there are no surviving children or if all children are also the surviving spouse\'s children. With children from a prior relationship, the spouse and those children share the estate. The court appoints an administrator, instead of an executor, to manage the process.',
  },
  {
    question: 'Can you avoid probate in Ohio?',
    answer:
      'Yes. Assets held in joint tenancy with right of survivorship pass automatically to the surviving owner. Accounts with payable-on-death (POD) or transfer-on-death (TOD) designations bypass probate. Life insurance and retirement accounts with named beneficiaries are not probate assets. A revocable living trust can hold almost all your assets and distribute them at death without court involvement. Ohio also has a transfer-on-death deed for real estate, which lets a homeowner name a beneficiary who receives title automatically at death.',
  },
  {
    question: 'What is the simplified release from administration in Ohio?',
    answer:
      'For smaller estates, ORC 2113.03 offers a "release from administration" instead of full probate. It is available when the gross estate does not exceed $35,000, or when assets do not exceed $100,000 and everything passes to the surviving spouse. An authorized person files an application with the Probate Court, which can release the assets to the proper parties without formal administration. It is useful when the decedent owned a vehicle, a small bank account or personal property, but no significant real estate or business interests.',
  },
  {
    question: 'What rights do creditors have during Ohio probate?',
    answer:
      "Under ORC 2117.06, creditors have six months from the executor's or administrator's appointment to present claims. Claims not presented in that window are generally barred. The executor publishes a notice to creditors in a newspaper of general circulation and mails notice to known creditors. Valid claims are paid in a statutory priority order before beneficiaries receive anything. Secured debts, funeral expenses, administration costs and taxes come ahead of general unsecured creditors.",
  },
  {
    question: 'Can an executor live out of state in Ohio?',
    answer:
      'Yes. Ohio does not require an executor to be an Ohio resident, but a nonresident executor must appoint a statutory agent in Ohio to accept service of process. Attending Franklin County Probate Court hearings, managing local real property and working with local banks can be hard from a distance. If an out-of-state executor will not or cannot do the job, beneficiaries may seek removal and the appointment of an Ohio-based administrator.',
  },
  {
    question: "What is the homestead or year's allowance in Ohio?",
    answer:
      'Under ORC 2106.13, a surviving spouse is entitled to a "year\'s allowance" of up to $40,000 from the estate to support the family during administration, paid before general creditors. The surviving spouse may also stay in the family home during the year of administration. These protections apply whatever the will says, so a surviving spouse and dependent children are not left without resources while the estate is in probate.',
  },
];

const RELATED = [
  { href: '/other-services', title: 'All other legal services', subtitle: 'Estate planning, probate and dispute resolution' },
  { href: '/other-services/will-contests', title: 'Will contests in Ohio', subtitle: 'Challenging or defending a will in probate' },
  { href: '/trusts/revocable-living-trusts', title: 'Revocable living trusts', subtitle: 'Passing assets without probate' },
  { href: '/other-services/estate-planning-wills', title: 'Estate planning and wills', subtitle: 'Planning so the next estate is simpler' },
];

export default function ProbatePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Probate in Ohio"
        description="Most Ohio estates take six to eighteen months to close. Creditors have six months from the executor's appointment to file claims, and the inventory is due within three months."
      />

      <KeyFacts
        facts={[
          { figure: '3 months', label: 'to file the inventory and appraisal after appointment (ORC 2109.302)' },
          { figure: '6 months', label: "for creditors to present claims, from the executor's appointment (ORC 2117.06)" },
          { figure: '$35,000', label: 'gross estate limit for a release from administration (ORC 2113.03)' },
          { figure: '$40,000', label: "maximum year's allowance for a surviving spouse (ORC 2106.13)" },
        ]}
      />

      <Section
        title="What probate is"
        intro={
          <p>
            Probate is the court-supervised process for administering a deceased person&rsquo;s estate: paying debts and distributing
            what remains to the heirs or beneficiaries.
          </p>
        }
      >
        <p>
          Ohio probate is governed mainly by Title 21 of the Revised Code, with Chapters 2107 through 2117 covering the most common
          administration tasks. With or without a will, most individually owned assets must pass through Ohio Probate Court before title
          can transfer.
        </p>
        <p>
          Ohio Probate Courts have exclusive jurisdiction over decedents&rsquo; estates under ORC 2101.24. In Franklin County, that is
          the Franklin County Probate Court at 373 South High Street in Columbus. Each county&rsquo;s Probate Court has its own local
          filing requirements, forms and procedures.
        </p>
        <p>
          Jwayyed Law LLC represents executors, administrators, surviving spouses and beneficiaries as their probate attorney throughout central Ohio:
          opening an estate, resolving a creditor dispute, preparing the inventory and appraisal, or closing an estate that has stalled.
          Call <a href="tel:6142855482">(614) 285-5482</a> to discuss your situation.
        </p>
      </Section>

      <Section title="With a will or without one" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Testate (a will exists)',
              body: "The executor named in the will asks the Probate Court to admit the will and issue letters testamentary, the document that authorizes the executor to act. Under ORC Chapter 2107, the court checks the will's execution (signed by a testator of sound mind and witnessed by two competent adults) before admitting it. Administration then follows the will, subject to Ohio's mandatory protections for surviving spouses and creditors.",
            },
            {
              title: 'Intestate (no valid will)',
              body: "ORC 2105.06 controls distribution. A surviving spouse inherits the entire estate when there are no surviving children, or when all surviving children are also the spouse's children. With children from a prior relationship, the spouse and children divide the estate by a statutory formula. Parents, siblings and their descendants inherit only when there is no surviving spouse or children. The court appoints an administrator, often following the surviving spouse's or a child's preference, with the same duties as an executor.",
            },
          ]}
        />
      </Section>

      <Section title="The Ohio probate process, step by step">
        <Steps
          steps={[
            {
              title: 'Open the estate',
              body: "The executor or a family member files a petition with the county Probate Court, with the original will (if any) and the death certificate. The court issues letters testamentary or letters of administration.",
            },
            { title: 'Notify beneficiaries and heirs', body: 'Within thirty days of appointment.' },
            {
              title: 'File the inventory and appraisal',
              body: 'Within three months, listing all probate assets at fair market value under ORC 2109.302. Real estate, business interests and unusual personal property usually need a licensed appraiser.',
            },
            {
              title: 'Give notice to creditors',
              body: "Publish notice in a local newspaper and mail it to known creditors. Under ORC 2117.06, creditors have six months from the executor's appointment to file claims.",
            },
            {
              title: 'Pay debts in priority order',
              body: 'Secured creditors, funeral costs, administration expenses, taxes, then general unsecured creditors.',
            },
            { title: 'File the final account', body: 'Documenting all receipts and disbursements, for court approval.' },
            {
              title: 'Distribute and close',
              body: 'The executor distributes the remaining assets, files a receipt for distribution, and the court closes the estate.',
            },
          ]}
        />
      </Section>

      <Section title="Executor and probate attorney fees" tone="ice">
        <FactTable
          title="Executor compensation (ORC 2113.35)"
          rows={[
            { label: 'First $100,000', value: 'Four percent.' },
            { label: 'Next $300,000', value: 'Three percent.' },
            { label: 'Next $600,000', value: 'Two percent.' },
            { label: 'Above $1 million', value: 'One percent, or a reasonable fee set by the court.' },
          ]}
          note="Attorney fees are reviewed by the Probate Court and must be reasonable for the work done. Executor and attorney fees are both paid from estate assets before distribution."
        />
      </Section>

      <Section title="Smaller estates and assets outside probate">
        <h3>Release from administration</h3>
        <p>
          Under ORC 2113.03, when the gross estate does not exceed $35,000, or does not exceed $100,000 and passes entirely to the
          surviving spouse, an authorized family member may apply for a release instead of opening a full estate. The court can release
          the assets directly to the applicant without appointing an executor, publishing creditor notice or filing a formal inventory.
        </p>
        <h3>Assets that skip probate</h3>
        <PointGrid
          points={[
            { title: 'Joint tenancy with survivorship', body: "Co-owners inherit each other's shares automatically at death." },
            {
              title: 'POD and TOD designations',
              body: 'Bank accounts, brokerage accounts, vehicles and real estate can pass directly to named beneficiaries.',
            },
            { title: 'Named beneficiaries', body: 'Life insurance and retirement accounts paid to named beneficiaries never enter the probate estate.' },
            {
              title: 'Revocable living trust',
              body: 'Can hold most of a person’s assets and distribute them at death with no court involvement, no public record and no creditor waiting period. The firm sets these up through its estate planning practice.',
            },
          ]}
        />
      </Section>

      <Section title="Related pages" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <LocationsWeServe title="Other Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
