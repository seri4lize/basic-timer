export class Timer {
    constructor() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.milliseconds = 0;
        this.intervalId = null;
    }

    start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.tick();
            }, 10);
        }
    }

    tick() {
        this.milliseconds += 10;
        if (this.milliseconds >= 1000) {
            this.seconds++;
            this.milliseconds = 0;
        }
        if (this.seconds >= 60) {
            this.minutes++;
            this.seconds = 0;
        }
        if (this.minutes >= 60) {
            this.hours++;
            this.minutes = 0;
        }
        if (this.hours >= 24) {
            this.reset();
            alert('24 hours! Are you crazy?');
        }

        this.displayTime();
    }

    displayTime() {
        const hours = String(this.hours).padStart(2, '0');
        const minutes = String(this.minutes).padStart(2, '0');
        const seconds = String(this.seconds).padStart(2, '0');
        const milliseconds = String(Math.floor(this.milliseconds / 10)).padStart(2, '0');

        let time;
        if (this.hours === 0 && this.minutes === 0) {
            time = `${seconds},${milliseconds}`;
        } else if (this.hours === 0) {
            time = `${minutes}.${seconds},${milliseconds}`;
        } else {
            time = `${hours}:${minutes}.${seconds},${milliseconds}`;
        }

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
        this.milliseconds = 0;
        this.displayTime();
    }
}

export const timer = new Timer();
