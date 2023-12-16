import { Gameboard } from "./gameboard.js"
import { Player } from "./player.js";
import { ScreenController } from "./screen-controller.js"

 document.addEventListener("DOMContentLoaded", () => {
    const gameBoardContainer = document.getElementById('boardContainer');

    const gameBoard = Gameboard.getGameBoard();

    const PlayerOne = Player("Player One", 1);
    const PlayerTwo = Player("Player Two", 2);

    ScreenController.displayGameBoard(gameBoard, gameBoardContainer);
})