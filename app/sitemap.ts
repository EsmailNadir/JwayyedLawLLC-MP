import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com';
  const currentDate = new Date();

  const routes = [
    // Main pages
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    
    // Our Law Firm
    { url: '/our-law-firm', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/our-law-firm/about-us', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/our-law-firm/our-attorneys', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/our-law-firm/case-results', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/our-law-firm/testimonials', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/our-law-firm/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    
    // Criminal Defense
    { url: '/criminal-defense', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/criminal-defense/assault-charges', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/criminal-defense/domestic-violence', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/criminal-defense/juvenile-offenses', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/criminal-defense/expungement-record-sealing', priority: 0.8, changeFrequency: 'monthly' as const },
    
    // OVI/DUI Defense
    { url: '/ovi-dui-defense', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/ovi-dui-defense/first-ovi', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/ovi-dui-defense/second-ovi', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/ovi-dui-defense/third-ovi', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/ovi-dui-defense/high-tier-ovi', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/ovi-dui-defense/refusal-ovi', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/ovi-dui-defense/underage-ovi', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/ovi-dui-defense/commercial-dui-cdl', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/ovi-dui-defense/ovi-with-accident', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/ovi-dui-defense/driving-under-ovi-suspension', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/ovi-dui-defense/limited-driving-privileges', priority: 0.8, changeFrequency: 'monthly' as const },
    
    // Personal Injury
    { url: '/personal-injury', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/personal-injury/car-accidents', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/personal-injury/truck-accidents', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/personal-injury/motorcycle-accidents', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/personal-injury/pedestrian-accidents', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/personal-injury/slip-and-fall', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/personal-injury/premises-liability', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/personal-injury/dog-bites', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/personal-injury/medical-malpractice', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/personal-injury/nursing-home-abuse', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/personal-injury/workplace-injuries', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/personal-injury/wrongful-death', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/personal-injury/catastrophic-injuries', priority: 0.8, changeFrequency: 'monthly' as const },
    
    // Civil
    { url: '/civil', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/civil/breach-of-contract', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/civil/real-estate-disputes', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/civil/landlord-tenant-disputes', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/civil/evictions', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/civil/construction-disputes', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/civil/debt-collection-defense', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/civil/employment-disputes', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/civil/defamation', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/civil/civil-protection-orders', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/civil/appeals', priority: 0.8, changeFrequency: 'monthly' as const },
    
    // Business
    { url: '/business', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/business/business-formation', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/business/llc-formation', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/business/contract-drafting-review', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/business/business-litigation', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/business/partnership-disputes', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/business/shareholder-disputes', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/business/non-compete-agreements', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/business/employment-agreements', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/business/business-compliance', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/business/business-dissolution', priority: 0.8, changeFrequency: 'monthly' as const },
    
    // Other Services
    { url: '/other-services', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/other-services/estate-planning', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/other-services/estate-planning-wills', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/other-services/trusts', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/other-services/powers-of-attorney', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/other-services/guardianships', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/other-services/probate', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/other-services/probate-administration', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/other-services/will-contests', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/other-services/estate-disputes', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/other-services/immigration', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/other-services/immigration-services', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/other-services/green-cards', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/other-services/citizenship-naturalization', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/other-services/deportation-defense', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/other-services/dispute-resolution', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/other-services/mediation', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/other-services/arbitration', priority: 0.7, changeFrequency: 'monthly' as const },
    
    // Courts
    { url: '/courts', priority: 0.8, changeFrequency: 'monthly' as const },
    
    // Franklin County
    { url: '/courts/franklin-county', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/courts/franklin-county-municipal-court', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/courts/franklin-county-juvenile-court', priority: 0.7, changeFrequency: 'monthly' as const },
    
    // Delaware County
    { url: '/courts/delaware-county', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/courts/delaware-county-municipal-court', priority: 0.7, changeFrequency: 'monthly' as const },
    
    // Pickaway County
    { url: '/courts/pickaway-county', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/courts/circleville-municipal-court', priority: 0.7, changeFrequency: 'monthly' as const },
    
    // Athens County
    { url: '/courts/athens-county', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/courts/athens-municipal-court', priority: 0.7, changeFrequency: 'monthly' as const },
    
    // Morrow County
    { url: '/courts/morrow-county', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/courts/morrow-county-municipal-court', priority: 0.7, changeFrequency: 'monthly' as const },
    
    // Clinton County
    { url: '/courts/clinton-county', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/courts/wilmington-municipal-court', priority: 0.7, changeFrequency: 'monthly' as const },
    
    // Butler County
    { url: '/courts/butler-county', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/courts/hamilton-municipal-court', priority: 0.7, changeFrequency: 'monthly' as const },
    
    // Greene County
    { url: '/courts/greene-county', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/courts/fairborn-municipal-court', priority: 0.7, changeFrequency: 'monthly' as const },
    
    // Montgomery County
    { url: '/courts/montgomery-county', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/courts/dayton-municipal-court', priority: 0.7, changeFrequency: 'monthly' as const },
    
    // Special Location Pages
    { url: '/locations/pickaway-county/ovi-dui-defense-circleville-municipal-court', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/locations/pickaway-county/criminal-misdemeanor-defense-circleville-municipal-court', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/locations/athens-county/ovi-dui-defense-athens-municipal-court', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/locations/athens-county/criminal-misdemeanor-defense-athens-municipal-court', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/locations/morrow-county/ovi-dui-defense-morrow-county-municipal-court', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/locations/morrow-county/criminal-misdemeanor-defense-morrow-county-municipal-court', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
