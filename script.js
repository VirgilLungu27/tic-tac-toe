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

// used for testing purposes.
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


// function controls the player's actions. For now, set to fill the board with a maximum of 5 occurrences for the player, where he is assumed to use X.
play.addEventListener('click', playerGame = () => {
  let boardX = 5
  for (cell in gameboardObject.gameboard) {
    while (boardCounter <= boardX) {
      board[Math.floor(Math.random()*8)].innerHTML = `${playerX.player}`;
      boardCounter++;
    }
  }
})
