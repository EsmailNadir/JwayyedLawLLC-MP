import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Guardianships Lawyer in Ohio | Columbus | Jwayyed Law LLC',
  description: 'Ohio attorney helping families establish guardianships for incapacitated adults and minors through probate court. Experienced guidance on Ohio ORC Chapter 2111. Call (614) 285-5482.',
  keywords: [
    'guardianship lawyer Columbus OH',
    'guardianship attorney Ohio',
    'adult guardianship Ohio',
    'minor guardianship Ohio',
    'Franklin County probate court guardianship',
    'limited guardianship Ohio',
    'plenary guardianship Ohio',
    'emergency guardianship Ohio',
    'ORC 2111 guardianship attorney',
  ],
  openGraph: {
    title: 'Guardianships Lawyer in Ohio | Columbus | Jwayyed Law LLC',
    description: 'Ohio attorney helping families establish guardianships for incapacitated adults and minors through probate court. Experienced guidance on Ohio ORC Chapter 2111. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/other-services/guardianships',
  },
  alternates: { canonical: '/other-services/guardianships' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Estate Planning', href: '/other-services/estate-planning' },
  { label: 'Guardianships', href: '/other-services/guardianships' },
];

const faqs = [
  {
    question: `What is guardianship in Ohio and when is it necessary?`,
    answer: `In Ohio, guardianship is a legal relationship created by probate court in which one person (the guardian) is appointed to make decisions for another person (the ward) who is unable to make adequate decisions for themselves due to incapacity. Incapacity can result from intellectual disability, Alzheimer's disease or other dementia, traumatic brain injury, mental illness, stroke, or minority (being under 18). Guardianship is typically necessary when a person lacks the ability to manage their own affairs and there is no adequate less-restrictive alternative in place — such as a durable power of attorney or healthcare proxy — to address the need. Ohio courts are required to find that guardianship is the least restrictive available intervention before appointing a guardian.`,
  },
  {
    question: `What are the types of guardianship in Ohio?`,
    answer: `Ohio recognizes three basic types of guardianship under ORC Chapter 2111. A guardian of the person is authorized to make decisions about the ward's physical care, medical treatment, and living arrangements. A guardian of the estate is authorized to manage the ward's financial affairs — collecting income, paying bills, managing investments, filing tax returns, and making accountings to the court. A guardian of the person and estate combines both roles and is the most common appointment for adults who are fully incapacitated. Ohio also distinguishes between plenary guardianship (full authority over all personal or financial decisions) and limited guardianship (authority over only specific identified decisions), with courts required to limit guardianship to the extent necessary to protect the ward.`,
  },
  {
    question: `How does Ohio's guardianship process work?`,
    answer: `To establish a guardianship in Ohio, a petitioner files a complaint with the probate court of the county where the proposed ward resides. In Franklin County, this is the Franklin County Probate Court. The petition must include documentation of the proposed ward's incapacity — typically a physician's statement or psychological evaluation. The court appoints a guardian ad litem to represent the proposed ward's interests and conducts an investigation. A hearing is scheduled, at which the proposed ward has the right to attend and contest the petition with their own attorney. If the court finds incapacity by clear and convincing evidence under ORC 2111.02, it issues letters of guardianship. The entire process typically takes four to eight weeks in Franklin County, longer in contested cases.`,
  },
  {
    question: `What are a guardian's ongoing duties and reporting requirements in Ohio?`,
    answer: `Ohio guardians carry significant ongoing obligations. A guardian of the person must file an annual report with the probate court detailing the ward's current physical and mental condition, living situation, medical care, and any significant changes in the past year. A guardian of the estate must file an inventory of the ward's assets within three months of appointment and thereafter file annual accountings showing all receipts and disbursements, supported by bank statements and receipts. Guardians must seek prior court approval for major transactions — selling real estate, making significant investments, or authorizing certain medical procedures. Failure to file required reports or comply with court orders can result in removal of the guardian and potential personal liability.`,
  },
  {
    question: `What is an emergency guardianship in Ohio?`,
    answer: `An emergency guardianship (also called an ex parte guardianship) may be granted by a probate court judge without the usual notice and hearing when there is an imminent risk to the proposed ward's health, safety, or welfare. Under ORC 2111.02(C), the petitioner must show that the proposed ward is in immediate danger and that there is insufficient time to complete the normal process. An emergency appointment is temporary — typically 72 hours, though courts can extend it — and triggers an expedited hearing at which the proposed ward and other interested parties can be heard. Emergency guardianships are appropriate when an elderly person is being financially exploited, when a disabled adult is in a dangerous living situation, or when a child requires immediate protection.`,
  },
  {
    question: `What are the alternatives to guardianship in Ohio?`,
    answer: `Because guardianship removes fundamental rights — the right to contract, to choose where to live, to make medical decisions — Ohio courts require petitioners to show that less restrictive alternatives are inadequate before appointing a guardian. Key alternatives include: a durable financial power of attorney (ORC 1337.01), which allows an agent to manage financial affairs without court involvement; a healthcare power of attorney or proxy (ORC 1337.12), which authorizes medical decision-making; a representative payee designation with the Social Security Administration for managing SSI or SSDI benefits; a living will or advance directive (ORC 2133.02); and in appropriate cases, a supported decision-making agreement (recognized under Ohio's Uniform Guardianship Act, ORC Chapter 2135). Proactive planning with these documents can avoid the need for guardianship entirely — but if the person has already lost capacity, these tools are no longer available and guardianship through the courts becomes necessary.`,
  },
  {
    question: `How does Ohio's Uniform Guardianship, Conservatorship, and Other Protective Arrangements Act affect me?`,
    answer: `Ohio enacted ORC Chapter 2135 — the Uniform Guardianship, Conservatorship, and Other Protective Arrangements Act — effective April 4, 2021. This law modernized Ohio's guardianship statutes to emphasize: the right of individuals to participate in decisions about their own lives to the maximum extent possible; the preference for limited guardianship over plenary guardianship; the explicit recognition of supported decision-making as an alternative to guardianship; and strengthened procedural rights for proposed wards, including the right to appointed counsel. If you are involved in a guardianship matter — whether as a petitioner, a proposed ward, a current guardian, or a concerned family member — understanding both ORC 2111 and ORC 2135 is important, as courts now apply a more rights-centered framework.`,
  },
  {
    question: `What does a guardianship attorney do and how can Jwayyed Law LLC help?`,
    answer: `A guardianship attorney assists with every stage of the process: evaluating whether guardianship is the right tool or whether a less restrictive alternative is available; preparing and filing the petition and supporting documentation with the appropriate probate court; attending the guardianship hearing and presenting evidence of incapacity; advising the appointed guardian on their ongoing duties; preparing inventories and annual accountings; seeking court approval for significant transactions; and, when necessary, representing clients in contested guardianship proceedings where family members disagree or the proposed ward contests the appointment. Jwayyed Law LLC handles both petitioning for new guardianships and advising existing guardians on compliance, in Franklin County and throughout Ohio. Call (614) 285-5482 for a consultation.`,
  },
];

