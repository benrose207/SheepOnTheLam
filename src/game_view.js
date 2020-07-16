import Game from "./game";

class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.round = 1;
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
            // this.ctx.canvas.classList.remove("top-element");
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
            const lostMenu = document.getElementById("lost-menu");
            lostMenu.classList.add("show");
            return true;
        }

        return false;
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