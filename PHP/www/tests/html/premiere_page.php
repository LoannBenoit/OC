<?php
date_default_timezone_set('Europe/London');
$jour = date('d');
$mois = date('m');
$annee = date('Y');

$heure = date('H');
$minutes = date('i');
$phrase = '<h3>Bonjour, nous sommes le ' . $jour . '/' . $mois . '/' . $annee . ' et il est ' . $heure . ' h ' . $minutes . '</h3>';
echo '</br>' . $phrase;

include('menus.php');

$prenoms = array ('François', 'Michel', 'Nicole', 'Véronique', 'Benoit', 'Philiiiiiiiiippe');

$coordonnees = array (
  'prenom' => 'Philippe',
  'nom' => 'Inconnu',
  'adresse' => 'Se cache quelque part',
  'ville' => '(Dans la forêt)'
  );

echo $prenoms[5]. ', je sais où tu te caches !! ';
echo $coordonnees['ville'];

 foreach ($prenoms as $prenom) {
   echo '</br>' . $prenom;
 }

echo '<pre>';
print_r($coordonnees);
echo '<pre>';

if (in_array('Michel', $prenoms)) {

  echo 'Michel se trouve dans le tableau';
}

$position = array_search('Michel', $prenoms);

echo '</br>Michel se trouve en position ' . $position;
?>
<pre><a href="bonjour.php?nom=Dupont&amp;prenom=Jean">Dis-moi bonjour !</a>