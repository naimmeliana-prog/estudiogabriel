import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Music,
  Palette,
  HeartHandshake,
  Trophy,
  GraduationCap,
  Volume2,
  Calculator,
} from 'lucide-react';
import { SubjectId, ALL_GRADES_CATALOG, GradeId } from '../data/curriculumData';
import { SubjectStudyBook } from './SubjectStudyBook';

interface OtherSubjectsModuleProps {
  completedIds: string[];
  initialSubject?:
    | 'lengua'
    | 'valencia'
    | 'artistica'
    | 'educacion-fisica'
    | 'valores'
    | 'eso-bach';
  onCompleteActivity: (id: string, xp: number) => void;
  onOpenGlossaryForSubject?: (
    subj:
      | 'all'
      | 'ingles'
      | 'matematicas'
      | 'conocimiento'
      | 'lengua'
      | 'valencia'
      | 'artistica'
      | 'educacion-fisica'
      | 'valores'
  ) => void;
}

interface InteractiveSubjectChallenge {
  id: string;
  category: string;
  title: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
  ruleExplanation: string;
  mnemonicTrick: string;
}

const LENGUA_CHALLENGES: InteractiveSubjectChallenge[] = [
  {
    id: 'len-ch-1',
    category: 'Acentuación · Regla N-S-Vocal',
    title: '¿Por qué "CAMIÓN" lleva tilde y "RELOJ" no?',
    prompt: 'Elige la opción donde TODAS las palabras agudas estén bien acentuadas:',
    options: [
      'camión, compás, colibrí, reloj',
      'camion, compás, colibri, relój',
      'camión, compas, colibrí, relój',
    ],
    correctAnswer: 'camión, compás, colibrí, reloj',
    ruleExplanation:
      'Las palabras AGUDAS (fuerza en la última sílaba) llevan tilde cuando terminan en N (camión), S (compás) o Vocal (colibrí). Como "reloj" termina en -J, no lleva tilde.',
    mnemonicTrick: 'Agudas = SÍ tilde en N, S o Vocal.',
  },
  {
    id: 'len-ch-2',
    category: 'Acentuación · Palabras Llanas y Esdrújulas',
    title: 'El reto de "ÁRBOL", "CÉSPED" y "EXÁMENES"',
    prompt: '¿Cuál de estas afirmaciones es verdadera sobre "examen" y "exámenes"?',
    options: [
      '"Examen" es llana acabada en -N (sin tilde) y "exámenes" es esdrújula (con tilde)',
      'Las dos llevan tilde porque empiezan por ex-',
      'Ninguna de las dos lleva tilde',
    ],
    correctAnswer:
      '"Examen" es llana acabada en -N (sin tilde) y "exámenes" es esdrújula (con tilde)',
    ruleExplanation:
      'e-XA-men es llana terminada en -N, por eso NO lleva tilde. Al pasar a plural (e-XÁ-me-nes), la sílaba tónica queda en la antepenúltima posición (esdrújula) y lleva tilde obligatoria.',
    mnemonicTrick: 'Esdrújulas = SIEMPRE llevan tilde.',
  },
  {
    id: 'len-ch-3',
    category: 'Diptongos e Hiatos',
    title: 'La tilde que rompe el diptongo (Hiato)',
    prompt: '¿Cómo se separa en sílabas la palabra "BAÚL" y por qué lleva tilde en la Ú?',
    options: [
      'ba-úl · Tiene un HIATO porque la vocal débil (ú) suena fuerte y rompe el diptongo',
      'baúl (una sola sílaba con diptongo)',
      'Es aguda terminada en vocal',
    ],
    correctAnswer:
      'ba-úl · Tiene un HIATO porque la vocal débil (ú) suena fuerte y rompe el diptongo',
    ruleExplanation:
      'Cuando una vocal cerrada/débil (I, U) va junto a una abierta/fuerte (A, E, O) y lleva la fuerza de voz, siempre le ponemos tilde (ba-úl, Ma-rí-a, ma-íz, bú-ho) y se separan en dos sílabas.',
    mnemonicTrick: 'Vocales fuertes: A-E-O · Vocales débiles: I-U.',
  },
  {
    id: 'len-ch-4',
    category: 'Sintaxis · Sujeto y Predicado',
    title: 'Localiza el Sujeto y su Núcleo',
    prompt:
      'En la oración: "Los alumnos de quinto curso leyeron una novela en clase", ¿cuál es el Sujeto y cuál es su Núcleo (NS)?',
    options: [
      'Sujeto: "Los alumnos de quinto curso" · Núcleo (NS): "alumnos"',
      'Sujeto: "una novela en clase" · Núcleo: "novela"',
      'Sujeto Omitido (Ellos) · Todo es Predicado',
    ],
    correctAnswer:
      'Sujeto: "Los alumnos de quinto curso" · Núcleo (NS): "alumnos"',
    ruleExplanation:
      'Preguntamos al verbo "¿Quiénes leyeron?" → Los alumnos de quinto curso. La palabra principal de ese grupo nominal es el sustantivo "alumnos" (Núcleo del Sujeto).',
    mnemonicTrick: '1º Busca el Verbo → 2º Pregunta ¿Quién/Quiénes + verbo?',
  },
  {
    id: 'len-ch-5',
    category: 'Morfología · Sustantivos Colectivos y Determinantes',
    title: 'Individual vs. Colectivo y Determinante vs. Pronombre',
    prompt: '¿Cuál de estas palabras es un sustantivo COLECTIVO?',
    options: [
      'Enjambre (en singular nombra a un conjunto de abejas)',
      'Abejas (está en plural)',
      'Flores (está en plural)',
    ],
    correctAnswer: 'Enjambre (en singular nombra a un conjunto de abejas)',
    ruleExplanation:
      'Un sustantivo colectivo va en SINGULAR pero designa a un grupo de seres (enjambre = abejas, jauría = perros, bosque = árboles, orquesta = músicos).',
    mnemonicTrick: 'Colectivo = Palabra en SINGULAR que significa grupo.',
  },
  {
    id: 'len-ch-6',
    category: 'Ortografía B/V y Literatura',
    title: 'Los verbos en -ABA / -BIR y las Figuras Literarias',
    prompt:
      'Completa con las letras correctas: "Mientras nosotros cantá___amos, mi abuela her___ía la leche".',
    options: [
      'cantábamos (con B) y hervía (con V)',
      'cantávamos (con V) y herbía (con B)',
      'cantábamos (con B) y herbía (con B)',
    ],
    correctAnswer: 'cantábamos (con B) y hervía (con V)',
    ruleExplanation:
      'En castellano, los pasados en -aba, -abas, -ábamos van siempre con B (cantábamos), y "hervir, servir y vivir" son las 3 excepciones de verbos en -ir que van con V.',
    mnemonicTrick: 'Excepciones con V: hervir, servir y vivir.',
  },
];

