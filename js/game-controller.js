export const GameController = (() => {
    let players = [];
    let currentPlayer;

    const getPlayers = () => players;
    const setPlayers = (playerOne, playerTwo) => {
        players = [];
        players.push(playerOne);
        players.push(playerTwo);
        currentPlayer = players[0];
    }

    const playRound = (gameBoard, rowIndex, columnIndex) => {
        let cell = gameBoard[rowIndex][columnIndex];
        cell.setTokenValue(currentPlayer.getPlayerToken()); 
        switchPlayerTurn(); 
    };

    const switchPlayerTurn = () => {
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
    };


    return {getPlayers, setPlayers, playRound, switchPlayerTurn};
})();