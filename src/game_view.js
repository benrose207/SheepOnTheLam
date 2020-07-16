import Game from "./game";

class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.game = new Game(this.ctx);
    }

    start() {
        this.bindKeyboardHandlers();
        this.gameLoop();
    }

    gameLoop() {
        this.game.moveObjects();
        this.game.checkCollision();
        this.game.draw(this.ctx);

        if (this.game.gameOver()) {
            window.cancelAnimationFrame(this.animationRequestId);
            return
        }

        this.animationRequestId = window.requestAnimationFrame(this.gameLoop.bind(this));
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