import { Gameboard } from "./gameboard.js"
import { ScreenController } from "./screen-controller.js"

 document.addEventListener("DOMContentLoaded", () => {
    const gameBoardContainer = document.getElementById('boardContainer');

    const gameBoard = Gameboard.getGameBoard();
    console.log("Game Board: ", gameBoard);

    ScreenController.displayGameBoard(gameBoard, gameBoardContainer);
})