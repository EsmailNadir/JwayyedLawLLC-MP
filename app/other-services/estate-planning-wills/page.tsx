import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Ohio Estate Planning & Wills Lawyer',
  description:
    'Ohio wills under ORC Chapter 2107: signing and witness rules, self-proving wills, what a will cannot do, and what happens without one.',
  keywords: [
    'estate planning lawyer Columbus OH',
    'wills attorney Ohio',
    'estate planning wills lawyer',
    'Ohio estate planning attorneys',
    'Ohio will requirements ORC 2107',
    'holographic will Ohio',
    'self-proving will Ohio',
    'pour-over will Ohio',
    'guardian minor children Ohio',
    'estate planning attorney Franklin County',
    'intestate succession Ohio',
    'disinherit Ohio attorney',
  ],
  openGraph: {
    title: 'Ohio Estate Planning & Wills Lawyer | Jwayyed Law LLC',
    description: 'Will requirements, self-proving wills and complete estate plans under Ohio law.',
    url: 'https://www.jjlawohio.com/other-services/estate-planning-wills',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/other-services/estate-planning-wills' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Estate Planning & Wills', href: '/other-services/estate-planning-wills' },
];

const faqs = [
  {
    question: 'Does Ohio require a will to be notarized?',
    answer:
      'No. Ohio does not require notarization for a valid will under ORC 2107.02. A standard Ohio will must be signed by the testator (or by another person in the testator\'s presence and at their direction, if the testator cannot sign) and witnessed by two competent adults who sign in the testator\'s presence. Notarization is used to make a "self-proving" will under ORC 2107.52. That will includes a notarized affidavit from the witnesses about the signing, so the Probate Court can admit it without the witnesses appearing in person. This helps when witnesses are hard to find years later.',
  },
  {
    question: 'Can I write my own will in Ohio?',
    answer:
      "Ohio recognizes handwritten (holographic) wills under ORC 2107.03 only under specific conditions: the will must be entirely in the testator's handwriting and signed by the testator. No witnesses are required for a holographic will. These wills are risky. They often leave out residuary distribution, alternate beneficiaries or executor powers, and unclear or incomplete language often leads to probate disputes and litigation. An attorney-drafted will costs far less than a contested probate proceeding.",
  },
  {
    question: 'What happens if you die without a will in Ohio?',
    answer:
      'Your estate passes under the intestate succession statute, ORC 2105.06, whatever your wishes were. With a surviving spouse and no children, or if all your children are also the spouse\'s children, the spouse inherits everything. With children from a prior relationship, the estate is divided between the spouse and the children by a formula. More distant relatives inherit only when there is no surviving spouse or descendants. The court appoints an administrator, who may not be the person you would have chosen. Minor children have no guardian named in your documents, so a court decides.',
  },
  {
    question: 'How often should I update my will in Ohio?',
    answer:
      'Review it every three to five years and after any major life event: marriage, divorce, the birth or death of a child or grandchild, a significant change in assets, the death of a named executor or beneficiary, or a move to or from Ohio. Under ORC 2107.33, divorce automatically revokes the will\'s provisions for a former spouse, but the rest of the will stays in effect. A new marriage does not update your will. A beneficiary who dies before you can cause unintended results if no alternate is named.',
  },
  {
    question: 'Can I disinherit my spouse in Ohio?',
    answer:
      'Not entirely. Under ORC 2106.01, a surviving spouse has a right of election to claim a share of the "augmented estate," which includes probate assets and certain non-probate transfers made during the marriage, whatever the will says. The elective share follows a sliding scale based on the length of the marriage, up to a maximum of one-third of the augmented estate after fifteen or more years of marriage. A spouse left little or nothing can "take against the will" and claim this statutory share. Planning can lawfully reduce the elective share, but Ohio law does not allow you to disinherit a spouse completely.',
  },
  {
    question: 'What is a pour-over will and do I need one?',
    answer:
      "A pour-over will works with a revocable living trust. It directs that any assets left in the probate estate at death are \"poured over\" into the trust and distributed under the trust's terms. Assets you forgot to transfer into the trust, or that come back into your estate for any reason, then follow the trust's plan instead of a separate set of beneficiaries in the will. Any estate plan that includes a revocable living trust needs one.",
  },
  {
    question: 'Who should I name as executor of my Ohio will?',
    answer:
      'Your executor (called a "personal representative" in some states) takes the estate through probate: collecting assets, paying debts, filing taxes and distributing property. Choose someone trustworthy, organized and able to give the process time, who will carry out your wishes under family pressure. That is not necessarily the oldest child or the most financially successful relative. Ohio does not require executors to be Ohio residents, but a local executor avoids practical complications. Always name an alternate in case your first choice cannot or will not serve.',
  },
  {
    question: 'Does a will avoid the probate process in Ohio?',
    answer:
      'No. A will is a set of instructions for the Probate Court, and assets that pass under it still go through probate. To avoid probate you need non-probate transfers: a revocable living trust, joint tenancy, payable-on-death designations, transfer-on-death registrations, or beneficiary designations on retirement accounts and life insurance. The will covers whatever those do not, so it is an important backstop, but on its own it does not spare your family the time and expense of probate.',
  },
];

const RELATED = [
  { href: '/other-services', title: 'All other legal services', subtitle: 'Estate planning, probate and dispute resolution' },
  { href: '/other-services/probate', title: 'Ohio probate administration', subtitle: 'What happens to a will after death' },
  { href: '/other-services/powers-of-attorney', title: 'Powers of attorney in Ohio', subtitle: 'Financial and healthcare agents' },
  { href: '/trusts/revocable-living-trusts', title: 'Revocable living trusts', subtitle: 'Passing assets without probate' },
];

