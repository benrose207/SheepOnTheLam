import Game from "./game";

class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.round = 1;
        this.gameMenu = document.getElementById("start-menu");
        this.gameMenuHandlers();
    }
    
    start() {
        this.game = new Game(this.ctx, this.round);
        this.bindKeyboardHandlers();
        this.gameLoop();
    }

    gameLoop() {
        this.game.moveObjects();
        this.game.checkCollision();
        this.game.draw(this.ctx);

        if (this.roundOver()) {
            this.gameMenu.classList.toggle("hide");
        } else {
            this.animationRequestId = window.requestAnimationFrame(this.gameLoop.bind(this));
        }
    }

    roundOver() {
        if (this.game.won()) {
            window.cancelAnimationFrame(this.animationRequestId);
            this.round += 1;
            return true;
        } else if (this.game.lost()) {
            window.cancelAnimationFrame(this.animationRequestId);
            this.round = 1;
            return true;
        }

        return false;
    }

    gameMenuHandlers() {
        const startButton = document.querySelector(".start-button");
        startButton.addEventListener("click", () => {
            this.gameMenu.classList.toggle("hide");
            this.start();
        });
    }

    bindKeyboardHandlers() {
        const sheepDog = this.game.sheepDog;
        const keyDownHandler = sheepDog.keyDownHandler.bind(sheepDog);
        const keyUpHandler = sheepDog.keyUpHandler.bind(sheepDog);

        document.addEventListener('keydown', keyDownHandler);
        document.addEventListener('keyup', keyUpHandler);
    }
}

export default GameView;