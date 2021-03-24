'use strict'

function setMinesNegsCount(i ,j){
    var minesNegs = []
    var cell = gBoard[i][j]
    for (var i = cell.i-1; i <= cell.i+1; i++) {
        if (i < 0 || i >= gBoard.length) continue;
        for (var j = cell.j - 1; j <= cell.j + 1; j++) {
            if (j < 0 || j >= gBoard[0].length) continue;
            if (i === cell.i && j === cell.j) continue;
                minesNegs.push([i,j])
        }
    }
    return minesNegs;
}

function cellClick(elTile) {
    var elTileId = elTile.getAttribute('id')
    var split = elTileId.split('-')
    console.log(split);
    var minesLocations = setMinesNegsCount(elTile.dataset.i, elTile.dataset.j)
    
}























// function tileClick(elTile) {
//     var i = elTile.dataset.i
//     var j = elTile.dataset.j
//     console.log(i, j);
// }

// // returns a random location { i: i, j: j }
// function getRandomLocation() {
//     var location = {}
//     var i = getRandomInt(0, 4)
//     var j = getRandomInt(0, 4)
//     location = { i: i, j: j }

//     // console.log(location);
//     return location
// }

// // returns a random number
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }

// function countMineNegs() {

// }


// function countAvailable() {
//     var count = 0
//     for (var i = pos.i - 1; i <= pos.i + 1; i++) {
//         if (i < 0 || i >= gCinema.length) continue;
//         for (var j = pos.j - 1; j <= pos.j + 1; j++) {
//             if (j < 0 || j >= gCinema[0].length) continue;
//             if (i === pos.i && j === pos.j) continue;

//             var cell = gBoard[i][j]
//             if (cell.isMine && !cell.isBooked) count++;
//         }
//     }
//     return count;
// }


