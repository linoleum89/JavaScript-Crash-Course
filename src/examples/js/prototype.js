function Car(props) {
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

    const self = this;

    function printName() {
        console.log(this.name); //this will not work

        //console.log(self.name);
    }

    //printName();

    printName.apply(this);
    //printName.call(this);
}

Car.prototype.on = function () {
    console.log("engine on");
}

Car.prototype.run = function () {
    console.log(this.name + " is running!");
}

Car.prototype.stop = function () {
    console.log("car stop");
}

const car = new Car({name: 'Ferrari'});
console.log(car);

//Inheritance

function Mustang(props) {
    this.name = 'Mustang';
    this.brand = 'Ford';
    this.engine = 'V8';
    this.color = 'Yellow';
    this.price = 400;
    this.image = 'https://auto.ndtvimg.com/car-images/big/ford/mustang/ford-mustang.jpg?v=32';
    this.model = props.model;
}

Mustang.prototype = new Car({});

Mustang.prototype.runSuperFast = function() {
    console.log('a normal car does not run super fast but a '+this.name+' does!');
}

const mustang = new Mustang({model:'2017'});