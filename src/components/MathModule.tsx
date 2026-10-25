import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  Award,
  Sparkles,
  RefreshCw,
  ArrowRight,
  Calculator,
  Grid,
} from 'lucide-react';
import {
  MULTIPLICATION_TRICKS,
  MATH_WORD_PROBLEMS,
  MultiplicationTrick,
} from '../data/curriculumData';
import { SubjectStudyBook } from './SubjectStudyBook';

interface MathModuleProps {
  completedIds: string[];
  tableMastery: Record<number, number>; // table 2..9 -> count of correct answers
  unlockedBadges: string[];
  onRecordTableHit: (table: number, xp: number) => void;
  onCompleteProblem: (problemId: string, xp: number, badgeName: string) => void;
  onOpenGlossary?: () => void;
}

export const MathModule: React.FC<MathModuleProps> = ({
  completedIds,
  tableMastery,
  unlockedBadges,
  onRecordTableHit,
  onCompleteProblem,
  onOpenGlossary,
}) => {
  const [subTab, setSubTab] = useState<'tables' | 'problems' | 'notes'>('tables');

  // Multiplication Tables State
  const [selectedTableFilter, setSelectedTableFilter] = useState<number | 'hard'>(7);
  const [factorA, setFactorA] = useState<number>(7);
  const [factorB, setFactorB] = useState<number>(8);
  const [streak, setStreak] = useState<number>(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [tableStatus, setTableStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [showVisualDecomposition, setShowVisualDecomposition] = useState<boolean>(true);

  // Word Problems State
  const [selectedProblemIdx, setSelectedProblemIdx] = useState<number>(0);
  const [step1Selected, setStep1Selected] = useState<string | null>(null);
  const [step2Selected, setStep2Selected] = useState<string | null>(null);
  const [step3Input, setStep3Input] = useState<string>('');
  const [problemFeedback, setProblemFeedback] = useState<{
    status: 'idle' | 'solved' | 'review';
    message: string;
  }>({ status: 'idle', message: '' });

  const currentTrick: MultiplicationTrick =
    MULTIPLICATION_TRICKS.find((t) => t.table === factorA) || MULTIPLICATION_TRICKS[5];

  const correctAnswer = factorA * factorB;

  // Generate 4 smart multiple-choice options for current multiplication
  const answerChoices = React.useMemo(() => {
    const exact = factorA * factorB;
    const candidates = new Set<number>([
      exact,
      factorA * (factorB > 2 ? factorB - 1 : factorB + 1),
      factorA * (factorB < 9 ? factorB + 1 : factorB - 2),
      exact + (factorA % 2 === 0 ? 4 : 6),
    ]);
    return Array.from(candidates).sort((a, b) => a - b);
  }, [factorA, factorB]);

  const generateNextQuestion = (filterOverride?: number | 'hard') => {
    const activeFilter = filterOverride ?? selectedTableFilter;
    let nextA = 7;
    if (activeFilter === 'hard') {
      const hardTables = [6, 7, 8, 9];
      nextA = hardTables[Math.floor(Math.random() * hardTables.length)];
    } else {
      nextA = activeFilter;
    }
    const possibleB = [3, 4, 6, 7, 8, 9].filter((b) => b !== factorB);
    const nextB = possibleB[Math.floor(Math.random() * possibleB.length)] || 8;

    setFactorA(nextA);
    setFactorB(nextB);
    setSelectedChoice(null);
    setTableStatus('idle');
  };

  const handleSelectTableFilter = (val: number | 'hard') => {
    setSelectedTableFilter(val);
    generateNextQuestion(val);
  };

  const handleAnswerTableChoice = (choice: number) => {
    setSelectedChoice(choice);
    if (choice === correctAnswer) {
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      setTableStatus('correct');
      const bonusXp = nextStreak % 5 === 0 ? 35 : 15;
      onRecordTableHit(factorA, bonusXp);
    } else {
      setStreak(0);
      setTableStatus('wrong');
    }
  };

  // Word Problem Helpers
  const currentProblem = MATH_WORD_PROBLEMS[selectedProblemIdx] || MATH_WORD_PROBLEMS[0];

  const handleSelectProblem = (idx: number) => {
    setSelectedProblemIdx(idx);
    setStep1Selected(null);
    setStep2Selected(null);
    setStep3Input('');
    setProblemFeedback({ status: 'idle', message: '' });
  };

  const isStep1Correct =
    currentProblem.step1DataOptions.find((o) => o.id === step1Selected)?.isCorrect === true;

  const isStep2Correct =
    currentProblem.step2OperationOptions.find((o) => o.id === step2Selected)?.isCorrect ===
    true;

  const handleVerifyProblemSolution = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStep1Correct) {
      setProblemFeedback({
        status: 'review',
        message: 'Primero selecciona los datos correctos en el Paso 1.',
      });
      return;
    }
    if (!isStep2Correct) {
      setProblemFeedback({
        status: 'review',
        message: 'Revisa el Paso 2 y elige la operación adecuada antes de calcular el resultado.',
      });
      return;
    }
    const numericVal = parseInt(step3Input.trim(), 10);
    if (numericVal === currentProblem.correctAnswer) {
      setProblemFeedback({
        status: 'solved',
        message: `¡Problema resuelto! Respuesta: ${currentProblem.correctAnswer} ${currentProblem.answerUnit}. Has desbloqueado la insignia "${currentProblem.rewardBadgeName}" (+${currentProblem.rewardXp} XP).`,
      });
      onCompleteProblem(
        currentProblem.id,
        currentProblem.rewardXp,
        currentProblem.rewardBadgeName
      );
    } else {
      setProblemFeedback({
        status: 'review',
        message: `El número ${step3Input || '(vacío)'} no es exacto. Fíjate en el diagrama de barras y sigue la pista: ${currentProblem.stepByStepExplanation}`,
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Sub-header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E2E8F0]">
        <div>
          <div className="text-xs text-slate-500">
            <span>Matemáticas · 5º de Primaria</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Tablas Visuales y Problemas en 3 Pasos</span>
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] mt-1">
            Entrenador Gamificado de Matemáticas
          </h2>
        </div>

        <div className="flex items-center gap-1 p-1 bg-slate-200/75 rounded-lg self-start">
          <button
            type="button"
            onClick={() => setSubTab('tables')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
              subTab === 'tables'
                ? 'bg-white text-[#0F172A] shadow-xs'
                : 'text-slate-600 hover:text-[#0F172A]'
            }`}
          >
            1. Tablas de Multiplicar (2–9)
          </button>
          <button
            type="button"
            onClick={() => setSubTab('problems')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
              subTab === 'problems'
                ? 'bg-white text-[#0F172A] shadow-xs'
                : 'text-slate-600 hover:text-[#0F172A]'
            }`}
          >
            2. Problemas Guiados ({MATH_WORD_PROBLEMS.length})
          </button>
        </div>
      </div>

      {subTab === 'tables' ? (
        /* TWO-ZONE SANDBOX FOR MULTIPLICATION TABLES */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT STAGE (7 cols): Interactive Visual Matrix & Gamified Question */}
          <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 border-b border-slate-100 pb-4">
              <div>
                <span className="font-semibold text-[#0284C7]">
                  {selectedTableFilter === 'hard'
                    ? 'Modo Reto: Tablas del 6, 7, 8 y 9'
                    : `Practicando la Tabla del ${factorA}`}
                </span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Con descomposición visual</span>
              </div>
              <div className="font-mono font-semibold text-[#059669] tabular-nums">
                ● Racha actual: {streak} aciertos seguidos
              </div>
            </div>

            {/* Main Multiplication Prompt */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6">
              <div>
                <div className="text-xs font-medium text-slate-500">
                  ¿Cuánto es {factorA} grupos de {factorB}?
                </div>
                <div className="text-4xl sm:text-5xl font-mono font-bold text-[#0F172A] tracking-tight mt-1 tabular-nums">
                  {factorA} × {factorB} ={' '}
                  <span className="text-[#0284C7]">
                    {tableStatus === 'correct' ? correctAnswer : '?'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:w-64">
                {answerChoices.map((choice) => {
                  const isSelected = selectedChoice === choice;
                  const isRight = choice === correctAnswer;
                  let btnStyle =
                    'bg-white border-slate-300 text-[#0F172A] hover:border-[#0284C7]';
                  if (isSelected && tableStatus === 'correct' && isRight) {
                    btnStyle = 'bg-[#059669] border-[#059669] text-white';
                  } else if (isSelected && tableStatus === 'wrong' && !isRight) {
                    btnStyle = 'bg-[#DC2626] border-[#DC2626] text-white';
                  }

                  return (
                    <button
                      key={choice}
                      type="button"
                      onClick={() => handleAnswerTableChoice(choice)}
                      className={`py-3 px-4 rounded-lg border font-mono text-lg font-bold transition-colors tabular-nums whitespace-nowrap shrink-0 ${btnStyle}`}
                    >
                      {choice}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Immediate Feedback */}
            {tableStatus === 'correct' && (
              <div className="p-4 rounded-lg bg-[#059669]/10 border border-[#059669]/30 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0F172A]">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />
                  <span>
                    ● ¡Exacto! {factorA} × {factorB} = {correctAnswer}. Has sumado +
                    {streak % 5 === 0 ? 35 : 15} XP.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => generateNextQuestion()}
                  className="px-4 py-2 bg-[#059669] hover:bg-[#047857] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
                >
                  <span>Siguiente Multiplicación</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {tableStatus === 'wrong' && (
              <div className="p-4 rounded-lg bg-[#D97706]/10 border border-[#D97706]/30 text-sm space-y-1.5">
                <div className="font-bold text-[#D97706] flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>▲ FÍJATE EN EL TRUCO VISUAL PARA CALCULAR {factorA} × {factorB}:</span>
                </div>
                <p className="text-slate-700">
                  Si no recuerdas <strong>{factorA} × {factorB}</strong> de memoria, pártelo en dos trozos fáciles:{' '}
                  {factorA > 5 ? (
                    <span className="font-mono font-semibold text-[#0F172A]">
                      (5 × {factorB} = {5 * factorB}) + ({factorA - 5} × {factorB} ={' '}
                      {(factorA - 5) * factorB}) = {correctAnswer}
                    </span>
                  ) : (
                    <span className="font-mono font-semibold text-[#0F172A]">
                      ({factorA - 1} × {factorB} = {(factorA - 1) * factorB}) + {factorB} ={' '}
                      {correctAnswer}
                    </span>
                  )}
                </p>
              </div>
            )}

            {/* Interactive Visual Matrix Stage */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                  <Grid className="w-4 h-4 text-[#0284C7]" />
                  <span>
                    Visualizador Geométrico: {factorA} filas de {factorB} bloques
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowVisualDecomposition((prev) => !prev)}
                  className="text-xs font-medium text-[#0284C7] hover:underline whitespace-nowrap shrink-0"
                >
                  {showVisualDecomposition ? 'Ocultar bloques' : 'Mostrar bloques'}
                </button>
              </div>

              {showVisualDecomposition && (
                <div className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl space-y-4">
                  <div className="space-y-1.5">
                    {Array.from({ length: factorA }).map((_, rowIdx) => {
                      const isFirstFive = rowIdx < 5;
                      return (
                        <div key={rowIdx} className="flex items-center gap-2">
                          <span className="w-14 text-[11px] font-mono text-slate-500 tabular-nums">
                            Fila {rowIdx + 1}:
                          </span>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {Array.from({ length: factorB }).map((__, colIdx) => (
                              <span
                                key={colIdx}
                                className={`w-5 h-5 rounded-xs transition-transform ${
                                  isFirstFive
                                    ? 'bg-[#0284C7] text-white'
                                    : 'bg-[#059669] text-white'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-auto text-xs font-mono font-semibold text-slate-600 tabular-nums">
                            = {(rowIdx + 1) * factorB}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation of the 5-split decomposition */}
                  <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                    <div>
                      {factorA > 5 ? (
                        <span>
                          <strong className="text-[#0284C7]">■ 5 filas azules</strong> (5 ×{' '}
                          {factorB} = <strong>{5 * factorB}</strong>) +{' '}
                          <strong className="text-[#059669]">
                            ■ {factorA - 5} filas verdes
                          </strong>{' '}
                          ({factorA - 5} × {factorB} ={' '}
                          <strong>{(factorA - 5) * factorB}</strong>)
                        </span>
                      ) : (
                        <span>
                          Suma acumulada fila a fila hasta llegar a{' '}
                          <strong>
                            {factorA} × {factorB} = {correctAnswer}
                          </strong>
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => generateNextQuestion()}
                      className="text-xs font-semibold text-slate-700 hover:text-[#0F172A] flex items-center gap-1 whitespace-nowrap shrink-0"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Cambiar números</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT DECK (5 cols): Table Selector & Mnemonic Tricks */}
          <div className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-6">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#0F172A]">
                Selecciona la Tabla a Entrenar
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {[2, 3, 4, 5, 6, 7, 8, 9].map((t) => {
                  const hits = tableMastery[t] || 0;
                  const isSelected = selectedTableFilter === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => handleSelectTableFilter(t)}
                      className={`p-2.5 rounded-lg border text-center transition-colors ${
                        isSelected
                          ? 'bg-[#0284C7] border-[#0284C7] text-white'
                          : 'bg-white border-slate-200 text-[#0F172A] hover:border-slate-300'
                      }`}
                    >
                      <div className="text-sm font-bold whitespace-nowrap">Tabla {t}</div>
                      <div
                        className={`text-[11px] font-mono tabular-nums mt-0.5 ${
                          isSelected ? 'text-sky-100' : 'text-slate-500'
                        }`}
                      >
                        {hits} ★
                      </div>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => handleSelectTableFilter('hard')}
                className={`w-full py-2.5 px-4 rounded-lg border text-xs font-semibold transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0 ${
                  selectedTableFilter === 'hard'
                    ? 'bg-slate-900 border-slate-900 text-white'
                    : 'bg-slate-100 border-slate-200 text-[#0F172A] hover:bg-slate-200/70'
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#D97706]" />
                <span>Reto Especial: Las más difíciles (6, 7, 8 y 9)</span>
              </button>
            </div>

            {/* Secret Mnemonic Card for current table */}
            <div className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl space-y-3">
              <div className="text-xs font-semibold text-[#0284C7]">
                SUPERTRUCO MNEMOTÉCNICO DE LA TABLA DEL {currentTrick.table}
              </div>
              <h4 className="text-base font-bold text-[#0F172A]">
                {currentTrick.title}
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {currentTrick.shortRule}
              </p>
              <div className="p-3 bg-white border border-slate-200 rounded-lg font-mono text-xs font-semibold text-[#0F172A]">
                Ejemplo clave: {currentTrick.visualExample}
              </div>
              <div className="text-xs text-slate-600 pt-1">
                <strong className="text-[#059669]">Historia para recordar {currentTrick.keyTrapPair.a} × {currentTrick.keyTrapPair.b} = {currentTrick.keyTrapPair.answer}:</strong>{' '}
                {currentTrick.keyTrapPair.memoryStory}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* GUIDED 3-STEP WORD PROBLEMS SANDBOX */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT STAGE (7 cols): 3-Step Problem Solver */}
          <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 border-b border-slate-100 pb-4">
              <div>
                <span className="font-semibold text-[#0284C7]">
                  {currentProblem.contextLocation}
                </span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>{currentProblem.difficulty}</span>
              </div>
              <div className="font-mono font-semibold text-[#D97706] tabular-nums">
                ★ Recompensa: +{currentProblem.rewardXp} XP · {currentProblem.rewardBadgeName}
              </div>
            </div>

            {/* Problem Statement */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#0F172A]">
                {currentProblem.title}
              </h3>
              <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-base text-[#0F172A] leading-relaxed">
                {currentProblem.statement}
              </div>
            </div>

            {/* STEP 1: Identify Data */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0F172A]">
                  PASO 1 · ¿Qué datos nos da el problema?
                </span>
                {step1Selected && (
                  <span
                    className={`text-xs font-semibold ${
                      isStep1Correct ? 'text-[#059669]' : 'text-[#DC2626]'
                    }`}
                  >
                    {isStep1Correct ? '● Paso 1 Correcto' : '▲ Revisa los datos'}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                {currentProblem.step1DataOptions.map((opt) => {
                  const chosen = step1Selected === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setStep1Selected(opt.id)}
                      className={`w-full text-left p-3.5 rounded-lg border text-sm transition-colors flex items-center justify-between gap-3 ${
                        chosen
                          ? opt.isCorrect
                            ? 'bg-[#059669]/10 border-[#059669] text-[#0F172A] font-semibold'
                            : 'bg-[#DC2626]/10 border-[#DC2626] text-[#0F172A]'
                          : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {chosen && (
                        <span className="text-xs font-mono shrink-0">
                          {opt.isCorrect ? '✓ Correcto' : '✗ Incorrecto'}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Visual Proportional Bar Model (Always visible once Step 1 is explored) */}
            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg space-y-2.5">
              <div className="text-xs font-semibold text-slate-600">
                Esquema Visual de Barras ({currentProblem.visualBarModel.totalLabel}):
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {Array.from({ length: currentProblem.visualBarModel.partsCount }).map(
                  (_, idx) => (
                    <div
                      key={idx}
                      className="flex-1 min-w-[64px] py-2 px-2 bg-[#0284C7] text-white rounded-md text-center font-mono text-xs font-semibold tabular-nums"
                    >
                      <div>{currentProblem.visualBarModel.partLabel}</div>
                      <div>{currentProblem.visualBarModel.unitValue}</div>
                    </div>
                  )
                )}
                {currentProblem.visualBarModel.extraValue && (
                  <div className="py-2 px-3 bg-[#D97706] text-white rounded-md text-center font-mono text-xs font-semibold tabular-nums">
                    <div>{currentProblem.visualBarModel.extraLabel}</div>
                    <div>{currentProblem.visualBarModel.extraValue}</div>
                  </div>
                )}
              </div>
            </div>

            {/* STEP 2: Choose Operation */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0F172A]">
                  PASO 2 · ¿Qué operación resuelve el problema?
                </span>
                {step2Selected && (
                  <span
                    className={`text-xs font-semibold ${
                      isStep2Correct ? 'text-[#059669]' : 'text-[#DC2626]'
                    }`}
                  >
                    {isStep2Correct ? '● Operación Correcta' : '▲ Piensa qué hace cada operación'}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {currentProblem.step2OperationOptions.map((op) => {
                  const chosen = step2Selected === op.id;
                  return (
                    <button
                      key={op.id}
                      type="button"
                      onClick={() => setStep2Selected(op.id)}
                      className={`p-3.5 rounded-lg border text-left transition-colors ${
                        chosen
                          ? op.isCorrect
                            ? 'bg-[#059669]/10 border-[#059669]'
                            : 'bg-[#DC2626]/10 border-[#DC2626]'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-mono text-base font-bold text-[#0F172A] tabular-nums">
                        {op.operationLabel}
                      </div>
                      {chosen && (
                        <p className="text-xs text-slate-600 mt-1.5 leading-snug">
                          {op.reasoning}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: Final Calculation & Progressive Reward */}
            <form onSubmit={handleVerifyProblemSolution} className="space-y-3 pt-2 border-t border-slate-200">
              <label
                htmlFor="problem-answer-input"
                className="block text-xs font-bold text-[#0F172A]"
              >
                PASO 3 · Escribe el resultado numérico final ({currentProblem.answerUnit}):
              </label>
              <div className="flex flex-wrap items-center gap-3">
                <input
                  id="problem-answer-input"
                  type="number"
                  value={step3Input}
                  onChange={(e) => setStep3Input(e.target.value)}
                  placeholder="Ej. 78"
                  className="w-36 px-4 py-2.5 rounded-lg border border-slate-300 font-mono text-base font-bold text-[#0F172A] focus:outline-none focus:border-[#0284C7] tabular-nums"
                />
                <span className="text-sm text-slate-600 font-medium">
                  {currentProblem.answerUnit}
                </span>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Comprobar Solución</span>
                </button>
              </div>
            </form>

            {problemFeedback.status !== 'idle' && (
              <div
                className={`p-4 rounded-lg border text-sm space-y-1.5 ${
                  problemFeedback.status === 'solved'
                    ? 'bg-[#059669]/10 border-[#059669]/30'
                    : 'bg-[#D97706]/10 border-[#D97706]/30'
                }`}
              >
                <div className="font-bold flex items-center gap-2 text-[#0F172A]">
                  {problemFeedback.status === 'solved' ? (
                    <Award className="w-5 h-5 text-[#059669] shrink-0" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-[#D97706] shrink-0" />
                  )}
                  <span>{problemFeedback.message}</span>
                </div>
                {problemFeedback.status === 'solved' && (
                  <p className="text-xs text-slate-600">
                    Explicación completa: {currentProblem.stepByStepExplanation}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* RIGHT DECK (5 cols): Problems List & Progressive Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-[#0F172A]">
                  Cuaderno de Problemas (Museros)
                </h3>
                <span className="text-xs font-mono text-slate-500 tabular-nums">
                  {MATH_WORD_PROBLEMS.filter((p) => completedIds.includes(p.id)).length}/
                  {MATH_WORD_PROBLEMS.length} resueltos
                </span>
              </div>

              <div className="space-y-2.5">
                {MATH_WORD_PROBLEMS.map((prob, idx) => {
                  const isSelected = idx === selectedProblemIdx;
                  const isSolved = completedIds.includes(prob.id);
                  return (
                    <button
                      key={prob.id}
                      type="button"
                      onClick={() => handleSelectProblem(idx)}
                      className={`w-full text-left p-3.5 rounded-lg border transition-colors flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-[#0284C7]/8 border-[#0284C7]'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="text-xs text-slate-500">
                          <span>{prob.difficulty}</span>
                          <span className="mx-1.5" aria-hidden="true">·</span>
                          <span className="font-mono">+{prob.rewardXp} XP</span>
                        </div>
                        <div className="font-bold text-sm text-[#0F172A] truncate mt-0.5">
                          {prob.title}
                        </div>
                      </div>
                      <span className="text-xs font-mono shrink-0">
                        {isSolved ? (
                          <span className="text-[#059669] font-semibold">● Resuelto</span>
                        ) : (
                          <span className="text-slate-400">Resolver →</span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Progressive Rewards / Unlocked Badges */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-3">
              <h3 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D97706]" />
                <span>Insignias Matemáticas Desbloqueadas ({unlockedBadges.length})</span>
              </h3>
              <div className="space-y-2">
                {MATH_WORD_PROBLEMS.map((prob) => {
                  const earned = unlockedBadges.includes(prob.rewardBadgeName);
                  return (
                    <div
                      key={prob.id}
                      className={`p-3 rounded-lg border text-xs flex items-center justify-between ${
                        earned
                          ? 'bg-[#059669]/8 border-[#059669]/30 text-[#0F172A]'
                          : 'bg-slate-50 border-slate-200 text-slate-400'
                      }`}
                    >
                      <span className="font-semibold">{prob.rewardBadgeName}</span>
                      <span className="font-mono">
                        {earned ? '★ DESBLOQUEADA' : 'Bloqueada'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
