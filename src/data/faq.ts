export interface FAQCategory {
	title: string;
	faqs: {
		question: string;
		answer: string;
	}[];
}

export interface FAQPageContent {
	meta: {
		title: string;
		description: string;
		keywords: string;
	};
	headline: string;
	subtitle: string;
	categories: FAQCategory[];
}

export const faqPageContent: FAQPageContent = {
	meta: {
		title: 'Preguntas Frecuentes sobre EMT | Frequens',
		description:
			'Resuelve todas tus dudas sobre la Estimulación Magnética Transcraneal (EMT). Información sobre costos, proceso, resultados y más.',
		keywords:
			'preguntas frecuentes EMT, dudas estimulación magnética transcraneal, información EMT, costo EMT, tratamiento EMT Mérida',
	},
	headline: 'Preguntas Frecuentes',
	subtitle:
		'Todo lo que necesitas saber sobre la Estimulación Magnética Transcraneal',
	categories: [
		{
			title: 'Información General y Logística',
			faqs: [
				{
					question: '¿Dónde están ubicados exactamente?',
					answer:
						'Estamos ubicados dentro del centro de especialidades Hospedic, en la calle 50 No. 171, en el Fraccionamiento Francisco de Montejo.',
				},
				{
					question: '¿Tienen estacionamiento?',
					answer:
						'Sí. Contamos con 3 cajones de estacionamiento frente a Hospedic. Si al llegar están ocupados, puedes dar vuelta en la siguiente calle a la derecha y encontrar estacionamiento en la cuadra de atrás.',
				},
				{
					question: '¿Atienden niños, adolescentes y adultos?',
					answer:
						'Sí. Atendemos niños a partir de los 4 años, adolescentes, adultos y adultos mayores. Los beneficios varían según la etapa de vida. En niños, la EMT suele ser especialmente efectiva porque el cerebro aún está formando nuevas conexiones neuronales. En adultos mayores, sobre todo ante los primeros signos de deterioro cognitivo, puede ayudar a frenar el avance de los síntomas y mejorar la conectividad cerebral.',
				},
				{
					question: '¿Necesito cita previa o puedo llegar sin cita?',
					answer:
						'Es necesario agendar una cita de evaluación para poder darte la atención que mereces y respetar el espacio de otros pacientes.',
				},
				{
					question: '¿En qué horarios atienden?',
					answer:
						'Atendemos de 9:00 a.m. a 2:00 p.m. y de 4:00 p.m. a 8:00 p.m., siempre con cita previa. Al iniciar el tratamiento se establece un horario que buscamos respetar en la mayoría de las sesiones, aunque puede ajustarse si hay disponibilidad para ayudarte a cumplir con la frecuencia indicada.',
				},
			],
		},
		{
			title: 'Costos y Forma de Pago',
			faqs: [
				{
					question: '¿Cuánto dura cada sesión?',
					answer:
						'Cada sesión puede durar entre 10 y 50 minutos, dependiendo de lo que se esté trabajando, la fase del tratamiento y la complejidad del cuadro clínico.',
				},
				{
					question: '¿Cada cuánto se hace el tratamiento?',
					answer:
						'Idealmente de forma diaria o interdiaria. No se recomienda dejar menos de 24 horas ni más de 72 horas entre sesiones, ya que la EMT funciona de manera acumulativa.',
				},
				{
					question: '¿Cuántas sesiones se necesitan?',
					answer:
						'Generalmente entre 20 y 40 sesiones, aunque esto se define después de la evaluación clínica.',
				},
				{
					question: '¿Cuánto cuesta la sesión?',
					answer:
						'La EMT no se maneja como sesiones aisladas. Una sola sesión no genera cambios significativos, por lo que primero realizamos una evaluación, diseñamos un plan completo y, con base en eso, se presenta la propuesta económica.',
				},
				{
					question: '¿Cuánto cuesta el tratamiento completo?',
					answer:
						'El costo depende de múltiples variables: diagnóstico o diagnósticos, edad, severidad de los síntomas, tratamientos previos y objetivos terapéuticos. Todo se explica con claridad durante la evaluación.',
				},
				{
					question: '¿Se puede pagar en partes?',
					answer:
						'Sí. Ofrecemos pagos en cuotas y, en algunos casos, meses sin intereses, buscando siempre hacer el tratamiento viable.',
				},
			],
		},
		{
			title: '¿Qué es la EMT y Cómo Funciona?',
			faqs: [
				{
					question:
						'¿Qué es exactamente la Estimulación Magnética Transcraneal (EMT)?',
					answer:
						'La EMT es una terapia médica no invasiva que utiliza pulsos magnéticos para modular la actividad de áreas específicas del cerebro relacionadas con los síntomas que presenta la persona. Se basa en la neuroplasticidad, la capacidad natural del cerebro para reorganizarse, crear nuevas conexiones y modificar su funcionamiento.',
				},
				{
					question: '¿Cómo actúa en el cerebro?',
					answer:
						'Los pulsos magnéticos estimulan o inhiben zonas concretas del cerebro, ayudando a regular circuitos neuronales que pueden estar hipoactivos o hiperactivos. Con el tiempo, esto favorece cambios funcionales más estables.',
				},
				{
					question: '¿Usa electricidad? ¿Es electroshock?',
					answer:
						'No. La EMT no es electroshock y no pasa ninguna descarga eléctrica al cerebro. Funciona mediante ondas o pulsos magnéticos que actúan "a la distancia", sin introducir nada en el cuerpo, por lo que es una terapia no invasiva.',
				},
				{
					question: '¿Desde cuándo se usa esta tecnología?',
					answer:
						'Se utiliza clínicamente desde hace más de 30 años y sigue creciendo, ya que cada vez se investiga para más patologías debido a sus buenos resultados.',
				},
			],
		},
		{
			title: 'Experiencia Durante la Sesión',
			faqs: [
				{
					question: '¿Duele? ¿Qué se siente durante la sesión?',
					answer:
						'No duele y, en la mayoría de los casos, no se siente prácticamente nada. Al inicio algunas personas pueden notar una ligera vibración, golpeteo o mareo leve. Esto suele desaparecer conforme el cerebro se acostumbra y es normal.',
				},
				{
					question: '¿Me puedo mover durante la sesión?',
					answer:
						'Sí. Solo te pedimos regresar a la postura inicial o avisar a la terapeuta para que acomode la bobina.',
				},
				{
					question: '¿Debo hacer algo especial antes o después?',
					answer:
						'Antes de la sesión recomendamos haber comido y descansado bien, ya que la EMT es como un gimnasio cerebral. Después de la sesión puedes continuar tu día con normalidad.',
				},
				{
					question: '¿Puedo ir acompañado?',
					answer: 'Sí. Contamos con espacio para hasta dos acompañantes.',
				},
				{
					question:
						'¿Puedo leer, usar el celular o escuchar música durante la sesión?',
					answer:
						'Sí. Muchos pacientes leen, escuchan música o utilizan objetos que les ayudan a sentirse cómodos.',
				},
			],
		},
		{
			title: 'Seguridad, Aprobación y Profesionales',
			faqs: [
				{
					question: '¿Es un tratamiento aprobado?',
					answer:
						'Sí. La EMT está aprobada por la FDA en Estados Unidos y por COFEPRIS en México.',
				},
				{
					question: '¿Quién aplica el tratamiento en Frequens?',
					answer:
						'Nuestro equipo está capacitado en EMT, neurociencias y psicología, lo que nos permite ofrecer una experiencia segura, informada y cálida.',
				},
				{
					question: '¿Es seguro?',
					answer:
						'Sí, cuando se aplica siguiendo criterios médicos adecuados. En Frequens realizamos una historia clínica detallada antes de iniciar cualquier tratamiento.',
				},
				{
					question: '¿Tiene efectos secundarios?',
					answer:
						'Generalmente son leves y transitorios, como molestias locales, mareo o sensación de cansancio, especialmente en las primeras sesiones. Todo se monitorea y se ajusta si es necesario.',
				},
				{
					question: '¿Qué pasa si convulsiono durante el tratamiento?',
					answer:
						'El riesgo es menor al 0.1%. Aun así, no tratamos personas con antecedentes de epilepsia o convulsiones. Nuestro equipo está capacitado para responder ante cualquier situación.',
				},
				{
					question: '¿Puede provocar convulsiones aunque nunca haya tenido?',
					answer:
						'En personas sin antecedentes, el riesgo es extremadamente bajo. Por eso realizamos una evaluación exhaustiva antes de indicar el tratamiento.',
				},
			],
		},
		{
			title: 'Contraindicaciones e Implantes',
			faqs: [
				{
					question: '¿Para quiénes no está indicada la EMT?',
					answer:
						'La EMT no está indicada para personas con antecedentes de epilepsia o convulsiones, con traumatismo craneoencefálico reciente, durante el embarazo o con ciertos implantes metálicos o electrónicos.',
				},
				{
					question: '¿Es apta para personas con implantes metálicos?',
					answer:
						'Depende del tipo y la ubicación del implante. No hay problema si se trata de amalgamas dentales, implantes dentales, implantes de titanio o implantes metálicos que se encuentren del pecho hacia abajo. La EMT no es apta para personas con implantes metálicos o electrónicos en cabeza, cuello o pecho (por ejemplo, marcapasos, estimuladores cerebrales, clips aneurismáticos), ya que el campo magnético podría interferir con ellos.',
				},
			],
		},
		{
			title: 'Resultados y Expectativas',
			faqs: [
				{
					question: '¿En cuánto tiempo se empiezan a ver resultados?',
					answer:
						'Generalmente los primeros cambios se observan a partir de la segunda semana de tratamiento. Al inicio pueden ser cambios sutiles —mejor sueño, mayor calma, menos saturación— y con el avance de las sesiones se vuelven más claros y estables.',
				},
				{
					question: '¿Cómo sabré si me está funcionando?',
					answer:
						'A través de mediciones clínicas, seguimiento continuo y los cambios que empiezas a notar en tu día a día. Muchas veces los avances se reflejan en situaciones que antes eran más difíciles y ahora se manejan con mayor facilidad.',
				},
				{
					question: '¿Qué tipo de mejoras puedo esperar?',
					answer:
						'Depende del motivo de consulta, pero comúnmente observamos mejoras en regulación emocional, atención, claridad mental, estado de ánimo, manejo del dolor, impulsividad y calidad de vida general.',
				},
				{
					question: '¿Funciona para todas las personas?',
					answer:
						'No. Por eso realizamos una evaluación previa para determinar si eres candidato.',
				},
				{
					question: '¿Qué pasa si no funciona en mi caso?',
					answer:
						'Revisamos el caso, ajustamos el protocolo o detenemos el tratamiento. Nuestro compromiso es la honestidad.',
				},
				{
					question: '¿Qué porcentaje de mejora suele verse?',
					answer:
						'En promedio se observan mejoras a partir del 40%, aunque esto varía según múltiples factores personales y clínicos.',
				},
				{
					question: '¿Los resultados son permanentes?',
					answer:
						'En muchos casos sí. Algunas personas se benefician de sesiones de mantenimiento, especialmente en periodos de alto estrés.',
				},
			],
		},
		{
			title: 'Diagnósticos y Combinación con Otros Tratamientos',
			faqs: [
				{
					question:
						'¿Funciona para TDAH, autismo, ansiedad, depresión o dolor crónico?',
					answer:
						'Sí. Contamos con protocolos específicos para TDAH, autismo, ansiedad, depresión, fibromialgia y dolor crónico, entre otras condiciones.',
				},
				{
					question: '¿Reemplaza la terapia psicológica o la medicación?',
					answer:
						'No necesariamente. Puede complementar otros tratamientos y, en algunos casos, ayudar a reducir medicación siempre en coordinación con el médico tratante.',
				},
				{
					question:
						'¿Qué pasa si ya he probado muchas cosas y nada me funcionó?',
					answer:
						'Muchas personas llegan a Frequens después de intentarlo todo. La EMT ofrece una vía distinta al actuar directamente sobre el cerebro.',
				},
			],
		},
		{
			title: 'Dudas Emocionales y Confianza',
			faqs: [
				{
					question: '¿Y si gasto mucho dinero y no funciona?',
					answer:
						'Es una preocupación válida. Por eso evaluamos primero si eres candidato y alineamos expectativas desde el inicio.',
				},
				{
					question: '¿Cómo sé que no me están vendiendo algo innecesario?',
					answer:
						'Si no creemos que el tratamiento sea adecuado para ti, te lo diremos con claridad.',
				},
				{
					question: '¿Por qué confiar en Frequens?',
					answer:
						'Por nuestro enfoque ético, científico y profundamente humano, y por acompañarte durante todo el proceso.',
				},
				{
					question: '¿Por qué elegir Frequens y no otra clínica?',
					answer:
						'Porque ponemos al paciente en el centro, explicamos todo con claridad, cuidamos las contraindicaciones y trabajamos con rigor científico y calidez humana.',
				},
			],
		},
	],
};
