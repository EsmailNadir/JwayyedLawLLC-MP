import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Ohio Dog Bite Lawyer',
  description:
    'Ohio dog owners are strictly liable for bites under ORC 955.28. What you can recover, the 2-year deadline and the two defenses owners can raise.',
  keywords: ['dog bite lawyer Columbus OH', 'dog bite attorney Ohio', 'animal attack lawyer', 'Franklin County dog bite attorney', 'ORC 955.28 dog bite claim'],
  openGraph: {
    title: 'Ohio Dog Bite Lawyer | Columbus | Jwayyed Law LLC',
    description: 'Dog bite claims under Ohio strict liability law, ORC 955.28.',
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
    question: 'Does Ohio have strict liability for dog bites?',
    answer:
      'Yes. Under Ohio Revised Code 955.28, dog owners are strictly liable for injuries their dogs cause. The owner is liable whether or not the dog had a history of viciousness and whether or not the owner knew it was dangerous. The "one bite rule" used in some states does not protect Ohio dog owners. If the dog bites, scratches or attacks and causes injury, the owner is responsible.',
  },
  {
    question: 'What if I was partially at fault for the dog bite? Does provocation matter?',
    answer:
      'Provocation and trespassing are the two main defenses under ORC 955.28. If you provoked the dog or were trespassing on private property when it bit you, the owner may avoid liability or have it reduced. Ohio also applies comparative fault under ORC 2315.33: if you were partly at fault (for example, you teased the dog), your damages may be reduced by your percentage of fault. If you were lawfully present, such as on a public sidewalk or as a guest, and did not provoke the dog, you have a strong strict liability claim.',
  },
  {
    question: 'How long do I have to file a dog bite claim in Ohio?',
    answer:
      "Under Ohio Revised Code 2305.10, you have 2 years from the date of the injury to file a personal injury claim, including a dog bite. Miss the deadline and you lose the right to sue. If the victim is a minor, the 2-year clock does not start until the child turns 18, so parents have time to act on the child's behalf. Evidence, witness memories and insurance coverage can all change over time, so do not wait to talk to an attorney.",
  },
  {
    question: 'What damages can I recover after a dog bite in Ohio?',
    answer:
      'Both economic and non-economic damages. Economic damages include emergency room and hospital bills, follow-up care, plastic or reconstructive surgery for scarring, physical therapy, prescriptions, and lost wages if the injury kept you from work. Non-economic damages include pain and suffering, emotional distress and PTSD, permanent scarring and disfigurement, and loss of enjoyment of life. Where the conduct was particularly reckless or malicious, punitive damages may also be available.',
  },
  {
    question: "Who pays for dog bite injuries? Does the dog owner's homeowner's insurance cover it?",
    answer:
      "In most cases, yes. A dog owner's homeowner's or renter's insurance policy typically covers dog bite liability, so there is often a source of compensation even when the owner has few personal assets. Your attorney will identify and notify the insurance carrier, preserve the claim and negotiate the settlement. If the owner has no insurance, a direct lawsuit or another route may be needed.",
  },
  {
    question: 'What should I do immediately after a dog bite?',
    answer:
      "Get medical attention right away: dog bites can cause serious infections, including cellulitis, and rabies exposure. Get the name and contact information of the dog owner and any witnesses. Photograph your injuries and the place of the attack. Report the bite to your local animal control agency; under ORC 955.261, animal bites in Ohio must be reported to the local health department. Save all medical records and bills, and talk to a dog bite attorney before giving any statement to the owner's insurance company.",
  },
  {
    question: 'Do I need to report a dog bite in Ohio?',
    answer:
      'Yes. Ohio Revised Code 955.261 requires animal bites to be reported to the local health department. Animal control may investigate, quarantine the dog to monitor for rabies, and designate it a "dangerous dog" under ORC 955.22 or a "vicious dog" under ORC 955.11 if it has a history of attacks. These official records can be useful evidence in your civil claim, and reporting protects others from the same dog.',
  },
  {
    question: 'Do I need a lawyer for a dog bite case?',
    answer:
      'Dog bite insurers often dispute how severe the injuries are, raise provocation defenses, or offer quick low settlements before you know the full extent of your damages, especially for scarring that may need future reconstructive surgery. An attorney documents your injuries, gathers evidence, retains medical experts when needed and negotiates for you. Jwayyed Law LLC handles dog bite cases on a contingency fee basis.',
  },
];

const RELATED = [
  { href: '/personal-injury/premises-liability', title: 'Premises liability', subtitle: 'Property owner negligence and unsafe conditions' },
  { href: '/personal-injury/slip-and-fall', title: 'Slip and fall injuries', subtitle: 'Premises liability claims for unsafe conditions' },
  { href: '/personal-injury/car-accidents', title: 'Car accidents', subtitle: 'Motor vehicle collision claims throughout Ohio' },
  { href: '/personal-injury/catastrophic-injuries', title: 'Catastrophic injuries', subtitle: 'Severe and life-altering injury claims' },
];

