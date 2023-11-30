//inserimento username nel prompt
let username_insert = prompt('inserisci qui il tuo nome');
//debug per visualizzare il nome che ha dato l'utente
console.log(username_insert);

//inserimento surname nel prompt
let surname_insert = prompt('inserisci qui il tuo cognome');
//debug per visualizzare il cognome che ha dato l'utente
console.log(surname_insert);

//inserimento colore preferito nel prompt
let color_insert = prompt('inserisci qui il tuo colore preferito')
//debug per visualizzare il cognome che ha dato l'utente
console.log(color_insert);

let numero;
numero = '114';
console.log(numero);

console.log(

    `
    ${username_insert} ${surname_insert} ${color_insert} ${numero} 
    `
)
/* document.writeln(username_insert);
document.writeln(surname_insert);
document.writeln(color_insert);
document.writeln(numero); */
document.getElementById('pippo').innerHTML = `${username_insert} ${surname_insert} ${color_insert} ${numero} `;