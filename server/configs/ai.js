// import OpenAI from "openai";

// const ai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
//     baseURL: process.env.OPENAI_BASE_URL,
// });

// export default ai

// import OpenAI from "openai";

// if (!process.env.OPENAI_API_KEY) {
//   console.error("❌ OPENAI_API_KEY not found! Add it in Render env vars.");
// }

// const ai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY
// });

// export default ai;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function geminiGenerate(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("GEMINI API ERROR:", data);
    throw new Error("Gemini API failed");
  }

  return data.candidates[0].content.parts[0].text;
}

