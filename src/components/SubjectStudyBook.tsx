import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  FileText,
  Calculator,
  Sparkles,
  CheckCircle2,
  Volume2,
  Award,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';
import { SubjectId } from '../data/curriculumData';
import {
  COMPLETE_STUDY_UNITS,
  StudyUnitNotes,
} from '../data/studyNotesAndGlossaryData';

interface SubjectStudyBookProps {
  subject: SubjectId;
  completedIds?: string[];
  onMarkUnitStudied: (unitId: string, xp: number) => void;
  onOpenGlossaryForSubject?: (
    subject: 'ingles' | 'matematicas' | 'conocimiento'
  ) => void;
}

export const SubjectStudyBook: React.FC<SubjectStudyBookProps> = ({
  subject,
  completedIds = [],
  onMarkUnitStudied,
  onOpenGlossaryForSubject,
}) => {
  const subjectUnits = React.useMemo(
    () => COMPLETE_STUDY_UNITS.filter((u) => u.subject === subject),
    [subject]
  );

  const [selectedUnitIdx, setSelectedUnitIdx] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    setSelectedUnitIdx(0);
    setQuizAnswers({});
  }, [subject]);

  const currentUnit: StudyUnitNotes | undefined =
    subjectUnits[selectedUnitIdx] || subjectUnits[0];

  const speakFormulaExample = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  if (!currentUnit) {
    return (
      <div className="p-8 bg-white border border-[#E2E8F0] rounded-xl text-center">
        <p className="text-sm font-semibold text-slate-600">
          Selecciona una asignatura para consultar sus unidades, apuntes y fórmulas.
        </p>
      </div>
    );
  }

  const safeCompletedIds = Array.isArray(completedIds) ? completedIds : [];
  const isStudied = safeCompletedIds.includes(currentUnit.id);
  const studiedCount = subjectUnits.filter((u) =>
    safeCompletedIds.includes(u.id)
  ).length;

  const handleSelectQuizOption = (questionId: string, option: string, rightAnswer: string) => {
    setQuizAnswers((prev) => ({ ...prev, [questionId]: option }));
    if (option === rightAnswer) {
      onMarkUnitStudied(currentUnit.id, 30);
    }
  };

  return (
    <div className="space-y-6" key={`studybook-${subject}`}>
      {/* Subject Progress Banner */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-[#0284C7]">
            LIBRO DE APUNTES, RESÚMENES Y FÓRMULAS · 5º DE PRIMARIA
          </div>
          <h3 className="text-lg font-bold text-[#0F172A] mt-0.5">
            Temario Completo de {currentUnit.subjectName} ({subjectUnits.length} Unidades Oficiales)
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-semibold text-[#059669] bg-[#059669]/10 px-3 py-1.5 rounded-lg tabular-nums">
            ● {studiedCount} / {subjectUnits.length} unidades estudiadas
          </span>
          {onOpenGlossaryForSubject &&
            (subject === 'ingles' ||
              subject === 'matematicas' ||
              subject === 'conocimiento') && (
              <button
                type="button"
                onClick={() => onOpenGlossaryForSubject(subject)}
                className="px-3.5 py-2 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Glosario de {currentUnit.subjectName}</span>
              </button>
            )}
        </div>
      </div>

      {/* 8-Unit Selector Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {subjectUnits.map((unit, idx) => {
          const isSelected = idx === selectedUnitIdx;
          const done = safeCompletedIds.includes(unit.id);
          return (
            <button
              key={unit.id}
              type="button"
              onClick={() => setSelectedUnitIdx(idx)}
              className={`p-3.5 rounded-xl border text-left transition-colors flex flex-col justify-between gap-2 ${
                isSelected
                  ? 'bg-[#0284C7]/10 border-[#0284C7] shadow-2xs'
                  : 'bg-white border-[#E2E8F0] hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-[#0284C7]">
                  {unit.unitNumber} · {unit.trimester}
                </span>
                <span className="font-mono">
                  {done ? (
                    <span className="text-[#059669] font-bold">● Leído</span>
                  ) : (
                    <span>+30 XP</span>
                  )}
                </span>
              </div>
              <div className="font-bold text-xs sm:text-sm text-[#0F172A] leading-snug line-clamp-2">
                {unit.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Study Sheet: Summary + Detailed Notes + Worked Examples + Important Formulas */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        key={currentUnit.id}
      >
        {/* LEFT COLUMN (7 cols): Executive Summary, Step-by-Step Study Notes & Worked Examples */}
        <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 border-b border-slate-100 pb-4">
            <div>
              <span className="font-semibold text-[#0284C7]">
                {currentUnit.subjectName} · {currentUnit.trimester}
              </span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>{currentUnit.unitNumber}</span>
            </div>
            <div className="font-mono">
              {isStudied ? (
                <span className="text-[#059669] font-semibold">
                  ● UNIDAD ESTUDIADA (+30 XP)
                </span>
              ) : (
                <span className="text-[#D97706] font-semibold">
                  ◆ APUNTES COMPLETOS DE CLASE
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
              {currentUnit.unitNumber}: {currentUnit.title}
            </h3>
          </div>

          {/* 1-Minute Executive Summary */}
          <div className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl space-y-2">
            <div className="text-xs font-bold text-[#0284C7] flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>RESUMEN EJECUTIVO (LO ESENCIAL EN 1 MINUTO)</span>
            </div>
            <p className="text-sm text-[#0F172A] leading-relaxed">
              {currentUnit.quickSummary}
            </p>
          </div>

          {/* Complete Detailed Notes */}
          <div className="space-y-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Apuntes Completos y Explicación Paso a Paso
            </div>
            {currentUnit.detailedNotes.map((section, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200/90 bg-white space-y-3"
              >
                <h4 className="text-base font-bold text-[#0F172A]">
                  {section.heading}
                </h4>
                <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed">
                  {section.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="font-mono text-xs font-bold text-[#0284C7] mt-1 shrink-0">
                        •
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Worked Exam Examples Step-by-Step */}
          {currentUnit.workedExamples && currentUnit.workedExamples.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold text-[#059669] uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Ejemplo de Examen Resuelto Paso a Paso</span>
              </div>
              {currentUnit.workedExamples.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#059669]/6 border border-[#059669]/25 space-y-3"
                >
                  <div className="text-sm font-bold text-[#0F172A]">
                    {ex.title}
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm font-medium text-[#0F172A]">
                    <strong>Enunciado:</strong> {ex.problemOrQuestion}
                  </div>
                  <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {ex.stepByStepSolution.map((step, sIdx) => (
                      <div key={sIdx} className="leading-relaxed">
                        {step}
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-[#059669]/20 text-xs sm:text-sm font-mono font-bold text-[#059669]">
                    ✓ Solución final: {ex.finalResult}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Action to mark unit as studied */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onMarkUnitStudied(currentUnit.id, 30)}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 ${
                isStudied
                  ? 'bg-[#059669]/15 text-[#059669] border border-[#059669]/30'
                  : 'bg-[#059669] hover:bg-[#047857] text-white'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {isStudied
                  ? '● Unidad completada (+30 XP ganados)'
                  : 'Marcar Unidad como Estudiada (+30 XP)'}
              </span>
            </button>

            {selectedUnitIdx < subjectUnits.length - 1 && (
              <button
                type="button"
                onClick={() => setSelectedUnitIdx((prev) => prev + 1)}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Siguiente Unidad ({subjectUnits[selectedUnitIdx + 1].unitNumber}) →
              </button>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN (5 cols): Important Formulas, Unit Quick-Quiz & Exam Tips */}
        <div className="lg:col-span-5 space-y-6">
          {/* Important Formulas Box */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <h4 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#0284C7]" />
                <span>Fórmulas y Esquemas Importantes</span>
              </h4>
              <span className="text-xs font-mono text-slate-500">
                {currentUnit.importantFormulas.length} clave
              </span>
            </div>

            <div className="space-y-4">
              {currentUnit.importantFormulas.map((form) => (
                <div
                  key={form.id}
                  className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5"
                >
                  <div className="text-xs font-bold text-[#0284C7]">
                    {form.title}
                  </div>
                  <div className="p-3 bg-slate-900 text-white rounded-lg font-mono text-xs sm:text-sm font-semibold leading-relaxed">
                    {form.formulaExpression}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {form.explanation}
                  </p>
                  <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between gap-2 text-xs text-slate-600 font-mono">
                    <span>Ejemplo: {form.exampleCalculation}</span>
                    {subject === 'ingles' && (
                      <button
                        type="button"
                        onClick={() => speakFormulaExample(form.exampleCalculation)}
                        className="p-1.5 rounded-md bg-[#0284C7]/10 text-[#0284C7] hover:bg-[#0284C7]/20 shrink-0"
                        title="Escuchar ejemplo en inglés"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Unit Mini-Quiz */}
          {currentUnit.quickQuiz && currentUnit.quickQuiz.length > 0 && (
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4">
              <h4 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#0284C7]" />
                <span>Autoevaluación Rápida de la {currentUnit.unitNumber}</span>
              </h4>

              {currentUnit.quickQuiz.map((q) => {
                const picked = quizAnswers[q.id];
                const isRight = picked === q.correctAnswer;
                return (
                  <div key={q.id} className="space-y-3">
                    <p className="text-xs sm:text-sm font-semibold text-[#0F172A]">
                      {q.question}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((opt) => {
                        const isThisPicked = picked === opt;
                        const isThisCorrect = opt === q.correctAnswer;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() =>
                              handleSelectQuizOption(q.id, opt, q.correctAnswer)
                            }
                            className={`w-full text-left p-3 rounded-lg border text-xs font-semibold transition-colors flex items-center justify-between gap-2 ${
                              isThisPicked
                                ? isThisCorrect
                                  ? 'bg-[#059669] border-[#059669] text-white'
                                  : 'bg-[#DC2626] border-[#DC2626] text-white'
                                : 'bg-[#F8FAFC] border-slate-200 text-[#0F172A] hover:border-[#0284C7]'
                            }`}
                          >
                            <span>{opt}</span>
                            {isThisPicked && (
                              <span className="shrink-0">
                                {isThisCorrect ? '✓ Correcto' : '✗ Incorrecto'}
                              </span>
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
                        <span>{q.explanation}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Exam Alerts / Tricks Box */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-3">
            <h4 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D97706]" />
              <span>Consejos para sacar un 10 en el Examen</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
              {currentUnit.examTips.map((tip, idx) => (
                <li
                  key={idx}
                  className="p-3 rounded-lg bg-[#D97706]/8 border border-[#D97706]/25 text-[#0F172A]"
                >
                  <strong className="text-[#D97706]">★ Truco {idx + 1}: </strong>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
