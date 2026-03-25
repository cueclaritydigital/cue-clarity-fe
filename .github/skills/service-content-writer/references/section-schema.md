# Section Schema Reference

Complete TypeScript interfaces for all 11 service page section types. Every section is rendered by a dedicated editorial component.

## Section Type → Component Mapping

| Type | Component | Purpose |
|------|-----------|---------|
| `hero` | EditorialHero | Page header with headline, eyebrow, CTA buttons |
| `stats` | StatsRow | Numeric metrics with optional section header |
| `cards` | IconCards | Grid of cards with icons, tags, checklists |
| `process` | ProcessTimeline | Step-by-step numbered workflow |
| `comparison` | ComparisonPanel | Side-by-side before/after contrast |
| `featureList` | FeatureList | Icon-driven feature list with optional image |
| `faq` | FAQAccordion | Expandable Q&A pairs |
| `cta` | EditorialCTA | Conversion section with CTA buttons |
| `questions` | QuestionsPanel | Pain-point questions the user relates to |
| `framework` | FrameworkGrid | Methodology pillars or framework overview |
| `deliverables` | Deliverables | Numbered list of tangible outcomes |

## Interface Definitions

### HeroSection

```typescript
interface HeroSection {
  type: "hero";
  eyebrow: string;        // Short label: "Career Counselling for Graduates"
  headline: string;        // Supports <em> tags: "From Confusion to <em>Clarity</em>"
  description: string;     // 1-2 sentences, address the reader directly
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  image?: string;         // Optional hero image path
}
```

**Usage notes:**
- Always the FIRST section on every page
- headline should be 3-8 words, benefit-driven
- Both CTAs required — primary is bold, secondary is outline
- `<em>` wraps the keyword for italic emphasis in Oswald uppercase

### StatsSection

```typescript
interface StatsSection {
  type: "stats";
  eyebrow?: string;
  headline?: string;
  description?: string;
  stats: {
    value: string;     // Number as string: "5000", "93", "200"
    suffix?: string;    // "+", "%", "x"
    label: string;      // Complete phrase: "Students Guided to Clarity"
  }[];
}
```

**Usage notes:**
- Typically 3-4 stats
- Works as social proof near the top, or trust metrics near the bottom
- Can be used with or without eyebrow/headline header

### CardsSection

```typescript
interface CardsSection {
  type: "cards";
  eyebrow: string;
  headline: string;
  description?: string;
  columns?: 2 | 3 | 4;    // Grid layout, default 3
  variant?: "default" | "bordered" | "icon" | "hover-dark";
  cards: {
    icon?: string;          // react-icons/fi icon name: "FiTarget"
    number?: string;        // Optional numbering: "01"
    title: string;          // 4-6 words
    description: string;    // 1-2 sentences
    tags?: string[];        // Optional tags below description
    checklist?: string[];   // Optional checklist items
    href?: string;          // Optional link
  }[];
  disclaimer?: string;      // Small text below cards
}
```

**Usage notes:**
- `variant: "icon"` — centered icon above title, best for features
- `variant: "bordered"` — border outline, best for categories/audiences
- `variant: "hover-dark"` — dark hover effect, best for interactive/clickable
- `columns: 2` for detailed cards, `3` for standard, `4` for compact

### ProcessSection

```typescript
interface ProcessSection {
  type: "process";
  eyebrow: string;
  headline: string;
  description?: string;
  variant?: "horizontal" | "vertical" | "dark" | "large-numbers";
  steps: {
    number: string;       // "01", "02", etc.
    title: string;
    description: string;
  }[];
  testimonial?: {         // Optional inline testimonial
    quote: string;
    author: string;
    role: string;
  };
}
```

**Usage notes:**
- 3-4 steps recommended (never more than 5)
- `variant: "horizontal"` for wide layouts, `"vertical"` for detailed steps
- `variant: "large-numbers"` for visual emphasis on step numbers
- testimonial adds credibility beneath the steps

### ComparisonSection

```typescript
interface ComparisonSection {
  type: "comparison";
  eyebrow?: string;
  headline?: string;
  description?: string;
  left: {
    title: string;       // "Without CueClarity"
    emoji?: string;       // "😰"
    items: string[];      // Pain points (4-6 items)
  };
  right: {
    title: string;       // "With CueClarity"
    emoji?: string;       // "🎯"
    items: string[];      // Benefits (4-6 items, match left count)
  };
  footnote?: string;
}
```