export default function GuardianshipsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Guardianships Lawyer"
        description="Helping Ohio families protect incapacitated adults and minors through the guardianship process, with experienced guidance from petition through annual reporting requirements."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Guardianships in Ohio: Protecting Those Who Cannot Protect Themselves
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When a loved one loses the ability to make sound decisions due to dementia, intellectual disability, traumatic brain injury, severe mental illness, or any other cause, Ohio law provides a legal mechanism to protect them: guardianship. Under ORC Chapter 2111, a probate court can appoint a guardian — a person legally authorized to make personal, medical, and financial decisions on behalf of another individual called the ward. Guardianship is one of the most powerful legal interventions available because it effectively overrides the ward\'s independent decision-making authority, which is why Ohio courts require clear and convincing evidence of incapacity and must find that guardianship is the least restrictive available option before appointing a guardian.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio\'s guardianship law was significantly modernized by the 2021 enactment of ORC Chapter 2135, the Uniform Guardianship, Conservatorship, and Other Protective Arrangements Act. This law strengthened the rights of proposed wards — including the right to appointed counsel, the right to attend hearings, and the right to present evidence — and explicitly directed courts to consider less restrictive alternatives such as supported decision-making agreements before imposing guardianship. Navigating both Chapter 2111 and Chapter 2135 requires legal counsel who understands how these two statutory frameworks interact in modern Ohio probate court practice.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Jwayyed Law LLC assists families across Columbus, Franklin County, and throughout Ohio with all aspects of guardianship matters — from evaluating whether guardianship is necessary to preparing petitions, attending hearings, and advising appointed guardians on their ongoing duties. If your parent has been diagnosed with Alzheimer\'s disease, if a family member with developmental disabilities is aging out of school-based support systems, if an adult child has suffered a severe injury, or if you are concerned that a vulnerable person is being financially exploited — our firm is ready to help you assess your options and act quickly when necessary.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              The Guardianship Process in Ohio Probate Court
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Establishing a guardianship requires filing a complaint in the probate court of the county where the proposed ward lives — for Columbus residents, that is the Franklin County Probate Court, located on South High Street. The complaint must describe the proposed ward\'s condition, identify the basis for claiming incapacity, and request a specific type of guardianship (person, estate, or both). The court will require a statement from a physician, psychologist, or other licensed health professional attesting to the proposed ward\'s incapacity.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              After the complaint is filed, the court appoints a guardian ad litem — an attorney who independently investigates the proposed ward\'s circumstances and reports to the court. The proposed ward must be served with notice of the hearing and has the right to retain their own attorney, attend the hearing, and present evidence opposing the petition. At the hearing, the probate judge evaluates all evidence and, if satisfied that incapacity exists and guardianship is appropriate, issues letters of guardianship. In Franklin County, the process typically takes four to eight weeks from filing to appointment for uncontested cases; contested cases can take significantly longer and may involve depositions, expert testimony, and multiple hearings.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Guardian Duties, Reporting, and Accountability
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio guardians are fiduciaries — they owe a duty of loyalty and care to the ward and are accountable to the probate court. A guardian of the estate must file a complete inventory of the ward\'s assets within 90 days of appointment and must file annual accountings showing every dollar received and every dollar spent, with supporting documentation. A guardian of the person must file an annual report describing the ward\'s current condition, medical treatment, living arrangements, and any significant changes. Court approval is required for major decisions: selling real estate, making large expenditures, authorizing certain invasive medical procedures, or moving the ward to a different residential facility. Guardians who fail to file required reports face sanctions including removal, surcharge (personal liability for losses), and referral to the prosecutor for criminal charges in cases of financial exploitation.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Proactive planning remains the best way to avoid guardianship entirely. If a person retains legal capacity and executes a <Link href="/other-services/powers-of-attorney" className="text-[#b87333] underline hover:text-[#a06828]">durable power of attorney</Link> and healthcare proxy, their chosen agent can manage their affairs without court involvement, preserving both privacy and the individual\'s dignity. Similarly, a <Link href="/trusts/revocable-living-trusts" className="text-[#b87333] underline hover:text-[#a06828]">revocable living trust</Link> with a named successor trustee provides seamless financial management at incapacity without any court process. These tools require advance planning — once capacity is lost, they are no longer available, and guardianship becomes the only option.
            </p>

            <LocationsWeServe title="Other Services" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/other-services/powers-of-attorney" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Powers of Attorney</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Avoid guardianship with advance planning</span>
              </Link>
              <Link href="/trusts/revocable-living-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Revocable Living Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Manage assets at incapacity without court involvement</span>
              </Link>
              <Link href="/trusts/special-needs-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Special Needs Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Financial protection for individuals with disabilities</span>
              </Link>
              <Link href="/other-services/probate" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Probate Administration</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Estate administration through Ohio probate court</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
