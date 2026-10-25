export type SubjectId =
  | 'ingles'
  | 'matematicas'
  | 'conocimiento'
  | 'lengua'
  | 'valencia'
  | 'artistica'
  | 'educacion-fisica'
  | 'valores'
  | 'otras';

export type GradeId =
  | '5-primaria'
  | '6-primaria'
  | '1-eso'
  | '2-eso'
  | '3-eso'
  | '4-eso'
  | '1-bach'
  | '2-bach';

export interface GradeLevelInfo {
  id: GradeId;
  name: string;
  stage: 'Educación Primaria' | 'Educación Secundaria (ESO)' | 'Bachillerato';
  ageRange: string;
  isPrimaryFocus?: boolean;
  coreSubjects: {
    id: string;
    name: string;
    category: SubjectId;
    topicsCount: number;
    keyTopics: string[];
    annualUpdateNote: string;
  }[];
}

export interface PronunciationItem {
  id: string;
  wordOrPhrase: string;
  translation: string;
  phoneticSpanish: string;
  ipa: string;
  category: 'Palabra Trampa' | 'Frase Oral Diaria' | 'Pregunta de Clase' | 'Verbos en Pasado';
  silentLetterOrTrick: string;
  syllableChunks: string[];
  exampleSentence: string;
  exampleTranslation: string;
}

export interface GrammarExercise {
  id: string;
  topic: string;
  level: string;
  instruction: string;
  spanishPrompt: string;
  targetWords: string[];
  distractorWords: string[];
  grammarRuleTitle: string;
  grammarRuleMnemonic: string;
}

export interface MultiplicationTrick {
  table: number;
  title: string;
  shortRule: string;
  visualExample: string;
  keyTrapPair: { a: number; b: number; answer: number; memoryStory: string };
}

export interface MathWordProblem {
  id: string;
  title: string;
  contextLocation: string;
  difficulty: 'Nivel 1 · Base' | 'Nivel 2 · Intermedio' | 'Nivel 3 · Reto';
  statement: string;
  step1DataOptions: {
    id: string;
    label: string;
    isCorrect: boolean;
  }[];
  visualBarModel: {
    totalLabel: string;
    partLabel: string;
    partsCount: number;
    unitValue: number;
    extraValue?: number;
    extraLabel?: string;
  };
  step2OperationOptions: {
    id: string;
    operationLabel: string;
    reasoning: string;
    isCorrect: boolean;
  }[];
  correctAnswer: number;
  answerUnit: string;
  stepByStepExplanation: string;
  rewardXp: number;
  rewardBadgeName: string;
}

export interface ConceptNode {
  id: string;
  label: string;
  category: 'central' | 'primary' | 'secondary' | 'example';
  x: number;
  y: number;
  summary: string;
  mnemonicHook: string;
  isQuizTarget?: boolean;
  quizOptions?: string[];
}

export interface ConceptEdge {
  from: string;
  to: string;
  relationLabel: string;
}

export interface ConceptMapTopic {
  id: string;
  title: string;
  unitNumber: string;
  subtitle: string;
  generalMnemonicTitle: string;
  generalMnemonicStory: string;
  visualDiagramType: 'ecosystem' | 'nutrition' | 'plants' | 'relief' | 'energy' | 'cells';
  nodes: ConceptNode[];
  edges: ConceptEdge[];
}

export interface AdaptiveFlashcard {
  id: string;
  gradeId: GradeId;
  subject: SubjectId;
  subjectLabel: string;
  topic: string;
  frontQuestion: string;
  backAnswer: string;
  mnemonicHint: string;
  pronunciationText?: string;
  box: 1 | 2 | 3;
  lastReviewed?: string;
  timesCorrect: number;
}

export const ENGLISH_PRONUNCIATION_ITEMS: PronunciationItem[] = [
  {
    id: 'pron-1',
    wordOrPhrase: 'Wednesday',
    translation: 'Miércoles',
    phoneticSpanish: 'UÉNS - dei',
    ipa: '/ˈwɛnzdeɪ/',
    category: 'Palabra Trampa',
    silentLetterOrTrick: '¡La primera "D" y la primera "E" son mudas! Imagina que dices "UÉNS-dei", nunca "Wed-nes-day".',
    syllableChunks: ['WENS', 'day'],
    exampleSentence: 'We have English and Science on Wednesday.',
    exampleTranslation: 'Tenemos inglés y conocimiento del medio el miércoles.',
  },
  {
    id: 'pron-2',
    wordOrPhrase: 'Island',
    translation: 'Isla',
    phoneticSpanish: 'ÁI - land',
    ipa: '/ˈaɪlənd/',
    category: 'Palabra Trampa',
    silentLetterOrTrick: 'La "S" está escondida como un tesoro en la isla: ¡no suena! Empieza diciendo "ÁI" (como "ojo" en inglés).',
    syllableChunks: ['AI', 'land'],
    exampleSentence: 'Mallorca is a big island in the Mediterranean Sea.',
    exampleTranslation: 'Mallorca es una isla grande en el mar Mediterráneo.',
  },
  {
    id: 'pron-3',
    wordOrPhrase: 'Vegetable',
    translation: 'Verdura / Hortaliza',
    phoneticSpanish: 'VÉCH - ta - bol',
    ipa: '/ˈvɛdʒtəbəl/',
    category: 'Palabra Trampa',
    silentLetterOrTrick: 'Tiene 4 sílabas al escribirse pero solo 3 al hablar: la segunda "E" desaparece. Di "VÉCH-ta-bol", no "ve-ge-ta-ble".',
    syllableChunks: ['VECH', 'ta', 'bol'],
    exampleSentence: 'In Museros we grow fresh vegetables in the fields.',
    exampleTranslation: 'En Museros cultivamos verduras frescas en la huerta.',
  },
  {
    id: 'pron-4',
    wordOrPhrase: 'Climb the mountain',
    translation: 'Escalar la montaña',
    phoneticSpanish: 'KLÁIM da MÁUN - ten',
    ipa: '/klaɪm ðə ˈmaʊntɪn/',
    category: 'Frase Oral Diaria',
    silentLetterOrTrick: 'En "Climb", la "B" final se queda dormida y no se pronuncia: suena "KLÁIM". En "Mountain", el final suena suave "-ten".',
    syllableChunks: ['KLAIM', 'the', 'MAUN', 'ten'],
    exampleSentence: 'They want to climb the mountain on Saturday morning.',
    exampleTranslation: 'Ellos quieren escalar la montaña el sábado por la mañana.',
  },
  {
    id: 'pron-5',
    wordOrPhrase: 'Because',
    translation: 'Porque (en respuestas)',
    phoneticSpanish: 'bi - CÓS',
    ipa: '/bɪˈkɒz/',
    category: 'Palabra Trampa',
    silentLetterOrTrick: 'Aunque tiene "a-u", nunca digas "be-cau-se". Suena cortito y directo: "bi-CÓS".',
    syllableChunks: ['bi', 'COS'],
    exampleSentence: 'I am happy because I solved all the math problems.',
    exampleTranslation: 'Estoy contento porque resolví todos los problemas de mates.',
  },
  {
    id: 'pron-6',
    wordOrPhrase: 'Could you repeat that, please?',
    translation: '¿Podrías repetir eso, por favor?',
    phoneticSpanish: 'KÚD iu ri-PÍT dat, plís',
    ipa: '/kʊd juː rɪˈpiːt ðæt pliːz/',
    category: 'Pregunta de Clase',
    silentLetterOrTrick: 'En "Could", "Should" y "Would", la "L" y la "O" no suenan: di simplemente "KÚD", "SHÚD", "UÚD".',
    syllableChunks: ['KUD', 'you', 'ri-PIT', 'that', 'plis'],
    exampleSentence: 'Excuse me teacher, could you repeat that, please?',
    exampleTranslation: 'Disculpe profe, ¿podría repetir eso, por favor?',
  },
  {
    id: 'pron-7',
    wordOrPhrase: 'There are three trees near the school',
    translation: 'Hay tres árboles cerca del colegio',
    phoneticSpanish: 'DÉR ar ZRÍ TRÍS níar da SKÚL',
    ipa: '/ðɛər ɑː θriː triːz nɪə ðə skuːl/',
    category: 'Frase Oral Diaria',
    silentLetterOrTrick: '"Three" (3) se hace poniendo la lengua entre los dientes (como la Z española: ZRÍ). "Trees" (árboles) se hace golpeando con la T (TRÍS). ¡Y "School" empieza directo con S, nunca "es-cool"!',
    syllableChunks: ['DER ar', 'ZRI', 'TRIS', 'niar the', 'SKUL'],
    exampleSentence: 'There are three big trees near Blasco Ibáñez school.',
    exampleTranslation: 'Hay tres árboles grandes cerca del colegio Blasco Ibáñez.',
  },
  {
    id: 'pron-8',
    wordOrPhrase: 'Walked, Played and Visited',
    translation: 'Caminé, Jugué y Visité (Pasado -ed)',
    phoneticSpanish: 'UÓKT · PLÉID · VÍ-si-ted',
    ipa: '/wɔːkt pleɪd ˈvɪzɪtɪd/',
    category: 'Verbos en Pasado',
    silentLetterOrTrick: '¡El gran secreto del pasado "-ed"! Solo pronunciamos "-ed" cuando el verbo acaba en T o D (Visited -> VÍ-si-ted). En el resto, la "E" no suena: Walked -> "UÓKT", Played -> "PLÉID".',
    syllableChunks: ['UOKT', 'PLEID', 'VI-si-ted'],
    exampleSentence: 'Yesterday I walked to school and played with my friends.',
    exampleTranslation: 'Ayer caminé al colegio y jugué con mis amigos.',
  },
  {
    id: 'pron-9',
    wordOrPhrase: 'Castle and Listen',
    translation: 'Castillo y Escuchar (La T muda)',
    phoneticSpanish: 'KÁ-sol · LÍ-sen',
    ipa: '/ˈkɑːsəl ˈlɪsən/',
    category: 'Palabra Trampa',
    silentLetterOrTrick: 'En "Castle", "Listen" y "Often", ¡la letra "T" es totalmente muda! Di "KÁ-sol" y "LÍ-sen".',
    syllableChunks: ['KA-sol', 'LI-sen'],
    exampleSentence: 'Listen to the story about the old castle.',
    exampleTranslation: 'Escucha la historia sobre el viejo castillo.',
  },
  {
    id: 'pron-10',
    wordOrPhrase: 'Comfortable',
    translation: 'Cómodo / Confortable',
    phoneticSpanish: 'KÁMF - ta - bol',
    ipa: '/ˈkʌmftəbəl/',
    category: 'Palabra Trampa',
    silentLetterOrTrick: 'No se dice "com-for-ta-ble". El "-for-" casi desaparece y suena en 3 golpes rápidos: "KÁMF-ta-bol".',
    syllableChunks: ['KAMF', 'ta', 'bol'],
    exampleSentence: 'These trainers are very comfortable for running.',
    exampleTranslation: 'Estas zapatillas son muy cómodas para correr.',
  },
  {
    id: 'pron-11',
    wordOrPhrase: 'Half past eight',
    translation: 'Las ocho y media (8:30)',
    phoneticSpanish: 'JÁF past ÉIT',
    ipa: '/hɑːf pɑːst eɪt/',
    category: 'Frase Oral Diaria',
    silentLetterOrTrick: 'En "Half" (media), la "L" es muda (suena "JÁF"). En "Eight" (ocho), la "G" y la "H" son mudas (suena "ÉIT").',
    syllableChunks: ['JAF', 'past', 'EIT'],
    exampleSentence: 'School starts at nine, so I leave home at half past eight.',
    exampleTranslation: 'El cole empieza a las nueve, así que salgo de casa a las ocho y media.',
  },
  {
    id: 'pron-12',
    wordOrPhrase: 'Know and Knee',
    translation: 'Saber y Rodilla (La K muda)',
    phoneticSpanish: 'NÓU · NÍI',
    ipa: '/nəʊ niː/',
    category: 'Palabra Trampa',
    silentLetterOrTrick: 'Siempre que una palabra en inglés empieza por "KN-" (know, knee, knife), ¡la K inicial no suena! Empieza directo con la N.',
    syllableChunks: ['NOU', 'NII'],
    exampleSentence: 'I know how to protect my knees when I skate.',
    exampleTranslation: 'Sé cómo proteger mis rodillas cuando patino.',
  },
  {
    id: 'pron-13',
    wordOrPhrase: 'How do you spell that word?',
    translation: '¿Cómo deletreas esa palabra?',
    phoneticSpanish: 'JÁU du iu SPÉL dat UÉRD',
    ipa: '/haʊ duː juː spɛl ðæt wɜːd/',
    category: 'Pregunta de Clase',
    silentLetterOrTrick: 'Recuerda: "Spell" empieza directo con S (nunca "es-pell"), y "Word" (palabra) suena con una E cerrada "UÉRD".',
    syllableChunks: ['JAU du iu', 'SPEL', 'dat', 'UERD'],
    exampleSentence: 'How do you spell Wednesday? W-E-D-N-E-S-D-A-Y.',
    exampleTranslation: '¿Cómo deletreas miércoles? W-E-D-N-E-S-D-A-Y.',
  },
  {
    id: 'pron-14',
    wordOrPhrase: 'Bought and Thought',
    translation: 'Compré y Pensé (Pasados con -ought)',
    phoneticSpanish: 'BÓT · ZÓT',
    ipa: '/bɔːt θɔːt/',
    category: 'Verbos en Pasado',
    silentLetterOrTrick: 'Todas las letras "-ough-" juntas suenan simplemente como una "O" larga: Bought (de buy) suena "BÓT" y Thought (de think) suena "ZÓT".',
    syllableChunks: ['BOT', 'ZOT'],
    exampleSentence: 'I thought about my friend and bought a present.',
    exampleTranslation: 'Pensé en mi amigo y compré un regalo.',
  },
];

