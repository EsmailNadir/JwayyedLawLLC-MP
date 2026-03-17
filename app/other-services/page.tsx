import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import FAQ from '@/components/FAQ';
import LocationsWeServe from '@/components/LocationsWeServe';
import Link from 'next/link';
import { otherServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Estate Planning, Probate & Dispute Resolution Lawyer Ohio | Jwayyed Law LLC',
  description: 'Ohio attorney for estate planning, wills and trusts, probate administration, and dispute resolution. Serving Columbus and throughout Ohio under ORC Chapters 2107, 2113, and 2711. Call (614) 285-5482.',
  keywords: ['estate planning attorney Columbus Ohio', 'probate lawyer Ohio', 'dispute resolution attorney Columbus', 'Ohio will attorney', 'trust attorney Columbus OH'],
  openGraph: {
    title: 'Estate Planning, Probate & Dispute Resolution Lawyer Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services',
  },
  alternates: { canonical: '/other-services' },
};

const breadcrumbItems = [{ label: 'Other Services', href: '/other-services' }];

const faqs = [
  {
    question: `What estate planning documents does every Ohio adult need?`,
    answer: `At a minimum, Ohio adults should have: (1) a Last Will and Testament under ORC Chapter 2107 directing distribution of probate assets and naming an executor; (2) a durable financial power of attorney under ORC 1337.22 designating someone to manage finances if incapacitated; (3) a healthcare power of attorney or healthcare proxy under ORC 1337.12 designating a decision-maker for medical treatment; and (4) a living will (advance directive) under ORC 2133.02 stating end-of-life treatment preferences. Depending on assets and goals, a revocable living trust under ORC 5801 may also be appropriate to avoid probate and provide for seamless asset management.`,
  },
  {
    question: `What is the probate process in Ohio and how long does it take?`,
    answer: `Ohio probate is administered through the Probate Division of the Court of Common Pleas in the county where the decedent resided. Under ORC Chapter 2113, the executor files the will (if any) and petitions the court to open the estate. The estate must remain open long enough to notify creditors (notice must be published and a 4-month creditor claim period runs under ORC 2117.06), inventory assets, pay valid debts and taxes, and distribute remaining assets to beneficiaries. A straightforward Ohio estate typically takes 6–12 months; complex estates with disputes, real estate in multiple counties, or federal estate tax obligations can take longer. An attorney guides the executor through each step.`,
  },
  {
    question: `Can I avoid probate in Ohio?`,
    answer: `Yes. Several Ohio mechanisms allow assets to pass outside of probate: (1) joint tenancy with right of survivorship (real estate and financial accounts); (2) beneficiary designations on retirement accounts, life insurance, and financial accounts (TOD/POD designations); (3) a Transfer on Death (TOD) deed for real estate under ORC 5302.22; (4) a revocable living trust under ORC Chapter 5801, which holds assets during life and distributes them at death without court involvement. A properly funded living trust is the most comprehensive probate avoidance tool for larger or more complex estates. Our attorney can advise on the best strategy for your specific asset mix and family situation.`,
  },
  {
    question: `What is the difference between a will and a revocable living trust in Ohio?`,
    answer: `A Last Will and Testament under ORC Chapter 2107 is a document that takes effect at death and must pass through Ohio probate court before assets are distributed — it is a public record. A revocable living trust under ORC Chapter 5801 is a legal entity you create and fund during your lifetime that holds title to your assets; at death, the successor trustee distributes assets to beneficiaries without court involvement, maintaining privacy and avoiding probate delay. Wills are generally simpler and less expensive to create; trusts require funding (retitling assets) to be effective but provide greater flexibility, privacy, and control — particularly for larger estates, blended families, or individuals with property in multiple states.`,
  },
  {
    question: `What is an executor's duty in Ohio probate, and can they be held liable?`,
    answer: `An Ohio executor (personal representative) has fiduciary duties under ORC Chapter 2113 including: inventorying and appraising estate assets, notifying and paying valid creditors, filing estate and income tax returns, managing estate assets prudently during administration, and distributing assets to beneficiaries per the will or Ohio intestacy law. Executors can be held personally liable for breach of these fiduciary duties — for example, distributing assets before creditors are paid, or mismanaging estate investments. An attorney can guide the executor through the probate process, helping them fulfill their obligations and minimize personal liability exposure.`,
  },
  {
    question: `What is mediation and how does it differ from arbitration in Ohio?`,
    answer: `Mediation and arbitration are both forms of alternative dispute resolution (ADR) in Ohio but work differently. Mediation under ORC Chapter 2710 is a voluntary, confidential process where a neutral mediator helps the parties reach a mutually acceptable settlement — the mediator has no authority to impose a decision. Arbitration under ORC Chapter 2711 is a more formal process where a neutral arbitrator (or panel) hears evidence and issues a binding or non-binding award. Mediation is typically faster and less expensive; arbitration resembles a streamlined trial. Many commercial contracts include mandatory arbitration clauses. Our attorney can advise on which ADR process is appropriate for your dispute and represent you throughout.`,
  },
  {
    question: `Does Ohio recognize handwritten (holographic) wills?`,
    answer: `Ohio does not recognize handwritten (holographic) wills that lack proper witness signatures. Under ORC 2107.03, a valid Ohio will must be in writing, signed by the testator (or by another at the testator's direction), and attested and signed by two competent witnesses in the testator's conscious presence. An unwitnessed handwritten will is not valid in Ohio. If someone dies with an invalid or no will, Ohio's intestacy statute (ORC 2105.06) governs distribution — which may not reflect the decedent's actual wishes. This makes proper will drafting with an attorney critical to ensuring your intentions are carried out.`,
  },
  {
    question: `What other legal services does Jwayyed Law LLC provide beyond criminal defense and personal injury?`,
    answer: `Beyond criminal defense, OVI/DUI defense, and personal injury, Jwayyed Law LLC provides: estate planning (wills, trusts, powers of attorney, living wills under ORC Chapters 2107, 5801, 1337); probate administration (ORC Chapter 2113); dispute resolution including mediation (ORC Chapter 2710) and arbitration (ORC Chapter 2711); civil litigation including landlord-tenant disputes, debt collection defense, employment disputes, and defamation claims; and business law including LLC formation (ORC Chapter 1706), business dissolution, contract drafting, and business dispute resolution. We serve clients throughout Ohio from our Columbus base.`,
  },
];

