var articlesElt = document.getElementById("articles");
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function(reponse){
  // Transforme la réponse enun tableau d'articles
  var articles = JSON.parse(reponse);
  articles.forEach(function(article) {
    // Ajout du titre et du contenu de chaque article
    var titreElt = document.createElement("h2");
    titreElt.textContent = article.titre;
    var contenuElt = document.createElement("p");
    contenuElt.textContent = article.contenu;
    articlesElt.appendChild(titreElt);
    articlesElt.appendChild(contenuElt);
  });
});

var premMinElt = document.getElementById("premMin");
ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function(reponse){
  // Transforme la réponse enun tableau d'articles
  var premierMinistre = JSON.parse(reponse);
 //ajout de la description et du logo dans la page web
 var descriptionElt = document.createElement("p");
 descriptionElt.textContent = premierMinistre.description;
 var logoElt = document.createElement("img");
 logoElt.src = premierMinistre.logo;
 logoElt.style.width = "100px";
 premMinElt.appendChild(descriptionElt);
 premMinElt.appendChild(logoElt);
});