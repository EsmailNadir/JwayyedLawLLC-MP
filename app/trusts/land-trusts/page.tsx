import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Land Trusts Lawyer in Ohio',
  description:
    'Ohio land trusts under ORC 5301.255 hold real estate through a trustee, keeping the owner off the public deed record and out of probate for that property.',
  keywords: [
    'land trusts Columbus OH',
    'Ohio land trust ORC 5301.255',
    'land trust attorney Ohio',
    'real estate privacy trust Ohio',
    'beneficial interest land trust Ohio',
    'land trust for real estate investors Ohio',
    'probate avoidance real estate Ohio',
    'property trust lawyer Columbus',
    'Illinois-style land trust Ohio',
  ],
  openGraph: {
    title: 'Land Trusts Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Land trusts for Ohio real estate investors and owners: privacy, probate avoidance and simple transfers. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/trusts/land-trusts',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/trusts/land-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Land Trusts', href: '/trusts/land-trusts' },
];

const faqs = [
  {
    question: 'What is a land trust in Ohio?',
    answer:
      "An Ohio land trust is a revocable trust built to hold title to real property. Under ORC 5301.255, the trustee holds legal title and the beneficiary holds the beneficial interest. That interest is personal property, not real property, even though the trust's asset is real estate. So it transfers by assignment rather than deed, it is not recorded in the public real estate records, and the owner's identity is generally shielded from casual public inquiry.",
  },
  {
    question: 'How does the privacy feature of a land trust work?',
    answer:
      'The deed recorded with the county recorder shows only the trustee as grantee, for example "First National Trust Company, as Trustee of Land Trust No. 2024-001." Your name as beneficiary does not appear. Anyone searching the county auditor\'s or recorder\'s records sees only the trustee. The trust agreement and any assignment of beneficial interest are private documents not filed with any government office. That matters to investors who do not want competitors, tenants or litigants to easily find every property they own.',
  },
  {
    question: 'How do I transfer property into a land trust in Ohio?',
    answer:
      "First you sign the trust agreement naming a trustee and defining the beneficiaries and their interests. Then you deed the property to the trustee in the trustee's capacity under the trust, and the deed is recorded with the county recorder where the property sits. In Franklin County (Columbus), the deed must meet the ORC Chapter 5301 recording requirements and pay any applicable transfer tax. The trust agreement itself is not recorded.",
  },
  {
    question: 'Can a land trust hold multiple properties?',
    answer:
      'Yes, but most practitioners use a separate land trust for each property. That compartmentalizes liability: a judgment or lien against one property cannot easily be cross-levied against properties held in other trusts. Each trust is a separate legal entity with its own trustee and trust number. Investors with rentals in Columbus, Cleveland or Cincinnati often keep a portfolio of individual land trusts with the same person or entity as trustee for all of them.',
  },
  {
    question: 'How are beneficial interests in a land trust transferred?',
    answer:
      "By assignment, because they are personal property. An assignment of beneficial interest does not have to be recorded, does not trigger a deed transfer fee and does not need a new title search. That makes it easy to transfer a fraction of ownership, add or remove co-investors, or pass an interest at death without probate for that property. The assignment must follow the land trust agreement's transfer terms and usually requires notice to, or consent of, the trustee.",
  },
  {
    question: 'Will lenders have issues with property held in a land trust?',
    answer:
      "Sometimes. Some lenders are unfamiliar with land trusts, and some institutional lenders prefer to lend to the owner rather than a trustee. ORC 5301.255 recognizes land trusts, but each lender has its own underwriting rules, so talk to your lender before signing the trust. To refinance an existing mortgage, expect the lender to require consent to any transfer into trust. Some investors take title in their own name, get financing, then transfer into a land trust, which needs the lender's consent and may trigger a due-on-sale clause.",
  },
  {
    question: 'What are the estate planning benefits of a land trust?',
    answer:
      'A properly structured land trust lets your real estate pass to heirs outside probate. You name a successor beneficiary in the trust agreement, and at your death the beneficial interest passes to that person automatically, with no probate for that property. A revocable living trust gives the same probate benefit, but a land trust is built only for real property and works by assignment of the beneficial interest rather than trust administration. If you own properties in several Ohio counties, land trusts avoid separate ancillary probate in each county.',
  },
  {
    question: 'What does it cost to set up an Ohio land trust?',
    answer:
      'Attorney fees typically run $750 to $2,000 per trust, depending on how the beneficial interest is structured, whether there are several beneficiaries, and whether the attorney also prepares and records the deed. Recording fees in Ohio are modest (typically under $100 per deed). The Ohio conveyance fee is generally not owed when property goes into a trust where the grantor is also the beneficiary, though that depends on county practice and the structure. Ongoing costs are minimal if you serve as your own trustee.',
  },
];

const RELATED = [
  { href: '/trusts', title: 'All trust services', subtitle: 'Every type of trust the firm sets up' },
  { href: '/trusts/revocable-living-trusts', title: 'Revocable living trusts', subtitle: 'Probate avoidance for every asset, not just real estate' },
  { href: '/civil/real-estate-disputes', title: 'Real estate disputes', subtitle: 'When a property deal or title goes wrong' },
  { href: '/other-services/estate-planning-wills', title: 'Estate planning and wills', subtitle: 'The plan a land trust fits into' },
];

