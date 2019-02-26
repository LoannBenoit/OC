<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Minichat</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/minichat.css">
  <!--Import Google Icon Font-->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
   <!-- Compiled and minified CSS -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
     
</head>

<body>
  <div class="background">
    <div class="container">
      <div class="chatzone">
    
        <?php
          try {
            // Connection MySQL
            $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root');
          } catch (Exception $e) {
            // En cas d'erreur, on affiche un message et on arrête tout
            die('Erreur : ' . $e->getMessage());
          }

          $reponse = $bdd->query('SELECT pseudo, message, DATE_FORMAT(date, \' | %d/%m/%Y | %Hh%imin%ss | \') AS date_form FROM minichat ORDER BY id DESC LIMIT 0, 10') or die(print_r($bdd->errorInfo()));
      
          while ($donnees = $reponse->fetch()) {
            echo $donnees['date_form'] . '<strong>' . $donnees['pseudo'] . '</strong>' . ' : ' . $donnees['message'] . '<br><br>';
        }
        ?>
        <div class="formzone">
          <form  autocomplete="off" action="minichat_post.php" method="post">
            <input type="text" name="pseudo" id="pseudo" placeholder="Votre pseudo" value="<?php echo $_COOKIE['pseudo'];?>" required><?php ?>
            <textarea name="message" id="message" required></textarea>
            <button id="submit" class="btn waves-effect waves-light right" type="submit" name="action"><i class="material-icons right">near_me</i></button>
          </form>
        </div>
    </div>
  </div>

 
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>