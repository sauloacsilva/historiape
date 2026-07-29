import React, { useRef, useState } from 'react';
import { REGIONS_DATA } from '../data/regionsData';
import { TIMELINE_EVENTS } from '../data/timelineEventsData';
import { Region, TimelineEvent, DimensionType } from '../types';
import { DIMENSIONS } from '../data/dimensionsData';
import { Compass, MoveRight, ZoomIn, ZoomOut, MapPin, Sparkles, Navigation, Layers } from 'lucide-react';

interface InteractiveMapProps {
  onSelectRegion: (region: Region) => void;
  onSelectEvent: (event: TimelineEvent) => void;
  selectedDimension: DimensionType | 'all';
  searchQuery?: string;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  onSelectRegion,
  onSelectEvent,
  selectedDimension,
  searchQuery = '',
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeRegionId, setActiveRegionId] = useState<string | null>(null);

  const query = searchQuery.trim().toLowerCase();

  // Filter events based on dimension and searchQuery if selected
  const filteredEvents = TIMELINE_EVENTS.filter((e) => {
    const matchesDimension = selectedDimension === 'all' || e.dimensions.includes(selectedDimension);
    const matchesQuery =
      !query ||
      e.title.toLowerCase().includes(query) ||
      e.summary.toLowerCase().includes(query) ||
      e.year.toString().includes(query) ||
      e.keyFigures.some((f) => f.toLowerCase().includes(query)) ||
      e.keywords.some((k) => k.toLowerCase().includes(query));

    return matchesDimension && matchesQuery;
  });

  const handleScrollToRegion = (xPosPercent: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const targetScrollLeft = (container.scrollWidth * xPosPercent) / 100 - container.clientWidth / 2;
    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: 'smooth',
    });
  };

  const handleZoom = (direction: 'in' | 'out') => {
    setZoomLevel(prev => {
      if (direction === 'in') return Math.min(prev + 0.2, 1.6);
      return Math.max(prev - 0.2, 0.8);
    });
  };

  return (
    <div className="relative w-full h-[calc(100vh-100px)] min-h-[550px] bg-[#F7F4ED] overflow-hidden flex flex-col select-none">
      {/* Top Map Control Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        {/* Navigation jump pills */}
        <div className="flex items-center gap-1.5 bg-[#FDFBF7]/90 backdrop-blur-md p-1.5 rounded-2xl border border-[#E2DBD0] shadow-md pointer-events-auto overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-[#8C857B] px-2 border-r border-[#E2DBD0]">
            <Compass className="w-3.5 h-3.5 text-[#8B5E3C]" />
            <span>Navegar:</span>
          </div>
          {REGIONS_DATA.map((region) => (
            <button
              key={region.id}
              onClick={() => {
                setActiveRegionId(region.id);
                handleScrollToRegion(region.xPosition);
              }}
              style={{
                backgroundColor: activeRegionId === region.id ? region.accentColor : '#F3EFE6',
                color: activeRegionId === region.id ? '#FFFFFF' : '#4A5568',
              }}
              className="px-3 py-1 rounded-xl text-xs font-semibold transition-all hover:scale-105 cursor-pointer whitespace-nowrap shadow-2xs"
            >
              {region.shortCode}
            </button>
          ))}
        </div>

        {/* Zoom Controls & Scroll Indicator */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="hidden sm:flex items-center gap-1 bg-[#FDFBF7]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E2DBD0] text-xs font-medium text-[#5C5549] shadow-xs">
            <MoveRight className="w-3.5 h-3.5 text-[#8B5E3C] animate-pulse" />
            <span>Deslize horizontalmente (Oeste ➔ Leste)</span>
          </div>

          <div className="flex items-center bg-[#FDFBF7]/90 backdrop-blur-md rounded-full border border-[#E2DBD0] p-1 shadow-xs">
            <button
              onClick={() => handleZoom('out')}
              className="p-1.5 rounded-full hover:bg-[#EFEADF] text-[#5C5549] cursor-pointer"
              title="Reduzir zoom"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-[#8B5E3C] px-2">{Math.round(zoomLevel * 100)}%</span>
            <button
              onClick={() => handleZoom('in')}
              className="p-1.5 rounded-full hover:bg-[#EFEADF] text-[#5C5549] cursor-pointer"
              title="Aumentar zoom"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex-1 w-full overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing no-scrollbar scroll-smooth relative"
        style={{ perspective: '1000px' }}
      >
        {/* Full Horizontal Canvas Track (2800px wide) */}
        <div
          className="relative h-full transition-transform duration-300 ease-out py-8 px-12"
          style={{
            width: `${2800 * zoomLevel}px`,
            minHeight: '100%',
            background: 'radial-gradient(circle at 50% 50%, #FDFBF7 0%, #F5F0E6 100%)',
          }}
        >
          {/* Background Topographic / River Lines Vector Overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* Rio São Francisco and Capibaribe Water Pathways */}
            <path
              d="M 100,520 Q 400,480 800,500 T 1400,460 T 2000,510 T 2600,480"
              fill="none"
              stroke="#0284C7"
              strokeWidth="12"
              strokeDasharray="6,6"
            />
            <text x="300" y="545" fill="#0284C7" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
              RIO SÃO FRANCISCO (O VELHO CHICO)
            </text>
            <text x="2200" y="470" fill="#0284C7" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
              RIO CAPIBARIBE & ATLÂNTICO
            </text>
          </svg>

          {/* Compass & Scale Graphic */}
          <div className="absolute bottom-6 left-8 bg-[#FDFBF7]/80 backdrop-blur-xs p-3 rounded-2xl border border-[#E2DBD0] flex items-center gap-3 shadow-xs">
            <Compass className="w-8 h-8 text-[#8B5E3C] animate-spin-slow" />
            <div>
              <p className="text-xs font-bold text-[#2C3531]">Estado de Pernambuco</p>
              <p className="text-[10px] text-[#6B7280]">Comprimento Territorial: ~980 km (Oeste ➔ Leste)</p>
            </div>
          </div>

          {/* Render Regions horizontally */}
          <div className="relative w-full h-full flex items-center justify-between">
            {REGIONS_DATA.map((region, idx) => {
              const isSelected = activeRegionId === region.id;
              const regionEvents = filteredEvents.filter(e => region.featuredEvents.includes(e.id));

              return (
                <div
                  key={region.id}
                  className="relative group transition-all duration-300 my-auto"
                  style={{
                    width: `${380 * zoomLevel}px`,
                    marginLeft: idx === 0 ? '40px' : '30px',
                  }}
                >
                  {/* Region Card Container */}
                  <div
                    onClick={() => {
                      setActiveRegionId(region.id);
                      onSelectRegion(region);
                    }}
                    style={{
                      backgroundColor: region.colorPastel,
                      borderColor: isSelected ? region.accentColor : '#E2DBD0',
                    }}
                    className={`p-6 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden transform hover:-translate-y-2 ${
                      isSelected ? 'ring-4 ring-[#8B5E3C]/30 scale-102' : ''
                    }`}
                  >
                    {/* Header Banner inside Card */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <span
                          style={{ backgroundColor: region.accentColor }}
                          className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider mb-1"
                        >
                          {region.shortCode}
                        </span>
                        <h3 className="text-xl font-bold text-[#2C3531] leading-tight">
                          {region.name}
                        </h3>
                      </div>
                      <div
                        style={{ color: region.accentColor }}
                        className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center font-bold text-sm shadow-2xs"
                      >
                        0{idx + 1}
                      </div>
                    </div>

                    <p className="text-xs font-medium text-[#4A5568] italic mb-4">
                      "{region.subTitle}"
                    </p>

                    {/* Highlights list */}
                    <div className="space-y-2 text-xs text-[#2C3531] mb-4">
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#8B5E3C] shrink-0 mt-0.5" />
                        <span>
                          <strong>Cidades:</strong> {region.cities.slice(0, 3).join(', ')} e +
                        </span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#8B5E3C] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">
                          <strong>Papel Histórico:</strong> {region.historicalRole}
                        </span>
                      </div>
                    </div>

                    {/* Cultural chips */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {region.culturalHighlights.map((cult, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-white/70 border border-black/5 text-[10px] font-semibold text-[#334155]"
                        >
                          ✨ {cult}
                        </span>
                      ))}
                    </div>

                    {/* Action button */}
                    <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs font-bold text-[#8B5E3C]">
                      <span>Explorar História Regional</span>
                      <Sparkles className="w-4 h-4 text-[#8B5E3C] group-hover:rotate-12 transition-transform" />
                    </div>
                  </div>

                  {/* Interactive Timeline Event Pins attached to this region */}
                  <div className="mt-6 space-y-2">
                    <p className="text-[11px] font-bold text-[#8C857B] uppercase tracking-wider flex items-center gap-1 px-1">
                      <Navigation className="w-3 h-3 text-[#8B5E3C]" />
                      <span>Eventos Relevantes ({regionEvents.length}):</span>
                    </p>

                    <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1 no-scrollbar">
                      {regionEvents.map((evt) => (
                        <div
                          key={evt.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectEvent(evt);
                          }}
                          className="p-2.5 rounded-xl bg-[#FDFBF7] border border-[#E2DBD0] hover:border-[#8B5E3C] hover:bg-[#FEF3C7]/40 transition-all cursor-pointer shadow-2xs group/pin flex items-center justify-between gap-2"
                        >
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-lg bg-[#EFEADF] text-[11px] font-black text-[#8B5E3C]">
                              {evt.year}
                            </span>
                            <span className="text-xs font-semibold text-[#2C3531] line-clamp-1 group-hover/pin:text-[#8B5E3C]">
                              {evt.title}
                            </span>
                          </div>

                          {/* Dimensions badges */}
                          <div className="flex items-center gap-1 shrink-0">
                            {evt.dimensions.slice(0, 2).map((dimKey) => {
                              const dim = DIMENSIONS[dimKey];
                              return (
                                <span
                                  key={dimKey}
                                  style={{ backgroundColor: dim.pastelBg, color: dim.pastelText }}
                                  className="w-2 h-2 rounded-full inline-block"
                                  title={dim.label}
                                />
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
