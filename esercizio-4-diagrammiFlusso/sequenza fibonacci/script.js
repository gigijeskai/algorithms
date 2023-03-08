"use strict";
//input
const strPrimoNumeroFibonacci = prompt("inserisci un numero della sequenza di fibonacci");
const primoNumeroFibonacci = Number(strPrimoNumeroFibonacci);
const strSecondoNumeroFibonacci = prompt("inserisci un numero della sequenza di fibonacci");
const secondoNumeroFibonacci = Number(strSecondoNumeroFibonacci);
//elaborazione
const tempPrimoRisultato = primoNumeroFibonacci + secondoNumeroFibonacci;
const tempSecondoRisulato = tempPrimoRisultato + secondoNumeroFibonacci;
//output
const primoOutput = tempPrimoRisultato;
const secondoOutput = tempSecondoRisulato;
alert(`la sequenza continua con ${primoOutput} ${secondoOutput}`);
