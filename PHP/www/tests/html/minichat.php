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
  <div class="back_form">
    <style>.back_form{background-color:#9966ff; width:300px; margin:0 auto; padding:20px;border-radius:3px; color:white; font-weight:bold;}</style>
    <form  autocomplete="off" action="minichat_post.php" method="post">
  
      <label for="pseudo" >Pseudo : </label><input type="text" name="pseudo" id="pseudo" placeholder="Votre pseudo" value="<?php echo $_COOKIE['pseudo'];?>" required><pre></pre><?php ?>
      
      <label for="message">Message : </label><input type="text" name="message" id="message" placeholder="Votre message" required> <pre></pre>
      <input type="submit" value="envoyer">
    </form>
  </div>

  <div class="zone_de_chat">
    <?php
      try {
        // Connection MySQL
        $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root');
      } catch (Exception $e) {
        // En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : ' . $e->getMessage());
      }

      $reponse = $bdd->query('SELECT pseudo, message, DATE_FORMAT(date, \'| %d/%m/%Y | %Hh:%i:%s |\') AS date_post FROM minichat ORDER BY id DESC LIMIT 0, 10') or die(print_r($bdd->errorInfo()));
  
      while ($donnees = $reponse->fetch()) {
        echo $donnees['date_post'] . ' ' . '<strong>' . $donnees['pseudo'] . '</strong>' . ' : ' . $donnees['message'] . '<br><br>';
    }
    ?>
    <img src="image.php" alt="image provenant de la page image.php">
  </div>

</body>
</html>