<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Minichat</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
</head>
<style>
  form
  {text-align: center;}
</style>
<body>
  <form  autocomplete="off" action="minichat_post.php" method="post">
    <label for="pseudo">Pseudo : </label><input type="text" name="pseudo" id="pseudo"><pre></pre>
    <label for="message">Message</label><input type="text" name="message" id="message"> <pre></pre>
    <input type="submit" value="envoyer">
  </form>

  <div class="zone_de_chat">
    <?php
      try {
        // Connection MySQL
        $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root');
      } catch (Exception $e) {
        // En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : ' . $e->getMessage());
      }

      $reponse = $bdd->query('SELECT * FROM minichat ORDER BY id DESC LIMIT 0, 10') or die(print_r($bdd->errorInfo()));
  
      while ($donnees = $reponse->fetch()) {
        echo '<pre><strong>' . $donnees['pseudo'] . '</strong>' . ' : ' . $donnees['message'] . '</pre>';
    }
    ?>
  </div>

</body>
</html>