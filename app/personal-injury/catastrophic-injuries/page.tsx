import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Ohio Catastrophic Injury Lawyer | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
  description: 'Ohio catastrophic injury attorney for TBI, spinal cord injury, paralysis, and severe burns. ORC 2323.43 elevated damage caps, life care planning. Call (614) 285-5482.',
  keywords: ['catastrophic injury lawyer Columbus OH', 'catastrophic injury attorney Ohio', 'spinal cord injury lawyer', 'TBI attorney Ohio', 'Franklin County catastrophic injury attorney'],
  openGraph: {
    title: 'Ohio Catastrophic Injury Lawyer | Columbus | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/personal-injury/catastrophic-injuries',
  },
  alternates: { canonical: '/personal-injury/catastrophic-injuries' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Catastrophic Injuries', href: '/personal-injury/catastrophic-injuries' },
];

const faqs = [
  {
    question: `What is a catastrophic injury under Ohio law?`,
    answer: `Ohio Revised Code 2323.43 defines catastrophic injuries — for purposes of elevated non-economic damage caps — as injuries involving permanent and substantial physical deformity, loss of use of a limb, loss of a bodily organ system, or a permanent functional injury that prevents the plaintiff from independently caring for themselves and performing life-sustaining activities. Common catastrophic injuries include traumatic brain injury (TBI), spinal cord injury and paralysis (paraplegia and quadriplegia), severe burns over large body areas, limb amputations, multiple severe fractures with lasting disability, severe facial disfigurement, and permanent loss of sight or hearing. These injuries require a fundamentally different approach to damages than typical personal injury claims.`,
  },
  {
    question: `What are Ohio's damage caps for catastrophic injuries under ORC 2323.43?`,
    answer: `Ohio Revised Code 2323.43 limits non-economic damages (pain and suffering, emotional distress, loss of consortium) in most tort cases to the greater of $250,000 or three times economic damages, with a maximum of $350,000 per plaintiff or $500,000 per occurrence. However, when the injury qualifies as catastrophic — permanent physical deformity, loss of use of a limb, loss of a bodily organ system, or permanent inability to care for oneself — the cap rises significantly to $500,000 per plaintiff or $1,000,000 per occurrence. Economic damages (medical bills, future care costs, lost earnings, home modifications, assistive devices) are never capped and are fully recoverable. In medical malpractice cases involving catastrophic injuries, the same elevated caps apply under ORC 2323.43.`,
  },
  {
    question: `What is a life care plan and why is it important in a catastrophic injury case?`,
    answer: `A life care plan is a comprehensive document prepared by a certified life care planner — typically a nurse or rehabilitation specialist with specialized training — that projects all of the future medical, therapeutic, and personal care needs of a catastrophically injured person over their expected lifetime. It itemizes costs for future surgeries and hospitalizations, physician visits and specialist care, physical and occupational therapy, medications, durable medical equipment (wheelchairs, prosthetics, assistive technology), home health aides and personal care attendants, home modifications (ramps, lifts, accessible bathrooms), and transportation. In litigation, the life care plan is the foundation for the future damages claim — without it, the full scope of future economic losses cannot be presented to a jury or conveyed to an insurance adjuster. Life care plans are essential in every catastrophic injury case.`,
  },
  {
    question: `How are future damages calculated in a catastrophic injury case?`,
    answer: `Future damages in catastrophic injury cases are calculated by combining projections from multiple expert witnesses. A life care planner establishes the projected costs and duration of all future care needs. An economist then calculates the present value of those future costs — because a lump sum payment today that will be invested must account for inflation and the time value of money. A vocational rehabilitation expert assesses how the injury has affected the plaintiff's ability to work and earn income, projecting lifetime lost earnings. Medical experts testify about future surgeries, complications, and life expectancy impacts. Bringing together all of these experts and coordinating their opinions into a coherent, compelling damages presentation is one of the most important skills in catastrophic injury litigation.`,
  },
  {
    question: `What expert witnesses are needed for a catastrophic injury case?`,
    answer: `Catastrophic injury cases typically require a team of expert witnesses: (1) treating and independent medical experts in the relevant specialties (neurology, orthopedics, rehabilitation medicine, physiatry) to testify about the injury, its permanence, and future medical needs; (2) a certified life care planner to project all future care costs; (3) an economist to calculate the present value of future losses and lost earning capacity; (4) a vocational rehabilitation expert to assess employability and wage loss; and (5) liability experts depending on the type of case (accident reconstruction experts, engineering experts, medical experts for malpractice). Building and coordinating this expert team, obtaining qualified witnesses who can withstand cross-examination, and presenting their testimony effectively is a hallmark of an experienced catastrophic injury attorney.`,
  },
  {
    question: `How long does a catastrophic injury case take to resolve in Ohio?`,
    answer: `Catastrophic injury cases in Ohio typically take two to five years to resolve — and sometimes longer for the most complex cases. Several factors drive this timeline: the need to fully understand the long-term prognosis before settling (you should not settle until your medical condition has stabilized and your future needs are fully understood); the time required to retain and prepare multiple expert witnesses; the breadth of discovery in cases with large damages; and extended litigation over liability and causation. Structured settlements — where a portion of the award is paid in future periodic payments rather than a lump sum — are commonly used in catastrophic injury cases and require additional negotiation and court approval in some circumstances. Rushing to settle before the full extent of your damages is understood can permanently compromise your recovery.`,
  },
  {
    question: `What is Ohio's statute of limitations for catastrophic injury cases?`,
    answer: `Under Ohio Revised Code 2305.10, the general statute of limitations for personal injury claims in Ohio — including catastrophic injury cases — is two years from the date of the injury. The discovery rule may apply when the full extent of a latent injury is not known on the date of the incident, extending the limitations period from the date the injury was or reasonably should have been discovered. For catastrophic injuries arising from medical malpractice, ORC 2305.113's one-year statute of limitations applies instead. For injuries caused by a political subdivision of Ohio (a city, county, or school district), the political subdivision immunity statute under ORC Chapter 2744 imposes different rules and may require advance written notice. Given how high the stakes are in catastrophic injury cases, consulting an attorney as early as possible is essential.`,
  },
  {
    question: `Can I recover damages from a government entity that caused my catastrophic injury in Ohio?`,
    answer: `Yes, but Ohio's Political Subdivision Tort Liability Act under ORC Chapter 2744 creates significant hurdles. Political subdivisions (cities, counties, townships, school districts) are generally immune from civil liability unless the injury falls within one of the statutory exceptions — such as the operation or maintenance of a motor vehicle, the proprietary functions of the subdivision, or the negligent performance of a governmental function where immunity has been waived. The rules are complex: the type of activity (governmental vs. proprietary), the specific nature of the claim, and whether individual employees acted with malice or in bad faith all affect liability. Claims against state agencies (as opposed to political subdivisions) must be brought in the Ohio Court of Claims. If you were seriously injured by the negligence of a government entity, an attorney must evaluate which immunity exceptions apply before any deadline passes.`,
  },
];

