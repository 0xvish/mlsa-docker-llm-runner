async function explain() {
  const text = document.getElementById("input").value;
  const response = await fetch("/api/engines/llama.cpp/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: window.MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are a patient teacher. Explain the given technical text in very simple terms, as if explaining to a 5-year-old child. Use short sentences and easy words.",
        },
        { role: "user", content: text },
      ],
      max_tokens: 1000,
      temperature: 0.1,
    }),
  });
  const data = await response.json();
  document.getElementById("output").innerText = data.choices[0].message.content;
}
