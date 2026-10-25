import React, { useState } from 'react';
import {
  BookOpen,
  FileText,
  Calculator,
  Sparkles,
  CheckCircle2,
  Volume2,
} from 'lucide-react';
import { SubjectId } from '../data/curriculumData';
import {
  COMPLETE_STUDY_UNITS,
  StudyUnitNotes,
} from '../data/studyNotesAndGlossaryData';

interface SubjectStudyBookProps {
  subject: SubjectId;
  completedIds: string[];
  onMarkUnitStudied: (unitId: string, xp: number) => void;
  onOpenGlossaryForSubject?: (subject: 'ingles' | 'matematicas' | 'conocimiento') => void;
}

export const SubjectStudyBook: React.FC<SubjectStudyBookProps> = ({
  subject,
  completedIds,
  onMarkUnitStudied,
  onOpenGlossaryForSubject,
}) => {
  const subjectUnits = React.useMemo(
    () => COMPLETE_STUDY_UNITS.filter((u) => u.subject === subject),
    [subject]
  );

  const [selectedUnitIdx, setSelectedUnitIdx] = useState<number>(0);

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

  if (!currentUnit) return null;

  const isStudied = completedIds.includes(currentUnit.id);

  return (
    <div className="space-y-6">
      {/* Unit Trimester Selector Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {subjectUnits.map((unit, idx) => {
          const isSelected = idx === selectedUnitIdx;
          const done = completedIds.includes(unit.id);
          return (
            <button
              key={unit.id}
              type="button"
              onClick={() => setSelectedUnitIdx(idx)}
              className={`p-4 rounded-xl border text-left transition-colors flex flex-col justify-between gap-2 ${
                isSelected
                  ? 'bg-[#0284C7]/8 border-[#0284C7]'
                  : 'bg-white border-[#E2E8F0] hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>
                  {unit.trimester} · {unit.unitNumber}
                </span>
                <span className="font-mono">
                  {done ? (
                    <span className="text-[#059669] font-semibold">● Estudiado</span>
                  ) : (
                    <span>+30 XP</span>
                  )}
                </span>
              </div>
              <div className="font-bold text-sm text-[#0F172A] leading-snug">
                {unit.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Study Sheet: Summary + Detailed Notes + Important Formulas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN (7 cols): Executive Summary & Step-by-Step Study Notes */}
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
                  ● APUNTES REPASADOS
                </span>
              ) : (
                <span className="text-[#D97706] font-semibold">
                  ◆ LECTURA RECOMENDADA
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
              {currentUnit.title}
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
          <div className="space-y-5">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Apuntes Completos Paso a Paso
            </div>
            {currentUnit.detailedNotes.map((section, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200/90 bg-white space-y-3"
              >
                <h4 className="text-base font-bold text-[#0F172A]">
                  {section.heading}
                </h4>
                <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
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
                  ? '● Unidad ya marcada como estudiada'
                  : 'Marcar Apuntes como Estudiados (+30 XP)'}
              </span>
            </button>

            {onOpenGlossaryForSubject &&
              (subject === 'ingles' ||
                subject === 'matematicas' ||
                subject === 'conocimiento') && (
                <button
                  type="button"
                  onClick={() => onOpenGlossaryForSubject(subject)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0F172A] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
                >
                  <BookOpen className="w-4 h-4 text-[#0284C7]" />
                  <span>Abrir Glosario Ilustrado de {currentUnit.subjectName}</span>
                </button>
              )}
          </div>
        </div>

        {/* RIGHT COLUMN (5 cols): Important Formulas, Schemas & Exam Tips */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <h4 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#0284C7]" />
                <span>Fórmulas y Reglas Importantes</span>
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
                  <div className="pt-1 border-t border-slate-200/80 flex items-center justify-between gap-2 text-xs text-slate-600 font-mono">
                    <span>Ej: {form.exampleCalculation}</span>
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