export default function DogBitesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Dog bite claims in Ohio"
        description="Under ORC 955.28, an Ohio dog owner is liable for a bite whether or not the dog had ever been aggressive before. You generally have 2 years to file."
      />

      <KeyFacts
        facts={[
          { figure: 'ORC 955.28', label: 'makes dog owners strictly liable for injuries their dogs cause' },
          { figure: '2 years', label: 'to file, from the date of the injury (ORC 2305.10)' },
          { figure: 'Age 18', label: "when the 2-year clock starts for a child's claim" },
          { figure: '50%', label: 'more fault than this bars recovery (ORC 2315.33)' },
        ]}
      />

      <Section
        title="How Ohio dog bite law works"
        tone="ice"
        intro={
          <p>
            Ohio is a strict liability state for dog bites. Under Ohio Revised Code 955.28, a dog owner is liable for any injury, death
            or loss to a person or property caused by the dog.
          </p>
        }
      >
        <p>
          The owner is liable even without any prior knowledge that the dog was dangerous, and even if it had never acted aggressively.
          Some other states follow a &ldquo;one bite rule&rdquo; that can let an owner escape liability for a first attack. Ohio does
          not. The only defenses are that the victim provoked the dog or was trespassing at the time.
        </p>
        <p>
          ORC 955.22 authorizes local authorities to designate a dog as a &ldquo;dangerous dog,&rdquo; and ORC 955.11 provides the
          definitions for those designations.
        </p>
      </Section>

      <Section title="Deadlines and damages">
        <FactTable
          title="Filing deadlines"
          rows={[
            { label: 'Adult victims', value: '2 years from the date of the injury, under ORC 2305.10.' },
            {
              label: 'Child victims',
              value: 'Parents or guardians may bring the claim. The statute of limitations is tolled until the child reaches age 18.',
            },
            { label: 'Reporting the bite', value: 'Animal bites must be reported to the local health department (ORC 955.261).' },
          ]}
        />
        <FactTable
          title="What you can recover"
          rows={[
            {
              label: 'Medical costs',
              value:
                'Emergency treatment, surgery, hospitalization, follow-up care, physical therapy, and future plastic or reconstructive surgery for permanent scarring.',
            },
            { label: 'Lost income', value: 'Lost wages and loss of earning capacity if the injury keeps you from working.' },
            {
              label: 'Non-economic',
              value: 'Pain and suffering, emotional distress and PTSD, permanent scarring and disfigurement, and loss of enjoyment of life.',
            },
            { label: 'Punitive', value: 'May be available where the conduct was particularly reckless or malicious.' },
          ]}
          note="Dog bite claims are often covered by the owner's homeowner's or renter's insurance policy."
        />
      </Section>

      <Section tone="ice" title="Injuries these claims involve">
        <p>
          Dog bites range from puncture wounds to life-altering trauma. Children are especially vulnerable because they are often
          bitten on the face or neck and may need several reconstructive surgeries.
        </p>
        <PointGrid
          points={[
            { title: 'Wounds', body: 'Deep lacerations, puncture wounds and crushing injuries from powerful bites.' },
            { title: 'Facial injuries', body: 'Facial bites that require reconstructive or plastic surgery, and permanent disfigurement and scarring.' },
            { title: 'Infections', body: 'Serious infections, including cellulitis, and potential rabies exposure.' },
            { title: 'Lasting damage', body: 'Nerve damage, tendon and ligament injuries, and permanent loss of function.' },
            { title: 'Attacks on children', body: 'Dog attacks on children and minors, brought by parents or guardians.' },
            { title: 'Psychological harm', body: 'Psychological trauma, including PTSD, after a dog attack.' },
          ]}
        />
      </Section>

      <Section title="What to do after a dog bite">
        <Steps
          steps={[
            { title: 'Get medical care', body: 'Treat the wounds right away and have the infection risk assessed.' },
            { title: 'Identify the owner', body: "Record the dog owner's identity and insurance, and the contact details of any witnesses." },
            { title: 'Document it', body: 'Photograph your injuries and the scene. Save all medical records and bills.' },
            { title: 'Report the bite', body: 'Report it to animal control and the local health department, as ORC 955.261 requires.' },
            {
              title: 'Talk to an attorney first',
              body: "Do not give a recorded statement to the dog owner's insurance company before you do. Insurers will use your words against you.",
            },
          ]}
        />
      </Section>

      <Section tone="ice" title="Defenses the owner can raise">
        <PointGrid
          points={[
            {
              title: 'Provocation',
              body: 'Hitting, taunting or threatening the dog. If proven, the owner may avoid liability or have it reduced.',
            },
            { title: 'Trespassing', body: 'Being on private property without permission when the bite happened.' },
            {
              title: 'Comparative fault (ORC 2315.33)',
              body: 'A court or jury weighs each side’s fault, and your damages are reduced by your share. More than 50% at fault bars recovery entirely.',
            },
            {
              title: 'When the defenses do not apply',
              body: 'Most victims were lawfully in a public space or invited onto private property as guests, so these defenses often fail.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a dog bite claim">
        <PointGrid
          points={[
            { title: 'Documents and values the injuries', body: 'Including long-term scarring and psychological harm.' },
            { title: 'Handles the insurer', body: "All communication with the dog owner's insurance company, so you can focus on recovering." },
            { title: 'Answers the defenses', body: 'Responds to the provocation and severity arguments insurers raise.' },
            { title: 'Retains experts', body: 'Medical experts when the injuries call for them.' },
          ]}
        />
        <Callout title="Fees">
          Jwayyed Law LLC represents dog bite victims throughout Ohio on a contingency fee basis.
        </Callout>
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation online</Link>. For more,
          read <Link href="/our-law-firm/blog/dog-bite-laws-ohio-owner-liability">Ohio dog bite laws and owner liability</Link>.
        </p>
      </Section>

      <Section tone="ice" title="Related injury claims">
        <p>
          The firm also handles <Link href="/personal-injury/premises-liability">premises liability</Link>,{' '}
          <Link href="/personal-injury">motor vehicle accidents</Link> and other{' '}
          <Link href="/personal-injury">personal injury claims</Link> across Ohio.
        </p>
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <LocationsWeServe title="Personal Injury" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
