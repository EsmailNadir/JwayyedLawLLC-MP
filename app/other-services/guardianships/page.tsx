import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Guardianships Lawyer in Ohio | Columbus',
  description:
    'Guardianships for incapacitated adults and minors in Ohio probate court: types, the petition and hearing, and a guardian’s reporting duties.',
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
    description: 'Guardianships for incapacitated adults and minors through Ohio probate court.',
    url: 'https://www.jjlawohio.com/other-services/guardianships',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
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
    question: 'What is guardianship in Ohio and when is it necessary?',
    answer:
      "Guardianship is a legal relationship created by the probate court. One person (the guardian) is appointed to make decisions for another (the ward) who cannot make adequate decisions because of incapacity. Incapacity can come from intellectual disability, Alzheimer's disease or other dementia, traumatic brain injury, mental illness, stroke, or minority (being under 18). It is usually needed when a person cannot manage their own affairs and no adequate less restrictive alternative, such as a durable power of attorney or healthcare proxy, is in place. Ohio courts must find that guardianship is the least restrictive available intervention before appointing a guardian.",
  },
  {
    question: 'What are the types of guardianship in Ohio?',
    answer:
      "ORC Chapter 2111 recognizes three basic types. A guardian of the person decides on the ward's physical care, medical treatment and living arrangements. A guardian of the estate manages the ward's finances: collecting income, paying bills, managing investments, filing tax returns and accounting to the court. A guardian of the person and estate does both and is the most common appointment for a fully incapacitated adult. Ohio also distinguishes plenary guardianship (full authority over all personal or financial decisions) from limited guardianship (authority over specific decisions only), and courts must limit a guardianship to what is needed to protect the ward.",
  },
  {
    question: "How does Ohio's guardianship process work?",
    answer:
      "The petitioner files a complaint in the probate court of the county where the proposed ward lives; in Franklin County, that is the Franklin County Probate Court. The petition must document the incapacity, usually with a physician's statement or psychological evaluation. The court appoints a guardian ad litem to represent the proposed ward's interests and investigates. At the hearing, the proposed ward has the right to attend and contest the petition with their own attorney. If the court finds incapacity by clear and convincing evidence under ORC 2111.02, it issues letters of guardianship. The process typically takes four to eight weeks in Franklin County, longer when contested.",
  },
  {
    question: "What are a guardian's ongoing duties and reporting requirements in Ohio?",
    answer:
      "A guardian of the person files an annual report with the probate court on the ward's physical and mental condition, living situation, medical care and any significant changes in the past year. A guardian of the estate files an inventory of the ward's assets within three months of appointment, then annual accountings of all receipts and disbursements, supported by bank statements and receipts. Major transactions need prior court approval: selling real estate, significant investments, or certain medical procedures. Failing to file reports or follow court orders can lead to removal of the guardian and personal liability.",
  },
  {
    question: 'What is an emergency guardianship in Ohio?',
    answer:
      "An emergency guardianship (also called an ex parte guardianship) may be granted by a probate judge without the usual notice and hearing when there is an imminent risk to the proposed ward's health, safety or welfare. Under ORC 2111.02(C), the petitioner must show the proposed ward is in immediate danger and there is not enough time for the normal process. The appointment is temporary, typically 72 hours, though courts can extend it, and it leads to an expedited hearing where the proposed ward and other interested parties can be heard. It fits cases such as an elderly person being financially exploited, a disabled adult in a dangerous living situation, or a child who needs immediate protection.",
  },
  {
    question: 'What are the alternatives to guardianship in Ohio?',
    answer:
      'Guardianship removes basic rights (to contract, to choose where to live, to make medical decisions), so Ohio courts require petitioners to show that less restrictive alternatives are inadequate. The main alternatives are: a durable financial power of attorney (ORC 1337.01), letting an agent manage finances without court involvement; a healthcare power of attorney or proxy (ORC 1337.12) for medical decisions; a representative payee designation with the Social Security Administration for SSI or SSDI benefits; a living will or advance directive (ORC 2133.02); and, in appropriate cases, a supported decision-making agreement (recognized under Ohio\'s Uniform Guardianship Act, ORC Chapter 2135). These documents can avoid guardianship entirely, but once a person has lost capacity they are no longer available and a court guardianship becomes necessary.',
  },
  {
    question: "How does Ohio's Uniform Guardianship, Conservatorship, and Other Protective Arrangements Act affect me?",
    answer:
      'Ohio enacted ORC Chapter 2135, the Uniform Guardianship, Conservatorship, and Other Protective Arrangements Act, effective April 4, 2021. It emphasizes the right of individuals to take part in decisions about their own lives as far as possible; prefers limited guardianship over plenary guardianship; explicitly recognizes supported decision-making as an alternative; and strengthens procedural rights for proposed wards, including the right to appointed counsel. Whether you are a petitioner, a proposed ward, a current guardian or a concerned family member, both ORC 2111 and ORC 2135 now apply, and courts use a more rights-centered framework.',
  },
  {
    question: 'What does a guardianship attorney do and how can Jwayyed Law LLC help?',
    answer:
      'A guardianship attorney evaluates whether guardianship is the right tool or a less restrictive alternative is available; prepares and files the petition and supporting documents in the right probate court; attends the hearing and presents evidence of incapacity; advises the appointed guardian on ongoing duties; prepares inventories and annual accountings; seeks court approval for significant transactions; and represents clients in contested proceedings where family members disagree or the proposed ward contests the appointment. Jwayyed Law LLC handles new guardianship petitions and advises existing guardians on compliance, in Franklin County and throughout Ohio. Call (614) 285-5482 to schedule a consultation.',
  },
];

