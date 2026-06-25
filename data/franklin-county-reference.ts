/**
 * Franklin County Reference Data
 * Single source of truth for all Franklin County page content.
 * All data verified April 2026 via live sources.
 * Never hardcode court addresses, statutes, or penalties in page files — import from here.
 */

// ─── TYPES ────────────────────────────────────────────────────────────────────

export interface MayorsCourt {
  suburb: string;
  active: boolean;
  note?: string; // for closed courts
  address?: string;
  phone?: string;
  schedule?: string;
  clerkEmail?: string;
}

export interface SuburbData {
  name: string;
  county: string; // some straddle counties
  population2020: number;
  keyRoads: string[]; // roads/highways where OVI stops are common
  policeAgency: string;
  mayorsCourt: MayorsCourt;
  formerProsecutorTitle?: string; // credential badge shown in templates when set
}

export interface OVIPenalty {
  tier: 'low' | 'high';
  offense: 1 | 2 | 3 | 'felony';
  jailMin: string;
  jailAlt?: string;
  fine: string;
  suspension: string;
  vehicle?: string;
}

// ─── FRANKLIN COUNTY MUNICIPAL COURT ─────────────────────────────────────────

export const FCMC = {
  name: 'Franklin County Municipal Court',
  address: '375 S. High Street, Columbus, OH 43215',
  floors: '12th–15th floors',
  clerkPhone: '(614) 645-8186',
  clerkWebsite: 'https://www.fcmcclerk.com',
  courtWebsite: 'https://www.franklincountymunicourt.org',
  judgeCount: 15, // 14 general + 1 environmental division
  specializedDockets: [
    'HART Court (opioid/drug recovery docket)',
    'MAVS Court (mental health docket)',
    'CATCH Court (human trafficking/prostitution docket)',
  ],
  // Judges current as of January 2026 (verify at franklincountymunicourt.org before citing by name)
  noteOnJudges:
    'Do not cite individual judge names in page content without verifying against the current court roster at franklincountymunicourt.org — judicial assignments change.',
} as const;

// ─── SUBURB DATA ──────────────────────────────────────────────────────────────

