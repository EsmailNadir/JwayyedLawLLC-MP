import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Underage OVI Defense Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus underage OVI defense attorney protecting your rights. Skilled representation for underage OVI/DUI charges in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['underage OVI lawyer Columbus OH', 'underage DUI defense attorney Ohio', 'minor OVI attorney', 'Franklin County underage OVI lawyer'],
  openGraph: {
    title: 'Underage OVI Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/ovi-dui-defense/underage-ovi',
  },
  alternates: { canonical: '/ovi-dui-defense/underage-ovi' },
};

const breadcrumbItems = [
  { label: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
  { label: 'Underage OVI', href: '/ovi-dui-defense/underage-ovi' },
];

const faqs = [
  {
    question: 'What is underage OVI in Ohio?',
    answer: 'Underage OVI under Ohio Revised Code 4511.19 applies to drivers under 21 years old with any detectable amount of alcohol in their system. Ohio has a zero-tolerance policy for underage drinking and driving. Even BAC below 0.08% can result in OVI charges for underage drivers. Underage OVI carries severe penalties including license suspension, fines, and mandatory alcohol treatment.',
  },
  {
    question: 'What are the penalties for underage OVI in Ohio?',
    answer: 'Underage OVI penalties in Ohio include: License suspension of 90 days to 2 years, fines of $250 to $1,000, mandatory alcohol assessment and treatment, and potential jail time for higher BAC levels. Underage OVI convictions can affect college admission, scholarships, and future opportunities. Penalties increase significantly for higher BAC levels or prior offenses.',
  },
  {
    question: 'Can underage OVI charges be reduced?',
    answer: 'Underage OVI charges may potentially be reduced through legal challenges, procedural defenses, or negotiations with prosecutors. An experienced underage OVI attorney can evaluate your case, develop defense strategies, and explore all options to reduce charges or minimize penalties.',
  },
  {
    question: 'What should I do if my child is charged with underage OVI?',
    answer: 'If your child is charged with underage OVI, exercise their rights immediately. Do not allow your child to discuss the case without an attorney present. Contact an experienced underage OVI defense attorney right away. You have only 30 days to appeal an administrative license suspension. An attorney can protect your child\'s rights and develop defense strategies.',
  },
  {
    question: 'Will underage OVI affect college admission?',
    answer: 'Underage OVI convictions can potentially affect college admission, scholarships, and future opportunities. However, experienced defense representation can help minimize consequences and protect your child\'s future. An attorney can help understand potential impacts and work toward the best possible outcome.',
  },
];

export default function UnderageOVIPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Underage OVI Defense Lawyer in Columbus, OH"
        description="Experienced legal defense for underage OVI/DUI charges. Protecting your rights and fighting for the best possible outcome."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Underage OVI Charges in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Underage OVI charges in Columbus or throughout Ohio carry severe penalties including license suspension, fines, and potential impact on education and future opportunities. At Jwayyed Law LLC, we provide experienced defense representation for underage OVI charges under Ohio Revised Code 4511.19. Our attorney understands the zero-tolerance policy for underage drinking and driving and defense strategies necessary to protect your rights.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Underage OVI Penalties in Ohio</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>License suspension: 90 days to 2 years</li>
                <li>Fines: $250 to $1,000</li>
                <li>Mandatory alcohol assessment and treatment</li>
                <li>Potential jail time for higher BAC levels</li>
              </ul>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How an Underage OVI Defense Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>License Suspension Appeals:</strong> Challenge administrative suspension within 30 days</li>
              <li><strong>Evidence Challenges:</strong> Challenge evidence and testing procedures</li>
              <li><strong>Defense Strategies:</strong> Develop defenses to minimize consequences</li>
              <li><strong>Future Protection:</strong> Work to protect education and future opportunities</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated underage OVI defense representation in Columbus, Franklin County, and throughout Ohio. We understand that underage OVI charges can affect education and future opportunities. Our attorney works diligently to minimize consequences and protect your future while defending your rights.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