const VALENCIA_CHALLENGES: InteractiveSubjectChallenge[] = [
  {
    id: 'val-ch-1',
    category: "L'Apostrofació · Regla i Excepcions",
    title: 'Quan porten apòstrof EL i LA?',
    prompt:
      'Tria l\'opció on TOTS els articles estiguen ben escrits en valencià:',
    options: [
      "l'escola, l'horta, la universitat, la història",
      "l'escola, la horta, l'universitat, l'història",
      "la escola, l'horta, l'universitat, la història",
    ],
    correctAnswer: "l'escola, l'horta, la universitat, la història",
    ruleExplanation:
      "L'article femení LA s'apostrofa davant de vocal o h (l'escola, l'horta), EXCEPTE davant de paraules femenines que comencen per i, u, hi, hu ÀTONES: la universitat, la història, la idea.",
    mnemonicTrick: "Excepció d'or: LA universitat i LA història (sense apòstrof!).",
  },
  {
    id: 'val-ch-2',
    category: 'Accents Oberts (`) i Tancats (´)',
    title: 'La regla de la À, la Í i la Ú en valencià',
    prompt: 'Com s\'accentuen correctament aquestes quatre paraules en valencià?',
    options: [
      'pàgina, demà, camí, música',
      'página, demá, camì, mùsica',
      'pàgina, demá, camí, música',
    ],
    correctAnswer: 'pàgina, demà, camí, música',
    ruleExplanation:
      'En valencià la vocal A sempre porta accent OBERT (`à`: pàgina, demà), mentre que la I i la U sempre porten accent TANCAT (`í, ú`: camí, música).',
    mnemonicTrick: 'A = sempre obert (À) · I, U = sempre tancat (Í, Ú).',
  },
  {
    id: 'val-ch-3',
    category: 'Ortografia · Ela Geminada (L·L) i Imperfets en -AVA',
    title: 'Col·legi, novel·la i els passats amb V',
    prompt:
      'Completa la frase en valencià: "Ahir a la vesprada jo juga___a al pati del meu co___egi".',
    options: [
      'jugava (amb V) i col·legi (amb ela geminada l·l)',
      'jugaba (amb B) i colegi',
      'jugava (amb V) i col-legi (amb guionet)',
    ],
    correctAnswer: 'jugava (amb V) i col·legi (amb ela geminada l·l)',
    ruleExplanation:
      'En valencià tots els pretèrits imperfets de la 1a conjugació (-ar) van amb V (cantava, jugava, parlàvem), i "col·legi" porta punt volat (ela geminada l·l).',
    mnemonicTrick: 'En castellà cantaba (B), però en valencià cantava (V)!',
  },
  {
    id: 'val-ch-4',
    category: 'Els Numerals · Regla D-U-C dels Guionets',
    title: 'Com s\'escriuen els números amb lletres?',
    prompt: 'Com s\'escriu correctament el número 224 en valencià?',
    options: [
      'dos-cents vint-i-quatre',
      'doscents vintiquatre',
      'dos cents vint i quatre',
    ],
    correctAnswer: 'dos-cents vint-i-quatre',
    ruleExplanation:
      'Apliquem la regla D-U-C: posem guionet entre Dezenes i Unitats (vint-i-quatre, trenta-dos) i entre Unitats i Centenes (dos-cents, tres-centes).',
    mnemonicTrick: 'Regla D-U-C: Dezena-Unitat i Unitat-Centena amb guionet.',
  },
  {
    id: 'val-ch-5',
    category: "Verbs i Perífrasi d'Obligació",
    title: 'Haver de + Infinitiu vs. Barbarismes',
    prompt:
      'Quina és la forma genuïna i correcta en valencià per a dir "Tengo que estudiar para mañana"?',
    options: [
      "He d'estudiar per a demà (o Cal que estudie per a demà)",
      'Tinc que estudiar per a demà',
      'Vaig a tindre que estudiar',
    ],
    correctAnswer: "He d'estudiar per a demà (o Cal que estudie per a demà)",
    ruleExplanation:
      'En valencià l\'obligació s\'expressa sempre amb "haver de + infinitiu" (he d\'estudiar, has de fer) o amb el verb "caldre" (cal estudiar). "Tindre que" és incorrecte.',
    mnemonicTrick: 'Prohibit "tinc que" → Diguem sempre "he de..."!',
  },
  {
    id: 'val-ch-6',
    category: "Vocabulari de l'Horta Nord i Museros",
    title: 'Les paraules de la nostra terra',
    prompt:
      'Què signifiquen en valencià les paraules "bresquilla", "carlota", "creïlla" i "tardor"?',
    options: [
      'Melocotón, zanahoria, patata y otoño',
      'Fresa, lechuga, cebolla y primavera',
      'Naranja, judía, maíz y verano',
    ],
    correctAnswer: 'Melocotón, zanahoria, patata y otoño',
    ruleExplanation:
      'Vocabulari bàsic: bresquilla = melocotón, carlota (o safanòria) = zanahoria, creïlla = patata, bajoca = judía verde, tardor = otoño.',
    mnemonicTrick: 'A la tardor mengem bresquilla, carlota i creïlla.',
  },
];

const VALENCIA_VOCAB_CARDS = [
  { val: 'La taronja i el taronger', esp: 'La naranja y el naranjo', cat: "L'Horta de Museros" },
  { val: 'La bresquilla i la maduixa', esp: 'El melocotón y la fresa', cat: 'Les Fruites' },
  { val: 'La carlota, la creïlla i la bajoca', esp: 'La zanahoria, la patata y la judía verde', cat: 'Les Verdures' },
  { val: 'La séquia i la barraca', esp: 'La acequia de riego y la barraca valenciana', cat: 'Patrimoni' },
  { val: 'La primavera, l\'estiu, la tardor i l\'hivern', esp: 'Primavera, verano, otoño e invierno', cat: 'Les Estacions' },
  { val: 'Dilluns, dimarts, dimecres, dijous, divendres', esp: 'De lunes a viernes (días de clase)', cat: 'La Setmana' },
];

const HIGH_SCHOOL_QUICK_MODULES: Record<
  Exclude<GradeId, '5-primaria'>,
  {
    subjectTitle: string;
    formulaOrKeyRule: string;
    summaryNote: string;
    quizQuestion: string;
    quizOptions: string[];
    quizCorrect: string;
    quizExplanation: string;
  }[]
