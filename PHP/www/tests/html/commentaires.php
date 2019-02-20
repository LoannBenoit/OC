<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Mon blog - commentaires</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/blog.css">
</head>
<body>
<h1>Mon super blog !</h1>
    <p><a href="blog.php">Retour à la liste des billets</a></p>
    <?php
    try {
        // Connection MySQL
        $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root');
    } catch (Exception $e) {
        // En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : ' . $e->getMessage());
    }
    $req = $bdd->prepare('SELECT id, titre, contenu, DATE_FORMAT(date_creation, "%d/%m/%Y à %Hh%imin%ss") AS date_creation FROM billets WHERE id = ?') or die(print_r($bdd->errorInfo()));
    $req->execute(array($_GET['billet']));
        $donnees = $req->fetch();
        ?>
        <div class="news">
        <?php
        echo '<h3>' . htmlspecialchars($donnees['titre']) . ' le : ' . $donnees['date_creation'] . '</h3>'; ?>
            <p><?php echo htmlspecialchars($donnees['contenu']);?>
        </div>

<h2>Commentaires :</h2>
<?php
    $req->closeCursor();
    
    $req = $bdd->prepare('SELECT auteur, commentaire, DATE_FORMAT(date_commentaire, "%d/%m/%Y à %Hh%imin%ss") AS date_commentaire FROM commentaires WHERE id_billet = ? ORDER BY date_commentaire') or die(print_r($bdd->errorInfo()));
    $req->execute(array($_GET['billet']));
  
    while ($donnees = $req->fetch()) {
        ?>
        <p><strong><?php echo htmlspecialchars($donnees['auteur']); ?></strong> le <?php echo $donnees['date_commentaire']?> : </p>
        <?php echo $donnees['commentaire']; ?>
    <?php
    }
    $req->closeCursor();
    ?>
</body>
</html>