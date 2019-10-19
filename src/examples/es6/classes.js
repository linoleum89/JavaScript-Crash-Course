class Car {
    constructor(props) {
        const {
            name = "",
            brand = "",
            engine = "",
            model = "",
            color = "",
            image = "",
            price = 0
        } = props;
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
