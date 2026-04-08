# CueClarity Route-by-Route SEO Optimization Plan

Complete SEO system for 11 service pages, 6 blog stubs, and 5 static pages. Critical gaps discovered: no sitemap/robots, blog posts have zero body content (dead pages), homepage lacks unique metadata, weak internal linking, no content clusters. This plan covers technical SEO, keyword strategy, content audit, conversion improvements, metadata, internal linking, content clusters, component standardization, and a phased roadmap.

---

## Step 1: Route Discovery & Categorization

### Core Money Pages (Transactional — Lead Generation)

| Route                                     | Status              | Target Audience             |
| ----------------------------------------- | ------------------- | --------------------------- |
| `/services/career-counselling`            | Full content        | All audiences (PILLAR)      |
| `/services/students-8-9-10`               | Full content        | Class 8-10 students/parents |
| `/services/after-10th-12th`               | Full content        | Class 11-12 students        |
| `/services/for-graduates`                 | Full content        | Fresh graduates             |
| `/services/for-professionals`             | Full content        | Working professionals       |
| `/services/international-education`       | Full content        | Study abroad aspirants      |
| `/services/industrial-training`           | Content needs audit | Institutions/companies      |
| `/services/work-force-development`        | Content needs audit | Companies/HR                |
| `/services/beyond-school-life-and-skills` | Full content        | Students/parents            |
| `/services/mental-health`                 | Content needs audit | Students under stress       |
| `/services/khud-ki-kahani`                | Content needs audit | Self-discovery seekers      |
| `/programs`                               | Full content        | Program enrollees           |
| `/` (Homepage)                            | Full content        | Brand + first-time visitors |

### Supporting / Authority Pages (Informational)

| Route             | Status                   | Purpose        |
| ----------------- | ------------------------ | -------------- |
| `/about`          | Full content             | Trust building |
| `/testimonials`   | Full content             | Social proof   |
| `/resources`      | Full content             | Top-of-funnel  |
| `/blog`           | Listing only             | Content hub    |
| `/blog/[slug]` x6 | **STUBS ONLY — no body** | Dead pages     |

---

## Step 2: Search Intent Mapping

All 11 service pages + `/programs` → **Transactional** (lead gen focus)
`/about`, `/testimonials` → **Navigational** (trust/proof)
`/resources`, `/blog`, `/blog/[slug]` → **Informational** (must link to transactional pages)
`/` → **Mixed** (navigational + transactional)

---

## Step 3: Keyword Strategy (India-focused, long-tail + intent-driven)

| Route                                     | Primary Keyword                             | Long-tail Keywords                                                                                                 |
| ----------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `/services/career-counselling`            | career counselling India                    | best career counselling services India, psychometric career assessment India, online career guidance India         |
| `/services/students-8-9-10`               | career counselling for class 10 students    | stream selection after class 10, how to choose stream after 10th, science commerce arts after 10th                 |
| `/services/after-10th-12th`               | career guidance after 12th India            | best career options after 12th science, career counselling after 10th and 12th, what to do after 12th commerce     |
| `/services/for-graduates`                 | career guidance for graduates India         | best career options after graduation, what to do after BTech, career counselling for freshers                      |
| `/services/for-professionals`             | career switch guidance India                | mid-career transition India, career counselling for working professionals, career change after 30                  |
| `/services/international-education`       | study abroad counselling India              | best countries to study abroad from India, international education counselling, study abroad guidance              |
| `/services/industrial-training`           | industrial training for students India      | industrial training programs engineering students, corporate training India, skill development freshers            |
| `/services/work-force-development`        | workforce development programs India        | employee skill development, corporate workforce training, resource management training                             |
| `/services/beyond-school-life-and-skills` | life skills training for students India     | soft skills development school students, communication skills training teenagers, leadership training young adults |
| `/services/mental-health`                 | student mental health counselling India     | emotional wellness support students, career stress counselling, anxiety counselling career confusion               |
| `/services/khud-ki-kahani`                | personal development program students India | self-discovery program teenagers, career clarity personal narrative, finding purpose students India                |
| `/programs`                               | career assessment programs India            | psychometric test for career guidance, career counselling webinar, career planning workshop                        |
| `/`                                       | CueClarity career counselling               | expert career counselling students professionals India, science-backed career guidance                             |
| `/about`                                  | about CueClarity                            | CueClarity team, career counselling experts India                                                                  |
| `/testimonials`                           | CueClarity reviews                          | career counselling success stories India, career guidance results                                                  |
| `/resources`                              | free career resources India                 | free career guidance ebooks, career planning videos India                                                          |
| `/blog`                                   | career guidance blog India                  | career tips articles, career planning insights                                                                     |

