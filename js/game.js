'use strict'

var MINE = '☢️'
var TILE = '⬜'


var gBoard;

init()
function init() {
    buildMat()
    renderBoard()
}

// builds the initial matrix and inserts to gBoard
function buildMat() {
    var SIZE = 4
    var board = []
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            var location = { i, j }
            board[i][j] = { id: { i, j }, minesAroundCount: 0, isShown: true, isMine: false, isMarked: false }
        }
    }
    board[1][3].isMine = true
    board[2][3].isMine = true
    gBoard = board
    console.log(gBoard);
}

// renders the game board according to gBoard
function renderBoard() {
    // debugger 
    var strHTML = '<table class="table">\n<tbody>\n';
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += '<tr>\n';
        for (var j = 0; j < gBoard[0].length; j++) {
            var cell = gBoard[i][j]
            if (cell.isMine) { cell = MINE }
            if (cell.minesAroundCount) { cell = cell.minesAroundCount }


            strHTML += `<td id="${i}-${j}" onclick="cellClick(this)">${cell}</td>\n`

        }
        strHTML += '</tr>\n'
    }
    strHTML += '</tbody>\n</table>';
    // console.log(strHTML);
    var elGameContainer = document.querySelector('.game-container');
    elGameContainer.innerHTML = strHTML;
}


