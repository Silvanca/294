const form = document.getElementById("commentForm");
const statusEl = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;

  try {
    const tokenResponse = await fetch("http://10.70.4.8/challenges/1", {
      method: "POST"
    });

    if (!tokenResponse.ok) {
      throw new Error("Fehler beim Abrufen des Tokens");
    }

    const token = tokenResponse.headers.get("Authorization");
    console.log("Token:", token);

    const commentResponse = await fetch("http://10.70.4.8/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({
        message: message,
        username: username
      })
    });

    if (commentResponse.status === 201) {
      statusEl.textContent = "Kommentar erfolgreich erstellt!";
    } else if (commentResponse.status === 403) {
      statusEl.textContent = "Token ungültig oder abgelaufen.";
    } else if (commentResponse.status === 422) {
      statusEl.textContent = "Ungültige Daten gesendet.";
    } else {
      statusEl.textContent = "Unbekannter Fehler: " + commentResponse.status;
    }

  } catch (error) {
    console.error(error);
    statusEl.textContent = "Fehler: " + error.message;
  }
});
