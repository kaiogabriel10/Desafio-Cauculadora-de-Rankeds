
function winRanked(win,defeat){
    return win-defeat
}

let player1Balance = winRanked(25,10)

if(player1Balance < 10){
    console.log(`O Héroi tem o saldo de ${player1Balance} e está no Level Ferro`)
}
else if(player1Balance > 10 &&  player1Balance <= 20){
    console.log(`O Héroi tem o saldo de ${player1Balance} e está no Level Bronze`)
}
else if(player1Balance > 20 && player1Balance <= 50){
    console.log(`O Héroi tem o saldo de ${player1Balance} e está no Level Prata `)
}
else if(player1Balance > 50 && player1Balance <= 80){
    console.log(`O Héroi tem o saldo de ${player1Balance} e está no Level Ouro `)
}
else if(player1Balance > 80 && player1Balance <= 90){
    console.log(`O Héroi tem o saldo de ${player1Balance} e está no Level Diamante `)
}
else if(player1Balance > 90 && player1Balance <= 100){
    console.log(`O Héroi tem o saldo de ${player1Balance} e está no Level Lendário `)
}
else if(player1Balance > 100){
    console.log(`O Héroi tem o saldo de ${player1Balance} e está no Level Imortal`)
}
