import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Franklin County Municipal Court Attorney | Civil & Business Representation | Jwayyed Law LLC',
  description: 'Experienced civil and business representation in Franklin County Municipal Court. Skilled representation for civil disputes, landlord-tenant matters, and evictions in Columbus, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['Franklin County Municipal Court attorney', 'Columbus Municipal Court civil lawyer', 'eviction attorney Columbus', 'landlord tenant lawyer Columbus'],
  openGraph: {
    title: 'Franklin County Municipal Court Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/franklin-county-municipal-court',
  },
  alternates: { canonical: '/courts/franklin-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Franklin County Municipal Court', href: '/courts/franklin-county-municipal-court' },
];

const faqs = [
  {
    question: `What types of cases does your firm handle in Franklin County Municipal Court?`,
    answer: `Due to a conflict, Jwayyed Law LLC handles only civil, business, estate planning, and probate matters in Franklin County Municipal Court. We do not handle criminal defense, OVI/DUI, or traffic violations in Franklin County. Our civil representation in this court includes contract disputes, property damage claims, landlord-tenant matters, eviction proceedings, and business collections within the court's $15,000 civil jurisdictional limit.`,
  },
  {
    question: `How does the eviction process work in Franklin County Municipal Court?`,
    answer: `Ohio's eviction process (forcible entry and detainer) is governed by ORC Chapter 1923. In Franklin County, the process begins when a landlord serves the tenant with the appropriate written notice — typically a 3-day notice to pay rent or vacate for nonpayment, or a 30-day notice for other lease violations. If the tenant does not comply, the landlord files an eviction complaint in Franklin County Municipal Court. The court schedules a hearing, which must occur within 30 days of filing. If the landlord prevails, the court issues a judgment for possession and the tenant has a set period to vacate before a writ of restitution is issued authorizing law enforcement to remove the tenant. An attorney can help landlords navigate this process efficiently and avoid procedural errors that can delay eviction.`,
  },
  {
    question: `What is the civil jurisdictional limit of Franklin County Municipal Court?`,
    answer: `Franklin County Municipal Court has civil jurisdiction over disputes where the amount in controversy does not exceed $15,000, excluding interest and costs. Claims above $15,000 must be filed in the Franklin County Common Pleas Court (General Division). Small claims cases — generally simpler disputes — are heard in the Small Claims Division with a $6,000 limit. If you are unsure which court has jurisdiction over your dispute, an attorney can help evaluate the amount in controversy and select the appropriate forum.`,
  },
  {
    question: `How can I collect on a civil judgment in Franklin County?`,
    answer: `After obtaining a civil judgment in Franklin County Municipal Court, a creditor can enforce the judgment through several mechanisms under Ohio law. Wage garnishment under ORC 2716.02 allows the creditor to collect up to 25% of the debtor's disposable earnings per pay period. A bank levy under ORC 2716.11 allows the creditor to attach funds in the debtor's bank accounts, subject to applicable exemptions. A judgment lien under ORC 2329.02 attaches to real property in the county where the judgment is filed and can be enforced upon sale or refinancing. An attorney can help navigate the post-judgment collection process and handle any exemption claims raised by the debtor.`,
  },
  {
    question: `How does the small claims process work in Franklin County Municipal Court?`,
    answer: `The Franklin County Municipal Court Small Claims Division handles civil disputes where the amount claimed does not exceed $6,000, excluding interest and costs. Small claims proceedings are designed to be accessible — parties may represent themselves, the rules of evidence are relaxed, and hearings are informal. However, having an attorney can still be valuable, particularly for business plaintiffs or defendants facing organized creditors. Small claims cases generally proceed faster than regular civil cases, with hearings often scheduled within 30 to 60 days of filing. Judgments obtained in small claims court are enforceable through the same collection mechanisms as regular civil judgments.`,
  },
  {
    question: `What is the Housing Division of Franklin County Municipal Court?`,
    answer: `The Franklin County Municipal Court includes a Housing Division that handles residential eviction cases (forcible entry and detainer under ORC Chapter 1923) as well as cases involving violations of housing codes, rental inspection matters, and certain landlord-tenant disputes. The Housing Division provides a streamlined process for residential eviction matters in Franklin County. Landlords filing residential eviction cases should be prepared to demonstrate compliance with the notice requirements of ORC Chapter 1923. Tenants facing eviction in the Housing Division have the right to appear and present defenses, including payment of rent, habitability issues, and improper notice.`,
  },
  {
    question: `How long do civil cases take in Franklin County Municipal Court?`,
    answer: `The duration of civil cases in Franklin County Municipal Court varies depending on whether the case is contested, the complexity of the issues, and the court's schedule. Uncontested matters — such as default judgments on collection cases — can be resolved in weeks. Small claims cases typically reach hearing within 30 to 60 days of filing. Contested civil cases where discovery is necessary may take 6 to 12 months or longer. Eviction cases in the Housing Division are generally heard within 30 days under ORC 1923.07. An attorney familiar with Franklin County Municipal Court procedures can provide a realistic timeline based on the specifics of your matter.`,
  },
  {
    question: `Do I need an attorney for civil matters in Franklin County Municipal Court?`,
    answer: `While individuals may represent themselves in Franklin County Municipal Court civil proceedings, having an attorney provides meaningful advantages. An attorney can evaluate the strength of your claims or defenses, ensure procedural requirements are met, navigate discovery, negotiate settlements, and present your case effectively at hearing. In landlord-tenant and eviction matters, procedural errors — such as an improper notice or failure to comply with ORC Chapter 1923 — can result in dismissal and delay. For business entities, Ohio law may require attorney representation in certain court proceedings. Jwayyed Law LLC handles civil, business, and related matters in Franklin County Municipal Court and can help you achieve efficient, effective results.`,
  },
];

