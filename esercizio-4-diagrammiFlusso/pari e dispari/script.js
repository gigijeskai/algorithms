"use strict";
//input
const strPuntata = prompt("inserisci una puntata minima di 1");
const puntata = Number(strPuntata);
const lancio1 = Math.floor(Math.random() * 6) + 1;
const lancio2 = Math.floor(Math.random() * 6) + 1;
const lancio3 = Math.floor(Math.random() * 6) + 1;
const sommaPrimiDueLanci = lancio1 + lancio2;
const sommaTuttiLanci = sommaPrimiDueLanci + lancio3;
const bonusMinimoVittoria = 10;
// elaborazione
let tempVincita;
if (sommaPrimiDueLanci < lancio3) {
  tempVincita = puntata * 5 + 10;
} else tempVincita = 0;
if (sommaTuttiLanci % 2 == 0 && puntata >= 20) {
  tempVincita = 10;
}
// output
const vincita = tempVincita;
alert(`la tua vincita è di ${vincita}€`);
