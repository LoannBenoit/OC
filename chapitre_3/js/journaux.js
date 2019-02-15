// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"


/* Méthode longue : 

var back1 = document.createElement("br");
back1.innerHTML = '<br>';

var back2 = document.createElement("br");
back2.innerHTML = '<br>';

var back3 = document.createElement("br");
back3.innerHTML = '<br>';

var lien1 = document.createElement("a");
lien1.id = ("lien1");
lien1.textContent = (journaux[0]);
lien1.href = (journaux[0]);
document.getElementById("contenu").appendChild(lien1);
document.getElementById("contenu").appendChild(back1);

var lien2 = document.createElement("a");
lien2.id = ("lien2");
lien2.textContent = (journaux[1]);
lien2.href = (journaux[1]);
document.getElementById("contenu").appendChild(lien2);
document.getElementById("contenu").appendChild(back2);

var lien3 = document.createElement("a");
lien3.id = ("lien3");
lien3.textContent = (journaux[2]);
lien3.href = (journaux[2]);
document.getElementById("contenu").appendChild(lien3);
document.getElementById("contenu").appendChild(back3);
*/ 



// Version courte :

for (var i = 0; i < journaux.length; i++) {
    var listeElt = document.createElement("a");
    listeElt.textContent = journaux[i];
    listeElt.href = journaux[i];
    document.getElementById("contenu").appendChild(listeElt);
    document.getElementById("contenu").appendChild(document.createElement("br"));
}
