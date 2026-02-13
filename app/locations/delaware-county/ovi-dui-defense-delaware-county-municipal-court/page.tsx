import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'OVI / DUI Lawyer for Delaware, Ohio | Delaware County Municipal Court | Jwayyed Law LLC',
  description: 'OVI/DUI defense attorney for Delaware and Delaware County, Ohio. Delaware County Municipal Court. First OVI, second OVI, and misdemeanor OVI defense. Schedule consultation: (614) 285-5482',
  keywords: ['OVI lawyer Delaware Ohio', 'DUI attorney Delaware County', 'OVI defense Delaware County', 'Delaware County Municipal Court OVI'],
  openGraph: {
    title: 'OVI / DUI Lawyer for Delaware, Ohio | Delaware County | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court',
  },
  alternates: { canonical: '/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Delaware County', href: '/courts/delaware-county' },
  { label: 'OVI/DUI Defense - Delaware County Municipal Court', href: '/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court' },
];

const faqs = [
  {
    question: 'What are the penalties for OVI in Delaware County Municipal Court?',
    answer: 'OVI penalties in Delaware County Municipal Court under Ohio Revised Code 4511.19 follow state law and depend on offense level. First OVI carries 3-180 days jail (minimum 3 days mandatory), fines of $565-$1,075 (minimum increased under HB 37 effective April 2025), and 1 to 3 years license suspension. License reinstatement fee is $315. Subsequent offenses carry enhanced penalties. An experienced attorney can help minimize consequences.',
  },
  {
    question: 'Can I get limited driving privileges in Delaware County?',
    answer: 'Limited driving privileges may be available in Delaware County after OVI suspension depending on offense level and circumstances. Limited privileges may require ignition interlock devices and restrict driving to work, school, treatment, and necessary activities. An attorney can help determine eligibility and apply for limited privileges.',
  },
  {
    question: 'How do I appeal an administrative license suspension in Delaware County?',
    answer: 'To appeal an administrative license suspension in Delaware County, file an appeal with the Delaware County Municipal Court within 30 days of arrest. Appeals challenge the suspension based on procedural issues, testing procedures, or other legal grounds. An attorney can help file appeals, request stays of suspension, and protect your driving privileges.',
  },
  {
    question: 'What should I do if I am charged with OVI in Delaware County?',
    answer: 'If charged with OVI in Delaware County, exercise your rights immediately. Do not discuss the case without your attorney present. Contact an experienced OVI defense attorney right away. You have only 30 days to appeal an administrative license suspension. An attorney can protect your rights and develop defense strategies.',
  },
  {
    question: 'Do I need a local attorney for OVI in Delaware County?',
    answer: 'While you can hire any Ohio attorney, an attorney familiar with Delaware County courts, Delaware County Municipal Court procedures, and local prosecutors can provide better representation. Local knowledge of court practices, prosecutors, and procedures can help achieve favorable outcomes. An experienced OVI attorney can provide effective representation.',
  },
];

export default function DelawareOVIDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI / DUI Lawyer for Delaware, Ohio"
        description="Delaware County Municipal Court. Experienced OVI/DUI defense for Delaware and Delaware County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">OVI/DUI Defense in Delaware County, Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI/DUI charges in Delaware County, particularly in Delaware County Municipal Court, require experienced defense representation to protect your rights and minimize consequences. At Jwayyed Law LLC, we provide experienced OVI/DUI defense representation in Delaware County under Ohio Revised Code 4511.19. Our attorney understands Delaware County Municipal Court procedures, local prosecutor practices, and judicial preferences, enabling us to provide effective representation tailored to this specific court.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County, located north of Columbus, includes Delaware (the county seat) and surrounding communities. The Delaware County Municipal Court serves as the primary court for OVI/DUI cases occurring throughout Delaware County. Understanding the unique characteristics of this court, including its procedures, prosecutor approaches, and judicial expectations, is essential for achieving favorable outcomes in OVI cases.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Delaware County Municipal Court</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County Municipal Court is located in Delaware, Ohio, and handles all misdemeanor OVI/DUI cases occurring in Delaware County. The court follows Ohio Revised Code 4511.19 for OVI penalties and procedures, but local court practices, prosecutor policies, and judicial preferences can significantly impact case outcomes. Our attorney has extensive experience representing clients in Delaware County Municipal Court and understands the nuances of how OVI cases are handled in this jurisdiction.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">OVI Penalties in Delaware County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI penalties in Delaware County follow Ohio Revised Code 4511.19 and depend on the offense level. First OVI carries mandatory minimum penalties under HB 37 (effective April 2025): 3 days in jail (or driver intervention program), fines of $565 to $1,075, and license suspension of 1 to 3 years. License reinstatement fee is $315. Second OVI and high-tier OVI carry enhanced penalties. Experienced representation can help negotiate reduced penalties or alternative sentencing.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Administrative License Suspension (ALS) in Delaware County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When arrested for OVI in Delaware County, you face two separate proceedings: the criminal OVI case in Delaware County Municipal Court and an administrative license suspension (ALS) through the Ohio Bureau of Motor Vehicles. You have only 30 days from the date of arrest to appeal the ALS suspension, and this appeal must be filed in Delaware County Municipal Court. Our firm immediately files ALS appeals, requests stays of suspension, and challenges the suspension based on procedural issues or testing procedures.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How an OVI/DUI Defense Attorney Can Help in Delaware County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides comprehensive OVI defense representation in Delaware County: immediate ALS appeals, evidence review, motion practice, negotiation with Delaware County prosecutors, trial representation when needed, limited driving privilege assistance, and local court knowledge. We understand that OVI charges can have devastating consequences; our attorney works diligently to challenge evidence, develop defense strategies, and achieve favorable outcomes while protecting your rights and driving privileges.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing OVI charges in Delaware County, contact Jwayyed Law LLC immediately to schedule a consultation. Time is critical—you have only 30 days to appeal an administrative license suspension. We will review your case, explain your rights, discuss potential defenses, and develop a strategy tailored to Delaware County Municipal Court procedures.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
