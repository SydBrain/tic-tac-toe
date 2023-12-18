import { ScreenController } from "./screen-controller.js";

export const GameController = (players, gameBoard) => {
    let currentPlayer = players[0];

    const playTurn = (rowIndex, colIndex) => {
        // Add player token to selected board index, if there's no token
        if (gameBoard[rowIndex][colIndex].getTokenValue() === 0) {
            gameBoard[rowIndex][colIndex].setTokenValue(currentPlayer.playerToken);
        }

        ScreenController.updateCell(gameBoard, rowIndex, colIndex);

        // Check if currentPlayer has won else switch turn
        // Implement UI for game conditions
        if (isWinner(currentPlayer)) {
            console.log(`${currentPlayer} won!`);
        } else if (isTie()) {
            console.log("It's a tie");
        } else {
            switchPlayerTurn();
        }
    }

    const switchPlayerTurn = () => {
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
    }

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
    }

    const isTie = () => {
        for (let row of gameBoard) {
            for (let cell of row) {
                if (cell.getTokenValue() === 0) { 
                    return false; 
                }
            }
        }
        return true; 
    }

    return {
        playTurn,
        isWinner,
        isTie
    }
}