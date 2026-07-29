import React from 'react';
import { Region, TimelineEvent, Article } from '../types';
import { TIMELINE_EVENTS } from '../data/timelineEventsData';
import { ARTICLES_DATA } from '../data/articlesData';
import { DIMENSIONS } from '../data/dimensionsData';
import { X, MapPin, Building2, Users, Landmark, Compass, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

interface RegionCardDrawerProps {
  region: Region | null;
  onClose: () => void;
  onSelectEvent: (event: TimelineEvent) => void;
  onSelectArticle: (article: Article) => void;
}

export const RegionCardDrawer: React.FC<RegionCardDrawerProps> = ({
  region,
  onClose,
  onSelectEvent,
  onSelectArticle,
}) => {
  if (!region) return null;

  // Events associated with this region
  const regionEvents = TIMELINE_EVENTS.filter(e => region.featuredEvents.includes(e.id) || e.regionId === region.id);

  // Articles related to this region
  const relatedArticles = ARTICLES_DATA.filter(a => a.regionIds.includes(region.id));

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-end transition-opacity animate-fade-in">
      <div className="w-full max-w-2xl bg-[#FDFBF7] h-full shadow-2xl flex flex-col overflow-hidden border-l border-[#E2DBD0] animate-slide-left">
        {/* Header */}
        <div
          style={{ backgroundColor: region.colorPastel }}
          className="p-6 border-b border-[#E2DBD0] relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#2C3531] flex items-center justify-center transition-all cursor-pointer shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>

          <span
            style={{ backgroundColor: region.accentColor }}
            className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider mb-2 shadow-2xs"
          >
            Região de Pernambuco
          </span>

          <h2 className="text-2xl font-black text-[#2C3531] mb-1">
            {region.name}
          </h2>
          <p className="text-sm font-medium text-[#4A5568] italic">
            "{region.subTitle}"
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Cities & Location */}
          <div className="bg-[#F3EFE6] p-4 rounded-2xl border border-[#E2DBD0]">
            <h3 className="text-xs font-bold text-[#8C857B] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#8B5E3C]" />
              <span>Principais Municípios Integrantes:</span>
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {region.cities.map((city, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#E2DBD0] text-xs font-semibold text-[#2C3531]"
                >
                  📍 {city}
                </span>
              ))}
            </div>
          </div>

          {/* 6 Dimensions Grid Analysis */}
          <div>
            <h3 className="text-sm font-bold text-[#2C3531] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8B5E3C]" />
              <span>Dimensões Históricas da Região:</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Economico */}
              <div style={{ backgroundColor: DIMENSIONS.economico.pastelBg }} className="p-3.5 rounded-2xl border border-black/5">
                <div className="flex items-center gap-1.5 mb-1" style={{ color: DIMENSIONS.economico.pastelText }}>
                  <Building2 className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase">Econômico</span>
                </div>
                <p className="text-xs text-[#2C3531]">{region.economicBase}</p>
              </div>

              {/* Social / Etnico */}
              <div style={{ backgroundColor: DIMENSIONS.etnico.pastelBg }} className="p-3.5 rounded-2xl border border-black/5">
                <div className="flex items-center gap-1.5 mb-1" style={{ color: DIMENSIONS.etnico.pastelText }}>
                  <Users className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase">Étnico & Social</span>
                </div>
                <p className="text-xs text-[#2C3531]">{region.ethnicRoots}</p>
              </div>

              {/* Cultural */}
              <div style={{ backgroundColor: DIMENSIONS.cultural.pastelBg }} className="p-3.5 rounded-2xl border border-black/5">
                <div className="flex items-center gap-1.5 mb-1" style={{ color: DIMENSIONS.cultural.pastelText }}>
                  <Landmark className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase">Cultural</span>
                </div>
                <ul className="text-xs text-[#2C3531] space-y-0.5">
                  {region.culturalHighlights.map((ch, i) => (
                    <li key={i}>• {ch}</li>
                  ))}
                </ul>
              </div>

              {/* Logistico */}
              <div style={{ backgroundColor: DIMENSIONS.logistico.pastelBg }} className="p-3.5 rounded-2xl border border-black/5">
                <div className="flex items-center gap-1.5 mb-1" style={{ color: DIMENSIONS.logistico.pastelText }}>
                  <Compass className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase">Logístico</span>
                </div>
                <p className="text-xs text-[#2C3531]">{region.logisticsHub}</p>
              </div>
            </div>
          </div>

          {/* Timeline Events for this Region */}
          {regionEvents.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-[#2C3531] mb-3">
                Eventos Históricos Marcantes nesta Região ({regionEvents.length}):
              </h3>

              <div className="space-y-2">
                {regionEvents.map((evt) => (
                  <div
                    key={evt.id}
                    onClick={() => onSelectEvent(evt)}
                    className="p-3 rounded-2xl bg-white border border-[#E2DBD0] hover:border-[#8B5E3C] hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] text-xs font-extrabold">
                          {evt.year}
                        </span>
                        <span className="text-xs font-bold text-[#2C3531] group-hover:text-[#8B5E3C]">
                          {evt.title}
                        </span>
                      </div>
                      <p className="text-xs text-[#6B7280] line-clamp-1">
                        {evt.summary}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8C857B] group-hover:text-[#8B5E3C] group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-[#2C3531] mb-3 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#8B5E3C]" />
                <span>Artigos Didáticos Relacionados:</span>
              </h3>

              <div className="space-y-2">
                {relatedArticles.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => onSelectArticle(art)}
                    className="p-4 rounded-2xl bg-[#F8F5EE] border border-[#E2DBD0] hover:bg-[#FEF3C7]/50 hover:border-[#8B5E3C] transition-all cursor-pointer"
                  >
                    <span className="text-[10px] font-bold text-[#8B5E3C] uppercase tracking-wider block mb-0.5">
                      {art.period}
                    </span>
                    <h4 className="text-sm font-bold text-[#2C3531] mb-1">
                      {art.title}
                    </h4>
                    <p className="text-xs text-[#5C5549] line-clamp-2">
                      {art.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
