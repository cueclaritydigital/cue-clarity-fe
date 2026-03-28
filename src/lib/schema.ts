// ── JSON-LD Structured Data ───────────────────────────────────────────────────
// Shared Schema.org definitions injected into <head> via layout or page metadata.

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CueClarity",
  url: "https://cueclarity.com",
  logo: "https://cueclarity.com/logo.png",
  description:
    "Expert career counselling for students, parents, and professionals. Psychometric assessments, study-abroad guidance, and life-skills programs.",
  sameAs: [
    "https://www.linkedin.com/company/cueclarity",
    "https://www.instagram.com/cueclarity",
    "https://twitter.com/cueclarity",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+91-8652222525",
    availableLanguage: ["English", "Hindi"],
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "CueClarity",
  image: "https://cueclarity.com/og-image.jpg",
  description:
    "Career counselling and mentorship for students and professionals.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2500",
  },
};

/** SiteNavigationElement — helps Google understand the site structure */
export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "CueClarity Site Navigation",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "Home",
      url: "https://cueclarity.com/",
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "About",
      url: "https://cueclarity.com/about",
    },
    // Services
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Career Counselling & Guidance",
      url: "https://cueclarity.com/services/career-counselling",
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Career Counselling for School Students (8th–10th)",
      url: "https://cueclarity.com/services/career-counselling/students/school",
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "Career Guidance After 10th & 12th",
      url: "https://cueclarity.com/services/career-counselling/students/post-board",
    },
    {
      "@type": "SiteNavigationElement",
      position: 6,
      name: "Career Counselling for Graduates",
      url: "https://cueclarity.com/services/career-counselling/graduates",
    },
    {
      "@type": "SiteNavigationElement",
      position: 7,
      name: "Career Counselling for Professionals",
      url: "https://cueclarity.com/services/career-counselling/professionals",
    },
    {
      "@type": "SiteNavigationElement",
      position: 8,
      name: "International Education",
      url: "https://cueclarity.com/services/international-education",
    },
    {
      "@type": "SiteNavigationElement",
      position: 9,
      name: "Beyond School & Life Skills",
      url: "https://cueclarity.com/services/beyond-school-life-skills",
    },
    {
      "@type": "SiteNavigationElement",
      position: 10,
      name: "Mental Health & Wellness",
      url: "https://cueclarity.com/services/mental-health-wellness",
    },
    {
      "@type": "SiteNavigationElement",
      position: 11,
      name: "Khud Ki Kahani",
      url: "https://cueclarity.com/services/khud-ki-kahani",
    },
    {
      "@type": "SiteNavigationElement",
      position: 12,
      name: "Industrial Training",
      url: "https://cueclarity.com/services/industrial-training",
    },
    {
      "@type": "SiteNavigationElement",
      position: 13,
      name: "Workforce Development",
      url: "https://cueclarity.comwork-force-development",
    },
    // Programs
    {
      "@type": "SiteNavigationElement",
      position: 14,
      name: "Webinars",
      url: "https://cueclarity.com/programs?tab=webinars",
    },
    {
      "@type": "SiteNavigationElement",
      position: 15,
      name: "Workshops",
      url: "https://cueclarity.com/programs?tab=workshops",
    },
    {
      "@type": "SiteNavigationElement",
      position: 16,
      name: "Career Tracks",
      url: "https://cueclarity.com/programs?tab=tracks",
    },
    {
      "@type": "SiteNavigationElement",
      position: 17,
      name: "Certifications",
      url: "https://cueclarity.com/programs?tab=certifications",
    },
    // Static pages
    {
      "@type": "SiteNavigationElement",
      position: 18,
      name: "Testimonials",
      url: "https://cueclarity.com/testimonials",
    },
    {
      "@type": "SiteNavigationElement",
      position: 19,
      name: "Resources",
      url: "https://cueclarity.com/resources",
    },
  ],
};