---

## Step 4: Content Audit — Critical Issues

### 🔴 CRITICAL (Fix Immediately)

1. **No `sitemap.ts` or `robots.txt`** — Search engines can't efficiently crawl
2. **6 blog posts have ZERO body content** — Only metadata stubs in `src/lib/data/blog.ts`, making them dead pages
3. **Homepage has no unique metadata** — Inherits generic defaults from `src/app/layout.tsx`
4. **Testimonials page missing Review/AggregateRating JSON-LD** — Losing rich snippet opportunity
5. **Broken href in `src/lib/data/ourservices.js`** — `work-force-development` missing `/services/` prefix

### 🟡 MODERATE

6. 4 service pages (industrial-training, work-force-development, mental-health, khud-ki-kahani) need content quality audit
7. About page missing Person schema for founder, Organization schema for team
8. E-books have no lead capture gate (direct download = missed leads)
9. Blog sidebar has no CTA linking to money pages
10. Footer only lists 7 of 11 services

### 🟢 MINOR

11. H1 gradient text splits may confuse crawlers
12. Canonical URL format inconsistent (some relative, some absolute)
13. Blog listing page (`/blog`) has no H1

### Page-by-Page Content Assessment

| Page                                | H1                                               | H2/H3 Structure              | Intent Match                   | Problem Solved? | Thin Content? | Missing Sections              |
| ----------------------------------- | ------------------------------------------------ | ---------------------------- | ------------------------------ | --------------- | ------------- | ----------------------------- |
| `/`                                 | "Discover your Strength Design Your Career"      | ✅ Good                      | ⚠️ Could be more transactional | ✅ Yes          | No            | Missing local business schema |
| `/services/career-counselling`      | "From Confusion to Clarity"                      | ✅ Excellent                 | ✅ Strong transactional        | ✅ Yes          | No            | Could add case studies        |
| `/services/students-8-9-10`         | "Choose Your Stream with Science, Not Guesswork" | ✅                           | ✅                             | ✅              | No            | —                             |
| `/services/after-10th-12th`         | "Strategy, Not Guesswork"                        | ⚠️ Generic, not keyword-rich | ✅                             | ✅              | No            | —                             |
| `/services/for-graduates`           | "Stop Guessing — Start Designing Your Future"    | ✅                           | ✅                             | ✅              | No            | —                             |
| `/services/for-professionals`       | "Your Experience Deserves a Better Direction"    | ✅                           | ✅                             | ✅              | No            | —                             |
| `/services/international-education` | "Build a Global Career with the Right Direction" | ✅                           | ✅                             | ✅              | No            | —                             |
| `/services/industrial-training`     | ⚠️ Unknown                                       | ⚠️ Unknown                   | ⚠️ Unknown                     | ⚠️ Unknown      | ⚠️ Possible   | Full audit needed             |
| `/services/work-force-development`  | ⚠️ Unknown                                       | ⚠️ Unknown                   | ⚠️ Unknown                     | ⚠️ Unknown      | ⚠️ Possible   | Full audit needed             |
| `/services/mental-health`           | ⚠️ Unknown                                       | ⚠️ Unknown                   | ⚠️ Unknown                     | ⚠️ Unknown      | ⚠️ Possible   | Full audit needed             |
| `/services/khud-ki-kahani`          | ⚠️ Unknown                                       | ⚠️ Unknown                   | ⚠️ Unknown                     | ⚠️ Unknown      | ⚠️ Possible   | Full audit needed             |
| `/programs`                         | "Invest in Clarity. Unlock Your Career."         | ✅                           | ✅                             | ✅              | No            | —                             |
| `/about`                            | "Where Insight Meets Action."                    | ✅ Good but generic          | Navigational ✅                | ✅              | No            | No JSON-LD                    |
| `/testimonials`                     | "Real Results, Real People."                     | ✅                           | Informational ✅               | ✅              | No            | No Review schema              |
| `/resources`                        | "Your Career Resource Hub."                      | ✅                           | Informational ✅               | ✅              | No            | —                             |
| `/blog`                             | N/A (listing page)                               | ✅                           | Informational ✅               | N/A             | N/A           | Missing H1                    |
| `/blog/[slug]` x6                   | Per-post title                                   | ❌ NO CONTENT                | ❌ Dead pages                  | ❌ No           | ❌ YES        | Need full articles            |

