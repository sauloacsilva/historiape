import { DimensionInfo, DimensionType } from '../types';

export const DIMENSIONS: Record<DimensionType, DimensionInfo> = {
  economico: {
    id: 'economico',
    label: 'Econômico',
    iconName: 'Coins',
    color: '#D97706',
    pastelBg: '#FEF3C7',
    pastelText: '#92400E',
    description: 'A produção do açúcar, feitorias, pecuária no interior, mascates, algodão e a fruticultura irrigada.'
  },
  social: {
    id: 'social',
    label: 'Social',
    iconName: 'Users',
    color: '#2563EB',
    pastelBg: '#DBEAFE',
    pastelText: '#1E40AF',
    description: 'A divisão em Casa-Grande e Senzala, insurreições populares, Ligas Camponesas e movimentos de direitos.'
  },
  etnico: {
    id: 'etnico',
    label: 'Étnico',
    iconName: 'HeartHandshake',
    color: '#D946EF',
    pastelBg: '#FAE8FF',
    pastelText: '#86198F',
    description: 'A matriz Indígena (Caetés, Fulni-ô, Xukuru), Africana (Quilombo dos Palmares) e Europeia (Portugueses, Holandeses, Judeus Kahal Zur Israel).'
  },
  politico: {
    id: 'politico',
    label: 'Político',
    iconName: 'Landmark',
    color: '#DC2626',
    pastelBg: '#FEE2E2',
    pastelText: '#991B1B',
    description: 'Capitânia Hereditária, Revolução de 1817, Confederação do Equador de 1824 e Revolução Praieira de 1848.'
  },
  cultural: {
    id: 'cultural',
    label: 'Cultural',
    iconName: 'Palette',
    color: '#059669',
    pastelBg: '#D1FAE5',
    pastelText: '#065F46',
    description: 'Frevo, Maracatu, Cavalo-Marinho, Arte de Barro de Vitalino, Luiz Gonzaga, Ciranda de Lia e o Manguebeat.'
  },
  logistico: {
    id: 'logistico',
    label: 'Logístico',
    iconName: 'Ship',
    color: '#0284C7',
    pastelBg: '#E0F2FE',
    pastelText: '#075985',
    description: 'Navegação fluvial do São Francisco, feitorias costeiras, porto do Recife, pontes de Nassau e malha ferroviária.'
  }
};