export const ENGLISH_GRAMMAR_EXERCISES: GrammarExercise[] = [
  {
    id: 'gram-1',
    topic: 'Present Simple: La Super "-S" de He / She / It',
    level: 'Unidad 1 · Present Simple',
    instruction: 'Ordena los bloques para formar la frase en inglés correctamente:',
    spanishPrompt: 'Mi hermano juega al fútbol todos los martes.',
    targetWords: ['My', 'brother', 'plays', 'football', 'every', 'Tuesday'],
    distractorWords: ['play', 'playing', 'on'],
    grammarRuleTitle: 'Regla del Superhéroe (He / She / It)',
    grammarRuleMnemonic: 'En afirmativa del Present Simple, cuando hablamos de ÉL (He), ELLA (She) o ELLO (It), el verbo se pone la capa de "Super-S": My brother PLAYS.',
  },
  {
    id: 'gram-2',
    topic: 'Preguntas en Present Simple: DO vs DOES',
    level: 'Unidad 1 · Preguntas',
    instruction: 'Construye la pregunta colocando el auxiliar al principio:',
    spanishPrompt: '¿A tu amiga le gusta estudiar ciencias?',
    targetWords: ['Does', 'your', 'friend', 'like', 'studying', 'science?'],
    distractorWords: ['Do', 'likes', 'is'],
    grammarRuleTitle: 'El Ladrón DOES roba la -S',
    grammarRuleMnemonic: 'Para preguntar sobre "your friend" (She/He), usamos DOES al principio. Y como DOES ya lleva la "-es" puesta, el verbo principal "like" se queda sin -s.',
  },
  {
    id: 'gram-3',
    topic: 'Posición de los Adverbios de Frecuencia (Always / Never)',
    level: 'Unidad 2 · Rutinas y Deportes',
    instruction: 'Coloca el adverbio de frecuencia en su lugar exacto:',
    spanishPrompt: 'Ella siempre va a nadar los viernes.',
    targetWords: ['She', 'always', 'goes', 'swimming', 'on', 'Fridays'],
    distractorWords: ['go', 'play', 'in'],
    grammarRuleTitle: 'Always va DELANTE del verbo principal',
    grammarRuleMnemonic: 'Los adverbios (always, usually, never) van delante del verbo normal (She ALWAYS goes), y los deportes con -ing van con GO (goes swimming).',
  },
  {
    id: 'gram-4',
    topic: 'Present Continuous: Lo que pasa AHORA MISMO',
    level: 'Unidad 2 · Acciones en curso',
    instruction: 'Recuerda que el verbo en -ING siempre necesita el verbo TO BE (am / is / are) delante:',
    spanishPrompt: 'Nosotros estamos escuchando a la profesora ahora.',
    targetWords: ['We', 'are', 'listening', 'to', 'the', 'teacher', 'now'],
    distractorWords: ['listen', 'is', 'do'],
    grammarRuleTitle: 'El Tren del -ING (Sujeto + AM/IS/ARE + Verbo-ING)',
    grammarRuleMnemonic: 'Un verbo con "-ING" nunca puede ir solo sin su locomotora (AM, IS, ARE). We + ARE + listening.',
  },
  {
    id: 'gram-5',
    topic: 'There is (Singular) vs There are (Plural)',
    level: 'Unidad 3 · Mi Pueblo',
    instruction: 'Ordena la frase fijándote en si hablamos de una cosa o de varias:',
    spanishPrompt: 'Hay veinte alumnos en nuestra clase de quinto.',
    targetWords: ['There', 'are', 'twenty', 'students', 'in', 'our', 'class'],
    distractorWords: ['is', 'have', 'student'],
    grammarRuleTitle: 'IS = 1 solo · ARE = 2 o más',
    grammarRuleMnemonic: 'Nunca uses "Have" para decir "Hay". En inglés usamos THERE IS (1 cosa: There is a book) y THERE ARE (varias cosas: There are twenty students).',
  },
  {
    id: 'gram-6',
    topic: 'Negativas y Preguntas con ANY (There aren\'t any)',
    level: 'Unidad 3 · Some vs Any',
    instruction: 'Elige entre SOME y ANY para construir una frase negativa:',
    spanishPrompt: 'No hay ningún cine en esta calle.',
    targetWords: ['There', 'aren\'t', 'any', 'cinemas', 'in', 'this', 'street'],
    distractorWords: ['some', 'isn\'t', 'a'],
    grammarRuleTitle: 'SOME (+) Afirmativa · ANY (- y ?) Negativa y Pregunta',
    grammarRuleMnemonic: 'Como "aren\'t" es negativo y "cinemas" es plural, usamos obligatoriamente ANY.',
  },
  {
    id: 'gram-7',
    topic: 'Comparativos: Adjetivos cortos (-ER THAN) vs largos (MORE ... THAN)',
    level: 'Unidad 4 · Naturaleza y Animales',
    instruction: 'Compara los dos animales usando la regla de los adjetivos cortos:',
    spanishPrompt: 'Un delfín es más rápido que una tortuga.',
    targetWords: ['A', 'dolphin', 'is', 'faster', 'than', 'a', 'turtle'],
    distractorWords: ['more', 'fast', 'that'],
    grammarRuleTitle: 'Corto = -ER · Largo = MORE',
    grammarRuleMnemonic: '"Fast" es cortito (1 sílaba), así que le pegamos "-ER" al final: FASTER THAN. Si fuera largo como "intelligent", diríamos MORE intelligent THAN.',
  },
  {
    id: 'gram-8',
    topic: 'Superlativos con Adjetivos Largos (THE MOST)',
    level: 'Unidad 4 · Superlativos',
    instruction: 'Destaca cuál es el más interesante de todos:',
    spanishPrompt: 'Conocimiento del Medio es la asignatura más interesante.',
    targetWords: ['Science', 'is', 'the', 'most', 'interesting', 'subject'],
    distractorWords: ['more', 'than', 'interestinger'],
    grammarRuleTitle: 'THE MOST + Adjetivo Largo',
    grammarRuleMnemonic: '"Interesting" es una palabra larga, así que su superlativo se forma con THE MOST interesting.',
  },
  {
    id: 'gram-9',
    topic: 'Past Simple: Ayer y el pasado con DIDN\'T',
    level: 'Unidad 7 · Pasado Simple',
    instruction: 'Forma la frase negativa en pasado recordando qué pasa cuando aparece DIDN\'T:',
    spanishPrompt: 'Ayer no fuimos al parque porque llovió.',
    targetWords: ['Yesterday', 'we', 'didn\'t', 'go', 'to', 'the', 'park'],
    distractorWords: ['went', 'don\'t', 'goes'],
    grammarRuleTitle: 'DID y DIDN\'T devuelven el verbo al presente',
    grammarRuleMnemonic: 'En afirmativa decimos "We WENT" (fuimos). Pero cuando entra el escudo negativo DIDN\'T, el verbo vuelve a su forma normal: "We DIDN\'T GO".',
  },
  {
    id: 'gram-10',
    topic: 'Planes Futuros con BE GOING TO (Voy a...)',
    level: 'Unidad 8 · Planes de Verano',
    instruction: 'Construye la frase de futuro sin olvidar el verbo To Be:',
    spanishPrompt: 'Vamos a visitar a nuestros abuelos mañana.',
    targetWords: ['We', 'are', 'going', 'to', 'visit', 'our', 'grandparents', 'tomorrow'],
    distractorWords: ['is', 'go', 'visiting'],
    grammarRuleTitle: 'Sujeto + AM/IS/ARE + GOING TO + Verbo',
    grammarRuleMnemonic: 'Para decir "Vamos a visitar", unimos We + ARE + GOING TO + visit.',
  },
];

export const MULTIPLICATION_TRICKS: MultiplicationTrick[] = [
  {
    table: 2,
    title: 'Tabla del 2 · El Espejo de los Dobles',
    shortRule: 'Multiplicar por 2 es sumar el número consigo mismo (hacer el doble). Todos acaban en cifra par: 0, 2, 4, 6, 8.',
    visualExample: '2 × 7 = 7 + 7 = 14',
    keyTrapPair: { a: 2, b: 8, answer: 16, memoryStory: 'Dos pulpos de 8 patas tienen 8 + 8 = 16 patas en total.' },
  },
  {
    table: 3,
    title: 'Tabla del 3 · El Triángulo que Suma 3, 6 o 9',
    shortRule: 'Si sumas las dos cifras de cualquier resultado de la tabla del 3, siempre da 3, 6 o 9 (ej. 3×8=24 -> 2+4=6).',
    visualExample: '3 × 7 = (2 × 7) + 7 = 14 + 7 = 21',
    keyTrapPair: { a: 3, b: 8, answer: 24, memoryStory: 'Un día tiene 24 horas divididas en 3 partes de 8 horas (dormir, cole, jugar): 3 × 8 = 24.' },
  },
  {
    table: 4,
    title: 'Tabla del 4 · El Doble del Doble',
    shortRule: '¿No recuerdas por 4? Haz el doble dos veces seguidas. ¡Es infalible!',
    visualExample: '4 × 7 → Doble de 7 es 14 → Doble de 14 es 28',
    keyTrapPair: { a: 4, b: 7, answer: 28, memoryStory: 'Febrero tiene 4 semanas exactas de 7 días: 4 × 7 = 28 días.' },
  },
  {
    table: 5,
    title: 'Tabla del 5 · El Reloj de las Manos (0 y 5)',
    shortRule: 'Todos los resultados terminan en 0 (si es par) o en 5 (si es impar). Es la mitad de multiplicar por 10.',
    visualExample: '5 × 8 → Mitad de 80 = 40 · 5 × 7 → 35',
    keyTrapPair: { a: 5, b: 9, answer: 45, memoryStory: 'En el reloj, cuando la aguja larga apunta al 9 han pasado 45 minutos (5 × 9 = 45).' },
  },
  {
    table: 6,
    title: 'Tabla del 6 · La Rima de los Pares Gemelos',
    shortRule: 'Cuando multiplicas 6 por un número par (2, 4, 6, 8), ¡el resultado termina en ese mismo número par y empieza por su mitad!',
    visualExample: '6 × 2 = 12 · 6 × 4 = 24 · 6 × 6 = 36 · 6 × 8 = 48',
    keyTrapPair: { a: 6, b: 8, answer: 48, memoryStory: '¡Rima mágica! "Seis por ocho, cuarenta y ocho (un bizcocho)": 6 × 8 = 48.' },
  },
  {
    table: 7,
    title: 'Tabla del 7 · La Escalera Secreta 5-6-7-8',
    shortRule: 'Para los más difíciles (7×6, 7×7, 7×8) usa la escalera consecutiva y el cuadrado de las 7 semanas.',
    visualExample: '5, 6, 7, 8 → 56 = 7 × 8',
    keyTrapPair: { a: 7, b: 8, answer: 56, memoryStory: 'Cuenta seguido en escalera: ¡Cinco, Seis, Siete, Ocho! -> 56 = 7 × 8.' },
  },
  {
    table: 8,
    title: 'Tabla del 8 · Cuenta Atrás Par (8, 6, 4, 2, 0)',
    shortRule: 'Las unidades van bajando de 2 en 2 (8, 6, 4, 2, 0) y puedes hallar cualquiera sumando un grupo más a la del 7 o doblando 3 veces.',
    visualExample: '8 × 8 = 64 ("Ocho por ocho, sesenta y cuatro")',
    keyTrapPair: { a: 8, b: 7, answer: 56, memoryStory: 'Igual que 7 × 8: recuerda la escalera 5 - 6 = 7 × 8 (56).' },
  },
  {
    table: 9,
    title: 'Tabla del 9 · El Ascensor (Decenas suben, Unidades bajan)',
    shortRule: 'La primera cifra es siempre 1 menos que el número por el que multiplicas, y las dos cifras SIEMPRE suman 9.',
    visualExample: '9 × 7 → Empieza por (7 - 1 = 6) y para sumar 9 falta 3 → 63',
    keyTrapPair: { a: 9, b: 7, answer: 63, memoryStory: 'Quítale 1 al 7 (queda 6). ¿Cuánto le falta a 6 para llegar a 9? ¡3! Resultado: 63.' },
  },
];

