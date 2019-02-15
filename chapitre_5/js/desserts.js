function clic() {
    saisie = prompt("Ajoutez un dessert");
    var listElts = document.createElement("li");
    listElts.textContent = saisie;
    document.getElementById("desserts").appendChild(listElts);
    listElts.addEventListener("click", function(e){
        var nouveauNom = prompt("Quel est le nouveau nom ?", e.target.textContent);
        e.target.textContent = nouveauNom;
    })
}
var boutonElt = document.querySelector("button");
boutonElt.addEventListener("click", clic);

