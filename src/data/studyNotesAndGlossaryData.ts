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
  subject:
    | 'ingles'
    | 'matematicas'
    | 'conocimiento'
    | 'lengua'
    | 'valencia'
    | 'artistica'
    | 'educacion-fisica'
    | 'valores';
  subjectLabel: string;
  subCategory:
    | 'Vocabulario Esencial'
    | 'Gramática'
    | 'Operaciones y Cálculo'
    | 'Resolución y Geometría'
    | 'Naturaleza y Seres Vivos'
    | 'Sociedad, Geografía e Historia'
    | 'Ortografía, Sintaxis y Literatura'
    | 'Valencià i Cultura'
    | 'Música, Arte, Deporte y Valores';
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
    | 'sci-sectors-huerta'
    | 'lengua-sintaxis'
    | 'valencia-apostrof'
    | 'musica-figuras'
    | 'ef-pilota'
    | 'valores-convivencia';
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

  // ============================================================================
  // LENGUA CASTELLANA Y LITERATURA · 6 UNIDADES COMPLETAS DE 5º DE PRIMARIA
  // ============================================================================
  {
    id: 'notes-len-u1',
    subject: 'lengua',
    subjectName: 'Lengua Castellana y Literatura',
    trimester: '1º Trimestre',
    unitNumber: 'Unidad 1',
    title: 'Reglas Generales de Acentuación: Agudas, Llanas y Esdrújulas',
    quickSummary:
      'Aprendemos a localizar la sílaba tónica de cualquier palabra y a aplicar sin dudar la regla N-S-Vocal para saber cuándo poner tilde en palabras agudas, llanas y esdrújulas.',
    detailedNotes: [
      {
        heading: '1. Sílaba Tónica vs. Sílabas Átonas (El método de la palmada)',
        points: [
          'La SÍLABA TÓNICA es aquella que pronunciamos con mayor fuerza de voz en una palabra. Las demás sílabas se llaman ÁTONAS.',
          'Contamos siempre la posición de la sílaba tónica de DERECHA A IZQUIERDA: 1ª Última (Aguda) · 2ª Penúltima (Llana) · 3ª Antepenúltima (Esdrújula).',
        ],
      },
      {
        heading: '2. Cuándo llevan tilde las Agudas, Llanas y Esdrújulas',
        points: [
          'PALABRAS AGUDAS (fuerza en la última sílaba): Llevan tilde cuando terminan en N, en S o en VOCAL (a, e, i, o, u). Ejemplos con tilde: ca-mión, com-pás, co-ли-brí. Sin tilde: re-loj, ca-lor.',
          'PALABRAS LLANAS (fuerza en la penúltima sílaba): Llevan tilde cuando NO terminan ni en N, ni en S, ni en VOCAL (es decir, cuando terminan en cualquier otra consonante como l, r, z, d, c). Ejemplos con tilde: ár-bol, lá-piz, cés-ped, fá-cil. Sin tilde: ca-sa, exa-men.',
          'PALABRAS ESDRÚJULAS Y SOBRESDRÚJULAS (fuerza en la antepenúltima o anterior): ¡Llevan tilde SIEMPRE sin excepción! Ejemplos: mú-si-ca, pá-ja-ro, ма-te-má-ti-cas, brú-ju-la.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-len-1',
        title: 'Esquema E-L-A y Regla N-S-Vocal',
        formulaExpression: 'Aguda (+ tilde si acaba en N, S, Vocal)  |  Llana (+ tilde si NO acaba en N, S, Vocal)  |  Esdrújula (SIEMPRE tilde)',
        explanation: 'Las agudas y las llanas son exactamente opuestas con las letras N, S y Vocal.',
        exampleCalculation: 'balón (aguda en -n: tilde) · azúcar (llana en -r: tilde) · plátano (esdrújula: tilde)',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Clasifica y pon tilde a "camion", "arbol", "lampara" y "reloj"',
        problemOrQuestion: 'Separa en sílabas, rodea la sílaba tónica y explica por qué lleva o no lleva tilde cada palabra.',
        stepByStepSolution: [
          '1º ca-MIÓN → Aguda terminada en -N → Lleva tilde (camión).',
          '2º ÁR-bol → Llana terminada en -L (no es N, S ni vocal) → Lleva tilde (árbol).',
          '3º LÁM-pa-ra → Esdrújula (antepenúltima sílaba) → Lleva tilde siempre (lámpara).',
          '4º re-LOJ → Aguda terminada en -J → NO lleva tilde (reloj).',
        ],
        finalResult: 'camión, árbol, lámpara y reloj.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-len1-1',
        question: '¿Por qué la palabra "CÉSPED" lleva tilde en la primera E?',
        options: ['Porque es una palabra LLANA que termina en consonante distinta de N o S (-d)', 'Porque es una palabra aguda', 'Porque todas las palabras que empiezan por C llevan tilde'],
        correctAnswer: 'Porque es una palabra LLANA que termina en consonante distinta de N o S (-d)',
        explanation: 'CÉS-ped tiene la fuerza en la penúltima sílaba (llana) y acaba en -D, por lo que lleva tilde.',
      },
    ],
    examTips: [
      'Cuidado con "examen" y "exámenes": "exa-men" es llana acabada en -N (NO lleva tilde), pero en plural "e-XÁ-me-nes" pasa a ser esdrújula y SÍ lleva tilde.',
    ],
  },
  {
    id: 'notes-len-u2',
    subject: 'lengua',
    subjectName: 'Lengua Castellana y Literatura',
    trimester: '1º Trimestre',
    unitNumber: 'Unidad 2',
    title: 'Diptongos, Triptongos e Hiatos',
    quickSummary:
      'Distinguimos las vocales abiertas o fuertes (A, E, O) de las cerradas o débiles (I, U) para saber cuándo dos vocales van juntas en la misma sílaba (diptongo) y cuándo se separan en dos sílabas distintas (hiato).',
    detailedNotes: [
      {
        heading: '1. Vocales Fuertes (A, E, O) y Vocales Débiles (I, U)',
        points: [
          'Vocales ABIERTAS o FUERTES: A, E, O (abrimos mucho la boca al pronunciarlas).',
          'Vocales CERRADAS o DÉBILES: I, U (abrimos poquito la boca).',
        ],
      },
      {
        heading: '2. El Diptongo (2 vocales que se quedan juntas en la misma sílaba)',
        points: [
          'Hay DIPTONGO cuando se unen: Vocal Fuerte + Débil átona (ai-re, Euro-pa, cau-sa), Débil átona + Fuerte (nie-ve, fue-go, via-je) o Dos Débiles distintas (ciu-dad, rui-do).',
          'Los diptongos siguen las normas generales de acentuación (agudas, llanas, esdrújulas). Ejemplo: "ca-mión" es aguda acabada en -n.',
        ],
      },
      {
        heading: '3. El Hiato (2 vocales que se separan en sílabas distintas)',
        points: [
          'Tipo 1 · Dos vocales FUERTES juntas (A, E, O): Dos fuertes no caben en la misma silla y se separan siempre (te-a-tro, po-e-ta, to-a-lla, ca-no-a). Siguen las reglas normales.',
          'Tipo 2 · Vocal Fuerte + Vocal Débil TÓNICA (Í, Ú): Cuando la fuerza de voz cae en la I o en la U, le ponemos una TILDE mágica que rompe el diptongo aunque contradiga la regla general: Ma-rí-a, ba-úl, bú-ho, ma-íz, pa-ís, grú-a.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-len-2',
        title: 'Fórmula de Diptongo vs. Hiato',
        formulaExpression: 'Diptongo (misma sílaba) = Fuerte + Débil átona  |  Hiato (se separan) = Fuerte + Fuerte  Ó  Fuerte + Débil con TILDE (í, ú)',
        explanation: 'La H intercalada (como en "bú-ho" o "a-ho-ra") es transparente y no impide que haya diptongo o hiato.',
        exampleCalculation: 'cie-lo (diptongo) · te-a-tro (hiato de 2 fuertes) · ba-úl (hiato con tilde en la ú)',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: ¿Diptongo o Hiato en "ciudad", "poema" y "había"?',
        problemOrQuestion: 'Separa en sílabas e indica si tienen diptongo o hiato.',
        stepByStepSolution: [
          '1º ciu-dad → u+i son dos vocales débiles juntas → DIPTONGO.',
          '2º po-e-ma → o+e son dos vocales fuertes → HIATO (se separan).',
          '3º ha-bí-a → í tónica + a fuerte → HIATO con tilde obligatoria en la í.',
        ],
        finalResult: 'ciu-dad (diptongo), po-e-ma (hiato), ha-bí-a (hiato).',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-len2-1',
        question: '¿Cómo se separa en sílabas correctamente la palabra "TEATRO" y qué tiene?',
        options: ['te-a-tro (tiene un HIATO porque la E y la A son dos vocales fuertes)', 'tea-tro (tiene un diptongo)', 'te-at-ro'],
        correctAnswer: 'te-a-tro (tiene un HIATO porque la E y la A son dos vocales fuertes)',
        explanation: 'Dos vocales abiertas o fuertes (A, E, O) nunca van en la misma sílaba: forman siempre un hiato.',
      },
    ],
    examTips: [
      'Recuerda: las palabras con hiato de vocal cerrada tónica (Ma-rí-a, rí-o, frí-o, ba-úl, ra-íz) llevan tilde SIEMPRE en la Í o en la Ú.',
    ],
  },
  {
    id: 'notes-len-u3',
    subject: 'lengua',
    subjectName: 'Lengua Castellana y Literatura',
    trimester: '2º Trimestre',
    unitNumber: 'Unidad 3',
    title: 'Morfología I: Sustantivos, Adjetivos, Determinantes y Pronombres',
    quickSummary:
      'Dominamos las clases de palabras que acompañan o sustituyen al nombre: tipos de sustantivos, grados del adjetivo y la diferencia clave entre un determinante (acompaña al nombre) y un pronombre (sustituye al nombre).',
    detailedNotes: [
      {
        heading: '1. El Sustantivo (Nombre) y sus 4 Parejas de Clasificación',
        points: [
          'Común (río, pueblo) vs. Propio (Turia, Museros, Carla → siempre con mayúscula).',
          'Individual (un elemento: abeja, árbol, músico) vs. Colectivo (en singular nombra un grupo: enjambre, bosque, orquesta, rebaño).',
          'Concreto (se percibe con los sentidos: mochila, música) vs. Abstracto (sentimientos o ideas: alegría, paz, amistad).',
        ],
      },
      {
        heading: '2. El Adjetivo Calificativo y sus 3 Grados',
        points: [
          '1. Grado Positivo: Expresa la cualidad tal cual ("El naranjo es alto").',
          '2. Grado Comparativo: Compara dos elementos. Puede ser de Superioridad ("más alto que"), de Igualdad ("tan alto como") o de Inferioridad ("menos alto que").',
          '3. Grado Superlativo: Expresa la cualidad en su grado máximo con "muy" o "-ísimo/a" ("muy alto", "altísimo").',
        ],
      },
      {
        heading: '3. Determinantes vs. Pronombres (El truco del acompañante)',
        points: [
          'DETERMINANTE: Va SIEMPRE delante de un sustantivo acompañándolo ("ESTE libro es de MI hermana"). Tipos: Artículos (el, la, un), Demostrativos (este, ese, aquel), Posesivos (mi, tu, su), Numerales (dos, tercero) e Indefinidos (algunos, muchos).',
          'PRONOMBRE: Va SOLO porque sustituye al sustantivo y a menudo acompaña a un verbo ("ÉL juega con ÉSTE; el libro es MÍO").',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-len-3',
        title: 'Fórmula para no confundir Determinante y Pronombre',
        formulaExpression: 'Palabra + SUSTANTIVO = Determinante   |   Palabra SOLA (sin sustantivo detrás) = Pronombre',
        explanation: 'Mira siempre la palabra que va justo a la derecha.',
        exampleCalculation: '"Aquel niño corre" (Aquel = Determinante) · "Aquel corre mucho" (Aquel = Pronombre)',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Analiza morfológicamente la palabra "REBAÑO"',
        problemOrQuestion: 'Indica todas las características del sustantivo "rebaño".',
        stepByStepSolution: [
          '1º Género y número: masculino, singular.',
          '2º Tipo: sustantivo común, concreto, contable y COLECTIVO (porque en singular nombra a un conjunto de ovejas).',
        ],
        finalResult: 'Sustantivo masculino, singular, común, concreto y colectivo.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-len3-1',
        question: '¿Cuál de estas palabras es un sustantivo COLECTIVO?',
        options: ['Bosque (conjunto de árboles en singular)', 'Árboles (está en plural, pero es individual)', 'Alegría'],
        correctAnswer: 'Bosque (conjunto de árboles en singular)',
        explanation: 'Un sustantivo colectivo va en SINGULAR (el bosque, la jauría, el enjambre) pero designa un grupo.',
      },
    ],
    examTips: [
      '¡No caigas en la trampa de los plurales! "Abejas" NO es colectivo (es individual en plural). El colectivo en singular es "enjambre".',
    ],
  },
  {
    id: 'notes-len-u4',
    subject: 'lengua',
    subjectName: 'Lengua Castellana y Literatura',
    trimester: '2º Trimestre',
    unitNumber: 'Unidad 4',
    title: 'Morfología II: El Verbo, Tiempos Verbales y Palabras Invariables',
    quickSummary:
      'Estudiamos el verbo (raíz, desinencia, las 3 conjugaciones, tiempos simples y compuestos), los adverbios, las preposiciones y las conjunciones.',
    detailedNotes: [
      {
        heading: '1. Las 3 Conjugaciones, Raíz y Desinencia del Verbo',
        points: [
          '1ª Conjugación: verbos cuyo infinitivo termina en -AR (cantar, saltar, estudiar).',
          '2ª Conjugación: verbos cuyo infinitivo termina en -ER (comer, correr, leer).',
          '3ª Conjugación: verbos cuyo infinitivo termina en -IR (vivir, escribir, salir).',
          'Tiempos SIMPLES (una sola palabra: "canté") vs. Tiempos COMPUESTOS (verbo auxiliar HABER + participio: "he cantado", "había comido").',
        ],
      },
      {
        heading: '2. Palabras Invariables: Adverbios, Preposiciones y Conjunciones',
        points: [
          'ADVERBIOS (indican circunstancias del verbo): Lugar (aquí, allí, cerca, lejos), Tiempo (hoy, ayer, mañana, pronto), Modo (bien, mal, despacio, rápidamente), Cantidad (mucho, poco, muy, bastante), Afirmación (sí, también), Negación (no, nunca) y Duda (quizás, acaso).',
          'PREPOSICIONES (de memoria): a, ante, bajo, cabe, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, so, sobre, tras, versus, vía.',
          'CONJUNCIONES (unen palabras u oraciones): Copulativas (y, e, ni), Disyuntivas (o, u), Adversativas (pero, sino, aunque).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-len-4',
        title: 'Cómo hallar la Raíz y la Desinencia de un Verbo',
        formulaExpression: 'Raíz = Infinitivo sin (-ar / -er / -ir)  |  Desinencia = Lo que se añade a la raíz',
        explanation: 'Para saber la raíz de "cantábamos", ponlo en infinitivo (cant-ar), quita "-ar" → Raíz: CANT- · Desinencia: -ÁBAMOS.',
        exampleCalculation: 'escribiremos → Infinitivo: escrib-ir → Raíz: escrib- · Desinencia: -iremos',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Analiza el verbo "HABÍAMOS JUGADO"',
        problemOrQuestion: 'Indica persona, número, tiempo, modo y conjugación de "habíamos jugado".',
        stepByStepSolution: [
          '1º Persona y número: 1ª persona del plural (Nosotros/as).',
          '2º Tiempo: Compuesto (lleva el verbo haber → pretérito pluscuamperfecto de indicativo).',
          '3º Conjugación: Viene de "jugar" (-ar) → 1ª conjugación.',
        ],
        finalResult: '1ª persona del plural, tiempo compuesto del modo indicativo, 1ª conjugación (jugar).',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-len4-1',
        question: '¿Qué tipo de palabra invariable es "MAÑANA" en la frase "Mañana iremos a la excursión"?',
        options: ['Adverbio de tiempo', 'Preposición', 'Adjetivo calificativo'],
        correctAnswer: 'Adverbio de tiempo',
        explanation: 'Responde a la pregunta "¿Cuándo iremos?" → Mañana (adverbio de tiempo).',
      },
    ],
    examTips: [
      'Recita la lista de las preposiciones con ritmo ("a, ante, bajo, cabe, con, contra...") para identificarlas al instante en cualquier análisis morfológico.',
    ],
  },
  {
    id: 'notes-len-u5',
    subject: 'lengua',
    subjectName: 'Lengua Castellana y Literatura',
    trimester: '3º Trimestre',
    unitNumber: 'Unidad 5',
    title: 'Sintaxis (Sujeto y Predicado) y Ortografía de B/V, G/J y H',
    quickSummary:
      'Aprende el método de los 3 pasos para analizar cualquier oración en Sujeto y Predicado (incluso cuando el Sujeto está omitido) y las reglas de oro de la B, V, G, J y H.',
    detailedNotes: [
      {
        heading: '1. Análisis Sintáctico: Sujeto, Predicado y sus Núcleos',
        points: [
          'PASO 1: Busca primero el VERBO conjugado de la oración. El verbo es siempre el NÚCLEO DEL PREDICADO (NP).',
          'PASO 2: Pregunta al verbo "¿Quién?" o "¿Quiénes?" realizan la acción. Eso es el SUJETO. Su palabra más importante (un sustantivo o pronombre) es el NÚCLEO DEL SUJETO (NS).',
          'PASO 3: Todo lo que no es Sujeto (incluido el verbo) es el PREDICADO.',
          'SUJETO OMITIDO (o Elíptico): Cuando el sujeto no está escrito en la frase pero lo sabemos por el verbo. Ejemplo: "Ayer ganamos el partido" → Sujeto Omitido: (Nosotros/as).',
        ],
      },
      {
        heading: '2. Reglas Infalibles de la B, la V y la H',
        points: [
          'Se escriben con B: todos los verbos pasados acabados en -ABA (cantaba, jugábamos, iban), los verbos acabados en -BIR (escribir, recibir, subir — excepto hervir, servir y vivir), y las palabras que empiezan por BU-, BUR-, BUS- (bueno, burbuja, buscar).',
          'Se escriben con V: los adjetivos acabados en -AVA, -AVE, -AVO, -EVA, -EVE, -EVO, -IVA, -IVO (suave, nuevo, deportivo) y el pasado "estuve, anduve, tuve".',
          'Se escriben con H: las palabras que empiezan por HIE-, HUE- (hielo, hierba, huevo, hueso, huerta) y todas las formas de los verbos HABER, HACER, HABLAR, HALLAR y HABITAR.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-len-5',
        title: 'Fórmula de Análisis Sintáctico',
        formulaExpression: '1º Localiza el VERBO (Núcleo del Predicado)  →  2º ¿Quién + Verbo? = SUJETO (Núcleo: Nombre)  →  3º Resto = PREDICADO',
        explanation: 'Nunca olvides señalar el Núcleo del Sujeto (NS) y el Núcleo del Predicado (NP) debajo de la caja.',
        exampleCalculation: '[Los alumnos de Museros] (Sujeto, NS: alumnos) [estudian en la biblioteca] (Predicado, NP: estudian).',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Analiza Sujeto y Predicado en "Viajaremos en tren mañana"',
        problemOrQuestion: 'Indica cuál es el Sujeto y cuál es el Predicado de la oración.',
        stepByStepSolution: [
          '1º Verbo: "viajaremos" (Núcleo del Predicado).',
          '2º ¿Quiénes viajaremos? → Nosotros/as. Como no está escrito, es Sujeto Omitido (Nosotros/as).',
          '3º Toda la frase escrita ("Viajaremos en tren mañana") es el Predicado.',
        ],
        finalResult: 'Sujeto Omitido: (Nosotros/as) · Predicado: "Viajaremos en tren mañana" (NP: viajaremos).',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-len5-1',
        question: '¿Cuál de estas series de verbos en "-bir" son las TRES ÚNICAS excepciones que se escriben con V?',
        options: ['Hervir, servir y vivir', 'Escribir, recibir y subir', 'Prohibir, exhibir y escribir'],
        correctAnswer: 'Hervir, servir y vivir',
        explanation: 'Todos los verbos terminados en -bir se escriben con B excepto hervir, servir y vivir.',
      },
    ],
    examTips: [
      'Recuerda: "iba, ibas, íbamos" del verbo IR se escriben SIEMPRE con B, mientras que "estuve, tuve, anduve" se escriben SIEMPRE con V.',
    ],
  },
  {
    id: 'notes-len-u6',
    subject: 'lengua',
    subjectName: 'Lengua Castellana y Literatura',
    trimester: '3º Trimestre',
    unitNumber: 'Unidad 6',
    title: 'Los Géneros Literarios y las Figuras Retóricas (Recursos Literarios)',
    quickSummary:
      'Conocemos los 3 grandes géneros literarios (Narrativa, Lírica y Teatro), cómo medir versos y distinguir rima asonante y consonante, y los recursos literarios más preguntados en examen.',
    detailedNotes: [
      {
        heading: '1. Los 3 Grandes Géneros Literarios',
        points: [
          '1. NARRATIVA: Un narrador cuenta una historia que les sucede a unos personajes en un tiempo y lugar (Marco). Partes: Planteamiento (inicio), Nudo (conflicto) y Desenlace (final). Ejemplos: el cuento, la novela, la leyenda y la fábula (con moraleja).',
          '2. LÍRICA (Poesía): El autor expresa sentimientos y emociones, generalmente en VERSOS agrupados en ESTROFAS. Rima CONSONANTE (coinciden vocales y consonantes desde la última vocal tónica: can-CIÓN / cora-ZÓN) vs. Rima ASONANTE (solo coinciden las vocales: vE-rA-nO / mA-nO).',
          '3. TEATRO (Dramática): Obras escritas en forma de diálogo para ser representadas por actores ante un público, con ACOTACIONES (indicaciones entre paréntesis sobre gestos, decorado o vestuario).',
        ],
      },
      {
        heading: '2. Los 4 Recursos Literarios Esenciales',
        points: [
          'COMPARACIÓN o SÍMIL: Compara dos elementos usando la palabra "COMO" ("Sus ojos brillan COMO dos estrellas").',
          'METÁFORA: Identifica directamente una cosa real con otra imaginaria SIN usar "como" ("Las perlas de tu boca" = los dientes).',
          'PERSONIFICACIÓN: Atribuye cualidades o acciones humanas a animales u objetos ("La luna nos sonreía desde el cielo").',
          'HIPÉRBOLE: Exageración enorme ("Tengo tanta hambre que me comería un elefante").',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-len-6',
        title: 'Diferencia entre Comparación (Símil) y Metáfora',
        formulaExpression: 'Con la palabra "COMO" = Comparación   |   Directo SIN "como" = Metáfora',
        explanation: 'Ambas relacionan dos cosas que se parecen, pero la comparación lleva el puente "como" o "parece".',
        exampleCalculation: '"Tus dientes son como perlas" (Comparación) · "Las perlas de tu boca" (Metáfora)',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Identifica el tipo de rima y el recurso literario',
        problemOrQuestion: 'En el verso "El viento cantaba una canción de cuna", ¿qué recurso literario hay?',
        stepByStepSolution: [
          '1º Nos fijamos en la acción "cantaba una canción de cuna" aplicada a "el viento".',
          '2º Cantar una canción de cuna es una acción propia de las personas.',
        ],
        finalResult: 'Es una PERSONIFICACIÓN.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-len6-1',
        question: '¿Qué tipo de rima hay entre las palabras "VENTANA" y "MAÑANA"?',
        options: ['Rima CONSONANTE (coinciden vocales y consonantes a partir de la sílaba tónica: -ANA)', 'Rima asonante', 'Verso libre sin rima'],
        correctAnswer: 'Rima CONSONANTE (coinciden vocales y consonantes a partir de la sílaba tónica: -ANA)',
        explanation: 'Desde la A tónica de ven-TA-na y ma-ÑA-na coinciden todas las letras (-ana): es rima consonante.',
      },
    ],
    examTips: [
      'Al medir las sílabas de un verso en poesía, recuerda la SINALEFA: si una palabra acaba en vocal y la siguiente empieza por vocal o h, se unen en una sola sílaba.',
    ],
  },

  // ============================================================================
  // VALENCIÀ: LLENGUA I LITERATURA · 6 UNITATS COMPLETES DE 5é DE PRIMÀRIA
  // ============================================================================
  {
    id: 'notes-val-u1',
    subject: 'valencia',
    subjectName: 'Valencià: Llengua i Literatura',
    trimester: '1º Trimestre',
    unitNumber: 'Unitat 1',
    title: 'Síllaba Tònica i Accentuació: Accents Oberts (`) i Tancats (´)',
    quickSummary:
      'Aprenem quan s\'accentuen les paraules agudes, planes i esdrúixoles en valencià i el truc infal·lible per a saber si l\'accent gràfic va cap a l\'esquerra (obert o greu `) o cap a la dreta (tancat o agut ´).',
    detailedNotes: [
      {
        heading: '1. Quan porten accent les paraules en valencià?',
        points: [
          'PARAULES AGUDES (força en l\'última síl·laba): Porten accent quan acaben en VOCAL, VOCAL + S, -EN, -IN (les 12 terminacions: a, e, i, o, u, as, es, is, os, us, en, in). Exemples: ca-mi-Ó, va-len-ci-À, ca-FÈ, com-PÀS, a-pren-EN.',
          'PARAULES PLANES (força en la penúltima síl·laba): Porten accent quan NO acaben en cap de les 12 terminacions anteriors. Exemples: ÀR-bre, FÀ-cil, CÈN-tim, LÒ-gi-ca, exà-mens.',
          'PARAULES ESDRÚIXOLES (força en l\'antepenúltima síl·laba): Porten accent SEMPRE! Exemples: MÚ-si-ca, PÀ-gi-na, ci-ÈN-ci-a, es-DRÚI-xo-la, va-len-ci-À.',
        ],
      },
      {
        heading: '2. El Secret de l\'Accent Obert (`) i l\'Accent Tancat (´)',
        points: [
          'La vocal A: SEMPRE porta accent OBERT cap a l\'esquerra (`à`), mai tancat! Exemples: català, demà, pàgina, fàbrica.',
          'Les vocals I, U: SEMPRE porten accent TANCAT cap a la dreta (`í`, `ú`), mai obert! Exemples: camí, música, país, autobús.',
          'Les vocals E, O: Poden ser obertes (`è`, `ò`, quan obrim més la boca: cafè, sèrie, ciència, paciència, però, arròs, història) o tancades (`é`, `ó`, com en més, tambor → cançó, lleó, església).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-val-1',
        title: 'Regla d\'Or de les Vocals en Valencià',
        formulaExpression: 'A → sempre obert (À)   |   I, U → sempre tancat (Í, Ú)   |   E, O → obert (È, Ò) o tancat (É, Ó)',
        explanation: 'Amb aquesta regla ja tens garantit no fallar mai l\'accent de la A, la I i la U!',
        exampleCalculation: 'demà (à oberta) · camí (í tancada) · música (ú tancada) · arròs (ò oberta) · cançó (ó tancada)',
      },
    ],
    workedExamples: [
      {
        title: 'Exemple d\'Examen: Posa l\'accent correcte a "pagina", "cami", "arros" i "musica"',
        problemOrQuestion: 'Classifica cada paraula i posa-li l\'accent obert o tancat.',
        stepByStepSolution: [
          '1º PÀ-gi-na → Esdrúixola amb vocal A → Sempre obert: pàgina.',
          '2º ca-MÍ → Aguda acabada en vocal I → Sempre tancat: camí.',
          '3º ar-RÒS → Aguda acabada en -os amb O oberta → arròs.',
          '4º MÚ-si-ca → Esdrúixola amb vocal U → Sempre tancat: música.',
        ],
        finalResult: 'pàgina, camí, arròs i música.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-val1-1',
        question: 'Quin accent porta SEMPRE la lletra A quan s\'accentua en valencià?',
        options: ['Sempre porta accent obert o greu (à)', 'Sempre porta accent tancat (á)', 'Depén de si és aguda o plana'],
        correctAnswer: 'Sempre porta accent obert o greu (à)',
        explanation: 'En valencià la vocal A sempre porta accent obert (à), mentre que la I i la U sempre el porten tancat (í, ú).',
      },
    ],
    examTips: [
      'Fixa\'t en la diferència amb el castellà: les paraules acabades en -IA o -IO àtones en valencià són ESDRÚIXOLES i porten accent: "història, família, ciència, memòria, col·legi (no en porta perquè acaba en -i sola)".',
    ],
  },
  {
    id: 'notes-val-u2',
    subject: 'valencia',
    subjectName: 'Valencià: Llengua i Literatura',
    trimester: '1º Trimestre',
    unitNumber: 'Unitat 2',
    title: 'L\'Apostrofació (l\', d\') i les Contraccions (al, del, pel)',
    quickSummary:
      'Aprenem quan s\'apostrofen els articles EL i LA i la preposició DE davant de vocal o H, l\'excepció de LA davant de i/u àtones, i com funcionen les contraccions.',
    detailedNotes: [
      {
        heading: '1. Regla General de l\'Apòstrof (l\', d\')',
        points: [
          'L\'article masculí EL, el femení LA i la preposició DE perden la vocal i porten apòstrof (l\', d\') quan la paraula següent comença per VOCAL o H muda.',
          'Exemples amb EL: el amic → l\'amic · el home → l\'home · el avi → l\'avi.',
          'Exemples amb LA: la escola → l\'escola · la horta → l\'horta (com l\'Horta Nord de Museros) · la aigua → l\'aigua.',
          'Exemples amb DE: de estiu → d\'estiu · de Museros (comença per consonant, NO s\'apostrofa) · de hivern → d\'hivern.',
        ],
      },
      {
        heading: '2. La Gran Excepció d\'Examen (Quan LA NO s\'apostrofa)',
        points: [
          'L\'article femení LA NO s\'apostrofa mai quan la paraula següent és femenina i comença per I, U, HI, HU ÀTONES (sense força de veu): LA universitat, LA història, LA indústria, LA idea, LA humitat.',
          'Tampoc s\'apostrofa en "la una" (quan diem l\'hora: "Són la una i mitja"), ni "la ira", ni davant del nom de les lletres ("la ema, la essa").',
          'En canvi, si la I o la U és TÒNICA (té el colp de veu), SÍ s\'apostrofa: l\'illa, l\'ungla, l\'única.',
        ],
      },
      {
        heading: '3. Les Contraccions (A + EL = AL · DE + EL = DEL · PER + EL = PEL)',
        points: [
          'Quan les preposicions A, DE, PER es troben amb els articles EL o ELS, s\'uneixen formant contraccions: al / als, del / dels, pel / pels.',
          'ATENCIÓ: Si el nom que va darrere comença per vocal o h, NO fem la contracció perquè mana l\'apòstrof! Diem "Vaig a l\'escola" (no "al escola"), "Vinc de l\'hort" (no "del hort"), "Passege per l\'avinguda".',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-val-2',
        title: 'Esquema d\'Apostrofació i Contracció',
        formulaExpression: 'LA + (i, u, hi, hu ÀTONA) = LA sense apòstrof   |   A/DE/PER + l\' = NO hi ha contracció (a l\', de l\', per l\')',
        explanation: 'L\'apòstrof sempre guanya a la contracció!',
        exampleCalculation: 'l\'escola · la universitat · la història · l\'illa · Vaig al parc / Vaig a l\'institut',
      },
    ],
    workedExamples: [
      {
        title: 'Exemple d\'Examen: Posa EL, LA o L\' davant de "escola", "universitat", "horta" i "illa"',
        problemOrQuestion: 'Escriu l\'article correcte davant de cada substantiu.',
        stepByStepSolution: [
          '1º escola (femení que comença per e-) → l\'escola.',
          '2º universitat (femení que comença per u- àtona) → Excepció! → la universitat.',
          '3º horta (femení que comença per ho- tònica) → l\'horta.',
          '4º illa (femení que comença per i- tònica) → l\'illa.',
        ],
        finalResult: 'l\'escola, la universitat, l\'horta i l\'illa.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-val2-1',
        question: 'Com s\'escriu correctament en valencià: "la universitat" o "l\'universitat"?',
        options: ['la universitat (sense apòstrof perquè comença per u àtona)', 'l\'universitat', 'el universitat'],
        correctAnswer: 'la universitat (sense apòstrof perquè comença per u àtona)',
        explanation: 'Els noms femenins que comencen per i, u, hi, hu àtones (la universitat, la història, la idea) NO s\'apostrofen.',
      },
    ],
    examTips: [
      'Memoritza les 4 paraules estrela d\'examen que NO porten apòstrof: LA universitat, LA història, LA idea, LA una (hora).',
    ],
  },
  {
    id: 'notes-val-u3',
    subject: 'valencia',
    subjectName: 'Valencià: Llengua i Literatura',
    trimester: '2º Trimestre',
    unitNumber: 'Unitat 3',
    title: 'Ortografia Valenciana: L·L (Ela Geminada), NY, B/V, S/SS/C/Ç i TG/TJ',
    quickSummary:
      'Repassem les grafies pròpies del valencià que no hem de confondre mai amb el castellà: la ela geminada (l·l), el dígraf ny, la ce trencada (ç) i l\'ús de b i v.',
    detailedNotes: [
      {
        heading: '1. La Ela Geminada (L·L) vs. la LL',
        points: [
          'La ELA GEMINADA (l·l) s\'escriu amb un punt volat al mig (a l\'altura del centre de la lletra) i es pronuncia com dos eles separades.',
          'Porten L·L les paraules que comencen per AL·L- (al·lèrgia), COL·L- (col·legi, col·laborar, col·lecció), IL·L- (il·lusió, il·luminar), MIL·L- (mil·límetre) i les que acaben en -EL·LA (novel·la, aquarel·la, caravel·la) o -IL·LA (goril·la, til·la, tranqui·la).',
        ],
      },
      {
        heading: '2. El Dígraf NY, la Ce Trencada (Ç) i TG / TJ',
        points: [
          'En valencià NO existeix la lletra "ñ": aquest so s\'escriu SEMPRE amb el dígraf NY (muntanya, aranya, bany, canya, Catalunya, Espanya).',
          'La CE TRENCADA (Ç) s\'escriu davant de A, O, U i a final de paraula (plaça, cançó, dolç, feliç, lluç, braç). Davant de E, I escrivim sempre C normal (places, feliços → felices, cirera, cel).',
          'Escrivim TG davant de E, I (formatge, viatge, platges, metge) i TJ davant de A, O, U (platja, mitja, llotja).',
        ],
      },
      {
        heading: '3. Diferències Clau de B i V entre Valencià i Castellà',
        points: [
          'En valencià s\'escriuen amb V els pretèrits imperfets de la 1a conjugació: cantava, jugàvem, parlaven (en castellà van amb -aba!).',
          'Paraules que en valencià van amb V i en castellà amb B: advocat, automòbil (amb b), avet, núvol, saviesa, govern, haver, provar, treball (amb b), cavall.',
          'Paraules que en valencià van amb B i en castellà amb V: mòbil, automòbil, oblidar, berruga, bafarada, calb, corb.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-val-3',
        title: 'Regla dels Imperfets en -AVA i de TG / TJ',
        formulaExpression: '1a Conjugació en passat = -AVA, -AVES, -ÀVEM (amb V!)   |   platJA (davant a,o,u) → platGES (davant e,i)',
        explanation: 'Recorda sempre que en valencià "cantava i jugava" van amb V!',
        exampleCalculation: 'col·legi · novel·la · muntanya · formatge · platja / platges · jo cantava',
      },
    ],
    workedExamples: [
      {
        title: 'Exemple d\'Examen: Passa al plural "la platja roja" i "el braç dolç"',
        problemOrQuestion: 'Aplica els canvis ortogràfics de J/G i Ç/C en passar al plural.',
        stepByStepSolution: [
          '1º platja → davant de -es passa a TG: les platges; roja → davant de -es passa a G: roges.',
          '2º braç → davant de -os manté la Ç: els braços; dolç → els dolços (en femení plural seria "dolces" amb C).',
        ],
        finalResult: 'les platges roges · els braços dolços.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-val3-1',
        question: 'Com s\'escriu en valencià el passat del verb cantar: "jo cantaba" o "jo cantava"?',
        options: ['Jo cantava (sempre amb V en tots els verbs de la 1a conjugació -ar)', 'Jo cantaba (amb B)', 'Jo cantave'],
        correctAnswer: 'Jo cantava (sempre amb V en tots els verbs de la 1a conjugació -ar)',
        explanation: 'Totes les terminacions del pretèrit imperfet dels verbs acabats en -AR s\'escriuen amb V en valencià: cantava, cantaves, cantàvem, cantàveu, cantaven.',
      },
    ],
    examTips: [
      'No escrigues mai Ç davant de E o I! És "la plaça", però en plural és "les places" (amb C).',
    ],
  },
  {
    id: 'notes-val-u4',
    subject: 'valencia',
    subjectName: 'Valencià: Llengua i Literatura',
    trimester: '2º Trimestre',
    unitNumber: 'Unitat 4',
    title: 'Morfologia: Demostratius, Possessius, Numerals i Pronoms Febles',
    quickSummary:
      'Estudiem els determinants en valencià (aquest, eixe, aquell; el meu, la meua), com s\'escriuen els números amb la regla D-U-C (dezenes-unitats-centenes) i els pronoms febles bàsics.',
    detailedNotes: [
      {
        heading: '1. Determinants Demostratius i Possessius en Valencià',
        points: [
          'DEMOSTRATIUS: Prop de qui parla: aquest, aquesta, aquests, aquestes (o este, esta, estos, estes). Prop de qui escolta: eixe, eixa, eixos, eixes. Lluny de tots dos: aquell, aquella, aquells, aquelles.',
          'POSSESSIUS Tònics (amb article davant): el meu / la meua, el teu / la teua, el seu / la seua, el nostre / la nostra, el vostre / la vostra. Possessius Àtons (per a parentiu): mon pare, ma mare, ton germà, sa tia.',
        ],
      },
      {
        heading: '2. Els Numerals i la Regla D-U-C dels Guionets (-)',
        points: [
          'En valencià es posa GUIONET (-) entre les DEZENES i les UNITATS (D-U) i entre les UNITATS i les CENTENES (U-C). Això és la regla D-U-C!',
          'Exemples de D-U (Dezena-Unitat): trenta-dos (32), quaranta-cinc (45), noranta-nou (99). Del 21 al 29 porta una -i- al mig amb dos guionets: vint-i-u (21), vint-i-quatre (24), vint-i-huit (28).',
          'Exemples de U-C (Unitat-Centena): dos-cents (200), tres-centes (300), quatre-cents (400), huit-cents (800).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-val-4',
        title: 'Regla D-U-C per a escriure els números en valencià',
        formulaExpression: 'D - U (Dezena - Unitat: trenta-tres)   |   U - C (Unitat - Centena: dos-cents)   |   21..29 = vint-i-...',
        explanation: 'Només porten guionet les unions D-U i U-C!',
        exampleCalculation: '245 = dos-cents quaranta-cinc   |   28 = vint-i-huit',
      },
    ],
    workedExamples: [
      {
        title: 'Exemple d\'Examen: Escriu amb lletres els nombres 26, 342 i 518 en valencià',
        problemOrQuestion: 'Aplica la regla D-U-C dels guionets.',
        stepByStepSolution: [
          '1º 26 → Família del vint: vint-i-sis.',
          '2º 342 → U-C (tres-cents) + D-U (quaranta-dos) → tres-cents quaranta-dos.',
          '3º 518 → U-C (cinc-cents) + dèsset/dihuit → cinc-cents dihuit.',
        ],
        finalResult: 'vint-i-sis, tres-cents quaranta-dos i cinc-cents dihuit.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-val4-1',
        question: 'Com s\'escriu correctament el número 24 en valencià?',
        options: ['vint-i-quatre (amb dos guionets)', 'vintiquatre (tot junt)', 'vint i quatre (sense guionets)'],
        correctAnswer: 'vint-i-quatre (amb dos guionets)',
        explanation: 'Del 21 al 29 tots els nombres s\'escriuen amb "-i-" entre dos guionets: vint-i-u, vint-i-dos, vint-i-quatre...',
      },
    ],
    examTips: [
      'Memoritza la paraula "D-U-C" (Duc) per als números: Dezena-Unitat i Unitat-Centena porten guionet sempre!',
    ],
  },
  {
    id: 'notes-val-u5',
    subject: 'valencia',
    subjectName: 'Valencià: Llengua i Literatura',
    trimester: '3º Trimestre',
    unitNumber: 'Unitat 5',
    title: 'Els Verbs en Valencià, Perífrasis d\'Obligació i Ser vs. Estar',
    quickSummary:
      'Aprenem el passat perifràstic (vaig cantar), com expressar obligació correctament (haver de + infinitiu, mai "tindre que") i les tres conjugacions.',
    detailedNotes: [
      {
        heading: '1. El Passat Perifràstic (vaig + infinitiu)',
        points: [
          'En valencià parlat i escrit usem moltíssim el PASSAT PERIFRÀSTIC per a dir el que vam fer ahir o la setmana passada: es forma amb l\'auxiliar VAIG, VAS, VA, VAM, VAU, VAN + l\'infinitiu del verb.',
          'ATENCIÓ: "Jo vaig jugar ahir" significa "Yo jugué ayer" (en passat!), NO significa "voy a jugar".',
        ],
      },
      {
        heading: '2. Perífrasi d\'Obligació: HAVER DE + Infinitiu / CALDRE',
        points: [
          'Per a dir que tenim l\'obligació de fer alguna cosa en valencià diem SEMPRE: "Haver de + infinitiu" ("He d\'estudiar per a l\'examen", "Has de recollir l\'habitació") o el verb "Caldre" ("Cal estudiar").',
          'PROHIBIT EN EXAMEN: Mai no s\'ha de dir ni escriure *"Tinc que estudiar"* (és un barbarisme incorrecte).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-val-5',
        title: 'Fórmula d\'Obligació i Passat en Valencià',
        formulaExpression: 'Passat = VAIG / VAS / VA / VAM / VAU / VAN + Infinitiu   |   Obligació = HE DE / HAS DE / HA DE / CAL + Infinitiu',
        explanation: 'Recorda: "Tinc que..." és incorrecte; escriu sempre "He de..."!',
        exampleCalculation: 'Ahir vam anar a Museros (Passat) · Hui he de fer els deures (Obligació)',
      },
    ],
    workedExamples: [
      {
        title: 'Exemple d\'Examen: Corregeix la frase incorrecta "Ahir teníem que fer el treball"',
        problemOrQuestion: 'Substitueix el castellanisme per l\'estructura genuïna valenciana.',
        stepByStepSolution: [
          '1º Detectem "teníem que fer", que és incorrecte en valencià.',
          '2º El canviem per "haver de + infinitiu" en passat: "Ahir havíem de fer el treball".',
        ],
        finalResult: '"Ahir havíem de fer el treball".',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-val5-1',
        question: 'Què significa en valencià la frase "Ahir vam estudiar a la biblioteca"?',
        options: ['Ayer estudiamos en la biblioteca (Passat perifràstic)', 'Mañana vamos a estudiar', 'Ahora estamos estudiando'],
        correctAnswer: 'Ayer estudiamos en la biblioteca (Passat perifràstic)',
        explanation: '"Vam estudiar" és el passat perifràstic de 1a persona del plural (Nosaltres vam estudiar = Nosotros estudiamos).',
      },
    ],
    examTips: [
      'No confongues mai "vaig cantar" (passat: canté) amb "vaig a cantar". Si ve acompanyat de "ahir" o "l\'any passat", sempre és passat perifràstic sense la preposició "a"!',
    ],
  },
  {
    id: 'notes-val-u6',
    subject: 'valencia',
    subjectName: 'Valencià: Llengua i Literatura',
    trimester: '3º Trimestre',
    unitNumber: 'Unitat 6',
    title: 'Vocabulari de l\'Horta Nord i Museros, Els Dies i Cultura Valenciana',
    quickSummary:
      'Repassem el vocabulari essencial de l\'Horta, la fruita, la verdura, els dies de la setmana (sense article!), les estacions i els grans autors de la nostra literatura com Enric Valor i Joanot Martorell.',
    detailedNotes: [
      {
        heading: '1. Vocabulari de l\'Horta de Museros, Alimentació i Dies de la Setmana',
        points: [
          'Vocabulari de l\'horta i la taula: la taronja (naranja), la bresquilla (melocotón), la maduixa o fraula (fresa), el creïlla o patata, la bajoca (judía verde), la carlota o safanòria (zanahoria), el dacsa o panís (maíz), l\'encisam (lechuga), la séquia (acequia), la barraca.',
          'Els dies de la setmana: dilluns, dimarts, dimecres, dijous, divendres, dissabte, diumenge. (Quan parlem d\'un dia concret vam sense article o amb "el": "Dimecres tenim música").',
          'Les 4 estacions: la primavera, l\'estiu, la tardor (otoño) i l\'hivern.',
        ],
      },
      {
        heading: '2. Literatura i Cultura Valenciana',
        points: [
          'ENRIC VALOR: Escriptor valencià que va recopilar i escriure les famoses "Rondalles Valencianes" (contes tradicionals populars com *El dimoni fumador* o *Els tres consells*).',
          'JAUME I i el Llibre dels Fets: Crònica històrica de la fundació del Regne de València al segle XIII (9 d\'Octubre de 1238).',
          'JOANOT MARTORELL: Autor de *Tirant lo Blanc* al segle XV (Segle d\'Or de les lletres valencianes).',
          'VICENT BLASCO IBÁÑEZ: Escriptor valencià universal que dóna nom al nostre col·legi de Museros, autor de novel·les sobre l\'horta i l\'Albufera com *La barraca* i *Cañas y barro*.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-val-6',
        title: 'Vocabulari Clau que Sempre Ix a l\'Examen',
        formulaExpression: 'tardor = otoño · bresquilla = melocotón · carlota = zanahoria · creïlla = patata · bajoca = judía verde',
        explanation: 'Fixa\'t que "creïlla" porta dièresi (¨) sobre la i!',
        exampleCalculation: 'A la tardor collim taronges a l\'horta de Museros.',
      },
    ],
    workedExamples: [
      {
        title: 'Exemple d\'Examen: Tradueix al valencià "En otoño comemos melocotón y zanahoria"',
        problemOrQuestion: 'Escriu la frase emprant el vocabulari genuí valencià.',
        stepByStepSolution: [
          '1º "En otoño" → A la tardor.',
          '2º "comemos" → mengem.',
          '3º "melocotón y zanahoria" → bresquilla i carlota (o safanòria).',
        ],
        finalResult: '"A la tardor mengem bresquilla i carlota".',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-val6-1',
        question: 'Quin escriptor valencià va recollir les tradicionals "Rondalles Valencianes"?',
        options: ['Enric Valor', 'Miguel de Cervantes', 'Joaquín Sorolla'],
        correctAnswer: 'Enric Valor',
        explanation: 'Enric Valor és l\'autor de les cèlebres Rondalles Valencianes i un gran defensor de la nostra llengua.',
      },
    ],
    examTips: [
      'Recorda que el nostre col·legi s\'anomena CEIP Blasco Ibáñez en honor a l\'escriptor valencià Vicent Blasco Ibáñez, que va retratar la vida de l\'horta valenciana i l\'Albufera!',
    ],
  },

  // ============================================================================
  // EDUCACIÓN ARTÍSTICA (MÚSICA Y PLÁSTICA) · 4 UNIDADES COMPLETAS
  // ============================================================================
  {
    id: 'notes-art-u1',
    subject: 'artistica',
    subjectName: 'Educación Artística: Música y Plástica',
    trimester: '1º Trimestre',
    unitNumber: 'Unidad 1',
    title: 'Lenguaje Musical: El Pentagrama, las Notas y el Valor de las Figuras',
    quickSummary:
      'Dominamos el pentagrama (5 líneas y 4 espacios), la clave de Sol y las equivalencias matemáticas de las figuras musicales (redonda, blanca, negra, corchea y semicorchea).',
    detailedNotes: [
      {
        heading: '1. El Pentagrama, la Clave de Sol y las 7 Notas Musicales',
        points: [
          'El PENTAGRAMA ("penta" = 5, "grama" = línea) tiene 5 líneas y 4 espacios que se cuentan siempre de ABAJO ARRIBA.',
          'La CLAVE DE SOL se dibuja empezando en la 2ª línea del pentagrama. Eso significa que cualquier nota colocada en la 2ª línea se llama SOL.',
          'Notas en las 5 líneas (de abajo arriba): MI (1ª) - SOL (2ª) - SI (3ª) - RE (4ª) - FA (5ª). Notas en los 4 espacios: FA (1º) - LA (2º) - DO (3º) - MI (4º).',
        ],
      },
      {
        heading: '2. Duración de las Figuras Musicales y sus Silencios',
        points: [
          'REDONDA: Dura 4 pulsos (tiempos). Su silencio cuelga debajo de la 4ª línea.',
          'BLANCA: Dura 2 pulsos (la mitad de una redonda). Su silencio se apoya encima de la 3ª línea (como un sombrero).',
          'NEGRA: Dura 1 pulso. Es la unidad de tiempo básica.',
          'CORCHEA: Dura medio pulso (0,5 tiempos). Dos corcheas unidas (ti-ti) duran 1 pulso igual que 1 negra.',
          'SEMICORCHEA: Dura un cuarto de pulso (0,25 tiempos). Cuatro semicorcheas juntas duran 1 pulso.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-art-1',
        title: 'Tabla de Equivalencias Rítmicas Musicales',
        formulaExpression: '1 Redonda (4) = 2 Blancas (2+2) = 4 Negras (1+1+1+1) = 8 Corcheas = 16 Semicorcheas',
        explanation: 'El PUNTILLO colocado a la derecha de una figura le suma la MITAD de su valor (ej. Blanca con puntillo = 2 + 1 = 3 tiempos).',
        exampleCalculation: 'Blanca (2) + Negra (1) + 2 Corcheas (0,5 + 0,5) = 4 tiempos en total',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Suma los tiempos de un compás con 1 Blanca, 1 Negra y 2 Corcheas',
        problemOrQuestion: 'Calcula cuántos tiempos suma el grupo rítmico y a qué compás pertenece.',
        stepByStepSolution: [
          '1º Blanca = 2 tiempos.',
          '2º Negra = 1 tiempo.',
          '3º Dos corcheas = 0,5 + 0,5 = 1 tiempo.',
          '4º Suma total: 2 + 1 + 1 = 4 tiempos.',
        ],
        finalResult: 'Suma 4 tiempos (Compás cuaternario de 4/4).',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-art1-1',
        question: '¿Cuántos tiempos dura una BLANCA CON PUNTILLO?',
        options: ['3 tiempos (2 de la blanca + 1 del puntillo)', '2 tiempos y medio', '4 tiempos'],
        correctAnswer: '3 tiempos (2 de la blanca + 1 del puntillo)',
        explanation: 'El puntillo añade siempre la mitad del valor de la figura que acompaña: la mitad de 2 es 1 → 2 + 1 = 3 tiempos.',
      },
    ],
    examTips: [
      'Truco del sombrero para los silencios: el silencio de BLANCA parece un sombrero bien puesto (encima de la 3ª línea) y el de REDONDA un sombrero boca abajo (debajo de la 4ª línea).',
    ],
  },
  {
    id: 'notes-art-u2',
    subject: 'artistica',
    subjectName: 'Educación Artística: Música y Plástica',
    trimester: '2º Trimestre',
    unitNumber: 'Unidad 2',
    title: 'Compases, Cualidades del Sonido y Familias de Instrumentos',
    quickSummary:
      'Entendemos los compases de 2/4, 3/4 y 4/4, las 4 cualidades del sonido (Altura, Duración, Intensidad y Timbre) y las 3 familias de instrumentos musicales (Cuerda, Viento y Percusión) con especial atención a las bandas valencianas.',
    detailedNotes: [
      {
        heading: '1. Las 4 Cualidades del Sonido',
        points: [
          '1. ALTURA (Tono): Distingue sonidos AGUDOS o GRAVES. Se representa con las notas en el pentagrama.',
          '2. DURACIÓN: Distingue sonidos LARGOS o CORTOS. Se representa con las figuras musicales (redonda, blanca, negra...).',
          '3. INTENSIDAD (Volumen): Distingue sonidos FUERTES (f = forte) o SUAVES (p = piano).',
          '4. TIMBRE: Es la "voz" propia que nos permite distinguir qué instrumento o persona está sonando aunque toquen la misma nota.',
        ],
      },
      {
        heading: '2. Las 3 Familias de Instrumentos y la Música en la Comunitat Valenciana',
        points: [
          'CUERDA: Frotada (violín, viola, violonchelo, contrabajo), Pulsada (guitarra, arpa) y Percutida (piano).',
          'VIENTO: Viento-Madera (flauta travesera, clarinete, oboe, fagot, saxofón y nuestra tradicional DOLÇAINA) y Viento-Metal (trompeta, trombón, trompa, tuba).',
          'PERCUSIÓN: De altura determinada (xilófono, metalófono, timbales) e indeterminada (tambor, bombo, platillos, triángulo y el TABALET valenciano).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-art-2',
        title: 'Significado de los Compases 2/4, 3/4 y 4/4',
        formulaExpression: '2/4 (Binario) = 2 negras por compás  |  3/4 (Ternario) = 3 negras por compás  |  4/4 (Cuaternario) = 4 negras por compás',
        explanation: 'Las líneas verticales que separan un compás de otro en el pentagrama se llaman LÍNEAS DIVISORIAS.',
        exampleCalculation: 'En un compás de 3/4 caben exactamente 3 negras, o 1 blanca + 1 negra, o 6 corcheas.',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Clasifica el Clarinete, el Violonchelo y el Piano',
        problemOrQuestion: 'Indica a qué familia y subfamilia pertenece cada instrumento.',
        stepByStepSolution: [
          '1º Clarinete → Tiene lengüeta de caña → Viento-Madera.',
          '2º Violonchelo → Se toca con arco → Cuerda Frotada.',
          '3º Piano → Al pulsar las teclas unos macillos golpean cuerdas interiores → Cuerda Percutida.',
        ],
        finalResult: 'Clarinete (Viento-Madera), Violonchelo (Cuerda Frotada) y Piano (Cuerda Percutida).',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-art2-1',
        question: '¿A qué familia pertenece el SAXOFÓN aunque su cuerpo esté hecho de metal dorado?',
        options: ['A Viento-Madera (porque su boquilla funciona con una caña o lengüeta de madera como el clarinete)', 'A Cuerda pulsada', 'A Percusión'],
        correctAnswer: 'A Viento-Madera (porque su boquilla funciona con una caña o lengüeta de madera como el clarinete)',
        explanation: '¡Pregunta clásica de examen! Tanto la flauta travesera como el saxofón pertenecen a Viento-Madera.',
      },
    ],
    examTips: [
      'En la Comunitat Valenciana tenemos una enorme tradición de Sociedades Musicales (bandas de música) y la pareja tradicional de instrumentos populares es "la dolçaina i el tabalet".',
    ],
  },
  {
    id: 'notes-art-u3',
    subject: 'artistica',
    subjectName: 'Educación Artística: Música y Plástica',
    trimester: '3º Trimestre',
    unitNumber: 'Unidad 3',
    title: 'Plástica y Visual: Teoría del Color, Simetría y Joaquín Sorolla',
    quickSummary:
      'Estudiamos los colores primarios y cómo mezclarlos para obtener los secundarios, la diferencia entre gama cálida y gama fría, la simetría axial y la pintura luminista de Joaquín Sorolla.',
    detailedNotes: [
      {
        heading: '1. Colores Primarios, Secundarios y Complementarios',
        points: [
          'COLORES PRIMARIOS (no se pueden obtener mezclando otros): Magenta (Rojo), Cian (Azul) y Amarillo.',
          'COLORES SECUNDARIOS (mezcla de dos primarios a partes iguales): Amarillo + Cian = VERDE · Amarillo + Magenta = NARANJA · Magenta + Cian = VIOLETA (Morado).',
          'Gama CÁLIDA (transmiten calor, luz y energía): amarillos, naranjas y rojos. Gama FRÍA (transmiten calma, agua y frescor): azules, verdes y violetas.',
        ],
      },
      {
        heading: '2. Grandes Artistas Valencianos: Joaquín Sorolla ("El Pintor de la Luz")',
        points: [
          'JOAQUÍN SOROLLA (nacido en Valencia en 1863): Es el pintor más famoso de la luz del Mediterráneo. Pintaba al aire libre en las playas de Valencia (como la Malvarrosa y el Cabanyal) con pinceladas rápidas llenas de blancos luminosos, azules y violetas.',
          'Obras famosas: *Paseo a orillas del mar*, *Niños en la playa* y *La vuelta de la pesca*.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-art-3',
        title: 'Fórmulas de Mezcla de Colores',
        formulaExpression: 'Amarillo + Azul (Cian) = VERDE   |   Amarillo + Rojo (Magenta) = NARANJA   |   Rojo + Azul = VIOLETA',
        explanation: 'Si añadimos BLANCO a un color aumentamos su luminosidad (tono pastel); si añadimos NEGRO lo oscurecemos.',
        exampleCalculation: 'Los colores cálidos avanzan hacia el espectador; los colores fríos dan sensación de lejanía.',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: ¿Cómo pintarías un atardecer cálido y el mar en calma?',
        problemOrQuestion: 'Elige la gama cromática adecuada para cada zona del cuadro.',
        stepByStepSolution: [
          '1º Para el sol y el atardecer usamos la gama CÁLIDA (amarillo, naranja, rojo).',
          '2º Para el agua profunda del mar usamos la gama FRÍA (azul cian, verde esmeralda, violeta).',
        ],
        finalResult: 'Gama cálida para el cielo al atardecer y gama fría para el mar.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-art3-1',
        question: '¿Qué color secundario obtenemos al mezclar AMARILLO y AZUL CIAN?',
        options: ['Verde', 'Naranja', 'Violeta'],
        correctAnswer: 'Verde',
        explanation: 'Amarillo + Azul = Verde · Amarillo + Rojo = Naranja · Rojo + Azul = Violeta.',
      },
    ],
    examTips: [
      'Recuerda qué es la SIMETRÍA AXIAL: cuando una línea recta central (Eje de Simetría) divide una figura en dos mitades exactamente iguales como si se miraran en un espejo.',
    ],
  },
  {
    id: 'notes-art-u4',
    subject: 'artistica',
    subjectName: 'Educación Artística: Música y Plástica',
    trimester: '3º Trimestre',
    unitNumber: 'Unidad 4',
    title: 'Volumen, Perspectiva, Cómic y Lenguaje Audiovisual',
    quickSummary:
      'Aprendemos cómo crear sensación de profundidad (perspectiva y superposición), la diferencia entre formas planas (2D) y esculturas con volumen (3D) y los elementos del cómic (viñetas, bocadillos y onomatopeyas).',
    detailedNotes: [
      {
        heading: '1. Cómo representar la Profundidad y el Volumen',
        points: [
          'Para que un dibujo plano parezca tener profundidad (3D) usamos tres trucos: 1º TAMAÑO (lo cercano se dibuja grande y lo lejano pequeño), 2º SUPERPOSICIÓN (lo que está delante tapa parcialmente a lo que está detrás) y 3º CLAROSCURO (luces y sombras).',
        ],
      },
      {
        heading: '2. El Lenguaje del Cómic',
        points: [
          'VIÑETA: Cada uno de los recuadros que componen la historieta (se leen de izquierda a derecha y de arriba abajo).',
          'BOCADILLO o GLOBO: Espacio donde se escribe lo que dicen o piensan los personajes. El rabillo o delta apunta a quien habla (si tiene burbujitas como una nube, significa que el personaje está pensando).',
          'ONOMATOPEYA: Palabra que imita un sonido real (¡BUM!, ¡CRASH!, ¡ZAS!, ¡RING!).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-art-4',
        title: 'Tipos de Bocadillos en el Cómic',
        formulaExpression: 'Línea normal = Habla  |  Nube con burbujas = Piensa  |  Puntas de estrella = Grita  |  Línea discontinua = Susurra',
        explanation: 'La forma del contorno del bocadillo expresa el volumen y la intención de la voz del personaje.',
        exampleCalculation: 'Un bocadillo con picos y letras grandes "¡SOCORRO!" indica un grito.',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Diseña una viñeta donde un personaje piensa en silencio',
        problemOrQuestion: '¿Qué tipo de bocadillo debes dibujar?',
        stepByStepSolution: [
          '1º Dibujamos el contorno en forma de nube redondeada.',
          '2º En lugar de un rabillo en punta hacia la boca, dibujamos pequeños circulitos (burbujas) hacia la cabeza.',
        ],
        finalResult: 'Bocadillo de pensamiento en forma de nube con burbujas.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-art4-1',
        question: '¿Cómo se llaman en un cómic palabras como "¡CRASH!", "¡SPLASH!" o "¡TOC, TOC!" que imitan ruidos?',
        options: ['Onomatopeyas', 'Acotaciones', 'Metáforas'],
        correctAnswer: 'Onomatopeyas',
        explanation: 'Las onomatopeyas son palabras que imitan visual y fonéticamente los sonidos de la realidad.',
      },
    ],
    examTips: [
      'Recuerda: una pintura o dibujo tiene 2 dimensiones (alto y ancho), mientras que una escultura o edificio tiene 3 dimensiones (alto, ancho y profundidad/volumen).',
    ],
  },

  // ============================================================================
  // EDUCACIÓN FÍSICA Y SALUD · 2 UNIDADES COMPLETAS (INCLUYE PILOTA VALENCIANA)
  // ============================================================================
  {
    id: 'notes-ef-u1',
    subject: 'educacion-fisica',
    subjectName: 'Educación Física y Salud',
    trimester: '1º Trimestre',
    unitNumber: 'Unidad 1',
    title: 'El Calentamiento, las 4 Capacidades Físicas Básicas y Hábitos Saludables',
    quickSummary:
      'Aprendemos por qué es obligatorio calentar antes de hacer deporte, cómo medir las pulsaciones (frecuencia cardíaca), las 4 capacidades físicas básicas (F-R-V-F) y la higiene postural.',
    detailedNotes: [
      {
        heading: '1. El Calentamiento y sus 3 Fases Ordenadas',
        points: [
          'El CALENTAMIENTO es el conjunto de ejercicios suaves y progresivos que hacemos antes de practicar deporte para preparar músculos, articulaciones y corazón, evitando lesiones y mejorando el rendimiento.',
          'Fase 1 · Movilidad Articular: Giros suaves de tobillos, rodillas, cadera, hombros y cuello.',
          'Fase 2 · Activación Cardiovascular (Carrera suave): Trote continuo, desplazamientos laterales, talones al glúteo y rodillas arriba para subir pulsaciones.',
          'Fase 3 · Estiramientos dinámicos y juegos de activación.',
        ],
      },
      {
        heading: '2. Las 4 Capacidades Físicas Básicas (F-R-V-F)',
        points: [
          '1. FUERZA: Capacidad de vencer u oponerse a un peso o resistencia mediante la tensión muscular (ej. empujar, saltar, transportar).',
          '2. RESISTENCIA: Capacidad de mantener un esfuerzo físico durante mucho tiempo sin agotarse (ej. correr 15 minutos seguidos o ir en bici).',
          '3. VELOCIDAD: Capacidad de realizar un movimiento o recorrer una distancia en el menor tiempo posible (ej. un sprint de 30 metros).',
          '4. FLEXIBILIDAD: Capacidad de estirar los músculos y lograr el máximo recorrido de las articulaciones sin hacerse daño.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-ef-1',
        title: 'Cómo medir la Frecuencia Cardíaca (Pulsaciones por minuto)',
        formulaExpression: 'Pulsaciones en 6 segundos × 10 = Pulsaciones por minuto (ppm)   |   O bien: Pulsaciones en 15 segundos × 4',
        explanation: 'En reposo un niño de 5º de Primaria suele tener entre 70 y 90 ppm; al correr sube a 140–180 ppm.',
        exampleCalculation: 'Si cuentas 15 latidos en 6 segundos después de correr: 15 × 10 = 150 ppm.',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Regla del peso máximo de la mochila escolar',
        problemOrQuestion: 'Para cuidar la columna vertebral, el peso de la mochila nunca debe superar el 10% del peso corporal. Si un alumno pesa 40 kg, ¿cuánto debe pesar como máximo su mochila?',
        stepByStepSolution: [
          '1º Calculamos el 10% de 40 kg dividiendo entre 10: 40 ÷ 10 = 4 kg.',
          '2º Además, debe llevarse siempre colgada de los DOS hombros y bien pegada a la espalda.',
        ],
        finalResult: 'Máximo 4 kg de peso y colgada de ambos hombros.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-ef1-1',
        question: '¿Qué capacidad física básica estamos trabajando principalmente cuando corremos a ritmo suave durante 12 minutos sin parar?',
        options: ['La Resistencia', 'La Velocidad de reacción', 'La Flexibilidad estática'],
        correctAnswer: 'La Resistencia',
        explanation: 'Mantener un esfuerzo prolongado en el tiempo trabajando el corazón y los pulmones desarrolla la Resistencia.',
      },
    ],
    examTips: [
      'Al terminar la clase de Educación Física hacemos siempre la VUELTA A LA CALMA (estiramientos suaves y respiración) para que las pulsaciones bajen poco a poco.',
    ],
  },
  {
    id: 'notes-ef-u2',
    subject: 'educacion-fisica',
    subjectName: 'Educación Física y Salud',
    trimester: '2º Trimestre',
    unitNumber: 'Unidad 2',
    title: 'L\'Esport Autòcton: La Pilota Valenciana i els Esports Col·lectius',
    quickSummary:
      'Conocemos el deporte tradicional propio de la Comunitat Valenciana (la Pilota Valenciana), sus modalidades (Raspall, Escala i Corda, Galotxa), cómo se puntúa (15, 30, Val y Joc) y el reglamento de los deportes de equipo.',
    detailedNotes: [
      {
        heading: '1. La Pilota Valenciana: Puntuación y Vocabulario Tradicional',
        points: [
          'En la Pilota Valenciana se golpea la pelota con la mano (protegida con esparadrapo y dedales o *tesamoll*). El recinto cerrado tradicional donde se juega se llama TRINQUET (que tiene escaleras laterales donde se sienta el público y una cuerda en el centro).',
          '¿Cómo se cuentan los puntos en un juego? Se cuenta de cuatro en cuatro tantos: 1º punto = QUINZE (15) · 2º punto = TRENTA (30) · 3º punto = VAL · 4º punto = JOC (Juego ganado). Si empatan a 30 o a Val, se dice "A DOS".',
        ],
      },
      {
        heading: '2. Las Grandes Modalidades: Raspall vs. Escala i Corda',
        points: [
          'RASPALL: Se llama así porque el jugador tiene que "raspar" el suelo con los dedos para levantar la pelota. La pelota PUEDE dar varios botes y rodar por el suelo sin perder el punto.',
          'ESCALA I CORDA: Hay una cuerda alta en mitad del trinquet. La pelota tiene que pasar SIEMPRE por encima de la cuerda (sin tocarla ni pasar por debajo) y solo puede dar como máximo UN bote en el suelo (si bota en las escaleras laterales del trinquet, no cuenta como bote de suelo).',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-ef-2',
        title: 'Marcador Oficial de la Pilota Valenciana',
        formulaExpression: '1r punt: QUINZE (15)  →  2n punt: TRENTA (30)  →  3r punt: VAL  →  4t punt: JOC!',
        explanation: 'Antes de sacar, el jugador avisa al equipo contrario gritando "¿Va de bo!" (¡Va de verdad!).',
        exampleCalculation: 'En Raspall la pelota puede rodar por el suelo; en Escala i Corda pasa por encima de la cuerda con máximo 1 bote.',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: Un equipo lleva 30 puntos y gana un tanto más. ¿Cómo va el marcador?',
        problemOrQuestion: 'Indica cómo se canta ese tercer punto en Pilota Valenciana.',
        stepByStepSolution: [
          '1º El primer tanto es 15 (Quinze) y el segundo es 30 (Trenta).',
          '2º El tercer tanto antes de cerrar el Joc se llama VAL.',
        ],
        finalResult: 'El equipo pasa a tener "VAL" (a un solo punto de ganar el Joc).',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-ef2-1',
        question: '¿En qué modalidad de Pilota Valenciana está permitido que la pelota dé varios botes y ruede por el suelo?',
        options: ['En el Raspall', 'En Escala i Corda', 'En ninguna modalidad'],
        correctAnswer: 'En el Raspall',
        explanation: 'En el Raspall la pelota puede botar más de una vez y rodar por el suelo, raspando el pavimento con la mano.',
      },
    ],
    examTips: [
      'Recuerda también la Conducta PAS en primeros auxilios deportivos: 1º PROTEGER el lugar, 2º AVISAR al profesor o al 112 y 3º SOCORRER al compañero.',
    ],
  },

  // ============================================================================
  // VALORES CÍVICOS Y ÉTICOS · 2 UNIDADES COMPLETAS DE 5º DE PRIMARIA
  // ============================================================================
  {
    id: 'notes-valciv-u1',
    subject: 'valores',
    subjectName: 'Valores Cívicos y Éticos',
    trimester: '1º Trimestre',
    unitNumber: 'Unidad 1',
    title: 'Inteligencia Emocional, Empatía, Convivencia y Mediación Escolar',
    quickSummary:
      'Aprendemos a identificar y regular nuestras emociones, a practicar la empatía y la comunicación asertiva (ni agresiva ni pasiva) y a resolver conflictos en el colegio mediante la mediación.',
    detailedNotes: [
      {
        heading: '1. Empatía y los 3 Estilos de Comunicación',
        points: [
          'La EMPATÍA es la capacidad de ponernos en el lugar de otra persona para comprender cómo se siente y por qué actúa así, aunque pensemos diferente.',
          'Estilo PASIVO: Callarse lo que uno siente por miedo y dejar que otros decidan siempre.',
          'Estilo AGRESIVO: Imponer nuestra opinión gritando, insultando o faltando al respeto.',
          'Estilo ASERTIVO (El ideal): Expresar lo que sentimos y necesitamos con calma, educación y respeto hacia los demás ("Entiendo tu idea, pero a mí me gustaría que turnáramos el balón").',
        ],
      },
      {
        heading: '2. Prevención del Acoso Escolar (No seas espectador pasivo)',
        points: [
          'Ante cualquier situación de burla, exclusión o acoso escolar (bullying o ciberbullying), nunca debemos reír la gracia ni quedarnos callados: debemos apoyar al compañero y avisar inmediatamente a los profesores o a nuestra familia.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-valciv-1',
        title: 'Fórmula de la Comunicación Asertiva y Mediación',
        formulaExpression: '1º Escucha activa sin interrumpir  →  2º "Yo me siento... cuando..."  →  3º Buscar un acuerdo justo para todos',
        explanation: 'Un MEDIADOR escolar no es un juez que castiga, sino un compañero neutral que ayuda a que las dos partes se escuchen y lleguen a un acuerdo.',
        exampleCalculation: 'Comportamiento Asertivo = Respeto mis propios derechos + Respeto los derechos de mis compañeros.',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo Práctico: Dos grupos quieren usar la misma pista del patio a la vez',
        problemOrQuestion: '¿Cuál es la solución cívica y asertiva?',
        stepByStepSolution: [
          '1º Evitamos discutir o quitar la pista por la fuerza (estilo agresivo).',
          '2º Dialogamos y proponemos compartir la pista jugando juntos o dividir el tiempo del recreo en dos mitades iguales de 15 minutos.',
        ],
        finalResult: 'Acuerdo cooperativo por turnos o juego compartido.',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-vc1-1',
        question: '¿Cómo se llama la forma de comunicarse en la que defendemos nuestros derechos con educación y calma, sin gritar ni quedarnos callados?',
        options: ['Comunicación Asertiva', 'Comunicación Agresiva', 'Comunicación Pasiva'],
        correctAnswer: 'Comunicación Asertiva',
        explanation: 'La asertividad es el punto de equilibrio sano entre la pasividad y la agresividad.',
      },
    ],
    examTips: [
      'Recuerda siempre la diferencia entre simpatía (caer bien) y EMPATÍA (ponerse en la piel del otro y comprender sus sentimientos).',
    ],
  },
  {
    id: 'notes-valciv-u2',
    subject: 'valores',
    subjectName: 'Valores Cívicos y Éticos',
    trimester: '2º Trimestre',
    unitNumber: 'Unidad 2',
    title: 'Derechos de la Infancia, Sostenibilidad (3R y ODS) y Ciudadanía Digital',
    quickSummary:
      'Conocemos los Derechos Fundamentales de la Infancia (ONU), los 17 Objetivos de Desarrollo Sostenible (Agenda 2030), el reciclaje correcto y las reglas de oro de la seguridad en Internet.',
    detailedNotes: [
      {
        heading: '1. Sostenibilidad Ambiental y Separación de Residuos',
        points: [
          'Regla de las 3R en orden de prioridad: 1º REDUCIR (consumir solo lo necesario y evitar plásticos de un solo uso), 2º REUTILIZAR (usar cantimplora recargable, aprovechar hojas por las dos caras) y 3º RECICLAR.',
          'Colores de los contenedores: AMARILLO (envases de plástico, latas y briks), AZUL (papel y cartón), VERDE IGLÚ (vidrio: botellas y tarros, ¡nunca vasos rotos ni espejos!) y MARRÓN (materia orgánica para compost).',
        ],
      },
      {
        heading: '2. Seguridad Digital y Netiqueta',
        points: [
          'PRIVACIDAD: Nunca compartas en redes o juegos online tus datos personales (nombre completo, dirección en Museros, teléfono, contraseñas o colegio) con desconocidos.',
          'NETIQUETA: Trata a los demás en Internet con el mismo respeto y educación con que los tratas cara a cara en clase.',
        ],
      },
    ],
    importantFormulas: [
      {
        id: 'f-valciv-2',
        title: 'Guía Rápida de Contenedores de Reciclaje',
        formulaExpression: 'Amarillo = Plástico, Latas y Briks  |  Azul = Papel y Cartón  |  Verde = Botellas de Vidrio  |  Marrón = Orgánico',
        explanation: 'Un brik de leche o zumo SIEMPRE va al contenedor AMARILLO (porque tiene capas de plástico y aluminio), nunca al azul.',
        exampleCalculation: 'Botella de agua → Amarillo · Caja de cereales de cartón → Azul · Piel de plátano → Marrón.',
      },
    ],
    workedExamples: [
      {
        title: 'Ejemplo de Examen: ¿En qué contenedor va un brik de zumo vacío y una lata de atún?',
        problemOrQuestion: 'Indica el contenedor correcto para ambos residuos.',
        stepByStepSolution: [
          '1º Aunque el brik parezca cartón por fuera, es un envase mixto con plástico y aluminio.',
          '2º Tanto los briks como las latas metálicas y botellas de plástico van al contenedor AMARILLO.',
        ],
        finalResult: 'Ambos van al contenedor AMARILLO (envases).',
      },
    ],
    quickQuiz: [
      {
        id: 'qq-vc2-1',
        question: '¿A qué contenedor debemos tirar un BRIK de leche o de zumo?',
        options: ['Al contenedor AMARILLO (envases de plástico, latas y briks)', 'Al contenedor azul de papel', 'Al contenedor verde de vidrio'],
        correctAnswer: 'Al contenedor AMARILLO (envases de plástico, latas y briks)',
        explanation: 'Los briks contienen plástico y aluminio además de cartón, por lo que son envases ligeros y van al contenedor amarillo.',
      },
    ],
    examTips: [
      'En las 3R, recuerda siempre cuál es la primera y más importante: REDUCIR (porque el mejor residuo es el que no llega a fabricarse).',
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

  // ==========================================
  // GLOSARIO DE LENGUA CASTELLANA, VALENCIÀ, MÚSICA, E. FÍSICA Y VALORES
  // ==========================================
  {
    id: 'glos-len-acentuacion',
    term: 'Palabras Agudas, Llanas y Esdrújulas (Regla N-S-Vocal)',
    subject: 'lengua',
    subjectLabel: 'Lengua Castellana',
    subCategory: 'Ortografía, Sintaxis y Literatura',
    clearDefinition:
      'Clasificación de las palabras según la posición de su sílaba tónica (la que suena más fuerte): AGUDA (última sílaba), LLANA (penúltima sílaba) y ESDRÚJULA (antepenúltima sílaba).',
    example:
      'Aguda con tilde: "ca-mión" (acaba en -n). Llana con tilde: "ár-bol" (acaba en -l). Esdrújula: "mú-si-ca" (siempre lleva tilde).',
    memoryTrickOrFormula:
      'Agudas llevan tilde si acaban en N, S o Vocal · Llanas llevan tilde si NO acaban en N, S o Vocal · Esdrújulas SIEMPRE.',
    visualIconType: 'math-problem-steps',
  },
  {
    id: 'glos-len-diptongo-hiato',
    term: 'Diptongo e Hiato (Vocales Fuertes A-E-O y Débiles I-U)',
    subject: 'lengua',
    subjectLabel: 'Lengua Castellana',
    subCategory: 'Ortografía, Sintaxis y Literatura',
    clearDefinition:
      'Un DIPTONGO es la unión de dos vocales en la misma sílaba (ej. cie-lo, ciu-dad). Un HIATO es la separación de dos vocales seguidas en sílabas distintas porque las dos son fuertes (te-a-tro) o porque la débil lleva tilde (Ma-rí-a, ba-úl).',
    example:
      '"Ciu-dad" y "rei-na" tienen diptongo (no se separan). "Po-e-ta" y "bú-ho" tienen hiato (sí se separan).',
    memoryTrickOrFormula:
      'Vocales Fuertes = A, E, O · Vocales Débiles = I, U. Si la débil suena fuerte, lleva tilde siempre (í, ú) y rompe el diptongo.',
    visualIconType: 'eng-comparative',
  },
  {
    id: 'glos-len-sujeto-predicado',
    term: 'Sujeto y Predicado (Análisis Sintáctico)',
    subject: 'lengua',
    subjectLabel: 'Lengua Castellana',
    subCategory: 'Ortografía, Sintaxis y Literatura',
    clearDefinition:
      'Las dos partes fundamentales de toda oración. El SUJETO es la persona, animal o cosa que realiza la acción del verbo (su núcleo es un sustantivo o pronombre), y el PREDICADO es lo que hace o se dice del sujeto (su núcleo es siempre el verbo).',
    example:
      'En "[Los niños de 5º] [juegan en el patio]": Sujeto = "Los niños de 5º" (Núcleo: niños) · Predicado = "juegan en el patio" (Núcleo: juegan).',
    memoryTrickOrFormula:
      '1º Busca el Verbo → 2º Pregunta ¿Quién/Quiénes + verbo? = Sujeto → 3º Todo lo demás (incluido el verbo) = Predicado.',
    visualIconType: 'lengua-sintaxis',
  },
  {
    id: 'glos-val-apostrof',
    term: 'L\'Apostrofació (l\', d\') i les Contraccions (al, del, pel)',
    subject: 'valencia',
    subjectLabel: 'Valencià: Llengua i Literatura',
    subCategory: 'Valencià i Cultura',
    clearDefinition:
      'En valencià, els articles EL i LA i la preposició DE s\'apostrofen (l\', d\') davant de paraula que comence per vocal o h muda, excepte LA davant de paraula femenina que comence per i/u àtones (la universitat, la història).',
    example:
      'l\'escola, l\'horta de Museros, l\'amic, d\'estiu; però sense apòstrof: la universitat, la història, la idea, la una.',
    memoryTrickOrFormula:
      'LA + i/u àtona = LA (sense apòstrof)  |  A/DE/PER + l\' = a l\', de l\', per l\' (l\'apòstrof guanya a la contracció).',
    visualIconType: 'valencia-apostrof',
  },
  {
    id: 'glos-val-ela-geminada',
    term: 'Ela Geminada (L·L), Dígraf NY i Accents Oberts (`) / Tancats (´)',
    subject: 'valencia',
    subjectLabel: 'Valencià: Llengua i Literatura',
    subCategory: 'Valencià i Cultura',
    clearDefinition:
      'Grafies característiques del valencià: la L·L (amb punt volat al mig) sona com dos eles (col·legi, novel·la); el dígraf NY equival al so de la ñ castellana (muntanya); i l\'accent obert (`) s\'usa sempre en la À i en È/Ò obertes.',
    example:
      'El nostre col·legi està prop de la muntanya i de la platja. Demà tindrem classe de música i valencià.',
    memoryTrickOrFormula:
      'La A sempre porta accent obert (À)  |  La I i la U sempre porten accent tancat (Í, Ú).',
    visualIconType: 'valencia-apostrof',
  },
  {
    id: 'glos-art-figuras-color',
    term: 'Figuras Musicales (Redonda, Blanca, Negra, Corchea) y Teoría del Color',
    subject: 'artistica',
    subjectLabel: 'Educación Artística',
    subCategory: 'Música, Arte, Deporte y Valores',
    clearDefinition:
      'En Música, las figuras indican la duración del sonido: Redonda (4 tiempos), Blanca (2), Negra (1) y Corchea (1/2). En Plástica, los colores primarios son Amarillo, Magenta (Rojo) y Cian (Azul), y su mezcla crea los secundarios (Verde, Naranja y Violeta).',
    example:
      'En un compás de 4/4 caben 1 blanca (2) + 1 negra (1) + 2 corcheas (0,5+0,5) = 4 tiempos.',
    memoryTrickOrFormula:
      'Redonda = 4 · Blanca = 2 · Negra = 1 · Corchea = 0,5  |  Amarillo + Azul = Verde · Amarillo + Rojo = Naranja.',
    visualIconType: 'musica-figuras',
  },
  {
    id: 'glos-ef-pilota-capacidades',
    term: 'Capacidades Físicas Básicas y Pilota Valenciana (Trinquet i Raspall)',
    subject: 'educacion-fisica',
    subjectLabel: 'Educación Física y Salud',
    subCategory: 'Música, Arte, Deporte y Valores',
    clearDefinition:
      'Las 4 Capacidades Físicas Básicas son Fuerza, Resistencia, Velocidad y Flexibilidad. Nuestro deporte autóctono es la Pilota Valenciana, que se juega en el trinquet o en la calle en modalidades como el Raspall y Escala i Corda.',
    example:
      'En la Pilota Valenciana los puntos de un juego se cuentan: Quinze (15), Trenta (30), Val y Joc.',
    memoryTrickOrFormula:
      '4 Capacidades: F-R-V-F (Fuerza, Resistencia, Velocidad, Flexibilidad)  |  Tanteo Pilota: 15 → 30 → Val → Joc.',
    visualIconType: 'ef-pilota',
  },
  {
    id: 'glos-valciv-empatia-3r',
    term: 'Empatía, Comunicación Asertiva y Regla de las 3R',
    subject: 'valores',
    subjectLabel: 'Valores Cívicos y Éticos',
    subCategory: 'Música, Arte, Deporte y Valores',
    clearDefinition:
      'La EMPATÍA es ponerse en el lugar del otro para comprender cómo se siente. La ASERTIVIDAD es expresar nuestras ideas con respeto y calma. Las 3R de la ecología son Reducir, Reutilizar y Reciclar.',
    example:
      'Reciclaje: los briks de leche, latas y botellas de plástico van al contenedor AMARILLO; el papel y cartón al AZUL; el vidrio al VERDE.',
    memoryTrickOrFormula:
      'Orden de las 3R: 1º Reducir → 2º Reutilizar → 3º Reciclar  |  Briks + Latas + Plástico = Contenedor Amarillo.',
    visualIconType: 'valores-convivencia',
  },
];
