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
$reponse = $bdd->query('SELECT COUNT(nom) AS nb_jeux, possesseur FROM jeux_video GROUP BY possesseur') or die(print_r($bdd->errorInfo()));

// Boucle pour chaque entrée
while ($donnees = $reponse->fetch()) {
    echo $donnees['nb_jeux'] . ' - ' . $donnees['possesseur'] . '<br>';
}

$reponse->closeCursor(); // Termine le traitement de la requête

?>