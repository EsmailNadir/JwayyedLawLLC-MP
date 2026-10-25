# Legal facts to verify

During the 2026 site redesign every page's copy was rewritten, but **every legal fact was carried over exactly as the old page stated it** (checked by `scripts/fact-check.py`). While rewriting, these statements in the original copy looked wrong, outdated or inconsistent with other pages on the site. None has been changed. Each needs a check against the current Ohio Revised Code before the site goes live, then a one-line fix on the page named.

Priority: **High** = likely wrong and affects a reader's decision (penalties, deadlines, eligibility). **Medium** = inconsistent between pages or a citation problem. **Low** = wording or unsourced figure.

## Criminal defense

| Page | Statement on the site | Why it looks wrong | Priority |
|---|---|---|---|
| criminal-defense/petty-theft | Theft "under $150 is a minor misdemeanor" (page and FAQ) | Theft under $1,000 is a first-degree misdemeanor at any value under ORC 2913.02 | High |
| criminal-defense/petty-theft | ORC 2307.61 civil penalty "up to $150" | Check the current figure | Low |
| criminal-defense/marijuana-possession | 2.5 to 10 oz is a minor misdemeanor; 200 g "bulk amount" or more an M4; felonies by multiples of bulk | ORC 2925.11(C)(3) uses gram thresholds for marijuana; the bulk-amount scheme does not apply | High |
| criminal-defense/marijuana-possession | "Ohio courts have held" smell alone cannot justify a search after legalization | Unverified case-law claim | Medium |
| criminal-defense/drug-possession, marijuana-possession | HB 96 effective September 30, 2025 widened sealing; "Ohio was the 24th state" | Unverified dates and figures | Medium |
| criminal-defense/drug-possession | "2.5 to 10 oz is a minor misdemeanor" vs its own 200 g bulk cutoff; "bulk cocaine 15 g+ is F4"; "aggravated possession bulk to 5x bulk is F5" | Internal conflict; the felony degrees look low (bulk to 5x bulk is F3) | High |
| criminal-defense/drug-possession | Intervention in lieu of conviction limited to first-time offenders | Not strictly limited to first offenders | Medium |
| criminal-defense/driving-under-suspension | FAQ 1 says a general DUS is an M1; the body says a first offense is an unclassified misdemeanor | Internal conflict | High |
| criminal-defense/driving-under-suspension, ovi-dui-defense/driving-under-ovi-suspension, ovi-dui-defense/limited-driving-privileges | A first OVI-related DUS carries 30 consecutive days mandatory jail (ORC 4510.14) | The statute's first-offense minimum is 3 consecutive days; the DUS page's own body says 3 | High |
| criminal-defense/driving-under-suspension | "Lack of notice is a complete defense" | Overstated | Low |
| criminal-defense/expungement-record-sealing (also disorderly-conduct, drug-possession, criminal-trespass, criminal-mischief FAQs) | Misdemeanor sealing waiting period of 1 year | SB 288 (2023) may have shortened it to 6 months | High |
| criminal-defense/expungement-record-sealing | Expungement cited as ORC 2953.38; non-conviction sealing as ORC 2953.52 | 2953.38 is the trafficking-victim section; 2953.52 may now be 2953.33 | Medium |
| criminal-defense/expungement-record-sealing | "Prosecutor has 60 days to object"; crimes of violence "never" sealable | Doubtful; conflicts with assault-charges, which says misdemeanor assault may be expunged | Medium |
| criminal-defense/domestic-violence | A second or later offense is an F4 | A second offense is F4; two or more priors make it F3 | High |
| criminal-defense/domestic-violence | Serious physical harm makes it a felony regardless of priors; second protection-order violation within five years is an F5; federal gun ban "permanent and cannot be restored"; misdemeanor DV records can be sealed | Each doubtful or overstated; M1 DV may be excluded from sealing | Medium |
| criminal-defense/criminal-trespass | Trespass in an occupied structure under 2911.21(B) as an M1; (A)(2)/(A)(3) descriptions; "M4 to M1 is two levels" | That offense sits in 2911.12(B) (burglary); M4 to M1 is three levels | Medium |
| criminal-defense/assault-charges | Simple assault includes "negligently causing physical harm with a deadly weapon" | That is negligent assault, a separate statute (2903.14) | Medium |
| criminal-defense/criminal-mischief | Treble civil damages | Unverified | Low |
| criminal-defense/no-operators-license | Repeat within three years is an M1 (180 days, $1,000) in one place and an M4 (30 days, $250) in another; DUS cited as 4510.11 and as 4510.14; "unclassified misdemeanor" vs "unclassified minor misdemeanor" | Internal conflicts | High |
| criminal-defense/resisting-arrest | (B) described as using force against the officer | ORC 2921.33(B) concerns physical harm to the officer | Medium |
| criminal-defense/obstruction-of-official-business | Mandatory post-release control for an F5 | Generally discretionary | Medium |
| criminal-defense/speeding-tickets | Minor-misdemeanor speeding called "civil in nature"; overlapping 4-point tiers; "15-30%" insurance increase | Minor misdemeanors are criminal; tiers overlap; figure unsourced | Medium |
| criminal-defense (landing) | FAQ says misdemeanors carry "up to 12 months in jail" | The page's own table caps misdemeanors at 180 days | High |

