// Calcola la somma dei primi 10 numeri di un array.

const newArray = [3, 5, 6, 7, 4, 7, 88, -9, 0, 3, 4];

let somma = 0;

for (let i = 0; i <= 10; i++) {
    somma += parseInt(newArray[i]);
}
console.log(somma)
document.write(somma);