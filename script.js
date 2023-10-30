const statusAndBoard = document.querySelector('.status-and-board');
const boardStatus = document.querySelector('.status');
const board = document.querySelector('.board');
const gameInfo = document.querySelector('.gameInfo');
const history = document.querySelector('.history');
const playerX_OrOInit = ['X','O'][Math.random() < .5? 0: 1];
let currentPlayerX_OrO = playerX_OrOInit;
const historyArr = [];
function createBoardSquares(){
    for(let i = 1; i <= 9; i++){
    const squareBtn = document.createElement('button');
    board.appendChild(squareBtn);
    }
    document.querySelectorAll('.board button').forEach((el,i) => el.addEventListener('click', () => {
        console.log(`btn ${i} clicked`);
        if(currentPlayerX_OrO === 'X'){
            el.textContent = 'X';
            currentPlayerX_OrO = 'O';
            boardStatus.textContent = `${currentPlayerX_OrO}'s turn`;
            historyArr.push(['X', i]);
            declareWinner();
            console.log(historyArr);
        }
        else if(currentPlayerX_OrO === 'O'){
            el.textContent = 'O';
            currentPlayerX_OrO = 'X';
            boardStatus.textContent = `${currentPlayerX_OrO}'s turn`;
            historyArr.push(['O', i]);
            declareWinner(); 
            console.log(historyArr);
        }
    }));
}
function declareWinner(){
    const winLine = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let winner = ''; 
    const matchWinArrO = [];
    const matchWinArrX = [];
    
    for(let i = 0; i < historyArr.length; i++){
        for(let w = 0; w < winLine.length; w++){
            for(let e = 0; e < winLine[w].length; e++){
                if(historyArr[i][0] === 'X' && historyArr[i][1] === winLine[w][e]){
                     matchWinArrX.push(['X', winLine[w][e]]);
                     console.log(matchWinArrX);
                } else if(historyArr[i][0] === 'O' && historyArr[i][1] === winLine[w][e] && matchWinArrO[matchWinArrO.length - 1][1] !== winLine[w][e]){
                     matchWinArrO.push(['O', winLine[w][e]]);
                     console.log(matchWinArrO);
                }
            }
        }
    }
    // for(let i = 0; i < winLine.length; i++){
    //     if(winLine[i][0] === matchWinArrX[0][1] && winLine[i][1] === matchWinArrX[1][1] && winLine[i][2] === matchWinArrX[2][1] && matchWinArrX[0][0] === 'X') {
    //         // boardStatus.textContent = 'X wins.';
    //         console.log('X wins.');
    //     } else if(winLine[i][0] === matchWinArrO[0][1] && winLine[i][1] === matchWinArrO[1][1] && winLine[i][2] === matchWinArrO[2][1] && matchWinArrO[0][0] === 'O') {
    //         // boardStatus.textContent = 'O wins.';
    //         console.log('O wins.');
    //     }

    // }  
    // console.log(board);
   for(let i = 0; i < matchWinArrO.length; i++){
    if(matchWinArrO[i - 1][1] === matchWinArrO[i][1]){
        matchWinArrO.splice(i,1);
    }
   }
   for(let i = 0; i < matchWinArrX.length; i++){
    if(matchWinArrX[i - 1][1] === matchWinArrX[i][1]){
        matchWinArrX.splice(i,1);
    }
   }
}
// function CRUDHistory(){
//     for(let i = 0; i < historyArr.length; i++){
//         history.appendChild('<li><button></button></li>');
//         // document.querySelectorAll('.history li button').textContent = `Game is at ${historyArr.length === 0? 'first move': `move ${history.length}``;
//     }
//     document.querySelectorAll('.history li button').textContent = `Game is at ${historyArr.length === 0? 'first move': `move ${history.length}`}`;
// }
function activateGame(){
    boardStatus.textContent = `${currentPlayerX_OrO}'s turn`;
    // CRUDHistory();
    createBoardSquares();
    // declareWinner();
}
activateGame();