export default function CatastrophicInjuriesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Catastrophic Injury Lawyer"
        description="Traumatic brain injury, spinal cord injury, paralysis, and severe burns demand a comprehensive legal strategy. We fight for the lifetime compensation catastrophically injured Ohioans need."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Catastrophic Injury Claims in Ohio: Damages, Experts, and Long-Term Recovery
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Catastrophic injuries are life-altering events. A traumatic brain injury, spinal cord injury resulting in paralysis, severe burn injury, amputation, or other permanent disabling condition changes every aspect of a person's life — and requires decades of ongoing medical care, rehabilitation, and personal support. Ohio law recognizes the elevated nature of these injuries through ORC 2323.43, which imposes a higher non-economic damages cap for claims involving permanent physical deformity, loss of use of a limb, loss of a bodily organ system, or a permanent inability to independently care for oneself. At Jwayyed Law LLC, we approach catastrophic injury cases with the thoroughness and resources these high-stakes claims demand.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Establishing the full measure of damages in a catastrophic injury case requires a team of expert witnesses working together to paint a complete picture of the plaintiff's past and future losses. A certified life care planner develops a comprehensive projection of all future care needs — from surgeries and hospitalizations to home health aides, assistive technology, and home modifications. An economist translates those projected costs into present value, accounting for inflation and investment returns. A vocational rehabilitation expert quantifies the lifetime impact on earning capacity. Medical specialists testify about the permanence of the injury, expected complications, and life expectancy effects. Without this expert foundation, no jury or adjuster can accurately value a catastrophic injury case, and the victim risks being dramatically undercompensated.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio's non-economic damage caps under ORC 2323.43 apply to catastrophic injury claims with a higher ceiling than standard tort claims. For injuries qualifying as catastrophic — permanent deformity, loss of limb use, organ system loss, or permanent inability to self-care — non-economic damages are capped at $500,000 per plaintiff or $1,000,000 per occurrence, compared to the standard $350,000/$500,000 cap. Critically, economic damages are never capped. Future medical expenses, future lost earnings, costs of personal care attendants, home modifications, prosthetics, wheelchairs, and other long-term needs are all fully recoverable without limit. This makes the thoroughness of the life care plan and economic analysis decisive to the overall value of the case.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Structured settlements — where a portion of the recovery is paid in future periodic installments rather than as a lump sum — are common in catastrophic injury cases. They can provide tax advantages, protect against the risk of depleting a large award over a lifetime of care, and be structured to match anticipated future expense milestones (such as future surgeries or the transition from parental care to residential placement). Structured settlements require careful negotiation and involve life insurance companies issuing annuity policies. An attorney experienced in catastrophic injury cases can guide you through the structured settlement analysis to ensure the structure meets your actual long-term needs.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Resolving liens is a critical step at the end of every catastrophic injury case. Medicare, Medicaid, private health insurers, and Ohio BWC (in workers' comp cases) all have a right to be repaid from the personal injury settlement for benefits they paid related to the injury. These liens can be substantial in catastrophic injury cases — Medicare may have paid hundreds of thousands in medical bills. Failing to address these liens can result in legal liability for the plaintiff and attorney. Negotiating lien reductions — particularly Medicare liens governed by federal statute — requires specific expertise and can significantly increase the net recovery available to the injured person.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Types of Catastrophic Injuries We Handle
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li>Traumatic brain injury (TBI) — mild, moderate, and severe; diffuse axonal injury</li>
              <li>Spinal cord injury — paraplegia, quadriplegia, incomplete spinal cord injuries</li>
              <li>Severe burns requiring skin grafting, long-term hospitalization, and reconstruction</li>
              <li>Traumatic amputation and loss of limb requiring prosthetics and long-term rehab</li>
              <li>Multiple severe fractures with lasting orthopedic disability</li>
              <li>Permanent loss of vision or hearing</li>
              <li>Severe facial disfigurement requiring reconstructive surgery</li>
              <li>Birth injuries causing permanent neurological impairment (cerebral palsy, HIE)</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Choose Jwayyed Law LLC
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Catastrophic injury cases demand patience, resources, and experience. At Jwayyed Law LLC, we take catastrophic injury cases seriously — retaining the right experts, waiting for medical stabilization before evaluating settlement, and building the strongest possible case for maximum lifetime compensation. We handle catastrophic injury claims on a contingency fee basis, meaning no fees unless we recover for you and your family.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We also handle related matters including{' '}
              <Link href="/personal-injury/medical-malpractice" className="text-[#b87333] underline hover:opacity-80">medical malpractice</Link>,{' '}
              <Link href="/personal-injury/workplace-injuries" className="text-[#b87333] underline hover:opacity-80">workplace injury claims</Link>, and{' '}
              <Link href="/personal-injury/nursing-home-abuse" className="text-[#b87333] underline hover:opacity-80">nursing home abuse and neglect</Link> throughout Ohio.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Call <a href="tel:6142855482" className="text-[#b87333] underline hover:text-[#a06828]">(614) 285-5482</a> or <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">schedule a consultation online</Link> to discuss your case. Learn more about <Link href="/our-law-firm/blog/personal-injury-ohio-statute-of-limitations" className="text-[#b87333] underline hover:text-[#a06828]">Ohio&apos;s statute of limitations for personal injury claims</Link>.
            </p>

            <LocationsWeServe title="Personal Injury" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/personal-injury/car-accidents" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Car Accidents</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Motor vehicle collision claims throughout Ohio</span>
              </Link>
              <Link href="/personal-injury/truck-accidents" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Truck Accidents</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Commercial vehicle and semi-truck collision claims</span>
              </Link>
              <Link href="/personal-injury/wrongful-death" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Wrongful Death</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Holding negligent parties accountable for fatal injuries</span>
              </Link>
              <Link href="/personal-injury/workplace-injuries" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Workplace Injuries</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">On-the-job injuries and workers&apos; compensation</span>
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
