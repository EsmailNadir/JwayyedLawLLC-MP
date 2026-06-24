import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Columbus Domestic Violence Defense | Jwayyed Law LLC',
  description: 'Domestic violence defense in Columbus, Ohio. Lautenberg firearm prohibition, DV not expungeable. Jwayyed Law LLC — Franklin County Municipal Court. (614) 285-5482.',
  keywords: [
    'Columbus domestic violence lawyer',
    'Columbus Ohio DV defense attorney',
    'domestic violence attorney Columbus',
    'Franklin County domestic violence defense',
    'Columbus domestic violence charge lawyer',
    'domestic violence ORC 2919.25 Columbus',
  ],
  openGraph: {
    title: 'Columbus Domestic Violence Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Domestic Violence Defense — Columbus', href: '/locations/franklin-county/domestic-violence-defense-columbus' },
];

const faqs = [
  {
    question: 'Where are Columbus domestic violence cases heard?',
    answer: 'Domestic violence charges arising in Columbus are processed at Franklin County Municipal Court, 375 S. High Street, Columbus, OH 43215 (floors 12–15), (614) 645-8186. Misdemeanor DV charges — including first-offense M1 and M4 charges — are handled there through arraignment, pretrial, and resolution. Felony DV escalations (prior convictions, pregnant victim) are bound over to Franklin County Court of Common Pleas. Temporary protection order (TPO) proceedings are also handled at Franklin County Municipal Court.',
  },
  {
    question: 'Can a Columbus DV charge be dropped if the alleged victim recants?',
    answer: 'No. In Ohio, the decision to prosecute belongs to the state — not the alleged victim. Once the Columbus Division of Police submits an arrest report, the Franklin County prosecutor proceeds with the case regardless of whether the alleged victim recants, refuses to cooperate, or asks for dismissal. The state can and frequently does proceed with DV prosecutions using other evidence (police reports, 911 recordings, physical evidence) even when the alleged victim will not testify. An attorney can advocate with the prosecutor and challenge the strength of the state\'s independent evidence.',
  },
  {
    question: 'What is the Lautenberg Amendment and why does it matter for a Columbus DV case?',
    answer: 'The Lautenberg Amendment (18 U.S.C. § 922(g)(9)) permanently prohibits anyone convicted of any misdemeanor crime of domestic violence — including a first-offense M4 threat conviction — from possessing or purchasing firearms or ammunition under federal law. This prohibition is lifetime, applies to all occupations (including law enforcement and military), and cannot be restored under Ohio law. For Columbus residents who own firearms, work in law enforcement or security, or serve in the military, this permanent prohibition is often the most severe consequence of a DV conviction.',
  },
  {
    question: 'Can a domestic violence conviction in Columbus be expunged?',
    answer: 'No. Ohio Revised Code 2953.36 specifically lists domestic violence convictions under R.C. 2919.25 as ineligible for expungement or record sealing in Ohio. A DV conviction is permanent and cannot be removed from your record regardless of how long ago it occurred or how clean your record is otherwise. This is one of the most important reasons to fight a DV charge aggressively — a non-DV resolution (such as a plea to disorderly conduct) may be eligible for expungement, but an actual DV conviction is not.',
  },
  {
    question: 'What are the penalties for domestic violence in Columbus?',
    answer: 'Under R.C. 2919.25, a first-offense DV causing physical harm or attempt is an M1 (up to 180 days jail, $1,000 fine). Threatening a family or household member with force is an M4 (up to 30 days jail, $250 fine). A first-offense DV where the victim is pregnant escalates to an F5 felony. One prior DV conviction elevates the charge to an F4 felony. Two or more prior DV convictions result in an F3 felony. These criminal penalties are accompanied by a mandatory temporary protection order, potential loss of firearms under the Lautenberg Amendment, and permanent ineligibility for expungement — making a non-DV resolution critically important.',
  },
  {
    question: 'What DV defenses are available in Columbus?',
    answer: 'Columbus domestic violence defense strategies include: self-defense under ORC 2901.05 (prosecution bears burden of disproving self-defense once raised); challenging the credibility of the alleged victim\'s account against available video, physical, and medical evidence; identifying inconsistencies between the initial 911 call and later statements; evaluating whether the alleged victim has recanted or provided contrary information; and pursuing a plea to disorderly conduct or other non-DV offense that avoids the Lautenberg firearm prohibition and retains expungement eligibility.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus domestic violence charge?',
    answer: 'Jwayyed Law LLC provides experienced domestic violence defense at Franklin County Municipal Court in Columbus. DV cases are prosecuted by the state regardless of victim wishes, and the consequences — permanent Lautenberg firearm prohibition, no expungement ever — make a dismissal or non-DV resolution critically important. Our firm investigates fully, challenges evidence and credibility, and pursues every available alternative to a DV conviction. Call (614) 285-5482 immediately — the decisions made in the first 48 hours matter enormously.',
  },
];

