class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('Параметр id не передан');
        }
        if (this.alarmCollection.find(element => element.id === id)) {
            console.error('Будильник с таким id уже существует');
            return;
        }
        this.alarmCollection.push(
            {
                id: id,
                time: time,
                callback: callback
            }
        )
    }

    removeClock(id) {
        this.alarmCollection = this.alarmCollection.filter(
            element => element.id !== id
        )
    }

    getCurrentFormattedTime() {
        const options = {hour: 'numeric', minute: 'numeric'};
        return new Date().toLocaleTimeString('ru', options);
    }

    start() {
        const checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback;
            }
            if (alarm.id === undefined) {
                this.timerId = setInterval(() => this.alarmCollection.forEach(element =>
                    checkClock(element)
                ))
            }
        }
    }

    stop() {
        if (this.timerId !== undefined) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element =>
            console.log(`id: ${element.id}, time: ${element.time}`)
        )
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}