import { SubjectId } from './curriculumData';

export interface FormulaOrRuleBox {
  id: string;
  title: string;
  formulaExpression: string;
  explanation: string;
  exampleCalculation: string;
}

export interface StudyUnitNotes {
  id: string;
  subject: SubjectId;
  subjectName: string;
  trimester: '1º Trimestre' | '2º Trimestre' | '3º Trimestre';
  unitNumber: string;
  title: string;
  quickSummary: string;
  detailedNotes: {
    heading: string;
    points: string[];
  }[];
  importantFormulas: FormulaOrRuleBox[];
  examTips: string[];
}

export interface GlossaryTerm {
  id: string;
  term: string;
  englishAudioText?: string;
  subject: 'ingles' | 'matematicas' | 'conocimiento';
  subjectLabel: string;
  subCategory:
    | 'Vocabulario Esencial'
    | 'Gramática'
    | 'Operaciones y Cálculo'
    | 'Resolución y Geometría'
    | 'Naturaleza y Seres Vivos'
    | 'Sociedad, Geografía e Historia';
  clearDefinition: string;
  example: string;
  memoryTrickOrFormula: string;
  visualIconType:
    | 'multiplication-grid'
    | 'math-problem-steps'
    | 'division-share'
    | 'fraction-pie'
    | 'geometry-area'
    | 'decimal-scale'
    | 'eng-verb-s'
    | 'eng-question-does'
    | 'eng-vocab-nature'
    | 'eng-past-clock'
    | 'eng-comparative'
    | 'eng-there-is-are'
    | 'sci-ecosystem'
    | 'sci-photosynthesis'
    | 'sci-cell'
    | 'sci-society-population'
    | 'sci-river-relief'
    | 'sci-sectors-huerta';
}

