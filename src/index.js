import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector(".start-button");
    
    startButton.addEventListener("click", () => {
        const canvas = document.getElementById("game-canvas");
        canvas.height = 550;
        canvas.width = 900;
        canvas.classList.add("top-element")

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = "rgb(149, 223, 114)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        const gameView = new GameView(ctx);
        gameView.start();
    });
})