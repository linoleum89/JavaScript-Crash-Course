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

const Singleton = (function () {
    let instance;
 
    function createInstance() {
        const eventEmitter = new EventEmitter();
        Object.freeze(eventEmitter);
        return eventEmitter;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const eventEmitter = Singleton.getInstance();
//const eventEmitter2 = Singleton.getInstance();

//alert("Same instance? " + (eventEmitter === eventEmitter2));  

//const eventEmitter = new EventEmitter();
//Object.freeze(eventEmitter);

export default eventEmitter;