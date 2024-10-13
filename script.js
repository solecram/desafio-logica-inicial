'use strict'
const readLineSync = require('readline-sync')
let desejaContinuar = true

function executarPrograma() {
    console.log(`
    ||============= Menu ===============||
    || [1] - menor que 1000 - Ferro     ||
    || [2] - entre 10001 e 2000 - Prata ||
    || [3] - entre 20001 e 5000         ||
    || [4] - entre 50001 e 7000         ||
    || [5] - entre 70001 e 8000         ||
    || [6] - entre 80001 e 9000         ||
    || [7] - entre 90001 e 10000        ||
    || [8] - maior ou igual a 10001     ||
    ||==================================||
        `)
        
        const nome = readLineSync.question('Digite o nome do personagem: ')
        
        let xpPersonagem = parseInt(readLineSync.question('XP: '))
        
        if (xpPersonagem <= 1000) {
            console.log(`O herói de nome ${nome} está no nível Ferro`)
        } else if (xpPersonagem >= 1001 && xpPersonagem <= 2000) {
            console.log(`O herói de nome ${nome} está no nível Bronze`)
        } else if (xpPersonagem >= 2001 && xpPersonagem <= 5000) {
            console.log(`O herói de nome ${nome} está no nível Prata`)
        }else if (xpPersonagem >= 5001 && xpPersonagem <= 7000) {
            console.log(`O herói de nome ${nome} está no nível Ouro`)
        } else if (xpPersonagem >= 7001 && xpPersonagem <= 8000) {
            console.log(`O herói de nome ${nome} está no nível Platina`)
        } else if (xpPersonagem >= 8001 && xpPersonagem <= 9000) {
            console.log(`O herói de nome ${nome} está no nível Ascendente`)
        } else if (xpPersonagem >= 9001 && xpPersonagem <= 10000) {
            console.log(`O herói de nome ${nome} está no nível Imortal`)
        } else {
            console.log(`O herói de nome ${nome} está no nível Radiante`)
        }
        
}

while (desejaContinuar) {
    executarPrograma()

    desejaContinuar = readLineSync.question('Deseja continuar? [s/n]').toLocaleLowerCase()

    if (desejaContinuar === 's') {
        executarPrograma()
    } else {
        console.log('Encerrando...')
        break
    }
}

