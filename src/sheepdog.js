const constants = {
    COLOR: "rgb(46, 46, 46)",
    RADIUS: 10
}

class SheepDog {
    constructor(ctx) {
        this.ctx = ctx;
        this.radius = constants.RADIUS;
        this.color = constants.COLOR

        const xPos = Math.random() * ((this.ctx.canvas.width - this.radius * 2) - 130) + 130;
        const yPos = Math.random() * (this.ctx.canvas.height - this.radius * 2) + this.radius
        this.pos = [xPos, yPos];
        this.vel = [0, 0];

        this.rightKey = false;
        this.leftKey = false;
        this.upKey = false;
        this.downKey = false;
    }

    move() {
        if (!this.rightKey && !this.leftKey) this.vel[0] = 0;

        if (this.pos[0] + this.radius <= this.ctx.canvas.width) {
            if (this.rightKey) {
                this.pos[0] += 3;
                this.vel[0] = 2;
            }
        }

        if (this.leftKey) {
            this.pos[0] -= 3;
            this.vel[0] = -2;
        }

        if (!this.upKey && !this.downKey) this.vel[1] = 0;

        if (this.pos[1] + this.radius <= this.ctx.canvas.height) {
            if (this.downKey) {
                this.pos[1] += 3;
                this.vel[1] = 2;
            }
        }
        
        if (this.pos[1] - this.radius >= 0) {
            if (this.upKey) {
                this.pos[1] -= 3;
                this.vel[1] = -2;
            }
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(
            this.pos[0],
            this.pos[1],
            this.radius,
            0,
            2 * Math.PI,
            false
        );

        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    keyDownHandler(e) {
        if (e.keyCode === 39) {
            this.rightKey = true;
        } else if (e.keyCode === 37) {
            this.leftKey = true;
        }

        if (e.keyCode === 40) {
            this.downKey = true;
        } else if (e.keyCode === 38) {
            this.upKey = true;
        }
    }

    keyUpHandler(e) {
        if (e.keyCode === 39) {
            this.rightKey = false;
        } else if (e.keyCode === 37) {
            this.leftKey = false;
        }

        if (e.keyCode === 40) {
            this.downKey = false;
        } else if (e.keyCode === 38) {
            this.upKey = false;
        }
    }

    collideWithObstacle(direction) {
        if (direction === "left") this.pos[0] -= 3;
        if (direction === "right") this.pos[0] += 3;
        if (direction === "top") this.pos[1] -= 3;
        if (direction === "bottom") this.pos[1] += 3;   
    }
}

export default SheepDog;