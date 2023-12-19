export const Cell = () => {
    let value = 0;

    const getTokenValue = () => value;
    const setTokenValue = (tokenValue) => {value = tokenValue};

    return {value, getTokenValue, setTokenValue};
}

export const Gameboard = (() => {
    const columns = 3;
    const rows = 3;

    let gameboard = [];

    for (let i = 0; i < rows; i++) {
        gameboard[i] = [];
        for (let j = 0; j < columns; j++) {
            let cell = Cell();     
            cell.setTokenValue(0);   
            gameboard[i].push(cell);
        }
    }

    const resetGameBoard = () => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                gameboard[i][j].setTokenValue(0);
            }
        }
    };

    const getGameBoard = () => gameboard;

    return {
        getGameBoard,
        resetGameBoard
    };
})();