const gameboard = document.querySelector('gameboard-container')
const board = document.getElementsByClassName('cell')
const choice = ["X", "O"]
const cellList = []
let boardCounter = 0

const gameboardObject = {
    gameboard: ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
};

const screenController = () => {
  for (cell in gameboardObject.gameboard) {
    let index = Math.floor(Math.random() * choice.length);
    cell = choice[index];
    cellList.push(cell);
  }
/*  while (boardCounter < cellList.length) {
    board[boardCounter].innerHTML = `${cellList[boardCounter]}`;
    boardCounter += 1;
  } */
}

const playerGame = () => {
    while (boardCounter < cellList.length) {
        if (board[boardCounter].innerHTML == "") {
           board[boardCounter].innerHTML = "X";
           boardCounter += 1;
        }
        else {
           console.log("Already occupied.")
        }
    }
};

const opponentGame = () => {
    return "O";
}