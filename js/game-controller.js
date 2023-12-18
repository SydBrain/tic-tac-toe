export const GameController = (players, gameBoard) => {
    let currentPlayer = players[0];

    const playTurn = (boardRow, boardCol) => {
        // Add player token to selected board index
        gameBoard[boardRow][boardCol] = currentPlayer.playerToken;

        // Check if currentPlayer has won else switch turn
        if (checkWinner()) {
            console.log(`${currentPlayer} won!`);
        } else {
            switchPlayerTurn();
        }
    }

    const switchPlayerTurn = () => {
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
    }

    const checkWinner = () => {
        // Check Rows
        for (let row of gameBoard) {
            row.every(cell => {
                return cell.getTokenValue() === 0;
            })
        }
        // Check Columns
        // Check Diagonals
    }

    return {
        playTurn,
        switchPlayerTurn,
        checkWinner
    }
}