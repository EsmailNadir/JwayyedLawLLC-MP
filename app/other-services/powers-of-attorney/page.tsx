import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Powers of Attorney Lawyer | Columbus',
  description:
    'Durable financial and healthcare powers of attorney under ORC Chapter 1337, drafted before they are needed. Call (614) 285-5482.',
  keywords: [
    'power of attorney attorney Columbus OH',
    'durable power of attorney Ohio',
    'healthcare power of attorney Ohio',
    'financial power of attorney Ohio',
    'ORC 1337 power of attorney',
    'springing power of attorney Ohio',
    'hot powers Ohio',
    'healthcare proxy Ohio',
    'living will Ohio',
  ],
  openGraph: {
    title: 'Powers of Attorney Lawyer | Columbus | Jwayyed Law LLC',
    description: 'Durable financial and healthcare powers of attorney under ORC Chapter 1337. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/other-services/powers-of-attorney',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/other-services/powers-of-attorney' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Estate Planning', href: '/other-services/estate-planning' },
  { label: 'Powers of Attorney', href: '/other-services/powers-of-attorney' },
];

const faqs = [
  {
    question: 'What is the Ohio Uniform Power of Attorney Act and when did it take effect?',
    answer:
      'Ohio enacted the Uniform Power of Attorney Act (UPOAA), codified at ORC 1337.01 through 1337.64, effective March 22, 2012. Before it, Ohio\'s power of attorney statutes were fragmented and inconsistent. The UPOAA set one framework for financial (general) powers of attorney. It defines agents\' duties, expands the default powers agents receive, requires explicit authorization for sensitive "hot powers", sets third-party acceptance obligations, and gives clear rules for durable and springing powers of attorney.',
  },
  {
    question: 'What is the difference between a durable and a non-durable power of attorney?',
    answer:
      "A non-durable power of attorney works only while the principal has legal capacity and ends automatically if the principal becomes incapacitated. A durable power of attorney (DPOA) survives the principal's incapacity. Under ORC 1337.07, a power of attorney is durable if it says the principal's incapacity does not end the agent's authority. Almost every financial power of attorney drafted in Ohio for estate or incapacity planning should be durable. A non-durable POA is usually for one temporary purpose, such as a real estate closing the principal cannot attend.",
  },
  {
    question: 'What is a springing power of attorney and should I use one?',
    answer:
      "A springing power of attorney takes effect only on a triggering event, usually the principal's incapacity, instead of at signing. It limits the agent's authority until help is needed. The drawback is that third parties often want proof of the triggering event, usually a physician's certification of incapacity, before honoring it. That can cause delays at the moment quick action is needed, such as managing finances during a sudden hospitalization. Jwayyed Law LLC, like many estate planning attorneys, recommends an immediately effective durable POA in most cases, often paired with a letter of instruction telling the agent not to act until the principal becomes incapacitated or asks for help.",
  },
  {
    question: 'What are "hot powers" in an Ohio financial power of attorney?',
    answer:
      'Under ORC 1337.34, certain sensitive "hot powers" are not given to an agent unless the document grants them explicitly. They include: making gifts of the principal\'s property (which can affect estate tax planning and Medicaid eligibility); creating, amending or revoking a trust for the principal; changing beneficiary designations on life insurance, retirement or other financial accounts; exercising fiduciary powers the principal holds as trustee; making or revoking a survivorship arrangement; and delegating the agent\'s authority. These powers can change the principal\'s estate plan and are the most open to abuse, so they need explicit language. Standard templates that leave them out can stop an agent from taking needed planning steps during incapacity.',
  },
  {
    question: 'What is a healthcare power of attorney in Ohio and how is it different from a living will?',
    answer:
      'A healthcare power of attorney (also called a healthcare proxy) under ORC 1337.12 appoints an agent to make medical decisions if you cannot make or communicate them. The agent can authorize or refuse treatment, consent to surgery, choose or discharge providers, and arrange care in a hospital, nursing facility or at home. A living will (an advance directive for healthcare) under ORC 2133.02 states your own instructions about life-sustaining treatment at the end of life instead of naming someone to decide. Both belong in a complete Ohio estate plan. The proxy can respond to the actual clinical situation using what they know of your values; the living will gives direct guidance for the situations it covers.',
  },
  {
    question: 'Are third parties required to accept an Ohio power of attorney?',
    answer:
      'Under ORC 1337.52, a person presented with a valid Ohio power of attorney must accept it unless there is a legal justification to refuse. Banks, financial institutions, title companies and government agencies may ask the agent for a certification (a signed statement that the POA is still in effect and the principal has not died or revoked it) and a reasonable time to review the document. They may not demand their own form or decline a properly executed UPOAA-compliant POA without a permissible reason. Refusing a valid POA without good cause can bring liability for attorney fees and costs under ORC 1337.52(E). Some institutions still push back, and a POA drafted by an attorney with explicit statutory citations often helps.',
  },
  {
    question: 'How can I revoke a power of attorney in Ohio?',
    answer:
      "A principal with legal capacity may revoke a power of attorney at any time under ORC 1337.08. The revocation should be (1) in writing and signed by the principal, and (2) delivered to the agent and any known third parties relying on the POA, such as banks and healthcare providers. For real estate, record the revocation with the county recorder. A new POA should expressly revoke all prior ones. The agent's authority also ends automatically at the principal's death; at the principal's divorce if the agent was the spouse (under ORC 1337.11, unless the POA says otherwise); or at the agent's death, incapacity or resignation if no successor agent is named.",
  },
  {
    question: 'Why do I need a power of attorney if I already have a revocable living trust?',
    answer:
      "A trust covers assets titled in the trust's name, and the successor trustee takes over those assets at incapacity. It does not cover everything. A power of attorney is needed for assets and matters outside the trust (tax returns, government benefits, Social Security, Medicare and Medicaid applications); for actions that need personal authority instead of trustee authority (filing a lawsuit for the principal, managing retirement accounts, making gifts); and for healthcare decisions, which a trust cannot authorize. A complete plan has both. Jwayyed Law LLC drafts both as part of every estate plan.",
  },
];

