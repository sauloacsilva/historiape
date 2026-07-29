import React, { useState } from 'react';
import { TIMELINE_EVENTS } from '../data/timelineEventsData';
import { TimelineEvent, DimensionType } from '../types';
import { DIMENSIONS } from '../data/dimensionsData';
import { Clock, Filter, ArrowUpRight, ChevronDown, ChevronUp, Sparkles, Navigation } from 'lucide-react';

interface TimelineViewProps {
  onSelectEvent: (event: TimelineEvent) => void;
  selectedDimension: DimensionType | 'all';
  setSelectedDimension: (dim: DimensionType | 'all') => void;
  onKeywordClick: (kw: string) => void;
  searchQuery?: string;
}

export const TimelineView: React.FC<TimelineViewProps> = ({
  onSelectEvent,
  selectedDimension,
  setSelectedDimension,
  onKeywordClick,
  searchQuery = '',
}) => {
  const [expandedEventId, setExpandedEventId] = useState<number | null>(null);

  const query = searchQuery.trim().toLowerCase();

  const filteredEvents = TIMELINE_EVENTS.filter((evt) => {
    const matchesDimension = selectedDimension === 'all' || evt.dimensions.includes(selectedDimension);
    const matchesQuery =
      !query ||
      evt.title.toLowerCase().includes(query) ||
      evt.summary.toLowerCase().includes(query) ||
      evt.year.toString().includes(query) ||
      evt.dateStr.toLowerCase().includes(query) ||
      evt.keyFigures.some((f) => f.toLowerCase().includes(query)) ||
      evt.keywords.some((k) => k.toLowerCase().includes(query)) ||
      evt.detailedContext.toLowerCase().includes(query);

    return matchesDimension && matchesQuery;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      {/* Title Header */}
      <div className="bg-[#FDFBF7] p-6 rounded-3xl border border-[#E2DBD0] shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] text-xs font-bold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Cronologia Expandida (1500 - 1848)</span>
            </span>
            <span className="text-xs text-[#8C857B] font-semibold">
              {filteredEvents.length} de 30 Eventos
            </span>
          </div>
          <h1 className="text-2xl font-black text-[#2C3531]">
            Linha do Tempo da História de Pernambuco
          </h1>
          <p className="text-xs text-[#5C5549]">
            Exibindo as relações de causa e consequência (progressividade) entre cada período histórico.
          </p>
        </div>

        {/* Dimension Filter Tabs */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setSelectedDimension('all')}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedDimension === 'all'
                ? 'bg-[#2C3531] text-white shadow-xs'
                : 'bg-[#F3EFE6] text-[#5C5549] hover:bg-[#E2DBD0]'
            }`}
          >
            Todas as Dimensões
          </button>
          {(Object.keys(DIMENSIONS) as DimensionType[]).map((dimKey) => {
            const dim = DIMENSIONS[dimKey];
            const isSelected = selectedDimension === dimKey;
            return (
              <button
                key={dimKey}
                onClick={() => setSelectedDimension(dimKey)}
                style={{
                  backgroundColor: isSelected ? dim.color : dim.pastelBg,
                  color: isSelected ? '#FFFFFF' : dim.pastelText,
                }}
                className="px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer hover:opacity-90 shadow-2xs"
              >
                {dim.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Vertical Timeline Track */}
      <div className="relative border-l-2 border-[#8B5E3C]/30 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-6">
        {filteredEvents.map((evt) => {
          const isExpanded = expandedEventId === evt.id;

          return (
            <div
              key={evt.id}
              className="relative group transition-all"
            >
              {/* Year Marker Pin on Line */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-4 w-7 h-7 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center font-black text-[10px] shadow-sm border-2 border-[#FDFBF7]">
                •
              </div>

              {/* Event Card */}
              <div className="p-6 rounded-3xl bg-[#FDFBF7] border border-[#E2DBD0] shadow-2xs hover:shadow-md transition-all">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-xl bg-[#8B5E3C] text-white font-black text-xs shadow-2xs">
                      {evt.year}
                    </span>
                    <span className="text-xs font-semibold text-[#8C857B]">
                      {evt.dateStr}
                    </span>
                  </div>

                  {/* Dimensions Badges */}
                  <div className="flex items-center gap-1 flex-wrap">
                    {evt.dimensions.map((dimKey) => {
                      const dim = DIMENSIONS[dimKey];
                      return (
                        <span
                          key={dimKey}
                          style={{ backgroundColor: dim.pastelBg, color: dim.pastelText }}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-bold"
                        >
                          {dim.label}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#2C3531] mb-2 leading-tight">
                  {evt.title}
                </h3>

                <p className="text-xs text-[#4A5568] leading-relaxed mb-4">
                  {evt.summary}
                </p>

                {/* Expanded Context Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-[#EFEADF] space-y-4 animate-fade-in">
                    <div className="p-4 rounded-2xl bg-[#F3EFE6] text-xs text-[#2C3531] leading-relaxed">
                      <strong>Contexto Histórico Aprofundado:</strong>
                      <p className="mt-1">{evt.detailedContext}</p>
                    </div>

                    {/* Key Figures */}
                    <div>
                      <span className="text-[11px] font-bold text-[#8C857B] uppercase block mb-1">
                        Personalidades Principais:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {evt.keyFigures.map((fig, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-[#DBEAFE] text-[#1E40AF] text-xs font-semibold"
                          >
                            👤 {fig}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Keywords */}
                    <div>
                      <span className="text-[11px] font-bold text-[#8C857B] uppercase block mb-1">
                        Palavras-Chave Hipertextuais:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {evt.keywords.map((kw, i) => (
                          <button
                            key={i}
                            onClick={() => onKeywordClick(kw)}
                            className="px-2.5 py-0.5 rounded-full bg-[#E2ECE0] text-[#2D5A27] text-xs font-bold hover:bg-[#C5D8C1] transition-all cursor-pointer"
                          >
                            #{kw}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Toggle Actions */}
                <div className="mt-4 pt-3 border-t border-[#EFEADF] flex items-center justify-between text-xs font-bold">
                  <button
                    onClick={() => setExpandedEventId(isExpanded ? null : evt.id)}
                    className="flex items-center gap-1 text-[#8B5E3C] hover:underline cursor-pointer"
                  >
                    <span>{isExpanded ? 'Recolher detalhes' : 'Ver contexto completo'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => onSelectEvent(evt)}
                    className="flex items-center gap-1 text-[#2C3531] hover:text-[#8B5E3C] cursor-pointer"
                  >
                    <span>Abrir Ficha do Evento</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
