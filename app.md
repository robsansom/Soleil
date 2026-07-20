# Soleil — App Reference (app.md)

Rewritten 2026-07-18 against the **live app**, not legacy docs. Sources, in
priority order: `docs/Sunkind-Golden-Thread-Implementation-Brief.md`
(2026-07-10, current product spine), `Sunkind/Configuration.storekit`,
`SunkindTests/SunkindTests.swift`, and the Jul-17 Figma screen export.

> ⚠️ Older docs (`Sunkind-Product-Definition.md`, `Sunkind-AppStore-Readiness.md`,
> the shipped fastlane description) are **historical**. They still describe
> time-until-burn and vitamin D, which the product has deliberately abandoned.
> Do not write site copy from them.

## Positioning (current source of truth)

> Soleil is a protection-first UV companion. It helps you understand today's UV,
> make a timely protection check, track time outside, and build better habits.

Not a weather dashboard, not a medical UV calculator, not a tanning accelerator.

## The three rules that govern all copy

1. **Live UV and its category are the hero fact.** Never lead with a duration.
2. **Never present time as permission.** Elapsed time is supporting context only.
   No "time until burn", no "safe window", no countdown framing.
3. **Do not estimate vitamin D.** The app deliberately does not derive vitamin D
   minutes or IU from sunlight — there is a unit test enforcing it
   (`guidanceDoesNotEstimateVitaminDFromSunlight`, asserts IU == 0). Any site or
   guide copy claiming vitamin D tracking is factually wrong.

## Structure

Tabs: **Today** (the answer) · **Your Sun** (the action) · **You** (the record).

- **Today** — live UV + category as hero; compact protection check, SPF control,
  peak UV; source/freshness near the data; family glance if family exists;
  history/Pro hooks lower. Live surface: `Home.swift`.
- **Your Sun** — one front door to start a session. Resume card if running,
  plain framing for today, optional Daily Glow layer, next lower-UV period
  (described factually, never "safe"), one primary start action.
  Live surface: `Tanning.swift`.
- **You** — skin/person summary, people/family, history and trends, progress
  photos, settings. Live surface: `Profile.swift`.

**Sun Window** remains the ownable concept in body copy, but is not a tab name.

## Feature facts

- Live UV index, category, peak UV, cloud cover, humidity, hourly curve
  (Apple WeatherKit, with freshness/source shown).
- Protection check: personal, bounded, deliberately smaller than live UV.
- Sessions: one household outing, any selected participants; the account holder
  need not be one of them. Elapsed time only as context.
- Sunscreen maintenance is **separate from exposure**: two-hour maximum
  reminder; swimming / sweating / towel-drying makes it due sooner;
  **reapplication never resets elapsed time**.
- A live outing must prove monitoring is active: show which alerts are armed,
  surface notification denial, schedule a heads-up when UV is forecast to reach
  3, keep a follow-up alert armed after water until reapplication is recorded.
- **Daily Glow** — optional guided layer on the same live session. Adult-only.
  Must never imply tanning is safe or medically beneficial.
- **Real Sun** — still shipping (`Sunkind/RealSun.swift`). Reads Apple's Time in
  Daylight and places it against the day's UV. Apple Health is optional and
  **read-only** — the app never writes health samples.
- Apple Watch app, widgets, Live Activity / Dynamic Island.
- Fitzpatrick skin type: manual always; AI scan is the Pro/confidence path.

## Free vs Pro (per Golden Thread — supersedes older gating)

> Free handles today's outing. Pro remembers the family over time.

**Free:** the sun answer · basic Sun Window · basic session · manual skin
profile · basic profile · limited recent history.

**Pro:** Daily Glow setup editing · full family history, trends and the Family
status widget · full history, trends and insights · AI skin scan / stronger
skin-profile confidence · widgets and ongoing guidance surfaces · progress
photos.

Paywall sentence: *"Free tells you what to do now. Pro helps Soleil adapt around
your people, Daily Glow setup, and history."*

## Pricing (live StoreKit config — no monthly tier)

| Plan | Price | Product ID |
| --- | --- | --- |
| Weekly | **$3.99** | `com.sansom.sunkind.pro.weekly` |
| Yearly | **$19.99** | `com.sansom.sunkind.pro.yearly` |
| Lifetime | **$69.99** | `com.sansom.sunkind.pro.lifetime` |

Weekly is the short-stay/holiday entry point and may be the default selection;
yearly serves the ongoing habit; lifetime is the one-time alternative. Price
presentation must stay neutral, clear and cancellable through Apple.

> The old "$3.99/month" figure on the site is wrong — that price is now weekly.

## Naming

Public/App Store name: **Soleil** (StoreKit reference names say "Soleil Pro").
`Sunkind` is the internal project/bundle name (`Sansom.Sunkind`). Domain:
getsoleilapp.com. Support: support@getsoleil.com.

## Imagery (current)

- `Sunkind/Assets.xcassets/PaywallHero.imageset/PaywallHero.png` — woman
  applying sunscreen, blue sea. Used as-is on the paywall. **Site hero.**
- `Sunkind/Assets.xcassets/OnboardingShadeHero.imageset/OnboardingShadeHero.png`
  — woman under a woven canopy in dappled shade. Onboarding screen 1, colour-
  enhanced. **Site bento tile.**
- Both are 1254×1254. `brand/imagery/set/*` is **out of date** — do not use.
- App icon: `Assets.xcassets/AppIcon.appiconset/AppIcon-Light.png` — golden sun
  on blue sky. Site favicons regenerated from this.

## Copy tone (unchanged, still binding)

Plain-spoken, precise, reassuring. Specific before emotional. First sentence
says what the app does. Prefer "estimate", "guidance", "shows", "reminds".
Avoid personifying the app, vague poetry, and anything implying medical
certainty or guaranteed burn prevention. Always: wellness guidance, not medical
advice.
