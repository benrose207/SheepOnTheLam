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
}

export default SheepDog;