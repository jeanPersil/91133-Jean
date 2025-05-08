document.getElementById("imagem").addEventListener("click", (e) => {
  const sessao = document.getElementById("sessao");
  const imagemFoto = document.getElementById("imagem");

  sessao.style.display = "none";
  imagemFoto.style.display = "block";
});

document.getElementById("sobre").addEventListener("click", (e) => {
  const sessao = document.getElementById("sessao");
  const imagemFoto = document.getElementById("imagem");

  imagemFoto.style.display = "none";
  sessao.style.display = "flex";
});
