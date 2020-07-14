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

        this.pos[0] += this.vel[0]
        this.pos[1] += this.vel[1];
    }

    // isCollidedWith(otherObject) {
    //     if (otherObject instanceof Sheep) {
    //         return this.collideCircles(otherObject);
    //     } else {
    //         return this.collideCircleRectangle(otherObject);
    //     }
    // }

    // collideCircles(otherObject) {
    //     let radiiSum = this.radius + otherObject.radius;
    //     let distanceBtwn = Math.sqrt(
    //         (this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2
    //     );

    //     return distanceBtwn < radiiSum + 8;
    // }

    // collideCircleRectangle(otherObject) {
    //     let testX = this.pos[0];
    //     let testY = this.pos[1];
    //     const rx = otherObject.pos[0]
    //     const ry = otherObject.pos[1]
    //     let collisionDirection = "x";

    //     if (testX < rx) testX = rx;
    //     if (testX > rx + otherObject.width) testX = rx + otherObject.width;

    //     if (testY < ry) {
    //         testY = ry;
    //         collisionDirection = "y";
    //     }
    //     if (testY > ry + otherObject.height) {
    //         testY = ry + otherObject.height;
    //         collisionDirection = "y";
    //     }

    //     const distX = this.pos[0] - testX;
    //     const distY = this.pos[1] - testY;
    //     const distance = Math.sqrt((distX * distX) + (distY * distY)) - 5;

    //     return { collided: distance <= this.radius, direction: collisionDirection }
    // }

    collideWithSheep(otherSheep) {
        this.vel[0] = 0;
        this.vel[1] = 0;

        let timeoutID = window.setTimeout(() => {
            this.vel[0] = otherSheep.vel[0];
            this.vel[1] = otherSheep.vel[1];

        }, 3000)
    }
}

export default Sheep;