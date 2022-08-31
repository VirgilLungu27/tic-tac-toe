const screen = document.querySelector('body');

const board = document.getElementsByClassName('cell')
const choice = ["X", "O"]
const cellList = []
const button = document.getElementById('test')

const play = document.getElementById('play')

clicked = []

const gameboardObject = {
    gameboard: [0, 1, 2, 3, 4, 5, 6, 7, 8]
};

const playerX = {
  player: "X"
}

const playerO = {
  player: "O"
}


const boardGame = () => {
  screen.addEventListener('click', screenXY = (e) => {
    let x, y;
    let choiceXY = []
    y = e.clientY;
    x = e.clientX;
    choiceXY.push(x,y)
    clicked.push(choiceXY)
    console.log(clicked)
    // allow opponents to make moves
    if (clicked.length % 2 == 1) {
      if (clicked[clicked.length - 1][1] < 58) {
        if (clicked[clicked.length -1][0] < 548) {
          board[0].innerHTML = `${playerX.player}`
          }
        else if(clicked[clicked.length -1][0] >= 548 && clicked[clicked.length-1][0] < 598) {
          board[1].innerHTML = `${playerX.player}`      
          }
        else {
          board[2].innerHTML = `${playerX.player}`
          }
        }
      else if (clicked[clicked.length - 1][1] > 58 && clicked[clicked.length-1][1] < 108) {
        if (clicked[clicked.length -1][0] < 548) {
            board[3].innerHTML = `${playerX.player}`
          }
        else if(clicked[clicked.length -1][0] >= 548 && clicked[clicked.length-1][0] < 598) {
            board[4].innerHTML = `${playerX.player}`      
            }
          else {
            board[5].innerHTML = `${playerX.player}`
          }
          }
      else {
            if (clicked[clicked.length -1][0] < 548) {
              board[6].innerHTML = `${playerX.player}`
              }
            else if(clicked[clicked.length -1][0] >= 548 && clicked[clicked.length-1][0] < 598) {
              board[7].innerHTML = `${playerX.player}`      
              }
            else {
              board[8].innerHTML = `${playerX.player}`
            }
          }
        }
    else {
      if (clicked[clicked.length - 1][1] < 58) {
        if (clicked[clicked.length -1][0] < 548) {
          board[0].innerHTML = `${playerO.player}`
          }
        else if(clicked[clicked.length -1][0] >= 548 && clicked[clicked.length-1][0] < 598) {
          board[1].innerHTML = `${playerO.player}`      
          }
        else {
          board[2].innerHTML = `${playerO.player}`
          }
        }
      else if (clicked[clicked.length - 1][1] > 58 && clicked[clicked.length-1][1] < 108) {
        if (clicked[clicked.length -1][0] < 548) {
            board[3].innerHTML = `${playerO.player}`
          }
        else if(clicked[clicked.length -1][0] >= 548 && clicked[clicked.length-1][0] < 598) {
            board[4].innerHTML = `${playerO.player}`      
            }
          else {
            board[5].innerHTML = `${playerO.player}`
          }
          }
      else {
            if (clicked[clicked.length -1][0] < 548) {
              board[6].innerHTML = `${playerO.player}`
              }
            else if(clicked[clicked.length -1][0] >= 548 && clicked[clicked.length-1][0] < 598) {
              board[7].innerHTML = `${playerO.player}`      
              }
            else {
              board[8].innerHTML = `${playerO.player}`
            }
          }
      }
    for (let i = 0; i <= 6; i++) {
      if(board[i].innerHTML !== "") {
       if ((board[i].innerHTML === board[i+1].innerHTML) && (board[i].innerHTML === board[i+2].innerHTML) && ((i+3) % 3 == 0)) {
          alert("Game over.")
        }
      }
    }  
  })
}
  
  boardGame()