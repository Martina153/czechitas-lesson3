// tady je místo pro náš program

let jmenoPrijmeni=prompt("Zadej svoje jmeno a prijmeni.")
let rokNarozeni=Number(prompt("Zadej rok narozeni."))

function calculateAge(rokNarozeni) {
    let sucasnyRok = new Date().getFullYear()
    let vek = sucasnyRok - rokNarozeni
    return vek;
  }
  
  let vek = calculateAge(rokNarozeni);

document.body.innerHTML+= "<p>" + jmenoPrijmeni + ", vek: "+vek +"</p>";

let oblibenaBarva = prompt("Zadej oblibenu barvu.")
uzivatel = document.querySelector('p')
uzivatel.style.color= oblibenaBarva



