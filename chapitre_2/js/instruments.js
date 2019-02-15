function infosLiens() {
    var liens = document.getElementsByTagName("a");
    var nombreLiens = liens.length;
    console.log(nombreLiens);
    
    var firstLink = document.querySelector("a").getAttribute("href");
    console.log(firstLink);
    
    var lastLink = liens[nombreLiens - 1].getAttribute("href");
    console.log(lastLink);
    
}

function possede(id, classe) {
    var instrument = document.getElementById(id);
    if (instrument !== null) {
        console.log(instrument.classList.contains(classe));
    } else {
        console.log("Aucun élément ne possède l'identifiant " + id);
    }
}


infosLiens();


possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
