async function generateJoke() {
  const response = await fetch("/api/engines/llama.cpp/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: window.MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are a tech-savvy comedian. Tell a single, short, original joke about technology, programming, or AI that is funny and appropriate.",
        },
        { role: "user", content: "Tell me a joke" },
      ],
      max_tokens: 500,
      temperature: 0.9,
    }),
  });
  const data = await response.json();
  document.getElementById("output").innerText = data.choices[0].message.content;
}
