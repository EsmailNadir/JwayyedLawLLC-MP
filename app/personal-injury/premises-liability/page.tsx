import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Ohio Premises Liability Lawyer | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
  description: 'Ohio premises liability and slip and fall attorney. Invitee duty, open and obvious doctrine, ORC 2315.33 comparative fault, ORC 5321 landlord duties. Call (614) 285-5482.',
  keywords: ['premises liability lawyer Columbus OH', 'slip and fall attorney Ohio', 'negligent security lawyer', 'Franklin County premises liability attorney', 'ORC 2315.33 comparative fault Ohio'],
  openGraph: {
    title: 'Ohio Premises Liability Lawyer | Columbus | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/personal-injury/premises-liability',
  },
  alternates: { canonical: '/personal-injury/premises-liability' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Premises Liability', href: '/personal-injury/premises-liability' },
];

const faqs = [
  {
    question: `What is premises liability in Ohio?`,
    answer: `Premises liability is the area of Ohio law that holds property owners and occupiers responsible for injuries caused by unsafe conditions on their property. Ohio follows a common law framework — largely shaped by case law and ORC 2315.19 comparative negligence principles — under which the duty owed to a visitor depends on that visitor's legal status. The three categories are: invitees (customers, business visitors, members of the public invited onto property), who receive the highest duty; licensees (social guests), who are owed a duty to warn of known hidden dangers; and trespassers, who are generally owed only a duty to refrain from willful or wanton conduct. Proving a premises liability claim requires showing the property owner knew or should have known of the hazard and failed to fix it or warn of it.`,
  },
  {
    question: `What duty do Ohio property owners owe visitors?`,
    answer: `Ohio property owners owe different duties depending on the visitor's status. For invitees — such as customers in a store, patrons in a restaurant, or members of the public on government property — the owner owes a duty of reasonable care: to inspect the property, discover dangerous conditions, and either fix them or adequately warn visitors. For licensees (social guests), the duty is narrower: the owner must warn of known hidden hazards but need not actively inspect. For trespassers, the duty is limited to avoiding willful or wanton misconduct, with an important exception for discovered trespassers. Landlords owe specific duties to tenants under ORC Chapter 5321 to keep rental premises in a habitable and safe condition.`,
  },
  {
    question: `What is Ohio's open and obvious doctrine?`,
    answer: `Ohio's open and obvious doctrine holds that when a hazard on a property is open and obvious — meaning a reasonable person exercising ordinary care would have noticed and avoided it — the property owner generally has no duty to warn of that hazard, and the landowner may avoid liability. The Ohio Supreme Court has reinforced this doctrine in multiple decisions, reasoning that an open and obvious hazard serves as its own warning. However, the doctrine is not absolute: courts consider whether there were any attendant circumstances (distractions, crowds, the design of the property) that would have prevented the plaintiff from noticing or avoiding the hazard. An attorney can evaluate whether the open and obvious doctrine applies to the specific facts of your case.`,
  },
  {
    question: `Is a property owner liable for snow and ice injuries in Ohio?`,
    answer: `Ohio traditionally followed a "natural accumulation rule" — property owners were generally not liable for injuries caused by naturally accumulating ice and snow. However, Ohio courts have moved away from a blanket rule, applying comparative fault principles. Property owners — particularly commercial businesses — may have a duty to clear walkways and parking lots within a reasonable time after precipitation stops, and they can be liable if they created an unnatural accumulation (such as through drainage that channels water onto a walkway where it freezes). Residential landlords have specific duties under ORC 5321.02 to maintain safe conditions. If you slipped on ice outside a business or apartment complex, a premises liability attorney can assess whether the natural accumulation defense applies to your situation.`,
  },
  {
    question: `What if I slipped and fell in a commercial property like a store or restaurant?`,
    answer: `Commercial property owners owe their customers (invitees) the highest standard of care under Ohio law. A business is liable for a slip and fall if it knew or should have known of a hazardous condition (such as a wet floor or spilled liquid) and failed to correct it or post adequate warnings within a reasonable time. The critical issue is often notice: did the business create the condition, or was the condition present long enough that a reasonable inspection would have discovered it? Evidence — such as how long the liquid had been on the floor, whether there were footprints or other indicators of an established hazard, or whether the business lacked any cleaning or inspection protocol — can establish constructive notice. Document the scene, get an incident report, and seek medical attention immediately.`,
  },
  {
    question: `What about slip and fall injuries in a rental property — can I sue my landlord?`,
    answer: `Yes, under certain circumstances. Ohio Revised Code Chapter 5321 imposes duties on residential landlords to maintain rental premises in a safe and habitable condition. ORC 5321.02 prohibits landlords from retaliating against tenants who report unsafe conditions. If a tenant or guest is injured because a landlord failed to repair a known dangerous condition — broken stairs, defective handrails, poor lighting in common areas — the landlord may be liable. Landlords are generally responsible for maintaining common areas (hallways, parking lots, stairwells) that are under their control. Tenants should document unsafe conditions in writing and report them to the landlord before injuries occur, which also establishes the landlord's actual notice of the hazard.`,
  },
  {
    question: `How do I prove a premises liability claim in Ohio?`,
    answer: `To prove a premises liability claim in Ohio, you must establish: (1) the defendant owned or controlled the property; (2) you were a lawful visitor (invitee or licensee); (3) there was a dangerous condition on the property; (4) the defendant knew or should have known of the condition; (5) the defendant failed to remedy it or warn of it; and (6) that failure caused your injury. Key evidence includes photographs of the hazard taken immediately after the incident, incident reports filed with the property owner, security camera footage (which must be preserved quickly before it is overwritten), witness statements, medical records documenting your injuries, and maintenance records showing whether the property owner had prior knowledge of the condition. Ohio's comparative fault rule under ORC 2315.33 means your recovery will be reduced if you are found partially at fault.`,
  },
  {
    question: `What is Ohio's statute of limitations for premises liability and slip and fall claims?`,
    answer: `Under Ohio Revised Code 2305.10, personal injury claims — including premises liability and slip and fall cases — must be filed within two years of the date of the injury. Missing this deadline permanently bars your claim regardless of how strong it is. One exception: ORC 2305.321 provides recreational user immunity for landowners who permit recreational use of their property at no charge, which may affect claims arising from injuries on farms, trails, or open land. Government-owned property presents additional complications — Ohio's political subdivision immunity statutes under ORC Chapter 2744 may limit or alter the standard liability rules, and shorter notice deadlines may apply. Consult an attorney promptly after a premises injury to ensure your claim is preserved.`,
  },
];

