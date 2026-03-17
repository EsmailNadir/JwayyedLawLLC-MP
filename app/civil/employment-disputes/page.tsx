import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Employment Disputes Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio employment disputes attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Protecting your rights. Skilled representation for employment disputes in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['employment disputes lawyer Columbus OH', 'employment attorney Ohio', 'wrongful termination lawyer', 'Franklin County employment attorney'],
  openGraph: {
    title: 'Employment Disputes Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/civil/employment-disputes',
  },
  alternates: { canonical: '/civil/employment-disputes' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Employment Disputes', href: '/civil/employment-disputes' },
];

const faqs = [
  {
    question: `What is wrongful termination in Ohio?`,
    answer: `Ohio is an at-will employment state, which means that in most situations an employer can terminate an employee for any reason — or no reason — without legal liability. However, wrongful termination occurs when an employer fires an employee in violation of a statute, contract, or public policy. The Ohio Supreme Court recognized a public policy exception to at-will employment in Greeley v. Miami Valley Maintenance Contractors, Inc. (1990), which protects employees from discharge for exercising a legal right or duty — such as filing a workers' compensation claim, serving on jury duty, or reporting illegal activity. Wrongful termination can also arise from violations of the Ohio Civil Rights Act (ORC Chapter 4112), federal anti-discrimination statutes, or the terms of an employment contract.`,
  },
  {
    question: `How do I file a discrimination complaint in Ohio?`,
    answer: `Ohio employees who believe they have been discriminated against have two primary administrative routes. The Ohio Civil Rights Commission (OCRC) accepts discrimination charges under ORC Chapter 4112 and must be filed within 2 years of the discriminatory act. Alternatively — or in addition — employees may file a charge with the Equal Employment Opportunity Commission (EEOC) under federal law. Because Ohio is a deferral state, EEOC charges must be filed within 300 days of the discriminatory act (compared to 180 days in non-deferral states). Filing with the EEOC is generally required before bringing a federal lawsuit. An attorney can help you navigate the administrative process, preserve claims in both forums, and evaluate which pathway is most advantageous for your situation.`,
  },
  {
    question: `What is the Ohio Civil Rights Act and what does it protect?`,
    answer: `The Ohio Civil Rights Act (ORC Chapter 4112) is Ohio's primary employment anti-discrimination law. It prohibits employers from discriminating against employees and job applicants on the basis of race, color, religion, sex, national origin, disability, age (for individuals 40 and older), military status, ancestry, and pregnancy. The Act covers employers with four or more employees and applies to hiring, firing, compensation, job assignments, promotions, and other terms and conditions of employment. ORC 4112.99 allows employees to bring a civil lawsuit directly in court within 2 years of the discriminatory act, in addition to the administrative route through the OCRC. Discrimination claims under ORC Chapter 4112 can result in back pay, front pay, compensatory damages, and attorney fees.`,
  },
  {
    question: `What is Ohio's whistleblower protection law?`,
    answer: `Ohio's Whistleblower Protection Act, ORC 4113.52, protects employees who report certain illegal activities by their employers. Under ORC 4113.52, an employee who reasonably believes a violation of state or federal law has occurred, is occurring, or will occur must first notify the employer in writing and give the employer 24 hours to correct the violation before reporting to a government agency. If the employer retaliates against the employee for making such a report — through termination, demotion, pay reduction, or other adverse action — the employee may bring a civil claim for reinstatement, back pay, and attorney fees. The lawsuit must be filed within 180 days of the retaliatory act. Federal whistleblower protections under various industry-specific statutes may provide additional remedies and different procedures.`,
  },
  {
    question: `What are the filing deadlines for employment discrimination claims in Ohio?`,
    answer: `Missing filing deadlines in employment discrimination cases is typically fatal to the claim, so understanding the applicable deadlines is critical. For EEOC charges under federal law (Title VII, ADEA, ADA), Ohio employees must file within 300 days of the discriminatory act because Ohio is a deferral state. For OCRC charges under Ohio's Civil Rights Act (ORC Chapter 4112), the filing deadline is within 2 years of the discriminatory act. If you choose to file a direct civil lawsuit in Ohio court under ORC 4112.99, that lawsuit must also be filed within 2 years. For FMLA retaliation claims under 29 U.S.C. § 2617, the statute of limitations is 2 years (3 years for willful violations). For workers' compensation retaliation claims under ORC 4123.90, the deadline is 180 days.`,
  },
  {
    question: `What is a hostile work environment in Ohio?`,
    answer: `A hostile work environment is a form of workplace harassment that violates Ohio and federal law when it is based on a protected characteristic — such as race, sex, age, disability, or national origin — and is severe or pervasive enough to create an abusive work environment. Under ORC Chapter 4112 and Title VII, isolated incidents or petty slights generally do not meet the threshold; the conduct must be sufficiently severe or pervasive that a reasonable person would find the environment hostile or abusive, and the victim must subjectively find it hostile. Courts consider the frequency, severity, whether the conduct is physically threatening or humiliating, and whether it interferes with the employee's work performance. Employers can be held liable for hostile work environments created by supervisors or coworkers if they knew or should have known about the conduct and failed to take corrective action.`,
  },
  {
    question: `Can I be fired for filing a workers' compensation claim in Ohio?`,
    answer: `No. Ohio law under ORC 4123.90 explicitly prohibits employers from retaliating against an employee for filing a workers' compensation claim, participating in a workers' compensation proceeding, or exercising any other right under Ohio's workers' compensation laws. Retaliation in violation of ORC 4123.90 can include termination, demotion, reduction in pay, or other adverse employment actions. An employee who is retaliated against for filing a workers' compensation claim may bring a civil lawsuit to recover reinstatement, back pay, and other damages. The lawsuit must be filed within 180 days of the retaliatory act. This protection is part of the broader public policy exception to at-will employment recognized by the Ohio Supreme Court in Greeley v. Miami Valley.`,
  },
  {
    question: `Do I need an attorney for an employment dispute in Ohio?`,
    answer: `Employment disputes involve complex federal and state laws, strict administrative filing deadlines, and the practical challenge of taking on an employer who has legal counsel and institutional resources. An experienced employment attorney can evaluate your claims, identify the strongest legal theories, navigate the administrative process at the EEOC or OCRC, conduct discovery, negotiate settlements, and represent you in court or arbitration. Given that EEOC charges must be filed within 300 days and some state law claims have even shorter deadlines, consulting an attorney promptly after an adverse employment action is important. Jwayyed Law LLC helps employees throughout Ohio understand their rights and pursue employment claims effectively.`,
  },
];

