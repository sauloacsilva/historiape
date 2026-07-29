import React from 'react';
import { Keyword } from '../types';
import { KEYWORDS_DICTIONARY } from '../data/keywordsData';
import { ARTICLES_DATA } from '../data/articlesData';
import { TIMELINE_EVENTS } from '../data/timelineEventsData';
import { X, BookOpen, Clock, Tag } from 'lucide-react';

interface KeywordTooltipModalProps {
  keywordTerm: string | null;
  onClose: () => void;
  onSelectArticleById: (id: string) => void;
  onSelectEventById: (id: number) => void;
}

export const KeywordTooltipModal: React.FC<KeywordTooltipModalProps> = ({
  keywordTerm,
  onClose,
  onSelectArticleById,
  onSelectEventById,
}) => {
  if (!keywordTerm) return null;

  const kwObj = KEYWORDS_DICTIONARY[keywordTerm] || {
    id: 'generic',
    term: keywordTerm,
    category: 'conceito',
    definition: `Conceito-chave relacionado à história de Pernambuco: ${keywordTerm}.`,
    relatedArticleIds: [],
    relatedEventIds: [],
  } as Keyword;

  const relatedArticles = ARTICLES_DATA.filter(a => kwObj.relatedArticleIds.includes(a.id));
  const relatedEvents = TIMELINE_EVENTS.filter(e => kwObj.relatedEventIds.includes(e.id));

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-[#FDFBF7] max-w-lg w-full rounded-3xl border border-[#E2DBD0] shadow-2xl p-6 space-y-4 relative animate-scale-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F3EFE6] hover:bg-[#E2DBD0] text-[#2C3531] flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-[#E2ECE0] text-[#2D5A27]">
            <Tag className="w-5 h-5" />
          </span>
          <div>
            <span className="text-[10px] font-bold text-[#8C857B] uppercase">
              Hipertextualidade • {kwObj.category}
            </span>
            <h2 className="text-xl font-black text-[#2C3531]">
              #{kwObj.term}
            </h2>
          </div>
        </div>

        {/* Definition */}
        <p className="text-xs text-[#4A5568] leading-relaxed p-4 rounded-2xl bg-[#F3EFE6] border border-[#E2DBD0]">
          {kwObj.definition}
        </p>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div>
            <span className="text-xs font-bold text-[#2C3531] block mb-1.5 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#8B5E3C]" />
              <span>Artigo Didático Relacionado:</span>
            </span>
            {relatedArticles.map((art) => (
              <button
                key={art.id}
                onClick={() => {
                  onClose();
                  onSelectArticleById(art.id);
                }}
                className="w-full p-2.5 rounded-xl bg-white border border-[#E2DBD0] hover:border-[#8B5E3C] text-left text-xs font-bold text-[#8B5E3C] transition-all cursor-pointer"
              >
                ➔ {art.title}
              </button>
            ))}
          </div>
        )}

        {/* Related Events */}
        {relatedEvents.length > 0 && (
          <div>
            <span className="text-xs font-bold text-[#2C3531] block mb-1.5 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#2D5A27]" />
              <span>Evento Histórico:</span>
            </span>
            {relatedEvents.map((evt) => (
              <button
                key={evt.id}
                onClick={() => {
                  onClose();
                  onSelectEventById(evt.id);
                }}
                className="w-full p-2.5 rounded-xl bg-white border border-[#E2DBD0] hover:border-[#2D5A27] text-left text-xs font-bold text-[#2D5A27] transition-all cursor-pointer"
              >
                ➔ {evt.year} - {evt.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
