const screen = document.querySelector('body');

const board = document.getElementsByClassName('cell')
const choice = ["X", "O"]
const cellList = []
const button = document.getElementById('test')

const play = document.getElementById('play')

clicked = []
first_row = []

const gameboardObject = {
    gameboard: [0, 1, 2, 3, 4, 5, 6, 7, 8]
};

const playerX = {
  player: "X"
}

const playerO = {
  player: "O"
}


const getXYPosition = () => {
  screen.addEventListener('click', screenXY = (e) => {
    let x, y;
    y = e.clientY;
    x = e.clientX;
    console.log(x, y)
  })
}


const boardGame = () => {
  for (cell in gameboardObject.gameboard)  {
      board[cell].addEventListener('click', playerChoice = (e) => {
        let rect = e.target.getBoundingClientRect()
        clicked.push(rect)
        board[clicked.length - 1].innerHTML = `${playerX.player}`
      })
    }

}

// function controls the player's actions. For now, set to fill the board with a maximum of 5 occurrences for the player, where he is assumed to use X.
/* play.addEventListener('click', playerGame = () => {
  gameboardObject.gameboard = 0
  let boardX = 5
  for (cell in gameboardObject.gameboard) {
    while (gameboardObject.gameboard <= boardX) {
      board[Math.floor(Math.random()*8)].innerHTML = `${playerX.player}`;
      gameboardObject.gameboard++;
    }
  }
})
*/

getXYPosition()
// boardGame()