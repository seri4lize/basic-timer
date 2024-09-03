export class Timer {
    constructor() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.intervalId = null;
    }

    start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.tick();
            }, 1000);
        }
    }

    tick() {
        if (this.seconds < 59) {
            this.seconds++;
        } else if (this.minutes < 59) {
            this.minutes++;
            this.seconds = 0;
        } else if (this.hours < 23) {
            this.hours++;
            this.minutes = 0;
            this.seconds = 0;
        } else if (this.hours === 23 && this.minutes === 59 && this.seconds === 59) {
            this.hours++;
        }

        if (this.hours === 24) {
            this.reset();
            alert('24 hours! Are you crazy?');
        }

        this.displayTime();
    }

    displayTime() {
        const hours = String(this.hours).padStart(2, '0');
        const minutes = String(this.minutes).padStart(2, '0');
        const seconds = String(this.seconds).padStart(2, '0');
        const time = `${hours}:${minutes}:${seconds}`;
        document.getElementById('timer').innerHTML = time;
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    reset() {
        this.stop();
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.displayTime();
    }
}

export const timer = new Timer();