## OVI / DUI

| Page | Statement on the site | Why it looks wrong | Priority |
|---|---|---|---|
| ovi-dui-defense/second-ovi | Table fines $715 to $1,625; HB 37 FAQ says $850 to $2,750 | Internal conflict | High |
| ovi-dui-defense/second-ovi | ALS suspension at arrest "can last 1 to 7 years" | Conflicts with the 45/90-day ALS framing | Medium |
| ovi-dui-defense/third-ovi | Tables: $1,040 to $2,750 and 2 to 12 years; two FAQs: $850 to $2,750 and 2 to 10 years | Internal conflict | High |
| ovi-dui-defense/high-tier-ovi | Second high-tier: 20 days to 1 year (second-ovi says 20 days to 6 months); third high-tier fine $850 (third-ovi says $1,040); reinstatement fee "reduced from $475"; insurance "4-5x for 7-10 years" (first-ovi says 2-3x for 3-5 years) | Conflicts with sibling pages | High |
| ovi-dui-defense/refusal-ovi | First refusal conviction has a 3-day minimum (first-ovi says 6 days); FAQ 1 says the court cannot waive the "15-day" hard suspension after a refusal (30 days elsewhere) | Conflicts with first-ovi and the landing page | High |
| ovi-dui-defense/underage-ovi | Adult OVI jail "3 to 180 days"; OVI "generally not sealable" (first-ovi: excluded outright by ORC 2953.36); on the BMV record "at least 10 years" | Inconsistent wording | Medium |
| ovi-dui-defense/commercial-dui-cdl | Lifetime CDL disqualification has "no reinstatement, no waiver" | Federal rules allow reinstatement after 10 years in some cases | Medium |
| ovi-dui-defense/ovi-with-accident | Vehicular homicide (M1) listed as OVI-caused; aggravated vehicular assault defined by a prior suspension or felony OVI; F1 3-11 years, F2 2-8 years | An OVI-caused death is normally aggravated vehicular homicide; the mapping looks off | High |
| ovi-dui-defense/limited-driving-privileges | Third OVI hard suspension a flat 180 days | third-ovi says one year for a refusal | Medium |

## Estate planning, probate and dispute resolution

