# Premium SaaS Redesign Plan

## What We Did (About Page — COMPLETED)

### Design Principles Applied

- Clean, modern, minimal (Stripe/Notion/Linear inspired)
- **Eyebrow text**: `text-base font-bold tracking-widest uppercase text-yellow-500` (dark sections: `text-yellow-400`) — NOT `text-sm font-semibold`
- **Hero h1 headings**: `font-oswald font-black tracking-tight leading-[0.92] uppercase` — tight Oswald uppercase with `bg-[var(--primary-white)]` background to blend into the navbar
- **Section h2 headings**: `heading-font` CSS class (defined in `globals.css` — sets Oswald, weight 800, line-height 0.92, letter-spacing, uppercase) + size classes + color. Light bg: `text-[var(--primary-blue)]`, dark bg: `text-white`
  - Full pattern: `className="mt-5 text-4xl sm:text-5xl lg:text-6xl heading-font text-[var(--primary-blue)]"`
- **Hero h1 headings**: `.hero-heading` CSS class (same as above but also sets clamp font-size and color `var(--primary-blue)`) — OR equivalent inline style `style={{ fontFamily: "var(--font-oswald)", fontWeight: 800, fontSize: "clamp(2.75rem,8vw,4.5rem)", lineHeight: 0.92, letterSpacing: "var(--tracking-tight)", color: "var(--primary-blue)", textTransform: "uppercase" }}`
- **Gradient accent spans** inside headings: `text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-yellow)] to-orange-400` (dark sections: `from-yellow-400 to-orange-400`)
- **Oswald Tailwind utility**: `font-oswald` Tailwind class still available, but section headings must use `.heading-font` CSS class instead for consistency
- **Hero section backgrounds**: Use `bg-[var(--primary-white)]` (NOT `bg-white`) so hero blends seamlessly with navbar
- Subtle background glows: `bg-yellow-200/20 blur-[120px]`, `bg-blue-200/15 blur-[120px]`
- Glassmorphism-lite cards: `bg-white/70 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)]`
- Hover effects: glow overlays (`opacity-0 group-hover:opacity-100`), `scale-110`, shadow transitions
- `max-w-6xl` containers, `py-24` / `py-28` generous spacing
- Storytelling layouts — timelines, left/right asymmetry, avoid flat card grids

### Key Style Shift

- **FROM**: CSS variables (`--primary-blue`, `--font-oswald`, `--muted-text`, etc.) + `style={{}}` props
- **TO**: Pure Tailwind classes (`text-blue-950`, `bg-yellow-100`, `text-gray-500`, etc.)
- Removed all `var(--*)` references, `section-container`, `section-padding`, `type-label`, `type-lead` utility classes
- Removed `<style jsx>` blocks (ContactSection had field-input styles)

### Color Mapping

