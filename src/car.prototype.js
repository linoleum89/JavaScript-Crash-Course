const uuidv1 = require("uuid/v1");

function Car(props) {
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

Car.prototype.on = function () {
    console.log("engine on");
}

Car.prototype.run = function () {
    console.log("car run");
}

Car.prototype.stop = function () {
    console.log("car stop");
}

const car = new Car({});
console.log(car);

export default Car;