import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Columbus Assault Defense Attorney | Jwayyed Law LLC',
  description: 'Assault defense in Columbus, Ohio. R.C. 2903.13, self-defense, felony escalation. Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: [
    'Columbus assault lawyer',
    'assault defense attorney Columbus Ohio',
    'assault charge Columbus',
    'Franklin County assault defense',
    'Columbus Ohio assault attorney',
    'self defense Columbus assault',
    'ORC 2903.13 Columbus lawyer',
  ],
  openGraph: {
    title: 'Columbus Assault Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Assault Defense — Columbus', href: '/locations/franklin-county/assault-defense-columbus' },
];

const faqs = [
  {
    question: 'What is assault under Ohio law and where are Columbus assault cases heard?',
    answer: 'Ohio Revised Code 2903.13 defines assault as knowingly causing or attempting to cause physical harm to another, or recklessly causing serious physical harm. Baseline assault is an M1 misdemeanor — up to 180 days jail, $1,000 fine. Columbus assault cases are heard at Franklin County Municipal Court, 375 S. High Street (floors 12–15). Felony assault escalations — assault on a peace officer, EMS, teacher, or hospital worker — are bound over to Franklin County Court of Common Pleas.',
  },
  {
    question: 'What are the felony escalations for assault in Columbus?',
    answer: 'R.C. 2903.13(C) escalates Columbus assault charges to felonies when the victim is in a protected category: assault on a Columbus police officer, OSP trooper, firefighter, or EMS worker during official duties (F4); assault on a caretaker against a functionally impaired person (F4, or F3 with prior); assault on corrections officers or youth services employees at a state DRC institution (F3), or local jail staff and probation officers (F5); assault on a teacher or school bus driver on school property (F5, or F4 with prior); and assault on hospital employees or judges/prosecutors during official duties (F5, or F4 with prior).',
  },
  {
    question: 'Is self-defense a valid defense to assault charges in Columbus?',
    answer: 'Yes. Under ORC 2901.05, self-defense is a complete affirmative defense to assault. Since 2019 amendments, the prosecution bears the burden of disproving self-defense beyond a reasonable doubt once the defendant presents evidence raising it. For Columbus assault cases, we evaluate who initiated the confrontation, whether the force used was proportionate to the threat, and what video and physical evidence shows about the sequence of events. Body-cam footage from the Columbus Division of Police often captures key moments of the encounter.',
  },
  {
    question: 'Can a Columbus assault conviction be expunged?',
    answer: 'Most first-offense M1 assault convictions under R.C. 2903.13 are eligible for expungement under ORC 2953.32 after a 1-year waiting period from final discharge. However, assault convictions that are part of a DV-adjacent scenario — even if not formally charged as domestic violence — may be scrutinized on an expungement application. Our firm evaluates expungement eligibility from the outset of every assault case to inform plea strategy.',
  },
  {
    question: 'What if the alleged victim in a Columbus assault case does not want to press charges?',
    answer: 'The Columbus Division of Police and the Franklin County prosecutor — not the alleged victim — decide whether to proceed with an assault case. The alleged victim\'s unwillingness to testify weakens the prosecution\'s case but does not automatically end it. The state can sometimes proceed using body-cam footage, 911 recordings, and other evidence. Our firm evaluates the strength of the independent evidence and uses any lack of victim cooperation as a factor in negotiating a favorable resolution.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus assault charge?',
    answer: 'Jwayyed Law LLC defends assault charges throughout Columbus and Franklin County. Assault cases are fact-intensive and often turn on witness credibility, video evidence, and whether self-defense applies. Our firm obtains all evidence, evaluates the prosecution\'s case critically, and builds a defense rooted in the actual record. Call (614) 285-5482 to discuss your situation before your arraignment.',
  },
];

