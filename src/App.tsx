import React, { useState, useEffect } from 'react';
import {
  Volume2,
  Calculator,
  Compass,
  Layers,
  BarChart3,
  Award,
  BookOpen,
  GraduationCap,
} from 'lucide-react';
import {
  INITIAL_ADAPTIVE_FLASHCARDS,
  AdaptiveFlashcard,
  GradeId,
  ALL_GRADES_CATALOG,
} from './data/curriculumData';
import {
  INTERACTIVE_GLOSSARY_TERMS,
  GlossaryTerm,
} from './data/studyNotesAndGlossaryData';
import { EnglishModule } from './components/EnglishModule';
import { MathModule } from './components/MathModule';
import { ScienceModule } from './components/ScienceModule';
import { FlashcardsModule } from './components/FlashcardsModule';
import { ProgressAndCurriculumModule } from './components/ProgressAndCurriculumModule';
import { InteractiveGlossaryModule } from './components/InteractiveGlossaryModule';
import { OtherSubjectsModule } from './components/OtherSubjectsModule';

type ActiveModuleTab =
  | 'ingles'
  | 'matematicas'
  | 'conocimiento'
  | 'otras'
  | 'glosario'
  | 'flashcards'
  | 'progreso';

const STORAGE_KEY = 'blasco_edulab_state_v5_zero';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveModuleTab>('ingles');
  const [otherInitialSubject, setOtherInitialSubject] = useState<
    | 'lengua'
    | 'valencia'
    | 'artistica'
    | 'educacion-fisica'
    | 'valores'
    | 'eso-bach'
  >('lengua');
  const [glossaryInitialSubject, setGlossaryInitialSubject] = useState<
    | 'all'
    | 'ingles'
    | 'matematicas'
    | 'conocimiento'
    | 'lengua'
    | 'valencia'
    | 'artistica'
    | 'educacion-fisica'
    | 'valores'
  >('all');
  const [xp, setXp] = useState<number>(0);
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [tableMastery, setTableMastery] = useState<Record<number, number>>({
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  });
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  const [flashcards, setFlashcards] = useState<AdaptiveFlashcard[]>(
    INITIAL_ADAPTIVE_FLASHCARDS
  );
  const [glossaryTerms, setGlossaryTerms] = useState<GlossaryTerm[]>(
    INTERACTIVE_GLOSSARY_TERMS
  );
  const [selectedGrade, setSelectedGrade] = useState<GradeId>('5-primaria');
  const [curriculumYear, setCurriculumYear] = useState<string>('2026/2027');
  const [customTopicsByGrade, setCustomTopicsByGrade] = useState<
    Record<string, string[]>
  >({});

  const handleResetAllProgress = () => {
    setXp(0);
    setCompletedIds([]);
    setTableMastery({
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    });
    setUnlockedBadges([]);
    setFlashcards(
      INITIAL_ADAPTIVE_FLASHCARDS.map((c) => ({
        ...c,
        box: 1,
        timesCorrect: 0,
      }))
    );
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('blasco_edulab_state_v2');
      localStorage.removeItem('blasco_edulab_state_v1');
    } catch {
      // Ignore storage errors
    }
  };

  // Load saved state from localStorage on mount (and purge legacy pre-filled keys)
  useEffect(() => {
    try {
      localStorage.removeItem('blasco_edulab_state_v2');
      localStorage.removeItem('blasco_edulab_state_v1');
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (typeof parsed.xp === 'number') setXp(parsed.xp);
        if (Array.isArray(parsed.completedIds)) setCompletedIds(parsed.completedIds);
        if (parsed.tableMastery) setTableMastery(parsed.tableMastery);
        if (Array.isArray(parsed.unlockedBadges))
          setUnlockedBadges(parsed.unlockedBadges);
        if (Array.isArray(parsed.flashcards) && parsed.flashcards.length > 0)
          setFlashcards(parsed.flashcards);
        if (
          Array.isArray(parsed.glossaryTerms) &&
          parsed.glossaryTerms.length >= INTERACTIVE_GLOSSARY_TERMS.length
        )
          setGlossaryTerms(parsed.glossaryTerms);
        if (parsed.selectedGrade) setSelectedGrade(parsed.selectedGrade);
        if (parsed.curriculumYear) setCurriculumYear(parsed.curriculumYear);
        if (parsed.customTopicsByGrade)
          setCustomTopicsByGrade(parsed.customTopicsByGrade);
      }
    } catch {
      // Ignore storage errors in private mode
    }
  }, []);

  // Persist state changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          xp,
          completedIds,
          tableMastery,
          unlockedBadges,
          flashcards,
          glossaryTerms,
          selectedGrade,
          curriculumYear,
          customTopicsByGrade,
        })
      );
    } catch {
      // Ignore storage errors
    }
  }, [
    xp,
    completedIds,
    tableMastery,
    unlockedBadges,
    flashcards,
    glossaryTerms,
    selectedGrade,
    curriculumYear,
    customTopicsByGrade,
  ]);

  const handleCompleteItem = (id: string, earnedXp: number) => {
    setXp((prev) => prev + earnedXp);
    setCompletedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleRecordTableHit = (table: number, earnedXp: number) => {
    setXp((prev) => prev + earnedXp);
    setTableMastery((prev) => ({
      ...prev,
      [table]: (prev[table] || 0) + 1,
    }));
  };

  const handleCompleteProblem = (
    problemId: string,
    earnedXp: number,
    badgeName: string
  ) => {
    handleCompleteItem(problemId, earnedXp);
    setUnlockedBadges((prev) =>
      prev.includes(badgeName) ? prev : [...prev, badgeName]
    );
  };

  const handleRateFlashcard = (
    cardId: string,
    newBox: 1 | 2 | 3,
    earnedXp: number
  ) => {
    setXp((prev) => prev + earnedXp);
    setFlashcards((prev) =>
      prev.map((card) =>
        card.id === cardId
          ? {
              ...card,
              box: newBox,
              timesCorrect:
                newBox === 3 ? card.timesCorrect + 1 : card.timesCorrect,
              lastReviewed: new Date().toISOString(),
            }
          : card
      )
    );
  };

  const handleAddCustomCard = (
    newCard: Omit<AdaptiveFlashcard, 'id' | 'box' | 'timesCorrect'>
  ) => {
    const created: AdaptiveFlashcard = {
      ...newCard,
      id: `fc-custom-${Date.now()}`,
      box: 1,
      timesCorrect: 0,
    };
    setFlashcards((prev) => [created, ...prev]);
    setXp((prev) => prev + 20);
  };

  const handleAddGlossaryTerm = (
    newTerm: Omit<GlossaryTerm, 'id' | 'visualIconType'>
  ) => {
    const defaultIcons: Record<
      GlossaryTerm['subject'],
      GlossaryTerm['visualIconType']
    > = {
      ingles: 'eng-verb-s',
      matematicas: 'multiplication-grid',
      conocimiento: 'sci-ecosystem',
      lengua: 'lengua-sintaxis',
      valencia: 'valencia-apostrof',
      artistica: 'musica-figuras',
      'educacion-fisica': 'ef-pilota',
      valores: 'valores-convivencia',
    };
    const created: GlossaryTerm = {
      ...newTerm,
      id: `glos-custom-${Date.now()}`,
      visualIconType: defaultIcons[newTerm.subject],
    };
    setGlossaryTerms((prev) => [created, ...prev]);
    setXp((prev) => prev + 25);
  };

  const handleOpenGlossaryForSubject = (
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
  ) => {
    setGlossaryInitialSubject(subj);
    setActiveTab('glosario');
  };

  const handleAddCustomTopic = (
    gradeId: GradeId,
    subjectName: string,
    topicTitle: string
  ) => {
    const key = `${gradeId}-${subjectName}`;
    setCustomTopicsByGrade((prev) => ({
      ...prev,
      [key]: [...(prev[key] || []), topicTitle],
    }));
  };

  const currentGradeInfo =
    ALL_GRADES_CATALOG.find((g) => g.id === selectedGrade) || ALL_GRADES_CATALOG[0];

  const masteredFlashcardsCount = flashcards.filter((c) => c.box === 3).length;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      {/* TOP BAR CONTRACT: Strictly 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xs border-b border-[#E2E8F0] px-4 sm:px-8 py-3.5">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('ingles');
            }}
            className="text-lg font-bold tracking-tight text-[#0F172A] font-display whitespace-nowrap shrink-0"
          >
            Blasco EduLab
          </a>

          {/* Zone 2: 5 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              type="button"
              onClick={() => setActiveTab('ingles')}
              className={`hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'ingles'
                  ? 'border-[#0284C7] text-[#0F172A] font-semibold'
                  : 'border-transparent'
              }`}
            >
              Inglés Oral
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('matematicas')}
              className={`hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'matematicas'
                  ? 'border-[#0284C7] text-[#0F172A] font-semibold'
                  : 'border-transparent'
              }`}
            >
              Matemáticas
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('conocimiento')}
              className={`hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'conocimiento'
                  ? 'border-[#0284C7] text-[#0F172A] font-semibold'
                  : 'border-transparent'
              }`}
            >
              Conocimiento
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('otras')}
              className={`hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'otras'
                  ? 'border-[#0284C7] text-[#0F172A] font-semibold'
                  : 'border-transparent'
              }`}
            >
              Lengua, Valencià y +
            </button>
            <button
              type="button"
              onClick={() => handleOpenGlossaryForSubject('all')}
              className={`hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'glosario'
                  ? 'border-[#0284C7] text-[#0F172A] font-semibold'
                  : 'border-transparent'
              }`}
            >
              Glosario y Apuntes
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('flashcards')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Repaso Diario ({masteredFlashcardsCount}/{flashcards.length})
            </button>
          </div>
        </div>
      </header>

      {/* WORKSPACE HERO & QUICK COURSE TOOLBAR */}
      <section className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-6 space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-3xl">
              {/* Unboxed clean metadata with typographic separators */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-[#0284C7]">
                  CEIP Blasco Ibáñez de Museros
                </span>
                <span aria-hidden="true">·</span>
                <span>{currentGradeInfo.name}</span>
                <span aria-hidden="true">·</span>
                <span>Temario LOMLOE {curriculumYear}</span>
                <span aria-hidden="true">·</span>
                <span>5º Primaria a 2º Bachillerato</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                Aprende a tu ritmo con apuntes claros, glosario visual, voz y retos paso a paso
              </h1>
            </div>

            {/* Student XP & Level Telemetry Strip */}
            <div className="flex flex-wrap items-center gap-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-3.5 shrink-0">
              <div className="text-xs">
                <div className="text-slate-500">Experiencia Acumulada</div>
                <div className="font-mono text-lg font-bold text-[#0284C7] tabular-nums">
                  {xp} XP · Nivel {xp === 0 ? 0 : Math.floor(xp / 100) + 1}
                </div>
              </div>
              <div className="h-8 w-px bg-slate-200" aria-hidden="true" />
              <div className="text-xs">
                <div className="text-slate-500">Insignias Ganadas</div>
                <div className="font-mono text-lg font-bold text-[#059669] tabular-nums flex items-center gap-1">
                  <Award className="w-4 h-4 text-[#D97706]" />
                  <span>{unlockedBadges.length} medallas</span>
                </div>
              </div>
              {(xp > 0 || completedIds.length > 0 || unlockedBadges.length > 0) && (
                <>
                  <div className="h-8 w-px bg-slate-200" aria-hidden="true" />
                  <button
                    type="button"
                    onClick={handleResetAllProgress}
                    className="text-xs font-semibold text-slate-600 hover:text-[#DC2626] transition-colors whitespace-nowrap shrink-0"
                  >
                    Reiniciar a 0
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Interactive Module Switcher Cards (7 Modules) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => setActiveTab('ingles')}
              className={`p-3 rounded-xl border text-left transition-colors flex items-center gap-2.5 ${
                activeTab === 'ingles'
                  ? 'bg-[#0284C7] border-[#0284C7] text-white'
                  : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0F172A] hover:bg-slate-100'
              }`}
            >
              <Volume2 className="w-4 h-4 shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-bold truncate">1. Inglés Oral</div>
                <div
                  className={`text-[11px] truncate ${
                    activeTab === 'ingles' ? 'text-sky-100' : 'text-slate-500'
                  }`}
                >
                  Voz, Gramática y Apuntes
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('matematicas')}
              className={`p-3 rounded-xl border text-left transition-colors flex items-center gap-2.5 ${
                activeTab === 'matematicas'
                  ? 'bg-[#0284C7] border-[#0284C7] text-white'
                  : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0F172A] hover:bg-slate-100'
              }`}
            >
              <Calculator className="w-4 h-4 shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-bold truncate">2. Matemáticas</div>
                <div
                  className={`text-[11px] truncate ${
                    activeTab === 'matematicas' ? 'text-sky-100' : 'text-slate-500'
                  }`}
                >
                  Tablas, Problemas y Fórmulas
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('conocimiento')}
              className={`p-3 rounded-xl border text-left transition-colors flex items-center gap-2.5 ${
                activeTab === 'conocimiento'
                  ? 'bg-[#0284C7] border-[#0284C7] text-white'
                  : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0F172A] hover:bg-slate-100'
              }`}
            >
              <Compass className="w-4 h-4 shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-bold truncate">3. Conocimiento</div>
                <div
                  className={`text-[11px] truncate ${
                    activeTab === 'conocimiento' ? 'text-sky-100' : 'text-slate-500'
                  }`}
                >
                  Mapas, Mnemotecnia y Temas
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('otras')}
              className={`p-3 rounded-xl border text-left transition-colors flex items-center gap-2.5 ${
                activeTab === 'otras'
                  ? 'bg-[#0284C7] border-[#0284C7] text-white'
                  : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0F172A] hover:bg-slate-100'
              }`}
            >
              <GraduationCap className="w-4 h-4 shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-bold truncate">4. Lengua, Valencià y +</div>
                <div
                  className={`text-[11px] truncate ${
                    activeTab === 'otras' ? 'text-sky-100' : 'text-slate-500'
                  }`}
                >
                  Música, E. Física, Valores y ESO
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleOpenGlossaryForSubject('all')}
              className={`p-3 rounded-xl border text-left transition-colors flex items-center gap-2.5 ${
                activeTab === 'glosario'
                  ? 'bg-[#0284C7] border-[#0284C7] text-white'
                  : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0F172A] hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-bold truncate">5. Glosario y Apuntes</div>
                <div
                  className={`text-[11px] truncate ${
                    activeTab === 'glosario' ? 'text-sky-100' : 'text-slate-500'
                  }`}
                >
                  Diccionario Visual y Fórmulas
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('flashcards')}
              className={`p-3 rounded-xl border text-left transition-colors flex items-center gap-2.5 ${
                activeTab === 'flashcards'
                  ? 'bg-[#0284C7] border-[#0284C7] text-white'
                  : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0F172A] hover:bg-slate-100'
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-bold truncate">6. Tarjetas</div>
                <div
                  className={`text-[11px] truncate ${
                    activeTab === 'flashcards' ? 'text-sky-100' : 'text-slate-500'
                  }`}
                >
                  Repaso Adaptativo ({masteredFlashcardsCount}/{flashcards.length})
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('progreso')}
              className={`p-3 rounded-xl border text-left transition-colors flex items-center gap-2.5 ${
                activeTab === 'progreso'
                  ? 'bg-[#0284C7] border-[#0284C7] text-white'
                  : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0F172A] hover:bg-slate-100'
              }`}
            >
              <BarChart3 className="w-4 h-4 shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-bold truncate">7. Progreso y Cursos</div>
                <div
                  className={`text-[11px] truncate ${
                    activeTab === 'progreso' ? 'text-sky-100' : 'text-slate-500'
                  }`}
                >
                  5º Primaria a 2º Bach.
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* MAIN INTERACTIVE STAGE */}
      <main className="flex-1 max-w-[1320px] w-full mx-auto px-4 sm:px-8 py-8">
        {activeTab === 'ingles' && (
          <EnglishModule
            completedIds={completedIds}
            onCompleteItem={handleCompleteItem}
            onOpenGlossary={() => handleOpenGlossaryForSubject('ingles')}
          />
        )}

        {activeTab === 'matematicas' && (
          <MathModule
            completedIds={completedIds}
            tableMastery={tableMastery}
            unlockedBadges={unlockedBadges}
            onRecordTableHit={handleRecordTableHit}
            onCompleteProblem={handleCompleteProblem}
            onOpenGlossary={() => handleOpenGlossaryForSubject('matematicas')}
          />
        )}

        {activeTab === 'conocimiento' && (
          <ScienceModule
            completedIds={completedIds}
            onCompleteMap={handleCompleteItem}
            onOpenGlossary={() => handleOpenGlossaryForSubject('conocimiento')}
          />
        )}

        {activeTab === 'otras' && (
          <OtherSubjectsModule
            key={otherInitialSubject}
            completedIds={completedIds}
            initialSubject={otherInitialSubject}
            onCompleteActivity={handleCompleteItem}
            onOpenGlossaryForSubject={handleOpenGlossaryForSubject}
          />
        )}

        {activeTab === 'glosario' && (
          <InteractiveGlossaryModule
            key={glossaryInitialSubject}
            glossaryTerms={glossaryTerms}
            completedIds={completedIds}
            initialSubjectFilter={glossaryInitialSubject}
            onAddGlossaryTerm={handleAddGlossaryTerm}
            onCompleteActivity={handleCompleteItem}
          />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardsModule
            cards={flashcards}
            onRateCard={handleRateFlashcard}
            onAddCustomCard={handleAddCustomCard}
          />
        )}

        {activeTab === 'progreso' && (
          <ProgressAndCurriculumModule
            xp={xp}
            completedIds={completedIds}
            tableMastery={tableMastery}
            unlockedBadges={unlockedBadges}
            flashcards={flashcards}
            selectedGrade={selectedGrade}
            curriculumYear={curriculumYear}
            customTopicsByGrade={customTopicsByGrade}
            onSelectGrade={setSelectedGrade}
            onChangeCurriculumYear={setCurriculumYear}
            onAddCustomTopic={handleAddCustomTopic}
            onNavigateToModule={(tab, otherSubject) => {
              if (tab === 'otras' && otherSubject) {
                setOtherInitialSubject(otherSubject);
              }
              setActiveTab(tab);
            }}
            onResetProgress={handleResetAllProgress}
          />
        )}
      </main>

      {/* QUIET FOOTER */}
      <footer className="bg-white border-t border-[#E2E8F0] py-6 px-4 sm:px-8 mt-12">
        <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>Blasco EduLab · Apoyo al Estudio para CEIP Blasco Ibáñez de Museros</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>5º de Primaria hasta 2º de Bachillerato</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleOpenGlossaryForSubject('all')}
              className="hover:text-[#0F172A] transition-colors whitespace-nowrap"
            >
              Glosario y Apuntes Completos
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setActiveTab('progreso')}
              className="hover:text-[#0F172A] transition-colors whitespace-nowrap"
            >
              Actualizar Temario ({curriculumYear})
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
