const sqlite = require("sqlite3").verbose();

const db = new sqlite.Database("./cadastro.db");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS pessoas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT)"
  );
});

module.exports = db;
