import React, { useState } from 'react';
import {
  BarChart3,
  Award,
  GraduationCap,
  RefreshCw,
  CheckCircle2,
  Plus,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react';
import {
  ALL_GRADES_CATALOG,
  ENGLISH_PRONUNCIATION_ITEMS,
  ENGLISH_GRAMMAR_EXERCISES,
  MATH_WORD_PROBLEMS,
  SCIENCE_CONCEPT_MAPS,
  AdaptiveFlashcard,
  GradeId,
} from '../data/curriculumData';

interface ProgressAndCurriculumModuleProps {
  xp: number;
  completedIds: string[];
  tableMastery: Record<number, number>;
  unlockedBadges: string[];
  flashcards: AdaptiveFlashcard[];
  selectedGrade: GradeId;
  curriculumYear: string;
  customTopicsByGrade: Record<string, string[]>;
  onSelectGrade: (grade: GradeId) => void;
  onChangeCurriculumYear: (year: string) => void;
  onAddCustomTopic: (gradeId: GradeId, subjectName: string, topicTitle: string) => void;
  onNavigateToModule: (
    tab: 'ingles' | 'matematicas' | 'conocimiento' | 'otras' | 'flashcards',
    otherSubject?:
      | 'lengua'
      | 'valencia'
      | 'artistica'
      | 'educacion-fisica'
      | 'valores'
      | 'eso-bach'
  ) => void;
  onResetProgress?: () => void;
}

export const ProgressAndCurriculumModule: React.FC<
  ProgressAndCurriculumModuleProps
> = ({
  xp,
  completedIds,
  tableMastery,
  unlockedBadges,
  flashcards,
  selectedGrade,
  curriculumYear,
  customTopicsByGrade,
  onSelectGrade,
  onChangeCurriculumYear,
  onAddCustomTopic,
  onNavigateToModule,
  onResetProgress,
}) => {
  const [newTopicSubject, setNewTopicSubject] = useState<string>('Inglés');
  const [newTopicTitle, setNewTopicTitle] = useState<string>('');
  const [syncMessage, setSyncMessage] = useState<string>('');

  // Calculate subject progress for 5º Primaria flagship modules
  const totalEngItems =
    ENGLISH_PRONUNCIATION_ITEMS.length + ENGLISH_GRAMMAR_EXERCISES.length;
  const doneEngItems = [
    ...ENGLISH_PRONUNCIATION_ITEMS,
    ...ENGLISH_GRAMMAR_EXERCISES,
  ].filter((i) => completedIds.includes(i.id)).length;
  const engPercent = Math.round((doneEngItems / totalEngItems) * 100);

  const totalTablesPracticed = Object.values(tableMastery).reduce((a, b) => a + b, 0);
  const doneMathProblems = MATH_WORD_PROBLEMS.filter((p) =>
    completedIds.includes(p.id)
  ).length;
  const mathPercent = Math.min(
    100,
    Math.round(
      ((doneMathProblems * 12.5 + Math.min(totalTablesPracticed, 25)) / 125) * 100
    )
  );

  const doneScienceMaps = SCIENCE_CONCEPT_MAPS.filter((m) =>
    completedIds.includes(m.id)
  ).length;
  const sciencePercent = Math.round(
    (doneScienceMaps / SCIENCE_CONCEPT_MAPS.length) * 100
  );

  const masteredCards = flashcards.filter((c) => c.box === 3).length;
  const flashcardsPercent = Math.round(
    (masteredCards / Math.max(1, flashcards.length)) * 100
  );

  const activeGradeObj =
    ALL_GRADES_CATALOG.find((g) => g.id === selectedGrade) || ALL_GRADES_CATALOG[0];

  const handleSyncCurriculum = (year: string) => {
    onChangeCurriculumYear(year);
    setSyncMessage(
      `● Temario sincronizado con el currículo oficial LOMLOE (GVA Comunitat Valenciana) para el curso ${year}.`
    );
  };

  const handleAddTopicSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTopicTitle.trim()) return;
    onAddCustomTopic(selectedGrade, newTopicSubject, newTopicTitle.trim());
    setNewTopicTitle('');
    setSyncMessage(
      `● Nuevo tema "${newTopicTitle.trim()}" añadido al curso ${activeGradeObj.name}.`
    );
  };

  return (
    <div className="space-y-10">
      {/* SECTION 1: DETAILED PROGRESS PANEL PER SUBJECT */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
          <div>
            <div className="text-xs text-slate-500">
              <span>Evaluación Continua · CEIP Blasco Ibáñez de Museros</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Curso Académico {curriculumYear}</span>
            </div>
            <h2 className="text-2xl font-bold text-[#0F172A] mt-1">
              Panel de Progreso Detallado por Materia
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono tabular-nums bg-white border border-[#E2E8F0] px-4 py-2.5 rounded-lg">
            <span>
              XP Total: <strong className="text-[#0284C7]">{xp} XP</strong>
            </span>
            <span aria-hidden="true">·</span>
            <span>
              Insignias:{' '}
              <strong className="text-[#059669]">
                {unlockedBadges.length}/{MATH_WORD_PROBLEMS.length}
              </strong>
            </span>
            {onResetProgress && (
              <>
                <span aria-hidden="true">·</span>
                <button
                  type="button"
                  onClick={() => {
                    onResetProgress();
                    setSyncMessage('● Todos los contadores de progreso se han puesto a cero (0 XP, 0%).');
                  }}
                  className="font-sans font-semibold text-slate-600 hover:text-[#DC2626] transition-colors whitespace-nowrap"
                >
                  Poner contadores a 0
                </button>
              </>
            )}
          </div>
        </div>

        {/* 4 Subject Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* English Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Inglés (Oral y Gramática)</span>
                <span className="font-mono font-bold text-[#0284C7] tabular-nums">
                  {engPercent}%
                </span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0284C7] transition-transform origin-left"
                  style={{ width: `${engPercent}%` }}
                />
              </div>
              <div className="text-sm font-bold text-[#0F172A] pt-1">
                {doneEngItems} de {totalEngItems} ejercicios superados
              </div>
              <p className="text-xs text-slate-600">
                Pronunciación de letras mudas, frases orales y construcción gramatical.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigateToModule('ingles')}
              className="w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-[#0F172A] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 whitespace-nowrap shrink-0"
            >
              <span>Ir a Inglés</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mathematics Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Matemáticas (Tablas y Problemas)</span>
                <span className="font-mono font-bold text-[#059669] tabular-nums">
                  {mathPercent}%
                </span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#059669]"
                  style={{ width: `${mathPercent}%` }}
                />
              </div>
              <div className="text-sm font-bold text-[#0F172A] pt-1">
                {doneMathProblems}/{MATH_WORD_PROBLEMS.length} problemas · {totalTablesPracticed} aciertos tablas
              </div>
              <p className="text-xs text-slate-600">
                Descomposición visual de tablas (2–9) y problemas en 3 pasos.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigateToModule('matematicas')}
              className="w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-[#0F172A] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 whitespace-nowrap shrink-0"
            >
              <span>Ir a Matemáticas</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Conocimiento del Medio Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Conocimiento del Medio</span>
                <span className="font-mono font-bold text-[#D97706] tabular-nums">
                  {sciencePercent}%
                </span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#D97706]"
                  style={{ width: `${sciencePercent}%` }}
                />
              </div>
              <div className="text-sm font-bold text-[#0F172A] pt-1">
                {doneScienceMaps} de {SCIENCE_CONCEPT_MAPS.length} mapas completados
              </div>
              <p className="text-xs text-slate-600">
                Ecosistemas, Nutrición Humana, Plantas (Xilema/Floema) y Relieve.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigateToModule('conocimiento')}
              className="w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-[#0F172A] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 whitespace-nowrap shrink-0"
            >
              <span>Ir a Mapas Conceptuales</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Adaptive Flashcards Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Memoria Adaptativa (Tarjetas)</span>
                <span className="font-mono font-bold text-[#0284C7] tabular-nums">
                  {flashcardsPercent}%
                </span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0284C7]"
                  style={{ width: `${flashcardsPercent}%` }}
                />
              </div>
              <div className="text-sm font-bold text-[#0F172A] pt-1">
                {masteredCards} de {flashcards.length} tarjetas en Caja 3
              </div>
              <p className="text-xs text-slate-600">
                Repaso espaciado inteligente en todas las asignaturas.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigateToModule('flashcards')}
              className="w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-[#0F172A] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 whitespace-nowrap shrink-0"
            >
              <span>Repasar Tarjetas</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* All Other Subjects Quick Access Bar (Lengua, Valencià, Música/Plástica, E. Física, Valores) */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#0284C7] uppercase">
              Resto de Asignaturas Oficiales de 5º de Primaria y Cursos Superiores
            </div>
            <h3 className="text-base font-bold text-[#0F172A] mt-0.5">
              Estudia también Lengua Castellana, Valencià, Música y Plástica, Educación Física (Pilota Valenciana) y Valores Cívicos
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'lengua', label: 'Lengua Castellana' },
              { id: 'valencia', label: 'Valencià' },
              { id: 'artistica', label: 'Música y Plástica' },
              { id: 'educacion-fisica', label: 'Educación Física' },
              { id: 'valores', label: 'Valores Cívicos' },
              { id: 'eso-bach', label: '6º Primaria a 2º Bach.' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  onNavigateToModule('otras', item.id as any)
                }
                className="px-3 py-2 bg-[#F8FAFC] hover:bg-[#0284C7] hover:text-white border border-[#E2E8F0] text-[#0F172A] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            ))}
          </div>
        </div>

        {/* Multiplication Tables Mastery Heatmap (2 to 9) */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#0284C7]" />
                <span>Mapa de Dominio de las Tablas de Multiplicar (2 al 9)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Cada tabla alcanza el estado "● Dominada" al superar 5 aciertos seguidos sin fallo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {[2, 3, 4, 5, 6, 7, 8, 9].map((tableNum) => {
              const hits = tableMastery[tableNum] || 0;
              const status =
                hits >= 5 ? 'mastered' : hits >= 2 ? 'progress' : 'needs-work';

              return (
                <div
                  key={tableNum}
                  className={`p-3.5 rounded-lg border text-center space-y-1 ${
                    status === 'mastered'
                      ? 'bg-[#059669]/8 border-[#059669]/30'
                      : status === 'progress'
                      ? 'bg-[#D97706]/8 border-[#D97706]/30'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="text-sm font-bold text-[#0F172A]">
                    Tabla del {tableNum}
                  </div>
                  <div className="font-mono text-lg font-bold tabular-nums text-[#0284C7]">
                    {hits}/5
                  </div>
                  <div className="text-[11px] font-mono">
                    {status === 'mastered' && (
                      <span className="text-[#059669] font-semibold">● DOMINADA</span>
                    )}
                    {status === 'progress' && (
                      <span className="text-[#D97706] font-semibold">◆ EN CURSO</span>
                    )}
                    {status === 'needs-work' && (
                      <span className="text-slate-500">▲ REPASAR</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 2: MULTI-GRADE CURRICULUM EXPLORER (5º PRIMARIA TO 2º BACHILLERATO) & ANNUAL UPDATER */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-200">
          <div>
            <div className="text-xs text-slate-500">
              <span>Continuidad Educativa · De Primaria a la Universidad (PAU)</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Actualización Anual de Temarios</span>
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mt-1 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#0284C7]" />
              <span>Plan de Estudios Multinivel: 5º de Primaria hasta 2º de Bachillerato</span>
            </h3>
          </div>

          {/* Annual Curriculum Version Selector */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-600">
              Edición del Temario:
            </span>
            {['2025/2026', '2026/2027', '2027/2028'].map((yr) => (
              <button
                key={yr}
                type="button"
                onClick={() => handleSyncCurriculum(yr)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono font-semibold border transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  curriculumYear === yr
                    ? 'bg-[#0284C7] border-[#0284C7] text-white'
                    : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <RefreshCw className="w-3 h-3" />
                <span>Curso {yr}</span>
              </button>
            ))}
          </div>
        </div>

        {syncMessage && (
          <div className="p-3.5 rounded-lg bg-[#059669]/10 border border-[#059669]/30 text-xs font-semibold text-[#059669] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{syncMessage}</span>
          </div>
        )}

        {/* Grade Selector Tabs (5º Primaria -> 2º Bachillerato) */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-600">
            Selecciona el curso académico para consultar o actualizar sus asignaturas:
          </div>
          <div className="flex flex-wrap gap-2">
            {ALL_GRADES_CATALOG.map((grade) => {
              const isSelected = grade.id === selectedGrade;
              return (
                <button
                  key={grade.id}
                  type="button"
                  onClick={() => onSelectGrade(grade.id)}
                  className={`px-3.5 py-2 rounded-lg border text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-slate-900 border-slate-900 text-white'
                      : grade.isPrimaryFocus
                      ? 'bg-[#0284C7]/10 border-[#0284C7] text-[#0284C7]'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {grade.id === '5-primaria' ? '★ 5º Primaria (Foco Actual)' : grade.name.split(' (')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Grade Subjects Breakdown */}
        <div className="space-y-4">
          <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-xs text-slate-500">
                <span>{activeGradeObj.stage}</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>{activeGradeObj.ageRange}</span>
              </div>
              <h4 className="text-lg font-bold text-[#0F172A]">
                {activeGradeObj.name} · Temario Vigente {curriculumYear}
              </h4>
            </div>
            {activeGradeObj.id === '5-primaria' && (
              <span className="text-xs font-mono font-semibold text-[#059669]">
                ● FOCO ESPECIAL: INGLÉS, MATEMÁTICAS Y CONOCIMIENTO DEL MEDIO
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeGradeObj.coreSubjects.map((subj) => {
              const customList =
                customTopicsByGrade[`${activeGradeObj.id}-${subj.name}`] || [];
              const allTopics = [...subj.keyTopics, ...customList];

              return (
                <div
                  key={subj.id}
                  className="p-5 rounded-xl border border-[#E2E8F0] bg-white flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold text-[#0284C7] uppercase">
                        {subj.category}
                      </span>
                      <span className="font-mono tabular-nums">
                        {allTopics.length} bloques clave
                      </span>
                    </div>
                    <h5 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#0284C7] shrink-0" />
                      <span>{subj.name}</span>
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {allTopics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="font-mono text-[#0284C7] font-bold">
                            0{idx + 1}.
                          </span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-2.5">
                    <div className="text-[11px] text-slate-500">
                      {subj.annualUpdateNote}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        if (activeGradeObj.id !== '5-primaria') {
                          onNavigateToModule('otras', 'eso-bach');
                        } else if (subj.id === '5p-eng') {
                          onNavigateToModule('ingles');
                        } else if (subj.id === '5p-mat') {
                          onNavigateToModule('matematicas');
                        } else if (subj.id === '5p-con') {
                          onNavigateToModule('conocimiento');
                        } else if (subj.id === '5p-len') {
                          onNavigateToModule('otras', 'lengua');
                        } else if (subj.id === '5p-val') {
                          onNavigateToModule('otras', 'valencia');
                        } else if (subj.id === '5p-art') {
                          onNavigateToModule('otras', 'artistica');
                        } else if (subj.id === '5p-ef') {
                          onNavigateToModule('otras', 'educacion-fisica');
                        } else if (subj.id === '5p-vce') {
                          onNavigateToModule('otras', 'valores');
                        } else {
                          onNavigateToModule('otras', 'lengua');
                        }
                      }}
                      className="w-full py-2 px-3 bg-[#0284C7]/10 hover:bg-[#0284C7] text-[#0284C7] hover:text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Estudiar y Practicar {subj.name.split(' (')[0]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form to Add New Annual Syllabus Unit to Current Grade */}
        <form
          onSubmit={handleAddTopicSubmit}
          className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl space-y-3"
        >
          <div className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
            <Plus className="w-4 h-4 text-[#0284C7]" />
            <span>
              Añadir Nuevo Tema o Cambio Curricular a {activeGradeObj.name} ({curriculumYear})
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <select
              value={newTopicSubject}
              onChange={(e) => setNewTopicSubject(e.target.value)}
              className="px-3 py-2 rounded-lg border border-slate-300 text-xs font-medium bg-white"
            >
              {activeGradeObj.coreSubjects.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={newTopicTitle}
              onChange={(e) => setNewTopicTitle(e.target.value)}
              placeholder="Escribe el nuevo tema del libro o actualización del colegio..."
              className="flex-1 px-3.5 py-2 rounded-lg border border-slate-300 text-xs bg-white"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Añadir al Temario Anual
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
