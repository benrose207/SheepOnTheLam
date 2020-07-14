import Game from "./game";

class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.game = new Game(this.ctx);
    }

    start() {
        this.bindKeyboardHandlers();

        setInterval(() => {
            this.game.moveObjects();
            this.game.checkCollision();
            this.game.draw(this.ctx);
        }, 20);
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