import { randomVec } from "./util";

const constants = {
    COLOR: "rgb(255, 255, 255)",
    RADIUS: 10
}

class Sheep {
    constructor(ctx) {
        this.ctx = ctx;
        this.radius = constants.RADIUS;

        const xPos = Math.random() * ((this.ctx.canvas.width - this.radius * 2) - 130) + 130;
        const yPos = Math.random() * (this.ctx.canvas.height - this.radius * 2) + this.radius
        this.pos = [xPos, yPos];
        this.vel = randomVec(0.25);
        this.friction = 0.02;

        this.color = constants.COLOR;
    }

    draw(ctx) {
        ctx.beginPath();

        ctx.arc(
            this.pos[0],
            this.pos[1],
            this.radius,
            0,
            2 * Math.PI,
            false
        );

        ctx.fillStyle = this.color;
        ctx.fill();
    }

    move() {
        if (this.pos[0] + this.radius > this.ctx.canvas.width) {
            this.vel[0] = -this.vel[0];
        }

        if (this.pos[1] + this.radius > this.ctx.canvas.height || this.pos[1] - this.radius < 0) {
            this.vel[1] = - this.vel[1];
        }

        if (Math.abs(this.vel[0]) > 0.25 || Math.abs(this.vel[1]) > 0.25) {
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

        }, 500)
    }

    collideWithObstacle(direction) {
        if (direction === "left" || direction === "right") this.vel[0] = -this.vel[0];
        if (direction === "top" || direction === "bottom") this.vel[1] = -this.vel[1];
    }
}

export default Sheep;