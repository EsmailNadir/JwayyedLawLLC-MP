import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Civil Protection Orders Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus civil protection orders attorney protecting your rights. Skilled representation for protection orders in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['civil protection orders lawyer Columbus OH', 'protection order attorney Ohio', 'CPO lawyer', 'Franklin County protection order attorney'],
  openGraph: {
    title: 'Civil Protection Orders Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/civil/civil-protection-orders',
  },
  alternates: { canonical: '/civil/civil-protection-orders' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Civil Protection Orders', href: '/civil/civil-protection-orders' },
];

const faqs = [
  {
    question: 'What is a civil protection order in Ohio?',
    answer: 'Civil protection orders (CPO) under Ohio Revised Code 3113.31 are court orders protecting victims of domestic violence, sexual assault, stalking, and other offenses from contact with the person who committed the offense. CPOs can restrict contact, require removal from shared residence, affect custody, and restrict firearms. Violating a CPO is a criminal offense with additional penalties.',
  },
  {
    question: 'How do I get a civil protection order in Ohio?',
    answer: 'To obtain a civil protection order in Ohio, file a petition in the court where you live or where the incident occurred. The court may grant an ex parte temporary protection order immediately if you are in immediate danger, followed by a full hearing where both parties can present evidence. You must prove by a preponderance of evidence that you are entitled to a protection order.',
  },
  {
    question: 'What happens if someone violates a civil protection order?',
    answer: 'Violating a civil protection order in Ohio under ORC 2919.27 is a first-degree misdemeanor for a first violation (up to 180 days jail, $1,000 fine). A second violation within 5 years is a fifth-degree felony (6-12 months, $2,500 fine). Subsequent violations or violations involving weapons carry enhanced penalties. Violation can also result in contempt of court charges.',
  },
  {
    question: 'Can I defend against a civil protection order?',
    answer: 'Yes, you can defend against a civil protection order by challenging the evidence, presenting evidence that you did not commit the alleged offense, or arguing that a protection order is not necessary. You have the right to a hearing and to present evidence in your defense. An experienced attorney can help defend against protection orders and protect your rights.',
  },
  {
    question: 'Do I need a civil protection order attorney?',
    answer: 'Civil protection order proceedings move quickly and can significantly affect your rights including contact restrictions, residence, custody, and firearms. Whether you are seeking a protection order or defending against one, experienced representation is essential to protect your rights. Most attorneys work on hourly fee arrangements and offer consultations.',
  },
];

export default function CivilProtectionOrdersPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Civil Protection Orders Lawyer in Columbus, OH"
        description="Experienced legal representation for civil protection orders. Protecting your rights whether you are seeking or defending against a protection order."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Civil Protection Orders in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Civil protection orders in Columbus or throughout Ohio are court orders protecting victims of domestic violence, sexual assault, stalking, and other offenses. At Jwayyed Law LLC, we provide experienced representation for civil protection orders under Ohio Revised Code 3113.31. Our attorney understands protection order procedures and can help whether you are seeking a protection order or defending against one.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Civil Protection Orders Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Protection Order Petitions:</strong> File protection order petitions and obtain temporary protection orders</li>
              <li><strong>Protection Order Defense:</strong> Defend against protection orders and protect your rights</li>
              <li><strong>Hearing Representation:</strong> Represent you at protection order hearings and present evidence</li>
              <li><strong>Violation Defense:</strong> Defend against protection order violation charges</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated civil protection orders representation throughout Ohio. We understand that protection order proceedings move quickly and can significantly affect your rights. Our attorney works diligently to help victims obtain protection orders and defend against protection orders to protect your rights.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

