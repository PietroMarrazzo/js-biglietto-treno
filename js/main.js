// richieste
var annoNascita = prompt("Inserisci la tua data di nascita");
var percorrenza = parseInt(prompt("inserisci la distanza che vuoi percorrere in Kilometri"));

// variabili
// prezzo biglietto
var prezzoKm=0.21;

// anno attuale
var annoAttuale= new Date();

//costanti
// under 18
var under=18;
//sconto under
var scontoUnder= 0.2;
// senior
var senior=64;
var scontoSenior= 0.4;

// età passeggero
var etaPasseggero= annoAttuale - annoNascita;

// prezzo standard Biglietto
var prezzo= prezzoKm * percorrenza;

//condizione di sconto
if (etaPasseggero < under) {
  var sconto = prezzo * scontoUnder;
  var prezzo = prezzo - sconto;
}
else if (etaPasseggero > senior) {
  var sconto = prezzo * scontoSenior;
  var prezzo = prezzo - sconto;
}

//visualizzazione
document.getElementById("prezzo").innerHTML= prezzo + " " + "euro";
