// richieste
var annoNascita=prompt("Inserisci la tua data di nascita");
var percorrenza=.parseInt(prompt("inserisci la distanza che vuoi percorrere in Kilometri"));

// prezzo biglietto
var prezzoKm=0.21;

// anno attuale
var annoAttuale=now Date();

// età passeggero
var etaPasseggero=annoAttuale - annoNascita;

// prezzo standard Biglietto
var prezzoBase= prezzoKm * percorrenza;
