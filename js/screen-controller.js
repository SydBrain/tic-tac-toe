import { GameController } from "./game-controller.js";
import { Gameboard } from "./gameboard.js";

export const ScreenController = (() => {
    const displayGameBoard = (gameBoard, parentElement) => {
        const board = document.createElement('div');
        board.classList.add('game-board');

        gameBoard.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                console.log("Current Cell:", cell);

                const cellElement = document.createElement('div');
                cellElement.classList.add('board-cell');
                cellElement.dataset.colIndex = columnIndex;
                cellElement.dataset.rowIndex = rowIndex;

                if (cell && typeof cell.getTokenValue === 'function') {
                    cellElement.innerText = cell.getTokenValue();
                } else {
                    console.error('Cell is undefined or not structured correctly:', cell);
                    return;
                }

                cellElement.addEventListener('click', (e) => {
                    if (cell.getTokenValue() === 0) {
                        GameController.playRound(gameBoard, rowIndex, columnIndex);
                        cellElement.innerText = cell.getTokenValue();
                    }
                });
                
                board.appendChild(cellElement);
                console.log("Cell Element: ", cellElement);
            });
        });

        parentElement.appendChild(board);
    };

    return { displayGameBoard };
})();
