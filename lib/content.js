import {
  FaWindowMaximize, FaMobileScreenButton, FaServer, FaWandMagicSparkles,
  FaPenRuler, FaCreditCard, FaRocket, FaGraduationCap,
  FaCompass, FaDiagramProject, FaCode, FaVialCircleCheck, FaPlug,
} from "react-icons/fa6";
import {
  SiJavascript, SiReact, SiNextdotjs, SiExpo, SiNodedotjs,
  SiExpress, SiMongodb, SiFirebase, SiGit,
} from "react-icons/si";

export const NAV = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Work", mobileLabel: "Projects" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact", desktop: false },
];

export const STATS = [
  { value: "5+", label: "Years of experience" },
  { value: "6+", label: "Happy clients" },
  { value: "7+", label: "Products shipped" },
  { value: "3000+", label: "Students reached" },
];

export const ABOUT_FEATURES = [
  {
    icon: FaMobileScreenButton,
    title: "Mobile Apps",
    body: "Cross-platform iOS and Android products built with React Native and Expo.",
  },
  {
    icon: FaServer,
    title: "Backend & APIs",
    body: "Scalable APIs, authentication, databases and the systems that power a product.",
  },
  {
    icon: FaWandMagicSparkles,
    title: "AI-Powered Products",
    body: "Practical AI features that automate workflows and make experiences smarter.",
  },
];

export const ABOUT_BODY = [
  "I'm Daniel Victor Udo, a mobile & backend developer and product builder. I help businesses and founders turn ideas into websites, mobile apps, backend systems, and AI-powered products that solve real problems and create better experiences for their users.",
  "I work across the product — from design and development to APIs, integrations, AI, payments, and deployment — so you can move from an idea to a working product without having to piece everything together.",
  "I've built and shipped products including MyEasySchool and ScholarGen, giving me hands-on experience taking products from concept to production and continuously improving them based on real users.",
];

export const STACK = [
  {
    group: "Frontend",
    items: [
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
    ],
  },
  {
    group: "Mobile",
    items: [
      { icon: SiReact, name: "React Native" },
      { icon: SiExpo, name: "Expo" },
    ],
  },
  {
    group: "Backend",
    items: [
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express.js" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: FaPlug, name: "REST APIs" },
    ],
  },
  {
    group: "Platform & Tools",
    items: [
      { icon: SiFirebase, name: "Firebase" },
      { icon: SiGit, name: "Git" },
    ],
  },
];

export const SERVICES = [
  {
    icon: FaWindowMaximize,
    index: "01",
    category: "Web Application Development",
    title: "Custom Web Applications",
    body: "Modern, responsive web products built around your business goals and user needs.",
  },
  {
    icon: FaMobileScreenButton,
    index: "02",
    category: "Mobile App Development",
    title: "iOS & Android Applications",
    body: "Cross-platform mobile apps built with React Native and Expo, from concept to production.",
  },
  {
    icon: FaServer,
    index: "03",
    category: "Backend & API Development",
    title: "Reliable Backend Systems",
    body: "Scalable APIs, authentication, databases, and server-side systems that power your product.",
  },
  {
    icon: FaWandMagicSparkles,
    index: "04",
    category: "AI-Powered Solutions",
    title: "AI Integration & Automation",
    body: "Practical AI features that improve products, automate workflows, and create smarter user experiences.",
  },
  {
    icon: FaPenRuler,
    index: "05",
    category: "UI/UX & Product Development",
    title: "Interfaces Built for People",
    body: "Clean, intuitive digital experiences designed to make products easier and more enjoyable to use.",
  },
  {
    icon: FaCreditCard,
    index: "06",
    category: "Integrations & Payments",
    title: "Connect Everything Your Product Needs",
    body: "Payment gateways, Google authentication, notifications, AI services, and third-party API integrations.",
  },
  {
    icon: FaRocket,
    index: "07",
    category: "MVP & Product Development",
    title: "From Idea to Working Product",
    body: "Turn your concept into a functional MVP that can be tested, launched, and improved with real users.",
  },
  {
    icon: FaGraduationCap,
    index: "08",
    category: "EdTech Solutions",
    title: "Technology for Better Learning",
    body: "Student platforms, CBT systems, learning tools, tutor solutions, and educational products built for real learning needs.",
  },
];