| CSS Variable                 | Tailwind Equivalent                |
| ---------------------------- | ---------------------------------- |
| `--primary-blue` (#29326e)   | `text-blue-950`, `bg-blue-950`     |
| `--primary-yellow` (#ffc114) | `text-yellow-500`, `bg-yellow-400` |
| `--primary-black`            | `text-blue-950` (dark text)        |
| `--primary-white`            | `bg-white`                         |
| `--muted-text`               | `text-gray-500`, `text-gray-400`   |
| `--secondary-white`          | `bg-gray-50/80`, `border-gray-100` |
| `--surface-card`             | `bg-white/70 backdrop-blur-xl`     |
| `--accent-blue`              | `text-blue-900`                    |

### Component Pattern (per section)

```tsx
<section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-white">
  {/* Background glows */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-100px] right-[-60px] w-[500px] h-[500px] bg-yellow-200/15 blur-[120px] rounded-full" />
  </div>
  <div className="relative max-w-6xl mx-auto z-10">
    {/* Header: eyebrow + gradient headline */}
    <FadeInView className="mb-20">
      <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">
        Eyebrow
      </span>
      <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-blue-950 leading-[1.1]">
        Headline{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400">
          Accent
        </span>
      </h2>
    </FadeInView>
    {/* Content */}
  </div>
</section>
```

### Glassmorphic Card Pattern

```tsx
<div className="group relative rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
  {/* Hover glow overlay */}
  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-100/40 to-transparent pointer-events-none" />
  <div className="relative">{/* Card content */}</div>
</div>
```

### Dark Section Pattern (blue-950 bg)

```tsx
<section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-blue-950">
  {/* Glows: bg-yellow-400/5 and bg-blue-400/10 */}
  {/* Cards: border-white/[0.06] bg-white/[0.03] backdrop-blur-xl */}
  {/* Text: text-white, text-gray-400 */}
  {/* Accents: text-yellow-400, bg-yellow-400/10 */}
  {/* Gradient text: from-yellow-400 to-orange-400 */}
</section>
```

### Icon Container Pattern

```tsx
<div className="w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
  <FiIcon size={20} />
</div>
```

## Components Redesigned (About Page)

- [x] HeroAbout — gradient headline, cleaner stats, bg glows
- [x] OurStory — timeline layout with center line + glassmorphic cards (user redesigned)
- [x] FounderSection — bg-gray-50/80, native typography
- [x] ExpertiseValues — timeline left + sticky glassmorphic values panel right
- [x] DecisionEcosystem — dark section with frosted cards + hover glow
- [x] PromiseSection — two glassmorphic story cards side by side
- [x] MissionVision — glassmorphic cards with bottom gradient accent bars
- [x] WhoWeServe — dark section with gradient stat numbers
- [x] BuildLives — gradient tagline, blockquote, subtle glows
- [x] ContactSection — glassmorphic form card, pure Tailwind inputs

## Pages Still Needing Redesign

### Home Page (`src/app/page.tsx`) — ✅ COMPLETED

- [x] HeroSection — `heading-font text-white + style fontSize clamp`, yellow CTA, glassmorphic stats bar
- [x] WhoWeHelp — `heading-font text-[var(--primary-blue)]`, gradient accent, glassmorphic cards with dynamic borderLeft
- [x] ProblemSolution — `bg-blue-950`, dark card pattern, FadeInView wrappers
- [x] OurCounsellingProcess — `bg-gray-50/80`, glassmorphic step cards, watermark numbers
- [x] OurServices — `bg-blue-950`, yellow-400 glows, inline Tailwind featured & standard cards
- [x] PartnersCarousel — `max-w-6xl`, partners as Oswald text, `border-blue-950/5`
- [x] Testimonial — heading-font h2, yellow-400/500 accents, `border-blue-950/30`
- [x] RFQ — `bg-blue-950`, `heading-font text-white text-5xl sm:text-6xl lg:text-7xl`, inline WhatsApp CTA
- [x] FAQ — `py-24 bg-[var(--primary-white)]`, `heading-font`, inline accordion with `border-blue-950`/`border-gray-200`
- [x] AssessmentBanner — `bg-[var(--primary-white)]/95 backdrop-blur-xl`, `sm:rounded-full`, inline yellow CTA

NOTE: All duplicate export blocks removed from FAQ.tsx, OurCounsellingProcess.tsx, HeroSection.tsx (where prior session prepended new code without replacing old).

### Blog Page (`src/app/blog/page.tsx`) — ✅ COMPLETED

- [x] FeaturedHero — `heading-font text-white`, `bg-yellow-400 text-blue-950` badge, `bg-gradient-to-t from-blue-950`
- [x] PostGrid — glassmorphic cards `bg-white/70 backdrop-blur-xl`, `heading-font text-blue-950`, yellow category labels
- [x] BlogSidebar — `bg-gray-50/80` categories, `bg-blue-950` newsletter CTA, `bg-gray-50` tags
- [x] blog/page.tsx — `py-24 bg-[var(--primary-white)]`, `max-w-6xl mx-auto`
- [x] blog/[slug] detail — ArticleContent, AuthorCard, FloatingShare, RelatedPosts, page.tsx sidebar all redesigned

### Programs Page (`src/app/programs/page.tsx`)

- HeroPrograms
- FeaturedPrograms
- WhyChooseUs
- WebinarShowcase
- (reuses: WrittenStories, PartnersCarousel, FAQ, RFQ)

### Resources Page (`src/app/resources/page.tsx`) — ✅ COMPLETED

- [x] HeroResources — `hero-heading`, 3 pillar cards (removed E-books), glassmorphic cards, `bg-blue-200/10` glows
- [x] LatestInsights — `heading-font text-[var(--primary-blue)]`, featured card `from-blue-950`, glassmorphic InsightCards
- [x] VideoInsights — `bg-blue-950`, `heading-font text-white`, `bg-yellow-400 text-blue-950` badges/play, `bg-white/[0.04]` footer
- [x] GallerySection — `bg-blue-950`, `heading-font text-white`, `rounded-2xl`, Tailwind caption classes
- [x] EbooksSection — REMOVED (import, component, data, JSON-LD schemas all removed)

### Testimonials Page (`src/app/testimonials/page.tsx`)

- HeroSuccessStories
- VideoStories
- WrittenStories (testimonials version)

### Common Shared Components

- Navbar (used everywhere)
- Footer (used everywhere)
- NewsLetterForm
- Logo
- WrittenStories (common version, used in programs)

### Service Pages (already have their own editorial design system)

- Different design: Newsreader + Manrope fonts, Material Design tokens
- SectionRenderer-based — separate from this redesign
- May keep as-is OR unify later

## Redesign Priority Order

1. Home page (most visible, most components)
2. Programs page (shares components with home)
3. Testimonials page (3 components)
4. Resources page (5 components)
5. Blog page (3 page components + slug detail)
6. Navbar + Footer (global, affects all pages)
