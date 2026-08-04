/**
 * Upgrades the Real Sun scene's three labelled blocks into a tab set, and
 * flies the sun along the day's UV curve to whichever part of the day is
 * selected.
 *
 * Without this file the blocks simply stack and every word is readable,
 * which is why the tab strip ships hidden. The sun sits at the peak in
 * the server-rendered markup, so the chart is complete either way.
 */

/** Where each tab sits along the curve, 0 = dawn, 1 = dusk. */
const STOPS = [0.17, 0.5, 0.85];

function rideTheCurve(scene: HTMLElement) {
  const curve = scene.querySelector<SVGPathElement>('[data-curve]');
  const sun = scene.querySelector<SVGGElement>('[data-sun]');
  const drop = scene.querySelector<SVGLineElement>('[data-drop]');
  if (!curve || !sun) return () => {};

  const total = curve.getTotalLength();
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let current = STOPS[0];
  let frame = 0;

  const place = (t: number) => {
    const { x, y } = curve.getPointAtLength(total * t);
    sun.setAttribute('transform', `translate(${x} ${y})`);
    // A dotted stem down to the baseline, so the sun's position reads as
    // a time of day rather than a floating dot.
    drop?.setAttribute('x1', String(x));
    drop?.setAttribute('x2', String(x));
    drop?.setAttribute('y1', String(y));
    current = t;
  };

  const glideTo = (t: number) => {
    cancelAnimationFrame(frame);
    if (reduced) {
      place(t);
      return;
    }
    const from = current;
    const distance = t - from;
    const duration = 320 + Math.abs(distance) * 900;
    const start = performance.now();
    // Ease in and out, so the sun leaves and arrives softly.
    const ease = (p: number) => (p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2);
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      place(from + distance * ease(p));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
  };

  // Start at dawn and run up to the opening state the first time the
  // scene is seen; after that the tabs drive it.
  let played = false;
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || played) continue;
        played = true;
        observer.disconnect();
        place(0);
        glideTo(STOPS[0]);
      }
    },
    { threshold: 0.35 },
  );

  if (!reduced) {
    place(0);
    observer.observe(scene);
  } else {
    place(STOPS[0]);
  }

  return glideTo;
}

export function initTabs() {
  const scene = document.querySelector<HTMLElement>('[data-realsun]');
  const tablist = scene?.querySelector<HTMLElement>('[data-tabs]');
  if (!scene || !tablist) return;

  const tabs = [...tablist.querySelectorAll<HTMLButtonElement>('[data-tab]')];
  const panels = [...scene.querySelectorAll<HTMLElement>('[data-panel]')];
  if (tabs.length === 0 || tabs.length !== panels.length) return;

  const glideTo = rideTheCurve(scene);

  tablist.hidden = false;
  panels.forEach((panel) => panel.setAttribute('role', 'tabpanel'));

  const select = (index: number, focus = false, move = true) => {
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
      panels[i].hidden = !on;
    });
    scene.dataset.zone = String(index);
    if (move) glideTo(STOPS[index] ?? 0.5);
    if (focus) tabs[index].focus();
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i));
    tab.addEventListener('keydown', (event) => {
      const keys: Record<string, number> = {
        ArrowRight: i + 1,
        ArrowLeft: i - 1,
        Home: 0,
        End: tabs.length - 1,
      };
      const target = keys[event.key];
      if (target === undefined) return;
      event.preventDefault();
      select((target + tabs.length) % tabs.length, true);
    });
  });

  select(0, false, false);
}
