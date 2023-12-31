export const Cell = () => {
    let value = 0;

    const getTokenValue = () => value;
    const setTokenValue = (tokenValue) => {value = tokenValue};

    return {value, getTokenValue, setTokenValue};
}

export const Gameboard = (() => {
    const columns = 3;
    const rows = 3;

    let gameBoard = [];

    const getGameBoard = () => gameBoard;

    for (let i = 0; i < rows; i++) {
        gameBoard[i] = [];
        for (let j = 0; j < columns; j++) {
            let cell = Cell();     
            cell.setTokenValue(0);   
            gameBoard[i].push(cell);
        }
    }

    const resetGameBoard = () => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                gameBoard[i][j].setTokenValue(0);
            }
        }
    };


    return {
        getGameBoard,
        resetGameBoard
    };
})();