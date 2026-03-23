import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Ohio Dog Bite Lawyer',
  description: 'Ohio dog bite attorney fighting for victims under ORC 955.28 strict liability. Recover medical bills, scarring, lost wages, and pain and suffering.',
  keywords: ['dog bite lawyer Columbus OH', 'dog bite attorney Ohio', 'animal attack lawyer', 'Franklin County dog bite attorney', 'ORC 955.28 dog bite claim'],
  openGraph: {
    title: 'Ohio Dog Bite Lawyer | Columbus',
    url: 'https://www.jjlawohio.com/personal-injury/dog-bites',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/personal-injury/dog-bites' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Dog Bites', href: '/personal-injury/dog-bites' },
];

const faqs = [
  {
    question: `Does Ohio have strict liability for dog bites?`,
    answer: `Yes. Under Ohio Revised Code 955.28, dog owners are strictly liable for injuries their dogs cause. This means the owner is liable regardless of whether the dog had any prior history of viciousness or whether the owner knew the dog was dangerous — the so-called "one bite rule" that applies in some states does not protect Ohio dog owners. If the dog bites, scratches, or attacks and causes injury, the owner is responsible. This strict liability standard makes Ohio one of the stronger states for dog bite victims.`,
  },
  {
    question: `What if I was partially at fault for the dog bite — does provocation matter?`,
    answer: `Provocation and trespassing are the two main defenses under ORC 955.28. If the victim provoked the dog or was trespassing on private property at the time of the bite, the owner may avoid liability or have it reduced. Ohio follows a comparative fault framework under ORC 2315.33, meaning if you are found partially at fault — for example, you teased the dog — your damages may be reduced by your percentage of fault. If you were lawfully present (on a public sidewalk, visiting as a guest, etc.) and did not provoke the dog, you have a strong strict liability claim.`,
  },
  {
    question: `How long do I have to file a dog bite claim in Ohio?`,
    answer: `Under Ohio Revised Code 2305.10, the statute of limitations for personal injury claims — including dog bites — is two years from the date of the injury. If you miss this deadline, you permanently lose your right to sue. One important exception: if the victim is a minor child, the two-year clock does not begin running until the child turns 18, so parents have time to act on their child's behalf. Do not wait to consult an attorney — evidence, witness memories, and insurance coverage can all change over time.`,
  },
  {
    question: `What damages can I recover after a dog bite in Ohio?`,
    answer: `Dog bite victims in Ohio can recover both economic and non-economic damages. Economic damages include emergency room and hospital bills, follow-up medical care, plastic or reconstructive surgery for scarring, physical therapy, prescription medications, and lost wages if the injury kept you from work. Non-economic damages include pain and suffering, emotional distress and PTSD, permanent scarring and disfigurement, and loss of enjoyment of life. In cases involving particularly reckless or malicious conduct, punitive damages may also be available.`,
  },
  {
    question: `Who pays for dog bite injuries — does the dog owner's homeowner's insurance cover it?`,
    answer: `In most cases, yes. A dog owner's homeowner's or renter's insurance policy typically covers dog bite liability claims. This means there is often a real source of compensation even if the dog owner does not have substantial personal assets. Your attorney will identify and notify the applicable insurance carrier, preserve the claim, and negotiate a fair settlement. If the dog owner has no insurance, other avenues — such as a direct lawsuit — may be necessary.`,
  },
  {
    question: `What should I do immediately after a dog bite?`,
    answer: `First, seek medical attention right away — dog bites can cause serious infections including cellulitis and rabies exposure, and prompt treatment is critical. Get the name and contact information of the dog owner and any witnesses. Photograph your injuries and the location of the attack. Report the bite to your local animal control agency. Under ORC 955.261, animal bites in Ohio must be reported to the local health department. Save all medical records and bills. Contact a dog bite attorney before giving any statements to the dog owner's insurance company.`,
  },
  {
    question: `Do I need to report a dog bite in Ohio?`,
    answer: `Yes. Ohio Revised Code 955.261 requires that animal bites be reported to the local health department. Animal control authorities may investigate the incident, quarantine the dog to monitor for rabies, and the dog may be designated as a "dangerous dog" under ORC 955.22 or a "vicious dog" under ORC 955.11 if it has a history of attacks. These official records can be valuable evidence in your civil claim. Reporting also protects others in the community from the same dog.`,
  },
  {
    question: `Do I need a lawyer for a dog bite case?`,
    answer: `Having an attorney significantly improves your outcome. Dog bite insurers regularly dispute the severity of injuries, raise provocation defenses, or offer quick lowball settlements before you understand the full extent of your damages — especially for scarring that may require future reconstructive surgery. An experienced attorney documents your injuries, gathers evidence, retains medical experts when needed, and negotiates aggressively on your behalf. At Jwayyed Law LLC, we handle dog bite cases on a contingency fee basis, meaning you pay nothing unless we recover for you.`,
  },
];

