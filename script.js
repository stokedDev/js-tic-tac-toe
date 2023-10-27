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
    document.querySelector('.board btn').classList.add('.square');
    }
    document.querySelectorAll('.board button').forEach((el,i) => el.addEventListener('click', ()=>{
        console.log(`btn ${i} clicked`);
        if(currentPlayerX_OrO === 'X'){
            el.textContent = 'X';
            currentPlayerX_OrO = 'O';
            historyArr.push({'X': i});
            CRUDHistory();
            console.log(historyArr);
        } else if(currentPlayerX_OrO === 'O'){
            el.textContent = 'O';
            currentPlayerX_OrO = 'X';
            historyArr.push({'O': i});
            CRUDHistory();
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
}
function CRUDHistory(){
    const historyLi = document.createElement('li');
    history.appendChild(historyLi);
    document.querySelectorAll('.history li').querySelectorAll('li').forEach((el,i,arr) => {
            const goToMoveBtn = document.createElement(`button`).classList.add('history-btn');
            document.querySelector('.history-btn').textContent = `Go to move ${i}.`;
        // arr[arr.length - 1].textContent = `Game is at ${historyArr.length === 0? 'first move.': `move ${historyArr.length}`}`;
        // el.textContent = `Game is at ${historyArr.length === 0? 'first move.': `move ${historyArr.length}`}`;
    });
}
function activateGame(){
    boardStatus.textContent = `${currentPlayerX_OrO}'s turn`;
    createBoardSquares();
    CRUDHistory();
}
activateGame();