---

## Step 5: Conversion-Focused Improvements

### Current CTA Audit

- **Primary CTA everywhere:** WhatsApp chat (green button)
- **Secondary CTAs:** "Explore Services", external assessment links
- **Trust signals present:** "No hidden costs", "100% Confidential", "Zero obligations"
- **Stats present:** 5,000+ guided, 95% satisfaction, 200+ seminars, 500+ partners

### Recommended Improvements Per Page

| Area                  | Recommendation                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **All Service Pages** | Add floating "Talk to Expert" button; add mini-testimonial cards between sections; add pricing transparency         |
| **Homepage**          | Add sticky header CTA "Book Free Career Session"; add social proof counter; add exit-intent popup with career ebook |
| **Blog Pages**        | Add inline CTAs every 3 sections; add "Related Service" card in sidebar; link each post to its cluster pillar       |
| **Testimonials**      | Add CTA after each story ("Get similar results"); add audience-type filter; add Before→After cards                  |
| **Resources**         | Gate e-books behind email capture; add "Want personalized guidance?" CTA after resource sections                    |

---

## Step 6: Metadata Optimization

| Page                                | Recommended SEO Title                                                         | Recommended Meta Description                                                                                                                                                |
| ----------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                                 | "Career Counselling for Students & Professionals \| CueClarity India"         | "Confused about your career? Get science-backed career counselling from India's trusted experts. Free discovery call for students (Class 8-12), graduates & professionals." |
| `/services/career-counselling`      | "Career Counselling India \| Expert Guidance for Students & Professionals"    | "Transform career confusion into clarity with psychometric assessments & 1-on-1 expert counselling. 5,000+ students guided. Book your free discovery call today."           |
| `/services/students-8-9-10`         | "Career Counselling for Class 8, 9, 10 Students \| Stream Selection Guidance" | "Help your child choose the right stream — Science, Commerce, or Arts — with psychometric assessments. Expert career counselling for school students. Book now."            |
| `/services/after-10th-12th`         | "Career Guidance After 10th & 12th \| Best Career Options \| CueClarity"      | "Confused after boards? Get expert career guidance for Class 11-12 students. JEE, NEET, or alternate paths — find the right career with data-backed counselling."           |
| `/services/for-graduates`           | "Career Counselling for Graduates \| Job, MBA or Govt Exams \| CueClarity"    | "Stop guessing after graduation. Get personalized career direction — job vs MBA vs competitive exams. 5,000+ careers transformed. Free discovery call."                     |
| `/services/for-professionals`       | "Career Switch Counselling for Working Professionals \| CueClarity India"     | "Stuck in your career? Get expert guidance for mid-career transitions, upskilling & leadership growth. Trusted by 5,000+ professionals across India."                       |
| `/services/international-education` | "Study Abroad Counselling India \| University Guidance & Applications"        | "Plan your international education with zero-commission guidance. 15+ countries, personalized university shortlisting & application strategy. Book free audit."             |
| `/services/industrial-training`     | "Industrial Training Programs for Students & Companies \| CueClarity"         | "Bridge the skill gap with CueClarity's industrial training programs. Hands-on training for engineering students & corporate workforce. Enquire now."                       |
| `/services/work-force-development`  | "Workforce Development & Employee Training Solutions \| CueClarity India"     | "Upskill your workforce with customized development programs. Resource management, skill mapping & employee growth solutions for Indian companies."                         |
| `/programs`                         | "Career Assessment Programs & Webinars \| Psychometric Tests \| CueClarity"   | "Enroll in science-backed career assessment programs, expert-led webinars & counselling courses. Starting ₹499. For students, parents & professionals."                     |
| `/testimonials`                     | "Career Counselling Success Stories & Reviews \| CueClarity India"            | "Read real transformation stories — students who found direction, professionals who switched careers. 5,000+ careers guided with 95% satisfaction."                         |
| `/blog`                             | "Career Guidance Blog \| Expert Tips & Insights \| CueClarity India"          | "Expert articles on career planning after 10th, 12th & graduation. Study abroad guides, psychometric assessment insights & career switch tips."                             |

