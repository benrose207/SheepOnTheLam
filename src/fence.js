class FenceBox {
    constructor(ctx, x, y, width, height, rotated) {
        this.ctx = ctx;
        this.pos = [x, y];
        this.width = width;
        this.height = height;
        this.rotated = rotated;
    }

    draw() {
        // Build hit box for collisions
        this.ctx.beginPath();
        this.ctx.rect(this.pos[0], this.pos[1], this.width, this.height);
        // Start Testing
        // this.ctx.strokeStyle = "black";
        // this.ctx.stroke();
        // End Testing
        this.ctx.closePath();

        this.rotated ? this.drawDetailsHorizontal() : this.drawDetailsVertical();
    }

    drawDetailsVertical() {
        // Add main fence railings
        this.ctx.beginPath();
        this.ctx.rect(this.pos[0] + 5, this.pos[1], 7, this.height);
        this.ctx.fillStyle = "rgb(125, 106, 62)";
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.rect(this.pos[0] + 22, this.pos[1], 7, this.height);
        this.ctx.fillStyle = "rgb(125, 106, 62)";
        this.ctx.fill();
        this.ctx.closePath();

        // Add fenceposts
        let offset = 20;
        while (offset < this.height) {
            this.ctx.beginPath();
            this.ctx.rect(this.pos[0], this.pos[1] + offset, this.width, 8);
            this.ctx.fillStyle = "rgb(125, 106, 62)";
            this.ctx.fill();
            this.ctx.closePath();

            offset += 37.5;
        }
    }

    drawDetailsHorizontal() {
        // Add main fence railings
        this.ctx.beginPath();
        this.ctx.rect(this.pos[0], this.pos[1] + 5, this.width + 10, 7);
        this.ctx.fillStyle = "rgb(125, 106, 62)";
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.rect(this.pos[0], this.pos[1] + 22, this.width + 10, 7);
        this.ctx.fillStyle = "rgb(125, 106, 62)";
        this.ctx.fill();
        this.ctx.closePath();

        // Add fenceposts
        let offset = 20;
        while (offset < this.width) {
            this.ctx.beginPath();
            this.ctx.rect(this.pos[0] + offset, this.pos[1], 8, this.height);
            this.ctx.fillStyle = "rgb(125, 106, 62)";
            this.ctx.fill();
            this.ctx.closePath();

            offset += 37.5;
        }
    }
}

export default FenceBox;