export default function LandTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Land trusts in Ohio"
        description="Under ORC 5301.255, a trustee holds title to your real estate and you hold the beneficial interest as personal property. Only the trustee's name appears on the public deed."
      />

      <Section
        title="What a land trust is"
        intro={
          <p>
            In an Ohio land trust, a trustee holds legal title to real property for one or more beneficiaries. The beneficial
            interest, the real economic ownership, is personal property held privately, not real property in the public deed records.
          </p>
        }
      >
        <p>
          ORC 5301.255 codifies what the Midwest long called the &ldquo;Illinois-style land trust,&rdquo; a form that began in
          Illinois in the late 19th century and spread to Ohio and other states for commercial real estate deals. It needs no court
          supervision, no formal trust accounting and no public disclosure of the beneficiary. The trustee holds title and signs
          documents for the property at the beneficiary&rsquo;s direction. Leasing, improving, mortgaging or selling stays with the
          beneficiary or a designated manager.
        </p>
        <p>
          Jwayyed Law LLC sets up and administers land trusts for clients in Columbus, Franklin County and surrounding Ohio
          communities.
        </p>
      </Section>

      <Section title="What a land trust gives you, and what it does not" tone="ice">
        <PointGrid
          points={[
            { title: 'Ownership privacy', body: 'A title searcher finds only the trustee’s name. That can deter frivolous litigation, reduce targeting by predatory vendors and simplify negotiations.' },
            { title: 'Simple transfers', body: 'The beneficial interest moves by a private written assignment: no new deed, no title search, no deed transfer fee.' },
            { title: 'Probate avoidance', body: 'Successor beneficiaries named in the trust agreement take your interest at death without probate for that property.' },
            { title: 'Liability compartments', body: 'One trust per property keeps a lien, judgment or environmental liability on one property from being easily cross-levied against the others.' },
          ]}
        />
        <Callout title="A land trust is not asset protection">
          A creditor with a personal judgment against you can generally reach your beneficial interest, because it is personal
          property subject to levy. A land trust does not insulate you from creditors the way an irrevocable trust or a properly
          structured LLC can.
        </Callout>
      </Section>

      <Section title="Setting up a land trust under ORC 5301.255">
        <Steps
          steps={[
            {
              title: 'Sign the trust agreement',
              body: 'It names the trustee, identifies the property and the beneficiaries with their percentage interests, sets the beneficiary’s authority to direct the trustee, and says what happens to the interest on a death or transfer.',
            },
            {
              title: 'Choose the trustee',
              body: 'You, another individual or a corporate trustee. Many investors use a separate LLC as trustee for another layer of privacy; the LLC must stay in good standing.',
            },
            {
              title: 'Deed the property to the trustee',
              body: 'With a standard Ohio warranty or quitclaim deed naming the trustee in that capacity, for example "Jane Smith, Trustee of the Smith Land Trust dated March 1, 2024."',
            },
            {
              title: 'Record the deed',
              body: 'With the county recorder, along with any transfer documents. The trust agreement, the beneficiary and any assignment stay private.',
            },
            {
              title: 'Name successor beneficiaries',
              body: 'In the trust agreement itself, so your interest passes at death without probate. With properties in several Ohio counties, that can remove the need for a probate action in each.',
            },
          ]}
        />
        <p>
          The Ohio conveyance fee is generally not owed on a transfer to a trust where the grantor and beneficiary are the same
          person, but confirm the local county auditor&rsquo;s practice. Assigning, say, a 50% interest to a business partner, adding a
          family member or passing your interest to your children then takes only a written assignment.
        </p>
      </Section>

      <Section title="Costs" tone="ice">
        <FactTable
          title="Typical costs for an Ohio land trust"
          rows={[
            { label: 'Attorney fees', value: '$750 to $2,000 per trust, depending on the beneficial interest structure, the number of beneficiaries and whether deed preparation and recording are included.' },
            { label: 'Recording fees', value: 'Typically under $100 per deed.' },
            { label: 'Conveyance fee', value: 'Generally not owed when the grantor is also the beneficiary; depends on county practice and structure.' },
            { label: 'Ongoing', value: 'Minimal if you serve as your own trustee.' },
          ]}
        />
      </Section>

      <Section title="Land trusts for real estate investors">
        <p>
          Columbus-area investors with several rentals, commercial parcels or development tracts often hold each one in its own
          trust, with a common trustee to keep administration simple.
        </p>
        <PointGrid
          points={[
            {
              title: 'Co-ownership',
              body: 'Each investor holds a percentage of the beneficial interest as personal property, and partners’ names stay off the deed. Buyouts and buy-ins happen by assignment, which cuts friction and cost.',
            },
            {
              title: 'Higher-risk ventures',
              body: 'For active construction or commercial leasing, an LLC that holds the beneficial interest adds creditor protection to the privacy.',
            },
            {
              title: 'Financing',
              body: 'Many residential lenders and some commercial lenders require the borrower to be the titled owner. Some ask the beneficiary to sign a personal guarantee, or to take title individually and transfer to the trust after closing with written consent.',
            },
            {
              title: 'Due-on-sale clauses',
              body: 'Most mortgage notes treat any transfer of title, including to a trust, as triggering the clause unless the lender waives it. Talk to your lender first.',
            },
          ]}
        />
      </Section>

      <Section title="Land trust or revocable living trust" tone="ice">
        <p>
          Both avoid probate for real estate. The difference is privacy: a revocable living trust deed usually names the grantor and
          is public record, while a land trust deed does not name the beneficiary. A revocable trust also covers all your assets in
          one document, alongside your pour-over will, durable power of attorney and healthcare directive.
        </p>
        <p>
          For a homeowner who mainly wants to keep a single residence out of probate, a revocable living trust is simpler and covers
          more. For investors with several properties, rental income and co-investors, land trusts offer practical advantages beyond
          probate. Call Jwayyed Law LLC at (614) 285-5482 to work out which vehicle, or combination, fits your holdings.
        </p>
      </Section>

      <LocationsWeServe title="Land Trusts" />

      <Section title="Related pages" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
