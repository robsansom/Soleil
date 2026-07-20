/** Intrinsic pixel dimensions of app screenshots (public/images). Keep in
 *  sync with the actual files — wrong ratios stretch the phone mockups. */
export const screenDims: Record<string, { w: number; h: number }> = {
  '/images/screen-home.png': { w: 1206, h: 2436 },
  '/images/screen-your-sun.png': { w: 1206, h: 2622 },
  '/images/screen-family.png': { w: 1206, h: 2622 },
  '/images/screen-session.png': { w: 1206, h: 2442 },
};

export function dimsFor(src: string): { w: number; h: number } {
  return screenDims[src] ?? { w: 1206, h: 2622 };
}
