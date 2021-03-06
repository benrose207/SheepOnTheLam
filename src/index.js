import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    canvas.height = 550;
    canvas.width = 900;
    
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(126, 200, 80)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const gameView = new GameView(ctx);
})