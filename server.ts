import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", app: "História de Pernambuco Atlas" });
  });

  // AI Assistant endpoint using Gemini
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, context } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Mensagem é obrigatória." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.json({
          reply: "O assistente IA está em modo offline porque a chave GEMINI_API_KEY não foi configurada no ambiente. Mas você ainda pode explorar todos os artigos, o mapa interativo e o quiz!"
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      const promptSystem = `Você é o "Prof. Capibaribe", um assistente de história educacional especialista na História de Pernambuco, voltado para alunos do Ensino Fundamental II (Anos Finais, 11 a 15 anos).
Sua linguagem deve ser didática, empolgante, clara, respeitosa e rigorosa com os fatos históricos.
Aborde a história de Pernambuco sob as 6 dimensões: Econômica, Social, Étnica, Política, Cultural e Logística.
Destaque personalidades (Duarte Coelho, Maurício de Nassau, Zumbi, Frei Caneca, Bárbara de Alencar, Chico Science, Luiz Gonzaga) e eventos marcantes (Insurreição Pernambucana, Guerra dos Mascates, Revolução de 1817, Confederação do Equador, Revolução Praieira).
Responda de forma sucinta (máximo 3 parágrafos curtos ou tópicos) para manter o aluno engajado.

Contexto do artigo ou tópico que o aluno está visualizando no app: ${context || 'História Geral de Pernambuco'}.

Pergunta do aluno: ${message}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: promptSystem,
      });

      const replyText = response.text || "Não foi possível gerar uma resposta no momento. Tente novamente!";

      res.json({ reply: replyText });
    } catch (error: any) {
      console.error("Erro na API Gemini:", error);
      res.status(500).json({
        reply: "Ops! Ocorreu um contratempo ao consultar o historiador virtual. Verifique sua conexão e tente novamente."
      });
    }
  });

  // Vite development or production build static handling
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[História PE] Servidor rodando na porta ${PORT} (0.0.0.0)`);
  });
}

startServer().catch((err) => {
  console.error("Falha ao iniciar o servidor:", err);
});