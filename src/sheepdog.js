const constants = {
    COLOR: "rgb(46, 46, 46)",
    RADIUS: 23,
    SPEED: 3
}

class SheepDog {
    constructor(ctx, img) {
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
        this.facingRight = false;

        this.img = img;
        this.scale = 0.25;
        this.frameWidth = 200;
        this.frameHeight = 150;
        this.scaledWidth = this.scale * this.frameWidth;
        this.scaledHeight = this.scale * this.frameHeight;
        this.numCols = 8;
        this.currentLoop = 0;
        this.currentRow = 0;
        this.frameCount = 0;
    }

    move() {
        this.frameRate = 5;
        
        if (!this.rightKey && !this.leftKey) this.vel[0] = 0;

        if (this.pos[0] + this.radius <= this.ctx.canvas.width) {
            if (this.rightKey) {
                this.pos[0] += constants.SPEED;
                this.vel[0] = constants.SPEED - 1;
            }
        }

        if (this.leftKey) {
            this.pos[0] -= constants.SPEED;
            this.vel[0] = -(constants.SPEED - 1);
        }

        if (!this.upKey && !this.downKey) this.vel[1] = 0;

        if (this.pos[1] + this.radius <= this.ctx.canvas.height) {
            if (this.downKey) {
                this.pos[1] += constants.SPEED;
                this.vel[1] = constants.SPEED - 1;
            }
        }
        
        if (this.pos[1] - this.radius >= 0) {
            if (this.upKey) {
                this.pos[1] -= constants.SPEED;
                this.vel[1] = -(constants.SPEED - 1);
            }
        }
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        if (this.vel[0] === 0 && this.vel[1] === 0) {
            this.frameCount = 0;
            this.currentLoop = 0;
            this.facingRight ? this.currentRow = 1 : this.currentRow = 0;
        }

        if (this.vel[0] < 0) {
            this.currentRow = 0;
        } else if (this.vel[0] > 0) {
            this.currentRow = 1;
        }

        this.frameCount++;
        this.drawFrame(this.currentLoop, this.currentRow, this.pos[0] - this.radius, this.pos[1] - this.radius);
        if (this.frameCount < this.frameRate) {
            return // don't update animate unless specific # of frames have past
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

    keyDownHandler(e) {
        if (e.keyCode === 39) {
            this.rightKey = true;
            this.facingRight = true;
        } else if (e.keyCode === 37) {
            this.leftKey = true;
            this.facingRight = false;
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

    collideWithSheep() {
        if (this.vel[0] < 0) this.pos[0] += constants.SPEED; 
        if (this.vel[0] > 0) this.pos[0] -= constants.SPEED; 
        if (this.vel[1] < 0) this.pos[1] += constants.SPEED; 
        if (this.vel[1] > 0) this.pos[1] -= constants.SPEED; 
    }

    collideWithObstacle(direction) {
        if (direction === "left") this.pos[0] -= constants.SPEED;
        if (direction === "right") this.pos[0] += constants.SPEED;
        if (direction === "top") this.pos[1] -= constants.SPEED;
        if (direction === "bottom") this.pos[1] += constants.SPEED;   
    }
}

export default SheepDog;