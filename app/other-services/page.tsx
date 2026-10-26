import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import FAQ from '@/components/FAQ';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section } from '@/components/practice';
import { otherServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Estate Planning & Probate Lawyer Ohio',
  description:
    'Ohio estate planning, wills and trusts, probate administration, and mediation and arbitration, from a Columbus law firm serving clients statewide.',
  keywords: ['estate planning attorney Columbus Ohio', 'probate lawyer Ohio', 'dispute resolution attorney Columbus', 'Ohio will attorney', 'trust attorney Columbus OH'],
  openGraph: {
    title: 'Estate Planning & Probate Lawyer Ohio | Jwayyed Law LLC',
    description: 'Estate planning, probate administration and dispute resolution in Ohio.',
    url: 'https://www.jjlawohio.com/other-services',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/other-services' },
};

const breadcrumbItems = [{ label: 'Other Services', href: '/other-services' }];

const faqs = [
  {
    question: 'What estate planning documents does every Ohio adult need?',
    answer:
      'At a minimum: (1) a Last Will and Testament under ORC Chapter 2107, directing distribution of probate assets and naming an executor; (2) a durable financial power of attorney under ORC 1337.22, naming someone to manage your finances if you are incapacitated; (3) a healthcare power of attorney or healthcare proxy under ORC 1337.12, naming a decision-maker for medical treatment; and (4) a living will (advance directive) under ORC 2133.02, stating your end-of-life treatment preferences. Depending on your assets and goals, a revocable living trust under ORC 5801 may also make sense, to avoid probate and keep assets managed without interruption.',
  },
  {
    question: 'What is the probate process in Ohio and how long does it take?',
    answer:
      'Ohio probate runs through the Probate Division of the Court of Common Pleas in the county where the decedent lived. Under ORC Chapter 2113, the executor files the will (if any) and petitions the court to open the estate. The estate stays open long enough to notify creditors (notice must be published, and a 4-month creditor claim period runs under ORC 2117.06), inventory assets, pay valid debts and taxes, and distribute what remains to beneficiaries. A straightforward Ohio estate typically takes 6 to 12 months; estates with disputes, real estate in several counties or federal estate tax take longer. An attorney guides the executor through each step.',
  },
  {
    question: 'Can I avoid probate in Ohio?',
    answer:
      'Yes. Assets can pass outside probate through: (1) joint tenancy with right of survivorship (real estate and financial accounts); (2) beneficiary designations on retirement accounts, life insurance and financial accounts (TOD/POD designations); (3) a Transfer on Death (TOD) deed for real estate under ORC 5302.22; and (4) a revocable living trust under ORC Chapter 5801, which holds assets during life and distributes them at death without court involvement. A properly funded living trust is the broadest tool for larger or more complex estates. The firm can advise on the right approach for your assets and family.',
  },
  {
    question: 'What is the difference between a will and a revocable living trust in Ohio?',
    answer:
      'A Last Will and Testament under ORC Chapter 2107 takes effect at death and must go through Ohio probate court before assets are distributed, and it becomes a public record. A revocable living trust under ORC Chapter 5801 is created and funded during your lifetime and holds title to your assets; at death, the successor trustee distributes them without court involvement, privately and without probate delay. Wills are generally simpler and less expensive to create. Trusts must be funded (assets retitled) to work, but give more flexibility, privacy and control, particularly for larger estates, blended families or property in several states.',
  },
  {
    question: "What is an executor's duty in Ohio probate, and can they be held liable?",
    answer:
      "An Ohio executor (personal representative) has fiduciary duties under ORC Chapter 2113: inventorying and appraising estate assets, notifying and paying valid creditors, filing estate and income tax returns, managing estate assets prudently during administration, and distributing assets under the will or Ohio intestacy law. An executor can be personally liable for breaching these duties, for example by distributing assets before creditors are paid or mismanaging estate investments. An attorney can guide the executor through probate and help limit that exposure.",
  },
  {
    question: 'What is mediation and how does it differ from arbitration in Ohio?',
    answer:
      'Both are alternative dispute resolution (ADR). Mediation under ORC Chapter 2710 is a voluntary, confidential process in which a neutral mediator helps the parties reach a settlement they both accept; the mediator cannot impose a decision. Arbitration under ORC Chapter 2711 is more formal: a neutral arbitrator (or panel) hears evidence and issues a binding or non-binding award. Mediation is usually faster and less expensive; arbitration resembles a streamlined trial. Many commercial contracts include mandatory arbitration clauses. The firm can advise which process suits your dispute and represent you throughout.',
  },
  {
    question: 'Does Ohio recognize handwritten (holographic) wills?',
    answer:
      "Ohio does not recognize handwritten (holographic) wills that lack proper witness signatures. Under ORC 2107.03, a valid Ohio will must be in writing, signed by the testator (or by another at the testator's direction), and attested and signed by two competent witnesses in the testator's conscious presence. An unwitnessed handwritten will is not valid in Ohio. If someone dies with an invalid will or none, Ohio's intestacy statute (ORC 2105.06) governs distribution, which may not reflect the decedent's wishes.",
  },
  {
    question: 'What other legal services does Jwayyed Law LLC provide beyond criminal defense and personal injury?',
    answer:
      'Beyond criminal defense, OVI/DUI defense and personal injury, Jwayyed Law LLC provides: estate planning (wills, trusts, powers of attorney and living wills under ORC Chapters 2107, 5801 and 1337); probate administration (ORC Chapter 2113); dispute resolution, including mediation (ORC Chapter 2710) and arbitration (ORC Chapter 2711); civil litigation, including landlord-tenant disputes, debt collection defense, employment disputes and defamation claims; and business law, including LLC formation (ORC Chapter 1706), business dissolution, contract drafting and business dispute resolution. The firm serves clients throughout Ohio from its Columbus base.',
  },
];

export default function OtherServicesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Estate planning, probate and dispute resolution in Ohio"
        description="Wills, trusts and powers of attorney, Ohio probate administration, and mediation or arbitration when a dispute does not belong in court. A straightforward Ohio estate typically takes 6 to 12 months in probate."
      />

      <Section title="Find your matter" intro={<p>Each page covers the Ohio law, the process and what the firm does for that matter.</p>}>
        <LinkGrid links={otherServices.map((s) => ({ href: s.href, title: s.title, subtitle: s.description }))} />
      </Section>

      <KeyFacts
        facts={[
          { figure: '2', label: 'competent witnesses required for a valid Ohio will (ORC 2107.03)' },
          { figure: '4 months', label: 'creditor claim period in Ohio probate (ORC 2117.06)' },
          { figure: '6 to 12 months', label: 'typical length of a straightforward Ohio probate estate' },
        ]}
      />

      <Section
        title="What these services cover"
        tone="ice"
        intro={
          <p>
            Alongside criminal defense, OVI/DUI defense, personal injury and business law, Jwayyed Law LLC handles
            estate planning, probate administration and dispute resolution throughout Ohio.
          </p>
        }
      >
        <PointGrid
          points={[
            {
              title: 'Estate planning',
              body: 'Protecting your assets and family with a will, powers of attorney, a living will and, where it fits, a trust.',
            },
            {
              title: 'Probate administration',
              body: 'Taking an estate through the Ohio probate process after a loved one dies.',
            },
            {
              title: 'Dispute resolution',
              body: 'Mediation or arbitration when litigation is not the right path, for contract, business relationship or estate disputes.',
            },
          ]}
        />
      </Section>

      <Section title="Estate planning under Ohio law">
        <p>
          Estate planning in Ohio is governed mainly by <strong>ORC Chapter 2107</strong> (wills), <strong>ORC Chapter 5801</strong>{' '}
          (trusts) and <strong>ORC 1337</strong> (powers of attorney).
        </p>
        <FactTable
          title="The core documents"
          rows={[
            { label: 'Last Will and Testament', value: 'Directs distribution of probate assets and names an executor (ORC Chapter 2107).' },
            { label: 'Durable financial power of attorney', value: 'Names someone to manage your finances if you are incapacitated (ORC 1337.22).' },
            { label: 'Healthcare power of attorney', value: 'Names a decision-maker for medical treatment (ORC 1337.12).' },
            { label: 'Living will', value: 'An advance directive with your end-of-life treatment preferences (ORC 2133.02).' },
            {
              label: 'Revocable living trust',
              value: 'For larger estates, blended families or real estate in several states: can avoid probate entirely and manage and distribute assets privately (ORC Chapter 5801).',
            },
            { label: 'Transfer on Death deed', value: 'Lets real estate pass directly to named beneficiaries without probate (ORC 5302.22).' },
          ]}
        />
      </Section>

      <Section title="Probate administration" tone="ice">
        <p>
          Ohio probate is handled through the Probate Division of the Court of Common Pleas under <strong>ORC Chapter 2113</strong>. The
          executor must inventory estate assets, publish notice to creditors, pay valid claims during the 4-month creditor claim period
          under <strong>ORC 2117.06</strong>, file required tax returns and distribute the estate to beneficiaries.
        </p>
        <p>
          Executors have fiduciary duties and can be personally liable for mismanagement. The firm guides executors from opening the
          estate to the final accounting and distribution.
        </p>
      </Section>

      <Section title="Mediation and arbitration">
        <PointGrid
          points={[
            {
              title: 'Mediation (ORC Chapter 2710)',
              body: 'A confidential, voluntary route to settlement that can resolve a dispute faster and at lower cost than litigation.',
            },
            {
              title: 'Arbitration (ORC Chapter 2711)',
              body: 'Many commercial contracts now include mandatory arbitration clauses, so representation at the arbitration itself matters.',
            },
          ]}
        />
        <p>
          Whether the dispute comes from a contract, a business relationship or an estate, the firm can advise on the right way to
          resolve it and represent you throughout.
        </p>
      </Section>

      <LocationsWeServe title="Other Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
