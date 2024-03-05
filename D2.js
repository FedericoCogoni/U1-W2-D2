/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 1-")
const num1 = 4
const num2 = 2
if (num1 > num2) {
  console.log(num1 + " è maggiore di " + num2)
} else {
  console.log(num2 + " è maggiore di " + num1)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 2-")
if (num1 !== 5) {
  console.log("not equal")
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)


/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 3-")
const num3 = 5
let resto = num3 % 5
if (resto > 0) {
  console.log("non divisibile per 5")
} else {
  console.log("divisibile per 5")
}
/* ESERCIZIO 4 
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 4-")
const num5 = 6
const num6 = 3

if (num5 === 8 && num6 === 8) {
  console.log("Entrambi i numeri sono 8")
} else if (num5 === 8 || num6 === 8) {
  console.log("Uno dei 2 numeri è 8")
}
if (num5 + num6 === 8) {
  console.log("La somma dei due numeri è 8")
} else if (num5 - num6 === 8 || num6 - num5 === 8) {
  console.log("la sottrazione dei due numeri fa 8")
} else {
  console.log(
    "Nessuno dei 2 numeri è 8, nè la somma nè la differenza dei 2 numeri da 8 come risultato"
  )
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 5-")
let totalShoppingCart = 12
let speditionCost = 10
let freeShippingGoal = 50

if (totalShoppingCart > freeShippingGoal) {
  console.log(
    "hai diritto alla spedizione gratuita! totale ordine: " + totalShoppingCart
  )
} else {
  totalShoppingCart = totalShoppingCart + speditionCost
  console.log("totale ordine " + totalShoppingCart)
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 6-")
const blackFriday20 = totalShoppingCart * 0.8

if (totalShoppingCart > freeShippingGoal) {
  console.log(
    "hai diritto alla spedizione gratuita! totale ordine col BlackFriday: " +
      blackFriday20
  )
} else {
  totalShoppingCart = totalShoppingCart + speditionCost
  console.log("totale ordine col Black Friday " + blackFriday20)
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 7-")
let a = 111
let b = 22
let c = 3
const arrayOfNumbers = [a, b, c]
arrayOfNumbers.sort(function (x, y) {
  return x - y
})
arrayOfNumbers.reverse()

if (a > b && a > c) {
  console.log(arrayOfNumbers)
} else if (b > a && b > c) {
  console.log(arrayOfNumbers)
} else if (c > a && c > b) {
  console.log(arrayOfNumbers)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 8-")
let dataMister = "ciao"
const datatType = typeof dataMister

if (datatType === "number") {
  console.log(dataMister + " è un valore number ")
} else if (datatType === "string") {
  console.log(dataMister + " è un valore string ")
} else if (datatType === "boolean") {
  console.log(dataMister + " è un valore boolean")
} else if (datatType === "object") {
  console.log(dataMister + " è un valore object")
} else {
  console.log(dataMister + " non è né un number né una string né un boolean")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 9-")
let numero = 9
if (numero % 2 === 0) {
  console.log(numero + " è un numero pari")
} else {
  console.log(numero + " è un numero dispari")
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 10-")
let val = 7
if (val < 10) {
  console.log("Meno di 10")
} else if (val < 5) {
  console.log("Meno di 5")
} else {
  console.log("Uguale a 10 o maggiore")
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 11-")
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
}
me.city = "Toronto"
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 12-")
delete me.lastName
console.log(me)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 13-")
me.skills.pop()
console.log(me)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 14-")
const numbers = []
numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(numbers)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 15-")
newNumber = 100
numbers.pop()
numbers.push(newNumber)
console.log(numbers)
