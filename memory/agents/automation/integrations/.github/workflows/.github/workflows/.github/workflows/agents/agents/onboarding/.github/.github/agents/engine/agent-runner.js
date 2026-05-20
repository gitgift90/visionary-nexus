import fetch from "node-fetch";

const API_KEY = process.env.OPENAI_API_KEY;

export async function runAgent(input) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a Visionary Nexus agent executing structured tasks."
        },
        {
          role: "user",
          content: input
        }
      ]
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}
