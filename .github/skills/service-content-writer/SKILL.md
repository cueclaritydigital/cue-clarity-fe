---
name: service-content-writer
description: "Write, reorganize, and optimize service page content for CueClarity. Use when: creating new service pages, improving existing service page content, adding FAQ sections, reorganizing sections for SEO, making pages more informative and lucrative, auditing service page content quality."
argument-hint: "Describe the service page to create or improve (e.g., 'create international education page from this HTML mockup' or 'add FAQ and improve SEO for all service pages')"
---

# Service Content Writer

Write compelling, SEO-optimized service page content for CueClarity's static JSON-driven service pages. Every page renders through reusable editorial components styled with the site's existing design aesthetic (Oswald + Plus Jakarta Sans, cream/navy/yellow palette).

## When to Use

- Creating a new service page from an HTML mockup, brief, or topic
- Reorganizing existing service page sections for better flow
- Adding missing FAQ sections for SEO
- Improving content quality, headlines, and descriptions
- Auditing all service pages for consistency and completeness

## Key Files

| File                                                    | Purpose                                                                     |
| ------------------------------------------------------- | --------------------------------------------------------------------------- |
| `src/lib/data/services.ts`                              | All service page data — section interfaces, page definitions, page registry |
| `src/components/services/editorial/SectionRenderer.tsx` | Maps section types to components                                            |
| `src/components/services/editorial/*.tsx`               | 11 editorial components that render sections                                |
| `src/app/services/[...slug]/page.tsx`                   | Dynamic route — reads data, generates static pages                          |

## Section Types Reference

See [Section Schema Reference](./references/section-schema.md) for complete TypeScript interfaces and usage guidance for all 11 section types.

## Procedure

### Step 1 — Gather Context

1. Read `src/lib/data/services.ts` to understand existing pages and section patterns
2. If creating from an HTML mockup, extract: headlines, descriptions, section structure, stats, FAQs, CTAs
3. If improving existing pages, read the current page data and identify gaps

### Step 2 — Plan the Page Structure

Every high-performing service page should follow this **recommended section flow**:

```
1. hero          — Bold headline, eyebrow, description, 2 CTAs
2. stats/cards   — Social proof OR "who it's for" audience cards
3. questions     — Pain points the user relates to ("Sound Familiar?")
4. cards         — Core services/solutions OR methodology overview
5. process       — Step-by-step process (3-4 steps max)
6. comparison    — Before/after or with/without contrast
7. framework     — Methodology pillars or differentiators
8. featureList   — "Why us" unique selling points
9. deliverables  — "What you get" tangible outcomes
10. stats        — Trust metrics (if not used earlier)
11. faq          — 5-8 SEO-rich Q&A pairs
12. cta          — Final conversion section with urgency
```

Not every page needs all 12 — but every page MUST have:

- **hero** (always first)
- **faq** (SEO critical — every page must have one)
- **cta** (always last)
- At least one of: stats, comparison, or deliverables (social proof)
- At least one of: process, framework, or featureList (methodology)

### Step 3 — Write the Content

Follow these content principles:

#### Headlines

- Use Oswald uppercase styling — write punchy, short headlines (3-8 words)
- Support `<em>` tags for italic emphasis on key phrases
- Lead with benefit or outcome, not feature
- Examples: `"From Confusion to <em>Clarity</em>"`, `"Build a Global Career with the <em>Right Direction</em>"`

#### Eyebrows

- Short category labels (2-4 words): "Our Process", "The Reality", "Why CueClarity"
- Use title case, no punctuation

#### Descriptions

- 1-2 sentences max per section description
- Address the reader directly ("you", "your child")
- Focus on transformation, not features

#### Cards

- 2-4 columns depending on content density
- Each card: icon + title (4-6 words) + description (1-2 sentences)
- Use `variant: "icon"` for feature lists, `"bordered"` for categories, `"hover-dark"` for interactive

#### Stats

- Use real numbers when available, aspirational when not
- Always include suffix (%, +, x)
- Label should be a complete phrase, not a single word

#### FAQ Items

- Write 5-8 questions per page
- Questions should be what users actually Google (long-tail SEO keywords)
- Answers: 2-3 sentences, actionable, not generic
- Include the service name and location-relevant terms naturally

#### CTA

- Headline: urgency + benefit ("Don't Let Confusion Decide Your Future")
- Description: 1-2 sentences reinforcing value
- Always include primaryCTA with `href: "/contact"`
- Optional `quote` for emotional resonance

### Step 4 — Write the TypeScript

1. Create a `const` variable with the `ServicePageData` type
2. Set `slug` to match the URL path (kebab-case)
3. Set `metaTitle` with format: `"Page Title | CueClarity"` (under 60 chars)
4. Set `metaDescription` (under 160 chars, include primary keyword)
5. Add the sections array following the planned structure
6. Register the page in the `SERVICE_PAGES` record at the bottom of the file
7. The page will be auto-generated at `/services/{slug}`

### Step 5 — Validate

1. Run `npm run build` — verify the new page appears in the static output
2. Check that section count is 8-12 (fewer feels thin, more feels overwhelming)
3. Verify FAQ section exists with 5+ items
4. Confirm metaTitle < 60 chars and metaDescription < 160 chars
5. Ensure no duplicate section types used back-to-back (e.g., two `cards` in a row)

## Content Quality Checklist

- [ ] Every page has hero + faq + cta minimum
- [ ] Headlines are benefit-driven, not feature-driven
- [ ] Stats use real numbers with suffixes
- [ ] FAQ questions match real search queries
- [ ] Descriptions address the reader directly
- [ ] No section has more than 2 sentences of description
- [ ] Card descriptions are 1-2 sentences, not paragraphs
- [ ] Process sections have 3-4 steps (not more)
- [ ] CTA has urgency language
- [ ] metaTitle < 60 chars, metaDescription < 160 chars

## CueClarity Voice Guidelines

- **Tone**: Confident, strategic, empathetic — never salesy or generic
- **Audience**: Indian students, parents, graduates, and working professionals
- **Language**: Simple English, avoid jargon, use "you/your" addressing
- **Brand promise**: "Clarity" — every section should reinforce moving from confusion to clarity
- **Trust signals**: Reference "5,000+ students guided", "200+ seminars", scientific/psychometric approach
- **Differentiator**: Data-driven, not opinion-based. Personalized, not templated.

## Shared CTA Constants

Use these existing constants from services.ts when appropriate:

```typescript
const CTA_BOOK = { label: "Book Career Counselling", href: "/contact" };
const CTA_SPEAK = { label: "Speak to a Career Expert", href: "/contact" };
const CTA_BOOK_STRATEGY = {
  label: "Book Career Strategy Session",
  href: "/contact",
};
```
