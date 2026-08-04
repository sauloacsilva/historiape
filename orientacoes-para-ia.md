# Orientações para IA criar conteúdo do Atlas de História de Pernambuco

Este documento deve ser entregue, total ou parcialmente, a qualquer IA generativa (LLM) que for produzir conteúdo para o projeto **Atlas Interativo — História de Pernambuco**.

O objetivo é obter textos historicamente responsáveis, em português do Brasil, com linguagem clara para estudantes dos anos finais do Ensino Fundamental, e já organizados para inclusão no site.

## 1. Instrução-base para qualquer conteúdo

Copie a instrução abaixo antes de pedir um conteúdo a uma IA:

```text
Você é uma pessoa pesquisadora e redatora especializada em História de Pernambuco e educação básica. Crie conteúdo para o Atlas Interativo — História de Pernambuco.

Escreva em português do Brasil, com clareza, precisão histórica e linguagem adequada para estudantes de 11 a 15 anos. Não invente datas, autores, instituições, citações, links, personagens ou fontes. Quando um dado não puder ser confirmado, sinalize a incerteza em vez de apresentar uma afirmação como fato.

Valorize povos indígenas, populações negras, mulheres, trabalhadores e outros grupos sociais com linguagem respeitosa, sem estereótipos nem termos discriminatórios. Contextualize violências históricas, como escravização, colonialismo e repressão, de modo direto e apropriado para fins educativos.

Use sempre que fizer sentido as dimensões histórica econômica, social, étnica, política, cultural e logística. Relacione o passado às marcas que permanecem em Pernambuco hoje.

Entregue somente o conteúdo solicitado no formato pedido. Não explique programação, não use Markdown se a solicitação pedir código TypeScript e não crie campos que não foram solicitados.
```

## 2. Regras editoriais

- Dê preferência a frases curtas e parágrafos objetivos.
- Explique palavras difíceis na primeira vez em que aparecerem.
- Diferencie fato comprovado, interpretação historiográfica e tradição popular.
- Indique fontes institucionais ou bibliográficas reais sempre que forem solicitadas.
- Não use fontes, links ou referências que você não consiga confirmar.
- Não trate grupos sociais como homogêneos. Por exemplo, informe o povo indígena, comunidade ou contexto quando houver essa informação.
- Use `escravizado` ou `pessoa escravizada` em vez de termos que naturalizem a escravidão.
- Respeite grafias, acentos e nomes próprios.
- Evite excesso de adjetivos e linguagem sensacionalista.

## 3. Tipos de conteúdo do site

| Tipo de conteúdo | Arquivo de destino | Finalidade |
| --- | --- | --- |
| Artigo | `src/data/articlesData.ts` | Explicar um processo, período ou tema histórico em profundidade. |
| Personalidade | Dentro de um artigo, em `personalidadesEEventos` | Apresentar uma pessoa e seu impacto histórico. |
| Evento | `src/data/timelineEventsData.ts` | Registrar um acontecimento datado da linha do tempo. |
| Região | `src/data/regionsData.ts` | Descrever uma área de Pernambuco e suas características. |
| Palavra-chave | `src/data/keywordsData.ts` | Definir um termo e ligá-lo a artigos e eventos. |
| Pergunta de quiz | `src/data/quizData.ts` | Criar uma atividade objetiva de revisão. |
| Imagem | `public/imagens/` e referência no dado correspondente | Ilustrar artigo ou personalidade com acessibilidade e informação de origem. |

## 4. Como pedir um artigo novo

### Prompt para a IA

```text
Usando as instruções-base deste documento, crie um novo artigo sobre: [TEMA].

O artigo deve cobrir o período [PERÍODO], relacionar-se às regiões [REGIÕES] e usar as dimensões [DIMENSÕES].

Produza o resultado como um único objeto TypeScript compatível com `ARTICLES_DATA`. Use um `id` único, sem acentos e com palavras separadas por hífen. Preencha todos os campos do modelo abaixo. Use 1 a 3 personalidades realmente relevantes. Inclua de 2 a 4 links externos, somente de fontes reais e confiáveis.

Modelo obrigatório:
[COLE O MODELO DA PRÓXIMA SEÇÃO]
```

### Modelo de artigo