**Usage notes:**
- Left = negative/pain, Right = positive/solution
- Items should mirror each other (same topic, opposite framing)
- 4-6 items per side for visual balance

### FeatureListSection

```typescript
interface FeatureListSection {
  type: "featureList";
  eyebrow: string;
  headline: string;
  description?: string;
  features: {
    icon?: string;         // react-icons/fi: "FiCheckCircle"
    title: string;
    description: string;
  }[];
  image?: string;          // Optional side image
  columns?: 1 | 2;        // Feature list layout
}
```

**Usage notes:**
- Best for "Why Choose Us" or "What Makes Us Different"
- `columns: 2` with 6 features, or `columns: 1` with 3-4 features + image

### FAQSection

```typescript
interface FAQSection {
  type: "faq";
  eyebrow: string;        // Usually "FAQs" or "Common Questions"
  headline: string;
  items: {
    question: string;     // Write as a real search query
    answer: string;       // 2-3 sentences, actionable
  }[];
}
```

**Usage notes:**
- REQUIRED on every page (SEO critical)
- 5-8 questions per page
- Questions = long-tail SEO keywords users actually search
- Include service name + location terms naturally in answers

### CTASection

```typescript
interface CTASection {
  type: "cta";
  eyebrow?: string;
  headline: string;       // Urgency + benefit
  description?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  quote?: string;         // Optional emotional pull quote
}
```

**Usage notes:**
- Always the LAST section on every page
- Use urgency language: "Don't let...", "Start your...", "Take the first step..."
- quote adds emotional resonance (student testimonial)

### QuestionsSection

```typescript
interface QuestionsSection {
  type: "questions";
  eyebrow?: string;       // "Sound Familiar?"
  headline?: string;
  description?: string;
  questions: {
    icon?: string;         // react-icons/fi emoji-style
    text: string;          // Pain-point statement
  }[];
}
```

**Usage notes:**
- Placed early (position 3-4) to build empathy
- 4-6 pain-point questions the audience relates to
- Phrased as "I" statements: "I don't know what career suits me"

### FrameworkSection

```typescript
interface FrameworkSection {
  type: "framework";
  eyebrow: string;
  headline: string;
  description?: string;
  variant?: "timeline" | "pillars";
  pillars: {
    icon?: string;
    number?: string;
    title: string;
    description: string;
  }[];
  image?: string;
}
```

**Usage notes:**
- Use for methodology, approach pillars, or frameworks
- `variant: "pillars"` for 3-4 core pillars
- `variant: "timeline"` for chronological methodology
- More conceptual than `process` — focuses on "what" not "how"

### DeliverableSection

```typescript
interface DeliverableSection {
  type: "deliverables";
  eyebrow: string;
  headline: string;
  description?: string;
  items: {
    number?: string;      // "01", "02"
    title: string;        // Tangible outcome name
    description: string;  // What they get, specifically
  }[];
}
```

**Usage notes:**
- "What You Get" or "Your Deliverables"
- Each item should be a tangible artifact or outcome
- 4-6 items recommended

## Page Data Structure

```typescript
interface ServicePageData {
  slug: string;            // URL path: "career-counselling"
  title: string;           // Display title
  metaTitle: string;       // SEO title: "Page Title | CueClarity" (< 60 chars)
  metaDescription: string; // SEO description (< 160 chars)
  sections: ServiceSection[];
}
```

## Registration

After creating a page data object, register it in the `SERVICE_PAGES` record:

```typescript
const SERVICE_PAGES: Record<string, ServicePageData> = {
  "career-counselling": careerCounselling,
  "your-new-slug": yourNewPage,
  // ...
};
```

The page auto-generates at `/services/{slug}` via `generateStaticParams()`.

## Available Icons (react-icons/fi)

Common icons used across existing pages:
- Navigation: `FiTarget`, `FiCompass`, `FiMap`, `FiNavigation`
- People: `FiUsers`, `FiUser`, `FiUserCheck`
- Growth: `FiTrendingUp`, `FiAward`, `FiStar`
- Communication: `FiMessageCircle`, `FiPhone`, `FiMail`
- Education: `FiBookOpen`, `FiBook`, `FiEdit3`
- Structure: `FiLayers`, `FiGrid`, `FiLayout`
- Action: `FiCheckCircle`, `FiCheck`, `FiArrowRight`
- Misc: `FiBriefcase`, `FiGlobe`, `FiHeart`, `FiShield`, `FiClock`