export const MATH_WORD_PROBLEMS: MathWordProblem[] = [
  {
    id: 'prob-1',
    title: 'Excursión del CEIP Blasco Ibáñez a la Albufera',
    contextLocation: 'Museros → Parque Natural de la Albufera',
    difficulty: 'Nivel 1 · Base',
    statement: 'Los alumnos de 5º y 6º de Primaria del colegio Blasco Ibáñez de Museros van de excursión a la Albufera. Han llenado 3 autobuses con 24 alumnos en cada autobús, y además van 6 maestros acompañantes en una furgoneta. ¿Cuántas personas van a la excursión en total?',
    step1DataOptions: [
      { id: 'd1', label: '3 autobuses con 24 alumnos cada uno + 6 maestros extra', isCorrect: true },
      { id: 'd2', label: '24 autobuses con 3 alumnos y se bajan 6 maestros', isCorrect: false },
      { id: 'd3', label: '5º y 6º de Primaria multiplicado por 24', isCorrect: false },
    ],
    visualBarModel: {
      totalLabel: 'Total de personas en la excursión',
      partLabel: 'Autobús',
      partsCount: 3,
      unitValue: 24,
      extraValue: 6,
      extraLabel: '+ 6 maestros',
    },
    step2OperationOptions: [
      { id: 'op1', operationLabel: '(3 × 24) + 6', reasoning: 'Primero multiplicamos los 3 grupos iguales de 24 alumnos y luego sumamos los 6 maestros.', isCorrect: true },
      { id: 'op2', operationLabel: '24 + 3 + 6', reasoning: 'Sumar todos los números sin tener en cuenta que hay 24 en cada autobús.', isCorrect: false },
      { id: 'op3', operationLabel: '(24 ÷ 3) + 6', reasoning: 'Repartir los alumnos entre los autobuses.', isCorrect: false },
    ],
    correctAnswer: 78,
    answerUnit: 'personas',
    stepByStepExplanation: '1º Calculamos los alumnos de los 3 autobuses: 3 × 24 = 72 alumnos. 2º Sumamos los 6 maestros: 72 + 6 = 78 personas en total.',
    rewardXp: 50,
    rewardBadgeName: 'Explorador de la Albufera',
  },
  {
    id: 'prob-2',
    title: 'Cosecha de Naranjas en la Huerta de Museros',
    contextLocation: 'Huerta de Museros (l\'Horta Nord)',
    difficulty: 'Nivel 1 · Base',
    statement: 'En un campo de naranjos de Museros se han recogido 168 kilos de naranjas esta mañana. El agricultor quiere repartirlos en partes iguales dentro de 8 cajas para llevarlos al mercado. ¿Cuántos kilos de naranjas pondrá en cada caja?',
    step1DataOptions: [
      { id: 'd1', label: 'Total de 168 kg a repartir en partes iguales en 8 cajas', isCorrect: true },
      { id: 'd2', label: '8 cajas que pesan 168 kg cada una', isCorrect: false },
      { id: 'd3', label: '168 kg más 8 kg nuevos', isCorrect: false },
    ],
    visualBarModel: {
      totalLabel: '168 kg de naranjas en total (repartidos en 8 cajas)',
      partLabel: 'Caja',
      partsCount: 8,
      unitValue: 21,
    },
    step2OperationOptions: [
      { id: 'op1', operationLabel: '168 ÷ 8', reasoning: 'Como repartimos un total de 168 kg en 8 partes iguales, debemos dividir.', isCorrect: true },
      { id: 'op2', operationLabel: '168 × 8', reasoning: 'Multiplicar haría el número 8 veces más grande.', isCorrect: false },
      { id: 'op3', operationLabel: '168 - 8', reasoning: 'Restar solo quitaría 8 kilos una vez.', isCorrect: false },
    ],
    correctAnswer: 21,
    answerUnit: 'kilos por caja',
    stepByStepExplanation: 'Dividimos las decenas: 16 ÷ 8 = 2 (no sobra nada). Bajamos el 8 de las unidades: 8 ÷ 8 = 1. Resultado: 21 kilos en cada caja (porque 8 × 21 = 168).',
    rewardXp: 60,
    rewardBadgeName: 'Maestro de la Huerta',
  },
  {
    id: 'prob-3',
    title: 'El Huerto Escolar del Colegio Blasco Ibáñez',
    contextLocation: 'Patio del CEIP Blasco Ibáñez',
    difficulty: 'Nivel 2 · Intermedio',
    statement: 'En el huerto escolar de 5º de Primaria hemos plantado 7 filas de tomateras. En cada fila hay 8 plantas, y cada planta ya tiene 2 tomates rojos listos para recoger. ¿Cuántos tomates podemos recoger en total?',
    step1DataOptions: [
      { id: 'd1', label: '7 filas × 8 plantas por fila × 2 tomates en cada planta', isCorrect: true },
      { id: 'd2', label: '7 filas + 8 plantas + 2 tomates', isCorrect: false },
      { id: 'd3', label: '8 plantas menos 2 tomates en 7 filas', isCorrect: false },
    ],
    visualBarModel: {
      totalLabel: 'Total de tomates en las 7 filas',
      partLabel: 'Fila (8×2=16)',
      partsCount: 7,
      unitValue: 16,
    },
    step2OperationOptions: [
      { id: 'op1', operationLabel: '(7 × 8) × 2', reasoning: 'Multiplicamos 7 filas por 8 plantas (¡truco de la escalera: 56 plantas!) y luego el doble por tener 2 tomates cada una.', isCorrect: true },
      { id: 'op2', operationLabel: '(7 + 8) × 2', reasoning: 'Sumar filas y plantas no da el total de plantas.', isCorrect: false },
      { id: 'op3', operationLabel: '56 ÷ 2', reasoning: 'Dividir calcularía la mitad de las plantas.', isCorrect: false },
    ],
    correctAnswer: 112,
    answerUnit: 'tomates',
    stepByStepExplanation: '1º Usamos el truco "5, 6, 7, 8": 7 × 8 = 56 plantas de tomate. 2º Como cada planta tiene 2 tomates, hacemos el doble de 56: 56 × 2 = 112 tomates.',
    rewardXp: 75,
    rewardBadgeName: 'Ingeniero Botánico',
  },
  {
    id: 'prob-4',
    title: 'Renovación de Libros de la Biblioteca de Aula',
    contextLocation: 'Aula de 5º Primaria',
    difficulty: 'Nivel 2 · Intermedio',
    statement: 'La biblioteca de 5º tenía un presupuesto de 200 euros para comprar cómics en inglés. Han comprado 9 colecciones que cuestan 14 euros cada una. ¿Cuánto dinero les ha sobrado en el presupuesto?',
    step1DataOptions: [
      { id: 'd1', label: 'Presupuesto inicial de 200 € menos el coste de 9 colecciones a 14 € cada una', isCorrect: true },
      { id: 'd2', label: 'Sumar 200 € más 9 € más 14 €', isCorrect: false },
      { id: 'd3', label: 'Repartir 200 € entre 9 alumnos', isCorrect: false },
    ],
    visualBarModel: {
      totalLabel: 'Coste gastado (9 × 14 €) + Dinero sobrante = 200 €',
      partLabel: 'Colección',
      partsCount: 9,
      unitValue: 14,
      extraValue: 74,
      extraLabel: 'Sobra (? €)',
    },
    step2OperationOptions: [
      { id: 'op1', operationLabel: '200 - (9 × 14)', reasoning: 'Primero calculamos cuánto cuestan las 9 colecciones (9 × 14) y se lo restamos a los 200 € iniciales.', isCorrect: true },
      { id: 'op2', operationLabel: '(200 - 9) × 14', reasoning: 'Restar colecciones a euros no tiene sentido matemático.', isCorrect: false },
      { id: 'op3', operationLabel: '9 × 14 = 126', reasoning: '126 € es lo que han gastado, pero la pregunta pide cuánto dinero ha SOBRADO.', isCorrect: false },
    ],
    correctAnswer: 74,
    answerUnit: 'euros sobrantes',
    stepByStepExplanation: '1º Multiplicamos 9 × 14: (9 × 10 = 90) + (9 × 4 = 36) = 126 euros gastados. 2º Restamos al presupuesto: 200 - 126 = 74 euros sobrantes.',
    rewardXp: 80,
    rewardBadgeName: 'Tesorero de 5º',
  },
  {
    id: 'prob-5',
    title: 'Fracciones en la Carrera Solidaria del Colegio',
    contextLocation: 'Pista Deportiva · Museros',
    difficulty: 'Nivel 3 · Reto',
    statement: 'En la carrera solidaria del colegio participan 120 estudiantes. Tres cuartas partes (3/4) de los participantes corren con camiseta azul y el resto con camiseta verde. ¿Cuántos estudiantes llevan camiseta AZUL?',
    step1DataOptions: [
      { id: 'd1', label: 'Calcular 3/4 de un total de 120 estudiantes (dividir en 4 partes y tomar 3)', isCorrect: true },
      { id: 'd2', label: 'Multiplicar 120 por 4 y dividir entre 3', isCorrect: false },
      { id: 'd3', label: 'Restar 120 menos 34', isCorrect: false },
    ],
    visualBarModel: {
      totalLabel: '3/4 de 120 estudiantes (cada cuarto = 120 ÷ 4 = 30)',
      partLabel: '1/4 (30)',
      partsCount: 3,
      unitValue: 30,
      extraValue: 30,
      extraLabel: '1/4 verde (30)',
    },
    step2OperationOptions: [
      { id: 'op1', operationLabel: '(120 ÷ 4) × 3', reasoning: 'Para hallar una fracción de un número, dividimos entre el denominador (4 partes iguales) y multiplicamos por el numerador (3 partes azules).', isCorrect: true },
      { id: 'op2', operationLabel: '120 ÷ 3', reasoning: 'Eso calcularía un tercio (1/3), no tres cuartos (3/4).', isCorrect: false },
      { id: 'op3', operationLabel: '120 - 30', reasoning: 'Aunque da el mismo resultado por ser el complementario de 1/4, primero necesitas saber que 1/4 es 30.', isCorrect: false },
    ],
    correctAnswer: 90,
    answerUnit: 'estudiantes con camiseta azul',
    stepByStepExplanation: '1º Dividimos los 120 estudiantes en 4 cuartos iguales: 120 ÷ 4 = 30 estudiantes en cada cuarto. 2º Tomamos 3 cuartos azules: 30 × 3 = 90 estudiantes.',
    rewardXp: 100,
    rewardBadgeName: 'Arquitecto de Fracciones',
  },
  {
    id: 'prob-6',
    title: 'Vallado y Superficie de la Pista de Baloncesto',
    contextLocation: 'Patio Deportivo · Geometría',
    difficulty: 'Nivel 2 · Intermedio',
    statement: 'Queremos pintar la línea exterior (el perímetro) de una pista rectangular de minasket que mide 20 metros de largo y 10 metros de ancho. ¿Cuántos metros mide la línea de todo el borde exterior?',
    step1DataOptions: [
      { id: 'd1', label: 'Un rectángulo tiene 2 lados largos de 20 m y 2 lados anchos de 10 m', isCorrect: true },
      { id: 'd2', label: 'Multiplicar 20 por 10 para hallar el área interior', isCorrect: false },
      { id: 'd3', label: 'Sumar solo un largo y un ancho (20 + 10)', isCorrect: false },
    ],
    visualBarModel: {
      totalLabel: 'Perímetro = Suma de los 4 lados del rectángulo',
      partLabel: 'Lado largo',
      partsCount: 2,
      unitValue: 20,
      extraValue: 20,
      extraLabel: '2 anchos (10+10)',
    },
    step2OperationOptions: [
      { id: 'op1', operationLabel: '20 + 10 + 20 + 10', reasoning: 'El perímetro es el borde exterior, así que sumamos los 4 lados del rectángulo.', isCorrect: true },
      { id: 'op2', operationLabel: '20 × 10 = 200', reasoning: '20 × 10 calcula el ÁREA interior (200 m²), no la línea del borde.', isCorrect: false },
      { id: 'op3', operationLabel: '20 + 10 = 30', reasoning: 'Faltaría sumar los otros dos lados del rectángulo.', isCorrect: false },
    ],
    correctAnswer: 60,
    answerUnit: 'metros de perímetro',
    stepByStepExplanation: 'Sumamos los dos lados de 20 m (40 m) más los dos lados de 10 m (20 m): 40 + 20 = 60 metros de borde.',
    rewardXp: 85,
    rewardBadgeName: 'Geómetra del Patio',
  },
  {
    id: 'prob-7',
    title: 'Descuento del 25% en Material de Laboratorio',
    contextLocation: 'Aula de Ciencias · Porcentajes',
    difficulty: 'Nivel 3 · Reto',
    statement: 'El colegio va a comprar un microscopio digital que cuesta 120 euros. Por ser para un colegio público nos hacen un 25% de descuento. ¿Cuántos euros nos descuentan (rebajan) del precio?',
    step1DataOptions: [
      { id: 'd1', label: 'Calcular el 25% (la cuarta parte) de 120 euros', isCorrect: true },
      { id: 'd2', label: 'Restar 120 menos 25', isCorrect: false },
      { id: 'd3', label: 'Multiplicar 120 por 25', isCorrect: false },
    ],
    visualBarModel: {
      totalLabel: '100% = 120 € dividido en 4 partes del 25%',
      partLabel: '25% (1/4)',
      partsCount: 4,
      unitValue: 30,
    },
    step2OperationOptions: [
      { id: 'op1', operationLabel: '(25 × 120) ÷ 100  ó  120 ÷ 4', reasoning: 'El 25% equivale a 25/100, que es exactamente dividir entre 4.', isCorrect: true },
      { id: 'op2', operationLabel: '120 - 25', reasoning: '25 es un porcentaje (%), no son 25 euros directos.', isCorrect: false },
      { id: 'op3', operationLabel: '120 ÷ 2', reasoning: 'Dividir entre 2 calcularía el 50% (la mitad).', isCorrect: false },
    ],
    correctAnswer: 30,
    answerUnit: 'euros de descuento',
    stepByStepExplanation: 'El 25% es la cuarta parte: 120 ÷ 4 = 30 euros de descuento (por lo que el microscopio costará 120 - 30 = 90 €).',
    rewardXp: 95,
    rewardBadgeName: 'Experto en Porcentajes',
  },
  {
    id: 'prob-8',
    title: 'Viaje en Metro desde Museros hasta Valencia',
    contextLocation: 'Estación de Metro de Museros (Línea 3)',
    difficulty: 'Nivel 2 · Intermedio',
    statement: 'Un tren de la Línea 3 de Metrovalencia sale con 4 vagones. En cada vagón viajan 35 pasajeros. Al llegar a la estación de Museros se bajan 18 pasajeros y suben 12 pasajeros nuevos. ¿Cuántos pasajeros siguen en el tren?',
    step1DataOptions: [
      { id: 'd1', label: '4 vagones × 35 pasajeros iniciales, menos 18 que bajan, más 12 que suben', isCorrect: true },
      { id: 'd2', label: '35 pasajeros en total entre los 4 vagones', isCorrect: false },
      { id: 'd3', label: 'Sumar 4 + 35 + 18 + 12', isCorrect: false },
    ],
    visualBarModel: {
      totalLabel: 'Pasajeros iniciales (4 × 35 = 140) - 18 + 12',
      partLabel: 'Vagón',
      partsCount: 4,
      unitValue: 35,
      extraValue: 12,
      extraLabel: '-18 + 12',
    },
    step2OperationOptions: [
      { id: 'op1', operationLabel: '(4 × 35) - 18 + 12', reasoning: 'Calculamos los pasajeros iniciales (4 × 35 = 140), restamos los 18 que bajan y sumamos los 12 que suben.', isCorrect: true },
      { id: 'op2', operationLabel: '(4 × 35) + 18 - 12', reasoning: 'Los que bajan se restan y los que suben se suman.', isCorrect: false },
      { id: 'op3', operationLabel: '35 - 18 + 12', reasoning: 'Olvida multiplicar por los 4 vagones.', isCorrect: false },
    ],
    correctAnswer: 134,
    answerUnit: 'pasajeros',
    stepByStepExplanation: '1º Pasajeros iniciales: 4 × 35 = 140. 2º Se bajan 18: 140 - 18 = 122. 3º Suben 12: 122 + 12 = 134 pasajeros.',
    rewardXp: 90,
    rewardBadgeName: 'Jefe de Estación',
  },
];

