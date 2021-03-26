'use strict'

var MINE = '☢️'
var TILE = '⬜'

// var gGame = {
//     isOn: false,
//     shownCount: 0,
//     markedCount: 0,
//     secsPassed: 0
// }
// var gLevel = {
//     SIZE: 4,
//     MINES: 2
// }

var gBoard
initGame()
function initGame() {

    gBoard = buildBoard()
    console.log(gBoard);

    renderBoard(gBoard)
}


// builds the initial matrix and inserts to gBoard
function buildBoard() {
    var SIZE = 4
    var board = []
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = { minesAroundCount: 0, isShown: false, isMine: false, isMarked: false }
        }
    }
    board[1][3].isMine = true
    board[2][3].isMine = true
    setMinesNegsCount(board)
    return board
}


// renders the game board according to gBoard
function renderBoard(board) {
    var strHTML = '<table class="table">\n<tbody>\n';
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>\n';
        for (var j = 0; j < board[0].length; j++) {
            // debugger
            if (!board[i][j].isShown) {
                strHTML += `<td id="${i},${j}" onclick="cellClicked(this)">${TILE}</td>\n`
            } else {
                if (board[i][j].isMine) {
                    strHTML += `<td id="${i},${j}" onclick="cellClicked(this)">${MINE}</td>\n`
                }
                if (board[i][j].minesAroundCount > 0) {
                    strHTML += `<td id="${i},${j}" onclick="cellClicked(this)">${board[i][j].minesAroundCount}</td>\n`
                }
            }
        }
        strHTML += '</tr>\n'
    }
    strHTML += '</tbody>\n</table>';
    var elGameContainer = document.querySelector('.game-container');
    elGameContainer.innerHTML = strHTML;
}

function cellClicked(elCell) {
    var nextBoard = gBoard
    nextBoard[elCell.id[0]][elCell.id[2]].isShown = true
    console.log(nextBoard)
    gBoard = nextBoard
    renderBoard(gBoard)
}


function callMarked() {

}

function checkGameOver() {

}

function expandShown(board, elCell, i, j) {

}





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



