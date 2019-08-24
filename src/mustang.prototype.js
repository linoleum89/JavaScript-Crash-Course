import Car from './car.prototype';

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

export default mustang;