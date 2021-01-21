/* Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
Usiamo i nuovi metodi degli array foreach o filter
Esempio:
const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
Se l’utente inserisce 2 numeri: 1,4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina'. */

// Funzione per generare num random scritta con ES6
const generaRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Creo array predefinito
const carBrands = ['Lamborghini', 'Pagani', 'Aston Martin', 'Bugatti', 'Ferrari', 'Koenigsegg', 'Porsche', 'Bentley', 'Caterham', 'Radical', 'Ariel'];

// Tramite due prompt inserisco il range (min e max) di posizioni da prelevare dall'array principale e verifico che questi due numeri non vadano in conflitto
let min, max;
let sentinel = true;
do {

    alert(`Inserisci due numeri da 0 a ${carBrands.length - 1}, rispettivamente per il numero minimo e il numero massimo del range da selezionare`);

    min = parseInt(prompt('Inserisci il numero di partenza'));
    max = parseInt(prompt('Inserisci il numero di arrivo'));

    if (min < max && min >= 0 && max <= carBrands.length - 1) {
        sentinel = false;
    } else {
        alert('I numeri inseriti non sono validi, riprova!');
    }

} while (sentinel);

console.log(carBrands);

// Filtro elementi nell'array in base alla posizione e li pusho all'interno del nuovo array in base ai numeri di min e max ricavati in precedenza
const range = carBrands.filter((e, i) => {
    return i >= min && i <= max
});

console.log(range);

// Provo forEach per stampare singolarmente in Console tutti gli elementi del range selezionato
range.forEach((e, i) => {
    console.log(`${i}: ${e}`);
});