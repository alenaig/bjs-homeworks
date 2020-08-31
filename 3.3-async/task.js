class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, fn, id) {
        if(isNaN(id)) {
            throw new Error("Неверный параметр");
        }

        if(this.alarmCollection.some(item => item.id === id)) {
            return console.error("Такое значение уже существует");
        }

        this.alarmCollection.push({time, fn, id});
    }

    removeClock(id) {
        this.alarmCollection.splice(this.alarmCollection.indexOf(item => item.id === id), 1);
    }

    getCurrentFormattedTime() {
        const time = new Date();
        return time.getHours() + ":" + time.getMinutes();
    }

    start() {
        const checkClock = (call) => {
            if(this.getCurrentFormattedTime() === call.time) {
                return this.callback;
            }
        }
        if (!this.timerId) {
            this.timerId = () => setInterval(this.alarmCollection.forEach(checkClock),1000)
        }
    }

    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(call => console.log(`${call.id}, time: ${call.time}`))
    }

    clearAlarms() {
        clearInterval(this.timerId);
        this.alarmCollection = [];
    }
}