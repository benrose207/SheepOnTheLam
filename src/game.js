import Sheep from "./sheep";
import SheepDog from "./sheepdog";
import FenceBox from "./fence";
import { isCollidedWith, resolveCollision } from "./util";

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
        this.addSheepDog();
    }

    addSheep() {
        for (let i = 0; i < this.numSheep; i++) {
            let newSheep = new Sheep(this.ctx);
            for (let j = 1; j < this.sheep.length; j++) {
                if (isCollidedWith(newSheep, this.sheep[j])) {
                    newSheep = new Sheep(this.ctx);
                    j = 0;
                }
            }
            this.sheep.push(newSheep);
        }
    }

    addSheepDog() {
        let sheepDog = new SheepDog(this.ctx);
        for (let i = 0; i < this.sheep.length; i++) {
            if (isCollidedWith(sheepDog, this.sheep[i])) {
                sheepDog = new SheepDog(this.ctx);
                i = 0;
            }
        }

        this.sheepDog = sheepDog;
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
        this.sheepDog.draw();
    }

    moveObjects() {
        this.sheep.forEach(sheep => sheep.move());
        this.sheepDog.move();
    }

    checkCollision() {
        for (let i = 0; i < this.sheep.length; i++) {
            const currentObj = this.sheep[i];
            for (let j = i + 1; j < this.sheep.length; j++) { // could this be refactor to include all moving objects (i.e. sheepdog?)
                const compareObj = this.sheep[j];

                if (isCollidedWith(currentObj, compareObj)) {
                    resolveCollision(currentObj, compareObj);
                    compareObj.collideWithSheep(currentObj);
                }
            }

            if (isCollidedWith(currentObj, this.sheepDog)) {
                resolveCollision(currentObj, this.sheepDog);
            }
            
            for (let k = 0; k < this.fences.length; k++) {
                const stationaryObj = this.fences[k];
                const { collided, direction } = isCollidedWith(currentObj, stationaryObj);
                if (collided) {
                    if (direction === "left" || direction === "right") currentObj.vel[0] = -currentObj.vel[0];
                    if (direction === "top" || direction === "bottom") currentObj.vel[1] = -currentObj.vel[1];
                }
            }
        }

        for (let l = 0; l < this.fences.length; l++) {
            const stationaryObj = this.fences[l];
            const { collided, direction } = isCollidedWith(this.sheepDog, stationaryObj);
            if (collided) {
                if (direction === "left") this.sheepDog.pos[0] -= 3;
                if (direction === "right") this.sheepDog.pos[0] += 3;
                if (direction === "top") this.sheepDog.pos[1] -= 3;
                if (direction === "bottom") this.sheepDog.pos[1] += 3;
            }
        }
    }
}

export default Game;