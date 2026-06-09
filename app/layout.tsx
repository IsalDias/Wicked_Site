import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import ParallaxProviders from "../components/ParallaxProviders";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wicked Revelations | Premium Event Planning Australia & Sri Lankan Events",
  description:
    "Australia's leading event planning company specializing in vibrant Sri Lankan-themed events. From corporate gatherings to cultural celebrations, we create unforgettable experiences. Expert event planning, coordination & management in Australia.",
  keywords: [
    "event planning Australia",
    "Sri Lankan events Australia",
    "event management Sydney",
    "corporate event planning",
    "wedding planning Australia",
    "cultural events planning",
    "Sri Lankan vibe events",
    "event coordinator Australia",
    "party planning services",
    "professional event organizer",
  ].join(", "),

  // ✅ Open Graph (Facebook/LinkedIn/WhatsApp)
  openGraph: {
    title: "Wicked Revelations | Premium Event Planning Australia",
    description:
      "Create unforgettable events with Wicked Revelations. Specializing in Sri Lankan-themed events and corporate celebrations across Australia.",
    url: "https://www.wickedrevelations.com/",
    siteName: "Wicked Revelations",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "https://www.wickedrevelations.com/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wicked Revelations - Premium Event Planning & Management Australia",
      },
    ],
  },

  // ✅ Twitter/X
  twitter: {
    card: "summary_large_image",
    site: "@wickedrevelations",
    creator: "@wickedrevelations",
    title: "Wicked Revelations | Event Planning Australia",
    description:
      "Specializing in Sri Lankan-themed events & professional event management across Australia.",
    images: ["https://www.wickedrevelations.com/og/og-image.png"],
  },

  // ✅ Additional SEO Meta Tags
  metadataBase: new URL("https://www.wickedrevelations.com"),
  alternates: {
    canonical: "https://www.wickedrevelations.com",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  authors: [
    {
      name: "Wicked Revelations",
      url: "https://www.wickedrevelations.com",
    },
  ],
  creator: "Wicked Revelations",
  publisher: "Wicked Revelations",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wicked Revelations",
  url: "https://www.wickedrevelations.com",
  logo: "https://www.wickedrevelations.com/images/WICKEDLOGO.png",
  description: "Premium event planning company specializing in Sri Lankan-themed events in Australia",
  sameAs: [
    "https://www.facebook.com/wickedrevelations",
    "https://www.instagram.com/wickedrevelations",
    "https://www.linkedin.com/company/wicked-revelations",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "AU",
    addressRegion: "NSW",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+61-1300-WICKED",
    email: "info@wickedrevelations.com",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Sydney",
      addressCountry: "AU",
    },
    {
      "@type": "City",
      name: "Melbourne",
      addressCountry: "AU",
    },
    {
      "@type": "City",
      name: "Brisbane",
      addressCountry: "AU",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          suppressHydrationWarning
        />
        
        {/* Additional SEO Tags */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        {/* Preconnect to External Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <NextTopLoader
          color="#4D82C3"
          height={3}
          showSpinner={false}
          speed={200}
          easing="ease"
        />

        <ParallaxProviders>
          <NavBar />
          {children}
        </ParallaxProviders>
      </body>
    </html>
  );
}
