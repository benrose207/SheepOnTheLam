import Sheep from "./sheep";


const gameConstants = {
    NUM_SHEEP: 10
}

class Game {
    constructor(ctx) {
        this.numSheep = gameConstants.NUM_SHEEP;
        this.sheep = [];
        this.ctx = ctx;
        this.addSheep();
    }

    addSheep() {
        for (let i = 0; i < this.numSheep; i++) {
            const newSheep = new Sheep({ pos: this.randomPosition() });
            this.sheep.push(newSheep);
        }
    }

    randomPosition() {
        const xPos = Math.floor(Math.random() * this.ctx.canvas.width)
        const yPos = Math.floor(Math.random() * this.ctx.canvas.height)
        return [xPos, yPos];
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = "rgb(149, 223, 114)";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.sheep.forEach(sheep => sheep.draw(this.ctx));
    }

    moveObjects() {
        this.sheep.forEach(sheep => sheep.move());
    }
}

export default Game;