'use client'

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'service'
  data?: Record<string, unknown>
}

export default function StructuredData({ type = 'organization', data = {} }: StructuredDataProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NextGen Solutions",
    "description": "Digital marketing agency helping businesses grow and succeed online through SEO, PPC, social media marketing, and content creation.",
    "url": "https://nextgensolutions.com",
    "logo": "https://nextgensolutions.com/logo.png",
    "image": "https://nextgensolutions.com/og-image.png",
    "foundingDate": "2019",
    "founder": {
      "@type": "Person",
      "name": "NextGen Solutions Team"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Digital Hub, Cyber City",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": "122002",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "email": "hello@nextgensolutions.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://linkedin.com/company/nextgensolutions",
      "https://instagram.com/nextgensolutions",
      "https://youtube.com/@nextgensolutions",
      "https://github.com/nextgensolutions"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "₹₹₹",
    "serviceArea": {
      "@type": "Place",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Complete SEO package including on-page, off-page, local SEO, and technical optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Complete social media management across Instagram, Facebook, LinkedIn, Twitter with paid ads"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "PPC & Search Marketing",
            "description": "Data-driven Google Ads, YouTube Ads, and retargeting campaigns"
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NextGen Solutions",
    "description": "Digital Marketing Agency - SEO, PPC, Social Media Marketing",
    "url": "https://nextgensolutions.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://nextgensolutions.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NextGen Solutions"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nextgensolutions.com/#business",
    "name": "NextGen Solutions",
    "image": "https://nextgensolutions.com/og-image.png",
    "telephone": "+91-98765-43210",
    "email": "hello@nextgensolutions.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Digital Hub, Cyber City",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": "122002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.4595",
      "longitude": "77.0266"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "₹₹₹"
  }

  const getSchema = () => {
    switch (type) {
      case 'website':
        return { ...websiteSchema, ...data }
      case 'service':
        return { ...localBusinessSchema, ...data }
      default:
        return { ...organizationSchema, ...data }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema())
      }}
    />
  )
}