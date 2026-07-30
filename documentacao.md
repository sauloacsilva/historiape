# Manual de atualização do Atlas de História de Pernambuco

Este guia explica como atualizar o conteúdo do site mesmo para quem não trabalha com programação. Ele descreve onde cada informação está guardada, como editar com segurança e como publicar as mudanças.

> **Antes de começar:** faça uma cópia dos arquivos que pretende alterar. Sempre trabalhe com um editor de texto que preserve a acentuação, como o Visual Studio Code ou o editor do GitHub no navegador. Não use Word para abrir estes arquivos.

## 1. O que é este projeto

O projeto é um site educativo interativo sobre a História de Pernambuco. Ele possui:

- mapa por regiões;
- linha do tempo;
- artigos temáticos;
- índice de palavras-chave;
- quiz;
- guia de estudos;
- pesquisa por texto e filtros por dimensão histórica.

O site é publicado automaticamente no **GitHub Pages**: quando uma alteração chega à ramificação `main` do repositório, o GitHub monta e publica uma nova versão.

## 2. Conceitos mínimos para editar com segurança

Os textos do site ficam em arquivos com extensão `.ts`, dentro da pasta `src/data`. Apesar do nome técnico, esses arquivos funcionam como fichas organizadas de conteúdo.

Algumas regras importantes:

- Textos ficam sempre entre aspas simples: `'Exemplo de texto'`.
- Cada bloco de informação termina em vírgula, exceto o último antes de fechar uma lista ou um bloco.
- Não apague chaves `{ }`, colchetes `[ ]`, aspas ou vírgulas que já existam, a menos que esteja seguindo um exemplo completo.
- Use caracteres normais do português (á, ç, ã). Salve o arquivo em **UTF-8**.
- Não altere os nomes técnicos à esquerda dos dois-pontos, como `title:` ou `contextoHistorico:`. Altere somente o conteúdo entre aspas à direita.

Depois de qualquer alteração, confira se o texto aparece completo entre as aspas e se nenhuma linha ficou com uma aspa faltando.

## 3. Onde cada tipo de conteúdo é editado

| O que deseja mudar | Arquivo |
| --- | --- |
| Artigos completos | `src/data/articlesData.ts` |
| Eventos da linha do tempo | `src/data/timelineEventsData.ts` |
| Regiões apresentadas no mapa | `src/data/regionsData.ts` |
| Palavras-chave e definições | `src/data/keywordsData.ts` |
| Perguntas e respostas do quiz | `src/data/quizData.ts` |
| Nomes e cores das dimensões históricas | `src/data/dimensionsData.ts` |
| Aparência e estrutura do site | `src/components/` e `src/index.css` |

Para atualizar o conteúdo editorial, normalmente você só precisará dos cinco primeiros arquivos da tabela.

## 4. Como editar um artigo existente

Abra `src/data/articlesData.ts`. Cada artigo começa com `{` e tem um identificador, por exemplo:

```ts
{
  id: 'capitania-e-acucar',
  title: '...',
  // demais informações do artigo
},
```

Use a busca do editor (`Ctrl + F`) pelo título ou pelo `id` para localizar o artigo desejado. Os campos têm este significado:

| Campo | O que aparece no site |
| --- | --- |
| `id` | Identificador interno do artigo. Não o altere depois da publicação, pois palavras-chave podem apontar para ele. |
| `title` | Título principal. |
| `subtitle` | Texto curto logo abaixo do título. |
| `period` | Período histórico mostrado no cartão do artigo. |
| `century` | Século ou faixa de séculos. |
| `dimensions` | Temas históricos relacionados ao artigo. |
| `regionIds` | Regiões do mapa relacionadas. |
| `keywords` | Palavras que aparecem como etiquetas clicáveis. |
| `heroImageDescription` | Descrição da imagem de destaque, usada como texto alternativo para acessibilidade. |
| `heroImageUrl` | Endereço opcional do arquivo da imagem de destaque do artigo. |
| `contextoHistorico` | Antecedentes, desenvolvimento e desdobramentos. |
| `relacoesProgressividade` | Ligação com o período anterior e posterior. |
| `personalidadesEEventos` | Pessoas e seus legados. |
| `influenciasContemporaneas` | Patrimônio, legado e referências. |
| `linksExternos` | Fontes que o visitante pode abrir. |