| Page | Statement on the site | Why it looks wrong | Priority |
|---|---|---|---|
| other-services (landing), probate, probate-administration | Creditor claim period (ORC 2117.06) given as 4 months, 6 months from appointment, and 6 months from death or 2 months after publication | Three different answers; current law is believed to be 6 months from death | High |
| other-services/estate-planning-wills | Ohio recognizes unwitnessed handwritten (holographic) wills under ORC 2107.03 | The landing page says Ohio does not, which is believed correct | High |
| estate-planning-wills, estate-disputes, probate-administration | Will execution cited to ORC 2107.02 and 2107.10 | The execution section is 2107.03 | Medium |
| probate, probate-administration | Small-estate release cited as 2113.03 and 2113.031; inventory as 2109.302 and 2115.02 | Pages disagree | Medium |
| other-services/probate | Executor fees: 2% on the next $600,000 and 1% above $1 million (ORC 2113.35) | Believed to be 2% on everything above $400,000 | High |
| other-services/estate-planning-wills | Spousal elective share as a sliding scale up to one-third after fifteen years (ORC 2106.01) | That is the Uniform Probate Code model, not Ohio law | High |
| other-services/probate-administration | Federal estate tax exemption about $13.61 million | 2024 figure; out of date for 2026 | High |
| other-services/will-contests | Contest deadline 3 months from the order admitting the will | ORC 2107.76 runs it from the filing of the certificate of notice | High |
| other-services/estate-disputes | Will contest filed in Common Pleas, "not in the Probate Court" | The probate court is the venue | High |
| will-contests, estate-disputes | Most-litigated ground: capacity on one page, undue influence on the other | Inconsistent | Low |
| other-services/will-contests | No-contest clauses under ORC 2107.15 with a "probable cause exception" | Citation and exception doubtful | Medium |
| powers-of-attorney, estate-planning, landing | Uniform Power of Attorney Act as ORC 1337.01-1337.64 and as 1337.21 et seq.; sections 1337.07/.08/.11/.34/.52; durable POA at 1337.22 | Numbering inconsistent with the Act | Medium |
| other-services/guardianships | Chapter 2135 is Ohio's Uniform Guardianship Act, effective April 4, 2021 | Ohio is not believed to have enacted it | High |
| other-services/estate-disputes | Trust modification and termination in Chapter 5806 | That is Chapter 5804 | Medium |
| dispute-resolution, mediation | Mediation confidentiality cited to ORC 2710.03 and to 2710.06; mediated agreement enforceable if not repudiated within 3 days (2710.07) | Inconsistent; the 3-day rule looks doubtful | Medium |
| other-services/arbitration | 90-day window to vacate cited to ORC 2711.10 | The time limit is in 2711.13 | Medium |
| other-services/dispute-resolution | "Studies consistently show settlement in 70 to 85 percent of cases" | Unsourced statistic | Low |

## Personal injury

| Page | Statement on the site | Why it looks wrong | Priority |
|---|---|---|---|
| personal-injury/catastrophic-injuries | ORC 2323.43 caps non-economic damages "in most tort cases" ($250k / 3x, max $350k/$500k; $500k/$1M for catastrophic) | 2323.43 is the medical malpractice cap; the general tort cap is ORC 2315.18, which exempts catastrophic injuries; the landing FAQ itself says 2323.43 is malpractice only | High |
| slip-and-fall, premises-liability | ORC 2305.321 cited as attractive-nuisance protection on one page and recreational-user immunity on the other | At least one is wrong; recreational-user immunity is believed to be ORC 1533.181 | Medium |
| personal-injury/premises-liability | Comparative negligence at ORC 2315.19; one FAQ gives landlord duties under 5321.02 | Current section is 2315.33; landlord duties are 5321.04 (5321.02 is anti-retaliation, as another FAQ on the page says) | Medium |
| personal-injury/dog-bites | Bite reporting under ORC 955.261; "dangerous dog under 955.22 / vicious dog under 955.11" | 955.261 is mainly quarantine; definitions are in 955.11 | Medium |
| personal-injury/nursing-home-abuse | Mandatory reporting under ORC 5101.61 | Nursing-home reporting is mainly ORC 3721.22 | Medium |
| personal-injury/wrongful-death | Punitive damages may be available | Generally not in the wrongful death action itself, only the survival claim | High |
| personal-injury/motorcycle-accidents | Helmets required "under 18 only"; lane sharing at ORC 4511.272 | ORC 4511.53 also covers first-year riders and their passengers; citation unconfirmed | Medium |
| personal-injury/medical-malpractice | "Ohio courts apply a statewide standard of care" | Specialists are held to a national standard | Medium |

## Trusts