export const SCIENCE_CONCEPT_MAPS: ConceptMapTopic[] = [
  {
    id: 'map-ecosistemas',
    title: 'Los Ecosistemas y la Cadena Trófica',
    unitNumber: 'Unidad 1 · Conocimiento del Medio',
    subtitle: 'Cómo se relacionan los seres vivos y el medio físico (Ejemplo: La Albufera y l\'Horta)',
    generalMnemonicTitle: 'Regla Mnemotécnica Visual: "BIO-VIDA y P-C-D"',
    generalMnemonicStory: 'Imagina un escenario de teatro: el BIOTOPO es el "TOPO en la roca" (lo que NO tiene vida: agua, rocas, luz, temperatura), y la BIOCENOSIS es la "CENA de seres vivos" (animales y plantas). En esa cena siempre hay orden P-C-D: Productores (Plantas cocinan con sol) → Consumidores (Comen) → Descomponedores (Deshacen y reciclan).',
    visualDiagramType: 'ecosystem',
    nodes: [
      {
        id: 'eco-root',
        label: 'EL ECOSISTEMA',
        category: 'central',
        x: 420,
        y: 55,
        summary: 'Conjunto formado por un lugar concreto (medio físico), todos los seres vivos que lo habitan y las relaciones entre ellos.',
        mnemonicHook: 'Ecosistema = Lugar (Biotopo) + Habitantes (Biocenosis) + Relaciones.',
      },
      {
        id: 'eco-biotopo',
        label: 'Biotopo (Medio Físico)',
        category: 'primary',
        x: 180,
        y: 165,
        summary: 'Parte NO viva del ecosistema: rocas, suelo, agua, aire, luz solar y temperatura.',
        mnemonicHook: 'Truco: Bio-TOPO → El topo excava en la TIERRA y las ROCAS (elementos sin vida).',
        isQuizTarget: true,
        quizOptions: ['Biotopo (Medio Físico)', 'Biocenosis (Seres Vivos)', 'Población Solar'],
      },
      {
        id: 'eco-biocenosis',
        label: 'Biocenosis (Comunidad Viva)',
        category: 'primary',
        x: 650,
        y: 165,
        summary: 'Conjunto de todas las poblaciones de seres vivos (plantas, animales, hongos, microorganismos) que viven en el biotopo.',
        mnemonicHook: 'Truco: Bio-CENO-sis → Todos los seres vivos se reúnen para CENAR juntos.',
        isQuizTarget: true,
        quizOptions: ['Biocenosis (Comunidad Viva)', 'Biotopo Mineral', 'Clima Atmosférico'],
      },
      {
        id: 'eco-factores',
        label: 'Luz, Agua, Temperatura y Suelo',
        category: 'secondary',
        x: 140,
        y: 300,
        summary: 'Factores abióticos que determinan qué especies pueden sobrevivir en cada lugar (como el agua dulce en el lago de la Albufera).',
        mnemonicHook: 'Recuerda L-A-T-S: Luz, Agua, Temperatura, Suelo.',
      },
      {
        id: 'eco-productores',
        label: '1. Productores (Plantas y Algas)',
        category: 'secondary',
        x: 430,
        y: 300,
        summary: 'Fabrican su propio alimento mediante la fotosíntesis usando energía del Sol, agua y sales minerales (ej. arrozales y naranjos).',
        mnemonicHook: 'PRO-ductores = Los Chefs que PROducen la comida desde cero con luz solar.',
        isQuizTarget: true,
        quizOptions: ['1. Productores (Plantas y Algas)', '1. Carnívoros Superiores', '1. Hongos Recicladores'],
      },
      {
        id: 'eco-consumidores',
        label: '2. Consumidores (Animales)',
        category: 'secondary',
        x: 650,
        y: 300,
        summary: 'Se alimentan de otros seres vivos. Primarios (herbívoros como el conejo) y Secundarios (carnívoros como el águila o la garza).',
        mnemonicHook: 'CON-sumidores = Van al restaurante a CONsumir lo que otros hicieron.',
      },
      {
        id: 'eco-descomponedores',
        label: '3. Descomponedores (Hongos y Bacterias)',
        category: 'secondary',
        x: 840,
        y: 300,
        summary: 'Transforman los restos de hojas y animales en sales minerales que vuelven al suelo para alimentar de nuevo a las plantas.',
        mnemonicHook: 'DES-componedores = El equipo de reciclaje que cierra el círculo.',
        isQuizTarget: true,
        quizOptions: ['3. Descomponedores (Hongos y Bacterias)', '3. Productores Acuáticos', '3. Depredadores Aéreos'],
      },
    ],
    edges: [
      { from: 'eco-root', to: 'eco-biotopo', relationLabel: 'lugar sin vida' },
      { from: 'eco-root', to: 'eco-biocenosis', relationLabel: 'seres vivos' },
      { from: 'eco-biotopo', to: 'eco-factores', relationLabel: 'formado por' },
      { from: 'eco-biocenosis', to: 'eco-productores', relationLabel: 'empieza en' },
      { from: 'eco-biocenosis', to: 'eco-consumidores', relationLabel: 'alimenta a' },
      { from: 'eco-biocenosis', to: 'eco-descomponedores', relationLabel: 'reciclado por' },
    ],
  },
  {
    id: 'map-nutricion',
    title: 'La Función de Nutrición: Los 4 Aparatos en Equipo',
    unitNumber: 'Unidad 2 · Conocimiento del Medio',
    subtitle: 'Cómo conseguimos nutrientes y oxígeno y expulsamos los desechos',
    generalMnemonicTitle: 'Regla Mnemotécnica: "D-R-C-E · La Fábrica de las 4 Puertas"',
    generalMnemonicStory: 'Para no olvidar nunca qué aparatos intervienen en la Nutrición (¡ojo, el locomotor y el nervioso son de Relación, NO de Nutrición!), imagina una ciudad con 4 servicios: 1. DIGESTIVO (la cocina que extrae nutrientes), 2. RESPIRATORIO (el ventilador que mete Oxígeno O2), 3. CIRCULATORIO (los camiones de reparto de la sangre) y 4. EXCRETOR (los camiones de limpieza de la orina y el sudor).',
    visualDiagramType: 'nutrition',
    nodes: [
      {
        id: 'nut-root',
        label: 'FUNCIÓN DE NUTRICIÓN',
        category: 'central',
        x: 450,
        y: 55,
        summary: 'Proceso por el que transformamos los alimentos y el aire en energía y materiales para nuestras células.',
        mnemonicHook: 'Los 4 Fantásticos de la Nutrición: Digestivo + Respiratorio + Circulatorio + Excretor.',
      },
      {
        id: 'nut-digestivo',
        label: 'Aparato Digestivo (Nutrientes)',
        category: 'primary',
        x: 140,
        y: 185,
        summary: 'Transforma los alimentos en nutrientes pequeños en el estómago y pasan a la sangre en el intestino delgado.',
        mnemonicHook: 'Boca → Esófago → Estómago → Intestino Delgado (pasa a la sangre).',
        isQuizTarget: true,
        quizOptions: ['Aparato Digestivo (Nutrientes)', 'Sistema Nervioso Central', 'Aparato Locomotor'],
      },
      {
        id: 'nut-respiratorio',
        label: 'Aparato Respiratorio (Oxígeno O₂)',
        category: 'primary',
        x: 365,
        y: 185,
        summary: 'Toma el oxígeno (O₂) del aire en los alvéolos pulmonares y expulsa el dióxido de carbono (CO₂).',
        mnemonicHook: 'En los ALVÉOLOS pulmonares ocurre el intercambio mágico: entra O₂ y sale CO₂.',
        isQuizTarget: true,
        quizOptions: ['Aparato Respiratorio (Oxígeno O₂)', 'Aparato Reproductor', 'Esqueleto Óseo'],
      },
      {
        id: 'nut-circulatorio',
        label: 'Aparato Circulatorio (Reparto)',
        category: 'primary',
        x: 595,
        y: 185,
        summary: 'El corazón impulsa la sangre por arterias, venas y capilares llevando nutrientes y oxígeno a todas las células.',
        mnemonicHook: 'ARTERIAS salen del corazón · VENAS vuelven al corazón.',
        isQuizTarget: true,
        quizOptions: ['Aparato Circulatorio (Reparto)', 'Aparato Auditivo', 'Sistema Muscular'],
      },
      {
        id: 'nut-excretor',
        label: 'Aparato Excretor (Limpieza)',
        category: 'primary',
        x: 820,
        y: 185,
        summary: 'Los riñones filtran la sangre como un colador para limpiar las sustancias de desecho y expulsarlas en la orina.',
        mnemonicHook: 'RIÑONES = Dos filtros limpiadores de la sangre.',
        isQuizTarget: true,
        quizOptions: ['Aparato Excretor (Limpieza)', 'Aparato Óptico', 'Glándulas Salivales'],
      },
      {
        id: 'nut-celula',
        label: 'ENERGÍA EN LAS CÉLULAS (Nutrientes + O₂ → Energía)',
        category: 'secondary',
        x: 470,
        y: 315,
        summary: 'Dentro de cada célula se unen los nutrientes (del digestivo) y el oxígeno (del respiratorio) que trajo la sangre para producir energía.',
        mnemonicHook: 'Igual que un coche necesita Gasolina (Nutrientes) + Chispa de Aire (Oxígeno).',
      },
    ],
    edges: [
      { from: 'nut-root', to: 'nut-digestivo', relationLabel: '1. obtiene comida' },
      { from: 'nut-root', to: 'nut-respiratorio', relationLabel: '2. obtiene aire' },
      { from: 'nut-root', to: 'nut-circulatorio', relationLabel: '3. transporta' },
      { from: 'nut-root', to: 'nut-excretor', relationLabel: '4. limpia sangre' },
      { from: 'nut-digestivo', to: 'nut-celula', relationLabel: 'aporta nutrientes' },
      { from: 'nut-respiratorio', to: 'nut-celula', relationLabel: 'aporta O₂' },
      { from: 'nut-circulatorio', to: 'nut-celula', relationLabel: 'reparte por sangre' },
    ],
  },
  {
    id: 'map-plantas',
    title: 'La Nutrición de las Plantas: Fotosíntesis, Xilema y Floema',
    unitNumber: 'Unidad 3 · Conocimiento del Medio',
    subtitle: 'Cómo diferenciar Savia Bruta y Savia Elaborada sin confundirse nunca',
    generalMnemonicTitle: 'Regla Mnemotécnica: "La B de Bajo/Bruta y la F de Floema/Fabricada"',
    generalMnemonicStory: 'Muchos niños confunden Savia Bruta con Elaborada y Xilema con Floema. ¡Usa este truco infalible! 1. Abajo en la tierra empieza con B: de BAJO sube la Savia BRUTA (agua y sales sin cocinar). 2. Arriba en la hoja se cocina con Sol y sale la Savia ELABORADA (azúcares listos para comer) que viaja por el FLOEMA (Floema empieza por F de "Fabricada" y "Flor").',
    visualDiagramType: 'plants',
    nodes: [
      {
        id: 'pla-root',
        label: 'FOTOSÍNTESIS DE LA PLANTA',
        category: 'central',
        x: 450,
        y: 55,
        summary: 'Proceso por el que las plantas fabrican su propio alimento en las hojas usando luz solar y liberan oxígeno al aire.',
        mnemonicHook: 'FOTO (Luz) + SÍNTESIS (Fabricar) = Fabricar comida con luz.',
      },
      {
        id: 'pla-bruta',
        label: '1. Savia Bruta (Agua + Sales Minerales)',
        category: 'primary',
        x: 190,
        y: 175,
        summary: 'Mezcla de agua y sales minerales absorbida por los pelos absorbentes de la raíz desde el suelo.',
        mnemonicHook: 'Truco de la B: De BAJO (raíz) sale la Savia BRUTA (aún sin cocinar).',
        isQuizTarget: true,
        quizOptions: ['1. Savia Bruta (Agua + Sales Minerales)', '1. Savia Elaborada Dulce', '1. Clorofila Gaseosa'],
      },
      {
        id: 'pla-xilema',
        label: '2. Vasos Leñosos (Xilema · Sube ↑)',
        category: 'secondary',
        x: 190,
        y: 300,
        summary: 'Tubos ascendentes del tallo que suben la savia bruta desde la raíz hasta las hojas.',
        mnemonicHook: 'Xilema tiene una X como unas escaleras que SUBEN desde la raíz.',
        isQuizTarget: true,
        quizOptions: ['2. Vasos Leñosos (Xilema · Sube ↑)', '2. Estomas de la Hoja', '2. Polen de la Flor'],
      },
      {
        id: 'pla-hoja',
        label: '3. La Hoja: Clorofila + Luz Solar + CO₂',
        category: 'primary',
        x: 480,
        y: 185,
        summary: 'En los cloroplastos (con clorofila verde) entra el CO₂ por los estomas y con la energía del Sol se cocina la savia y se expulsa O₂.',
        mnemonicHook: 'La Hoja es la cocina solar verde: entra CO₂, sale Oxígeno O₂.',
      },
      {
        id: 'pla-elaborada',
        label: '4. Savia Elaborada (Alimento / Azúcares)',
        category: 'primary',
        x: 770,
        y: 175,
        summary: 'Savia ya cocinada rica en nutrientes que alimenta a todas las partes de la planta.',
        mnemonicHook: 'ELABORADA = Comida ya "elaborada" por el chef en la hoja.',
        isQuizTarget: true,
        quizOptions: ['4. Savia Elaborada (Alimento / Azúcares)', '4. Savia Mineral Cruda', '4. Vapor de Tierra'],
      },
      {
        id: 'pla-floema',
        label: '5. Vasos Liberianos (Floema · Reparte ↓↑)',
        category: 'secondary',
        x: 770,
        y: 300,
        summary: 'Conductos que reparten la savia elaborada desde las hojas hacia el tallo, los frutos y las raíces.',
        mnemonicHook: 'FLOEMA empieza por F de "Fabricada" y "Fluir por toda la planta".',
        isQuizTarget: true,
        quizOptions: ['5. Vasos Liberianos (Floema · Reparte ↓↑)', '5. Pelos Absorbentes', '5. Raíz Principal'],
      },
    ],
    edges: [
      { from: 'pla-root', to: 'pla-bruta', relationLabel: 'absorbe en raíz' },
      { from: 'pla-bruta', to: 'pla-xilema', relationLabel: 'sube por' },
      { from: 'pla-root', to: 'pla-hoja', relationLabel: 'se cocina en' },
      { from: 'pla-root', to: 'pla-elaborada', relationLabel: 'produce' },
      { from: 'pla-elaborada', to: 'pla-floema', relationLabel: 'viaja por' },
    ],
  },
  {
    id: 'map-relieve',
    title: 'El Relieve y los Ríos: España y la Comunitat Valenciana',
    unitNumber: 'Unidad 4 · Conocimiento del Medio',
    subtitle: 'De las montañas del interior hasta la llanura litoral de l\'Horta y el Mediterráneo',
    generalMnemonicTitle: 'Regla Mnemotécnica: "Las 3 Vertientes C-A-M y los Ríos Cortos del Mediterráneo"',
    generalMnemonicStory: 'Los ríos de España desembocan en 3 mares (C-A-M: Cantábrico, Atlántico, Mediterráneo). Los de nuestra vertiente MEDITERRÁNEA (como el Turia y el Júcar cerca de Valencia y Museros) son cortos y de caudal irregular (en otoño pueden tener crecidas y en verano llevan poquita agua), ¡excepto el río EBRO que es el más caudaloso!',
    visualDiagramType: 'relief',
    nodes: [
      {
        id: 'rel-root',
        label: 'RELIEVE Y VERTIENTES HIDROGRÁFICAS',
        category: 'central',
        x: 450,
        y: 55,
        summary: 'Organización de las montañas, llanuras y ríos de la Península Ibérica y de la Comunitat Valenciana.',
        mnemonicHook: 'En el centro está la Meseta Central rodeada de cordilleras.',
      },
      {
        id: 'rel-meseta',
        label: 'Meseta Central y Sistema Central',
        category: 'primary',
        x: 170,
        y: 180,
        summary: 'Gran llanura elevada en el centro de la Península dividida en Submeseta Norte y Sur por el Sistema Central.',
        mnemonicHook: 'MESETA suena a "MESA": es una tierra plana pero alta como una mesa.',
        isQuizTarget: true,
        quizOptions: ['Meseta Central y Sistema Central', 'Depresión Costera', 'Archipiélago Balear'],
      },
      {
        id: 'rel-iberico',
        label: 'Sistema Ibérico (Interior Valenciano)',
        category: 'primary',
        x: 450,
        y: 180,
        summary: 'Cordillera al este de la Meseta que penetra en el interior de Castellón y Valencia (Sierra Calderona, cerca de Museros, y Javalambre).',
        mnemonicHook: 'La Sierra Calderona que vemos desde Museros forma parte del Sistema Ibérico.',
        isQuizTarget: true,
        quizOptions: ['Sistema Ibérico (Interior Valenciano)', 'Cordillera Cantábrica', 'Teide Insular'],
      },
      {
        id: 'rel-litoral',
        label: 'Llanura Litoral Mediterránea (l\'Horta)',
        category: 'primary',
        x: 750,
        y: 180,
        summary: 'Terreno llano y fértil junto al mar Mediterráneo donde se asienta Museros, ideal para el cultivo de cítricos y hortalizas.',
        mnemonicHook: 'Litoral = Junto a la orilla del mar.',
      },
      {
        id: 'rel-rios',
        label: 'Ríos Turia, Júcar y Mijares (Vertiente Mediterránea)',
        category: 'secondary',
        x: 580,
        y: 305,
        summary: 'Nacen en el Sistema Ibérico y desembocan en el mar Mediterráneo. Sus aguas riegan las acequias de la huerta valenciana.',
        mnemonicHook: 'Recuerda T-J-M en Valencia y Castellón: Turia, Júcar y Mijares.',
        isQuizTarget: true,
        quizOptions: ['Ríos Turia, Júcar y Mijares (Vertiente Mediterránea)', 'Ríos Miño y Nalón', 'Glaciares Pirenaicos'],
      },
    ],
    edges: [
      { from: 'rel-root', to: 'rel-meseta', relationLabel: 'centro peninsular' },
      { from: 'rel-root', to: 'rel-iberico', relationLabel: 'montañas del este' },
      { from: 'rel-root', to: 'rel-litoral', relationLabel: 'costa valenciana' },
      { from: 'rel-iberico', to: 'rel-rios', relationLabel: 'nacen los ríos' },
      { from: 'rel-rios', to: 'rel-litoral', relationLabel: 'riegan la huerta' },
    ],
  },
];

