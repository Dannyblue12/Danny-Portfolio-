/**
 * Single source of truth for identity and SEO.
 * Change SITE_URL here (or set NEXT_PUBLIC_SITE_URL) when the custom
 * domain goes live — canonical tags, sitemap, robots and the social
 * card all read from it.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://danny-portfolio-lilac.vercel.app";

export const PERSON = {
  name: "Daniel Victor Udo",
  shortName: "Daniel",
  jobTitle: "Fullstack Developer",
  role: "Mobile & Backend Developer",
  tagline: "I turn ideas into digital products people can actually use",
  description:
    "Daniel Victor Udo is a mobile & backend developer and product builder. He helps businesses and founders turn ideas into websites, mobile apps, backend systems and AI-powered products.",
  whatsapp: "https://wa.link/dm2pg6",
  profiles: [
    "https://github.com/Dannyblue12",
    "https://www.facebook.com/daniel.udo.1000",
    "https://x.com/Daniel14346962",
  ],
};

/** Terms a client would realistically type when looking for this work. */
export const KEYWORDS = [
  "fullstack developer",
  "mobile app developer",
  "backend developer",
  "React Native developer",
  "Next.js developer",
  "Node.js developer",
  "REST API development",
  "AI integration developer",
  "MVP development",
  "web application development",
  "EdTech developer",
  "freelance software developer",
  "hire fullstack developer",
  "Daniel Victor Udo",
];
