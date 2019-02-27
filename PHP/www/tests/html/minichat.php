<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Minichat</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <link rel="stylesheet" href="css/minichat.css">
</head>

<body>
  <div class="background">
    <div class="container">
      <div class="chat">
        <div class="chatzone">
          <?php
            try {
              // Connection MySQL
              $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root');
            } catch (Exception $e) {
              // En cas d'erreur, on affiche un message et on arrête tout
              die('Erreur : ' . $e->getMessage());
            }

            $reponse = $bdd->query('SELECT pseudo, message, DATE_FORMAT(date, \' | %d/%m/%Y | %H : %i : %s | \') AS date_form FROM minichat ORDER BY id') or die(print_r($bdd->errorInfo()));
        
            while ($donnees = $reponse->fetch()) {
              echo '<div class="dateElt">' . $donnees['date_form'] . '</div>' . '<div class="messageElt">' . '<strong>' . $donnees['pseudo'] . '</strong>' . ' : ' . $donnees['message'] . '</div>' . '<br>';
          }
          ?>
        </div>

        <div class="formzone">
<<<<<<< HEAD
          <form  id="chat_form" autocomplete="off" action="minichat_post.php" method="post">
            <input type="text" name="pseudo" id="pseudo" placeholder="Votre pseudo" value="<?php echo $_COOKIE['pseudo'];?>" required><?php ?>
            <textarea class="materialize-textarea" name="message" id="message" placeholder="Votre message"></textarea>
            <button id="submit" class="btn waves-effect waves-light right" type="submit" name="action">Send</button>
=======
          <form  autocomplete="off" action="minichat_post.php" method="post">
            
              <input type="text" name="pseudo" id="pseudo" placeholder="Votre pseudo" value="<?php echo $_COOKIE['pseudo'];?>" required><?php ?>
              <textarea class="materialize-textarea" name="message" id="message" placeholder="Votre message" required></textarea>
              <button id="submit" class="btn waves-effect waves-light right" type="submit" name="action">Send</button>
>>>>>>> bc6c93292654c55de0e1a21c0a812addd0786c39
          </form>
        </div>

      </div>
    </div>

 
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script src="js/minichat.js"></script>
</body>
</html>