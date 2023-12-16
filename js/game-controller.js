import { Gameboard } from "./gameboard.js";

export const GameController = (() => {
    const gameBoard = Gameboard.getGameBoard();
    let players = [];
    let currentPlayer;

    const getPlayers = () => players;
    const setPlayers = (playerOne, playerTwo) => {
        players = [];
        players.push(playerOne);
        players.push(playerTwo);
        currentPlayer = players[0];
    }

    const checkWinner = (playerToken) => {
        // Check rows
        for (let row = 0; row < 3; row++) {
            if (gameBoard[row].every(cell => cell.getTokenValue() === playerToken)) {
                return true;
            }
        }

        // Check columns
        for (let col = 0; col < 3; col++) {
            if (gameBoard.every(row => row[col].getTokenValue() === playerToken)) {
                return true;
            }
        }

        // Check diagonals
        if (gameBoard[0][0].getTokenValue() === playerToken &&
            gameBoard[1][1].getTokenValue() === playerToken &&
            gameBoard[2][2].getTokenValue() === playerToken) {
            return true;
        }
        if (gameBoard[0][2].getTokenValue() === playerToken &&
            gameBoard[1][1].getTokenValue() === playerToken &&
            gameBoard[2][0].getTokenValue() === playerToken) {
            return true;
        }

        // No win found
        return false;
    };

    const checkTie = () => {
        return gameBoard.flat().every(cell => cell.getTokenValue() !== 0);
    };


    const playRound = (gameBoard, rowIndex, columnIndex) => {
        let cell = gameBoard[rowIndex][columnIndex];
        let currentPlayerToken = currentPlayer.getPlayerToken();
        cell.setTokenValue(currentPlayerToken); 
        if (checkWinner(currentPlayerToken)) {
            console.log(`${currentPlayer.getPlayerName()} wins.`);
        } else if (checkTie()) {
            console.log("It's a tie");
        } else {
            switchPlayerTurn();
        } 
    };

    const switchPlayerTurn = () => {
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
    };




    return {getPlayers, setPlayers, playRound, switchPlayerTurn, checkWinner, checkTie};
})();