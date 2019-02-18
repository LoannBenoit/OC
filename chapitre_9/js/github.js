var contenu = document.getElementById("contenu");

var rechercher = document.getElementById("rechercher");
var searchInput = document.getElementById("recherche");

rechercher.addEventListener("click", function(e){
  contenu.innerHTML = "";
  var url = "https://api.github.com/users/" + searchInput.value;
  ajaxGet(url, function(reponse){
    var infos = JSON.parse(reponse);
  // Déclaration des éléments
  var photoElt = document.createElement("img");
  photoElt.src = infos.avatar_url;
  photoElt.style.width = "150px";
  photoElt.style.marginTop = "15px";
  
  var nameId = searchInput.value;
  var name = document.createElement("p");
  name.textContent = infos.name;
  name.style.fontSize = "1.3em";
  name.style.margin = "0px";

  var htmlUrl = document.createElement("a");
  htmlUrl.href = infos.html_url
  htmlUrl.textContent = infos.html_url;

  if (nameId === infos.login) {
    contenu.appendChild(photoElt);
    contenu.append(name);
    contenu.append(htmlUrl);
  }

});
});
