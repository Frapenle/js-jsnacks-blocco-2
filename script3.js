// Calcola la somma dei primi 10 numeri di un array.

const newArray = [3, 5, 64, -7, 4, 7, 88, -9, 0, 94, 33, 3, 4];

let somma = 0;
let arrayNum = 10;
// assegnare all'array il primo valore del suo "index"
let maxNum = newArray[0];
// console.log(maxNum);

for (let i = 0; i < arrayNum; i++) {
    // somma dei primi `arrayNum` numeri dell'array
    somma += parseInt(newArray[i]);

    // trovare il valore piu grande tra i primi `arrayNum` dell array
    // se `i` valore nell array è maggiore di `maxNum`
    if (newArray[i] > maxNum) {
        // maxNum prende quel valore
        maxNum = newArray[i];
    }
}

// print somma
console.log(somma);
document.write("Somma " + somma);

// print media
let media = somma / arrayNum;
console.log(media);
document.write(" Media " + media);

// print numero più grande
console.log("Numero più grande " + maxNum);
document.write(" Numero più grande " + maxNum);
