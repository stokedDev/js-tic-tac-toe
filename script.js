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
            // console.log(historyArr);
        }
        else if(currentPlayerX_OrO === 'O'){
            el.textContent = 'O';
            currentPlayerX_OrO = 'X';
            boardStatus.textContent = `${currentPlayerX_OrO}'s turn`;
            historyArr.push(['O', i]);
            oHistoryArr.push(i);
            declareWinner(); 
            // console.log(historyArr);
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


    // for(const square in board){

    // }



    // const OMatchWinArr = [];
    // const XMatchWinArr = [];
    // const xHistory = [];
//     oHistoryArr.sort((a,b) => a - b); 
//     xHistoryArr.sort((a,b) => a - b);
//     for(let q = 0; q < winLine.length; q++){
//     for(let i = 0; i < xHistoryArr.length; i++){
//             if(i + 1 && i + 2 && xHistoryArr[i] === winLine[q][0] && xHistoryArr[i + 1] === winLine[q][1] && xHistoryArr[i + 2] === winLine[q][2]){
//                 boardStatus.textContent = 'X wins!';
//             }
//     for(let i = 0; i < oHistoryArr.length; i++){         
//             if(i + 1 && i + 2 && oHistoryArr[i] === winLine[q][0] && oHistoryArr[i + 1] === winLine[q][1] && oHistoryArr[i + 2] === winLine[q][2]){
//                 boardStatus.textContent = 'O wins!';
//             }
//     }
// }
for(let i = 0; i < winLine.length; i++){
    if(oHistoryArr.includes(winLine[i][0]) && oHistoryArr.includes(winLine[i][1]) && oHistoryArr.includes(winLine[i][2])){
        boardStatus.textContent = 'O wins!';
    } else if(xHistoryArr.includes(winLine[i][0]) && xHistoryArr.includes(winLine[i][1]) && xHistoryArr.includes(winLine[i][2])){
        boardStatus.textContent = 'X wins!';
    }
}
    
// }
    /* keep track of tic tac toe square button textContent in array and if X or O has winLine update boardStatus */
    /* only push to OMatchWinArr or XMatchWinArr if when these arrays are ordered they have a length of 3 and match a winLine otherwise empty matchWinArr and push */
    // for(let i = 0; i < historyArr.length; i++){
    //     for(let w = 0; w < winLine.length; w++){
    //         for(let e = 0; e < winLine[w].length; e++){
    //             if(historyArr[i][0] === 'X' && historyArr[i][1] === winLine[w][e]){ /* if XMatchWinArr has all numbers of a winLine update boardStatus */
    //                 XMatchWinArr.push(['X', winLine[w][e]]);
    //                 //  console.log(XMatchWinArr);
    //             } else if(historyArr[i][0] === 'O' && historyArr[i][1] === winLine[w][e]){
    //                 OMatchWinArr.push(['O', winLine[w][e]]);
    //                 //  console.log(OMatchWinArr);
    //             }
    //         }
    //     }
    // }
    /*
        to calculateWinner:
        loop through array of 
    */
    // console.log(['OMatchWinArr', OMatchWinArr]);
    // console.log(['XMatchWinArr', XMatchWinArr]);

    // const uniqueXMatchWinArr = [...new Set(XMatchWinArr.map(el => el[1]))].toSorted((a,b) => a - b);
    // console.log(uniqueXMatchWinArr);
    // const uniqueOMatchWinArr = [...new Set(OMatchWinArr.map(el => el[1]))].toSorted((a,b) => a - b);
    // console.log(uniqueOMatchWinArr);
    

    // for(let i = 0; i < winLine.length; i++){
    //     if(winLine[i][0] === uniqueXMatchWinArr[0] && winLine[i][1] === uniqueXMatchWinArr[1] && winLine[i][2] === uniqueXMatchWinArr[2]){
    //         boardStatus.textContent = 'X Wins!';
    //     }
    // }
    // for(let i = 0; i < winLine.length; i++){
    //     if(winLine[i][0] === uniqueOMatchWinArr[0] && winLine[i][1] === uniqueOMatchWinArr[1] && winLine[i][2] === uniqueOMatchWinArr[2]){
    //         boardStatus.textContent = 'O Wins!';
    //     }
    // }
//     if(uniqueXMatchWinArr.length === 3){
//          boardStatus.textContent = 'X Wins!'; 
//     }
//     if(uniqueOMatchWinArr.length === 3){
//         boardStatus.textContent = 'O Wins!'; 
//    }
    // for(let i = 0; i < winLine.length; i++){
    //     if(winLine[i][0] === uniqueXMatchWinArr[0][1] && winLine[i][1] === uniqueXMatchWinArr[1][1] && winLine[i][2] === uniqueXMatchWinArr[2][1] && uniqueXMatchWinArr[0][0] === 'X') {
    //         // boardStatus.textContent = 'X wins.';
    //         console.log('X wins.');
    //     } else if(winLine[i][0] === uniqueOMatchWinArr[0][1] && winLine[i][1] === uniqueOMatchWinArr[1][1] && winLine[i][2] === uniqueOMatchWinArr[2][1] && uniqueOMatchWinArr[0][0] === 'O') {
    //         // boardStatus.textContent = 'O wins.';
    //         console.log('O wins.');
    //     }

    }  
    // console.log(board);
// }
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