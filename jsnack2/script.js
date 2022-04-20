const listaInvitati = [];

for (let i = 0; i < 3; i++) {
    const nomi = ["Andrea", "Francesco", "Matteo", "Giulia", "Monica", "Sara"];
    const cognomi = ["Bianchi", "Verdi", "Rossi", "Grandi", "Piccoli", "Medi"];
    const nomiRandom = Math.floor(Math.random() * nomi.length);
    const nomeRandom = nomi[nomiRandom];
    const cognomiRandom = Math.floor(Math.random() * cognomi.length);
    const cognomeRandom = cognomi[cognomiRandom];
    let invitato = nomeRandom + " " + cognomeRandom;
    listaInvitati.push(invitato);
}

console.log(listaInvitati);