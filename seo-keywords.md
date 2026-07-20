# Soleil — SEO Keyword Research & Page Map

Compiled 2026-07-18. Sources: Sunkind GTM research doc (ASO/ASA data: ~65–70% of
App Store downloads come from search; category rated "Low Competition"), App
Store keyword field, live SERP sampling (Jul 2026).

## Strategy

Two intent buckets convert to downloads:

1. **App-intent keywords** ("uv index app", "sun tracker app") — small volume,
   very high conversion. Target with the landing page itself.
2. **Question keywords** ("how long can I stay in the sun", "what UV index is
   safe") — big volume, answerable in a guide that naturally demos the app.
   These searchers have the exact anxiety Soleil resolves; the guide answers
   first, then shows how Soleil automates the answer. Target with /guides/*.

SERP observations (Jul 2026): question queries are dominated by dermatology
clinic blogs, calculators (omnicalculator, whiz.tools) and rival app blogs
(SunSeek, SunUp, ScanSkinAI) — thin, winnable content. Competitor apps already
rank blogs for these terms, confirming the guide play works in this niche.

## Primary keywords (landing page)

| Keyword | Intent | Where used |
| --- | --- | --- |
| uv index app | download | title tag, H1 area, hero copy |
| sun tracker app / uv tracker app | download | title tag, hero, alt text |
| sun safety app | download | hero/meta |
| sunscreen reminder app | download | features section |
| tanning app / tan tracker | download (secondary; keep tone) | how-it-works, guide |
| vitamin d tracker app | download | features, guide |
| uv index apple watch | download | Watch section |
| family sun safety app | download (uncontested niche) | family section |
| sunburn timer / time to burn calculator | download | guide + how-it-works |

Title tag (~58 chars): `Soleil — UV Index & Sun Tracker App for iPhone & Watch`
Meta description (~155 chars): live UV, protection-check reminders, family
profiles, Apple Watch, private on-device. Free download framing.

## Long-tail keywords → guide pages (one page each)

| # | Guide slug | Target query cluster (head + variants) |
| --- | --- | --- |
| 1 | how-long-can-you-stay-in-the-sun | how long can you stay in the sun without burning; time to burn by skin type; sun exposure calculator |
| 2 | what-uv-index-is-safe | what uv index is safe; uv index scale explained; what uv index requires sunscreen; is uv 3 high |
| 3 | best-uv-index-for-tanning | best uv index for tanning; can you tan at uv 2/3; what uv do you need to tan |
| 4 | how-often-reapply-sunscreen | how often to reapply sunscreen; does spf 50 last all day; reapply sunscreen after swimming |
| 5 | how-much-sun-for-vitamin-d | how much sun do you need for vitamin d; vitamin d from sun by skin type; vitamin d winter sun |
| 6 | can-you-tan-through-clouds | can you tan through clouds; can you burn on a cloudy day; uv index cloudy day |
| 7 | fitzpatrick-skin-type | what is my skin type; fitzpatrick skin type test; skin type 1-6 chart |
| 8 | uv-index-for-kids | what uv index is safe for kids; sun safety for children; when do kids need sunscreen |
| 9 | what-does-spf-mean | what does spf mean; spf 30 vs 50; how does spf work |
| 10 | apple-watch-time-in-daylight | apple watch time in daylight; how does apple watch track daylight; time in daylight explained |

Guide format (per page):
- H1 phrased as the searched question.
- Direct, honest answer in the first paragraph (featured-snippet bait).
- Structured explainer (tables/lists where the data suits: UV scale, skin
  types, reapply rules).
- "How Soleil helps" section integrating app usage with a screenshot + CTA.
- FAQ sub-block (3–4 related PAA questions) with FAQPage JSON-LD.
- Article JSON-LD + breadcrumbs; internal links to sibling guides.

## Landing page FAQ → guide mapping ("Learn more" links)

Each FAQ answer is concise (SEO snippet-ready) and links to its guide:

1. How long can I stay in the sun without burning? → guide 1
2. What UV index is safe? → guide 2
3. What's the best UV index for tanning? → guide 3
4. How often should I reapply sunscreen? → guide 4
5. How much sun do I need for vitamin D? → guide 5
6. Can I tan or burn through clouds? → guide 6
7. What's my Fitzpatrick skin type? → guide 7
8. What UV index is safe for kids? → guide 8
9. What does SPF actually mean? → guide 9
10. What is Apple Watch Time in Daylight? → guide 10
Plus product FAQs (price, privacy, Watch requirements, cancel/refund) without
guide links.

## Compliance guardrails (binding, from english-copy-tone.md)

- Never promise "safe time" or guaranteed burn prevention; frame numbers as
  estimates and timers as protection checks.
- Tanning guides must carry the honest dermatology position (no tan is
  risk-free) — this is also the trust-lane differentiator vs tan-bait apps.
- Medical disclaimer on every guide.

## Technical SEO checklist

- Static Astro output; one H1/page; semantic sections.
- Canonical URLs on https://getsoleilapp.com, sitemap.xml, robots.txt.
- JSON-LD: SoftwareApplication (landing), FAQPage (landing + guides),
  Article + BreadcrumbList (guides).
- OG/Twitter cards using `public/images/social-card.png` (guides reuse).
- Descriptive alt text with keywords where honest.
- Internal linking: landing ↔ guides both ways; guides cross-link.
