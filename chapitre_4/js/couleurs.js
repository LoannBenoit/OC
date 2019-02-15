var divsElts = document.getElementsByTagName("div");
var texteColor = prompt("Choisissez la couleur du texte :");
var backColor = prompt("Choisissez la couleur du fond :");

/* version longue
divsElts[0].style.color = texteColor;
divsElts[1].style.color = texteColor;
divsElts[2].style.color = texteColor;

divsElts[0].style.backgroundColor = backColor;
divsElts[1].style.backgroundColor = backColor;
divsElts[2].style.backgroundColor = backColor; */

for (var i = 0; i < divsElts.length; i++) {
    divsElts[i].style.color = texteColor;
    divsElts[i].style.backgroundColor = backColor;
}