export default function FranklinCountyMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Franklin County Municipal Court Attorney"
        description="Experienced legal representation in Franklin County Municipal Court. Serving Columbus and throughout Franklin County."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              Experienced legal representation in Franklin County Municipal Court for civil, business, and related matters. Serving Columbus and throughout Franklin County. Contact us at <a href="tel:6142855482" className="text-accent hover:underline">(614) 285-5482</a> or <Link href="/contact" className="text-accent hover:underline">schedule a consultation</Link>.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court is located at <strong>375 S. High Street, Columbus, OH 43215</strong>, with branch locations throughout the county. The court serves Columbus and surrounding communities and handles a broad range of civil, landlord-tenant, and business matters within its jurisdictional limits.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed rounded-lg bg-amber-50 border border-amber-200 p-4">
              <strong>Disclaimer:</strong> Due to a conflict, Jwayyed Law LLC handles only <strong>civil</strong>, <strong>business</strong>, <strong>estate planning</strong>, and <strong>probate</strong> matters in Franklin County. We do not handle criminal defense, OVI/DUI, or traffic violations in Franklin County.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Court Divisions and Civil Jurisdiction</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court has civil jurisdiction over disputes where the amount in controversy does not exceed $15,000, excluding interest and costs. The court operates several divisions relevant to civil and business matters. The Civil Division handles contract disputes, property damage claims, and other civil cases up to the $15,000 limit. The Small Claims Division handles simpler disputes up to $6,000 where parties often appear without attorneys, though having legal representation is still permitted and can be advantageous. The Housing Division handles residential eviction matters (forcible entry and detainer) under ORC Chapter 1923 and certain housing code enforcement matters. For disputes exceeding $15,000, cases must be filed in Franklin County Common Pleas Court (General Division).
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Eviction and Landlord-Tenant Matters</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio's eviction process (forcible entry and detainer) under ORC Chapter 1923 is heard in Franklin County Municipal Court's Housing Division. Before filing an eviction, a landlord must serve the tenant with proper written notice — typically a 3-day notice to vacate for nonpayment of rent or for other material lease violations. After the notice period expires without compliance, the landlord may file an eviction complaint. Under ORC 1923.07, the court must schedule a hearing within 30 days of the filing. If the landlord prevails, the court issues a judgment for possession of the premises. After the appeal period expires, the landlord may request a writ of restitution authorizing the bailiff to remove the tenant. Procedural compliance is critical — errors in the notice or complaint can result in dismissal and require the landlord to start over.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Business Collections and Civil Judgment Enforcement</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court is a practical forum for businesses seeking to collect on unpaid invoices, breach of contract claims, and other commercial disputes under $15,000. After obtaining a civil judgment, creditors can pursue collection through wage garnishment under ORC 2716.02 (up to 25% of disposable earnings), bank account levies under ORC 2716.11, or judgment liens on real property under ORC 2329.02. Debtors have the right to claim Ohio property exemptions under ORC 2329.66 in response to garnishment or levy proceedings, and responding to these exemption claims correctly is important for creditors. An attorney experienced in Franklin County Municipal Court can help businesses file collection cases, obtain default judgments when appropriate, and pursue effective post-judgment remedies.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Civil Procedure in Municipal Court</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The Ohio Rules of Civil Procedure apply in Franklin County Municipal Court, with some modifications applicable to courts of limited jurisdiction. Defendants in civil cases must file a timely Answer — generally within 28 days of service of the complaint — or face a default judgment. Discovery may be available in contested civil cases, though the scope is often more limited than in Common Pleas Court given the lower amounts in controversy. Parties have the right to a bench trial or jury trial depending on the type of case. Cases that cannot be resolved through settlement or summary procedures proceed to hearing before a judge or magistrate. Magistrates in Municipal Court handle many civil and eviction matters, with the right to object to a magistrate's decision and seek review by the assigned judge.
            </p>

            <LocationsWeServe title="Civil" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How We Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Civil matters:</strong> Contract disputes, property damage claims, and civil collections within the $15,000 jurisdictional limit</li>
              <li><strong>Landlord-tenant matters:</strong> Residential evictions, lease enforcement, and Housing Division proceedings under ORC Chapter 1923</li>
              <li><strong>Business matters:</strong> Business-related civil litigation and commercial collections within Municipal Court jurisdiction</li>
              <li><strong>Post-judgment enforcement:</strong> Wage garnishment, bank levies, and judgment lien filings after obtaining a civil judgment</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have a civil, business, or related matter in Franklin County Municipal Court, contact Jwayyed Law LLC at <a href="tel:6142855482" className="text-accent hover:underline">(614) 285-5482</a> or <Link href="/contact" className="text-accent hover:underline">schedule a consultation</Link>. We will review your case, explain court procedures, discuss your options, and develop a strategy tailored to your situation.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