> = {
  '6-primaria': [
    {
      subjectTitle: 'Matemáticas 6º Primaria · m.c.m., m.c.d. y Proporcionalidad',
      formulaOrKeyRule: 'Regla de Tres Directa: x = (B × C) ÷ A  |  Volumen Prisma = Área Base × Altura',
      summaryNote:
        'En 6º de Primaria dominamos el mínimo común múltiplo (comunes y no comunes con mayor exponente), los números negativos y las escalas de los mapas.',
      quizQuestion: 'Si 3 entradas al Oceanogràfic cuestan 45 €, ¿cuánto costarán 5 entradas al mismo precio?',
      quizOptions: ['75 € (45 ÷ 3 = 15 € cada una; 15 × 5 = 75 €)', '60 €', '90 €'],
      quizCorrect: '75 € (45 ÷ 3 = 15 € cada una; 15 × 5 = 75 €)',
      quizExplanation: 'Reducimos a la unidad (45 ÷ 3 = 15 €) y multiplicamos por 5 entradas (15 × 5 = 75 €).',
    },
    {
      subjectTitle: 'Inglés 6º Primaria · Going to, Will & First Conditional',
      formulaOrKeyRule: 'First Conditional: IF + Present Simple, WILL + Infinitive',
      summaryNote:
        'Expresamos planes futuros con "be going to", predicciones con "will / won\'t" y condiciones reales con el Primer Condicional.',
      quizQuestion: 'Completa la oración de First Conditional: "If it rains tomorrow, we ___ at home."',
      quizOptions: ['will stay', 'stayed', 'staying'],
      quizCorrect: 'will stay',
      quizExplanation: 'En la cláusula con IF va Present Simple (rains) y en la principal va WILL + verbo base (will stay).',
    },
  ],
  '1-eso': [
    {
      subjectTitle: 'Matemáticas 1º ESO · Números Enteros y Ecuaciones de 1º Grado',
      formulaOrKeyRule: 'Regla de los signos: (+)·(+) = +  |  (-)·(-) = +  |  (+)·(-) = -',
      summaryNote:
        'Aprendemos a operar con números enteros positivos y negativos y a despejar la incógnita x en ecuaciones lineales de primer grado.',
      quizQuestion: 'Resuelve la ecuación de primer grado: 3x - 5 = 16',
      quizOptions: ['x = 7 (porque 3x = 21 → x = 21 ÷ 3 = 7)', 'x = 5', 'x = 11'],
      quizCorrect: 'x = 7 (porque 3x = 21 → x = 21 ÷ 3 = 7)',
      quizExplanation: 'El -5 pasa al otro lado sumando (16 + 5 = 21) y el 3 pasa dividiendo (21 ÷ 3 = 7).',
    },
    {
      subjectTitle: 'Biología y Geología 1º ESO · Célula Procariota vs. Eucariota',
      formulaOrKeyRule: 'Procariota (Bacterias) = ADN libre sin núcleo  |  Eucariota = ADN dentro del núcleo',
      summaryNote:
        'Estudiamos la organización celular, las capas de la Tierra (corteza, manto y núcleo) y las civilizaciones antiguas en Geografía e Historia.',
      quizQuestion: '¿Qué orgánulo es exclusivo de las células vegetales y realiza la fotosíntesis?',
      quizOptions: ['El cloroplasto (además de tener pared celular rígida)', 'La mitocondria', 'El ribosoma'],
      quizCorrect: 'El cloroplasto (además de tener pared celular rígida)',
      quizExplanation: 'Las mitocondrias están en animales y vegetales, pero los cloroplastos son exclusivos de las células vegetales.',
    },
  ],
  '2-eso': [
    {
      subjectTitle: 'Matemáticas 2º ESO · Teorema de Pitágoras y Ecuaciones de 2º Grado',
      formulaOrKeyRule: 'Pitágoras: h² = a² + b²   |   Ecuación 2º grado: x = [-b ± √(b² - 4ac)] / 2a',
      summaryNote:
        'En todo triángulo rectángulo el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos.',
      quizQuestion: 'Si los dos catetos de un triángulo rectángulo miden 3 cm y 4 cm, ¿cuánto mide la hipotenusa?',
      quizOptions: ['5 cm (porque 3² + 4² = 9 + 16 = 25, y √25 = 5)', '7 cm', '12 cm'],
      quizCorrect: '5 cm (porque 3² + 4² = 9 + 16 = 25, y √25 = 5)',
      quizExplanation: 'El triángulo 3-4-5 es la terna pitagórica más importante.',
    },
    {
      subjectTitle: 'Física y Química 2º ESO · Cinemática (MRU) y Tabla Periódica',
      formulaOrKeyRule: 'Velocidad (v) = Espacio (e) ÷ Tiempo (t)   |   1 m/s = 3,6 km/h',
      summaryNote:
        'Distinguimos cambios físicos y químicos, estructura del átomo (protones, neutrones y electrones) y el movimiento rectilíneo uniforme.',
      quizQuestion: 'Un vehículo circula a 20 m/s constantes durante 10 segundos. ¿Qué distancia recorre?',
      quizOptions: ['200 metros (e = v · t = 20 × 10)', '2 metros', '30 metros'],
      quizCorrect: '200 metros (e = v · t = 20 × 10)',
      quizExplanation: 'En un MRU el espacio recorrido es velocidad por tiempo: 20 m/s × 10 s = 200 m.',
    },
  ],
  '3-eso': [
    {
      subjectTitle: 'Matemáticas 3º ESO · Identidades Notables y Sucesiones',
      formulaOrKeyRule: '(a + b)² = a² + 2ab + b²   |   (a - b)² = a² - 2ab + b²   |   (a + b)(a - b) = a² - b²',
      summaryNote:
        'Trabajamos con polinomios, factorización mediante la regla de Ruffini, progresiones aritméticas y geométricas y funciones parabólicas.',
      quizQuestion: 'Desarrolla la identidad notable (x + 3)²:',
      quizOptions: ['x² + 6x + 9 (¡nunca olvides el doble producto central 2·x·3!)', 'x² + 9', 'x² + 3x + 6'],
      quizCorrect: 'x² + 6x + 9 (¡nunca olvides el doble producto central 2·x·3!)',
      quizExplanation: 'Cuadrado del primero (x²) + doble del primero por el segundo (6x) + cuadrado del segundo (9).',
    },
    {
      subjectTitle: 'Física y Química 3º ESO · Ley de Ohm y Formulación Inorgánica',
      formulaOrKeyRule: 'Ley de Ohm: V = I · R (Voltaje = Intensidad × Resistencia)',
      summaryNote:
        'Resolvemos circuitos eléctricos en serie y paralelo, ajuste de reacciones químicas por estequiometría y nomenclatura IUPAC.',
      quizQuestion: 'Por una resistencia de 10 Ω circula una corriente de 2 A. ¿Cuál es el voltaje V?',
      quizOptions: ['20 V (V = 2 A × 10 Ω)', '5 V', '12 V'],
      quizCorrect: '20 V (V = 2 A × 10 Ω)',
      quizExplanation: 'Aplicando la Ley de Ohm: V = I · R = 2 × 10 = 20 Voltios.',
    },
  ],
  '4-eso': [
    {
      subjectTitle: 'Matemáticas 4º ESO · Trigonometría, Logaritmos y Vectores',
      formulaOrKeyRule: 'sen²(α) + cos²(α) = 1  |  tan(α) = sen(α)/cos(α)  |  log_a(b) = c ⇔ a^c = b',
      summaryNote:
        'Resolución de triángulos mediante razones trigonométricas (SOH-CAH-TOA), propiedades de los logaritmos, geometría analítica y combinatoria.',
      quizQuestion: '¿Cuánto vale el logaritmo en base 10 de 1.000 (log₁₀ 1000)?',
      quizOptions: ['3 (porque 10³ = 1.000)', '100', '4'],
      quizCorrect: '3 (porque 10³ = 1.000)',
      quizExplanation: 'El logaritmo en base 10 busca a qué exponente hay que elevar 10 para obtener 1.000 (10³ = 1.000).',
    },
    {
      subjectTitle: 'Física, Biología e Historia 4º ESO · Leyes de Newton y Genética',
      formulaOrKeyRule: '2ª Ley de Newton: ΣF = m · a   |   Energía Cinética: Ec = ½ · m · v²',
      summaryNote:
        'Dinámica de fuerzas, conservación de la energía mecánica, leyes de Mendel de la herencia genética e Historia Contemporánea (siglos XIX y XX).',
      quizQuestion: '¿Qué fuerza neta se necesita para acelerar una masa de 5 kg a 4 m/s²?',
      quizOptions: ['20 Newtons (F = m · a = 5 × 4)', '9 Newtons', '1,25 Newtons'],
      quizCorrect: '20 Newtons (F = m · a = 5 × 4)',
      quizExplanation: 'Por la Segunda Ley de Newton, Fuerza = masa × aceleración = 5 kg × 4 m/s² = 20 N.',
    },
  ],
  '1-bach': [
    {
      subjectTitle: 'Matemáticas I (1º Bachillerato) · Límites, Derivadas y Complejos',
      formulaOrKeyRule: 'Si f(x) = xⁿ ⇒ f\'(x) = n · xⁿ⁻¹   |   Derivada del producto: (u·v)\' = u\'v + uv\'',
      summaryNote:
        'Cálculo diferencial, estudio completo de funciones (monotonía, extremos relativos y asíntotas), números complejos y geometría analítica.',
      quizQuestion: '¿Cuál es la función derivada f\'(x) de f(x) = 3x⁴ - 5x² + 7?',
      quizOptions: ['f\'(x) = 12x³ - 10x', 'f\'(x) = 3x³ - 5x', 'f\'(x) = 12x⁴ - 10'],
      quizCorrect: 'f\'(x) = 12x³ - 10x',
      quizExplanation: 'Derivamos término a término: 4·3x³ - 2·5x¹ + 0 = 12x³ - 10x.',
    },
    {
      subjectTitle: 'Física, Química y Filosofía 1º Bachillerato · Tiro Parabólico y Termodinámica',
      formulaOrKeyRule: 'Ecuación Gases Ideales: P · V = n · R · T   |   pH = -log[H₃O⁺]',
      summaryNote:
        'Cinemática vectorial en 2D, estequiometría con reactivo limitante, química orgánica del carbono y grandes ramas de la Filosofía.',
      quizQuestion: 'En condiciones normales (0 °C y 1 atm), ¿qué volumen ocupa 1 mol de cualquier gas ideal?',
      quizOptions: ['22,4 litros', '1 litro', '100 litros'],
      quizCorrect: '22,4 litros',
      quizExplanation: 'A partir de P·V = n·R·T, un mol de gas ideal a 273 K y 1 atm ocupa 22,4 L.',
    },
  ],
  '2-bach': [
    {
      subjectTitle: 'Matemáticas II (2º Bachillerato PAU) · Matrices, Integrales y Espacio 3D',
      formulaOrKeyRule: 'Regla de Barrow: ∫_a^b f(x)dx = F(b) - F(a)  |  Integración por partes: ∫u·dv = u·v - ∫v·du',
      summaryNote:
        'Preparación intensiva PAU: sistemas de ecuaciones por Gauss y Rouché-Frobenius, teoremas de Bolzano y Rolle, integrales definidas y geometría en R³.',
      quizQuestion: '¿Cuánto vale la integral definida ∫₀² (2x) dx aplicando la Regla de Barrow?',
      quizOptions: ['4 (porque la primitiva es F(x) = x², y F(2) - F(0) = 2² - 0² = 4)', '2', '8'],
      quizCorrect: '4 (porque la primitiva es F(x) = x², y F(2) - F(0) = 2² - 0² = 4)',
      quizExplanation: 'Una primitiva de 2x es x². Evaluando entre 0 y 2 obtenemos 2² - 0² = 4.',
    },
    {
      subjectTitle: 'Historia de España, Filosofía e Inglés PAU (2º Bachillerato)',
      formulaOrKeyRule: 'Constituciones Españolas: 1812 (La Pepa) · 1837 · 1845 · 1869 · 1876 · 1931 · 1978',
      summaryNote:
        'Síntesis de bloques para las Pruebas de Acceso a la Universidad (PAU Comunitat Valenciana): Historia de España contemporánea, autores de Filosofía y Writing/Rephrasing B2-C1.',
      quizQuestion: '¿En qué año y ciudad se promulgó la primera Constitución liberal de la historia de España ("La Pepa")?',
      quizOptions: ['En 1812 en las Cortes de Cádiz (el 19 de marzo, día de San José)', 'En 1876 en Madrid', 'En 1931 en Valencia'],
      quizCorrect: 'En 1812 en las Cortes de Cádiz (el 19 de marzo, día de San José)',
      quizExplanation: 'La Constitución de Cádiz de 1812 estableció por primera vez la soberanía nacional y la división de poderes en España.',
    },
  ],
};

