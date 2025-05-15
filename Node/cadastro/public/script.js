const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const nome = formData.get("nome");

  if (nome === "") {
    alert("Preencha o campo nome");
    return;
  }

  fetch("/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome }),
  });
  form.reset();
  listarNomes();
});

async function listarNomes() {
  const resposta = await fetch("/listar");
  const lista = document.querySelector("[lista]");
  const nomes = await resposta.json();

  lista.innerHTML = "";

  nomes.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome.nome;
    lista.append(li);
  });
}

listarNomes();
