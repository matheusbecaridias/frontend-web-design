<?php
session_start();
if (!isset($_SESSION['logado'])) {
    header("Location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Página Inicial</title>
    <style>
        body { font-family: Arial; text-align: center; margin-top: 100px; }
    </style>
</head>
<body>
    <h1>Bem-vindo, <?= htmlspecialchars($_SESSION['nome']) ?>!</h1>
    <p>Você está logado no sistema.</p>
    <br>
    <a href="logout.php" style="color: red; font-size: 18px;">Sair do Sistema</a>
</body>
</html>