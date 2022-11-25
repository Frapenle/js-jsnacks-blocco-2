// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

const number = parseInt(prompt("Inserisci un numero"));

if (number % 2 == 0) {
    console.log(number);
    document.write(number);
} else {
    console.log(number + 1);
    document.write(number + 1);
}