### Exemplo: mudar somente um título

Localize esta parte:

```ts
title: 'Título atual',
```

e substitua apenas o texto dentro das aspas:

```ts
title: 'Novo título do artigo',
```

### Dimensões permitidas

Em `dimensions`, utilize apenas estes nomes, todos em minúsculas:

```ts
['economico', 'social', 'etnico', 'politico', 'cultural', 'logistico']
```

Exemplo:

```ts
dimensions: ['politico', 'cultural'],
```

### Regiões permitidas

Use os identificadores que já estão em `src/data/regionsData.ts`, no campo `id` de cada região. Os identificadores atuais incluem `rmr`, `zona-da-mata`, `agreste` e `sertao-central-pajeu`. Copie o identificador exatamente como ele aparece no arquivo.

### Acrescentar uma personalidade

Dentro de `personalidadesEEventos: [ ... ]`, copie um bloco existente e preencha os textos:

```ts
{
  name: 'Nome da pessoa',
  role: 'Papel histórico',
  period: 'Ano inicial - Ano final',
  bio: 'Resumo biográfico, em linguagem clara.',
  impact: 'Qual foi sua importância para a história de Pernambuco.'
},
```

Deixe uma vírgula depois do bloco anterior. O último bloco da lista não precisa de vírgula.

### Acrescentar patrimônio, referência ou link

Para patrimônio ou referências, inclua um novo texto entre aspas em suas respectivas listas. Exemplo:

```ts
patrimonioEMuseus: [
  'Local já existente',
  'Novo museu ou lugar de memória'
],
```

Para adicionar uma fonte externa, acrescente este bloco em `linksExternos`:

```ts
{
  title: 'Nome da página ou do documento',
  source: 'Nome da instituição',
  url: 'https://endereco-completo-da-fonte.org',
  type: 'artigo'
}
```

Em `type`, escolha apenas um: `base_dados`, `documento`, `artigo` ou `patrimonio`.

Use links de instituições ou fontes confiáveis. Cole sempre o endereço completo, começando com `https://`.

## 5. Como criar um novo artigo

Em `src/data/articlesData.ts`, copie um artigo inteiro, do `{` inicial ao `},` final, e cole-o antes do último `];` do arquivo. Em seguida, substitua todo o conteúdo de exemplo.

O novo `id` deve ser único, sem espaços, sem acentos e com palavras separadas por hífen. Exemplo: `historia-do-frevo`.

Modelo completo:

```ts
{
  id: 'historia-do-frevo',
  title: 'A História do Frevo',
  subtitle: 'Um exemplo de artigo novo',
  period: 'Século XX',
  century: 'Séc. XX',
  dimensions: ['cultural', 'social'],
  regionIds: ['rmr'],
  keywords: ['Frevo'],
  heroImageDescription: 'Descrição objetiva da imagem para acessibilidade.',
  heroImageUrl: '/imagens/historia-do-frevo.jpg',
  contextoHistorico: {
    antecedentes: 'O que ocorreu antes.',
    desenvolvimento: 'O que aconteceu no período.',
    desdobramentos: 'Consequências e continuidades.'
  },
  relacoesProgressividade: {
    periodoAnterior: 'Relação com o período anterior.',
    periodoPosterior: 'Relação com o período posterior.'
  },
  personalidadesEEventos: [
    {
      name: 'Nome da personalidade',
      role: 'Papel histórico',
      period: 'Período',
      bio: 'Biografia breve.',
      impact: 'Impacto histórico.'
    }
  ],
  influenciasContemporaneas: {
    patrimonioEMuseus: ['Um local de memória'],
    legadoSocialECultural: 'Legado que permanece na atualidade.',
    referenciasVisuaisEBibliograficas: ['Referência bibliográfica ou documental.']
  },
  linksExternos: [
    {
      title: 'Título da fonte',
      source: 'Instituição responsável',
      url: 'https://exemplo.org',
      type: 'artigo'
    }
  ]
},
```

Depois de criar o artigo, siga a seção de palavras-chave para que as etiquetas clicáveis funcionem corretamente.