export const SUBURBS: SuburbData[] = [
  {
    name: 'Bexley',
    county: 'Franklin',
    population2020: 13888,
    keyRoads: ['East Main Street / US-40', 'East Broad Street / SR-16', 'I-70 at Bexley exits'],
    policeAgency: 'Bexley Police Department',
    mayorsCourt: {
      suburb: 'Bexley',
      active: true,
      address: '2242 E. Main Street, Bexley, OH 43209',
      phone: '(614) 559-4437',
      schedule: 'Alternating Thursdays at 1:00 PM in City Hall Council Chambers',
    },
    formerProsecutorTitle: 'Former Bexley City Prosecutor',
  },
  {
    name: 'Canal Winchester',
    county: 'Franklin / Fairfield (split)',
    population2020: 11000,
    keyRoads: ['US-33 / SR-674 corridor', 'Gender Road', 'Winchester Pike'],
    policeAgency: 'Canal Winchester Police Department',
    mayorsCourt: {
      suburb: 'Canal Winchester',
      active: true,
      address: '45 E. Waterloo Street, Canal Winchester, OH 43110',
      phone: '(614) 837-7691',
      schedule: '1st and 3rd Thursday of each month at 1:00 PM (doors open 12:30 PM)',
    },
  },
  {
    name: 'Dublin',
    county: 'Franklin / Delaware / Union (split)',
    population2020: 52000,
    keyRoads: ['I-270 (Dublin interchange)', 'US-33 / SR-161', 'Avery-Muirfield Drive', 'Bridge Street'],
    policeAgency: 'Dublin Police Department',
    mayorsCourt: {
      suburb: 'Dublin',
      active: true,
      address: '6565 Commerce Parkway, Dublin, OH 43017',
      phone: '(614) 410-4920',
      schedule: 'Every Tuesday — ALS hearings 1:30 PM, pleas 2:00–2:30 PM, pre-trials 2:30–3:15 PM, arraignments/misc 3:00 PM, trials 4:00 PM',
    },
  },
  {
    name: 'Grandview Heights',
    county: 'Franklin',
    population2020: 8000,
    keyRoads: ['Grandview Avenue', 'Fifth Avenue', 'Dublin Road / SR-745'],
    policeAgency: 'Grandview Heights Police Department',
    mayorsCourt: {
      suburb: 'Grandview Heights',
      active: false,
      note:
        'Grandview Heights Mayor\'s Court closed effective December 31, 2023. All cases — past and new — are handled by Franklin County Municipal Court at 375 S. High Street, Columbus, OH 43215, (614) 645-8186.',
    },
  },
  {
    name: 'Grove City',
    county: 'Franklin',
    population2020: 41000,
    keyRoads: ['I-71 (Grove City exits at Stringtown Rd and SR-665)', 'Stringtown Road', 'Hoover Road', 'Broadway'],
    policeAgency: 'Grove City Division of Police',
    mayorsCourt: {
      suburb: 'Grove City',
      active: true,
      address: '3360 Park Street, Grove City, OH 43123',
      phone: '(614) 277-1715',
      schedule:
        'Wednesdays — 9:00 AM for failure-to-comply and interpreter cases; 10:00 AM for criminal cases and minor traffic arraignments',
    },
    formerProsecutorTitle: "Former Grove City Prosecutor & Mayor's Court Prosecutor",
  },
  {
    name: 'Groveport',
    county: 'Franklin',
    population2020: 6500,
    keyRoads: ['SR-317 / Groveport Road', 'I-270 southeast interchange', 'Alum Creek Drive'],
    policeAgency: 'Groveport Police Department',
    mayorsCourt: {
      suburb: 'Groveport',
      active: true,
      address: '655 Blacklick Street, Groveport, OH 43125',
      phone: '(614) 830-2043',
      schedule: 'Contact court at (614) 830-2043 for current hearing dates and times',
      clerkEmail: 'groveport.clerk.of.court@gmail.com',
    },
  },
  {
    name: 'Hilliard',
    county: 'Franklin',
    population2020: 38000,
    keyRoads: ['I-270 (Hilliard-Rome Road exit)', 'Cemetery Road', 'Hilliard-Rome Road', 'Norwich Street'],
    policeAgency: 'Hilliard Division of Police',
    mayorsCourt: {
      suburb: 'Hilliard',
      active: true,
      address: '5171 Northwest Parkway, Hilliard, OH 43026 (Safety Services Building, Norwich Room A)',
      phone: '(614) 334-2348',
      schedule: 'Every Wednesday at 8:00 AM',
    },
  },
  {
    name: 'Marble Cliff',
    county: 'Franklin',
    population2020: 615,
    keyRoads: ['Grandview Avenue', 'Dublin Road / SR-745'],
    policeAgency: 'Marble Cliff Police Department',
    mayorsCourt: {
      suburb: 'Marble Cliff',
      active: false,
      note:
        'Marble Cliff has no independent mayor\'s court. All cases arising in Marble Cliff are handled by Franklin County Municipal Court at 375 S. High Street, Columbus, OH 43215, (614) 645-8186.',
    },
  },
  {
    name: 'New Albany',
    county: 'Franklin / Licking (split)',
    population2020: 12000,
    keyRoads: ['SR-161 / New Albany Road', 'I-270 northeast', 'Johnstown Road'],
    policeAgency: 'New Albany Police Department',
    mayorsCourt: {
      suburb: 'New Albany',
      active: true,
      address: 'Gahanna City Hall, 200 S. Hamilton Road, Gahanna, OH 43230',
      phone: '(614) 342-4080',
      schedule: 'Contact Gahanna City Hall for current schedule',
      note: 'New Albany Mayor\'s Court is administered by the City of Gahanna and held at Gahanna City Hall, 200 S. Hamilton Road, Gahanna, OH 43230, (614) 342-4080. Jwayyed Law LLC regularly appears in New Albany Mayor\'s Court to defend New Albany clients. First-offense OVI and traffic citations from New Albany are typically heard here. Although the court shares facilities with Gahanna City Hall, the client is a New Albany defendant — this is the proper venue for New Albany citations.',
    },
    formerProsecutorTitle: 'Former New Albany Prosecutor',
  },
  {
    name: 'Obetz',
    county: 'Franklin',
    population2020: 4800,
    keyRoads: ['Alum Creek Drive', 'I-270 southeast', 'Frank Road'],
    policeAgency: 'Obetz Police Department',
    mayorsCourt: {
      suburb: 'Obetz',
      active: true,
      address: '4175 Alum Creek Drive, Obetz, OH 43207',
      phone: '(614) 491-3211',
      schedule: 'Every Wednesday at 5:00 PM (enter through Police Department entrance)',
    },
    formerProsecutorTitle: 'Former Obetz Prosecutor',
  },
  {
    name: 'Pickerington',
    county: 'Fairfield / Franklin (split, primarily Fairfield)',
    population2020: 28000,
    keyRoads: ['US-33 / Refugee Road', 'I-70 at Pickerington exits', 'Diley Road'],
    policeAgency: 'Pickerington Police Department',
    mayorsCourt: {
      suburb: 'Pickerington',
      active: true,
      address: '100 Lockville Road, Pickerington, OH 43147 (Pickerington City Hall)',
      phone: '(614) 837-3974 ext. 2417',
      schedule: 'Every Monday at 3:30 PM (if Monday is a holiday, court meets Tuesday)',
    },
    formerProsecutorTitle: "Former Pickerington Mayor's Court Prosecutor",
  },
  {
    name: 'Reynoldsburg',
    county: 'Franklin / Fairfield / Licking (split)',
    population2020: 40000,
    keyRoads: ['US-40 / East Main Street', 'I-70 at Reynoldsburg exits', 'SR-256 / Brice Road'],
    policeAgency: 'Reynoldsburg Division of Police',
    mayorsCourt: {
      suburb: 'Reynoldsburg',
      active: true,
      address: '7232 E. Main Street, Reynoldsburg, OH 43068',
      phone: '(614) 322-6804',
      schedule: 'Every Thursday at 8:30 AM (excluding holidays)',
    },
  },
  {
    name: 'Upper Arlington',
    county: 'Franklin',
    population2020: 36000,
    keyRoads: ['Lane Avenue', 'Riverside Drive', 'SR-315 / Olentangy Freeway', 'Arlington Ave'],
    policeAgency: 'Upper Arlington Police Division',
    mayorsCourt: {
      suburb: 'Upper Arlington',
      active: true,
      address: '3600 Tremont Road, Upper Arlington, OH 43221',
      phone: '(614) 583-5060',
      schedule: 'Every Thursday at noon',
    },
  },
  {
    name: 'Westerville',
    county: 'Franklin / Delaware (split)',
    population2020: 41000,
    keyRoads: ['SR-3 / North State Street', 'I-270 northeast', 'Cleveland Avenue', 'Otterbein Ave'],
    policeAgency: 'Westerville Division of Police',
    mayorsCourt: {
      suburb: 'Westerville',
      active: true,
      address: '229 Huber Village Blvd., Westerville, OH 43081',
      phone: '(614) 901-6419',
      schedule: '1st and 3rd Wednesday of each month at 9:00 AM; trials at 10:00 AM',
      clerkEmail: 'clerkofcourt@westerville.org',
    },
  },
  {
    name: 'Whitehall',
    county: 'Franklin',
    population2020: 18000,
    keyRoads: ['East Main Street / US-40', 'I-270 east', 'SR-317 / South Yearling Road'],
    policeAgency: 'Whitehall Division of Police',
    mayorsCourt: {
      suburb: 'Whitehall',
      active: true,
      address: '360 South Yearling Road, Whitehall, OH 43213',
      phone: '(614) 338-3109',
      schedule:
        'Every Tuesday — 7:45 AM check-in; 8:00 AM traffic cases; 8:15 AM (translator available); 8:30 AM pre-trials; 8:45 AM code enforcement; 9:00 AM criminal cases; 10:15 AM trials (2nd Tuesday only)',
    },
    formerProsecutorTitle: 'Former Whitehall City Prosecutor',
  },
  {
    name: 'Worthington',
    county: 'Franklin',
    population2020: 14000,
    keyRoads: ['High Street / US-23 (North High Street corridor)', 'I-270 north', 'Proprietors Road'],
    policeAgency: 'Worthington Division of Police',
    mayorsCourt: {
      suburb: 'Worthington',
      active: true,
      address: '6550 N. High Street, 1st Floor, Worthington, OH 43085',
      phone: '(614) 786-7351',
      schedule: 'Every Tuesday at 6:00 PM (if Monday holiday, held Wednesday; fifth Tuesdays are special hearings only)',
    },
  },
];

