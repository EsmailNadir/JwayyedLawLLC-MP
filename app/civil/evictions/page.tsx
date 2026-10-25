import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Eviction Lawyer in Ohio',
  description:
    'Ohio evictions for landlords and tenants: the 3-day notice, the court hearing, the writ of possession and tenant defenses. Call (614) 285-5482.',
  keywords: ['eviction lawyer Columbus OH', 'eviction attorney Ohio', 'landlord eviction lawyer', 'Franklin County eviction attorney'],
  openGraph: {
    title: 'Eviction Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Notice, filing, hearing and defenses in an Ohio eviction, for landlords and tenants.',
    url: 'https://www.jjlawohio.com/civil/evictions',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/civil/evictions' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Evictions', href: '/civil/evictions' },
];

const faqs = [
  {
    question: 'What is the eviction process in Ohio?',
    answer:
      'Under Ohio Revised Code Chapter 1923, a landlord must file an eviction action (forcible entry and detainer) in court, serve the tenant, get a court order and have the sheriff carry out the eviction. Self-help eviction, such as changing the locks or removing property, is illegal. Evictions move quickly, so get legal help as soon as the case starts.',
  },
  {
    question: 'What are grounds for eviction in Ohio?',
    answer:
      'Under ORC Chapter 1923, grounds include nonpayment of rent, lease violations, property damage, illegal activity, the end of the lease term and a holdover tenancy. The landlord must have legal grounds and follow the proper procedure. Evicting a tenant in retaliation for exercising tenant rights is illegal and can make the landlord liable.',
  },
  {
    question: 'Can tenants fight eviction in Ohio?',
    answer:
      'Yes. Defenses include lack of proper notice, defective eviction proceedings, habitability violations, retaliatory eviction, discrimination, payment of rent and other legal defenses. An attorney can identify which ones apply.',
  },
  {
    question: 'What is the timeline for eviction in Ohio?',
    answer:
      'The landlord must give proper notice (3 days for nonpayment, 30 days for lease violations), file the eviction action, serve the tenant, get a court order and have the sheriff carry it out. Depending on the defenses raised, the process can take weeks to months.',
  },
  {
    question: 'Do I need an eviction attorney?',
    answer:
      'Evictions move quickly. An attorney can defend a tenant, handle the proceeding for a landlord, negotiate a settlement and represent you in court. Most attorneys work on hourly fee arrangements and offer consultations.',
  },
  {
    question: 'What notice is required before filing an eviction in Ohio?',
    answer:
      'Under Ohio Revised Code 1923.04, the landlord must give the tenant written notice before filing. For nonpayment of rent it is a 3-day written notice to vacate. For other lease violations, the lease or the applicable statute sets the period, commonly 30 days for a month-to-month tenancy. The notice must be served properly: by personal delivery, by leaving a copy at the unit, or by mail. Defective notice (wrong content, improper service or not enough time) can get the case dismissed.',
  },
  {
    question: 'What is the eviction timeline in Ohio from filing to writ of possession?',
    answer:
      "After the notice expires, the landlord files a forcible entry and detainer action in municipal or county court. A hearing is typically set within 7 to 10 days of filing. If the court rules for the landlord, judgment is entered and a writ of execution (writ of possession) can issue after the appeal period. The sheriff then carries out the writ and removes the tenant. In uncontested cases the whole process commonly takes 3 to 6 weeks from filing. It can take longer if the tenant raises defenses, asks for continuances or appeals.",
  },
  {
    question: 'What are tenant defenses to eviction in Ohio?',
    answer:
      "Improper or defective notice under ORC 1923.04 can get the case dismissed. Retaliatory eviction is prohibited under ORC 5321.02: a landlord may not evict a tenant for reporting code violations, joining a tenant organization or exercising other protected rights. Habitability violations under ORC 5321.07 may give a defense or counterclaim when the landlord has not kept the premises fit and habitable. And a landlord who accepts rent after serving a notice to vacate may waive the notice and have to start over.",
  },
];

const RELATED = [
  { href: '/civil', title: 'All civil matters', subtitle: 'Including landlord-tenant disputes, security deposit claims, habitability issues and lease enforcement' },
  { href: '/civil/breach-of-contract', title: 'Breach of contract', subtitle: 'Enforcing or defending contract obligations and recovering damages' },
  { href: '/civil/real-estate-disputes', title: 'Real estate disputes', subtitle: 'Title disputes, boundary issues, quiet title actions and property litigation' },
  { href: '/civil/debt-collection-defense', title: 'Debt collection defense', subtitle: 'Defending a collection lawsuit and unfair collection practices' },
];

