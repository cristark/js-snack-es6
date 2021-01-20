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