export const COMPLETE_STUDY_UNITS: StudyUnitNotes[] = [
  // ==========================================
  // MATEMÁTICAS · 5º DE PRIMARIA (TEMARIO COMPLETO)
  // ==========================================
  {
    id: 'notes-math-1',
    subject: 'matematicas',
    subjectName: 'Matemáticas',
    trimester: '1º Trimestre',
    unitNumber: 'Unidad 1 y 2',
    title: 'Números Naturales, Multiplicación, División y Operaciones Combinadas',
    quickSummary:
      'En este bloque aprendemos a multiplicar por varias cifras entendiendo el valor de las decenas y centenas, a dividir repartiendo en partes iguales (y comprobar con la Prueba de la División), y a respetar el orden estricto de las operaciones combinadas (PAPOMUDAS).',
    detailedNotes: [
      {
        heading: '1. La Multiplicación y sus Propiedades',
        points: [
          'Multiplicar es sumar varias veces el mismo número de forma rápida (ej. 7 × 8 es sumar 7 veces el número 8).',
          'Propiedad Conmutativa: El orden de los factores no cambia el producto (7 × 8 = 8 × 7 = 56).',
          'Propiedad Asociativa: Para multiplicar tres números, agrupamos dos primero: (2 × 5) × 9 = 10 × 9 = 90.',
          'Propiedad Distributiva: Multiplicar un número por una suma es igual a multiplicar ese número por cada sumando: 6 × (10 + 4) = (6 × 10) + (6 × 4) = 60 + 24 = 84.',
        ],
      },
      {
        heading: '2. La División Exacta e Inexacta (Entera)',
        points: [
          'Dividir es repartir una cantidad total (Dividendo) en partes iguales (Divisor).',
          'División Exacta: Cuando el resto es cero (r = 0). Ejemplo: 56 ÷ 8 = 7 y sobra 0.',
          'División Entera o Inexacta: Cuando sobra algo en el resto (r > 0). ¡Importante!: El resto SIEMPRE tiene que ser más pequeño que el divisor (r < d).',
        ],
      },
      {
        heading: '3. Jerarquía de las Operaciones Combinadas',
        points: [
          'Nunca calcules de izquierda a derecha sin mirar antes los signos.',
          'Paso 1: Resuelve primero lo que está dentro de los PARÉNTESIS ( ).',
          'Paso 2: Haz las MULTIPLICACIONES (×) y DIVISIONES (÷) en el orden en que aparecen.',
          'Paso 3: Por último, haz las SUMAS (+) y RESTAS (-) de izquierda a derecha.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'form-math-div',
        title: 'Fórmula de la Prueba de la División',
        formulaExpression: 'D = (d × c) + r   (con r < d)',
        explanation:
          'Dividendo (D) es igual a Divisor (d) multiplicado por Cociente (c) más el Resto (r).',
        exampleCalculation:
          'Si dividimos 47 ÷ 5: cociente c = 9 y resto r = 2. Prueba: (5 × 9) + 2 = 45 + 2 = 47 ✓',
      },
      {
        id: 'form-math-dist',
        title: 'Fórmula de la Propiedad Distributiva (Cálculo Mental)',
        formulaExpression: 'a × (b + c) = (a × b) + (a × c)',
        explanation:
          'Permite romper números grandes en decenas + unidades para multiplicar de cabeza sin equivocarse.',
        exampleCalculation:
          '8 × 14 = 8 × (10 + 4) = (8 × 10) + (8 × 4) = 80 + 32 = 112',
      },
      {
        id: 'form-math-papo',
        title: 'Regla de Prioridad de Operaciones',
        formulaExpression: '1º (Paréntesis)  →  2º × y ÷  →  3º + y -',
        explanation:
          'Si hay paréntesis, van primero. Después multiplicaciones y divisiones. Al final sumas y restas.',
        exampleCalculation:
          '20 - (3 + 2) × 3 = 20 - 5 × 3 = 20 - 15 = 5',
      },
    ],
    examTips: [
      'Antes de entregar el examen, haz SIEMPRE la prueba de la división (d × c + r) para asegurarte un 10.',
      'Cuando multipliques por dos cifras (ej. por 24), recuerda dejar el hueco de las unidades al multiplicar por la decena (el 2).',
    ],
  },
  {
    id: 'notes-math-2',
    subject: 'matematicas',
    subjectName: 'Matemáticas',
    trimester: '2º Trimestre',
    unitNumber: 'Unidad 3 y 4',
    title: 'Las Fracciones, Números Decimales y Porcentajes Básicos',
    quickSummary:
      'Estudiamos cómo expresar partes de la unidad mediante fracciones (numerador y denominador) y números decimales (décimas, centésimas y milésimas), cómo comparar quién es mayor y cómo calcular la fracción de un número total.',
    detailedNotes: [
      {
        heading: '1. Las Fracciones y sus Términos',
        points: [
          'Denominador (abajo): Indica en cuántas partes iguales se divide la unidad total.',
          'Numerador (arriba): Indica cuántas partes tomamos o coloreamos.',
          'Fracción Propia (< 1): El numerador es menor que el denominador (ej. 3/4 de pizza).',
          'Fracción Impropia (> 1): El numerador es mayor que el denominador (ej. 7/4, es más de una pizza entera).',
        ],
      },
      {
        heading: '2. Fracciones Equivalentes y Suma/Resta',
        points: [
          'Dos fracciones son equivalentes si representan la misma cantidad (ej. 1/2 = 2/4 = 4/8). Se comprueba multiplicando en cruz.',
          'Para sumar o restar fracciones con el MISMO denominador, dejamos el mismo denominador abajo y sumamos o restamos los numeradores de arriba.',
        ],
      },
      {
        heading: '3. Los Números Decimales y el Dinero',
        points: [
          'Un número decimal tiene Parte Entera (a la izquierda de la coma) y Parte Decimal (a la derecha: décimas, centésimas, milésimas).',
          'Para sumar o restar decimales, coloca los números de modo que las COMAS queden exactamente una debajo de otra en columna.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'form-math-frac-num',
        title: 'Fórmula de la Fracción de una Cantidad',
        formulaExpression: '(a / b) de N = (N ÷ b) × a',
        explanation:
          'Para hallar una fracción de un número N: divide el número entre el denominador de abajo (b) y multiplica el resultado por el numerador de arriba (a).',
        exampleCalculation:
          '3/4 de 120 = (120 ÷ 4) × 3 = 30 × 3 = 90',
      },
      {
        id: 'form-math-equiv',
        title: 'Comprobación de Fracciones Equivalentes (Productos Cruzados)',
        formulaExpression: 'a / b = c / d   ⟺   a × d = b × c',
        explanation:
          'Al multiplicar en cruz, los dos resultados deben dar exactamente el mismo número.',
        exampleCalculation:
          '¿Son equivalentes 2/3 y 6/9? Multiplicamos en cruz: 2 × 9 = 18 y 3 × 6 = 18. ¡Sí son equivalentes!',
      },
      {
        id: 'form-math-dec-mult',
        title: 'Multiplicar o Dividir por 10, 100 y 1.000',
        formulaExpression: '× 10, 100 (Coma a la derecha →)  |  ÷ 10, 100 (Coma a la izquierda ←)',
        explanation:
          'Desplaza la coma tantos lugares como ceros acompañen a la unidad.',
        exampleCalculation:
          '3,45 × 10 = 34,5   |   3,45 × 100 = 345   |   45 ÷ 10 = 4,5',
      },
    ],
    examTips: [
      'Recuerda: "Abajo DIVIDE, arriba MULTIPLICA" para calcular la fracción de un número en los problemas.',
      'Al restar decimales como 15 - 3,42, escribe 15,00 arriba para no olvidarte de pedir prestado en las centésimas.',
    ],
  },
  {
    id: 'notes-math-3',
    subject: 'matematicas',
    subjectName: 'Matemáticas',
    trimester: '3º Trimestre',
    unitNumber: 'Unidad 5 y 6',
    title: 'Unidades de Medida, Geometría, Perímetros y Áreas de Figuras Planas',
    quickSummary:
      'Aprendemos la escalera del Sistema Métrico Decimal (longitud, masa y capacidad) y las fórmulas geométricas para calcular el borde (Perímetro) y la superficie interior (Área) de polígonos y triángulos.',
    detailedNotes: [
      {
        heading: '1. La Escalera de Unidades (Longitud, Masa y Capacidad)',
        points: [
          'Longitud (metro - m), Masa (gramo - g) y Capacidad (litro - l) funcionan con la misma escalera de 7 peldaños: km - hm - dam - m - dm - cm - mm.',
          'Bajar la escalera = MULTIPLICAR por 10 en cada escalón (¡bajar es fácil, multiplicas!).',
          'Subir la escalera = DIVIDIR entre 10 en cada escalón.',
        ],
      },
      {
        heading: '2. Diferencia entre Perímetro y Área',
        points: [
          'PERÍMETRO (P): Es la longitud del borde o valla exterior que rodea una figura. Se calcula SUMANDO lo que miden todos sus lados (se mide en m, cm...).',
          'ÁREA (A): Es la superficie interior (como el césped dentro del campo o las baldosas del suelo). Se calcula con fórmulas de multiplicación y se mide en unidades cuadradas (m², cm²).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'form-math-perim',
        title: 'Fórmula del Perímetro de Cualquier Polígono',
        formulaExpression: 'P = Suma de todos sus lados  |  Rectángulo: P = (2 × b) + (2 × h)',
        explanation:
          'Suma la medida de cada lado que rodea la figura.',
        exampleCalculation:
          'Huerto rectangular de 8 m de base y 5 m de altura: P = 8 + 5 + 8 + 5 = 26 metros de valla.',
      },
      {
        id: 'form-math-area-rect',
        title: 'Fórmula del Área del Cuadrado y del Rectángulo',
        formulaExpression: 'Área Rectángulo = base × altura (b × h)  |  Área Cuadrado = lado × lado (l²)',
        explanation:
          'Multiplicamos los metros de largo (base) por los metros de ancho (altura).',
        exampleCalculation:
          'Si el aula mide 9 m de base y 6 m de ancho: Área = 9 × 6 = 54 m².',
      },
      {
        id: 'form-math-area-tri',
        title: 'Fórmula del Área del Triángulo',
        formulaExpression: 'Área Triángulo = (base × altura) ÷ 2',
        explanation:
          'Un triángulo es exactamente la mitad de un rectángulo. Por eso multiplicamos base por altura y dividimos entre 2.',
        exampleCalculation:
          'Triángulo de base 10 cm y altura 6 cm: Área = (10 × 6) ÷ 2 = 60 ÷ 2 = 30 cm².',
      },
    ],
    examTips: [
      'No olvides poner el "²" (cuadrados, ej. cm² o m²) cuando escribas el resultado de un ÁREA.',
      'En el área del triángulo, ¡nunca te olvides de dividir entre 2 al final!',
    ],
  },

  // ==========================================
  // INGLÉS · 5º DE PRIMARIA (TEMARIO COMPLETO)
  // ==========================================
  {
    id: 'notes-eng-1',
    subject: 'ingles',
    subjectName: 'Inglés',
    trimester: '1º Trimestre',
    unitNumber: 'Units 1 & 2',
    title: 'Present Simple, Adverbios de Frecuencia y Present Continuous',
    quickSummary:
      'Dominamos cómo hablar de nuestras rutinas diarias (Present Simple con la Super-S en He/She/It y el auxiliar DO/DOES) y cómo diferenciarlo de lo que está ocurriendo en este mismo instante (Present Continuous con AM/IS/ARE + verbo con -ING).',
    detailedNotes: [
      {
        heading: '1. Present Simple (Rutinas, horarios y verdades generales)',
        points: [
          'Lo usamos cuando aparecen palabras como: every day (todos los días), always (siempre), usually (normalmente), often (a menudo), sometimes (a veces), never (nunca) o los días (on Mondays).',
          'En AFIRMATIVA (+): Con I, You, We, They el verbo va normal (I play). Con HE, SHE, IT le añadimos "-S" o "-ES" (She plays, He watches, It goes).',
          'En NEGATIVA (-): Usamos DON\'T (para I/you/we/they) y DOESN\'T (para he/she/it). ¡Al poner DOESN\'T, el verbo pierde la -s! (She doesn\'t play).',
          'En INTERROGATIVA (?): Ponemos DO o DOES delante del sujeto: "Does your brother live in Museros? Yes, he does / No, he doesn\'t."',
        ],
      },
      {
        heading: '2. Present Continuous (Lo que pasa AHORA MISMO)',
        points: [
          'Lo usamos con las palabras clave: NOW (ahora), RIGHT NOW (ahora mismo), AT THE MOMENT (en este momento), LOOK! (¡mira!), LISTEN! (¡escucha!).',
          'Siempre necesita dos piezas: el verbo TO BE (am / is / are) + el verbo principal terminado en -ING.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'form-eng-ps',
        title: 'Fórmula del Present Simple (Rutinas)',
        formulaExpression: '(+) Sujeto + Verbo (-s en He/She/It)  |  (-) Sujeto + don\'t / doesn\'t + Verbo  |  (?) Do / Does + Sujeto + Verbo?',
        explanation:
          'Recuerda que en negativa (?) e interrogativa (-), DOES ya lleva la -S, así que el verbo vuelve a su forma base sin -s.',
        exampleCalculation:
          '(+) Lucas plays tennis.  →  (-) Lucas doesn\'t play tennis.  →  (?) Does Lucas play tennis?',
      },
      {
        id: 'form-eng-pc',
        title: 'Fórmula del Present Continuous (Ahora mismo)',
        formulaExpression: '(+) Sujeto + am / is / are + Verbo-ING  |  (?) Am / Is / Are + Sujeto + Verbo-ING?',
        explanation:
          'I am (I\'m) · He/She/It is (\'s) · You/We/They are (\'re) + Verbo con -ing.',
        exampleCalculation:
          '(+) They are studying English now.  →  (?) Are they studying English now?',
      },
    ],
    examTips: [
      'Busca siempre la palabra pista temporal en la frase del examen: si dice "every day" o "usually" → Present Simple. Si dice "now" o "at the moment" → Present Continuous (am/is/are + -ing).',
    ],
  },
  {
    id: 'notes-eng-2',
    subject: 'ingles',
    subjectName: 'Inglés',
    trimester: '2º Trimestre',
    unitNumber: 'Units 3 & 4',
    title: 'Descripciones: There is / There are, Some / Any y Adjetivos Comparativos y Superlativos',
    quickSummary:
      'Aprendemos a describir qué hay en un lugar o ciudad usando There is (singular) y There are (plural), cuándo usar some/any, y cómo comparar personas, animales o cosas con adjetivos cortos (-er / the -est) y largos (more / the most).',
    detailedNotes: [
      {
        heading: '1. There is y There are + A/An, Some y Any',
        points: [
          'THERE IS significa "Hay" para 1 sola cosa (singular) o cosas incontables (agua, leche, dinero): "There is a school in my town" / "There is some water".',
          'THERE ARE significa "Hay" para 2 o más cosas (plural): "There are twenty-five students".',
          'SOME se usa en frases AFIRMATIVAS (+) para decir "algunos/as" o "algo de": "There are some apples".',
          'ANY se usa en frases NEGATIVAS (-) y en PREGUNTAS (?): "There aren\'t any cars" / "Are there any parks?".',
        ],
      },
      {
        heading: '2. Comparativos (Más... que) y Superlativos (El más...)',
        points: [
          'Adjetivos CORTOS (1 sílaba o 2 acabadas en -y, como tall, fast, big, happy): añadimos -ER THAN para comparar dos cosas, y THE -EST para el superlativo.',
          'Adjetivos LARGOS (2 o más sílabas, como intelligent, beautiful, dangerous, comfortable): ponemos MORE ... THAN para comparar, y THE MOST ... para el superlativo.',
          'Irregulares que cambian enteros: Good (bueno) → BETTER than (mejor que) → THE BEST (el mejor) | Bad (malo) → WORSE than (peor que) → THE WORST (el peor).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'form-eng-comp',
        title: 'Fórmula de los Adjetivos Comparativos (A es más ... que B)',
        formulaExpression: 'Cortos: Adjetivo + "-er" + than   |   Largos: "more" + Adjetivo + than',
        explanation:
          'Si el adjetivo acaba en consonante-vocal-consonante (como big o hot), dobla la última letra: bigger than, hotter than. Si acaba en -y (happy), cambia a -ier: happier than.',
        exampleCalculation:
          'A cheetah is FASTER THAN a horse.  |  Sharks are MORE DANGEROUS THAN dolphins.',
      },
      {
        id: 'form-eng-sup',
        title: 'Fórmula de los Adjetivos Superlativos (El más ... de todos)',
        formulaExpression: 'Cortos: "the" + Adjetivo + "-est"   |   Largos: "the most" + Adjetivo',
        explanation:
          'Nunca olvides escribir "THE" delante de un superlativo.',
        exampleCalculation:
          'Mount Everest is THE HIGHEST mountain.  |  This is THE MOST INTERESTING book.',
      },
    ],
    examTips: [
      'Si ves la palabra "THAN" detrás del hueco en el examen, es 100% un COMPARATIVO (-er o more). Si ves "THE" delante del hueco, es un SUPERLATIVO (-est o most).',
    ],
  },
  {
    id: 'notes-eng-3',
    subject: 'ingles',
    subjectName: 'Inglés',
    trimester: '3º Trimestre',
    unitNumber: 'Units 5 & 6',
    title: 'El Pasado (Past Simple: Was/Were, Verbos Regulares -ed e Irregulares) y Futuro (Going to)',
    quickSummary:
      'Estudiamos cómo contar historias del pasado (ayer, la semana pasada) usando Was/Were, verbos regulares terminados en -ed y verbos irregulares frecuentes, con el auxiliar DID / DIDN\'T, además de planes futuros con Be going to.',
    detailedNotes: [
      {
        heading: '1. Past Simple del Verbo To Be: WAS y WERE',
        points: [
          'WAS (era / estaba) se usa con I, He, She, It: "Yesterday I was at school". Negativa: WASN\'T.',
          'WERE (éramos / estabais / eran) se usa con You, We, They: "We were very happy". Negativa: WEREN\'T.',
        ],
      },
      {
        heading: '2. Past Simple de todos los demás verbos (-ED e Irregulares)',
        points: [
          'Palabras clave del pasado: yesterday (ayer), last week/month/year (la semana/mes/año pasado), two days ago (hace dos días).',
          'En AFIRMATIVA (+): Si el verbo es regular le añadimos -ED (play → played, visit → visited, study → studied). Si es irregular cambia su forma (go → went, see → saw, have → had, eat → ate, buy → bought, make → made).',
          'En NEGATIVA (-) e INTERROGATIVA (?): Aparece el super-auxiliar DID / DIDN\'T y el verbo vuelve a su forma normal de presente (¡sin -ed ni forma irregular!).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'form-eng-past',
        title: 'Fórmula del Past Simple (Pasado con DID)',
        formulaExpression: '(+) Sujeto + Verbo-ed (o Irregular)  |  (-) Sujeto + didn\'t + Verbo base  |  (?) Did + Sujeto + Verbo base?',
        explanation:
          'Solo usamos la forma en pasado (-ed o irregular como went/saw) en frases AFIRMATIVAS (+). En cuanto entra DID o DIDN\'T, el verbo vuelve al infinitivo.',
        exampleCalculation:
          '(+) She WENT to Valencia yesterday.  →  (-) She DIDN\'T GO to Valencia.  →  (?) DID she GO to Valencia?',
      },
      {
        id: 'form-eng-goingto',
        title: 'Fórmula de Planes Futuros (Be going to · "Voy a...")',
        formulaExpression: 'Sujeto + am / is / are + going to + Verbo',
        explanation:
          'Se usa para planes e intenciones futuras (este verano, mañana).',
        exampleCalculation:
          'I am going to visit my grandparents tomorrow.  |  She is going to play basketball.',
      },
    ],
    examTips: [
      '¡Trampa clásica de examen!: Nunca escribas "She didn\'t went" ni "Did you played?". Con DID o DIDN\'T siempre se escribe el verbo normal: "She didn\'t go" y "Did you play?".',
    ],
  },

  // ==========================================
  // CONOCIMIENTO DEL MEDIO · 5º DE PRIMARIA (TEMARIO COMPLETO)
  // ==========================================
  {
    id: 'notes-sci-1',
    subject: 'conocimiento',
    subjectName: 'Conocimiento del Medio',
    trimester: '1º Trimestre',
    unitNumber: 'Unidades 1 y 2',
    title: 'Los Seres Vivos, la Célula, los 5 Reinos, las Plantas y los Ecosistemas',
    quickSummary:
      'Todo ser vivo realiza las 3 funciones vitales (Nutrición, Relación y Reproducción) y está formado por células. Estudiamos cómo se organizan los 5 reinos, cómo hacen las plantas la fotosíntesis y cómo funciona un ecosistema (Biotopo + Biocenosis).',
    detailedNotes: [
      {
        heading: '1. La Célula y los Niveles de Organización',
        points: [
          'La CÉLULA es la unidad viva más pequeña. Todas tienen 3 partes esenciales: Membrana (envoltura exterior), Citoplasma (líquido interior con orgánulos) y Núcleo (dirige la célula y guarda el ADN).',
          'Las células vegetales tienen además Pared Celular rígida y Cloroplastos verdes para hacer la fotosíntesis.',
          'Orden de organización (de menor a mayor): 1º Célula → 2º Tejido (conjunto de células iguales, ej. tejido muscular) → 3º Órgano (ej. corazón, estómago) → 4º Aparato o Sistema (ej. aparato digestivo) → 5º Organismo (ser vivo completo).',
        ],
      },
      {
        heading: '2. Los 5 Reinos de los Seres Vivos',
        points: [
          '1. Reino Animales: Pluricelulares, heterótrofos (se alimentan de otros) y se desplazan.',
          '2. Reino Plantas: Pluricelulares, autótrofos (fabrican su alimento con la fotosíntesis) y viven fijos al suelo.',
          '3. Reino Hongos (Setas, mohos y levaduras): No son plantas porque NO hacen la fotosíntesis; se alimentan descomponiendo restos.',
          '4. Reino Protoctistas: Incluye los protozoos (unicelulares microscópicos) y las algas (autótrofas acuáticas).',
          '5. Reino Moneras (Bacterias): Son los seres más sencillos y pequeños, unicelulares procariotas (sin núcleo definido).',
        ],
      },
      {
        heading: '3. La Fotosíntesis y la Respiración de las Plantas',
        points: [
          'Savia Bruta (agua + sales minerales) sube desde la raíz por los vasos leñosos (XILEMA) hasta las hojas.',
          'En las hojas entra dióxido de carbono (CO₂) por los estomas y, gracias a la luz del Sol y la clorofila verde, se transforma en Savia Elaborada (azúcares) y la planta libera OXÍGENO (O₂) al aire.',
          'La Savia Elaborada se reparte por toda la planta a través de los vasos liberianos (FLOEMA).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'form-sci-foto',
        title: 'Ecuación Visual de la Fotosíntesis',
        formulaExpression: 'Agua + Sales Minerales (Savia Bruta) + CO₂ + Luz Solar  ⟶  Savia Elaborada (Alimento) + Oxígeno (O₂ ↑)',
        explanation:
          'Durante el día, la planta realiza la fotosíntesis consumiendo CO₂ y regalándonos Oxígeno (O₂).',
        exampleCalculation:
          'Xilema = Sube Savia Bruta (Raíz → Hoja)   |   Floema = Reparte Savia Elaborada (Hoja → Toda la planta)',
      },
      {
        id: 'form-sci-eco',
        title: 'Fórmula del Ecosistema y la Cadena Alimentaria (Trófica)',
        formulaExpression: 'Ecosistema = Biotopo (Sin vida) + Biocenosis (Seres vivos) + Relaciones (P → C → D)',
        explanation:
          'Flujo de la cadena trófica: 1º Productores (plantas) → 2º Consumidores Primarios (herbívoros) → 3º Consumidores Secundarios (carnívoros) → 4º Descomponedores (hongos y bacterias).',
        exampleCalculation:
          'En la Albufera: Planta de arroz (Productor) → Insecto/Ave herbívora (Consumidor 1º) → Garza real (Consumidor 2º) → Bacterias del fondo (Descomponedor).',
      },
    ],
    examTips: [
      'Recuerda la escala de 5 peldaños: C-T-O-A-O (Célula → Tejido → Órgano → Aparato → Organismo).',
      'No confundas Hongos con Plantas: los hongos NO hacen la fotosíntesis.',
    ],
  },
  {
    id: 'notes-sci-2',
    subject: 'conocimiento',
    subjectName: 'Conocimiento del Medio',
    trimester: '2º Trimestre',
    unitNumber: 'Unidades 3 y 4',
    title: 'El Cuerpo Humano (Nutrición y Relación), la Materia, las Fuerzas y la Energía',
    quickSummary:
      'Comprendemos cómo trabajan en equipo los 4 aparatos de la Nutrición (Digestivo, Respiratorio, Circulatorio y Excretor), cómo funcionan los órganos de los sentidos, el sistema nervioso y el locomotor, y las propiedades de la materia (masa, volumen y densidad).',
    detailedNotes: [
      {
        heading: '1. La Función de Nutrición (Sigla D-R-C-E)',
        points: [
          '1. Aparato Digestivo: Transforma los alimentos en nutrientes que pasan a la sangre en el intestino delgado.',
          '2. Aparato Respiratorio: Obtiene el oxígeno (O₂) del aire en los alvéolos pulmonares y expulsa el CO₂.',
          '3. Aparato Circulatorio: El corazón bombea la sangre por arterias (salen del corazón), venas (vuelven al corazón) y capilares para llevar nutrientes y O₂ a cada célula.',
          '4. Aparato Excretor: Los riñones filtran la sangre, limpian los desechos y forman la orina; las glándulas sudoríparas expulsan el sudor.',
        ],
      },
      {
        heading: '2. La Materia: Masa, Volumen y Densidad',
        points: [
          'Toda la materia tiene dos propiedades generales: MASA (cantidad de materia, se mide en kilogramos kg o gramos g con una balanza) y VOLUMEN (espacio que ocupa, se mide en litros l o cm³ con una probeta).',
          'DENSIDAD: Explica por qué un corcho flota en el agua y una piedra se hunde. Si la densidad de un objeto es MENOR que la del agua (1 g/cm³), flota; si es MAYOR, se hunde.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'form-sci-densidad',
        title: 'Fórmula de la Densidad de la Materia',
        formulaExpression: 'Densidad (d) = Masa (m) ÷ Volumen (V)',
        explanation:
          'Se obtiene dividiendo la masa de un cuerpo (en gramos o kg) entre el volumen que ocupa (en cm³ o litros).',
        exampleCalculation:
          'Si un bloque de madera tiene una masa de 120 g y un volumen de 200 cm³: d = 120 ÷ 200 = 0,6 g/cm³. Como es menor que 1 (agua), ¡flota!',
      },
      {
        id: 'form-sci-relacion',
        title: 'Esquema de la Función de Relación',
        formulaExpression: '1º Órganos de los Sentidos (Captan información) → 2º Sistema Nervioso (Cerebro decide) → 3º Aparato Locomotor (Huesos y músculos actúan)',
        explanation:
          'Los nervios sensitivos llevan el mensaje al cerebro y los nervios motores llevan la orden a los músculos.',
        exampleCalculation:
          'Mis ojos ven el balón (Sentidos) → El cerebro calcula el salto (Nervioso) → Mis piernas saltan y paran el balón (Locomotor).',
      },
    ],
    examTips: [
      'Si en el examen preguntan "¿Qué aparatos realizan la nutrición?", responde SIEMPRE los 4: Digestivo, Respiratorio, Circulatorio y Excretor.',
    ],
  },
  {
    id: 'notes-sci-3',
    subject: 'conocimiento',
    subjectName: 'Conocimiento del Medio',
    trimester: '3º Trimestre',
    unitNumber: 'Unidades 5 y 6',
    title: 'Geografía, Clima, Población, Sectores Económicos e Historia (Edad Media y Moderna)',
    quickSummary:
      'Estudiamos el relieve y ríos de España y de la Comunitat Valenciana, cómo se calcula el crecimiento y la densidad de población (demografía), los 3 sectores económicos y las etapas de la Historia.',
    detailedNotes: [
      {
        heading: '1. Relieve y Ríos de España y la Comunitat Valenciana',
        points: [
          'En el centro de la Península está la Meseta Central (dividida por el Sistema Central en Submeseta Norte y Sur).',
          'En la Comunitat Valenciana destacan el Sistema Ibérico al norte e interior (Sierra Calderona, cerca de Museros, y Penyagolosa), los Sistemas Béticos al sur (Aitana, Mariola) y la llanura litoral junto al mar Mediterráneo.',
          'Los ríos valencianos (Mijares, Palancia, Turia, Júcar, Segura) pertenecen a la vertiente mediterránea: son cortos y de régimen irregular (estiaje en verano y crecidas en otoño).',
        ],
      },
      {
        heading: '2. Sociedad: Población y Los 3 Sectores Económicos',
        points: [
          'Sector Primario: Obtiene recursos directamente de la naturaleza (agricultura como los naranjos y hortalizas de l\'Horta de Museros, ganadería, pesca y minería).',
          'Sector Secundario: Transforma las materias primas en productos elaborados (fábricas, industria, artesanía y construcción).',
          'Sector Terciario o Servicios: No fabrica objetos, sino que presta servicios a las personas (colegios, hospitales, transporte, comercio, turismo).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'form-sci-dens-pob',
        title: 'Fórmula de la Densidad de Población (Demografía)',
        formulaExpression: 'Densidad de Población = Número de Habitantes ÷ Superficie en km²   (hab./km²)',
        explanation:
          'Indica si un municipio o país está muy poblado o despoblado.',
        exampleCalculation:
          'Si un pueblo tiene 6.800 habitantes y una superficie de 12 km²: Densidad = 6.800 ÷ 12 ≈ 566 hab./km².',
      },
      {
        id: 'form-sci-crec',
        title: 'Fórmulas del Crecimiento Natural y Real de la Población',
        formulaExpression: 'Crecimiento Natural = Nacimientos - Defunciones  |  Saldo Migratorio = Inmigrantes - Emigrantes',
        explanation:
          'El Crecimiento Real es la suma del Crecimiento Natural más el Saldo Migratorio.',
        exampleCalculation:
          'Si nacen 80 bebés y mueren 50 personas: Crecimiento Natural = 80 - 50 = +30 habitantes.',
      },
    ],
    examTips: [
      'Recuerda: IN-migrante es el que llega a vivir a nuestro pueblo (entra = suma +); E-migrante es el que se marcha a vivir fuera (sale = resta -).',
    ],
  },
];

export const INTERACTIVE_GLOSSARY_TERMS: GlossaryTerm[] = [
  // ==========================================
  // GLOSARIO DE MATEMÁTICAS
  // ==========================================
  {
    id: 'glos-math-multiplicacion',
    term: 'Multiplicación',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    subCategory: 'Operaciones y Cálculo',
    clearDefinition:
      'Operación matemática que consiste en sumar un mismo número (llamado factor) tantas veces como indica otro número. Los números que se multiplican se llaman FACTORES y el resultado se llama PRODUCTO.',
    example:
      'En lugar de sumar 8 + 8 + 8 + 8 + 8 + 8 + 8, hacemos la multiplicación 7 × 8 = 56 (7 y 8 son los factores; 56 es el producto).',
    memoryTrickOrFormula:
      'Fórmula: Factor × Factor = Producto  |  Propiedad Conmutativa: a × b = b × a (7 × 8 = 8 × 7).',
    visualIconType: 'multiplication-grid',
  },
  {
    id: 'glos-math-problema',
    term: 'Problema Matemático',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    subCategory: 'Resolución y Geometría',
    clearDefinition:
      'Situación de la vida real que nos cuenta unos DATOS conocidos y nos hace una PREGUNTA final que debemos descubrir eligiendo y calculando una o varias operaciones matemáticas.',
    example:
      'Problema: "En el colegio Blasco Ibáñez hay 4 clases de Primaria con 22 alumnos cada una. ¿Cuántos alumnos hay en total?" → Datos: 4 clases de 22. Operación: 4 × 22. Solución: 88 alumnos.',
    memoryTrickOrFormula:
      'Método infalible D-O-S: 1º DATOS (subraya cifras y pregunta) → 2º OPERACIÓN (dibuja barras y elige +, -, ×, ÷) → 3º SOLUCIÓN (con su unidad).',
    visualIconType: 'math-problem-steps',
  },
  {
    id: 'glos-math-division',
    term: 'División (Dividendo, Divisor, Cociente y Resto)',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    subCategory: 'Operaciones y Cálculo',
    clearDefinition:
      'Operación inversa a la multiplicación que sirve para REPARTIR o agrupar una cantidad total (Dividendo) en partes iguales (Divisor), obteniendo cuánto toca a cada parte (Cociente) y cuánto sobra (Resto).',
    example:
      'Repartir 50 cromos entre 6 amigos: 50 ÷ 6 = 8 cromos para cada amigo (Cociente = 8) y sobran 2 cromos sin repartir (Resto = 2).',
    memoryTrickOrFormula:
      'Prueba de la división: Dividendo = (Divisor × Cociente) + Resto   →   50 = (6 × 8) + 2.',
    visualIconType: 'division-share',
  },
  {
    id: 'glos-math-fraccion',
    term: 'Fracción (Numerador y Denominador)',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    subCategory: 'Operaciones y Cálculo',
    clearDefinition:
      'Expresión que representa una o varias partes iguales de una unidad completa. El número de abajo (DENOMINADOR) dice en cuántos trozos iguales se parte el total, y el de arriba (NUMERADOR) dice cuántos trozos cogemos.',
    example:
      'Si partimos una empanada en 8 trozos iguales y comemos 3 trozos, hemos comido la fracción 3/8 (tres octavos).',
    memoryTrickOrFormula:
      'Fracción de un número: (a / b) de N = (N ÷ b) × a. ¡Abajo divide y arriba multiplica!',
    visualIconType: 'fraction-pie',
  },
  {
    id: 'glos-math-perimetro-area',
    term: 'Perímetro y Área',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    subCategory: 'Resolución y Geometría',
    clearDefinition:
      'El PERÍMETRO es la medida del contorno o borde exterior de una figura (como la valla de un jardín, en metros m). El ÁREA es la medida de la superficie interior (como el césped que cubre el suelo, en metros cuadrados m²).',
    example:
      'En una habitación rectangular de 5 m por 4 m: su Perímetro es 5 + 4 + 5 + 4 = 18 m, y su Área es 5 × 4 = 20 m².',
    memoryTrickOrFormula:
      'Perímetro = Sumar todos los lados (m)  |  Área Rectángulo = base × altura (m²).',
    visualIconType: 'geometry-area',
  },
  {
    id: 'glos-math-decimal',
    term: 'Número Decimal (Décima, Centésima, Milésima)',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    subCategory: 'Operaciones y Cálculo',
    clearDefinition:
      'Número que tiene una parte entera y una parte más pequeña que la unidad separadas por una coma. El primer número tras la coma son las décimas (dividir en 10), el segundo las centésimas (en 100) y el tercero las milésimas (en 1.000).',
    example:
      'Un refresco cuesta 1,45 €: tiene 1 unidad entera (1 euro), 4 décimas (40 céntimos) y 5 centésimas (5 céntimos).',
    memoryTrickOrFormula:
      '1 Unidad = 10 Décimas = 100 Centésimas = 1.000 Milésimas.',
    visualIconType: 'decimal-scale',
  },

  // ==========================================
  // GLOSARIO DE INGLÉS (VOCABULARIO Y GRAMÁTICA)
  // ==========================================
  {
    id: 'glos-eng-present-simple',
    term: 'Present Simple & "The Super -S"',
    englishAudioText: 'She plays football on Wednesdays. Does she play football?',
    subject: 'ingles',
    subjectLabel: 'Inglés',
    subCategory: 'Gramática',
    clearDefinition:
      'Tiempo verbal en inglés que usamos para hablar de hábitos, rutinas diarias y cosas que son siempre verdad. Su regla principal es que cuando el sujeto es HE (él), SHE (ella) o IT (ello), añadimos "-s" o "-es" al verbo en afirmativa.',
    example:
      'I play football every day (Yo juego), pero: My sister PLAYS football every day (Mi hermana juega).',
    memoryTrickOrFormula:
      'He / She / It → Verbo con -S en afirmativa (+). En negativa (-) e interrogativa (?) usamos DOESN\'T y DOES.',
    visualIconType: 'eng-verb-s',
  },
  {
    id: 'glos-eng-auxiliary-do-does',
    term: 'Auxiliary Verbs: DO / DOES / DID',
    englishAudioText: 'Do you like science? Does he like science? Did they go to school?',
    subject: 'ingles',
    subjectLabel: 'Inglés',
    subCategory: 'Gramática',
    clearDefinition:
      'Palabras ayudantes ("auxiliares") que en inglés se colocan al principio de las preguntas (?) o con "not" en las negativas (-). DO se usa con I/You/We/They, DOES con He/She/It, y DID para el pasado.',
    example:
      'Pregunta presente: "DOES your friend live in Museros?" · Pregunta pasado: "DID you watch the film yesterday?".',
    memoryTrickOrFormula:
      'Fórmula de toda pregunta en inglés: (Wh-) + DO / DOES / DID + Sujeto + Verbo sin cambios?',
    visualIconType: 'eng-question-does',
  },
  {
    id: 'glos-eng-there-is-are',
    term: 'There is / There are (Some & Any)',
    englishAudioText: 'There is a castle on the mountain. There are some trees in the park.',
    subject: 'ingles',
    subjectLabel: 'Inglés',
    subCategory: 'Gramática',
    clearDefinition:
      'Estructura gramatical que significa "HAY". Usamos THERE IS cuando hablamos de una sola cosa (singular) o algo incontable, y THERE ARE cuando hablamos de dos o más cosas (plural).',
    example:
      'Singular: "There is a computer on the desk." · Plural: "There are three books in my bag."',
    memoryTrickOrFormula:
      'There IS = 1 (Singular)  |  There ARE = 2+ (Plural)  |  SOME (+) afirmativa / ANY (- y ?) negativa y preguntas.',
    visualIconType: 'eng-there-is-are',
  },
  {
    id: 'glos-eng-comparatives',
    term: 'Comparative & Superlative Adjectives',
    englishAudioText: 'A plane is faster than a train. The blue whale is the biggest animal.',
    subject: 'ingles',
    subjectLabel: 'Inglés',
    subCategory: 'Gramática',
    clearDefinition:
      'Formas del adjetivo para comparar. El COMPARATIVO compara dos cosas ("más... que": faster than / more modern than) y el SUPERLATIVO destaca a uno sobre todo el grupo ("el más...": the fastest / the most modern).',
    example:
      'Corto: "Summer is HOTTER THAN spring." · Largo: "Science is MORE INTERESTING THAN TV."',
    memoryTrickOrFormula:
      '1 sílaba → -ER than / the -EST   |   2+ sílabas → MORE ... than / THE MOST ...',
    visualIconType: 'eng-comparative',
  },
  {
    id: 'glos-eng-vocab-environment',
    term: 'Environment & Nature Vocabulary (Island, Mountain, River, Forest)',
    englishAudioText: 'The river flows from the mountain to the sea near the island.',
    subject: 'ingles',
    subjectLabel: 'Inglés',
    subCategory: 'Vocabulario Esencial',
    clearDefinition:
      'Vocabulario fundamental de 5º de Primaria sobre la naturaleza y el paisaje: Island (isla, /ái-land/), Mountain (montaña, /máun-ten/), River (río), Forest (bosque), Valley (valle), Bridge (puente, /brích/) y Village (pueblo, /ví-lich/).',
    example:
      '"We crossed the bridge over the river and walked to the village." (Cruzamos el puente sobre el río y caminamos hasta el pueblo).',
    memoryTrickOrFormula:
      'Recuerda las letras mudas: en ISLAND la "S" no suena (/ái-land/) y en BRIDGE la "E" final no suena (/brích/).',
    visualIconType: 'eng-vocab-nature',
  },
  {
    id: 'glos-eng-vocab-time-verbs',
    term: 'Irregular Past Verbs (Went, Saw, Had, Ate, Made)',
    englishAudioText: 'Yesterday we went to the park, saw our friends and ate sandwiches.',
    subject: 'ingles',
    subjectLabel: 'Inglés',
    subCategory: 'Vocabulario Esencial',
    clearDefinition:
      'Verbos muy frecuentes en inglés que en pasado (Past Simple afirmativo) no añaden "-ed", sino que cambian su palabra: Go → Went (ir/fui), See → Saw (ver/vi), Have → Had (tener/tuve), Eat → Ate (comer/comí), Make → Made (hacer/hice).',
    example:
      '"Last Saturday I WENT to the beach, SAW a boat and ATE paella."',
    memoryTrickOrFormula:
      'Cántalos como parejas rítmicas: Go-Went · See-Saw · Have-Had · Eat-Ate · Make-Made · Buy-Bought.',
    visualIconType: 'eng-past-clock',
  },

  // ==========================================
  // GLOSARIO DE CONOCIMIENTO DEL MEDIO (NATURALEZA Y SOCIEDAD)
  // ==========================================
  {
    id: 'glos-sci-ecosistema',
    term: 'Ecosistema (Biotopo y Biocenosis)',
    subject: 'conocimiento',
    subjectLabel: 'Conocimiento del Medio',
    subCategory: 'Naturaleza y Seres Vivos',
    clearDefinition:
      'Conjunto formado por un lugar concreto de la naturaleza con sus condiciones físicas (BIOTOPO: rocas, agua, luz, temperatura), todos los seres vivos que habitan en él (BIOCENOSIS: plantas, animales, hongos) y las relaciones que existen entre ellos.',
    example:
      'El Parque Natural de la Albufera de Valencia es un ecosistema acuático y terrestre donde el agua dulce y las dunas (biotopo) conviven con aves, peces y arrozales (biocenosis).',
    memoryTrickOrFormula:
      'Bio-TOPO = la tierra y rocas donde excava el topo (sin vida)  |  Bio-CENO-sis = los seres vivos que cenan juntos.',
    visualIconType: 'sci-ecosystem',
  },
  {
    id: 'glos-sci-fotosintesis',
    term: 'Fotosíntesis (Xilema y Floema)',
    subject: 'conocimiento',
    subjectLabel: 'Conocimiento del Medio',
    subCategory: 'Naturaleza y Seres Vivos',
    clearDefinition:
      'Proceso mediante el cual las plantas y las algas fabrican su propio alimento (son autótrofas). Toman agua y sales minerales por la raíz (savia bruta que sube por el xilema), absorben dióxido de carbono (CO₂) por las hojas y, con la energía de la luz solar y la clorofila, producen savia elaborada (que viaja por el floema) y liberan oxígeno (O₂).',
    example:
      'Los naranjos de la huerta de Museros absorben luz solar y CO₂ durante el día para fabricar los azúcares de las naranjas y purificar el aire con oxígeno.',
    memoryTrickOrFormula:
      'B de Bajo = Savia BRUTA sube desde abajo (Xilema)  |  F de Fabricada = Savia Elaborada viaja por el FLOEMA.',
    visualIconType: 'sci-photosynthesis',
  },
  {
    id: 'glos-sci-celula',
    term: 'Célula (Membrana, Citoplasma y Núcleo)',
    subject: 'conocimiento',
    subjectLabel: 'Conocimiento del Medio',
    subCategory: 'Naturaleza y Seres Vivos',
    clearDefinition:
      'La unidad viva más pequeña que forma a todos los seres vivos y realiza las tres funciones vitales (nutrición, relación y reproducción). Las células animales y vegetales son eucariotas porque tienen un NÚCLEO que guarda el ADN.',
    example:
      'Muchas células musculares unidas forman el tejido muscular; varios tejidos forman el corazón (órgano), que forma parte del aparato circulatorio.',
    memoryTrickOrFormula:
      'Escala de la vida: 1. Célula → 2. Tejido → 3. Órgano → 4. Aparato o Sistema → 5. Organismo.',
    visualIconType: 'sci-cell',
  },
  {
    id: 'glos-sci-vertiente',
    term: 'Vertiente Hidrográfica y Caudal de un Río',
    subject: 'conocimiento',
    subjectLabel: 'Conocimiento del Medio',
    subCategory: 'Sociedad, Geografía e Historia',
    clearDefinition:
      'Una VERTIENTE HIDROGRÁFICA es el conjunto de todos los ríos y sus afluentes que desembocan en un mismo mar u océano. El CAUDAL es la cantidad de agua que lleva un río en un momento dado.',
    example:
      'Los ríos Turia y Júcar pertenecen a la Vertiente Mediterránea: nacen en el Sistema Ibérico y desembocan en el mar Mediterráneo.',
    memoryTrickOrFormula:
      'Las 3 vertientes de España son C-A-M: Cantábrica (ríos cortos y muy caudalosos), Atlántica (ríos largos) y Mediterránea (ríos cortos e irregulares, salvo el Ebro).',
    visualIconType: 'sci-river-relief',
  },
  {
    id: 'glos-sci-demografia',
    term: 'Demografía y Densidad de Población (Sociedad)',
    subject: 'conocimiento',
    subjectLabel: 'Conocimiento del Medio',
    subCategory: 'Sociedad, Geografía e Historia',
    clearDefinition:
      'Ciencia social que estudia los habitantes de un lugar, cómo evoluciona su número (por la natalidad, mortalidad y migraciones) y cómo se reparten en el territorio mediante la DENSIDAD DE POBLACIÓN.',
    example:
      'Las zonas costeras como la comarca de l\'Horta Nord tienen una densidad de población alta (muchos habitantes por km²), mientras que los pueblos de montaña del interior tienen baja densidad.',
    memoryTrickOrFormula:
      'Fórmula: Densidad de Población = Habitantes totales ÷ Superficie (km²).',
    visualIconType: 'sci-society-population',
  },
  {
    id: 'glos-sci-sectores',
    term: 'Sectores Económicos (Primario, Secundario y Terciario)',
    subject: 'conocimiento',
    subjectLabel: 'Conocimiento del Medio',
    subCategory: 'Sociedad, Geografía e Historia',
    clearDefinition:
      'Las tres grandes actividades en las que trabajan las personas en sociedad: 1º PRIMARIO (obtiene productos de la naturaleza: agricultura, ganadería, pesca), 2º SECUNDARIO (los transforma en fábricas e industrias) y 3º TERCIARIO o SERVICIOS (educación, sanidad, comercio, transporte).',
    example:
      '1º Un agricultor recoge naranjas en Museros (Primario) → 2º Una fábrica las exprime y envasa zumo (Secundario) → 3º Una tienda vende el zumo y un camión lo transporta (Terciario).',
    memoryTrickOrFormula:
      '1º Naturaleza (Campo/Mar) → 2º Fábrica (Transformar) → 3º Servicios a las personas (Colegios, Tiendas, Hospitales).',
    visualIconType: 'sci-sectors-huerta',
  },
];
