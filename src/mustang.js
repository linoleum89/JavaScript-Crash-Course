import Car from './car';

class Mustang extends Car {
    constructor(props) {
        super(props);
        //Prefilled values for Mustand Type, we are only sending the model
        this.name = 'Mustang';
        this.brand = 'Ford';
        this.engine = 'V8';
        this.color = 'Yellow';
        this.price = 400;
        this.image = 'https://auto.ndtvimg.com/car-images/big/ford/mustang/ford-mustang.jpg?v=32';
        this.model = props.model;
    }
    runSuperFast() {
        console.log('a normal car does not run super fast but this one does!');
    }
}

export default Mustang;