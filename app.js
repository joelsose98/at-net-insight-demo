async function sendMessage() {
  const promptBox = document.getElementById("prompt");
  const responseBox = document.getElementById("response");
  const message = promptBox.value;

  if (!message) {
    return;
  }

  responseBox.innerText = "Thinking...";

  try {
    const result = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: message })
    });

    const data = await result.json();

    if (data.answer) {
      responseBox.innerText = data.answer;
    } else {
      responseBox.innerText = "Error: " + (data.error || "No answer returned.");
    }
  } catch (error) {
    responseBox.innerText = "Error: " + error.message;
  }
}