| Page | Statement on the site | Why it looks wrong | Priority |
|---|---|---|---|
| ILIT, irrevocable, QTIP, charitable, dynasty, revocable | Federal estate tax exemption $13.61M (2024) / $13.99M (2025), "falls to about $7M after 2025", $18,000 annual exclusion | Out of date for 2026; the 2025 federal tax law is believed to have set the exemption at $15M from 2026, so the sunset language is wrong | High |
| trusts/medicaid-asset-protection-trusts | $2,829 income cap; $9,500 penalty divisor | 2024 figures | High |
| trusts/special-needs-trusts | ABLE age limit 26; food payments trigger in-kind support; a disabled person cannot set up their own first-party trust | ABLE age may now be 46 (2026); SSI stopped counting food in 2024; the 2016 Cures Act allows self-settled first-party trusts | High |
| trusts (landing) | Ohio has no domestic asset protection trust statute | Contradicts the asset-protection page and others describing the Ohio Legacy Trust (ORC Chapter 5816, 2013) | High |
| spendthrift, asset-protection | Ohio Legacy Trust creditor limit: 5 years on one page, 18-month seasoning on the other | Inconsistent | Medium |
| trusts/asset-protection-trusts | "Uniform Fraudulent Transfer Act (ORC 1336.04)"; $145,425 homestead exemption | Landing calls Chapter 1336 the Uniform Voidable Transactions Act; homestead figure may be outdated | Medium |
| irrevocable, QTIP, spendthrift | ORC 5801.10 defines an irrevocable trust; cy pres at 5804.09; Prudent Investor Act at 5810.02 (others say Chapter 5809); spendthrift exceptions at 5805.06(A)/(B) | Citations to check | Medium |
| trusts/dynasty-trusts | Rule against perpetuities abolished 2012 by ORC 5801.04(A)(2); "$5M at 7% for 50 years could exceed $150M" | Ohio allowed opting out earlier; the math gives about $147M | Low |
| trusts/revocable-living-trusts | An Ohio will needs "two witnesses and notarization" (ORC 2107.03); probate 6 to 12 months (FAQ) vs 6 to 18 months (body) | Ohio does not require notarization; inconsistent durations | Medium |
| trusts/irrevocable-trusts | "Ohio eliminated its gift tax in 2013" | Ohio never had a gift tax (the estate tax was repealed in 2013) | Medium |
| QTIP, land-trusts | "Portability since 2013"; "each land trust is a separate legal entity" | Check | Low |

## Civil and business

| Page | Statement on the site | Why it looks wrong | Priority |
|---|---|---|---|
| debt-collection-defense, construction-disputes, contract-drafting-review | Oral contracts: 6 years under ORC 2305.07 | Other pages say 4 years since the June 2021 amendment | High |
| business (landing), llc-formation, business-compliance | CAT: $150,000 threshold; 0.26% "above $1 million with a minimum tax"; threshold "raised from $150,000" with a $3M exclusion | Current law excludes $3M (2024) and $6M (2025+) with no minimum tax | High |
| business-compliance, business-dissolution | ORC Chapter 1705 treated as the LLC law (1705.06, 1705.22, 1705.43) | Chapter 1705 was repealed in 2022; Chapter 1706 governs | High |
| civil/debt-collection-defense | Exemptions under ORC 2329.66: $145,425 homestead, $4,000 vehicle, $625/$13,400 household goods, $2,550 tools | Looks like a pre-2022 schedule | High |
| business/employment-agreements | Minimum wage "$10.45/hour as of 2024" | Stale for 2026 | Medium |
| civil/appeals | Greene County in the 12th District; Morrow in the 9th; Supreme Court review under "App.R. 26" | Greene is in the 2nd, Morrow in the 5th; citation wrong | High |
| civil/construction-disputes | Notice of Commencement / Furnishing roles reversed (1311.04/1311.06); 6-year enforcement at 1311.15; only the 75-day lien deadline; HCSS Act "4722.02, $25" | Mechanics' lien details look off; residential deadline is 60 days | High |
| business-formation, partnership-disputes | Partnerships under Chapters 1775/1776 vs 1776/1782 | 1776/1782 believed correct | Medium |
| business/business-formation | Statutory agent at ORC 1706.05 | Likely 1706.09 | Low |
| civil/civil-protection-orders | Second violation "within five years" is a fifth-degree felony | No five-year window believed in the statute | Medium |
| civil/evictions | Tenants "may withhold rent or repair and deduct"; landlords "must accept proper payment" | Ohio uses rent escrow (ORC 5321.07), not withholding or repair-and-deduct | High |
| business/shareholder-disputes | Dissenters' rights at 1701.76; oppression as a ground under 1701.91 | Likely 1701.85; check the 1701.91 grounds | Medium |
| business/business-litigation | Punitive cap "greater of 2x compensatory or $350,000" | Check against ORC 2315.21 | Medium |
| civil (landing) | Jury right for claims "over $1,000"; breach of contract under ORC Chapter 1301 | Check | Low |

## Blog articles (data/blog-posts.ts, by slug)

