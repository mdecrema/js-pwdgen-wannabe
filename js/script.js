var nome = prompt('Inserisci il tuo nome');
var cognome = prompt('Inserisci il tuo cognome');
var colorePreferito = prompt('Inserisci il tuo colore preferito');

var pwdGen = nome + cognome + colorePreferito + "19";

document.getElementById('password').innerHTML = pwdGen; 
