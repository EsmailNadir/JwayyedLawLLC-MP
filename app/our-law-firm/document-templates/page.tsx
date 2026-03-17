import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Legal Document Templates | Jwayyed Law LLC | Ohio',
  description:
    '8 free Ohio legal document templates: landlord repair requests, demand letters, cease and desist, OVI evidence preservation, and more. Use as a starting point — consult an attorney for your specific situation.',
  keywords: [
    'Ohio legal templates',
    'landlord repair letter',
    'demand letter template',
    'legal forms Ohio',
    'cease and desist letter',
    'security deposit demand letter',
    'OVI evidence preservation',
  ],
  openGraph: {
    title: 'Legal Document Templates | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/our-law-firm/document-templates',
  },
  alternates: { canonical: '/our-law-firm/document-templates' },
};

const breadcrumbItems = [
  { label: 'Our Law Firm', href: '/our-law-firm' },
  { label: 'Document Templates', href: '/our-law-firm/document-templates' },
];

const templates = [
  {
    id: 'landlord-repair',
    category: 'Landlord-Tenant',
    title: 'Landlord Repair Request Letter',
    description:
      'Use this template to notify your landlord in writing of needed repairs — such as heat, plumbing, pest control, or structural issues. Under Ohio Revised Code § 5321.02 and § 5321.07, written notice is required before a tenant may withhold rent, make repairs and deduct costs, or terminate the lease due to habitability failures.',
    practiceHref: '/civil/landlord-tenant-disputes',
    practiceLabel: 'Landlord-Tenant Disputes',
    templateText: `[YOUR NAME]
[YOUR ADDRESS]
[CITY, STATE, ZIP]
[PHONE NUMBER]
[EMAIL ADDRESS]

[DATE]

[LANDLORD\'S NAME]
[LANDLORD\'S ADDRESS OR PROPERTY MANAGEMENT COMPANY]
[CITY, STATE, ZIP]

Re: Written Notice of Required Repairs — [RENTAL PROPERTY ADDRESS]

Dear [LANDLORD\'S NAME]:

I am writing to formally notify you of conditions at my rental unit located at [RENTAL PROPERTY ADDRESS], which require your immediate attention and repair. I have been a tenant at this property since [MOVE-IN DATE] under the lease agreement dated [LEASE DATE].

The following conditions exist at the property that affect the habitability of the unit:

1. [DESCRIBE REPAIR ISSUE #1 — e.g., "The furnace is not functioning. The unit has had no heat since [DATE]. Temperatures inside the unit have fallen below 50°F."]
2. [DESCRIBE REPAIR ISSUE #2 — e.g., "There is a plumbing leak under the kitchen sink that has caused water damage to the cabinet interior."]
3. [DESCRIBE REPAIR ISSUE #3 — if applicable]

These conditions violate Ohio\'s landlord-tenant law, including Ohio Revised Code § 5321.02, which requires landlords to maintain rental premises in a fit and habitable condition.

Pursuant to ORC § 5321.07, I am requesting that you remedy these conditions within a reasonable time. If repairs are not completed within [NUMBER — typically 30] days of this notice, I reserve all rights available to me under Ohio law, including but not limited to withholding rent, making repairs and deducting costs from rent, or terminating this lease agreement.

Please confirm receipt of this letter in writing and provide a timeline for completing the repairs.

Sincerely,

[YOUR SIGNATURE]
[YOUR PRINTED NAME]

Enclosures: [LIST ANY PHOTOS OR DOCUMENTATION YOU ARE ATTACHING]`,
  },
  {
    id: 'security-deposit',
    category: 'Landlord-Tenant',
    title: 'Security Deposit Demand Letter',
    description:
      'If your landlord has failed to return your security deposit or has made improper deductions, this letter formally demands its return. Ohio Revised Code § 5321.16 requires landlords to return the deposit (with an itemized list of deductions) within 30 days of the tenancy ending. Failure entitles you to double damages plus attorney fees.',
    practiceHref: '/civil/landlord-tenant-disputes',
    practiceLabel: 'Landlord-Tenant Disputes',
    templateText: `[YOUR NAME]
[YOUR CURRENT ADDRESS]
[CITY, STATE, ZIP]
[PHONE NUMBER]
[EMAIL ADDRESS]

[DATE]

[LANDLORD\'S NAME OR PROPERTY MANAGEMENT COMPANY]
[LANDLORD\'S ADDRESS]
[CITY, STATE, ZIP]

Re: Demand for Return of Security Deposit — [FORMER RENTAL ADDRESS]

Dear [LANDLORD\'S NAME]:

I was a tenant at [FORMER RENTAL ADDRESS, UNIT #] from [MOVE-IN DATE] to [MOVE-OUT DATE]. Upon vacating the property, I provided my forwarding address to you in writing on [DATE]. My security deposit in the amount of $[DEPOSIT AMOUNT] has not been returned, nor have I received an itemized written accounting of any deductions.

Under Ohio Revised Code § 5321.16, you are required to return my security deposit, together with any written itemization of deductions, within thirty (30) days of the termination of my tenancy and delivery of my forwarding address. That 30-day deadline has now passed.

I am formally demanding the immediate return of my full security deposit in the amount of $[DEPOSIT AMOUNT]. [ALTERNATIVELY, IF PARTIAL REFUND WAS RECEIVED: On [DATE] I received a partial refund of $[AMOUNT RECEIVED]. I dispute the following deductions as improper: [DESCRIBE DISPUTED DEDUCTIONS].]

If I do not receive payment of $[AMOUNT DEMANDED] within 10 days of the date of this letter, I intend to pursue all available legal remedies, including filing a claim in [COUNTY] County court. Under ORC § 5321.16, if a court finds you wrongfully withheld my deposit, you may be liable for double the amount wrongfully withheld, plus my court costs and attorney fees.

Please send payment by check or money order payable to [YOUR NAME] to the address above.

Sincerely,

[YOUR SIGNATURE]
[YOUR PRINTED NAME]

Enclosures: Copy of Lease, Move-Out Documentation, Proof of Forwarding Address Provided`,
  },
  {
    id: 'personal-injury-demand',
    category: 'Personal Injury',
    title: 'Personal Injury Demand Letter',
    description:
      'A demand letter is typically sent to the at-fault party or their insurance company before filing a lawsuit. It outlines the facts of the incident, your injuries and treatment, your total damages, and a settlement demand. Sending a well-documented demand letter often initiates settlement negotiations and can resolve a claim without litigation.',
    practiceHref: '/personal-injury',
    practiceLabel: 'Personal Injury',
    templateText: `[YOUR NAME]
[YOUR ADDRESS]
[CITY, STATE, ZIP]
[PHONE NUMBER]
[EMAIL ADDRESS]

[DATE]

[INSURANCE COMPANY NAME or AT-FAULT PARTY\'S NAME]
[ADDRESS]
[CITY, STATE, ZIP]

Re: Demand for Settlement — Claim for Personal Injuries
    Claimant: [YOUR NAME]
    Date of Incident: [DATE OF ACCIDENT]
    Claim/Policy Number: [CLAIM # IF KNOWN]

Dear [CLAIMS ADJUSTER\'S NAME or "To Whom It May Concern"]:

This letter constitutes a formal demand for compensation for the injuries and damages I sustained as a result of the negligence of your insured, [AT-FAULT PARTY\'S NAME], on [DATE OF ACCIDENT].

FACTS OF THE INCIDENT

On [DATE], at approximately [TIME], I was [DESCRIBE WHAT YOU WERE DOING — e.g., "traveling northbound on Main Street in Columbus, Ohio"] when [DESCRIBE HOW THE ACCIDENT HAPPENED — e.g., "your insured, traveling southbound, failed to stop at a red light and struck my vehicle in the intersection"]. [ADD ANY ADDITIONAL RELEVANT FACTS.]

Police responded to the scene. A police report was filed (Report No. [#] with [LAW ENFORCEMENT AGENCY]).

LIABILITY

[AT-FAULT PARTY\'S NAME] was negligent in that [he/she/they] [DESCRIBE NEGLIGENT CONDUCT — e.g., "failed to obey a traffic signal, failed to keep a proper lookout, and operated a motor vehicle in a careless manner"]. As a direct and proximate result of this negligence, I suffered the injuries described below.

MY INJURIES AND MEDICAL TREATMENT

As a result of the incident, I sustained the following injuries: [LIST INJURIES — e.g., "cervical strain, lumbar strain, and contusions to the right shoulder"]. I sought treatment at [HOSPITAL/CLINIC] on [DATE] and received follow-up care from [DOCTOR/SPECIALIST] through [DATE].

SPECIAL DAMAGES (OUT-OF-POCKET LOSSES)

  Emergency room / hospital:          $[AMOUNT]
  Physician / specialist visits:       $[AMOUNT]
  Physical therapy / chiropractic:     $[AMOUNT]
  Prescription medications:            $[AMOUNT]
  Lost wages ([DATES]):                $[AMOUNT]
  Property damage (if applicable):     $[AMOUNT]
  Other expenses:                      $[AMOUNT]
  ─────────────────────────────────────────────
  TOTAL SPECIAL DAMAGES:               $[TOTAL]

GENERAL DAMAGES

In addition to my out-of-pocket losses, I have suffered significant pain, physical limitations, and emotional distress as a result of my injuries. I am seeking $[AMOUNT] for pain and suffering, loss of enjoyment of life, and other general damages.

TOTAL DEMAND

Taking into account all of the above, I demand the total sum of $[TOTAL DEMAND AMOUNT] to resolve this claim in full.

I request your response within 30 days of the date of this letter. I am prepared to discuss a fair resolution; however, if I do not receive a reasonable response, I will pursue all legal remedies available to me, including filing a lawsuit.

Sincerely,

[YOUR SIGNATURE]
[YOUR PRINTED NAME]

Enclosures: Medical Records, Medical Bills, Police Report, Photographs, Proof of Lost Wages`,
  },
  {
    id: 'cease-desist-debt',
    category: 'Consumer / Debt',
    title: 'Cease and Desist Letter (Debt Collector Harassment)',
    description:
      'The Fair Debt Collection Practices Act (FDCPA) gives consumers the right to demand that a debt collector stop contacting them. Once a collector receives this letter, they may generally only contact you to confirm they will stop or to notify you of a specific legal action. Sending this letter by certified mail creates a record of your demand.',
    practiceHref: '/civil',
    practiceLabel: 'Civil Litigation',
    templateText: `[YOUR NAME]
[YOUR ADDRESS]
[CITY, STATE, ZIP]

[DATE]

[DEBT COLLECTION AGENCY NAME]
[ADDRESS]
[CITY, STATE, ZIP]

Re: CEASE AND DESIST ALL COLLECTION COMMUNICATIONS
    Account/Reference Number: [ACCOUNT # IF KNOWN]
    Alleged Creditor: [ORIGINAL CREDITOR NAME]
    Alleged Debt Amount: $[AMOUNT]

To Whom It May Concern:

I am writing in response to your recent attempts to collect the above-referenced alleged debt. Pursuant to the Fair Debt Collection Practices Act, 15 U.S.C. § 1692c(c), I hereby formally demand that you CEASE AND DESIST all further communications with me regarding this alleged debt, including but not limited to telephone calls, letters, emails, text messages, and contact through third parties.

This demand applies to all employees, agents, and affiliates of your organization.

Upon receipt of this letter, you are permitted to contact me only:

  1. To advise me that your collection efforts are being terminated; or
  2. To notify me that you or the original creditor intend to invoke a specific legal remedy.

If you contact me again in violation of this demand, I reserve the right to file a complaint with the Consumer Financial Protection Bureau (CFPB), the Ohio Attorney General\'s Office, and/or pursue civil remedies available under the FDCPA, which may include statutory damages of up to $1,000, actual damages, and attorney fees.

NOTE: This letter is not an acknowledgment that I owe this debt. I dispute the validity of this alleged debt. [OPTIONAL: "Pursuant to 15 U.S.C. § 1692g, I request that you provide written verification of this debt within 30 days."]

I am sending this letter via [CERTIFIED MAIL / RETURN RECEIPT REQUESTED]. Keep a copy for your records.

Sincerely,

[YOUR SIGNATURE]
[YOUR PRINTED NAME]

Sent via Certified Mail, Return Receipt Requested — Tracking #: [TRACKING NUMBER]`,
  },
  {
    id: 'breach-contract',
    category: 'Business / Civil',
    title: 'Business Contract Breach Demand Letter',
    description:
      'When a party to a contract fails to perform their obligations — whether by not paying, not delivering goods or services, or otherwise breaching the agreement — this letter formally puts them on notice of the breach and demands they cure it or face legal action. Sending a written demand before suing is often required and can also facilitate resolution.',
    practiceHref: '/business',
    practiceLabel: 'Business Law',
    templateText: `[YOUR NAME / COMPANY NAME]
[ADDRESS]
[CITY, STATE, ZIP]
[PHONE / EMAIL]

[DATE]

[OTHER PARTY\'S NAME / COMPANY NAME]
[ADDRESS]
[CITY, STATE, ZIP]

Re: Notice of Breach of Contract and Demand for Performance/Payment
    Contract Date: [DATE OF CONTRACT]
    Contract Description: [BRIEF DESCRIPTION — e.g., "Services Agreement for IT consulting services"]

Dear [PARTY\'S NAME]:

I am writing on behalf of [YOUR NAME / COMPANY] regarding the contract dated [DATE] between [YOUR NAME / COMPANY] and [OTHER PARTY\'S NAME / COMPANY] (the "Agreement"). It is my position that you are in material breach of the Agreement, and I am formally demanding that you cure this breach immediately.

TERMS OF THE AGREEMENT

Under the Agreement, [OTHER PARTY] agreed to [DESCRIBE THE OBLIGATION — e.g., "pay the sum of $[AMOUNT] for services rendered by [DATE]" / "deliver [GOODS/SERVICES] by [DATE]" / "complete [WORK] in accordance with the specifications attached to the Agreement"].

NATURE OF THE BREACH

Despite [YOUR NAME/COMPANY] fully performing its obligations under the Agreement, [OTHER PARTY] has failed to [DESCRIBE THE BREACH — e.g., "remit payment in the amount of $[AMOUNT], which was due on [DATE]" / "deliver the agreed goods/services by the contractual deadline of [DATE]"]. [DESCRIBE ANY PRIOR ATTEMPTS TO RESOLVE — e.g., "We have contacted your office on [DATES] requesting payment/performance, but no resolution has been reached."]

DEMAND

I hereby demand that you [DESCRIBE WHAT YOU WANT — e.g., "remit payment in the full amount of $[AMOUNT]" / "complete performance under the Agreement"] within [NUMBER — typically 10–14] days of the date of this letter.

If you fail to cure this breach within the time specified, I will pursue all legal remedies available, including filing a lawsuit for breach of contract seeking damages of $[AMOUNT], plus interest, court costs, and attorney fees as allowed by law [or the Agreement].

This letter is sent without prejudice to any and all rights and remedies available to [YOUR NAME / COMPANY], all of which are expressly reserved.

Please respond in writing to the address above.

Sincerely,

[YOUR SIGNATURE]
[YOUR PRINTED NAME / TITLE]
[COMPANY NAME]`,
  },
  {
    id: 'notice-intent-sue',
    category: 'Civil / Small Claims',
    title: 'Notice of Intent to Sue (Pre-Suit / Small Claims)',
    description:
      'Before filing in small claims court (or any court), sending a formal notice of intent gives the other party a final chance to resolve the dispute and demonstrates good faith on your part. Ohio small claims court handles disputes up to $6,000. This letter is also useful as a general pre-suit notice in any civil matter.',
    practiceHref: '/civil',
    practiceLabel: 'Civil Litigation',
    templateText: `[YOUR NAME]
[YOUR ADDRESS]
[CITY, STATE, ZIP]
[PHONE / EMAIL]

[DATE]

[OTHER PARTY\'S NAME]
[ADDRESS]
[CITY, STATE, ZIP]

Re: NOTICE OF INTENT TO FILE LAWSUIT
    Amount in Dispute: $[AMOUNT]

Dear [OTHER PARTY\'S NAME]:

This letter serves as formal notice of my intent to file a lawsuit against you in [COUNTY] County Court / Ohio Small Claims Court unless this matter is resolved within the time specified below.

NATURE OF THE DISPUTE

[DESCRIBE THE DISPUTE IN PLAIN TERMS — e.g., "On [DATE], you borrowed $[AMOUNT] from me and agreed to repay it by [DATE]. Despite my repeated requests, you have not repaid this amount." / "You provided [SERVICES / GOODS] that were defective / not as agreed, causing me damages of $[AMOUNT]." / "You damaged my property located at [ADDRESS] on [DATE], resulting in repair costs of $[AMOUNT]."]

AMOUNT OWED

The total amount I am seeking is $[TOTAL AMOUNT], which includes:

  Principal amount:     $[AMOUNT]
  Out-of-pocket costs: $[AMOUNT]
  Other damages:       $[AMOUNT]
  ──────────────────────────────
  TOTAL:               $[TOTAL]

DEMAND

I am willing to resolve this matter without going to court. If you pay $[SETTLEMENT AMOUNT] — or if we reach another written agreement — by [DEADLINE DATE, e.g., 14 DAYS FROM DATE OF LETTER], I will consider this matter resolved.

If I do not hear from you or receive payment by that date, I will file my claim in [COUNTY] County Small Claims Court [or appropriate court] and seek judgment for the full amount plus court costs. Filing fees and any judgment against you may negatively affect your credit and could result in wage garnishment or a lien on your property.

Please contact me at [PHONE / EMAIL] to discuss resolution.

Sincerely,

[YOUR SIGNATURE]
[YOUR PRINTED NAME]`,
  },
  {
    id: 'employment-grievance',
    category: 'Employment',
    title: 'Employment Dispute Grievance Letter',
    description:
      'If you have experienced workplace discrimination, harassment, retaliation, unpaid wages, or another employment law violation, documenting your complaint in writing is a critical first step. This letter creates a formal record, puts your employer on notice, and may be required before you can file a claim with the EEOC or Ohio Civil Rights Commission.',
    practiceHref: '/civil',
    practiceLabel: 'Civil Litigation',
    templateText: `[YOUR NAME]
[YOUR JOB TITLE / DEPARTMENT]
[YOUR WORK ADDRESS OR HOME ADDRESS]
[PHONE / EMAIL]

[DATE]

[RECIPIENT NAME — e.g., HR Director, Department Manager, or CEO]
[TITLE]
[COMPANY NAME]
[COMPANY ADDRESS]
[CITY, STATE, ZIP]

Re: Formal Grievance / Complaint — [BRIEF DESCRIPTION, e.g., "Workplace Harassment" / "Unlawful Discrimination" / "Unpaid Wages"]

Dear [RECIPIENT\'S NAME]:

I am submitting this formal written grievance regarding conduct I have experienced [or witnessed] in the workplace that I believe violates [COMPANY NAME]'s policies and/or applicable law. I am bringing this matter to your attention in writing so that it is formally documented and can be addressed promptly.

DESCRIPTION OF THE ISSUE

[DESCRIBE THE PROBLEM IN DETAIL — Be specific and factual. Include dates, times, locations, names of individuals involved, and witnesses if any.]

Date(s) of incident(s): [DATE(S)]
Location(s): [LOCATION]
Individual(s) involved: [NAME(S) AND TITLE(S)]
Witness(es), if any: [NAME(S)]

What occurred: [DESCRIBE IN YOUR OWN WORDS — e.g., "On [DATE], my supervisor [NAME] made the following statements/took the following actions: [DESCRIBE]. This conduct has continued on the following dates: [LIST]. I believe this constitutes [harassment / discrimination based on my race/sex/religion/disability/etc. / retaliation for reporting a prior complaint / failure to pay overtime wages owed]."]

PRIOR COMPLAINTS (IF ANY)

[IF YOU HAVE PREVIOUSLY REPORTED THIS: "I previously reported this issue to [NAME / DEPARTMENT] on [DATE]. I was told [DESCRIBE RESPONSE]. The conduct has continued despite that report."]

[IF THIS IS YOUR FIRST COMPLAINT: "This is my first formal written complaint regarding this matter."]

REQUESTED ACTION

I respectfully request that [COMPANY NAME] investigate this matter promptly and take appropriate corrective action. I am requesting a written response describing the steps the company will take to address my complaint within [14 / 21 / 30] days.

I am willing to cooperate fully with any investigation. Please contact me at [PHONE / EMAIL].

I am retaining a copy of this letter for my records.

Sincerely,

[YOUR SIGNATURE]
[YOUR PRINTED NAME]
[DATE]

Enclosures: [LIST ANY SUPPORTING DOCUMENTS — e.g., emails, text messages, pay stubs, photographs]`,
  },
  {
    id: 'ovi-evidence-preservation',
    category: 'Criminal Defense / OVI',
    title: 'OVI/Criminal Defense Evidence Preservation Demand',
    description:
      'After an OVI or criminal arrest, critical evidence — dashcam footage, bodycam video, breath test records, calibration logs, and dispatch recordings — can be deleted in as little as 30 to 90 days. This letter demands that law enforcement and other parties preserve all evidence related to your arrest before it is destroyed. Send it as soon as possible after your arrest.',
    practiceHref: '/ovi-dui-defense',
    practiceLabel: 'OVI/DUI Defense',
    templateText: `[YOUR NAME or ATTORNEY\'S NAME ON YOUR BEHALF]
[ADDRESS]
[CITY, STATE, ZIP]
[PHONE / EMAIL]

[DATE]

[LAW ENFORCEMENT AGENCY — e.g., Columbus Division of Police / Ohio State Highway Patrol]
[ADDRESS]
[CITY, STATE, ZIP]

[SEND COPIES TO: Prosecuting Attorney\'s Office, Any Other Relevant Agencies]

Re: DEMAND TO PRESERVE EVIDENCE
    Defendant/Subject: [YOUR FULL NAME]
    Date of Birth: [DOB]
    Date of Arrest/Incident: [DATE]
    Location of Arrest/Incident: [LOCATION / INTERSECTION / ADDRESS]
    Arresting Officer(s): [OFFICER NAME(S) AND BADGE NUMBER(S) IF KNOWN]
    Case/Incident Number: [IF KNOWN]

To the Records Custodian and All Relevant Personnel:

PLEASE TAKE NOTICE that [I / my client, (NAME)] was arrested on [DATE] at approximately [TIME] at [LOCATION] in connection with a [OVI / DUI / CRIMINAL] matter. I hereby demand that you IMMEDIATELY PRESERVE AND RETAIN all evidence related to this arrest and incident, including but not limited to the following:

1. RECORDINGS AND VIDEO
   a. All dashcam / in-car video from any patrol vehicle involved in the stop, pursuit, or arrest;
   b. All bodycam / body-worn camera footage from all officers present;
   c. Any surveillance camera footage from the scene or adjacent properties;
   d. All dispatch audio recordings related to this incident.

2. BREATH TESTING / CHEMICAL TEST RECORDS
   a. The complete breath test result printout, including all data points;
   b. Calibration and maintenance records for the breath testing instrument used;
   c. Records of the operator\'s certification and training;
   d. All records related to the observation period prior to the breath test.

3. FIELD SOBRIETY TEST RECORDS
   a. All notes, reports, and documentation related to administered field sobriety tests;
   b. Any scoring sheets or evaluation forms.

4. OFFICER RECORDS
   a. All police reports, supplemental reports, and notes related to this incident;
   b. The arresting officer\'s training records related to OVI investigation and field sobriety testing.

5. ADMINISTRATIVE LICENSE SUSPENSION (ALS) RECORDS
   a. The ALS notice and all supporting documentation;
   b. The arresting officer\'s sworn report.

6. ANY OTHER EVIDENCE
   a. Photographs taken at the scene;
   b. Any physical evidence collected;
   c. Any other records related to this arrest, stop, or investigation.

DUTY TO PRESERVE: Evidence that is destroyed or not preserved after receipt of this notice may give rise to sanctions, adverse inference instructions, and/or suppression of evidence in a court of law.

Please confirm in writing that this evidence has been preserved and provide instructions for submitting a public records request.

Sincerely,

[YOUR SIGNATURE]
[YOUR PRINTED NAME]

Sent via: [CERTIFIED MAIL / HAND DELIVERY / EMAIL]
Tracking or Confirmation #: [IF APPLICABLE]`,
  },
];

