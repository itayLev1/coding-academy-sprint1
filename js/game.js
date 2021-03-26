'use strict'

var GROUND = '🟫'
var MINE = '💥';
var TILE = '🟩';

// var gGame = {
//     isOn: false,
//     shownCount: 0,
//     markedCount: 0,
//     secsPassed: 0
// }

var gLevel = {
    SIZE: 4,
    MINES: 2
};

var gBoard;

// initGame()
// initialize the game (reset the board)
function initGame() {
    gBoard = buildBoard(gLevel.SIZE)
    renderBoard(gBoard)
}

// builds the initial matrix and inserts to gBoard
function buildBoard(SIZE) {
    var board = []
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = { minesAroundCount: 0, isShown: false, isMine: false, isMarked: false }
        }
    }
    setMines(board)
    setMinesNegsCount(board)
    return board
}

// renders the game board by demand
function renderBoard(board) {
    var strHTML = '<table class="table">\n<tbody>\n';
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>\n';
        for (var j = 0; j < board[0].length; j++) {
            var cell;
            if (board[i][j].isShown) {
                cell = board[i][j].isMine ? MINE : (board[i][j].minesAroundCount || GROUND);
            } else {
                cell = TILE
            }
            strHTML += `<td class="cell" id="${i},${j}" onclick="cellClicked(this)"><span class="cell-inner">${cell}</span></td>\n`
        }
        strHTML += '</tr>\n'
    }
    strHTML += '</tbody>\n</table>';
    var elGameContainer = document.querySelector('.game-container');
    elGameContainer.innerHTML = strHTML;
}

// reacts to cell click events
function cellClicked(elCell) {
    var nextBoard = gBoard
    nextBoard[elCell.id[0]][elCell.id[2]].isShown = true
    gBoard = nextBoard
    renderBoard(gBoard)
}

function callMarked() {

}

function checkGameOver() {

}

function expandShown(board, elCell, i, j) {

}

function startTimer() {

}