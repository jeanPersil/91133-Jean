from flask import Flask, render_template, jsonify, request
import sqlite3

app = Flask(__name__)

def criar_banco():
    conn = sqlite3.connect("amigos.db")
    cursor = conn.cursor()
    cursor.execute('''
                   CREATE TABLE IF NOT EXISTS amigos(
                   id INTEGER PRIMARY KEY AUTOINCREMENT,
                   nome TEXT NOT NULL) 
                   ''')
    conn.commit()
    conn.close()

criar_banco()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/listar')
def pagList():
    return render_template('listar.html')

@app.route('/api/adicionar', methods=['POST'])
def adicionar():
    dados = request.json  
    nome = dados['nome']

    conn = sqlite3.connect('amigos.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO amigos(nome) VALUES (?)', (nome,))
    conn.commit()
    conn.close()

    return jsonify({'mensagem': 'Amigo adicionado com sucesso'})

@app.route('/api/listar')
def listar():
    conn = sqlite3.connect('amigos.db')
    cursor = conn.cursor()
    cursor.execute('SELECT nome FROM amigos')
    amigos = [linha[0] for linha in cursor.fetchall()]
    conn.close()
    
    return jsonify(amigos)

if __name__ == '__main__':
    app.run(debug=True)
