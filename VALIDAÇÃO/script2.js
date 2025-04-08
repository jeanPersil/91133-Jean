const username = localStorage.getItem("username");
const sejaBemvindo = document.getElementById("sejaBemVindo");
if (username) {
  sejaBemvindo.textContent = `Seja bem vindo ${username}!`;
} else {
  sejaBemvindo.textContent = "Nome do usuario não encontrato";
}

const botao = document.getElementById("logout");

botao.addEventListener("click", () => {
  localStorage.removeItem("username");

  window.location.href = "index.html";
});