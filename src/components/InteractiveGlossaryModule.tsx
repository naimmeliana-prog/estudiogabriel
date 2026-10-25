import React, { useState } from 'react';
import {
  Search,
  Volume2,
  Sparkles,
  BookOpen,
  Plus,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';
import {
  GlossaryTerm,
  COMPLETE_STUDY_UNITS,
} from '../data/studyNotesAndGlossaryData';
import { SubjectStudyBook } from './SubjectStudyBook';

interface InteractiveGlossaryModuleProps {
  glossaryTerms: GlossaryTerm[];
  completedIds: string[];
  initialSubjectFilter?:
    | 'all'
    | 'ingles'
    | 'matematicas'
    | 'conocimiento'
    | 'lengua'
    | 'valencia'
    | 'artistica'
    | 'educacion-fisica'
    | 'valores';
  onAddGlossaryTerm: (newTerm: Omit<GlossaryTerm, 'id' | 'visualIconType'>) => void;
  onCompleteActivity: (id: string, xp: number) => void;
}

export const GlossaryVisualIllustration: React.FC<{
  type: GlossaryTerm['visualIconType'];
}> = ({ type }) => {
  switch (type) {
    case 'multiplication-grid':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-28 bg-[#F8FAFC] rounded-lg border border-slate-200 p-2">
          <text x="12" y="20" className="text-[11px] font-bold fill-[#0284C7]">3 × 4 = 12 bloques</text>
          {[0, 1, 2].map((r) =>
            [0, 1, 2, 3].map((c) => (
              <rect
                key={`${r}-${c}`}
                x={16 + c * 24}
                y={28 + r * 20}
                width="18"
                height="15"
                rx="3"
                fill={r === 0 ? '#0284C7' : r === 1 ? '#0EA5E9' : '#059669'}
              />
            ))
          )}
          <text x="120" y="62" className="text-[14px] font-bold fill-[#0F172A]">= 12</text>
        </svg>
      );

    case 'math-problem-steps':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-28 bg-[#F8FAFC] rounded-lg border border-slate-200 p-2">
          <rect x="8" y="26" width="42" height="48" rx="6" fill="#0284C7" />
          <text x="29" y="48" textAnchor="middle" className="text-[9px] font-bold fill-white">1. DATOS</text>
          <text x="29" y="61" textAnchor="middle" className="text-[8px] fill-sky-100">¿Qué sé?</text>

          <rect x="59" y="26" width="42" height="48" rx="6" fill="#D97706" />
          <text x="80" y="48" textAnchor="middle" className="text-[9px] font-bold fill-white">2. OPERA</text>
          <text x="80" y="61" textAnchor="middle" className="text-[9px] font-bold fill-white">+ - × ÷</text>

          <rect x="110" y="26" width="42" height="48" rx="6" fill="#059669" />
          <text x="131" y="48" textAnchor="middle" className="text-[9px] font-bold fill-white">3. SOLUCIÓN</text>
          <text x="131" y="61" textAnchor="middle" className="text-[8px] fill-emerald-100">Con unidad</text>
        </svg>
      );

    case 'division-share':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-28 bg-[#F8FAFC] rounded-lg border border-slate-200 p-2">
          <text x="80" y="18" textAnchor="middle" className="text-[10px] font-bold fill-[#0F172A]">D = (d × c) + r</text>
          {[0, 1, 2].map((box) => (
            <g key={box}>
              <rect x={14 + box * 46} y="28" width="38" height="42" rx="6" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
              <circle cx={26 + box * 46} cy="48" r="5" fill="#0284C7" />
              <circle cx={40 + box * 46} cy="48" r="5" fill="#0284C7" />
            </g>
          ))}
          <text x="80" y="88" textAnchor="middle" className="text-[9px] fill-slate-600">Reparto en partes iguales</text>
        </svg>
      );

    case 'fraction-pie':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-28 bg-[#F8FAFC] rounded-lg border border-slate-200 p-2">
          <circle cx="52" cy="50" r="32" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2" />
          <path d="M52,50 L52,18 A32,32 0 0,1 84,50 Z" fill="#0284C7" />
          <path d="M52,50 L84,50 A32,32 0 0,1 52,82 Z" fill="#0284C7" />
          <path d="M52,50 L52,82 A32,32 0 0,1 20,50 Z" fill="#059669" />
          <line x1="52" y1="18" x2="52" y2="82" stroke="#0F172A" strokeWidth="1.5" />
          <line x1="20" y1="50" x2="84" y2="50" stroke="#0F172A" strokeWidth="1.5" />
          <text x="118" y="42" textAnchor="middle" className="text-[16px] font-bold fill-[#0284C7]">3</text>
          <line x1="104" y1="48" x2="132" y2="48" stroke="#0F172A" strokeWidth="2" />
          <text x="118" y="66" textAnchor="middle" className="text-[16px] font-bold fill-[#0F172A]">4</text>
        </svg>
      );

    case 'geometry-area':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-28 bg-[#F8FAFC] rounded-lg border border-slate-200 p-2">
          <rect x="28" y="20" width="96" height="54" fill="#ECFDF5" stroke="#059669" strokeWidth="3" />
          <text x="76" y="50" textAnchor="middle" className="text-[11px] font-bold fill-[#059669]">ÁREA (b × h m²)</text>
          <text x="76" y="88" textAnchor="middle" className="text-[10px] font-bold fill-[#0F172A]">Base (b) · Borde = Perímetro</text>
        </svg>
      );

    case 'eng-verb-s':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-28 bg-[#F8FAFC] rounded-lg border border-slate-200 p-2">
          <rect x="14" y="22" width="68" height="54" rx="8" fill="#0F172A" />
          <text x="48" y="45" textAnchor="middle" className="text-[11px] font-bold fill-white">He / She / It</text>
          <text x="48" y="62" textAnchor="middle" className="text-[9px] fill-sky-200">Present Simple</text>
          <circle cx="118" cy="49" r="24" fill="#0284C7" />
          <text x="118" y="55" textAnchor="middle" className="text-[16px] font-bold fill-white">+ S</text>
        </svg>
      );

    case 'eng-question-does':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-28 bg-[#F8FAFC] rounded-lg border border-slate-200 p-2">
          <rect x="12" y="28" width="46" height="42" rx="6" fill="#D97706" />
          <text x="35" y="53" textAnchor="middle" className="text-[12px] font-bold fill-white">DOES</text>
          <rect x="64" y="28" width="40" height="42" rx="6" fill="#0284C7" />
          <text x="84" y="53" textAnchor="middle" className="text-[11px] font-bold fill-white">she</text>
          <rect x="110" y="28" width="38" height="42" rx="6" fill="#059669" />
          <text x="129" y="53" textAnchor="middle" className="text-[11px] font-bold fill-white">play?</text>
        </svg>
      );

    case 'sci-ecosystem':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-28 bg-[#F8FAFC] rounded-lg border border-slate-200 p-2">
          <circle cx="28" cy="24" r="12" fill="#F59E0B" />
          <polygon points="75,22 55,66 95,66" fill="#059669" />
          <rect x="71" y="66" width="8" height="14" fill="#78350F" />
          <path d="M8,82 Q80,72 152,82 L152,96 L8,96 Z" fill="#0284C7" />
          <text x="122" y="45" textAnchor="middle" className="text-[9px] font-bold fill-[#0F172A]">Biotopo +</text>
          <text x="122" y="58" textAnchor="middle" className="text-[9px] font-bold fill-[#059669]">Biocenosis</text>
        </svg>
      );

    case 'sci-photosynthesis':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-28 bg-[#F8FAFC] rounded-lg border border-slate-200 p-2">
          <circle cx="24" cy="24" r="10" fill="#F59E0B" />
          <ellipse cx="85" cy="48" rx="34" ry="20" fill="#059669" />
          <line x1="51" y1="48" x2="119" y2="48" stroke="#A7F3D0" strokeWidth="2" />
          <text x="32" y="78" className="text-[9px] font-bold fill-[#0284C7]">↑ Xilema (Bruta)</text>
          <text x="92" y="22" className="text-[9px] font-bold fill-[#059669]">Sale O₂ ↑</text>
          <text x="86" y="88" className="text-[9px] font-bold fill-[#D97706]">↓ Floema</text>
        </svg>
      );

    case 'sci-cell':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-28 bg-[#F8FAFC] rounded-lg border border-slate-200 p-2">
          <ellipse cx="80" cy="50" rx="56" ry="34" fill="#E0F2FE" stroke="#0284C7" strokeWidth="3" />
          <circle cx="80" cy="50" r="14" fill="#0F172A" />
          <circle cx="84" cy="47" r="4" fill="#38BDF8" />
          <text x="80" y="93" textAnchor="middle" className="text-[9px] font-bold fill-[#0F172A]">Membrana · Citoplasma · Núcleo</text>
        </svg>
      );

    case 'lengua-sintaxis':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-28 bg-[#F8FAFC] rounded-lg border border-slate-200 p-2">
          <rect x="10" y="24" width="64" height="48" rx="6" fill="#0284C7" />
          <text x="42" y="45" textAnchor="middle" className="text-[10px] font-bold fill-white">SUJETO (SN)</text>
          <text x="42" y="59" textAnchor="middle" className="text-[8px] fill-sky-100">¿Quién realiza?</text>
          <rect x="82" y="24" width="68" height="48" rx="6" fill="#059669" />
          <text x="116" y="45" textAnchor="middle" className="text-[10px] font-bold fill-white">PREDICADO (SV)</text>
          <text x="116" y="59" textAnchor="middle" className="text-[8px] fill-emerald-100">Verbo = Núcleo</text>
        </svg>
      );

    case 'valencia-apostrof':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-28 bg-[#F8FAFC] rounded-lg border border-slate-200 p-2">
          <rect x="14" y="20" width="62" height="58" rx="8" fill="#059669" />
          <text x="45" y="45" textAnchor="middle" className="text-[11px] font-bold fill-white">l'escola</text>
          <text x="45" y="62" textAnchor="middle" className="text-[9px] fill-emerald-100">l'horta · d'or</text>
          <rect x="84" y="20" width="62" height="58" rx="8" fill="#D97706" />
          <text x="115" y="45" textAnchor="middle" className="text-[11px] font-bold fill-white">la universitat</text>
          <text x="115" y="62" textAnchor="middle" className="text-[8px] fill-amber-100">-i/-u àtona NO</text>
        </svg>
      );

    case 'musica-figuras':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-28 bg-[#F8FAFC] rounded-lg border border-slate-200 p-2">
          {[28, 40, 52, 64, 76].map((y) => (
            <line key={y} x1="12" y1={y} x2="148" y2={y} stroke="#CBD5E1" strokeWidth="1.5" />
          ))}
          <circle cx="42" cy="64" r="6" fill="#0284C7" />
          <line x1="48" y1="64" x2="48" y2="32" stroke="#0284C7" strokeWidth="2.5" />
          <circle cx="82" cy="52" r="6" fill="white" stroke="#059669" strokeWidth="2.5" />
          <line x1="88" y1="52" x2="88" y2="22" stroke="#059669" strokeWidth="2.5" />
          <text x="122" y="54" textAnchor="middle" className="text-[12px] font-bold fill-[#0F172A]">4/4</text>
        </svg>
      );

    case 'ef-pilota':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-28 bg-[#F8FAFC] rounded-lg border border-slate-200 p-2">
          <rect x="12" y="18" width="136" height="64" rx="8" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
          <circle cx="44" cy="50" r="14" fill="#DC2626" />
          <text x="44" y="54" textAnchor="middle" className="text-[9px] font-bold fill-white">ROJOS</text>
          <text x="84" y="45" textAnchor="middle" className="text-[10px] font-bold fill-[#0F172A]">15 · 30 · VAL</text>
          <text x="84" y="62" textAnchor="middle" className="text-[9px] font-bold fill-[#059669]">JOC!</text>
          <circle cx="124" cy="50" r="14" fill="#0284C7" />
          <text x="124" y="54" textAnchor="middle" className="text-[9px] font-bold fill-white">BLAUS</text>
        </svg>
      );

    case 'valores-convivencia':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-28 bg-[#F8FAFC] rounded-lg border border-slate-200 p-2">
          <circle cx="52" cy="50" r="24" fill="#0284C7" fillOpacity="0.85" />
          <circle cx="80" cy="50" r="24" fill="#059669" fillOpacity="0.85" />
          <circle cx="108" cy="50" r="24" fill="#D97706" fillOpacity="0.85" />
          <text x="80" y="54" textAnchor="middle" className="text-[10px] font-bold fill-white">EMPATÍA · 3R</text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 160 100" className="w-full h-28 bg-[#F8FAFC] rounded-lg border border-slate-200 p-2">
          <rect x="20" y="20" width="120" height="60" rx="10" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
          <circle cx="50" cy="50" r="12" fill="#0284C7" />
          <line x1="72" y1="43" x2="124" y2="43" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
          <line x1="72" y1="57" x2="110" y2="57" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
  }
};

export const InteractiveGlossaryModule: React.FC<
  InteractiveGlossaryModuleProps
> = ({
  glossaryTerms,
  completedIds,
  initialSubjectFilter = 'all',
  onAddGlossaryTerm,
  onCompleteActivity,
}) => {
  const [viewMode, setViewMode] = useState<'glossary' | 'syllabus-notes' | 'quiz'>(
    'glossary'
  );
  const [subjectFilter, setSubjectFilter] = useState<
    | 'all'
    | 'ingles'
    | 'matematicas'
    | 'conocimiento'
    | 'lengua'
    | 'valencia'
    | 'artistica'
    | 'educacion-fisica'
    | 'valores'
  >(initialSubjectFilter);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTermId, setSelectedTermId] = useState<string>(
    glossaryTerms[0]?.id || ''
  );
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  // Quiz state for glossary self-testing
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<string | null>(
    null
  );

  // Add Term form state
  const [newTermName, setNewTermName] = useState<string>('');
  const [newTermSubject, setNewTermSubject] = useState<
    | 'ingles'
    | 'matematicas'
    | 'conocimiento'
    | 'lengua'
    | 'valencia'
    | 'artistica'
    | 'educacion-fisica'
    | 'valores'
  >('matematicas');
  const [newTermSubCat, setNewTermSubCat] =
    useState<GlossaryTerm['subCategory']>('Operaciones y Cálculo');
  const [newTermDef, setNewTermDef] = useState<string>('');
  const [newTermEx, setNewTermEx] = useState<string>('');
  const [newTermTrick, setNewTermTrick] = useState<string>('');

  const filteredTerms = React.useMemo(() => {
    return glossaryTerms.filter((item) => {
      const matchesSubject =
        subjectFilter === 'all' || item.subject === subjectFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.term.toLowerCase().includes(q) ||
        item.clearDefinition.toLowerCase().includes(q) ||
        item.example.toLowerCase().includes(q) ||
        item.subCategory.toLowerCase().includes(q);
      return matchesSubject && matchesSearch;
    });
  }, [glossaryTerms, subjectFilter, searchQuery]);

  const activeTerm =
    filteredTerms.find((t) => t.id === selectedTermId) || filteredTerms[0];

  const speakEnglishExample = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  const handleCreateTermSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTermName.trim() || !newTermDef.trim()) return;

    const labels: Record<GlossaryTerm['subject'], string> = {
      ingles: 'Inglés',
      matematicas: 'Matemáticas',
      conocimiento: 'Conocimiento del Medio',
      lengua: 'Lengua Castellana y Literatura',
      valencia: 'Valencià: Llengua i Literatura',
      artistica: 'Educación Artística (Música y Plástica)',
      'educacion-fisica': 'Educación Física y Salud',
      valores: 'Valores Cívicos y Éticos',
    };

    onAddGlossaryTerm({
      term: newTermName.trim(),
      subject: newTermSubject,
      subjectLabel: labels[newTermSubject],
      subCategory: newTermSubCat,
      clearDefinition: newTermDef.trim(),
      example: newTermEx.trim() || 'Ejemplo práctico de clase.',
      memoryTrickOrFormula:
        newTermTrick.trim() || 'Concepto clave del temario de 5º de Primaria.',
    });

    setNewTermName('');
    setNewTermDef('');
    setNewTermEx('');
    setNewTermTrick('');
    setShowAddForm(false);
  };

  // Quiz current item
  const currentQuizTerm =
    filteredTerms[quizIndex % Math.max(1, filteredTerms.length)] ||
    glossaryTerms[0];

  const quizOptions = React.useMemo(() => {
    if (!currentQuizTerm) return [];
    const others = glossaryTerms
      .filter((t) => t.id !== currentQuizTerm.id)
      .slice(0, 3)
      .map((t) => t.term);
    return [currentQuizTerm.term, ...others].sort((a, b) => a.localeCompare(b));
  }, [currentQuizTerm, glossaryTerms]);

  const handlePickQuizOption = (option: string) => {
    setSelectedQuizAnswer(option);
    if (option === currentQuizTerm.term) {
      onCompleteActivity(`quiz-${currentQuizTerm.id}`, 20);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header & Top Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#E2E8F0]">
        <div>
          <div className="text-xs text-slate-500">
            <span>Inglés · Matemáticas · Conocimiento del Medio</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Definiciones Claras, Fórmulas y Apuntes Completos</span>
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] mt-1">
            Glosario Interactivo Ilustrado y Cuaderno de Apuntes
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 p-1 bg-slate-200/75 rounded-lg">
            <button
              type="button"
              onClick={() => setViewMode('glossary')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                viewMode === 'glossary'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              1. Glosario Ilustrado ({glossaryTerms.length})
            </button>
            <button
              type="button"
              onClick={() => setViewMode('syllabus-notes')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                viewMode === 'syllabus-notes'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              2. Temario Completo, Apuntes y Fórmulas ({COMPLETE_STUDY_UNITS.length})
            </button>
            <button
              type="button"
              onClick={() => {
                setViewMode('quiz');
                setSelectedQuizAnswer(null);
              }}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                viewMode === 'quiz'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              3. Juego de Definiciones
            </button>
          </div>

          {viewMode === 'glossary' && (
            <button
              type="button"
              onClick={() => setShowAddForm((prev) => !prev)}
              className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{showAddForm ? 'Cerrar' : 'Añadir Término'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Add New Glossary Term Form */}
      {showAddForm && viewMode === 'glossary' && (
        <form
          onSubmit={handleCreateTermSubmit}
          className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4"
        >
          <h3 className="text-base font-bold text-[#0F172A]">
            Añadir Nuevo Concepto al Glosario Interactivo
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Palabra o Concepto *
              </label>
              <input
                type="text"
                required
                value={newTermName}
                onChange={(e) => setNewTermName(e.target.value)}
                placeholder="Ej. Múltiplo / Adjetivo / Biosfera"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Asignatura
              </label>
              <select
                value={newTermSubject}
                onChange={(e) =>
                  setNewTermSubject(
                    e.target.value as GlossaryTerm['subject']
                  )
                }
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm bg-white"
              >
                <option value="matematicas">Matemáticas</option>
                <option value="ingles">Inglés</option>
                <option value="conocimiento">Conocimiento del Medio</option>
                <option value="lengua">Lengua Castellana y Literatura</option>
                <option value="valencia">Valencià: Llengua i Literatura</option>
                <option value="artistica">Educación Artística (Música y Plástica)</option>
                <option value="educacion-fisica">Educación Física y Salud</option>
                <option value="valores">Valores Cívicos y Éticos</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Categoría
              </label>
              <select
                value={newTermSubCat}
                onChange={(e) =>
                  setNewTermSubCat(e.target.value as GlossaryTerm['subCategory'])
                }
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm bg-white"
              >
                <option value="Operaciones y Cálculo">Operaciones y Cálculo</option>
                <option value="Resolución y Geometría">Resolución y Geometría</option>
                <option value="Vocabulario Esencial">Vocabulario Esencial (Inglés)</option>
                <option value="Gramática">Gramática (Inglés)</option>
                <option value="Naturaleza y Seres Vivos">Naturaleza y Seres Vivos</option>
                <option value="Sociedad, Geografía e Historia">
                  Sociedad, Geografía e Historia
                </option>
                <option value="Gramática, Ortografía y Literatura">
                  Gramática, Ortografía y Literatura (Lengua)
                </option>
                <option value="Ortografia, Gramàtica i Vocabulari">
                  Ortografia, Gramàtica i Vocabulari (Valencià)
                </option>
                <option value="Lenguaje Musical y Plástica">
                  Lenguaje Musical y Plástica
                </option>
                <option value="Deporte, Pilota Valenciana y Salud">
                  Deporte, Pilota Valenciana y Salud
                </option>
                <option value="Convivencia, Empatía y Ciudadanía">
                  Convivencia, Empatía y Ciudadanía
                </option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Definición Clara *
              </label>
              <textarea
                rows={2}
                required
                value={newTermDef}
                onChange={(e) => setNewTermDef(e.target.value)}
                placeholder="Explica qué significa con palabras sencillas..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Ejemplo Práctico *
              </label>
              <textarea
                rows={2}
                required
                value={newTermEx}
                onChange={(e) => setNewTermEx(e.target.value)}
                placeholder="Pon un ejemplo claro..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-4">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Fórmula o Truco Mnemotécnico
              </label>
              <input
                type="text"
                value={newTermTrick}
                onChange={(e) => setNewTermTrick(e.target.value)}
                placeholder="Ej. Fórmula o regla para recordarlo siempre..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Guardar en el Glosario
            </button>
          </div>
        </form>
      )}

      {/* VIEW 1: INTERACTIVE ILLUSTRATED GLOSSARY */}
      {viewMode === 'glossary' && (
        <div className="space-y-6">
          {/* Search & Subject Filter Bar */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: 'Todas' },
                { id: 'matematicas', label: 'Matemáticas' },
                { id: 'ingles', label: 'Inglés' },
                { id: 'conocimiento', label: 'Conocimiento' },
                { id: 'lengua', label: 'Lengua Castellana' },
                { id: 'valencia', label: 'Valencià' },
                { id: 'artistica', label: 'Música y Plástica' },
                { id: 'educacion-fisica', label: 'E. Física' },
                { id: 'valores', label: 'Valores' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSubjectFilter(tab.id as any)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    subjectFilter === tab.id
                      ? 'bg-[#0284C7] text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar término (ej. multiplicación, ecosistema, does...)"
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#0284C7]"
              />
            </div>
          </div>

          {/* Two-Zone Glossary Split: Term Cards Grid (Left 7 cols) + Detailed Visual Inspector (Right 5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Grid of Illustrated Terms */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredTerms.map((item) => {
                const isSelected = activeTerm?.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedTermId(item.id)}
                    className={`p-4 rounded-xl border text-left transition-colors flex flex-col justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#0284C7]/8 border-[#0284C7] shadow-xs'
                        : 'bg-white border-[#E2E8F0] hover:bg-slate-50'
                    }`}
                  >
                    <div className="space-y-2.5 w-full">
                      <GlossaryVisualIllustration type={item.visualIconType} />
                      <div className="text-[11px] text-slate-500">
                        <span className="font-semibold text-[#0284C7]">
                          {item.subjectLabel}
                        </span>
                        <span className="mx-1.5" aria-hidden="true">·</span>
                        <span>{item.subCategory}</span>
                      </div>
                      <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                        {item.term}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {item.clearDefinition}
                      </p>
                    </div>

                    <div className="text-xs font-semibold text-[#0284C7] pt-1">
                      Ver ficha completa y ejemplo →
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Inspector: Complete Visual Concept Sheet */}
            {activeTerm && (
              <div className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-5 lg:sticky lg:top-20">
                <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
                  <div>
                    <span className="font-semibold text-[#0284C7]">
                      {activeTerm.subjectLabel}
                    </span>
                    <span className="mx-1.5" aria-hidden="true">·</span>
                    <span>{activeTerm.subCategory}</span>
                  </div>
                  <span className="font-mono text-[11px]">FICHA ILUSTRADA</span>
                </div>

                <GlossaryVisualIllustration type={activeTerm.visualIconType} />

                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-[#0F172A]">
                      {activeTerm.term}
                    </h3>
                    {activeTerm.englishAudioText && (
                      <button
                        type="button"
                        onClick={() =>
                          speakEnglishExample(activeTerm.englishAudioText!)
                        }
                        className="px-3 py-1.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shrink-0 whitespace-nowrap"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Escuchar</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Clear Definition */}
                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    1. Definición Clara
                  </div>
                  <p className="text-sm text-[#0F172A] leading-relaxed">
                    {activeTerm.clearDefinition}
                  </p>
                </div>

                {/* Practical Example */}
                <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg space-y-1.5">
                  <div className="text-xs font-bold text-[#0284C7] uppercase">
                    2. Ejemplo Práctico
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {activeTerm.example}
                  </p>
                </div>

                {/* Formula or Memory Trick */}
                <div className="p-4 bg-[#059669]/8 border border-[#059669]/25 rounded-lg space-y-1.5">
                  <div className="text-xs font-bold text-[#059669] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>3. FÓRMULA O TRUCO DE MEMORIA</span>
                  </div>
                  <p className="text-xs font-mono font-semibold text-[#0F172A] leading-relaxed">
                    {activeTerm.memoryTrickOrFormula}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* VIEW 2: COMPLETE SYLLABUS, SUMMARIES, NOTES & FORMULAS FOR ALL SUBJECTS */}
      {viewMode === 'syllabus-notes' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 bg-white border border-[#E2E8F0] p-4 rounded-xl">
            <span className="text-xs font-bold text-slate-600 mr-2">
              Elige la asignatura para ver su Temario Completo, Resúmenes y Fórmulas:
            </span>
            {[
              { id: 'matematicas', label: 'Matemáticas (8 Unidades)' },
              { id: 'ingles', label: 'Inglés (8 Units)' },
              { id: 'conocimiento', label: 'Conocimiento del Medio (8 Unidades)' },
              { id: 'lengua', label: 'Lengua Castellana (6 Unidades)' },
              { id: 'valencia', label: 'Valencià (6 Unitats)' },
              { id: 'artistica', label: 'Música y Plástica (4 Unidades)' },
              { id: 'educacion-fisica', label: 'Educación Física y Salud' },
              { id: 'valores', label: 'Valores Cívicos y Éticos' },
            ].map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSubjectFilter(s.id as any)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  (subjectFilter === 'all' ? 'matematicas' : subjectFilter) === s.id
                    ? 'bg-[#0284C7] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <SubjectStudyBook
            subject={subjectFilter === 'all' ? 'matematicas' : subjectFilter}
            completedIds={completedIds}
            onMarkUnitStudied={onCompleteActivity}
            onOpenGlossaryForSubject={(subj) => {
              setSubjectFilter(subj);
              setViewMode('glossary');
            }}
          />
        </div>
      )}

      {/* VIEW 3: INTERACTIVE GLOSSARY QUIZ */}
      {viewMode === 'quiz' && currentQuizTerm && (
        <div className="max-w-3xl mx-auto bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-4">
            <span>
              Reto del Glosario · {currentQuizTerm.subjectLabel} ({currentQuizTerm.subCategory})
            </span>
            <span className="font-mono font-semibold text-[#059669]">
              +20 XP por acierto
            </span>
          </div>

          <GlossaryVisualIllustration type={currentQuizTerm.visualIconType} />

          <div className="space-y-2">
            <div className="text-xs font-bold text-[#0284C7] uppercase">
              Adivina a qué término del glosario corresponde esta definición:
            </div>
            <p className="text-lg font-bold text-[#0F172A] leading-relaxed">
              "{currentQuizTerm.clearDefinition}"
            </p>
            <p className="text-xs text-slate-500">
              Pista / Ejemplo: {currentQuizTerm.example}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quizOptions.map((opt) => {
              const isChosen = selectedQuizAnswer === opt;
              const isCorrect = opt === currentQuizTerm.term;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handlePickQuizOption(opt)}
                  className={`p-4 rounded-xl border text-left text-sm font-bold transition-colors flex items-center justify-between gap-2 ${
                    isChosen
                      ? isCorrect
                        ? 'bg-[#059669] border-[#059669] text-white'
                        : 'bg-[#DC2626] border-[#DC2626] text-white'
                      : 'bg-white border-slate-300 text-[#0F172A] hover:border-[#0284C7]'
                  }`}
                >
                  <span>{opt}</span>
                  {isChosen && <span>{isCorrect ? '✓ ¡Exacto!' : '✗ Prueba otra'}</span>}
                </button>
              );
            })}
          </div>

          {selectedQuizAnswer && (
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="text-xs font-semibold text-slate-700">
                {selectedQuizAnswer === currentQuizTerm.term ? (
                  <span className="text-[#059669] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>● ¡Correcto! Has ganado +20 XP.</span>
                  </span>
                ) : (
                  <span className="text-[#D97706] flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    <span>▲ Fíjate bien en la ilustración y en el ejemplo de arriba.</span>
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  setQuizIndex((prev) => prev + 1);
                  setSelectedQuizAnswer(null);
                }}
                className="px-4 py-2 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Siguiente Definición →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
