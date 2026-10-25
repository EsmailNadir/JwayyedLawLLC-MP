import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Shareholder Disputes Lawyer Ohio',
  description:
    'Ohio shareholder disputes under ORC Chapter 1701: minority oppression, director duties, deadlock, records demands, derivative suits and buyouts.',
  keywords: ['shareholder disputes lawyer Columbus OH', 'minority shareholder oppression Ohio', 'ORC 1701 attorney', 'corporate dissolution Ohio', 'derivative suit Ohio', 'Franklin County shareholder attorney'],
  openGraph: {
    title: 'Shareholder Disputes Lawyer Ohio | Jwayyed Law LLC',
    description: 'Rights and remedies for shareholders of Ohio corporations, especially close corporations.',
    url: 'https://www.jjlawohio.com/business/shareholder-disputes',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/business/shareholder-disputes' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Shareholder Disputes', href: '/business/shareholder-disputes' },
];

const faqs = [
  {
    question: 'What law governs shareholder disputes in Ohio corporations?',
    answer:
      'Mainly the Ohio General Corporation Law, ORC Chapter 1701. Key sections: ORC 1701.59 (directors’ fiduciary duties), ORC 1701.76 (mergers and dissenting shareholders’ rights), ORC 1701.91 (judicial dissolution) and ORC 1701.37 (shareholders’ right to inspect records). Courts also rely on Ohio common law interpreting these statutes. Close corporations, with few shareholders and no public market for shares, get closer scrutiny because minority shareholders cannot easily sell out.',
  },
  {
    question: 'What is minority shareholder oppression in Ohio?',
    answer:
      "It is when those in control, usually majority shareholders and the directors they elect, use that control to unfairly harm minority shareholders. In close corporations, Ohio courts recognize oppression even when the majority acted within its technical legal authority. Examples: freezing a minority shareholder out of promised employment or management roles; refusing dividends while the majority takes value through excessive pay; diluting minority shares with new stock on unfavorable terms; withholding financial information; and self-dealing at the corporation's expense. Remedies can include a court-ordered buyout, dissolution or damages.",
  },
  {
    question: "What are directors' fiduciary duties under Ohio law?",
    answer:
      "Under ORC 1701.59, directors must act in good faith, in a way they reasonably believe is in or not opposed to the corporation's best interests, and with the care of an ordinarily prudent person in a like position. They also owe a duty of loyalty: no self-dealing and no taking corporate opportunities without proper disclosure and approval. Ohio has codified a limited business judgment rule, so courts generally will not second-guess an informed, good-faith decision. That protection disappears when a director has a conflict of interest, acts in bad faith or fails to get informed before acting.",
  },
  {
    question: 'Can I compel a corporation to let me inspect its books and records?',
    answer:
      "Yes. Under ORC 1701.37, shareholders of record can inspect the articles, regulations, minutes of shareholder meetings, shareholder records and the most recent available financial statements. The request must be in good faith and for a proper purpose, such as investigating possible financial misconduct or valuing shares. If the corporation refuses a proper demand, the shareholder can file a mandamus action in the Common Pleas Court. An inspection demand is often the first step in gathering evidence.",
  },
  {
    question: 'What is a shareholder derivative suit and when is it appropriate?',
    answer:
      "A derivative suit is brought by shareholders on behalf of the corporation, for wrongs done to the corporation itself rather than to a particular shareholder. It fits when directors or officers committed fraud, breached fiduciary duties or self-dealt, and the corporation (controlled by the wrongdoers) will not sue. Under Ohio Civil Rule 23.1, the shareholder must allege with particularity the demand made on the board, or why a demand would be futile. Any recovery goes to the corporation, though the shareholder's attorney fees may be awarded if the suit benefits the corporation.",
  },
  {
    question: 'How does judicial dissolution work in Ohio under ORC 1701.91?',
    answer:
      'A shareholder may petition the Common Pleas Court to dissolve the corporation on grounds including: directors are deadlocked, shareholders cannot break the deadlock, and the business is or will be irreparably injured; those in control are acting illegally, oppressively or fraudulently; corporate assets are being misapplied or wasted; or shareholders are deadlocked and have failed to elect directors through at least two consecutive annual meeting dates. Because dissolution destroys the business, courts can order alternatives, including a buyout of the petitioner at fair value. What counts as "fair value" is often heavily contested.',
  },
  {
    question: 'What buyout remedies are available in Ohio shareholder disputes?',
    answer:
      "Courts can order a buyout instead of dissolution under ORC 1701.91, requiring the corporation or the majority to buy the minority's interest at fair value. Shareholders who dissent from certain fundamental transactions, such as mergers under ORC 1701.76, have statutory appraisal rights: a court determines the fair value of their shares and they are paid in cash. Fair value usually takes expert testimony. In a negotiated buyout, know the difference between fair market value (which may apply a minority discount) and fair value under the Ohio statute (which typically does not), because the payout can differ a lot.",
  },
  {
    question: 'What should I do if I suspect my business partner or co-shareholder is misappropriating funds?',
    answer:
      'Talk to an Ohio business attorney before confronting anyone or acting alone; a hasty response can damage your position. Gather and preserve the financial records you can lawfully access. Your attorney can then send a formal demand for an accounting and a books-and-records inspection under ORC 1701.37. If assets are at risk of being moved or destroyed, your attorney can seek emergency injunctive relief in Common Pleas Court. A forensic accountant can then reconstruct the finances and quantify damages for fiduciary duty and fraud claims.',
  },
];