export default function EstatePlanningWillsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Wills and estate planning in Ohio"
        description="An Ohio will must be signed in front of two competent witnesses to be admitted to probate. It tells the Probate Court who receives your property, who manages the estate and who cares for your minor children."
      />

      <Section
        title="What it takes to make a valid Ohio will"
        intro={
          <p>
            Ohio will law sits mainly in ORC Chapter 2107. A will that misses the signing formalities cannot be admitted to probate, no
            matter how clearly it states your wishes.
          </p>
        }
      >
        <FactTable
          title="Execution requirements"
          rows={[
            { label: 'Age', value: 'The testator must be at least eighteen years old.' },
            {
              label: 'Capacity',
              value:
                '"Sound mind and memory": you understand the nature and extent of your property, know the natural objects of your bounty (family and close relationships), understand what a will does, and can form an orderly plan for your estate.',
            },
            {
              label: 'Signature',
              value: "Signed by the testator, or by someone else in the testator's presence and at their express direction.",
            },
            { label: 'Witnesses', value: "Two competent witnesses, who must also sign in the testator's presence." },
            { label: 'Notarization', value: 'Not required for validity. Used to make the will self-proving under ORC 2107.52.' },
          ]}
        />
        <p>
          A will is one part of a plan. It needs to line up with your beneficiary designations, powers of attorney, healthcare
          directives and, where it fits, a revocable living trust. Jwayyed Law LLC prepares these plans for individuals and families in
          the Columbus area, built around what matters to you: protecting a spouse, providing for children, reducing probate, supporting
          a charity or passing a business to the right hands. Call <a href="tel:6142855482">(614) 285-5482</a> to schedule a
          consultation.
        </p>
      </Section>

      <Section title="What a will can and cannot do" tone="ice">
        <PointGrid
          points={[
            {
              title: 'A will can',
              body: 'Direct who receives your individually owned probate assets (real estate, bank accounts, vehicles, personal property and investments with no beneficiary designation or joint owner). Name an executor. Designate a guardian for minor children under ORC 2111.03. Set up testamentary trusts for minor or special-needs beneficiaries. Make specific bequests and set out the residuary distribution for everything else.',
            },
            {
              title: 'A will cannot',
              body: "Override a valid beneficiary designation on life insurance, a retirement account or a payable-on-death account, since those pass by contract. Transfer assets held in joint tenancy, which pass to the surviving owner. Reduce a surviving spouse's right of election under ORC 2106.01. Avoid probate.",
            },
          ]}
        />
        <p>
          A will can disinherit any family member except a surviving spouse, as long as it does so clearly and is not the product of
          incapacity or undue influence. Assets that pass under a will go through the Franklin County Probate Court, or the probate court
          of whichever Ohio county you live in at death, before they reach your beneficiaries.
        </p>
      </Section>

      <Section title="Self-proving and handwritten wills">
        <p>
          Under ORC 2107.52, the testator and witnesses can sign a notarized affidavit at the time of signing that the will was properly
          executed. A self-proving will can be admitted to probate without the witnesses testifying or giving sworn statements, which
          matters years later when witnesses have died, moved or cannot be found. The firm prepares every will as a self-proving will.
        </p>
        <p>
          Ohio also permits &ldquo;holographic&rdquo; wills, entirely handwritten and signed by the testator without witnesses, under ORC
          2107.03. These are often ambiguous, incomplete and disputed in probate, and the firm does not recommend relying on one.
        </p>
      </Section>

      <Section title="If you die without a will" tone="ice">
        <p>
          ORC 2105.06 then controls who inherits, and its formula does not consider what you wanted or how your family is arranged.
        </p>
        <PointGrid
          points={[
            {
              title: 'A fixed formula',
              body: 'A surviving spouse and children from prior relationships divide the estate by a set formula that may not reflect your intent.',
            },
            {
              title: 'People left out',
              body: 'Unmarried partners, close friends, stepchildren and charities receive nothing under intestate succession.',
            },
            {
              title: 'No named guardian',
              body: "The Probate Court appoints a guardian for minor children based on its view of the children's best interest, without guidance from you.",
            },
            {
              title: 'Full probate',
              body: 'The estate usually goes through full probate, with the time, expense and public exposure that brings, because no non-probate transfers were set up.',
            },
          ]}
        />
      </Section>

      <Section title="The rest of a complete estate plan">
        <FactTable
          title="Documents that work alongside the will"
          rows={[
            {
              label: 'Durable financial power of attorney',
              value:
                'Names someone to pay bills, manage investments, handle real estate and do business for you if you become incapacitated. Without one, your family may need a guardianship or conservatorship in the Probate Court, which is expensive, slow and public.',
            },
            { label: 'Healthcare power of attorney', value: 'Names someone to make medical decisions when you cannot.' },
            {
              label: 'Living will',
              value: 'An advance directive stating your wishes about end-of-life treatment, including whether life-sustaining treatment should be withheld in specific circumstances.',
            },
            {
              label: 'Revocable living trust',
              value: 'For larger estates, privacy concerns or complex families. Assets are managed during your lifetime and distributed at death without probate.',
            },
            { label: 'Pour-over will', value: 'Moves any assets left outside the trust into it at death.' },
            {
              label: 'Beneficiary designations',
              value: 'Contract provisions that override the will. Outdated ones regularly send assets to former spouses, people who have died, or unintended recipients.',
            },
          ]}
        />
        <Callout title="Keep the pieces in step">
          The firm reviews every element of the plan together so the will, trust, powers of attorney and beneficiary designations point
          the same way.
        </Callout>
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
