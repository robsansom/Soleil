import type { TranslationSchema } from '../types';

export const en: TranslationSchema = {
  meta: {
    title: 'Soleil - UV index and sun protection for iPhone and Apple Watch',
    description: 'Soleil is a protection-first UV app: live UV where you are, a protection check tuned to your skin and SPF, sunscreen reminders that keep up with the day, and cover-up checks for the people you look after.'
  },
  a11y: {
    selectLanguage: 'Select language',
    homeLink: 'Soleil home',
    appStoreLinkLabel: 'Download Soleil on the App Store',
    appStoreBadgeAlt: 'Download on the App Store'
  },
  cta: {
    comingSoon: 'Coming soon to the App Store',
    comingSoonShort: 'Coming soon'
  },
  header: {
    features: 'Features',
    support: 'Support',
    download: 'Download'
  },
  footer: {
    taglineEyebrow: 'Protection-first UV',
    taglineHeadline: 'Know the UV.',
    taglineHeadlineDim: 'Enjoy the day.',
    copyright: 'Made with care in the UK.',
    appleAffiliation: 'Soleil is an independent app, not affiliated with Apple Inc.',
    appleTrademarks: 'Apple, the Apple logo, iPhone and Apple Watch are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc.',
    medicalDisclaimer: 'Soleil is wellness guidance, not medical advice. For sensitive skin or diagnosed conditions, please follow a dermatologist\u2019s plan.',
    product: 'Product',
    company: 'Company',
    legal: 'Legal',
    features: 'Features',
    download: 'Download',
    support: 'Support',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms'
  },
  hero: {
    eyebrow: 'Soleil',
    title: 'Know the UV.',
    titleAccent: 'Enjoy the day.',
    body: 'Live UV where you are, a protection check tuned to your skin, and sunscreen reminders that keep up with the day — on iPhone and Apple Watch.',
    badgeLabel: 'For iPhone & Apple Watch',
    imageAlt: 'A woman applying sunscreen to her face on a bright beach, the sea behind her'
  },
  showcaseNow: {
    eyebrow: 'The Sun Window',
    headline: 'The UV answer,',
    headlineAccent: 'in one look.',
    body: 'Soleil leads with the live UV index where you are — its category, today’s peak, cloud cover and how fresh the reading is. Your skin type and SPF turn that into a timely protection check: what to do now, not how long you may stay.',
    imageAlt: 'The Soleil Sun Window card: live UV 6, its category, today’s peak and a protection check with SPF.'
  },
  showcaseRealSun: {
    eyebrow: 'Real Sun',
    headline: 'See the daylight',
    headlineAccent: 'you actually had.',
    body: 'Forecasts help before you go out. Real Sun helps afterwards too. Soleil can match Apple Watch Time in Daylight against the day\u2019s UV curve, so you can see whether your exposure came during lower-risk hours or the strongest part of the day.',
    imageAlt: 'The Soleil Real Sun chart: time in daylight from Apple Watch, drawn against the day\u2019s UV curve.'
  },
  photoMoment: {
    eyebrow: 'Family',
    headline: 'Keep sunscreen',
    headlineAccent: 'organised.',
    body: 'Add the people you look after, check who is covered right now, and set reapply reminders for each person.',
    imageAlt: 'A grandmother and two teenagers laughing together under a cream parasol on a bright beach'
  },
  showcaseRoutine: {
    eyebrow: 'Sessions',
    headline: 'Track today\u2019s',
    headlineAccent: 'time outside.',
    body: 'Start a session and Soleil records elapsed time alongside the protection each person has in place. Sunscreen runs on its own clock \u2014 two hours at most, sooner after swimming, sweating or towel-drying \u2014 and reapplying never resets the time you have already spent outside.',
    imageAlt: 'The Soleil session card: elapsed time, current UV, the people outside and a sunscreen reminder.'
  },
  dayArc: {
    eyebrow: 'Real Sun',
    headline: 'A day has a shape.',
    notes: [
      'Gentle morning light.',
      'Climbing fast — UV rises towards midday.',
      'Peak sun. Protection is recommended.',
      'Softening through the afternoon.',
      'Golden hour — the sun is low and soft.'
    ],
    chips: ['08:00 — UV 2', '13:00 — UV 8 · peak', '18:00 — golden hour'],
    footnote: 'Soleil can place Apple Watch Time in Daylight against the day’s UV curve — so you can see whether your sun came in the gentle hours or at the peak.'
  },
  splitHeadlinePrivacy: {
    eyebrow: 'Privacy',
    first: 'Private,',
    second: 'by default.',
    body: 'No account. No tracking. No third-party SDKs. Your skin profile, sessions and history live on your iPhone - not on someone\u2019s server.'
  },
  bento: {
    eyebrow: 'Features',
    headline: 'Practical tools',
    headlineAccent: 'for sunny days.',
    body: 'Soleil brings the moving parts together: live UV, protection checks, sunscreen reminders, daylight history, the people you look after, and privacy-first storage on your device.',
    uvNow: {
      eyebrow: 'Live UV',
      title: 'UV for where you are',
      body: 'Real-time UV index and category, today’s peak, cloud cover and humidity from Apple WeatherKit — with the source and freshness shown beside the reading.'
    },
    sunscreen: {
      eyebrow: 'Sunscreen',
      title: 'Sunscreen, on schedule',
      body: 'Log sunscreen and Soleil schedules the next check — two hours at most, and sooner after swimming, sweating or towel-drying. Kept separate from your time outside.'
    },
    family: {
      eyebrow: 'Family',
      title: 'Simple family check-ins',
      body: 'Profiles for the people you look after, a quick cover-up glance, and separate reapply reminders for each person. Pro adds full family history and the Family status widget.'
    },
    realSun: {
      eyebrow: 'Real Sun',
      title: 'Daylight in context',
      body: 'Apple Watch daylight matched against the day\u2019s UV curve, so your time outside is easier to understand afterwards.'
    },
    glow: {
      eyebrow: 'Daily Glow',
      title: 'Your routine, recorded',
      body: 'An optional guided layer on the same live session — your products and steps, in order. For adults, and never a suggestion that tanning is safe.'
    },
    history: {
      eyebrow: 'History',
      title: 'Patterns over time',
      body: 'Review recent sessions and protection events. Pro adds full trends, insights and a calendar view.'
    },
    photoAlt: 'A woman standing in the dappled shade of a woven beach canopy, sunlight freckling her face and shoulders'
  },
  uiDemo: {
    sunWindow: {
      location: 'Santa Monica',
      conditions: 'Sunny \u00b7 H:24\u00b0 L:16\u00b0',
      label: 'UV now',
      minutes: '6',
      caption: 'High \u00b7 live reading',
      uvChip: 'WeatherKit \u00b7 Live',
      sunscreenLabel: 'Protection',
      sunscreenValue: 'Recommended',
      peakLabel: 'Peak UV',
      peakValue: '8 at 13:00',
      notifTime: 'now',
      notifTitle: 'Peak UV at 13:00',
      notifBody: 'UV is expected to reach 8 today.'
    },
    session: {
      header: 'Live session',
      remaining: '18:42',
      caption: 'elapsed',
      chipSPF: 'UV 6 · High',
      chipClothing: '2 people outside',
      reapplyTitle: 'Reapply your sunscreen',
      reapplyBody: 'Two hours since application. Sooner after water, sweat or towel-drying.'
    },
    realSun: {
      header: 'Real Sun',
      title: 'Your daylight against today\u2019s UV',
      daylight: '1h 24m in daylight',
      caption: 'Mostly gentle morning sun',
      watchChip: 'From Apple Watch'
    }
  },
  integration: {
    eyebrow: 'Woven into iOS',
    headline: 'On your phone.',
    headlineAccent: 'On your wrist.',
    body: 'Soleil puts the useful bits where you are likely to check them: today\u2019s UV on your home screen, a Live Activity while a session runs, and an Apple Watch app for UV, sunscreen status, haptics and daylight.',
    widgets: {
      eyebrow: 'Widgets & Live Activity',
      title: 'Today\u2019s UV, on your home screen',
      body: 'A widget with the live UV index and today\u2019s outlook, plus a Live Activity that keeps a running session visible on the Lock Screen and Dynamic Island.'
    },
    watch: {
      eyebrow: 'Apple Watch',
      title: 'The whole app, on your wrist',
      capabilities: [
        'Current UV',
        'UV category',
        'Smart Stack card',
        'Elapsed sun sessions',
        'Haptic reapply nudges',
        'Time in daylight'
      ]
    },
    alerts: {
      eyebrow: 'Alerts',
      title: 'Reminders before you forget',
      body: 'Burn-risk warnings and reapply reminders based on the session you started, timed to be useful and easy to silence.'
    }
  },
  privacyPage: {
    metaTitle: 'Privacy Policy - Soleil',
    metaDescription: 'How Soleil handles your data. No account. No tracking. Your skin profile, sessions and history live on your device.',
    eyebrow: 'Legal',
    headline: 'Privacy.',
    headlineDim: 'By default.',
    lastUpdated: '4 July 2026',
    intro: 'This policy explains, in plain language, what Soleil does with your information. The headline is short: it doesn\u2019t do much, on purpose.',
    promisesTitle: 'Our promises',
    promises: [
      'No account. There is nothing for you to sign up to.',
      'No analytics. We do not measure how you use the app.',
      'No advertising. We do not show ads, and we never will.',
      'No tracking. We do not track you across apps or websites.',
      'No selling data. Your sun history is yours - not a product.',
      'No third-party analytics or advertising SDKs in the app.'
    ],
    sections: [
      {
        title: 'Who we are',
        body: 'Soleil (the "App") is published by an independent developer based in the United Kingdom ("we", "us"). We are the controller of personal information you choose to send us, such as a support email. For privacy questions, contact support@getsoleil.com.'
      },
      {
        title: 'The short version',
        body: 'The App has no Soleil account or developer-operated content server. Your skin profile, sun sessions, sunscreen log, family profiles and exposure history are stored on your device using Apple\u2019s standard storage frameworks. We do not receive them. The App has no advertising, cross-app tracking or third-party analytics SDK. Information you send to support, technical website logs handled by our hosting provider, and information Apple provides to developers are described below.'
      },
      {
        title: 'What data the app handles, and where it lives',
        body: 'On your device, your Fitzpatrick skin type, SPF and clothing choices, sun sessions, family profiles and history are stored locally using Apple\u2019s SwiftData framework. Soleil does not operate a separate database containing this information or provide us with an interface for reading it. Family profiles are simple local records you create - Soleil does not contact or identify the people they describe.'
      },
      {
        title: 'Location and weather',
        body: 'To show the UV index where you are, the App asks iOS for your location and sends coordinates to Apple\u2019s WeatherKit service to retrieve local UV and weather conditions. Apple processes these requests under Apple\u2019s own privacy terms. We do not receive or store your location, and the App does not build a movement history on our systems.'
      },
      {
        title: 'Health data',
        body: 'With your permission, the App reads "Time in Daylight" from Apple HealthKit to power the Real Sun feature, and may reference other sun-related metrics you grant access to. Health data is read on your device, used for on-device calculations and display, and is never transmitted to us or to any third party. You can withdraw HealthKit access at any time in iOS Settings, and the feature degrades gracefully.'
      },
      {
        title: 'Optional AI skin tone scan',
        body: 'The optional skin tone scan can run fully on-device. If you choose the AI-assisted option, your photo is sent over an encrypted connection through a secure proxy to a model provider solely to estimate a Fitzpatrick skin type, and the result is returned to your device. Photos are not used to identify you, are not used for training, and are not retained by us. You can always set your skin type manually instead.'
      },
      {
        title: 'Information available through Apple',
        body: 'Apple may provide developers with aggregated App Store sales, download and usage reports. If you have enabled sharing with app developers in iOS, Apple may also provide diagnostic and crash information. Apple controls the information it collects through the App Store, StoreKit, WeatherKit, HealthKit and device analytics under Apple\u2019s own privacy terms. We do not use this information to build advertising profiles or track you across apps or websites.'
      },
      {
        title: 'Purchases and subscriptions',
        body: 'Soleil Pro is sold through Apple\u2019s App Store using StoreKit. Apple processes payments and makes purchase and entitlement information available to the App so it can unlock paid features. We do not receive your full payment-card details. Apple handles billing, refunds and taxes under the Apple Media Services Terms.'
      },
      {
        title: 'Website and support',
        body: 'This website is hosted by GitHub Pages. GitHub may process IP addresses, request details and security logs when the site is visited. The site loads a font from Google Fonts, so Google may receive ordinary network information when your browser requests that font. The website does not use advertising cookies or analytics. If you email support, our email provider processes your address, message and attachments so we can read and answer it.'
      },
      {
        title: 'Why we use support information and how long we keep it',
        body: 'We use support correspondence to answer your request, diagnose problems, prevent abuse and keep an appropriate record of the assistance provided. Our lawful basis under UK GDPR is our legitimate interest in supporting and improving the App and, where relevant, taking steps connected with our contract with you. We keep support messages only for as long as reasonably needed for those purposes, normally no longer than 24 months after the conversation closes unless a longer period is required for a legal, security or accounting reason.'
      },
      {
        title: 'Service providers and international transfers',
        body: 'Apple, GitHub, Google and our email provider process information under their own terms and may process it outside the United Kingdom. Where UK data-protection law applies to a transfer we make, we rely on an applicable adequacy decision or appropriate contractual safeguards. We do not permit these providers to use support correspondence for our advertising.'
      },
      {
        title: 'Security',
        body: 'We use platform security features and take reasonable organisational measures appropriate to the limited information we handle. Device security is provided primarily by Apple. No storage or transmission method is completely secure, so we cannot promise absolute security.'
      },
      {
        title: 'Children',
        body: 'Soleil is intended for a general audience and is not directed specifically at children. Family profiles for children are created and controlled by the adult who owns the device, and stay on that device. We do not ask users to create an account or provide an age. If a child emails support, we use the message only to respond and manage the request. A parent or guardian can contact us about that correspondence.'
      },
      {
        title: 'Your rights',
        body: 'Depending on where you live, you may have rights over personal information we control, including rights to access, correct, erase, restrict or object to its use, and to complain to a regulator. These rights are subject to legal limits. Contact support@getsoleil.com to make a request. UK residents may complain to the Information Commissioner\u2019s Office at ico.org.uk. Content stored only on your device should be managed through the App or your device because we do not hold a copy.'
      },
      {
        title: 'Changes to this policy',
        body: 'We may update this policy when the App, website, providers or legal requirements change. We will update the date above and provide additional notice where a change materially affects how we use personal information.'
      },
      {
        title: 'Contact',
        body: 'Questions or requests about privacy can be sent to support@getsoleil.com. A postal address for formal correspondence is available on request.'
      }
    ]
  },
  supportPage: {
    metaTitle: 'Support - Soleil',
    metaDescription: 'Help and answers for Soleil. Love the sun. Not the burn.',
    eyebrow: 'Support',
    headline: 'We\u2019re here',
    headlineDim: 'to help.',
    intro: 'Most of what you need to know is below. If you can\u2019t find an answer, email us and a real person will get back to you.',
    contactTitle: 'Contact',
    contactButton: 'Send a message',
    faqTitle: 'Frequently asked',
    faqs: [
      {
        q: 'What does Soleil tell me about today\u2019s UV?',
        a: 'Soleil shows the live UV index for your location, its category, today\u2019s peak and the hourly curve using Apple WeatherKit. Your Fitzpatrick skin type and SPF turn that into a timely protection check. It deliberately does not present a countdown as a safe amount of time outside - shade, water, altitude and reflection all matter too.'
      },
      {
        q: 'How do I set my skin type?',
        a: 'During onboarding you can answer a few questions, use the camera scan, or pick your Fitzpatrick type directly. The optional AI-assisted scan sends one photo through a secure proxy purely to estimate skin tone - or you can keep everything on-device. You can change your skin type any time in the You tab.'
      },
      {
        q: 'How do family profiles and check-ins work?',
        a: 'Add the people you look after in the You tab, then choose who is outside when you start a session. A check-in asks who\u2019s covered right now, and Soleil schedules reapply reminders for each person. Everything stays on your device - nothing is shared or uploaded. Pro adds full family history and the Family status widget.'
      },
      {
        q: 'What do I need for the Apple Watch features?',
        a: 'The free Watch app works on watchOS with a paired iPhone, showing UV, sunscreen state and daylight, with haptic reapply nudges and complications. The Real Sun daylight story uses Apple\u2019s Time in Daylight, which needs an Apple Watch SE (2nd gen), Series 6 or later, or any Ultra.'
      },
      {
        q: 'Does reapplying sunscreen reset my sun exposure?',
        a: 'No - and that\u2019s deliberate. Reapplying renews your protection going forward, but the UV your skin has already received today stays counted. Soleil tracks both separately, so your daily total is always honest.'
      },
      {
        q: 'What\u2019s in Soleil Pro, and what does it cost?',
        a: 'Free covers today: live UV, a basic Sun Window, a basic session, your skin profile and recent history. Pro adds Daily Glow setup, full family history and the Family status widget, full trends and insights, the AI skin scan, and the wider widget suite. It\u2019s $3.99/week, $19.99/year, or $69.99 once for lifetime.'
      },
      {
        q: 'How do I cancel a Pro subscription?',
        a: 'Subscriptions are managed by Apple. Open iOS Settings, tap your name, then Subscriptions, find Soleil and tap Cancel. You\u2019ll keep Pro access until the end of the current billing period.'
      },
      {
        q: 'Can I get a refund?',
        a: 'Refunds for App Store purchases are handled by Apple. Visit reportaproblem.apple.com, sign in, find the Soleil purchase and request a refund.'
      },
      {
        q: 'Is Soleil medical advice?',
        a: 'No. Soleil is wellness guidance built on published UV science, and it errs on the side of caution - but it can\u2019t see your skin. If you have sensitive skin, a history of skin cancer, or a diagnosed condition, please follow your dermatologist\u2019s plan first.'
      },
      {
        q: 'I\u2019ve found a bug. What do I do?',
        a: 'Email support@getsoleil.com with a short description of what you were doing, what you expected and what actually happened. A screenshot helps a lot.'
      }
    ]
  },
  termsPage: {
    metaTitle: 'Terms of Use - Soleil',
    metaDescription: 'The plain-English terms that apply when you download or use the Soleil iOS app.',
    eyebrow: 'Legal',
    headline: 'Terms',
    headlineDim: 'of Use.',
    lastUpdated: '4 July 2026',
    intro: 'These terms apply when you download or use the Soleil iOS app ("Soleil", "we", "us"). By using Soleil you agree to them, together with Apple\u2019s Standard EULA. They are written in plain English on purpose.',
    tldrTitle: 'In short',
    tldr: [
      'Soleil is licensed to you for personal use on your Apple devices.',
      'Free and paid features, prices and availability are shown in the App before purchase.',
      'Apple takes payment, handles refunds and manages your subscription.',
      'Soleil is wellness guidance, not medical advice - sun decisions remain yours.',
      'These terms are governed by the laws of England & Wales.'
    ],
    sections: [
      {
        title: '1. About these terms',
        body: 'These terms apply when you download or use the Soleil iOS and watchOS app ("Soleil", the "App"). The App is published by an independent UK-based developer ("we", "us"). By using Soleil, you agree to these terms together with Apple\u2019s Licensed Application End User Licence Agreement (the "Apple EULA"). They are written in plain English on purpose.'
      },
      {
        title: '2. The licence',
        body: 'Soleil is licensed (not sold) to you for personal, non-commercial use on any Apple device you own or control, on the terms of the Apple EULA. Where these terms add to the Apple EULA - for example on our intellectual property, refunds, or the law that governs disputes between us - these terms apply alongside it.',
        link: {
          label: 'Read the Apple Standard EULA',
          href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'
        }
      },
      {
        title: '3. Not medical advice',
        body: 'Soleil provides general wellness guidance about sun exposure based on published UV science, weather data and the information you enter. It is not a medical device, does not diagnose, treat or prevent any condition, and cannot account for every individual factor. Estimates such as UV readings, protection checks and time in daylight are approximations. Always use your own judgement, and follow the advice of a qualified clinician - especially if you have sensitive skin, a history of skin cancer, photosensitivity, or take medication that affects sun tolerance. You remain responsible for your own and your family\u2019s sun decisions.'
      },
      {
        title: '4. Free and Pro',
        body: 'Soleil may offer free and paid features. The current limits and features are shown in the App and App Store listing. Paid features may include guided sessions, the Real Sun daylight story and extended history. Features can vary by device, operating-system version and territory; some features require an Apple Watch and/or permissions such as location or HealthKit access.'
      },
      {
        title: '5. Subscriptions and one-time purchase',
        body: 'Pro may be offered as an auto-renewing subscription and/or a one-time purchase. The price, billing period, included features and any trial are displayed by Apple before you confirm a purchase and may vary by country or currency. Subscriptions renew automatically unless cancelled through your Apple account at least 24 hours before the end of the current period. Apple charges your account and manages cancellation. A one-time purchase does not recur and applies to the version and features described at the time of purchase; it is not a promise that the App or every online service will remain available forever.'
      },
      {
        title: '6. Refunds',
        body: 'All purchases of Soleil are processed by Apple under the Apple Media Services Terms. Apple, not us, handles refunds. You can request a refund via reportaproblem.apple.com or your Apple ID purchase history. We have no power to issue refunds directly and we do not store your payment details.',
        link: {
          label: 'Request an Apple refund',
          href: 'https://reportaproblem.apple.com'
        }
      },
      {
        title: '7. Price changes',
        body: 'Prices may change. Apple will provide any notice or consent process required for subscription price changes. A new price does not affect a completed one-time purchase. You may cancel a subscription before a change takes effect, subject to Apple\u2019s applicable terms.',
        link: {
          label: 'Apple Media Services Terms',
          href: 'https://www.apple.com/legal/internet-services/itunes/'
        }
      },
      {
        title: '8. Your data is yours',
        body: 'Your skin profile, sun sessions, sunscreen log, family profiles and history belong to you and are stored on your device. We claim no licence over them and we never access them. You are responsible for the accuracy of the information you enter - the App\u2019s guidance is only as good as the skin type, SPF and clothing details you give it.'
      },
      {
        title: '9. Third-party services',
        body: 'The App relies on Apple services including WeatherKit (UV and weather data), HealthKit (Time in Daylight, with your permission), StoreKit and notifications. Availability and accuracy of those services depend on Apple, your device, your settings and your network connection. Weather and UV data are estimates provided by third parties and may occasionally be unavailable or inaccurate; the App\u2019s guidance should be treated accordingly.'
      },
      {
        title: '10. Acceptable use',
        body: 'Please don\u2019t (a) reverse engineer, decompile or modify Soleil except where the law or Apple EULA expressly permits it; (b) bypass purchase or entitlement checks; or (c) interfere with the App or another person\u2019s use of it. Where technically and legally possible, we may restrict access to affected features for a serious breach.'
      },
      {
        title: '11. Our intellectual property',
        body: 'The Soleil name, design, icons, source code and brand are owned by us or used under licence. The licence in section 2 does not transfer those rights to you. You may mention the App or link to getsoleilapp.com in reviews, articles or social posts, but must not imply our endorsement or sponsorship without permission.'
      },
      {
        title: '12. Apple\u2019s role (Apple-Enabled Software)',
        body: 'Soleil is distributed through Apple\u2019s App Store, which adds the following terms required by Apple:',
        bullets: [
          'These terms are entered into between you and us, not Apple. Apple is not a party to them and has no responsibility for the App or its content.',
          'We (not Apple) are solely responsible for the App, its content and any maintenance or support. Apple has no obligation to provide any maintenance or support in relation to the App.',
          'In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price of the App to you (if any). To the maximum extent permitted by law, Apple has no other warranty obligation whatsoever in relation to the App.',
          'We (not Apple) are responsible for addressing any claims relating to the App or your possession or use of it, including product-liability claims, claims that the App fails to conform to any applicable legal or regulatory requirement, and claims arising under consumer-protection or privacy law.',
          'We (not Apple) are responsible for the investigation, defence, settlement and discharge of any third-party intellectual-property infringement claims relating to the App.',
          'You represent and warrant that (a) you are not located in a country subject to a US Government embargo, or that has been designated by the US Government as a "terrorist supporting" country, and (b) you are not listed on any US Government list of prohibited or restricted parties.',
          'Apple and Apple\u2019s subsidiaries are third-party beneficiaries of these terms and, upon your acceptance, will have the right (and will be deemed to have accepted the right) to enforce them against you as a third-party beneficiary.'
        ]
      },
      {
        title: '13. Disclaimers',
        body: 'Soleil is provided "as is" and "as available". To the maximum extent permitted by law, we disclaim all warranties, conditions and representations not expressly stated here, including any warranty that the App will be uninterrupted or error-free, or that UV, weather or daylight estimates will be accurate. Nothing in these terms removes or limits any non-excludable rights you have under the UK Consumer Rights Act 2015 or similar consumer-protection laws.'
      },
      {
        title: '14. Limitation of liability',
        body: 'We are responsible for loss or damage that is a foreseeable result of our breach of these terms or failure to use reasonable care and skill. We are not responsible for loss that was not foreseeable, for business losses suffered by a consumer, for sunburn or health outcomes resulting from reliance on estimates contrary to section 3, or for failures caused by Apple, a network provider or a third-party service outside our reasonable control. Nothing in these terms excludes or limits liability where doing so would be unlawful, including liability for death or personal injury caused by negligence, fraud, or your statutory consumer rights.'
      },
      {
        title: '15. Termination',
        body: 'These terms apply while you use the App. You can stop using it at any time by deleting it and managing any subscription through Apple. We may stop providing or updating the App, but this does not remove rights you already have under consumer law.'
      },
      {
        title: '16. Changes',
        body: 'We may update these terms for legal, security or product reasons. We will update the date above and give reasonable notice of material changes where practicable. Changes will not retrospectively remove rights relating to a purchase already made. If you do not accept a material change, you may stop using the App and cancel any subscription through Apple.'
      },
      {
        title: '17. Governing law and jurisdiction',
        body: 'These terms are governed by the laws of England and Wales. If you are a consumer resident elsewhere, you also retain any mandatory protections provided by the law of your home country. You may bring proceedings in the courts available to you under applicable consumer law.'
      },
      {
        title: '18. Contact',
        body: 'Questions about these terms? Email support@getsoleil.com. A UK postal address is available on request for formal correspondence.'
      }
    ]
  }
};
