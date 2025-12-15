/**
 * Landing page content exports.
 * Import specific landing content or use the getLandingContent helper.
 */

export { tdahContent } from './tdah';
// Future landing pages:
// export { autismoContent } from './autismo';
// export { adiccionesContent } from './adicciones';
// export { dolorContent } from './dolor';
// export { ansiedadContent } from './ansiedad';
// export { depresionContent } from './depresion';

import type { LandingPageContent } from '../types/landing';
import { tdahContent } from './tdah';

export type LandingSlug =
	| 'tdah'
	| 'autismo'
	| 'adicciones'
	| 'dolor'
	| 'ansiedad'
	| 'depresion';

const landingContentMap: Partial<Record<LandingSlug, LandingPageContent>> = {
	tdah: tdahContent,
	// Add more as they are created
};

export const getLandingContent = (
	slug: LandingSlug,
): LandingPageContent | undefined => {
	return landingContentMap[slug];
};
