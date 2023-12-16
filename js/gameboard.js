export const Cell = function() {
    let value = 0;

    const getTokenValue = () => value;
    const setTokenValue = (tokenValue) => value = tokenValue;

    return {getTokenValue, setTokenValue};
}

export const Gameboard = (function() {
    const columns = 3;
    const rows = 3;

    let gameboard = [];

    for (let i = 0; i < rows; i++) {
        gameboard[i] = [];
        for (let j = 0; j < columns; j++) {
            gameboard[i].push(Cell().setTokenValue(0));
        }
    }

    const getGameBoard = () => gameboard;

    return {getGameBoard};
})();