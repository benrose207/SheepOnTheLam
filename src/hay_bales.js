class HayBale {
    constructor(ctx) {
        this.ctx = ctx;
        this.radius = 30;
        this.height = 60;
        this.width = 60;
        this.pos = this.generateRandomPosition();
        this.objectShape = "rect";
    }

    generateRandomPosition() {
        const xPos = Math.random() * (this.ctx.canvas.width - this.radius * 2 - 175) + 175;
        const yPos = Math.random() * (this.ctx.canvas.height - this.height * 2) + this.radius;
        return [xPos, yPos];
    }

    draw() {
        const adjustedX = this.pos[0] + this.radius;
        const adjustedY = this.pos[1] + this.radius;

        this.ctx.beginPath();
        this.ctx.arc(adjustedX, adjustedY, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = "rgb(224, 197, 121)";
        this.ctx.fill();
        this.ctx.closePath();

        // Begin Testing
        // this.ctx.beginPath();
        // this.ctx.rect(this.pos[0], this.pos[1], this.width, this.height);
        // this.ctx.strokeStyle = "black";
        // this.ctx.stroke();
        // this.ctx.closePath();
        //End Testing

        // draw inner circles
        for (let i = 1; i < 4; i++) {
            this.ctx.beginPath();
            this.ctx.arc(adjustedX, adjustedY, this.radius - (8 * i), 0, 2 * Math.PI);
            this.ctx.strokeStyle = "rgb(201, 177, 109)";
            this.ctx.stroke();
            this.ctx.closePath();
        }

        for (let i = 0; i < 4; i++) {
            this.drawGrass((this.pos[0] + 20) + (i * 10), this.pos[1] + this.height)
        }
    }

    drawGrass(startX, startY) { 
        let radius = 10;
        let startAngle = 3;
        let endAngle = 4;

        this.ctx.beginPath();
        this.ctx.arc(startX, startY, radius, startAngle, endAngle);
        this.ctx.strokeStyle = "green";
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.arc(startX, startY, radius / 2, startAngle, endAngle);
        this.ctx.strokeStyle = "green";
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.arc(startX - 15, startY, radius - 2, 0, 5, true);
        this.ctx.strokeStyle = "green";
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.arc(startX - 10, startY, radius, 0, 5, true);
        this.ctx.strokeStyle = "green";
        this.ctx.stroke();
        this.ctx.closePath();
    }
}

export default HayBale;