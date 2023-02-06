// tady je místo pro náš program

let nadpis = document.querySelector('h1')

let vstupUzivatel = prompt('Zadej novy nadpis')


nadpis.innerHTML = vstupUzivatel
let vysledek = document.querySelector('.vysledekZavodu')
const start = 15
const delka = Number(prompt("Zadej delku zavodu"))
const konec = (start+delka) % 24
vysledek.innerHTML = konec
//we can directly write into the body HTML
//NaN value is due to string, 15+'15' is string 1515
//5+5+'hi' is 10 hi
//string works for +, for other operators will be automatically converted 


