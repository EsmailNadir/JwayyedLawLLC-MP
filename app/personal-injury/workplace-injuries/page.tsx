import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Ohio Workplace Injury Lawyer',
  description: 'Ohio workplace injury and workers compensation attorney. ORC Chapter 4123, BWC claims, third-party lawsuits, employer retaliation (ORC 4123.90). Call (614) 285-5482.',
  keywords: ['workplace injury lawyer Columbus OH', 'workers compensation attorney Ohio', 'BWC claim lawyer', 'Franklin County workplace injury attorney', 'ORC 4123 workers comp Ohio'],
  openGraph: {
    title: 'Ohio Workplace Injury Lawyer | Columbus',
    url: 'https://www.jjlawohio.com/personal-injury/workplace-injuries',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/personal-injury/workplace-injuries' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Workplace Injuries', href: '/personal-injury/workplace-injuries' },
];

const faqs = [
  {
    question: `How does Ohio's workers' compensation system work?`,
    answer: `Ohio operates one of the few state-run workers' compensation systems in the country through the Ohio Bureau of Workers' Compensation (BWC). Under ORC Chapter 4123, most employers in Ohio are required to carry workers' comp coverage through the state BWC fund (rather than private insurance). When a worker is injured on the job, they report the injury to their employer, and a First Report of Injury (FROI) is filed with the BWC. The BWC then allows or denies the claim. If denied, the worker can appeal to the Industrial Commission of Ohio (ICO), which holds hearings and decides disputed claims. Coverage applies to employees — not independent contractors — performing services in Ohio under ORC 4123.01.`,
  },
  {
    question: `What benefits does Ohio workers' compensation provide?`,
    answer: `Ohio workers' comp benefits under ORC Chapter 4123 include: medical treatment coverage for all necessary and related medical care; Temporary Total Disability (TTD) payments — typically two-thirds of your average weekly wage — while you are unable to work; Permanent Partial Disability (PPD) benefits for a lasting impairment that does not prevent all work; Permanent Total Disability (PTD) benefits if you can no longer perform any sustained remunerative employment; wage-loss compensation if you return to a lower-paying job; and death benefits for dependents of workers killed on the job, including funeral expenses. Vocational rehabilitation services are also available to help injured workers return to the workforce in a modified capacity.`,
  },
  {
    question: `Can I sue my employer directly for a workplace injury in Ohio?`,
    answer: `In most cases, no. Ohio's workers' compensation system under ORC Chapter 4123 is the exclusive remedy against your employer for on-the-job injuries. This means you generally cannot sue your employer for negligence in a civil lawsuit — workers' comp benefits are the trade-off. There is one narrow exception: the "intentional tort" exception under ORC 2745.01 allows a civil lawsuit against an employer who deliberately intended to harm an employee, or who removed a safety guard or device with deliberate intent to injure. These cases are difficult to prove and are the exception, not the rule. However, you may separately pursue a civil lawsuit against third parties — see below.`,
  },
  {
    question: `What is a third-party workplace injury claim?`,
    answer: `A third-party claim is a separate civil lawsuit against someone other than your employer whose negligence contributed to your workplace injury. Common third-party defendants include: the manufacturer of defective equipment or machinery that caused your injury (product liability); the owner of the premises where you were working if it was not your employer's property (premises liability); a negligent driver who caused a car accident while you were driving for work; or a contractor or subcontractor who created a dangerous condition on a jobsite. Third-party claims are valuable because they allow recovery for pain and suffering and other non-economic damages that workers' comp does not cover. You can pursue a workers' comp claim and a third-party lawsuit simultaneously, though the BWC may have a lien on part of your third-party recovery.`,
  },
  {
    question: `What if my employer does not have workers' compensation insurance?`,
    answer: `Ohio law requires most employers to maintain workers' comp coverage through the BWC. If your employer is illegally uninsured, you still have options. The Ohio BWC has a Uninsured Employer Fund that provides benefits to injured workers whose employers illegally failed to carry coverage. You may also be able to sue the uninsured employer directly in civil court, because the employer loses its immunity from civil suit when it fails to maintain required coverage. Working with an attorney is essential in uninsured employer situations — you must navigate both the BWC process and potential civil litigation to maximize your recovery.`,
  },
  {
    question: `What is the difference between workers' comp and a personal injury lawsuit?`,
    answer: `Workers' compensation is a no-fault system — you do not need to prove your employer was negligent to receive benefits, but your recovery is limited to medical expenses, disability wage replacement, and similar economic benefits. You cannot recover for pain and suffering through workers' comp. A personal injury lawsuit (available against third parties, not your employer) is a fault-based system — you must prove negligence — but allows recovery for the full range of damages including pain and suffering, emotional distress, and full lost wages without the wage-cap limitations. When both are available, pursuing both a workers' comp claim and a third-party lawsuit is usually the best strategy to maximize total compensation.`,
  },
  {
    question: `How do I file an Ohio BWC workers' compensation claim?`,
    answer: `To file an Ohio BWC claim: (1) Report your injury to your employer immediately — delays can complicate your claim. (2) Seek medical treatment from a BWC-authorized provider (your employer may direct you to a specific provider initially). (3) Your employer is required to file a First Report of Injury (FROI) with the BWC, but you can also file directly at bwc.ohio.gov. (4) The BWC will investigate and issue an order allowing or denying the claim. (5) If denied, you have the right to appeal to the Industrial Commission of Ohio. The one-year statute of limitations under ORC 4123.84 runs from the date of injury or the date you discovered the injury was work-related. Acting quickly and documenting your injury thoroughly from the beginning are critical.`,
  },
  {
    question: `Can my employer retaliate against me for filing a workers' compensation claim?`,
    answer: `No. Ohio Revised Code 4123.90 expressly prohibits employers from retaliating against employees for filing a workers' compensation claim, for exercising any right under the workers' compensation system, or for testifying in a workers' comp proceeding. Prohibited retaliation includes termination, demotion, reduction in hours or pay, or any other adverse employment action taken because of the workers' comp claim. If your employer retaliates, you have a right to file a civil lawsuit under ORC 4123.90 seeking reinstatement, back pay, and other remedies. These retaliation claims must be filed within 180 days of the retaliatory act, so you must act quickly.`,
  },
];