---

## Step 7: Internal Linking Strategy

### Current State

- Navbar has service dropdown with all services
- Footer has 7 of 11 service links
- Homepage links to services via OurServices component
- Blog has no internal linking to service pages
- Service pages have no cross-links to related services
- No breadcrumbs rendered visually (only in JSON-LD)

### Hub-Spoke Architecture

```
/services/career-counselling (PILLAR)
  ├── /services/students-8-9-10
  ├── /services/after-10th-12th
  ├── /services/for-graduates
  ├── /services/for-professionals
  ├── /blog/how-to-choose-career-after-12th
  ├── /blog/psychometric-assessments-explained
  ├── /blog/career-change-after-30
  └── /blog/parents-role-in-career-guidance

/services/international-education (SUB-PILLAR)
  ├── /blog/study-abroad-myths
  └── /resources (e-books section)

/services/industrial-training (PILLAR)
  ├── /services/work-force-development
  └── /blog/top-emerging-careers-2025
```

### Anchor Text Recommendations

| From Page                                  | To Page                             | Anchor Text                                       |
| ------------------------------------------ | ----------------------------------- | ------------------------------------------------- |
| `/services/students-8-9-10`                | `/services/career-counselling`      | "Explore our full career counselling approach"    |
| `/services/students-8-9-10`                | `/services/after-10th-12th`         | "Already past 10th? See guidance for Class 11-12" |
| `/services/after-10th-12th`                | `/services/for-graduates`           | "Graduated? Get career direction now"             |
| `/services/for-graduates`                  | `/services/for-professionals`       | "Already working? See guidance for professionals" |
| `/services/for-professionals`              | `/services/career-counselling`      | "Back to career counselling overview"             |
| `/blog/how-to-choose-career-after-12th`    | `/services/after-10th-12th`         | "Get expert career guidance after 12th"           |
| `/blog/psychometric-assessments-explained` | `/services/career-counselling`      | "Book your psychometric career assessment"        |
| `/blog/career-change-after-30`             | `/services/for-professionals`       | "Talk to a career switch expert"                  |
| `/blog/study-abroad-myths`                 | `/services/international-education` | "Plan your study abroad journey"                  |
| `/blog/parents-role-in-career-guidance`    | `/services/students-8-9-10`         | "Career counselling for your child"               |
| `/blog/top-emerging-careers-2025`          | `/services/career-counselling`      | "Get guidance for emerging career paths"          |
| `/testimonials`                            | `/services/career-counselling`      | "Start your career transformation"                |
| `/resources`                               | `/services/career-counselling`      | "Want personalized career guidance?"              |

### Implementation Tasks

- Add "Related Services" section to each service page (cross-linking siblings)
- Add "Recommended Reading" section to each service page (linking blog posts)
- Add inline CTAs in blog posts linking to relevant service pages
- Add visible breadcrumbs component to all service pages
- Update Footer to include all 11 service links

---

## Step 8: Content Cluster Strategy

### Cluster 1 — Career Counselling (PRIMARY)

**Pillar:** `/services/career-counselling`

**Existing (need body content):**

- `/blog/how-to-choose-career-after-12th` → links to `/services/after-10th-12th`
- `/blog/psychometric-assessments-explained` → links to pillar
- `/blog/parents-role-in-career-guidance` → links to `/services/students-8-9-10`

**New to create:**

- "Science vs Commerce vs Arts: Which Stream After 10th?" → links to `/services/students-8-9-10`
- "Career Counselling vs Career Guidance: What's the Difference?" → links to pillar
- "How Psychometric Tests Help in Career Selection" → links to pillar
- "Top 10 Career Mistakes Students Make (And How to Avoid Them)" → links to pillar
- "Career Planning Timeline: Class 8 to Graduation" → links to all student service pages
- "Why Parents Need Career Counselling Too" → links to pillar
- "Career Options After BCom / BA / BSc in India" → links to `/services/for-graduates`

### Cluster 2 — Career Switch / Professionals

