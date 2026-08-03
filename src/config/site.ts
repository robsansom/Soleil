/**
 * Single source of truth for site-wide constants. Update these here and
 * every CTA, badge and mailto on the site follows.
 */

export const site = {
  /**
   * Apple App Store product URL.
   *
   * Until the app is live this is a placeholder anchor, and every CTA
   * renders its "coming soon" state instead of a badge. Replace it with
   * the real `https://apps.apple.com/app/…` URL and the whole site
   * switches over.
   */
  appStoreUrl: '#app-store',

  /** Address shown on legal pages and support contact CTAs. */
  supportEmail: 'support@getsoleil.com',

  /** Marketing display name used in headers, page titles and meta tags. */
  appName: 'Soleil',

  domain: 'https://getsoleilapp.com',
} as const;

/** True once a real App Store URL is set. */
export const appStoreLive = !site.appStoreUrl.startsWith('#');
