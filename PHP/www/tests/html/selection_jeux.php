<?php

try {
    // Connection MySQL
    $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root');
} catch (Exception $e) {
    // En cas d'erreur, on affiche un message et on arrête tout
    die('Erreur : ' . $e->getMessage());
}

// Si tout va bien, on peut continuer

// récupération du contenu de la table jeux_video
$reponse = $bdd->query('SELECT nom, prix FROM jeux_video') or die(print_r($bdd->errorInfo()));
$reponse->execute(array($_GET['posesseur'], $_GET['prix_max']));

echo '<ul>';
// Boucle pour chaque entrée
while ($donnees = $reponse->fetch()) {
    echo '<li>' . $donnees['nom'] . ' (' . $donnees['prix'] . ' EUR)</li>';
}
echo '</ul>';

$reponse->closeCursor(); // Termine le traitement de la requête

?>