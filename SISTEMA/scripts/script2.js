const nomeDoUsuario = document.querySelector("[nomeDoUsuario]");
const username = localStorage.getItem("username");
const botaoLimpar = document.querySelector("[botaoLimpar]");
const botaoLogout = document.querySelector("[logout]");

if (username) {
  nomeDoUsuario.textContent = username;
} else {
  nomeDoUsuario.textContent = "Usuario desconhecido";
}

document
  .getElementById("cadastroProduto")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;
    const resultado = document.getElementById("resultado");
    const botaoCalcular = document.querySelector("[botaoCalc]");

    if (preco < 0) {
      alert("Insira um preço valido");
      document.getElementById("preco").style.border = "solid 3px red";
      return;
    }

    document.getElementById("preco").style.border = "none";

    if (
      !isNaN(preco) &&
      !isNaN(quantidade) &&
      preco !== "" &&
      quantidade !== ""
    ) {
      const total = preco * quantidade;
      resultado.value = total.toFixed(2);
    } else {
      alert("Preencha os campos necessários!");
    }
  });

botaoLimpar.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("produto").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("resultado").value = "";
});

botaoLogout.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.removeItem("username");
  window.location.href = "index.html";
});
