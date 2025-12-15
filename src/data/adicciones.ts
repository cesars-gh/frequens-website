import type { LandingPageContent } from '../types/landing';

export const adiccionesContent: LandingPageContent = {
	meta: {
		title:
			'EMT para Adicciones en Mérida | Regulación cerebral para reducir craving',
		description:
			'La Estimulación Magnética Transcraneal (EMT/TMS) ayuda a disminuir ansiedad por consumo, impulsividad y conductas compulsivas. Tratamiento no invasivo, basado en neurociencia. Agenda tu valoración gratuita.',
		keywords:
			'EMT adicciones, tratamiento adicciones Mérida, rTMS craving, control impulsos, adicción alcohol, adicción cocaína, adicción nicotina, adicciones conductuales, tratamiento no invasivo adicciones',
	},

	hero: {
		headline: 'Tratamiento con EMT para Adicciones en Mérida',
		description:
			'Una herramienta científica, no invasiva y segura para reducir el craving, mejorar el autocontrol y apoyar la recuperación.',
		infoBoxes: [
			{
				icon: 'shield-check',
				title: 'Reduce el Craving',
				description: 'Disminuye la ansiedad por consumo de forma efectiva',
			},
			{
				icon: 'check-badge',
				title: 'Basado en Neurociencia',
				description: 'Actúa directamente sobre circuitos cerebrales alterados',
			},
			{
				icon: 'heart',
				title: 'Apoyo en la Recuperación',
				description: 'Fortalece tu capacidad para sostener la abstinencia',
			},
		],
	},

	whyEMT: {
		title: '¿Por qué EMT para las Adicciones?',
		paragraphs: [
			'Las adicciones no son solo un problema de voluntad: involucran circuitos cerebrales alterados que controlan impulsos, recompensa, motivación y regulación emocional.',
			'La <strong>Estimulación Magnética Transcraneal (EMT)</strong> actúa directamente sobre estas redes, ayudando a reducir la ansiedad por consumo (craving), mejorar el control de impulsos, disminuir la reactividad a estímulos de adicción, favorecer la estabilidad emocional y fortalecer la capacidad para sostener la abstinencia.',
		],
		highlights: [
			{
				icon: 'shield-check',
				title: 'Menor deseo de consumo',
				description:
					'Estudios reportan una reducción significativa del craving intenso y la urgencia por consumir.',
			},
			{
				icon: 'trending-up',
				title: 'Reducción de recaídas',
				description:
					'Pacientes muestran menor frecuencia de recaídas y mejor manejo de impulsos.',
			},
			{
				icon: 'heart',
				title: 'Mayor adherencia al tratamiento',
				description:
					'La EMT potencia la eficacia de la terapia psicológica y programas de recuperación.',
			},
		],
	},

	howItWorks: {
		title: '¿Qué hace la EMT en el cerebro de una persona con adicción?',
		statistic: 'Reducción del craving hasta en un 50% en estudios clínicos',
		cards: [
			{
				icon: 'bolt',
				title: 'Regulación prefrontal',
				description:
					'Fortalece la actividad del córtex prefrontal dorsolateral (CPFDL), clave en autocontrol y toma de decisiones.',
			},
			{
				icon: 'shield-check',
				title: 'Control de impulsos',
				description:
					'Reduce la hiperreactividad frente a estímulos asociados al consumo, disminuyendo impulsos intensos.',
			},
			{
				icon: 'refresh',
				title: 'Reequilibrio de recompensa',
				description:
					'Ayuda a reequilibrar los circuitos de recompensa, disminuyendo la búsqueda compulsiva.',
			},
			{
				icon: 'heart',
				title: 'Estabilidad emocional',
				description:
					'Mejora el procesamiento emocional, clave para evitar recaídas en momentos de estrés.',
			},
		],
	},

	whoCanBenefit: {
		title: '¿La EMT puede ayudar en mi caso?',
		subtitle:
			'La EMT es útil tanto en adicciones a sustancias como en adicciones conductuales.',
		beneficiaries: [
			{
				icon: 'user',
				title: 'Adicción a sustancias',
				description:
					'Alcohol, nicotina, cocaína, metanfetamina y dependencia a medicamentos.',
			},
			{
				icon: 'users',
				title: 'Adicciones conductuales',
				description:
					'Juego/apuestas, compras compulsivas, adicción a la comida, pornografía o redes sociales.',
			},
			{
				icon: 'refresh',
				title: 'Recaídas frecuentes',
				description:
					'Personas con dificultad para mantener la abstinencia a pesar de otros tratamientos.',
			},
			{
				icon: 'heart',
				title: 'Consumo asociado a emociones',
				description:
					'Cuando la adicción está relacionada con ansiedad, depresión o impulsividad marcada.',
			},
		],
		ctaText: 'Contactar Especialista',
	},

	benefits: {
		title: '¿Qué beneficios reales ofrece la EMT para adicciones?',
		benefits: [
			{
				icon: 'check-circle',
				title: 'Menos ansiedad por consumir',
				description:
					'Reducción notable del craving y la urgencia por consumir.',
			},
			{
				icon: 'check-circle',
				title: 'Mayor sensación de control',
				description: 'Capacidad mejorada para resistir impulsos y tentaciones.',
			},
			{
				icon: 'check-circle',
				title: 'Reducción de impulsos súbitos',
				description:
					'Menos reactividad a disparadores emocionales o ambientales.',
			},
			{
				icon: 'check-circle',
				title: 'Mejor estado de ánimo',
				description: 'Claridad mental y estabilidad emocional mejoradas.',
			},
			{
				icon: 'check-circle',
				title: 'Mayor adherencia a terapia',
				description:
					'Potencia los resultados de psicoterapia y programas de recuperación.',
			},
			{
				icon: 'check-circle',
				title: 'Menor frecuencia de recaídas',
				description:
					'Ayuda a sostener la abstinencia por períodos más prolongados.',
			},
		],
	},

	scienceEvidence: {
		title: 'Lo que dice la ciencia sobre EMT y adicciones',
		subtitle:
			'La investigación clínica muestra resultados prometedores para diversos tipos de adicción.',
		evidenceCards: [
			{
				icon: 'document',
				title: 'Reducción de craving',
				description:
					'Estudios demuestran que la EMT reduce el craving en adicción al alcohol mediante estimulación prefrontal.',
			},
			{
				icon: 'chart-bar',
				title: 'Menor tasa de recaída',
				description:
					'Se ha observado disminución del deseo y la tasa de recaída en adicción a cocaína y nicotina.',
			},
			{
				icon: 'shield-check',
				title: 'Mejora en autocontrol',
				description:
					'La EMT mejora autocontrol y reduce impulsividad en diversas conductas adictivas.',
			},
			{
				icon: 'heart',
				title: 'Buena tolerancia',
				description:
					'El tratamiento tiene buena tolerancia y mínimos efectos secundarios comparado con otras intervenciones.',
			},
		],
	},

	process: {
		title: 'Tu camino hacia la recuperación',
		subtitle:
			'En Frequens diseñamos un plan personalizado para apoyar tu proceso de recuperación.',
		steps: [
			{
				number: 1,
				title: 'Valoración inicial gratuita',
				description:
					'Conocemos tu historia, tipo de adicción, desencadenantes y objetivos de tratamiento.',
			},
			{
				number: 2,
				title: 'Plan personalizado',
				description:
					'Definimos protocolo, zona cerebral y frecuencia de sesiones según tu caso específico.',
			},
			{
				number: 3,
				title: 'Sesiones de EMT',
				description:
					'20-40 minutos por sesión. Seguras, no invasivas y sin dolor.',
			},
			{
				number: 4,
				title: 'Acompañamiento y seguimiento',
				description:
					'Revisamos avances, ajustamos protocolo y te apoyamos en tu proceso integral.',
			},
		],
		ctaText: 'Agendar valoración gratuita',
	},

	faq: {
		title: 'Preguntas que suelen hacer nuestros pacientes',
		faqs: [
			{
				question: '¿Duele?',
				answer:
					'No, algunas personas pueden percibir vibración o presión en la zona estimulada.',
			},
			{
				question: '¿Es seguro?',
				answer:
					'Sí, tiene uno de los perfiles de seguridad más favorables en neuropsiquiatría.',
			},
			{
				question: '¿Cuándo veo cambios?',
				answer:
					'Muchos pacientes notan reducción en craving entre la 2ª y 4ª semana de tratamiento.',
			},
			{
				question: '¿Necesito dejar mis medicamentos?',
				answer:
					'No necesariamente; se revisa en la valoración inicial para determinar el mejor protocolo.',
			},
			{
				question: '¿Funciona para todas las adicciones?',
				answer:
					'Los resultados varían, pero la evidencia es fuerte en alcohol, cocaína y nicotina; moderada en otras.',
			},
		],
	},

	testimonials: {
		title: 'Historias reales de recuperación',
		testimonials: [
			{
				image: '/images/clinic/paciente-adulto.jpeg',
				imageAlt: 'Paciente adulto en proceso de recuperación con EMT',
				quote:
					'El impulso de consumo bajó muchísimo. La EMT me dio espacio para pensar antes de actuar.',
				author: 'Paciente en recuperación',
			},
			{
				image: '/images/clinic/IMG_9730.jpg',
				imageAlt: 'Instalaciones de Frequens para tratamiento de adicciones',
				quote:
					'Pude sostener la abstinencia por primera vez en años. La combinación de EMT y terapia fue lo que necesitaba.',
				author: 'Paciente con adicción al alcohol',
			},
		],
	},

	finalCTA: {
		title: 'La recuperación sí es posible. Da el primer paso.',
		description:
			'Agenda tu valoración <strong>gratuita</strong> y te ayudamos a comenzar tu camino hacia una vida libre de adicción.',
		ctaText: 'Agendar mi valoración',
		footnote:
			'La EMT no sustituye la psicoterapia, pero la potencia notablemente.<br />En Frequens combinamos ciencia y acompañamiento para apoyar tu recuperación.',
	},
};