export default function ColumbusAssaultPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Assault Defense in Columbus", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/assault-defense-columbus"};

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((f: { question: string; answer: string }) => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': { '@type': 'Answer', 'text': f.answer },
    })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map(
      (item: { label: string; href: string }, idx: number) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': item.label,
        'item': `https://www.jjlawohio.com${item.href}`,
      })
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Columbus Assault Defense Attorney"
        description="Assault charge in Columbus, Ohio? Jwayyed Law LLC provides experienced defense at Franklin County Municipal Court. Self-defense, felony escalation defense. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Assault Defense in Columbus, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Columbus is Ohio&apos;s largest city, and the Columbus Division of Police responds to thousands of assault calls each year across the city&apos;s diverse neighborhoods — from the Short North and Arena District to the Eastside and Westside residential neighborhoods, from bar fights near campus to road rage incidents on I-270. An assault charge under Ohio Revised Code 2903.13 is a first-degree misdemeanor at baseline — up to 180 days in jail, a $1,000 fine, and a permanent criminal record accessible to every employer and landlord who runs a background check. More significantly, assault on a Columbus police officer, OSP trooper, or other protected person escalates to a felony, carrying the full weight of Franklin County Court of Common Pleas prosecution. Jwayyed Law LLC provides experienced{' '}
              <Link href="/criminal-defense/assault-charges" className="text-[#b87333] underline hover:opacity-80">assault defense</Link>{' '}
              at Franklin County Municipal Court and throughout Columbus. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              before your arraignment.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Columbus assault charges arise from a wide variety of circumstances: bar confrontations in the Short North or German Village, disputes at OSU game-day events, road rage incidents on I-70 or High Street, neighborhood altercations, and confrontations that police classify as assault even when the defendant acted in self-defense or did not initiate the contact. Each situation requires a tailored defense based on the specific facts, the available evidence, and the identity and role of the alleged victim.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Assault Under R.C. 2903.13 — What the Prosecution Must Prove
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 2903.13 requires the prosecution to prove that the defendant knowingly caused or attempted to cause physical harm to another person, or recklessly caused serious physical harm. The word &ldquo;knowingly&rdquo; is legally significant: the prosecution must prove the defendant was aware that his or her conduct would cause or probably cause the result. Accidental contact, involuntary reactions, and situations where the defendant lacked the required awareness do not satisfy the statute. Our firm evaluates whether the prosecution can actually establish this mental state given the specific facts of the Columbus encounter.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Self-Defense in Columbus Assault Cases
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Self-defense under ORC 2901.05 is the most commonly asserted defense in Columbus assault cases — particularly bar fights, road rage confrontations, and mutual altercations where the defendant did not initiate the contact. Since Ohio&apos;s 2019 self-defense amendments, the prosecution bears the burden of disproving self-defense beyond a reasonable doubt once the defendant presents sufficient evidence that the defense applies. We evaluate whether the defendant reasonably believed force was necessary, whether the defendant was the initial aggressor, and whether the force used was proportionate to the threat.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Body-cam footage from the Columbus Division of Police is often the most important evidence in Columbus assault cases. Officers typically arrive after the confrontation has ended and capture the immediate aftermath — injuries, statements, and the physical scene. We obtain all body-cam footage, available surveillance footage from nearby businesses, and witness information before making any recommendation about strategy. In cases where the video clearly shows who initiated the confrontation, self-defense may be the strongest available argument.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Felony Assault Escalations in Columbus
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When the alleged victim of a Columbus assault is a law enforcement officer, firefighter, EMS worker, school employee, hospital staff member, or other protected person under R.C. 2903.13(C), the charge escalates from a misdemeanor to a felony. Assault on a Columbus Division of Police officer or OSP trooper in the performance of official duties is a fourth-degree felony — processed in Franklin County Court of Common Pleas rather than Franklin County Municipal Court. Our firm scrutinizes whether the alleged victim was actually acting in an official capacity at the time of the incident — officers who are off-duty, acting outside the scope of their duties, or responding in a personal rather than professional capacity may not qualify for the enhanced felony charge.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Expungement of an Assault Conviction in Columbus
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Most first-offense misdemeanor assault convictions under R.C. 2903.13 are eligible for expungement under R.C. 2953.32 after a one-year waiting period from final discharge of the sentence. Once sealed, the assault conviction is removed from the public criminal record and will not appear on standard employer or landlord background checks. This is an important long-term benefit of any Columbus assault defense that results in a conviction — and it is why avoiding a domestic violence charge (R.C. 2919.25) rather than simple assault matters: domestic violence convictions are not expungeable under Ohio law, while simple assault convictions generally are.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The charge classification in a Columbus assault case — whether the disposition is as M1 assault, M4 disorderly conduct, or DV — has lasting expungement consequences. Our firm evaluates plea outcomes with the expungement timeline in mind from the very first hearing, so that the resolution of the current case does not create a permanent obstacle to clearing the record later.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Evidence analysis:</strong> Body-cam footage, surveillance, police reports, and medical records before any hearing</li>
              <li><strong>Self-defense evaluation:</strong> Full factual investigation into who initiated the confrontation</li>
              <li><strong>Felony escalation challenge:</strong> Contesting protected-victim status where the facts do not support felony charges</li>
              <li><strong>Mental state challenge:</strong> Evaluating whether the prosecution can prove knowing conduct as required by R.C. 2903.13</li>
              <li><strong>Charge reduction:</strong> Negotiating reductions to disorderly conduct or other lesser offenses where supported by the facts</li>
              <li><strong>Diversion options:</strong> Pursuing first-offender diversion for dismissal without conviction where available</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have been charged with assault in Columbus or anywhere in Franklin County, contact Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
              Assault charges move quickly — early involvement is essential.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