const RELATED = [
  { href: '/other-services/guardianships', title: 'Guardianships', subtitle: 'Court-supervised protection when a POA is no longer possible' },
  { href: '/trusts/revocable-living-trusts', title: 'Revocable living trusts', subtitle: 'Incapacity and probate planning' },
  { href: '/other-services/estate-planning', title: 'Estate planning', subtitle: 'Wills, trusts and a complete estate plan' },
  { href: '/trusts/special-needs-trusts', title: 'Special needs trusts', subtitle: 'Planning for loved ones with disabilities' },
];

export default function PowersOfAttorneyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Powers of attorney in Ohio"
        description="A power of attorney can only be signed while you still have legal capacity. Without one, your family may need a probate court guardianship to pay your bills or make medical decisions."
      />

      <Section
        title="What a power of attorney does"
        intro={
          <p>
            A power of attorney (POA) is a document in which one person (the principal) gives another (the agent, or attorney-in-fact)
            authority to act for them.
          </p>
        }
      >
        <p>
          If you become incapacitated by illness, an accident or cognitive decline and have no durable financial power of attorney, no
          one has legal authority to manage your finances, pay your bills, file your tax returns or run your business affairs without
          going to probate court for a guardianship. That includes your spouse, your adult children and your closest friend. A
          healthcare power of attorney does the same job for medical decisions. With both in place, the person you chose can act
          immediately, privately and without court involvement.
        </p>
        <p>
          Ohio&rsquo;s framework is the Ohio Uniform Power of Attorney Act at ORC 1337.01 through 1337.64, effective March 22, 2012. It
          standardized the law across the state, clarified agents&rsquo; duties, named the &ldquo;hot powers&rdquo; that need explicit
          authorization, created third-party acceptance obligations and provided a statutory short form. A POA drafted from the form
          without legal advice often misses provisions that matter when it is finally used: hot powers for Medicaid planning or gifting,
          authority over digital accounts, or healthcare-specific directives.
        </p>
      </Section>

      <Section title="Types of powers of attorney in Ohio" tone="ice">
        <PointGrid
          points={[
            {
              title: 'General (financial) durable POA',
              body: 'Broad authority over banking, investments, real estate, taxes, business operations, government benefits and more. Gifts, trust changes and beneficiary changes still need explicit language. During incapacity, this is the document your agent uses to pay bills, file taxes and manage your estate.',
            },
            {
              title: 'Limited (special) POA',
              body: 'Authority for one task: signing at a real estate closing, managing one bank account, selling a vehicle. It is usually non-durable and ends when the task is done or on a stated date. It does not replace an estate planning POA.',
            },
            {
              title: 'Healthcare POA (healthcare proxy)',
              body: 'Under ORC 1337.12, your proxy makes medical decisions (treatment, surgery consent, end-of-life care, choice of facility) if you cannot communicate or decide. Choose someone who knows your values, your preference between aggressive and comfort-focused care, and your wishes on life-sustaining treatment.',
            },
            {
              title: 'Living will',
              body: 'Under ORC 2133.02, your own written instructions about life-sustaining treatment, used alongside the healthcare POA.',
            },
          ]}
        />
      </Section>

      <Section title="A power of attorney or a guardianship">
        <p>
          Without these documents, your family must petition the probate court for a{' '}
          <Link href="/other-services/guardianships">guardianship</Link>.
        </p>
        <FactTable
          title="What each path involves"
          rows={[
            {
              label: 'Guardianship',
              value:
                'Takes weeks, costs thousands of dollars in attorney fees and court costs, and places your affairs under court supervision indefinitely. The guardian files annual reports and accountings, needs prior court approval for major decisions, and keeps incurring legal fees.',
            },
            {
              label: 'Durable POA and healthcare proxy',
              value: 'Signed in advance. Your chosen person acts immediately, privately and at far lower cost, a fraction of one year of guardianship administration.',
            },
          ]}
        />
        <Callout title="Sign while you have capacity">
          A POA can only be signed while the principal has legal capacity. Once that is gone, guardianship is the only option, so these
          documents belong before a health crisis. Young adults need them too: if an 18-year-old is hurt in a car accident, parents may
          not be able to get medical and financial information without a POA, because an adult child is legally independent.
        </Callout>
      </Section>

      <Section title="What the firm does" tone="ice">
        <p>
          Jwayyed Law LLC prepares financial (general) and healthcare powers of attorney for clients in Columbus, Franklin County and
          throughout Ohio as part of estate plans. Each one is drafted around the size and make-up of your estate, your healthcare
          preferences, the agent you have chosen, and your Medicaid and estate planning goals.
        </p>
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <LocationsWeServe title="Other Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
