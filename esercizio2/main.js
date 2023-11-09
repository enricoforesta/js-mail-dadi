"use strict"
//Variabili
const numeroUtente = Math.floor((Math.random() * 6) + 1 ); 
const numeroCpu = Math.floor((Math.random() * 6) + 1 ); 

console.log({numeroUtente});
console.log({numeroCpu});

// Condizione
if(numeroUtente > numeroCpu){
    console.log("Vince Utente")
}
else if(numeroUtente < numeroCpu){
    console.log("Vince CPU")
}
else{
    console.log("Pareggio")
}


