const nomeDoUsuario = document.querySelector("[nomeDoUsuario]");
const username = localStorage.getItem("username");
const botaoLimpar = document.querySelector("[botaoLimpar]");
const botaoCalc = document.querySelector("[botaoCalc]");
const botaoLogout = document.querySelector("[logout]");
const msgErro = document.querySelector("[erro]");

if (username) {
  nomeDoUsuario.textContent = username;
} else {
  nomeDoUsuario.textContent = "Usuario desconhecido";
}

document
  .getElementById("cadastroProduto")
  .addEventListener("submit", (event) => {});

botaoLimpar.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("produto").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("resultado").value = "";
  msgErro.textContent = "";
});

botaoCalc.addEventListener("click", (event) => {
  event.preventDefault;

  const preco = document.getElementById("preco").value;
  const quantidade = document.getElementById("quantidade").value;
  const resultado = document.getElementById("resultado");

  if (preco < 0 || quantidade < 0) {
    msgErro.textContent =
      "Insira valores validos nos campos: PREÇO E QUANTIDADE";
    document.getElementById("preco").style.border = "solid 3px red";
    document.getElementById("quantidade").style.border = "solid 3px red";
    resultado.value = "";
    return;
  }

  document.getElementById("preco").style.border = "none";
  document.getElementById("quantidade").style.border = "none";

  if (
    !isNaN(preco) &&
    !isNaN(quantidade) &&
    preco !== "" &&
    quantidade !== ""
  ) {
    msgErro.textContent = "";
    const total = preco * quantidade;
    resultado.value = total.toFixed(2);
  } else {
    msgErro.textContent = "Preencha os campos necessarios: PREÇO e QUANTIDADE";
  }
});

botaoLogout.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.removeItem("username");
  window.location.href = "index.html";
});
