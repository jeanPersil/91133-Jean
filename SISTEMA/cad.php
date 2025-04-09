<?php

$host = "localhost";
$user = "root";
$pass = ""; // Senha do mysql ( se necessario )
$dbname = "cadastros_produtos";

//conexão com o banco
$conn = new mysqli($host, $user, $pass, $dbname);

if($conn->connect_error){
    die("Conexão falhou: " .$conn->connect_error);
}

echo("conectado!");

$produto = trim($_POST['produto']);
$preco = floatval($_POST['preco']);
$quantidade = intval($_POST['quantidade'] ?? 0);
$total = floatval($_POST['resultado'] ?? 0);

if($produto === "" || $preco <= 0 || $quantidade <= 0){
    echo "Dados invalidos";
}

$stmt = $conn->prepare("INSERT INTO produtos(produto, preco, quantidade, total) VAlUES (?, ?, ?, ?)");
$stmt->bind_param("sdid", $produto, $preco, $quantidade, $total);

if($stmt-> execute()){
    echo "Cadastro realizado com sucesso!";
}else{
    echo "Erro ao cadastrar: " .$stmt->error;
}

$stmt -> close();
$conn -> close();

?>