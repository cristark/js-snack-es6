/* Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. */

// Creo variabile che ospiterà il peso minore tra le bici
let pesoMinore;

// Creo array di oggetti contenente le caratteristiche delle varie bici
const listaBici = [
    {
        nome : 'Bianchi',
        modello : 'Methanol',
        peso : 10000
    },
    {
        nome : 'Cannondale',
        modello : 'Jekyll AL4',
        peso : 14968
    },
    {
        nome : 'Santa Cruz',
        modello : 'V10',
        peso : 15960
    },
];

console.log(listaBici);

// Attraverso il destructuring creo delle variabili che ospiteranno le caratteristiche di ogni singola bici
const [bici1, bici2, bici3] = listaBici;

// Confronto tra pesi delle varie bici per capire quella che ha il peso minore ed assegnazione alla variabile specifica
if (bici1.peso > bici2.peso) {
    pesoMinore = bici2.peso;
    console.log(bici2);
} else if (bici2.peso > bici3.peso) {
    pesoMinore = bici3.peso;
    console.log(bici3);
} else if (bici3.peso > bici1.peso) {
    pesoMinore = bici1.peso;
    console.log(bici1);
} else {
    console.log('Le bici hanno lo stesso peso');
}
