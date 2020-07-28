import Sheep from "./sheep";
import SheepDog from "./sheepdog";
import Goat from "./goat";
import FenceBox from "./fence";
import Timer from "./timer";
import HayBale from "./hay_bales";
import { isCollidedWith, resolveCollision } from "./util";

class Game {
    constructor(ctx, levelData) {
        this.currentLevel = levelData;
        this.numSheep = this.currentLevel.numSheep;
        this.numGoats = this.currentLevel.numGoats;
        this.sheep = [];
        this.goats = [];
        this.stationaryObjects = [];
        this.ctx = ctx;
        this.gameLost = false;

        this.addFences();
        this.addTimer();
        this.addHayBales(this.currentLevel.numHayBales);
        this.addSheep();
        this.addGoats();
        this.addSheepDog();
    }

    ensureNewObjectPosition(newObject) {
        const objects = this.allObjects();
        for (let i = 0; i < objects.length; i++) {
            const collided = isCollidedWith(newObject, objects[i]);
            if (collided === true || collided.collided === true) {
                newObject.pos = newObject.generateRandomPosition();
                i = -1;
            }
        }
    }
    
    addSheep() {
        let sheepImg = new Image();
        sheepImg.src = "assets/images/sheep_walking.png";

        for (let i = 0; i < this.numSheep; i++) {
            let newSheep = new Sheep(this.ctx, sheepImg, this.currentLevel.sheepSpeed);
            this.ensureNewObjectPosition(newSheep);
            this.sheep.push(newSheep);
        }
    }
    
    addGoats() {
        let goatImg = new Image();
        goatImg.src = "assets/images/goat4.png";

        for (let i = 0; i < this.numGoats; i++) {
            let newGoat = new Goat(this.ctx, goatImg, this.currentLevel.goatSpeed);
            this.ensureNewObjectPosition(newGoat);
            this.goats.push(newGoat);
        }
    }

    addSheepDog() {
        let img = new Image();
        img.src = "assets/images/sheepdog.png";
        
        let sheepDog = new SheepDog(this.ctx, img);
        this.ensureNewObjectPosition(sheepDog);
        this.sheepDog = sheepDog;
    }

    addFences() {
        const fenceWidth = 36;
        const fences = []

        if (this.numGoats === 0) {
            const fenceTop = new FenceBox(this.ctx, 100, 0, fenceWidth, 225);
            const fenceBottom = new FenceBox(this.ctx, 100, 350, fenceWidth, 225);
            const fenceBack = new FenceBox(this.ctx, -100, 0, fenceWidth, 550);
            fences.push(fenceTop, fenceBottom, fenceBack);
        } else {
            const fenceTop = new FenceBox(this.ctx, 100, 0, fenceWidth, 80)
            const fenceMiddleY = new FenceBox(this.ctx, 100, 195, fenceWidth, 160)
            const fenceMiddleX = new FenceBox(this.ctx, -200, 257, 300, fenceWidth, true)
            const fenceBottom = new FenceBox(this.ctx, 100, 470, fenceWidth, 80)
            const fenceBack = new FenceBox(this.ctx, -200, 0, fenceWidth, 550);
            fences.push(fenceTop, fenceBottom, fenceBack, fenceMiddleY, fenceMiddleX);
        }

        this.stationaryObjects = this.stationaryObjects.concat(fences);
    }

    addHayBales(numBales) {
        for (let i = 0; i < numBales; i++) {
            let hayBale = new HayBale(this.ctx);
            this.ensureNewObjectPosition(hayBale);
            this.stationaryObjects.push(hayBale);
        }
    }
    
    addTimer() {
        this.timer = new Timer(this.ctx, this.currentLevel.timeRemaining);
        this.stationaryObjects.push(this.timer);
        this.timer.countdown();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = "rgb(126, 200, 80)";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // Add objects to canvas
        this.stationaryObjects.forEach(object => object.draw());
        this.sheep.forEach(sheep => sheep.draw());
        this.goats.forEach(goat => goat.draw());
        this.sheepDog.draw();

        // Sheep remaining counter
        this.drawSheepCounter();
        if (this.numGoats > 0) this.drawGoatCounter();
    }

    drawSheepCounter() {
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

    drawGoatCounter() {
        const goatsLeft = this.goatsRemaining();

        this.ctx.font = "19px Roboto";
        this.ctx.fillStyle = "white";
        const counterText = goatsLeft === 1 ? "Goat" : "Goats";
        this.ctx.fillText(counterText, 28, 505);

        this.ctx.font = "19px Roboto";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("Remaining", 5, 530);

        this.ctx.font = '80px Modak';
        this.ctx.fillStyle = "white"
        this.ctx.strokeStyle = "rgb(90, 90, 90)";
        const countXPos = goatsLeft < 10 ? 30 : 15;
        this.ctx.fillText(`${goatsLeft}`, countXPos, 480);
        this.ctx.strokeText(`${goatsLeft}`, countXPos, 480);
    }

    moveObjects() {
        this.sheep.forEach(sheep => sheep.move());
        this.goats.forEach(goat => goat.move());
        this.sheepDog.move();
    }

    allHerdAnimals() {
        return this.sheep.concat(this.goats);
    }

    allObjects() {
        const objects = this.sheep.concat(this.goats, this.stationaryObjects);
        if (this.sheepDog) objects.push(this.sheepDog);
        return objects;
    }

    checkCollision() {
        const herdAnimals = this.allHerdAnimals();
        const movingObjects = herdAnimals.concat(this.sheepDog);
        
        for (let i = 0; i < herdAnimals.length; i++) { // Checks whether any herd animal has collided with something
            const herdAnimal = herdAnimals[i];
            for (let j = i + 1; j < movingObjects.length; j++) { // Checking against other moving objects
                const compareObj = movingObjects[j];
                if (isCollidedWith(herdAnimal, compareObj)) {
                    resolveCollision(herdAnimal, compareObj); // resets colliding animals's velocity 
                    if (compareObj instanceof SheepDog) {
                        compareObj.collideWithSheep(herdAnimal); // handles reaction of other sheepdog
                    }
                }
            }
            this.checkHerdAnimalObstacleCollisions(herdAnimal);
        }
        this.checkSheepdogObstacleCollisions();
    }

    checkHerdAnimalObstacleCollisions(herdAnimal) {
        for (let i = 0; i < this.stationaryObjects.length; i++) {
            const stationaryObj = this.stationaryObjects[i];
            const { collided, direction } = isCollidedWith(herdAnimal, stationaryObj);
            if (collided) herdAnimal.collideWithObstacle(direction);
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
            if (this.numGoats === 0) {
                if (sheep.pos[0] > 85) count += 1;
            } else {
                if (sheep.pos[0] > 85 || sheep.pos[1] > 257) count += 1;
                if (sheep.pos[0] < 85 && sheep.pos[1] > 257) this.gameLost = true;
            }
        })
        
        return count;
    }

    goatsRemaining() {
        let count = 0;
        this.goats.forEach(goat => {
            if (goat.pos[0] > 85 || goat.pos[1] < 257) count += 1;
            if (goat.pos[0] < 85 && goat.pos[1] < 257) this.gameLost = true;
        })

        return count;
    }
    
    won() {   
        return this.sheepRemaining() === 0 && this.goatsRemaining() === 0;
    }

    lost() {
        return this.timer.timeRemaining === "0:00" || this.gameLost;
    }

    gameOver() {
        return this.won() || this.lost();
    }
}

export default Game;