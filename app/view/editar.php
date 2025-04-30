<?php
include 'conecta.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $id = intval($_GET['id']);

    $sql = "SELECT * FROM produtos WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows != 1) {
        echo "<script>alert('Produto não encontrado.'); window.location.href = 'listar.php';</script>";
        exit;
    }

    $produto = $resultado->fetch_assoc();
    $stmt->close();
} else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = intval($_POST['id']);
    $nome = trim($_POST['produto']);
    $tipo = trim($_POST['tipo']);
    $quantidade = intval($_POST['quantidade']);

    if (empty($nome) || empty($tipo) || $quantidade <= 0) {
        echo "<script>alert('Todos os campos são obrigatórios e a quantidade deve ser maior que zero!'); window.history.back();</script>";
        exit;
    }

    $sql = "UPDATE produtos SET produto = ?, tipo = ?, quantidade = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssii", $nome, $tipo, $quantidade, $id);

    if ($stmt->execute()) {
        echo "<script>alert('Produto atualizado com sucesso!'); window.location.href = 'listar.php';</script>";
    } else {
        echo "<script>alert('Erro ao atualizar o produto.'); window.location.href = 'listar.php';</script>";
    }

    $stmt->close();
    $conn->close();
    exit;
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>Editar Produto</title>

</head>
<body>

    <h1>Controle de Estoque 1.0 - SENAI FSA</h1>

    <form method="POST" action="editar.php">
        <input type="hidden" name="id" value="<?php echo $produto['id']; ?>">

        <label for="produto">Produto:</label>
        <input type="text" id="produto" name="produto" value="<?php echo htmlspecialchars($produto['produto']); ?>" required>

        <label for="tipo">Tipo:</label>
        <select id="tipo" name="tipo" required>
            <option value="">Selecione</option>
            <option value="Eletrônico" <?php if ($produto['tipo'] == 'Eletrônico') echo 'selected'; ?>>Eletrônico</option>
            <option value="Mecânico" <?php if ($produto['tipo'] == 'Mecânico') echo 'selected'; ?>>Mecânico</option>
            <option value="Papelaria" <?php if ($produto['tipo'] == 'Papelaria') echo 'selected'; ?>>Papelaria</option>
        </select>

        <label for="quantidade">Quantidade:</label>
        <input type="number" id="quantidade" name="quantidade" value="<?php echo $produto['quantidade']; ?>" min="1" required>

        <input type="submit" value="Atualizar">
    </form>

    <div class="btn-voltar">
        <a href="listar.php">
            <button>Voltar à lista</button>
        </a>
    </div>

</body>
</html>
