import React, { useState } from 'react';
import { Header } from './components/Header';
import { InteractiveMap } from './components/InteractiveMap';
import { RegionCardDrawer } from './components/RegionCardDrawer';
import { ArticleView } from './components/ArticleView';
import { TimelineView } from './components/TimelineView';
import { HypertextIndex } from './components/HypertextIndex';
import { QuizSection } from './components/QuizSection';
import { KeywordTooltipModal } from './components/KeywordTooltipModal';
import { StudyGuideModal } from './components/StudyGuideModal';

import { Region, Article, TimelineEvent, DimensionType, Keyword } from './types';
import { ARTICLES_DATA } from './data/articlesData';
import { TIMELINE_EVENTS } from './data/timelineEventsData';
import { KEYWORDS_DICTIONARY } from './data/keywordsData';
import { DIMENSIONS } from './data/dimensionsData';

export default function App() {
  const [activeTab, setActiveTab] = useState<'map' | 'timeline' | 'articles' | 'keywords' | 'quiz'>('map');
  const [selectedDimension, setSelectedDimension] = useState<DimensionType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals & Drawers State
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [clickedKeyword, setClickedKeyword] = useState<string | null>(null);
  const [isStudyGuideOpen, setIsStudyGuideOpen] = useState(false);

  // Handlers
  const handleKeywordClick = (kwTerm: string) => {
    setClickedKeyword(kwTerm);
  };

  const handleSelectArticleById = (articleId: string) => {
    const art = ARTICLES_DATA.find((a) => a.id === articleId);
    if (art) {
      setSelectedArticle(art);
      setActiveTab('articles');
    }
  };

  const handleSelectEventById = (eventId: number) => {
    const evt = TIMELINE_EVENTS.find((e) => e.id === eventId);
    if (evt) {
      setSelectedEvent(evt);
      setActiveTab('timeline');
    }
  };

  // Filtered articles list for search query
  const filteredArticles = ARTICLES_DATA.filter((art) => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    return (
      art.title.toLowerCase().includes(query) ||
      art.subtitle.toLowerCase().includes(query) ||
      art.period.toLowerCase().includes(query) ||
      art.century.toLowerCase().includes(query) ||
      art.keywords.some((k) => k.toLowerCase().includes(query)) ||
      art.personalidadesEEventos.some(
        (p) => p.name.toLowerCase().includes(query) || p.bio.toLowerCase().includes(query)
      )
    );
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C3531] flex flex-col font-sans selection:bg-[#FEF3C7] selection:text-[#92400E] pb-16 lg:pb-0">
      {/* Top Application Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedDimension={selectedDimension}
        setSelectedDimension={setSelectedDimension}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenStudyGuide={() => setIsStudyGuideOpen(true)}
        onSelectEvent={(evt) => setSelectedEvent(evt)}
        onSelectArticle={(art) => {
          setSelectedArticle(art);
          setActiveTab('articles');
        }}
        onSelectRegion={(reg) => {
          setSelectedRegion(reg);
          setActiveTab('map');
        }}
        onSelectKeyword={(kwTerm) => handleKeywordClick(kwTerm)}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full">
        {/* VIEW 1: Full-screen Interactive Horizontal Scroll Map */}
        {activeTab === 'map' && (
          <InteractiveMap
            selectedRegion={selectedRegion}
            onSelectRegion={(region) => setSelectedRegion(region)}
            onSelectEvent={(evt) => setSelectedEvent(evt)}
            selectedDimension={selectedDimension}
            searchQuery={searchQuery}
          />
        )}

        {/* VIEW 2: Chronological Timeline (30 Events) */}
        {activeTab === 'timeline' && (
          <TimelineView
            onSelectEvent={(evt) => setSelectedEvent(evt)}
            selectedDimension={selectedDimension}
            setSelectedDimension={setSelectedDimension}
            onKeywordClick={handleKeywordClick}
            searchQuery={searchQuery}
          />
        )}

        {/* VIEW 3: Articles Reader View */}
        {activeTab === 'articles' && (
          <div className="py-6">
            {selectedArticle ? (
              <ArticleView
                article={selectedArticle}
                onBack={() => setSelectedArticle(null)}
                onKeywordClick={handleKeywordClick}
                onSelectArticle={(art) => setSelectedArticle(art)}
                allArticles={ARTICLES_DATA}
              />
            ) : (
              /* Article Selector Grid if none selected */
              <div className="max-w-5xl mx-auto px-4 py-6 space-y-6 animate-fade-in">
                <div className="bg-[#FDFBF7] p-6 rounded-3xl border border-[#E2DBD0] shadow-sm flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-black text-[#2C3531] mb-1">
                      Artigos Históricos Expandidos
                    </h1>
                    <p className="text-xs text-[#5C5549]">
                      Selecione um tema estruturado para estudar antecedentes, desenvolvimento, personalidades e legado contemporâneo.
                    </p>
                  </div>
                  {searchQuery && (
                    <span className="px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] text-xs font-bold">
                      Filtrado por "{searchQuery}": {filteredArticles.length} artigo(s)
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredArticles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => setSelectedArticle(art)}
                      className="p-6 rounded-3xl bg-[#FDFBF7] border border-[#E2DBD0] shadow-2xs hover:shadow-md hover:border-[#8B5E3C] transition-all cursor-pointer flex flex-col justify-between gap-4 group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] text-xs font-bold">
                            {art.period}
                          </span>
                          <span className="text-xs text-[#8C857B] font-semibold">
                            {art.century}
                          </span>
                        </div>

                        <h2 className="text-xl font-bold text-[#2C3531] group-hover:text-[#8B5E3C] transition-colors mb-2">
                          {art.title}
                        </h2>

                        <p className="text-xs text-[#4A5568] leading-relaxed mb-4">
                          {art.subtitle}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#EFEADF] flex items-center justify-between text-xs font-bold text-[#8B5E3C]">
                        <span>Ler Artigo Completo ➔</span>
                        <div className="flex items-center gap-1">
                          {art.dimensions.slice(0, 3).map((dimKey) => {
                            const dim = DIMENSIONS[dimKey as DimensionType];
                            return (
                              <span
                                key={dimKey}
                                style={{ backgroundColor: dim.pastelBg, color: dim.pastelText }}
                                className="px-2 py-0.5 rounded text-[10px]"
                              >
                                {dim.label}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* VIEW 4: Hypertext Index */}
        {activeTab === 'keywords' && (
          <HypertextIndex
            onKeywordSelect={(kw) => setClickedKeyword(kw.term)}
            onArticleSelectById={handleSelectArticleById}
            onEventSelectById={handleSelectEventById}
          />
        )}

        {/* VIEW 5: Quiz Section */}
        {activeTab === 'quiz' && <QuizSection />}
      </main>

      {/* Region Details Drawer */}
      <RegionCardDrawer
        region={selectedRegion}
        onClose={() => setSelectedRegion(null)}
        onSelectEvent={(evt) => {
          setSelectedRegion(null);
          setSelectedEvent(evt);
          setActiveTab('timeline');
        }}
        onSelectArticle={(art) => {
          setSelectedRegion(null);
          setSelectedArticle(art);
          setActiveTab('articles');
        }}
      />

      {/* Event Details Quick Popup */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-[#FDFBF7] max-w-lg w-full rounded-3xl border border-[#E2DBD0] shadow-2xl p-6 space-y-4 relative animate-scale-up">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-[#2C3531] font-bold"
            >
              ✕
            </button>
            <span className="px-3 py-1 rounded-full bg-[#8B5E3C] text-white text-xs font-bold">
              Ano {selectedEvent.year}
            </span>
            <h2 className="text-xl font-bold text-[#2C3531]">{selectedEvent.title}</h2>
            <p className="text-xs text-[#4A5568] leading-relaxed">{selectedEvent.detailedContext}</p>
            <div className="pt-2 text-xs">
              <strong>Personalidades:</strong> {selectedEvent.keyFigures.join(', ')}
            </div>
            <button
              onClick={() => {
                setSelectedEvent(null);
                setActiveTab('timeline');
              }}
              className="w-full py-2 bg-[#8B5E3C] text-white rounded-xl text-xs font-bold"
            >
              Ver na Linha do Tempo
            </button>
          </div>
        </div>
      )}

      {/* Keyword Modal */}
      <KeywordTooltipModal
        keywordTerm={clickedKeyword}
        onClose={() => setClickedKeyword(null)}
        onSelectArticleById={handleSelectArticleById}
        onSelectEventById={handleSelectEventById}
      />

      {/* Printable Study Guide Modal */}
      <StudyGuideModal
        isOpen={isStudyGuideOpen}
        onClose={() => setIsStudyGuideOpen(false)}
      />

      {/* Footer */}
      <footer className="mt-12 bg-[#F3EFE6] border-t border-[#E2DBD0] py-6 px-4 text-center text-xs text-[#6B7280]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p>
            <strong>Atlas Histórico de Pernambuco</strong> • Desenvolvido para a Educação Básica (Anos Finais)
          </p>
          <p className="text-[11px]">
            Fontes: Fundação Joaquim Nabuco (FUNDAJ) • Arquivo Público de Pernambuco • IPHAN • IBGE
          </p>
        </div>
      </footer>
    </div>
  );
}
