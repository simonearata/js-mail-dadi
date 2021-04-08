var email_iscritte = ["simone.arata@live.it", "marco@hotmail.it", "stefano@hotmail.it"];
var email_utente = prompt("Inserire la tua email");

var found = false
for(var i = 0; i<email_iscritte.length; i++){
  var nome = email_iscritte[i];
  if(nome === email_utente){
    found = true
  }
}

if(found){
  document.getElementById('inbox_wrong').innerHTML = ("controllo email superato")
}else{
  document.getElementById('inbox').innerHTML = ("controllo email non superato")
}