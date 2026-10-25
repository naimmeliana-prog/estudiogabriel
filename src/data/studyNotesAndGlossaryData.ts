import { SubjectId } from './curriculumData';

export interface FormulaOrRuleBox {
  id: string;
  title: string;
  formulaExpression: string;
  explanation: string;
  exampleCalculation: string;
}

export interface WorkedExamExample {
  title: string;
  problemOrQuestion: string;
  stepByStepSolution: string[];
  finalResult: string;
}

export interface UnitQuickQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
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
  workedExamples: WorkedExamExample[];
  quickQuiz: UnitQuickQuizQuestion[];
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
  // ============================================================================
  // MATEMÁTICAS · 8 UNIDADES COMPLETAS DE 5º DE PRIMARIA
  // ============================================================================
  {
    id: 'notes-math-u1',
    subject: 'matematicas',
    subjectName: 'Matemáticas',
    trimester: '1º Trimestre',
    unitNumber: 'Unidad 1',
    title: 'Números de hasta 7 cifras, Redondeo, Números Romanos, Suma y Resta',
    quickSummary:
      'Aprendemos el valor posicional de las cifras hasta la Unidad de Millón (U.MM), cómo aproximar o redondear números para estimar resultados rápido, las reglas de los números romanos y la relación entre la suma y la resta.',
    detailedNotes: [
      {
        heading: '1. El Valor de Posición hasta el Millón',
        points: [
          'En un número de 7 cifras, el orden de derecha a izquierda es: Unidades (U), Decenas (D), Centenas (C), Unidades de Millar (UM), Decenas de Millar (DM), Centenas de Millar (CM) y Unidades de Millón (U.MM).',
          'Descomposición aditiva y multiplicativa: En el número 3.452.108, la cifra 4 está en las Centenas de Millar (CM), por lo que vale 4 × 100.000 = 400.000 unidades.',
          'Cómo redondear (aproximar) un número: Nos fijamos en la cifra que está justo a la derecha del orden al que queremos redondear. Si es 5, 6, 7, 8 o 9, sumamos 1 a la cifra de redondeo. Si es 0, 1, 2, 3 o 4, la dejamos igual y convertimos el resto en ceros.',
        ],
      },
      {
        heading: '2. Reglas de los Números Romanos (I, V, X, L, C, D, M)',
        points: [
          'Valores de las 7 letras: I = 1 · V = 5 · X = 10 · L = 50 · C = 100 · D = 500 · M = 1.000.',
          'Regla de la Suma: Una letra colocada a la derecha de otra de igual o mayor valor le suma su valor (ej. XV = 10 + 5 = 15; CL = 100 + 50 = 150).',
          'Regla de la Resta: Las letras I, X y C escritas a la IZQUIERDA de otra mayor le restan su valor (ej. IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900).',
          'Regla de la Repetición: Las letras I, X, C y M solo se pueden repetir hasta 3 veces seguidas (III = 3, XXX = 30). Las letras V, L y D NUNCA se repiten.',
        ],
      },
      {
        heading: '3. Propiedades de la Suma y Prueba de la Resta',
        points: [
          'En la resta, el número mayor de arriba se llama MINUENDO (M), el que quitamos debajo se llama SUSTRAENDO (S) y el resultado se llama DIFERENCIA (D).',
          'Prueba de la Resta: Si sumas el Sustraendo más la Diferencia, siempre tiene que darte el Minuendo (S + D = M).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-math-u1-1',
        title: 'Fórmula de la Prueba de la Resta',
        formulaExpression: 'Minuendo (M) - Sustraendo (S) = Diferencia (D)   ⟺   S + D = M',
        explanation:
          'Para comprobar si una resta está bien hecha, suma los dos números de abajo (Sustraendo + Diferencia) y comprueba que da el de arriba (Minuendo).',
        exampleCalculation: '850 - 240 = 610   →   Prueba: 240 + 610 = 850 ✓',
      },
      {
        id: 'f-math-u1-2',
        title: 'Tabla de Letras Romanas Clave',
        formulaExpression: 'I=1 · V=5 · X=10 · L=50 · C=100 · D=500 · M=1.000',
        explanation: 'Recuerda los pares que restan a la izquierda: IV=4, IX=9, XL=40, XC=90, CD=400, CM=900.',
        exampleCalculation: 'Siglo XXI = 21  |  Año MCMXCII = 1000 + 900 + 90 + 2 = 1992',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Aproximar a las Unidades de Millar (UM)',
        problemOrQuestion: 'Aproxima el número 47.820 a las Unidades de Millar (UM).',
        stepByStepSolution: [
          '1º Localizamos la cifra de las Unidades de Millar (UM): en 47.820 es el 7 (representa 7.000).',
          '2º Miramos el vecino de su derecha (las Centenas): es un 8.',
          '3º Como 8 es mayor o igual que 5, sumamos +1 al 7 (pasa a 8) y ponemos ceros detrás.',
        ],
        finalResult: '47.820 aproximado a las UM es 48.000.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-m1-1',
        question: '¿Qué número representa el número romano CDXL?',
        options: ['440', '640', '460'],
        correctAnswer: '440',
        explanation: 'CD es 500 - 100 = 400, y XL es 50 - 10 = 40. En total: 400 + 40 = 440.',
      },
    ],
    examTips: [
      'En los números romanos, el 40 se escribe XL (50 - 10), ¡nunca XXXX!',
      'Usa siempre la prueba de la resta (Sustraendo + Diferencia = Minuendo) cuando haya llevadas con ceros.',
    ],
  },
  {
    id: 'notes-math-u2',
    subject: 'matematicas',
    subjectName: 'Matemáticas',
    trimester: '1º Trimestre',
    unitNumber: 'Unidad 2',
    title: 'La Multiplicación (por 1, 2 y 3 cifras), Propiedades y Potencias',
    quickSummary:
      'Multiplicar es una suma abreviada de sumandos iguales. Dominamos sus tres propiedades (Conmutativa, Asociativa y Distributiva), cómo multiplicar por varias cifras desplazando los productos parciales y qué son las potencias (cuadrados y cubos).',
    detailedNotes: [
      {
        heading: '1. Las 3 Propiedades de la Multiplicación',
        points: [
          'Propiedad Conmutativa: El orden de los factores no altera el producto (6 × 8 = 8 × 6 = 48).',
          'Propiedad Asociativa: Para multiplicar tres números, agrupamos dos cualesquiera primero: (4 × 5) × 3 = 20 × 3 = 60.',
          'Propiedad Distributiva respecto de la suma o resta: El factor de fuera multiplica a cada número de dentro del paréntesis: 7 × (10 + 3) = (7 × 10) + (7 × 3) = 70 + 21 = 91.',
        ],
      },
      {
        heading: '2. Multiplicación por 2 y 3 Cifras (El Hueco de las Decenas)',
        points: [
          'Al multiplicar por la cifra de las decenas del segundo factor, dejamos 1 hueco a la derecha (porque multiplicamos por decenas).',
          'Si el segundo factor tiene un CERO intermedio (por ejemplo, multiplicar por 204), no hace falta escribir una fila entera de ceros: saltamos dos huecos a la izquierda al multiplicar por la centena.',
        ],
      },
      {
        heading: '3. Las Potencias: Base y Exponente',
        points: [
          'Una POTENCIA es un modo abreviado de escribir una multiplicación de factores iguales: 5³ = 5 × 5 × 5 = 125.',
          'BASE (el número grande de abajo): Es el factor que se repite (5).',
          'EXPONENTE (el número pequeño de arriba): Indica cuántas veces se multiplica la base por sí misma (3 veces). ¡Cuidado: 5³ NO es 5 × 3 = 15, sino 5 × 5 × 5 = 125!',
          'Potencias de base 10: Son facilísimas, es el 1 seguido de tantos ceros como indique el exponente (10⁴ = 10.000).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-math-u2-1',
        title: 'Fórmula de la Propiedad Distributiva',
        formulaExpression: 'a × (b + c) = (a × b) + (a × c)',
        explanation: 'Sirve tanto para resolver ejercicios con paréntesis como para multiplicar rápido de cabeza.',
        exampleCalculation: '6 × 18 = 6 × (10 + 8) = 60 + 48 = 108',
      },
      {
        id: 'f-math-u2-2',
        title: 'Fórmula de las Potencias (Cuadrados y Cubos)',
        formulaExpression: 'a² = a × a (Al cuadrado)   |   a³ = a × a × a (Al cubo)   |   10ⁿ = 1 seguido de n ceros',
        explanation: 'Elevado a 2 se lee "al cuadrado" y elevado a 3 se lee "al cubo".',
        exampleCalculation: '7² = 7 × 7 = 49   |   4³ = 4 × 4 × 4 = 64   |   10⁵ = 100.000',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo Resuelto: Aplicar la Propiedad Distributiva de dos formas',
        problemOrQuestion: 'Calcula 5 × (6 + 4) de dos maneras distintas.',
        stepByStepSolution: [
          'Forma 1 (Haciendo primero el paréntesis): 5 × (6 + 4) = 5 × 10 = 50.',
          'Forma 2 (Aplicando la propiedad distributiva): (5 × 6) + (5 × 4) = 30 + 20 = 50.',
        ],
        finalResult: 'Por ambos caminos el resultado es 50.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-m2-1',
        question: '¿Cuánto vale la potencia 3³ (tres al cubo)?',
        options: ['27 (porque es 3 × 3 × 3)', '9 (porque es 3 × 3)', '6 (porque es 3 + 3)'],
        correctAnswer: '27 (porque es 3 × 3 × 3)',
        explanation: '3 × 3 = 9, y 9 × 3 = 27. Nunca multipliques la base por el exponente.',
      },
    ],
    examTips: [
      'Truco de oro de la tabla del 7 y 8: recuerda la escalera 5, 6, 7, 8 → 56 = 7 × 8.',
      'En potencias, prohibido hacer "base × exponente": 2⁴ es 2 × 2 × 2 × 2 = 16, ¡nunca 8!',
    ],
  },
  {
    id: 'notes-math-u3',
    subject: 'matematicas',
    subjectName: 'Matemáticas',
    trimester: '1º Trimestre',
    unitNumber: 'Unidad 3',
    title: 'La División por 1 y 2 Cifras, Prueba de la División y Múltiplos/Divisores',
    quickSummary:
      'Aprendemos a dividir entre 1 y 2 cifras en la cajita, cuándo escribir "cero al cociente y bajo la cifra siguiente", cómo comprobar cualquier división con su fórmula y las reglas para saber de un vistazo si un número es divisible entre 2, 3, 5, 9 o 10.',
    detailedNotes: [
      {
        heading: '1. Los 4 Términos de la División y Regla del Cero al Cociente',
        points: [
          'Dividendo (D): Cantidad total que queremos repartir.',
          'Divisor (d): Número de partes iguales entre las que repartimos.',
          'Cociente (c): Resultado que toca a cada parte.',
          'Resto (r): Lo que sobra sin poder repartirse. SIEMPRE debe cumplirse que Resto < Divisor.',
          'Regla de "Cero al cociente y bajo la cifra siguiente": Cuando durante la división bajas una cifra del dividendo y el número que se forma sigue siendo MÁS PEQUEÑO que el divisor (no cabe ni a 1), debes escribir un 0 en el cociente antes de bajar la siguiente cifra.',
        ],
      },
      {
        heading: '2. Múltiplos y Divisores · Criterios de Divisibilidad',
        points: [
          'Los MÚLTIPLOS de un número se obtienen multiplicando ese número por 0, 1, 2, 3, 4... (ej. múltiplos de 6: 0, 6, 12, 18, 24...).',
          'Un número es DIVISOR de otro si al dividirlos la división es exacta (resto = 0).',
          'Criterio del 2: Un número es divisible por 2 si termina en cifra PAR (0, 2, 4, 6, 8).',
          'Criterio del 3: Es divisible por 3 si la SUMA de sus cifras es múltiplo de 3 (ej. 45 → 4+5=9, sí es divisible por 3).',
          'Criterio del 5 y del 10: Por 5 si acaba en 0 o 5; por 10 si acaba en 0.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-math-u3-1',
        title: 'Fórmula de la Prueba de la División',
        formulaExpression: 'Dividendo (D) = (Divisor × Cociente) + Resto   [con Resto < Divisor]',
        explanation: 'Si al hacer esta operación obtienes el Dividendo y el resto es menor que el divisor, tu división está 100% bien.',
        exampleCalculation: 'En 170 ÷ 8: Cociente = 21 y Resto = 2. Prueba: (8 × 21) + 2 = 168 + 2 = 170 ✓',
      },
      {
        id: 'f-math-u3-2',
        title: 'Propiedad Fundamental de la División Exacta',
        formulaExpression: 'Si multiplicas o divides D y d por el mismo número, el cociente NO cambia',
        explanation: 'Muy útil para tachar el mismo número de ceros finales en el dividendo y en el divisor.',
        exampleCalculation: '2.400 ÷ 600 = 24 ÷ 6 = 4 (tachamos dos ceros en ambos lados).',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo Resuelto: El famoso "Cero al cociente"',
        problemOrQuestion: 'Calcula 824 ÷ 8 sin olvidar el cero intermedio.',
        stepByStepSolution: [
          '1º Tomamos el 8 de las centenas: 8 ÷ 8 = 1 (ponemos 1 en el cociente, sobra 0).',
          '2º Bajamos el 2 de las decenas: como 2 es más pequeño que 8, ¡no cabe! Escribimos 0 en el cociente.',
          '3º Bajamos el 4 al lado del 2 para formar 24: 24 ÷ 8 = 3 (ponemos 3 en el cociente, resto 0).',
        ],
        finalResult: '824 ÷ 8 = 103 (Comprobación: 8 × 103 = 824).',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-m3-1',
        question: 'Sin hacer la división, ¿es el número 123 divisible exactamente entre 3?',
        options: ['Sí, porque sus cifras suman 1+2+3 = 6 (que está en la tabla del 3)', 'No, porque termina en cifra impar', 'Solo es divisible entre 2'],
        correctAnswer: 'Sí, porque sus cifras suman 1+2+3 = 6 (que está en la tabla del 3)',
        explanation: 'El criterio del 3 dice que sumemos las cifras: 1 + 2 + 3 = 6. Como 6 es múltiplo de 3, 123 ÷ 3 es exacta (da 41).',
      },
    ],
    examTips: [
      'Si el dividendo y el divisor terminan en ceros (ej. 4.500 ÷ 90), tacha UN cero en cada uno (450 ÷ 9 = 50) y acabarás en 5 segundos.',
    ],
  },
  {
    id: 'notes-math-u4',
    subject: 'matematicas',
    subjectName: 'Matemáticas',
    trimester: '2º Trimestre',
    unitNumber: 'Unidad 4',
    title: 'Operaciones Combinadas (PAPOMUDAS) y Resolución de Problemas en 3 Pasos',
    quickSummary:
      'En las operaciones combinadas nunca se calcula a lo loco de izquierda a derecha: seguimos el semáforo de prioridades (Paréntesis → Multiplicación/División → Suma/Resta). Además aprendemos a modelizar cualquier problema con barras.',
    detailedNotes: [
      {
        heading: '1. El Semáforo de las Operaciones Combinadas',
        points: [
          '1º PRIORIDAD MÁXIMA · PARÉNTESIS ( ): Resuelve siempre primero las operaciones que están dentro de los paréntesis.',
          '2º SEGUNDA PRIORIDAD · MULTIPLICACIONES (×) Y DIVISIONES (÷): Si hay varias seguidas, hazlas de izquierda a derecha.',
          '3º ÚLTIMO PASO · SUMAS (+) Y RESTAS (-): Hazlas de izquierda a derecha para no equivocarte cuando hay una resta delante de una suma.',
        ],
      },
      {
        heading: '2. Qué operación elegir en los Problemas Matemáticos',
        points: [
          'SUMAR (+): Juntar, añadir, reunir cantidades distintas o calcular el total de partes diferentes.',
          'RESTAR (-): Quitar, gastar, calcular cuánto falta, cuánto sobra o cuál es la diferencia ("¿cuántos más tiene A que B?").',
          'MULTIPLICAR (×): Repetir varios grupos IGUALES (ej. "8 cajas con 24 naranjas en cada caja").',
          'DIVIDIR (÷): Repartir o agrupar un total en partes IGUALES (ej. "repartir 168 kg en 8 cajas iguales").',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-math-u4-1',
        title: 'Escalera de Jerarquía de Operaciones',
        formulaExpression: 'Nivel 1: ( Paréntesis )  ⟶  Nivel 2: × y ÷  ⟶  Nivel 3: + y - (de izq. a der.)',
        explanation: 'Subraya en cada línea la operación que vas a hacer y copia el resto exactamente debajo.',
        exampleCalculation: '30 - 4 × (2 + 3) = 30 - 4 × 5 = 30 - 20 = 10',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo Resuelto: Operación combinada con resta y suma final',
        problemOrQuestion: 'Resuelve paso a paso: 25 - 10 + 4 × 3',
        stepByStepSolution: [
          '1º Hacemos primero la multiplicación (4 × 3 = 12): nos queda 25 - 10 + 12.',
          '2º ¡Cuidado! No sumes 10 + 12 primero. Hacemos de izquierda a derecha: 25 - 10 = 15.',
          '3º Ahora sumamos 12: 15 + 12 = 27.',
        ],
        finalResult: '27',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-m4-1',
        question: '¿Cuál es el resultado correcto de: 18 - 2 × (3 + 4)?',
        options: ['4', '112', '10'],
        correctAnswer: '4',
        explanation: '1º Paréntesis: (3+4) = 7. 2º Multiplicación: 2 × 7 = 14. 3º Resta: 18 - 14 = 4.',
      },
    ],
    examTips: [
      'Escribe las operaciones combinadas en forma de "embudo" hacia abajo, haciendo solo un paso por línea.',
    ],
  },
  {
    id: 'notes-math-u5',
    subject: 'matematicas',
    subjectName: 'Matemáticas',
    trimester: '2º Trimestre',
    unitNumber: 'Unidad 5',
    title: 'Las Fracciones: Equivalentes, Comparación, Operaciones y Fracción de un Número',
    quickSummary:
      'Una fracción expresa partes iguales de la unidad (Numerador arriba / Denominador abajo). Aprendemos a comparar fracciones, sumar y restar con igual denominador, pasar de fracción impropia a número mixto y hallar la fracción de un total.',
    detailedNotes: [
      {
        heading: '1. Comparación de Fracciones (¿Cuál es mayor?)',
        points: [
          'Si tienen el MISMO DENOMINADOR (abajo igual, ej. 5/8 y 3/8): Es mayor la que tiene MAYOR numerador arriba (5/8 > 3/8, porque los trozos son igual de grandes y coges más trozos).',
          'Si tienen el MISMO NUMERADOR (arriba igual, ej. 3/4 y 3/8): ¡Al revés! Es mayor la que tiene MENOR denominador abajo (3/4 > 3/8, porque si partes la pizza en solo 4 trozos, cada trozo es mucho más grande que si la partes en 8).',
        ],
      },
      {
        heading: '2. Número Mixto (Entero + Fracción)',
        points: [
          'Toda fracción impropia (numerador mayor que denominador, como 11/4) se puede escribir como un Número Mixto: dividimos 11 ÷ 4 = 2 enteros (cociente) y sobran 3 cuartos (resto) → 2 y 3/4.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-math-u5-1',
        title: 'Fórmula de la Fracción de una Cantidad',
        formulaExpression: '(a / b) de N = (N ÷ b) × a',
        explanation: 'Divide el total N entre el denominador de abajo (b) y multiplica por el numerador de arriba (a).',
        exampleCalculation: '2/5 de 150 € = (150 ÷ 5) × 2 = 30 × 2 = 60 €',
      },
      {
        id: 'f-math-u5-2',
        title: 'Suma y Resta de Fracciones con Igual Denominador',
        formulaExpression: '(a / d) + (b / d) = (a + b) / d   |   (a / d) - (b / d) = (a - b) / d',
        explanation: 'El denominador de abajo NUNCA se suma ni se resta; se deja igual y solo se operan los numeradores.',
        exampleCalculation: '3/7 + 2/7 = 5/7   |   1 - 3/8 = 8/8 - 3/8 = 5/8',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Fracción que queda por recorrer',
        problemOrQuestion: 'Un ciclista debe recorrer 60 km. Por la mañana recorre 3/5 del camino. ¿Cuántos kilómetros le FALTAN por recorrer?',
        stepByStepSolution: [
          '1º Calculamos cuánto ha recorrido ya: 3/5 de 60 = (60 ÷ 5) × 3 = 12 × 3 = 36 km recorridos.',
          '2º Restamos al total para saber cuánto le falta: 60 - 36 = 24 km (que equivale a los 2/5 restantes).',
        ],
        finalResult: 'Le faltan 24 km por recorrer.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-m5-1',
        question: '¿Qué fracción es mayor: 2/3 de una tarta o 2/8 de la misma tarta?',
        options: ['2/3 es mayor (los trozos son más grandes)', '2/8 es mayor porque 8 es mayor que 3', 'Son iguales'],
        correctAnswer: '2/3 es mayor (los trozos son más grandes)',
        explanation: 'A igual numerador (2 trozos), cuanto en menos partes dividas la tarta (3 partes en vez de 8), más grande es cada trozo.',
      },
    ],
    examTips: [
      'Recuerda que la unidad entera "1" siempre se puede escribir como una fracción con el mismo número arriba y abajo (1 = 4/4 = 8/8).',
    ],
  },
  {
    id: 'notes-math-u6',
    subject: 'matematicas',
    subjectName: 'Matemáticas',
    trimester: '2º Trimestre',
    unitNumber: 'Unidad 6',
    title: 'Números Decimales, Operaciones con Comas y Porcentajes Prácticos',
    quickSummary:
      'Los números decimales nos permiten medir con precisión y manejar euros y céntimos. Aprendemos a ordenarlos, sumarlos alineando las comas, multiplicarlos y calcular porcentajes como descuentos (10%, 25%, 50%).',
    detailedNotes: [
      {
        heading: '1. Décimas, Centésimas y Milésimas',
        points: [
          'En el número 14,385: el 14 es la parte entera; detrás de la coma el 3 son las DÉCIMAS (0,3), el 8 las CENTÉSIMAS (0,08) y el 5 las MILÉSIMAS (0,005).',
          'Para comparar dos decimales (ej. 4,7 y 4,68), añade ceros al final para que tengan las mismas cifras decimales: 4,70 es mayor que 4,68.',
        ],
      },
      {
        heading: '2. Operaciones con Decimales (+, -, ×)',
        points: [
          'En SUMA y RESTA: Alinea las comas en vertical una debajo de otra. Si falta algún hueco a la derecha, rellénalo con un 0.',
          'En MULTIPLICACIÓN: Multiplica normal como si no hubiera comas. Al terminar, cuenta cuántas cifras decimales había en total entre los dos factores y pon la coma en el resultado dejando ese mismo número de cifras decimales.',
        ],
      },
      {
        heading: '3. Los Porcentajes (%) como Fracciones de denominador 100',
        points: [
          'Un porcentaje indica "cuántas partes tomamos de cada 100": 25% = 25/100.',
          'Trucos rápidos: 50% es la MITAD (dividir entre 2) · 25% es la CUARTA PARTE (dividir entre 4) · 10% es la DÉCIMA PARTE (dividir entre 10).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-math-u6-1',
        title: 'Fórmula para Calcular el Porcentaje de un Número',
        formulaExpression: 'P% de N = (P × N) ÷ 100',
        explanation: 'Multiplica el porcentaje por el número y divide el resultado entre 100.',
        exampleCalculation: '15% de 200 = (15 × 200) ÷ 100 = 3.000 ÷ 100 = 30',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo Resuelto: Descuento en una tienda de deportes',
        problemOrQuestion: 'Una bicicleta cuesta 160 €, pero hoy tiene un 25% de descuento. ¿Cuánto pagaremos por ella?',
        stepByStepSolution: [
          '1º Calculamos el descuento (25% de 160): como 25% es la cuarta parte, dividimos 160 ÷ 4 = 40 € de rebaja.',
          '2º Restamos el descuento al precio inicial: 160 € - 40 € = 120 €.',
        ],
        finalResult: 'Pagaremos 120 €.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-m6-1',
        question: '¿Qué número decimal es MAYOR: 8,5 o 8,49?',
        options: ['8,5 (porque equivale a 8,50)', '8,49 (porque 49 es mayor que 5)', 'Valen lo mismo'],
        correctAnswer: '8,5 (porque equivale a 8,50)',
        explanation: 'Miramos primero las décimas: 8,5 tiene 5 décimas (50 centésimas) y 8,49 tiene 4 décimas (49 centésimas).',
      },
    ],
    examTips: [
      'Al comparar decimales, iguala siempre el número de cifras detrás de la coma añadiendo ceros a la derecha (8,5 → 8,50).',
    ],
  },
  {
    id: 'notes-math-u7',
    subject: 'matematicas',
    subjectName: 'Matemáticas',
    trimester: '3º Trimestre',
    unitNumber: 'Unidad 7',
    title: 'Sistema Métrico Decimal (Longitud, Masa, Capacidad y Superficie) y el Tiempo',
    quickSummary:
      'Dominamos la escalera para convertir medidas de longitud (metros), masa (gramos), capacidad (litros), superficie (m² de 100 en 100) y el sistema sexagesimal del tiempo (horas, minutos y segundos de 60 en 60).',
    detailedNotes: [
      {
        heading: '1. La Escalera de 10 en 10 (Longitud, Masa y Capacidad)',
        points: [
          'Peldaños de mayor a menor: k (kilo: ×1000) · h (hecto: ×100) · da (deca: ×10) · UNIDAD (m, g, l) · d (deci: ÷10) · c (centi: ÷100) · m (mili: ÷1000).',
          'Para sumar o restar medidas en forma compleja (ej. 3 km 40 m + 5 hm), pásalo TODO primero a la misma unidad (por ejemplo, todo a metros: 3.040 m + 500 m = 3.540 m).',
        ],
      },
      {
        heading: '2. Unidades de Superficie (m²) y el Tiempo (Sistema Sexagesimal)',
        points: [
          'En las unidades de SUPERFICIE (km², hm², dam², m², dm², cm², mm²), como llevan un "2" en el exponente, cada escalón que bajas se multiplica por 100 (dos ceros por escalón) y cada escalón que subes se divide entre 100.',
          'En el TIEMPO: 1 hora (h) = 60 minutos (min) · 1 minuto = 60 segundos (s) · 1 hora = 3.600 segundos (60 × 60).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-math-u7-1',
        title: 'Regla de Conversión en la Escalera Métrica',
        formulaExpression: 'Bajar escalones = MULTIPLICAR (×10)   |   Subir escalones = DIVIDIR (÷10)',
        explanation: 'En unidades cuadradas de superficie (m²), cada escalón vale ×100 o ÷100.',
        exampleCalculation: '4,5 km a metros (bajas 3 escalones: ×1.000) = 4.500 m   |   3 m² a dm² (bajas 1 escalón: ×100) = 300 dm²',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo Resuelto: Pasar de expresión compleja a incompleja',
        problemOrQuestion: 'Pasa a metros y suma: 2 km 5 hm + 35 dam.',
        stepByStepSolution: [
          '1º Pasamos todo a metros (m): 2 km = 2.000 m · 5 hm = 500 m → Juntos son 2.500 m.',
          '2º Pasamos 35 dam a metros (bajamos 1 escalón ×10): 35 × 10 = 350 m.',
          '3º Sumamos ambos en metros: 2.500 m + 350 m = 2.850 m.',
        ],
        finalResult: '2.850 metros.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-m7-1',
        question: '¿Cuántos minutos hay en 2 horas y tres cuartos (2 h y 45 min)?',
        options: ['165 minutos', '245 minutos', '145 minutos'],
        correctAnswer: '165 minutos',
        explanation: '2 horas son 2 × 60 = 120 minutos. Sumamos los 45 minutos: 120 + 45 = 165 minutos.',
      },
    ],
    examTips: [
      'Nunca sumes kilómetros con metros directamente sin pasarlos antes a la misma unidad.',
    ],
  },
  {
    id: 'notes-math-u8',
    subject: 'matematicas',
    subjectName: 'Matemáticas',
    trimester: '3º Trimestre',
    unitNumber: 'Unidad 8',
    title: 'Geometría: Ángulos, Clasificación de Polígonos y Fórmulas de Perímetros y Áreas',
    quickSummary:
      'Recopilación completa de geometría: tipos de ángulos, clasificación de triángulos (según sus lados y sus ángulos), cuadriláteros y el formulario completo de perímetros y áreas de figuras planas.',
    detailedNotes: [
      {
        heading: '1. Ángulos y Clasificación de Triángulos',
        points: [
          'Tipos de ángulos: Agudo (< 90°), Recto (= 90°), Obtuso (> 90° y < 180°), Llano (= 180°) y Completo (= 360°).',
          'Triángulos según sus LADOS: Equilátero (3 lados iguales), Isósceles (2 lados iguales) y Escaleno (3 lados desiguales).',
          'Triángulos según sus ÁNGULOS: Acutángulo (3 ángulos agudos), Rectángulo (1 ángulo recto de 90°) y Obtusángulo (1 ángulo obtuso).',
        ],
      },
      {
        heading: '2. El Formulario Maestro de Áreas y Perímetros',
        points: [
          'Perímetro de cualquier figura: Suma de todos sus lados exteriores.',
          'Área del Cuadrado: lado × lado (l²).',
          'Área del Rectángulo y del Romboide: base × altura (b × h).',
          'Área del Triángulo: (base × altura) ÷ 2.',
          'Área del Rombo: (Diagonal mayor × diagonal menor) ÷ 2.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-math-u8-1',
        title: 'Formulario Completo de Áreas de Polígonos',
        formulaExpression: 'Cuadrado: A = l × l  |  Rectángulo: A = b × h  |  Triángulo: A = (b × h) ÷ 2  |  Rombo: A = (D × d) ÷ 2',
        explanation: 'Todas las áreas expresan superficie y llevan unidades al cuadrado (cm², m²).',
        exampleCalculation: 'Rombo de diagonales 10 cm y 6 cm: A = (10 × 6) ÷ 2 = 30 cm²',
      },
      {
        id: 'f-math-u8-2',
        title: 'Longitud de la Circunferencia y Área del Círculo (π ≈ 3,14)',
        formulaExpression: 'Longitud Circunferencia: L = 2 × π × r = D × π   |   Área Círculo: A = π × r²',
        explanation: 'El diámetro (D) es el doble del radio (r). El número Pi (π) vale aproximadamente 3,14.',
        exampleCalculation: 'Circunferencia de diámetro 10 cm: L = 10 × 3,14 = 31,4 cm',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo Resuelto: Calcular el Perímetro y el Área de una parcela',
        problemOrQuestion: 'Una parcela rectangular de la huerta de Museros mide 12 m de largo (base) y 8 m de ancho (altura). Calcula cuántos metros de valla necesitamos (Perímetro) y cuántos m² de tierra tiene (Área).',
        stepByStepSolution: [
          '1º Perímetro (valla del borde): Sumamos los 4 lados → P = 12 + 8 + 12 + 8 = 40 metros.',
          '2º Área (superficie interior): Multiplicamos base por altura → A = 12 m × 8 m = 96 m².',
        ],
        finalResult: 'Perímetro = 40 m · Área = 96 m².',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-m8-1',
        question: '¿Cuál es el área de un triángulo cuya base mide 8 cm y su altura mide 5 cm?',
        options: ['20 cm²', '40 cm²', '13 cm²'],
        correctAnswer: '20 cm²',
        explanation: 'Área del triángulo = (base × altura) ÷ 2 = (8 × 5) ÷ 2 = 40 ÷ 2 = 20 cm².',
      },
    ],
    examTips: [
      'Dibuja siempre la figura en una esquina del folio y ponle las medidas en los lados antes de aplicar la fórmula.',
    ],
  },

  // ============================================================================
  // INGLÉS · 8 UNIDADES COMPLETAS DE 5º DE PRIMARIA
  // ============================================================================
  {
    id: 'notes-eng-u1',
    subject: 'ingles',
    subjectName: 'Inglés',
    trimester: '1º Trimestre',
    unitNumber: 'Unit 1',
    title: 'Daily Routines, School Subjects, Telling the Time & Present Simple',
    quickSummary:
      'Aprendemos a contar nuestra rutina desde que nos levantamos (get up, have breakfast, go to school), decir las horas en inglés (o\'clock, quarter past, half past, quarter to) y usar el Present Simple con la regla de la "-S" para He/She/It.',
    detailedNotes: [
      {
        heading: '1. Vocabulario Clave: Daily Routines & School Subjects',
        points: [
          'Rutinas diarias: wake up (despertarse), get up (levantarse), have a shower (ducharse), get dressed (vestirse), have breakfast/lunch/dinner (desayunar/comer/cenar), go to school (ir al cole), do homework (hacer los deberes), go to bed (irse a la cama).',
          'Asignaturas: English, Maths (Matemáticas), Science (Conocimiento del Medio), Spanish, Valencian, PE (Physical Education / Educación Física), Art, Music, ICT (Informática).',
        ],
      },
      {
        heading: '2. Cómo decir la Hora en Inglés (What time is it?)',
        points: [
          'En punto (.00): It\'s seven O\'CLOCK (7:00).',
          'Y cuarto (.15): It\'s QUARTER PAST seven (7:15).',
          'Y media (.30): It\'s HALF PAST seven (7:30).',
          'Menos cuarto (.45): ¡Ojo! En inglés miramos hacia la hora siguiente: 7:45 (las ocho menos cuarto) es "It\'s QUARTER TO eight".',
        ],
      },
      {
        heading: '3. Gramática: Present Simple (+, -, ?)',
        points: [
          'Con I, You, We, They el verbo no cambia: "I get up at eight o\'clock".',
          'Con HE, SHE, IT añadimos -S o -ES en afirmativa: "She GETS up at eight" / "He GOES to school" / "She WATCHES TV".',
          'En negativa usamos DON\'T o DOESN\'T + verbo sin -s: "He DOESN\'T get up late".',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-eng-u1-1',
        title: 'Fórmula Completa del Present Simple',
        formulaExpression: '(+) He/She/It + Verbo-s   |   (-) He/She/It + doesn\'t + Verbo   |   (?) Does + he/she/it + Verbo?',
        explanation: 'Cuando el verbo termina en -o, -ch, -sh, -ss o -x, añadimos -ES (go → goes, watch → watches).',
        exampleCalculation: 'What time DOES school start? School STARTS at nine o\'clock.',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Transformar una frase a 3ª persona (She)',
        problemOrQuestion: 'Pasa la frase "I have breakfast and go to school at half past eight" a "Mi hermana (My sister)".',
        stepByStepSolution: [
          '1º Cuidado con el verbo HAVE: con He/She/It cambia a HAS (nunca "haves").',
          '2º El verbo GO termina en -o, así que añade -ES: GOES.',
        ],
        finalResult: 'My sister HAS breakfast and GOES to school at half past eight.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-e1-1',
        question: '¿Cómo se dice "Son las nueve menos cuarto (8:45)" en inglés?',
        options: ['It\'s quarter to nine', 'It\'s quarter past eight', 'It\'s quarter to eight'],
        correctAnswer: 'It\'s quarter to nine',
        explanation: '"Quarter to" significa "un cuarto para llegar a...", por lo que 8:45 es un cuarto para las 9 (quarter to nine).',
      },
    ],
    examTips: [
      '¡Atención al verbo TENER (HAVE)! En 3ª persona singular (He/She/It) se escribe HAS: "She has lunch at two o\'clock".',
    ],
  },
  {
    id: 'notes-eng-u2',
    subject: 'ingles',
    subjectName: 'Inglés',
    trimester: '1º Trimestre',
    unitNumber: 'Unit 2',
    title: 'Sports, Play / Go / Do, Adverbs of Frequency & Present Continuous',
    quickSummary:
      'Distinguimos qué deportes van con PLAY (pelota/equipo), GO (acabados en -ing) y DO (artes marciales/gimnasia), dónde colocar los adverbios de frecuencia (always, never) y cómo usar el Present Continuous (am/is/are + -ing) para lo que ocurre ahora.',
    detailedNotes: [
      {
        heading: '1. El Truco de los Deportes: PLAY vs GO vs DO',
        points: [
          'PLAY se usa con deportes de PELOTA o juegos competitivos: play football, play basketball, play tennis, play volleyball, play chess.',
          'GO se usa con deportes que terminan en -ING: go swimming, go cycling, go skateboarding, go running, go skiing.',
          'DO se usa con deportes individuales sin pelota o artes marciales: do karate, do judo, do gymnastics, do athletics.',
        ],
      },
      {
        heading: '2. Posición de los Adverbios de Frecuencia',
        points: [
          'Escala de 100% a 0%: Always (100% siempre) · Usually (80% normalmente) · Often (60% a menudo) · Sometimes (40% a veces) · Never (0% nunca).',
          'Regla de oro de posición: Van DELANTE del verbo normal ("I ALWAYS play football"), pero DETRÁS del verbo To Be ("She IS ALWAYS happy").',
        ],
      },
      {
        heading: '3. Present Continuous vs Present Simple',
        points: [
          'Present Simple = Lo que haces habitualmente (every day, on Fridays, usually): "I usually play tennis".',
          'Present Continuous = Lo que estás haciendo AHORA MISMO (now, right now, at the moment, Look!): "I AM PLAYING tennis right now".',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-eng-u2-1',
        title: 'Fórmula del Present Continuous (Acción en curso)',
        formulaExpression: '(+) Sujeto + am / is / are + Verbo-ING   |   (-) Sujeto + \'m not / isn\'t / aren\'t + Verbo-ING',
        explanation: 'Nunca olvides poner am/is/are delante del verbo con -ing.',
        exampleCalculation: 'Look! My friends ARE SWIMMING in the pool right now.',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Elegir entre Present Simple y Present Continuous',
        problemOrQuestion: 'Completa: "Marc usually ______ (ride) his bike on Saturdays, but today he ______ (walk)."',
        stepByStepSolution: [
          '1º En la primera parte dice "usually ... on Saturdays" (hábito) → Present Simple con -s por ser Marc (He): RIDES.',
          '2º En la segunda parte dice "today" (acción de hoy en curso) → Present Continuous: IS WALKING.',
        ],
        finalResult: 'Marc usually RIDES his bike on Saturdays, but today he IS WALKING.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-e2-1',
        question: '¿Qué verbo acompaña a los deportes "swimming" y "karate"?',
        options: ['GO swimming / DO karate', 'PLAY swimming / PLAY karate', 'DO swimming / GO karate'],
        correctAnswer: 'GO swimming / DO karate',
        explanation: 'Los deportes terminados en -ing van con GO (go swimming) y las artes marciales o gimnasia van con DO (do karate).',
      },
    ],
    examTips: [
      'Recuerda: "Never" ya es negativo, así que en inglés nunca se pone con don\'t ("He never eats fish", nunca "He doesn\'t never eat").',
    ],
  },
  {
    id: 'notes-eng-u3',
    subject: 'ingles',
    subjectName: 'Inglés',
    trimester: '2º Trimestre',
    unitNumber: 'Unit 3',
    title: 'My Town, Places & Directions, Prepositions & There is / There are',
    quickSummary:
      'Describimos lugares de nuestro pueblo o ciudad (library, museum, train station, hospital) usando preposiciones de lugar (next to, opposite, between), damos indicaciones para llegar a un sitio y usamos There is / There are con Some y Any.',
    detailedNotes: [
      {
        heading: '1. Places in Town & Prepositions of Place',
        points: [
          'Lugares: town hall (ayuntamiento), library (biblioteca — ¡ojo, librería de comprar es bookshop!), sports centre (polideportivo), supermarket, cinema, bakery (panadería), metro station.',
          'Preposiciones de lugar: next to (al lado de), opposite (enfrente de, cruzando la calle), in front of (delante de), behind (detrás de), between (entre dos cosas), near (cerca de).',
          'Dar direcciones: Go straight on (sigue todo recto), Turn left (gira a la izquierda), Turn right (gira a la derecha), Cross the street (cruza la calle).',
        ],
      },
      {
        heading: '2. There is / There are + A/An, Some, Any',
        points: [
          'Singular (1 cosa): (+) There is a library · (-) There isn\'t a cinema · (?) Is there a park? Yes, there is / No, there isn\'t.',
          'Plural (2 o más cosas): (+) There are SOME shops · (-) There aren\'t ANY museums · (?) Are there ANY buses? Yes, there are / No, there aren\'t.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-eng-u3-1',
        title: 'Regla de A / AN, SOME y ANY',
        formulaExpression: 'Singular: A / AN (1 cosa)   |   Plural Afirmativa (+): SOME   |   Plural Negativa (-) y Pregunta (?): ANY',
        explanation: 'Usamos AN cuando la palabra siguiente empieza por sonido vocal (an apple, an island).',
        exampleCalculation: 'There are SOME trees, but there aren\'t ANY cars. Are there ANY bikes?',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Completar con There is/are y Some/Any',
        problemOrQuestion: 'Completa: "______ there ______ metro station in Museros? Yes, there ______."',
        stepByStepSolution: [
          '1º "metro station" es singular (1 estación), así que la pregunta empieza por IS.',
          '2º Al ser singular contable que empieza por consonante, lleva A.',
        ],
        finalResult: 'IS there A metro station in Museros? Yes, there IS.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-e3-1',
        question: '¡Falso amigo clásico! ¿Qué significa "Library" en inglés?',
        options: ['Biblioteca (donde prestan libros)', 'Librería (tienda donde compras libros)', 'Papelería'],
        correctAnswer: 'Biblioteca (donde prestan libros)',
        explanation: 'Library = Biblioteca pública o del colegio. Librería (tienda) se dice Bookshop o Bookstore.',
      },
    ],
    examTips: [
      'No confundas "Opposite" (enfrente, mirándose cara a cara al otro lado de la calle) con "In front of" (delante en la misma fila).',
    ],
  },
  {
    id: 'notes-eng-u4',
    subject: 'ingles',
    subjectName: 'Inglés',
    trimester: '2º Trimestre',
    unitNumber: 'Unit 4',
    title: 'Wild Animals, Nature, Comparative (-er / more) & Superlative Adjectives (-est / most)',
    quickSummary:
      'Aprendemos a comparar dos elementos con el grado Comparativo (usando THAN) y a destacar el número uno de un grupo con el grado Superlativo (usando THE), distinguiendo entre adjetivos cortos, largos e irregulares.',
    detailedNotes: [
      {
        heading: '1. Adjetivos Cortos (1 sílaba o 2 acabadas en -y)',
        points: [
          'Comparativo (+ -ER THAN): tall → taller than · fast → faster than · big → bigger than (dobla consonante) · heavy → heavier than (la -y cambia a -i).',
          'Superlativo (THE + -EST): tall → the tallest · fast → the fastest · big → the biggest · heavy → the heaviest.',
        ],
      },
      {
        heading: '2. Adjetivos Largos (2 o más sílabas) e Irregulares',
        points: [
          'Comparativo (MORE + adjetivo + THAN): dangerous → more dangerous than · intelligent → more intelligent than · colourful → more colourful than.',
          'Superlativo (THE MOST + adjetivo): the most dangerous · the most intelligent.',
          'Los 2 Irregulares obligatorios: GOOD (bueno) → BETTER than (mejor que) → THE BEST (el mejor)  |  BAD (malo) → WORSE than (peor que) → THE WORST (el peor).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-eng-u4-1',
        title: 'Tabla Resumen de Comparativos y Superlativos',
        formulaExpression: 'Corto: -er than / the -est  |  Largo: more ... than / the most ...  |  Good → better → the best',
        explanation: 'Busca siempre las palabras pista: "than" pide comparativo; "the ... in the world / in the class" pide superlativo.',
        exampleCalculation: 'The cheetah is FASTER THAN the lion. It is THE FASTEST land animal in the world.',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Comparativo vs Superlativo',
        problemOrQuestion: 'Escribe la forma correcta del adjetivo entre paréntesis: 1) "An elephant is ______ (heavy) than a zebra." 2) "The blue whale is the ______ (big) animal."',
        stepByStepSolution: [
          '1º En la frase 1 aparece "than" (comparativo) y "heavy" acaba en -y → HEAVIER.',
          '2º En la frase 2 aparece "the" delante (superlativo) y "big" dobla la g → BIGGEST.',
        ],
        finalResult: '1) heavier · 2) biggest',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-e4-1',
        question: '¿Cuál es el comparativo correcto del adjetivo irregular "GOOD" (bueno)?',
        options: ['better than', 'gooder than', 'more good than'],
        correctAnswer: 'better than',
        explanation: 'Good es irregular: Good (bueno) → Better than (mejor que) → The best (el mejor).',
      },
    ],
    examTips: [
      'Recuerda: Si el adjetivo es corto como "fast", nunca pongas "more faster", pon solo "faster".',
    ],
  },
  {
    id: 'notes-eng-u5',
    subject: 'ingles',
    subjectName: 'Inglés',
    trimester: '2º Trimestre',
    unitNumber: 'Unit 5',
    title: 'Food, Countable & Uncountable Nouns, How much / How many & Modal Verbs',
    quickSummary:
      'Diferenciamos alimentos contables (se pueden contar uno a uno: apples, eggs) e incontables (líquidos, polvos o masas que no tienen plural: water, milk, bread, rice, cheese), y practicamos las normas y consejos con Must y Should.',
    detailedNotes: [
      {
        heading: '1. Countable vs Uncountable Food & How much / How many',
        points: [
          'Countable (Contables): Tienen singular y plural (an apple / three apples). Preguntamos cantidad con HOW MANY: "How many eggs are there?".',
          'Uncountable (Incontables): Líquidos o sustancias como water, milk, juice, bread (pan), cheese (queso), rice (arroz), sugar (azúcar), money (dinero). ¡En inglés funcionan siempre en SINGULAR (There IS some milk)! Preguntamos cantidad con HOW MUCH: "How much milk is there?".',
        ],
      },
      {
        heading: '2. Verbos Modales: MUST / MUSTN\'T (Obligación) y SHOULD / SHOULDN\'T (Consejo)',
        points: [
          'MUST (deber obligatorio) y MUSTN\'T (prohibido): "You must listen to the teacher. You mustn\'t shout in the library."',
          'SHOULD (deberías, para dar consejos saludables) y SHOULDN\'T (no deberías): "You have a headache: you should rest and you shouldn\'t watch TV."',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-eng-u5-1',
        title: 'Fórmula de Cantidad y Verbos Modales',
        formulaExpression: 'HOW MANY + Plural Contable  |  HOW MUCH + Incontable  |  Must / Should + Verbo sin "to"',
        explanation: 'Detrás de can, could, must y should el verbo va directo sin "to" y sin "-s".',
        exampleCalculation: 'You SHOULD eat fruit every day. How MUCH water do you drink?',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: El trampa de "Bread" (Pan) y "Money" (Dinero)',
        problemOrQuestion: 'Elige la opción correcta: "How much / How many bread is there on the table?"',
        stepByStepSolution: [
          '1º En inglés, "bread" (pan) es incontable (lo que se cuenta son las barras: loaves of bread).',
          '2º Por tanto, va con HOW MUCH y con el verbo en singular IS.',
        ],
        finalResult: 'How MUCH bread IS there on the table?',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-e5-1',
        question: '¿Cómo se pronuncia correctamente "Shouldn\'t" y qué significa?',
        options: ['Suena /SHÚ-dent/ (la L es muda) y significa "No deberías"', 'Suena /SHÓUL-dent/ y significa "Está prohibido"', 'Suena /SÚL-dent/ y significa "No puedes"'],
        correctAnswer: 'Suena /SHÚ-dent/ (la L es muda) y significa "No deberías"',
        explanation: 'Should y Shouldn\'t se usan para dar consejos saludables y su "L" no se pronuncia.',
      },
    ],
    examTips: [
      'En MUSTN\'T (/MÁ-sent/), la primera "T" tampoco se pronuncia al hablar.',
    ],
  },
  {
    id: 'notes-eng-u6',
    subject: 'ingles',
    subjectName: 'Inglés',
    trimester: '3º Trimestre',
    unitNumber: 'Unit 6',
    title: 'Past Simple I: Was / Were (El Pasado del Verbo To Be) y There was / There were',
    quickSummary:
      'Para hablar de dónde estábamos o cómo éramos en el pasado (yesterday, last weekend) usamos WAS (singular) y WERE (plural). Nunca se mezclan Was/Were con el auxiliar Did.',
    detailedNotes: [
      {
        heading: '1. Cuadro Completo de WAS y WERE',
        points: [
          'Con I, He, She, It → Afirmativa: WAS · Negativa: WASN\'T · Pregunta: WAS I/he/she/it...?',
          'Con You, We, They → Afirmativa: WERE · Negativa: WEREN\'T · Pregunta: WERE you/we/they...?',
          'Ejemplo: "Yesterday I WAS at home, my parents WERE at work, and my dog WAS in the garden."',
        ],
      },
      {
        heading: '2. Había en el Pasado: THERE WAS y THERE WERE',
        points: [
          'THERE WAS (Había · 1 sola cosa): "In 1900, there was a small school in our village."',
          'THERE WERE (Había · 2 o más cosas): "There weren\'t any computers, but there were many horses."',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-eng-u6-1',
        title: 'Fórmula del Pasado de To Be (Was / Were)',
        formulaExpression: 'I / He / She / It  →  WAS / WASN\'T     |     You / We / They  →  WERE / WEREN\'T',
        explanation: 'Para preguntar, simplemente pasa WAS o WERE delante del sujeto.',
        exampleCalculation: 'WERE you at the beach last Sunday? Yes, I WAS. / No, I WASN\'T.',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Responder a "Were you...?"',
        problemOrQuestion: 'Completa la pregunta y la respuesta: "______ you tired yesterday? Yes, I ______."',
        stepByStepSolution: [
          '1º En la pregunta el sujeto es "you", que siempre va con WERE: "Were you tired yesterday?".',
          '2º En la respuesta hablas de ti mismo ("I"), y "I" va con WAS: "Yes, I was."',
        ],
        finalResult: 'WERE you tired yesterday? Yes, I WAS.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-e6-1',
        question: '¿Cómo se dice "Ayer había un concierto en la plaza" en inglés?',
        options: ['Yesterday there was a concert in the square', 'Yesterday there were a concert in the square', 'Yesterday there is a concert in the square'],
        correctAnswer: 'Yesterday there was a concert in the square',
        explanation: '"A concert" es singular (1 concierto) y "yesterday" es pasado, por lo que usamos THERE WAS.',
      },
    ],
    examTips: [
      'Recuerda: Si te preguntan con "WERE you...?", responde siempre con "Yes, I WAS" o "No, I WASN\'T".',
    ],
  },
  {
    id: 'notes-eng-u7',
    subject: 'ingles',
    subjectName: 'Inglés',
    trimester: '3º Trimestre',
    unitNumber: 'Unit 7',
    title: 'Past Simple II: Regular Verbs (-ed), Top Irregular Verbs & Auxiliar DID',
    quickSummary:
      'Aprendemos a narrar acciones terminadas en el pasado usando verbos regulares (-ed) y los verbos irregulares más importantes, recordando que en negativa (DIDN\'T) y en preguntas (DID) el verbo vuelve a su forma normal de presente.',
    detailedNotes: [
      {
        heading: '1. Verbos Regulares (+ -ED) y Reglas de Ortografía',
        points: [
          'Regla general: Añadimos -ED al verbo (walk → walked, play → played, visit → visited).',
          'Si el verbo ya termina en -e, solo añadimos -D (live → lived, dance → danced).',
          'Si termina en consonante + Y, la Y cambia a -IED (study → studied, cry → cried). ¡Pero "play" tiene vocal delante de la Y, así que es "played"!',
          'Si es corto y acaba en Consonante-Vocal-Consonante, dobla la última consonante (stop → stopped).',
        ],
      },
      {
        heading: '2. Los 15 Verbos Irregulares Imprescindibles de 5º de Primaria',
        points: [
          'Go → WENT (ir) · See → SAW (ver) · Have → HAD (tener/tomar) · Eat → ATE (comer) · Drink → DRANK (beber).',
          'Make → MADE (hacer/fabricar) · Do → DID (hacer) · Buy → BOUGHT (comprar) · Write → WROTE (escribir) · Read → READ (se escribe igual pero en pasado suena /red/).',
          'Take → TOOK (coger/tomar fotos) · Give → GAVE (dar) · Come → CAME (venir) · Find → FOUND (encontrar) · Swim → SWAM (nadar).',
        ],
      },
      {
        heading: '3. Negativas con DIDN\'T y Preguntas con DID',
        points: [
          'En afirmativa (+): "She WENT to the cinema" / "They PLAYED tennis".',
          'En negativa (-): Ponemos DIDN\'T y el verbo vuelve al presente normal: "She DIDN\'T GO to the cinema" / "They DIDN\'T PLAY tennis".',
          'En pregunta (?): Ponemos DID al principio y el verbo en presente normal: "DID she GO to the cinema? Yes, she did."',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-eng-u7-1',
        title: 'Regla de Oro del Auxiliar DID / DIDN\'T',
        formulaExpression: '(+) Sujeto + Verbo en Pasado (-ed / Irregular)   |   (-) Sujeto + DIDN\'T + Verbo Base   |   (?) DID + Sujeto + Verbo Base?',
        explanation: 'DID y DIDN\'T ya llevan la marca del pasado, así que el verbo principal se escribe sin -ed y sin forma irregular.',
        exampleCalculation: '(+) I SAW a dolphin.  →  (-) I DIDN\'T SEE a dolphin.  →  (?) DID you SEE a dolphin?',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Pasar una frase en pasado a Negativa e Interrogativa',
        problemOrQuestion: 'Pasa a negativa (-) y pregunta (?): "Paula bought a new backpack yesterday." (buy → bought)',
        stepByStepSolution: [
          '1º Sabemos que "bought" es el pasado irregular del verbo "buy" (comprar).',
          '2º Para la negativa ponemos DIDN\'T + verbo base "buy": "Paula didn\'t buy a new backpack yesterday."',
          '3º Para la pregunta ponemos DID delante + verbo base "buy": "Did Paula buy a new backpack yesterday?"',
        ],
        finalResult: '(-) Paula didn\'t buy... · (?) Did Paula buy...?',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-e7-1',
        question: '¿Cuál de estas tres frases en pasado está BIEN escrita?',
        options: ['We didn\'t go to the park yesterday', 'We didn\'t went to the park yesterday', 'Did you went to the park yesterday?'],
        correctAnswer: 'We didn\'t go to the park yesterday',
        explanation: 'Cuando aparece DID o DIDN\'T, el verbo vuelve a su forma base (go), nunca "went".',
      },
    ],
    examTips: [
      'Aprende los verbos irregulares como parejas musicales: Go-Went, See-Saw, Buy-Bought, Eat-Ate, Have-Had.',
    ],
  },
  {
    id: 'notes-eng-u8',
    subject: 'ingles',
    subjectName: 'Inglés',
    trimester: '3º Trimestre',
    unitNumber: 'Unit 8',
    title: 'Future Plans with "Be going to", Weather & Question Words (Wh-)',
    quickSummary:
      'Aprendemos a hablar de nuestros planes para el verano o el fin de semana usando "am / is / are + going to + verbo" y repasamos todas las partículas interrogativas (Who, What, Where, When, Why, How).',
    detailedNotes: [
      {
        heading: '1. Planes de Futuro: BE GOING TO (Voy a...)',
        points: [
          'Se forma con el verbo To Be en presente (I am / He,She,It is / You,We,They are) + GOING TO + el verbo de la acción.',
          'Afirmativa (+): "I am going to travel to London this summer." (Voy a viajar a Londres este verano).',
          'Negativa (-): "He isn\'t going to watch TV tonight."',
          'Pregunta (?): "What are you going to do tomorrow?" (¿Qué vas a hacer mañana?).',
        ],
      },
      {
        heading: '2. Las 7 Palabras Preguntonas (Wh- Question Words)',
        points: [
          'WHAT (¿Qué / Cuál?) · WHERE (¿Dónde?) · WHEN (¿Cuándo?) · WHO (¿Quién?) · WHY (¿Por qué? → se responde siempre con BECAUSE!) · HOW (¿Cómo?) · HOW OLD / HOW MUCH / HOW MANY.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-eng-u8-1',
        title: 'Fórmula de "Be going to" y Pareja WHY → BECAUSE',
        formulaExpression: 'Sujeto + am / is / are + going to + Verbo   |   Pregunta con WHY?  ⟶  Respuesta con BECAUSE',
        explanation: 'WHY significa "¿Por qué?" (solo en preguntas) y BECAUSE significa "Porque..." (solo en respuestas).',
        exampleCalculation: 'WHY are you wearing a coat? BECAUSE it is cold today.',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Ordenar una pregunta con Wh- y Going to',
        problemOrQuestion: 'Ordena: "going / Where / are / to / you / this summer? / go"',
        stepByStepSolution: [
          '1º Empezamos por la partícula interrogativa Wh-: WHERE.',
          '2º Seguimos con el verbo To Be antes del sujeto: ARE YOU.',
          '3º Añadimos GOING TO + el verbo principal GO + el tiempo final.',
        ],
        finalResult: 'Where are you going to go this summer?',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-e8-1',
        question: 'Si una pregunta empieza por "WHY...?", ¿con qué palabra debe empezar tu respuesta?',
        options: ['Because...', 'When...', 'Where...'],
        correctAnswer: 'Because...',
        explanation: 'Why pregunta la causa (¿Por qué?) y Because da la explicación (Porque...).',
      },
    ],
    examTips: [
      'En "Be going to", nunca te comas el verbo To Be (am/is/are): di siempre "I AM going to play", nunca "I going to play".',
    ],
  },

  // ============================================================================
  // CONOCIMIENTO DEL MEDIO · 8 UNIDADES COMPLETAS DE 5º DE PRIMARIA
  // ============================================================================
  {
    id: 'notes-sci-u1',
    subject: 'conocimiento',
    subjectName: 'Conocimiento del Medio',
    trimester: '1º Trimestre',
    unitNumber: 'Unidad 1',
    title: 'Los Seres Vivos, La Célula, Niveles de Organización y Los 5 Reinos',
    quickSummary:
      'Todos los seres vivos realizan las 3 funciones vitales (Nutrición, Relación y Reproducción) y están formados por células. Aprendemos las partes de la célula animal y vegetal, los 5 niveles de organización y las diferencias entre los 5 Reinos.',
    detailedNotes: [
      {
        heading: '1. Las 3 Funciones Vitales de Todo Ser Vivo',
        points: [
          '1. Función de Nutrición: Conseguir nutrientes y oxígeno para obtener energía y crecer. Puede ser AUTÓTROFA (fabrican su propio alimento con luz solar, como las plantas y algas) o HETERÓTROFA (se alimentan de otros seres vivos, como los animales y hongos).',
          '2. Función de Relación: Captar lo que ocurre alrededor mediante los sentidos o estímulos y responder adecuadamente.',
          '3. Función de Reproducción: Originar nuevos seres vivos similares a ellos (sexual o asexual).',
        ],
      },
      {
        heading: '2. La Célula: Partes y Diferencias entre Animal y Vegetal',
        points: [
          'Las 3 partes comunes a toda célula eucariota: 1) MEMBRANA (envoltura que rodea y protege), 2) CITOPLASMA (líquido interior donde flotan los orgánulos) y 3) NÚCLEO (centro de control con el ADN).',
          '¿Qué tiene de especial la Célula Vegetal que NO tiene la Animal?: Tiene una PARED CELULAR rígida por fuera (que mantiene derecha a la planta), CLOROPLASTOS verdes (donde está la clorofila para hacer la fotosíntesis) y una gran VACUOLA de agua.',
        ],
      },
      {
        heading: '3. Los 5 Niveles de Organización y Los 5 Reinos',
        points: [
          'Los 5 escalones (Regla C-T-O-A-O): 1º Célula (ej. célula muscular) → 2º Tejido (ej. tejido muscular) → 3º Órgano (ej. corazón) → 4º Aparato o Sistema (ej. aparato circulatorio) → 5º Organismo (el ser humano completo).',
          'Los 5 Reinos: 1) Animales (pluricelulares, heterótrofos, se desplazan), 2) Plantas (pluricelulares, autótrofas, fijas), 3) Hongos (setas, mohos y levaduras; heterótrofos descomponedores), 4) Protoctistas (protozoos unicelulares y algas acuáticas) y 5) Moneras (bacterias unicelulares sin núcleo definido).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-sci-u1-1',
        title: 'Escalera de Organización de los Seres Pluricelulares (C-T-O-A-O)',
        formulaExpression: '1. Célula  ⟶  2. Tejido  ⟶  3. Órgano  ⟶  4. Aparato o Sistema  ⟶  5. Organismo',
        explanation: 'Un tejido es la unión de células del mismo tipo; un órgano es la unión de varios tejidos.',
        exampleCalculation: 'Neurona (Célula) → Tejido nervioso → Cerebro (Órgano) → Sistema nervioso → Ser humano.',
      },
    ],
    workedExamples: [
      {
        title: 'Pregunta Clásica de Examen: ¿Por qué una seta (hongo) NO es una planta?',
        problemOrQuestion: 'Aunque las setas viven fijas en el suelo del bosque como las plantas, ¿por qué pertenecen al Reino de los Hongos y no al de las Plantas?',
        stepByStepSolution: [
          '1º Las plantas tienen nutrición AUTÓTROFA: poseen clorofila verde y fabrican su propio alimento mediante la fotosíntesis.',
          '2º Los hongos tienen nutrición HETERÓTROFA: NO hacen la fotosíntesis, sino que se alimentan absorbiendo restos de otros seres vivos.',
        ],
        finalResult: 'Porque los hongos no hacen la fotosíntesis (son heterótrofos).',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-s1-1',
        question: '¿Qué orgánulo exclusivo de las células vegetales realiza la fotosíntesis y les da el color verde?',
        options: ['Los cloroplastos (con clorofila)', 'La membrana celular', 'El núcleo'],
        correctAnswer: 'Los cloroplastos (con clorofila)',
        explanation: 'Los cloroplastos contienen la clorofila verde que capta la energía de la luz del Sol.',
      },
    ],
    examTips: [
      'En el examen suelen preguntar a qué reino pertenecen las ALGAS (Reino Protoctistas) y las BACTERIAS (Reino Moneras).',
    ],
  },
  {
    id: 'notes-sci-u2',
    subject: 'conocimiento',
    subjectName: 'Conocimiento del Medio',
    trimester: '1º Trimestre',
    unitNumber: 'Unidad 2',
    title: 'El Reino de las Plantas: Fotosíntesis, Respiración, Xilema, Floema y La Flor',
    quickSummary:
      'Estudiamos a fondo cómo se alimentan las plantas (diferenciando Savia Bruta por el Xilema y Savia Elaborada por el Floema), por qué de día liberan Oxígeno y cómo se reproducen mediante las partes de la flor.',
    detailedNotes: [
      {
        heading: '1. Los 4 Pasos de la Nutrición de las Plantas (Fotosíntesis)',
        points: [
          'Paso 1 (Absorción en la raíz): La raíz absorbe agua y sales minerales del suelo por los pelos absorbentes. Esa mezcla sin cocinar se llama SAVIA BRUTA.',
          'Paso 2 (Subida por el Xilema): La savia bruta sube por el tallo a través de los vasos leñosos o XILEMA hasta llegar a las hojas.',
          'Paso 3 (Fotosíntesis en la hoja): En las hojas entra dióxido de carbono (CO₂) por unos poros microscópicos llamados ESTOMAS. En los cloroplastos, con la luz del Sol, la savia bruta se transforma en SAVIA ELABORADA (azúcares) y la planta expulsa OXÍGENO (O₂) al aire.',
          'Paso 4 (Reparto por el Floema): La savia elaborada viaja desde las hojas a todas las partes de la planta por los vasos liberianos o FLOEMA.',
        ],
      },
      {
        heading: '2. Fotosíntesis vs Respiración de las Plantas (Día y Noche)',
        points: [
          'FOTOSÍNTESIS (Solo de DÍA, porque necesita luz solar): Toma CO₂ y expulsa mucho OXÍGENO (O₂).',
          'RESPIRACIÓN (De DÍA y de NOCHE, las 24 horas): Como cualquier ser vivo, la planta respira tomando un poquito de O₂ y expulsando CO₂. En total, las plantas producen muchísimo más oxígeno del que consumen.',
        ],
      },
      {
        heading: '3. Partes de la Flor y Reproducción Sexual',
        points: [
          'ESTAMBRES (Parte masculina de la flor): Producen los granos de POLEN en las anteras.',
          'PISTILO o Gineceo (Parte femenina con forma de botellita): Contiene el OVARIO con los óvulos. Cuando el polen fecunda al óvulo, el ovario se transforma en el FRUTO (con las semillas dentro).',
          'COROLA (conjunto de pétalos de colores para atraer insectos) y CÁLIZ (hojitas verdes llamadas sépalos que sujetan la flor).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-sci-u2-1',
        title: 'Ecuación Completa de la Fotosíntesis',
        formulaExpression: 'Savia Bruta (Agua + Sales) + CO₂ + Energía Solar  ⟶  Savia Elaborada + Oxígeno (O₂ ↑)',
        explanation: 'Truco: B de Bajo = Savia Bruta sube desde abajo (Xilema) · F de Fabricada = Savia Elaborada va por el Floema.',
        exampleCalculation: 'Estomas de la hoja = Puertas por donde entran y salen los gases (CO₂ y O₂).',
      },
    ],
    workedExamples: [
      {
        title: 'Pregunta de Examen: Diferenciar Estambres, Pistilo, Corola y Cáliz',
        problemOrQuestion: 'Explica qué parte de la flor produce el polen y qué parte se convierte en el fruto (por ejemplo, una naranja).',
        stepByStepSolution: [
          '1º El polen se produce en los ESTAMBRES (órgano reproductor masculino).',
          '2º Cuando el polen entra en el PISTILO (órgano femenino), su ovario engorda y se transforma en el FRUTO con las semillas dentro.',
        ],
        finalResult: 'Estambres = Polen · Pistilo (ovario) = Fruto.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-s2-1',
        question: '¿Por qué conductos viaja la Savia Elaborada (el alimento ya cocinado) desde las hojas al resto de la planta?',
        options: ['Por los vasos liberianos o Floema', 'Por los vasos leñosos o Xilema', 'Por los pelos absorbentes'],
        correctAnswer: 'Por los vasos liberianos o Floema',
        explanation: 'Recuerda la F de Floema = Savia ya Fabricada (Elaborada). El Xilema sube la savia bruta.',
      },
    ],
    examTips: [
      'No caigas en la trampa: las plantas respiran TANTO DE DÍA COMO DE NOCHE, pero la fotosíntesis SOLO la hacen de DÍA.',
    ],
  },
  {
    id: 'notes-sci-u3',
    subject: 'conocimiento',
    subjectName: 'Conocimiento del Medio',
    trimester: '1º Trimestre',
    unitNumber: 'Unidad 3',
    title: 'Los Ecosistemas, Cadenas Alimentarias y Biodiversidad en la Comunitat Valenciana',
    quickSummary:
      'Un ecosistema es la suma de un lugar físico sin vida (Biotopo), los seres vivos que lo habitan (Biocenosis) y sus relaciones. Estudiamos la cadena trófica (Productores → Consumidores → Descomponedores) y la protección de espacios como la Albufera.',
    detailedNotes: [
      {
        heading: '1. Biotopo, Biocenosis, Población y Comunidad',
        points: [
          'BIOTOPO (Medio físico NO vivo): Rocas, suelo, agua, aire, luz solar, temperatura y salinidad.',
          'BIOCENOSIS o Comunidad (Parte VIVA): Conjunto de todos los seres vivos del ecosistema.',
          'ESPECIE (seres que pueden reproducirse entre sí, ej. el flamenco) → POBLACIÓN (todos los individuos de una misma especie que viven juntos en ese lugar) → COMUNIDAD o Biocenosis (suma de todas las poblaciones distintas).',
        ],
      },
      {
        heading: '2. Las Relaciones Alimentarias (Cadena Trófica P-C-D)',
        points: [
          '1º PRODUCTORES (Plantas y algas): Son la base de la pirámide; fabrican alimento desde cero con el Sol.',
          '2º CONSUMIDORES PRIMARIOS (Animales herbívoros): Se comen a las plantas (ej. conejo, saltamontes, pato cuchara).',
          '3º CONSUMIDORES SECUNDARIOS Y TERCIARIOS (Carnívoros y superdepredadores): Se alimentan de otros animales (ej. zorro, garza real, águila).',
          '4º DESCOMPONEDORES (Hongos y bacterias): Transforman los restos muertos en sales minerales que abonan el suelo para las plantas, cerrando el ciclo.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-sci-u3-1',
        title: 'Fórmula del Ecosistema y Flechas de la Cadena Trófica',
        formulaExpression: 'Productor (Planta)  ⟶  Consumidor 1º (Herbívoro)  ⟶  Consumidor 2º (Carnívoro)  ⟶  Descomponedor',
        explanation: '¡Ojo en los esquemas del examen!: La flecha (⟶) significa "sirve de alimento a" (va desde el comido hacia el que se lo come).',
        exampleCalculation: 'Hierba ⟶ Conejo ⟶ Águila imperial ⟶ Hongos del suelo',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: ¿Qué pasaría si desaparecen los descomponedores?',
        problemOrQuestion: 'En un bosque, ¿qué ocurriría si desaparecieran todos los hongos y bacterias descomponedoras?',
        stepByStepSolution: [
          '1º Los restos de hojas secas y animales muertos se acumularían sin reciclarse.',
          '2º El suelo se quedaría sin sales minerales y las plantas (productores) no podrían nutrirse.',
        ],
        finalResult: 'Se rompería el ciclo de la materia y las plantas se quedarían sin sales minerales.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-s3-1',
        question: 'En el ecosistema del Parque Natural de la Albufera, ¿qué son el agua de la laguna, la arena de la Devesa y la temperatura?',
        options: ['El Biotopo (medio físico)', 'La Biocenosis (comunidad viva)', 'Los Productores'],
        correctAnswer: 'El Biotopo (medio físico)',
        explanation: 'El agua, la arena, las rocas y la temperatura son factores sin vida: forman el Biotopo.',
      },
    ],
    examTips: [
      'Recuerda: Bio-TOPO = la roca y tierra donde excava el topo (sin vida). Bio-CENO-sis = los seres vivos que cenan juntos.',
    ],
  },
  {
    id: 'notes-sci-u4',
    subject: 'conocimiento',
    subjectName: 'Conocimiento del Medio',
    trimester: '2º Trimestre',
    unitNumber: 'Unidad 4',
    title: 'El Cuerpo Humano I · La Función de Nutrición (Los 4 Aparatos D-R-C-E)',
    quickSummary:
      'Para que nuestras células tengan energía necesitamos nutrientes (de los alimentos) y oxígeno (del aire). Esto lo realizan en equipo 4 aparatos: Digestivo, Respiratorio, Circulatorio y Excretor.',
    detailedNotes: [
      {
        heading: '1. Aparato Digestivo y Aparato Respiratorio',
        points: [
          'APARATO DIGESTIVO: Recorrido del alimento → Boca (dientes y saliva forman el bolo alimenticio) → Faringe → Esófago → Estómago (los jugos gástricos forman el quimo) → Intestino Delgado (donde los NUTRIENTES pasan a la sangre a través de las vellosidades intestinales) → Intestino Grueso (absorbe agua y forma las heces).',
          'APARATO RESPIRATORIO: Recorrido del aire → Fosas nasales → Faringe → Laringe (cuerdas vocales) → Tráquea → Bronquios → Bronquiolos → ALVÉOLOS PULMONARES (saquitos rodeados de capilares donde el Oxígeno O₂ pasa a la sangre y el CO₂ sale para ser expulsado).',
        ],
      },
      {
        heading: '2. Aparato Circulatorio y Aparato Excretor',
        points: [
          'APARATO CIRCULATORIO: Formado por la sangre (plasma, glóbulos rojos que llevan O₂, glóbulos blancos que nos defienden y plaquetas que taponan heridas), el corazón (bomba muscular con 2 aurículas arriba y 2 ventrículos abajo) y los vasos sanguíneos: ARTERIAS (salen del corazón), VENAS (vuelven al corazón) y CAPILARES (tubitos muy finos).',
          'APARATO EXCRETOR: Los dos RIÑONES funcionan como coladores que filtran la sangre, le quitan los desechos y fabrican la ORINA, que baja por los uréteres, se guarda en la vejiga y sale por la uretra.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-sci-u4-1',
        title: 'Ecuación de la Respiración Celular y los 4 Aparatos (D-R-C-E)',
        formulaExpression: 'Nutrientes (Digestivo) + Oxígeno O₂ (Respiratorio)  ──[Sangre: Circulatorio]──►  Energía + Desechos (Excretor)',
        explanation: 'El paso de nutrientes a la sangre ocurre en el Intestino Delgado; el paso de O₂ a la sangre ocurre en los Alvéolos Pulmonares.',
        exampleCalculation: 'Glóbulos Rojos = Transporte de O₂  |  Glóbulos Blancos = Defensa  |  Plaquetas = Cicatrizar heridas',
      },
    ],
    workedExamples: [
      {
        title: 'Pregunta de Examen: ¿En qué parte exacta pasan los nutrientes y el oxígeno a la sangre?',
        problemOrQuestion: 'Indica en qué órgano pasan los nutrientes a la sangre y en qué parte de los pulmones pasa el oxígeno a la sangre.',
        stepByStepSolution: [
          '1º Los nutrientes pasan a la sangre en las vellosidades del INTESTINO DELGADO (no en el estómago).',
          '2º El oxígeno (O₂) pasa a la sangre en los ALVÉOLOS PULMONARES.',
        ],
        finalResult: 'Nutrientes → Intestino delgado · Oxígeno → Alvéolos pulmonares.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-s4-1',
        question: '¿Qué células de la sangre actúan como un ejército defendiéndonos de virus y bacterias?',
        options: ['Los glóbulos blancos', 'Los glóbulos rojos', 'Las plaquetas'],
        correctAnswer: 'Los glóbulos blancos',
        explanation: 'Glóbulos blancos = defensa contra infecciones · Glóbulos rojos = llevan oxígeno · Plaquetas = cierran heridas.',
      },
    ],
    examTips: [
      'Recuerda: ARTERIAS salen del corazón · VENAS vuelven ("V" de Volver) al corazón.',
    ],
  },
  {
    id: 'notes-sci-u5',
    subject: 'conocimiento',
    subjectName: 'Conocimiento del Medio',
    trimester: '2º Trimestre',
    unitNumber: 'Unidad 5',
    title: 'El Cuerpo Humano II · La Función de Relación (Sentidos, Sistema Nervioso y Locomotor)',
    quickSummary:
      'La función de relación se realiza en 3 pasos: 1º Los órganos de los sentidos captan información, 2º El sistema nervioso (cerebro y médula) la analiza y envía órdenes, y 3º El aparato locomotor (huesos y músculos) realiza el movimiento.',
    detailedNotes: [
      {
        heading: '1. Los 5 Órganos de los Sentidos y sus Receptores',
        points: [
          'Vista (Ojo): La luz entra por la pupila, atraviesa el cristalino y forma la imagen en la RETINA (al fondo del ojo), que la envía por el nervio óptico.',
          'Oído: El sonido hace vibrar el TÍMPANO → cadena de huesecillos → CARACOL (cóclea) → nervio auditivo.',
          'Olfato (Pituitaria amarilla en las fosas nasales), Gusto (Papilas gustativas en la lengua) y Tacto (Receptores en la dermis de la piel).',
        ],
      },
      {
        heading: '2. El Sistema Nervioso y el Aparato Locomotor',
        points: [
          'Las células del sistema nervioso se llaman NEURONAS. El Sistema Nervioso Central tiene el ENCÉFALO (Cerebro para movimientos voluntarios y pensamiento, Cerebelo para el equilibrio y Bulbo raquídeo para latidos/respiración automática) y la MÉDULA ESPINAL (movimientos reflejos rápidos).',
          'El Aparato Locomotor une el ESQUELETO (206 huesos unidos por articulaciones y ligamentos) y la MUSCULATURA (músculos unidos a los huesos mediante TENDONES).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-sci-u5-1',
        title: 'Ruta Completa de la Función de Relación',
        formulaExpression: 'Órgano Sentido (Retina/Caracol) ──[Nervio Sensitivo]──► Cerebro / Médula ──[Nervio Motor]──► Músculos',
        explanation: 'Los TENDONES unen músculo con hueso; los LIGAMENTOS unen hueso con hueso en las articulaciones.',
        exampleCalculation: 'Movimiento voluntario = lo ordena el Cerebro  |  Movimiento reflejo (retirar la mano si quema) = Médula espinal.',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Diferenciar Tendones y Ligamentos',
        problemOrQuestion: '¿Qué diferencia hay entre la función de un tendón y la de un ligamento en el aparato locomotor?',
        stepByStepSolution: [
          '1º Los LIGAMENTOS unen un HUESO con otro HUESO en las articulaciones (como unas gomas resistentes).',
          '2º Los TENDONES unen un MÚSCULO con un HUESO para tirar de él al contraerse.',
        ],
        finalResult: 'Ligamento = Hueso con Hueso · Tendón = Músculo con Hueso.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-s5-1',
        question: '¿En qué parte interna del ojo se forma la imagen antes de viajar por el nervio óptico al cerebro?',
        options: ['En la retina', 'En la ceja', 'En el caracol'],
        correctAnswer: 'En la retina',
        explanation: 'La retina es la pantalla del fondo del ojo que capta la luz. El caracol pertenece al oído.',
      },
    ],
    examTips: [
      'Aprende las 3 partes del encéfalo: CEREBRO (pensar y órdenes voluntarias), CEREBELO (coordinación y equilibrio) y BULBO RAQUÍDEO (latidos del corazón).',
    ],
  },
  {
    id: 'notes-sci-u6',
    subject: 'conocimiento',
    subjectName: 'Conocimiento del Medio',
    trimester: '2º Trimestre',
    unitNumber: 'Unidad 6',
    title: 'La Materia (Masa, Volumen y Densidad), Cambios de Estado y Energías Renovables',
    quickSummary:
      'Estudiamos las propiedades de la materia (Masa en kg, Volumen en litros y Densidad = Masa ÷ Volumen), por qué los cuerpos flotan o se hunden, los cambios de estado (fusión, vaporización, condensación, solidificación) y las fuentes de energía.',
    detailedNotes: [
      {
        heading: '1. Masa, Volumen, Densidad y Flotabilidad',
        points: [
          'MASA: Cantidad de materia que tiene un cuerpo. Se mide con la balanza en kilogramos (kg) o gramos (g).',
          'VOLUMEN: Espacio que ocupa un cuerpo. Se mide con una probeta graduada en litros (l), mililitros (ml) o centímetros cúbicos (cm³).',
          'DENSIDAD (d = m ÷ V): Relación entre la masa y el volumen. La densidad del agua pura es 1 g/cm³. Si un objeto tiene densidad MENOR que 1 (como la madera o el corcho, 0,5 g/cm³), FLOTA en el agua. Si su densidad es MAYOR que 1 (como el hierro, 7,8 g/cm³), SE HUNDE.',
        ],
      },
      {
        heading: '2. Los 4 Cambios de Estado de la Materia y las Energías',
        points: [
          'Al CALENTAR: de Sólido a Líquido se llama FUSIÓN (hielo que se derrite); de Líquido a Gas se llama VAPORIZACIÓN o Ebullición.',
          'Al ENFRIAR: de Gas a Líquido se llama CONDENSACIÓN (el vaho en el espejo o las nubes); de Líquido a Sólido se llama SOLIDIFICACIÓN.',
          'Energías RENOVABLES (no se agotan y son limpias): Solar (placas fotovoltaicas), Eólica (viento), Hidráulica (agua de embalses), Biomasa y Geotérmica.',
          'Energías NO RENOVABLES (se agotan y contaminan): Carbón, Petróleo, Gas natural y Uranio (nuclear).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-sci-u6-1',
        title: 'Fórmula de la Densidad y Regla de Flotación',
        formulaExpression: 'Densidad (d) = Masa (g) ÷ Volumen (cm³)   |   Si d < 1 g/cm³ ⟶ FLOTA en agua',
        explanation: 'Para hallar la densidad, divide siempre la masa entre el volumen.',
        exampleCalculation: 'Objeto de masa 300 g y volumen 100 cm³: d = 300 ÷ 100 = 3 g/cm³ (es > 1, se hunde).',
      },
    ],
    workedExamples: [
      {
        title: 'Problema de Examen: Calcular la densidad y decir si flota',
        problemOrQuestion: 'Una pelota de juguete tiene una masa de 80 gramos y ocupa un volumen de 100 cm³. Calcula su densidad y explica si flotará en la piscina.',
        stepByStepSolution: [
          '1º Aplicamos la fórmula: Densidad = Masa ÷ Volumen = 80 g ÷ 100 cm³ = 0,8 g/cm³.',
          '2º Comparamos con la densidad del agua (1 g/cm³): como 0,8 es MENOR que 1, la pelota FLOTA.',
        ],
        finalResult: 'Densidad = 0,8 g/cm³ · Sí flota porque es menor que 1 g/cm³.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-s6-1',
        question: '¿Cómo se llama el paso de estado GASEOSO (vapor de agua) a estado LÍQUIDO al enfriarse en las nubes o en el cristal de la ventana?',
        options: ['Condensación', 'Fusión', 'Solidificación'],
        correctAnswer: 'Condensación',
        explanation: 'Gas → Líquido = Condensación · Sólido → Líquido = Fusión · Líquido → Sólido = Solidificación.',
      },
    ],
    examTips: [
      'Recuerda: 1 mililitro (1 ml) es exactamente igual a 1 centímetro cúbico (1 cm³).',
    ],
  },
  {
    id: 'notes-sci-u7',
    subject: 'conocimiento',
    subjectName: 'Conocimiento del Medio',
    trimester: '3º Trimestre',
    unitNumber: 'Unidad 7',
    title: 'Geografía y Sociedad: Relieve, Ríos, Población y los 3 Sectores Económicos',
    quickSummary:
      'Estudiamos el mapa del relieve y ríos de España y de la Comunitat Valenciana, cómo se estudia la población (natalidad, mortalidad, migraciones y densidad) y en qué consisten los sectores Primario, Secundario y Terciario.',
    detailedNotes: [
      {
        heading: '1. Relieve y Las 3 Vertientes Hidrográficas de España',
        points: [
          'Relieve Peninsular: En el centro está la Meseta Central (dividida por el Sistema Central).La rodean los Montes de León, Cordillera Cantábrica, Sistema Ibérico (que llega a Castellón y Valencia: Sierra Calderona y Espadán) y Sierra Morena. Más lejos están los Pirineos y los Sistemas Béticos (que llegan a Alicante: Aitana, Mariola).',
          'Vertiente Cantábrica: Ríos muy cortos y muy caudalosos todo el año (Bidasoa, Nervión, Nalón).',
          'Vertiente Atlántica: Ríos largos (Miño, Duero, Tajo —el más largo de la Península—, Guadiana y Guadalquivir).',
          'Vertiente Mediterránea: Ríos cortos y de caudal irregular con estiaje en verano (Ter, Llobregat, Mijares, Palancia, Turia, Júcar, Segura), ¡excepto el EBRO, que es el río más largo y caudaloso de España!',
        ],
      },
      {
        heading: '2. Demografía y Los 3 Sectores Económicos',
        points: [
          'Crecimiento Natural = Nacimientos menos Defunciones. Saldo Migratorio = Inmigrantes (llegan) menos Emigrantes (se van).',
          'Densidad de Población = Habitantes totales ÷ Superficie en km².',
          'Sector Primario (agricultura de regadío en la huerta como naranjos y hortalizas, secano, ganadería y pesca), Sector Secundario (industria, fábricas, construcción) y Sector Terciario (servicios: educación, sanidad, comercio, transporte y turismo).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-sci-u7-1',
        title: 'Fórmulas Demográficas para Problemas de Geografía',
        formulaExpression: 'Densidad = Habitantes ÷ km²   |   Crecimiento Real = (Nacimientos - Muertes) + (Inmigrantes - Emigrantes)',
        explanation: 'La densidad se expresa siempre en "hab./km²" (habitantes por kilómetro cuadrado).',
        exampleCalculation: 'Municipio de 9.000 habitantes y 15 km²: Densidad = 9.000 ÷ 15 = 600 hab./km²',
      },
    ],
    workedExamples: [
      {
        title: 'Problema Resuelto de Demografía',
        problemOrQuestion: 'En un pueblo de 5.000 habitantes, este año han nacido 60 bebés, han fallecido 40 personas, han llegado 100 inmigrantes y se han marchado 30 emigrantes. ¿Cuál es el crecimiento real de la población?',
        stepByStepSolution: [
          '1º Crecimiento Natural: 60 nacimientos - 40 fallecidos = +20 habitantes.',
          '2º Saldo Migratorio: 100 inmigrantes - 30 emigrantes = +70 habitantes.',
          '3º Crecimiento Real Total: +20 + 70 = +90 habitantes más (ahora tiene 5.090 habitantes).',
        ],
        finalResult: 'Ha crecido en +90 habitantes (población final: 5.090 hab.).',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-s7-1',
        question: '¿Cuál es el río más largo de la Península Ibérica y cuál es el más caudaloso de España?',
        options: ['El más largo es el Tajo y el más caudaloso es el Ebro', 'El más largo es el Júcar y el más caudaloso es el Miño', 'El más largo es el Turia y el más caudaloso es el Segura'],
        correctAnswer: 'El más largo es el Tajo y el más caudaloso es el Ebro',
        explanation: 'El Tajo (vertiente atlántica) es el más largo de la Península, y el Ebro (vertiente mediterránea) es el de mayor longitud y caudal en territorio español.',
      },
    ],
    examTips: [
      'Recuerda los ríos de la Comunitat Valenciana de norte a sur: Mijares y Palancia (Castellón/Valencia), Turia y Júcar (Valencia), Serpis y Segura (Alicante).',
    ],
  },
  {
    id: 'notes-sci-u8',
    subject: 'conocimiento',
    subjectName: 'Conocimiento del Medio',
    trimester: '3º Trimestre',
    unitNumber: 'Unidad 8',
    title: 'La Historia: Las Edades de la Historia, la Edad Media (Jaume I) y la Edad Moderna',
    quickSummary:
      'Repasamos la línea del tiempo de las 5 etapas de la Historia y estudiamos qué ocurrió en la Edad Media (Al-Ándalus, los Reinos Cristianos, la fundación del Reino de Valencia por Jaume I en 1238, el arte románico y gótico) y en la Edad Moderna.',
    detailedNotes: [
      {
        heading: '1. Línea del Tiempo: ¿Cuándo empieza cada Edad de la Historia?',
        points: [
          '1. PREHISTORIA (Paleolítico, Neolítico y Edad de los Metales): Desde la aparición de los primeros seres humanos hasta la invención de la ESCRITURA (hacia el 3.500 a.C.).',
          '2. EDAD ANTIGUA (Griegos, Fenicios, Íberos y Romanos): Desde la escritura hasta la caída del Imperio Romano (año 476 d.C.).',
          '3. EDAD MEDIA: Desde el año 476 hasta el año 1492 (llegada de Cristóbal Colón a América).',
          '4. EDAD MODERNA: Desde 1492 hasta el año 1789 (Revolución Francesa).',
          '5. EDAD CONTEMPORÁNEA: Desde 1789 hasta nuestros días.',
        ],
      },
      {
        heading: '2. La Edad Media en la Península y en Valencia (711 – 1492)',
        points: [
          'En el año 711 los musulmanes crean AL-ÁNDALUS (introducen las acequias de regadío en la huerta valenciana, la naranja, el arroz, el papel y los números que usamos hoy).',
          'En el norte surgen los Reinos Cristianos y la sociedad feudal (Rey → Nobles y Clero → Campesinos).En el año 1238, el rey JAUME I EL CONQUERIDOR entra en Valencia y funda el Reino de Valencia otorgando sus leyes propias (Els Furs).',
          'Arte Medieval Cristiano: ARTE ROMÁNICO (siglos XI-XII: iglesias bajas de muros gruesos, oscuras y con arcos de medio punto redondos) vs ARTE GÓTICO (siglos XIII-XV: catedrales muy altas, luminosas con vidrieras, rosetones y arcos apuntados como la Lonja de la Seda o el Miguelete de Valencia).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-sci-u8-1',
        title: 'Fechas Clave de Examen y Cómo pasar de Año a Siglo (Números Romanos)',
        formulaExpression: '476 (Edad Media)  ⟶  1238 (Jaume I en Valencia)  ⟶  1492 (Edad Moderna)  ⟶  1789 (Edad Contemporánea)',
        explanation: 'Truco para saber el SIGLO de un año: tapa las dos últimas cifras del año y súmale +1 (excepto si acaba en 00).',
        exampleCalculation: 'Año 1238 → tapamos "38", queda 12 → 12 + 1 = Siglo XIII  |  Año 1492 → 14 + 1 = Siglo XV',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: ¿A qué siglo pertenece un año histórico?',
        problemOrQuestion: '¿A qué siglo pertenecen los años 711, 1238 y 1789? Escríbelos en números romanos.',
        stepByStepSolution: [
          '1º Año 711: quitamos las dos últimas cifras (queda 7) y sumamos 1 → 7 + 1 = 8 → Siglo VIII.',
          '2º Año 1238: quitamos dos cifras (queda 12) y sumamos 1 → 12 + 1 = 13 → Siglo XIII.',
          '3º Año 1789: quitamos dos cifras (queda 17) y sumamos 1 → 17 + 1 = 18 → Siglo XVIII.',
        ],
        finalResult: '711 = Siglo VIII · 1238 = Siglo XIII · 1789 = Siglo XVIII.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-s8-1',
        question: '¿Cómo distingues una catedral de estilo GÓTICO (como la Lonja de Valencia) de una iglesia de estilo ROMÁNICO?',
        options: ['El Gótico es alto, luminoso con vidrieras y arcos en punta; el Románico es bajo, de muros gruesos y arco redondo', 'El Gótico lo hicieron los romanos', 'El Románico tiene grandes vidrieras de colores'],
        correctAnswer: 'El Gótico es alto, luminoso con vidrieras y arcos en punta; el Románico es bajo, de muros gruesos y arco redondo',
        explanation: 'Románico = arco redondo de medio punto y muros gruesos · Gótico = arco apuntado (ojival), altura y vidrieras.',
      },
    ],
    examTips: [
      '¡Usa siempre el truco de "tapar las 2 últimas cifras y sumar +1" para no fallar nunca el siglo en los exámenes de Historia!',
    ],
  },
];

export const INTERACTIVE_GLOSSARY_TERMS: GlossaryTerm[] = [
  // ==========================================
  // GLOSARIO DE MATEMÁTICAS (10 TÉRMINOS CLAVE)
  // ==========================================
  {
    id: 'glos-math-multiplicacion',
    term: 'Multiplicación (Factores y Producto)',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    subCategory: 'Operaciones y Cálculo',
    clearDefinition:
      'Operación matemática que consiste en sumar un mismo número (llamado factor) tantas veces como indica otro número. Los números que se multiplican se llaman FACTORES y el resultado se llama PRODUCTO.',
    example:
      'En lugar de sumar 8 + 8 + 8 + 8 + 8 + 8 + 8, hacemos la multiplicación 7 × 8 = 56 (7 y 8 son los factores; 56 es el producto).',
    memoryTrickOrFormula:
      'Fórmula: Factor × Factor = Producto  |  Propiedad Conmutativa: a × b = b × a (7 × 8 = 8 × 7 = 56).',
    visualIconType: 'multiplication-grid',
  },
  {
    id: 'glos-math-problema',
    term: 'Problema Matemático (Método D-O-S)',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    subCategory: 'Resolución y Geometría',
    clearDefinition:
      'Situación de la vida real que nos cuenta unos DATOS conocidos y nos plantea una PREGUNTA final que debemos descubrir eligiendo y calculando una o varias operaciones matemáticas.',
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
    term: 'Perímetro y Área de un Polígono',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    subCategory: 'Resolución y Geometría',
    clearDefinition:
      'El PERÍMETRO es la medida del contorno o borde exterior de una figura (como la valla de un jardín, en metros m). El ÁREA es la medida de la superficie interior (como el césped que cubre el suelo, en metros cuadrados m²).',
    example:
      'En una habitación rectangular de 5 m por 4 m: su Perímetro es 5 + 4 + 5 + 4 = 18 m, y su Área es 5 × 4 = 20 m².',
    memoryTrickOrFormula:
      'Perímetro = Sumar todos los lados (m)  |  Área Rectángulo = base × altura (m²)  |  Área Triángulo = (b × h) ÷ 2.',
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
  {
    id: 'glos-math-potencia',
    term: 'Potencia (Base, Exponente, Cuadrado y Cubo)',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    subCategory: 'Operaciones y Cálculo',
    clearDefinition:
      'Forma abreviada de escribir una multiplicación de varios factores iguales. La BASE es el número que se multiplica y el EXPONENTE pequeño indica cuántas veces se repite el factor.',
    example:
      '4³ (cuatro al cubo) = 4 × 4 × 4 = 64. ¡Nunca multipliques 4 × 3!',
    memoryTrickOrFormula:
      'a² = a × a (al cuadrado)  |  a³ = a × a × a (al cubo)  |  10⁴ = 10.000.',
    visualIconType: 'multiplication-grid',
  },
  {
    id: 'glos-math-multiplo-divisor',
    term: 'Múltiplo, Divisor y Número Primo',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    subCategory: 'Operaciones y Cálculo',
    clearDefinition:
      'Un MÚLTIPLO se obtiene al multiplicar un número por otro cualquiera (ej. 24 es múltiplo de 6). Un DIVISOR divide al número de forma exacta con resto cero. Un NÚMERO PRIMO solo tiene dos divisores: el 1 y él mismo (2, 3, 5, 7, 11, 13...).',
    example:
      'Los divisores de 12 son 1, 2, 3, 4, 6 y 12 (es compuesto). En cambio, el 7 solo se puede dividir entre 1 y 7 (es primo).',
    memoryTrickOrFormula:
      'Criterio del 3: Un número es múltiplo de 3 si la suma de sus cifras está en la tabla del 3.',
    visualIconType: 'division-share',
  },
  {
    id: 'glos-math-porcentaje',
    term: 'Porcentaje (%) y Descuento',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    subCategory: 'Resolución y Geometría',
    clearDefinition:
      'Símbolo matemático (%) que representa una fracción de denominador 100, es decir, cuántas unidades tomamos de cada 100 posibles.',
    example:
      'El 50% de 80 alumnos son la mitad (40 alumnos). El 25% de 80 alumnos es la cuarta parte (80 ÷ 4 = 20 alumnos).',
    memoryTrickOrFormula:
      'Fórmula: P% de N = (P × N) ÷ 100  |  50% = mitad (÷2)  |  25% = cuarta parte (÷4).',
    visualIconType: 'fraction-pie',
  },
  {
    id: 'glos-math-jerarquia',
    term: 'Jerarquía de las Operaciones Combinadas',
    subject: 'matematicas',
    subjectLabel: 'Matemáticas',
    subCategory: 'Operaciones y Cálculo',
    clearDefinition:
      'Orden obligatorio en el que deben resolverse las cuentas cuando hay varias operaciones mezcladas en la misma expresión.',
    example:
      'En 10 + 2 × (8 - 3): primero hacemos el paréntesis (8-3=5), luego la multiplicación (2×5=10) y al final la suma (10+10=20).',
    memoryTrickOrFormula:
      'Regla PAPOMUDAS: 1º Paréntesis ( ) → 2º Potencias → 3º Multiplicar y Dividir → 4º Sumar y Restar.',
    visualIconType: 'math-problem-steps',
  },

  // ==========================================
  // GLOSARIO DE INGLÉS (10 TÉRMINOS DE VOCABULARIO Y GRAMÁTICA)
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
  {
    id: 'glos-eng-present-continuous',
    term: 'Present Continuous (Am / Is / Are + Verb-ING)',
    englishAudioText: 'What are you doing now? I am studying English right now.',
    subject: 'ingles',
    subjectLabel: 'Inglés',
    subCategory: 'Gramática',
    clearDefinition:
      'Tiempo verbal que expresa lo que está ocurriendo en este mismo momento (now, right now, at the moment). Se forma siempre con dos piezas: el verbo To Be (am / is / are) más el verbo principal terminado en -ING.',
    example:
      '"Listen! The birds ARE SINGING in the garden right now."',
    memoryTrickOrFormula:
      'El tren del -ING: Sujeto + locomotora (AM / IS / ARE) + vagón (-ING).',
    visualIconType: 'eng-verb-s',
  },
  {
    id: 'glos-eng-question-words',
    term: 'Wh- Question Words (What, Where, When, Who, Why, How)',
    englishAudioText: 'Where do you live? When is your birthday? Why are you happy? Because it is Friday.',
    subject: 'ingles',
    subjectLabel: 'Inglés',
    subCategory: 'Vocabulario Esencial',
    clearDefinition:
      'Palabras interrogativas que se colocan al principio de una pregunta: What (¿Qué?), Where (¿Dónde?), When (¿Cuándo?), Who (¿Quién?), Why (¿Por qué? → se responde con Because) y How (¿Cómo?).',
    example:
      '"WHERE is your school? It is in Museros." · "WHY are you running? BECAUSE I am late."',
    memoryTrickOrFormula:
      'Pareja inseparable de examen: Pregunta con WHY? → Respuesta con BECAUSE!',
    visualIconType: 'eng-question-does',
  },
  {
    id: 'glos-eng-countable-uncountable',
    term: 'Countable & Uncountable Nouns (How much / How many)',
    englishAudioText: 'How many apples are there? How much water is there in the bottle?',
    subject: 'ingles',
    subjectLabel: 'Inglés',
    subCategory: 'Gramática',
    clearDefinition:
      'Los nombres CONTABLES se pueden contar con números (one apple, two apples) y van con HOW MANY. Los INCONTABLES son líquidos, polvos o masas (water, milk, bread, cheese, money), no tienen plural y van con HOW MUCH.',
    example:
      '"How MANY students are there?" vs "How MUCH milk do you want?"',
    memoryTrickOrFormula:
      'How MANY = Plurales contables  |  How MUCH = Incontables y precios (How much is it?).',
    visualIconType: 'eng-there-is-are',
  },
  {
    id: 'glos-eng-adverbs-frequency',
    term: 'Adverbs of Frequency (Always, Usually, Often, Sometimes, Never)',
    englishAudioText: 'I always brush my teeth. She is never late for school.',
    subject: 'ingles',
    subjectLabel: 'Inglés',
    subCategory: 'Vocabulario Esencial',
    clearDefinition:
      'Palabras que indican con qué frecuencia hacemos una actividad: Always (100% siempre), Usually (80% normalmente), Often (60% a menudo), Sometimes (40% a veces) y Never (0% nunca).',
    example:
      '"I ALWAYS do my homework" (delante de verbo normal) · "He IS ALWAYS friendly" (detrás del verbo To Be).',
    memoryTrickOrFormula:
      'En "Often" (/Ó-fen/) la letra T no se pronuncia.',
    visualIconType: 'eng-past-clock',
  },

  // ==========================================
  // GLOSARIO DE CONOCIMIENTO DEL MEDIO (10 TÉRMINOS DE NATURALEZA Y SOCIEDAD)
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
  {
    id: 'glos-sci-cadena-trofica',
    term: 'Cadena Trófica (Productores, Consumidores y Descomponedores)',
    subject: 'conocimiento',
    subjectLabel: 'Conocimiento del Medio',
    subCategory: 'Naturaleza y Seres Vivos',
    clearDefinition:
      'Representación de quién alimenta a quién en la naturaleza. Empieza siempre por los PRODUCTORES (plantas), sigue por los CONSUMIDORES (herbívoros y carnívoros) y se cierra con los DESCOMPONEDORES (hongos y bacterias).',
    example:
      'Planta de trigo (Productor) ⟶ Ratón de campo (Consumidor primario) ⟶ Lechuza (Consumidor secundario) ⟶ Bacterias (Descomponedor).',
    memoryTrickOrFormula:
      'Orden P-C-D: Productores → Consumidores → Descomponedores.',
    visualIconType: 'sci-ecosystem',
  },
  {
    id: 'glos-sci-alveolos-intestino',
    term: 'Alvéolos Pulmonares y Vellosidades Intestinales',
    subject: 'conocimiento',
    subjectLabel: 'Conocimiento del Medio',
    subCategory: 'Naturaleza y Seres Vivos',
    clearDefinition:
      'Son las dos grandes "puertas de entrada" a la sangre en la nutrición humana: en los ALVÉOLOS de los pulmones pasa el Oxígeno (O₂) del aire a la sangre, y en las VELLOSIDADES del intestino delgado pasan los nutrientes de la comida a la sangre.',
    example:
      'Cuando inspiras aire limpio, el oxígeno llega hasta los alvéolos pulmonares y allí los glóbulos rojos lo recogen para llevarlo a todo el cuerpo.',
    memoryTrickOrFormula:
      'Alvéolos = paso de O₂ a la sangre  |  Intestino Delgado = paso de Nutrientes a la sangre.',
    visualIconType: 'sci-cell',
  },
  {
    id: 'glos-sci-densidad-materia',
    term: 'Masa, Volumen y Densidad de la Materia',
    subject: 'conocimiento',
    subjectLabel: 'Conocimiento del Medio',
    subCategory: 'Naturaleza y Seres Vivos',
    clearDefinition:
      'La MASA es la cantidad de materia (en kg o g), el VOLUMEN es el espacio que ocupa (en litros o cm³) y la DENSIDAD es el resultado de dividir la Masa entre el Volumen (explica si un objeto flota o se hunde en el agua).',
    example:
      'Un barco de madera flota porque la densidad de la madera es menor que la del agua (1 g/cm³), mientras que un tornillo de hierro se hunde porque es más denso.',
    memoryTrickOrFormula:
      'Fórmula: Densidad = Masa ÷ Volumen  |  Si es menor que 1 g/cm³, flota en el agua.',
    visualIconType: 'sci-river-relief',
  },
  {
    id: 'glos-sci-edad-media-furs',
    term: 'Edad Media, Al-Ándalus y Els Furs (Patrimonio Histórico)',
    subject: 'conocimiento',
    subjectLabel: 'Conocimiento del Medio',
    subCategory: 'Sociedad, Geografía e Historia',
    clearDefinition:
      'Etapa de la historia entre los años 476 y 1492. En nuestras tierras destacó la cultura de Al-Ándalus (que creó la red de acequias de la huerta) y, en 1238, la fundación del Reino de Valencia por el rey Jaume I con sus leyes propias (Els Furs).',
    example:
      'Las Torres de Serranos y la Lonja de la Seda en Valencia son monumentos góticos construidos durante la Edad Media.',
    memoryTrickOrFormula:
      '476 (Caída de Roma) → 711 (Al-Ándalus) → 1238 (Jaume I en Valencia) → 1492 (Fin de la Edad Media).',
    visualIconType: 'sci-society-population',
  },
];
