import { GameController } from "./game-controller.js";

export const ScreenController = (() => {
    let cellElements = [];

    const getCellElements = () => cellElements;

    const displayGameBoard = (gameBoard, parentElement) => {
        if (cellElements.length >= 0) cellElements = [];

        const board = document.createElement('div');
        board.classList.add('game-board');

        gameBoard.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                const cellElement = document.createElement('div');
                cellElement.classList.add('board-cell');
                cellElement.dataset.colIndex = columnIndex;
                cellElement.dataset.rowIndex = rowIndex;
                cellElement.innerText = cell.getTokenValue();
                board.appendChild(cellElement); 
                cellElements.push(cellElement);
            })
        });

        parentElement.appendChild(board);
    }

    const updateCell = (gameBoard, rowIndex, colIndex) => {
        const cellElement = document.querySelector(`[data-row-index="${rowIndex}"][data-col-index="${colIndex}"]`);
        cellElement.innerText = gameBoard[rowIndex][colIndex].getTokenValue();
    }

    const displayGameResult = (result) => {
        const endGameSection = document.getElementById('endGame');
        const gameResultElement = document.createElement('div');
        gameResultElement.innerText = result;
        
    }

    const addClickListeners = (domElements, clickFunction) => {
        domElements.forEach(domElement => {
            domElement.addEventListener('click', clickFunction);
        })
    }

    const removeClickListeners = (domElements, clickFunction) => {
        domElements.forEach(domElement => {
            domElement.removeEventListener('click', clickFunction);
        })
    }

    return {
        displayGameBoard,
        getCellElements,
        updateCell,
        displayGameResult, 
        addClickListeners, 
        removeClickListeners
    };
})();