export const Cell = function() {
    let value = 0;

    const getTokenValue = () => value;
    const setTokenValue = (tokenValue) => { value = tokenValue; }; 

    return {getTokenValue, setTokenValue};
}

export const Gameboard = (function() {
    const columns = 3;
    const rows = 3;

    let gameBoard = [];

    const getGameBoard = () => gameBoard;
    const getRows = () => rows;
    const getColumns = () => columns;

    for (let i = 0; i < rows; i++) {
        gameBoard[i] = [];
        for (let j = 0; j < columns; j++) {
            let cell = Cell();
            cell.setTokenValue(0);
            gameBoard[i].push(cell); 
        }
    }


    return {getGameBoard, getRows, getColumns};
})();