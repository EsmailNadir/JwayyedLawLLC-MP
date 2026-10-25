import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'QTIP Trusts Lawyer Ohio',
  description:
    'QTIP trusts in Ohio under IRC 2056(b)(7): income for your surviving spouse for life, with the remainder going to the children you name.',
  keywords: [
    'QTIP trust Columbus OH',
    'QTIP trust attorney Ohio',
    'qualified terminable interest property trust Ohio',
    'blended family trust Ohio',
    'IRC 2056 QTIP election Ohio',
    'marital deduction trust Ohio',
    'second marriage estate planning Ohio',
    'spouse income trust Columbus',
    'remarriage protection trust Ohio',
    'federal estate tax marital deduction Ohio',
  ],
  openGraph: {
    title: 'QTIP Trusts Lawyer Ohio | Jwayyed Law LLC',
    description: 'QTIP trusts for blended families and married couples in Ohio. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/trusts/qtip-trusts',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/trusts/qtip-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'QTIP Trusts', href: '/trusts/qtip-trusts' },
];

const faqs = [
  {
    question: 'What is a QTIP trust?',
    answer:
      'A Qualified Terminable Interest Property (QTIP) trust is a marital trust that qualifies for the federal estate tax marital deduction under IRC 2056(b)(7) while letting the first spouse to die (the "first decedent") decide who receives the assets after the surviving spouse dies. The surviving spouse must receive all of the net income at least annually, and no one, not even the trustee, may distribute principal to anyone else during the surviving spouse\'s lifetime. At the surviving spouse\'s death the assets pass to the remainder beneficiaries the first decedent named, typically children from a prior marriage.',
  },
  {
    question: 'Who needs a QTIP trust?',
    answer:
      "QTIP trusts are most common in blended families, where one or both spouses have children from a prior marriage or relationship. If you leave your estate outright to your spouse, your spouse could leave everything to their own children or a new spouse and cut your children out. The QTIP secures your spouse's finances for life through mandatory income distributions and sends what remains at their death to your heirs. It is also used in first marriages when one spouse wants to defer estate tax and keep control over where the wealth ends up.",
  },
  {
    question: 'How is the surviving spouse protected in a QTIP trust?',
    answer:
      "The surviving spouse must receive all net income at least annually. That is a mandatory requirement for QTIP qualification under IRC 2056(b)(7)(B)(ii), and the trustee cannot accumulate income or redirect it. The trust may (and often should) also let the trustee distribute principal to the surviving spouse for health, education, maintenance and support. The spouse is often given a limited power of appointment to redirect the remainder among a defined class, such as the first decedent's children, but that power cannot extend to the spouse's own estate or creditors.",
  },
  {
    question: 'What happens to the QTIP trust assets when the surviving spouse dies?',
    answer:
      "Under IRC 2044, the full value of the QTIP assets is included in the surviving spouse's taxable estate, even though the spouse never owned them outright. That is the price of the marital deduction: estate tax is deferred, not eliminated. The first decedent's estate takes the deduction and the surviving spouse's estate pays the tax. The trust then ends and the assets pass to the remainder beneficiaries in the first decedent's trust document, typically children from the first marriage.",
  },
  {
    question: 'Can the surviving spouse access the QTIP trust principal?',
    answer:
      "It depends on the drafting. At minimum, the trust must bar principal distributions to anyone other than the surviving spouse during the spouse's lifetime, but it need not require any principal distributions at all. Many QTIP trusts let the trustee distribute principal for health, education, maintenance and support (the HEMS standard). Stricter drafting limits access to emergency health needs, which better protects the children's remainder. The right balance depends on the family and on the relationship between the surviving spouse and the remainder beneficiaries.",
  },
  {
    question: 'How does the QTIP election work on the estate tax return?',
    answer:
      'The executor of the first decedent\'s estate makes the QTIP election on the federal estate tax return (Form 706), due nine months after death with a six-month extension available. The executor elects to treat some or all of the trust as qualified terminable interest property, which qualifies for the unlimited marital deduction and reduces the first estate\'s taxable amount to zero (or to what remains after the election). The election is irrevocable once made. The executor decides how much to elect; combined with a residue clause this is called a "Clayton QTIP," and it lets the executor balance estate taxes across both estates under the law in effect at each death.',
  },
  {
    question: 'Is a QTIP trust relevant for Ohio residents if Ohio has no estate tax?',
    answer:
      'Ohio repealed its state estate tax effective January 1, 2013, so the reasons for a QTIP in Ohio are federal. For estates that exceed or may exceed the federal exemption (currently $13.61 million per individual in 2024, scheduled to drop significantly after 2025), the QTIP remains an important tool. It also matters for blended families at any estate size, because its main non-tax job, controlling who receives the remainder after the surviving spouse dies, applies to every estate.',
  },
  {
    question: 'What is the difference between a QTIP trust and outright portability?',
    answer:
      "Portability lets a surviving spouse use the deceased spouse's unused exemption (DSUEA) by filing an estate tax return and making a portability election. It is simpler than a QTIP and needs no trust. Its limits: the ported exemption is not indexed for inflation (it locks in at the first decedent's amount), it cannot be used with the GST exemption, and it gives no blended family protection, because assets left outright can go wherever the survivor chooses. A QTIP trust, combined with portability where it fits, gives both tax deferral and control of the remainder.",
  },
];

