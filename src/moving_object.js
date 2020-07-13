class MovingObject {
    constructor(options) {
        this.pos = options.pos;
        // this.vel = [-0.25, -0.25];
        this.radius = 10;
        this.color = "rgb(255, 255, 255)";
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
        this.pos[0] += this.vel[0]
        this.pos[1] += this.vel[1];
    }
}

export default MovingObject;