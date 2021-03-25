'use strict'



function setMinesNegsCount(gBoard) {
    // debugger
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


function findMinesNegs(board, i, j) {
    var res = 0
    for (var idx = i - 1; idx <= i + 1; idx++) {
        for (var jdx = j - 1; jdx <= j + 1; jdx++) {
            if (jdx === -1 || idx === -1 || jdx === board.length || idx === board.length) continue
            if (gBoard[idx][jdx].isMine) {
                res++
            }
        }
    }
    return res;
}