export const ScreenController = (() => {
    let cellElements = [];

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
        addClickListeners, 
        removeClickListeners
    };
})();