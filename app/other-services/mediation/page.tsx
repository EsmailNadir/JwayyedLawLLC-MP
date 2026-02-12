import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Mediation Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio mediation attorney helping you resolve conflicts. Skilled representation for mediation services in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['mediation lawyer Columbus OH', 'mediation attorney Ohio', 'mediation services', 'Franklin County mediation attorney'],
  openGraph: {
    title: 'Mediation Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/mediation',
  },
  alternates: { canonical: '/other-services/mediation' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Dispute Resolution', href: '/other-services/dispute-resolution' },
  { label: 'Mediation', href: '/other-services/mediation' },
];

export default function MediationPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Mediation Lawyer"
        description="Experienced legal assistance with mediation. Helping you resolve conflicts through facilitated negotiation."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Mediation in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Mediation in Columbus, Cincinnati, Dayton, or throughout Ohio is a form of alternative dispute resolution where a neutral third party facilitates negotiation between parties to resolve conflicts. At Jwayyed Law LLC, we provide experienced mediation services under Ohio Revised Code (current as of 2026). Our attorney can serve as a mediator to help parties resolve disputes including business disputes, family matters, civil disputes, and other conflicts without litigation.
            </p>

            <LocationsWeServe title="Other Services" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated mediation services throughout Ohio. We understand that mediation can resolve disputes more efficiently and cost-effectively than litigation. Our attorney works diligently to facilitate productive negotiations and help parties reach mutually acceptable resolutions.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

