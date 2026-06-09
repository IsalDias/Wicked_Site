/**
 * SEO Configuration for Wicked Revelations
 * Event Planning Company - Australia
 */

export const seoConfig = {
  // Site Information
  siteName: "Wicked Revelations",
  siteUrl: "https://www.wickedrevelations.com",
  description: "Australia's premium event planning company specializing in Sri Lankan-themed events and professional event management.",
  
  // Business Information
  business: {
    name: "Wicked Revelations",
    description: "Premium Event Planning & Management Services",
    tagline: "Sri Lankan Vibe Events in Australia",
    country: "AU",
    regions: ["NSW", "VIC", "QLD"],
    cities: ["Sydney", "Melbourne", "Brisbane"],
  },

  // Contact Information
  contact: {
    phone: "+61-1300-WICKED",
    email: "info@wickedrevelations.com",
    address: "Sydney, NSW, Australia",
  },

  // Social Media
  social: {
    facebook: "https://www.facebook.com/wickedrevelations",
    instagram: "https://www.instagram.com/wickedrevelations",
    linkedin: "https://www.linkedin.com/company/wicked-revelations",
    twitter: "https://www.twitter.com/wickedrevelations",
  },

  // SEO Keywords by Category
  keywords: {
    main: [
      "event planning Australia",
      "Sri Lankan events Australia",
      "event management",
      "event coordination",
      "corporate events",
      "wedding planning",
      "cultural events",
      "professional event organizer",
    ],
    events: [
      "upcoming events Australia",
      "event calendar",
      "event booking",
      "corporate gatherings",
      "cultural celebrations",
      "party planning",
    ],
    services: [
      "event planning services",
      "event coordination",
      "venue management",
      "event decoration",
      "catering services",
      "entertainment planning",
    ],
    locations: [
      "Sydney events",
      "Melbourne events",
      "Brisbane events",
      "events in Australia",
      "regional events Australia",
    ],
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_AU",
    imageWidth: 1200,
    imageHeight: 630,
  },

  // Search Console & Analytics
  verification: {
    googleSiteVerification: "your-google-verification-code",
    googleAnalyticsId: "your-ga-id",
    bingWebmasterTools: "your-bing-verification-code",
  },
};

/**
 * Event Schema Generator
 */
export const generateEventSchema = (event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.title,
  description: event.description,
  startDate: event.date,
  endDate: event.endDate || event.date,
  eventAttendanceMode: "OfflineEventAttendanceMode",
  eventStatus: "EventScheduled",
  location: {
    "@type": "Place",
    name: event.location,
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Wicked Revelations",
    url: "https://www.wickedrevelations.com",
  },
  image: event.images?.[0] || "https://www.wickedrevelations.com/og/og-image.png",
  offers: {
    "@type": "Offer",
    url: `https://www.wickedrevelations.com/events`,
    price: "0",
    priceCurrency: "AUD",
    availability: "https://schema.org/InStock",
  },
});

/**
 * Breadcrumb Schema Generator
 */
export const generateBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});
