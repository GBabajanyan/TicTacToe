const readline = require('readline-sync')
const Player = require('./playerClass')
const printB = require('./printBoard')
const printBoard = printB.printBoard

const playingBoard = [
    ['_', '_', "_"],
    ['_', '_', "_"],
    ['_', '_', "_"]
]

const p1Name = readline.question("First Player: ")
const p1 = new Player(p1Name, playingBoard)
const p2Name = readline.question("Second Player: ")
const p2 = new Player(p2Name, playingBoard)

console.log('tossing a dice for turns...');
const random = Math.random()
p1.turn = random > 0.5 ? "X" : "O"
p2.turn = random > 0.5 ? "O" : "X"

setTimeout(() => {
    printBoard([
        ['0;2', '1;2', '2;2'],
        ['0;1', '1;1', '2;1'],
        ['0;0', '1;0', '2;0']
    ])
}, 1000)

setTimeout(() => {
    console.log(`${p1.name}:${p1.turn}\n${p2.name}:${p2.turn}`);
    console.log('You have to write coordinates STRICTLY in x;y form');
    let count = 0
    let firstPlayer = p1.turn == 'X' ? p1 : p2
    let secondPlayer = p1.turn == 'O' ? p1 : p2

    while (!p1.winner && !p2.winner) {
        count % 2 == 0 ? firstPlayer.makeTurn() : secondPlayer.makeTurn();
        count++
    }
}, 2000)
