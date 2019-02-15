var infos = document.getElementById("infos");

var pElt = document.createElement("p");

var styleContenu = getComputedStyle(document.getElementById("contenu"));
var listeElts = document.createElement("ul");

var hauteur = document.createElement("li");
hauteur.textContent = "Hauteur : " + styleContenu.height;

var longueur = document.createElement("li");
longueur.textContent = "Longueur : " + styleContenu.width;

listeElts.appendChild(hauteur);
listeElts.appendChild(longueur);
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément :"));
document.getElementById("infos").appendChild(listeElts)