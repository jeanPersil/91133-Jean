<?php

include 'conecta.php';

$id = intval($_GET['id']);
$sql = "DELETE FROM produtos WHERE id = $id";

if($conn -> query($sql)=== TRUE){
    echo "<script>alert('produto excluido com sucesso!');
    window.location.href = 'listar.php'</script>";
} else {
    echo "<script>alert('Erro ao excluir.');
    window.location.href = 'listar.php'</script>";

}

$conn->close();

?>