export const INITIAL_ADAPTIVE_FLASHCARDS: AdaptiveFlashcard[] = [
  // INGLÉS 5º PRIMARIA
  {
    id: 'fc-eng-1',
    gradeId: '5-primaria',
    subject: 'ingles',
    subjectLabel: 'Inglés',
    topic: 'Pronunciación y Días',
    frontQuestion: '¿Cómo se pronuncia correctamente "Wednesday" (Miércoles) y qué letra es muda?',
    backAnswer: 'Se pronuncia /UÉNS-dei/. La primera letra "D" y la "E" que le sigue son totalmente mudas.',
    mnemonicHint: 'Truco: Olvídate de "Wed-nes" y di directo "UÉNS-dei".',
    pronunciationText: 'Wednesday. We have English on Wednesday.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-eng-2',
    gradeId: '5-primaria',
    subject: 'ingles',
    subjectLabel: 'Inglés',
    topic: 'Gramática: Present Simple',
    frontQuestion: '¿Cuál es la forma correcta: "She play tennis" o "She plays tennis"? ¿Por qué?',
    backAnswer: '"She PLAYS tennis". En Present Simple afirmativo, con He / She / It siempre añadimos "-s" o "-es" al verbo.',
    mnemonicHint: 'Regla de la Super-S para Él (He), Ella (She) y Ello (It).',
    pronunciationText: 'She plays tennis every afternoon.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-eng-3',
    gradeId: '5-primaria',
    subject: 'ingles',
    subjectLabel: 'Inglés',
    topic: 'Gramática: Preguntas con DOES',
    frontQuestion: '¿Cómo preguntas en inglés: "¿A él le gusta la pizza?" (Do he like... o Does he like...)?',
    backAnswer: '"DOES he LIKE pizza?". Usamos DOES porque es "he", y el verbo "like" pierde la "-s" porque ya se la ha quedado DOES.',
    mnemonicHint: 'El ladrón DOES roba la -S del verbo.',
    pronunciationText: 'Does he like pizza? Yes, he does.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-eng-4',
    gradeId: '5-primaria',
    subject: 'ingles',
    subjectLabel: 'Inglés',
    topic: 'Pronunciación Trampa',
    frontQuestion: '¿Cómo suenan "Island" (isla) y "Climb" (escalar)? ¿Qué letras se callan?',
    backAnswer: 'Island suena /ÁI-land/ (la S es muda) y Climb suena /KLÁIM/ (la B final es muda).',
    mnemonicHint: 'En la isla se esconde la S; al escalar se cae la B.',
    pronunciationText: 'Climb the mountain on the island.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-eng-5',
    gradeId: '5-primaria',
    subject: 'ingles',
    subjectLabel: 'Inglés',
    topic: 'There is vs There are',
    frontQuestion: '¿Cómo se dice "Hay muchos naranjos en Museros" en inglés?',
    backAnswer: '"THERE ARE many orange trees in Museros." (Usamos THERE ARE porque "orange trees" es plural).',
    mnemonicHint: 'There IS = 1 · There ARE = 2 o más.',
    pronunciationText: 'There are many orange trees in Museros.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-eng-6',
    gradeId: '5-primaria',
    subject: 'ingles',
    subjectLabel: 'Inglés',
    topic: 'Pasado Simple con DIDN\'T',
    frontQuestion: '¿Cómo se dice "Ayer no fui al colegio" en inglés: "I didn\'t went" o "I didn\'t go"?',
    backAnswer: '"Yesterday I DIDN\'T GO to school." Cuando aparece DID o DIDN\'T, el verbo vuelve siempre al presente normal (go).',
    mnemonicHint: 'DIDN\'T absorbe el pasado y devuelve el verbo a su forma base.',
    pronunciationText: 'Yesterday I didn\'t go to school.',
    box: 1,
    timesCorrect: 0,
  },
  // MATEMÁTICAS 5º PRIMARIA
  {
    id: 'fc-math-1',
    gradeId: '5-primaria',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    topic: 'Tablas de Multiplicar',
    frontQuestion: '¿Cuánto es 7 × 8 y cuál es el truco de la escalera para no olvidarlo nunca?',
    backAnswer: '7 × 8 = 56. Truco de la escalera consecutiva: 5, 6, 7, 8 → 56 = 7 × 8.',
    mnemonicHint: 'Cuenta seguido: 5 - 6 - 7 - 8.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-math-2',
    gradeId: '5-primaria',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    topic: 'Tablas de Multiplicar',
    frontQuestion: '¿Cuánto es 6 × 8 y cómo funciona el truco de los pares en la tabla del 6?',
    backAnswer: '6 × 8 = 48. Cuando multiplicas 6 por un número par (8), acaba en ese mismo par (8) y empieza por su mitad (4) → 48.',
    mnemonicHint: 'Rima: "Seis por ocho, cuarenta y ocho".',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-math-3',
    gradeId: '5-primaria',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    topic: 'Tablas de Multiplicar',
    frontQuestion: '¿Cuánto es 9 × 7 usando el truco del ascensor de la tabla del 9?',
    backAnswer: '9 × 7 = 63. Restamos 1 al 7 (empieza por 6) y ponemos lo que falta para sumar 9 (6 + 3 = 9) → 63.',
    mnemonicHint: 'En la tabla del 9 las dos cifras siempre suman 9.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-math-4',
    gradeId: '5-primaria',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    topic: 'Problemas de Fracciones',
    frontQuestion: '¿Cómo se calcula una fracción de un número, por ejemplo 3/5 de 40?',
    backAnswer: 'Da 24. Primero dividimos el total entre el denominador (40 ÷ 5 = 8) y luego multiplicamos por el numerador (8 × 3 = 24).',
    mnemonicHint: 'Abajo DIVIDE (reparte en trozos), arriba MULTIPLICA (coge los trozos).',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-math-5',
    gradeId: '5-primaria',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    topic: 'Prueba de la División',
    frontQuestion: '¿Cuál es la fórmula de la Prueba de la División?',
    backAnswer: 'Dividendo = (Divisor × Cociente) + Resto. Además, el Resto siempre debe ser menor que el Divisor (r < d).',
    mnemonicHint: 'D = (d × c) + r.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-math-6',
    gradeId: '5-primaria',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    topic: 'Geometría: Perímetro y Área',
    frontQuestion: '¿Cuál es la fórmula del área de un rectángulo y la del área de un triángulo?',
    backAnswer: 'Área del rectángulo = base × altura (b × h). Área del triángulo = (base × altura) ÷ 2.',
    mnemonicHint: 'El triángulo es exactamente la mitad de un rectángulo (por eso dividimos entre 2).',
    box: 1,
    timesCorrect: 0,
  },
  // CONOCIMIENTO DEL MEDIO 5º PRIMARIA
  {
    id: 'fc-sci-1',
    gradeId: '5-primaria',
    subject: 'conocimiento',
    subjectLabel: 'Conocimiento del Medio',
    topic: 'Ecosistemas',
    frontQuestion: '¿Qué diferencia hay entre el BIOTOPO y la BIOCENOSIS de un ecosistema?',
    backAnswer: 'El BIOTOPO es la parte NO viva (rocas, agua, luz, temperatura) y la BIOCENOSIS es el conjunto de todos los SERES VIVOS que habitan allí.',
    mnemonicHint: 'Bio-TOPO = rocas y tierra donde excava el topo · Bio-CENO-sis = seres vivos que cenan juntos.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-sci-2',
    gradeId: '5-primaria',
    subject: 'conocimiento',
    subjectLabel: 'Conocimiento del Medio',
    topic: 'Las Plantas',
    frontQuestion: '¿Qué diferencia hay entre la Savia Bruta (Xilema) y la Savia Elaborada (Floema)?',
    backAnswer: 'La Savia BRUTA (agua + sales minerales) sube desde la raíz por el XILEMA. En la hoja con la fotosíntesis se convierte en Savia ELABORADA (alimento) que se reparte por el FLOEMA.',
    mnemonicHint: 'B de Bajo = Savia Bruta · F de Fabricada = Floema.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-sci-3',
    gradeId: '5-primaria',
    subject: 'conocimiento',
    subjectLabel: 'Conocimiento del Medio',
    topic: 'Cuerpo Humano',
    frontQuestion: '¿Cuáles son exactamente los 4 aparatos que realizan la Función de Nutrición?',
    backAnswer: '1. Aparato Digestivo (nutrientes), 2. Aparato Respiratorio (oxígeno), 3. Aparato Circulatorio (transporte en sangre) y 4. Aparato Excretor (limpieza de desechos).',
    mnemonicHint: 'Sigla D-R-C-E (¡Cuidado: el locomotor es de Relación, no de Nutrición!).',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-sci-4',
    gradeId: '5-primaria',
    subject: 'conocimiento',
    subjectLabel: 'Conocimiento del Medio',
    topic: 'Geografía Valenciana',
    frontQuestion: '¿Cómo son los ríos de la vertiente mediterránea como el Turia y el Júcar?',
    backAnswer: 'Son ríos cortos (excepto el Ebro) y de caudal irregular: sufren estiaje (poca agua) en verano y pueden tener crecidas en otoño.',
    mnemonicHint: 'Nacen cerca en el Sistema Ibérico y bajan rápido a regar la huerta.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-sci-5',
    gradeId: '5-primaria',
    subject: 'conocimiento',
    subjectLabel: 'Conocimiento del Medio',
    topic: 'Materia y Densidad',
    frontQuestion: '¿Cómo se calcula la Densidad de un objeto y cuándo flota en el agua?',
    backAnswer: 'Densidad = Masa ÷ Volumen (d = m ÷ V). Un objeto flota en el agua si su densidad es menor que 1 g/cm³.',
    mnemonicHint: 'Corcho o madera (< 1) flota · Hierro o piedra (> 1) se hunde.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-sci-6',
    gradeId: '5-primaria',
    subject: 'conocimiento',
    subjectLabel: 'Conocimiento del Medio',
    topic: 'Historia y Siglos',
    frontQuestion: '¿En qué año entró el rey Jaume I en Valencia y a qué siglo pertenece?',
    backAnswer: 'En el año 1238 (Siglo XIII, en la Edad Media), fundando el Reino de Valencia y sus leyes (Els Furs).',
    mnemonicHint: 'Truco del siglo: a las dos primeras cifras (12) súmale +1 → Siglo 13 (XIII).',
    box: 1,
    timesCorrect: 0,
  },
  // CURSOS SUPERIORES (ESO y BACHILLERATO)
  {
    id: 'fc-eso-1',
    gradeId: '1-eso',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas 1º ESO',
    topic: 'Números Enteros y Jerarquía',
    frontQuestion: '¿Cuál es el orden de prioridad en las operaciones combinadas (Regla PAPOMUDAS)?',
    backAnswer: '1º Paréntesis, 2º Potencias y Raíces, 3º Multiplicaciones y Divisiones (de izquierda a derecha), 4º Sumas y Restas.',
    mnemonicHint: 'PA-PO-MU-D-A-S: Paréntesis, Potencias, Multiplicar, Dividir, Adición, Sustracción.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-bach-1',
    gradeId: '2-bach',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas II (2º Bachillerato · PAU)',
    topic: 'Análisis y Derivadas',
    frontQuestion: '¿Qué afirma el Teorema de Bolzano para una función continua en un intervalo [a, b]?',
    backAnswer: 'Si f es continua en [a, b] y toma valores de distinto signo en los extremos (f(a)·f(b) < 0), entonces existe al menos un punto c ∈ (a, b) tal que f(c) = 0.',
    mnemonicHint: 'Para cruzar un río de una orilla negativa a otra positiva sin saltar (continua), tienes que pisar el agua (f(c)=0).',
    box: 1,
    timesCorrect: 0,
  },
  // LENGUA CASTELLANA Y LITERATURA (5º PRIMARIA)
  {
    id: 'fc-len-1',
    gradeId: '5-primaria',
    subject: 'lengua',
    subjectLabel: 'Lengua Castellana',
    topic: 'Acentuación: Agudas, Llanas y Esdrújulas',
    frontQuestion: '¿Cuándo llevan tilde las palabras AGUDAS y cuándo las palabras LLANAS?',
    backAnswer: 'Las AGUDAS llevan tilde cuando terminan en N, S o Vocal (ej. camión, compás, sofá). Las LLANAS llevan tilde cuando NO terminan ni en N, ni en S, ni en Vocal (ej. árbol, lápiz, césped). Las ESDRÚJULAS llevan tilde siempre.',
    mnemonicHint: 'Truco N-S-V: Agudas SÍ llevan tilde en N-S-Vocal; Llanas son lo contrario.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-len-2',
    gradeId: '5-primaria',
    subject: 'lengua',
    subjectLabel: 'Lengua Castellana',
    topic: 'Diptongos e Hiatos',
    frontQuestion: '¿Por qué "María" y "baúl" llevan tilde aunque "baúl" termine en L y "María" en vocal?',
    backAnswer: 'Porque tienen un HIATO de vocal débil tónica (í, ú) junto a vocal fuerte (a, e, o). La tilde en la í o ú rompe el diptongo y siempre se escribe.',
    mnemonicHint: 'Vocales fuertes (abiertas): A, E, O · Vocales débiles (cerradas): I, U.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-len-3',
    gradeId: '5-primaria',
    subject: 'lengua',
    subjectLabel: 'Lengua Castellana',
    topic: 'Sintaxis: Sujeto y Predicado',
    frontQuestion: '¿Cómo se localiza el SUJETO de una oración sin equivocarse nunca?',
    backAnswer: 'Preguntando "¿Quién?" o "¿Quiénes?" al verbo y comprobando la concordancia: si cambias el verbo a plural, la palabra que también cambia a plural por obligación es el Sujeto.',
    mnemonicHint: 'El núcleo del Sujeto es un sustantivo o pronombre; el núcleo del Predicado es el verbo.',
    box: 1,
    timesCorrect: 0,
  },
  // VALENCIÀ: LLENGUA I LITERATURA (5º PRIMARIA)
  {
    id: 'fc-val-1',
    gradeId: '5-primaria',
    subject: 'valencia',
    subjectLabel: 'Valencià: Llengua i Literatura',
    topic: 'L\'Apostrofació i Contraccions',
    frontQuestion: 'Quan s\'apostrofa l\'article femení "LA" en valencià i quina és la gran excepció?',
    backAnswer: 'S\'apostrofa (l\') davant de vocal o h muda (ex. l\'escola, l\'horta), EXCEPTE davant de "i" o "u" àtones (sense força de veu), com en "la universitat", "la història" o "la idea".',
    mnemonicHint: 'Recorda: l\'escola i l\'illa (i tònica), però LA universitat i LA història (i/u àtones).',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-val-2',
    gradeId: '5-primaria',
    subject: 'valencia',
    subjectLabel: 'Valencià: Llengua i Literatura',
    topic: 'Accents Oberts i Tancats i Ela Geminada',
    frontQuestion: 'Quina vocal porta SEMPRE l\'accent obert (à) en valencià i com s\'escriu "colegio"?',
    backAnswer: 'La lletra A sempre porta accent greu o obert (`à`), com en "català" o "Valencià". I "colegio" s\'escriu amb ela geminada: "col·legi" (amb punt volat al mig: l·l).',
    mnemonicHint: 'La A mai pot portar accent tancat: sempre és À (cap a l\'esquerra).',
    box: 1,
    timesCorrect: 0,
  },
  // EDUCACIÓN ARTÍSTICA, EDUCACIÓN FÍSICA Y VALORES CÍVICOS
  {
    id: 'fc-art-1',
    gradeId: '5-primaria',
    subject: 'artistica',
    subjectLabel: 'Educación Artística (Música y Plástica)',
    topic: 'Lenguaje Musical: Figuras y Duración',
    frontQuestion: '¿Cuántos pulsos (tiempos de negra) duran la Redonda, la Blanca, la Negra y la Corchea?',
    backAnswer: 'Redonda = 4 tiempos · Blanca = 2 tiempos · Negra = 1 tiempo · Corchea = medio tiempo (1/2 tiempo; 2 corcheas valen 1 negra).',
    mnemonicHint: 'Cada figura dura exactamente la mitad que la anterior: 4 → 2 → 1 → 1/2.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-ef-1',
    gradeId: '5-primaria',
    subject: 'educacion-fisica',
    subjectLabel: 'Educación Física y Salud',
    topic: 'Capacidades Físicas y Pilota Valenciana',
    frontQuestion: '¿Cuáles son las 4 Capacidades Físicas Básicas y cuáles son las dos grandes modalidades de Pilota Valenciana?',
    backAnswer: 'Las 4 capacidades son Fuerza, Resistencia, Velocidad y Flexibilidad. En Pilota Valenciana destacan el Raspall (la pelota puede rodar por el suelo) y Escala i Corda (por encima de una cuerda central sin tocar el suelo más de un bote).',
    mnemonicHint: 'Sigla F-R-V-F: Fuerza, Resistencia, Velocidad y Flexibilidad.',
    box: 1,
    timesCorrect: 0,
  },
  {
    id: 'fc-val-civ-1',
    gradeId: '5-primaria',
    subject: 'valores',
    subjectLabel: 'Valores Cívicos y Éticos',
    topic: 'Convivencia, Empatía y Regla de las 3R',
    frontQuestion: '¿Qué es la Empatía en la convivencia escolar y qué significan las 3R de la sostenibilidad?',
    backAnswer: 'La Empatía es ponerse en el lugar de otra persona para comprender cómo se siente. Las 3R son: 1º Reducir (gastar menos), 2º Reutilizar (dar un segundo uso) y 3º Reciclar (separar en contenedores).',
    mnemonicHint: 'En las 3R el orden importa: la mejor basura es la que NO se produce (Reducir).',
    box: 1,
    timesCorrect: 0,
  },
];

