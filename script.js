const gameboard = document.querySelector('gameboard-container')
const board = document.getElementsByClassName('cell')
const choice = ["X", "O"]
const cellList = []
let boardCounter = 0

const gameboardObject = {
    gameboard: ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
};

const player = () => {
    return "X";    
};

const opponent = () => {
    return "O";
}

const screenController = () => {
  for (cell in gameboardObject.gameboard) {
    let index = Math.floor(Math.random() * choice.length);
    cell = choice[index];
    cellList.push(cell);
  }
  while (boardCounter < cellList.length) {
    board[boardCounter].innerHTML = `${cellList[boardCounter]}`;
    boardCounter += 1;
  }
}