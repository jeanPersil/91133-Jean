<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST'){
    header("Location: http://localhost:8081/app/index.html");
    exit;
}

include 'conexao.php';

include 'inserir.php';

include '/view/conecta.php'

echo "<script>
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'http://localhost:8081/app/index.html';
</script>";

?>