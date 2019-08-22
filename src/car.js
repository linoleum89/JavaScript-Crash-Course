const uuidv1 = require("uuid/v1");

class Car {
    constructor(props) {
        const {
            id,
            name = "",
            brand = "",
            engine = "",
            model = "",
            color = "",
            image = "",
            price = 0
        } = props;
        this.id = id || uuidv1();
        this.name = name;
        this.brand = brand;
        this.engine = engine;
        this.model = model;
        this.color = color;
        this.image = image !== '' ? image : "https://via.placeholder.com/300";
        this.price = price || '$ ' + price;
    }

    on() {
        console.log("engine on");
    }

    run() {
        console.log("car run");
    }

    stop() {
        console.log("car stop");
    }
}

export default Car;
