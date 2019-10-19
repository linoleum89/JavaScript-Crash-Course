//Module
const APP = (function() {

    //private variables
    const students = 15;
    const teachers = 2;


    return {
        total_of_people: function() {
            console.log(students + teachers);
        }
    }
})();

APP.students;
APP.total_of_people();

//Observer
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

//Singleton
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
const eventEmitter2 = Singleton.getInstance();
const eventEmitter3 = new EventEmitter();

console.log(eventEmitter === eventEmitter2);
console.log(eventEmitter === eventEmitter3);

eventEmitter.on('sayHello', function(name) {
    console.log('Hello world! ' + name);
});

eventEmitter.emit('sayHello', 'Jorge');

//FACADE

const mySelector = document.querySelector('.my-class').innerHTML = 'Hello React';
mySelector.trim();

$('.my-class').text('Hello React').trim(); //the abstraction