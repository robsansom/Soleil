/**
 * Single source of truth for site-wide constants.
 *
 * Update these here and every CTA, badge, mailto and credit line on
 * the site updates with them. Keeping marketing-sensitive values in
 * one file avoids hunting through templates when the App Store URL
 * goes live, the support address changes, or pricing moves.
 */

export const site = {
  /**
   * Apple App Store product URL.
   *
   * Until the app is live, this is a placeholder anchor (`#app-store`)
   * so we don't ship a broken external link to the App Store. The
   * moment we have a real product URL of the form
   * `https://apps.apple.com/app/soleil/id6777120580`, replace this
   * value and every CTA on the site (Hero, Footer, App Store badge,
   * Header download pill) will point to it automatically.
   */
  appStoreUrl: '#app-store',

  /** Address shown on legal pages and support contact CTAs. */
  supportEmail: 'support@getsoleil.com',

  /** Marketing display name used in headers, page titles and meta tags. */
  appName: 'Soleil',
} as const;

export type SiteConfig = typeof site;