const RELATED = [
  { href: '/trusts', title: 'All trust services', subtitle: 'Every type of trust the firm sets up' },
  { href: '/trusts/irrevocable-trusts', title: 'Irrevocable trusts', subtitle: 'ILITs, GRATs, SLATs and Medicaid trusts' },
  { href: '/trusts/dynasty-trusts', title: 'Dynasty trusts', subtitle: 'Using the GST exemption across generations' },
  { href: '/other-services/estate-planning-wills', title: 'Estate planning and wills', subtitle: 'The will and plan a QTIP sits inside' },
];

export default function QTIPTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="QTIP trusts in Ohio"
        description="A QTIP trust pays your surviving spouse all of its income for life, then passes what remains to the children you chose. It qualifies for the federal marital deduction under IRC 2056(b)(7)."
      />

      <Section
        title="What a QTIP trust does"
        intro={
          <p>
            The QTIP lets the first spouse to die take the unlimited federal estate tax marital deduction, deferring estate tax
            until the surviving spouse&rsquo;s death, and still decide exactly who receives the assets afterward.
          </p>
        }
      >
        <p>
          That control over the remainder is what separates a QTIP from leaving everything outright to a spouse, and it is why the
          QTIP is the standard tool for blended families, second marriages and high-net-worth couples. Jwayyed Law LLC advises
          clients in Columbus, Cincinnati, Dayton and across Ohio on QTIP design, drafting and administration.
        </p>
        <p>
          The non-tax reason applies to every estate. A surviving spouse who inherits outright can change their own plan at will:
          disinherit stepchildren, leave everything to a new spouse or partner, or spend the assets in ways the first spouse never
          intended. A QTIP locks in the first spouse&rsquo;s wishes. The survivor receives income for life (and principal for HEMS
          needs if the trust allows), and what remains passes to the children the first spouse named.
        </p>
      </Section>

      <Section title="Federal estate tax figures for Ohio couples" tone="ice">
        <FactTable
          title="Estate tax rules behind QTIP planning"
          rows={[
            { label: 'Ohio estate tax', value: 'None. Repealed effective January 1, 2013, so QTIP planning in Ohio is federal tax and blended family planning.' },
            { label: 'Federal exemption, 2024', value: '$13.61 million per individual.' },
            {
              label: 'Scheduled change',
              value: 'The exemption is scheduled to sunset after December 31, 2025, to approximately half its current level, absent action by Congress.',
            },
            { label: 'Form 706 deadline', value: 'Nine months after the first death, with a possible six-month extension.' },
            { label: 'Second death', value: 'Under IRC 2044, the full fair market value of QTIP assets is in the surviving spouse’s taxable estate.' },
          ]}
          note="For Ohio couples whose combined estates approach or exceed the projected post-sunset threshold, QTIP planning was a central part of pre-sunset planning in 2024 and 2025."
        />
      </Section>

      <Section title="The three requirements under IRC 2056(b)(7)">
        <Steps
          steps={[
            {
              title: 'All income to the surviving spouse',
              body: 'The spouse must be entitled to all net income, payable at least annually (or more often, such as monthly). No income can be accumulated or paid to anyone else during the spouse’s lifetime.',
            },
            {
              title: 'No one else can receive principal',
              body: 'No person, including the trustee, may appoint any trust property to anyone other than the surviving spouse during the spouse’s lifetime.',
            },
            {
              title: 'The executor makes the election',
              body: 'The executor of the first estate must make the QTIP election on Form 706. Without it, the trust does not qualify for the marital deduction and the full value is in the first decedent’s taxable estate.',
            },
          ]}
        />
        <p>
          The executor can elect QTIP treatment for all, some or none of the trust assets. Built into the trust document, this is
          sometimes called a &ldquo;Clayton election,&rdquo; and it lets the executor set the elected amount to the estate&rsquo;s
          actual tax picture at death, given the exemption then in effect and the assets involved. A well-drafted QTIP says what
          happens to assets not elected, typically a credit shelter or bypass trust funded with the non-marital share.
        </p>
        <Callout title="Deferred, not eliminated">
          The marital deduction defers estate tax to the second death. The survivor&rsquo;s estate gets a deduction for estate tax
          attributable to the QTIP assets, which avoids double taxation, but those assets are taxed at the second death under the
          exemption and rates then in effect.
        </Callout>
      </Section>

      <Section title="Portability or a QTIP trust" tone="ice">
        <p>
          Since 2013, a surviving spouse can elect portability of the deceased spouse&rsquo;s unused exemption (DSUEA) by filing a
          timely Form 706, even if no tax is due. It requires no trust drafting, no trustee and no income distributions. For a first
          and only marriage with no blended family concerns and an estate well below the federal threshold, portability may be
          enough.
        </p>
        <PointGrid
          points={[
            {
              title: 'Not indexed for inflation',
              body: 'The ported DSUEA locks in at the first decedent’s exemption at death, which may be worth less decades later.',
            },
            {
              title: 'No GST use',
              body: 'The ported exemption cannot be applied to generation-skipping transfers, which limits dynasty trust planning.',
            },
            {
              title: 'No remainder control',
              body: 'Portability gives no protection to children from a prior marriage and no say over who receives the survivor’s assets.',
            },
            {
              title: 'QTIP plus credit shelter trust',
              body: 'The credit shelter trust absorbs the first exemption and stays out of the survivor’s estate; the QTIP takes the marital share and the marital deduction. Together they reduce estate tax at both deaths and protect the remainder beneficiaries.',
            },
          ]}
        />
      </Section>

      <Section title="Choosing the trustee">
        <p>
          The trustee must pay all net income to the surviving spouse while preserving principal for the children, so the two sides
          pull against each other. Ohio&rsquo;s trustee duties under ORC Chapter 5808 require impartiality between the income
          beneficiary&rsquo;s right to reasonable income and the remainder beneficiaries&rsquo; right to principal preservation.
          Ohio&rsquo;s version of the Uniform Prudent Investor Act, ORC 5810.02, calls for a total-return approach rather than
          maximizing income. The trustee and beneficiaries should agree at the outset on a unitrust conversion or a principal and
          income allocation that balances both sides.
        </p>
        <p>
          In a blended family, an independent corporate trustee or a professional co-trustee can manage that tension more neutrally
          than a relative close to one side. If the surviving spouse and the children get along, a family trustee may work, but the
          trust should include clear trustee removal and dispute resolution terms. Call Jwayyed Law LLC at (614) 285-5482 to discuss
          whether a QTIP trust belongs in your plan.
        </p>
      </Section>

      <LocationsWeServe title="QTIP Trusts" />

      <Section title="Related trust pages" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
