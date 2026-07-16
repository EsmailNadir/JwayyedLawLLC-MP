import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Franklin County Expungement Attorney | Jwayyed Law LLC',
  description: 'Expunge or seal your criminal record in Franklin County. R.C. 2953.32, expanded eligibility under H.B. 96. Franklin County Common Pleas. (614) 285-5482.',
  keywords: ['Franklin County expungement attorney', 'seal criminal record Columbus Ohio', 'expungement Columbus lawyer', 'Ohio record sealing Franklin County', 'Franklin County expungement eligibility'],
  openGraph: {
    title: 'Franklin County Expungement Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/expungement-franklin-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/expungement-franklin-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Expungement — Franklin County', href: '/locations/franklin-county/expungement-franklin-county' },
];

const faqs = [
  {
    question: 'What criminal records can be expunged in Franklin County under Ohio law?',
    answer: 'Under R.C. 2953.32 as expanded by H.B. 96 (effective September 30, 2025), most misdemeanor and many felony convictions in Franklin County are eligible for expungement. Eligible convictions include minor misdemeanors (after six months), M4 and M3 misdemeanors (after one year), M2 and M1 misdemeanors (after one year), F5 and F4 felonies (after one year), F3 felonies (after three years), and certain F2 felonies (after seven years). Arrests that did not result in conviction are eligible immediately. Not eligible: murder, voluntary manslaughter, rape, gross sexual imposition, child abuse offenses, domestic violence (R.C. 2953.36 exclusion), and offenses with a mandatory sex offender registration requirement.',
  },
  {
    question: 'How long must I wait before filing for expungement in Franklin County?',
    answer: 'Under R.C. 2953.32 and H.B. 96, the waiting periods run from completion of sentence (including probation and payment of all fines). Minor misdemeanors: six months. M4 through M1 misdemeanors: one year. F5 and F4 felonies: one year. F3 felonies: three years. F2 felonies (where eligible): seven years. Arrests without conviction: eligible immediately — no waiting period applies. The waiting period is measured from the date you completed all terms of your sentence, not from the conviction date.',
  },
  {
    question: 'Does expungement completely erase my record in Ohio?',
    answer: 'Ohio\'s expungement statute (R.C. 2953.32) seals the conviction record — it is not accessible to the general public, private employers, or landlords through commercial background check services. The sealed record is retained by law enforcement and the court but is not disclosed in standard background checks. You may generally answer "no" on most job and housing applications when asked whether you have been convicted of a crime, once the record is sealed. However, expungement does not erase the record for purposes of firearm rights (for applicable offenses), immigration proceedings, professional licensing boards that have statutory authority to access sealed records, and certain sensitive government positions.',
  },
  {
    question: 'What is the Franklin County expungement process and where is it filed?',
    answer: 'An expungement petition for a Franklin County Municipal Court conviction is filed at Franklin County Municipal Court (375 S. High St., Columbus, OH 43215). An expungement petition for a Franklin County Court of Common Pleas conviction is filed at the Common Pleas court. The petition requires an application, supporting materials, and in many cases a hearing at which the prosecutor may object. The court weighs the applicant\'s interest in sealing against the public\'s interest in knowing the record. Our firm handles the complete filing, hearing preparation, and any prosecutor objection response.',
  },
  {
    question: 'How many convictions can be expunged in Ohio?',
    answer: 'H.B. 96 (effective September 30, 2025) expanded Ohio expungement significantly regarding the number of convictions eligible. Under current law, up to five felony convictions and an unlimited number of misdemeanor convictions may be eligible for sealing, subject to the court\'s discretion. Prior law imposed stricter numerical limits. The new law opens relief for Franklin County residents who previously had too many convictions to qualify.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Franklin County expungement?',
    answer: 'Expungement petitions must be correctly prepared to succeed — and a prosecutor objection can defeat an otherwise eligible petition. Jwayyed Law LLC files expungement petitions at both Franklin County Municipal Court and Franklin County Court of Common Pleas, prepares strong supporting narratives for the court hearing, and responds to any prosecutorial objections. Under H.B. 96, many Franklin County residents who were previously ineligible now qualify. Call (614) 285-5482 to find out if your record can be sealed.',
  },
];

