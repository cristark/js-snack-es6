/* Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. */

// Creo array di oggetti contenente le caratteristiche delle varie bici
const listaBici = [
    {
        nome : 'Bianchi',
        modello : 'Methanol',
        peso : 14968
    },
    {
        nome : 'Cannondale',
        modello : 'Jekyll AL4',
        peso : 10341
    },
    {
        nome : 'Santa Cruz',
        modello : 'V10',
        peso : 15960
    },
];

console.log(listaBici);

// Attraverso un foreach e destructuring trovo la bici con il peso minore all'interno della lista
let pesoMinore = listaBici[0].peso;

listaBici.forEach((element) => {
    const {peso} = element;
    
    if (peso < pesoMinore) {
        pesoMinore = element;
    }
    
});
console.log(pesoMinore);

// Destrutturo gli elementi della bici con il peso minore
const {nome, modello, peso} = pesoMinore;

// Stampo su documento HTML i dati della bici con peso minore
document.getElementById('bici').innerHTML = `
<p>La bici con il peso minore tra quelle presenti all'interno della lista è la seguente:</p>
<ul>
    <li>Nome : ${nome}</li>
    <li>Modello : ${modello}</li>
    <li>Peso : ${peso / 1000} kg</li>
</ul> `;