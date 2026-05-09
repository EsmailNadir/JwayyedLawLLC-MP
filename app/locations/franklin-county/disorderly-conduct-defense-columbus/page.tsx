import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Columbus Disorderly Conduct Defense | Jwayyed Law',
  description: 'Disorderly conduct charge in Columbus? Minor misdemeanor or M4. Short North, OSU, Arena District arrests. Franklin County Municipal Court. Jwayyed Law LLC. (614) 285-5482.',
  keywords: ['Columbus disorderly conduct lawyer', 'disorderly conduct Columbus Ohio', 'disorderly conduct attorney Franklin County', 'Short North disorderly Columbus', 'Columbus disorderly conduct defense'],
  openGraph: {
    title: 'Columbus Disorderly Conduct Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Disorderly Conduct — Columbus', href: '/locations/franklin-county/disorderly-conduct-defense-columbus' },
];

const faqs = [
  {
    question: 'What is disorderly conduct under Ohio law and how is it charged in Columbus?',
    answer: 'Disorderly conduct in Ohio is defined under R.C. 2917.11. The basic offense occurs when a person (1) recklessly causes inconvenience, annoyance, or alarm, or (2) makes unreasonable noise, uses fighting words, creates a hazardous condition, or engages in other disruptive behavior. The baseline offense is a minor misdemeanor — a $150 fine with no jail time and no criminal record beyond the citation. However, disorderly conduct escalates to a fourth-degree misdemeanor (up to 30 days jail) if the offender persists after a warning, if the conduct is near a school or emergency services, or if the offender is intoxicated.',
  },
  {
    question: 'What areas in Columbus produce the most disorderly conduct arrests?',
    answer: 'Columbus disorderly conduct arrests are concentrated in entertainment and nightlife areas that draw large crowds: the Short North arts district (particularly High Street between I-670 and Clintonville), the OSU campus area (Lane Avenue, High Street near campus), the Arena District (when Nationwide Arena events let out), and Easton Town Center. Ohio State game days — home football games draw 100,000+ to Ohio Stadium — produce significant numbers of disorderly conduct citations, particularly for intoxication-related conduct in the surrounding parking lots and residential streets.',
  },
  {
    question: 'Can a disorderly conduct charge in Columbus be expunged?',
    answer: 'Yes. A disorderly conduct minor misdemeanor conviction is eligible for expungement under R.C. 2953.32 after a six-month waiting period from final discharge. A fourth-degree misdemeanor disorderly conduct conviction is eligible after a one-year waiting period. Under the expanded eligibility in H.B. 96 (effective September 30, 2025), many low-level misdemeanor convictions including disorderly conduct qualify for sealing. Our firm handles disorderly conduct expungement petitions at Franklin County Court of Common Pleas.',
  },
  {
    question: 'Does a disorderly conduct conviction in Columbus affect employment?',
    answer: 'Even a minor misdemeanor disorderly conduct conviction creates a criminal record that appears on background checks. In Columbus, where Ohio State University and many large employers perform pre-employment screening, this matters. Professional licensing — nursing, education, real estate, financial services — may require disclosure of all criminal convictions including minor misdemeanors. Our firm advises on the collateral employment and licensing consequences of a disorderly conduct conviction and pursues dismissal, diversion, or expungement-eligible plea alternatives where possible.',
  },
  {
    question: 'Can a disorderly conduct plea resolve a more serious charge in Columbus?',
    answer: 'Yes. A disorderly conduct plea is commonly used in Columbus to resolve domestic violence charges (R.C. 2919.25) and certain assault charges (R.C. 2903.13) where the facts do not clearly establish the elements of the more serious charge, or where a conviction on the more serious charge would create disproportionate consequences (such as firearm rights loss from a DV conviction). The prosecutor must agree to the reduction, and the specific facts of the case matter. A disorderly conduct resolution avoids the Lautenberg Amendment firearm prohibition that attaches to any misdemeanor DV conviction.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus disorderly conduct charge?',
    answer: 'Even a minor misdemeanor disorderly conduct creates a record, and the difference between a minor misdemeanor and an M4 matters significantly in terms of potential jail time and record consequences. Jwayyed Law LLC defends disorderly conduct charges at Franklin County Municipal Court, pursues diversion and dismissal options, and advises on expungement after disposition. For charges where a DV or assault was reduced to disorderly conduct, we protect against over-prosecution of the original charge. Call (614) 285-5482.',
  },
];

export default function ColumbusDisorderlyConductPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Columbus Disorderly Conduct Defense Attorney"
        description="Disorderly conduct charge in Columbus? Short North, OSU game day, Arena District citations. Minor misdemeanor to M4. Jwayyed Law LLC at Franklin County Municipal Court. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Disorderly Conduct Defense in Columbus, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Columbus is Ohio&apos;s largest city and a major entertainment hub — home to the Short North, the Arena District, Ohio State University, and one of the most active nightlife scenes in the Midwest. When large gatherings, sporting events, and late-night entertainment produce altercations, loud arguments, or intoxicated behavior, Columbus Division of Police regularly issues disorderly conduct citations under R.C. 2917.11. A minor misdemeanor disorderly conduct carries no jail time, but it creates a criminal record that appears on background checks and can affect employment, professional licensing, and housing applications. When the charge escalates to a fourth-degree misdemeanor — which can happen when the person is intoxicated or persists after a police warning — jail time becomes a real possibility. Jwayyed Law LLC defends disorderly conduct charges at Franklin County Municipal Court. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              to protect your record.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Ohio&apos;s Disorderly Conduct Statute — R.C. 2917.11
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              R.C. 2917.11 defines disorderly conduct broadly. A person commits disorderly conduct when they recklessly cause inconvenience, annoyance, or alarm to another by: making unreasonable noise or an offensively coarse utterance, gesture, or display; addressing abusive language to any person present; insulting, taunting, or challenging another in a manner likely to provoke a violent response; creating a condition that is physically offensive or presents a risk of physical harm to others; or engaging in fighting, threatening, or violent behavior.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The baseline offense is a minor misdemeanor — a $150 fine, no jail time, no suspension. However, R.C. 2917.11(E) elevates the offense to a fourth-degree misdemeanor (30 days maximum jail, $250 fine) if: the offender persists in the disorderly conduct after a reasonable warning to stop; the offense is committed near a school, church, or government facility; or — most commonly in Columbus — the offender is intoxicated. The intoxication escalation is significant because Columbus nightlife arrests often involve alcohol, which automatically upgrades the minor misdemeanor to an M4.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Disorderly Conduct Hotspots in Columbus
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The Short North — Columbus&apos;s arts and entertainment district running along High Street from I-670 north through Victorian Village — is the city&apos;s highest-volume area for disorderly conduct citations. Bars, restaurants, and late-night venues draw thousands on weekend nights, and the combination of alcohol, crowded sidewalks, and parking disputes regularly produces R.C. 2917.11 citations. The Columbus Division of Police&apos;s Short North District is specifically staffed to handle the volume of calls in this area.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio State game days create a city-wide enforcement heightening. I-270 and U.S. 23 tailgating, the Lane Avenue bar corridor, and the post-game High Street scene are all heavily patrolled. The Arena District generates similar patterns on Jackets and Clippers game nights. First-time Columbus visitors charged with disorderly conduct during an event often have no other criminal history — their case warrants aggressive pursuit of diversion and dismissal options.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Defense Strategies for Columbus Disorderly Conduct Cases
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Minor misdemeanor disorderly conduct citations are often dismissible or reducible if challenged early. The R.C. 2917.11 &ldquo;recklessly causes inconvenience, annoyance, or alarm&rdquo; standard requires actual proof of the offending conduct beyond a reasonable doubt. Loud speech alone — absent fighting words or genuine threat — may be constitutionally protected under the First Amendment. Mere presence at a disturbance is not disorderly conduct. Columbus dash-cam and body-cam footage often shows less than the citation describes.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For fourth-degree misdemeanor charges based on intoxication, our firm evaluates whether the arresting officer had adequate grounds to determine intoxication and whether the escalation to M4 was properly charged. Diversion programs — including the Franklin County Municipal Court&apos;s pre-trial diversion program — are available for first-time offenders on minor charges and result in dismissal upon completion of conditions. Our firm pursues diversion as the first option in every disorderly conduct case where the client is eligible.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              First Amendment Protections and Disorderly Conduct in Columbus
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A significant portion of Columbus disorderly conduct citations involve verbal confrontations rather than physical conduct. R.C. 2917.11&apos;s prohibition on &ldquo;offensively coarse utterance&rdquo; and &ldquo;abusive language likely to provoke a violent response&rdquo; is constitutionally constrained — these provisions reach only speech that constitutes &ldquo;fighting words&rdquo; under the First Amendment: speech that by its very utterance inflicts immediate injury or tends to incite an immediate breach of the peace. Profanity, loud criticism of police officers, or verbal expressions of anger that are offensive but not imminently threatening are constitutionally protected and cannot support a valid disorderly conduct conviction. Ohio courts, including the Tenth District Court of Appeals, have reversed disorderly conduct convictions where the charged conduct amounted to protected expression rather than the &ldquo;fighting words&rdquo; that the statute lawfully reaches.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              In Columbus, disorderly conduct citations arising from arguments with officers during traffic stops or at the scene of another incident are frequently based on a constitutionally questionable foundation. If the defendant was loud or argumentative but not physically threatening, the First Amendment may provide a defense. Our firm evaluates the constitutional basis for every speech-based disorderly conduct charge.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Disorderly Conduct as a Plea Resolution in Columbus
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A disorderly conduct plea can be a valuable defense tool in Columbus when the original charge — domestic violence, assault, or criminal damaging — carries consequences more severe than the actual conduct warrants. A disorderly conduct conviction is a minor misdemeanor with no jail, no loss of civil rights, and no mandatory reporting obligations. Critically, a disorderly conduct conviction does not trigger the Lautenberg Amendment — the federal prohibition on firearm possession that attaches to any misdemeanor &ldquo;crime of domestic violence&rdquo; conviction under 18 U.S.C. § 922(g)(9). For Columbus defendants facing a domestic violence charge, a negotiated reduction to disorderly conduct can protect firearms rights that would otherwise be permanently lost.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>.
              A disorderly conduct citation in Columbus is more consequential than it appears — and more defensible than you may think.
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
