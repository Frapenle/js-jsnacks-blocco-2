// Calcola la somma dei primi 10 numeri di un array.

const newArray = [3, 5, 64, -7, 4, 7, 88, -9, 0, 94, 33, 3, 4];

let somma = 0;
let arrayNum = 10;
let maxNum = newArray[0];
console.log(maxNum);

for (let i = 0; i < arrayNum; i++) {
    somma += parseInt(newArray[i]);
    if (newArray[i] > maxNum) {
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
