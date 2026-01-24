import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Workplace Injury Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus workplace injury attorney helping victims recover compensation. Skilled representation for workplace injuries in Ohio. Free consultation: (614) 285-5482',
  keywords: ['workplace injury lawyer Columbus OH', 'workplace injury attorney Ohio', 'workers compensation lawyer', 'Franklin County workplace injury attorney'],
  openGraph: {
    title: 'Workplace Injury Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/personal-injury/workplace-injuries',
  },
  alternates: { canonical: '/personal-injury/workplace-injuries' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Workplace Injuries', href: '/personal-injury/workplace-injuries' },
];

const faqs = [
  {
    question: 'What is workers compensation in Ohio?',
    answer: 'Workers compensation under Ohio Revised Code Chapter 4123 provides benefits to employees injured on the job including medical expenses, lost wages (disability benefits), permanent disability benefits, and death benefits for dependents. Workers compensation is a no-fault system, meaning employees can recover benefits regardless of fault. However, workers compensation generally limits recovery to workers compensation benefits and may not include full compensation for pain and suffering.',
  },
  {
    question: 'Can I file a personal injury lawsuit for a workplace injury?',
    answer: 'Generally, workers compensation is the exclusive remedy for workplace injuries in Ohio, meaning you cannot sue your employer for personal injury. However, you may be able to file a personal injury lawsuit against third parties (not your employer) whose negligence caused your injury including contractors, property owners, equipment manufacturers, or other third parties. An attorney can help determine if you have a third-party claim.',
  },
  {
    question: 'What benefits can I recover from workers compensation?',
    answer: 'Workers compensation benefits in Ohio may include medical expenses for treatment of work-related injuries, temporary total disability benefits (lost wages while unable to work), permanent partial disability benefits, permanent total disability benefits, death benefits for dependents, and vocational rehabilitation benefits. Benefits depend on injury severity and disability level.',
  },
  {
    question: 'What is the statute of limitations for workers compensation claims?',
    answer: 'Under Ohio Revised Code 4123.84, the statute of limitations for workers compensation claims in Ohio is generally 1 year from the date of injury or the date you knew or should have known the injury was work-related. Missing the deadline bars recovery, so it is crucial to act quickly and consult an attorney immediately.',
  },
  {
    question: 'Do I need a workers compensation attorney?',
    answer: 'While you can handle a workers compensation claim yourself, an experienced attorney can significantly improve your chances of receiving benefits and maximizing compensation. Attorneys understand workers compensation law, can challenge denials, negotiate settlements, and represent you at hearings. Most attorneys work on a contingency fee basis.',
  },
];

export default function WorkplaceInjuriesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Workplace Injury Lawyer in Columbus, OH"
        description="Experienced legal representation for workplace injury victims seeking compensation. Fighting for the benefits you deserve."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Workplace Injury Claims in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Workplace injuries in Columbus or throughout Ohio may be covered by workers compensation benefits under Ohio Revised Code Chapter 4123, or may result in third-party personal injury claims against negligent third parties. At Jwayyed Law LLC, we provide experienced representation for workplace injury victims under Ohio workers compensation law and personal injury law. Our attorney understands workers compensation benefits and third-party claims necessary to help you recover.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Workplace Injury Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Workers Compensation:</strong> File workers compensation claims, challenge denials, and maximize benefits</li>
              <li><strong>Third-Party Claims:</strong> Identify third parties whose negligence caused your injury and file personal injury claims</li>
              <li><strong>Benefits Negotiation:</strong> Negotiate workers compensation settlements and maximize compensation</li>
              <li><strong>Hearing Representation:</strong> Represent you at workers compensation hearings and appeals</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated workplace injury representation in Columbus, Franklin County, and throughout Ohio. We understand that workplace injuries can cause serious injuries and financial losses. Our attorney works diligently to file workers compensation claims, identify third-party claims, negotiate benefits, and maximize compensation for our clients.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