export const PROCESS = [
  {
    icon: FaCompass,
    index: "01",
    stage: "Discovery",
    title: "Understand the Product",
    points: [
      "Project goals",
      "Business requirements",
      "Target users",
      "Core problems",
      "Feature requirements",
      "Existing systems / integrations",
    ],
    note: "I first understand what you're trying to achieve before development begins.",
  },
  {
    icon: FaDiagramProject,
    index: "02",
    stage: "Planning",
    title: "Define the Technical Roadmap",
    points: [
      "Feature breakdown",
      "User flows & functionality",
      "Technology selection",
      "Backend & API requirements",
      "Database structure",
      "Development milestones",
    ],
    note: "The project is broken into clear deliverables so you know what is being built and what to expect.",
  },
  {
    icon: FaCode,
    index: "03",
    stage: "Development",
    title: "Build the Product",
    points: [
      "Web application development",
      "Mobile app development",
      "Backend & REST APIs",
      "Database integration",
      "Authentication",
      "Payment integration",
      "AI features & third-party APIs",
    ],
    note: "I turn the approved requirements into a functional, production-ready product.",
  },
  {
    icon: FaVialCircleCheck,
    index: "04",
    stage: "Testing & Optimization",
    title: "Make Sure It Works",
    points: [
      "Feature testing",
      "API testing",
      "Bug fixing",
      "Cross-device testing",
      "Performance improvements",
      "Security considerations",
      "Final refinements",
    ],
    note: "Every major feature is tested, issues are resolved, and the product is refined before launch.",
  },
  {
    icon: FaRocket,
    index: "05",
    stage: "Deployment & Support",
    title: "Launch & Keep It Running",
    points: [
      "Production deployment",
      "Website deployment",
      "Mobile app release",
      "Server/API deployment",
      "Environment configuration",
      "Post-launch fixes",
      "Maintenance & improvements",
    ],
    note: "I don't stop at writing the code. I help get the product into production and support its continued improvement.",
  },
];

/**
 * Products Daniel built and owns. Each carries its own brand colour,
 * used for the ambient wash behind its panel, and a gallery of
 * 16:9 showcase frames.
 */
export const FLAGSHIP = [
  {
    index: "01",
    title: "MyEasySchool",
    kind: "Mobile app",
    flag: "Founder",
    brand: "#4CBB2E",
    tagline: "Exam prep for Nigerian university students",
    body: "Students pick their level and university and get that semester's courses, each with past-question quizzes that return instant feedback and worked solutions \u2014 with proper maths rendering. A timed 35-question CBT \"Exams Mode\" mirrors the real paper. Daily streaks, a weekly schedule, XP, mock tests and a weekly leaderboard keep students coming back, and an AI study space lets them upload their own PDFs, generate quizzes from them and chat with a Study Buddy. Subscriptions run through Paystack.",
    notes:
      "React Native 0.81 on Expo SDK 54. TanStack Query caching keeps the app usable offline, an Axios client refreshes tokens automatically and stores them in the OS keychain, with Sentry monitoring, push notifications and EAS builds shipping to Android and iOS.",
    tech: ["React Native", "Expo", "TanStack Query", "Axios", "Paystack", "Sentry", "EAS"],
    site: "https://myeasyschool.org/",
    shots: [
      {
        src: "/projects/myeasyschool-1.webp",
        alt: "MyEasySchool course practice list, a past question with options, the home screen, timed CBT exam simulation and the weekly leaderboard",
      },
      {
        src: "/projects/myeasyschool-2.webp",
        alt: "MyEasySchool answer checking with instant feedback, worked explanations and timed CBT mode",
      },
      {
        src: "/projects/myeasyschool-3.webp",
        alt: "MyEasySchool AI study space: course library, uploaded PDFs, generated quizzes and mock test history",
      },
      {
        src: "/projects/myeasyschool-4.webp",
        alt: "MyEasySchool video tutorials, daily streak calendar, profile and semester subscription plans",
      },
      {
        src: "/projects/myeasyschool-5.webp",
        alt: "MyEasySchool onboarding: sign in, choose academic level and university, and pick a study persona",
      },
    ],
  },
  {
    index: "02",
    title: "ScholarGen",
    kind: "Mobile app",
    brand: "#3A6FE5",
    tagline: "JAMB/UTME exam prep for Nigerian students",
    body: "Students build mock exams from real past papers \u2014 choosing subjects, years and question counts \u2014 then sit them under exam timing and get a scored subject breakdown with worked explanations. An AI study companion, Gen, answers questions in context, while quiz duels, flashcards and timed game modes keep daily practice going. Study groups and a referral programme that pays out to students' bank accounts round it out.",
    tech: ["React Native", "Expo", "Node.js", "Express.js", "MongoDB", "REST APIs", "AI Integration"],
    shots: [
      {
        src: "/projects/scholargen-1.webp",
        alt: "ScholarGen home screen, mock exam setup, timed CBT question and the Gen AI tutor",
      },
      {
        src: "/projects/scholargen-2.webp",
        alt: "ScholarGen results breakdown, worked explanations, study groups, referrals and dark mode",
      },
    ],
  },
  {
    index: "03",
    title: "Fyndryte",
    kind: "Mobile app",
    brand: "#F97316",
    tagline: "Food, pharmacy, shops and verified artisans in one app",
    body: "One app for everyday needs \u2014 order food, pharmacy items and shop goods, or book a verified artisan. Payments sit in an escrow wallet and are released only when the customer enters their delivery PIN. For artisan jobs, providers return an itemised quotation covering labour, materials and ETA that the customer approves before any work starts, which takes the pricing disputes out of informal hiring.",
    tech: ["React Native", "Expo", "Node.js", "Express.js", "MongoDB", "REST APIs", "Paystack"],
    shots: [
      {
        src: "/projects/fyndryte-1.webp",
        alt: "Fyndryte onboarding, home feed, restaurant menu, live order tracking and wallet",
      },
      {
        src: "/projects/fyndryte-2.webp",
        alt: "Fyndryte artisan booking with itemised quotations and job status tracking",
      },
      {
        src: "/projects/fyndryte-3.webp",
        alt: "Fyndryte food ordering, checkout, escrow delivery PIN and order history",
      },
    ],
  },
];

