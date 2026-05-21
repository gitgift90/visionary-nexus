async function runAgent(input) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a Visionary Nexus AI agent."
        },
        {
          role: "user",
          content: input
        }
      ]
    })
  });

  const data = await response.json();

  console.log(data.choices[0].message.content);
}

runAgent("Analyze Visionary Nexus");
