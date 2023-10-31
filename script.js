const statusAndBoard = document.querySelector('.status-and-board');
const boardStatus = document.querySelector('.status');
const board = document.querySelector('.board');
const gameInfo = document.querySelector('.gameInfo');
const history = document.querySelector('.history');
const playerX_OrOInit = ['X','O'][Math.random() < .5? 0: 1];
let currentPlayerX_OrO = playerX_OrOInit;
const historyArr = [];
const xHistoryArr = [];
const oHistoryArr = [];
function createBoardSquares(){
    for(let i = 0; i < 9; i++){
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
            xHistoryArr.push(i);
            declareWinner();
        }
        else if(currentPlayerX_OrO === 'O'){
            el.textContent = 'O';
            currentPlayerX_OrO = 'X';
            boardStatus.textContent = `${currentPlayerX_OrO}'s turn`;
            historyArr.push(['O', i]);
            oHistoryArr.push(i);
            declareWinner(); 
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

for(let i = 0; i < winLine.length; i++){
    if(oHistoryArr.includes(winLine[i][0]) && oHistoryArr.includes(winLine[i][1]) && oHistoryArr.includes(winLine[i][2])){
        boardStatus.textContent = 'O wins!';
    } else if(xHistoryArr.includes(winLine[i][0]) && xHistoryArr.includes(winLine[i][1]) && xHistoryArr.includes(winLine[i][2])){
        boardStatus.textContent = 'X wins!';
    }
}
}

function activateGame(){
    boardStatus.textContent = `${currentPlayerX_OrO}'s turn`;
    createBoardSquares();
}
activateGame();