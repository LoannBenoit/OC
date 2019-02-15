var paragrapheElts = document.getElementsByTagName("div");



document.addEventListener('keypress', (event) => {
  const nomTouche = event.key;
for (let i = 0; i < paragrapheElts.length; i++) {
    if (nomTouche === "r") {
      paragrapheElts[i].style.backgroundColor = "red";
    } if (nomTouche === "j") {
      paragrapheElts[i].style.backgroundColor = "yellow";

    } if (nomTouche === "v") {
      paragrapheElts[i].style.backgroundColor = "green";
    } if (nomTouche === "b") {
      paragrapheElts[i].style.backgroundColor = "white";
    }
}
  
});