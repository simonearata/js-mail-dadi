var numero_giocatore = Math.floor(Math.random() * 6) + 1;
var numero_computer = Math.floor(Math.random() * 6) + 1;

document.getElementById('numeri').innerHTML = "il numero del computer è " + numero_computer + " il numero del giocatore è " + numero_giocatore;

if( numero_computer < numero_giocatore){
  document.getElementById('dadi').innerHTML = " vince il giocatore";
}else if(numero_computer > numero_giocatore){
  document.getElementById('dadi').innerHTML = "vince il computer";
}else{
  document.getElementById('dadi').innerHTML = "la partita è pari";
}

