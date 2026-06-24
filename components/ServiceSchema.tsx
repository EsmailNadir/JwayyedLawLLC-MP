interface ServiceSchemaProps {
  /** The service name, e.g. "OVI / DUI Defense — Delaware County" */
  name: string;
  /** Short serviceType keyword, e.g. "OVI DUI Defense" */
  serviceType?: string;
  /** One-sentence description of the service (reuse the page meta description) */
  description: string;
  /** Geographic area(s) served — a string or array of "County, Ohio" / city strings */
  areaServed?: string | string[];
  /** Absolute canonical URL of the page */
  url: string;
}

/**
 * Emits Service / LegalService JSON-LD structured data for a practice or location
 * page. Server component (no client JS). Matches the inline pattern already used on
 * the practice-hub pages so schema is consistent site-wide.
 */
export default function ServiceSchema({
  name,
  serviceType,
  description,
  areaServed,
  url,
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    ...(serviceType ? { serviceType } : {}),
    description,
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com' },
    ...(areaServed ? { areaServed } : {}),
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
