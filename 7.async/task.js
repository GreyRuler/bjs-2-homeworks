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
                id,
                time,
                callback
            }
        )
    }

    removeClock(id) {
        const startLengthAlarmCollection = this.alarmCollection.length
        this.alarmCollection = this.alarmCollection.filter(
            element => element.id !== id
        )
        return this.alarmCollection.length === startLengthAlarmCollection;
    }

    getCurrentFormattedTime() {
        const options = {hour: 'numeric', minute: 'numeric'};
        return new Date().toLocaleTimeString('ru', options);
    }

    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(element =>
                checkClock(element)
            ))
        }
    }

    checkClock(alarm) {
        if (alarm.time === this.getCurrentFormattedTime()) {
            alarm.callback();
        }        
    }

    stop() {
        if (this.timerId !== null) {
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