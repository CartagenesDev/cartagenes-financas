
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client according to the SDK guidelines.
// Always use process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAITip = async () => {
  try {
    // Using ai.models.generateContent directly with model name and prompt.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Gere uma frase curta e motivadora (em português) sobre investimentos, finanças pessoais ou equilíbrio entre saúde e dinheiro para um site de notícias. Máximo 15 palavras.",
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });
    // Accessing the .text property (not a method) from GenerateContentResponse.
    return response.text?.trim() || "Invista com consistência e foco no longo prazo.";
  } catch (error) {
    console.error("Error fetching AI tip:", error);
    return "Invista com consistência e foco no longo prazo.";
  }
};
