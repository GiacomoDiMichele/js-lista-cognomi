//creo un array con vari cognomi
var lista_cognomi = ['rossi', 'di carlo', 'ghersi',];
//imposto i cognomi in ordine casuale
var cognome_corrente = prompt("inserisci il tuo cognome")
    lista_cognomi.push(cognome_corrente);
lista_cognomi.sort(() => Math.random() - 0.5);
//stampo i cognomi per verificare che siano continuamente in ordine casuale
console.log(lista_cognomi);
