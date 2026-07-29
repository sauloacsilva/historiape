import React, { useState, useRef, useEffect } from 'react';
import { Map, Clock, BookOpen, Hash, Award, Search, FileText, X, ChevronRight, MapPin, Tag, AlertCircle } from 'lucide-react';
import { DimensionType, Region, Article, TimelineEvent, Keyword } from '../types';
import { DIMENSIONS } from '../data/dimensionsData';
import { TIMELINE_EVENTS } from '../data/timelineEventsData';
import { ARTICLES_DATA } from '../data/articlesData';
import { REGIONS_DATA } from '../data/regionsData';
import { KEYWORDS_DICTIONARY } from '../data/keywordsData';

interface HeaderProps {
  activeTab: 'map' | 'timeline' | 'articles' | 'keywords' | 'quiz';
  setActiveTab: (tab: 'map' | 'timeline' | 'articles' | 'keywords' | 'quiz') => void;
  selectedDimension: DimensionType | 'all';
  setSelectedDimension: (dim: DimensionType | 'all') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenStudyGuide: () => void;
  onSelectEvent: (event: TimelineEvent) => void;
  onSelectArticle: (article: Article) => void;
  onSelectRegion: (region: Region) => void;
  onSelectKeyword: (keywordTerm: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedDimension,
  setSelectedDimension,
  searchQuery,
  setSearchQuery,
  onOpenStudyGuide,
  onSelectEvent,
  onSelectArticle,
  onSelectRegion,
  onSelectKeyword,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const query = searchQuery.trim().toLowerCase();

  const matchingEvents = query
    ? TIMELINE_EVENTS.filter(
        (evt) =>
          evt.title.toLowerCase().includes(query) ||
          evt.summary.toLowerCase().includes(query) ||
          evt.year.toString().includes(query) ||
          evt.keyFigures.some((f) => f.toLowerCase().includes(query)) ||
          evt.keywords.some((k) => k.toLowerCase().includes(query)) ||
          evt.detailedContext.toLowerCase().includes(query)
      )
    : [];

  const matchingArticles = query
    ? ARTICLES_DATA.filter(
        (art) =>
          art.title.toLowerCase().includes(query) ||
          art.subtitle.toLowerCase().includes(query) ||
          art.period.toLowerCase().includes(query) ||
          art.century.toLowerCase().includes(query) ||
          art.keywords.some((k) => k.toLowerCase().includes(query)) ||
          art.personalidadesEEventos.some(
            (p) => p.name.toLowerCase().includes(query) || p.bio.toLowerCase().includes(query)
          )
      )
    : [];

  const matchingRegions = query
    ? REGIONS_DATA.filter(
        (reg) =>
          reg.name.toLowerCase().includes(query) ||
          reg.subTitle.toLowerCase().includes(query) ||
          reg.cities.some((c) => c.toLowerCase().includes(query)) ||
          reg.historicalRole.toLowerCase().includes(query) ||
          reg.culturalHighlights.some((ch) => ch.toLowerCase().includes(query))
      )
    : [];

  const matchingKeywords = query
    ? Object.values(KEYWORDS_DICTIONARY).filter(
        (kw) =>
          kw.term.toLowerCase().includes(query) ||
          kw.definition.toLowerCase().includes(query) ||
          kw.category.toLowerCase().includes(query)
      )
    : [];

  const totalResultsCount =
    matchingEvents.length + matchingArticles.length + matchingRegions.length + matchingKeywords.length;

  const handleSelectEventItem = (evt: TimelineEvent) => {
    onSelectEvent(evt);
    setIsSearchOpen(false);
  };

  const handleSelectArticleItem = (art: Article) => {
    onSelectArticle(art);
    setActiveTab('articles');
    setIsSearchOpen(false);
  };

  const handleSelectRegionItem = (region: Region) => {
    onSelectRegion(region);
    setActiveTab('map');
    setIsSearchOpen(false);
  };

  const handleSelectKeywordItem = (term: string) => {
    onSelectKeyword(term);
    setIsSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E8E1D7] shadow-xs">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('map')}>
          <div className="w-10 h-10 rounded-xl bg-[#E2ECE0] border border-[#C5D8C1] flex items-center justify-center text-[#2D5A27] shadow-xs">
            <Map className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#2C3531] leading-tight tracking-tight">
              Pernambuco <span className="text-[#8B5E3C] font-normal">| Atlas Histórico Interativo</span>
            </h1>
            <p className="text-xs text-[#6B7280]">
              Educação Básica • Economia, Sociedade, Etnia, Política, Cultura e Logística
            </p>
          </div>
        </div>

        {/* Search & Utility Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Global Search Input with Live Dropdown */}
          <div className="relative" ref={searchRef}>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C857B]" />
              <input
                type="text"
                placeholder="Buscar personalidades, eventos, datas..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                className="pl-9 pr-8 py-1.5 text-xs rounded-full bg-[#F3EFE6] border border-[#E2DBD0] text-[#2C3531] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/40 w-52 sm:w-72 transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setIsSearchOpen(false);
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-[#E2DBD0] text-[#8C857B] cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Live Search Results Overlay Dropdown */}
            {isSearchOpen && query.length >= 2 && (
              <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 max-h-[80vh] overflow-y-auto bg-[#FDFBF7] rounded-2xl border border-[#E2DBD0] shadow-2xl z-50 p-3 space-y-3 animate-fade-in divide-y divide-[#EFEADF]">
                <div className="flex items-center justify-between px-1 pb-1">
                  <span className="text-[11px] font-bold text-[#8B5E3C] uppercase tracking-wider flex items-center gap-1">
                    <Search className="w-3.5 h-3.5" />
                    <span>Resultados da Busca ({totalResultsCount})</span>
                  </span>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="text-[10px] text-[#8C857B] hover:underline cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>

                {totalResultsCount === 0 && (
                  <div className="p-4 text-center space-y-2">
                    <AlertCircle className="w-6 h-6 text-[#8C857B] mx-auto" />
                    <p className="text-xs font-bold text-[#2C3531]">Nenhum resultado encontrado</p>
                    <p className="text-[11px] text-[#6B7280]">
                      Tente buscar por figuras (ex: Nassau, Frei Caneca), anos (ex: 1824, 1630) ou palavras-chave (ex: Açúcar, Quilombo).
                    </p>
                  </div>
                )}

                {/* Events Section */}
                {matchingEvents.length > 0 && (
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-[#8C857B] uppercase block px-1 mb-1.5 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#8B5E3C]" />
                      <span>Eventos Históricos ({matchingEvents.length})</span>
                    </span>
                    <div className="space-y-1">
                      {matchingEvents.slice(0, 5).map((evt) => (
                        <div
                          key={evt.id}
                          onClick={() => handleSelectEventItem(evt)}
                          className="p-2 rounded-xl hover:bg-[#F3EFE6] transition-all cursor-pointer flex items-start justify-between gap-2 group"
                        >
                          <div>
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className="px-1.5 py-0.5 rounded bg-[#8B5E3C] text-white text-[10px] font-black">
                                {evt.year}
                              </span>
                              <span className="text-xs font-bold text-[#2C3531] group-hover:text-[#8B5E3C]">
                                {evt.title}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#6B7280] line-clamp-1">{evt.summary}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-[#8C857B] shrink-0 mt-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Articles Section */}
                {matchingArticles.length > 0 && (
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-[#8C857B] uppercase block px-1 mb-1.5 flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-[#8B5E3C]" />
                      <span>Artigos Temáticos ({matchingArticles.length})</span>
                    </span>
                    <div className="space-y-1">
                      {matchingArticles.slice(0, 4).map((art) => (
                        <div
                          key={art.id}
                          onClick={() => handleSelectArticleItem(art)}
                          className="p-2 rounded-xl hover:bg-[#F3EFE6] transition-all cursor-pointer flex items-start justify-between gap-2 group"
                        >
                          <div>
                            <span className="text-[10px] font-bold text-[#92400E] bg-[#FEF3C7] px-1.5 py-0.5 rounded mb-0.5 inline-block">
                              {art.period}
                            </span>
                            <p className="text-xs font-bold text-[#2C3531] group-hover:text-[#8B5E3C]">
                              {art.title}
                            </p>
                            <p className="text-[11px] text-[#6B7280] line-clamp-1">{art.subtitle}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-[#8C857B] shrink-0 mt-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Regions Section */}
                {matchingRegions.length > 0 && (
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-[#8C857B] uppercase block px-1 mb-1.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#2D5A27]" />
                      <span>Regiões do Estado ({matchingRegions.length})</span>
                    </span>
                    <div className="space-y-1">
                      {matchingRegions.map((reg) => (
                        <div
                          key={reg.id}
                          onClick={() => handleSelectRegionItem(reg)}
                          className="p-2 rounded-xl hover:bg-[#E2ECE0] transition-all cursor-pointer flex items-start justify-between gap-2 group"
                        >
                          <div>
                            <span
                              style={{ backgroundColor: reg.accentColor }}
                              className="text-[10px] font-bold text-white px-1.5 py-0.5 rounded mb-0.5 inline-block"
                            >
                              {reg.shortCode}
                            </span>
                            <p className="text-xs font-bold text-[#2C3531] group-hover:text-[#2D5A27]">
                              {reg.name}
                            </p>
                            <p className="text-[11px] text-[#6B7280] line-clamp-1">
                              Cidades: {reg.cities.slice(0, 3).join(', ')}
                            </p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-[#8C857B] shrink-0 mt-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Keywords Section */}
                {matchingKeywords.length > 0 && (
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-[#8C857B] uppercase block px-1 mb-1.5 flex items-center gap-1">
                      <Tag className="w-3 h-3 text-[#2D5A27]" />
                      <span>Palavras-Chave e Conceitos ({matchingKeywords.length})</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5 p-1">
                      {matchingKeywords.slice(0, 8).map((kw) => (
                        <button
                          key={kw.id}
                          onClick={() => handleSelectKeywordItem(kw.term)}
                          className="px-2.5 py-1 rounded-full bg-[#E2ECE0] hover:bg-[#2D5A27] hover:text-white text-[#2D5A27] text-xs font-bold transition-all cursor-pointer"
                        >
                          #{kw.term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Printable Study Guide Button */}
          <button
            onClick={onOpenStudyGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-[#FEF3C7] text-[#92400E] hover:bg-[#FDE68A] border border-[#FCD34D] transition-all cursor-pointer shadow-xs"
            title="Gerar Guia de Estudos para Impressão"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Guia de Estudos</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 border-t border-[#EFEADF] flex items-center justify-between overflow-x-auto no-scrollbar gap-1 py-1.5">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('map')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'map'
                ? 'bg-[#8B5E3C] text-white shadow-xs font-semibold'
                : 'text-[#5C5549] hover:bg-[#EFEADF] hover:text-[#2C3531]'
            }`}
          >
            <Map className="w-4 h-4" />
            <span>Mapa em Tela Cheia</span>
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'timeline'
                ? 'bg-[#8B5E3C] text-white shadow-xs font-semibold'
                : 'text-[#5C5549] hover:bg-[#EFEADF] hover:text-[#2C3531]'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Linha do Tempo (30 Eventos)</span>
          </button>

          <button
            onClick={() => setActiveTab('articles')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'articles'
                ? 'bg-[#8B5E3C] text-white shadow-xs font-semibold'
                : 'text-[#5C5549] hover:bg-[#EFEADF] hover:text-[#2C3531]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Artigos Temáticos</span>
          </button>

          <button
            onClick={() => setActiveTab('keywords')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'keywords'
                ? 'bg-[#8B5E3C] text-white shadow-xs font-semibold'
                : 'text-[#5C5549] hover:bg-[#EFEADF] hover:text-[#2C3531]'
            }`}
          >
            <Hash className="w-4 h-4" />
            <span>Hipertextualidade (Palavras-Chave)</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'quiz'
                ? 'bg-[#2D5A27] text-white shadow-xs font-semibold'
                : 'text-[#5C5549] hover:bg-[#E2ECE0] hover:text-[#2D5A27]'
            }`}
          >
            <Award className="w-4 h-4 text-[#F59E0B]" />
            <span>Desafio do Estudante</span>
          </button>
        </div>

        {/* Dimension Filter Quick Chips */}
        <div className="hidden lg:flex items-center gap-1 pl-4 border-l border-[#EFEADF]">
          <span className="text-[10px] uppercase tracking-wider text-[#8C857B] font-semibold mr-1">
            Dimensão:
          </span>
          <button
            onClick={() => setSelectedDimension('all')}
            className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all cursor-pointer ${
              selectedDimension === 'all'
                ? 'bg-[#2C3531] text-white font-bold'
                : 'bg-[#F3EFE6] text-[#5C5549] hover:bg-[#E2DBD0]'
            }`}
          >
            Todas
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
                className="px-2 py-0.5 rounded text-[11px] font-semibold transition-all cursor-pointer shadow-2xs hover:opacity-90"
              >
                {dim.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

