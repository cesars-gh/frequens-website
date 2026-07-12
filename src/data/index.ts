/**
 * Landing page content exports.
 * Import specific landing content or use the getLandingContent helper.
 */

export { tdahContent } from './tdah';
export { autismoContent } from './autismo';
export { faqPageContent } from './faq';
export { adiccionesContent } from './adicciones';
export { dolorContent } from './dolor';
export { ansiedadContent } from './ansiedad';
export { depresionContent } from './depresion';
export { teptContent } from './tept';

import type { LandingPageContent } from '../types/landing';
import { tdahContent } from './tdah';
import { autismoContent } from './autismo';
import { adiccionesContent } from './adicciones';
import { dolorContent } from './dolor';
import { ansiedadContent } from './ansiedad';
import { depresionContent } from './depresion';
import { teptContent } from './tept';

export type LandingSlug =
	| 'tdah'
	| 'autismo'
	| 'adicciones'
	| 'dolor'
	| 'ansiedad'
	| 'depresion'
	| 'tept';

const landingContentMap: Record<LandingSlug, LandingPageContent> = {
	tdah: tdahContent,
	autismo: autismoContent,
	adicciones: adiccionesContent,
	dolor: dolorContent,
	ansiedad: ansiedadContent,
	depresion: depresionContent,
	tept: teptContent,
};

export const getLandingContent = (
	slug: LandingSlug,
): LandingPageContent | undefined => {
	return landingContentMap[slug];
};
