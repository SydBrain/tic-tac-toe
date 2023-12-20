import { GameController } from "./game-controller.js";

export const ScreenController = (() => {
    let cellElements = [];
    const playerOneImage = "assets/images/x.svg";
    const playerTwoImage = "assets/images/circle.svg";

    const getCellElements = () => cellElements;

    const displayGameBoard = (gameBoard, parentElement, currentPlayerToken) => {
        clearGameBoard(parentElement); // Clear the existing game board
        cellElements = []; // Reset cell elements array


        const board = document.createElement('div');
        board.classList.add('game-board');

        gameBoard.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                const cellElement = document.createElement('div');
                cellElement.classList.add('board-cell');
                if (cellElement.classList.contains('filled')) {
                    cellElement.classList.remove('filled');
                }
                cellElement.dataset.colIndex = columnIndex;
                cellElement.dataset.rowIndex = rowIndex;
                cellElement.dataset.hoverPlayer = currentPlayerToken;
                cellElement.innerText = '';
                board.appendChild(cellElement); 
                cellElements.push(cellElement);
            })
        });

        parentElement.appendChild(board);
    };

    const resetGameBoard = () => {
        const cells = document.querySelectorAll('.board-cell');
        cells.forEach(cell => {
            cell.innerText = 0;
        });
    }

    const clearGameBoard = (parentElement) => {
        while (parentElement.firstChild) {
            parentElement.removeChild(parentElement.firstChild);
        }
    };

    const updateCell = (gameBoard, rowIndex, colIndex) => {
        const cellElement = document.querySelector(`[data-row-index="${rowIndex}"][data-col-index="${colIndex}"]`);
        const cellValue = gameBoard[rowIndex][colIndex].getTokenValue();

        if (cellValue === 1) {
            cellElement.style.backgroundImage = `url(${playerOneImage})`;
            cellElement.classList.add('filled');
        } else if (cellValue === 2) {
            cellElement.style.backgroundImage = `url(${playerTwoImage})`;
            cellElement.classList.add('filled');
        }
    }

    const updateHoverEffect = (currentPlayerToken) => {
        cellElements.forEach(cell => {
            cell.dataset.hoverPlayer = currentPlayerToken;
        });
    };
    

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
        updateHoverEffect,
        displayGameResult,
        displayCurrentTurn 
    };
})();