/** Sites built for clients. Shown compactly beneath the products. */
export const CLIENT_WORK = [
  {
    title: "SunRise Enterprise",
    body: "Multi-purpose cooperative platform built around the brand's eco-friendly ethos, with a nature-inspired palette and intuitive navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    site: "https://www.sunrisempcooperative.com",
    repo: "https://github.com/Dannyblue12/SunRise-website",
    image: "https://e7guoqvcdebehi5h.public.blob.vercel-storage.com/Screenshot_20250618-033900~2-KKUrwKMPeKqgxqdTLZosnaZqKUGYFQ.png?width=500&height=300",
    alt: "SunRise Enterprise cooperative website",
  },
  {
    title: "Stream of Grace",
    body: "Faith-based organisation site with serene, uplifting tones and a harmonious, inspiring layout.",
    tech: ["HTML", "CSS", "JavaScript", "Youtube API"],
    site: "https://www.streamofgracechapel.org",
    repo: "https://github.com/Codex-247/Stream-of-Grace",
    image: "https://e7guoqvcdebehi5h.public.blob.vercel-storage.com/Screenshot_20250618-034347~2-za7DZj91N0SCU9mmEIMV7BncsxUO4D.png?width=500&height=300",
    alt: "Stream of Grace chapel website",
  },
  {
    title: "Mono Education",
    body: "Educational consulting website designed to be informative, trustworthy and easy to navigate.",
    tech: ["HTML", "CSS", "JavaScript"],
    site: "https://mono-education.vercel.app/",
    repo: "https://github.com/Dannyblue12/Mono-Education",
    image: "https://e7guoqvcdebehi5h.public.blob.vercel-storage.com/Screenshot_20250618-034027~2-GDpwC6CeGweyj0G87gK0T4lskizbNU.png?width=100%&height=300",
    alt: "Mono Education consulting website",
  },
  {
    title: "ChainGuild",
    body: "Web3 platform connecting gamers and developers, with a futuristic, tech-forward interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    site: "https://chain-guild.vercel.app/",
    repo: "https://github.com/Dannyblue12/ChainGuild",
    image: "https://e7guoqvcdebehi5h.public.blob.vercel-storage.com/Screenshot_20250618-051031~2-eUsBJmoOtXnDUHp06CIruQYBQhyHpw.png?width=500&height=300",
    alt: "ChainGuild Web3 gaming platform",
  },
  {
    title: "Beauty Spa",
    body: "Mood-driven pitch site built on soft colour and elegant typography to carry a sense of calm.",
    tech: ["HTML", "CSS", "JavaScript"],
    site: "https://beauty-spa-flame.vercel.app/",
    repo: "https://github.com/Dannyblue12/Beauty-Spa",
    image: "https://e7guoqvcdebehi5h.public.blob.vercel-storage.com/Screenshot_20250613-145441~2-Ga0CoRv46XRR8zIs1WzVV6VhNzc7Af.png?width=500&height=300",
    alt: "Beauty Spa pitch website",
  },
  {
    title: "Learn With Ease",
    body: "Educational outreach programme site with a clean, minimal layout that keeps the core values up front.",
    tech: ["HTML", "CSS", "JavaScript"],
    site: "https://www.learnwitheaseinitiative.org/",
    image: "https://vorv4jye8h09tbza.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-01%20at%2012.07.40_d42980c5.jpg",
    alt: "Learn With Ease educational initiative website",
  },
];
