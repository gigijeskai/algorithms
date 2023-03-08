"use strict";
//input
const strVoto = prompt("voto");
const voto = Number(strVoto);
if (strVoto === "") {
  alert("inserisci un valore numerico valido");
  throw new Error("Input non valido");
} else if (isNaN(voto)) {
  alert("inserisci un valore numerico valido");
  throw new Error("Input non valido");
} else if (strVoto.trim() === "") {
  alert("Voto non valido");
  throw new Error("Input non valido");
} else if (strVoto === null) {
  alert("inserisci un valore numerico valido");
  throw new Error("Input non valido");
}

//elaborazione
let avviso;
let valido = true;
switch (voto) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    avviso = "Non sufficiente";
    valido = false;
    break;
  case 6:
    avviso = "Sufficiente";
    break;
  case 7:
  case 8:
    avviso = "Buono";
    break;
  case 9:
    avviso = "Ottimo";
    break;
  case 10:
    avviso = "Eccellente";
    break;
  default:
    avviso = "Voto non valido";
    valido = false;
}
const risultato = avviso;

//output
let color = valido ? "green" : "red";

document.write(`<p style='color:${valido ? "green" : "red"}'>${risultato}</p>`);
document.write(`<p style='color:${color}'>${risultato}</p>`);
