import React, { useState, useMemo } from 'react';
import { Search, RotateCcw, MapPin, Tag, X, User, ArrowRight, Award, Compass } from 'lucide-react';
import { GalleryPersonality } from '../types';
import { PERSONALITIES_DATA } from '../data/personalitiesData';

interface PersonalitiesViewProps {
  initialSearchQuery?: string;
}

export const PersonalitiesView: React.FC<PersonalitiesViewProps> = ({
  initialSearchQuery = '',
}) => {
  const [search, setSearch] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'name-asc' | 'name-desc' | 'category'>('name-asc');
  const [activeModalItem, setActiveModalItem] = useState<GalleryPersonality | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Get initials for fallback avatar
  const getInitials = (name: string): string => {
    const clean = name.replace(/\(.*?\)/g, '').trim();
    const parts = clean.split(' ').filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return (clean.substring(0, 2) || 'PE').toUpperCase();
  };

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  // Helper for category badge styling aligned with Atlas design tokens
  const getCategoryBadge = (category: string) => {
    if (category.includes('Música')) {
      return { bg: 'bg-[#FEF3C7]', text: 'text-[#92400E]', border: 'border-[#FCD34D]/60' };
    }
    if (category.includes('Artes')) {
      return { bg: 'bg-[#E2ECE0]', text: 'text-[#2D5A27]', border: 'border-[#C5D8C1]' };
    }
    if (category.includes('Literatura')) {
      return { bg: 'bg-[#EDE9FE]', text: 'text-[#5B21B6]', border: 'border-[#DDD6FE]' };
    }
    // Lideranças, História e Política
    return { bg: 'bg-[#F3EFE6]', text: 'text-[#8B5E3C]', border: 'border-[#E2DBD0]' };
  };

  // Filter & Sort Logic
  const filteredPersonalities = useMemo(() => {
    const term = search.trim().toLowerCase();

    const filtered = PERSONALITIES_DATA.filter((p) => {
      const matchesSearch =
        !term ||
        p.name.toLowerCase().includes(term) ||
        p.profile.toLowerCase().includes(term) ||
        p.region.toLowerCase().includes(term) ||
        p.actuation.toLowerCase().includes(term) ||
        p.highlights.some((h) => h.toLowerCase().includes(term));

      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesRegion = selectedRegion === 'all' || p.regionCategory === selectedRegion;

      return matchesSearch && matchesCategory && matchesRegion;
    });

    if (sortOrder === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'name-desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOrder === 'category') {
      filtered.sort((a, b) => a.category.localeCompare(b.category));
    }

    return filtered;
  }, [search, selectedCategory, selectedRegion, sortOrder]);

  const handleResetFilters = () => {
    setSearch('');
    setSelectedCategory('all');
    setSelectedRegion('all');
    setSortOrder('name-asc');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Editorial Header Section (Adapted to Atlas theme) */}
      <section className="bg-[#FDFBF7] p-6 sm:p-8 rounded-3xl border border-[#E2DBD0] shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="px-3.5 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]/60 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>Memória Viva & Patrimônio</span>
          </span>
          <span className="text-xs font-semibold text-[#8C857B]">
            {PERSONALITIES_DATA.length} Figuras Históricas Catalogadas
          </span>
        </div>

        <div className="space-y-2 max-w-3xl">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#2C3531] tracking-tight">
            Personalidades de <span className="text-[#8B5E3C]">Pernambuco</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#5C5549] leading-relaxed">
            Conheça as trajetórias, conquistas e legados de lideranças indígenas, matriarcas quilombolas,
            mulheres revolucionárias, cientistas, mestres da cultura popular e artistas que moldaram
            o Sertão, Agreste, Zona da Mata e Região Metropolitana.
          </p>
        </div>

        {/* Filter & Controls Panel */}
        <div className="pt-4 border-t border-[#EFEADF] grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
          {/* Search Box */}
          <div className="md:col-span-5 relative">
            <label htmlFor="personality-search" className="block text-[11px] font-bold uppercase tracking-wider text-[#8C857B] mb-1">
              Buscar no Acervo
            </label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C857B]" />
              <input
                id="personality-search"
                type="text"
                placeholder="Busque por nome, povo, cidade, atuação..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-xl bg-[#F3EFE6] border border-[#E2DBD0] text-[#2C3531] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/40 font-medium placeholder:text-[#8C857B]"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-[#E2DBD0] text-[#8C857B] cursor-pointer"
                  title="Limpar busca"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="md:col-span-3">
            <label htmlFor="filter-category" className="block text-[11px] font-bold uppercase tracking-wider text-[#8C857B] mb-1">
              Categoria
            </label>
            <select
              id="filter-category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2 px-3 text-xs sm:text-sm rounded-xl bg-[#F3EFE6] border border-[#E2DBD0] text-[#2C3531] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/40 font-medium cursor-pointer"
            >
              <option value="all">Todas as Categorias</option>
              <option value="Lideranças, História e Política">Lideranças & História</option>
              <option value="Música e Cultura Popular">Música & Cultura Popular</option>
              <option value="Artes Plásticas, Cerâmica e Design">Artes Plásticas & Design</option>
              <option value="Literatura, Poesia, Educação e Ciências">Literatura, Educação & Ciências</option>
            </select>
          </div>

          {/* Region Filter */}
          <div className="md:col-span-2">
            <label htmlFor="filter-region" className="block text-[11px] font-bold uppercase tracking-wider text-[#8C857B] mb-1">
              Mesorregião
            </label>
            <select
              id="filter-region"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full py-2 px-3 text-xs sm:text-sm rounded-xl bg-[#F3EFE6] border border-[#E2DBD0] text-[#2C3531] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/40 font-medium cursor-pointer"
            >
              <option value="all">Todas as Regiões</option>
              <option value="Sertão">Sertão</option>
              <option value="Agreste">Agreste</option>
              <option value="Zona da Mata / RMR">Zona da Mata / RMR</option>
            </select>
          </div>

          {/* Reset Filters */}
          <div className="md:col-span-2 flex items-center gap-2">
            <button
              onClick={handleResetFilters}
              className="w-full py-2 px-3 rounded-xl bg-[#E2DBD0]/60 hover:bg-[#E2DBD0] text-[#2C3531] text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
              title="Limpar todos os filtros"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpar</span>
            </button>
          </div>
        </div>
      </section>

      {/* Results Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-[#E2DBD0]">
        <p className="text-xs sm:text-sm text-[#5C5549] font-medium">
          Exibindo <strong className="text-[#8B5E3C]">{filteredPersonalities.length}</strong> de{' '}
          <strong className="text-[#2C3531]">{PERSONALITIES_DATA.length}</strong> personalidades
        </p>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-[#8C857B] uppercase tracking-wider">
            Ordenar:
          </span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as any)}
            className="text-xs font-semibold bg-[#FDFBF7] border border-[#E2DBD0] rounded-lg px-2.5 py-1 text-[#2C3531] focus:outline-none cursor-pointer"
          >
            <option value="name-asc">Nome (A-Z)</option>
            <option value="name-desc">Nome (Z-A)</option>
            <option value="category">Por Categoria</option>
          </select>
        </div>
      </div>

      {/* Cards Grid */}
      {filteredPersonalities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPersonalities.map((p) => {
            const hasError = imageErrors[p.id];
            const initials = getInitials(p.name);
            const badge = getCategoryBadge(p.category);

            return (
              <div
                key={p.id}
                onClick={() => setActiveModalItem(p)}
                className="bg-[#FDFBF7] rounded-3xl border border-[#E2DBD0] p-5 shadow-2xs hover:shadow-md hover:border-[#8B5E3C] transition-all cursor-pointer flex flex-col justify-between gap-4 group"
              >
                <div className="space-y-3">
                  {/* Card Header: Avatar & Info */}
                  <div className="flex items-start gap-3.5">
                    <div className="relative shrink-0">
                      {!hasError ? (
                        <img
                          src={p.photo}
                          alt={p.name}
                          onError={() => handleImageError(p.id)}
                          className="w-16 h-16 rounded-2xl object-cover border border-[#E2DBD0] shadow-xs bg-[#F3EFE6]"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-2xl border border-[#FCD34D] bg-[#FEF3C7] text-[#92400E] font-serif font-black text-lg flex items-center justify-center shadow-xs">
                          {initials}
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1 space-y-1">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${badge.bg} ${badge.text} ${badge.border} uppercase tracking-wider inline-block truncate max-w-full`}
                      >
                        {p.category.split(',')[0]}
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-[#2C3531] group-hover:text-[#8B5E3C] transition-colors line-clamp-2 leading-tight">
                        {p.name}
                      </h3>
                      <p className="text-[11px] text-[#8C857B] font-medium truncate">
                        {p.profile}
                      </p>
                    </div>
                  </div>

                  {/* Region Indicator */}
                  <div className="flex items-center gap-1.5 text-xs text-[#5C5549] bg-[#F3EFE6] px-2.5 py-1 rounded-xl border border-[#EFEADF]">
                    <MapPin className="w-3.5 h-3.5 text-[#8B5E3C] shrink-0" />
                    <span className="font-semibold truncate">{p.region}</span>
                  </div>

                  {/* Actuation Snippet */}
                  <p className="text-xs text-[#5C5549] leading-relaxed line-clamp-3">
                    {p.actuation}
                  </p>

                  {/* Highlight Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {p.highlights.slice(0, 3).map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#E8E1D7] text-[#6B7280]"
                      >
                        #{h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-[#EFEADF] flex items-center justify-between text-xs font-bold text-[#8B5E3C] group-hover:translate-x-0.5 transition-transform">
                  <span>Ver Biografia Completa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-[#FDFBF7] border border-[#E2DBD0] rounded-3xl p-12 text-center space-y-4 max-w-md mx-auto my-12">
          <div className="w-14 h-14 rounded-2xl bg-[#FEF3C7] text-[#92400E] mx-auto flex items-center justify-center">
            <User className="w-7 h-7" />
          </div>
          <h2 className="text-lg font-bold text-[#2C3531]">Nenhuma personalidade encontrada</h2>
          <p className="text-xs text-[#6B7280]">
            Não encontramos resultados para os filtros selecionados. Tente ajustar os termos ou restaurar as opções.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl bg-[#8B5E3C] text-white text-xs font-bold hover:bg-[#734A2F] transition-all cursor-pointer shadow-xs"
          >
            Limpar Todos os Filtros
          </button>
        </div>
      )}

      {/* Modal de Detalhes da Personalidade */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-[#FDFBF7] max-w-2xl w-full rounded-3xl border border-[#E2DBD0] shadow-2xl p-6 sm:p-8 space-y-5 relative max-h-[90vh] overflow-y-auto animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-[#EFEADF] text-[#8C857B] hover:text-[#2C3531] transition-colors cursor-pointer"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-5 border-b border-[#EFEADF]">
              <div className="relative shrink-0">
                {!imageErrors[activeModalItem.id] ? (
                  <img
                    src={activeModalItem.photo}
                    alt={activeModalItem.name}
                    onError={() => handleImageError(activeModalItem.id)}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#E2DBD0] shadow-sm bg-[#F3EFE6]"
                  />
                ) : (
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-2 border-[#FCD34D] bg-[#FEF3C7] text-[#92400E] font-serif font-black text-2xl flex items-center justify-center shadow-sm">
                    {getInitials(activeModalItem.name)}
                  </div>
                )}
              </div>

              <div className="text-center sm:text-left space-y-1.5 flex-1">
                <span
                  className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md border ${getCategoryBadge(activeModalItem.category).bg} ${getCategoryBadge(activeModalItem.category).text} ${getCategoryBadge(activeModalItem.category).border} uppercase tracking-wider inline-block`}
                >
                  {activeModalItem.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#2C3531] leading-tight">
                  {activeModalItem.name}
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-[#8B5E3C]">
                  {activeModalItem.profile}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-[#5C5549] pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8B5E3C]" />
                  <span>{activeModalItem.region}</span>
                </div>
              </div>
            </div>

            {/* Modal Body: Actuation & Context */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C857B]">
                Trajetória e Impacto Histórico
              </h4>
              <p className="text-xs sm:text-sm text-[#2C3531] leading-relaxed">
                {activeModalItem.actuation}
              </p>
            </div>

            {/* Modal Highlights */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C857B]">
                Palavras-Chave e Destaques
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalItem.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E2DBD0] text-[#8B5E3C] flex items-center gap-1"
                  >
                    <Tag className="w-3 h-3 text-[#8B5E3C]" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Modal References */}
            {activeModalItem.references && activeModalItem.references.length > 0 && (
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C857B] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#8B5E3C]" />
                  Referências e Leituras
                </h4>
                <ul className="space-y-1.5">
                  {activeModalItem.references.map((ref, i) => (
                    <li key={i}>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#8B5E3C] hover:text-[#5C3D24] hover:underline transition-colors"
                      >
                        <ArrowRight className="w-3 h-3 shrink-0" />
                        {ref.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#EFEADF] flex justify-end">
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2 rounded-xl bg-[#2C3531] text-white text-xs font-bold hover:bg-[#8B5E3C] transition-colors cursor-pointer shadow-xs"
              >
                Fechar Detalhes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