## 6. Como atualizar a linha do tempo

Abra `src/data/timelineEventsData.ts`. Cada evento tem a seguinte estrutura:

```ts
{
  id: 99,
  dateStr: '10 de março de 1900',
  year: 1900,
  title: 'Nome do acontecimento',
  regionId: 'rmr',
  dimensions: ['politico'],
  summary: 'Resumo curto exibido na linha do tempo.',
  detailedContext: 'Explicação completa do acontecimento.',
  keyFigures: ['Pessoa ou grupo relacionado'],
  keywords: ['Termo relacionado']
},
```

Ao criar um evento:

1. Escolha um `id` numérico que ainda não exista. Use a busca por `id:` para conferir.
2. Preencha `year` somente com o ano em números; ele é usado para ordenar a linha do tempo.
3. Preencha `dateStr` com a data que o visitante deve ler.
4. Use um `regionId` válido e dimensões permitidas.
5. `antecedentEventId` e `subsequentEventId` são opcionais. Só os preencha quando quiser ligar o evento a outro evento pelo seu número de `id`.

Para o evento também aparecer como destaque na região do mapa, abra `src/data/regionsData.ts`, localize a região correspondente e inclua o número do evento em `featuredEvents`. Exemplo: `featuredEvents: [1, 2, 99]`.

## 7. Como atualizar regiões do mapa

Abra `src/data/regionsData.ts`. Cada região contém o nome, cidades, papel histórico, base econômica, raízes étnicas, destaques culturais e eventos relacionados.

Para apenas corrigir ou atualizar um texto, altere o conteúdo entre aspas. Para incluir uma cidade ou destaque cultural, acrescente outro item entre aspas na lista correspondente:

```ts
cities: ['Recife', 'Olinda', 'Nova cidade'],
culturalHighlights: ['Frevo', 'Novo destaque cultural'],
```

Evite mudar `id`, `svgPath`, `xPosition`, `colorPastel` ou `accentColor`, pois eles controlam a identificação e o desenho/aparência da região no mapa.

## 8. Como criar e relacionar palavras-chave

As palavras-chave formam o índice clicável do site. Elas ficam em `src/data/keywordsData.ts`.

Há duas etapas:

1. Coloque a palavra no artigo ou evento, por exemplo: `keywords: ['Frevo']`.
2. Crie a definição da mesma palavra em `src/data/keywordsData.ts`.

Modelo:

```ts
'Frevo': {
  id: 'frevo',
  term: 'Frevo',
  category: 'conceito',
  definition: 'Definição curta e clara do termo.',
  relatedArticleIds: ['historia-do-frevo'],
  relatedEventIds: [99]
},
```

Em `category`, use um destes valores: `conceito`, `evento`, `personalidade`, `lugar` ou `etnia`.

O texto antes dos dois-pontos (`'Frevo':`) deve ser exatamente igual à palavra usada no artigo ou evento, inclusive maiúsculas, acentos e espaços. Os valores em `relatedArticleIds` e `relatedEventIds` devem existir nos arquivos de artigos e eventos.

## 9. Como atualizar o quiz

Abra `src/data/quizData.ts`. Cada pergunta tem este formato:

```ts
{
  id: 9,
  question: 'Enunciado da pergunta?',
  options: ['Alternativa A', 'Alternativa B', 'Alternativa C', 'Alternativa D'],
  correctIndex: 1,
  explanation: 'Explicação exibida após a resposta.',
  dimension: 'cultural',
  relatedYear: 1900
},
```

`correctIndex` indica a posição da resposta certa e começa em zero:

| Posição da alternativa | Valor de `correctIndex` |
| --- | --- |
| Primeira | `0` |
| Segunda | `1` |
| Terceira | `2` |
| Quarta | `3` |

Cada pergunta deve ter um `id` numérico único. Mantenha quatro alternativas para preservar a apresentação atual do quiz.

## 10. Como inserir imagens

Os artigos podem ter uma imagem de destaque e as personalidades podem ter uma foto ou ilustração. A imagem só aparece quando o respectivo endereço é preenchido. A apresentação é limpa: a imagem não recebe caixa, borda, linha, sombra ou cantos arredondados.

