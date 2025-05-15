const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const path = require("path");

const app = express();
const port = 3000;

// Permitir ler dados de formularios
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir arquivos HTML, CSS e JS da pasta public
app.use(express.static("public"));

app.get("/", (req, res) =>{
  res.sendFile(path.join(__dirname, 'views', ))
});

// rota para cadastrar pessoa
app.post("/cadastrar", (req, resp) => {
  const { nome } = req.body;
  db.run("INSERT INTO pessoas (nome) VALUES(?)", [nome], (err) => {
    if (err) return resp.status(500).send("Erro ao cadastrar");

    resp.send("Pessoa cadastrada com sucesso");
  });
});

// rota para listar pessoas
app.get("/listar", (req, res) => {
  db.all("SELECT * FROM pessoas", [], (err, rows) => {
    if (err) return res.status(500).send("Erro ao buscar");
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