export const ALL_GRADES_CATALOG: GradeLevelInfo[] = [
  {
    id: '5-primaria',
    name: '5º de Primaria (CEIP Blasco Ibáñez)',
    stage: 'Educación Primaria',
    ageRange: '10–11 años · Foco Principal',
    isPrimaryFocus: true,
    coreSubjects: [
      {
        id: '5p-ing',
        name: 'Lengua Extranjera: Inglés',
        category: 'ingles',
        topicsCount: 8,
        keyTopics: [
          'Unit 1: Daily Routines, School Subjects, Telling the Time & Present Simple',
          'Unit 2: Sports (Play/Go/Do), Adverbs of Frequency & Present Continuous',
          'Unit 3: My Town, Directions & There is / There are (Some & Any)',
          'Unit 4: Wild Animals & Comparative / Superlative Adjectives',
          'Unit 5: Food, Countable/Uncountable, How much/many & Must/Should',
          'Unit 6: Past Simple of To Be (Was / Were & There was / There were)',
          'Unit 7: Past Simple Regular (-ed) & Irregular Verbs + DID / DIDN\'T',
          'Unit 8: Future Plans with Be going to & Wh- Question Words',
        ],
        annualUpdateNote: 'LOMLOE 2026/2027: Énfasis reforzado en producción oral cotidiana y comprensión fonética práctica.',
      },
      {
        id: '5p-mat',
        name: 'Matemáticas',
        category: 'matematicas',
        topicsCount: 8,
        keyTopics: [
          'Unidad 1: Numeración de 7 cifras, Redondeo, Números Romanos, Suma y Resta',
          'Unidad 2: La Multiplicación (propiedades conmutativa, asociativa, distributiva) y Potencias',
          'Unidad 3: La División por 1 y 2 cifras, Prueba de la división y Múltiplos/Divisores',
          'Unidad 4: Operaciones Combinadas (PAPOMUDAS) y Problemas en 3 pasos',
          'Unidad 5: Las Fracciones (equivalentes, comparación, operaciones y fracción de un número)',
          'Unidad 6: Números Decimales, Operaciones con coma y Porcentajes (10%, 25%, 50%)',
          'Unidad 7: Sistema Métrico Decimal (Longitud, Masa, Capacidad, Superficie) y Tiempo',
          'Unidad 8: Geometría Plana, Ángulos, Polígonos y Fórmulas de Perímetros y Áreas',
        ],
        annualUpdateNote: 'LOMLOE 2026/2027: Sentido numérico y modelización visual con barras antes del algoritmo mecánico.',
      },
      {
        id: '5p-con',
        name: 'Conocimiento del Medio Natural, Social y Cultural',
        category: 'conocimiento',
        topicsCount: 8,
        keyTopics: [
          'Unidad 1: Los Seres Vivos, La Célula, Niveles (C-T-O-A-O) y Los 5 Reinos',
          'Unidad 2: El Reino de las Plantas (Fotosíntesis, Xilema, Floema y Partes de la Flor)',
          'Unidad 3: Los Ecosistemas (Biotopo y Biocenosis), Cadenas Tróficas y La Albufera',
          'Unidad 4: El Cuerpo Humano I · Función de Nutrición (Digestivo, Respiratorio, Circulatorio, Excretor)',
          'Unidad 5: El Cuerpo Humano II · Función de Relación (Sentidos, Sistema Nervioso y Locomotor)',
          'Unidad 6: La Materia (Masa, Volumen, Densidad), Cambios de Estado y Energías Renovables',
          'Unidad 7: Geografía de España y la Comunitat Valenciana, Demografía y los 3 Sectores',
          'Unidad 8: Las Edades de la Historia, la Edad Media (Al-Ándalus y Jaume I en Valencia) y Edad Moderna',
        ],
        annualUpdateNote: 'LOMLOE 2026/2027: Mapas conceptuales eco-sociales y patrimonio natural de l\'Horta Nord.',
      },
      {
        id: '5p-len',
        name: 'Lengua Castellana y Literatura',
        category: 'lengua',
        topicsCount: 6,
        keyTopics: [
          'Unidad 1: Reglas de Acentuación (Agudas, Llanas, Esdrújulas y Sobresdrújulas)',
          'Unidad 2: Diptongos, Triptongos e Hiatos y Reglas de la Tilde',
          'Unidad 3: Morfología I · Sustantivos, Adjetivos, Determinantes y Pronombres',
          'Unidad 4: Morfología II · El Verbo (Conjugaciones y Tiempos) y Palabras Invariables',
          'Unidad 5: Sintaxis (Sujeto y Predicado) y Ortografía de B/V, G/J y H',
          'Unidad 6: Los Géneros Literarios (Narrativa, Lírica, Teatro) y Recursos Literarios',
        ],
        annualUpdateNote: 'Actualizado con talleres interactivos de acentuación, análisis sintáctico y ortografía visual.',
      },
      {
        id: '5p-val',
        name: 'Valencià: Llengua i Literatura',
        category: 'valencia',
        topicsCount: 6,
        keyTopics: [
          'Unitat 1: Sistema Vocàlic i Accentuació (Accents oberts à/è/ò i tancats é/í/ó/ú)',
          'Unitat 2: L\'Apostrofació (l\', d\') i les Contraccions (al, del, pel, cal)',
          'Unitat 3: Ortografia Valenciana (b/v, s/ss/c/ç/z, g/j/tg/tj, ny i ela geminada l·l)',
          'Unitat 4: Determinants, Quantitatius i Pronoms Febles Bàsics',
          'Unitat 5: Els Verbs en Valencià (Ser vs Estar, Perífrasis i Conjugacions)',
          'Unitat 6: Vocabulari de l\'Horta Nord i Museros i Literatura Valenciana (Enric Valor, Jaume I)',
        ],
        annualUpdateNote: 'Adaptado al proyecto lingüístico de centro del CEIP Blasco Ibáñez de Museros.',
      },
      {
        id: '5p-art',
        name: 'Educación Artística: Música y Plástica',
        category: 'artistica',
        topicsCount: 4,
        keyTopics: [
          'Unidad 1: Lenguaje Musical (Pentagrama, Clave de Sol, Notas y Figuras: Redonda, Blanca, Negra, Corchea)',
          'Unidad 2: Compases (2/4, 3/4, 4/4), Cualidades del Sonido y Familias de Instrumentos',
          'Unidad 3: Teoría del Color (Primarios, Secundarios, Cálidos y Fríos) y la Luz de Sorolla',
          'Unidad 4: Proporción, Simetría, Perspectiva, Volumen y Patrimonio Artístico Valenciano',
        ],
        annualUpdateNote: 'Incluye calculadora rítmica musical y laboratorio visual de teoría del color.',
      },
      {
        id: '5p-ef',
        name: 'Educación Física y Salud',
        category: 'educacion-fisica',
        topicsCount: 4,
        keyTopics: [
          'Unidad 1: El Calentamiento, Frecuencia Cardíaca y Capacidades Físicas Básicas (F-R-V-F)',
          'Unidad 2: Habilidades Motrices Básicas, Coordinación Dinámica y Equilibrio',
          'Unidad 3: Esport Autòcton · La Pilota Valenciana (Trinquet, Raspall y Escala i Corda)',
          'Unidad 4: Hábitos Saludables, Higiene Postural, Hidratación y Primeros Auxilios (PAS)',
        ],
        annualUpdateNote: 'Incluye unidad específica de Pilota Valenciana en la escuela (Programa Pilota a l\'Escola GVA).',
      },
      {
        id: '5p-val-civ',
        name: 'Valores Cívicos y Éticos y Competencia Digital',
        category: 'valores',
        topicsCount: 4,
        keyTopics: [
          'Unidad 1: Autoconocimiento, Gestión de Emociones, Empatía y Autoestima',
          'Unidad 2: Convivencia Escolar, Mediación Pacífica de Conflictos y Trabajo en Equipo',
          'Unidad 3: Derechos de la Infancia, Igualdad, Democracia y Constitución / Estatut',
          'Unidad 4: Sostenibilidad Ambiental (Regla de las 3R, ODS) y Seguridad Digital',
        ],
        annualUpdateNote: 'Competencia ciudadana, ecosocial y bienestar digital en Primaria.',
      },
    ],
  },
  {
    id: '6-primaria',
    name: '6º de Primaria (CEIP Blasco Ibáñez)',
    stage: 'Educación Primaria',
    ageRange: '11–12 años',
    coreSubjects: [
      {
        id: '6p-ing',
        name: 'Inglés (Preparación paso a la ESO)',
        category: 'ingles',
        topicsCount: 12,
        keyTopics: ['Going to & Will (Futuro)', 'Present Perfect básico (Have you ever...?)', 'First Conditional & Expresión oral de viajes'],
        annualUpdateNote: 'Transición coordinada Primaria-Secundaria 2026/2027.',
      },
      {
        id: '6p-mat',
        name: 'Matemáticas',
        category: 'matematicas',
        topicsCount: 14,
        keyTopics: ['Porcentajes, escalas y proporcionalidad directa', 'Mínimo común múltiplo (m.c.m.) y máximo común divisor (m.c.d.)', 'Números enteros negativos, volumen de cuerpos geométricos y estadística'],
        annualUpdateNote: 'Incluye retos de proporcionalidad aplicada.',
      },
      {
        id: '6p-con',
        name: 'Conocimiento del Medio',
        category: 'conocimiento',
        topicsCount: 11,
        keyTopics: ['La función de reproducción humana', 'Electricidad, circuitos y magnetismo', 'Relieve de Europa y Edad Contemporánea en España (Siglos XIX, XX y XXI)'],
        annualUpdateNote: 'Nuevos esquemas visuales de historia contemporánea.',
      },
    ],
  },
  {
    id: '1-eso',
    name: '1º de ESO',
    stage: 'Educación Secundaria (ESO)',
    ageRange: '12–13 años',
    coreSubjects: [
      {
        id: '1e-mat',
        name: 'Matemáticas 1º ESO',
        category: 'matematicas',
        topicsCount: 14,
        keyTopics: ['Operaciones con números enteros (regla de los signos)', 'Introducción al Álgebra y ecuaciones de 1º grado', 'Divisibilidad, factorización prima, potencias y raíces'],
        annualUpdateNote: 'Secuencia progresiva de aritmética al álgebra.',
      },
      {
        id: '1e-ing',
        name: 'Inglés 1º ESO (A2)',
        category: 'ingles',
        topicsCount: 12,
        keyTopics: ['Past Continuous vs Past Simple (while / when)', 'Modal verbs (can, could, must, should)', 'Listening & Speaking en situaciones reales'],
        annualUpdateNote: 'Alineado con marco europeo MCER A2.',
      },
      {
        id: '1e-bio',
        name: 'Biología y Geología / Geografía e Historia',
        category: 'conocimiento',
        topicsCount: 14,
        keyTopics: ['La célula eucariota y procariota', 'La geosfera, minerales, atmósfera e hidrosfera', 'Prehistoria y Edad Antigua (Mesopotamia, Egipto, Grecia y Roma)'],
        annualUpdateNote: 'Mapas conceptuales comparativos de civilizaciones antiguas.',
      },
    ],
  },
  {
    id: '2-eso',
    name: '2º de ESO',
    stage: 'Educación Secundaria (ESO)',
    ageRange: '13–14 años',
    coreSubjects: [
      {
        id: '2e-mat',
        name: 'Matemáticas 2º ESO',
        category: 'matematicas',
        topicsCount: 14,
        keyTopics: ['Ecuaciones de 1º y 2º grado y Sistemas de ecuaciones', 'Teorema de Pitágoras y Semejanza (Teorema de Tales)', 'Funciones lineales y proporcionalidad compuesta'],
        annualUpdateNote: 'Visualizadores interactivos de Pitágoras y funciones.',
      },
      {
        id: '2e-fyq',
        name: 'Física y Química + Geografía e Historia',
        category: 'conocimiento',
        topicsCount: 15,
        keyTopics: ['Tabla periódica, estructura atómica y reacciones químicas', 'Cinemática: velocidad, aceleración y fuerzas (MRU)', 'Edad Media y Edad Moderna (Renacimiento y Barroco)'],
        annualUpdateNote: 'Mnemotecnia para elementos químicos y leyes de los gases.',
      },
      {
        id: '2e-ing',
        name: 'Inglés 2º ESO (A2+/B1)',
        category: 'ingles',
        topicsCount: 12,
        keyTopics: ['First & Second Conditional', 'Passive Voice (Present & Past)', 'Present Perfect con for, since, already, yet, just'],
        annualUpdateNote: 'Enfoque comunicativo oral.',
      },
    ],
  },
  {
    id: '3-eso',
    name: '3º de ESO',
    stage: 'Educación Secundaria (ESO)',
    ageRange: '14–15 años',
    coreSubjects: [
      {
        id: '3e-mat',
        name: 'Matemáticas 3º ESO',
        category: 'matematicas',
        topicsCount: 15,
        keyTopics: ['Polinomios, identidades notables y regla de Ruffini', 'Ecuaciones de 2º grado, bicuadradas y parábolas', 'Progresiones aritméticas y geométricas y Estadística'],
        annualUpdateNote: 'Actualizado según saberes básicos de 3º ESO.',
      },
      {
        id: '3e-bio',
        name: 'Biología y Geología + Física y Química',
        category: 'conocimiento',
        topicsCount: 16,
        keyTopics: ['Anatomía y fisiología humana avanzada', 'Formulación inorgánica IUPAC y estequiometría', 'Geografía económica, política y sectores productivos'],
        annualUpdateNote: 'Tarjetas adaptativas de formulación química.',
      },
      {
        id: '3e-ing',
        name: 'Inglés 3º ESO (B1)',
        category: 'ingles',
        topicsCount: 12,
        keyTopics: ['Defining & Non-defining Relative Clauses', 'Reported Speech (estilo indirecto)', 'Present Perfect Continuous vs Past Perfect'],
        annualUpdateNote: 'Preparación nivel B1.',
      },
    ],
  },
  {
    id: '4-eso',
    name: '4º de ESO',
    stage: 'Educación Secundaria (ESO)',
    ageRange: '15–16 años',
    coreSubjects: [
      {
        id: '4e-mat',
        name: 'Matemáticas A / B (4º ESO)',
        category: 'matematicas',
        topicsCount: 15,
        keyTopics: ['Trigonometría (seno, coseno, tangente) y vectores', 'Logaritmos, inecuaciones y funciones elementales', 'Combinatoria y probabilidad condicional'],
        annualUpdateNote: 'Doble itinerario académico y aplicado.',
      },
      {
        id: '4e-cie',
        name: 'Biología, Física y Química e Historia Contemporánea',
        category: 'conocimiento',
        topicsCount: 16,
        keyTopics: ['Genética mendeliana, ADN, mitosis/meiosis y evolución', 'Dinámica (Leyes de Newton), Trabajo, Energía y Hidrocarburos', 'Siglos XIX y XX: Revoluciones, Guerras Mundiales y mundo actual'],
        annualUpdateNote: 'Mapas cronológicos de Historia Contemporánea.',
      },
      {
        id: '4e-ing',
        name: 'Inglés 4º ESO (B1+)',
        category: 'ingles',
        topicsCount: 12,
        keyTopics: ['Third Conditional & I wish / If only', 'Modal Perfects (must have, should have)', 'Argumentative essays & oral presentations'],
        annualUpdateNote: 'Simulacros orales B1/B2.',
      },
    ],
  },
  {
    id: '1-bach',
    name: '1º de Bachillerato',
    stage: 'Bachillerato',
    ageRange: '16–17 años',
    coreSubjects: [
      {
        id: '1b-mat',
        name: 'Matemáticas I / CCSS I',
        category: 'matematicas',
        topicsCount: 16,
        keyTopics: ['Números complejos, trigonometría y geometría analítica en el plano', 'Límites, continuidad, asíntotas y cálculo de derivadas', 'Distribuciones estadísticas bidimensionales, regresión y normal'],
        annualUpdateNote: 'Adaptado a las nuevas competencias de Bachillerato.',
      },
      {
        id: '1b-cie',
        name: 'Biología, Física y Química y Filosofía',
        category: 'conocimiento',
        topicsCount: 16,
        keyTopics: ['Bioquímica, histología y fisiología vegetal/animal', 'Cinemática 2D, termodinámica y química del carbono', 'Filosofía: epistemología, antropología, ética y lógica'],
        annualUpdateNote: 'Mapas conceptuales de Filosofía y Química Orgánica.',
      },
      {
        id: '1b-ing',
        name: 'Inglés I Bachillerato (B2)',
        category: 'ingles',
        topicsCount: 12,
        keyTopics: ['Causative Have/Get something done & Passive avanzada', 'Phrasal verbs, idioms y conectores textuales', 'Práctica de fonética y fluidez B2'],
        annualUpdateNote: 'Entrenamiento oral y escrito B2.',
      },
    ],
  },
  {
    id: '2-bach',
    name: '2º de Bachillerato (Preparación PAU / EBAU)',
    stage: 'Bachillerato',
    ageRange: '17–18 años',
    coreSubjects: [
      {
        id: '2b-mat',
        name: 'Matemáticas II / CCSS II (PAU)',
        category: 'matematicas',
        topicsCount: 16,
        keyTopics: ['Matrices, determinantes, rangos y Teorema de Rouché-Frobenius', 'Geometría afín y métrica en el espacio 3D (rectas y planos)', 'Cálculo integral (indefinida y Regla de Barrow) y Teoremas de Bolzano y Rolle'],
        annualUpdateNote: 'Actualizado al nuevo modelo competencial de la PAU 2026/2027 en la Comunitat Valenciana.',
      },
      {
        id: '2b-his',
        name: 'Historia de España, Historia de la Filosofía y Ciencias PAU',
        category: 'conocimiento',
        topicsCount: 18,
        keyTopics: ['Constitucionalismo español (1812–1978), Restauración, II República, Franquismo y Transición', 'Platón, Aristóteles, Tomás de Aquino, Descartes, Hume, Kant, Marx, Nietzsche, Ortega y Habermas', 'Inmunología, genética molecular, campo gravitatorio/electromagnético y equilibrio ácido-base/redox'],
        annualUpdateNote: 'Esquemas comparativos de autores y bloques de Historia de España para la PAU.',
      },
      {
        id: '2b-ing',
        name: 'Inglés II Bachillerato (PAU / Nivel B2-C1)',
        category: 'ingles',
        topicsCount: 12,
        keyTopics: ['Reading comprehension, True/False justification & Rephrasing', 'Opinion & For-and-Against Essays (150–200 words)', 'Oral production test (PAU Speaking & Listening)'],
        annualUpdateNote: 'Modelos de examen PAU Comunitat Valenciana actualizados.',
      },
    ],
  },
];
