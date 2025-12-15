/**
 * Landing page content exports.
 * Import specific landing content or use the getLandingContent helper.
 */

export { tdahContent } from './tdah';
export { autismoContent } from './autismo';
// Future landing pages:
// export { adiccionesContent } from './adicciones';
// export { dolorContent } from './dolor';
// export { ansiedadContent } from './ansiedad';
// export { depresionContent } from './depresion';

import type { LandingPageContent } from '../types/landing';
import { tdahContent } from './tdah';
import { autismoContent } from './autismo';

export type LandingSlug =
	| 'tdah'
	| 'autismo'
	| 'adicciones'
	| 'dolor'
	| 'ansiedad'
	| 'depresion';

const landingContentMap: Partial<Record<LandingSlug, LandingPageContent>> = {
	tdah: tdahContent,
	autismo: autismoContent,
};

export const getLandingContent = (
	slug: LandingSlug,
): LandingPageContent | undefined => {
	return landingContentMap[slug];
};
