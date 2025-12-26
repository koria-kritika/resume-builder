// import OpenAI from "openai";

// const ai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
//     baseURL: process.env.OPENAI_BASE_URL,
// });

// export default ai

import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY not found! Add it in Render env vars.");
}

const ai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export default ai;