**Pillar:** `/services/for-professionals`

**Existing (need body content):**

- `/blog/career-transition-after-30` → links to pillar

**New to create:**

- "How to Switch from IT to Non-IT Career in India" → links to pillar
- "Is MBA Worth It After 5 Years of Work Experience?" → links to pillar
- "Signs You Need a Career Change (And What to Do About It)" → links to pillar
- "Career Pivot Success Stories: Real Professionals Who Made the Switch" → links to `/testimonials`

### Cluster 3 — Study Abroad

**Pillar:** `/services/international-education`

**Existing (need body content):**

- `/blog/study-abroad-myths` → links to pillar

**New to create:**

- "How to Study in Canada from India: Complete Guide" → links to pillar
- "UK vs Canada vs Australia: Which Country for Indian Students?" → links to pillar
- "Study Abroad Scholarships for Indian Students 2025" → links to pillar
- "SOP Writing Tips for International University Applications" → links to pillar

### Cluster 4 — Industrial Training & Workforce

**Pillar:** `/services/industrial-training`

**Existing (need body content):**

- `/blog/top-emerging-careers-2025` → links to pillar

**New to create:**

- "Why Industrial Training Is Essential for Engineering Students" → links to pillar
- "Top Skills Companies Look For in 2025 Graduates" → links to `/services/work-force-development`
- "How to Bridge the Industry-Academia Gap in India" → links to pillar

---

## Step 9: Component-Level SEO Standardization

### Current Issues

1. H1 rendered via gradient text splitting — crawlers may see fragmented heading
2. No standardized `<section>` semantic structure with schema anchors
3. FAQ component renders but schema is in page.tsx, not co-located
4. No breadcrumbs component (only JSON-LD)
5. Section headings (H2) are hardcoded — not always keyword-optimized

### Standardization Plan

| Component                     | Change                                                                           |
| ----------------------------- | -------------------------------------------------------------------------------- |
| `EditorialHero.tsx`           | Ensure H1 renders as single `<h1>` tag (not split spans); add `breadcrumbs` prop |
| `FAQAccordion.tsx`            | Co-locate FAQPage JSON-LD generation with visual rendering                       |
| `EditorialCTA.tsx`            | Add `relatedLinks` prop for cross-linking                                        |
| **NEW** `Breadcrumbs.tsx`     | Visual breadcrumb trail matching JSON-LD BreadcrumbList                          |
| **NEW** `RelatedServices.tsx` | Standardized cross-link section for service pages                                |
| **NEW** `InlineCTA.tsx`       | In-article CTA component for blog posts                                          |
| `Footer.tsx`                  | Update to include all 11 service links                                           |
| `BlogSidebar.tsx`             | Add service CTA card prop                                                        |

### Implementation Pattern

All SEO-relevant content should be driven by props/data, not hardcoded:

```
ServicePageData → SectionRenderer → Individual Section Components
BlogPostData → ArticleLayout → Inline CTAs + Sidebar
```

Main additions: `relatedServices`, `relatedPosts`, `breadcrumbs` fields on data structures.

---

## Step 10: Execution Roadmap

### Phase 1 — Technical SEO Foundation (Week 1)

1. Create `src/app/sitemap.ts` (dynamic, all routes)
2. Create `src/app/robots.ts`
3. Add unique metadata to homepage `page.tsx`
4. Fix broken `work-force-development` href in `ourservices.js`
5. Add Review JSON-LD to `/testimonials`
6. Add Person schema to `/about`
7. Standardize canonical URLs
8. Update Footer with all 11 services

### Phase 2 — Optimize Top 5 Money Pages (Week 2)

- Update metadata per Step 6 for: career-counselling, students-8-9-10, after-10th-12th, for-graduates, for-professionals
- Add visible breadcrumbs
- Add "Related Services" cross-links

### Phase 3 — Internal Linking Infrastructure (Week 3)

- Build Breadcrumbs + RelatedServices components
- Add cross-links between all service pages
- Add service CTAs to blog sidebar

### Phase 4 — Fill Content Gaps (Weeks 4-5)

- Write full articles for 6 existing blog stubs
- Audit + enhance 4 weaker service pages (industrial-training, work-force-development, mental-health, khud-ki-kahani)
- Each blog must link to its cluster pillar

