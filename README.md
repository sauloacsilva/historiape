# Atlas Interativo — História de Pernambuco

Uma plataforma educativa para explorar a História de Pernambuco de forma visual, conectada e acessível. O Atlas combina mapa interativo, linha do tempo, artigos temáticos, glossário e atividades para ajudar estudantes, educadores e pessoas interessadas na história do estado.

## O que o projeto oferece

- **Mapa interativo:** apresenta regiões de Pernambuco, suas cidades, características históricas e acontecimentos em destaque.
- **Linha do tempo:** organiza eventos por data, região e dimensões históricas.
- **Artigos temáticos:** reúne contexto histórico, personalidades, legado cultural, patrimônios, referências e fontes de pesquisa.
- **Palavras-chave:** permite navegar por conceitos, lugares, eventos, etnias e personalidades relacionados.
- **Quiz:** oferece perguntas de revisão com explicação das respostas.
- **Pesquisa e filtros:** facilita encontrar conteúdos por texto ou por dimensão histórica.
- **Guia de estudos:** apoia a revisão do conteúdo apresentado no Atlas.

O conteúdo é trabalhado por seis dimensões: econômica, social, étnica, política, cultural e logística.

## Público e objetivo

O site foi pensado principalmente para estudantes dos anos finais do Ensino Fundamental, mas também serve como material de apoio para professores, pesquisadores iniciantes e visitantes interessados na formação histórica e cultural de Pernambuco.

## Atualização de conteúdo

Os dados editoriais ficam concentrados em `src/data/`:

| Arquivo | Conteúdo |
| --- | --- |
| `articlesData.ts` | Artigos do Atlas |
| `timelineEventsData.ts` | Eventos da linha do tempo |
| `regionsData.ts` | Regiões e informações do mapa |
| `keywordsData.ts` | Glossário e relações entre conteúdos |
| `quizData.ts` | Perguntas e respostas do quiz |

Há um manual completo, voltado também para pessoas sem experiência em programação, em [documentacao.md](documentacao.md). Ele explica como editar artigos, criar eventos, inserir imagens, testar e publicar as atualizações.

### Imagens

Imagens podem ser colocadas em `public/imagens/`. Para exibir uma imagem de destaque em um artigo, preencha `heroImageUrl`; para uma personalidade, use `imageUrl`. As imagens são exibidas sem moldura, sombra, linhas ou cantos arredondados.

```ts
heroImageDescription: 'Descrição acessível da imagem.',
heroImageUrl: '/imagens/nome-da-imagem.jpg',
```

## Tecnologias

- React e TypeScript
- Vite
- Tailwind CSS
- Express
- Lucide (ícones)
- GitHub Actions e GitHub Pages para publicação
- Gemini API, opcionalmente, para o assistente educacional

## Como executar no computador

### Pré-requisito

Instale o [Node.js](https://nodejs.org/), preferencialmente na versão 22 ou superior.

### Instalação e execução

```bash
npm install
npm run dev
```

Após iniciar, abra no navegador o endereço mostrado no terminal.

### Verificações

```bash
npm run lint
npm run build
```

- `npm run lint` verifica a estrutura e os tipos do projeto.
- `npm run build` gera a versão estática pronta para publicação na pasta `dist/`.

## Assistente de IA opcional

O projeto possui uma integração opcional com o Gemini. Para ativá-la localmente, crie um arquivo `.env.local` na raiz do projeto e inclua:

```text
GEMINI_API_KEY="sua-chave-aqui"
```

Sem a chave, o restante do Atlas funciona normalmente; apenas o assistente de IA fica em modo offline.

> Nunca publique sua chave de API nem a inclua em commits.

## Publicação

O arquivo `.github/workflows/deploy-pages.yml` publica automaticamente o site no GitHub Pages quando há alterações na ramificação `main`.

Fluxo recomendado:

1. Atualize os arquivos de conteúdo.
2. Execute as verificações, quando possível.
3. Envie as alterações ao GitHub.
4. Acompanhe a publicação na aba **Actions** do repositório.

## Estrutura resumida

```text
src/
  components/      telas e elementos visuais do Atlas
  data/            conteúdos editoriais do site
  App.tsx          navegação e organização principal
  types.ts         modelos dos dados
public/
  imagens/         imagens usadas nos artigos e personalidades
.github/workflows/ publicação automática no GitHub Pages
documentacao.md    manual completo de atualização
```