// ─── OVI PENALTIES (R.C. 4511.19 — HB 37 effective April 9, 2025) ────────────

export const OVI_PENALTIES: OVIPenalty[] = [
  {
    tier: 'low',
    offense: 1,
    jailMin: '3 consecutive days (or 3-day certified Driver Intervention Program)',
    fine: '$565–$1,075',
    suspension: '1–3 years',
  },
  {
    tier: 'high',
    offense: 1,
    jailMin: '6 days (3 days jail + 3-day DIP, or 6 days jail if DIP unavailable)',
    fine: '$565–$1,075',
    suspension: '1–3 years',
  },
  {
    tier: 'low',
    offense: 2,
    jailMin: '10 consecutive days',
    jailAlt: 'Alternative: 5 days jail + 18 days continuous house arrest',
    fine: '$715–$1,625',
    suspension: '1–7 years',
    vehicle: '90-day immobilization + 90-day plate impound',
  },
  {
    tier: 'high',
    offense: 2,
    jailMin: '20 consecutive days',
    jailAlt: 'Alternative: 10 days jail + 36 days continuous house arrest',
    fine: '$715–$1,625',
    suspension: '1–7 years',
    vehicle: '90-day immobilization + 90-day plate impound',
  },
  {
    tier: 'low',
    offense: 3,
    jailMin: '30 consecutive days',
    jailAlt: 'Alternative: 15 days jail + 55 days continuous house arrest',
    fine: '$1,040–$2,750',
    suspension: '2–12 years',
    vehicle: 'Criminal forfeiture of vehicle',
  },
  {
    tier: 'high',
    offense: 3,
    jailMin: '60 consecutive days',
    jailAlt: 'Alternative: 30 days jail + 110 days continuous house arrest',
    fine: '$1,040–$2,750',
    suspension: '2–12 years',
    vehicle: 'Criminal forfeiture of vehicle',
  },
  {
    tier: 'low',
    offense: 'felony',
    jailMin: '60–120 day mandatory incarceration or prison (F4)',
    fine: 'Up to $5,000 (F4 felony)',
    suspension: 'Up to life',
    vehicle: 'Criminal forfeiture',
  },
];