export default function DocumentTemplatesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Free Ohio Legal Document Templates"
        description="Download free legal document templates for common Ohio legal situations. Landlord repair requests, demand letters, cease and desist, and more."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-3 leading-relaxed">
            Below are 8 free legal document templates for common Ohio legal situations. Each
            template includes real, fill-in-the-blank text you can copy and adapt. These templates
            are a starting point — they are{' '}
            <strong>not a substitute for legal advice</strong>. For guidance specific to your
            situation,{' '}
            <Link href="/contact" className="text-[#b87333] font-semibold hover:underline">
              consult with an attorney
            </Link>{' '}
            or call us at{' '}
            <a href="tel:6142855482" className="text-[#b87333] font-semibold hover:underline">
              (614) 285-5482
            </a>
            .
          </p>
          <p className="font-['Inter',_'Arial',_sans-serif] text-gray-600 text-sm mb-10 leading-relaxed">
            Jump to:{' '}
            {templates.map((t, i) => (
              <span key={t.id}>
                <a href={`#${t.id}`} className="text-[#b87333] hover:underline">
                  {t.title}
                </a>
                {i < templates.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>

          <div className="space-y-16">
            {templates.map((t) => (
              <div key={t.id} id={t.id} className="scroll-mt-20">
                <span className="inline-block text-xs font-semibold text-[#b87333] uppercase tracking-wider bg-[#b87333]/10 px-3 py-1 rounded-full mb-3">
                  {t.category}
                </span>
                <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mb-3">
                  {t.title}
                </h2>
                <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 leading-relaxed mb-5">
                  {t.description}
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Template — Copy and Customize
                    </span>
                  </div>
                  <pre className="font-mono text-sm text-gray-800 p-5 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                    {t.templateText}
                  </pre>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                  <p className="font-['Inter',_'Arial',_sans-serif] text-xs text-gray-500 italic flex-1">
                    This is a template only. Laws vary by situation. Consult an attorney for advice
                    specific to your circumstances before sending any legal document.
                  </p>
                  <Link
                    href={t.practiceHref}
                    className="text-sm font-semibold text-[#b87333] hover:underline whitespace-nowrap"
                  >
                    Learn about {t.practiceLabel} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-bold text-gray-900 mb-2">
              Need a Template Not Listed Here?
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 text-sm leading-relaxed">
              We are expanding this section. If you need a specific type of document or form,{' '}
              <Link href="/contact" className="text-[#b87333] font-semibold hover:underline">
                contact us
              </Link>{' '}
              — we may be able to help or point you to the right resources. For complex matters,
              always speak with an attorney before proceeding.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
