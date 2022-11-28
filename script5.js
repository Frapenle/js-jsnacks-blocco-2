/**
 *
 * Generatore di persone fittizie casuali:
 * Il Grande Gatsby ha una lista di nomi e una lista di cognomi, da queste vuole generare una falsa lista di invitati con nome e cognome.
 *
 */

const names = ['Michela', 'Giuseppina', 'Taylor', 'Donna', 'Marsha', 'Fabio', 'Roberto'];
const lastNames = ['Cappelletti', 'Jager', 'Porcinelli', 'Buffetti', 'Forghieri', 'Papagni', 'Marazzini'];

let randomName = names[Math.floor(Math.random() * names.length)];
// console.log(randomName);
let randomLastname = lastNames[Math.floor(Math.random() * lastNames.length)];
// console.log(randomLastname);

let randoms = `${randomName} ${randomLastname}`;
console.log(randoms)


