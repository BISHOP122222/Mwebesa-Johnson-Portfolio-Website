export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Webbuild Systems Uganda",
    "description": "Uganda's premier digital infrastructure agency specializing in high-performance ecosystem development, mission-critical business systems, and strategic AI-powered engineering nationwide.",
    "url": "https://webbuild-uganda.vercel.app",
    "telephone": "+256765948387",
    "email": "milanjohnso09@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kampala",
      "addressRegion": "Central Region",
      "addressCountry": "UG",
      "postalCode": "256"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "0.3476",
      "longitude": "32.5825"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$$",
    "currenciesAccepted": "UGX, USD",
    "paymentAccepted": "Cash, Credit Card, Mobile Money",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Uganda"
      },
      {
        "@type": "City",
        "name": "Kampala"
      },
      {
        "@type": "City",
        "name": "Kasese"
      },
      {
        "@type": "City",
        "name": "Hima"
      },
      {
        "@type": "City",
        "name": "Mbarara"
      },
      {
        "@type": "City",
        "name": "Entebbe"
      },
      {
        "@type": "City",
        "name": "Jinja"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Strategic Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mission-Critical Business Systems",
            "description": "High-performance custom software and automation systems for Ugandan enterprises."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elite Website Engineering",
            "description": "Strategic, SEO-dominant web presence for high-impact organizations and NGOs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Ecosystem Integration",
            "description": "Deploying Advanced Agentic AI and Large Language Models for business intelligence in East Africa."
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Mwebesa Johnson",
      "jobTitle": "Lead Digital Solutions Architect",
      "description": "Co-founder of Webbuild Systems with 3+ years experience in mission-critical software engineering."
    },
    "sameAs": [
      "https://linkedin.com/in/mwebesa-johnson",
      "https://github.com/BISHOP122222",
      "https://behance.net/mwebesa-johnson",
      "https://twitter.com/mwebesa_johnson"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
