ajaxGet('http://localhost:8888/javascript-web-srv/data/langages.txt', function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var text = reponse;
    // Affiche le titre de chaque film
    var separateur = ';';

    function splitString(stringToSplit, separateur) {
        var listOfString = stringToSplit.split(separateur);
        for (let i = 0; i < listOfString.length; i++) {
            var ligne = document.createElement('li');
            ligne.textContent = listOfString[i];
            document.getElementById('langages').appendChild(ligne);
        }
    }
    splitString(text, separateur);
});

