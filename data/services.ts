export interface ServiceCard {
  title: string;
  href: string;
  description?: string;
}

export const criminalDefenseServices: ServiceCard[] = [
  {
    title: 'Assault Charges',
    href: '/criminal-defense/assault-charges',
    description: 'Defense for misdemeanor assault and related charges.',
  },
  {
    title: 'Domestic Violence',
    href: '/criminal-defense/domestic-violence',
    description: 'Representation in domestic violence and protection order matters.',
  },
  {
    title: 'Criminal Mischief',
    href: '/criminal-defense/criminal-mischief',
    description: 'Defense for property damage and criminal mischief charges.',
  },
  {
    title: 'Criminal Damaging',
    href: '/criminal-defense/criminal-damaging',
    description: 'Defense for criminal damaging allegations under Ohio law.',
  },
  {
    title: 'Criminal Trespass',
    href: '/criminal-defense/criminal-trespass',
    description: 'Defense for trespass and unlawful entry charges.',
  },
  {
    title: 'Petty Theft',
    href: '/criminal-defense/petty-theft',
    description: 'Defense for shoplifting and petty theft accusations.',
  },
  {
    title: 'Resisting Arrest',
    href: '/criminal-defense/resisting-arrest',
    description: 'Defense for resisting arrest and obstruction-related charges.',
  },
  {
    title: 'Obstruction of Official Business',
    href: '/criminal-defense/obstruction-of-official-business',
    description: 'Defense for obstruction of official business charges.',
  },
  {
    title: 'Speeding Tickets',
    href: '/criminal-defense/speeding-tickets',
    description: 'Help fighting speeding tickets and managing points.',
  },
  {
    title: 'Driving Under Suspension',
    href: '/criminal-defense/driving-under-suspension',
    description: 'Defense for driving under suspension charges.',
  },
  {
    title: "No Operator's License",
    href: '/criminal-defense/no-operators-license',
    description: 'Defense for driving without a valid license.',
  },
  {
    title: 'Expungement / Record Sealing',
    href: '/criminal-defense/expungement-record-sealing',
    description: 'Seal or expunge eligible criminal records.',
  },
];

export const oviServices: ServiceCard[] = [
  { title: 'First OVI', href: '/ovi-dui-defense/first-ovi', description: 'Defense for first-time OVI charges.' },
  { title: 'Second OVI', href: '/ovi-dui-defense/second-ovi', description: 'Defense for second OVI within 10 years.' },
  { title: 'Third OVI', href: '/ovi-dui-defense/third-ovi', description: 'Defense for third OVI within 10 years.' },
  { title: 'High-Tier OVI', href: '/ovi-dui-defense/high-tier-ovi', description: 'Defense for high BAC OVI cases.' },
  { title: 'Refusal OVI', href: '/ovi-dui-defense/refusal-ovi', description: 'Cases involving refusal of chemical testing.' },
  { title: 'Underage OVI', href: '/ovi-dui-defense/underage-ovi', description: 'Defense for underage OVI allegations.' },
  { title: 'Commercial DUI (CDL)', href: '/ovi-dui-defense/commercial-dui-cdl', description: 'Protection for commercial drivers facing OVI.' },
  { title: 'OVI with Accident', href: '/ovi-dui-defense/ovi-with-accident', description: 'OVI charges involving an accident or collision.' },
  {
    title: 'Driving Under OVI Suspension',
    href: '/ovi-dui-defense/driving-under-ovi-suspension',
    description: 'Defense for driving under OVI-related suspensions.',
  },
  {
    title: 'Limited Driving Privileges',
    href: '/ovi-dui-defense/limited-driving-privileges',
    description: 'Help obtaining limited driving privileges after OVI.',
  },
];

export const personalInjuryServices: ServiceCard[] = [
  { title: 'Car Accidents', href: '/personal-injury/car-accidents', description: 'Injuries from car crashes across Ohio.' },
  { title: 'Truck Accidents', href: '/personal-injury/truck-accidents', description: 'Collisions involving commercial trucks and semis.' },
  { title: 'Motorcycle Accidents', href: '/personal-injury/motorcycle-accidents', description: 'Serious injuries to riders and passengers.' },
  { title: 'Pedestrian Accidents', href: '/personal-injury/pedestrian-accidents', description: 'Pedestrians struck by vehicles.' },
  { title: 'Slip and Fall', href: '/personal-injury/slip-and-fall', description: 'Premises liability for fall injuries.' },
  { title: 'Premises Liability', href: '/personal-injury/premises-liability', description: 'Unsafe property and hazard-related claims.' },
  { title: 'Dog Bites', href: '/personal-injury/dog-bites', description: 'Dog bite and animal attack injuries.' },
  { title: 'Medical Malpractice', href: '/personal-injury/medical-malpractice', description: 'Claims for medical negligence.' },
  { title: 'Nursing Home Abuse', href: '/personal-injury/nursing-home-abuse', description: 'Abuse and neglect in care facilities.' },
  { title: 'Workplace Injuries', href: '/personal-injury/workplace-injuries', description: 'Injuries occurring on the job.' },
  { title: 'Wrongful Death', href: '/personal-injury/wrongful-death', description: 'Claims for families after a wrongful death.' },
  { title: 'Catastrophic Injuries', href: '/personal-injury/catastrophic-injuries', description: 'Life-changing and severe injuries.' },
];

