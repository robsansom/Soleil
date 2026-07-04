export interface TranslationSchema {
  meta: {
    title: string;
    description: string;
  };
  a11y: {
    selectLanguage: string;
    homeLink: string;
    appStoreLinkLabel: string;
    appStoreBadgeAlt: string;
  };
  cta: {
    /** Full badge replacement shown until the App Store URL is live. */
    comingSoon: string;
    /** Compact form for the header pill and footer link. */
    comingSoonShort: string;
  };
  header: {
    features: string;
    support: string;
    download: string;
  };
  footer: {
    taglineEyebrow: string;
    taglineHeadline: string;
    taglineHeadlineDim: string;
    copyright: string;
    appleAffiliation: string;
    appleTrademarks: string;
    medicalDisclaimer: string;
    product: string;
    company: string;
    legal: string;
    features: string;
    download: string;
    support: string;
    contact: string;
    privacy: string;
    terms: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    body: string;
    badgeLabel: string;
    imageAlt: string;
  };
  showcaseNow: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    body: string;
    imageAlt: string;
  };
  showcaseRealSun: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    body: string;
    imageAlt: string;
  };
  photoMoment: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    body: string;
    imageAlt: string;
  };
  showcaseRoutine: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    body: string;
    imageAlt: string;
  };
  splitHeadlinePrivacy: {
    eyebrow: string;
    first: string;
    second: string;
    body: string;
  };
  bento: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    body: string;
    uvNow: { eyebrow: string; title: string; body: string };
    sunscreen: { eyebrow: string; title: string; body: string };
    family: { eyebrow: string; title: string; body: string };
    realSun: { eyebrow: string; title: string; body: string };
    glow: { eyebrow: string; title: string; body: string };
    history: { eyebrow: string; title: string; body: string };
  };
  integration: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    body: string;
    widgets: {
      eyebrow: string;
      title: string;
      body: string;
    };
    watch: {
      eyebrow: string;
      title: string;
      /** Short capability pills rendered under the Watch tile. */
      capabilities: string[];
    };
    alerts: {
      eyebrow: string;
      title: string;
      body: string;
    };
  };
  privacyPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    headline: string;
    headlineDim: string;
    lastUpdated: string;
    intro: string;
    promisesTitle: string;
    promises: string[];
    sections: {
      title: string;
      body: string;
    }[];
  };
  supportPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    headline: string;
    headlineDim: string;
    intro: string;
    contactTitle: string;
    contactButton: string;
    faqTitle: string;
    faqs: {
      q: string;
      a: string;
    }[];
  };
  termsPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    headline: string;
    headlineDim: string;
    lastUpdated: string;
    intro: string;
    tldrTitle: string;
    tldr: string[];
    sections: {
      title: string;
      body: string;
      bullets?: string[];
      link?: {
        label: string;
        href: string;
      };
    }[];
  };
}
