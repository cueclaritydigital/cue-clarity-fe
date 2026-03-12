// ── JSON-LD Structured Data ───────────────────────────────────────────────────
// Shared Schema.org definitions injected into <head> via layout or page metadata.

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CueClarity',
  url: 'https://cueclarity.com',
  logo: 'https://cueclarity.com/logo.png',
  description:
    'Expert career counselling for students, parents, and professionals. Psychometric assessments, study-abroad guidance, and life-skills programs.',
  sameAs: [
    'https://www.linkedin.com/company/cueclarity',
    'https://www.instagram.com/cueclarity',
    'https://twitter.com/cueclarity',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+91-8652222525',
    availableLanguage: ['English', 'Hindi'],
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'CueClarity',
  image: 'https://cueclarity.com/og-image.jpg',
  description:
    'Career counselling and mentorship for students and professionals.',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '2500',
  },
};