export default function OtherServicesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Estate Planning, Probate &amp; Dispute Resolution"
        description="Ohio legal services for estate planning, wills and trusts, probate administration, and alternative dispute resolution. Serving Columbus and throughout Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Additional Legal Services at Jwayyed Law LLC
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              In addition to criminal defense, OVI/DUI defense, personal injury, civil litigation, and business law, Jwayyed Law LLC provides estate planning, probate administration, and dispute resolution services throughout Ohio. These practice areas address some of life&apos;s most important legal decisions — protecting your assets and family through thoughtful estate planning, navigating the Ohio probate process efficiently after a loved one passes, and resolving disputes through mediation or arbitration when litigation is not the right path. Our attorney handles these matters with the same attention to Ohio statute and practical detail that we bring to our litigation practice.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Estate planning in Ohio is governed primarily by <strong>ORC Chapter 2107</strong> (wills), <strong>ORC Chapter 5801</strong> (trusts), and <strong>ORC 1337</strong> (powers of attorney). A comprehensive estate plan typically includes a Last Will and Testament, a durable financial power of attorney, a healthcare power of attorney, and an advance directive (living will). For individuals with larger estates, blended families, or real estate in multiple states, a revocable living trust under ORC Chapter 5801 can avoid probate entirely and provide a flexible, private mechanism for asset management and distribution. Ohio&apos;s Transfer on Death deed statute, <strong>ORC 5302.22</strong>, also allows real estate to pass directly to named beneficiaries without probate.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Probate administration in Ohio is handled through the Probate Division of the Court of Common Pleas under <strong>ORC Chapter 2113</strong>. The executor must inventory estate assets, publish notice to creditors, satisfy valid claims during the 4-month creditor claim period under <strong>ORC 2117.06</strong>, file required tax returns, and distribute the estate to beneficiaries. Executors have fiduciary duties and can face personal liability for mismanagement. Our attorney guides executors through each step of the process — from opening the estate to final accounting and distribution — helping them fulfill their obligations and minimize risk.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Dispute resolution services include mediation under <strong>ORC Chapter 2710</strong> and arbitration under <strong>ORC Chapter 2711</strong>. Many commercial contracts now include mandatory arbitration clauses, making it important to have experienced representation in arbitration proceedings. Mediation offers a confidential, voluntary path to settlement that can resolve disputes faster and at lower cost than litigation. Whether a dispute arises from a contract, a business relationship, or an estate matter, our attorney can advise on the most appropriate resolution strategy and represent your interests throughout.
            </p>

            <LocationsWeServe title="Other Services" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-6">
              Our Other Legal Services
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {otherServices.map((service) => (
                <a
                  key={service.href}
                  href={service.href}
                  className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all"
                >
                  <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h4>
                  {service.description && (
                    <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">{service.description}</p>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
