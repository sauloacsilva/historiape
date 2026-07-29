import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual foi o principal produto agrícola ("ouro branco") que impulsionou a economia e o povoamento de Pernambuco no século XVI?',
    options: ['Algodão', 'Cana-de-açúcar', 'Café', 'Cacau'],
    correctIndex: 1,
    explanation: 'O açúcar produzido nos engenhos com tração animal e hidráulica tornou Pernambuco a capitania mais rica do Brasil colonial.',
    dimension: 'economico',
    relatedYear: 1516
  },
  {
    id: 2,
    question: 'Quem foi o primeiro donatário que tomou posse da Capitania de Pernambuco em 1535, apelidando-a de "Nova Lusitânia"?',
    options: ['Maurício de Nassau', 'Duarte Coelho', 'Jerônimo de Albuquerque', 'Vicente Yáñez Pinzón'],
    correctIndex: 1,
    explanation: 'Duarte Coelho recebeu a doação de D. João III em 1534 e desembarcou em 1535 fundando Olinda e Igarassu.',
    dimension: 'politico',
    relatedYear: 1534
  },
  {
    id: 3,
    question: 'Em que cidade pernambucana foi construída a "Kahal Zur Israel" em 1641, considerada a primeira sinagoga das Américas?',
    options: ['Olinda', 'Igarassu', 'Recife', 'Goiana'],
    correctIndex: 2,
    explanation: 'A Kahal Zur Israel foi fundada na Rua dos Judeus (atual Rua do Bom Jesus) no Recife durante o governo de Maurício de Nassau.',
    dimension: 'etnico',
    relatedYear: 1641
  },
  {
    id: 4,
    question: 'A Revolução Pernambucana de 6 de março de 1817 destaca-se na história do Brasil por ter sido a única revolta emancipacionista que:',
    options: [
      'Foi apoiada inteiramente pela Coroa Portuguesa',
      'Tomou o poder e proclamou a República por 74 dias',
      'Ocorreu sem qualquer participação de religiosos',
      'Terminou com a transferência da capital para Salvador'
    ],
    correctIndex: 1,
    explanation: 'A Revolução de 1817 depôs o governador enviado por D. João VI e criou um Governo Provisório Republicano que durou 74 dias e deu origem à atual bandeira de Pernambuco.',
    dimension: 'politico',
    relatedYear: 1817
  },
  {
    id: 5,
    question: 'Qual importante líder cívico e religioso carmelita dirigiu o jornal "Typhis Pernambucano" e foi executado como mártir da Confederação do Equador em 1824?',
    options: ['Frei Caneca', 'Padre Cícero', 'Zumbi dos Palmares', 'Chico Science'],
    correctIndex: 0,
    explanation: 'Frei Caneca (Joaquim do Amor Divino Rabelo) foi o intelectual e líder da Confederação do Equador contra o absolutismo imperial de D. Pedro I.',
    dimension: 'politico',
    relatedYear: 1824
  },
  {
    id: 6,
    question: 'O Movimento Manguebeat, surgido no Recife nos anos 1990 com o manifesto "Caranguejos com Cérebro", combinou ritmos tradicionais como o Maracatu com:',
    options: ['Bossa Nova e Sertanejo', 'Rock, Hip-Hop e Música Eletrônica', 'Música Clássica e Ópera', 'Samba de Roda e Pagode'],
    correctIndex: 1,
    explanation: 'Liderado por Chico Science & Nação Zumbi e Fred Zero Quatro, o Manguebeat fincou uma "antena parabólica na lama" do manguezal, unindo o som dos tambores a ritmos universais.',
    dimension: 'cultural',
    relatedYear: 1992
  },
  {
    id: 7,
    question: 'A Guerra dos Mascates (1710-1711) foi motivada pela rivalidade entre as elites de quais duas cidades pernambucanas?',
    options: ['Olinda (Senhores de Engenho) e Recife (Comerciantes Portugueses)', 'Caruaru e Garanhuns', 'Igarassu e Itamaracá', 'Petrolina e Juazeiro'],
    correctIndex: 0,
    explanation: 'Os aristocratas rurais de Olinda, endividados, revoltaram-se contra a emancipação política e a elevação do Recife à categoria de Vila.',
    dimension: 'social',
    relatedYear: 1710
  },
  {
    id: 8,
    question: 'Que importante marco logístico do Recife, inaugurado em 28 de fevereiro de 1643 por Maurício de Nassau, é considerado a primeira ponte de grande porte da América Latina?',
    options: ['Ponte Buarque de Macedo', 'Ponte Maurício de Nassau', 'Ponte Limoeiro', 'Ponte de Santa Isabel'],
    correctIndex: 1,
    explanation: 'A Ponte Maurício de Nassau ligou o Recife à ilha de Antônio Vaz (Cidade Maurícia), ocasião em que se encenou a famosa lenda do Boi Voador.',
    dimension: 'logistico',
    relatedYear: 1643
  }
];
