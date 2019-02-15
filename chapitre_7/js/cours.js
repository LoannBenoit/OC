/* var compteurElt = document.getElementById("compteur");

//diminue le compteur jusqu'à 0
function diminuerCompteur() {
    //conversion en nombre le texte du compteur
    var compteur = Number(compteurElt.textContent);
    if (compteur > 1) {
        compteurElt.textContent = compteur -1;
    } else {
        clearInterval(intervalId);
        var titre = document.getElementById("titre");
        titre.textContent = "BOOM !!!";
        setTimeout(function() {
            titre.textContent = "Tout est cassé :'("
        }, 2000);
    }
} 

//appelle la finction diminuerCompteur toutes les secondes (1000 milisecondes)
var intervalId = setInterval(diminuerCompteur, 1000); */

var bloc = document.getElementById("bloc");
var cadre = document.getElementById("cadre");
var vitesse = 7; // Valeur de déplacement en pixels
// Conversion en nombre du diamètre du bloc
var largeurBloc = parseFloat(getComputedStyle(bloc).width);
var animationId = null // Identifiant de l'animation

// Déplacer le bloc sur sa gauche
function deplacerBloc() {
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xBloc = parseFloat(getComputedStyle(bloc).left);
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xMax = parseFloat(getComputedStyle(cadre).width)
    if (xBloc + largeurBloc <= xMax) {
        bloc.style.left = (xBloc + vitesse) + "px"; // Déplacement vers la gauche
    } else cancelAnimationFrame(animationId)
  
    // Demande au navigateur d'appeller deplacerBloc dès que possible 
    requestAnimationFrame(deplacerBloc);
}
animationId = requestAnimationFrame(deplacerBloc)