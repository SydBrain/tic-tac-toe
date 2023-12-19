import { Gameboard } from "./gameboard.js"
import { Player } from "./player.js";
import { ScreenController } from "./screen-controller.js"
import { GameController } from "./game-controller.js";

document.addEventListener("DOMContentLoaded", () => {

    const gameBoardContainer = document.getElementById('boardContainer');
    const gameBoard = Gameboard.getGameBoard();

    const gameStartFormContainer = document.getElementById('gameStartFormContainer');
    const gameStartForm = document.getElementById('gameStartForm');
    gameStartForm.addEventListener('submit', (event) => {
        event.preventDefault();
        gameStartFormContainer.classList.add('hidden');

        const playerOneName = document.getElementById('playerOneName').value.trim() || "Player One";
        const playerTwoName = document.getElementById('playerTwoName').value.trim() || "Player Two";

        const PlayerOne = Player(playerOneName, 1);
        const PlayerTwo = Player(playerTwoName, 2);

        let players = [
            PlayerOne,
            PlayerTwo
        ];

        console.log(players);

        ScreenController.displayGameBoard(gameBoard, gameBoardContainer);
        const gameBoardCells = ScreenController.getCellElements();

        const gameController = GameController(players, gameBoard);

        // Add event listener to handle game end
        document.addEventListener('gameEnded', () => {
            gameBoardCells.forEach(cell => {
                cell.removeEventListener('click', onCellClick);
            });
        });

        function onCellClick(event) {
            const cell = event.target;
            const rowIndex = parseInt(cell.getAttribute('data-row-index'));
            const columnIndex = parseInt(cell.getAttribute('data-col-index'));
            gameController.playTurn(rowIndex, columnIndex);
        }

        // Add click listeners to cells
        gameBoardCells.forEach(cell => {
            cell.addEventListener('click', onCellClick);
        });

        gameStartForm.reset();
    });


})