const RELATED = [
  { href: '/business/partnership-disputes', title: 'Partnership disputes', subtitle: 'Partnership dissolution and fiduciary duty claims' },
  { href: '/business/business-litigation', title: 'Business litigation', subtitle: 'Commercial disputes and business lawsuits' },
  { href: '/business/business-dissolution', title: 'Business dissolution', subtitle: 'Winding down and dissolving an Ohio business' },
  { href: '/business/non-compete-agreements', title: 'Non-compete agreements', subtitle: 'Enforcing and defending restrictive covenants' },
];

export default function ShareholderDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Shareholder disputes in Ohio"
        description="Freeze-outs, withheld dividends, dilution and director self-dealing in Ohio corporations. Shareholders of record can demand the books under ORC 1701.37, and a court can order a buyout at fair value."
      />

      <Section
        title="Why close corporations are different"
        intro={
          <p>
            A shareholder in a public company can sell when unhappy. A shareholder in a closely held Ohio corporation usually cannot, so
            when the majority uses its control against the minority, the minority is locked in.
          </p>
        }
      >
        <p>
          The firm represents shareholders on both sides of these disputes under ORC Chapter 1701, Ohio&rsquo;s General Corporation Law,
          for clients in Columbus and throughout Ohio, as part of its <Link href="/business">business law services</Link>.
        </p>
        <PointGrid
          points={[
            { title: 'Minority oppression', body: 'Freeze-outs from employment or management, withheld dividends and asset-stripping by controlling shareholders.' },
            { title: 'Director and officer breaches', body: 'Self-dealing, taking corporate opportunities, excessive pay and conflict-of-interest transactions under ORC 1701.59.' },
            { title: 'Deadlock', body: 'Equal shareholders or a split board that leaves the business unable to function, calling for relief under ORC 1701.91.' },
            { title: 'Records disputes', body: 'Enforcing the inspection right under ORC 1701.37 when the corporation refuses access.' },
            { title: 'Derivative suits', body: 'Claims for the corporation against wrongdoing directors, officers or third parties under Ohio Civil Rule 23.1.' },
            { title: 'Dissenters’ rights', body: 'Fair value for shares in mergers, asset sales and other fundamental transactions under ORC 1701.76.' },
            { title: 'Buyouts and valuation', body: 'Litigating or negotiating the fair value of a shareholder’s interest.' },
            { title: 'Dissolution and winding up', body: 'Petitions and the dissolution process under ORC 1701.91 through 1701.95.' },
          ]}
        />
      </Section>

      <Section title="Duties, records and dissolution" tone="ice">
        <FactTable
          title="The ORC Chapter 1701 provisions that drive these cases"
          rows={[
            {
              label: 'Director duties (1701.59)',
              value: 'Good faith, the care of an ordinarily prudent person, and decisions reasonably believed to be in the corporation’s best interests. A limited business judgment rule protects informed, good-faith decisions, but not conflicts, bad faith or uninformed action.',
            },
            {
              label: 'Inspection (1701.37)',
              value: 'Articles, regulations, shareholder meeting minutes, shareholder records and the most recent financial statements, on a good-faith demand for a proper purpose. Refusal can be met with a writ of mandamus.',
            },
            {
              label: 'Dissolution (1701.91)',
              value: 'Director deadlock with irreparable injury, illegal, oppressive or fraudulent conduct, misapplied assets, or a shareholder deadlock that has prevented electing directors for at least two consecutive annual meeting dates.',
            },
            { label: 'Buyout instead', value: 'Courts often order a buyout at fair value rather than dissolve the business.' },
          ]}
          note="Fair value under Ohio law typically does not apply minority or marketability discounts, which makes it a common battleground."
        />
        <Callout title="Inspection usually comes first">
          A records demand lets you and your counsel find financial irregularities and trace self-dealing before deciding whether to sue.
        </Callout>
      </Section>

      <LocationsWeServe title="Business Law" />

      <Section title="How a shareholder dispute proceeds" tone="ice">
        <p>
          Cases are filed in the Common Pleas Court, most often in Franklin County for Columbus-area businesses, under the Ohio Rules of
          Civil Procedure.
        </p>
        <Steps
          steps={[
            { title: 'Demand', body: 'A demand letter or inspection demand, giving the other side a chance to resolve it.' },
            { title: 'Complaint', body: 'Sets out the statutory and common law claims.' },
            {
              title: 'Discovery',
              body: 'Financial records, board minutes, shareholder communications, compensation records and valuations, with forensic accountants and business valuators, especially when dissolution or a buyout is sought.',
            },
            {
              title: 'Resolution',
              body: 'Many cases settle during or after discovery: a negotiated buyout, a new shareholder agreement, changed governance or a structured exit.',
            },
          ]}
        />
        <p>
          Litigation creates a public record. Arbitration and mediated settlements can stay private, which often matters to closely held
          businesses.
        </p>
      </Section>

      <Section title="What the firm does for shareholders">
        <PointGrid
          points={[
            { title: 'Assesses every path', body: 'Negotiation, mediation, arbitration or litigation, and which fits your goals.' },
            { title: 'Demands the records', body: 'Inspection and accounting demands under ORC 1701.37.' },
            { title: 'Seeks emergency relief', body: 'Injunctions in Common Pleas Court when assets are at risk.' },
            { title: 'Works with forensic accountants', body: 'To reconstruct the finances and quantify damages.' },
            { title: 'Litigates or negotiates the buyout', body: 'Including the fair value fight.' },
          ]}
        />
        <p>
          See also <Link href="/business/partnership-disputes">Ohio partnership disputes</Link> and{' '}
          <Link href="/business/business-litigation">Ohio business litigation</Link>. Call <a href="tel:6142855482">(614) 285-5482</a> or{' '}
          <Link href="/contact">schedule a consultation online</Link>.
        </p>
      </Section>

      <Section title="Related business matters" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
