/* Utilizzando const e/o let e template literal. Creare due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari. */

// Funzione per generare num random scritta con ES6
const generaRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Genero numero random che indicherà il numero di elementi contenuti nell'array dei numeri
let arrNum = generaRandom(5, 30);
console.log(arrNum);

// Inserisco dei numeri random all'interno dell'array
let numList = [];

for (let i = 0; i < arrNum; i++) {

    let num = generaRandom(1, 100);

    if (numList.includes(num) == false) {
        numList.push(num);
    }
}

console.log(numList);

// Aggiungo del testo ai div nell'HTML usando il template literal ES6
document.getElementById('green').innerHTML = `
Numeri Pari: <br> 
`;
document.getElementById('red').innerHTML = `
Numeri Dispari: <br> 
`;

// Divido i numeri pari da quelli dispari all'interno dell'array di numeri precedentemente generato e li inserisco nei rispettivi div nell'HTML
for (let i = 0; i < numList.length; i++) {

    if (numList[i] % 2 == 0) {
        document.getElementById('green').innerHTML += `${numList[i]} `;
    } else {
        document.getElementById('red').innerHTML += `${numList[i]} `;
    }

}