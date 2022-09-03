const screen = document.querySelector('body');
const container = document.getElementById('gameboard-container')
const board = document.getElementsByClassName('cell')
const play = document.getElementById('play')
const reset = document.getElementById('reset')
const form = document.getElementById('form')

const playerX = {
  player: "X"
}

const playerO = {
  player: "O"
}

play.addEventListener('click', boardGame = () => {
  clicked = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  const left = document.createElement("div")
  const right = document.createElement("div")
  const leftPlayer = document.getElementById("left")
  const rightPlayer = document.getElementById("right")
  left.innerHTML = `${leftPlayer.value}`
  right.innerHTML = `${rightPlayer.value}`
  screen.appendChild(left);
  screen.appendChild(right)
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
      clicked.shift()
  })
  form.removeChild(play);
})

let boardArray = Array.from(document.getElementsByClassName('cell'));

const endGame = () => {
  if ((boardArray[0] == boardArray[1]) && (boardArray[0] == boardArray[2]) && (boardArray[0] !== "")) {
    alert("Game over.")
    window.location.href = "./index.html"
  }
}

reset.addEventListener('click', resetGame = () => {
  window.location.href = "./index.html"
})

endGame()