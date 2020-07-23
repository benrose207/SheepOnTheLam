import { randomVec } from "./util";

class MovingObject {
    constructor(ctx, img, radius, speed) {
        this.ctx = ctx;
        this.radius = radius;
        this.speed = speed;
        this.objectShape = "circle";

        this.pos = this.generateRandomPosition();
        this.vel = randomVec(this.speed);
        this.friction = 0.02;

        this.img = img;

        this.currentLoop = 0;
        this.currentRow = 0;
        this.frameCount = 0;
    }

    generateRandomPosition() {
        const xPos = Math.random() * (this.ctx.canvas.width - this.radius * 2 - 175) + 175;
        const yPos = Math.random() * (this.ctx.canvas.height - this.radius * 2) + this.radius;
        return [xPos, yPos];
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

    collideWithObstacle(direction) {
        if (direction.includes("left") || direction.includes("right")) this.vel[0] = -this.vel[0];
        if (direction.includes("top") || direction.includes("bottom")) this.vel[1] = -this.vel[1];
    }
}

export default MovingObject;