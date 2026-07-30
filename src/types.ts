export type DimensionType = 
  | 'economico'
  | 'social'
  | 'etnico'
  | 'politico'
  | 'cultural'
  | 'logistico';

export interface DimensionInfo {
  id: DimensionType;
  label: string;
  iconName: string;
  color: string;
  pastelBg: string;
  pastelText: string;
  description: string;
}

export interface Region {
  id: string;
  name: string;
  shortCode: string;
  subTitle: string;
  xPosition: number; // For horizontal scrolling placement percentage
  svgPath: string;
  colorPastel: string;
  accentColor: string;
  cities: string[];
  historicalRole: string;
  economicBase: string;
  ethnicRoots: string;
  culturalHighlights: string[];
  logisticsHub: string;
  featuredEvents: number[]; // IDs of events from timeline
}

export interface Personality {
  name: string;
  role: string;
  period: string;
  bio: string;
  impact: string;
  imageUrl?: string;
  relatedArticleIds?: string[];
}

export interface ExternalLink {
  title: string;
  source: string; // e.g. "Fundação Joaquim Nabuco (FUNDAJ)", "IPHAN", "Arquivo Público de PE"
  url: string;
  type: 'base_dados' | 'documento' | 'artigo' | 'patrimonio';
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  century: string;
  dimensions: DimensionType[];
  regionIds: string[];
  keywords: string[];
  heroImageDescription: string;
  heroImageUrl?: string;
  
  // Required Structure
  contextoHistorico: {
    antecedentes: string;
    desenvolvimento: string;
    desdobramentos: string;
  };
  
  relacoesProgressividade: {
    periodoAnterior: string;
    periodoPosterior: string;
  };

  personalidadesEEventos: Personality[];

  influenciasContemporaneas: {
    patrimonioEMuseus: string[];
    legadoSocialECultural: string;
    referenciasVisuaisEBibliograficas: string[];
  };

  linksExternos: ExternalLink[];
}

export interface TimelineEvent {
  id: number;
  dateStr: string;
  year: number;
  title: string;
  regionId: string;
  dimensions: DimensionType[];
  summary: string;
  detailedContext: string;
  keyFigures: string[];
  keywords: string[];
  antecedentEventId?: number;
  subsequentEventId?: number;
}

export interface Keyword {
  id: string;
  term: string;
  category: 'conceito' | 'evento' | 'personalidade' | 'lugar' | 'etnia';
  definition: string;
  relatedArticleIds: string[];
  relatedEventIds: number[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  dimension: DimensionType;
  relatedYear?: number;
}
