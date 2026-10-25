import React, { useState } from 'react';
import {
  Eye,
  EyeOff,
  CheckCircle2,
  Sparkles,
  Compass,
  RotateCcw,
  HelpCircle,
} from 'lucide-react';
import {
  SCIENCE_CONCEPT_MAPS,
  ConceptMapTopic,
  ConceptNode,
} from '../data/curriculumData';
import { SubjectStudyBook } from './SubjectStudyBook';

interface ScienceModuleProps {
  completedIds: string[];
  onCompleteMap: (mapId: string, xp: number) => void;
  onOpenGlossary?: () => void;
}

export const ScienceModule: React.FC<ScienceModuleProps> = ({
  completedIds,
  onCompleteMap,
  onOpenGlossary,
}) => {
  const [subView, setSubView] = useState<'maps' | 'notes'>('maps');
  const [selectedMapIdx, setSelectedMapIdx] = useState<number>(0);
  const [selectedNodeId, setSelectedNodeId] = useState<string>(
    SCIENCE_CONCEPT_MAPS[0].nodes[0].id
  );
  const [isQuizMode, setIsQuizMode] = useState<boolean>(false);
  const [guessedNodes, setGuessedNodes] = useState<Record<string, string>>({});
  const [activeFlowPulse, setActiveFlowPulse] = useState<boolean>(true);

  const currentMap: ConceptMapTopic =
    SCIENCE_CONCEPT_MAPS[selectedMapIdx] || SCIENCE_CONCEPT_MAPS[0];

  const activeNode: ConceptNode =
    currentMap.nodes.find((n) => n.id === selectedNodeId) || currentMap.nodes[0];

  const quizTargetNodes = currentMap.nodes.filter((n) => n.isQuizTarget);
  const solvedQuizNodesCount = quizTargetNodes.filter(
    (n) => guessedNodes[n.id] === n.label
  ).length;

  const handleSelectMap = (idx: number) => {
    const nextMap = SCIENCE_CONCEPT_MAPS[idx];
    setSelectedMapIdx(idx);
    setSelectedNodeId(nextMap.nodes[0].id);
    setGuessedNodes({});
  };

  const handleToggleQuizMode = (enable: boolean) => {
    setSubView('maps');
    setIsQuizMode(enable);
    if (enable) {
      const firstTarget = currentMap.nodes.find((n) => n.isQuizTarget);
      if (firstTarget) setSelectedNodeId(firstTarget.id);
    }
  };

  const handleSelectQuizOption = (node: ConceptNode, option: string) => {
    const nextGuessed = { ...guessedNodes, [node.id]: option };
    setGuessedNodes(nextGuessed);

    const allSolved = quizTargetNodes.every(
      (target) => nextGuessed[target.id] === target.label
    );
    if (allSolved) {
      onCompleteMap(currentMap.id, 45);
    }
  };

  return (
    <div className="space-y-8">
      {/* Sub-header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E2E8F0]">
        <div>
          <div className="text-xs text-slate-500">
            <span>Conocimiento del Medio · 5º de Primaria</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Mapas Conceptuales, Mnemotecnia y Temario Completo</span>
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] mt-1">
            Atlas de Memoria Visual y Mapas Conceptuales
          </h2>
        </div>

        <div className="flex items-center gap-2 self-start">
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/75 rounded-lg">
            <button
              type="button"
              onClick={() => handleToggleQuizMode(false)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                subView === 'maps' && !isQuizMode
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>1. Explorar Mapa</span>
            </button>
            <button
              type="button"
              onClick={() => handleToggleQuizMode(true)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                subView === 'maps' && isQuizMode
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              <EyeOff className="w-3.5 h-3.5 text-[#D97706]" />
              <span>2. Reto Huecos ({solvedQuizNodesCount}/{quizTargetNodes.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setSubView('notes')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                subView === 'notes'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              3. Temario, Apuntes y Fórmulas
            </button>
          </div>
        </div>
      </div>

      {subView === 'notes' ? (
        <div key="science-notes-tab">
          <SubjectStudyBook
            subject="conocimiento"
            completedIds={completedIds}
            onMarkUnitStudied={onCompleteMap}
            onOpenGlossaryForSubject={onOpenGlossary ? () => onOpenGlossary() : undefined}
          />
        </div>
      ) : (
        <div key="science-maps-tab" className="space-y-8">

      {/* Topic Selector Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {SCIENCE_CONCEPT_MAPS.map((topic, idx) => {
          const isSelected = idx === selectedMapIdx;
          const isCompleted = completedIds.includes(topic.id);
          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => handleSelectMap(idx)}
              className={`p-4 rounded-xl border text-left transition-colors flex flex-col justify-between gap-2 ${
                isSelected
                  ? 'bg-[#0284C7]/8 border-[#0284C7]'
                  : 'bg-white border-[#E2E8F0] hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{topic.unitNumber.split('·')[0]}</span>
                <span className="font-mono">
                  {isCompleted ? (
                    <span className="text-[#059669] font-semibold">● Dominado</span>
                  ) : (
                    <span>+45 XP</span>
                  )}
                </span>
              </div>
              <div className="font-bold text-sm text-[#0F172A] leading-snug">
                {topic.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* TWO-ZONE SANDBOX LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT STAGE (8 cols): Interactive SVG Concept Map + Visual Mnemonic Diagram */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-xs font-semibold text-[#0284C7]">
                  {currentMap.unitNumber}
                </span>
                <h3 className="text-lg font-bold text-[#0F172A]">
                  {currentMap.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveFlowPulse((prev) => !prev)}
                  className="px-3 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors whitespace-nowrap shrink-0"
                >
                  {activeFlowPulse ? '● Flujo Activo' : '○ Flujo Pausado'}
                </button>
                {isQuizMode && (
                  <button
                    type="button"
                    onClick={() => setGuessedNodes({})}
                    className="px-3 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reiniciar huecos</span>
                  </button>
                )}
              </div>
            </div>

            {/* Interactive SVG Concept Map Canvas */}
            <div className="w-full overflow-x-auto bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-2">
              <svg
                viewBox="0 0 960 375"
                className="w-full min-w-[680px] h-auto select-none"
                role="img"
                aria-label={`Mapa conceptual interactivo de ${currentMap.title}`}
              >
                <defs>
                  <marker
                    id="arrow-head"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748B" />
                  </marker>
                </defs>

                {/* Subtle background grid lines */}
                <g stroke="#E2E8F0" strokeWidth="1" opacity="0.6">
                  <line x1="0" y1="90" x2="960" y2="90" />
                  <line x1="0" y1="200" x2="960" y2="200" />
                  <line x1="0" y1="310" x2="960" y2="310" />
                </g>

                {/* Edges connecting nodes */}
                {currentMap.edges.map((edge, idx) => {
                  const fromNode = currentMap.nodes.find((n) => n.id === edge.from);
                  const toNode = currentMap.nodes.find((n) => n.id === edge.to);
                  if (!fromNode || !toNode) return null;

                  const isHighlighted =
                    selectedNodeId === fromNode.id || selectedNodeId === toNode.id;

                  const midX = (fromNode.x + toNode.x) / 2;
                  const midY = (fromNode.y + toNode.y) / 2;

                  return (
                    <g key={idx}>
                      <line
                        x1={fromNode.x}
                        y1={fromNode.y + 24}
                        x2={toNode.x}
                        y2={toNode.y - 28}
                        stroke={isHighlighted ? '#0284C7' : '#94A3B8'}
                        strokeWidth={isHighlighted ? '3' : '2'}
                        strokeDasharray={activeFlowPulse && isHighlighted ? '6 4' : undefined}
                        markerEnd="url(#arrow-head)"
                      />
                      {/* Edge connector label */}
                      <rect
                        x={midX - 52}
                        y={midY - 11}
                        width="104"
                        height="20"
                        rx="4"
                        fill="#FFFFFF"
                        stroke="#E2E8F0"
                      />
                      <text
                        x={midX}
                        y={midY + 3}
                        textAnchor="middle"
                        className="text-[11px] fill-slate-600 font-medium"
                      >
                        {edge.relationLabel}
                      </text>
                    </g>
                  );
                })}

                {/* Concept Nodes */}
                {currentMap.nodes.map((node) => {
                  const isSelected = node.id === selectedNodeId;
                  const isHiddenInQuiz =
                    isQuizMode &&
                    node.isQuizTarget &&
                    guessedNodes[node.id] !== node.label;
                  const isSolvedInQuiz =
                    isQuizMode &&
                    node.isQuizTarget &&
                    guessedNodes[node.id] === node.label;

                  let boxFill = '#FFFFFF';
                  let boxStroke = '#CBD5E1';
                  let textColor = '#0F172A';

                  if (node.category === 'central') {
                    boxFill = '#0F172A';
                    boxStroke = '#0F172A';
                    textColor = '#FFFFFF';
                  } else if (isHiddenInQuiz) {
                    boxFill = '#FEF3C7';
                    boxStroke = '#D97706';
                    textColor = '#B45309';
                  } else if (isSolvedInQuiz) {
                    boxFill = '#ECFDF5';
                    boxStroke = '#059669';
                    textColor = '#065F46';
                  } else if (node.category === 'primary') {
                    boxFill = '#F0F9FF';
                    boxStroke = '#0284C7';
                    textColor = '#0F172A';
                  }

                  if (isSelected) {
                    boxStroke = '#0284C7';
                  }

                  const displayText = isHiddenInQuiz
                    ? '❓ HUECO CLAVE (Pulsa para resolver)'
                    : node.label;

                  const width = Math.max(195, Math.min(265, displayText.length * 7.2));

                  return (
                    <g
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className="cursor-pointer"
                    >
                      <rect
                        x={node.x - width / 2}
                        y={node.y - 24}
                        width={width}
                        height="48"
                        rx="10"
                        fill={boxFill}
                        stroke={boxStroke}
                        strokeWidth={isSelected ? '3.5' : '2'}
                      />
                      <text
                        x={node.x}
                        y={node.y + 4}
                        textAnchor="middle"
                        fill={textColor}
                        className="text-[12px] font-bold"
                      >
                        {displayText.length > 34
                          ? displayText.slice(0, 32) + '…'
                          : displayText}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span>
                Consejo: Haz clic en cualquier caja del mapa conceptual para ver su explicación y su truco de memoria a la derecha.
              </span>
              {completedIds.includes(currentMap.id) && (
                <span className="font-mono font-semibold text-[#059669]">
                  ● MAPA DOMINADO (+45 XP)
                </span>
              )}
            </div>
          </div>

          {/* Visual Mnemonic Story Box */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#059669]">
              <Sparkles className="w-4 h-4" />
              <span>TÉCNICA DE MNEMOTECNIA VISUAL PARA MEMORIZAR SIN ESFUERZO</span>
            </div>
            <h4 className="text-lg font-bold text-[#0F172A]">
              {currentMap.generalMnemonicTitle}
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {currentMap.generalMnemonicStory}
            </p>

            {/* Interactive Visual Comparison Strip Depending on Topic */}
            {currentMap.visualDiagramType === 'plants' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-[#0284C7]/8 border border-[#0284C7]/30 space-y-1">
                  <div className="text-xs font-mono font-bold text-[#0284C7]">
                    ↑ SUBE DESDE LA RAÍZ (Con B de Bajo)
                  </div>
                  <div className="text-base font-bold text-[#0F172A]">
                    Savia BRUTA por el XILEMA
                  </div>
                  <p className="text-xs text-slate-600">
                    Agua + Sales minerales sin cocinar. Sube por los vasos leñosos (Xilema).
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#D97706]/10 border border-[#D97706]/30 space-y-1">
                  <div className="text-xs font-mono font-bold text-[#D97706]">
                    ↓↑ SE REPARTE DESDE LA HOJA (Con F de Fabricada)
                  </div>
                  <div className="text-base font-bold text-[#0F172A]">
                    Savia ELABORADA por el FLOEMA
                  </div>
                  <p className="text-xs text-slate-600">
                    Azúcares cocinados con luz solar en la fotosíntesis. Viaja por los vasos liberianos (Floema).
                  </p>
                </div>
              </div>
            )}

            {currentMap.visualDiagramType === 'ecosystem' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-lg bg-[#059669]/10 border border-[#059669]/30">
                  <div className="text-xs font-mono font-bold text-[#059669]">1. P · PRODUCTORES</div>
                  <div className="text-sm font-bold text-[#0F172A] mt-0.5">Plantas y Algas</div>
                  <p className="text-xs text-slate-600 mt-1">Cocinan su propio alimento con Sol.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#0284C7]/10 border border-[#0284C7]/30">
                  <div className="text-xs font-mono font-bold text-[#0284C7]">2. C · CONSUMIDORES</div>
                  <div className="text-sm font-bold text-[#0F172A] mt-0.5">Herbívoros y Carnívoros</div>
                  <p className="text-xs text-slate-600 mt-1">Se alimentan de otros seres vivos.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#D97706]/10 border border-[#D97706]/30">
                  <div className="text-xs font-mono font-bold text-[#D97706]">3. D · DESCOMPONEDORES</div>
                  <div className="text-sm font-bold text-[#0F172A] mt-0.5">Hongos y Bacterias</div>
                  <p className="text-xs text-slate-600 mt-1">Reciclan restos en sales minerales.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT INSPECTOR & QUIZ DECK (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-6">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <h3 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#0284C7]" />
              <span>Ficha del Concepto Seleccionado</span>
            </h3>
          </div>

          {/* Active Node Inspector */}
          <div className="space-y-4">
            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg space-y-2">
              <div className="text-xs font-semibold text-[#0284C7]">
                {isQuizMode &&
                activeNode.isQuizTarget &&
                guessedNodes[activeNode.id] !== activeNode.label
                  ? '❓ CONCEPTO OCULTO EN EL RETO'
                  : activeNode.label}
              </div>
              <p className="text-sm text-[#0F172A] leading-relaxed">
                {activeNode.summary}
              </p>
            </div>

            <div className="p-4 bg-[#059669]/8 border border-[#059669]/25 rounded-lg space-y-1.5">
              <div className="text-xs font-bold text-[#059669] flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                <span>GANCHO DE MEMORIA (MNEMOTECNIA)</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {activeNode.mnemonicHook}
              </p>
            </div>

            {/* If Quiz Mode is active and this node is a target */}
            {isQuizMode && activeNode.isQuizTarget && activeNode.quizOptions && (
              <div className="pt-3 border-t border-slate-200 space-y-3">
                <div className="text-xs font-bold text-[#D97706]">
                  ¿Qué concepto va en esta casilla del mapa?
                </div>
                <div className="space-y-2">
                  {activeNode.quizOptions.map((option) => {
                    const isPicked = guessedNodes[activeNode.id] === option;
                    const isRight = option === activeNode.label;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleSelectQuizOption(activeNode, option)}
                        className={`w-full text-left p-3 rounded-lg border text-xs font-semibold transition-colors flex items-center justify-between gap-2 ${
                          isPicked
                            ? isRight
                              ? 'bg-[#059669] border-[#059669] text-white'
                              : 'bg-[#DC2626] border-[#DC2626] text-white'
                            : 'bg-white border-slate-300 text-[#0F172A] hover:border-[#0284C7]'
                        }`}
                      >
                        <span>{option}</span>
                        {isPicked && <span>{isRight ? '✓ Correcto' : '✗ No es este'}</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quick Node Jumper List */}
            <div className="pt-3 border-t border-slate-200 space-y-2">
              <div className="text-xs font-semibold text-slate-500">
                Nodos de este mapa ({currentMap.nodes.length}):
              </div>
              <div className="space-y-1.5">
                {currentMap.nodes.map((n) => {
                  const isHidden =
                    isQuizMode && n.isQuizTarget && guessedNodes[n.id] !== n.label;
                  const isCurrent = n.id === selectedNodeId;
                  return (
                    <button
                      key={n.id}
                      type="button"
                      onClick={() => setSelectedNodeId(n.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${
                        isCurrent
                          ? 'bg-[#0284C7]/10 text-[#0284C7] font-semibold'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span className="truncate">
                        {isHidden ? '❓ Hueco por descubrir...' : n.label}
                      </span>
                      {n.isQuizTarget && (
                        <span className="font-mono text-[11px] shrink-0 ml-2">
                          {guessedNodes[n.id] === n.label ? '● OK' : 'Clave'}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {solvedQuizNodesCount === quizTargetNodes.length && isQuizMode && (
              <div className="p-4 rounded-lg bg-[#059669]/10 border border-[#059669]/30 text-xs space-y-1">
                <div className="font-bold text-[#059669] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>● ¡MAPA CONCEPTUAL COMPLETADO! (+45 XP)</span>
                </div>
                <p className="text-slate-700">
                  Has reconstruido todos los conceptos clave de memoria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
      )}
    </div>
  );
};
