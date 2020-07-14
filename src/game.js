import Sheep from "./sheep";
import FenceBox from "./fence";

const gameConstants = {
    NUM_SHEEP: 10
}

class Game {
    constructor(ctx) {
        this.numSheep = gameConstants.NUM_SHEEP;
        this.sheep = [];
        this.fences = [];
        this.ctx = ctx;
        this.addFences();
        this.addSheep();
    }

    addSheep() {
        for (let i = 0; i < this.numSheep; i++) {
            const newSheep = new Sheep(this.ctx);
            this.sheep.push(newSheep);
        }
    }

    addFences() {
        const fenceTop = new FenceBox(this.ctx, 100, 0, 10, 225);
        const fenceBottom = new FenceBox(this.ctx, 100, 350, 10, 225);
        const fenceBack = new FenceBox(this.ctx, -100, 0, 10, 550);
        this.fences.push(fenceTop, fenceBottom, fenceBack);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = "rgb(149, 223, 114)";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.sheep.forEach(sheep => sheep.draw(this.ctx));

        this.fences.forEach(fence => fence.draw());
    }

    moveObjects() {
        this.sheep.forEach(sheep => sheep.move());
    }

    checkCollision() {
        for (let i = 0; i < this.sheep.length - 1; i++) {
            const currentObj = this.sheep[i];
            for (let j = i + 1; j < this.sheep.length; j++) {
                const compareObj = this.sheep[j];

                if (currentObj.isCollidedWith(compareObj)) {
                }
            }
            
            for (let k = 0; k < this.fences.length; k++) {
                const stationaryObj = this.fences[k];
                const { collided, direction } = currentObj.isCollidedWith(stationaryObj);
                if (collided) {
                    if (direction === "x") currentObj.vel[0] = -currentObj.vel[0];
                    if (direction === "y") currentObj.vel[1] = -currentObj.vel[1];
                }
            }
        }
    }
}

export default Game;