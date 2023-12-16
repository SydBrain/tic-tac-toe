import { ScreenController } from "./screen-controller.js";

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

    const checkWinner = (playerToken, gameBoard) => {
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

    const checkTie = (gameBoard) => {
        return gameBoard.flat().every(cell => cell.getTokenValue() !== 0);
    };


    const playRound = (gameBoard, rowIndex, columnIndex) => {
        let cell = gameBoard[rowIndex][columnIndex];
        let currentPlayerToken = currentPlayer.getPlayerToken();

        cell.setTokenValue(currentPlayerToken); 
        if (checkWinner(currentPlayerToken, gameBoard)) {
            console.log(`${currentPlayer.getPlayerName()} wins.`);
            resetGame(gameBoard);
            ScreenController.resetGameBoard();
        } else if (checkTie(gameBoard)) {
            console.log("It's a tie");
            resetGame(gameBoard);
            ScreenController.resetGameBoard();
        } else {
            switchPlayerTurn();
        } 
    };

    const switchPlayerTurn = () => {
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
    };

    const resetGame = (gameBoard) => {
        gameBoard.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                cell.setTokenValue(0);
            })
        });
    }


    return {getPlayers, setPlayers, playRound, switchPlayerTurn, checkWinner, checkTie, resetGame};
})();