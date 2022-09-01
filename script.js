const screen = document.querySelector('body');
const container = document.getElementById('gameboard-container')
const board = document.getElementsByClassName('cell')

const button = document.getElementById('test')

const play = document.getElementById('play')
clicked = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const playerX = {
  player: "X"
}

const playerO = {
  player: "O"
}


const boardGame = () => {
  container.addEventListener('click', screenXY = (e) => {
    for (turn in clicked) {  
        e.target = board[turn]
        if (turn % 2 == 0) {
            e.target.innerHTML = `${playerX.player}`;
          }
        else if (turn % 2 == 1) {
            e.target.innerHTML = `${playerO.player}`;
          }
     }
    clicked.pop()
  })
} 
  
boardGame()