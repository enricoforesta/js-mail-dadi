"use strict"

// variabile
const elementEmail = String(prompt("inserisci la tua Email"));
let elementAccesso = false;
console.log({ elementEmail });

//Array
const elementListaAccessi = ["lucia.bianchi@gmail.com", "marco.rossi@outlook.it", "giulia.verdi@hotmail.com", "matteo.ferrari@gmail.com", "enrico.foresta@gmail.com", "anna.romano@outlook.it", "luca.esposito@hotmail.com", "sara.colombo@gmail.com", "davide.ricci@outlook.it", "marta.fontana@hotmail.com", "andrea.gallo@gmail.com",];
console.log(elementListaAccessi);

// Ciclo
for (let i = 0; i < elementListaAccessi.length; i++) {

    if (elementListaAccessi[i] === elementEmail) {

        elementAccesso = true;
        break;
    }
}

// Esito
if (elementAccesso) {

    console.log("hai avuto accesso")
}
else {

    console.log("non hai avuto accesso");
}