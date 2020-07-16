class Timer {
    constructor(ctx) {
        this.ctx = ctx;
        this.height = 80;
        this.width = 190;
        this.pos = [710, 0];
        this.timeRemaining = "0:10";
    }

    draw() {
        this.ctx.font = "80px Modak";
        this.ctx.fillStyle = "white";
        this.ctx.strokeStyle = "rgb(90, 90, 90)";
        this.ctx.fillText(`${this.timeRemaining}`, 725, 70);
        this.ctx.strokeText(`${this.timeRemaining}`, 725, 70);
    }

    countdown() {
        const timeParts = this.timeRemaining.split(":");
        let minutes = parseInt(timeParts[0]);
        let seconds = parseInt(timeParts[1]);

        const intervalId = window.setInterval(() => {
        if (seconds === 0) {
            minutes -= 1;
            seconds = 59;
        } else {
            seconds -= 1;
        }

        const displayMinutes = minutes < 10 ? `${minutes}` : minutes;
        const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
        this.timeRemaining = `${displayMinutes}:${displaySeconds}`;
        }, 1000);
    }
}

export default Timer;