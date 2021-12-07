const readline = require('readline-sync')
const printB = require('./printBoard')
const printBoard = printB.printBoard

module.exports = class Player {
    constructor(name, gamingBoard) {
        this.name = name,
            this.board = gamingBoard,
            this.turn = '',
            this.turns = [],
            this.winner = false
    }
    makeTurn() {
        let coordinates, coordinatesArr
        do {
            coordinates = readline.question(this.name + " : ")
            coordinatesArr = coordinates.split(';')
        } while (coordinatesArr.length !== 2 || coordinatesArr[0] >= this.board.length || coordinatesArr[1] >= this.board[0].length || coordinatesArr[0] === "" || coordinatesArr[1] === "");
        let y = this.board.length - 1 - parseInt(coordinatesArr[1])
        let x = coordinatesArr[0]
        if (this.board[y][x] == '_') {
            this.board[y][x] = this.turn
            printBoard(this.board)
            this.checkWin()
        }
        else {
            console.log(`Sorry, there is already an ${this.board[y][x]} here`);
            this.makeTurn()
            return
        }
    }
    checkWin() {
        //horizontal
        for (const row of this.board) {
            let count = 0
            for (const item of row) {
                if (item === this.turn) {
                    count++
                }
            }
            if (count === this.board.length) {
                this.winner = true
                console.log(this.name + " wins");
                return
            }
        }

        //vertical
        for (const i in this.board[0]) {
            let count = 0
            for (const j in this.board) {
                if (this.board[j][i] === this.turn) {
                    count++
                }
            }
            if (count === this.board.length) {
                this.winner = true
                console.log(this.name + " wins");
                return

            }
        }

        //diagonal
        let count1 = 0
        let count2 = 0
        for (const i in this.board) {
            for (const j in this.board[i]) {
                if (i == j && this.board[j][i] == this.turn) {
                    count1++
                }
                if (j == this.board.length - 1 - i && this.board[j][i] == this.turn) {
                    count2++
                }
            }
        }
        if (count1 == this.board.length || count2 == this.board.length) {
            this.winner = true
            console.log(this.name + " wins");
            return
        }
    }
}