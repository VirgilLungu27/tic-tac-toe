const gameboard = document.querySelector('gameboard-container')
const board = document.getElementsByClassName('cell')
const choice = ["X", "O"]
const cellList = []
const button = document.getElementById('test')

const play = document.getElementById('play')

let boardCounter = 0

const gameboardObject = {
    gameboard: ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
};

const playerX = {
  player: "X"
}

const playerO = {
  player: "O"
}


button.addEventListener('click', screenController = () => {
  for (cell in gameboardObject.gameboard) {
    let index = Math.floor(Math.random() * choice.length);
    cell = choice[index];
    cellList.push(cell);
    board[boardCounter].innerHTML = `${cellList[boardCounter]}`;
    boardCounter += 1;
  } 
  cellList.length = 0
  boardCounter = 0
})

play.addEventListener('click', playerGame = () => {
  for (cell in gameboardObject.gameboard) {
    let index = Math.floor(Math.random() * choice.length);
    cell = choice[index];
    cellList.push(cell);
    board[boardCounter].innerHTML = `${playerX.player}`;
    boardCounter += 1;
  }
})