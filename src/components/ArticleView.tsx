import React from 'react';
import { Article, DimensionType } from '../types';
import { DIMENSIONS } from '../data/dimensionsData';
import { KEYWORDS_DICTIONARY } from '../data/keywordsData';
import { BookOpen, Calendar, Users, Landmark, ExternalLink, ArrowLeft, ArrowRight, Share2, Sparkles, CheckCircle2, History, Layers } from 'lucide-react';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onKeywordClick: (keywordTerm: string) => void;
  onSelectArticle: (article: Article) => void;
  allArticles: Article[];
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBack,
  onKeywordClick,
  onSelectArticle,
  allArticles,
}) => {
  // Find current index to allow prev/next article navigation
  const currentIndex = allArticles.findIndex(a => a.id === article.id);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      {/* Top Navigation Back Action */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3EFE6] text-[#2C3531] hover:bg-[#E2DBD0] text-xs font-bold transition-all cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Atlas</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-[#8C857B] font-semibold">
          <Calendar className="w-4 h-4 text-[#8B5E3C]" />
          <span>{article.period} ({article.century})</span>
        </div>
      </div>

      {/* Hero Banner Header */}
      <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#E2DBD0] shadow-sm relative overflow-hidden">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] text-xs font-bold">
            {article.period}
          </span>

          {/* Dimension badges */}
          {article.dimensions.map((dimKey) => {
            const dim = DIMENSIONS[dimKey as DimensionType];
            return (
              <span
                key={dimKey}
                style={{ backgroundColor: dim.pastelBg, color: dim.pastelText }}
                className="px-3 py-1 rounded-full text-xs font-bold"
              >
                {dim.label}
              </span>
            );
          })}
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-[#2C3531] leading-tight mb-3">
          {article.title}
        </h1>
        <p className="text-base text-[#5C5549] font-medium max-w-3xl leading-relaxed">
          {article.subtitle}
        </p>

        {/* Hypertext Keywords Chips bar */}
        <div className="mt-6 pt-6 border-t border-[#EFEADF] flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-[#8C857B] uppercase tracking-wider mr-1">
            Palavras-Chave (Clique para navegar):
          </span>
          {article.keywords.map((kw, i) => (
            <button
              key={i}
              onClick={() => onKeywordClick(kw)}
              className="px-2.5 py-1 rounded-full bg-[#E2ECE0] hover:bg-[#C5D8C1] text-[#2D5A27] text-xs font-bold transition-all cursor-pointer shadow-2xs"
            >
              #{kw}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 1: Contexto Histórico & Relações de Progressividade */}
      <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#E2DBD0] space-y-6 shadow-sm">
        <div className="flex items-center gap-2 pb-4 border-b border-[#EFEADF]">
          <div className="w-9 h-9 rounded-xl bg-[#FEF3C7] text-[#92400E] flex items-center justify-center font-bold">
            <History className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2C3531]">
              1. Contexto Histórico e Relações de Progressividade
            </h2>
            <p className="text-xs text-[#6B7280]">
              Evolução temporal e causas que conectam este período ao passado e ao futuro de Pernambuco
            </p>
          </div>
        </div>

        {/* 3 Step Timeline Cards: Antecedentes -> Desenvolvimento -> Desdobramentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Antecedentes */}
          <div className="p-5 rounded-2xl bg-[#F3EFE6] border border-[#E2DBD0]">
            <span className="px-2.5 py-0.5 rounded-md bg-[#E2DBD0] text-[10px] font-black text-[#5C5549] uppercase block mb-2 w-fit">
              1. Antecedentes (Causas)
            </span>
            <p className="text-xs text-[#2C3531] leading-relaxed">
              {article.contextoHistorico.antecedentes}
            </p>
          </div>

          {/* Desenvolvimento */}
          <div className="p-5 rounded-2xl bg-[#FEF3C7] border border-[#FCD34D]">
            <span className="px-2.5 py-0.5 rounded-md bg-[#FCD34D] text-[10px] font-black text-[#92400E] uppercase block mb-2 w-fit">
              2. O Evento / Período
            </span>
            <p className="text-xs text-[#2C3531] leading-relaxed">
              {article.contextoHistorico.desenvolvimento}
            </p>
          </div>

          {/* Desdobramentos */}
          <div className="p-5 rounded-2xl bg-[#DBEAFE] border border-[#BFDBFE]">
            <span className="px-2.5 py-0.5 rounded-md bg-[#BFDBFE] text-[10px] font-black text-[#1E40AF] uppercase block mb-2 w-fit">
              3. Desdobramentos (Impactos)
            </span>
            <p className="text-xs text-[#2C3531] leading-relaxed">
              {article.contextoHistorico.desdobramentos}
            </p>
          </div>
        </div>

        {/* Relações de Progressividade (Linha de Continuidade) */}
        <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E2DBD0] space-y-3">
          <h3 className="text-xs font-bold text-[#8B5E3C] uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#8B5E3C]" />
            <span>Relações de Progressividade com Períodos Vizinhos:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#2C3531]">
            <div className="p-3 bg-white rounded-xl border border-[#E2DBD0]">
              <p className="font-bold text-[#8C857B] text-[10px] uppercase mb-1">⬅️ Relação com o Período Anterior:</p>
              <p>{article.relacoesProgressividade.periodoAnterior}</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-[#E2DBD0]">
              <p className="font-bold text-[#8C857B] text-[10px] uppercase mb-1">➡️ Relação com o Período Posterior:</p>
              <p>{article.relacoesProgressividade.periodoPosterior}</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Principais Personalidades & Eventos Marcantes */}
      <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#E2DBD0] space-y-6 shadow-sm">
        <div className="flex items-center gap-2 pb-4 border-b border-[#EFEADF]">
          <div className="w-9 h-9 rounded-xl bg-[#DBEAFE] text-[#1E40AF] flex items-center justify-center font-bold">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2C3531]">
              2. Principais Personalidades e Legado Cultural
            </h2>
            <p className="text-xs text-[#6B7280]">
              Figuras históricas que definiram os caminhos e o patrimônio moral e cultural de Pernambuco
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {article.personalidadesEEventos.map((pers, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E2DBD0] shadow-2xs hover:border-[#8B5E3C] transition-all"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-base font-bold text-[#2C3531]">{pers.name}</h3>
                  <span className="text-xs font-semibold text-[#8B5E3C]">{pers.role}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#F3EFE6] text-[10px] font-bold text-[#5C5549]">
                  {pers.period}
                </span>
              </div>

              <p className="text-xs text-[#4A5568] leading-relaxed mb-3">
                {pers.bio}
              </p>

              <div className="pt-2 border-t border-[#EFEADF] text-xs text-[#2C3531]">
                <strong>Impacto Histórico:</strong> {pers.impact}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: Influências e Impactos na Sociedade Contemporânea */}
      <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#E2DBD0] space-y-6 shadow-sm">
        <div className="flex items-center gap-2 pb-4 border-b border-[#EFEADF]">
          <div className="w-9 h-9 rounded-xl bg-[#D1FAE5] text-[#065F46] flex items-center justify-center font-bold">
            <Landmark className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2C3531]">
              3. Influências e Impactos na Sociedade Contemporânea
            </h2>
            <p className="text-xs text-[#6B7280]">
              O que restou no Pernambuco de hoje: Patrimônio IPHAN, museus, celebrações e literatura
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Legado Social */}
          <div className="p-4 rounded-2xl bg-[#E2ECE0] border border-[#C5D8C1]">
            <h3 className="text-xs font-bold text-[#2D5A27] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2D5A27]" />
              <span>Legado Social e Cultural Vivo:</span>
            </h3>
            <p className="text-xs text-[#2C3531] leading-relaxed">
              {article.influenciasContemporaneas.legadoSocialECultural}
            </p>
          </div>

          {/* Patrimônio e Museus */}
          <div className="p-4 rounded-2xl bg-[#F3EFE6] border border-[#E2DBD0]">
            <h3 className="text-xs font-bold text-[#8C857B] uppercase tracking-wider mb-2">
              🏛️ Patrimônio Material, Museus e Lugares de Memória:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2C3531]">
              {article.influenciasContemporaneas.patrimonioEMuseus.map((pat, i) => (
                <div key={i} className="p-2.5 bg-white rounded-xl border border-[#E2DBD0] flex items-center gap-2">
                  <span>📍</span>
                  <span>{pat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Referências Visuais e Bibliográficas */}
          <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E2DBD0]">
            <h3 className="text-xs font-bold text-[#8C857B] uppercase tracking-wider mb-2">
              📚 Referências Bibliográficas e Documentais Recomendadas:
            </h3>
            <ul className="text-xs text-[#4A5568] space-y-1">
              {article.influenciasContemporaneas.referenciasVisuaisEBibliograficas.map((ref, i) => (
                <li key={i} className="font-mono text-[11px]">• {ref}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION 4: Links Externos e Fontes Confiáveis */}
      <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#E2DBD0] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 pb-3 border-b border-[#EFEADF]">
          <ExternalLink className="w-5 h-5 text-[#8B5E3C]" />
          <h2 className="text-lg font-bold text-[#2C3531]">
            4. Links Externos e Bases de Dados Confiáveis para Pesquisa Escolar
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {article.linksExternos.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white border border-[#E2DBD0] hover:border-[#8B5E3C] hover:shadow-md transition-all flex flex-col justify-between gap-2 group"
            >
              <div>
                <span className="px-2 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] text-[10px] font-bold block w-fit mb-1">
                  {link.source}
                </span>
                <h3 className="text-xs font-bold text-[#2C3531] group-hover:text-[#8B5E3C]">
                  {link.title}
                </h3>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-[#8B5E3C] pt-2 border-t border-[#EFEADF]">
                <span>Acessar Fonte</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Prev / Next Article Navigation Footer */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#E2DBD0]">
        {prevArticle ? (
          <button
            onClick={() => onSelectArticle(prevArticle)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#F3EFE6] hover:bg-[#E2DBD0] text-xs font-bold text-[#2C3531] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-left">
              <span className="text-[10px] text-[#8C857B] block uppercase">Anterior</span>
              {prevArticle.title}
            </span>
          </button>
        ) : <div />}

        {nextArticle ? (
          <button
            onClick={() => onSelectArticle(nextArticle)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#F3EFE6] hover:bg-[#E2DBD0] text-xs font-bold text-[#2C3531] transition-all cursor-pointer text-right"
          >
            <span className="text-right">
              <span className="text-[10px] text-[#8C857B] block uppercase">Próximo Artigo</span>
              {nextArticle.title}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : <div />}
      </div>
    </div>
  );
};
