import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL, PERSON, KEYWORDS } from "@/lib/seo";
import { SERVICES } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const TITLE = `${PERSON.name} — ${PERSON.jobTitle}`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${PERSON.name}`,
  },
  description: PERSON.description,
  keywords: KEYWORDS,
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  publisher: PERSON.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: PERSON.name,
    title: TITLE,
    description: PERSON.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: PERSON.description,
    creator: "@Daniel14346962",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport = {
  themeColor: "#0D0D0F",
  width: "device-width",
  initialScale: 1,
};

/**
 * Structured data. The Person graph is what lets Google show a rich
 * result for his name; the ProfessionalService graph describes the
 * work itself so service searches can match it.
 */
function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: PERSON.name,
        givenName: "Daniel",
        familyName: "Udo",
        url: SITE_URL,
        image: `${SITE_URL}/daniel-victor-udo.png`,
        jobTitle: PERSON.jobTitle,
        description: PERSON.description,
        sameAs: PERSON.profiles,
        knowsAbout: [
          "JavaScript", "React", "Next.js", "React Native", "Expo",
          "Node.js", "Express.js", "MongoDB", "REST APIs", "Firebase",
          "Mobile App Development", "Backend Development", "AI Integration",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: `${PERSON.name} — Software Development`,
        url: SITE_URL,
        image: `${SITE_URL}/daniel-victor-udo.png`,
        description: PERSON.description,
        provider: { "@id": `${SITE_URL}/#person` },
        areaServed: "Worldwide",
        availableLanguage: "English",
        serviceType: SERVICES.map((s) => s.category),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software Development Services",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              category: s.category,
              description: s.body,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: TITLE,
        description: PERSON.description,
        publisher: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Runs before paint so reveal states never flash for no-JS users */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js");`,
          }}
        />
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
