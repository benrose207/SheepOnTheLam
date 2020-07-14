class FenceBox {
    constructor(ctx, x, y, width, height) {
        this.ctx = ctx;
        this.pos = [x, y];
        this.width = width;
        this.height = height;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.pos[0], this.pos[1], this.width, this.height);
        this.ctx.fillStyle = "rgb(110, 86, 48)";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default FenceBox;