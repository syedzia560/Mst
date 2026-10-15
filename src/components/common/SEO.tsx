import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  structuredData?: object;
}

const BASE_URL = "https://shafitanneries.com";
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`;

const defaultOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "Muhammad Shafi Tanneries (Pvt.) Ltd",
  "alternateName": ["MST", "Shafi Group", "Shafi Tannery"],
  "url": BASE_URL,
  "logo": DEFAULT_IMAGE,
  "foundingDate": "1959",
  "description": "Pakistan's premier LWG Gold Rated leather tannery producing world-class wet blue, crust, and finished leather for global export.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shafi House, 35-A/3, Lalazar, Opp. Beach Luxury Hotel, P.O. Box 4524",
    "addressLocality": "Karachi",
    "postalCode": "74000",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.840428,
    "longitude": 67.018337
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+92-21-35610696",
    "contactType": "sales",
    "email": "sales.mst@shafi.com",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Urdu"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/muhammad-shafi-tanneries-private-limited/",
    "https://www.instagram.com/shafitanneriespk/",
    "https://www.facebook.com/profile.php?id=100083754020979"
  ]
};

const SEO = ({
  title,
  description,
  canonicalPath = "",
  keywords,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  structuredData = defaultOrganizationSchema,
}: SEOProps) => {
  const fullTitle = `${title} | Muhammad Shafi Tanneries (MST)`;
  const canonicalUrl = `${BASE_URL}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Muhammad Shafi Tanneries (Pvt.) Ltd" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
