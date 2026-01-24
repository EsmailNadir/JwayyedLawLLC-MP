import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Federal Crimes Defense Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus federal crimes defense attorney protecting your rights. Skilled representation for federal criminal charges in Ohio. Free consultation: (614) 285-5482',
  keywords: ['federal crimes lawyer Columbus OH', 'federal defense attorney Ohio', 'federal criminal attorney', 'Franklin County federal lawyer'],
  openGraph: {
    title: 'Federal Crimes Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/criminal-defense/federal-crimes',
  },
  alternates: { canonical: '/criminal-defense/federal-crimes' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Federal Crimes', href: '/criminal-defense/federal-crimes' },
];

const faqs = [
  {
    question: 'What is the difference between federal and state crimes?',
    answer: 'Federal crimes violate federal laws and are prosecuted in federal court by U.S. Attorneys. State crimes violate state laws and are prosecuted in state court by local prosecutors. Federal crimes often involve interstate activity, federal property, federal agencies, or violations of federal regulations. Federal penalties are typically more severe than state penalties, and federal prisons generally have less favorable conditions than state prisons.',
  },
  {
    question: 'What are common federal crimes in Ohio?',
    answer: 'Common federal crimes in Ohio include drug trafficking, mail fraud, wire fraud, bank fraud, identity theft, money laundering, federal weapons violations, immigration crimes, tax evasion, and crimes involving interstate commerce. Federal crimes often involve multiple states, federal agencies, or violations of federal regulations and carry substantial prison time.',
  },
  {
    question: 'What are the penalties for federal crimes?',
    answer: 'Federal crime penalties vary widely but are generally more severe than state penalties. Federal crimes can result in substantial prison time in federal prisons, large fines, restitution, supervised release, and permanent criminal records. Federal sentencing guidelines provide recommended sentences based on offense severity and prior convictions.',
  },
  {
    question: 'Can federal charges be reduced?',
    answer: 'Federal charges may be reduced through cooperation with prosecutors, providing information, or negotiating plea agreements. Federal prosecutors have significant discretion in charging and sentencing. An experienced federal crimes defense attorney can evaluate your case, develop defense strategies, negotiate with federal prosecutors, and work toward the best possible outcome.',
  },
  {
    question: 'What should I do if I am charged with federal crimes?',
    answer: 'If charged with federal crimes, exercise your rights immediately. Do not discuss the case with anyone except your attorney. Contact an experienced federal crimes defense attorney right away. Federal investigations are extensive and require immediate legal representation. Do not make statements to federal agents without your attorney present.',
  },
];

export default function FederalCrimesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Federal Crimes Defense Lawyer in Columbus, OH"
        description="Experienced legal defense for federal criminal charges. Protecting your rights and fighting for the best possible outcome."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Federal Crimes in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Federal crimes in Columbus or throughout Ohio carry severe penalties including substantial prison time in federal prisons, large fines, and permanent criminal records. At Jwayyed Law LLC, we provide experienced defense representation for federal criminal charges prosecuted in U.S. District Court. Our attorney understands federal criminal laws, sentencing guidelines, and defense strategies necessary to protect your rights.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Federal crimes often involve interstate activity, federal property, federal agencies, or violations of federal regulations. Federal penalties are typically more severe than state penalties, and federal prisons generally have less favorable conditions. Federal investigations are extensive and require immediate experienced legal representation.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Common Federal Crimes</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Drug trafficking across state lines</li>
                <li>Mail fraud, wire fraud, and bank fraud</li>
                <li>Identity theft and credit card fraud</li>
                <li>Money laundering</li>
                <li>Federal weapons violations</li>
                <li>Immigration crimes</li>
                <li>Tax evasion and tax fraud</li>
                <li>Crimes involving interstate commerce</li>
              </ul>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Federal Crimes Defense Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Case Investigation:</strong> Review evidence and identify weaknesses in federal prosecution's case</li>
              <li><strong>Defense Strategies:</strong> Develop defenses including lack of intent, insufficient evidence, or constitutional violations</li>
              <li><strong>Negotiation:</strong> Work with federal prosecutors to reduce charges or negotiate plea agreements</li>
              <li><strong>Trial Representation:</strong> Provide aggressive trial advocacy in U.S. District Court</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated federal crimes defense representation in Columbus and throughout Ohio. We understand that federal charges require immediate attention and experienced defense. Our attorney works diligently to investigate cases, develop strong defenses, and achieve favorable outcomes while protecting your rights and freedom.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

