# Mail

Chiedi all’utente la sua email,

controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

## LOGICA

1. Creo un Prompt, e mi salvo l input, in una variabile. 

2. Creo un Array con l email che possono accedere. 

3. Scorro all Array per controllare che l email inserita, sia prensente nella lista.
    SE
    -- L email è presente, stampo un messaggio di conferma
    Altrimenti se
    -- L email non è presente, stampo un messaggio di accesso negato.


# Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?


## LOGICA 

1. Creo due variabili, che creano numeri random da 1 a 6, diversi tra loro.

2. Il vincitore lo stabilisco 
    SE
    -- Il Numero di Utente è maggiore di Numero CPU, stampo "Utente ha vinto"
    ALTRIMENTI SE
    -- Il Numero di Utente è minore di Numero CPU, stampo "CPU ha vinto"
    ALTRIMENTI
    -- Stampo "Pareggio".