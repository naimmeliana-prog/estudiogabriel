import React, { useState } from 'react';
import {
  Volume2,
  Mic,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  BookOpen,
  HelpCircle,
} from 'lucide-react';
import {
  ENGLISH_PRONUNCIATION_ITEMS,
  ENGLISH_GRAMMAR_EXERCISES,
  PronunciationItem,
} from '../data/curriculumData';

interface EnglishModuleProps {
  completedIds: string[];
  onCompleteItem: (id: string, xp: number) => void;
}

export const EnglishModule: React.FC<EnglishModuleProps> = ({
  completedIds,
  onCompleteItem,
}) => {
  const [subTab, setSubTab] = useState<'pronunciation' | 'grammar'>('pronunciation');
  const [selectedPronIndex, setSelectedPronIndex] = useState(0);
  const [speechRate, setSpeechRate] = useState<number>(0.85);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [spokenTranscript, setSpokenTranscript] = useState<string>('');
  const [oralFeedback, setOralFeedback] = useState<{
    status: 'idle' | 'success' | 'try-again';
    message: string;
  }>({ status: 'idle', message: '' });
  const [practicedSyllables, setPracticedSyllables] = useState<number[]>([]);

  // Grammar state
  const [selectedGrammarIndex, setSelectedGrammarIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [grammarStatus, setGrammarStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [showGrammarHint, setShowGrammarHint] = useState(false);

  const currentPron: PronunciationItem =
    ENGLISH_PRONUNCIATION_ITEMS[selectedPronIndex] || ENGLISH_PRONUNCIATION_ITEMS[0];

  const currentGrammar =
    ENGLISH_GRAMMAR_EXERCISES[selectedGrammarIndex] || ENGLISH_GRAMMAR_EXERCISES[0];

  // Combine target words and distractors in a deterministic shuffled order based on exercise id
  const availableWordBank = React.useMemo(() => {
    const all = [...currentGrammar.targetWords, ...currentGrammar.distractorWords];
    return all.sort((a, b) => a.localeCompare(b));
  }, [currentGrammar]);

  const speakText = (text: string, rateOverride?: number) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.rate = rateOverride ?? speechRate;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleSelectPronItem = (index: number) => {
    setSelectedPronIndex(index);
    setSpokenTranscript('');
    setOralFeedback({ status: 'idle', message: '' });
    setPracticedSyllables([]);
  };

  const handleToggleSyllable = (idx: number, chunk: string) => {
    speakText(chunk, 0.7);
    if (!practicedSyllables.includes(idx)) {
      setPracticedSyllables((prev) => [...prev, idx]);
    }
  };

  const handleStartVoiceRecognition = () => {
    const SpeechRecognitionAPI =
      (window as unknown as { SpeechRecognition?: any; webkitSpeechRecognition?: any })
        .SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: any }).webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      setOralFeedback({
        status: 'try-again',
        message:
          'Tu navegador no tiene reconocimiento de micrófono activo. ¡Usa los botones de sílabas de arriba y pulsa "Confirmar Práctica en Voz Alta" para ganar tus puntos!',
      });
      return;
    }

    try {
      const recognition = new SpeechRecognitionAPI();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 2;

      setIsListening(true);
      setOralFeedback({ status: 'idle', message: 'Escuchando tu pronunciación en inglés...' });

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript.trim();
        setSpokenTranscript(transcript);
        const normalizedTarget = currentPron.wordOrPhrase
          .toLowerCase()
          .replace(/[^a-z0-9 ]/g, '');
        const normalizedSpoken = transcript.toLowerCase().replace(/[^a-z0-9 ]/g, '');

        const targetWordsArr = normalizedTarget.split(' ');
        const matchedWords = targetWordsArr.filter((w) => normalizedSpoken.includes(w));

        if (
          normalizedSpoken.includes(normalizedTarget) ||
          matchedWords.length >= Math.max(1, Math.ceil(targetWordsArr.length * 0.6))
        ) {
          setOralFeedback({
            status: 'success',
            message: `¡Excelente pronunciación! Has dicho "${transcript}". +25 XP ganados.`,
          });
          onCompleteItem(currentPron.id, 25);
        } else {
          setOralFeedback({
            status: 'try-again',
            message: `Hemos escuchado "${transcript}". Escucha el audio lento (0.65x), fíjate en el truco fonético y vuelve a intentarlo.`,
          });
        }
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
        setOralFeedback({
          status: 'try-again',
          message:
            'No se pudo detectar el micrófono. Practica repitiendo en voz alta con el botón de audio lento y confirma abajo.',
        });
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  const handleConfirmManualPractice = () => {
    setOralFeedback({
      status: 'success',
      message: `¡Muy bien! Has practicado la pronunciación de "${currentPron.wordOrPhrase}" (/ ${currentPron.phoneticSpanish} /). +20 XP.`,
    });
    onCompleteItem(currentPron.id, 20);
  };

  // Grammar handlers
  const handleAddWordToSentence = (word: string) => {
    setGrammarStatus('idle');
    setSelectedWords((prev) => [...prev, word]);
  };

  const handleRemoveWordAt = (index: number) => {
    setGrammarStatus('idle');
    setSelectedWords((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCheckGrammar = () => {
    const built = selectedWords.join(' ');
    const expected = currentGrammar.targetWords.join(' ');
    if (built === expected) {
      setGrammarStatus('correct');
      speakText(expected, 0.85);
      onCompleteItem(currentGrammar.id, 35);
    } else {
      setGrammarStatus('incorrect');
    }
  };

  const handleSelectGrammarIndex = (idx: number) => {
    setSelectedGrammarIndex(idx);
    setSelectedWords([]);
    setGrammarStatus('idle');
    setShowGrammarHint(false);
  };

  return (
    <div className="space-y-8">
      {/* Sub-navigation bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E2E8F0]">
        <div>
          <div className="text-xs text-slate-500">
            <span>Inglés · 5º de Primaria</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Pronunciación, Oral y Gramática Visual</span>
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] mt-1">
            Laboratorio Interactivo de Inglés
          </h2>
        </div>

        <div className="flex items-center gap-1 p-1 bg-slate-200/75 rounded-lg self-start">
          <button
            type="button"
            onClick={() => setSubTab('pronunciation')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
              subTab === 'pronunciation'
                ? 'bg-white text-[#0F172A] shadow-xs'
                : 'text-slate-600 hover:text-[#0F172A]'
            }`}
          >
            1. Pronunciación y Oral ({ENGLISH_PRONUNCIATION_ITEMS.length})
          </button>
          <button
            type="button"
            onClick={() => setSubTab('grammar')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
              subTab === 'grammar'
                ? 'bg-white text-[#0F172A] shadow-xs'
                : 'text-slate-600 hover:text-[#0F172A]'
            }`}
          >
            2. Constructor de Gramática ({ENGLISH_GRAMMAR_EXERCISES.length})
          </button>
          <button
            type="button"
            onClick={() => setSubTab('notes')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
              subTab === 'notes'
                ? 'bg-white text-[#0F172A] shadow-xs'
                : 'text-slate-600 hover:text-[#0F172A]'
            }`}
          >
            3. Temario, Apuntes y Fórmulas
          </button>
        </div>
      </div>

      {subTab === 'notes' ? (
        <SubjectStudyBook
          subject="ingles"
          completedIds={completedIds}
          onMarkUnitStudied={onCompleteItem}
          onOpenGlossaryForSubject={onOpenGlossary ? () => onOpenGlossary() : undefined}
        />
      ) : subTab === 'pronunciation' ? (
        /* TWO-ZONE SANDBOX LAYOUT FOR PRONUNCIATION */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT ZONE (7 cols): Interactive Phonetic & Oral Stage */}
          <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 border-b border-slate-100 pb-4">
              <div>
                <span className="font-semibold text-[#0284C7]">{currentPron.category}</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Tarjeta {selectedPronIndex + 1} de {ENGLISH_PRONUNCIATION_ITEMS.length}</span>
              </div>
              <div className="font-mono tabular-nums">
                {completedIds.includes(currentPron.id) ? (
                  <span className="text-[#059669] font-semibold">● PRONUNCIACIÓN SUPERADA</span>
                ) : (
                  <span className="text-[#D97706] font-semibold">◆ PENDIENTE DE PRACTICAR</span>
                )}
              </div>
            </div>

            {/* Primary English Phrase & Phonetic Guide */}
            <div className="space-y-3 py-2">
              <div className="text-xs font-medium text-slate-500">
                Se escribe en inglés:
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
                {currentPron.wordOrPhrase}
              </div>
              <div className="text-base text-slate-600">
                Significado: <strong className="text-[#0F172A]">{currentPron.translation}</strong>
              </div>
            </div>

            {/* Spanish-friendly Phonetic Box */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold text-[#0284C7]">
                  CÓMO SUENA EN TU BOCA (GUÍA FONÉTICA)
                </span>
                <span className="text-xs font-mono text-slate-500">
                  IPA: {currentPron.ipa}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-semibold text-[#0284C7]">
                / {currentPron.phoneticSpanish} /
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong className="text-[#0F172A]">Truco para no fallar: </strong>
                {currentPron.silentLetterOrTrick}
              </p>
            </div>

            {/* Interactive Syllable Breakdown */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-600">
                Paso 1: Pulsa cada golpe de voz para escucharlo y repetirlo por partes:
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {currentPron.syllableChunks.map((chunk, idx) => {
                  const done = practicedSyllables.includes(idx);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleToggleSyllable(idx, chunk)}
                      className={`px-4 py-2.5 rounded-lg font-mono text-sm font-semibold border transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 ${
                        done
                          ? 'bg-[#059669]/10 border-[#059669] text-[#059669]'
                          : 'bg-white border-slate-300 text-[#0F172A] hover:border-[#0284C7]'
                      }`}
                    >
                      <Volume2 className="w-4 h-4 shrink-0" />
                      <span>{chunk}</span>
                      {done && <span className="text-xs">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Audio Speed & Playback Controls */}
            <div className="pt-2 space-y-3">
              <div className="text-xs font-semibold text-slate-600">
                Paso 2: Escucha la palabra completa y su frase de ejemplo:
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => speakText(currentPron.wordOrPhrase, 0.9)}
                  className="px-4 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Escuchar Normal (1.0x)</span>
                </button>
                <button
                  type="button"
                  onClick={() => speakText(currentPron.wordOrPhrase, 0.6)}
                  className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Cámara Lenta (0.6x)</span>
                </button>
                <button
                  type="button"
                  onClick={() => speakText(currentPron.exampleSentence, 0.8)}
                  className="px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-[#0F172A] text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <BookOpen className="w-4 h-4 text-[#0284C7]" />
                  <span>Escuchar Frase Completa</span>
                </button>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80 text-sm">
                <div className="font-medium text-[#0F172A]">
                  "{currentPron.exampleSentence}"
                </div>
                <div className="text-slate-500 text-xs mt-0.5">
                  {currentPron.exampleTranslation}
                </div>
              </div>
            </div>

            {/* Oral Practice Verification */}
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <div className="text-xs font-semibold text-slate-600">
                Paso 3: ¡Tu turno de hablar! Pronúncialo en voz alta:
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleStartVoiceRecognition}
                  disabled={isListening}
                  className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 ${
                    isListening
                      ? 'bg-[#D97706] text-white'
                      : 'bg-[#059669] hover:bg-[#047857] text-white'
                  }`}
                >
                  <Mic className="w-4 h-4" />
                  <span>
                    {isListening ? 'Escuchando... ¡Habla ahora!' : 'Probar con Micrófono'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleConfirmManualPractice}
                  className="px-4 py-2.5 bg-white border border-slate-300 hover:border-[#059669] text-[#0F172A] text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Ya lo he repetido 3 veces en voz alta (+20 XP)</span>
                </button>
              </div>

              {oralFeedback.status !== 'idle' && (
                <div
                  className={`p-4 rounded-lg border text-sm flex items-start gap-3 ${
                    oralFeedback.status === 'success'
                      ? 'bg-[#059669]/10 border-[#059669]/30 text-[#0F172A]'
                      : 'bg-[#D97706]/10 border-[#D97706]/30 text-[#0F172A]'
                  }`}
                >
                  {oralFeedback.status === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <div className="font-semibold text-xs">
                      {oralFeedback.status === 'success'
                        ? '● PRÁCTICA ORAL COMPLETADA'
                        : '▲ CONSEJO DE MEJORA FONÉTICA'}
                    </div>
                    <p>{oralFeedback.message}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT ZONE (5 cols): Control & Word Deck */}
          <div className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-[#0F172A]">
                Repertorio Oral de 5º de Primaria
              </h3>
              <span className="text-xs font-mono text-slate-500 tabular-nums">
                {ENGLISH_PRONUNCIATION_ITEMS.filter((i) => completedIds.includes(i.id)).length}/
                {ENGLISH_PRONUNCIATION_ITEMS.length} dominadas
              </span>
            </div>

            {/* Speed calibration slider */}
            <div className="p-4 bg-[#F8FAFC] rounded-lg border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label htmlFor="speech-rate-slider" className="font-semibold text-slate-700">
                  Velocidad del Profesor Nativo:
                </label>
                <span className="font-mono font-semibold text-[#0284C7] tabular-nums">
                  {speechRate.toFixed(2)}x
                </span>
              </div>
              <input
                id="speech-rate-slider"
                type="range"
                min="0.5"
                max="1.1"
                step="0.05"
                value={speechRate}
                onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                className="w-full accent-[#0284C7] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>0.50x (Muy lento)</span>
                <span>0.85x (Estudio)</span>
                <span>1.10x (Rápido)</span>
              </div>
            </div>

            <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
              {ENGLISH_PRONUNCIATION_ITEMS.map((item, idx) => {
                const isSelected = idx === selectedPronIndex;
                const isDone = completedIds.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectPronItem(idx)}
                    className={`w-full text-left p-3.5 rounded-lg border transition-colors flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#0284C7]/8 border-[#0284C7]'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="text-xs text-slate-500">
                        <span>{item.category}</span>
                        <span className="mx-1.5" aria-hidden="true">·</span>
                        <span className="font-mono text-[#0284C7]">/{item.phoneticSpanish}/</span>
                      </div>
                      <div className="font-bold text-sm text-[#0F172A] truncate mt-0.5">
                        {item.wordOrPhrase}
                      </div>
                      <div className="text-xs text-slate-500 truncate">
                        {item.translation}
                      </div>
                    </div>
                    <div className="shrink-0 text-xs font-mono">
                      {isDone ? (
                        <span className="text-[#059669] font-semibold">● Hecho</span>
                      ) : (
                        <span className="text-slate-400">Practicar →</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* GRAMMAR SENTENCE BUILDER SANDBOX */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 border-b border-slate-100 pb-4">
              <div>
                <span className="font-semibold text-[#0284C7]">{currentGrammar.level}</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Reto {selectedGrammarIndex + 1} de {ENGLISH_GRAMMAR_EXERCISES.length}</span>
              </div>
              <div className="font-mono tabular-nums">
                {completedIds.includes(currentGrammar.id) ? (
                  <span className="text-[#059669] font-semibold">● RETO GRAMATICAL SUPERADO</span>
                ) : (
                  <span className="text-[#D97706] font-semibold">◆ +35 XP AL RESOLVER</span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#0F172A]">
                {currentGrammar.topic}
              </h3>
              <p className="text-sm text-slate-600">{currentGrammar.instruction}</p>
            </div>

            {/* Spanish sentence to translate */}
            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
              <div className="text-xs text-slate-500 font-medium">Frase en español:</div>
              <div className="text-lg font-bold text-[#0F172A] mt-1">
                "{currentGrammar.spanishPrompt}"
              </div>
            </div>

            {/* Construction Drop Zone */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Tu frase en inglés (pulsa una palabra puesta para quitarla):</span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedWords([]);
                    setGrammarStatus('idle');
                  }}
                  className="text-slate-600 hover:text-[#0F172A] font-medium flex items-center gap-1 whitespace-nowrap shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reiniciar frase</span>
                </button>
              </div>

              <div className="min-h-[72px] p-4 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50/60 flex flex-wrap items-center gap-2">
                {selectedWords.length === 0 ? (
                  <span className="text-xs text-slate-400">
                    Pulsa los bloques de palabras de abajo en el orden correcto...
                  </span>
                ) : (
                  selectedWords.map((word, idx) => (
                    <button
                      key={`${word}-${idx}`}
                      type="button"
                      onClick={() => handleRemoveWordAt(idx)}
                      className="px-3.5 py-2 bg-[#0284C7] text-white text-sm font-semibold rounded-lg shadow-2xs hover:bg-[#0369A1] transition-colors whitespace-nowrap shrink-0"
                    >
                      {word}
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Word Bank */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-600">
                Banco de bloques (¡Cuidado! Hay {currentGrammar.distractorWords.length} palabras trampa que sobran):
              </div>
              <div className="flex flex-wrap gap-2">
                {availableWordBank.map((word, idx) => {
                  const usedCount = selectedWords.filter((w) => w === word).length;
                  const totalCount = availableWordBank.filter((w) => w === word).length;
                  const isDisabled = usedCount >= totalCount;

                  return (
                    <button
                      key={`${word}-${idx}`}
                      type="button"
                      disabled={isDisabled}
                      onClick={() => handleAddWordToSentence(word)}
                      className={`px-3.5 py-2 rounded-lg text-sm font-semibold border transition-colors whitespace-nowrap shrink-0 ${
                        isDisabled
                          ? 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed'
                          : 'bg-white border-slate-300 text-[#0F172A] hover:border-[#0284C7] hover:bg-[#0284C7]/5'
                      }`}
                    >
                      {word}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Verify & Hint Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCheckGrammar}
                disabled={selectedWords.length === 0}
                className="px-5 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] disabled:bg-slate-300 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Comprobar Frase
              </button>
              <button
                type="button"
                onClick={() => setShowGrammarHint((prev) => !prev)}
                className="px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-[#0F172A] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
              >
                <HelpCircle className="w-4 h-4 text-[#D97706]" />
                <span>{showGrammarHint ? 'Ocultar Truco Gramatical' : 'Ver Truco Gramatical'}</span>
              </button>
              {selectedGrammarIndex < ENGLISH_GRAMMAR_EXERCISES.length - 1 && (
                <button
                  type="button"
                  onClick={() => handleSelectGrammarIndex(selectedGrammarIndex + 1)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0F172A] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ml-auto"
                >
                  <span>Siguiente Reto</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Feedback Banner */}
            {grammarStatus === 'correct' && (
              <div className="p-4 rounded-lg bg-[#059669]/10 border border-[#059669]/30 text-sm space-y-1">
                <div className="font-bold text-[#059669] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>● ¡CORRECTO! +35 XP · "{currentGrammar.targetWords.join(' ')}"</span>
                </div>
                <p className="text-slate-700">{currentGrammar.grammarRuleMnemonic}</p>
              </div>
            )}

            {grammarStatus === 'incorrect' && (
              <div className="p-4 rounded-lg bg-[#DC2626]/10 border border-[#DC2626]/30 text-sm space-y-1">
                <div className="font-bold text-[#DC2626] flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>▲ CASI LO TIENES · REVISA EL ORDEN O EL VERBO</span>
                </div>
                <p className="text-slate-700">
                  Pista: {currentGrammar.grammarRuleMnemonic} (La frase empieza por{' '}
                  <strong className="font-mono">"{currentGrammar.targetWords[0]} {currentGrammar.targetWords[1]}"</strong>).
                </p>
              </div>
            )}

            {showGrammarHint && (
              <div className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-200 text-sm space-y-1">
                <div className="font-bold text-[#0284C7] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>{currentGrammar.grammarRuleTitle}</span>
                </div>
                <p className="text-slate-700">{currentGrammar.grammarRuleMnemonic}</p>
              </div>
            )}
          </div>

          {/* RIGHT ZONE: Grammar Topics Selector */}
          <div className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4">
            <h3 className="text-base font-bold text-[#0F172A] border-b border-slate-100 pb-3">
              Misiones de Gramática (5º Primaria)
            </h3>
            <div className="space-y-2.5">
              {ENGLISH_GRAMMAR_EXERCISES.map((ex, idx) => {
                const isSelected = idx === selectedGrammarIndex;
                const isDone = completedIds.includes(ex.id);
                return (
                  <button
                    key={ex.id}
                    type="button"
                    onClick={() => handleSelectGrammarIndex(idx)}
                    className={`w-full text-left p-4 rounded-lg border transition-colors flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#0284C7]/8 border-[#0284C7]'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="text-xs text-slate-500">{ex.level}</div>
                      <div className="font-bold text-sm text-[#0F172A] mt-0.5">
                        {ex.topic}
                      </div>
                      <div className="text-xs text-slate-500 truncate mt-0.5">
                        "{ex.spanishPrompt}"
                      </div>
                    </div>
                    <span className="text-xs font-mono shrink-0">
                      {isDone ? (
                        <span className="text-[#059669] font-semibold">● Superado</span>
                      ) : (
                        <span className="text-slate-400">Abrir →</span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
