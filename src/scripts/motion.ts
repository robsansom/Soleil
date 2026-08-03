/**
 * Entrance motion and the one scroll-driven sequence.
 *
 * Rules this file keeps to:
 *  - Nothing is hidden unless JS is running and motion is welcome
 *    (`html.motion-on`, set inline in the <head>).
 *  - Observers disconnect once an element has played.
 *  - GSAP is only fetched for the pinned sequence, only on wide screens.
 */

const motionOn = document.documentElement.classList.contains('motion-on');

/* Word-by-word headline entrance ------------------------------------- */

function splitWords(root: ParentNode) {
  for (const target of root.querySelectorAll<HTMLElement>('[data-split]')) {
    const lines = target.children.length
      ? [...target.children]
      : [target];

    let index = 0;
    for (const line of lines) {
      const words = (line.textContent ?? '').split(/\s+/).filter(Boolean);
      line.textContent = '';
      for (const word of words) {
        const outer = document.createElement('span');
        outer.className = 'word';
        const inner = document.createElement('span');
        inner.className = 'word__i';
        inner.textContent = word;
        inner.style.setProperty('--delay', `${index * 45}ms`);
        outer.append(inner);
        line.append(outer, document.createTextNode(' '));
        index += 1;
      }
    }
    target.dataset.splitReady = 'true';
  }
}

/* Reveal on scroll ---------------------------------------------------- */

function initReveals() {
  const targets = [
    ...document.querySelectorAll<HTMLElement>('[data-reveal]'),
    ...document.querySelectorAll<HTMLElement>('[data-split]'),
  ];
  if (targets.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        // Siblings in the same group land one after another.
        const group = el.parentElement?.querySelectorAll('[data-reveal]');
        if (group && group.length > 1) {
          const index = [...group].indexOf(el);
          el.style.setProperty('--delay', `${Math.max(index, 0) * 70}ms`);
        }
        el.classList.add('is-in');
        observer.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  targets.forEach((target) => observer.observe(target));
}

/* The Sun Window sequence --------------------------------------------- */

async function initSequence() {
  const section = document.querySelector<HTMLElement>('[data-sequence]');
  if (!section) return;
  if (!window.matchMedia('(min-width: 1000px)').matches) return;

  const steps = [...section.querySelectorAll<HTMLElement>('[data-step]')];
  const dots = [...section.querySelectorAll<HTMLElement>('[data-dot]')];
  const object = section.querySelector<HTMLElement>('[data-sequence-object]');
  if (steps.length === 0 || !object) return;

  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);

  steps[0].classList.add('is-on');

  const show = (index: number) => {
    steps.forEach((step, i) => step.classList.toggle('is-on', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('is-on', i === index));
  };

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
      onUpdate: (self) => {
        const index = Math.min(
          steps.length - 1,
          Math.floor(self.progress * steps.length),
        );
        show(index);
      },
    },
  });

  // The object opens up as the states advance: it starts large and
  // cropped, then settles into a calm, complete composition.
  timeline
    .fromTo(
      object,
      { scale: 1.34, rotate: -8, yPercent: 8 },
      { scale: 1.1, rotate: -4, yPercent: 2, ease: 'none' },
    )
    .to(object, { scale: 1, rotate: 2, yPercent: 0, ease: 'none' })
    .to(object, { scale: 0.96, rotate: 0, ease: 'none' });
}

/* Boot ---------------------------------------------------------------- */

if (motionOn) {
  splitWords(document);
  initReveals();
  void initSequence();
}
