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
        let img = new Image();
        img.src = "../assets/images/sheep_walking.png";

        for (let i = 0; i < this.numSheep; i++) {
            let newSheep = new Sheep(this.ctx, img);
            for (let j = 1; j < this.sheep.length; j++) {
                if (isCollidedWith(newSheep, this.sheep[j])) {
                    newSheep = new Sheep(this.ctx, img);
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
        const fenceTop = new FenceBox(this.ctx, 100, 0, 36, 225);
        const fenceBottom = new FenceBox(this.ctx, 100, 350, 36, 225);
        const fenceBack = new FenceBox(this.ctx, -100, 0, 36, 550);
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

    allMovingObjects() {
        return this.sheep.concat(this.sheepDog);
    }

    checkCollision() {
        const movingObjects = this.allMovingObjects();

        for (let i = 0; i < this.sheep.length; i++) { // Checks whether any sheep has collided with something
            const sheep = this.sheep[i];
            for (let j = i + 1; j < movingObjects.length; j++) { // Checking against other moving objects
                const compareObj = movingObjects[j];

                if (isCollidedWith(sheep, compareObj)) {
                    resolveCollision(sheep, compareObj);
                    if (compareObj instanceof Sheep) compareObj.collideWithSheep(sheep);
                }
            }
            this.checkSheepObstacleCollisions(sheep);
        }
        this.checkSheepdogObstacleCollisions();
    }

    checkSheepObstacleCollisions(sheep) {
        for (let i = 0; i < this.fences.length; i++) {
            const stationaryObj = this.fences[i];
            const { collided, direction } = isCollidedWith(sheep, stationaryObj);
            if (collided) sheep.collideWithObstacle(direction);
        }
    }

    checkSheepdogObstacleCollisions() {
        for (let i = 0; i < this.fences.length; i++) {
            const stationaryObj = this.fences[i];
            const { collided, direction } = isCollidedWith(this.sheepDog, stationaryObj);
            if (collided) this.sheepDog.collideWithObstacle(direction);
        }
    }

    won() {   
        // return this.sheep.every(sheep => sheep.pos[0] < 85)
        return this.sheepRemaining() === 0;
    }

    sheepRemaining() {
        let count = 0;

        this.sheep.forEach(sheep => {
            if (sheep.pos[0] > 85) count += 1;
        })

        return count;
    }
}

export default Game;