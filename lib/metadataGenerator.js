/**
 * Metadata Generator Utilities
 * Generates SEO-optimized metadata for all pages
 */

export const generateMetadata = (page) => {
  const baseURL = "https://www.wickedrevelations.com";
  const brandName = "Wicked Revelations";
  
  const defaultMetadata = {
    metadataBase: new URL(baseURL),
    alternates: {
      canonical: `${baseURL}${page.path}`,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    formatDetection: {
      email: false,
      telephone: false,
      address: false,
    },
  };

  return {
    ...defaultMetadata,
    title: page.title,
    description: page.description,
    keywords: page.keywords?.join(", "),
    authors: [{ name: brandName, url: baseURL }],
    creator: brandName,
    publisher: brandName,
    openGraph: {
      title: page.ogTitle || page.title,
      description: page.ogDescription || page.description,
      url: `${baseURL}${page.path}`,
      type: page.ogType || "website",
      images: [
        {
          url: page.ogImage || `${baseURL}/og/og-image.png`,
          width: 1200,
          height: 630,
          alt: page.ogImageAlt || `${brandName} - ${page.title}`,
        },
      ],
      siteName: brandName,
      locale: "en_AU",
    },
    twitter: {
      card: "summary_large_image",
      title: page.twitterTitle || page.title,
      description: page.twitterDescription || page.description,
      images: [page.twitterImage || `${baseURL}/og/og-image.png`],
      creator: "@wickedrevelations",
      site: "@wickedrevelations",
    },
    verification: {
      google: "your-google-verification-code",
    },
  };
};

/**
 * Event Page Metadata
 */
export const eventPageMetadata = {
  path: "/events",
  title: "Wicked Events | Event Planning & Management Australia",
  description:
    "Explore Wicked Revelations' upcoming and past events. Experience vibrant Sri Lankan-themed celebrations and professional corporate events in Australia.",
  keywords: [
    "events Australia",
    "upcoming events",
    "event calendar",
    "Sri Lankan events",
    "corporate events",
    "event booking",
    "event management",
  ],
  ogType: "website",
};

/**
 * About Us Page Metadata
 */
export const aboutPageMetadata = {
  path: "/aboutus",
  title: "About Wicked Revelations | Premium Event Planning Company Australia",
  description:
    "Learn about Wicked Revelations, Australia's leading event planning company specializing in Sri Lankan-themed events and professional event management services.",
  keywords: [
    "about Wicked Revelations",
    "event planning company",
    "professional event organizers",
    "event management Australia",
  ],
};

/**
 * Services Page Metadata
 */
export const servicesPageMetadata = {
  path: "/services",
  title: "Event Planning Services | Wicked Revelations Australia",
  description:
    "Discover comprehensive event planning services including venue management, decoration, catering coordination, and professional event management in Australia.",
  keywords: [
    "event planning services",
    "event coordination",
    "venue management",
    "event decoration",
    "catering services",
    "entertainment planning",
  ],
};

/**
 * Contact Page Metadata
 */
export const contactPageMetadata = {
  path: "/contactus",
  title: "Contact Wicked Revelations | Event Planning Inquiry",
  description:
    "Get in touch with Wicked Revelations for your event planning needs. Contact us today for a consultation on your upcoming event in Australia.",
  keywords: [
    "contact event planner",
    "event planning quote",
    "booking inquiry",
    "event consultation",
  ],
};

/**
 * Products Page Metadata
 */
export const productsPageMetadata = {
  path: "/products",
  title: "Event Products & Solutions | Wicked Revelations",
  description:
    "Explore our event planning products and solutions designed to make your celebration unforgettable in Australia.",
  keywords: [
    "event products",
    "event solutions",
    "party supplies",
    "event packages",
  ],
};

/**
 * Generate Event Schema for Individual Events
 */
export const generateEventSchema = (event) => {
  const baseURL = "https://www.wickedrevelations.com";
  
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${baseURL}/events#${event.id}`,
    name: event.title,
    description: event.description,
    image: event.images?.[0] || `${baseURL}/og/og-image.png`,
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
        addressRegion: event.region || "NSW",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Wicked Revelations",
      url: baseURL,
      sameAs: [
        "https://www.facebook.com/wickedrevelations",
        "https://www.instagram.com/wickedrevelations",
        "https://www.linkedin.com/company/wicked-revelations",
      ],
    },
    offers: {
      "@type": "Offer",
      url: `${baseURL}/events`,
      price: "0",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString(),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: event.attendees?.replace(/[^0-9]/g, "") || "100",
    },
  };
};

/**
 * Local Business Schema
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.wickedrevelations.com",
  name: "Wicked Revelations",
  image: "https://www.wickedrevelations.com/images/WICKEDLOGO.png",
  description: "Premium event planning company specializing in Sri Lankan-themed events",
  url: "https://www.wickedrevelations.com",
  telephone: "+61-1300-WICKED",
  email: "info@wickedrevelations.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    postalCode: "2000",
    addressCountry: "AU",
  },
  serviceArea: [
    {
      "@type": "City",
      name: "Sydney",
    },
    {
      "@type": "City",
      name: "Melbourne",
    },
    {
      "@type": "City",
      name: "Brisbane",
    },
  ],
  priceRange: "$$",
};

/**
 * FAQ Schema
 */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of events do you specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in Sri Lankan-themed events, corporate gatherings, weddings, cultural celebrations, and professional event management across Australia.",
      },
    },
    {
      "@type": "Question",
      name: "What areas of Australia do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily operate in Sydney, Melbourne, and Brisbane, but we can coordinate events across Australia.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in your event planning services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our services include venue selection and management, decoration, catering coordination, entertainment booking, guest management, and full event coordination.",
      },
    },
    {
      "@type": "Question",
      name: "How much does event planning cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Event planning costs vary based on scope, size, and complexity. Contact us for a custom quote tailored to your event needs.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should I book?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend booking 2-3 months in advance for smaller events and 6+ months for large corporate or elaborate celebrations.",
      },
    },
  ],
};