| Article | Statement on the site | Why it looks wrong | Priority |
|---|---|---|---|
| what-happens-after-ovi-arrest-ohio, ovi-charges-ohio-university-students-athens vs first-dui-ohio-will-i-go-to-jail, how-much-does-dui-cost-ohio | First OVI fine $375 to $1,075 vs $565 to $1,075 | Articles disagree (the practice pages use $565 under HB 37) | High |
| first-dui-ohio-will-i-go-to-jail | First OVI suspension 6 months to 3 years | Other pages say 1 to 3 years | High |
| what-happens-after-ovi-arrest-ohio | Reinstatement fee $475 | Other pages say $315 | Medium |
| ohio-new-expungement-laws-clear-record vs what-is-expungement-ohio-2024 | Sealing limit "two felonies / four misdemeanors" vs "unlimited prior convictions under 2023 reforms"; objection window 30 vs 60 days; fee $50 to $150 vs $50 to $100 | Articles disagree | High |
| what-to-do-pulled-over-ovi-ohio, ohio-als-appeal-30-day-deadline, what-happens-after-ovi-arrest-ohio | ALS appeal 30 days "from the date of arrest", at a "BMV hearing", cited to 4511.191 | ORC 4511.197 runs it from the initial appearance, in the criminal court | High |
| expungement articles, misdemeanor-vs-felony-ohio | 1-year misdemeanor and 3-year felony waiting periods | Look pre-SB 288 | High |
| starting-business-ohio-llc-vs-corporation, forming-llc-ohio-step-by-step, ohio-business-formation-llc-vs-corp | LLC biennial report "currently free"; Chapter 1705 still governs pre-2022 LLCs | Ohio LLCs file no periodic report; Chapter 1706 governs all LLCs | Medium |
| how-long-sue-after-injury-ohio | Medical malpractice under the 2-year rule (2305.10) | Generally 1 year under 2305.113 | High |
| ohio-slip-and-fall-laws-property-owners | Owner must be more than 50% at fault; trespassers owed "no duty" | Misstates 2315.33; the duty to trespassers is to avoid willful or wanton conduct | High |
| ohio-probate-process-step-by-step | "Ohio estate tax obligations"; creditor notice "60 days from notice, whichever is later"; $35,000/$100,000 as "summary release"; court-appointed appraiser | Ohio estate tax repealed for deaths from 2013; the other details look off | High |
| ohio-power-of-attorney-guide | A POA without the "durable" label ends on incapacity; notarization required (1337.09) | Under the 2012 Act (1337.21 and following) POAs are durable by default | High |
| protecting-rights-during-traffic-stop-ohio | Smell of marijuana alone is probable cause | May be outdated since adult-use legalization in 2023 | Medium |
| misdemeanor-vs-felony-ohio | Aggravated murder as F1; theft under $1,000 as M4; paraphernalia as a minor misdemeanor | Aggravated murder is unclassified; theft under $1,000 is M1; paraphernalia usually M4 | High |
| ohio-civil-protection-order-guide | CPO violations as "fourth- or third-degree felonies" | 2919.27: F5 with a prior, F3 when a felony is committed | Medium |
| starting-ohio-nonprofit-organization | Names need "Inc." or "Corporation"; "annual or biennial reports"; three directors under 1702.10; "directors are not paid" | Ohio nonprofits file a Statement of Continued Existence every 5 years; likely 1702.27 | Medium |
| fra-suspension-ohio-what-it-is-how-to-fix | $40/$300/$600 fees; one-year SR-22; HB 29 description | Unverified; SR-22 may be 3 years | Medium |
| limited-driving-privileges-after-ovi-ohio | Privileges under 4511.191; waiver if no prior Physical Control | Likely 4510.021/4510.13 | Low |
| ovi-charges-ohio-university-students-athens | Drug convictions can affect financial aid | Removed by the FAFSA Simplification Act | Medium |
| what-to-expect-circleville-municipal-court-pickaway-county | Court at 151 E. Franklin St. | Address unverified | Medium |
| dog bite article | Two-year limit | Strict-liability claims under 955.28 may have a longer limit | Low |

## Firm facts

| Page | Statement | Note | Priority |
|---|---|---|---|
| data/team-members.ts | The bio said "5.0-star rating with 100+ verified Google reviews" | Changed to match the 4.9 used everywhere else on the site; confirm the current Google rating | Medium |
| Site-wide | Office hours | Now Monday to Friday, 9am to 5pm everywhere (confirmed October 25, 2026) | Done |
| Site-wide | Free consultations | Removed everywhere; the firm does not offer them (confirmed October 25, 2026) | Done |
