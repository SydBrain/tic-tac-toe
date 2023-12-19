import { GameController } from "./game-controller.js";

export const ScreenController = (() => {
    let cellElements = [];

    const getCellElements = () => cellElements;

    const displayGameBoard = (gameBoard, parentElement) => {
        clearGameBoard(parentElement); // Clear the existing game board
        cellElements = []; // Reset cell elements array


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

    const clearGameBoard = (parentElement) => {
        while (parentElement.firstChild) {
            parentElement.removeChild(parentElement.firstChild);
        }
    };

    const updateCell = (gameBoard, rowIndex, colIndex) => {
        const cellElement = document.querySelector(`[data-row-index="${rowIndex}"][data-col-index="${colIndex}"]`);
        cellElement.innerText = gameBoard[rowIndex][colIndex].getTokenValue();
    }

    const displayGameResult = (result) => {
        const endGameSection = document.getElementById('endGame');
        const gameResultElement = document.getElementById('gameResult');
        endGameSection.classList.remove("hidden");
        gameResultElement.innerText = result;
    }

    const displayCurrentTurn = (playerName) => {
        const currentTurnElement = document.getElementById('currentTurn');
        currentTurnElement.textContent = `${playerName}'s Turn`;
    };

    return {
        displayGameBoard,
        getCellElements,
        updateCell,
        displayGameResult,
        displayCurrentTurn 
    };
})();