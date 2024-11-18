const mail = prompt ("inserisci la tua email");
console.log(mail);

const nomipersone = ["Marco@prova.it", "Luca@hotmail.it", "Alessandro.lori@hotmail"];
if (nomipersone.includes(mail)) {
    console.log("accesso consentito");
    let cpu = Math.floor((Math.random() * 6) + 1);
console.log(cpu + " dadocpu");

let giocatore = Math.floor((Math.random() * 6) + 1);
console.log(giocatore + " dadogiocatore");

if (giocatore > cpu) {
    console.log("Giocatore ha vinto");
} else if (cpu > giocatore) {
    console.log("CPU ha vinto");
} else {
    console.log("Pareggio");
}

} else {
    console.log("accesso negato");
}



