import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { ScreenController } from "./screen-controller.js";
import { GameController } from "./game-controller.js";

document.addEventListener("DOMContentLoaded", () => {
    const gameBoardContainer = document.getElementById('boardContainer');
    const gameStartFormContainer = document.getElementById('gameStartFormContainer');
    const gameStartForm = document.getElementById('gameStartForm');
    const restartGameButton = document.getElementById('restartGame');
    let gameController;

    const onCellClick = (event) => {
        const cell = event.target;
        const rowIndex = parseInt(cell.getAttribute('data-row-index'));
        const columnIndex = parseInt(cell.getAttribute('data-col-index'));
        gameController.playTurn(rowIndex, columnIndex);
    };

    const addCellClickListeners = () => {
        const gameBoardCells = ScreenController.getCellElements();
        gameBoardCells.forEach(cell => {
            cell.addEventListener('click', onCellClick);
        });
    };

    const initializeGame = () => {
        const playerOneName = document.getElementById('playerOneName').value.trim() || "Player One";
        const playerTwoName = document.getElementById('playerTwoName').value.trim() || "Player Two";

        const PlayerOne = Player(playerOneName, 1);
        const PlayerTwo = Player(playerTwoName, 2);

        gameController = GameController([PlayerOne, PlayerTwo], Gameboard.getGameBoard());
        ScreenController.displayGameBoard(Gameboard.getGameBoard(), gameBoardContainer, PlayerOne.playerToken);
        addCellClickListeners();
        ScreenController.displayCurrentTurn(PlayerOne.playerName);
    };

    gameStartForm.addEventListener('submit', (event) => {
        event.preventDefault();
        gameStartFormContainer.classList.add('hidden');
        initializeGame();
        gameStartForm.reset();
    });

    restartGameButton.addEventListener('click', () => {
        Gameboard.resetGameBoard();
        document.getElementById('endGame').classList.add('hidden');
        initializeGame();
    });

    document.addEventListener('gameEnded', () => {
        const gameBoardCells = ScreenController.getCellElements();
        gameBoardCells.forEach(cell => {
            cell.removeEventListener('click', onCellClick);
        });
    });
});
