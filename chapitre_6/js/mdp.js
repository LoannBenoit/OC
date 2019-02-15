
var mdp = document.getElementById("mdp1").addEventListener("input", function(e){
  var mdp1 = e.target.value;
  
});
document.getElementById("mdp2").addEventListener("input", function(e){
  var mdp2 = e.target.value;
});

var infos = document.getElementById("infoMdp");
infos.textContent = "";
var form = document.querySelector("form");
form.addEventListener("submit", function(e){
  console.log(form.elements.mdp1.value); 
  console.log(form.elements.mdp2.value);
  if (form.elements.mdp1.value.length < 6 || form.elements.mdp2.value.length < 6) {
    infos.textContent = "Erreur, la longueur minimale du mot de passe est de 6 caractères.";
  }
  if (form.elements.mdp1.value > form.elements.mdp2.value) {
    infos.textContent = "Erreur : Les deux mots de passes ne sont pas identiques"; 
    var regex = /\d/;
    if (!regex.test(mdp1.value) && !regex.test(mdp2.value)) {
      infos.textContent = "Erreur : Le mot de passe doit contenir au moins un chiffre."; 
    }
  } 
  if (form.elements.mdp1.value === form.elements.mdp2.value) {
    infos.textContent = "Le mdp est OK.";
  }
  
  e.preventDefault();
});