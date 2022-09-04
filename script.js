const screen = document.querySelector('body');
const container = document.getElementById('gameboard-container')
const board = document.getElementsByClassName('cell')
const play = document.getElementById('play')
const reset = document.getElementById('reset')
const form = document.getElementById('form')

let boardArray = Array.from(document.querySelectorAll('.cell'));
let finalArray = []
clicked = [0, 1, 2, 3, 4, 5, 6, 7, 8]


const playerX = {
  player: "X"
}

const playerO = {
  player: "O"
}

const endGame = () => {
  if (finalArray.length == 9) {
    for (let i = 0; i < finalArray.length; i++) {
      if (finalArray[i] !== "") {
        if (((finalArray[i] == finalArray[i+1]) && (finalArray[i+1] == finalArray[i+2]) && ((i+3) % 3 == 0)) || ((finalArray[i] == finalArray[i+3]) && (finalArray[i+3] == finalArray[i+6])) || (((finalArray[0] == finalArray[4]) && (finalArray[4] == finalArray[8])) || ((finalArray[2] == finalArray[4]) && (finalArray[4] == finalArray[6]))) && (clicked.length <= 4)) {
          alert("Game over.")
          window.location.href = "./index.html"
        } 
      }
    }
  }
}

play.addEventListener('click', boardGame = () => {
  const left = document.createElement("div")
  const right = document.createElement("div")
  const leftPlayer = document.getElementById("left")
  const rightPlayer = document.getElementById("right")
  left.innerHTML = `${leftPlayer.value}`
  right.innerHTML = `${rightPlayer.value}`
  screen.appendChild(left);
  screen.appendChild(right)
  container.addEventListener('click', screenXY = (e) => {
      finalArray = []
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
        for (cell in boardArray) {
          finalArray.push((boardArray[cell].textContent))
        }
      endGame()
      })
      form.removeChild(play);
    })
  


reset.addEventListener('click', resetGame = () => {
  window.location.href = "./index.html"
})