export const OVI_BAC_THRESHOLDS = {
  lowTierBlood: '0.08%–0.169%',
  highTierBlood: '0.17% or above',
  lowTierBreath: '0.08–0.169g per 210L',
  highTierBreath: '0.17g or above per 210L',
  lookBackPeriod: '10 years (for 1st/2nd/3rd offense counting); prior offenses beyond 10 years still count for felony (5+ within 20 years)',
  ignitionInterlock:
    'Court may grant unlimited driving privileges with certified ignition interlock device under R.C. 4510.022; first-time defendants who agree to interlock may waive the standard 15-day hard suspension waiting period per HB 37',
  licenseReinstatementFee: '$315',
} as const;

// ─── THEFT PENALTIES (R.C. 2913.02 — effective April 9, 2025) ─────────────────

export const THEFT_DEGREES = [
  { degree: 'M1 (petty theft)', valueRange: 'Under $1,000', maxJail: '180 days', maxFine: '$1,000' },
  { degree: 'F5', valueRange: '$1,000–$7,499', maxJail: '12 months prison', maxFine: '$2,500' },
  { degree: 'F4', valueRange: '$7,500–$149,999', maxJail: '18 months prison', maxFine: '$5,000' },
  { degree: 'F3', valueRange: '$150,000–$749,999', maxJail: '36 months prison', maxFine: '$10,000' },
  { degree: 'F2', valueRange: '$750,000–$1,499,999', maxJail: '8 years prison', maxFine: '$15,000' },
  { degree: 'F1', valueRange: '$1,500,000 or more', maxJail: '11 years prison', maxFine: '$20,000' },
] as const;

// ─── DOMESTIC VIOLENCE (R.C. 2919.25 — verified 2026) ─────────────────────────