export const civilServices: ServiceCard[] = [
  { title: 'Breach of Contract', href: '/civil/breach-of-contract', description: 'Disputes involving broken agreements.' },
  { title: 'Real Estate Disputes', href: '/civil/real-estate-disputes', description: 'Conflicts over real property and transactions.' },
  { title: 'Landlord–Tenant Disputes', href: '/civil/landlord-tenant-disputes', description: 'Issues between landlords and tenants.' },
  { title: 'Evictions', href: '/civil/evictions', description: 'Representation in eviction proceedings.' },
  { title: 'Construction Disputes', href: '/civil/construction-disputes', description: 'Contract and defect disputes in construction.' },
  { title: 'Debt Collection Defense', href: '/civil/debt-collection-defense', description: 'Defense against debt collection lawsuits.' },
  { title: 'Employment Disputes', href: '/civil/employment-disputes', description: 'Employment-related civil claims.' },
  { title: 'Defamation', href: '/civil/defamation', description: 'Libel, slander, and reputation-related claims.' },
  { title: 'Civil Protection Orders', href: '/civil/civil-protection-orders', description: 'Protection orders and related relief.' },
  { title: 'Appeals', href: '/civil/appeals', description: 'Appellate representation in civil matters.' },
];

export const businessServices: ServiceCard[] = [
  { title: 'Business Formation', href: '/business/business-formation', description: 'Starting and structuring new businesses.' },
  { title: 'LLC Formation', href: '/business/llc-formation', description: 'Forming and organizing LLCs in Ohio.' },
  {
    title: 'Contract Drafting & Review',
    href: '/business/contract-drafting-review',
    description: 'Drafting and reviewing business contracts and agreements.',
  },
  { title: 'Business Litigation', href: '/business/business-litigation', description: 'Litigation for business disputes.' },
  { title: 'Partnership Disputes', href: '/business/partnership-disputes', description: 'Resolving conflicts between business partners.' },
  { title: 'Shareholder Disputes', href: '/business/shareholder-disputes', description: 'Disputes among corporate shareholders.' },
  { title: 'Non-Compete Agreements', href: '/business/non-compete-agreements', description: 'Drafting and enforcing non-competes.' },
  { title: 'Employment Agreements', href: '/business/employment-agreements', description: 'Employment contracts and policies.' },
  { title: 'Business Compliance', href: '/business/business-compliance', description: 'Ongoing regulatory and legal compliance.' },
  { title: 'Business Dissolution', href: '/business/business-dissolution', description: 'Winding down and closing a business.' },
];

export const otherServices: ServiceCard[] = [
  // Estate planning
  {
    title: 'Estate Planning',
    href: '/other-services/estate-planning',
    description: 'Overview of wills, trusts, powers of attorney, and guardianships.',
  },
  {
    title: 'Estate Planning & Wills',
    href: '/other-services/estate-planning-wills',
    description: 'Core estate planning and will preparation services.',
  },
  {
    title: 'Powers of Attorney',
    href: '/other-services/powers-of-attorney',
    description: 'Financial and health care powers of attorney.',
  },
  {
    title: 'Guardianships',
    href: '/other-services/guardianships',
    description: 'Establishing guardianships for minors and adults.',
  },

  // Probate
  {
    title: 'Probate',
    href: '/other-services/probate',
    description: 'Overview of probate administration and related disputes.',
  },
  {
    title: 'Probate Administration',
    href: '/other-services/probate-administration',
    description: 'Guidance through the Ohio probate process.',
  },
  {
    title: 'Will Contests',
    href: '/other-services/will-contests',
    description: 'Challenging or defending the validity of a will.',
  },
  {
    title: 'Estate Disputes',
    href: '/other-services/estate-disputes',
    description: 'Resolving conflicts among heirs and beneficiaries.',
  },

  // Dispute resolution
  {
    title: 'Dispute Resolution',
    href: '/other-services/dispute-resolution',
    description: 'Alternatives to litigation for resolving legal disputes.',
  },
  {
    title: 'Mediation',
    href: '/other-services/mediation',
    description: 'Neutral mediation services to help parties reach agreement.',
  },
  {
    title: 'Arbitration',
    href: '/other-services/arbitration',
    description: 'Private arbitration to resolve disputes outside of court.',
  },

  // Trusts hub
  {
    title: 'Trusts',
    href: '/trusts',
    description: 'Trust-based planning, including revocable and special needs trusts.',
  },
];

