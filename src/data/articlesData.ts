import { Article } from '../types';

export const ARTICLES_DATA: Article[] = [
  {
    id: 'capitania-e-açucar',
    title: 'A Nova Lusitânia e a Ciclo do Açúcar (1534 - 1630)',
    subtitle: 'Da Carta de Doação ao auge da agroindústria açucareira colonial',
    period: 'Colônia / Século XVI e XVII',
    century: 'Séc. XVI - XVII',
    dimensions: ['economico', 'social', 'logistico', 'etnico'],
    regionIds: ['rmr', 'zona-da-mata'],
    keywords: ['Capitania Hereditária', 'Açúcar', 'Duarte Coelho', 'Cabo de Santo Agostinho', 'Olinda', 'Igarassu'],
    heroImageDescription: 'Engenho de açúcar colonial com moenda movida a água e a Casa-Grande de Olinda.',

    contextoHistorico: {
      antecedentes: 'Antes da doação das Capitanias Hereditárias em 1534, o litoral de Pernambuco era habitado por povos Caetés e Tabajaras e explorado por franceses e portugueses através do escambo do pau-brasil (feitorias de Itamaracá de 1516 e Igarassu). O rei D. João III precisava povoar e proteger o território de invasões estrangeiras.',
      desenvolvimento: 'Em 10 de março de 1534, D. João III doou a Capitania de Pernambuco a Duarte Coelho. Desembarcando em 1535 com sua esposa Dona Brites de Albuquerque, Duarte Coelho nomeou o território de "Nova Lusitânia". Ergueu a primeira Casa-Forte do Brasil em Olinda, fundou as vilas de Olinda e Igarassu (1537) e introduziu mudas de cana trazidas da Ilha da Madeira. Em poucas décadas, Pernambuco tornou-se a capitania mais rica do Império Português.',
      desdobramentos: 'A opulência do açúcar atraiu a atenção de potências europeias rivais de Espanha/Portugal (União Ibérica), culminando no Saque do Recife pelo inglês James Lancaster (1595) e na subsequente Invasão Holandesa promovida pela Companhia das Índias Ocidentais em 1630.'
    },

    relacoesProgressividade: {
      periodoAnterior: 'Período Pré-Colonial e Feitorias do Pau-Brasil (1500-1534): economia extrativista sem fixação populacional permanente.',
      periodoPosterior: 'Pernambuco Holandês (1630-1654): a conquista militar holandesa e a reestruturação da economia e urbanismo do Recife por Maurício de Nassau.'
    },

    personalidadesEEventos: [
      {
        name: 'Duarte Coelho',
        role: 'Primeiro Donatário da Capitania de Pernambuco',
        period: '1534 - 1554',
        bio: 'Fidalgo e navegador experiente, administrou a capitania com rigor, estabelecendo alianças com os indígenas Tabajaras e impulsionando a construção de dezenas de engenhos de açúcar.',
        impact: 'Fundador do modelo agroexportador e latifundiário que moldou a estrutura fundiária e territorial de Pernambuco.'
      },
      {
        name: 'Dona Brites de Albuquerque',
        role: 'Governadora da Capitania e "Mãe dos Pernambucanos"',
        period: '1553 - 1584',
        bio: 'Esposa de Duarte Coelho, assumiu o governo da Capitania de Pernambuco após a morte do marido e durante as ausências dos filhos, sendo a primeira mulher a governar uma província nas Américas.',
        impact: 'Gantiu a estabilidade política e a defesa de Olinda contra ataques indígenas e corsários.'
      }
    ],

    influenciasContemporaneas: {
      patrimonioEMuseus: [
        'Centro Histórico de Olinda (Patrimônio Mundial da UNESCO)',
        'Igreja dos Santos Cosme e Damião em Igarassu (Igreja mais antiga em funcionamento no Brasil - 1535)',
        'Museu do Estado de Pernambuco (MEPE - Recife)',
        'Engenho Massangana (Cabo de Santo Agostinho)'
      ],
      legadoSocialECultural: 'A estrutura social polarizada do açúcar deu origem a conceitos clássicos da sociologia brasileira (como "Casa-Grande & Senzala" de Gilberto Freyre). O vocabulário, a culinária do açúcar (bolo de rolo, Souza Leão, cartola) e a paisagem dos canaviais na Zona da Mata permanecem como marcas vivas.',
      referenciasVisuaisEBibliograficas: [
        'FREYRE, Gilberto. Casa-Grande & Senzala. Rio de Janeiro: José Olympio, 1933.',
        'MELLO, Evaldo Cabral de. Olinda Restaurada: Algodão e Açúcar na Colonização do Nordeste. Rio de Janeiro: Topbooks, 1998.',
        'Mapa da Capitania de Pernambuco por João Teixeira Albernaz (1640).'
      ]
    },

    linksExternos: [
      {
        title: 'Acervo Histórico da Fundação Joaquim Nabuco (FUNDAJ)',
        source: 'FUNDAJ',
        url: 'https://fundaj.gov.br',
        type: 'base_dados'
      },
      {
        title: 'IPHAN - Centro Histórico de Olinda e Igarassu',
        source: 'IPHAN',
        url: 'http://portal.iphan.gov.br/pagina/detalhes/839',
        type: 'patrimonio'
      },
      {
        title: 'Arquivo Público Estadual Jordão Emerenciano (APEJE)',
        source: 'Governo de Pernambuco',
        url: 'http://www.arquivo-publico.pe.gov.br',
        type: 'documento'
      }
    ]
  },
  {
    id: 'brasil-holandes',
    title: 'O Brasil Holandês e a Era Nassau (1630 - 1654)',
    subtitle: 'A Cidade Maurícia, a inovação científica, tolerância e urbanismo do Recife',
    period: 'Invasão Holandesa / Século XVII',
    century: 'Séc. XVII',
    dimensions: ['politico', 'cultural', 'logistico', 'etnico', 'economico'],
    regionIds: ['rmr'],
    keywords: ['Maurício de Nassau', 'Kahal Zur Israel', 'Cidade Maurícia', 'Insurreição Pernambucana', 'Ponte Maurício de Nassau'],
    heroImageDescription: 'Recife no século XVII com suas pontes de madeira, o Palácio Friburgo e navios holandeses ancorados.',

    contextoHistorico: {
      antecedentes: 'No contexto da União Ibérica (1580-1640), a Espanha proibiu o comércio entre os produtores pernambucanos e a Holanda. Em resposta, a Companhia das Índias Ocidentais (WIC) financiou uma poderosa frota militar para conquistar a capitania produtora de açúcar.',
      desenvolvimento: 'Após desembarcarem em Pau Amarelo em 1630 e incendiarem a vila aristocrática de Olinda em 1631, os holandeses escolheram o porto do Recife como capital. A chegada do Conde Maurício de Nassau em 1637 marcou o apogeu: construiu-se a "Cidade Maurícia" na Ilha de Antônio Vaz, inaugurou-se a primeira ponte da América Latina (1643), fundou-se a primeira sinagoga das Américas (Kahal Zur Israel, 1641) e registraram-se os primeiros estudos botânicos e pinturas da paisagem tropical por Frans Post e Albert Eckhout.',
      desdobramentos: 'Com a demissão de Nassau em 1644 devido à pressão financeira da WIC, os senhores de engenho pernambucanos endividados uniram-se na Insurreição Pernambucana (1645-1654), expulsando os holandeses após a Capitulação da Taborda.'
    },

    relacoesProgressividade: {
      periodoAnterior: 'Primeiro Ciclo Açucareiro Português (1534-1630): domínio da aristocracia olindense e exclusivismo metopolitano.',
      periodoPosterior: 'Restauração Pernambucana e Guerra dos Mascates (1654-1711): crise econômica pós-expulsão e rivalidade entre Olinda e Recife.'
    },

    personalidadesEEventos: [
      {
        name: 'Maurício de Nassau',
        role: 'Governador-Geral do Brasil Holandês',
        period: '1637 - 1644',
        bio: 'Nobre alemão admirador do Humanismo. Modernizou o Recife, implementou esgoto, calçamento, pontes e incentivou a convivência pacífica entre católicos, protestantes e judeus.',
        impact: 'Transformou o Recife de simples povoado de pescadores na metrópole cosmopolita "Cidade Maurícia".'
      },
      {
        name: 'Isaac Aboab da Fonseca',
        role: 'Primeiro Rabino das Américas',
        period: '1642 - 1654',
        bio: 'Erudito judeu sefardita nascido em Portugal que liderou a comunidade judaica na sinagoga Kahal Zur Israel no Recife.',
        impact: 'Símbolo da liberdade de culto que marcou o Recife Holandês.'
      }
    ],

    influenciasContemporaneas: {
      patrimonioEMuseus: [
        'Sinagoga Kahal Zur Israel e Museu Judaico de Pernambuco (Rua do Bom Jesus - Recife Antigo)',
        'Forte das Cinco Pontas / Museu da Cidade do Recife',
        'Forte do Brum (Recife)',
        'Ponte Maurício de Nassau (Recife)'
      ],
      legadoSocialECultural: 'A lenda do "Boi Voador", a configuração insular e de canais do Recife (conhecida como a "Veneza Brasileira") e o traçado urbano do Bairro do Recife Antigo derivam diretamente da engenharia holandesa do século XVII.',
      referenciasVisuaisEBibliograficas: [
        'MELLO, Evaldo Cabral de. O Negócio do Brasil: A Alienação do Nordeste. Rio de Janeiro: Topbooks, 1998.',
        'Pinturas de Frans Post e Albert Eckhout (Acervo do Instituto Ricardo Brennand).',
        'PISO, Willem; MARCGRAVE, Georg. Historia Naturalis Brasiliae. Leiden, 1648.'
      ]
    },

    linksExternos: [
      {
        title: 'Sinagoga Kahal Zur Israel - Centro de Cultura Judaica',
        source: 'Museu Judaico PE',
        url: 'https://www.kahalzurisrael.com.br',
        type: 'patrimonio'
      },
      {
        title: 'Instituto Ricardo Brennand (Maior acervo de Frans Post e Nassau do mundo)',
        source: 'Instituto RB',
        url: 'https://www.institutoricardobrennand.org.br',
        type: 'base_dados'
      }
    ]
  },
  {
    id: 'resistencia-afro-indigena',
    title: 'Matrizes Étnicas e Resistência: Palmares, Caetés e Xukuru',
    subtitle: 'A formação étnico-social de Pernambuco e as lutas pela liberdade',
    period: 'Colônia e Império / Séculos XVI a XIX',
    century: 'Séc. XVI - XIX',
    dimensions: ['etnico', 'social', 'politico', 'cultural'],
    regionIds: ['zona-da-mata', 'agreste', 'sertao-central-pajeu'],
    keywords: ['Quilombo dos Palmares', 'Zumbi dos Palmares', 'Senzala', 'Maracatu', 'Caetés', 'Xukuru'],
    heroImageDescription: 'Serra da Barriga e guerreiros do Quilombo dos Palmares defendendo o mocambo.',

    contextoHistorico: {
      antecedentes: 'A implantação da monocultura da cana-de-açúcar baseou-se na subjugação violenta dos povos originários (Caetés e Tabajaras) e no tráfico transatlântico de milhões de africanos escravizados (predominantemente dos povos Banto, Nagô e Jeje).',
      desenvolvimento: 'Diante do cativeiro, as populações negras e indígenas desenvolveram múltiplas formas de resistência: desde negociações e preservação de rituais até revoltas armadas e fugas em massa. O Quilombo dos Palmares (século XVII), na Serra da Barriga (fronteira entre Pernambuco e Alagoas), organizou-se como um estado autônomo com mais de 20 mil pessoas. Liderados por Ganga Zumba e Zumbi dos Palmares, resistiram durante quase um século aos ataques de tropas portuguesas e holandesas.',
      desdobramentos: 'Após a queda de Palmares em 1695, as heranças africanas e indígenas reorganizaram-se em irmandades religiosas de homens pretos, na fundação de terras quilombolas e nas manifestações do Maracatu de Baque Virado, Cavalo-Marinho e Toré indígena.'
    },

    relacoesProgressividade: {
      periodoAnterior: 'Início do Tráfico Transatlântico e Escravização Indígena (1530-1600).',
      periodoPosterior: 'Abolição da Escravidão (1888) e Mobilizações dos Direitos Quilombolas e Indígenas no século XX.'
    },

    personalidadesEEventos: [
      {
        name: 'Zumbi dos Palmares',
        role: 'Líder do Quilombo dos Palmares',
        period: '1655 - 1695',
        bio: 'Nascido livre em Palmares, capturado e entregue a um padre quando criança, retornou ao quilombo na juventude e assumiu a liderança militar e política de resistência contra a escravidão.',
        impact: 'Símbolo maior da luta pela liberdade e igualdade racial no Brasil (Dia da Consciência Negra - 20 de Novembro).'
      },
      {
        name: 'Henrique Dias',
        role: 'Comandante dos Regimentos de Homens Pretos (Terço dos Homens Pretos)',
        period: 'Séc. XVII',
        bio: 'Ex-escravizado liberto que liderou tropas negras na Insurreição Pernambucana contra os holandeses, obtendo títulos de nobreza da Coroa.',
        impact: 'Demonstrou a força e a capacidade de organização das populações negras na defesa do território.'
      }
    ],

    influenciasContemporaneas: {
      patrimonioEMuseus: [
        'Parque Memorial Quilombo dos Palmares (Serra da Barriga)',
        'Pátio de São Pedro e Casa do Carnaval (Recife)',
        'Território Indígena Xukuru do Ororubá (Pesqueira)',
        'Comunidades Quilombolas do Agreste e Sertão (Conaq PE)'
      ],
      legadoSocialECultural: 'A presença negra e indígena manifesta-se nos ritmos do Maracatu de Baque Virado e Baque Solto, na linguagem (palavras de origem kimbundu e tupi), na culinária com azeite de dendê e mandioca, e nas lutas atuais por demarcação de terras.',
      referenciasVisuaisEBibliograficas: [
        'FREITAS, Décio. Palmares: A Guerra dos Escravos. Porto Alegre: Mercado Aberto, 1982.',
        'SANTOS, Maria do Carmo. A Resistência Negra em Pernambuco Colonial. Editora UFPE.'
      ]
    },

    linksExternos: [
      {
        title: 'Fundação Cultural Palmares - História de Palmares',
        source: 'Fundação Palmares',
        url: 'https://www.palmares.gov.br',
        type: 'base_dados'
      },
      {
        title: 'Comissão Pró-Índio - Povos Indígenas de Pernambuco',
        source: 'CPI',
        url: 'https://cpisp.org.br',
        type: 'artigo'
      }
    ]
  },
  {
    id: 'revolucoes-pernambucanas',
    title: 'As Revoluções Liberais e Repúblicas (1817, 1824 e 1848)',
    subtitle: 'O Leão do Norte na vanguarda da liberdade e do republicanismo brasileiro',
    period: 'Século XIX / Império',
    century: 'Séc. XIX',
    dimensions: ['politico', 'social', 'cultural', 'economico'],
    regionIds: ['rmr', 'agreste', 'sertao-central-pajeu'],
    keywords: ['Revolução de 1817', 'Frei Caneca', 'Confederação do Equador', 'Revolução Praieira', 'Manifesto ao Mundo', 'Convenção de Beberibe'],
    heroImageDescription: 'Bandeira da Revolução de 1817 hasteada no Recife enquanto patriotas proclamam a República.',

    contextoHistorico: {
      antecedentes: 'Durante o século XVIII e início do XIX, as ideias do Iluminismo Europeu e das Revoluções Francesa e Americana circularam ativamente em Pernambuco através de sociedades secretas como o Areópago de Itambé e a Conspiração dos Suassunas (1801). O descontentamento com a transferência da Corte Portuguesa para o Rio de Janeiro em 1808 (com a criação de pesados impostos cobrados no Nordeste para bancar o luxo do Rio) gerou um forte sentimento libertário e de autonomia estadual.',
      desenvolvimento: 'Pernambuco protagonizou as três maiores revoluções liberais do século XIX no Brasil: 1) **Revolução de 1817**: Depôs o governador, proclamou a República por 74 dias com liberdade de culto e imprensa (criando a atual bandeira de Pernambuco). 2) **Confederação do Equador (1824)**: Liderada por Frei Caneca contra o absolutismo de D. Pedro I, tentando criar uma república federativa reunindo vários estados do Nordeste. 3) **Revolução Praieira (1848)**: Movimento liberal e popular liderado pelo Partido da Praia, cujo "Manifesto ao Mundo" defendia o voto universal, fim do monopólio do comércio por estrangeiros e liberdade de expressão.',
      desdobramentos: 'Apesar da severa repressão imperial (com a execução de mártires como Frei Caneca, Domingos José Martins e Padre João Ribeiro), Pernambuco consagrou-se com o epíteto de "Leão do Norte", influenciando a futura proclamação da República do Brasil em 1889.'
    },

    relacoesProgressividade: {
      periodoAnterior: 'Guerra dos Mascates e Nativismo (1710-1800): primeiros ensaios de autonomia e crítica à metrópole.',
      periodoPosterior: 'Proclamação da República (1889) e a formação dos partidos modernos na República Velha.'
    },

    personalidadesEEventos: [
      {
        name: 'Frei Caneca (Joaquim do Amor Divino Rabelo)',
        role: 'Líder Intelectual e Mártir Republicano',
        period: '1779 - 1825',
        bio: 'Frade carmelita, jornalista e brilhante orador. Editou o jornal "Typhis Pernambucano", defendendo o constitucionalismo e o republicanismo popular. Foi executado por fuzilamento após a Confederação do Equador.',
        impact: 'Patrono do pensamento político e jornalístico livre em Pernambuco e no Brasil.'
      },
      {
        name: 'Bárbara de Alencar',
        role: 'Heroína da Revolução de 1817 e Confederação do Equador',
        period: '1760 - 1832',
        bio: 'Nascida em Exu (Sertão do Araripe PE), foi a primeira presa política do Brasil ao liderar o movimento republicano no Sertão.',
        impact: 'Símbolo da participação feminina combativa nas lutas libertárias pernambucanas.'
      }
    ],

    influenciasContemporaneas: {
      patrimonioEMuseus: [
        'Bandeira de Pernambuco (Criada em 1817 e oficializada como símbolo estadual)',
        'Praça da República e Palácio do Campo das Princesas (Recife)',
        'Muro do Cemitério de Santo Amaro / Local do Fuzilamento de Frei Caneca',
        'Forte das Cinco Pontas (Local de Prisão dos Revolucionários de 1824)'
      ],
      legadoSocialECultural: 'A forte identidade cívica dos pernambucanos, o orgulho da sua bandeira republicana de 1817 e a tradição do jornalismo combativo originaram-se nestas revoluções.',
      referenciasVisuaisEBibliograficas: [
        'CANECA, Frei. Ensaios Políticos e o Typhis Pernambucano. Brasília: Senado Federal.',
        'MELLO, Evaldo Cabral de. A Ferida de Adamastor: A República de 1817. Rio de Janeiro: Editora 34, 2004.',
        'BERNARDES, Denis. O Patriotismo Constitucional: Pernambuco 1817-1824. Hucitec.'
      ]
    },

    linksExternos: [
      {
        title: 'Biblioteca Nacional - Documentos Históricos da Revolução de 1817',
        source: 'Biblioteca Nacional',
        url: 'https://www.bn.gov.br',
        type: 'documento'
      },
      {
        title: 'Britannica Escola - Confederação do Equador e Frei Caneca',
        source: 'Britannica',
        url: 'https://escola.britannica.com.br',
        type: 'artigo'
      }
    ]
  },
  {
    id: 'sertao-e-cangaço',
    title: 'O Sertão, os Caminhos do Gado, Luiz Gonzaga e o Cangaço',
    subtitle: 'A cultura sertaneja do gado à poesia, ao Baião e ao Cangaço',
    period: 'Séculos XVIII a XX',
    century: 'Séc. XVIII - XX',
    dimensions: ['cultural', 'economico', 'social', 'logistico'],
    regionIds: ['sertao-central-pajeu', 'sertao-sao-francisco', 'agreste'],
    keywords: ['Cangaço', 'Lampião', 'Luiz Gonzaga', 'Exu', 'Vaqueiro', 'Pajeú', 'Salgueiro'],
    heroImageDescription: 'Vaqueiro de couraça no Sertão do Pajeú e Luiz Gonzaga tocando sua sanfona branca.',

    contextoHistorico: {
      antecedentes: 'A partir do final do século XVII, a Carta Régia de 1701 proibiu a criação de gado a menos de 10 léguas do litoral para proteger os canaviais da Zona da Mata. Isso empurrou a expansão pecuária em direção ao Agreste e Sertão, abrindo as "Estradas do Boi" ao longo dos rios Capibaribe, Pajeú e São Francisco.',
      desenvolvimento: 'No Sertão de Pernambuco desenvolveu-se a "Civilização do Couro", baseada na figura do Vaqueiro, na vaquejada e na pecuária extensiva. No final do século XIX e início do XX, as secas severas, a concentração fundiária e a violência coronelista deram origem ao Banditismo Social do Cangaço, liderado por figuras como Virgulino Ferreira da Silva (Lampião, nascido em Serra Talhada). Em contrapartida, no município de Exu, Luiz Gonzaga (o "Rei do Baião") universalizou a música, a dor e a beleza do Sertão através da sanfona, zabumba e triângulo.',
      desdobramentos: 'A poesia cantada dos repentistas do Vale do Pajeú e o ritmo do Baião influenciaram a música popular brasileira contemporânea (Tropicália, Manguebeat, Armorial de Ariano Suassuna) e tornaram o Sertão patrimônio poético nacional.'
    },

    relacoesProgressividade: {
      periodoAnterior: 'Expansão da Pecuária e Interiorização Colonial (1650-1750).',
      periodoPosterior: 'Modernização do Sertão com a Transposição do Rio São Francisco e Polo de Fruticultura (Século XXI).'
    },

    personalidadesEEventos: [
      {
        name: 'Luiz Gonzaga (O Rei do Baião)',
        role: 'Músico, Compositor e Embaixador da Cultura Sertaneja',
        period: '1912 - 1989',
        bio: 'Nascido em Exu (Sertão do Araripe), divulgou em todo o Brasil e no mundo os ritmos do Baião, Xote, Forró e Asa Branca, revelando a realidade e a força do povo sertanejo.',
        impact: 'Patrono da música nordestina e criador da estética visual e sonora do Sertão.'
      },
      {
        name: 'Virgulino Ferreira da Silva (Lampião)',
        role: 'Líder do Cangaço',
        period: '1898 - 1938',
        bio: 'Nascido em Vila Bela (atual Serra Talhada PE), comandou o mais famoso bando de cangaceiros do Nordeste por mais de duas décadas.',
        impact: 'Figura emblemática da história do banditismo social e do imaginário popular do Sertão.'
      }
    ],

    influenciasContemporaneas: {
      patrimonioEMuseus: [
        'Parque das Carnaúbas e Museu do Gonzagão em Exu (Pernambuco)',
        'Museu do Cangaço em Serra Talhada',
        'Feira de Caruaru e Alto do Moura (Mestre Vitalino)',
        'Rota da Poesia do Pajeú (Afogados da Ingazeira, São José do Egito)'
      ],
      legadoSocialECultural: 'A vestimenta do vaqueiro de couro, o forró pé-de-serra, as festas juninas e a literatura de cordel são pilares identitários mantidos vivos em Pernambuco.',
      referenciasVisuaisEBibliograficas: [
        'SUASSUNA, Ariano. Romance d’A Pedra do Reino e o Príncipe do Sangue do Vai-e-Volta. 1971.',
        'ALBUQUERQUE JÚNIOR, Durval Muniz de. A Invenção do Nordeste. São Paulo: Cortez, 1999.',
        'Discografia Completa de Luiz Gonzaga & Humberto Teixeira.'
      ]
    },

    linksExternos: [
      {
        title: 'Fundação Memória de Luiz Gonzaga (Exu PE)',
        source: 'Fundaj / Governo PE',
        url: 'https://www.gonzagao.com.br',
        type: 'patrimonio'
      },
      {
        title: 'IBGE Cidades - Dados Históricos de Serra Talhada e Exu',
        source: 'IBGE',
        url: 'https://cidades.ibge.gov.br',
        type: 'base_dados'
      }
    ]
  },
  {
    id: 'cultura-contemporanea',
    title: 'O Movimento Manguebeat e o Pernambuco Contemporâneo',
    subtitle: 'Da fertilidade cultural do frevo, maracatu e brega ao ecossistema de tecnologia e inovação',
    period: 'Século XX e XXI / Contemporâneo',
    century: 'Séc. XX - XXI',
    dimensions: ['cultural', 'logistico', 'economico', 'social'],
    regionIds: ['rmr', 'agreste', 'sertao-sao-francisco'],
    keywords: ['Manguebeat', 'Frevo', 'Maracatu', 'Caruaru', 'Suape'],
    heroImageDescription: 'Caranguejo com cérebro (símbolo do Manguebeat) com fundo de manguezal e antenas parabólicas.',

    contextoHistorico: {
      antecedentes: 'No início dos anos 1990, o Recife enfrentava grave crise socioeconômica, figurando entre as cidades com pior qualidade de vida do mundo segundo a ONU. Porém, a efervescência de manifestações tradicionais (Frevo, Maracatu de Baque Virado, Ciranda de Lia de Itamaracá, Cavalo-Marinho) garantia uma caixa de ressonância cultural única.',
      desenvolvimento: 'Em 1992, Fred Zero Quatro e Chico Science redigiram o manifesto "Caranguejos com Cérebro", fundando o **Movimento Manguebeat**. A proposta era fincar uma antena parabólica na lama do manguezal, conectando a sonoridade dos tambores de Maracatu com o rock, o hip-hop, o funk e a música eletrônica mundial. Simultaneamente, Pernambuco reorganizou sua infraestrutura econômica criando o **Porto Digital** no Recife Antigo (maior parque tecnológico do país) e o **Complexo Industrial Portuário de Suape** no Cabo de Santo Agostinho.',
      desdobramentos: 'A renovação cultural colocou Pernambuco na vanguarda da economia criativa global. O Frevo foi reconhecido como Patrimônio Cultural Imaterial da Humanidade pela UNESCO (2012), e o estado tornou-se um polo de inovação em software, audiovisual, Polo Médico e turismo sustentável.'
    },

    relacoesProgressividade: {
      periodoAnterior: 'Anos 1970/1980 - Movimento Armorial de Ariano Suassuna e consolidação das tradições do Frevo e do Maracatu.',
      periodoPosterior: 'Pernambuco no Século XXI: integração entre economia do conhecimento, transição energética e orgulho identitário.'
    },

    personalidadesEEventos: [
      {
        name: 'Chico Science (Francisco de Assis França)',
        role: 'Líder do Movimento Manguebeat',
        period: '1966 - 1997',
        bio: 'Nascido em Olinda e criado no bairro de Rio Doce, liderou a banda Chico Science & Nação Zumbi. Uniu a poesia dos manguezais aos ritmos globais nos álbuns "Da Lama ao Kaos" e "Afrociberdelia".',
        impact: 'Revolucionou a música brasileira dos anos 90 e projetou a cultura pernambucana internacionalmente.'
      },
      {
        name: 'Lia de Itamaracá (Maria Madalena Correia do Nascimento)',
        role: 'Rainha da Ciranda e Patrimônio Vivo de Pernambuco',
        period: '1944 - Presente',
        bio: 'Cantora e compositora da Ilha de Itamaracá, levou a ciranda dos pátios praianos para os maiores palcos e festivais internacionais.',
        impact: 'Símbolo do reconhecimento e valorização das mestras da cultura popular tradicional.'
      }
    ],

    influenciasContemporaneas: {
      patrimonioEMuseus: [
        'Paço do Frevo (Bairro do Recife)',
        'Cais do Sertão (Recife Antigo)',
        'Memorial Chico Science (Pátio de São Pedro)',
        'Porto Digital e Centro de Artesanato de Pernambuco'
      ],
      legadoSocialECultural: 'A energia do Carnaval do Recife e Olinda (Galo da Madrugada - Maior Bloco do Mundo pelo Guinness Book), a pulsão das pontes e mangues e o protagonismo jovem na tecnologia.',
      referenciasVisuaisEBibliograficas: [
        'MANIFESTO MANGUEBEAT: Caranguejos com Cérebro. Recife, 1992.',
        'TELESI, Márcia. Manguebeat: Máfia do Mangue e Cena Musical no Recife. Editora Olho d\'Água.',
        'Documentário "Chico Science - Caranguejo Elétrico" (2016).'
      ]
    },

    linksExternos: [
      {
        title: 'Paço do Frevo - Centro de Referência da Salvaguarda do Frevo',
        source: 'Paço do Frevo / IPHAN',
        url: 'https://pacodofrevo.org.br',
        type: 'patrimonio'
      },
      {
        title: 'Porto Digital - Parque Tecnológico de Pernambuco',
        source: 'Porto Digital',
        url: 'https://www.portodigital.org',
        type: 'base_dados'
      }
    ]
  }
];