export default function PremisesLiabilityPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Premises Liability Lawyer"
        description="Property owners who fail to maintain safe conditions are liable for the injuries they cause. We represent slip and fall victims and hold negligent property owners accountable under Ohio law."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Premises Liability in Ohio: Duties, Defenses, and Your Rights
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio premises liability law holds property owners and occupiers responsible when dangerous conditions on their property injure lawful visitors. The duty owed depends on the visitor's legal status — invitees (customers, business visitors) receive the highest duty of reasonable care, while licensees (social guests) are owed a duty to warn of known hidden dangers, and trespassers are generally owed only a duty to avoid willful or wanton conduct. Ohio's comparative fault framework under ORC 2315.33 means a plaintiff's recovery is reduced by their percentage of fault — and barred entirely if they are found more than 50% responsible. The two-year statute of limitations under ORC 2305.10 applies to most premises liability claims.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              One of the most significant defenses in Ohio premises liability cases is the open and obvious doctrine. Ohio courts have held that a property owner generally has no duty to warn of or repair a hazard that is open and obvious to any reasonable person exercising ordinary care. A step-down at a store entrance that is clearly visible, or a wet floor with a prominent warning sign, may be considered open and obvious. However, attendant circumstances — such as a crowded store, a distraction created by the property owner (like a prominent display), or a design that diverted a visitor's attention — can defeat the open and obvious defense. Each case is fact-specific, and an attorney's evaluation is essential.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Commercial property owners owe their customers and business invitees a duty to inspect the premises, discover hazardous conditions, and either correct them or warn of them within a reasonable time. In a classic grocery store slip and fall, the plaintiff must show that the store created the spill, or that the spill had been on the floor long enough that the store should have discovered and cleaned it through reasonable inspection. Courts look at the entire record: whether employees had been in the area, the store's cleaning and inspection schedule, and any evidence (like footprints, dried edges, or a cart stationed nearby) that indicates how long the hazard existed. Surveillance footage is often decisive — which is why you must act quickly to preserve it.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Residential landlords have statutory duties under ORC Chapter 5321 to maintain rental units and common areas in a fit and habitable condition, to keep all common areas safe and sanitary, and to maintain all electrical, plumbing, heating, and other systems in good working order. When a landlord knows of a dangerous condition — such as a broken handrail, deteriorating stairs, or inadequate exterior lighting — and fails to repair it within a reasonable time, and a tenant or guest is injured as a result, the landlord can be held liable. Tenants who report conditions in writing create a clear record of the landlord's actual notice of the hazard, which is critical to proving liability.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              After a premises injury, the steps you take immediately are crucial. Photograph the hazard before it is cleaned up or repaired. Request an incident report from the property owner or manager and keep a copy. Get the names and contact information of any witnesses. Seek medical attention even if your injuries seem minor — some injuries worsen over time. Do not give a recorded statement to the property owner's insurer before consulting an attorney. Under ORC 2305.321, recreational user immunity may protect some landowners, and government property injuries under ORC Chapter 2744 have special notice and filing requirements that differ from standard civil cases.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Premises Liability Cases We Handle
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li>Slip and fall on wet floors, spills, and slippery surfaces in commercial properties</li>
              <li>Trip and fall on uneven pavement, broken sidewalks, and deteriorating stairs</li>
              <li>Ice and snow slip and falls on commercial and residential property</li>
              <li>Inadequate lighting causing falls or criminal attacks (negligent security)</li>
              <li>Swimming pool accidents and drownings on private and commercial property</li>
              <li>Injuries in apartment complexes and rental properties (ORC Chapter 5321)</li>
              <li>Falls caused by defective handrails, broken steps, or structural defects</li>
              <li>Injuries on government-owned property (ORC Chapter 2744 political subdivision claims)</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Choose Jwayyed Law LLC
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Premises liability cases often turn on documentary evidence that must be preserved quickly — surveillance footage is routinely overwritten within days. At Jwayyed Law LLC, we act fast to preserve evidence, identify all liable parties (property owners, management companies, maintenance contractors), and build the strongest possible case. We represent premises liability clients throughout Ohio on a contingency fee basis.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We also handle related personal injury matters including{' '}
              <Link href="/personal-injury/workplace-injuries" className="text-[#b87333] underline hover:opacity-80">workplace injuries</Link>,{' '}
              <Link href="/personal-injury/dog-bites" className="text-[#b87333] underline hover:opacity-80">dog bite claims</Link>, and other{' '}
              <Link href="/personal-injury" className="text-[#b87333] underline hover:opacity-80">personal injury cases</Link> across Ohio.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Call <a href="tel:6142855482" className="text-[#b87333] underline hover:text-[#a06828]">(614) 285-5482</a> or <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">schedule a consultation online</Link>. Read our article on <Link href="/our-law-firm/blog/ohio-slip-and-fall-laws-property-owners" className="text-[#b87333] underline hover:text-[#a06828]">Ohio slip and fall laws for property owners</Link>.
            </p>

            <LocationsWeServe title="Personal Injury" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/personal-injury/slip-and-fall" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Slip & Fall Injuries</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Premises liability claims for unsafe conditions</span>
              </Link>
              <Link href="/personal-injury/dog-bites" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Dog Bites</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Animal attack liability under Ohio law</span>
              </Link>
              <Link href="/personal-injury/workplace-injuries" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Workplace Injuries</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">On-the-job injuries and workers&apos; compensation</span>
              </Link>
              <Link href="/personal-injury/car-accidents" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Car Accidents</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Motor vehicle collision claims throughout Ohio</span>
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
