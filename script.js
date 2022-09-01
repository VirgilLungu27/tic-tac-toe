const screen = document.querySelector('body');

const container = document.getElementById('gameboard-container')
const board = document.getElementsByClassName('cell')

const choice = ["X", "O"]
const cellList = []
const button = document.getElementById('test')

const play = document.getElementById('play')
clicked = []

const gameboardObject = {
    gameboard: [0, 1, 2, 3, 4, 5, 6, 7, 8]
};

const gameboardApplied = () => {
    for (cell in gameboardObject.gameboard) {
      gameboardObject.gameboard[cell] = board[cell]
    }
}


const playerX = {
  player: "X"
}

const playerO = {
  player: "O"
}


const boardGame = () => {
  container.addEventListener('click', screenXY = (e) => {
    for (cell in gameboardObject.gameboard) {  
        e.target = board[cell]
        e.target.innerHTML = `${playerX.player}`
    }
  })
} 
  
gameboardApplied()
boardGame()