const RELATED = [
  { href: '/other-services/powers-of-attorney', title: 'Powers of attorney', subtitle: 'Avoiding guardianship with advance planning' },
  { href: '/trusts/revocable-living-trusts', title: 'Revocable living trusts', subtitle: 'Managing assets at incapacity without court involvement' },
  { href: '/trusts/special-needs-trusts', title: 'Special needs trusts', subtitle: 'Financial protection for individuals with disabilities' },
  { href: '/other-services/probate', title: 'Probate administration', subtitle: 'Estate administration through Ohio probate court' },
];

export default function GuardianshipsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Guardianships in Ohio"
        description="An Ohio probate court appoints a guardian only on clear and convincing evidence of incapacity, and only when guardianship is the least restrictive option. Uncontested cases in Franklin County typically take four to eight weeks."
      />

      <Section
        title="When a guardianship is needed"
        intro={
          <p>
            Under ORC Chapter 2111, a probate court can appoint a guardian to make personal, medical and financial decisions for a
            person, called the ward, who can no longer make them.
          </p>
        }
      >
        <p>
          The cause may be dementia, intellectual disability, traumatic brain injury, severe mental illness or something else. Because a
          guardianship overrides the ward&rsquo;s own decision-making, Ohio courts require clear and convincing evidence of incapacity and
          must find that guardianship is the least restrictive available option.
        </p>
        <p>
          ORC Chapter 2135, the Uniform Guardianship, Conservatorship, and Other Protective Arrangements Act enacted in 2021,
          strengthened proposed wards&rsquo; rights (to appointed counsel, to attend hearings, to present evidence) and directed courts to
          consider less restrictive alternatives such as supported decision-making agreements first. Both chapters apply in Ohio probate
          court today.
        </p>
        <p>
          Families often come to the firm when a parent has been diagnosed with Alzheimer&rsquo;s disease, a family member with
          developmental disabilities is aging out of school-based support, an adult child has suffered a severe injury, or a vulnerable
          person is being financially exploited.
        </p>
      </Section>

      <Section title="Types of guardianship" tone="ice">
        <PointGrid
          points={[
            { title: 'Guardian of the person', body: "Physical care, medical treatment and living arrangements." },
            { title: 'Guardian of the estate', body: 'Income, bills, investments, tax returns and accountings to the court.' },
            { title: 'Person and estate', body: 'Both roles, and the most common appointment for a fully incapacitated adult.' },
            {
              title: 'Plenary or limited',
              body: 'Plenary covers all personal or financial decisions; limited covers only specific ones. Courts must limit a guardianship to what the ward needs.',
            },
            {
              title: 'Emergency (ex parte)',
              body: 'Granted without the usual notice and hearing when there is imminent risk to the proposed ward. Temporary, typically 72 hours, with an expedited hearing to follow.',
            },
          ]}
        />
      </Section>

      <Section title="How the probate court process works">
        <Steps
          steps={[
            {
              title: 'File the complaint',
              body: "In the probate court of the county where the proposed ward lives. For Columbus residents that is the Franklin County Probate Court on South High Street. The complaint describes the proposed ward's condition, the basis for claiming incapacity, and the type of guardianship requested (person, estate or both).",
            },
            {
              title: 'Medical statement',
              body: "The court requires a statement from a physician, psychologist or other licensed health professional on the proposed ward's incapacity.",
            },
            {
              title: 'Guardian ad litem',
              body: "The court appoints a guardian ad litem, an attorney who investigates the proposed ward's circumstances independently and reports to the court.",
            },
            {
              title: 'Notice and hearing',
              body: 'The proposed ward is served with notice and may hire their own attorney, attend the hearing and present evidence against the petition.',
            },
            {
              title: 'Letters of guardianship',
              body: 'If the judge is satisfied that incapacity exists and guardianship is appropriate, the court issues letters of guardianship.',
            },
          ]}
        />
        <Callout title="How long it takes">
          In Franklin County, typically four to eight weeks from filing to appointment for an uncontested case. Contested cases can take
          much longer and may involve depositions, expert testimony and several hearings.
        </Callout>
      </Section>

      <Section title="A guardian's duties and reports" tone="ice">
        <p>A guardian is a fiduciary, owes the ward loyalty and care, and answers to the probate court.</p>
        <FactTable
          title="Reporting and approval requirements"
          rows={[
            { label: 'Inventory', value: "Guardian of the estate: a complete inventory of the ward's assets within 90 days of appointment." },
            { label: 'Annual accounting', value: 'Guardian of the estate: every dollar received and spent, with supporting documents.' },
            {
              label: 'Annual report',
              value: "Guardian of the person: the ward's current condition, medical treatment, living arrangements and any significant changes.",
            },
            {
              label: 'Court approval',
              value: 'Selling real estate, large expenditures, certain invasive medical procedures, or moving the ward to a different residential facility.',
            },
            {
              label: 'Failure to comply',
              value: 'Removal, surcharge (personal liability for losses), and referral to the prosecutor for criminal charges in cases of financial exploitation.',
            },
          ]}
        />
      </Section>

      <Section title="Avoiding guardianship with planning">
        <p>
          A person who still has legal capacity can sign a <Link href="/other-services/powers-of-attorney">durable power of attorney</Link>{' '}
          and healthcare proxy, so the agent they chose can manage their affairs privately and without court involvement. A{' '}
          <Link href="/trusts/revocable-living-trusts">revocable living trust</Link> with a named successor trustee handles financial
          management at incapacity without any court process. Once capacity is lost, these tools are no longer available and
          guardianship is the only option.
        </p>
        <h3>What the firm does</h3>
        <p>
          Jwayyed Law LLC handles guardianship matters in Columbus, Franklin County and throughout Ohio: assessing whether a
          guardianship is needed, preparing petitions, attending hearings and advising appointed guardians on their duties, and acting
          quickly when an emergency appointment is needed.
        </p>
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <LocationsWeServe title="Other Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
