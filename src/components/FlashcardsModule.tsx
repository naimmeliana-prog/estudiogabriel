import React, { useState } from 'react';
import {
  Layers,
  Volume2,
  Sparkles,
  RotateCw,
  Plus,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';
import { AdaptiveFlashcard, SubjectId, GradeId } from '../data/curriculumData';

interface FlashcardsModuleProps {
  cards: AdaptiveFlashcard[];
  onRateCard: (cardId: string, newBox: 1 | 2 | 3, xp: number) => void;
  onAddCustomCard: (newCard: Omit<AdaptiveFlashcard, 'id' | 'box' | 'timesCorrect'>) => void;
}

export const FlashcardsModule: React.FC<FlashcardsModuleProps> = ({
  cards,
  onRateCard,
  onAddCustomCard,
}) => {
  const [subjectFilter, setSubjectFilter] = useState<'all' | SubjectId>('all');
  const [boxFilter, setBoxFilter] = useState<'adaptive' | 1 | 2 | 3>('adaptive');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showCreator, setShowCreator] = useState<boolean>(false);

  // New card form state
  const [newSubject, setNewSubject] = useState<SubjectId>('conocimiento');
  const [newGrade, setNewGrade] = useState<GradeId>('5-primaria');
  const [newTopic, setNewTopic] = useState<string>('');
  const [newQuestion, setNewQuestion] = useState<string>('');
  const [newAnswer, setNewAnswer] = useState<string>('');
  const [newMnemonic, setNewMnemonic] = useState<string>('');

  // Filter and sort cards adaptively (Box 1 first, then Box 2, then Box 3)
  const filteredCards = React.useMemo(() => {
    return cards
      .filter((c) => (subjectFilter === 'all' ? true : c.subject === subjectFilter))
      .filter((c) => (boxFilter === 'adaptive' ? true : c.box === boxFilter))
      .sort((a, b) => a.box - b.box);
  }, [cards, subjectFilter, boxFilter]);

  const currentCard = filteredCards[currentIndex] || filteredCards[0];

  const speakCardAudio = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  const handleGradeCurrentCard = (targetBox: 1 | 2 | 3) => {
    if (!currentCard) return;
    const earnedXp = targetBox === 3 ? 25 : targetBox === 2 ? 15 : 10;
    onRateCard(currentCard.id, targetBox, earnedXp);
    setIsFlipped(false);
    setShowHint(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleCreateCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim() || !newAnswer.trim()) return;

    const subjectLabels: Record<SubjectId, string> = {
      ingles: 'Inglés',
      matematicas: 'Matemáticas',
      conocimiento: 'Conocimiento del Medio',
      lengua: 'Lengua Castellana',
      valencia: 'Valencià',
      otras: 'Otras Materias',
    };

    onAddCustomCard({
      gradeId: newGrade,
      subject: newSubject,
      subjectLabel: subjectLabels[newSubject],
      topic: newTopic.trim() || 'Repaso Personalizado',
      frontQuestion: newQuestion.trim(),
      backAnswer: newAnswer.trim(),
      mnemonicHint:
        newMnemonic.trim() || 'Asocia la respuesta con una imagen mental clara.',
    });

    setNewTopic('');
    setNewQuestion('');
    setNewAnswer('');
    setNewMnemonic('');
    setShowCreator(false);
  };

  const box1Count = cards.filter((c) => c.box === 1).length;
  const box2Count = cards.filter((c) => c.box === 2).length;
  const box3Count = cards.filter((c) => c.box === 3).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E2E8F0]">
        <div>
          <div className="text-xs text-slate-500">
            <span>Repaso Espaciado (Método Leitner)</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Prioriza automáticamente lo que más te cuesta</span>
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] mt-1">
            Tarjetas Didácticas de Repaso Adaptativo
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setShowCreator((prev) => !prev)}
          className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 self-start whitespace-nowrap shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>{showCreator ? 'Cerrar Creador' : 'Añadir Tarjeta de Clase'}</span>
        </button>
      </div>

      {/* Custom Flashcard Creator Drawer */}
      {showCreator && (
        <form
          onSubmit={handleCreateCardSubmit}
          className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-[#0F172A]">
              Crear Nueva Tarjeta Didáctica para el Temario
            </h3>
            <span className="text-xs text-slate-500">
              Se guardará automáticamente en la Caja 1 (Repaso Prioritario)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Materia
              </label>
              <select
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value as SubjectId)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm bg-white"
              >
                <option value="ingles">Inglés</option>
                <option value="matematicas">Matemáticas</option>
                <option value="conocimiento">Conocimiento del Medio / Ciencias</option>
                <option value="lengua">Lengua Castellana</option>
                <option value="valencia">Valencià</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Curso
              </label>
              <select
                value={newGrade}
                onChange={(e) => setNewGrade(e.target.value as GradeId)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm bg-white"
              >
                <option value="5-primaria">5º de Primaria (Foco)</option>
                <option value="6-primaria">6º de Primaria</option>
                <option value="1-eso">1º de ESO</option>
                <option value="2-eso">2º de ESO</option>
                <option value="3-eso">3º de ESO</option>
                <option value="4-eso">4º de ESO</option>
                <option value="1-bach">1º de Bachillerato</option>
                <option value="2-bach">2º de Bachillerato</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Tema o Unidad
              </label>
              <input
                type="text"
                value={newTopic}
                onChange={(e) => setNewTopic(e.target.value)}
                placeholder="Ej. Verbos Irregulares / Fracciones"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Pregunta (Cara Delantera) *
              </label>
              <textarea
                rows={2}
                required
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Escribe la pregunta que quieres repasar..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Respuesta Clara (Cara Trasera) *
              </label>
              <textarea
                rows={2}
                required
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                placeholder="Escribe la respuesta correcta y concisa..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-4">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Truco Mnemotécnico o Pista Visual (Opcional)
              </label>
              <input
                type="text"
                value={newMnemonic}
                onChange={(e) => setNewMnemonic(e.target.value)}
                placeholder="Ej. Recuerda la rima o inicial..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Guardar Tarjeta en mi Mazo
            </button>
          </div>
        </form>
      )}

      {/* TWO-ZONE SANDBOX FOR ADAPTIVE FLASHCARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT STAGE (7 cols): Interactive Flashcard */}
        <div className="lg:col-span-7 space-y-6">
          {/* Subject Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/75 rounded-lg">
            {[
              { id: 'all', label: 'Cola Inteligente (Todas)' },
              { id: 'ingles', label: 'Inglés' },
              { id: 'matematicas', label: 'Matemáticas' },
              { id: 'conocimiento', label: 'Conocimiento del Medio' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setSubjectFilter(tab.id as any);
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  subjectFilter === tab.id
                    ? 'bg-white text-[#0F172A] shadow-xs'
                    : 'text-slate-600 hover:text-[#0F172A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {currentCard ? (
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 border-b border-slate-100 pb-4">
                <div>
                  <span className="font-semibold text-[#0284C7]">
                    {currentCard.subjectLabel}
                  </span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span>{currentCard.topic}</span>
                </div>
                <div className="font-mono tabular-nums">
                  {currentCard.box === 1 && (
                    <span className="text-[#DC2626] font-semibold">
                      ▲ CAJA 1 · PRIORIDAD ALTA
                    </span>
                  )}
                  {currentCard.box === 2 && (
                    <span className="text-[#D97706] font-semibold">
                      ◆ CAJA 2 · EN PROGRESO
                    </span>
                  )}
                  {currentCard.box === 3 && (
                    <span className="text-[#059669] font-semibold">
                      ● CAJA 3 · DOMINADA
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div
                onClick={() => setIsFlipped((prev) => !prev)}
                className="min-h-[220px] p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0284C7] transition-colors cursor-pointer flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono uppercase">
                    {isFlipped ? 'RESPUESTA EXPLICADA' : 'PREGUNTA DE REPASO'}
                  </span>
                  <span className="flex items-center gap-1 text-[#0284C7] font-semibold">
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Pulsa para girar la tarjeta</span>
                  </span>
                </div>

                <div className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug">
                  {isFlipped ? currentCard.backAnswer : currentCard.frontQuestion}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                  {currentCard.pronunciationText && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        speakCardAudio(currentCard.pronunciationText!);
                      }}
                      className="px-3.5 py-1.5 bg-[#0284C7] text-white text-xs font-semibold rounded-md flex items-center gap-1.5 whitespace-nowrap shrink-0"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Escuchar Pronunciación en Inglés</span>
                    </button>
                  )}

                  <span className="text-xs font-mono text-slate-400 tabular-nums ml-auto">
                    Tarjeta {currentIndex + 1} de {filteredCards.length}
                  </span>
                </div>
              </div>

              {/* Mnemonic Hint Trigger */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setShowHint((prev) => !prev)}
                    className="text-xs font-semibold text-slate-600 hover:text-[#0F172A] flex items-center gap-1.5 whitespace-nowrap shrink-0"
                  >
                    <HelpCircle className="w-4 h-4 text-[#D97706]" />
                    <span>
                      {showHint ? 'Ocultar Pista Mnemotécnica' : 'Ver Pista Mnemotécnica antes de girar'}
                    </span>
                  </button>
                </div>

                {showHint && (
                  <div className="p-3.5 bg-[#D97706]/10 border border-[#D97706]/30 rounded-lg text-xs text-[#0F172A] flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>
                      <strong>Pista de memoria:</strong> {currentCard.mnemonicHint}
                    </span>
                  </div>
                )}
              </div>

              {/* Adaptive Self-Grading Buttons */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="text-xs font-bold text-slate-600">
                  ¿Qué tal te sabías esta tarjeta? (El sistema adaptará cuándo vuelve a salir):
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => handleGradeCurrentCard(1)}
                    className="p-3 rounded-lg border border-[#DC2626]/40 bg-[#DC2626]/8 hover:bg-[#DC2626]/15 text-left transition-colors"
                  >
                    <div className="text-xs font-bold text-[#DC2626] flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>▲ Me cuesta (Caja 1)</span>
                    </div>
                    <div className="text-[11px] text-slate-600 mt-0.5">
                      Volverá a salir pronto (+10 XP)
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleGradeCurrentCard(2)}
                    className="p-3 rounded-lg border border-[#D97706]/40 bg-[#D97706]/8 hover:bg-[#D97706]/15 text-left transition-colors"
                  >
                    <div className="text-xs font-bold text-[#D97706]">
                      ◆ Dudo un poco (Caja 2)
                    </div>
                    <div className="text-[11px] text-slate-600 mt-0.5">
                      Repaso intermedio (+15 XP)
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleGradeCurrentCard(3)}
                    className="p-3 rounded-lg border border-[#059669]/40 bg-[#059669]/8 hover:bg-[#059669]/15 text-left transition-colors"
                  >
                    <div className="text-xs font-bold text-[#059669] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>● ¡Lo sé perfecto! (Caja 3)</span>
                    </div>
                    <div className="text-[11px] text-slate-600 mt-0.5">
                      Tarjeta dominada (+25 XP)
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 text-center space-y-3">
              <p className="text-base font-bold text-[#0F172A]">
                No hay tarjetas en este filtro específico.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubjectFilter('all');
                  setBoxFilter('adaptive');
                }}
                className="px-4 py-2 bg-[#0284C7] text-white text-xs font-semibold rounded-lg"
              >
                Ver Todas las Tarjetas
              </button>
            </div>
          )}
        </div>

        {/* RIGHT DECK (5 cols): Leitner Boxes & Queue Inspector */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4">
            <h3 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0284C7]" />
              <span>Tus 3 Cajas de Memoria Adaptativa</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Las tarjetas nuevas o difíciles están en la <strong>Caja 1</strong> para que las practiques más a menudo. Cuando las dominas, suben a la <strong>Caja 3</strong>.
            </p>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setBoxFilter('adaptive');
                  setCurrentIndex(0);
                }}
                className={`w-full p-3.5 rounded-lg border text-left transition-colors flex items-center justify-between ${
                  boxFilter === 'adaptive'
                    ? 'bg-[#0284C7]/10 border-[#0284C7]'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">
                    Modo Inteligente Automático (Recomendado)
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Ordena tus tarjetas empezando por las que más te cuestan
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-[#0284C7] tabular-nums">
                  {cards.length} tarjetas
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setBoxFilter(1);
                  setCurrentIndex(0);
                }}
                className={`w-full p-3.5 rounded-lg border text-left transition-colors flex items-center justify-between ${
                  boxFilter === 1
                    ? 'bg-[#DC2626]/10 border-[#DC2626]'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="text-xs font-bold text-[#DC2626]">
                    ▲ Caja 1: Repaso Frecuente (Lo que más cuesta)
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Tarjetas urgentes para afianzar hoy
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-[#DC2626] tabular-nums">
                  {box1Count}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setBoxFilter(2);
                  setCurrentIndex(0);
                }}
                className={`w-full p-3.5 rounded-lg border text-left transition-colors flex items-center justify-between ${
                  boxFilter === 2
                    ? 'bg-[#D97706]/10 border-[#D97706]'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="text-xs font-bold text-[#D97706]">
                    ◆ Caja 2: En Consolidación
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Casi aprendidas, un repaso más para dominarlas
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-[#D97706] tabular-nums">
                  {box2Count}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setBoxFilter(3);
                  setCurrentIndex(0);
                }}
                className={`w-full p-3.5 rounded-lg border text-left transition-colors flex items-center justify-between ${
                  boxFilter === 3
                    ? 'bg-[#059669]/10 border-[#059669]'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="text-xs font-bold text-[#059669]">
                    ● Caja 3: Tarjetas Dominadas
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Conceptos que ya te sabes con seguridad
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-[#059669] tabular-nums">
                  {box3Count}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