export default function DogBitesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Dog Bite Lawyer"
        description="Ohio's strict liability law holds dog owners accountable regardless of the dog's history. We fight for full compensation for your injuries, scarring, and suffering."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Ohio Dog Bite Law: Strict Liability Under ORC 955.28
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio is a strict liability state for dog bites. Under Ohio Revised Code 955.28, a dog owner is liable for any injury, death, or loss to a person or property caused by the dog — regardless of whether the owner had any prior knowledge that the dog was dangerous or had ever acted aggressively before. This is a significant departure from the "one bite rule" followed in some other states, where an owner might escape liability for a first attack. In Ohio, if the dog bites, the owner is responsible. The only defenses are that the victim provoked the dog or was trespassing at the time of the attack. ORC 955.22 authorizes local authorities to designate a dog as a "dangerous dog," and ORC 955.11 provides the definitions governing these designations.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Dog bites cause a wide range of injuries — from minor puncture wounds to life-altering trauma. Common injuries include deep lacerations, puncture wounds, crushing injuries from powerful bites, serious infections (including cellulitis and potential rabies exposure), facial scarring and disfigurement, nerve damage, tendon and ligament injuries, and psychological trauma including PTSD. Children are particularly vulnerable because they are often bitten on the face or neck and may require multiple reconstructive surgeries. When children are victims, parents or guardians may bring claims on their behalf, and the statute of limitations under ORC 2305.10 is tolled until the child reaches age 18.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio's comparative fault framework under ORC 2315.33 applies to dog bite claims. If the victim provoked the dog — by hitting, taunting, or threatening it — or was trespassing on private property, the owner may raise those facts as a defense. A court or jury will assess the relative fault of each party, and the victim's damages will be reduced by their percentage of fault. If the victim is found more than 50% at fault, recovery is barred entirely. Most dog bite cases involve victims lawfully present in a public space or as invited guests on private property, meaning these defenses often do not apply.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Damages available in Ohio dog bite cases include all medical expenses — emergency treatment, surgery, hospitalization, follow-up care, physical therapy, and future plastic or reconstructive surgery for permanent scarring. Lost wages and loss of earning capacity are recoverable if the injury prevents you from working. Non-economic damages cover pain and suffering, emotional distress and PTSD, permanent scarring and disfigurement, and loss of enjoyment of life. Dog bite claims are often covered by the dog owner's homeowner's or renter's insurance policy, providing a real source of compensation. The statute of limitations under ORC 2305.10 gives victims two years from the date of the injury to file suit. Acting quickly preserves evidence, witness testimony, and insurance coverage.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              After a dog bite, immediate steps matter: seek medical care right away to treat wounds and assess infection risk, document the dog owner's identity and insurance, photograph your injuries and the scene, and report the bite to animal control and the local health department as required by ORC 955.261. Do not give recorded statements to the dog owner's insurance company before consulting an attorney — insurers will use your words against you.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Dog Bite Claims We Handle
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li>Dog bites causing lacerations, puncture wounds, and crushing injuries</li>
              <li>Facial bites requiring reconstructive or plastic surgery</li>
              <li>Dog attacks on children and minors</li>
              <li>Infections following dog bites (cellulitis, rabies exposure)</li>
              <li>Nerve damage and permanent loss of function</li>
              <li>Psychological trauma and PTSD from dog attacks</li>
              <li>Dog attacks causing permanent disfigurement and scarring</li>
              <li>Claims against dog owners covered by homeowner's or renter's insurance</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Choose Jwayyed Law LLC
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              At Jwayyed Law LLC, we represent dog bite victims throughout Ohio on a contingency fee basis — you pay nothing unless we win. We understand Ohio's strict liability law, the defenses insurers raise, and how to document and value injuries including long-term scarring and psychological harm. We handle all communications with the dog owner's insurance company so you can focus on your recovery.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We also handle related personal injury matters including{' '}
              <Link href="/personal-injury/premises-liability" className="text-[#b87333] underline hover:opacity-80">premises liability</Link>,{' '}
              <Link href="/personal-injury" className="text-[#b87333] underline hover:opacity-80">motor vehicle accidents</Link>, and other{' '}
              <Link href="/personal-injury" className="text-[#b87333] underline hover:opacity-80">personal injury claims</Link> across Ohio.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Call <a href="tel:6142855482" className="text-[#b87333] underline hover:text-[#a06828]">(614) 285-5482</a> or <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">schedule a consultation online</Link> to discuss your dog bite case. Read our article on <Link href="/our-law-firm/blog/dog-bite-laws-ohio-owner-liability" className="text-[#b87333] underline hover:text-[#a06828]">Ohio dog bite laws and owner liability</Link>.
            </p>

            <LocationsWeServe title="Personal Injury" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/personal-injury/premises-liability" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Premises Liability</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Property owner negligence and unsafe conditions</span>
              </Link>
              <Link href="/personal-injury/slip-and-fall" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Slip & Fall Injuries</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Premises liability claims for unsafe conditions</span>
              </Link>
              <Link href="/personal-injury/car-accidents" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Car Accidents</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Motor vehicle collision claims throughout Ohio</span>
              </Link>
              <Link href="/personal-injury/catastrophic-injuries" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Catastrophic Injuries</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Severe and life-altering injury claims</span>
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