export const DOMESTIC_VIOLENCE = {
  statute: 'R.C. 2919.25',
  firstOffenseDegree: 'M1 (physical harm or attempt to cause physical harm to family/household member)',
  threatDegree: 'M4 (threat of force causing fear of imminent harm)',
  felonyEscalation: 'Felony of the 5th degree if the victim is pregnant at the time of the offense (R.C. 2919.25(D)(5)); felony of the 4th degree for one prior DV conviction (R.C. 2919.25(D)(3)); felony of the 3rd degree for two or more prior DV convictions (R.C. 2919.25(D)(4))',
  penalties: {
    M1: { maxJail: '180 days', maxFine: '$1,000' },
    M4: { maxJail: '30 days', maxFine: '$250' },
  },
  lautenberg:
    'A misdemeanor domestic violence conviction triggers the federal Lautenberg Amendment (18 U.S.C. § 922(g)(9)), permanently prohibiting the convicted person from possessing firearms or ammunition under federal law. This is a collateral consequence of even a first-offense misdemeanor DV conviction.',
  familyMember:
    'Includes spouses, former spouses, persons living as spouses, natural parents of the offender\'s children, and other relatives by blood or marriage. Covers cohabitants and former cohabitants within 5 years prior.',
} as const;

// ─── ASSAULT (R.C. 2903.13 — verified 2026) ────────────────────────────────────

export const ASSAULT = {
  statute: 'R.C. 2903.13',
  baseDegree: 'M1 — knowingly causing or attempting to cause physical harm to another person',
  recklessDegree: 'M1 — recklessly causing serious physical harm',
  penalties: {
    M1: { maxJail: '180 days', maxFine: '$1,000' },
  },
  felonyEnhancers: [
    'Assault on a peace officer, firefighter, or emergency medical personnel during official duties → F4',
    'Assault on a caretaker against a functionally impaired person → F4 (F3 with prior)',
    'Assault on corrections officers or youth services employees at a state DRC institution → F3',
    'Assault on local jail staff or probation officers → F5',
    'Assault on school teachers, administrators, or bus operators → F5',
    'Assault on hospital staff or judges/prosecutors during duties → F5 (F4 with prior)',
  ],
} as const;

// ─── DRUG POSSESSION (R.C. 2925.11 — verified April 2026) ─────────────────────

export const DRUG_POSSESSION = {
  statute: 'R.C. 2925.11',
  marijuana: {
    adultUseLegal:
      'Under Ohio\'s adult-use marijuana framework (Issue 2, effective December 7, 2023, and implementing legislation HB 86): adults 21 and older may legally possess up to 2.5 ounces of marijuana and up to 15 grams of marijuana concentrate. Possession within these limits is not a criminal offense.',
    criminalThresholds: {
      minorMisdemeanor: 'Possession of 70.87g–99g (above 2.5 oz adult-use limit, below 100g statutory threshold — no jail, up to $150 fine)',
      M4: '100g–199g (at or above minor misdemeanor threshold; M4 — up to 30 days jail, up to $250 fine)',
      F5: '200g–999g (at or above bulk amount; F5 aggravated possession — up to 12 months prison, up to $2,500 fine)',
      F3: '1,000g–4,999g (F3 aggravated possession)',
      F2: '5,000g–19,999g (F2 aggravated possession)',
      F1: '20,000g or more (F1 aggravated possession)',
    },
    note: 'Verify current Ohio marijuana law at codes.ohio.gov — thresholds have evolved since Issue 2. Adults may also legally home-cultivate up to 6 plants.',
  },
  cocainePossession: { baseDegree: 'F5', note: 'Escalates with quantity under R.C. 2925.11(C)(4)' },
  heroinPossession: { baseDegree: 'F5', note: 'Escalates with quantity; fentanyl-contaminated heroin often elevates charge' },
  methPossession: { baseDegree: 'F5 (Schedule II)', note: 'Escalates with quantity' },
  paraphernalia: {
    statute: 'R.C. 2925.14',
    degree: 'M4 (first offense)',
    maxJail: '30 days',
    maxFine: '$250',
  },
} as const;

// ─── DISORDERLY CONDUCT (R.C. 2917.11 — verified 2026) ─────────────────────────

