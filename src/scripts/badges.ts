/**
 * Cursor-reactive drift for the badge cluster. Pointer devices only, and
 * only while the pointer is actually moving over the scene — there is no
 * standing requestAnimationFrame loop.
 */
export function initBadges() {
  const stage = document.querySelector<HTMLElement>('[data-badges]');
  if (!stage) return;

  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const wide = window.matchMedia('(min-width: 1000px)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!fine || !wide || reduced) return;

  const badges = [...stage.querySelectorAll<HTMLElement>('[data-badge]')];
  if (badges.length === 0) return;

  let queued = false;
  let px = 0;
  let py = 0;

  const apply = () => {
    queued = false;
    for (const badge of badges) {
      const depth = Number(badge.style.getPropertyValue('--d') || 1);
      badge.style.setProperty('--px', `${px * 22 * depth}px`);
      badge.style.setProperty('--py', `${py * 16 * depth}px`);
    }
  };

  stage.addEventListener('pointermove', (event) => {
    const box = stage.getBoundingClientRect();
    px = (event.clientX - box.left) / box.width - 0.5;
    py = (event.clientY - box.top) / box.height - 0.5;
    if (!queued) {
      queued = true;
      requestAnimationFrame(apply);
    }
  });

  stage.addEventListener('pointerleave', () => {
    px = 0;
    py = 0;
    apply();
  });
}
