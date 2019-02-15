var demarrer = document.getElementById("demarrer");
var arreter = document.getElementById("arreter");
var ballon = document.getElementById("ballon");
var cadre = document.getElementById("cadre");
var vitesse = 7;
var largeurBallon = parseFloat(getComputedStyle(ballon).width);
var animationId = null;

function deplacerBallon() {
  var xBallon = parseFloat(getComputedStyle(ballon).left);
  var xMax = parseFloat(getComputedStyle(cadre).width);
  
  if (xBallon + largeurBallon >= xMax || xBallon < 0) {
    vitesse = -vitesse;
  }
  ballon.style.left = (xBallon + vitesse) + "px";
  animationId = requestAnimationFrame(deplacerBallon);

  /* if (xBallon + largeurBallon <= xMax) {
      ballon.style.left = (xBallon + vitesse) + "px";
  } else if (xBallon + largeurBallon === xMax) {
    cancelAnimationFrame(animationId);
    sens = -1;
  } else if (sens = -1) {
    ballon.style.left = (xBallon - vitesse) + "px";
  }
  animationId = requestAnimationFrame(deplacerBallon); */
}

demarrer.addEventListener("click", function(){
  arreter.disabled = false;
  demarrer.disabled = true;
  deplacerBallon();
});


arreter.addEventListener("click", function(){
  demarrer.disabled = false;
  arreter.disabled = true;
  cancelAnimationFrame(animationId);
});