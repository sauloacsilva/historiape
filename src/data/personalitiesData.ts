import { GalleryPersonality } from '../types';

export const PERSONALITIES_DATA: GalleryPersonality[] = [
    {
        id: 'quiteria-binga',
        name: 'Quitéria Binga (Quitéria Maria de Jesus)',
        profile: 'Mulher Indígena (povo Pankararu)',
        region: 'Sertão de Pernambuco',
        regionCategory: 'Sertão',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/quiteria-binga.jpg',
        actuation: 'Conhecida como a "cacica do Nordeste", foi uma influente liderança política e tradicional, rezadeira, parteira e cantadeira. Atuou na linha de frente pelas lutas de demarcação territorial, educação e saúde indígena na área demarcada entre Jatobá, Tacaratu e Petrolândia.',
        highlights: ['Liderança Pankararu', 'Cacica do Nordeste', 'Demarcação Territorial', 'Saberes Tradicionais'],
        references: [
            { label: 'Os Brasis e suas Memórias — Quitéria Binga', url: 'https://osbrasisesuasmemorias.com.br/quiteria-binga/' }
        ]
    },
    {
        id: 'givania-silva',
        name: 'Givânia Maria da Silva (Givânia das Crioulas)',
        profile: 'Mulher Negra e Quilombola (Ancestralidade Atikum)',
        region: 'Sertão de Pernambuco',
        regionCategory: 'Sertão',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/givania-silva.jpg',
        actuation: 'Educadora, doutora em Sociologia, ativista e cofundadora da CONAQ (Coordenação Nacional de Articulação das Comunidades Negras Rurais Quilombolas). Foi a primeira pessoa quilombola a integrar o Conselho Nacional de Educação (CNE) e ex-vereadora em Salgueiro.',
        highlights: ['Cofundadora da CONAQ', 'Doutora em Sociologia', 'Primeira Quilombola no CNE', 'Direitos Quilombolas'],
        references: [
            { label: 'CONAQ — Coordenação Nacional de Articulação Quilombola', url: 'https://conaq.org.br/' },
            { label: 'Câmara dos Deputados — Givânia Silva no CNE', url: 'https://www2.camara.leg.br/' }
        ]
    },
    {
        id: 'emiliano-mundrucu',
        name: 'Emiliano Mundrucu (Emiliano Felipe Benício)',
        profile: 'Homem Negro/Pardo',
        region: 'Zona da Mata / Região Metropolitana do Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/emiliano-mundrucu.jpg',
        actuation: 'Ativista revolucionário e major do Batalhão de Pardos na Confederação do Equador. Destacou-se por sua liderança e coragem ao comandar os homens livres negros e pardos que combateram pela causa republicana em Pernambuco.',
        highlights: ['Confederação do Equador', 'Major do Batalhão de Pardos', 'Resistência Republicana em PE'],
        references: [
            { label: 'Biblioteca Nacional Digital — Confederação do Equador', url: 'https://bndigital.bn.gov.br/' },
            { label: 'IBGE — Confederação do Equador e a Batalha de Pirajá', url: 'https://biblioteca.ibge.gov.br/' }
        ]
    },
    {
        id: 'erica-malunguinho',
        name: 'Erica Malunguinho da Silva',
        profile: 'Mulher Negra Transgênero',
        region: 'Zona da Mata / Região Metropolitana do Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/erica-malunguinho.jpg',
        actuation: 'Educadora, artista plástica e criadora do centro cultural e quilombo urbano Aparelha Luzia. Tornou-se a primeira mulher trans eleita para uma assembleia legislativa no Brasil (deputada estadual por SP em 2018).',
        highlights: ['Primeira Deputada Trans do Brasil', 'Aparelha Luzia', 'Artes Plásticas & Educação'],
        references: [
            { label: 'ALESP — Deputada Erica Malunguinho', url: 'https://www.al.sp.gov.br/deputado/?matricula=301338' },
            { label: 'Senado Federal — Primeira Deputada Trans do Brasil', url: 'https://www12.senado.leg.br/' }
        ]
    },
    {
        id: 'dantas-barreto',
        name: 'Dantas Barreto (Emídio Dantas Barreto)',
        profile: 'Político e Militar',
        region: 'Agreste de Pernambuco',
        regionCategory: 'Agreste',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/dantas-barreto.jpg',
        actuation: 'Nascido em Bom Conselho, de origem humilde, foi alfabetizado no exército e alcançou o posto de general. Tornou-se presidente da província de Pernambuco e membro da Academia Pernambucana de Letras.',
        highlights: ['General do Exército', 'Presidente de Pernambuco', 'Academia Pernambucana de Letras'],
        references: [
            { label: 'Wikipedia — Dantas Barreto', url: 'https://pt.wikipedia.org/wiki/Dantas_Barreto' }
        ]
    },
    {
        id: 'barao-lucena',
        name: 'Barão de Lucena (Henrique Pereira de Lucena)',
        profile: 'Político e Magistrado',
        region: 'Agreste de Pernambuco',
        regionCategory: 'Agreste',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/barao-lucena.jpg',
        actuation: 'Jurista, ministro de Estado, juiz do Supremo Tribunal Federal e presidente de quatro províncias imperiais. Notabilizou-se por ter votado a favor da aprovação da Lei Áurea em 1888.',
        highlights: ['Ministro do STF', 'Presidente de Províncias', 'Votou a Lei Áurea'],
        references: [
            { label: 'Wikipedia — Barão de Lucena', url: 'https://pt.wikipedia.org/wiki/Bar%C3%A3o_de_Lucena' },
            { label: 'CPDOC / FGV — Henrique Pereira de Lucena', url: 'https://cpdoc.fgv.br/' }
        ]
    },
    {
        id: 'zumbi-dandara',
        name: 'Zumbi dos Palmares & Dandara',
        profile: 'Lideranças Quilombolas e Guerreiros Afro-brasileiros',
        region: 'Zona da Mata / Região Metropolitana do Recife (Antiga Capitania)',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/zumbi-dandara.jpg',
        actuation: 'Símbolos máximos da resistência negra à escravidão no Brasil colonial. Lideraram o Quilombo dos Palmares (território na Capitania de Pernambuco), onde milhares de negros livres, indígenas e camponeses organizaram uma sociedade autônoma.',
        highlights: ['Quilombo dos Palmares', 'Símbolo da Consciência Negra', 'Resistência Antiescrava'],
        references: [
            { label: 'Fundação Cultural Palmares — Zumbi dos Palmares', url: 'http://www.palmares.gov.br/' },
            { label: 'Wikipedia — Quilombo dos Palmares', url: 'https://pt.wikipedia.org/wiki/Quilombo_dos_Palmares' }
        ]
    },
    {
        id: 'frei-caneca',
        name: 'Frei Caneca (Joaquim do Amor Divino)',
        profile: 'Líder Religioso e Revolucionário',
        region: 'Zona da Mata / Região Metropolitana do Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/frei-caneca.jpg',
        actuation: 'Frade carmelita, jornalista e pensador político. Foi um dos principais líderes da Revolução Pernambucana de 1817 e da Confederação do Equador em 1824. Defendeu ideias liberais e republicanas até sua execução.',
        highlights: ['Confederação do Equador', 'Revolução de 1817', 'O Typhis Pernambucano'],
        references: [
            { label: 'Wikipedia — Frei Caneca', url: 'https://pt.wikipedia.org/wiki/Frei_Caneca' },
            { label: 'Biblioteca Nacional Digital — O Typhis Pernambucano', url: 'https://bndigital.bn.gov.br/' }
        ]
    },
    {
        id: 'barbara-alencar',
        name: 'Bárbara de Alencar',
        profile: 'Heroína da Pátria e Revolucionária',
        region: 'Sertão de Pernambuco',
        regionCategory: 'Sertão',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/barbara-alencar.jpg',
        actuation: 'Nascida em Exu, no Sertão pernambucano, foi uma das figuras centrais da Revolução de 1817. É considerada a primeira presa política do Brasil devido à sua firme atuação republicana e emancipatória.',
        highlights: ['Primeira Presa Política do Brasil', 'Heroína de 1817', 'Matriarca dos Alencar'],
        references: [
            { label: 'Wikipedia — Bárbara de Alencar', url: 'https://pt.wikipedia.org/wiki/B%C3%A1rbara_de_Alencar' },
            { label: 'Senado Federal — Mulheres na História do Brasil', url: 'https://www12.senado.leg.br/' }
        ]
    },
    {
        id: 'lia-itamaraca',
        name: 'Lia de Itamaracá (Maria Madalena Correia do Nascimento)',
        profile: 'Mulher Negra, Mestra da Cultura Popular',
        region: 'Zona da Mata / Região Metropolitana do Recife (Litoral)',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/lia-itamaraca.jpg',
        actuation: 'Cantora, compositora e cirandeira viva. É considerada a voz mais famosa da ciranda no Brasil, reconhecida internacionalmente, declarada Patrimônio Vivo de Pernambuco e Doutora Honoris Causa pela UFPE.',
        highlights: ['Rainha da Ciranda', 'Patrimônio Vivo de PE', 'Doutora Honoris Causa UFPE'],
        references: [
            { label: 'Wikipedia — Lia de Itamaracá', url: 'https://pt.wikipedia.org/wiki/Lia_de_Itamarac%C3%A1' },
            { label: 'Fundarpe — Patrimônio Vivo de Pernambuco', url: 'https://www.fundarpe.pe.gov.br/patrimonio-vivo' }
        ]
    },
    {
        id: 'joao-pernambuco',
        name: 'João Pernambuco (João Teixeira Guimarães)',
        profile: 'Músico, Violonista e Compositor',
        region: 'Sertão de Pernambuco (Jatobá / Tacaratu)',
        regionCategory: 'Sertão',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/joao-pernambuco.jpg',
        actuation: 'Pioneiro crucial na estruturação do violão solo no Brasil e figura fundamental no Choro. Uniu as tradições e ritmos do Sertão às harmonias urbanas cariocas. Autor de clássicos como "Sons de Carrilhões".',
        highlights: ['Pioneiro do Violão Solo', 'Choro e Tradição Sertaneja', 'Autor de Sons de Carrilhões'],
        references: [
            { label: 'Wikipedia — João Pernambuco', url: 'https://pt.wikipedia.org/wiki/Jo%C3%A3o_Pernambuco' },
            { label: 'Dicionário MPB — João Pernambuco', url: 'https://dicionariompb.com.br/' }
        ]
    },
    {
        id: 'luiz-gonzaga',
        name: 'Luiz Gonzaga (O Rei do Baião)',
        profile: 'Músico, Sanfoneiro e Compositor',
        region: 'Sertão de Pernambuco (Exu)',
        regionCategory: 'Sertão',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/luiz-gonzaga.jpg',
        actuation: 'Nascido em Exu, foi o responsável por apresentar a música nordestina (Baião, Xote, Xaxado) a todo o Brasil. Autor de "Asa Branca", tornou-se um dos ícones culturais e musicais mais importantes do país.',
        highlights: ['Rei do Baião', 'Autor de Asa Branca', 'Embaixador da Cultura Nordestina'],
        references: [
            { label: 'Wikipedia — Luiz Gonzaga', url: 'https://pt.wikipedia.org/wiki/Luiz_Gonzaga' },
            { label: 'Instituto Luiz Gonzaga', url: 'https://www.institutoluizgonzaga.com.br/' }
        ]
    },
    {
        id: 'chico-science',
        name: 'Chico Science (Francisco de Assis França)',
        profile: 'Músico e Poeta Visionário',
        region: 'Zona da Mata / Região Metropolitana do Recife (Olinda/Recife)',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/chico-science.jpg',
        actuation: 'Líder da banda Chico Science & Nação Zumbi e um dos idealizadores do movimento Manguebeat nos anos 1990. Fusionou ritmos tradicionais como Maracatu com Rock, Hip-Hop e Funk.',
        highlights: ['Líder do Manguebeat', 'Nação Zumbi', 'Revolução Sonora nos Anos 90'],
        references: [
            { label: 'Wikipedia — Chico Science', url: 'https://pt.wikipedia.org/wiki/Chico_Science' },
            { label: 'Museu Cais do Sertão — Manguebeat', url: 'https://museu.caisdo.com.br/' }
        ]
    },
    {
        id: 'alceu-valenca',
        name: 'Alceu Valença',
        profile: 'Cantor, Compositor e Cinesata',
        region: 'Agreste de Pernambuco (São Bento do Una)',
        regionCategory: 'Agreste',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/alceu-valenca.jpg',
        actuation: 'Um dos grandes expoentes da MPB, misturou de forma genial a psicodelia com o Frevo, Maracatu, Baião e Ciranda. Criador de sucessos imortais como "Anunciação" e "Tropicana".',
        highlights: ['Ícone da MPB', 'Fusão Psicodélica e Nordestina', 'Anunciação e Tropicana'],
        references: [
            { label: 'Wikipedia — Alceu Valença', url: 'https://pt.wikipedia.org/wiki/Alceu_Valen%C3%A7a' },
            { label: 'Dicionário MPB — Alceu Valença', url: 'https://dicionariompb.com.br/artista/alceu-valenca/' }
        ]
    },
    {
        id: 'dominguinhos',
        name: 'Dominguinhos (José Domingos de Morais)',
        profile: 'Mestre Sanfoneiro e Compositor',
        region: 'Agreste de Pernambuco (Garanhuns)',
        regionCategory: 'Agreste',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/dominguinhos.jpg',
        actuation: 'Apadrinhado por Luiz Gonzaga, tornou-se um dos instrumentistas mais virtuosos do Brasil, transitando pelo Forró, MPB e Bossa Nova. Compositor de "Eu Só Quero Um Xodó" e "Gostoso Demais".',
        highlights: ['Virtuoso da Sanfona', 'Ganhador do Grammy Latino', 'Garanhuns'],
        references: [
            { label: 'Wikipedia — Dominguinhos', url: 'https://pt.wikipedia.org/wiki/Dominguinhos' },
            { label: 'Grammy Latino — Premiados', url: 'https://www.latingrammy.com/' }
        ]
    },
    {
        id: 'nana-vasconcelos',
        name: 'Naná Vasconcelos',
        profile: 'Percussionista e Compositor',
        region: 'Zona da Mata / Região Metropolitana do Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/nana-vasconcelos.jpg',
        actuation: 'Eleito oito vezes o melhor percussionista do mundo pela revista norte-americana DownBeat. Mestre do berimbau, levou a musicalidade brasileira e o Maracatu aos maiores palcos do Jazz mundial.',
        highlights: ['8x Melhor Percussionista do Mundo', 'Mestre do Berimbau', 'Abertura do Carnaval do Recife'],
        references: [
            { label: 'Wikipedia — Naná Vasconcelos', url: 'https://pt.wikipedia.org/wiki/Na_n%C3%A1_Vasconcelos' },
            { label: 'DownBeat Magazine — Naná Vasconcelos (8x Melhor Percussionista)', url: 'https://www.downbeat.com/' }
        ]
    },
    {
        id: 'mestre-vitalino',
        name: 'Mestre Vitalino (Vitalino Pereira dos Santos)',
        profile: 'Artesão e Ceramista Popular',
        region: 'Agreste de Pernambuco (Caruaru)',
        regionCategory: 'Agreste',
        category: 'Artes Plásticas, Cerâmica e Design',
        photo: 'src/img/personalidades/mestre-vitalino.jpg',
        actuation: 'Um dos maiores nomes da arte figurativa em barro do Brasil. Imortalizou em suas esculturas o cotidiano, as retirantes, os músicos, rituais e tipos sociais do povo sertanejo.',
        highlights: ['Mestre do Alto do Moura', 'Arte Figurativa do Barro', 'Patrimônio de Caruaru'],
        references: [
            { label: 'Wikipedia — Mestre Vitalino', url: 'https://pt.wikipedia.org/wiki/Mestre_Vitalino' },
            { label: 'Museu Mestre Vitalino — Prefeitura de Caruaru', url: 'https://www.caruaru.pe.gov.br/' }
        ]
    },
    {
        id: 'francisco-brennand',
        name: 'Francisco Brennand',
        profile: 'Escultor, Pintor e Ceramista',
        region: 'Zona da Mata / Região Metropolitana do Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Artes Plásticas, Cerâmica e Design',
        photo: 'src/img/personalidades/francisco-brennand.jpg',
        actuation: 'Criador da monumental Oficina Cerâmica Brennand, um templo de arte ao ar livre no Recife. Sua obra explorou mitologia, cosmogonia, sexualidade e formas orgânicas únicas.',
        highlights: ['Oficina Cerâmica Brennand', 'Parque das Esculturas', 'Mestre Escultor'],
        references: [
            { label: 'Wikipedia — Francisco Brennand', url: 'https://pt.wikipedia.org/wiki/Francisco_Brennand' },
            { label: 'Oficina Cerâmica Brennand', url: 'https://www.brennand.com.br/' }
        ]
    },
    {
        id: 'cicero-dias',
        name: 'Cícero Dias',
        profile: 'Pintor Vanguardista e Desenhista',
        region: 'Zona da Mata / Região Metropolitana do Recife (Escada/Recife)',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Artes Plásticas, Cerâmica e Design',
        photo: 'src/img/personalidades/cicero-dias.jpg',
        actuation: 'Pioneiro da pintura abstrata no Brasil e figura central do Modernismo. Radicou-se em Paris, onde conviveu com Picasso. É autor do imenso painel "Eu vi o mundo... ele começava no Recife".',
        highlights: ['Pioneiro da Abstração no Brasil', 'Amigo de Pablo Picasso', 'Obra no Recife'],
        references: [
            { label: 'Wikipedia — Cícero Dias', url: 'https://pt.wikipedia.org/wiki/C%C3%ADcero_Dias' },
            { label: 'MASP — Acervo Cícero Dias', url: 'https://masp.org.br/' }
        ]
    },
    {
        id: 'vicente-rego-monteiro',
        name: 'Vicente do Rêgo Monteiro',
        profile: 'Pintor, Escultor e Poeta',
        region: 'Zona da Mata / Região Metropolitana do Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Artes Plásticas, Cerâmica e Design',
        photo: 'src/img/personalidades/vicente-rego-monteiro.jpg',
        actuation: 'Nome crucial da Semana de Arte Moderna de 1922 e do modernismo internacional. Incorporou formas indígenas marajoaras e temas sacros em estilizações de curvas elegantes.',
        highlights: ['Modernismo de 1922', 'Influência Marajoara e Sacra', 'Projeção em Paris'],
        references: [
            { label: 'Wikipedia — Vicente do Rêgo Monteiro', url: 'https://pt.wikipedia.org/wiki/Vicente_do_R%C3%AAgo_Monteiro' },
            { label: 'Museu de Arte Moderna do Rio de Janeiro', url: 'https://mamrio.org.br/' }
        ]
    },
    {
        id: 'paulo-neves',
        name: 'Paulo Neves (Paulo José Neves de Oliveira)',
        profile: 'Pintor e Ceramista',
        region: 'Zona da Mata de Pernambuco (Paudalho)',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Artes Plásticas, Cerâmica e Design',
        photo: 'src/img/personalidades/paulo-neves.jpg',
        actuation: 'Artista plástico focado na pesquisa do traço humano e influenciado pelas técnicas da renascença e pelo período da presença holandesa em Pernambuco.',
        highlights: ['Traço Humano', 'Influência Holandesa', 'Artes de Paudalho'],
        references: [
            { label: 'Rodrigues Galeria — Paulo Neves (1935–1997, Paudalho PE)', url: 'https://rodriguesgaleria.com.br/' },
            { label: 'Catálogo das Artes — Paulo Neves', url: 'https://catalogodasartes.com.br/' }
        ]
    },
    {
        id: 'joao-cabral',
        name: 'João Cabral de Melo Neto',
        profile: 'Poeta e Diplomata',
        region: 'Zona da Mata / Região Metropolitana do Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/joao-cabral.jpg',
        actuation: 'Um dos poetas mais rigorosos e aclamados da língua portuguesa. Autor do clássico "Morte e Vida Severina". Recebeu o Prêmio Camões e o Prêmio Neustadt.',
        highlights: ['Autor de Morte e Vida Severina', 'Prêmio Camões', 'Poesia Engenheirada'],
        references: [
            { label: 'Wikipedia — João Cabral de Melo Neto', url: 'https://pt.wikipedia.org/wiki/Jo%C3%A3o_Cabral_de_Melo_Neto' },
            { label: 'Academia Brasileira de Letras — João Cabral', url: 'https://www.academia.org.br/' }
        ]
    },
    {
        id: 'paulo-freire',
        name: 'Paulo Freire (Paulo Reglus Neves Freire)',
        profile: 'Educador, Filosofo e Patrono da Educação Brasileira',
        region: 'Zona da Mata / Região Metropolitana do Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/paulo-freire.jpg',
        actuation: 'Autor de "Pedagogia do Oprimido", é o terceiro autor mais citado em trabalhos acadêmicos das ciências humanas no mundo. Desenvolveu o método revolucionário de alfabetização de adultos em Angicos.',
        highlights: ['Patrono da Educação Brasileira', 'Pedagogia do Oprimido', 'Alfabetização Crítica'],
        references: [
            { label: 'Wikipedia — Paulo Freire', url: 'https://pt.wikipedia.org/wiki/Paulo_Freire' },
            { label: 'Instituto Paulo Freire', url: 'https://www.paulofreire.org/' }
        ]
    },
    {
        id: 'clarice-lispector',
        name: 'Clarice Lispector (Marco Afetivo Pernambucano)',
        profile: 'Escritora e Jornalista',
        region: 'Zona da Mata / Região Metropolitana do Recife (Formação em Recife)',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/clarice-lispector.jpg',
        actuation: 'Embora nascida na Ucrânia, viveu sua infância e juventude decisivas no Recife, cidade que moldou sua alma e literatura em obras como "A Hora da Estrela" e crônicas afetivas sobre a cidade.',
        highlights: ['Prosa Introspectiva', 'Infância no Recife', 'A Hora da Estrela'],
        references: [
            { label: 'Wikipedia — Clarice Lispector', url: 'https://pt.wikipedia.org/wiki/Clarice_Lispector' },
            { label: 'Academia Brasileira de Letras — Clarice Lispector', url: 'https://www.academia.org.br/' }
        ]
    },
    {
        id: 'manuel-bandeira',
        name: 'Manuel Bandeira',
        profile: 'Poeta, Crítico e Tradutor',
        region: 'Zona da Mata / Região Metropolitana do Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/manuel-bandeira.jpg',
        actuation: 'Membro da Academia Brasileira de Letras e figura central do Modernismo literário. Eternizou em sua poesia a nostalgia do Recife antigo e a lírica do cotidiano ("Evocação do Recife").',
        highlights: ['Poeta do Modernismo', 'Evocação do Recife', 'Academia Brasileira de Letras'],
        references: [
            { label: 'Wikipedia — Manuel Bandeira', url: 'https://pt.wikipedia.org/wiki/Manuel_Bandeira' },
            { label: 'Academia Brasileira de Letras — Manuel Bandeira', url: 'https://www.academia.org.br/academicos/manuel-bandeira' }
        ]
    },
    {
        id: 'jose-leite-lopes',
        name: 'José Leite Lopes',
        profile: 'Físico Nuclear e Teórico',
        region: 'Zona da Mata / Região Metropolitana do Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/jose-leite-lopes.jpg',
        actuation: 'Cientista responsável pela primeira predição do bóson Z (base para a teoria da unificação eletrofraca na física de partículas). Foi um dos principais articuladores da criação do CBPF e da CNPq.',
        highlights: ['Predição do Bóson Z', 'Fundador do CBPF', 'Física de Altas Energias'],
        references: [
            { label: 'Wikipedia — José Leite Lopes', url: 'https://pt.wikipedia.org/wiki/Jos%C3%A9_Leite_Lopes' },
            { label: 'CBPF — José Leite Lopes', url: 'https://www.cbpf.br/' }
        ]
    },
    {
        id: 'ricardo-ferreira',
        name: 'Ricardo Ferreira (Ricardo de Carvalho Ferreira)',
        profile: 'Cientista e Químico Teórico',
        region: 'Zona da Mata / Região Metropolitana do Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/ricardo-ferreira.jpg',
        actuation: 'Pioneiro na introdução da química quântica no Brasil. Professor emérito da UFPE, cofundador do Departamento de Química Fundamental e presidente de honra da SBPC.',
        highlights: ['Pioneiro em Química Quântica', 'Presidente de Honra SBPC', 'Professor Emérito UFPE'],
        references: [
            { label: 'UFPE — Prof. Ricardo de Carvalho Ferreira', url: 'https://www.ufpe.br/' },
            { label: 'SBPC — Presidente de Honra Ricardo Ferreira', url: 'https://www.sbpcnet.org.br/' }
        ]
    },
    {
        id: 'gilberto-freyre',
        name: 'Gilberto Freyre (Gilberto de Mello Freyre)',
        profile: 'Sociólogo, Antropólogo, Historiador e Escritor',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/gilberto-freyre.jpg',
        actuation: "Um dos mais influentes intérpretes do Brasil e autor da obra seminal 'Casa-Grande & Senzala'. Pioneiro da moderna sociologia e antropologia brasileira, revolucionou os estudos sobre a formação social, miscigenada e patriarcal do país.",
        highlights: ['Casa-Grande & Senzala', 'Sociologia Brasileira', 'Fundação Joaquim Nabuco'],
        references: [
            { label: 'Wikipedia — Gilberto Freyre', url: 'https://pt.wikipedia.org/wiki/Gilberto_Freyre' },
            { label: 'Fundação Joaquim Nabuco — Gilberto Freyre', url: 'https://www.fundaj.gov.br/' }
        ]
    },
    {
        id: 'josue-de-castro',
        name: 'Josué de Castro',
        profile: 'Médico, Geógrafo, Nutricionista e Ativista Humanitário',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/josue-de-castro.jpg',
        actuation: "Cientista e humanista pernambucano autor de 'Geografia da Fome', obra revolucionária que desmistificou a fome como fenômeno biológico e a revelou como problema político-social. Foi presidente do conselho da FAO (ONU) e indicado ao Nobel da Paz.",
        highlights: ['Geografia da Fome', 'Presidente da FAO/ONU', 'Combate à Fome Mundial'],
        references: [
            { label: 'Wikipedia — Josué de Castro', url: 'https://pt.wikipedia.org/wiki/Josu%C3%A9_de_Castro' },
            { label: 'FAO / ONU — Josué de Castro', url: 'https://www.fao.org/' }
        ]
    },
    {
        id: 'joaquim-nabuco',
        name: 'Joaquim Nabuco (Joaquim Aurélio Barreto Nabuco de Araújo)',
        profile: 'Político, Diplomata, Historiador e Líder Abolicionista',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/joaquim-nabuco.jpg',
        actuation: "A voz mais eloquente da campanha abolicionista no Brasil Império e autor de 'O Abolicionismo'. Cofundador da Academia Brasileira de Letras e primeiro embaixador do Brasil nos Estados Unidos, defendeu a reforma agrária e a integração cidadã dos libertos.",
        highlights: ['Líder da Abolição', 'O Abolicionismo', 'Cofundador da ABL'],
        references: [
            { label: 'Fundação Joaquim Nabuco (FUNDAJ)', url: 'https://www.fundaj.gov.br/' },
            { label: 'Wikipedia — Joaquim Nabuco', url: 'https://pt.wikipedia.org/wiki/Joaquim_Nabuco' }
        ]
    },
    {
        id: 'gregorio-bezerra',
        name: 'Gregório Bezerra (Gregório Lourenço Bezerra)',
        profile: 'Líder Político, Sindicalista e Militar Comunista',
        region: 'Panelas / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/gregorio-bezerra.jpg',
        actuation: 'Ícone da resistência popular e da luta operária e camponesa no Brasil. Nascido na miséria agrestina e forjado na Zona da Mata, foi deputado constituinte em 1946 e símbolo inquebrantável de dignidade contra a perseguição política e a ditadura militar.',
        highlights: ['Constituinte de 1946', 'Lutas Camponesas', 'Resistência Democrática'],
        references: [
            { label: 'Wikipedia — Gregório Bezerra', url: 'https://pt.wikipedia.org/wiki/Greg%C3%B3rio_Bezerra' },
            { label: 'Câmara dos Deputados — Constituinte 1946', url: 'https://www.camara.leg.br/' }
        ]
    },
    {
        id: 'abelardo-da-hora',
        name: 'Abelardo da Hora (Abelardo Germano da Hora)',
        profile: 'Escultor, Ceramista, Gravador e Desenhista',
        region: 'São Lourenço da Mata / RMR',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Artes Plásticas, Cerâmica e Design',
        photo: 'src/img/personalidades/abelardo-da-hora.jpg',
        actuation: 'Grande mestre da escultura expressionista e monumental do Brasil e pioneiro do Movimento de Cultura Popular (MCP). Suas obras celebram a força da mulher trabalhadora, o operariado, a infância humilde e a dignidade do povo nordestino.',
        highlights: ['Movimento de Cultura Popular', 'Escultura Monumental', 'Arte Social e Política'],
        references: [
            { label: 'Wikipedia — Abelardo da Hora', url: 'https://pt.wikipedia.org/wiki/Abelardo_da_Hora' },
            { label: 'Memorial Abelardo da Hora', url: 'https://funesc.pb.gov.br/conheca-a-funesc/copy_of_planetario' }
        ]
    },
    {
        id: 'aloisio-magalhaes',
        name: 'Aloísio Magalhães (Aloísio Sérgio Barbosa de Magalhães)',
        profile: 'Designer, Artista Plástico e Gestor Cultural',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Artes Plásticas, Cerâmica e Design',
        photo: 'src/img/personalidades/aloisio-magalhaes.jpg',
        actuation: 'Pai do design moderno no Brasil e fundador do Gráfico Amador no Recife. Criador da identidade visual das cédulas do Cruzeiro, do símbolo do IV Centenário do Rio e idealizador do Centro Nacional de Referência Cultural (CNRC) e das diretrizes do IPHAN.',
        highlights: ['Pioneiro do Design Moderno', 'O Gráfico Amador', 'Preservação do Patrimônio (IPHAN)'],
        references: [
            { label: 'Wikipedia — Aloísio Magalhães', url: 'https://pt.wikipedia.org/wiki/Alo%C3%ADsio_Magalh%C3%A3es' },
            { label: 'eBiografia - Aloísio Magalhães', url: 'https://www.ebiografia.com/aloisio_magalhaes/' }
        ]
    },
    {
        id: 'gil-vicente',
        name: 'Gil Vicente (Gil Vicente Vasconcelos de Oliveira)',
        profile: 'Pintor, Desenhista e Xilogravador',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Artes Plásticas, Cerâmica e Design',
        photo: 'src/img/personalidades/gil-vicente.jpg',
        actuation: 'Artista plástico de contundente expressão crítica e figurativa contemporânea. Reconhecido por seus autorretratos provocadores, questionamentos ao poder político institucional e vigor técnico no desenho e na gravura.',
        highlights: ['Arte Contemporânea', 'Autorretratos Críticos', 'Xilogravura e Desenho'],
        references: [
            { label: 'Wikipedia — Gil Vicente (artista)', url: 'https://pt.wikipedia.org/wiki/Gil_Vicente_(artista)' },
            { label: 'Catálogo das Artes — Gil Vicente', url: 'https://catalogodasartes.com.br/' }
        ]
    },
    {
        id: 'luciano-pinheiro',
        name: 'Luciano Pinheiro',
        profile: 'Desenhista, Gravador e Arquiteto',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Artes Plásticas, Cerâmica e Design',
        photo: 'src/img/personalidades/luciano-pinheiro.jpg',
        actuation: 'Destacado arquiteto e gravador recifense, mestre da técnica em litografia e ponta-seca. Representou Pernambuco em diversas bienais internacionais de artes plásticas, explorando os contrastes do ambiente urbano e a memória visual nordestina.',
        highlights: ['Gravura e Litografia', 'Arquiteto e Urbanista', 'Bienais Internacionais'],
        references: [
            { label: 'Escritório de Arte — Luciano Pinheiro', url: 'https://escritoriodearte.com/' },
            { label: 'Site oficial — lucianopinheiro.com.br', url: 'https://lucianopinheiro.com.br/' }
        ]
    },
    {
        id: 'antonio-nobrega',
        name: 'Antônio Nóbrega (Antônio Carlos Nóbrega)',
        profile: 'Músico, Ator, Dançarino e Pesquisador Cultural',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/antonio-nobrega.jpg',
        actuation: 'Multiartista genial e virtuoso do violino e rabeca, integrou o Quinteto Armorial nos anos 1970 a convite de Ariano Suassuna. Dedicou sua vida à pesquisa, elevação e difusão das matrizes corporais, musicais e teatrais da tradição popular nordestina.',
        highlights: ['Movimento Armorial', 'Instituto Brincante', 'Mestre da Rabeca e Dança Popular'],
        references: [
            { label: 'Acervo Recordança - Antônio Nóbrega', url: 'https://acervorecordanca.com/portfolio/antonio-nobrega/' },
            { label: 'Wikipedia — Antônio Nóbrega', url: 'https://pt.wikipedia.org/wiki/Ant%C3%B4nio_N%C3%B3brega' }
        ]
    },
    {
        id: 'lenine',
        name: 'Lenine (Oswaldo Lenine Macedo Pimentel)',
        profile: 'Cantor, Compositor e Produtor Musical',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/lenine.jpg',
        actuation: "Ganhador de múltiplos Grammys Latinos, Lenine sintetizou como poucos a força percussiva do Maracatu, Frevo e Baião com a densidade harmônica do Rock e da MPB. Autor de clássicos contemporâneos como 'Paciência' e 'O Homem dos Olhos de Raio X'.",
        highlights: ['Vencedor de Grammys Latinos', 'Autor de Paciência', 'Fusão Maracatu e Pop-Rock'],
        references: [
            { label: 'Wikipedia — Lenine (músico)', url: 'https://pt.wikipedia.org/wiki/Lenine_(m%C3%BAsico)' },
            { label: 'Grammy Latino — Lenine', url: 'https://www.latingrammy.com/' }
        ]
    },
    {
        id: 'otto',
        name: 'Otto (Otto Maximiliano Pereira Cordeiro Ferreira)',
        profile: 'Cantor, Compositor e Percussionista',
        region: 'Belo Jardim / Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/otto.jpg',
        actuation: "Figura central na cena recifense pós-Manguebeat, foi percussionista de Chico Science & Nação Zumbi e do Mundo Livre S/A antes de alçar voo solo inovador que fundiu Ciranda, Samba, Maracatu e música eletrônica em álbuns históricos como 'Samba Pra Burro'.",
        highlights: ['Cena Manguebeat', 'Álbum Samba Pra Burro', 'Fusão Eletrônica e Regional'],
        references: [
            { label: 'Wikipedia — Otto (cantor)', url: 'https://pt.wikipedia.org/wiki/Otto_(cantor)' },
            { label: 'Dicionário MPB — Otto', url: 'https://dicionariompb.com.br/' }
        ]
    },
    {
        id: 'hermeto-pascoal',
        name: 'Hermeto Pascoal (O Bruxo)',
        profile: 'Multi-instrumentista, Compositor e Mestre da Harmonia',
        region: 'Recife / Vivência Pernambucana',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/hermeto-pascoal.jpg',
        actuation: 'Um dos maiores gênios e inovadores da música universal. Teve sua formação inicial forjada no Recife nos anos 1950 tocando na Rádio Jornal do Commercio e casas de show, desenvolvendo sua audição livre que transformou qualquer som do mundo em música sagrada.',
        highlights: ['Gênio da Música Universal', 'O Bruxo dos Sons', 'Inovação Instrumental'],
        references: [
            { label: 'Wikipedia — Hermeto Pascoal', url: 'https://pt.wikipedia.org/wiki/Hermeto_Pascoal' },
            { label: 'Dicionário MPB — Hermeto Pascoal', url: 'https://dicionariompb.com.br/' }
        ]
    },
    {
        id: 'mario-pedrosa',
        name: 'Mário Pedrosa (Mário Xavier de Andrade Pedrosa)',
        profile: 'Crítico de Arte, Ensaísta e Teórico Político',
        region: 'Timbaúba / Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/mario-pedrosa.jpg',
        actuation: "O mais influente crítico de arte brasileiro do século XX, pioneiro na defesa da arte concreta e da vanguarda construtivista. Defendeu os direitos humanos, atuou no Museu do Inconsciente ao lado de Nise da Silveira e propôs a arte como 'exercício experimental da liberdade'.",
        highlights: ['Exercício Experimental da Liberdade', 'Vanguarda Concretista', 'Crítica de Arte Internacional'],
        references: [
            { label: 'Wikipedia — Mário Pedrosa', url: 'https://pt.wikipedia.org/wiki/M%C3%A1rio_Pedrosa' },
            { label: 'MAM Rio — Mário Pedrosa', url: 'https://mamrio.org.br/' }
        ]
    },
    {
        id: 'austregesilo-de-athayde',
        name: 'Austregésilo de Athayde (Belarmino Maria Austregésilo de Athayde)',
        profile: 'Jornalista, Escritor, Jurista e Diplomata',
        region: 'Caruaru / Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/austregesilo-de-athayde.jpg',
        actuation: 'Histórico presidente da Academia Brasileira de Letras por mais de três décadas e um dos redatores da Declaração Universal dos Direitos Humanos da ONU em 1948, em Paris, deixando uma marca imortal de Pernambuco na história civilizatória mundial.',
        highlights: ['Redator da Carta da ONU (1948)', 'Presidente da ABL por 34 Anos', 'Defesa dos Direitos Humanos'],
        references: [
            { label: 'Wikipedia — Austregésilo de Athayde', url: 'https://pt.wikipedia.org/wiki/Austr%C3%A9gesilo_de_Athayde' },
            { label: 'Academia Brasileira de Letras — Austregésilo de Athayde', url: 'https://www.academia.org.br/academicos/austregesilo-de-athayde' }
        ]
    },
    {
        id: 'gilvan-lemos',
        name: 'Gilvan Lemos',
        profile: 'Romancista e Contista',
        region: 'Pombos / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/gilvan-lemos.jpg',
        actuation: "Proeminente autor da ficção pernambucana e nacional, retratou com realismo psicológico, intensidade dramática e apuro estético os conflitos agrários, a decadência patriarcal e o drama humano dos sertões e da Zona da Mata em romances como 'Emissários do Diabo'.",
        highlights: ['Literatura Contemporânea', 'Romance Psicológico Nordestino', 'Prêmios Literários Nacionais'],
        references: [
            { label: 'Wikipedia — Gilvan Lemos', url: 'https://pt.wikipedia.org/wiki/Gilvan_Lemos' },
            { label: 'Academia Pernambucana de Letras — Gilvan Lemos', url: 'https://apl.org.br/' }
        ]
    },
    {
        id: 'maximiano-campos',
        name: 'Maximiano Campos (Maximiano Accioly Campos)',
        profile: 'Escritor, Poeta, Cronista e Jornalista',
        region: 'Cabo de Santo Agostinho / Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/maximiano-campos.jpg',
        actuation: "Autor de obras seminais como 'Sem Pés Nem Cabeça' e o consagrado 'As Coleiras do Cão', foi um dos grandes nomes da ficção pernambucana do século XX e atuou fervorosamente na vida cultural e intelectual do estado e na Academia Pernambucana de Letras.",
        highlights: ['Autor de As Coleiras do Cão', 'Geração de 65', 'Academia Pernambucana de Letras'],
        references: [
            { label: 'Wikipedia — Maximiano Campos', url: 'https://pt.wikipedia.org/wiki/Maximiano_Campos' },
            { label: 'Academia Pernambucana de Letras — Maximiano Campos', url: 'https://apl.org.br/' }
        ]
    },
    {
        id: 'antonio-maria',
        name: 'Antônio Maria (Antônio Maria Araújo de Morais)',
        profile: 'Cronista, Compositor, Radialista e Humorista',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/antonio-maria.jpg',
        actuation: "Um dos maiores cronistas da imprensa brasileira e mestre absoluto do samba-canção com clássicos imortais como 'Ninguém Me Ama', 'Menino Grande' e frevos antológicos como 'Frevo Nº 1 do Recife'. Uniu boemia, inteligência fina e melancolia lírica.",
        highlights: ['Mestre do Samba-Canção', 'Frevo Nº 1 do Recife', 'Crônicas da Noite Carioca e Recifense'],
        references: [
            { label: 'Wikipedia — Antônio Maria (compositor)', url: 'https://pt.wikipedia.org/wiki/Ant%C3%B4nio_Maria_(compositor)' },
            { label: 'Crônica Brasileira - Antônio Maria', url: 'https://cronicabrasileira.org.br/autores/5811/antonio-maria' }
        ]
    },
    {
        id: 'capiba',
        name: 'Capiba (Lourenço da Fonseca Barbosa)',
        profile: 'Maestro, Advogado e Maior Compositor de Frevo de Rua e Canção',
        region: 'João Alfredo / Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/capiba.jpg',
        actuation: "Considerado o maior compositor de frevo da história de Pernambuco, com mais de 200 composições gravadas. Criou hinos carnavalescos imorredouros como 'Madeira que Cupim Não Rói', 'É de Tororó' e 'De Chapéu de Sol Aberto', tornando-se a própria alma do Carnaval pernambucano.",
        highlights: ['Rei do Frevo', 'Madeira que Cupim Não Rói', 'Patrimônio Musical de Pernambuco'],
        references: [
            { label: 'Wikipedia — Capiba', url: 'https://pt.wikipedia.org/wiki/Capiba' },
            { label: 'Fundarpe — Frevo Patrimônio Imaterial da Humanidade (UNESCO)', url: 'https://www.fundarpe.pe.gov.br/' }
        ]
    },
    {
        id: 'nelson-ferreira',
        name: 'Nelson Ferreira (Nelson Heráclito Alves Ferreira)',
        profile: 'Maestro, Pianista e Compositor',
        region: 'Recife / Ceará-Pernambuco',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/nelson-ferreira.jpg',
        actuation: "Gigante da regência e da composição de frevo de bloco e frevo-canção. Atuou por décadas como diretor musical da Rádio Clube de Pernambuco e é autor de clássicos como 'Evocação Nº 1' — a composição que consolidou o frevo de bloco em escala nacional.",
        highlights: ['Autor de Evocação Nº 1', 'Pioneiro do Frevo de Bloco', 'Diretor da Rádio Clube de Pernambuco'],
        references: [
            { label: 'Wikipedia — Nelson Ferreira (músico)', url: 'https://pt.wikipedia.org/wiki/Nelson_Ferreira_(m%C3%BAsico)' },
            { label: 'Fundarpe — Enciclopédia do Frevo Pernambucano', url: 'https://www.fundarpe.pe.gov.br/' }
        ]
    },
    {
        id: 'getulio-cavalcanti',
        name: 'Getúlio Cavalcanti',
        profile: 'Compositor, Músico e Poeta do Frevo de Bloco',
        region: 'Camutanga / Itambé (Zona da Mata Norte)',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/getulio-cavalcanti.jpg',
        actuation: "Principal continuador e guardião do frevo de bloco em Pernambuco nas últimas décadas. Compositor lírico e comovente, assinou obras-primas como 'O Último Regresso', canção que é cantada como verdadeiro hino de paixão no encerramento do Carnaval.",
        highlights: ['Autor de O Último Regresso', 'Mestre do Frevo de Bloco', 'Lírica Carnavalesca'],
        references: [
            { label: 'Wikipedia — Getúlio Cavalcanti', url: 'https://pt.wikipedia.org/wiki/Get%C3%BAlio_Cavalcanti' },
            { label: 'PE no Carnaval — Getúlio Cavalcanti (O Príncipe dos Blocos)', url: 'https://penocarnaval.com.br/' }
        ]
    },
    {
        id: 'edson-rodrigues',
        name: 'Edson Rodrigues (Edson Maurício da Silva)',
        profile: 'Radialista e Narrador Esportivo Lendário',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/edson-rodrigues.jpg',
        actuation: "O 'Monstro Sagrado do Rádio', celebrizado como um dos mais vibrantes e precisos locutores esportivos da história brasileira, narrou mais de 4 mil jogos e copas do mundo, emocionando gerações de pernambucanos e brasileiros ao microfone.",
        highlights: ['Monstro Sagrado do Rádio', 'Mais de 4.000 Jogos Narrados', 'História do Rádio Esportivo'],
        references: [
            { label: 'Folha de Pernambuco — Maestro Edson Rodrigues', url: 'https://folhape.com.br/' },
            { label: 'Wikipedia — Edson Rodrigues (músico pernambucano)', url: 'https://pt.wikipedia.org/wiki/Edson_Rodrigues_(m%C3%BAsico)' }
        ]
    },
    {
        id: 'arlete-salles',
        name: 'Arlete Salles (Arlette Sales Lopes)',
        profile: 'Atriz e Comediante de Teatro, Cinema e TV',
        region: 'Paudalho / RMR',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/arlete-salles.jpg',
        actuation: 'Uma das mais aclamadas e versáteis atrizes da teledramaturgia brasileira. Iniciou sua carreira na Rádio Jornal do Commercio no Recife e construiu uma trajetória de mais de seis décadas com dezenas de personagens inesquecíveis no teatro e na televisão.',
        highlights: ['Seis Décadas de Carreira', 'Pioneira na Rádio Jornal', 'Ícone da Teledramaturgia Brasileira'],
        references: [
            { label: 'Wikipedia — Arlete Salles', url: 'https://pt.wikipedia.org/wiki/Arlete_Salles' },
            { label: 'Memória Globo — Arlete Salles', url: 'https://memoriaglobo.globo.com/' }
        ]
    },
    {
        id: 'rosa-e-silva',
        name: 'Rosa e Silva (Francisco de Assis Rosa e Silva)',
        profile: 'Jurista, Político e Vice-Presidente da República',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/rosa-e-silva.jpg',
        actuation: 'Figura de proa na política da Primeira República no Brasil, presidiu a Câmara dos Deputados, o Senado Federal e exerceu a vice-presidência do Brasil (1898–1902). Dá nome a uma das principais avenidas da capital pernambucana.',
        highlights: ['Vice-Presidente do Brasil', 'Presidente do Senado', 'Liderança da Primeira República'],
        references: [
            { label: 'Wikipedia — Rosa e Silva', url: 'https://pt.wikipedia.org/wiki/Rosa_e_Silva' },
            { label: 'CPDOC / FGV — Rosa e Silva', url: 'https://cpdoc.fgv.br/producao/dossies/AEraVargas1/biografias/rosa_e_silva' }
        ]
    },
    {
        id: 'marco-maciel',
        name: 'Marco Maciel (Marco Antônio de Oliveira Maciel)',
        profile: 'Advogado, Professor, Político e Vice-Presidente da República',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/marco-maciel.jpg',
        actuation: 'Um dos mais habilidosos articuladores políticos da história recente do país, exerceu os cargos de governador de Pernambuco, senador, presidente da Câmara dos Deputados e vice-presidente da República (1995–2002). Membro da Academia Brasileira de Letras.',
        highlights: ['Vice-Presidente do Brasil (1995–2002)', 'Governador de Pernambuco', 'Membro da Academia Brasileira de Letras'],
        references: [
            { label: 'Wikipedia — Marco Maciel', url: 'https://pt.wikipedia.org/wiki/Marco_Maciel' },
            { label: 'Academia Brasileira de Letras — Marco Maciel', url: 'https://www.academia.org.br/academicos/marco-maciel' }
        ]
    },
    {
        id: 'miguel-arraes',
        name: 'Miguel Arraes (Miguel Arraes de Alencar)',
        profile: 'Líder Político, Advogado e Governador de Pernambuco',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/miguel-arraes.jpg',
        actuation: 'Um dos maiores líderes da esquerda e das causas populares do Brasil. Prefeito do Recife e três vezes governador de Pernambuco, criou o inovador programa Chapéu de Palha em favor dos cortadores de cana e foi símbolo mundial da resistência civil ao golpe de 1964.',
        highlights: ['Três Vezes Governador de PE', 'Criador do Chapéu de Palha', 'Símbolo da Resistência Democrática'],
        references: [
            { label: 'Wikipedia — Miguel Arraes', url: 'https://pt.wikipedia.org/wiki/Miguel_Arraes' },
            { label: 'Câmara dos Deputados', url: 'https://www2.camara.leg.br/atividade-legislativa/plenario/discursos/escrevendohistoria/discursos-em-destaque/serie-brasileira/decada-1980-89/biografia-miguel-arraes' }
        ]
    },
    {
        id: 'eduardo-campos',
        name: 'Eduardo Campos (Eduardo Henrique Accioly Campos)',
        profile: 'Economista e Liderança Política Nacional',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/eduardo-campos.jpg',
        actuation: 'Brilhante líder político de projeção nacional, neto de Miguel Arraes. Governou Pernambuco por dois mandatos com recordes históricos de aprovação popular, revolucionou o modelo de gestão pública e educação integral e foi Ministro da Ciência e Tecnologia.',
        highlights: ['Governador de Pernambuco', 'Revolução na Educação Pública Integral', 'Ministro da Ciência e Tecnologia'],
        references: [
            { label: 'Wikipedia — Eduardo Campos', url: 'https://pt.wikipedia.org/wiki/Eduardo_Campos' },
            { label: 'Governo de Pernambuco — Eduardo Campos', url: 'https://www.pe.gov.br/' }
        ]
    },
    {
        id: 'fernando-de-azevedo',
        name: 'Fernando de Azevedo',
        profile: 'Sociólogo, Educador, Escritor e Ensaísta',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/fernando-de-azevedo.jpg',
        actuation: "Educador de impacto monumental e redator do célebre 'Manifesto dos Pioneiros da Educação Nova' em 1932. Autor da obra clássica 'A Cultura Brasileira' e cofundador da Universidade de São Paulo (USP) e membro da Academia Brasileira de Letras.",
        highlights: ['Manifesto dos Pioneiros (1932)', 'Autor de A Cultura Brasileira', 'Cofundador da USP'],
        references: [
            { label: 'Wikipedia — Fernando de Azevedo', url: 'https://pt.wikipedia.org/wiki/Fernando_de_Azevedo' },
            { label: 'Academia Brasileira de Letras — Fernando de Azevedo', url: 'https://www.academia.org.br/' }
        ]
    },
    {
        id: 'luiz-delgado',
        name: 'Luiz Delgado',
        profile: 'Ensaísta, Crítico Literário e Historiador',
        region: 'Brejo da Madre de Deus / Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/luiz-delgado.jpg',
        actuation: 'Intelectual erudito e dedicado pesquisador da formação cultural pernambucana e do pensamento luso-brasileiro. Foi presidente do Instituto Arqueológico, Histórico e Geográfico Pernambucano (IAHGP) e mestre de ensaios biográficos e historiográficos.',
        highlights: ['Presidente do IAHGP', 'Historiografia Pernambucana', 'Ensaísta e Biógrafo'],
        references: [
            { label: 'Wikipedia — Luiz Delgado', url: 'https://pt.wikipedia.org/wiki/Luiz_Delgado' },
            { label: 'IAHGP — Instituto Arqueológico, Histórico e Geográfico Pernambucano', url: 'https://www.iahgp.com.br/' }
        ]
    },
    {
        id: 'mauro-mota',
        name: 'Mauro Mota (Mauro Ramos da Mota e Silva)',
        profile: 'Poeta, Jornalista, Historiador e Membro da ABL',
        region: 'Belo Jardim / Recife',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/mauro-mota.jpg',
        actuation: "Poeta da terra e da geografia humana do Nordeste, destacou-se pela originalidade da poesia telúrica em livros como 'Elegias' e 'Canto ao Meio'. Presidiu o Diário de Pernambuco e ocupou a cadeira 26 da Academia Brasileira de Letras.",
        highlights: ['Membro da ABL', 'Poesia Telúrica Nordestina', 'Diretor do Diário de Pernambuco'],
        references: [
            { label: 'Wikipedia — Mauro Mota', url: 'https://pt.wikipedia.org/wiki/Mauro_Mota' },
            { label: 'Academia Brasileira de Letras — Cadeira 26', url: 'https://www.academia.org.br/' }
        ]
    },
    {
        id: 'evaldo-cabral-de-mello',
        name: 'Evaldo Cabral de Mello',
        profile: 'Historiador, Diplomata e Membro da ABL',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/evaldo-cabral-de-mello.jpg',
        actuation: "Irmão de João Cabral de Melo Neto e considerado o maior historiador do Brasil colonial e da presença holandesa em Pernambuco. Autor de obras-primas como 'Olinda Restaurada', 'O Negócio do Brasil' e 'Rubro Veio'.",
        highlights: ['Maior Historiador do Brasil Holandês', 'Autor de Olinda Restaurada', 'Membro da Academia Brasileira de Letras'],
        references: [
            { label: 'Wikipedia — Evaldo Cabral de Mello', url: 'https://pt.wikipedia.org/wiki/Evaldo_Cabral_de_Mello' },
            { label: 'Academia Brasileira de Letras — Evaldo Cabral de Mello', url: 'https://www.academia.org.br/academicos/evaldo-cabral-de-mello' }
        ]
    },
    {
        id: 'chacrinha',
        name: 'Abelardo Barbosa (Chacrinha - O Velho Guerreiro)',
        profile: 'Comunicador, Radialista e Apresentador de TV',
        region: 'Surubim / Agreste',
        regionCategory: 'Agreste',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/chacrinha.jpg',
        actuation: "O maior comunicador da história da televisão brasileira. Nascido em Surubim, revolucionou a linguagem da mídia de massa com o bordão 'quem não se comunica, se trumbica', abrindo portas e consagrando praticamente todos os grandes astros da música popular brasileira.",
        highlights: ['O Velho Guerreiro', 'Maior Comunicador do Brasil', 'Revolução na Televisão e Rádio'],
        references: [
            { label: 'Wikipedia — Chacrinha', url: 'https://pt.wikipedia.org/wiki/Chacrinha' },
            { label: 'Museu da TV Brasileira — Chacrinha', url: 'https://www.museudatv.com.br/' }
        ]
    },
    {
        id: 'onildo-almeida',
        name: 'Onildo Almeida',
        profile: 'Compositor, Músico e Radialista',
        region: 'Caruaru / Agreste',
        regionCategory: 'Agreste',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/onildo-almeida.jpg',
        actuation: "Lendário compositor de Caruaru e um dos mais gravados parceiros de Luiz Gonzaga. É o autor de 'A Feira de Caruaru', clássico que ganhou o mundo e eternizou em versos antológicos a maior feira livre ao ar livre do planeta.",
        highlights: ['Autor de A Feira de Caruaru', 'Parceiro de Luiz Gonzaga', 'Patrimônio Vivo de Caruaru'],
        references: [
            { label: 'Wikipedia — Onildo Almeida', url: 'https://pt.wikipedia.org/wiki/Onildo_Almeida' },
            { label: 'Rádio Cultura do Nordeste — Onildo Almeida', url: 'https://www.radioculturadonordeste.com.br/' }
        ]
    },
    {
        id: 'ze-caboclo',
        name: 'Zé Caboclo (José Antônio da Silva)',
        profile: 'Mestre Ceramista e Escultor do Barro',
        region: 'Caruaru / Agreste',
        regionCategory: 'Agreste',
        category: 'Artes Plásticas, Cerâmica e Design',
        photo: 'src/img/personalidades/ze-caboclo.jpg',
        actuation: 'Contemporâneo e um dos principais nomes ao lado de Mestre Vitalino na consagração do Alto do Moura como o maior centro de artes figurativas das Américas. Criou tipos inconfundíveis como os maracatus, os noivos a cavalo e os caçadores.',
        highlights: ['Mestre do Alto do Moura', 'Arte Figurativa em Barro', 'Pioneiro da Cerâmica de Caruaru'],
        references: [
            { label: 'Wikipedia — Zé Caboclo', url: 'https://pt.wikipedia.org/wiki/Z%C3%A9_Caboclo' },
            { label: 'Catálogo das Artes — Zé Caboclo', url: 'https://catalogodasartes.com.br/' }
        ]
    },
    {
        id: 'mestre-galdino',
        name: 'Mestre Galdino (Manoel Galdino de Freitas)',
        profile: 'Poeta Popular, Ceramista e Escultor Surrealista',
        region: 'Caruaru / Agreste',
        regionCategory: 'Agreste',
        category: 'Artes Plásticas, Cerâmica e Design',
        photo: 'src/img/personalidades/mestre-galdino.jpg',
        actuation: 'Natural de São Caetano (PE), radicou-se no Alto do Moura de Caruaru a partir de 1974. Artista extraordinário desta comunidade que uniu a cerâmica sertaneja à imaginação poética surrealista. Criador das famosas figuras zoomórficas, botijas entalhadas e animais fantásticos acompanhados de versos de cordel esculpidos.',
        highlights: ['Surrealismo Popular Nordestino', 'Alto do Moura', 'Escultura Fantástica e Poesia'],
        references: [
            { label: 'Wikipedia — Mestre Galdino', url: 'https://pt.wikipedia.org/wiki/Mestre_Galdino' },
            { label: 'Galeria Estação — Mestre Galdino', url: 'https://galeriaestacao.com.br/' },
            { label: 'Museus Gov.br — Mestre Galdino', url: 'https://museus.gov.br/' }
        ]
    },
    {
        id: 'patativa-do-assare',
        name: 'Patativa do Assaré (Antônio Gonçalves da Silva)',
        profile: 'Poeta Popular, Cordelista e Violeiro',
        region: 'Agreste / Vivência Sertaneja',
        regionCategory: 'Agreste',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/patativa-do-assare.jpg',
        actuation: "Símbolo imortal da poesia de raiz nordestina, sua voz ecoou intensamente pelas feiras e cantorias do Agreste e Sertão pernambucano. Autor de 'A Triste Partida' e 'Cante Lá Que Eu Canto Cá', uniu lírica pura à mais severa denúncia das injustiças sociais.",
        highlights: ['A Triste Partida', 'Voz dos Deserdados da Terra', 'Mestre Absoluto do Cordel'],
        references: [
            { label: 'Wikipedia — Patativa do Assaré', url: 'https://pt.wikipedia.org/wiki/Patativa_do_Assar%C3%A9' },
            { label: 'Fundação Casa de Rui Barbosa — Literatura de Cordel', url: 'https://www.casaruibarbosa.gov.br/' }
        ]
    },
    {
        id: 'josildo-sa',
        name: 'Josildo Sá',
        profile: 'Cantor e Intérprete do Forró e Samba de Latada',
        region: 'Floresta / Sertão de Itaparica (criado em Tacaratu)',
        regionCategory: 'Agreste',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/josildo-sa.jpg',
        actuation: "Uma das vozes mais autênticas da música regional pernambucana moderna, Josildo Sá uniu as raízes sertanejas ao vigor do Agreste, resgatando e consagrando o tradicional ritmo do 'Samba de Latada' em turnês nacionais e internacionais.",
        highlights: ['Mestre do Samba de Latada', 'Voz Tradicional do Forró', 'Cultura Regional'],
        references: [
            { label: 'Senado Federal — Josildo Sá', url: 'https://www.senado.leg.br/' },
            { label: 'Diário de Pernambuco — Josildo Sá', url: 'https://www.diariodepernambuco.com.br/' }
        ]
    },
    {
        id: 'petrucio-amorim',
        name: 'Petrúcio Amorim (Petrúcio Cavalcanti Amorim)',
        profile: 'Cantor e Compositor de Forró Romântico e de Raiz',
        region: 'Caruaru / Agreste',
        regionCategory: 'Agreste',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/petrucio-amorim.jpg',
        actuation: "Conhecido como 'O Poeta do Forró', é autor de clássicos imortais da identidade afetiva de Pernambuco como 'Tareco e Mariola', 'Filho do Dono' e 'Meu País'. Suas canções expressam o amor profundo à terra, ao São João e às memórias nordestinas.",
        highlights: ['Autor de Tareco e Mariola', 'O Poeta do Forró', 'Hinos do São João de Caruaru'],
        references: [
            { label: 'Wikipedia — Petrúcio Amorim', url: 'https://pt.wikipedia.org/wiki/Petr%C3%BAcio_Amorim' },
            { label: 'Dicionário MPB — Petrúcio Amorim', url: 'https://dicionariompb.com.br/' }
        ]
    },
    {
        id: 'joaquim-cardozo',
        name: 'Joaquim Cardozo (Joaquim Maria Moreira Cardozo)',
        profile: 'Engenheiro Estruturalista, Poeta e Dramaturgo',
        region: 'Belo Jardim / Agreste',
        regionCategory: 'Agreste',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/joaquim-cardozo.jpg',
        actuation: 'O homem que tornou possíveis as curvas de concreto de Oscar Niemeyer na construção dos monumentos de Brasília e da Pampulha. Paralelamente aos cálculos estruturais geniais, foi um dos maiores poetas e intelectuais da literatura brasileira moderna.',
        highlights: ['Engenheiro Calculista de Brasília', 'Gênio do Concreto Armado', 'Poeta da Geração Moderna'],
        references: [
            { label: 'Wikipedia — Joaquim Cardozo', url: 'https://pt.wikipedia.org/wiki/Joaquim_Cardozo' },
            { label: 'Fundação Joaquim Nabuco — Joaquim Cardozo', url: 'https://www.fundaj.gov.br/' }
        ]
    },
    {
        id: 'clovis-bevilaqua',
        name: 'Clóvis Beviláqua',
        profile: 'Jurista, Filósofo, Legislador e Autor do Código Civil de 1916',
        region: 'Agreste / Formação na Faculdade de Direito do Recife',
        regionCategory: 'Agreste',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/clovis-bevilaqua.jpg',
        actuation: 'Um dos maiores juristas da história do ocidente e principal redator do Código Civil Brasileiro de 1916. Formado na célebre Escola do Recife, aliou positivismo, rigor científico e humanismo para construir as bases do direito civil do país.',
        highlights: ['Autor do Código Civil de 1916', 'Expoente da Escola do Recife', 'Cofundador da ABL'],
        references: [
            { label: 'Wikipedia — Clóvis Beviláqua', url: 'https://pt.wikipedia.org/wiki/Cl%C3%B3vis_Bevil%C3%A1qua' },
            { label: 'Academia Brasileira de Letras — Fundadores', url: 'https://www.academia.org.br/' }
        ]
    },
    {
        id: 'joaquim-pimenta',
        name: 'Joaquim Pimenta',
        profile: 'Jurista Trabalhista, Sociólogo e Advogado',
        region: 'Bonito / Agreste',
        regionCategory: 'Agreste',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/joaquim-pimenta.jpg',
        actuation: 'Pioneiro fundador do Direito do Trabalho no Brasil. Nascido em Bonito, liderou greves operárias históricas no Recife, redigiu os primeiros decretos de proteção social ao trabalhador nos anos 1930 e presidiu os primeiros tribunais trabalhistas.',
        highlights: ['Pai do Direito do Trabalho no Brasil', 'Liderança Sindical Histórica', 'Redação das Leis Trabalhistas'],
        references: [
            { label: 'CPDOC / FGV — Joaquim Pimenta', url: 'https://cpdoc.fgv.br/' },
            { label: 'Wikipedia — História do Direito do Trabalho no Brasil', url: 'https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_direito_do_trabalho_no_Brasil' }
        ]
    },
    {
        id: 'jose-amaro-dos-santos',
        name: 'José Amaro dos Santos',
        profile: 'Líder Sindical Camponês e Mártir da Reforma Agrária',
        region: 'Escada / Divisa com Agreste',
        regionCategory: 'Agreste',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/jose-amaro-dos-santos.jpg',
        actuation: 'Liderança emblemática das Ligas Camponesas em Pernambuco. Enfrentou a opressão latifundiária no campo, mobilizou milhares de trabalhadores rurais pelo direito à terra e à dignidade nas lavouras do interior pernambucano.',
        highlights: ['Ligas Camponesas', 'Direitos dos Trabalhadores Rurais', 'Reforma Agrária'],
        references: [
            { label: 'CPDOC / FGV — As Ligas Camponesas', url: 'https://cpdoc.fgv.br/producao/dossies/Jango/artigos/NaPresidenciaDeJK/As_Ligas_Camponesas' },
            { label: 'Wikipedia — Ligas Camponesas', url: 'https://pt.wikipedia.org/wiki/Ligas_Camponesas' }
        ]
    },

    {
        id: 'lampiao',
        name: 'Lampião (Virgulino Ferreira da Silva - O Rei do Cangaço)',
        profile: 'Líder Cangaceiro e Personagem Central do Imaginário Sertanejo',
        region: 'Serra Talhada / Sertão',
        regionCategory: 'Sertão',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/lampiao.jpg',
        actuation: 'A figura mais emblemática do fenômeno do cangaço e do banditismo social no semiárido brasileiro. Comandou bandos armados pelos sertões nordestinos desafiando as forças policiais volantes e tornando-se um mito imortal do imaginário e da cultura popular.',
        highlights: ['Rei do Cangaço', 'Serra Talhada', 'Mito do Imaginário Sertanejo'],
        references: [
            { label: 'Wikipedia — Lampião', url: 'https://pt.wikipedia.org/wiki/Lapi%C3%A3o' },
            { label: 'Museu do Cangaço — Serra Talhada', url: 'https://serratalhada.pe.gov.br/' }
        ]
    },
    {
        id: 'sivuca',
        name: 'Sivuca (Severino Dias de Oliveira)',
        profile: 'Acordeonista Virtuoso, Maestro e Arranjador Universal',
        region: 'Sertão de Pernambuco / Raízes Regionais',
        regionCategory: 'Sertão',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/sivuca.jpg',
        actuation: "Gênio universal do acordeom, levou o baião, o forró e a música nordestina aos palcos de jazz de Paris e Nova York. Autor do clássico 'Feira de Mangaio', aliou a alma dos sertões pernambucanos e paraibanos à mais sofisticada orquestração internacional.",
        highlights: ['Mestre do Acordeom', 'Feira de Mangaio', 'Projeção Internacional da Sanfona'],
        references: [
            { label: 'Wikipedia — Sivuca', url: 'https://pt.wikipedia.org/wiki/Sivuca' },
            { label: 'Dicionário MPB — Sivuca', url: 'https://dicionariompb.com.br/' }
        ]
    },
    {
        id: 'flavio-jose',
        name: 'Flávio José (Flávio José Marcelino dos Santos)',
        profile: 'Cantor, Sanfoneiro e Guardião do Autêntico Forró Pé-de-Serra',
        region: 'Sertão do Pajeú / Vivência Sertaneja',
        regionCategory: 'Sertão',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/flavio-jose.jpg',
        actuation: "Uma das maiores vozes do forró tradicional de todos os tempos. Com interpretações insuperáveis de 'Caboclo Sonhador', 'Tareco e Mariola' e 'Filho do Dono', é idolatrado no Sertão do Pajeú como o maior defensor do forró de sanfona, zabumba e triângulo.",
        highlights: ['Caboclo Sonhador', 'Guardião do Pé-de-Serra', 'Ícone dos Sertões'],
        references: [
            { label: 'Wikipedia — Flávio José', url: 'https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Jos%C3%A9' },
            { label: 'Dicionário MPB — Flávio José', url: 'https://dicionariompb.com.br/' }
        ]
    },
    {
        id: 'maciel-melo',
        name: 'Maciel Melo',
        profile: 'Cantor, Compositor e Poeta Violeiro',
        region: 'Iguaracy / Sertão do Pajeú',
        regionCategory: 'Sertão',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/maciel-melo.jpg',
        actuation: "Nascido no berço dos poetas do Pajeú, é autor do clássico 'Caboclo Sonhador' (imortalizado por Flávio José) e de tantas outras obras fundamentais. Sua poesia combina o lirismo sertanejo, a poética das cantorias de viola e a essência do povo da caatinga.",
        highlights: ['Autor de Caboclo Sonhador', 'Poeta do Pajeú', 'Música Regional de Raiz'],
        references: [
            { label: 'Wikipedia — Maciel Melo', url: 'https://pt.wikipedia.org/wiki/Maciel_Melo' },
            { label: 'Dicionário MPB — Maciel Melo', url: 'https://dicionariompb.com.br/' }
        ]
    },
    {
        id: 'xico-bizerra',
        name: 'Xico Bizerra (Francisco Bizerra de Carvalho)',
        profile: 'Compositor, Poeta e Cronista dos Sertões',
        region: 'Crato (CE) — radicado em Recife/PE',
        regionCategory: 'Sertão',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/xico-bizerra.jpg',
        actuation: "Criador do projeto 'Forró Pé de Serra do Xico Bizerra' e autor de mais de uma centena de canções gravadas pelos maiores nomes da MPB nordestina. Retrata com extrema doçura e rigor métrico o universo das serras, dos açudes e do homem da caatinga.",
        highlights: ['Compositor Sertanejo', 'Forró Pé de Serra', 'Cronista da Caatinga'],
        references: [
            { label: 'Wikipedia — Xico Bizerra', url: 'https://pt.wikipedia.org/wiki/Xico_Bizerra' },
            { label: 'Dicionário MPB — Xico Bizerra', url: 'https://dicionariompb.com.br/' }
        ]
    },
    {
        id: 'rogerio-rangel',
        name: 'Rogério Rangel',
        profile: 'Cantor, Compositor e Músico do Vale do São Francisco',
        region: 'Recife / Pernambuco',
        regionCategory: 'Sertão',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/rogerio-rangel.jpg',
        actuation: 'Expoente da riqueza musical de Petrolina e das margens do Rio São Francisco. Compositor refinado que une os sons fluviais do Velho Chico ao baião, frevo e maracatu com arranjos modernos e líricos.',
        highlights: ['Música do Vale do São Francisco', 'Petrolina', 'Poesia e Ritmos Ribeirinhos'],
        references: [
            { label: 'Folha de Pernambuco — Rogério Rangel', url: 'https://folhape.com.br/' },
            { label: 'Dicionário MPB — Rogério Rangel', url: 'https://dicionariompb.com.br/' }
        ]
    },
    {
        id: 'manoel-salustiano',
        name: 'Mestre Salustiano (Manoel Salustiano do Nascimento)',
        profile: 'Mestre de Rabeca, Maracatu Rural e Patrimônio Vivo de PE',
        region: 'Aliança / Zona da Mata e Sertão',
        regionCategory: 'Sertão',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/manoel-salustiano.jpg',
        actuation: 'Patrimônio Vivo de Pernambuco e um dos maiores mestres populares da história brasileira. Fundador do Maracatu Piaba de Ouro e do Ilumiara, foi o grande mestre da rabeca que inspirou diretamente toda a revolução musical do Manguebeat nos anos 1990.',
        highlights: ['Patrimônio Vivo de PE', 'Mestre da Rabeca e Cavalo-Marinho', 'Inspiração do Manguebeat'],
        references: [
            { label: 'Wikipedia — Mestre Salustiano', url: 'https://pt.wikipedia.org/wiki/Mestre_Salustiano' },
            { label: 'Fundarpe — Patrimônio Vivo de Pernambuco', url: 'https://www.fundarpe.pe.gov.br/patrimonio-vivo' }
        ]
    },
    {
        id: 'antonio-conselheiro',
        name: 'Antônio Conselheiro (Antônio Vicente Mendes Maciel)',
        profile: 'Líder Religioso, Peregrino e Guia do Arraial de Canudos',
        region: 'Sertão Nordestino / Travessia Sertaneja',
        regionCategory: 'Sertão',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/antonio-conselheiro.jpg',
        actuation: 'Figura messiânica e lendária que percorreu os sertões de Pernambuco, Bahia e Ceará pregando a justiça divina, erguendo capelas e fundando o Arraial de Belo Monte (Canudos). É o símbolo máximo da resistência sertaneja contra a fome e a opressão.',
        highlights: ['Arraial de Canudos', 'Resistência Messiânica Sertaneja', 'Eternizado em Os Sertões'],
        references: [
            { label: 'Wikipedia — Antônio Conselheiro', url: 'https://pt.wikipedia.org/wiki/Ant%C3%B4nio_Conselheiro' },
            { label: 'eBiografia - Antônio Conselheiro', url: 'https://www.ebiografia.com/antonio_conselheiro/' }
        ]
    },
    {
        id: 'padre-cicero',
        name: 'Padre Cícero (Cícero Romão Batista - O Padim Ciço)',
        profile: 'Sacerdote, Líder Comunitário e Patriarca Espiritual do Sertão',
        region: 'Sertão de Pernambuco / Devoção Regional',
        regionCategory: 'Sertão',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/padre-cicero.jpg',
        actuation: 'A maior figura de devoção e liderança popular dos sertões nordestinos. Seus conselhos espirituais, defesa dos romeiros, incentivo ao trabalho comunitário e à convivência com a seca mobilizaram milhões de fiéis de Pernambuco por gerações.',
        highlights: ['Patriarca do Sertão', 'Peregrinação e Fé Popular', 'Conselhos de Convivência com a Seca'],
        references: [
            { label: 'Wikipedia — Padre Cícero', url: 'https://pt.wikipedia.org/wiki/Padre_C%C3%ADcero' },
            { label: 'Arquidiocese de Juazeiro do Norte', url: 'https://www.arquidiocesejuazeiro.com.br/' }
        ]
    },
    {
        id: 'lourival-batista',
        name: 'Lourival Batista (O Louro do Pajeú)',
        profile: 'Poeta Repentista e Patriarca da Cantoria do Pajeú',
        region: 'São José do Egito / Sertão do Pajeú',
        regionCategory: 'Sertão',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/lourival-batista.jpg',
        actuation: "Considerado o maior improvisador em decassílabos da história do Nordeste. Chamado de 'O Rei dos Trovadores', liderou a célebre dinastia dos irmãos Batista em São José do Egito, transformando o Sertão do Pajeú na capital mundial da poesia em verso improvisado.",
        highlights: ['O Louro do Pajeú', 'Rei dos Trovadores', 'Dinastia dos Irmãos Batista'],
        references: [
            { label: 'Wikipedia — Lourival Batista', url: 'https://pt.wikipedia.org/wiki/Lourival_Batista' },
            { label: 'Museu do Repente — São José do Egito', url: 'http://www.museurepente.com.br/' }
        ]
    },
    {
        id: 'joao-paraibano',
        name: 'João Paraibano (João Batista de Souza)',
        profile: 'Violeiro e Poeta Repentista Lendário do Pajeú',
        region: 'Tabira / Sertão do Pajeú',
        regionCategory: 'Sertão',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/joao-paraibano.jpg',
        actuation: 'Um dos mais venerados e geniais repentistas do Brasil. Adotou Tabira como lar e encantou plateias em todo o país com sua métrica impecável, rimas ricas e imagens poéticas telúricas que pareciam brotar espontaneamente das pedras e riachos do sertão.',
        highlights: ['Mestre do Repente', 'Tabira e o Pajeú', 'Improviso Poético Genial'],
        references: [
            { label: 'UFPE — Cantoria de Viola no Nordeste', url: 'https://www.ufpe.br/' },
            { label: 'Discografia Brasileira — João Paraibano', url: 'https://www.discografiabrasileira.com.br/' }
        ]
    },
    {
        id: 'sebastiao-dias',
        name: 'Sebastião Dias (Sebastião Dias Filho)',
        profile: 'Poeta Repentista, Cantor, Violeiro e Prefeito',
        region: 'Tabira / Sertão do Pajeú',
        regionCategory: 'Sertão',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/sebastiao-dias.jpg',
        actuation: 'Reconhecido nacionalmente como um dos maiores repentistas em mourão e galope à beira-mar, Sebastião Dias uniu a vida pública à exaltação da cultura do Sertão do Pajeú, gravando discos históricos de cantoria de viola.',
        highlights: ['Mourão e Galope à Beira-Mar', 'Poeta e Gestor de Tabira', 'Cantoria de Viola'],
        references: [
            { label: 'UFPE — Pesquisa sobre Repentistas do Pajeú', url: 'https://www.ufpe.br/' },
            { label: 'Discografia Brasileira — Sebastião Dias', url: 'https://www.discografiabrasileira.com.br/' }
        ]
    },
    {
        id: 'raimundo-nonato',
        name: 'Raimundo Nonato (Nonato Costa)',
        profile: 'Poeta, Cantador, Compositor e Declamador',
        region: 'São José do Egito / Sertão do Pajeú',
        regionCategory: 'Sertão',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/raimundo-nonato.jpg',
        actuation: 'Integrante da aclamada dupla Os Nonatos, levou o repente e a poesia cabocla a estádios e teatros por todo o Brasil. Suas composições foram gravadas por grandes estrelas nacionais e redefiniram o alcance da cantoria popular contemporânea.',
        highlights: ['Os Nonatos', 'Berço do Pajeú', 'Composições Gravadas Nacionalmente'],
        references: [
            { label: 'UFPE — Os Nonatos e a Cantoria Popular', url: 'https://www.ufpe.br/' },
            { label: 'Discografia Brasileira — Os Nonatos', url: 'https://www.discografiabrasileira.com.br/' }
        ]
    },
    {
        id: 'ivanildo-vila-nova',
        name: 'Ivanildo Vila Nova',
        profile: 'Repentista Lendário, Poeta e Criador do Martelo Agalopado Moderno',
        region: 'Sertão do Pajeú / Agreste',
        regionCategory: 'Sertão',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/ivanildo-vila-nova.jpg',
        actuation: "Um dos maiores nomes vivos da poesia popular e cantoria no Brasil. Criador do clássico verso 'Nordeste Independente' e pioneiro em levar a cantoria para os palcos acadêmicos e congressos internacionais de improviso.",
        highlights: ['Autor de Nordeste Independente', 'Mestre Supremo do Repente', 'Projeção Nacional da Poesia Sertaneja'],
        references: [
            { label: 'Wikipedia — Ivanildo Vila Nova', url: 'https://pt.wikipedia.org/wiki/Ivanildo_Vila_Nova' },
            { label: 'UFPE — Cantoria e Repente Nordestino', url: 'https://www.ufpe.br/' }
        ]
    },
    {
        id: 'otacilio-batista',
        name: 'Otacílio Batista (Otacílio Batista Patriota)',
        profile: 'Poeta Repentista, Compositor e Ensaísta Popular',
        region: 'São José do Egito / Sertão do Pajeú',
        regionCategory: 'Sertão',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/otacilio-batista.jpg',
        actuation: "Irmão de Louro do Pajeú e parceiro de Zé Ramalho na composição da célebre música 'Mulher Nova, Bonita e Carinhosa Faz o Homem Gemer Sem Sentir Dor'. Intelectual do repente, publicou livros que registraram a história dos trovadores do Pajeú.",
        highlights: ['Mulher Nova, Bonita e Carinhosa', 'Parceria com Zé Ramalho', 'Historiador da Cantoria'],
        references: [
            { label: 'Wikipedia — Otacílio Batista', url: 'https://pt.wikipedia.org/wiki/Otac%C3%ADlio_Batista' },
            { label: 'UFPE — Os Irmãos Batista do Pajeú', url: 'https://www.ufpe.br/' }
        ]
    },
    {
        id: 'mariano-carvalho',
        name: 'Mariano Carvalho',
        profile: 'Escritor, Jornalista e Educador do Sertão',
        region: 'Salgueiro / Sertão Central',
        regionCategory: 'Sertão',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/mariano-carvalho.jpg',
        actuation: 'Pioneiro da imprensa e do ensino secundário em Salgueiro, combateu o analfabetismo no Sertão Central e registrou minuciosamente as memórias e genealogias das famílias sertanejas.',
        highlights: ['Imprensa de Salgueiro', 'Educação Sertaneja', 'Memória e História Regional'],
        references: [
            { label: 'Rede GN — Mariano Carvalho', url: 'https://redegn.com.br/' }
        ]
    },
    {
        id: 'espedito-seleiro',
        name: 'Espedito Seleiro (Espedito Veloso de Carvalho)',
        profile: 'Mestre Artesão do Couro e Patrimônio Vivo Cultural',
        region: 'Sertão de Pernambuco / Raízes da Arte em Couro',
        regionCategory: 'Sertão',
        category: 'Artes Plásticas, Cerâmica e Design',
        photo: 'src/img/personalidades/espedito-seleiro.jpg',
        actuation: 'Mestre incontestável do artesanato em couro no Brasil, herdeiro da tradição do pai que confeccionou as sandálias de Lampião. Transformou a sela e o gibão do vaqueiro sertanejo em peças de alta arte, desfiladas no São Paulo Fashion Week e admiradas no mundo inteiro.',
        highlights: ['Mestre da Arte em Couro', 'Herdeiro do Design do Cangaço', 'Reconhecimento Internacional'],
        references: [
            { label: 'Wikipedia — Espedito Seleiro', url: 'https://pt.wikipedia.org/wiki/Espedito_Seleiro' },
            { label: 'Fundarpe — Patrimônio Vivo de Pernambuco', url: 'https://www.fundarpe.pe.gov.br/patrimonio-vivo' }
        ]
    },
    {
        id: 'graciliano-ramos',
        name: 'Graciliano Ramos',
        profile: 'Romancista, Cronista e Maior Escritor Regionalista do Brasil',
        region: 'Sertão Nordestino / Travessia Sertaneja',
        regionCategory: 'Sertão',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/graciliano-ramos.jpg',
        actuation: "Autor de obras-primas da literatura brasileira como 'Vidas Secas', 'São Bernardo' e 'Memórias do Cárcere'. Retratou a brutalidade da seca e o drama existencial da família de Fabiano com a mais contundente e enxuta prosa da língua portuguesa.",
        highlights: ['Autor de Vidas Secas', 'Obra-prima do Regionalismo', 'Clássico da Literatura Brasileira'],
        references: [
            { label: 'Wikipedia — Graciliano Ramos', url: 'https://pt.wikipedia.org/wiki/Graciliano_Ramos' },
            { label: 'Academia Brasileira de Letras — Graciliano Ramos', url: 'https://www.academia.org.br/' }
        ]
    },
    {
        id: 'manuel-eudocio',
        name: 'Manuel Eudócio (Manuel Eudócio Rodrigues)',
        profile: 'Mestre Ceramista do Barro e Patrimônio Vivo de PE',
        region: 'Caruaru / Sertão e Agreste',
        regionCategory: 'Sertão',
        category: 'Artes Plásticas, Cerâmica e Design',
        photo: 'src/img/personalidades/manuel-eudocio.jpg',
        actuation: 'Discípulo direto de Mestre Vitalino e declarado Patrimônio Vivo de Pernambuco. Notabilizou-se por seu estilo minucioso no barro cozido e pintado, retratando com primor os bois enfeitados, cavalo-marinho e os retirantes do sertão.',
        highlights: ['Patrimônio Vivo de Pernambuco', 'Discípulo de Vitalino', 'Mestre Escultor do Barro'],
        references: [
            { label: 'Fundarpe — Manuel Eudócio — Patrimônio Vivo de Pernambuco', url: 'https://www.fundarpe.pe.gov.br/patrimonio-vivo' },
            { label: 'Catálogo das Artes — Manuel Eudócio', url: 'https://catalogodasartes.com.br/' }
        ]
    },
    {
        id: 'zezinha-de-caruaru',
        name: 'Zezinha de Caruaru (Maria José dos Santos)',
        profile: 'Mestra Artesã do Barro e Escultora Figurativa',
        region: 'Caruaru / Sertão e Agreste',
        regionCategory: 'Sertão',
        category: 'Artes Plásticas, Cerâmica e Design',
        photo: 'src/img/personalidades/zezinha-de-caruaru.jpg',
        actuation: 'Filha de Zé Caboclo e uma das maiores escultoras femininas do barro no Nordeste. Suas noivas, mães amamentando e cenas familiares sertanejas no Alto do Moura possuem uma delicadeza e força expressiva única no artesanato brasileiro.',
        highlights: ['Mestra do Alto do Moura', 'Mulheres na Cerâmica Popular', 'Tradição Escultórica de Caruaru'],
        references: [
            { label: 'Catálogo das Artes — Zezinha de Caruaru', url: 'https://catalogodasartes.com.br/' },
            { label: 'Prefeitura de Caruaru — Museu do Barro / Alto do Moura', url: 'https://www.caruaru.pe.gov.br/' }
        ]
    },
    {
        id: 'chico-pedrosa',
        name: 'Chico Pedrosa (Francisco Pedrosa dos Santos)',
        profile: 'Poeta, Cordelista, Ator e Declamador',
        region: 'Carnaíba / Sertão do Pajeú',
        regionCategory: 'Sertão',
        category: 'Literatura, Poesia, Educação e Ciências',
        photo: 'src/img/personalidades/chico-pedrosa.jpg',
        actuation: "Um dos mais aplaudidos poetas e declamadores populares do Brasil. Nascido no celeiro poético de Carnaíba, compôs e imortalizou poemas como 'Briga na Procissão' e 'Um Conto de Réis', levando a magia do conto rimado e do cordel a teatros de todo o país.",
        highlights: ['Briga na Procissão', 'Mestre da Declamação', 'Poeta de Carnaíba no Pajeú'],
        references: [
            { label: 'Secretaria de Cultura de Pernambuco — Chico Pedrosa', url: 'https://www.cultura.pe.gov.br/' },
            { label: 'Blog Falando Francamente — Chico Pedrosa de Carnaíba', url: 'https://blogfalandofrancamente.com/' }
        ]
    },
    {
        id: 'dona-santa',
        name: 'Rainha Dona Santa (Maria Júlia do Nascimento)',
        profile: 'Mulher Negra, Ialorixá e Lendária Rainha do Maracatu',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/dona-santa.jpg',
        actuation: 'Filha de africanos nascida no Pátio de Santa Cruz, foi a mais célebre soberana do Maracatu Nação Elefante e matriarca do baque virado no Recife. Ialorixá respeitada, utilizou os cortejos carnavalescos como escudo de resistência espiritual e cultural para a comunidade afro-pernambucana diante da violenta perseguição policial da primeira metade do século XX.',
        highlights: ['Rainha do Maracatu Elefante', 'Matriarca do Baque Virado', 'Resistência Afro-Brasileira'],
        references: [
            { label: 'Wikipedia — Dona Santa (Maracatu)', url: 'https://pt.wikipedia.org/wiki/Dona_Santa' },
            { label: 'Fundação Joaquim Nabuco — Maracatu de Baque Virado', url: 'https://www.fundaj.gov.br/' }
        ]
    },
    {
        id: 'selma-do-coco',
        name: 'Dona Selma do Coco (Selma Ferreira da Silva)',
        profile: 'Mulher Negra, Rainha do Coco e Patrimônio Vivo de PE',
        region: 'Vitória de Santo Antão / Olinda',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/selma-do-coco.jpg',
        actuation: "Conhecida nacionalmente como a 'Rainha do Coco', Selma começou cantando enquanto preparava tapiocas no Alto da Sé, em Olinda. Gravou clássicos que ganharam o Brasil e o mundo como 'A Rolinha', venceu o Prêmio Sharp de Música e levou o batuque do coco pernambucano aos palcos de festivais na Europa e nos Estados Unidos.",
        highlights: ['Rainha do Coco', 'Patrimônio Vivo de PE', 'Turnês Internacionais'],
        references: [
            { label: 'Wikipedia — Selma do Coco', url: 'https://pt.wikipedia.org/wiki/Selma_do_Coco' },
            { label: 'Fundarpe — Patrimônio Vivo de Pernambuco', url: 'https://www.fundarpe.pe.gov.br/patrimonio-vivo' }
        ]
    },
    {
        id: 'mae-beth-de-oxum',
        name: 'Mãe Beth de Oxum (Maria Elizabeth Santiago de Oliveira)',
        profile: 'Mulher Negra, Ialorixá, Percussionista e Patrimônio Vivo de PE',
        region: 'Olinda / RMR',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/mae-beth-de-oxum.jpg',
        actuation: 'Ialorixá do Terreiro Ilê Axé Oxum Karê, no bairro de Guadalupe em Olinda, foi a primeira mãe de santo a receber o título de Patrimônio Vivo de Pernambuco. Criadora da Sambada do Coco de Umbigada e comunicadora popular, uniu a tradição ancestral do tambor à apropriação de tecnologias livres pela juventude negra periférica.',
        highlights: ['Primeira Ialorixá Patrimônio Vivo', 'Coco de Umbigada', 'Comunicação Comunitária e Cultura Negra'],
        references: [
            { label: 'Fundarpe — Mãe Beth de Oxum — Primeira Ialorixá Patrimônio Vivo de PE', url: 'https://www.fundarpe.pe.gov.br/patrimonio-vivo' },
            { label: 'Diário de Pernambuco — Mãe Beth de Oxum', url: 'https://www.diariodepernambuco.com.br/' }
        ]
    },
    {
        id: 'dona-elda',
        name: "Dona Elda (Elda Ivo Viana - Mãe Elda d'Oxóssi)",
        profile: 'Mulher Negra, Sacerdotisa e Rainha do Maracatu Porto Rico',
        region: 'Recife / RMR',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/dona-elda.jpg',
        actuation: 'Sacerdotisa de matriz africana e rainha mais longeva da história do maracatu de baque virado, reinando por mais de 40 anos à frente da tradicional Nação Porto Rico, sediada na comunidade do Pina. Foi a última majestade formalmente coroada na histórica Igreja do Rosário dos Homens Pretos do Recife, sendo um símbolo de dignidade e autoridade comunitária.',
        highlights: ['40 Anos Rainha da Nação Porto Rico', 'Igreja dos Homens Pretos', 'Guardiã do Pina'],
        references: [
            { label: 'Wikipedia — Maracatu Nação Porto Rico', url: 'https://pt.wikipedia.org/wiki/Maracatu_Na%C3%A7%C3%A3o_Porto_Rico' },
            { label: 'Prefeitura do Recife — Maracatu Porto Rico', url: 'https://www.recife.pe.gov.br/' }
        ]
    },
    {
        id: 'maria-amelia-de-queiroz',
        name: 'Maria Amélia de Queiroz',
        profile: 'Mulher Branca Aliada, Liderança Abolicionista e Pioneira do Feminismo',
        region: 'Recife / Zona da Mata',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/maria-amelia-de-queiroz.jpg',
        actuation: 'Cofundadora da sociedade abolicionista Ave Libertas em 1884 no Recife, composta exclusivamente por mulheres para comprar cartas de alforria e abrigar escravizados foragidos. Rompeu as barreiras patriarcais do século XIX ao discursar em palanques públicos e no Teatro Santa Isabel defendendo a abolição e a emancipação da mulher.',
        highlights: ['Fundadora da Ave Libertas', 'Pioneira Oradora Abolicionista', 'Precursora do Feminismo em PE'],
        references: [
            { label: 'Fundação Joaquim Nabuco — Abolicionismo e a Ave Libertas', url: 'https://www.fundaj.gov.br/' },
            { label: 'Biblioteca Nacional Digital — Hemeroteca', url: 'https://bndigital.bn.gov.br/' }
        ]
    },
    {
        id: 'dona-marivalda',
        name: 'Dona Marivalda (Marivalda Maria dos Santos)',
        profile: 'Mulher Negra, Rainha de Maracatu e Guardiã da Ancestralidade',
        region: 'Igarassu / RMR',
        regionCategory: 'Zona da Mata / RMR',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/dona-marivalda.jpg',
        actuation: 'Majestade soberana da Nação do Maracatu Estrela Brilhante de Igarassu, fundada em 1824 e reconhecida como a agremiação de maracatu mais antiga do Brasil em atividade ininterrupta. Lidera cortejos sagrados, rituais e oficinas de percussão, mantendo viva a memória dos escravizados libertos no Litoral Norte.',
        highlights: ['Rainha do Maracatu Mais Antigo do Brasil', 'Estrela Brilhante de Igarassu', 'Matriarca do Litoral Norte'],
        references: [
            { label: 'Wikipedia — Maracatu Estrela Brilhante de Igarassu', url: 'https://pt.wikipedia.org/wiki/Maracatu_Estrela_Brilhante_de_Igarassu' },
            { label: 'Fundarpe — Maracatu Patrimônio Imaterial', url: 'https://www.fundarpe.pe.gov.br/' }
        ]
    },
    {
        id: 'cacique-chicao-xukuru',
        name: 'Cacique Chicão Xukuru (Francisco de Assis Araújo)',
        profile: 'Homem Indígena, Mártir da Terra e Patrono dos Povos Indígenas de PE',
        region: 'Pesqueira / Serra do Ororubá (Agreste)',
        regionCategory: 'Agreste',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/cacique-chicao-xukuru.jpg',
        actuation: 'Maior liderança indígena da história de Pernambuco, comandou a retomada pacífica das terras ancestrais do povo Xukuru do Ororubá na Serra do Ororubá, enfrentando o latifúndio e coronéis locais. Foi covardemente assassinado em 1998 e, pela Lei Estadual nº 17.002/2020, foi declarado oficialmente o Patrono dos Povos Indígenas de Pernambuco.',
        highlights: ['Patrono dos Povos Indígenas de PE', 'Retomadas da Serra do Ororubá', 'Encantado da Resistência Xukuru'],
        references: [
            { label: 'CIMI — Cacique Chicão — Patrono dos Povos Indígenas de PE', url: 'https://cimi.org.br/2020/05/cacique-chicao-patrono-povos-indigenas-pe/' },
            { label: 'Lei Estadual nº 17.002/2020 — ALEPE', url: 'https://legis.alepe.pe.gov.br/' }
        ]
    },
    {
        id: 'zenilda-xukuru',
        name: 'Dona Zenilda Xukuru (Zenilda Maria de Araújo)',
        profile: 'Mulher Indígena, Matriarca Xukuru e Guardiã da Agrobiodiversidade',
        region: 'Pesqueira / Serra do Ororubá (Agreste)',
        regionCategory: 'Agreste',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/zenilda-xukuru.jpg',
        actuation: 'Companheira de Cacique Chicão e mãe de Cacique Marcos, assumiu papel crucial na sustentação moral, espiritual e comunitária dos Xukuru do Ororubá após o assassinato do marido. Líder respeitada internacionalmente na defesa dos territórios originários e guardiã das sementes crioulas ancestrais e da medicina tradicional da mata.',
        highlights: ['Matriarca do Povo Xukuru', 'Guardiã das Sementes Crioulas', 'Liderança Feminina Indígena'],
        references: [
            { label: 'ISA — Instituto Socioambiental — Povo Xukuru', url: 'https://www.socioambiental.org/pt-br/noticias-socioambientais/xukuru' },
            { label: 'CIMI — Mulheres Indígenas de Pernambuco', url: 'https://cimi.org.br/' }
        ]
    },
    {
        id: 'marcos-xukuru',
        name: 'Cacique Marcos Xukuru (Marcos Luidson de Araújo)',
        profile: 'Homem Indígena, Líder Territorial e Primeiro Prefeito Indígena de Pesqueira',
        region: 'Pesqueira / Serra do Ororubá (Agreste)',
        regionCategory: 'Agreste',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/marcos-xukuru.jpg',
        actuation: 'Assumiu a liderança do povo Xukuru com apenas 21 anos após a morte de seu pai, Cacique Chicão, concluindo a histórica homologação de mais de 27 mil hectares de terra indígena. Enfrentou atentados e perseguições jurídicas, levando a causa Xukuru à vitória na Corte Interamericana de Direitos Humanos e elegendo-se prefeito de Pesqueira.',
        highlights: ['Cacique Geral Xukuru', 'Vitória na Corte Interamericana', 'Primeiro Prefeito Indígena de Pesqueira'],
        references: [
            { label: 'Corte Interamericana de Direitos Humanos — Caso Xukuru', url: 'https://www.corteidh.or.cr/docs/casos/articulos/seriec_346_por.pdf' },
            { label: 'ISA — Povo Xukuru do Ororubá', url: 'https://www.socioambiental.org/pt-br/mapas/mapa-dos-povos-indigenas-no-brasil/xukuru' }
        ]
    },
    {
        id: 'zeza-do-coco',
        name: 'Mestra Zeza do Coco (Maria José Lopes Isídio)',
        profile: 'Mulher Negra, Mestra Quilombola e Cantadora de Coco',
        region: 'Garanhuns / Quilombo Castainho (Agreste)',
        regionCategory: 'Agreste',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/zeza-do-coco.jpg',
        actuation: 'Matriarca cultural do histórico Quilombo Castainho, em Garanhuns, fundado por fugitivos de Palmares no século XVII. Como mestra do samba de coco de roda e puxadora de toadas de trabalho, preserva os cantos ancestrais de resistência, as danças tradicionais de terreiro e a transmissão da oralidade afro-quilombola.',
        highlights: ['Quilombo Castainho', 'Samba de Coco Tradicional', 'Memória e Oralidade Palmarina'],
        references: [
            { label: 'Fundação Cultural Palmares — Quilombo Castainho', url: 'http://www.palmares.gov.br/' },
            { label: 'ISA — Quilombos de Pernambuco', url: 'https://www.socioambiental.org/' }
        ]
    },
    {
        id: 'cida-lima',
        name: 'Mestra Cida Lima (Aparecida Maria da Silva Lima)',
        profile: 'Mulher, Mestra Artesã e Escultora Figurativa do Barro',
        region: 'Belo Jardim / Agreste',
        regionCategory: 'Agreste',
        category: 'Artes Plásticas, Cerâmica e Design',
        photo: 'src/img/personalidades/cida-lima.jpg',
        actuation: "Grande mestra artesã do Agreste pernambucano, célebre por suas monumentais 'cabeças de barro' e figuras humanas de impressionante expressividade e força telúrica. Integrante do polo ceramista do Rio Pedro de Souza em Belo Jardim, suas criações ganharam projeção em bienais e feiras de arte contemporânea do país.",
        highlights: ['Cabeças em Barro', 'Cerâmica de Belo Jardim', 'Arte Popular Contemporânea'],
        references: [
            { label: 'Catálogo das Artes — Mestra Cida Lima', url: 'https://catalogodasartes.com.br/' },
            { label: 'Fundarpe — Cerâmica do Agreste Pernambucano', url: 'https://www.fundarpe.pe.gov.br/' }
        ]
    },
    {
        id: 'ana-das-carrancas',
        name: 'Ana das Carrancas (Ana Leopoldina dos Santos - A Dama do Barro)',
        profile: 'Mulher Negra, Escultora, Ceramista e Patrimônio Vivo de PE',
        region: 'Ouricuri / Petrolina (Sertão do São Francisco)',
        regionCategory: 'Sertão',
        category: 'Artes Plásticas, Cerâmica e Design',
        photo: 'src/img/personalidades/ana-das-carrancas.jpg',
        actuation: 'Pioneira absoluta em transferir a tradição das carrancas míticas das embarcações de madeira do Rio São Francisco para a escultura em barro. Suas peças de cerâmica com olhos vazados — homenagem poética ao marido cego que preparava o barro — tornaram-se ícones internacionais da arte popular e a consagraram como Patrimônio Vivo do Estado.',
        highlights: ['A Dama do Barro', 'Patrimônio Vivo de PE', 'Carrancas em Cerâmica'],
        references: [
            { label: 'Mapa Cultural de PE - Ana das Carrancas (in memoriam)', url: 'https://www.mapacultural.pe.gov.br/agente/51/#info' },
            { label: 'Wikipedia — Ana das Carrancas', url: 'https://pt.wikipedia.org/wiki/Ana_das_Carrancas' }
        ]
    },
    {
        id: 'dorinha-pankara',
        name: 'Cacica Dorinha Pankará (Maria das Dores dos Santos Silva)',
        profile: 'Mulher Indígena, Primeira Cacica Pankará e Liderança Política',
        region: 'Carnaubeira da Penha / Serra do Arapuá (Sertão)',
        regionCategory: 'Sertão',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/dorinha-pankara.jpg',
        actuation: 'Primeira mulher a assumir o posto de cacique no povo Pankará, na Serra do Arapuá, quebrando tradições patriarcais sob a benção dos encantados da Jurema. Liderou a conquista da educação escolar indígena bilíngue e diferenciada na rede pública e tornou-se vereadora em Carnaubeira da Penha, sendo pioneira no legislativo municipal.',
        highlights: ['Primeira Mulher Cacique Pankará', 'Educação Escolar Indígena', 'Pioneira na Política Institucional'],
        references: [
            { label: 'CIMI — Povo Pankará da Serra do Arapuá', url: 'https://cimi.org.br/povo/pankara/' },
            { label: 'ISA — Pankará — Instituto Socioambiental', url: 'https://www.socioambiental.org/pt-br/mapas/mapa-dos-povos-indigenas-no-brasil/pankara' }
        ]
    },
    {
        id: 'juliana-pankararu',
        name: 'Dona Juliana Pankararu (Juliana Maria da Conceição)',
        profile: 'Mulher Indígena, Raizeira, Parteira Tradicional e Patrimônio Vivo de PE',
        region: 'Jatobá / Tacaratu (Sertão de Itaparica)',
        regionCategory: 'Sertão',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/juliana-pankararu.jpg',
        actuation: 'Nascida na Aldeia Saco dos Barros no Sertão pernambucano, foi diplomada Patrimônio Vivo de Pernambuco por seus saberes milenares como raizeira, parteira e rezadeira do povo Pankararu. Trouxe ao mundo centenas de crianças indígenas pelas técnicas ancestrais de acolhimento e domina a farmacopeia sagrada da caatinga.',
        highlights: ['Patrimônio Vivo de Pernambuco', 'Medicina Tradicional Indígena', 'Parteira da Aldeia Saco dos Barros'],
        references: [
            { label: 'Fundarpe — Dona Juliana Pankararu — Patrimônio Vivo de Pernambuco', url: 'https://www.fundarpe.pe.gov.br/patrimonio-vivo' },
            { label: 'ISA — Povo Pankararu', url: 'https://www.socioambiental.org/pt-br/povos/pankararu' }
        ]
    },
    {
        id: 'dida-pankararu',
        name: 'Dona Dida Pankararu (Maria das Dores da Silva)',
        profile: 'Mulher Indígena, Cantadeira Tradicional e Guardiã do Toré',
        region: 'Tacaratu / Sertão de Itaparica',
        regionCategory: 'Sertão',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/dida-pankararu.jpg',
        actuation: 'Voz ancestral de liderança das Cantadeiras do Povo Pankararu, coletivo indígena titulado como Patrimônio Vivo de Pernambuco em 2023. Guardiã dos cantos sagrados entoados durante o ritual do Toré e das festividades tradicionais do Umbu, preserva a oralidade e a espiritualidade viva dos povos originários do São Francisco.',
        highlights: ['Cantadeiras Pankararu', 'Patrimônio Vivo de PE', 'Cantos Sagrados do Toré'],
        references: [
            { label: 'Fundarpe — Cantadeiras Pankararu — Patrimônio Vivo 2023', url: 'https://www.fundarpe.pe.gov.br/patrimonio-vivo' },
            { label: 'ISA — Povo Pankararu', url: 'https://www.socioambiental.org/pt-br/povos/pankararu' }
        ]
    },
    {
        id: 'severina-lopes',
        name: 'Mestra Severina Lopes (Severina Lopes da Silva)',
        profile: 'Mulher Negra e Indígena, Matriarca do Coco e Mestra das Artes',
        region: 'Arcoverde / Sertão do Moxotó',
        regionCategory: 'Sertão',
        category: 'Música e Cultura Popular',
        photo: 'src/img/personalidades/severina-lopes.jpg',
        actuation: 'Matriarca do tradicional grupo Samba de Coco Irmãs Lopes de Arcoverde, descendente da linhagem histórica que introduziu o coco na Capital do Samba de Coco. Fundadora do Museu Ivo Lopes, foi contemplada pelo Prêmio Funarte Mestras e Mestres das Artes por preservar toadas de trabalho, o pastoril e o pisado sincopado da dança sertaneja.',
        highlights: ['Samba de Coco Irmãs Lopes', 'Fundadora do Museu Ivo Lopes', 'Prêmio Mestras das Artes'],
        references: [
            { label: 'Funarte — Prêmio Mestras e Mestres das Artes — Severina Lopes', url: 'https://www.funarte.gov.br/' },
            { label: 'Wikipedia — Samba de Coco', url: 'https://pt.wikipedia.org/wiki/Coco_(g%C3%AAnero_musical)' }
        ]
    },
    {
        id: 'neguinho-truka',
        name: 'Cacique Neguinho Truká (Aurivan dos Santos Barros)',
        profile: 'Homem Indígena, Mártir da Demarcação da Ilha de Assunção',
        region: 'Cabrobó / Ilha de Assunção (Sertão do São Francisco)',
        regionCategory: 'Sertão',
        category: 'Lideranças, História e Política',
        photo: 'src/img/personalidades/neguinho-truka.jpg',
        actuation: 'Liderança emblemática e mártir do povo Truká na Ilha de Assunção, no Rio São Francisco. Comandou com determinação incansável o processo de retomada de terras e autodemarcação contra invasores e o crime organizado, sendo assassinado em 2005 e tornando-se bandeira de luta e coragem para todos os povos indígenas do Nordeste.',
        highlights: ['Líder Mártir do Povo Truká', 'Ilha de Assunção', 'Luta pela Autodemarcação Indígena'],
        references: [
            { label: 'ISA — Povo Truká — Instituto Socioambiental', url: 'https://www.socioambiental.org/pt-br/povos/truka' },
            { label: 'CIMI — Violência Contra os Povos Indígenas', url: 'https://cimi.org.br/violencia-contra-os-povos-indigenas/' }
        ]
    }
];
