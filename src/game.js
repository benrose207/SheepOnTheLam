import Sheep from "./sheep";
import SheepDog from "./sheepdog";
import FenceBox from "./fence";
import Timer from "./timer";
import { isCollidedWith, resolveCollision } from "./util";

const levelData = {
    1: {
        numSheep: 1, //10
        sheepSpeed: 0.25
    },
    2: {
        numSheep: 10, //15
        sheepSpeed: 0.75
    }
}

class Game {
    constructor(ctx, levelNum) {
        this.currentLevel = levelData[levelNum];
        this.numSheep = this.currentLevel.numSheep;
        this.sheep = [];
        this.stationaryObjects = [];
        this.ctx = ctx;
        this.addFences();
        this.addTimer();
        this.addSheep();
        this.addSheepDog();
    }
    
    addSheep() {
        let img = new Image();
        img.src = "../assets/images/sheep_walking.png";

        for (let i = 0; i < this.numSheep; i++) {
            let newSheep = new Sheep(this.ctx, img, this.currentLevel.sheepSpeed);
            const objects = this.allObjects();

            for (let j = 0; j < objects.length; j++) {
                const collided = isCollidedWith(newSheep, objects[j]);
                if (collided === true || collided.collided === true) {
                    newSheep = new Sheep(
                      this.ctx,
                      img,
                      this.currentLevel.sheepSpeed
                    );
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
        this.stationaryObjects.push(fenceTop, fenceBottom, fenceBack);
    }
    
    addTimer() {
        this.timer = new Timer(this.ctx);
        this.stationaryObjects.push(this.timer);
        this.timer.countdown();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = "rgb(149, 223, 114)";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        
        // Add objects to canvas
        this.stationaryObjects.forEach(object => object.draw());
        this.sheep.forEach(sheep => sheep.draw());
        this.sheepDog.draw();

        // Sheep remaining counter
        this.ctx.font = "19px Roboto";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("Sheep", 25, 30);

        this.ctx.font = "19px Roboto";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("Remaining", 5, 55);

        this.ctx.font = '80px Modak';
        this.ctx.fillStyle = "white"
        this.ctx.strokeStyle = "rgb(90, 90, 90)";
        const sheepLeft = this.sheepRemaining();
        const countXPos = sheepLeft < 10 ? 30 : 15;
        this.ctx.fillText(`${sheepLeft}`, countXPos, 120);
        this.ctx.strokeText(`${sheepLeft}`, countXPos, 120);
    }

    moveObjects() {
        this.sheep.forEach(sheep => sheep.move());
        this.sheepDog.move();
    }

    allMovingObjects() {
        return this.sheep.concat(this.sheepDog);
    }

    allObjects() {
        const objects = this.sheep.concat(this.stationaryObjects);
        if (this.sheepDog) objects.push(this.sheepDog);
        return objects;
    }

    checkCollision() {
        const movingObjects = this.allMovingObjects();

        for (let i = 0; i < this.sheep.length; i++) { // Checks whether any sheep has collided with something
            const sheep = this.sheep[i];
            for (let j = i + 1; j < movingObjects.length; j++) { // Checking against other moving objects
                const compareObj = movingObjects[j];

                if (isCollidedWith(sheep, compareObj)) {
                    resolveCollision(sheep, compareObj); // resets colliding sheep's velocity 
                    compareObj.collideWithSheep(sheep); // handles reaction of other object
                }
            }
            this.checkSheepObstacleCollisions(sheep);
        }
        this.checkSheepdogObstacleCollisions();
    }

    checkSheepObstacleCollisions(sheep) {
        for (let i = 0; i < this.stationaryObjects.length; i++) {
            const stationaryObj = this.stationaryObjects[i];
            const { collided, direction } = isCollidedWith(sheep, stationaryObj);
            if (collided) sheep.collideWithObstacle(direction);
        }
    }

    checkSheepdogObstacleCollisions() {
        for (let i = 0; i < this.stationaryObjects.length; i++) {
            const stationaryObj = this.stationaryObjects[i];
            const { collided, direction } = isCollidedWith(this.sheepDog, stationaryObj);
            if (collided) this.sheepDog.collideWithObstacle(direction);
        }
    }
    
    sheepRemaining() {
        let count = 0;
        
        this.sheep.forEach(sheep => {
            if (sheep.pos[0] > 85) count += 1;
        })
        
        return count;
    }
    
    won() {   
        return this.sheepRemaining() === 0;
    }

    lost() {
        return this.timer.timeRemaining === "0:00";
    }

    gameOver() {
        return this.won() || this.lost();
    }
}

export default Game;