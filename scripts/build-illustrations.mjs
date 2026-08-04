#!/usr/bin/env node
/**
 * Derives web-sized illustrations from the commission masters.
 *
 * The masters are 1800px PNGs (~15MB in total) and live in
 * `assets/illustrations/`, outside `public/`, so they are never deployed.
 * This script writes only what a page actually renders into
 * `public/images/illustrations/`.
 *
 * WebP, because the art is flat black line work on transparency:
 * lossless at small sizes costs almost nothing and avoids the ringing
 * that lossy compression leaves around ink. Guide headers are large
 * enough to be worth a high-quality lossy pass.
 *
 * Run after any change to the masters:  npm run illustrations
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, 'assets/illustrations/commission/png');
const OUT = join(root, 'public/images/illustrations');

/**
 * Display width in CSS pixels per group, doubled for retina. Keep these
 * in step with the components that render them — oversizing here is the
 * easiest way to quietly put megabytes back into the build.
 */
const GROUPS = [
  { match: /^soleil-step-/, width: 300, lossless: true },
  { match: /^soleil-moment-/, width: 380, lossless: true },
  { match: /^soleil-support-|^soleil-guides-|^soleil-closing-/, width: 420, lossless: true },

  // Not placed on the site yet. Everything in `public/` is deployed
  // whether or not a page references it, so these stay unbuilt until
  // the pages that use them exist.
  { match: /^soleil-guide-/, skip: 'guide headers — wave 3' },
  { match: /^soleil-app-/, skip: 'ships inside the iOS app, not the site' },
];

const groupFor = (name) => GROUPS.find((g) => g.match.test(name));

mkdirSync(OUT, { recursive: true });

let count = 0;
let skipped = 0;
let bytes = 0;

for (const file of readdirSync(SRC).sort()) {
  if (!file.endsWith('.png')) continue;
  const group = groupFor(file);
  if (!group || group.skip) {
    skipped += 1;
    continue;
  }
  const { width, lossless } = group;
  const out = join(OUT, file.replace(/\.png$/, '.webp'));

  execFileSync('magick', [
    join(SRC, file),
    '-resize', `${width * 2}x`,
    '-strip',
    ...(lossless
      ? ['-define', 'webp:lossless=true']
      : ['-quality', '86', '-define', 'webp:method=6']),
    out,
  ]);

  count += 1;
  bytes += statSync(out).size;
}

console.log(
  `${count} illustrations → ${(bytes / 1024 / 1024).toFixed(2)} MB in ` +
    `public/images/illustrations (${skipped} not placed yet, left unbuilt)`,
);