export default function ColumbusDomesticViolencePage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Domestic Violence Defense in Columbus", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-columbus"};

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
        title="Columbus Domestic Violence Defense Attorney"
        description="Facing DV charges in Columbus? Jwayyed Law LLC defends domestic violence cases at Franklin County Municipal Court. Lautenberg Amendment, no expungement — fight aggressively. (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Domestic Violence Defense in Columbus, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A domestic violence arrest in Columbus triggers consequences before any court date: the Columbus Division of Police makes an immediate arrest when probable cause exists, a temporary protection order is typically issued the same night, and the Ohio state prosecution machine — not the alleged victim — controls what happens next. Domestic violence charges under Ohio Revised Code 2919.25 are prosecuted aggressively in Franklin County, and the consequences of a conviction extend far beyond a fine or a brief jail sentence. A misdemeanor DV conviction permanently prohibits firearm possession under federal law (the Lautenberg Amendment), is not eligible for expungement under Ohio law, and follows the defendant into every employment application, housing search, and professional licensing review for the rest of their life. Jwayyed Law LLC provides experienced{' '}
              <Link href="/criminal-defense/domestic-violence" className="text-[#b87333] underline hover:opacity-80">domestic violence defense</Link>{' '}
              at Franklin County Municipal Court in Columbus. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              immediately — the first 48 hours matter.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Columbus is Ohio&apos;s largest city and Franklin County&apos;s population center. Domestic disturbance calls represent one of the most common types of police response in Columbus across all neighborhoods and demographics. The Franklin County prosecutor&apos;s DV unit handles a high volume of cases and proceeds based on the state&apos;s evidence regardless of the alleged victim&apos;s cooperation. In many Columbus DV cases, the most important issue is not the immediate criminal penalties — it is achieving a resolution that is not classified as domestic violence, preserving firearm rights and expungement eligibility.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Domestic Violence Under Ohio Revised Code 2919.25
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              R.C. 2919.25 defines domestic violence as knowingly causing or attempting to cause physical harm to a family or household member (M1 — up to 180 days jail, $1,000 fine); recklessly causing serious physical harm to a family or household member (also M1); or threatening a family or household member with force in a manner that causes the person to believe imminent harm is at risk (M4 — up to 30 days jail, $250 fine). &ldquo;Family or household member&rdquo; is defined broadly to include spouses, former spouses, persons living as spouses, natural parents of shared children, relatives by blood or marriage, and current or former cohabitants within the preceding five years.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Prior DV convictions trigger felony escalation. A second DV conviction where the prior involved a family or household member escalates to an F4 felony (tried in Franklin County Court of Common Pleas, not Franklin County Municipal Court). If the victim in the current case is pregnant, the charge escalates to an F3 felony. These felony escalations carry mandatory incarceration. Our firm scrutinizes prior conviction records carefully — improper use of an out-of-state or dissimilar prior conviction to justify felony escalation is a challenge our firm evaluates in every case.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              The Lautenberg Amendment — A Permanent Federal Consequence
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The federal Lautenberg Amendment (18 U.S.C. § 922(g)(9)) permanently prohibits any person convicted of a misdemeanor crime of domestic violence from possessing, purchasing, or transporting firearms or ammunition under federal law. This prohibition is lifetime, applies regardless of how much time has passed, and cannot be restored by state law. It applies to the M4 threat conviction as well as the M1 physical harm conviction — any DV conviction under R.C. 2919.25 triggers it. It applies to law enforcement officers, military personnel, and civilians alike.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For Columbus residents who own firearms for home defense, for current or aspiring law enforcement officers or military members, or for persons employed in security or armed roles, the Lautenberg prohibition can mean the immediate loss of a career or an essential tool for personal safety — consequences that outlast any jail sentence or fine by decades. This is why our firm pursues every available alternative to a domestic violence conviction, including pleas to disorderly conduct (R.C. 2917.11), which does not trigger the Lautenberg prohibition and is eligible for expungement.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Columbus DV Proceedings at Franklin County Municipal Court
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Domestic violence cases from Columbus are heard at Franklin County Municipal Court, 375 S. High Street (floors 12–15). At arraignment — typically the morning after arrest — the court will set bond conditions and formally issue or continue the temporary protection order (TPO). TPO conditions can prohibit contact with the family home, contact with any person named in the order, and in some cases affect custody arrangements with children. Our firm appears at arraignment and advocates for reasonable bond conditions and appropriately scoped TPO terms from the very first court appearance.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County&apos;s DV prosecution unit is experienced and well-organized. Prosecutors regularly proceed without the alleged victim&apos;s cooperation using 911 call recordings, body-cam footage, medical records, and prior police contact history. Our firm obtains all of this evidence through discovery and evaluates the strength of the state&apos;s independent case before advising on any strategy. When the state&apos;s evidence is weak or inconsistent, our firm pushes for dismissal. When a resolution is appropriate, we pursue non-DV alternatives that protect the client&apos;s rights and future.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Defense Strategies for Columbus DV Cases
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Columbus DV defense strategies depend entirely on the facts. Self-defense under ORC 2901.05 is available when the defendant responded to the alleged victim&apos;s aggression — and Ohio law since 2019 places the burden of disproving self-defense on the prosecution. Credibility challenges are powerful when the alleged victim&apos;s account in the police report is inconsistent with body-cam footage, 911 call content, or their own later statements. In some cases, the alleged victim recants or provides a written statement contradicting the initial police account — while this does not automatically end the prosecution, it significantly weakens the state&apos;s case.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When the facts of the case make acquittal at trial unlikely, our firm focuses on achieving a non-DV resolution. A plea to disorderly conduct under R.C. 2917.11 — while still a conviction — is not a domestic violence conviction. It does not trigger the Lautenberg firearm prohibition. It is eligible for expungement after a 1-year waiting period. For Columbus clients whose primary concern is firearm rights or a clean record in the longer term, securing a disorderly conduct plea rather than a DV conviction is often the most valuable outcome an attorney can achieve.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Emergency arraignment:</strong> Appearing at arraignment to address bond conditions and protection order scope from day one</li>
              <li><strong>Evidence investigation:</strong> All police reports, body-cam footage, 911 recordings, and medical records obtained before any hearing</li>
              <li><strong>Self-defense evaluation:</strong> Full factual investigation into the circumstances of the alleged incident</li>
              <li><strong>Non-DV resolution:</strong> Pursuing disorderly conduct plea or dismissal to preserve firearm rights and expungement eligibility</li>
              <li><strong>Protection order defense:</strong> Contesting overly broad TPO terms that displace you from your home or affect your relationship with children</li>
              <li><strong>Felony escalation challenge:</strong> Scrutinizing prior conviction records used to justify felony DV charges</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have been arrested for domestic violence in Columbus or anywhere in Franklin County, contact Jwayyed Law LLC immediately at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
              The first 48 hours — arraignment, protection order terms, and initial evidence preservation — shape everything that follows in a domestic violence case.
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