export default function EvictionsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Evictions in Ohio"
        description="An Ohio eviction can start with a 3-day notice and reach a hearing within 7 to 10 days of filing. The firm represents both landlords and tenants."
      />

      <KeyFacts
        facts={[
          { figure: '3 days', label: 'written notice to vacate for nonpayment of rent' },
          { figure: '30 days', label: 'notice commonly required for other lease violations' },
          { figure: '7 to 10 days', label: 'from filing to the hearing, typically' },
          { figure: '3 to 6 weeks', label: 'from filing to removal in an uncontested case' },
        ]}
      />

      <Section
        title="How Ohio evictions work"
        intro={
          <p>
            Ohio evictions follow Ohio Revised Code Chapter 1923, and the landlord must follow each step. Tenant rights come from ORC
            Chapter 5321.
          </p>
        }
      >
        <p>
          The firm represents landlords seeking an eviction and tenants defending one, in Columbus, Cincinnati, Dayton and throughout
          Ohio, as part of its <Link href="/civil">civil litigation practice</Link>. Evictions are closely tied to wider landlord-tenant
          disputes such as repair duties and security deposits.
        </p>
        <p>
          For a tenant, an eviction can mean losing housing, having property removed and damaged credit, and it can happen fast. Grounds
          include nonpayment of rent, lease violations, property damage, illegal activity, the end of the lease term and a holdover
          tenancy.
        </p>
        <Callout title="Self-help eviction is illegal">
          A landlord may not change the locks, remove the tenant&rsquo;s property or cut off utilities without a court order. Doing so
          can make the landlord liable for damages.
        </Callout>
      </Section>

      <Section title="Notice requirements" tone="ice">
        <FactTable
          title="Notice before filing (ORC 1923.04)"
          rows={[
            { label: 'Nonpayment of rent', value: '3-day written notice to vacate.' },
            { label: 'Other lease violations', value: '30 days, or the period the lease or statute sets (commonly 30 days for a month-to-month tenancy).' },
            { label: 'Service', value: 'Personal delivery, leaving a copy at the unit, or mail.' },
            { label: 'Defective notice', value: 'Wrong content, improper service or too little time can get the case dismissed.' },
          ]}
        />
      </Section>

      <LocationsWeServe title="Civil" />

      <Section title="From filing to the sheriff" tone="ice">
        <Steps
          steps={[
            {
              title: 'Notice',
              body: 'The landlord serves the required written notice and waits for it to expire.',
            },
            {
              title: 'Filing',
              body: 'The landlord files a forcible entry and detainer action in Municipal Court or Common Pleas Court, depending on jurisdiction. The complaint must state the grounds and be served on the tenant, who can respond and raise defenses.',
            },
            {
              title: 'Hearing',
              body: 'Typically set within 7 to 10 days of filing. This is where the tenant raises defenses.',
            },
            {
              title: 'Judgment and writ',
              body: 'If the landlord wins, judgment is entered and a writ of possession can issue after the appeal period.',
            },
            {
              title: 'Execution',
              body: 'The sheriff carries out the writ and removes the tenant and property. Tenants have limited time to remove property after the order.',
            },
          ]}
        />
        <p>Defenses, continuances or an appeal can stretch the process from weeks to months.</p>
      </Section>

      <Section title="Tenant defenses to eviction">
        <PointGrid
          points={[
            {
              title: 'Lack of proper notice',
              body: 'Notice that is defective, improperly served or missing required information can lead to dismissal.',
            },
            {
              title: 'Habitability violations',
              body: 'When the landlord fails to keep the premises habitable (no heat, no water, needed repairs not made), ORC 5321.07 may give a defense or counterclaim. Tenants may also be able to withhold rent or make repairs and deduct the cost.',
            },
            {
              title: 'Retaliatory eviction',
              body: 'Illegal under Ohio Revised Code 5321.02 when it punishes a tenant for reporting code violations or joining a tenant organization. The landlord may be liable for damages.',
            },
            {
              title: 'Payment of rent',
              body: 'Paying rent or curing the lease violation before an eviction order issues may get the case dismissed. Landlords must accept proper payment.',
            },
            {
              title: 'Rent accepted after notice',
              body: 'A landlord who accepts rent after serving a notice to vacate may waive the notice and have to start over.',
            },
            {
              title: 'Other defenses',
              body: 'Defective proceedings and discrimination can also defeat an eviction.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does in an eviction" tone="ice">
        <PointGrid
          points={[
            { title: 'For landlords', body: 'Drafts and files the eviction action, serves notice properly and represents you in court to obtain the order.' },
            { title: 'For tenants', body: 'Raises the defenses that apply, from notice defects to habitability, retaliation, discrimination or payment of rent.' },
            { title: 'Negotiates', body: 'Payment plans, lease modifications or move-out agreements that resolve the dispute without an eviction when possible.' },
            { title: 'Builds the record', body: 'Gathers documents and evidence to support your position at the hearing.' },
            { title: 'Represents you in court', body: 'Presents the evidence and the defenses at the hearing.' },
            { title: 'Handles appeals', body: 'Appeals an eviction order when needed.' },
          ]}
        />
        <p>
          If you are facing an eviction proceeding, <Link href="/contact">contact Jwayyed Law LLC</Link> right away to schedule a
          consultation.
        </p>
      </Section>

      <Section title="Related civil matters">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
