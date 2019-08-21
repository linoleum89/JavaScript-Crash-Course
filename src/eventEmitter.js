class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName = '', callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = callback;
        }
    }
    off(eventName = '') {
        if (this.events[eventName]) {
            delete this.events[eventName];
        }
    }
    emit(eventName = '', ...args) {
        if (this.events[eventName]) {
            //this.events[eventName]();
            this.events[eventName].apply(null, args);
        }
    }
}

const eventEmitter = new EventEmitter();
Object.freeze(eventEmitter);

export default eventEmitter;