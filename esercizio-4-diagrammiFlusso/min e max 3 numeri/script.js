"use strict";
//input
const strNumero1 = prompt("inserisci il primo di 3 numeri");
const numero1 = Number(strNumero1);
const strNumero2 = prompt("inserisci il secondo di 3 numeri");
const numero2 = Number(strNumero2);
const strNumero3 = prompt("inserisci il terzo di 3 numeri");
const numero3 = Number(strNumero3);
//elaborazione
//trova il max
let tempNumeroMax = numero1;
if (numero2 > tempNumeroMax) {
  tempNumeroMax = numero2;
}
if (numero3 > tempNumeroMax) {
  tempNumeroMax = numero3;
}
//trova il minimo
let tempNumeroMin = numero1;
if (numero2 < tempNumeroMin) {
  tempNumeroMin = numero2;
}
if (numero3 < tempNumeroMin) {
  tempNumeroMin = numero3;
}
//output
const numeroMinimo = tempNumeroMin;
const numeroMassimo = tempNumeroMax;
alert(`il massimo è ${numeroMassimo} e il minimo è ${numeroMinimo}`);
