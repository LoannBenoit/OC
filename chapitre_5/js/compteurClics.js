var compteurClics = document.getElementById("compteurClics");
var boutonClic = document.getElementById("clic");
var boutonDesactiver = document.getElementById("desactiver");
compteurClics = Number();

function clic() {
  compteurClics++; // Incrémentation du compteur
  document.getElementById("compteurClics").textContent = compteurClics; // Affichage sur la page web

}

// Configuration de la foction Click
boutonClic.addEventListener("click", clic);

boutonDesactiver.addEventListener("click", function(){
  boutonClic.removeEventListener("click", clic);
});