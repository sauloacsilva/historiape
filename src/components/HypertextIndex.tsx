import React, { useState } from 'react';
import { KEYWORDS_DICTIONARY } from '../data/keywordsData';
import { Keyword, Article, TimelineEvent } from '../types';
import { Hash, Search, BookOpen, Clock, Tag, Sparkles } from 'lucide-react';

interface HypertextIndexProps {
  onKeywordSelect: (kw: Keyword) => void;
  onArticleSelectById: (articleId: string) => void;
  onEventSelectById: (eventId: number) => void;
}

export const HypertextIndex: React.FC<HypertextIndexProps> = ({
  onKeywordSelect,
  onArticleSelectById,
  onEventSelectById,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const keywordsList = Object.values(KEYWORDS_DICTIONARY);

  const filteredKeywords = keywordsList.filter((kw) => {
    const matchesSearch =
      kw.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      kw.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || kw.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      {/* Title Header */}
      <div className="bg-[#FDFBF7] p-6 rounded-3xl border border-[#E2DBD0] shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="px-3 py-1 rounded-full bg-[#E2ECE0] text-[#2D5A27] text-xs font-bold flex items-center gap-1.5 w-fit mb-2">
              <Hash className="w-3.5 h-3.5" />
              <span>Navegação Hipertextual</span>
            </span>
            <h1 className="text-2xl font-black text-[#2C3531]">
              Índice de Palavras-Chave e Conceitos
            </h1>
            <p className="text-xs text-[#5C5549]">
              Clique em qualquer palavra-chave para navegar diretamente entre eventos, personalidades e artigos.
            </p>
          </div>

          {/* Search bar inside header */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C857B]" />
            <input
              type="text"
              placeholder="Filtrar palavras-chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-full bg-[#F3EFE6] border border-[#E2DBD0] text-[#2C3531] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
            />
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2 border-t border-[#EFEADF]">
          <span className="text-[11px] font-bold text-[#8C857B] uppercase mr-1">Categoria:</span>
          {['all', 'conceito', 'evento', 'personalidade', 'lugar'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-bold capitalize transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#8B5E3C] text-white shadow-2xs'
                  : 'bg-[#F3EFE6] text-[#5C5549] hover:bg-[#E2DBD0]'
              }`}
            >
              {cat === 'all' ? 'Todas' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Keyword Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredKeywords.map((kw) => (
          <div
            key={kw.id}
            className="p-6 rounded-3xl bg-[#FDFBF7] border border-[#E2DBD0] shadow-2xs hover:shadow-md hover:border-[#8B5E3C] transition-all flex flex-col justify-between gap-4"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-[#2C3531]">
                  #{kw.term}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] text-[10px] font-bold uppercase">
                  {kw.category}
                </span>
              </div>

              <p className="text-xs text-[#4A5568] leading-relaxed mb-4">
                {kw.definition}
              </p>
            </div>

            {/* Quick Links inside Keyword Card */}
            <div className="pt-3 border-t border-[#EFEADF] flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                {kw.relatedArticleIds.length > 0 && (
                  <button
                    onClick={() => onArticleSelectById(kw.relatedArticleIds[0])}
                    className="flex items-center gap-1 text-[#8B5E3C] font-bold hover:underline cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Ver Artigo</span>
                  </button>
                )}

                {kw.relatedEventIds.length > 0 && (
                  <button
                    onClick={() => onEventSelectById(kw.relatedEventIds[0])}
                    className="flex items-center gap-1 text-[#2D5A27] font-bold hover:underline cursor-pointer"
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>Ver Evento</span>
                  </button>
                )}
              </div>

              <button
                onClick={() => onKeywordSelect(kw)}
                className="px-3 py-1 rounded-full bg-[#F3EFE6] text-[#2C3531] font-bold hover:bg-[#8B5E3C] hover:text-white transition-all cursor-pointer text-[11px]"
              >
                Detalhes #
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
