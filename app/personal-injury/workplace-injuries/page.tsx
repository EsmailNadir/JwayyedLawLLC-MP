import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Ohio Workplace Injury Lawyer',
  description:
    'Hurt at work in Ohio? BWC claims under ORC Chapter 4123, the 1-year filing deadline, third-party lawsuits and retaliation claims. Call (614) 285-5482.',
  keywords: ['workplace injury lawyer Columbus OH', 'workers compensation attorney Ohio', 'BWC claim lawyer', 'Franklin County workplace injury attorney', 'Ohio workplace injury law', 'ORC 4123 workers comp Ohio'],
  openGraph: {
    title: 'Ohio Workplace Injury Lawyer | Columbus | Jwayyed Law LLC',
    description: "Ohio workers' compensation claims and third-party workplace injury lawsuits.",
    url: 'https://www.jjlawohio.com/personal-injury/workplace-injuries',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/personal-injury/workplace-injuries' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Workplace Injuries', href: '/personal-injury/workplace-injuries' },
];

const faqs = [
  {
    question: "How does Ohio's workers' compensation system work?",
    answer:
      "Ohio runs one of the few state-run workers' compensation systems in the country, through the Ohio Bureau of Workers' Compensation (BWC). Under ORC Chapter 4123, most Ohio employers must carry coverage through the state BWC fund rather than private insurance. When you are hurt on the job, you report it to your employer and a First Report of Injury (FROI) is filed with the BWC, which allows or denies the claim. A denial can be appealed to the Industrial Commission of Ohio (ICO), which holds hearings and decides disputed claims. Under ORC 4123.01, coverage applies to employees performing services in Ohio, not to independent contractors.",
  },
  {
    question: "What benefits does Ohio workers' compensation provide?",
    answer:
      'Benefits under ORC Chapter 4123 include coverage for all necessary and related medical care; Temporary Total Disability (TTD) payments, typically two-thirds of your average weekly wage, while you cannot work; Permanent Partial Disability (PPD) for a lasting impairment that does not prevent all work; Permanent Total Disability (PTD) if you can no longer do any sustained remunerative employment; wage-loss compensation if you return to a lower-paying job; and death benefits, including funeral expenses, for the dependents of workers killed on the job. Vocational rehabilitation is also available to help injured workers return to work in a modified capacity.',
  },
  {
    question: 'Can I sue my employer directly for a workplace injury in Ohio?',
    answer:
      'In most cases, no. Workers\' compensation under ORC Chapter 4123 is the exclusive remedy against your employer for on-the-job injuries, so you generally cannot sue your employer for negligence; the benefits are the trade-off. The narrow exception is the "intentional tort" exception under ORC 2745.01, which allows a lawsuit against an employer who deliberately intended to harm an employee, or who removed a safety guard or device with deliberate intent to injure. These cases are hard to prove and rare. You may separately sue third parties, as explained below.',
  },
  {
    question: 'What is a third-party workplace injury claim?',
    answer:
      "It is a separate civil lawsuit against someone other than your employer whose negligence contributed to your injury. Common third-party defendants are the manufacturer of defective equipment or machinery (product liability), the owner of a worksite that is not your employer's property (premises liability), a negligent driver who caused a crash while you were driving for work, and a contractor or subcontractor who created a dangerous condition on a jobsite. These claims matter because they allow recovery for pain and suffering and other non-economic damages that workers' comp does not cover. You can pursue workers' comp and a third-party lawsuit at the same time, though the BWC may have a lien on part of the third-party recovery.",
  },
  {
    question: "What if my employer does not have workers' compensation insurance?",
    answer:
      "Ohio requires most employers to carry coverage through the BWC. If your employer is illegally uninsured, the BWC's Uninsured Employer Fund provides benefits to injured workers. You may also be able to sue the employer directly, because an employer that fails to keep required coverage loses its immunity from civil suit. An attorney can handle both the BWC process and any civil case.",
  },
  {
    question: "What is the difference between workers' comp and a personal injury lawsuit?",
    answer:
      "Workers' comp is no-fault: you do not have to prove your employer was negligent, but recovery is limited to medical expenses, disability wage replacement and similar economic benefits. You cannot recover for pain and suffering. A personal injury lawsuit (against third parties, not your employer) is fault-based, so you must prove negligence, but it allows the full range of damages, including pain and suffering, emotional distress and full lost wages without wage caps. When both are available, pursuing both is usually the way to the largest total recovery.",
  },
  {
    question: "How do I file an Ohio BWC workers' compensation claim?",
    answer:
      '(1) Report the injury to your employer right away; delays can complicate the claim. (2) Get treatment from a BWC-authorized provider (your employer may direct you to a specific provider at first). (3) Your employer must file a First Report of Injury (FROI) with the BWC, but you can also file directly at bwc.ohio.gov. (4) The BWC investigates and issues an order allowing or denying the claim. (5) If it is denied, you can appeal to the Industrial Commission of Ohio. The 1-year statute of limitations under ORC 4123.84 runs from the date of injury or the date you discovered the injury was work-related. Act quickly and document the injury from the start.',
  },
  {
    question: "Can my employer retaliate against me for filing a workers' compensation claim?",
    answer:
      "No. Ohio Revised Code 4123.90 prohibits employers from retaliating against employees for filing a workers' comp claim, exercising any right under the system, or testifying in a workers' comp proceeding. Prohibited retaliation includes firing, demotion, cuts to hours or pay, or any other adverse action taken because of the claim. If it happens, you can sue under ORC 4123.90 for reinstatement, back pay and other remedies. These claims must be filed within 180 days of the retaliatory act.",
  },
];

