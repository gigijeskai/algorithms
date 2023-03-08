"use strict";
//input
const strPrezzoLordo = prompt("Inserire il prezzo lordo");
const prezzoLordo = Number(strPrezzoLordo);
const strScontoPercentuale = prompt("Inserire lo sconto in %");
const scontoPercentuale = Number(strScontoPercentuale);
//elaborazione
const prezzoScontato = prezzoLordo - (prezzoLordo / 100) * scontoPercentuale;
//output
const risultato = prezzoScontato;
//alert("il prezzo finale è "+prezzoScontato);
alert(risultato);
console.log(risultato);
document.write(risultato);
