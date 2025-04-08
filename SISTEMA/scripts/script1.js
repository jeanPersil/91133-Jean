document.getElementById("loginform").addEventListener("submit", (event) => {
  event.preventDefault();

  username = document.getElementById("username").value.trim();
  password = document.getElementById("password").value.trim();
  botao = document.getElementById("botao");

  if (!password || !username) {
    alert("Preencha todos os caracteres");
    return;
  }

  if (password.length < 8) {
    alert("A senha precisa ter pelo menos 8 caracteres");
    return;
  }

  localStorage.setItem("username", username);

  window.location.href = "telaCadastro.html";
  alert("Login bem sucedido");
});
