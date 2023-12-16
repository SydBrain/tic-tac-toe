import { Gameboard } from "./gameboard.js"
import { ScreenController } from "./screen-controller.js"
import { Player } from "./player.js";
import { GameController } from "./game-controller.js";

 document.addEventListener("DOMContentLoaded", () => {
    const gameBoardContainer = document.getElementById('boardContainer');

    const PlayerOne = Player("PlayerOne", 1);
    const PlayerTwo = Player("PlayerTwo", 2); 

    GameController.setPlayers(PlayerOne, PlayerTwo);
    console.log("Players: ", GameController.getPlayers());

    const gameBoard = Gameboard.getGameBoard();
    console.log("Game Board: ", gameBoard);

    ScreenController.displayGameBoard(gameBoard, gameBoardContainer);
})