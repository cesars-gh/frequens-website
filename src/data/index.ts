/**
 * Landing page content exports.
 * Import specific landing content or use the getLandingContent helper.
 */

export { tdahContent } from './tdah';
export { autismoContent } from './autismo';
export { adiccionesContent } from './adicciones';
export { dolorContent } from './dolor';
export { ansiedadContent } from './ansiedad';
export { depresionContent } from './depresion';

import type { LandingPageContent } from '../types/landing';
import { tdahContent } from './tdah';
import { autismoContent } from './autismo';
import { adiccionesContent } from './adicciones';
import { dolorContent } from './dolor';
import { ansiedadContent } from './ansiedad';
import { depresionContent } from './depresion';

export type LandingSlug =
	| 'tdah'
	| 'autismo'
	| 'adicciones'
	| 'dolor'
	| 'ansiedad'
	| 'depresion';

const landingContentMap: Record<LandingSlug, LandingPageContent> = {
	tdah: tdahContent,
	autismo: autismoContent,
	adicciones: adiccionesContent,
	dolor: dolorContent,
	ansiedad: ansiedadContent,
	depresion: depresionContent,
};

export const getLandingContent = (
	slug: LandingSlug,
): LandingPageContent | undefined => {
	return landingContentMap[slug];
};