Coloque os arquivos de imagem na pasta `public/imagens/`, com nomes simples, em minúsculas e separados por hífen, por exemplo:

```text
public/imagens/frevo.jpg
public/imagens/zumbi-dos-palmares.jpg
```

Prefira imagens em `.webp`, `.jpg` ou `.png`, com boa qualidade, sem texto pequeno embutido e com direitos de uso confirmados. Para uso na internet, imagens entre 1200 e 1600 pixels de largura costumam ser suficientes.

### Imagem de destaque de um artigo

Em `src/data/articlesData.ts`, inclua `heroImageUrl` logo após `heroImageDescription`:

```ts
heroImageDescription: 'Zumbi dos Palmares em ilustração histórica.',
heroImageUrl: '/imagens/zumbi-dos-palmares.jpg',
```

`heroImageDescription` é obrigatório e deve descrever o que a imagem mostra. Ele é importante para leitores de tela e também aparece caso a imagem não possa ser carregada.

### Imagem de uma personalidade

Dentro do bloco da pessoa, em `personalidadesEEventos`, acrescente:

```ts
imageUrl: '/imagens/zumbi-dos-palmares.jpg',
```

Exemplo completo:

```ts
{
  name: 'Zumbi dos Palmares',
  role: 'Líder do Quilombo dos Palmares',
  period: '1655 - 1695',
  bio: 'Biografia breve.',
  impact: 'Impacto histórico.',
  imageUrl: '/imagens/zumbi-dos-palmares.jpg'
}
```

Não é preciso preencher imagem para todos os conteúdos: se `heroImageUrl` ou `imageUrl` não for informado, o site mantém o texto normalmente.

Antes de usar imagens de terceiros, registre a origem, autoria, licença e data de acesso. Dê preferência a acervos públicos, instituições culturais e imagens com licença adequada.

## 11. Como testar antes de publicar

### Opção mais simples: revisão visual do arquivo

Se estiver editando pelo GitHub, use a visualização das alterações antes de confirmar. Confira especialmente aspas, vírgulas, nomes de identificadores e URLs.

### Teste completo no computador

Esta opção exige que o Node.js esteja instalado e é recomendada com auxílio de alguém técnico:

```text
npm install
npm run dev
```

O segundo comando abre o site localmente no endereço informado na tela. Navegue até o artigo, evento ou quiz alterado e confirme o resultado.

Para uma conferência automática da estrutura, execute:

```text
npm run lint
```

Para gerar a versão que será publicada, execute:

```text
npm run build
```

Se aparecer um erro, não publique até corrigir. Na maior parte dos casos, o problema será uma aspa, vírgula, chave ou colchete ausente perto da última alteração.

## 12. Como publicar pelo GitHub, sem usar terminal

1. Entre no repositório no GitHub e abra o arquivo que deseja editar.
2. Clique no ícone de lápis (**Edit this file**).
3. Faça a alteração seguindo este manual.
4. Desça até o fim da página, escreva uma descrição breve, como `Atualiza artigo sobre o Frevo`.
5. Escolha salvar diretamente na ramificação `main` apenas se a alteração já tiver sido revisada. Caso contrário, crie uma nova ramificação e peça revisão.
6. Clique em **Commit changes**.

O fluxo de publicação em `.github/workflows/deploy-pages.yml` detecta mudanças enviadas à `main`, instala as dependências, gera o site e o envia ao GitHub Pages. A atualização pode levar alguns minutos. No repositório, a aba **Actions** permite acompanhar o andamento; uma marca verde indica que a publicação terminou corretamente.

## 13. Tecnologias e linguagens usadas

O projeto usa as seguintes tecnologias:

| Tecnologia | Para que serve |
| --- | --- |
| **TypeScript** | Linguagem dos arquivos de conteúdo e da lógica do site. É uma forma mais controlada de JavaScript. |
| **React** | Organiza as telas interativas: mapa, artigos, quiz e janelas. |
| **HTML** | Estrutura básica da página exibida pelo navegador. |
| **CSS / Tailwind CSS** | Cores, tamanhos, espaçamentos e aparência visual. |
| **Vite** | Monta a versão rápida do site para teste e publicação. |
| **Node.js** | Ambiente usado no computador/servidor para executar as ferramentas do projeto. |
| **GitHub Actions e GitHub Pages** | Automatizam a geração e publicação do site. |
| **Express e Gemini (opcionais)** | Base para um servidor e assistente de IA; o assistente depende de uma chave `GEMINI_API_KEY`. |

