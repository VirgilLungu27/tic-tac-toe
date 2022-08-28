const gameboard = document.querySelector('gameboard-container')
const board = document.getElementsByClassName('cell')

const gameboardObject = {
    gameboard: ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
};

const player = () => {
    return "X";    
};

const opponent = () => {
    return "O";
}

