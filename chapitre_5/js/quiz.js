// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
  {
      enonce: "Combien font 2+2 ?",
      reponse: "2+2 = 4"
  },
  {
      enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
      reponse: "1492"
  },
  {
      enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
      reponse: "La lettre N"
  }
];

var questionNumber = 0;

  questions.forEach(function(question) {
    var questionLine = document.createElement("p");
    var firstLine = document.createElement("div");
    var secondLine = document.createElement("div");
    questionNumber++;
    var questionElts = document.createElement("strong");
    questionElts.textContent = "Question " + questionNumber + " : ";
    var questionEnonce = document.createElement("i");
    questionEnonce.textContent = question.enonce;
    var boutonElts = document.createElement("button");
    boutonElts.textContent = "Afficher la réponse";
    var reponseElt = document.createElement("div");
    reponseElt.textContent = question.reponse;
    console.log(reponseElt);


    boutonElts.addEventListener("click", function(){
        secondLine.appendChild(reponseElt);
        secondLine.removeChild(boutonElts);

    });
    
    // Ajout dans la page
    firstLine.appendChild(questionElts);
    firstLine.appendChild(questionEnonce);
    secondLine.appendChild(boutonElts);
    questionLine.appendChild(firstLine);
    questionLine.appendChild(secondLine);
    
    document.getElementById("contenu").appendChild(questionLine);
});