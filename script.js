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

const boardGame = () => {
  while (boardCounter < 9)  {
    if (boardCounter % 2 == 0) {
      board[boardCounter].addEventListener('click', playerChoice = () => {
        board[boardCounter].innerHTML = `${playerX.player}`;
     })
    }
    else {
      board[boardCounter].addEventListener('click', opponentChoice = () => {
        board[boardCounter].innerHTML = `${playerO.player}`;
     })
    }
    boardCounter++; 
  }
}

// function controls the player's actions. For now, set to fill the board with a maximum of 5 occurrences for the player, where he is assumed to use X.
play.addEventListener('click', playerGame = () => {
  boardCounter = 0
  let boardX = 5
  for (cell in gameboardObject.gameboard) {
    while (boardCounter <= boardX) {
      board[Math.floor(Math.random()*8)].innerHTML = `${playerX.player}`;
      boardCounter++;
    }
  }
})

boardGame()
