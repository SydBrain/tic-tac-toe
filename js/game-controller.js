import { ScreenController } from "./screen-controller.js";

export const GameController = (players, gameBoard) => {
    let currentPlayer = players[0];

    ScreenController.displayCurrentTurn(currentPlayer.playerName);

    const playTurn = (rowIndex, colIndex) => {

        if (gameBoard[rowIndex][colIndex].getTokenValue() !== 0) {
            return;
        }
    
        gameBoard[rowIndex][colIndex].setTokenValue(currentPlayer.playerToken);
        ScreenController.updateCell(gameBoard, rowIndex, colIndex);

        ScreenController.updateCell(gameBoard, rowIndex, colIndex);

        if (isWinner(currentPlayer)) {
            ScreenController.displayGameResult(`${currentPlayer.playerName} wins.`);
            ScreenController.updateHoverEffect('');
            emitGameEnded();
        } else if (isTie()) {
            ScreenController.displayGameResult("It's a tie.");
            ScreenController.updateHoverEffect('');
            emitGameEnded();
        } else {
            switchPlayerTurn();
            ScreenController.updateHoverEffect(currentPlayer.playerToken);
        }
    };

    const switchPlayerTurn = () => {
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
        ScreenController.displayCurrentTurn(currentPlayer.playerName);
    };

    const isWinner = (currentPlayer) => {
        // Check Rows
        for (let rowIndex = 0; rowIndex < gameBoard.length; rowIndex++) {
            if (gameBoard[rowIndex].every(cell => cell.getTokenValue() === currentPlayer.playerToken)) {
                return true;
            };
        }

        // Check Columns
        for (let colIndex = 0; colIndex < gameBoard.length; colIndex++) {
            let cellsInColumn = [];
            for (let rowIndex = 0; rowIndex < gameBoard.length; rowIndex++) {
                cellsInColumn.push(gameBoard[rowIndex][colIndex]);
            }

            if (cellsInColumn.every(cell => cell.getTokenValue() === currentPlayer.playerToken)) {
                return true;
            }
        }

        // Check Diagonals

        // Major Diagonal
        let cellsInMajDiagonal = [];
        for (let rowIndex = 0; rowIndex < gameBoard.length; rowIndex++) {
            cellsInMajDiagonal.push(gameBoard[rowIndex][rowIndex]);
        }
        if (cellsInMajDiagonal.every(cell => cell.getTokenValue() === currentPlayer.playerToken)) {
            return true;
        }

        // Minor Diagonal
        let cellsInMinDiagonal = [];
        for (let rowIndex = 0; rowIndex < gameBoard.length; rowIndex++) {
            cellsInMinDiagonal.push(gameBoard[rowIndex][gameBoard.length - 1 - rowIndex]);
        }
        if (cellsInMinDiagonal.every(cell => cell.getTokenValue() === currentPlayer.playerToken)) {
            return true;
        }


        return false;
    };

    const isTie = () => {
        for (let row of gameBoard) {
            for (let cell of row) {
                if (cell.getTokenValue() === 0) {
                    return false;
                }
            }
        }
        return true;
    };

    const emitGameEnded = () => {
        document.dispatchEvent(new CustomEvent("gameEnded"));
    };

    return {
        playTurn,
        isWinner,
        isTie
    };
}