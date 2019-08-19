import Car from './car';

class Mustang extends Car {
    constructor(props) {
        super(props);
        this.name = 'Mustang';
        this.brand = 'Ford';
        this.engine = 'V8';
        this.model = props.model;
    }
    runSuperFast() {
        console.log('a normal car does not run super but this one does!');
    }
}

export default Mustang;