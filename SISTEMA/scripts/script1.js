function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function executar() {
  console.log("Antes da pausa");

  await esperar(3000);

  console.log("Depois da pausa");
}

document
  .getElementById("loginform")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msgErro = document.querySelector("[erro]");

    if (!password || !username) {
      msgErro.textContent = "Por favor preencha todos os campos acima.";
      return;
    }

    if (password.length < 8) {
      msgErro.textContent = "A senha precisa ter pelo menos 8 caracteres";
      return;
    }

    msgErro.textContent = "Login bem sucedido!!";
    msgErro.style.color = "lightgreen";

    await executar();

    localStorage.setItem("username", username);
    window.location.href = "telaCadastro.html";
  });
