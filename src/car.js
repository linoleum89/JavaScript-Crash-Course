const uuidv1 = require('uuid/v1');

class Car {
    constructor(props) {
        const {id, name = '', brand = '', engine = '', model = '', color = '', price = 0} = props;
        this.id = id || uuidv1();
        this.name = name;
        this.brand = brand;
        this.engine = engine;
        this.model = model;
        this.color = color;
        this.price = price || 0;
    }

    on() {
        console.log('engine on');
    }

    run() {
        console.log('car run');
    }

    stop() {
        console.log('car stop');
    }
}

export default Car;