export default function WorkplaceInjuriesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Workplace Injury Lawyer"
        description="Injured at work in Ohio? We navigate the BWC workers' compensation system and pursue third-party civil claims to maximize every dollar of compensation available to you."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Ohio Workplace Injuries: Workers' Compensation and Third-Party Claims
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio operates a state-run workers' compensation system through the Ohio Bureau of Workers' Compensation (BWC), making it one of the few states where most employers are required to insure through a state fund rather than private carriers. The system is governed by ORC Chapter 4123. When an employee is hurt on the job, workers' comp provides no-fault benefits covering medical treatment and a portion of lost wages — but those benefits are the exclusive remedy against the employer itself. Understanding what workers' comp covers, what it does not cover, and when a separate civil lawsuit against a third party is possible is essential to protecting your financial recovery after a workplace injury.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Workers' compensation under ORC 4123.01 covers employees — but not independent contractors — performing services in Ohio. Benefits include payment for all necessary medical treatment, Temporary Total Disability (TTD) compensation while you cannot work (typically two-thirds of your average weekly wage, subject to BWC maximums), Permanent Partial Disability (PPD) for lasting impairments, Permanent Total Disability (PTD) for workers who can no longer perform any sustained employment, and death benefits for the dependents of workers killed on the job. Disputed claims are appealed to the Industrial Commission of Ohio (ICO), which conducts administrative hearings. Further appeals go through the Ohio court system.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              One of the most important — and frequently overlooked — aspects of workplace injury law in Ohio is the possibility of a third-party civil lawsuit in addition to a workers' comp claim. If your workplace injury was caused by someone other than your employer, that third party can be sued in civil court where the full range of damages is available, including pain and suffering, full lost income, and loss of quality of life. Common third-party defendants include manufacturers of defective machinery or tools (product liability), owners of worksites that are not your employer's property (premises liability), and negligent drivers who caused accidents while you were working. The BWC will typically assert a lien on part of any third-party recovery to recoup the benefits it paid — your attorney will manage this process.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio employers are prohibited from retaliating against workers who file BWC claims. ORC 4123.90 makes it unlawful for any employer to discharge, demote, reassign, or otherwise take adverse action against an employee because they filed a workers' compensation claim, testified in a workers' comp proceeding, or exercised any other right under the workers' comp system. A retaliation claim under ORC 4123.90 must be filed within 180 days of the retaliatory act and can result in reinstatement, back pay, and attorney fees. If you believe you have been fired or disciplined in connection with filing a claim, consult an attorney immediately.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The statute of limitations for filing a BWC claim is one year from the date of injury under ORC 4123.84. For occupational diseases (conditions that develop over time from workplace exposures), different accrual rules apply. If your employer is illegally uninsured, the BWC has an Uninsured Employer Fund that provides benefits, and the employer loses its civil immunity, potentially opening the door to a direct negligence lawsuit. OSHA violations by your employer — while not creating a private right of action in themselves — can be strong evidence of negligence in a third-party claim and can affect the overall investigation of the workplace accident.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Workplace Injury Cases We Handle
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li>Ohio BWC workers' compensation claims — initial filings and denied claim appeals</li>
              <li>Third-party product liability claims for defective workplace equipment and machinery</li>
              <li>Construction site injuries — third-party premises liability and contractor negligence</li>
              <li>Workplace vehicle accidents and delivery driver injuries</li>
              <li>Occupational disease and repetitive stress injury claims</li>
              <li>Employer retaliation claims under ORC 4123.90</li>
              <li>Workers' comp claims for workers with uninsured employers</li>
              <li>Permanent total and permanent partial disability determinations</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Choose Jwayyed Law LLC
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Navigating the Ohio BWC system while simultaneously evaluating potential third-party civil claims requires an attorney who understands both paths. At Jwayyed Law LLC, we help injured Ohio workers pursue every available avenue of recovery — including challenging denied BWC claims before the Industrial Commission and filing civil lawsuits against negligent third parties. We handle workplace injury cases on a contingency fee basis with no upfront costs.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We also handle related matters including{' '}
              <Link href="/personal-injury/premises-liability" className="text-[#b87333] underline hover:opacity-80">premises liability</Link>,{' '}
              <Link href="/personal-injury/catastrophic-injuries" className="text-[#b87333] underline hover:opacity-80">catastrophic injury claims</Link>, and other{' '}
              <Link href="/personal-injury" className="text-[#b87333] underline hover:opacity-80">personal injury matters</Link> throughout Ohio.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Call <a href="tel:6142855482" className="text-[#b87333] underline hover:text-[#a06828]">(614) 285-5482</a> or <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">schedule a consultation online</Link>. Learn about <Link href="/our-law-firm/blog/personal-injury-ohio-statute-of-limitations" className="text-[#b87333] underline hover:text-[#a06828]">Ohio&apos;s statute of limitations for injury claims</Link>.
            </p>

            <LocationsWeServe title="Personal Injury" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/personal-injury/catastrophic-injuries" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Catastrophic Injuries</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Severe and life-altering injury claims</span>
              </Link>
              <Link href="/personal-injury/car-accidents" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Car Accidents</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Motor vehicle collision claims throughout Ohio</span>
              </Link>
              <Link href="/personal-injury/slip-and-fall" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Slip & Fall Injuries</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Premises liability claims for unsafe conditions</span>
              </Link>
              <Link href="/personal-injury/premises-liability" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Premises Liability</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Property owner negligence and unsafe conditions</span>
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
