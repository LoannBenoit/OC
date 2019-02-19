<?php
$requiredPassword = 'kangourou';
$userPassword = htmlspecialchars($_POST['mot_de_passe']);
$UserName = htmlspecialchars($_POST['name']);

if ($userPassword != $requiredPassword) {
    echo 'Mot de passe incorrect, pour recommencer, ' ?> <a href="formulaire.php">Cliquez ici</a><?php
} else {
    echo 'Bonjour ' . $UserName . ' et bienvenu sur le site de la NASA.';
}
?>