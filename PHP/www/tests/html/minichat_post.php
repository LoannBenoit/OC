<?php

header('Location: minichat.php');
// Récupération des input du minichat dans des variables
$pseudo = htmlspecialchars($_POST['pseudo']);
$message = nl2br(htmlspecialchars($_POST['message']));
setcookie('pseudo', $pseudo, time() + 365*24*3600, null, null, false, true);

try {
  // Connection MySQL
  $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root');
} catch (Exception $e) {
  // En cas d'erreur, on affiche un message et on arrête tout
  die('Erreur : ' . $e->getMessage());
}


$req = $bdd->prepare('INSERT INTO minichat(pseudo, message) VALUES(:pseudo, :message)');
$req->execute(array(
	'pseudo' => $pseudo,
  'message' => $message,
	));

?>