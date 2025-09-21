let messages = [];

function displayChat() {
  const chatHistory = document.getElementById("chat-history");
  chatHistory.innerHTML = "";
  messages.forEach((msg) => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${msg.role}:</strong> ${msg.content}`;
    chatHistory.appendChild(div);
  });
}

async function sendMessage() {
  const input = document.getElementById("message-input");
  const userMessage = input.value.trim();
  if (!userMessage) return;

  messages.push({ role: "user", content: userMessage });
  input.value = "";
  displayChat();

  const spinner = document.getElementById("spinner");
  spinner.style.display = "block";

  try {
    const response = await fetch("/api/engines/llama.cpp/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: window.MODEL,
        messages: messages,
        max_tokens: 100,
        temperature: 0.7,
      }),
    });
    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;
    messages.push({ role: "assistant", content: assistantMessage });
    displayChat();
  } catch (error) {
    console.error("Error:", error);
    messages.push({ role: "assistant", content: "Sorry, an error occurred." });
    displayChat();
  } finally {
    spinner.style.display = "none";
  }
}

// Allow sending on Enter
document
  .getElementById("message-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