Para quem atualiza apenas textos, é suficiente saber que os dados estão em `src/data`. Não é necessário editar React, CSS, servidor ou configurações de publicação.

## 14. Lista final de conferência

Antes de publicar, responda:

- O texto está com acentos corretos e sem erros factuais?
- As aspas, chaves, colchetes e vírgulas foram mantidos?
- O `id` de novo artigo ou evento é único?
- As dimensões, regiões e categorias usadas são válidas?
- Cada palavra-chave nova possui uma definição no índice?
- Os links começam com `https://` e apontam para fontes confiáveis?
- Eventos destacados no mapa foram incluídos em `featuredEvents` da região?
- A alteração foi testada localmente ou revisada cuidadosamente no GitHub?

Com essa rotina, as atualizações editoriais podem ser feitas com segurança, mantendo o Atlas consistente e fácil de navegar.

## 15. Resumo dos arquivos e suas funções

| Nome do arquivo ou pasta | Função no site |
| --- | --- |
| `src/data/articlesData.ts` | Guarda todos os artigos completos do Atlas: títulos, textos, personalidades, referências e links. |
| `src/data/timelineEventsData.ts` | Guarda os acontecimentos da linha do tempo, com datas, resumos, contexto e pessoas relacionadas. |
| `src/data/regionsData.ts` | Define as regiões mostradas no mapa, suas cidades, características históricas e eventos em destaque. |
| `src/data/keywordsData.ts` | Guarda o dicionário de palavras-chave, suas definições e as ligações com artigos e eventos. |
| `src/data/quizData.ts` | Guarda as perguntas, alternativas, respostas corretas e explicações do quiz. |
| `src/data/dimensionsData.ts` | Define as seis dimensões históricas usadas nos filtros e etiquetas: econômica, social, étnica, política, cultural e logística. |
| `src/types.ts` | Define o modelo de organização dos dados. Ajuda o site a saber quais informações cada artigo, evento ou região precisa ter. |
| `src/App.tsx` | Coordena as áreas principais do site e a navegação entre mapa, linha do tempo, artigos, índice e quiz. |
| `src/components/` | Reúne as telas e partes visuais do site, como cabeçalho, mapa, artigo, quiz e janelas de informação. |
| `src/components/ArticleView.tsx` | Mostra a página de leitura de cada artigo. |
| `src/components/InteractiveMap.tsx` | Mostra o mapa interativo, as regiões e seus eventos destacados. |
| `src/components/TimelineView.tsx` | Mostra a linha do tempo e os detalhes de cada acontecimento. |
| `src/components/QuizSection.tsx` | Mostra o quiz e calcula a pontuação do visitante. |
| `src/components/Header.tsx` | Mostra o cabeçalho, a busca e os controles de navegação. |
| `src/index.css` | Guarda regras gerais de aparência, como estilos e animações. |
| `src/main.tsx` | É o ponto de partida que abre o site no navegador. |
| `index.html` | É a página-base carregada pelo navegador antes do conteúdo interativo aparecer. |
| `package.json` | Lista as ferramentas usadas no projeto e os comandos de teste, montagem e execução. |
| `vite.config.ts` | Configura a geração do site e o endereço correto para a publicação no GitHub Pages. |
| `server.ts` | Possui um servidor local e a integração opcional com o assistente de IA Gemini. Não é usado pelo GitHub Pages na versão estática publicada. |
| `.env.example` | Mostra o modelo das configurações privadas necessárias para o assistente de IA, sem guardar uma chave real. |
| `.github/workflows/deploy-pages.yml` | Automatiza a geração e a publicação do site no GitHub Pages sempre que há uma atualização na ramificação `main`. |
| `README.md` | Contém instruções técnicas iniciais para instalar e executar o projeto localmente. |
| `cronologia.md` | Material de referência histórica usado como apoio para a organização do conteúdo. |
| `documentacao.md` | Este manual de atualização editorial e de entendimento do projeto. |
