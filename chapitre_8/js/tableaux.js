ajaxGet('http://127.0.0.1:5500/javascript-web-srv/data/tableaux.json', function (reponse) {
var tableaux = JSON.parse(reponse);
var table = document.getElementById("table");
table.style.border ="1px solid black";

  tableaux.forEach(function(tableau) {
    var ligne = document.createElement("tr");
    ligne.classList.add("ligne");
    var colNom = document.createElement("td");
    colNom.textContent = tableau.titre;
    var colAnnee = document.createElement("td");
    colAnnee.textContent = tableau.annee
    var colAuteur = document.createElement("td");
    colAuteur.textContent = tableau.de
    
    ligne.appendChild(colNom);
    ligne.appendChild(colAnnee);
    ligne.appendChild(colAuteur);

    table.appendChild(ligne);
  });
});