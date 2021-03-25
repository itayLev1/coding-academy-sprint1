'use strict'

var MINE = '☢️'
var TILE = '⬜'

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}
var gLevel = {
    SIZE: 4,
    MINES: 2
}
var gBoard;

initGame()
function initGame() {
    gBoard = buildBoard()
    renderBoard()
}


// builds the initial matrix and inserts to gBoard
function buildBoard() {
    var SIZE = 4
    var board = []
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = { id: { i, j }, minesAroundCount: 0, isShown: false, isMine: false, isMarked: false }
        }
    }
    board[1][3].isMine = true
    board[2][3].isMine = true
    gBoard = board
    console.log(gBoard);
}


// renders the game board according to gBoard
function renderBoard() {
    var strHTML = '<table class="table">\n<tbody>\n';
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += '<tr>\n';
        for (var j = 0; j < gBoard[0].length; j++) {
            // debugger
            var cell;

            if (gBoard[i][j].isMine) {
                // console.log(gBoard[i][j]);
                cell = MINE
            }

            if (gBoard[i][j].isShown && gBoard[i][j].minesAroundCount > 0) {
                cell = gBoard[i][j].minesAroundCount
                console.log('cell:', cell);
            }

            gBoard[i][j].isShown ? cell : cell = TILE

            strHTML += `<td id="${i},${j}" onclick="cellClicked(this)">${cell}</td>\n`
        }
        strHTML += '</tr>\n'
    }
    strHTML += '</tbody>\n</table>';
    var elGameContainer = document.querySelector('.game-container');
    elGameContainer.innerHTML = strHTML;
}

function cellClicked(elCell) {

    // console.log(elCell);
    // var elCellInnerText = elCell.innerText
    // if (Number.isInteger(elCellInnerText)) {
    //     setMinesNegsCount(gBoard)
    //     // console.log('after if' ,elCellInnerText);
    //     gBoard[elCell.id[0]][elCell.id[1]].isShown = true
    //     console.log('gBoard after click' ,gBoard);
    // }
    // console.log(gBoard);
    // renderBoard()
}


function callMarked() {

}

function checkGameOver() {

}

function expandShown(board, elCell, i, j) {

}


