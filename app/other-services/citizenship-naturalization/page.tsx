import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Citizenship & Naturalization Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus citizenship and naturalization attorney helping you become a U.S. citizen. Skilled representation for citizenship applications in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['citizenship naturalization lawyer Columbus OH', 'naturalization attorney Ohio', 'U.S. citizenship lawyer', 'Franklin County citizenship attorney'],
  openGraph: {
    title: 'Citizenship & Naturalization Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/citizenship-naturalization',
  },
  alternates: { canonical: '/other-services/citizenship-naturalization' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Immigration', href: '/other-services/immigration' },
  { label: 'Citizenship & Naturalization', href: '/other-services/citizenship-naturalization' },
];

const faqs = [
  {
    question: 'What are the basic naturalization requirements?',
    answer: 'Under the Immigration and Nationality Act (INA), naturalization generally requires: at least 18 years old; lawful permanent resident for at least 5 years (or 3 years if married to a U.S. citizen); continuous residence and physical presence; good moral character; ability to read, write, and speak English; pass the civics test; and take the Oath of Allegiance. Federal law governs; requirements are subject to change.',
  },
  {
    question: 'What is the 2025 naturalization civics test?',
    answer: 'For applications filed on or after October 20, 2025, USCIS administers a civics test of 20 oral questions drawn from 128 study questions; applicants must answer 12 correctly to pass. Immigration law is federal and subject to USCIS policy updates.',
  },
];

export default function CitizenshipNaturalizationPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Citizenship & Naturalization Lawyer in Columbus, OH"
        description="Experienced legal assistance with citizenship and naturalization. Helping you become a U.S. citizen."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Citizenship & Naturalization in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Citizenship and naturalization in Columbus or throughout Ohio involve the process of becoming a U.S. citizen. At Jwayyed Law LLC, we provide experienced assistance with citizenship and naturalization applications under federal immigration law. Our attorney understands naturalization requirements and can help you apply for U.S. citizenship including preparing for the citizenship test and interview.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated citizenship and naturalization assistance in Columbus, Franklin County, and throughout Ohio. We understand that becoming a U.S. citizen is a significant achievement. Our attorney works diligently to help you navigate the naturalization process and achieve your goal of U.S. citizenship.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

