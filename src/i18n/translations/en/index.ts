import type { Translation } from '../../types';
import { site } from './site';
import { legal } from './legal';
import { home, nav, skipLabel } from './home';

export const en: Translation = { ...site, ...legal, nav, home, skipLabel };
