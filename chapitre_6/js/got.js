// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
  {
      code: "ST",
      nom: "Stark"
  },
  {
      code: "LA",
      nom: "Lannister"
  },
  {
      code: "BA",
      nom: "Baratheon"
  },
  {
      code: "TA",
      nom: "Targaryen"
  }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
  switch (codeMaison) {
  case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
  case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
  case "BA":
      return ["Robert", "Stannis", "Renly"];
  case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
  default:
      return [];
  }
}

var form = document.querySelector("form");
var select = document.getElementById("maison");
var persos = document.getElementById("persos");

// Déclaration des différentes maisons
maisons.forEach(function(name) {
  var options = document.createElement("option");
  options.textContent = name.nom;

  // Ajout des maisons en tant que choix
  maison.appendChild(options);
});

select.addEventListener("change", function(e){
persos.textContent = "";
if (e.target.value === "Stark") {
    for (let i = 0; i < getPersonnages("ST").length; i++) {
        console.log(e.target.value);
        
        var listeST = document.createElement("li");
        listeST.textContent = getPersonnages("ST")[i];
        persos.appendChild(listeST);
    } 
} if (e.target.value === "Lannister") { 
    
    for (let i = 0; i < getPersonnages("LA").length; i++) {
        console.log(getPersonnages("LA")[i]);
        var listeLA = document.createElement("li");
        listeLA.textContent = getPersonnages("LA")[i];
        persos.appendChild(listeLA);
    }
}  if (e.target.value === "Baratheon") { 
    
    for (let i = 0; i < getPersonnages("BA").length; i++) {
        console.log(getPersonnages("BA")[i]);
        var listeBA = document.createElement("li");
        listeBA.textContent = getPersonnages("BA")[i];
        persos.appendChild(listeBA);
    }
} if (e.target.value === "Targaryen") {
    for (let i = 0; i < getPersonnages("TA").length; i++) {
        console.log(e.target.value);
        
        var listeTA = document.createElement("li");
        listeTA.textContent = getPersonnages("TA")[i];
        persos.appendChild(listeTA);
    } 
} 
});