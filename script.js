const screen = document.querySelector('body');
const container = document.getElementById('gameboard-container')
const board = document.getElementsByClassName('cell')
const play = document.getElementById('play')

const playerX = {
  player: "X"
}

const playerO = {
  player: "O"
}

play.addEventListener('click', boardGame = () => {
  clicked = [0, 1, 2, 3, 4, 5, 6, 7, 8]
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
})