ajaxGet('http://localhost:8888/javascript-web-srv/data/tableaux.json', function (reponse) {
var tableaux = JSON.parse(reponse);

  tableaux.forEach(function(tableau) {
    document.createElement("tr");
  });
});