```ts
{
  id: 'tema-em-minusculas',
  title: 'Título do artigo',
  subtitle: 'Resumo curto e convidativo do tema.',
  period: 'Período histórico',
  century: 'Séc. XX',
  dimensions: ['cultural', 'social'],
  regionIds: ['rmr'],
  keywords: ['Termo 1', 'Termo 2'],
  heroImageDescription: 'Descrição objetiva e acessível da imagem sugerida.',
  heroImageUrl: '/imagens/nome-da-imagem.jpg',
  contextoHistorico: {
    antecedentes: 'Causas e contexto anterior.',
    desenvolvimento: 'Explicação do processo, fato ou período.',
    desdobramentos: 'Consequências e relações com o presente.'
  },
  relacoesProgressividade: {
    periodoAnterior: 'Ligação com o período anterior.',
    periodoPosterior: 'Ligação com o período posterior.'
  },
  personalidadesEEventos: [
    {
      name: 'Nome da personalidade',
      role: 'Papel histórico',
      period: 'Período de atuação ou vida',
      bio: 'Biografia breve e contextualizada.',
      impact: 'Contribuição ou impacto histórico.',
      imageUrl: '/imagens/nome-da-personalidade.jpg'
    }
  ],
  influenciasContemporaneas: {
    patrimonioEMuseus: ['Lugar de memória ou patrimônio real'],
    legadoSocialECultural: 'Como esse tema permanece na sociedade atual.',
    referenciasVisuaisEBibliograficas: ['Referência real, completa quando possível.']
  },
  linksExternos: [
    {
      title: 'Título real da fonte',
      source: 'Instituição responsável',
      url: 'https://endereco-real-da-fonte.org',
      type: 'artigo'
    }
  ]
},
```

### Conferência do artigo pela IA

Antes de responder, a IA deve verificar:

- `id` sem acentos, espaços ou repetição;
- dimensões apenas entre `economico`, `social`, `etnico`, `politico`, `cultural` e `logistico`;
- `regionIds` existentes no projeto;
- palavras-chave que poderão ser criadas no dicionário;
- fontes, URLs e referências reais;
- texto de `heroImageDescription` descritivo, sem começar por “imagem de”.

Se não houver imagem disponível, a IA deve omitir `heroImageUrl`, mas manter `heroImageDescription`.

## 5. Como pedir uma personalidade

### Prompt para a IA

```text
Usando as instruções-base deste documento, crie uma ficha de personalidade para [NOME], relacionada ao tema [TEMA].

Devolva somente um objeto TypeScript para ser inserido em `personalidadesEEventos`. Escreva uma biografia curta, explique a relevância histórica e não atribua ações, frases ou datas sem confirmação. Inclua `imageUrl` apenas se for fornecido um caminho válido de imagem.
```

### Modelo de personalidade

```ts
{
  name: 'Nome completo ou nome histórico',
  role: 'Função, ocupação ou papel histórico',
  period: 'Período de vida ou atuação',
  bio: 'Biografia breve, com contexto histórico.',
  impact: 'Importância para Pernambuco ou para o tema.',
  imageUrl: '/imagens/nome-da-personalidade.jpg'
}
```

Não inclua `imageUrl` se não houver uma imagem já inserida em `public/imagens/`.

## 6. Como pedir um evento para a linha do tempo

### Prompt para a IA

```text
Usando as instruções-base deste documento, crie um evento da linha do tempo sobre [EVENTO].

Devolva somente um objeto TypeScript compatível com `TIMELINE_EVENTS`. Informe data e ano apenas quando confirmados. Use um `id` numérico único indicado como [NOVO_ID]. Relacione o evento a uma região existente e escolha somente dimensões permitidas.
```

### Modelo de evento

```ts
{
  id: 99,
  dateStr: 'Dia, mês e ano, quando confirmado',
  year: 1900,
  title: 'Nome do acontecimento',
  regionId: 'rmr',
  dimensions: ['politico', 'social'],
  summary: 'Resumo curto do que aconteceu.',
  detailedContext: 'Explicação contextualizada das causas, do acontecimento e de suas consequências.',
  keyFigures: ['Pessoa, grupo ou instituição relacionada'],
  keywords: ['Palavra-chave relacionada'],
  antecedentEventId: 98,
  subsequentEventId: 100
},
```

`antecedentEventId` e `subsequentEventId` são opcionais. Nunca invente esses números: use-os apenas quando os IDs dos eventos relacionados forem informados.

## 7. Como pedir uma palavra-chave

### Prompt para a IA

```text
Usando as instruções-base deste documento, crie uma palavra-chave para o termo [TERMO].

Devolva somente uma entrada TypeScript para `KEYWORDS_DICTIONARY`. A chave e `term` devem ser exatamente iguais ao termo usado nos artigos e eventos. Use os IDs fornecidos: artigos [IDS_DE_ARTIGOS] e eventos [IDS_DE_EVENTOS].
```

