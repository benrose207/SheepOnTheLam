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
        // Start Testing
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        // End Testing
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.rect(this.pos[0] + 5, this.pos[1], 8, this.height);
        this.ctx.fillStyle = "rgb(125, 106, 62)";
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.rect(this.pos[0] + 22, this.pos[1], 8, this.height);
        this.ctx.fillStyle = "rgb(125, 106, 62)";
        this.ctx.fill();
        this.ctx.closePath();

        let offset = 20;
        for (let i = 0; i < 6; i++) {
            this.ctx.beginPath();
            this.ctx.rect(this.pos[0], this.pos[1] + offset, this.width, 5);
            this.ctx.fillStyle = "rgb(125, 106, 62)";
            this.ctx.fill();
            this.ctx.closePath();

            offset += (this.height / 6);
        }
    }
}

export default FenceBox;