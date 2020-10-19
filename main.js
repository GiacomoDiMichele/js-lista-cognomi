//creo un array con vari cognomi
var lista_cognomi = ['rossi', 'di carlo', 'ghersi',];

//chiedo il cognome dell'utente attuale e lo pusho nell'array dei cognomi già inseriti
var cognome_corrente = prompt("inserisci il tuo cognome")
    lista_cognomi.push(cognome_corrente);

//imposto tutti i cognomi in ordine casuale
lista_cognomi.sort(() => Math.random() - 0.5);

//stampo i cognomi per verificare che siano continuamente in ordine casuale, compreso quello inserito in seguito
console.log(lista_cognomi);

//genero i cognomi in ordine alfabetico
lista_cognomi.sort();
//verifico che siano in ordine alfabetico
console.log(lista_cognomi);

//trovo la posizione del cognome "di michele" nell'array in ordine alfabetico e la stampo
console.log(lista_cognomi.indexOf('di michele'));
