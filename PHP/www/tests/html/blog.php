<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Mon blog</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/blog.css">
</head>
<body>
    <h1>Mon super blog !</h1>
    <p>Derniers billets du blog :</p>
    <?php
    try {
        // Connection MySQL
        $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root');
    } catch (Exception $e) {
        // En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : ' . $e->getMessage());
    }

    $reponse = $bdd->query('SELECT id, titre, contenu, DATE_FORMAT(date_creation, "%d/%m/%Y à %Hh%imin%ss") AS date_creation FROM billets ORDER BY date_creation DESC') or die(print_r($bdd->errorInfo()));
    while ($donnees = $reponse->fetch()) {
        ?>
        <div class="news">
        <?php $id_billet = $donnees['id'];
        echo '<h3>' . htmlspecialchars($donnees['titre']) . ' le : ' . $donnees['date_creation'] . '</h3>'; ?>
            <p><?php echo htmlspecialchars($donnees['contenu']) . '<br>' ?><a href="commentaires.php?billet=<?php echo $donnees['id'];?>">Commentaires</a></p>
            
        </div>
     <?php
    }
$reponse->closeCursor();
    ?>
</body>
</html>