export default function EmploymentDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Employment Disputes Lawyer"
        description="Experienced legal representation for employment disputes. Protecting your rights in the workplace."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Employment Disputes in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Employment disputes in Columbus, Cincinnati, Dayton, or throughout Ohio can involve wrongful termination, workplace discrimination, harassment, retaliation, whistleblower claims, and violations of wage and hour laws. Ohio is an at-will employment state, but that does not mean employers can do whatever they want — both the Ohio Civil Rights Act (ORC Chapter 4112) and a robust set of federal laws including Title VII, the ADEA, the ADA, and the FMLA provide meaningful protections for Ohio employees. As part of our <Link href="/civil" className="text-[#b87333] underline hover:text-[#a06828]">civil litigation practice</Link>, Jwayyed Law LLC represents employees who have been mistreated in the workplace and helps them navigate the complex administrative and judicial processes available under Ohio and federal law. Employment disputes may also involve <Link href="/business/employment-agreements" className="text-[#b87333] underline hover:text-[#a06828]">employment agreement</Link> issues such as non-compete clauses and severance terms.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">The Ohio Civil Rights Act and Protected Classes</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s Civil Rights Act (ORC Chapter 4112) prohibits employment discrimination based on race, color, religion, sex, national origin, disability, age (40 and older), military status, ancestry, and pregnancy. It applies to employers with four or more employees and covers all aspects of the employment relationship — hiring, firing, promotions, compensation, job assignments, and other terms and conditions of employment. ORC 4112.99 allows employees to bring a direct civil lawsuit within 2 years of the discriminatory act, in addition to filing an administrative charge with the Ohio Civil Rights Commission (OCRC). Federal counterparts — Title VII (race, sex, religion, national origin), the Age Discrimination in Employment Act (ADEA, 29 U.S.C. § 623), and the Americans with Disabilities Act (ADA, 42 U.S.C. § 12101) — provide parallel federal protections with their own procedures and remedies.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Wrongful Termination and the Public Policy Exception</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              While Ohio&apos;s at-will employment doctrine gives employers broad authority to terminate employees, the Ohio Supreme Court established an important public policy exception in Greeley v. Miami Valley Maintenance Contractors, Inc. (1990). Under this exception, an employer cannot fire an employee for exercising a right expressly granted by law, for complying with a legal duty, for refusing to engage in illegal conduct, or for reporting illegal activity. Common examples include termination for filing a workers&apos; compensation claim (ORC 4123.90), for jury duty service, or for reporting wage theft or safety violations. Proving a public policy wrongful termination claim requires identifying a clear public policy in an Ohio statute, constitutional provision, or administrative regulation that was violated by the termination.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">EEOC, OCRC, and Filing Deadlines</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Filing deadlines in employment discrimination cases are strictly enforced and missing them permanently bars the claim. Ohio employees pursuing federal discrimination claims must file a charge with the EEOC within 300 days of the discriminatory act (Ohio is a deferral state, which extends the normal 180-day federal deadline). Employees pursuing state law discrimination claims through the OCRC must file within 2 years. If an employee wants to file a direct civil lawsuit in Ohio court under ORC 4112.99, the 2-year limitations period also applies. FMLA retaliation claims under 29 U.S.C. § 2617 have a 2-year limitations period (3 years for willful violations), and workers&apos; compensation retaliation claims under ORC 4123.90 must be filed within 180 days. <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">Contact Jwayyed Law LLC</Link> promptly after an adverse employment action to preserve all available claims.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Whistleblower and Retaliation Protections</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio employees are protected from retaliation for engaging in legally protected activities. Ohio&apos;s Whistleblower Protection Act (ORC 4113.52) protects employees who report employer violations of state or federal law, subject to specific notice requirements. ORC 4123.90 protects employees who file workers&apos; compensation claims or participate in workers&apos; compensation proceedings. Federal law provides additional retaliation protections: Title VII and Ohio&apos;s Civil Rights Act prohibit retaliation for filing discrimination charges or participating in discrimination proceedings; the FMLA (29 U.S.C. § 2615) prohibits retaliation for taking protected leave; and the ADEA protects employees who oppose age discrimination. Retaliation claims can arise even when the underlying discrimination claim is not ultimately proven — the employee need only show they had a reasonable, good-faith belief that a protected activity was occurring.
            </p>

            <LocationsWeServe title="Civil" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How an Employment Disputes Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Claims Evaluation:</strong> Analyze employment issues, identify viable legal theories, and evaluate the strength of your claims</li>
              <li><strong>EEOC and OCRC Charges:</strong> File timely administrative charges with the EEOC (within 300 days) and OCRC (within 2 years)</li>
              <li><strong>Negotiations:</strong> Negotiate severance agreements, settlements, and reinstatement</li>
              <li><strong>Litigation:</strong> Represent you in court or arbitration to pursue employment claims</li>
              <li><strong>Retaliation Claims:</strong> Pursue claims for wrongful termination, retaliation, and workers&apos; compensation retaliation under ORC 4123.90</li>
              <li><strong>Whistleblower Claims:</strong> Advise on and pursue claims under Ohio&apos;s Whistleblower Protection Act (ORC 4113.52)</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Related Civil Litigation Services</h3>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/civil/breach-of-contract" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Breach of Contract</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Enforce or defend contract obligations and recover damages for broken agreements</span>
              </Link>
              <Link href="/civil/debt-collection-defense" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Debt Collection Defense</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Defend against unfair debt collection practices and protect your rights</span>
              </Link>
              <Link href="/civil/defamation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Defamation</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Protect your reputation against false and harmful statements</span>
              </Link>
              <Link href="/civil/appeals" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Appeals</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Challenge unfavorable court decisions in Ohio appellate courts</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
