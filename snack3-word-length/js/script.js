/* Utilizzando const e/o let. Dare la possibilità di inserire due parole. Verificare se le due parole hanno la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due. */

// Tramite due prompt diversi memorizzo le parole inserite dall'utente all'interno di due variabili "const" poichè queste manterranno lo stesso valore e non dovranno cambiare
const firstWord = prompt('Inserisci la prima parola');
const secondWord = prompt('Inserisci la seconda parola');

// Verifico la lunghezza delle due parole e stampo quella più lunga
if (firstWord.length == secondWord.length) {
    console.log(`
    Le due parole inserite hanno lo stesso numero di caratteri:
    ${firstWord}: ${firstWord.length} caratteri
    ${secondWord}: ${secondWord.length} caratteri
    `);
} else if (firstWord.length > secondWord.length) {
    console.log(`
    La prima parola inserita ha il maggior numero di caratteri:
    ${firstWord}: ${firstWord.length} caratteri
    `);
} else {
    console.log(`
    La seconda parola inserita ha il maggior numero di caratteri:
    ${secondWord}: ${secondWord.length} caratteri
    `);
}