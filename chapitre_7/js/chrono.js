var demarrer = document.getElementsByTagName("button")[0];
var arreter = document.createElement("button");
var tour = document.createElement("button");
tour.textContent = "Enregistrer un tour";
arreter.textContent = "Arreter";
var compteurElt = document.getElementById("compteur");
var intervalId;
var compteur;

var ligneCompteur = document.createElement("p");
ligneCompteur.textContent = " seconde(s) écoulée(s)";
document.body.appendChild(tour);


function secondes() {
    compteur = Number(compteurElt.textContent);
    compteurElt.textContent = compteur + 1;
}

demarrer.addEventListener("click", function(){
    document.body.replaceChild(arreter, demarrer);
    intervalId = setInterval(secondes, 1000);
    tour.addEventListener("click", function(){
        console.log("Vous avez enregistré un tour à : " + compteurElt.textContent + " seconde(s)");
    });
});

arreter.addEventListener("click", function(){
    document.body.replaceChild(demarrer, arreter);
    clearInterval(intervalId);
    tour.addEventListener("click", function(){
        console.log("Veuillez d'abord (re)démarrer le compteur");
    });
});
