/** Intrinsic pixel dimensions of app screenshots (public/images). Keep in
 *  sync with the actual files — wrong ratios stretch the device frames.
 *
 *  The previous site's `screen-session.png` is deliberately absent: it
 *  displayed vitamin-D estimates the app does not make (see HANDOFF.md). */
export const screenDims: Record<string, { w: number; h: number }> = {
  '/images/screen-home.png': { w: 1206, h: 2436 },
  '/images/screen-your-sun.png': { w: 1206, h: 2622 },
  '/images/screen-family.png': { w: 1206, h: 2622 },
};

export function dimsFor(src: string): { w: number; h: number } {
  return screenDims[src] ?? { w: 1206, h: 2622 };
}