const RELATED = [
  { href: '/personal-injury/catastrophic-injuries', title: 'Catastrophic injuries', subtitle: 'Severe and life-altering injury claims' },
  { href: '/personal-injury/car-accidents', title: 'Car accidents', subtitle: 'Motor vehicle collision claims throughout Ohio' },
  { href: '/personal-injury/slip-and-fall', title: 'Slip and fall injuries', subtitle: 'Premises liability claims for unsafe conditions' },
  { href: '/personal-injury/premises-liability', title: 'Premises liability', subtitle: 'Property owner negligence and unsafe conditions' },
];

export default function WorkplaceInjuriesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Workplace injury claims in Ohio"
        description="An on-the-job injury in Ohio usually means a BWC claim, which must be filed within 1 year of the injury. If someone other than your employer caused it, you may also have a civil lawsuit."
      />

      <KeyFacts
        facts={[
          { figure: '1 year', label: 'to file a BWC claim, from the date of injury (ORC 4123.84)' },
          { figure: 'Two-thirds', label: 'of your average weekly wage, the typical TTD payment' },
          { figure: '180 days', label: 'to file a retaliation claim under ORC 4123.90' },
        ]}
      />

      <Section
        title="How Ohio workers' compensation works"
        intro={
          <p>
            Ohio runs a state-run system through the Ohio Bureau of Workers&rsquo; Compensation (BWC), governed by ORC Chapter 4123.
            It is one of the few states where most employers must insure through a state fund instead of private carriers.
          </p>
        }
      >
        <p>
          Workers&rsquo; comp pays no-fault benefits for medical treatment and part of your lost wages. Those benefits are the
          exclusive remedy against your employer. Under ORC 4123.01, coverage applies to employees performing services in Ohio, not
          independent contractors.
        </p>
        <p>
          Disputed claims are appealed to the Industrial Commission of Ohio (ICO), which holds administrative hearings. Further appeals
          go through the Ohio courts.
        </p>
      </Section>

      <Section title="Deadlines and benefits" tone="ice">
        <FactTable
          title="Deadlines"
          rows={[
            { label: 'BWC claim', value: '1 year from the date of injury under ORC 4123.84, or from when you discovered the injury was work-related.' },
            { label: 'Occupational disease', value: 'Different accrual rules apply to conditions that develop over time from workplace exposure.' },
            { label: 'Retaliation claim', value: '180 days from the retaliatory act, under ORC 4123.90.' },
          ]}
        />
        <FactTable
          title="Workers' comp benefits (ORC Chapter 4123)"
          rows={[
            { label: 'Medical', value: 'All necessary and related medical treatment.' },
            {
              label: 'Temporary Total Disability',
              value: 'Typically two-thirds of your average weekly wage, subject to BWC maximums, while you cannot work.',
            },
            { label: 'Permanent Partial Disability', value: 'For a lasting impairment that does not prevent all work.' },
            { label: 'Permanent Total Disability', value: 'When you can no longer perform any sustained remunerative employment.' },
            { label: 'Wage loss', value: 'If you return to a lower-paying job.' },
            { label: 'Death benefits', value: 'For dependents of workers killed on the job, including funeral expenses.' },
            { label: 'Vocational rehabilitation', value: 'Help returning to work in a modified capacity.' },
          ]}
          note="Workers' comp does not pay for pain and suffering."
        />
      </Section>

      <Section title="Ways to recover beyond workers' comp">
        <PointGrid
          points={[
            {
              title: 'Third-party lawsuits',
              body: "Against someone other than your employer: a maker of defective machinery or tools, the owner of a worksite that is not your employer's property, a negligent driver, or a contractor who created a jobsite hazard. Pain and suffering, full lost income and loss of quality of life are recoverable. The BWC will typically assert a lien on part of the recovery.",
            },
            {
              title: 'Intentional tort (ORC 2745.01)',
              body: 'A lawsuit against an employer who deliberately intended to harm an employee, or removed a safety guard with deliberate intent to injure. Narrow and hard to prove.',
            },
            {
              title: 'Uninsured employers',
              body: "The BWC's Uninsured Employer Fund pays benefits, and an illegally uninsured employer loses its civil immunity, which can open a direct negligence lawsuit.",
            },
            {
              title: 'OSHA violations',
              body: 'They do not create a private right of action on their own, but can be strong evidence of negligence in a third-party claim.',
            },
          ]}
        />
      </Section>

      <Section title="How a BWC claim moves forward" tone="ice">
        <Steps
          steps={[
            { title: 'Report the injury', body: 'Tell your employer right away. Delays can complicate the claim.' },
            { title: 'Get treatment', body: 'From a BWC-authorized provider. Your employer may direct you to one at first.' },
            {
              title: 'File the claim',
              body: 'Your employer must file a First Report of Injury (FROI) with the BWC. You can also file directly at bwc.ohio.gov.',
            },
            { title: 'BWC decision', body: 'The BWC investigates and issues an order allowing or denying the claim.' },
            { title: 'Appeal if denied', body: 'To the Industrial Commission of Ohio, then through the Ohio courts.' },
          ]}
        />
      </Section>

      <Section title="How a workplace injury lawyer handles your case">
        <PointGrid
          points={[
            {
              title: 'BWC claims',
              body: 'Initial filings, denied claim appeals before the Industrial Commission, and permanent total and permanent partial disability determinations.',
            },
            {
              title: 'Third-party lawsuits',
              body: 'Product liability for defective equipment and machinery, construction site injuries, and workplace vehicle and delivery driver accidents.',
            },
            { title: 'Occupational disease', body: 'Occupational disease and repetitive stress injury claims.' },
            {
              title: 'Retaliation and uninsured employers',
              body: 'Retaliation claims under ORC 4123.90, and claims for workers whose employers are uninsured.',
            },
          ]}
        />
        <Callout title="Fees">Jwayyed Law LLC handles workplace injury cases on a contingency fee basis.</Callout>
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation online</Link>. Learn about{' '}
          <Link href="/our-law-firm/blog/personal-injury-ohio-statute-of-limitations">Ohio&rsquo;s statute of limitations for injury claims</Link>. The firm
          also handles <Link href="/personal-injury/premises-liability">premises liability</Link>,{' '}
          <Link href="/personal-injury/catastrophic-injuries">catastrophic injury claims</Link> and other{' '}
          <Link href="/personal-injury">personal injury matters</Link> throughout Ohio.
        </p>
      </Section>

      <Section title="Related injury claims" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <LocationsWeServe title="Personal Injury" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
