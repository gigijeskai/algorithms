"use strict";
//input
const strKwBolletta = prompt("inserisci il consumo dei kw");
const kwBolletta = Number(strKwBolletta);
const costoFisso = 20;
const costoFissoTrasportoEnergia = 35;
const costoMinimoKw = 0.2;
const costoBaseKw = 0.25;
const costoMaggiorato = 0.3;
const tagliaMaxConsumo = 10000;
const tagliaMediaConsumo = 5000;
const tagliaMinimaConsumo = 1000;
if (strKwBolletta === "") {
  alert("inserisci un valore numerico valido");
  throw new Error("Input non valido");
}
//elaborazione
let tempCostoFinale = kwBolletta;
if (tempCostoFinale > tagliaMaxConsumo) {
  tempCostoFinale = kwBolletta * costoMaggiorato + costoFissoTrasportoEnergia;
}
if (tempCostoFinale > tagliaMinimaConsumo) {
  tempCostoFinale = kwBolletta * costoBaseKw + costoFisso;
}
if (tempCostoFinale <= tagliaMinimaConsumo) {
  tempCostoFinale = kwBolletta * costoMinimoKw + costoFisso;
}

//output
const costoFinale = tempCostoFinale;
alert(`il costo finale della bolletta è: ${costoFinale}`);
