import { randomVec } from "./util";

const constants = {
    COLOR: "rgb(255, 255, 255)",
    RADIUS: 25
}

class Sheep {
    constructor(ctx, img) {
        this.ctx = ctx;
        this.radius = constants.RADIUS;

        const xPos = Math.random() * ((this.ctx.canvas.width - this.radius * 2) - 175) + 175;
        const yPos = Math.random() * (this.ctx.canvas.height - this.radius * 2) + this.radius
        this.pos = [xPos, yPos];
        this.vel = randomVec(0.25);
        this.friction = 0.02;

        this.img = img;
        this.scale = 0.3;
        this.frameWidth = 160;
        this.frameHeight = 124;
        this.scaledWidth = this.scale * this.frameWidth;
        this.scaledHeight = this.scale * this.frameHeight;
        this.numCols = 3;
        this.currentLoop = 0;
        this.currentRow = 0;
        this.frameCount = 0;
    }

    draw() {
        if (this.vel[0] === 0 && this.vel[1] === 0) {
            this.frameRate = 60;
        }

        this.vel[0] <= 0 ? this.currentRow = 0 : this.currentRow = 1;

        this.frameCount++;
        this.drawFrame(this.currentLoop, this.currentRow, this.pos[0] - this.radius * 1, this.pos[1] - this.radius * 0.8);
        if (this.frameCount < this.frameRate) {
            return
        }

        this.frameCount = 0;
        this.currentLoop++;
        if (this.currentLoop === this.numCols) {
            this.currentLoop = 0;
        }
    }
    
    drawFrame(frameX, frameY, canvasX, canvasY) {
        this.ctx.drawImage(
          this.img,
          frameX * this.frameWidth,
          frameY * this.frameHeight,
          this.frameWidth,
          this.frameHeight,
          canvasX,
          canvasY,
          this.frameWidth * this.scale,
          this.frameHeight * this.scale
        );
    }

    move() {
        this.frameRate = 15;

        if (this.pos[0] + this.radius > this.ctx.canvas.width) {
            this.vel[0] = -this.vel[0];
        }

        if (this.pos[1] + this.radius > this.ctx.canvas.height || this.pos[1] - this.radius < 0) {
            this.vel[1] = - this.vel[1];
        }

        if (Math.abs(this.vel[0]) > 0.25 || Math.abs(this.vel[1]) > 0.25) {
            this.frameRate = 8;
            if (this.vel[0] > 0) this.vel[0] -= this.friction;
            if (this.vel[0] < 0) this.vel[0] += this.friction;

            if (this.vel[1] > 0) this.vel[1] -= this.friction;
            if (this.vel[1] < 0) this.vel[1] += this.friction;
        }

        this.pos[0] += this.vel[0]
        this.pos[1] += this.vel[1];
    }

    collideWithSheep(otherSheep) {
        this.vel[0] = 0;
        this.vel[1] = 0;

        let timeoutID = window.setTimeout(() => {
            this.vel[0] = otherSheep.vel[0];
            this.vel[1] = otherSheep.vel[1];
            
        }, 200)
    }

    collideWithObstacle(direction) {
        if (direction === "left" || direction === "right") this.vel[0] = -this.vel[0];
        if (direction === "top" || direction === "bottom") this.vel[1] = -this.vel[1];
    }
}

export default Sheep;