import { Keyword } from '../types';

export const KEYWORDS_DICTIONARY: Record<string, Keyword> = {
  'Capitania Hereditária': {
    id: 'capitania-hereditaria',
    term: 'Capitania Hereditária',
    category: 'conceito',
    definition: 'Sistema de administração territorial criado pela Coroa Portuguesa em 1534, dividindo o Brasil em faixas de terra doadas a fidalgos chamados donatários. Pernambuco foi a mais bem-sucedida delas.',
    relatedArticleIds: ['capitania-e-açucar', 'formacao-sociedade'],
    relatedEventIds: [6, 7]
  },
  'Açúcar': {
    id: 'açucar',
    term: 'Açúcar',
    category: 'conceito',
    definition: 'Conhecido como "ouro branco", produto derivado da cana-de-açúcar que sustentou a economia pernambucana nos séculos XVI ao XIX, exigindo grandes engenhos, latifúndios e mão de obra escravizada.',
    relatedArticleIds: ['capitania-e-açucar', 'brasil-holandes', 'zona-da-mata-engenhos'],
    relatedEventIds: [3, 4, 15, 23]
  },
  'Duarte Coelho': {
    id: 'duarte-coelho',
    term: 'Duarte Coelho',
    category: 'personalidade',
    definition: 'Primeiro donatário da Capitania de Pernambuco (1534). Fidalgo português que fundou as vilas de Olinda e Igarassu e introduziu o cultivo da cana-de-açúcar e os primeiros engenhos.',
    relatedArticleIds: ['capitania-e-açucar'],
    relatedEventIds: [6, 7, 8, 9]
  },
  'Maurício de Nassau': {
    id: 'mauricio-de-nassau',
    term: 'Maurício de Nassau',
    category: 'personalidade',
    definition: 'Conde alemão a serviço da Companhia das Índias Ocidentais (WIC) que governou o Brasil Holandês de 1637 a 1644. Promoveu modernização urbana, tolerância religiosa e artes no Recife.',
    relatedArticleIds: ['brasil-holandes'],
    relatedEventIds: [17, 18, 19, 20, 21]
  },
  'Insurreição Pernambucana': {
    id: 'insurreicao-pernambucana',
    term: 'Insurreição Pernambucana',
    category: 'evento',
    definition: 'Movimento de libertação armado (1645-1654) movido por brasileiros, negros e indígenas contra o domínio holandês em Pernambuco, culminando na vitória luso-brasileira nas Batalhas dos Guararapes.',
    relatedArticleIds: ['insurreicao-e-resistencia'],
    relatedEventIds: [22, 23]
  },
  'Frei Caneca': {
    id: 'frei-caneca',
    term: 'Frei Caneca',
    category: 'personalidade',
    definition: 'Joaquim do Amor Divino Rabelo Caneca (1779-1825), frade carmelita, jornalista e líder republicano das Revoluções de 1817 e 1824. Mártir da Confederação do Equador.',
    relatedArticleIds: ['revolucoes-pernambucanas'],
    relatedEventIds: [27, 29]
  },
  'Quilombo dos Palmares': {
    id: 'quilombo-dos-palmares',
    term: 'Quilombo dos Palmares',
    category: 'lugar',
    definition: 'Maior comunidade de resistência de pessoas escravizadas das Américas (século XVII), localizada na Serra da Barriga (antiga capitania de Pernambuco), liderada por Zumbi e Ganga Zumba.',
    relatedArticleIds: ['resistencia-afro-indigena'],
    relatedEventIds: [215]
  },
  'Guerra dos Mascates': {
    id: 'guerra-dos-mascates',
    term: 'Guerra dos Mascates',
    category: 'evento',
    definition: 'Conflito (1710-1711) entre a aristocracia rural de Olinda e os comerciantes portugueses ("mascates") do Recife por conta da emancipação política e econômica do Recife.',
    relatedArticleIds: ['mascates-e-nativismo'],
    relatedEventIds: [25]
  },
  'Manguebeat': {
    id: 'manguebeat',
    term: 'Manguebeat',
    category: 'conceito',
    definition: 'Movimento de contracultura musical e social surgido no Recife nos anos 1990 (liderado por Chico Science & Nação Zumbi e Fred Zero Quatro), misturando ritmos regionais como maracatu com rock, hip hop e eletrônica.',
    relatedArticleIds: ['cultura-contemporanea'],
    relatedEventIds: []
  },
  'Kahal Zur Israel': {
    id: 'kahal-zur-israel',
    term: 'Kahal Zur Israel',
    category: 'lugar',
    definition: 'Primeira sinagoga fundada nas Américas (1641), localizada na Rua dos Judeus (atual Rua do Bom Jesus) no Recife Holandês.',
    relatedArticleIds: ['brasil-holandes', 'diversidade-etnica'],
    relatedEventIds: [18]
  },
  'Ligas Camponesas': {
    id: 'ligas-camponesas',
    term: 'Ligas Camponesas',
    category: 'conceito',
    definition: 'Movimentos sociais de trabalhadores rurais surgidos no Engenho Galileia (Vitória de Santo Antão) nos anos 1950, liderados por Francisco Julião, lutando por direitos trabalhistas e reforma agraria.',
    relatedArticleIds: ['trabalho-e-terra'],
    relatedEventIds: []
  },
  'Revolução de 1817': {
    id: 'revolucao-de-1817',
    term: 'Revolução Pernambucana de 1817',
    category: 'evento',
    definition: 'Movimento republicano e emancipacionista que tomou o governo no Recife por 74 dias, instituindo a primeira república independente no Brasil Colônia com liberdade de imprensa e de religião.',
    relatedArticleIds: ['revolucoes-pernambucanas'],
    relatedEventIds: [27]
  },
  'Cangaço': {
    id: 'cangaço',
    term: 'Cangaço',
    category: 'conceito',
    definition: 'Fenômeno do banditismo social ocorrido no interior do Nordeste do final do século XIX ao meio do século XX, com figuras célebres como Lampião e Maria Bonita.',
    relatedArticleIds: ['sertao-e-cangaço'],
    relatedEventIds: []
  },
  'Cabo de Santo Agostinho': {
    id: 'cabo-de-santo-agostinho',
    term: 'Cabo de Santo Agostinho',
    category: 'lugar',
    definition: 'Promontório rochoso no litoral sul pernambucano, local do desembarque de Vicente Yáñez Pinzón em 1500 e atual polo industrial e portuário (Complexo de Suape).',
    relatedArticleIds: ['capitania-e-açucar', 'logistica-moderna'],
    relatedEventIds: [1]
  }
};
