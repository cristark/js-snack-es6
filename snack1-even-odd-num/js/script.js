/* Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo. */

let userNum;
let sentinel = true;

do {

    userNum = parseInt(prompt('Inserisci un numero'));

    if (isNaN(userNum)) {
        alert('Attenzione! Non hai inserito alcun numero. Riprova');
    } else if (userNum <= 0) {
        alert('Numero non valido!');
    } else {
        sentinel = false;
    }

} while(sentinel);

const message = 'Il numero pari più vicino a quello inserito è:';

if (userNum % 2 == 0) {
    console.log(`${message} ${userNum}`);
} else {
    console.log(`${message} ${userNum + 1}`);
}