export const OtherSubjectsModule: React.FC<OtherSubjectsModuleProps> = ({
  completedIds,
  initialSubject = 'lengua',
  onCompleteActivity,
  onOpenGlossaryForSubject,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<
    | 'lengua'
    | 'valencia'
    | 'artistica'
    | 'educacion-fisica'
    | 'valores'
    | 'eso-bach'
  >(initialSubject);

  const [subView, setSubView] = useState<'interactive' | 'notes'>('interactive');

  // Lengua & Valencià interactive quiz state
  const [challengeIdx, setChallengeIdx] = useState<number>(0);
  const [pickedOption, setPickedOption] = useState<string | null>(null);

  // Music Rhythm Builder state
  const [rhythmFigures, setRhythmFigures] = useState<
    { name: string; beats: number; symbol: string }[]
  >([]);
  const [targetTimeSig, setTargetTimeSig] = useState<2 | 3 | 4>(4);

  // Higher grades (6º Primaria to 2º Bachillerato) selector state
  const [selectedUpperGrade, setSelectedUpperGrade] =
    useState<Exclude<GradeId, '5-primaria'>>('6-primaria');
  const [upperQuizAnswers, setUpperQuizAnswers] = useState<
    Record<string, string>
  >({});

  const handleSwitchSubject = (
    subj:
      | 'lengua'
      | 'valencia'
      | 'artistica'
      | 'educacion-fisica'
      | 'valores'
      | 'eso-bach'
  ) => {
    setSelectedSubject(subj);
    setChallengeIdx(0);
    setPickedOption(null);
    if (subj === 'eso-bach') {
      setSubView('interactive');
    }
  };

  const speakValencianOrSpanish = (text: string, lang: 'ca-ES' | 'es-ES') => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.88;
    window.speechSynthesis.speak(utterance);
  };

  const activeChallenges =
    selectedSubject === 'valencia' ? VALENCIA_CHALLENGES : LENGUA_CHALLENGES;
  const currentChallenge =
    activeChallenges[challengeIdx % activeChallenges.length] ||
    activeChallenges[0];

  const totalRhythmBeats = rhythmFigures.reduce((acc, f) => acc + f.beats, 0);

  const handleAddFigure = (name: string, beats: number, symbol: string) => {
    if (totalRhythmBeats + beats <= targetTimeSig) {
      const next = [...rhythmFigures, { name, beats, symbol }];
      setRhythmFigures(next);
      const nextSum = next.reduce((a, b) => a + b.beats, 0);
      if (nextSum === targetTimeSig) {
        onCompleteActivity(`rhythm-compas-${targetTimeSig}`, 25);
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Header & Subject Selector Strip */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#E2E8F0]">
        <div>
          <div className="text-xs text-slate-500">
            <span>Todas las Asignaturas del Currículo Oficial</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>
              Lengua, Valencià, Música y Plástica, E. Física, Valores y ESO/Bachillerato
            </span>
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] mt-1">
            Estudio Completo de Todas las Demás Asignaturas
          </h2>
        </div>

        {selectedSubject !== 'eso-bach' && (
          <div className="flex items-center gap-1 p-1 bg-slate-200/75 rounded-lg self-start">
            <button
              type="button"
              onClick={() => setSubView('interactive')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                subView === 'interactive'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              1. Práctica y Laboratorio Interactivo
            </button>
            <button
              type="button"
              onClick={() => setSubView('notes')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                subView === 'notes'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              2. Temario Completo, Apuntes y Fórmulas
            </button>
          </div>
        )}
      </div>

      {/* Subject Switcher Buttons (6 Subject Areas) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {[
          {
            id: 'lengua',
            title: 'Lengua Castellana',
            sub: 'Tildes, Sintaxis y Literatura',
            icon: BookOpen,
          },
          {
            id: 'valencia',
            title: 'Valencià: Llengua',
            sub: "Apòstrof, Accents i l'Horta",
            icon: Sparkles,
          },
          {
            id: 'artistica',
            title: 'Música y Plástica',
            sub: 'Compases, Figuras y Color',
            icon: Music,
          },
          {
            id: 'educacion-fisica',
            title: 'Educación Física',
            sub: 'Capacidades y Pilota Val.',
            icon: Trophy,
          },
          {
            id: 'valores',
            title: 'Valores Cívicos',
            sub: 'Empatía, 3R y Red Segura',
            icon: HeartHandshake,
          },
          {
            id: 'eso-bach',
            title: '6º Prim. a 2º Bach.',
            sub: 'Física, Química, Historia, PAU',
            icon: GraduationCap,
          },
        ].map((item) => {
          const IconComponent = item.icon;
          const isSelected = selectedSubject === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSwitchSubject(item.id as any)}
              className={`p-3.5 rounded-xl border text-left transition-colors flex flex-col justify-between gap-2 ${
                isSelected
                  ? 'bg-[#0284C7] border-[#0284C7] text-white shadow-xs'
                  : 'bg-white border-[#E2E8F0] text-[#0F172A] hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <IconComponent
                  className={`w-4 h-4 ${
                    isSelected ? 'text-white' : 'text-[#0284C7]'
                  }`}
                />
                <span
                  className={`text-[10px] font-mono ${
                    isSelected ? 'text-sky-100' : 'text-slate-400'
                  }`}
                >
                  {item.id === 'eso-bach' ? 'MULTINIVEL' : '5º PRIMARIA'}
                </span>
              </div>
              <div>
                <div className="text-xs font-bold leading-snug">{item.title}</div>
                <div
                  className={`text-[11px] truncate mt-0.5 ${
                    isSelected ? 'text-sky-100' : 'text-slate-500'
                  }`}
                >
                  {item.sub}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* IF SUBVIEW === 'NOTES', RENDER COMPLETE STUDY BOOK FOR THE SELECTED SUBJECT */}
      {subView === 'notes' && selectedSubject !== 'eso-bach' ? (
        <div key={`other-notes-${selectedSubject}`}>
          <SubjectStudyBook
            subject={selectedSubject as SubjectId}
            completedIds={completedIds}
            onMarkUnitStudied={onCompleteActivity}
            onOpenGlossaryForSubject={
              onOpenGlossaryForSubject
                ? () => onOpenGlossaryForSubject(selectedSubject)
                : undefined
            }
          />
        </div>
      ) : (
        <div key={`other-interactive-${selectedSubject}`} className="space-y-8">
          {/* 1. LENGUA CASTELLANA OR VALENCIÀ INTERACTIVE TRAINER */}
          {(selectedSubject === 'lengua' || selectedSubject === 'valencia') && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left 7 cols: Interactive Challenge Card */}
              <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 border-b border-slate-100 pb-4">
                  <div>
                    <span className="font-semibold text-[#0284C7]">
                      {currentChallenge.category}
                    </span>
                    <span className="mx-2" aria-hidden="true">·</span>
                    <span>
                      Reto {challengeIdx + 1} de {activeChallenges.length}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubView('notes')}
                    className="text-xs font-semibold text-[#0284C7] hover:underline whitespace-nowrap"
                  >
                    Abrir las 6 Unidades de Apuntes →
                  </button>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    {currentChallenge.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {currentChallenge.prompt}
                  </p>
                </div>

                <div className="space-y-2.5">
                  {currentChallenge.options.map((opt) => {
                    const isPicked = pickedOption === opt;
                    const isRight = opt === currentChallenge.correctAnswer;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setPickedOption(opt);
                          if (isRight) {
                            onCompleteActivity(currentChallenge.id, 30);
                          }
                        }}
                        className={`w-full text-left p-4 rounded-xl border text-sm font-semibold transition-colors flex items-center justify-between gap-3 ${
                          isPicked
                            ? isRight
                              ? 'bg-[#059669] border-[#059669] text-white'
                              : 'bg-[#DC2626] border-[#DC2626] text-white'
                            : 'bg-[#F8FAFC] border-slate-200 text-[#0F172A] hover:border-[#0284C7]'
                        }`}
                      >
                        <span>{opt}</span>
                        {isPicked && (
                          <span className="text-xs font-mono shrink-0">
                            {isRight ? '✓ ¡Correcto! (+30 XP)' : '✗ Revisa la regla'}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {pickedOption && (
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 text-sm">
                    <div className="font-bold text-[#0284C7] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                      <span>Explicación de Clase:</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {currentChallenge.ruleExplanation}
                    </p>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-xs font-semibold text-[#059669]">
                      ★ Regla de memoria: {currentChallenge.mnemonicTrick}
                    </div>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {activeChallenges.map((ch, idx) => (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => {
                          setChallengeIdx(idx);
                          setPickedOption(null);
                        }}
                        className={`px-3 py-1.5 rounded-md text-xs font-mono font-semibold border transition-colors ${
                          idx === challengeIdx
                            ? 'bg-[#0284C7] border-[#0284C7] text-white'
                            : completedIds.includes(ch.id)
                            ? 'bg-[#059669]/10 border-[#059669]/30 text-[#059669]'
                            : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        Reto {idx + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setChallengeIdx((prev) => (prev + 1) % activeChallenges.length);
                      setPickedOption(null);
                    }}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    Siguiente Reto →
                  </button>
                </div>
              </div>

              {/* Right 5 cols: Summary Cheat-Sheet or Valencian Oral Vocabulary */}
              <div className="lg:col-span-5 space-y-6">
                {selectedSubject === 'valencia' ? (
                  <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4">
                    <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                      <h3 className="text-base font-bold text-[#0F172A]">
                        Vocabulari Oral de l&apos;Horta i Museros
                      </h3>
                      <span className="text-xs font-mono text-[#0284C7]">
                        Amb àudio
                      </span>
                    </div>
                    <div className="space-y-2.5">
                      {VALENCIA_VOCAB_CARDS.map((vc, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between gap-3"
                        >
                          <div>
                            <div className="text-[11px] font-semibold text-[#0284C7]">
                              {vc.cat}
                            </div>
                            <div className="text-sm font-bold text-[#0F172A]">
                              {vc.val}
                            </div>
                            <div className="text-xs text-slate-500">{vc.esp}</div>
                          </div>
                          <button
                            type="button"
                            onClick={() => speakValencianOrSpanish(vc.val, 'ca-ES')}
                            className="p-2 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white shrink-0"
                            title="Escoltar pronunciació"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4">
                    <h3 className="text-base font-bold text-[#0F172A] border-b border-slate-100 pb-3">
                      Chuleta Visual de Lengua Castellana (5º Primaria)
                    </h3>
                    <div className="space-y-3 text-xs">
                      <div className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                        <div className="font-bold text-[#0284C7]">
                          1. REGLA DE ACENTUACIÓN (E - L - A)
                        </div>
                        <p className="text-slate-700">
                          <strong>Agudas:</strong> Tilde si acaban en N, S o Vocal (ca-mión).{' '}
                          <strong>Llanas:</strong> Tilde si NO acaban en N, S o Vocal (ár-bol).{' '}
                          <strong>Esdrújulas:</strong> SIEMPRE llevan tilde (mú-si-ca).
                        </p>
                      </div>
                      <div className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                        <div className="font-bold text-[#059669]">
                          2. DIPTONGO VS. HIATO
                        </div>
                        <p className="text-slate-700">
                          Vocales fuertes (A, E, O) y débiles (I, U). Dos fuertes juntas se separan siempre (po-e-ta = Hiato). Si la débil lleva fuerza de voz, lleva tilde y rompe el diptongo (Ma-rí-a, ba-úl = Hiato).
                        </p>
                      </div>
                      <div className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                        <div className="font-bold text-[#D97706]">
                          3. ANÁLISIS SINTÁCTICO EN 3 PASOS
                        </div>
                        <p className="text-slate-700">
                          1º Busca el <strong>Verbo</strong> (Núcleo del Predicado). 2º Pregunta <em>¿Quién/Quiénes + verbo?</em> para hallar el <strong>Sujeto</strong>. 3º Todo lo demás es el <strong>Predicado</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2. EDUCACIÓN ARTÍSTICA: MÚSICA Y PLÁSTICA INTERACTIVE LAB */}
          {selectedSubject === 'artistica' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left 7 cols: Interactive Musical Measure Rhythm Builder */}
              <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 border-b border-slate-100 pb-4">
                  <span className="font-semibold text-[#0284C7]">
                    Laboratorio Musical · Constructor Matemático de Compases
                  </span>
                  <button
                    type="button"
                    onClick={() => setSubView('notes')}
                    className="font-semibold text-[#0284C7] hover:underline"
                  >
                    Ver las 4 Unidades de Música y Plástica →
                  </button>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    Completa el Compás Musical Exacto
                  </h3>
                  <p className="text-sm text-slate-600">
                    Elige el tipo de compás (2/4, 3/4 o 4/4) y añade figuras musicales hasta llenar exactamente los tiempos sin pasarte:
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-600">
                    Compás objetivo:
                  </span>
                  {([2, 3, 4] as const).map((sig) => (
                    <button
                      key={sig}
                      type="button"
                      onClick={() => {
                        setTargetTimeSig(sig);
                        setRhythmFigures([]);
                      }}
                      className={`px-3.5 py-2 rounded-lg text-xs font-mono font-bold border transition-colors ${
                        targetTimeSig === sig
                          ? 'bg-[#0284C7] border-[#0284C7] text-white'
                          : 'bg-white border-slate-300 text-[#0F172A]'
                      }`}
                    >
                      Compás {sig}/4 ({sig} tiempos)
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setRhythmFigures([])}
                    className="ml-auto text-xs font-semibold text-slate-600 hover:text-[#DC2626]"
                  >
                    Vaciar compás
                  </button>
                </div>

                {/* Staff / Measure Box */}
                <div className="p-5 rounded-xl bg-[#F8FAFC] border-2 border-slate-300 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[#0F172A]">
                      PENTAGRAMA · COMPÁS {targetTimeSig}/4
                    </span>
                    <span
                      className={`font-bold ${
                        totalRhythmBeats === targetTimeSig
                          ? 'text-[#059669]'
                          : 'text-[#0284C7]'
                      }`}
                    >
                      Suma actual: {totalRhythmBeats} / {targetTimeSig} tiempos
                    </span>
                  </div>

                  <div className="min-h-[76px] bg-white border border-slate-200 rounded-lg p-4 flex flex-wrap items-center gap-3">
                    <span className="text-2xl font-bold text-[#0284C7] font-serif pr-2 border-r border-slate-200">
                      𝄞 {targetTimeSig}/4
                    </span>
                    {rhythmFigures.length === 0 ? (
                      <span className="text-xs text-slate-400">
                        Pulsa las figuras musicales de abajo para colocarlas en el compás...
                      </span>
                    ) : (
                      rhythmFigures.map((fig, i) => (
                        <div
                          key={i}
                          className="px-3 py-2 rounded-lg bg-[#0284C7]/10 border border-[#0284C7] text-xs font-bold text-[#0F172A] flex items-center gap-1.5"
                        >
                          <span className="text-base">{fig.symbol}</span>
                          <span>{fig.name}</span>
                          <span className="font-mono text-[#0284C7]">
                            ({fig.beats}t)
                          </span>
                        </div>
                      ))
                    )}
                  </div>

                  {totalRhythmBeats === targetTimeSig && (
                    <div className="p-3 rounded-lg bg-[#059669]/10 border border-[#059669]/30 text-xs font-semibold text-[#059669] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>
                        ● ¡Compás de {targetTimeSig}/4 completado con exactitud matemática! (+25 XP)
                      </span>
                    </div>
                  )}
                </div>

                {/* Figure Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { name: 'Redonda', beats: 4, symbol: '𝅝' },
                    { name: 'Blanca', beats: 2, symbol: '𝅗𝅥' },
                    { name: 'Negra', beats: 1, symbol: '♩' },
                    { name: 'Corchea', beats: 0.5, symbol: '♪' },
                  ].map((f) => {
                    const disabled = totalRhythmBeats + f.beats > targetTimeSig;
                    return (
                      <button
                        key={f.name}
                        type="button"
                        disabled={disabled}
                        onClick={() => handleAddFigure(f.name, f.beats, f.symbol)}
                        className={`p-3 rounded-xl border text-center transition-colors ${
                          disabled
                            ? 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed'
                            : 'bg-white border-slate-300 hover:border-[#0284C7] text-[#0F172A]'
                        }`}
                      >
                        <div className="text-xl font-bold">{f.symbol}</div>
                        <div className="text-xs font-bold mt-1">{f.name}</div>
                        <div className="text-[11px] font-mono text-[#0284C7]">
                          Vale {f.beats} {f.beats === 1 ? 'tiempo' : 'tiempos'}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right 5 cols: Plástica Color Lab & Sorolla */}
              <div className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4">
                <h3 className="text-base font-bold text-[#0F172A] flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Palette className="w-4 h-4 text-[#0284C7]" />
                  <span>Laboratorio de Plástica: Teoría del Color y Sorolla</span>
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                    <div className="font-bold text-[#0F172A]">
                      Mezcla de Colores Primarios → Secundarios
                    </div>
                    <div className="font-mono text-[#059669] font-semibold">
                      • Amarillo + Azul Cian = VERDE
                    </div>
                    <div className="font-mono text-[#D97706] font-semibold">
                      • Amarillo + Rojo Magenta = NARANJA
                    </div>
                    <div className="font-mono text-[#0284C7] font-semibold">
                      • Rojo Magenta + Azul Cian = VIOLETA
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                    <div className="font-bold text-[#0284C7]">
                      Joaquín Sorolla: El Pintor Valenciano de la Luz
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      Nacido en Valencia (1863), pintó la luz del mar Mediterráneo y la playa de la Malvarrosa usando blancos luminosos, azules y pinceladas sueltas al aire libre.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. EDUCACIÓN FÍSICA & PILOTA VALENCIANA INTERACTIVE LAB */}
          {selectedSubject === 'educacion-fisica' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    L&apos;Esport Autòcton: Marcador y Reglas de la Pilota Valenciana
                  </h3>
                  <button
                    type="button"
                    onClick={() => setSubView('notes')}
                    className="text-xs font-semibold text-[#0284C7] hover:underline"
                  >
                    Ver Apuntes Completos →
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-2.5 text-center">
                  {[
                    { pt: '1º Punto', name: 'QUINZE (15)' },
                    { pt: '2º Punto', name: 'TRENTA (30)' },
                    { pt: '3º Punto', name: 'VAL' },
                    { pt: '4º Punto', name: 'JOC!' },
                  ].map((score) => (
                    <div
                      key={score.name}
                      className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]"
                    >
                      <div className="text-[11px] text-slate-500">{score.pt}</div>
                      <div className="text-sm font-mono font-bold text-[#0284C7] mt-1">
                        {score.name}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#0284C7]/8 border border-[#0284C7]/30 space-y-1.5">
                    <div className="text-xs font-bold text-[#0284C7]">
                      MODALIDAD 1 · EL RASPALL
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      La pelota <strong>puede dar varios botes y rodar por el suelo</strong>. Los jugadores raspan el suelo con los dedos protegidos para levantarla.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#059669]/8 border border-[#059669]/30 space-y-1.5">
                    <div className="text-xs font-bold text-[#059669]">
                      MODALIDAD 2 · ESCALA I CORDA
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Se juega en el <strong>Trinquet</strong> con una cuerda central alta. La pelota debe pasar por encima de la cuerda y dar como máximo <strong>1 bote</strong> en el suelo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4">
                <h3 className="text-base font-bold text-[#0F172A] border-b border-slate-100 pb-3">
                  Las 4 Capacidades Físicas Básicas (F-R-V-F)
                </h3>
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-lg bg-[#F8FAFC] border border-slate-200">
                    <strong>1. FUERZA:</strong> Vencer una resistencia o peso mediante los músculos.
                  </div>
                  <div className="p-3 rounded-lg bg-[#F8FAFC] border border-slate-200">
                    <strong>2. RESISTENCIA:</strong> Mantener un esfuerzo durante largo tiempo sin agotarse.
                  </div>
                  <div className="p-3 rounded-lg bg-[#F8FAFC] border border-slate-200">
                    <strong>3. VELOCIDAD:</strong> Realizar un movimiento o carrera en el menor tiempo posible.
                  </div>
                  <div className="p-3 rounded-lg bg-[#F8FAFC] border border-slate-200">
                    <strong>4. FLEXIBILIDAD:</strong> Capacidad de estirar músculos y mover articulaciones en toda su amplitud.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. VALORES CÍVICOS Y ÉTICOS INTERACTIVE LAB */}
          {selectedSubject === 'valores' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    Convivencia Escolar, Empatía y Regla Ecológica de las 3R
                  </h3>
                  <button
                    type="button"
                    onClick={() => setSubView('notes')}
                    className="text-xs font-semibold text-[#0284C7] hover:underline"
                  >
                    Ver Apuntes de Valores →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-bold text-slate-600">1. Estilo Pasivo</div>
                    <p className="text-slate-600">
                      Callarse lo que uno siente o necesita por temor a hablar.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#059669]/10 border border-[#059669] space-y-1">
                    <div className="font-bold text-[#059669]">
                      2. Estilo Asertivo (Ideal)
                    </div>
                    <p className="text-[#0F172A]">
                      Expresar nuestras ideas y sentimientos con calma, respeto y empatía.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#DC2626]/10 border border-[#DC2626]/30 space-y-1">
                    <div className="font-bold text-[#DC2626]">3. Estilo Agresivo</div>
                    <p className="text-slate-700">
                      Imponer nuestra voluntad gritando o faltando al respeto.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 text-xs">
                  <div className="font-bold text-[#0284C7]">
                    CLASIFICACIÓN RÁPIDA DE CONTENEDORES (SOSTENIBILIDAD)
                  </div>
                  <p>
                    • <strong>Contenedor Amarillo:</strong> Botellas de plástico, latas metálicas y briks de leche o zumo.
                  </p>
                  <p>
                    • <strong>Contenedor Azul:</strong> Papel, periódicos y cajas de cartón plegadas.
                  </p>
                  <p>
                    • <strong>Contenedor Verde Iglú:</strong> Botellas y tarros de vidrio.
                  </p>
                  <p>
                    • <strong>Contenedor Marrón:</strong> Restos orgánicos de comida y plantas para hacer compost.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4">
                <h3 className="text-base font-bold text-[#0F172A] border-b border-slate-100 pb-3">
                  Decálogo de Seguridad Digital (Ciberconvivencia)
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                  <li className="p-3 rounded-lg bg-[#F8FAFC] border border-slate-200">
                    <strong>1. Datos Privados:</strong> Nunca des tu dirección, teléfono, contraseñas ni horarios a desconocidos en juegos o redes.
                  </li>
                  <li className="p-3 rounded-lg bg-[#F8FAFC] border border-slate-200">
                    <strong>2. Netiqueta:</strong> No escribas en un chat nada que no le dirías a un compañero mirándole a los ojos con respeto.
                  </li>
                  <li className="p-3 rounded-lg bg-[#F8FAFC] border border-slate-200">
                    <strong>3. Pide Ayuda:</strong> Si ves un mensaje que incomoda o acosa a alguien, avisa enseguida a tus padres o profesores.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* 5. MULTI-GRADE UPPER COURSES LAB (6º PRIMARIA TO 2º BACHILLERATO PAU) */}
          {selectedSubject === 'eso-bach' && (
            <div className="space-y-6">
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 space-y-4">
                <div className="text-xs font-bold text-[#0284C7] uppercase">
                  Selecciona el Curso Superior para Estudiar sus Asignaturas, Fórmulas y Ejercicios:
                </div>
                <div className="flex flex-wrap gap-2">
                  {ALL_GRADES_CATALOG.filter((g) => g.id !== '5-primaria').map(
                    (grade) => {
                      const isSel = selectedUpperGrade === grade.id;
                      return (
                        <button
                          key={grade.id}
                          type="button"
                          onClick={() =>
                            setSelectedUpperGrade(
                              grade.id as Exclude<GradeId, '5-primaria'>
                            )
                          }
                          className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-colors whitespace-nowrap shrink-0 ${
                            isSel
                              ? 'bg-[#0284C7] border-[#0284C7] text-white'
                              : 'bg-[#F8FAFC] border-slate-200 text-[#0F172A] hover:bg-slate-100'
                          }`}
                        >
                          {grade.name}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {HIGH_SCHOOL_QUICK_MODULES[selectedUpperGrade]?.map(
                  (mod, idx) => {
                    const qKey = `${selectedUpperGrade}-${idx}`;
                    const picked = upperQuizAnswers[qKey];
                    const isRight = picked === mod.quizCorrect;

                    return (
                      <div
                        key={qKey}
                        className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4"
                      >
                        <div className="text-xs font-semibold text-[#0284C7]">
                          APUNTES, FÓRMULA Y RETO · {selectedUpperGrade.toUpperCase()}
                        </div>
                        <h3 className="text-lg font-bold text-[#0F172A]">
                          {mod.subjectTitle}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {mod.summaryNote}
                        </p>

                        <div className="p-3.5 bg-slate-900 text-white rounded-lg font-mono text-xs font-semibold flex items-center gap-2">
                          <Calculator className="w-4 h-4 text-sky-400 shrink-0" />
                          <span>{mod.formulaOrKeyRule}</span>
                        </div>

                        <div className="pt-3 border-t border-slate-100 space-y-2.5">
                          <div className="text-xs font-bold text-[#0F172A]">
                            Pregunta de Examen: {mod.quizQuestion}
                          </div>
                          <div className="space-y-2">
                            {mod.quizOptions.map((opt) => {
                              const chosen = picked === opt;
                              const correct = opt === mod.quizCorrect;
                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => {
                                    setUpperQuizAnswers((prev) => ({
                                      ...prev,
                                      [qKey]: opt,
                                    }));
                                    if (correct) {
                                      onCompleteActivity(`upper-${qKey}`, 35);
                                    }
                                  }}
                                  className={`w-full text-left p-3 rounded-lg border text-xs font-semibold transition-colors flex items-center justify-between gap-2 ${
                                    chosen
                                      ? correct
                                        ? 'bg-[#059669] border-[#059669] text-white'
                                        : 'bg-[#DC2626] border-[#DC2626] text-white'
                                      : 'bg-[#F8FAFC] border-slate-200 text-[#0F172A] hover:border-[#0284C7]'
                                  }`}
                                >
                                  <span>{opt}</span>
                                  {chosen && (
                                    <span>{correct ? '✓ +35 XP' : '✗'}</span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                          {picked && (
                            <div
                              className={`p-3 rounded-lg text-xs flex items-start gap-2 ${
                                isRight
                                  ? 'bg-[#059669]/10 text-[#0F172A]'
                                  : 'bg-[#D97706]/10 text-[#0F172A]'
                              }`}
                            >
                              {isRight ? (
                                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                              ) : (
                                <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                              )}
                              <span>{mod.quizExplanation}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
