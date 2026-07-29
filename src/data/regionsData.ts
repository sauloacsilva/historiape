import { Region } from '../types';

export const REGIONS_DATA: Region[] = [
  {
    id: 'sertao-sao-francisco',
    name: 'Vale do São Francisco',
    shortCode: 'São Francisco',
    subTitle: 'Portal do Interior & Caminhos da Navegação Fluvial',
    xPosition: 12, // 12% horizontal map track
    colorPastel: '#FEF08A', // soft pastel yellow
    accentColor: '#CA8A04',
    svgPath: 'M 10,200 Q 80,180 180,220 L 220,380 Q 120,420 10,380 Z',
    cities: ['Petrolina', 'Lagoa Grande', 'Cabrobó', 'Orocó', 'Santa Maria da Boa Vista'],
    historicalRole: 'Rota de interiorização colonial com tropeiros, navegação a vapor no Velho Chico no século XIX e posterior polo agroindustrial de fruticultura irrigada.',
    economicBase: 'Pecuária extensiva histórica, navegação fluvial comercial e fruticultura irrigada contemporânea (uva e manga).',
    ethnicRoots: 'Presença secular das etnias Indígenas Tuxá, Truká e Fulni-ô, e vaqueiros mestiços sertanejos.',
    culturalHighlights: ['Navegação a Vapor no Rio São Francisco', 'Lendas do Velho Chico (CARRANCAS)', 'Reisado e Reis do Baião'],
    logisticsHub: 'Porto fluvial histórico de Petrolina/Juazeiro e integração ferroviária/rodoviária com o interior do Nordeste.',
    featuredEvents: [27, 29]
  },
  {
    id: 'sertao-central-pajeu',
    name: 'Sertão Central, Araripe e Pajeú',
    shortCode: 'Sertão',
    subTitle: 'Berço do Cangaço, Poesia Cantada & Resistência Sertaneja',
    xPosition: 28, // 28% horizontal map track
    colorPastel: '#FED7AA', // soft pastel orange
    accentColor: '#EA580C',
    svgPath: 'M 180,180 Q 280,150 380,200 L 380,390 Q 280,410 180,380 Z',
    cities: ['Serra Talhada', 'Exu', 'Salgueiro', 'Afogados da Ingazeira', 'Triunfo', 'Araripina'],
    historicalRole: 'Palco das rotas de gado no século XVIII, batalhas da Confederação do Equador (Bárbara de Alencar em Salgueiro), ciclo do Cangaço e criação do Baião por Luiz Gonzaga.',
    economicBase: 'Criação do gado, cultura do algodão "ouro branco", agricultura de subsistência e gesso no Araripe.',
    ethnicRoots: 'Povos Indígenas Kariri, Atikum, Pankará e a figura mítica do Vaqueiro Nordestino.',
    culturalHighlights: ['Luiz Gonzaga - O Rei do Baião (Exu)', 'Poesia Repente e Cantadores do Pajeú', 'Museu do Cangaço (Serra Talhada)'],
    logisticsHub: 'Estrada do Boi, caminhos de tropeiros e entroncamento rodoviário de Salgueiro (BR-232 e Transnordestina).',
    featuredEvents: [27, 29]
  },
  {
    id: 'agreste',
    name: 'Agreste Pernambucano',
    shortCode: 'Agreste',
    subTitle: 'Centro Comercial, Artesanato de Barro & Feiras Livres',
    xPosition: 46, // 46% horizontal map track
    colorPastel: '#FBCFE8', // soft pastel pink
    accentColor: '#DB2777',
    svgPath: 'M 380,170 Q 480,140 580,180 L 580,400 Q 480,420 380,390 Z',
    cities: ['Caruaru', 'Garanhuns', 'Gravatá', 'Bezerros', 'Pesqueira', 'Santa Cruz do Capibaribe'],
    historicalRole: 'Zona de transição entre a mata açucareira e o sertão seco. Espaço dos mascates ambulantes e feiras livres coloniais.',
    economicBase: 'Feira Livre de Caruaru, polo confeccionista do Agreste, pecuária leiteira e turismo climático (Garanhuns/Triunfo).',
    ethnicRoots: 'Mestiçagem entre colonos portugueses, indígenas Xukuru do Ororubá (Pesqueira) e trabalhadores rurais.',
    culturalHighlights: ['Artesanato de Barro do Alto do Moura (Mestre Vitalino)', 'Maior São João do Mundo em Caruaru', 'Papangus de Bezerros'],
    logisticsHub: 'Eixo rodoviário BR-232 ligando o Recife ao Sertão e antigas estações da Great Western Railway.',
    featuredEvents: [25, 27]
  },
  {
    id: 'zona-da-mata',
    name: 'Zona da Mata (Norte e Sul)',
    shortCode: 'Zona da Mata',
    subTitle: 'Coração Açucareiro, Engenhos & Quilombo dos Palmares',
    xPosition: 64, // 64% horizontal map track
    colorPastel: '#BBF7D0', // soft pastel green
    accentColor: '#16A34A',
    svgPath: 'M 580,160 Q 680,140 760,170 L 760,410 Q 680,420 580,400 Z',
    cities: ['Goiana', 'Vitória de Santo Antão', 'Palmares', 'Nazaré da Mata', 'Carpina', 'Sirinhaém'],
    historicalRole: 'Berço da economia do açúcar nos séculos XVI-XIX. Sede dos grandes engenhos, senzalas, Quilombo dos Palmares e Ligas Camponesas.',
    economicBase: 'Monocultura da cana-de-açúcar, usinas açucareiras e polo automotivo contemporâneo (Goiana).',
    ethnicRoots: 'Afro-brasileiros escravizados e libertos (Resistência Quilombola) e nativos Caetés e Tabajaras.',
    culturalHighlights: ['Maracatu Rural de Baque Solto (Nazaré da Mata)', 'Cavalo-Marinho', 'Engenhos Históricos e Casas-Grandes'],
    logisticsHub: 'Ferrovias canavieiras históricas, pontes de engenho e rios Capibaribe, Sirinhaém e Goiana.',
    featuredEvents: [3, 4, 8, 22, 30]
  },
  {
    id: 'rmr',
    name: 'Região Metropolitana do Recife e Litoral',
    shortCode: 'Recife e Litoral',
    subTitle: 'Sede da Capitania, Recife Holandês & Revoluções Liberais',
    xPosition: 82, // 82% horizontal map track
    colorPastel: '#BAE6FD', // soft pastel blue
    accentColor: '#0284C7',
    svgPath: 'M 760,150 Q 860,130 920,160 L 920,430 Q 850,430 760,410 Z',
    cities: ['Recife', 'Olinda', 'Igarassu', 'Itamaracá', 'Cabo de Santo Agostinho', 'Jaboatão dos Guararapes'],
    historicalRole: 'Capital histórica da América Portuguesa e do Brasil Holandês (Maurício de Nassau). Palco das Revoluções de 1817, 1824 e 1848.',
    economicBase: 'Comércio portuário, alfândega colonial, centro administrativo e atual Porto Digital e polo médico.',
    ethnicRoots: 'Síntese de Portugueses, Judeus Sefarditas (Kahal Zur Israel), Indígenas e Africanos.',
    culturalHighlights: ['Frevo e Maracatu de Baque Virado', 'Centro Histórico de Olinda (Patrimônio UNESCO)', 'Galo da Madrugada e Manguebeat'],
    logisticsHub: 'Porto do Recife, Porto de Suape, Aeroporto Internacional dos Guararapes e sistema de pontes insulares.',
    featuredEvents: [1, 2, 3, 5, 6, 7, 9, 10, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30]
  },
  {
    id: 'noronha',
    name: 'Arquipélago de Fernando de Noronha',
    shortCode: 'Noronha',
    subTitle: 'Sentinela do Atlântico & Presídio Político Histórico',
    xPosition: 95, // 95% horizontal map track
    colorPastel: '#DDD6FE', // soft pastel purple
    accentColor: '#7C3AED',
    svgPath: 'M 930,100 C 950,80 980,100 970,130 C 950,150 920,130 930,100 Z',
    cities: ['Fernando de Noronha'],
    historicalRole: 'Avistado em expedições do século XVI (Amerigo Vespucci), fortificado contra piratas franceses e ingleses, e presídio político no Império e República.',
    economicBase: 'Defesa militar estratégica e atual turismo ecológico sustentável e preservação marinha.',
    ethnicRoots: 'Navegadores europeus, guarnições militares coloniais e presos políticos rebeldes de 1817 e 1824.',
    culturalHighlights: ['Forte dos Remédios (1737)', 'Vila dos Remédios', 'Patrimônio Natural e Histórico da Humanidade'],
    logisticsHub: 'Ponto avançado de navegação oceânica no Atlântico Sul e base aérea na Segunda Guerra Mundial.',
    featuredEvents: [2]
  }
];