export const DISORDERLY_CONDUCT = {
  statute: 'R.C. 2917.11',
  baseDegree: 'Minor misdemeanor — no jail, up to $150 fine',
  elevatedDegree: 'M4 (up to 30 days jail, up to $250 fine) when:',
  elevationTriggers: [
    'Persists after reasonable warning or request to desist by law enforcement',
    'Offense occurs in the vicinity of a school or school safety zone',
    'Offense occurs in the presence of emergency personnel at an emergency scene',
    'Three or more prior convictions under the intoxication subsection (2917.11(B))',
  ],
  intoxicationSubsection:
    'Division (B): engaging in offensive conduct or creating risk of physical harm while voluntarily intoxicated in a public place is separately prohibited and escalates faster to M4 with priors.',
} as const;

// ─── OPEN CONTAINER (R.C. 4301.62 + 4301.99 — verified 2026) ──────────────────

export const OPEN_CONTAINER = {
  statute: 'R.C. 4301.62',
  penaltyStatute: 'R.C. 4301.99(A)',
  degree: 'Minor misdemeanor — no jail, up to $150 fine',
  prohibits:
    'Possessing an opened container of beer or intoxicating liquor in: agency stores, premises of permit holders, public places, or motor vehicles on streets, highways, or property open to vehicular travel.',
  vehicleNote:
    'Open container in a vehicle on a public road is the most common citation in Franklin County traffic stops. The offense applies to all occupants — driver and passengers.',
  exceptions: [
    'Passengers in chauffeured limousines (rear passenger compartment)',
    'Passengers on commercial quadricycles (up to 36 oz beer or 18 oz wine)',
    'Designated outdoor refreshment areas (ORAs) where authorized',
    'Wine bottles resealed before removal from licensed premises',
  ],
} as const;

// ─── EXPUNGEMENT (R.C. 2953.32 — HB 96 effective September 30, 2025) ────────────

export const EXPUNGEMENT = {
  statute: 'R.C. 2953.32',
  waitingPeriods: {
    minorMisdemeanor: '6 months after final discharge',
    misdemeanorOrF4F5: '1 year after final discharge',
    felonyThirdDegree: '3 years after final discharge',
    solicitingImproperCompensation: '7 years',
    sexOffenderRequirements: '5 years after registration requirements end',
  },
  eligibleOffenses:
    'Most misdemeanors, F3/F4/F5 felonies, minor misdemeanors, and bail forfeitures on misdemeanor charges are eligible after waiting periods.',
  ineligibleOffenses: [
    'Traffic violations under chapters 4506–4511 and 4549 (OVI itself is not sealable)',
    'Felonies of violence of the first or second degree',
    'Sexually oriented offenses requiring registration',
    'Offenses against victims under 13 years old (with limited exceptions)',
    'F1 and F2 felonies generally',
    'Soliciting improper compensation (R.C. 2921.41)',
  ],
  note:
    'OVI convictions under R.C. 4511.19 are not eligible for expungement. However, if an OVI charge is reduced to reckless operation (R.C. 4511.20) by plea agreement, the reckless operation conviction may be eligible for sealing after the applicable waiting period.',
} as const;

// ─── MISDEMEANOR SENTENCING RANGES (R.C. 2929.24 + 2929.28 — verified 2026) ──

export const MISDEMEANOR_SENTENCING = {
  M1: { maxJail: '180 days', maxFine: '$1,000' },
  M2: { maxJail: '90 days', maxFine: '$750' },
  M3: { maxJail: '60 days', maxFine: '$500' },
  M4: { maxJail: '30 days', maxFine: '$250' },
  MM: { maxJail: 'No jail', maxFine: '$150' },
} as const;

// ─── FIRM NAP (unchanged — used in LegalService JSON-LD) ─────────────────────

export const FIRM_NAP = {
  name: 'Jwayyed Law LLC',
  address: '100 E. Campus View Blvd Suite #250, Columbus, OH 43235',
  phone: '(614) 285-5482',
  phoneRaw: '+16142855482',
  geo: { lat: 40.030016, lng: -83.023834 },
  siteUrl: 'https://www.jjlawohio.com',
} as const;

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────────

/** Returns suburb data by name (case-insensitive). */
export function getSuburb(name: string): SuburbData | undefined {
  return SUBURBS.find((s) => s.name.toLowerCase() === name.toLowerCase());
}

/** Returns true if the suburb has an active mayor's court. */
export function hasActiveMayorsCourt(name: string): boolean {
  const suburb = getSuburb(name);
  return suburb?.mayorsCourt.active ?? false;
}
