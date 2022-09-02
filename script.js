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

  const leftPlayer = document.getElementById("left")
  left.style.left = "40%"
  left.innerHTML = `${leftPlayer.value}`
  screen.appendChild(left);
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


reset.addEventListener('click', resetGame = () => {
  window.location.href = "./index.html"
})