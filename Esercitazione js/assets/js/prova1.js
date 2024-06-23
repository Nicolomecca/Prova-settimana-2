/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let firstPet = pets.shift();
pets.push(firstPet);

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

const cars = [
    {
        brand: 'Ford',
        model: 'Fiesta',
        color: 'red',
        trims: ['titanium', 'st', 'active'],
    },
    {
        brand: 'Peugeot',
        model: '208',
        color: 'blue',
        trims: ['allure', 'GT'],
    },
    {
        brand: 'Volkswagen',
        model: 'Polo',
        color: 'black',
        trims: ['life', 'style', 'r-line'],
    },
]
for (let i = 0; i < cars.length; i++) {
    cars[i].licensePlate = 'true';
}
console.log(cars);
/*
ESERCIZIO 6
Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
Successivamente, rimuovi l'ultimo elemento della prietà "trims" da ogni auto.
*/

cars.push({brand:'Fiat', model:'fiat Punto',color :'Blue',trims :['Gt','st', 'active'],},)

console.log(cars);

for (let i = 0; i < cars.length; i++) {
    cars[i].trims.pop();

}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [] ;

for (let i = 0; i < cars.length; i++){
    const newValue = cars[i].trims[0];
    justTrims.push(newValue);
}

console.log(justTrims);



