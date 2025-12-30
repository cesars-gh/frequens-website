import type { LandingPageContent } from '../types/landing';

export const dolorContent: LandingPageContent = {
	meta: {
		title: 'EMT para Dolor Crónico, Dolor Neuropático y Fibromialgia | Mérida',
		description:
			'Alivio científicamente respaldado del dolor crónico, neuropático y fibromialgia con Estimulación Magnética Transcraneal (EMT/TMS). Tratamiento no invasivo que modula el dolor en su origen. Agenda tu valoración gratuita.',
		keywords:
			'EMT dolor crónico, dolor neuropático Mérida, fibromialgia tratamiento, rTMS dolor, dolor lumbar, neuropatía diabética, tratamiento no invasivo dolor, neuromodulación dolor',
	},

	hero: {
		headline:
			'Tratamiento con EMT para Dolor Crónico, Neuropático y Fibromialgia en Mérida',
		description:
			'Una solución no invasiva y basada en neurociencia para reducir el dolor, mejorar la función y recuperar calidad de vida.',
		infoBoxes: [
			{
				icon: 'heart',
				title: 'Alivio del Dolor',
				description: 'Modula el dolor directamente en su origen neurológico',
			},
			{
				icon: 'check-badge',
				title: 'Científicamente Probado',
				description: 'Respaldado por estudios clínicos y meta-análisis',
			},
			{
				icon: 'refresh',
				title: 'Recupera tu Vida',
				description: 'Mejora sueño, movilidad y calidad de vida diaria',
			},
		],
	},

	whyEMT: {
		title: '¿Por qué EMT para el dolor?',
		paragraphs: [
			'El dolor crónico, el dolor neuropático y la fibromialgia comparten algo más que malestar: cambios en la forma en que el sistema nervioso procesa las señales de dolor. Cuando el dolor deja de ser una señal útil y se vuelve persistente, el cerebro y la médula aumentan su sensibilidad — un fenómeno conocido como sensibilización central.',
			'La <strong>Estimulación Magnética Transcraneal (EMT/rTMS)</strong> es una técnica no invasiva capaz de modular la actividad cortical y las redes cerebrales que mantienen el dolor. Actúa en la fuente del problema —el sistema nervioso— y no solo en los síntomas.',
		],
		highlights: [
			{
				icon: 'trending-down',
				title: 'Disminuye la percepción dolorosa',
				description:
					'La EMT ayuda a reducir la intensidad del dolor de forma sostenida mediante neuromodulación.',
			},
			{
				icon: 'refresh',
				title: 'Restaura vías de control',
				description:
					'Reactiva las vías naturales que el cerebro usa para regular y "apagar" señales de dolor.',
			},
			{
				icon: 'heart',
				title: 'Mejora calidad de vida',
				description:
					'Pacientes reportan mejor sueño, ánimo y capacidad para realizar actividades diarias.',
			},
		],
	},

	howItWorks: {
		title: '¿Cómo actúa la EMT para reducir el dolor?',
		statistic: 'Reducción del dolor hasta en un 30-50% en pacientes candidatos',
		cards: [
			{
				icon: 'bolt',
				title: 'Normaliza la excitabilidad',
				description:
					'Pulsos magnéticos focalizados disminuyen la hiperexcitabilidad cortical asociada al dolor crónico.',
			},
			{
				icon: 'shield-check',
				title: 'Activa vías inhibidoras',
				description:
					'Estimula las vías descendentes que el cerebro usa para "apagar" señales dolorosas.',
			},
			{
				icon: 'refresh',
				title: 'Promueve plasticidad',
				description:
					'Facilita que el sistema nervioso deje de "recordar" el dolor de forma disfuncional.',
			},
			{
				icon: 'heart',
				title: 'Mejora conectividad',
				description:
					'Modifica la conectividad entre estructuras relacionadas con la percepción y emoción del dolor.',
			},
		],
	},

	whoCanBenefit: {
		title: '¿Eres candidato a EMT para el dolor?',
		subtitle:
			'La EMT puede ayudar en diversos tipos de dolor crónico y condiciones relacionadas.',
		beneficiaries: [
			{
				icon: 'user',
				title: 'Dolor crónico musculoesquelético',
				description:
					'Lumbalgias, cervicalgias persistentes y dolor que limita tu movilidad.',
			},
			{
				icon: 'heart',
				title: 'Dolor neuropático',
				description:
					'Neuralgias postherpéticas, neuropatía diabética, dolor posquirúrgico.',
			},
			{
				icon: 'refresh',
				title: 'Fibromialgia',
				description: 'Dolor generalizado, fatiga crónica, sueño no reparador.',
			},
			{
				icon: 'shield-check',
				title: 'Sin respuesta a otros tratamientos',
				description:
					'Pacientes que no mejoran completamente con medicación, fisioterapia o bloqueos.',
			},
		],
		ctaText: 'Contactar Especialista',
	},

	benefits: {
		title: '¿Qué mejoras suelen observarse?',
		benefits: [
			{
				icon: 'check-circle',
				title: 'Reducción sostenida del dolor',
				description:
					'Disminución en la intensidad del dolor que se mantiene en el tiempo.',
			},
			{
				icon: 'check-circle',
				title: 'Mejor calidad del sueño',
				description: 'Descanso más reparador y menos interrupciones por dolor.',
			},
			{
				icon: 'check-circle',
				title: 'Mayor movilidad',
				description: 'Menos rigidez y mayor capacidad de movimiento.',
			},
			{
				icon: 'check-circle',
				title: 'Más energía diaria',
				description: 'Disminución de la fatiga asociada al dolor crónico.',
			},
			{
				icon: 'check-circle',
				title: 'Mejor estado de ánimo',
				description:
					'Reducción de irritabilidad y mejora en el bienestar emocional.',
			},
			{
				icon: 'check-circle',
				title: 'Posible reducción de medicación',
				description: 'En algunos casos, menor dependencia de analgésicos.',
			},
		],
	},

	scienceEvidence: {
		title: 'Lo que dicen los estudios sobre EMT y dolor',
		subtitle:
			'La investigación clínica y los meta-análisis respaldan la eficacia de la EMT en diversos síndromes de dolor.',
		evidenceCards: [
			{
				icon: 'document',
				title: 'Reducción de intensidad',
				description:
					'Estudios demuestran reducción de la intensidad del dolor en diversos síndromes crónicos con protocolos sobre corteza motora.',
			},
			{
				icon: 'chart-bar',
				title: 'Mejoría en dolor neuropático',
				description:
					'Cambios medibles en la respuesta al estímulo doloroso en pacientes con dolor neuropático.',
			},
			{
				icon: 'heart',
				title: 'Beneficios en fibromialgia',
				description:
					'Mejoras en dolor, sueño y fatiga en pacientes con fibromialgia bajo protocolos específicos.',
			},
			{
				icon: 'shield-check',
				title: 'Tratamiento personalizado',
				description:
					'La personalización del protocolo maximiza la probabilidad de respuesta en cada paciente.',
			},
		],
	},

	process: {
		title: 'Tu plan para reducir el dolor y recuperar movimiento',
		subtitle:
			'En Frequens diseñamos un protocolo basado en tu diagnóstico y evidencia clínica.',
		steps: [
			{
				number: 1,
				title: 'Valoración inicial',
				description:
					'Historia clínica, evaluación del dolor, escalas funcionales y entrevista para entender tu caso.',
			},
			{
				number: 2,
				title: 'Plan personalizado',
				description:
					'Elegimos protocolo (zona cortical, frecuencia, número de sesiones) según tu diagnóstico.',
			},
			{
				number: 3,
				title: 'Sesiones de EMT',
				description:
					'20-40 minutos de duración, varias sesiones por semana durante el protocolo inicial.',
			},
			{
				number: 4,
				title: 'Seguimiento y mantenimiento',
				description:
					'Monitoreo de resultados y sesiones de mantenimiento para sostener la mejora.',
			},
		],
		ctaText: 'Agendar valoración gratuita',
	},

	faq: {
		title: 'Preguntas que suelen hacer nuestros pacientes',
		faqs: [
			{
				question: '¿Duele la EMT?',
				answer:
					'No. No se siente prácticamente nada. Algunas personas perciben la frecuencia o presión en la zona estimulada.',
			},
			{
				question: '¿Es segura?',
				answer:
					'Sí. Es un procedimiento con buen perfil de seguridad cuando lo aplica personal entrenado.',
			},
			{
				question: '¿Cuándo puedo esperar alivio?',
				answer:
					'Algunas personas notan cambios en semanas; otras requieren más sesiones. La evaluación inicial dará expectativas realistas.',
			},
			{
				question: '¿Necesito dejar mis medicamentos?',
				answer:
					'No necesariamente. Se coordina con tu médico para combinar y, si procede, reducir dosis de forma segura.',
			},
			{
				question: '¿La EMT cura la fibromialgia?',
				answer:
					'No existe "cura" universal; la EMT busca reducir dolor, mejorar sueño y función. Muchos pacientes experimentan mejoras significativas en su calidad de vida.',
			},
		],
	},

	testimonials: {
		title: 'Historias de alivio real',
		testimonials: [
			{
				image: '/images/clinic/paciente-adulto.jpeg',
				imageAlt: 'Paciente adulto experimentando alivio del dolor crónico',
				quote:
					'Después de años con dolor lumbar crónico, ahora puedo jugar con mis nietos sin parar cada cinco minutos.',
				author: 'Paciente con dolor lumbar',
			},
			{
				image: '/images/clinic/IMG_9732.jpg',
				imageAlt: 'Instalaciones de Frequens para tratamiento del dolor',
				quote:
					'Mi neuropatía mejoró tanto que pude reducir la medicación y dormir mejor. La fibromialgia me dejaba agotada; ahora tengo menos dolor y más energía.',
				author: 'Paciente con fibromialgia',
			},
		],
	},

	finalCTA: {
		title: 'Recupera movimiento. Recupera vida.',
		description:
			'Agenda tu valoración y conversamos sobre un plan eficaz y personalizado para tu dolor.',
		ctaText: 'Agendar mi valoración',
		footnote:
			'La EMT no reemplaza otras terapias, pero complementa y potencia los resultados.<br />En Frequens combinamos ciencia avanzada con atención personalizada.',
	},
};
