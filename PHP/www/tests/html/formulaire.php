<form action="secret.php" method="post" enctype="multipart/form-data">
    <p>Identification : </p>

    <label for="name">Entrez votre nom : </label><br>
    <input type="text" name="name" required><br>
<pre></pre>
    <label for="mot_de_passe"> Mot de Passe : </label><br>
    <input type="password" name="mot_de_passe" required>

    <input type="submit" value="Envoyer" name="bouton">
</form>

<?php

?>