export default function FranklinCountyExpungementPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Expungement and Record Sealing in Franklin County", "serviceType": "Criminal Defense", "areaServed": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/expungement-franklin-county"};

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
        title="Franklin County Expungement Attorney — Seal Your Criminal Record"
        description="Expunge or seal your criminal record in Franklin County. Expanded eligibility under H.B. 96. Jwayyed Law LLC handles petitions at Municipal Court and Common Pleas. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Expungement in Franklin County, Ohio — Sealing Your Criminal Record
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A Franklin County criminal record — whether a misdemeanor OVI, a drug possession charge, a theft citation, or a disorderly conduct conviction — can follow you into job applications, housing searches, professional licensing, and background checks for years after you have completed your sentence. Ohio&apos;s expungement statute, R.C. 2953.32, allows eligible Franklin County residents to petition the court to seal their conviction record from public view. The H.B. 96 amendments (effective September 30, 2025) significantly expanded eligibility — many Franklin County residents who previously could not expunge their records now qualify, including those with multiple misdemeanor convictions and certain felony convictions. Jwayyed Law LLC handles expungement petitions at both Franklin County Municipal Court (for Municipal Court convictions) and Franklin County Court of Common Pleas (for felony and Common Pleas convictions). Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              to find out if your record qualifies.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Who Qualifies for Expungement in Franklin County — H.B. 96 Expanded Eligibility
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s expungement law underwent its most significant expansion in recent years through H.B. 96, which took effect on September 30, 2025. Under current law, Franklin County residents may petition to seal convictions for: any minor misdemeanor conviction (after six months); any M4, M3, M2, or M1 misdemeanor conviction (after one year); any F5 or F4 felony conviction (after one year); any F3 felony conviction (after three years); and certain F2 felony convictions (after seven years), subject to the court&apos;s discretion. Arrests that did not result in conviction — charges that were dismissed, no-billed, or acquitted — are eligible immediately with no waiting period.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              H.B. 96 also changed the numerical limits. Prior law allowed only one felony conviction or a limited number of misdemeanors to be sealed. The new law allows up to five felony convictions and an essentially unlimited number of misdemeanor convictions to be eligible, dramatically expanding relief for Franklin County residents with multiple low-level convictions accumulated over time. A Columbus resident with three misdemeanor disorderly conduct convictions and one minor misdemeanor OVI conviction may now be eligible to seal all four in a single expungement petition.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Offenses That Cannot Be Expunged in Ohio
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              R.C. 2953.36 lists the offenses that are categorically excluded from expungement in Ohio. No expungement is available for: murder and aggravated murder; voluntary and involuntary manslaughter; rape; gross sexual imposition; sexual battery; unlawful sexual conduct with a minor; child pornography offenses; pandering obscenity involving a minor; any conviction for which sex offender registration is required; and domestic violence under R.C. 2919.25. The domestic violence exclusion is particularly significant — a misdemeanor domestic violence conviction under R.C. 2919.25 is not sealable in Ohio, regardless of how much time has passed. This is one reason our firm pursues non-DV pleas (such as disorderly conduct) in appropriate domestic violence cases where expungement eligibility is a priority.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Certain traffic offenses — including OVI convictions — are excluded from expungement under R.C. 4510.35 and related provisions. A standard R.C. 4511.19 OVI conviction is not sealable in Ohio. However, a disorderly conduct or reckless operation charge that resolved an underlying OVI is typically eligible for expungement, since the sealed conviction is for the reduced charge, not the OVI.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              The Expungement Process at Franklin County Courts
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The expungement petition process in Franklin County begins with filing the application at the appropriate court. Misdemeanor convictions from Franklin County Municipal Court are petitioned at Franklin County Municipal Court, 375 S. High St., Columbus, OH 43215. Felony convictions from Franklin County Court of Common Pleas are petitioned at the Common Pleas court at the same address. The petition must include the case number, the specific conviction sought to be sealed, and a supporting statement about the applicant&apos;s rehabilitation and the reasons the sealing serves justice.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              After filing, the prosecutor receives notice and has 60 days to object. If the prosecutor objects, the court schedules a hearing. At the hearing, the court weighs two interests: the applicant&apos;s interest in having the record sealed (rehabilitation, employment, housing) against the state&apos;s legitimate interest in maintaining public records. The judge has discretion to grant or deny even an otherwise eligible petition. A strong supporting narrative — one that explains what led to the conviction, what the applicant has done since, and why sealing serves justice — is essential to success when the prosecutor objects. Our firm prepares comprehensive expungement packages designed to preempt objections and, where objections are filed, to overcome them at hearing.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              What Expungement Means for Your Franklin County Record
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When a Franklin County court grants an expungement petition, the sealed record is no longer accessible through commercial background check services or standard employer and landlord queries. You may generally answer &ldquo;no&rdquo; on job applications, housing applications, and professional licensing applications when asked whether you have been convicted of the sealed offense. The record is retained in secure court files and is accessible to law enforcement and prosecutors — it may be considered in any future criminal proceedings — but it is not disclosed to employers, landlords, or the general public.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For Franklin County residents who have completed their sentences and are rebuilding their professional or personal lives, expungement can remove the barrier that a criminal record creates. Columbus employers — particularly in healthcare, finance, and education — perform background checks, and a sealed record does not appear in those results. If you completed your sentence more than a year ago and your conviction is eligible, the waiting is over — contact us to begin the process.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>.
              Find out whether your Franklin County record qualifies for sealing under Ohio&apos;s expanded expungement law.
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
