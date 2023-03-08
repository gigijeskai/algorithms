"use strict";
//input
const strStipendioLordo = prompt("Inserire il valore dello stipendio lordo");
const stipendioLordo = Number(strStipendioLordo);
const strPercentualeTrattenuta = prompt("Inserire la % di trattenuta");
const percentualeTrattenuta = Number(strPercentualeTrattenuta);
//elaborazione
const stipendioNetto = stipendioLordo - (stipendioLordo / 100) * percentualeTrattenuta;
//output
const risultato = stipendioNetto;
alert(risultato);
console.log(risultato);
document.write(risultato);