### Modelo de palavra-chave

```ts
'Termo': {
  id: 'termo-sem-acentos',
  term: 'Termo',
  category: 'conceito',
  definition: 'Definição clara, curta e contextualizada.',
  relatedArticleIds: ['id-do-artigo'],
  relatedEventIds: [99]
},
```

Categorias permitidas: `conceito`, `evento`, `personalidade`, `lugar` e `etnia`.

## 8. Como pedir atualização de uma região

### Prompt para a IA

```text
Usando as instruções-base deste documento, atualize o conteúdo editorial da região [NOME DA REGIÃO] do Atlas.

Devolva somente os campos que serão substituídos em `REGIONS_DATA`: cidades, papel histórico, base econômica, raízes étnicas, destaques culturais, eixo logístico e eventos em destaque. Não altere `id`, `svgPath`, `xPosition`, cores ou outras informações de desenho do mapa.

Use somente IDs de eventos já existentes: [LISTA_DE_IDS].
```

### Campos editoriais de região

```ts
{
  cities: ['Cidade 1', 'Cidade 2'],
  historicalRole: 'Papel histórico da região.',
  economicBase: 'Atividades econômicas relevantes em perspectiva histórica.',
  ethnicRoots: 'Povos e matrizes formadoras, com linguagem respeitosa.',
  culturalHighlights: ['Manifestação cultural 1', 'Manifestação cultural 2'],
  logisticsHub: 'Explicação do papel de circulação, transporte ou integração territorial.',
  featuredEvents: [1, 99]
}
```

## 9. Como pedir uma pergunta de quiz

### Prompt para a IA

```text
Usando as instruções-base deste documento, crie uma questão de quiz sobre [TEMA].

Devolva somente um objeto TypeScript compatível com `QUIZ_QUESTIONS`. A pergunta deve avaliar compreensão histórica, ter quatro alternativas plausíveis e apenas uma resposta correta. Informe o `correctIndex` corretamente: primeira alternativa = 0, segunda = 1, terceira = 2 e quarta = 3. Explique a resposta em até duas frases.
```

### Modelo de pergunta

```ts
{
  id: 99,
  question: 'Pergunta objetiva e clara?',
  options: [
    'Alternativa A',
    'Alternativa B',
    'Alternativa C',
    'Alternativa D'
  ],
  correctIndex: 1,
  explanation: 'Explicação da alternativa correta e do contexto histórico.',
  dimension: 'cultural',
  relatedYear: 1900
},
```

Não use pegadinhas, alternativas ofensivas ou questões que dependam de decorar datas isoladas sem contexto.

## 10. Como pedir sugestões de imagens

### Prompt para a IA

```text
Sugira uma imagem histórica ou contemporânea para ilustrar o conteúdo [TEMA] no Atlas de História de Pernambuco.

Não gere uma imagem nem invente um endereço de arquivo. Entregue: (1) uma descrição visual objetiva para `heroImageDescription`; (2) palavras de busca; (3) tipos de acervo ou instituições onde a imagem pode ser procurada; (4) cuidados de licença e atribuição. A sugestão deve evitar estereótipos e respeitar pessoas e comunidades retratadas.
```

Depois que uma imagem for selecionada e salva em `public/imagens/`, o editor deve definir manualmente um nome de arquivo, por exemplo `/imagens/frevo-recife.jpg`, e incluí-lo em `heroImageUrl` ou `imageUrl`.

## 11. Solicitação de revisão e melhoria

Antes de inserir conteúdo gerado diretamente no projeto, use este prompt de revisão:

```text
Revise o conteúdo abaixo para uso no Atlas Interativo — História de Pernambuco. Verifique precisão factual, adequação para estudantes de 11 a 15 anos, linguagem inclusiva, clareza, coerência temporal, acentuação e compatibilidade com o modelo TypeScript. Não invente correções factuais. Liste primeiro os problemas encontrados; depois entregue uma versão corrigida somente se houver dados suficientes para isso.

[COLE AQUI O CONTEÚDO]
```

## 12. Limites importantes

Uma IA pode ajudar a redigir e organizar o material, mas não substitui revisão humana, consulta a fontes e responsabilidade editorial. Toda publicação deve ser conferida por alguém responsável pelo projeto, especialmente quando tratar de datas, disputas historiográficas, comunidades tradicionais, pessoas vivas, povos indígenas, populações quilombolas ou temas de violência histórica.