### Phase 5 — Content Cluster Expansion (Weeks 6-10)

- Publish 15-20 new blog posts across 4 clusters
- All linking to pillar pages with strategic anchors
- Gate e-books behind email capture

### Phase 6 — Conversion Optimization (Ongoing)

- Floating CTAs, exit-intent popups, A/B test headlines, urgency signals

---

## Step 11: Route-Wise SEO Summary Table

| Route                                     | Intent        | Primary Keyword                     | Top Issues                     | Fix Priority            |
| ----------------------------------------- | ------------- | ----------------------------------- | ------------------------------ | ----------------------- |
| `/`                                       | Mixed         | CueClarity career counselling       | No unique metadata             | P1                      |
| `/services/career-counselling`            | Transactional | career counselling India            | No cross-links, no breadcrumbs | P1                      |
| `/services/students-8-9-10`               | Transactional | career counselling class 10         | No cross-links                 | P1                      |
| `/services/after-10th-12th`               | Transactional | career guidance after 12th India    | Generic H1, no cross-links     | P1                      |
| `/services/for-graduates`                 | Transactional | career guidance graduates India     | No cross-links                 | P1                      |
| `/services/for-professionals`             | Transactional | career switch guidance India        | No cross-links                 | P1                      |
| `/services/international-education`       | Transactional | study abroad counselling India      | No blog cluster support        | P2                      |
| `/services/industrial-training`           | Transactional | industrial training students India  | Content audit needed           | P2                      |
| `/services/work-force-development`        | Transactional | workforce development India         | Broken link, content audit     | P1 (fix) / P2 (content) |
| `/services/mental-health`                 | Transactional | student mental health counselling   | Content audit needed           | P3                      |
| `/services/khud-ki-kahani`                | Transactional | personal development students India | Content audit needed           | P3                      |
| `/services/beyond-school-life-and-skills` | Transactional | life skills training students       | No blog cluster                | P3                      |
| `/programs`                               | Transactional | career assessment programs India    | External enrollment links      | P2                      |
| `/about`                                  | Navigational  | about CueClarity                    | No Person/Org JSON-LD          | P2                      |
| `/testimonials`                           | Navigational  | CueClarity reviews                  | No Review schema               | P1                      |
| `/resources`                              | Informational | free career resources India         | No lead capture on e-books     | P2                      |
| `/blog`                                   | Informational | career guidance blog                | No H1, no service links        | P2                      |
| `/blog/[slug]` x6                         | Informational | Various                             | **NO BODY CONTENT**            | P1                      |
| _No sitemap/robots_                       | Technical     | —                                   | **Missing entirely**           | P0                      |

---

## Key Files Reference

### Pages to modify

- `src/app/page.tsx` — Add homepage-specific metadata
- `src/app/layout.tsx` — Review global metadata defaults
- `src/app/services/[...slug]/page.tsx` — Add breadcrumbs, related services
- `src/app/blog/[slug]/page.tsx` — Add inline CTAs, service links
- `src/app/testimonials/page.tsx` — Add Review JSON-LD
- `src/app/about/page.tsx` — Add Person/Organization JSON-LD
- `src/app/blog/page.tsx` — Add H1 heading

### New files to create

- `src/app/sitemap.ts` — Dynamic sitemap
- `src/app/robots.ts` — Robots configuration
- `src/components/common/Breadcrumbs.tsx` — Visual breadcrumbs
- `src/components/common/RelatedServices.tsx` — Cross-linking section
- `src/components/blog/InlineCTA.tsx` — In-article conversion component

### Data files to modify

- `src/lib/data/services.ts` — Add relatedServices, relatedPosts fields; update metadata per Step 6
- `src/lib/data/blog.ts` — Add full article bodies, relatedService field
- `src/lib/data/ourservices.js` — Fix work-force-development href
- `src/lib/schema.ts` — Add Review, Person schema generators

### Components to enhance

- `src/components/services/EditorialHero.tsx` — Breadcrumbs prop, H1 structure
- `src/components/services/FAQAccordion.tsx` — Co-located schema generation
- `src/components/services/EditorialCTA.tsx` — Cross-link props
- `src/components/common/Footer.tsx` — All 11 service links
- `src/components/blog/BlogSidebar.tsx` — Service CTA card
