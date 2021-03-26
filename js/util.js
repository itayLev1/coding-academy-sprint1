'use strict'


// sets mines in random locations in accordance to number of mines asked by the game
function setMines(board) {
    var coord = getRandomCoord()
    var i = coord[0][0]
    var j = coord[0][2]
    for (i = 0; i < gLevel.MINES; i++) {
        board[i][j].isMine = true
    }
}

// returns a random coordinate to set mines
function getRandomCoord() {
    var coord = []
    coord.push(getRandomInt(0, gLevel.SIZE) + ',' + getRandomInt(0, gLevel.SIZE))
    return coord
}

// returns a random number to get random coordinate
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


// sets the number of mine neighbors for each cell
function setMinesNegsCount(gBoard) {
    var numsStore = []
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[i].length; j++) {
            if (!gBoard[i][j].isMine) {
                gBoard[i][j].minesAroundCount = findMinesNegs(gBoard, i, j);
                numsStore += gBoard[i][j].minesAroundCount
            }
        }
    }
}

// counts the number of neighbors for each cell
function findMinesNegs(board, i, j) {
    var res = 0
    for (var idx = i - 1; idx <= i + 1; idx++) {
        for (var jdx = j - 1; jdx <= j + 1; jdx++) {
            if (jdx === -1 || idx === -1 || jdx === board.length || idx === board.length) continue
            if (board[idx][jdx].isMine) {
                res++
            }
        }
    }
    return res;
}