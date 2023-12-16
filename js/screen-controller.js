export const ScreenController = (() => {

    const displayGameBoard = (gameBoard, parentElement) => {
        const board = document.createElement('div');
        board.classList.add('game-board');

        gameBoard.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                const cellElement = document.createElement('div');
                cellElement.classList.add('board-cell');
                cellElement.dataset.colIndex = columnIndex;
                cellElement.dataset.rowIndex = rowIndex;
                cellElement.innerText = cell;
                board.appendChild(cellElement); 
            })
        });

        parentElement.appendChild(board);
    }

    return {displayGameBoard};
})();