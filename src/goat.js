import MovingObject from "./moving_object";

const constants = {
    RADIUS: 26,
}

class Goat extends MovingObject {
    constructor(ctx, img, speed) {
        super(ctx, img, constants.RADIUS, speed);

        this.scale = 0.25;
        this.frameWidth = 160;
        this.frameHeight = 144;
        this.scaledWidth = this.scale * this.frameWidth;
        this.scaledHeight = this.scale * this.frameHeight;
        this.numCols = 3;
    }

    draw() {
        // Testing
        // this.ctx.beginPath();
        // this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        // this.ctx.strokeStyle = "black";
        // this.ctx.stroke();
        // this.ctx.closePath();
        // End Testing

        if (this.vel[0] === 0 && this.vel[1] === 0) {
            this.frameCount = 0;
        }

        this.vel[0] <= 0 ? this.currentRow = 0 : this.currentRow = 1;

        this.frameCount++;
        this.drawFrame(this.currentLoop, this.currentRow, this.pos[0] - this.radius * 0.8, this.pos[1] - this.radius * 0.8);
        if (this.frameCount < this.frameRate) {
            return
        }

        this.frameCount = 0;
        this.currentLoop++;
        if (this.currentLoop === this.numCols) {
            this.currentLoop = 0;
        }
    }

    move() {
        this.frameRate = 15;

        if (this.pos[0] + this.radius > this.ctx.canvas.width) {
            this.vel[0] = -this.vel[0];
        }

        if (this.pos[1] + this.radius > this.ctx.canvas.height || this.pos[1] - this.radius < 0) {
            this.vel[1] = - this.vel[1];
        }

        if (Math.abs(this.vel[0]) > this.speed || Math.abs(this.vel[1]) > this.speed) {
            this.frameRate = 8;
            if (this.vel[0] > 0) this.vel[0] -= this.friction;
            if (this.vel[0] < 0) this.vel[0] += this.friction;

            if (this.vel[1] > 0) this.vel[1] -= this.friction;
            if (this.vel[1] < 0) this.vel[1] += this.friction;
        }

        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}

export default Goat;