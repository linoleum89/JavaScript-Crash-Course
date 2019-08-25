import Car from './car';

class Mustang extends Car {
    constructor(props) {
        super(props);
        //Prefilled values for Mustang Type, we are only sending the model
        this.name = 'Mustang';
        this.brand = 'Ford';
        this.engine = 'V8';
        this.color = 'Yellow';
        this.price = 400;
        this.image = 'https://auto.ndtvimg.com/car-images/big/ford/mustang/ford-mustang.jpg?v=32';
        this.model = props.model;
    }
    runSuperFast() {
        console.log('a normal car does not run super fast but a '+this.name+' does!');

        const self = this; //other names can be _this

        function doSomethingElse() {
            console.log(this, 'normal function, this has its own context here');
            console.log(self, 'normal function with a workaround to use this storing it in a variable called self');
        }

        const arrowFunction = () => {
            console.log(this, 'in arrow functions we can preserve the value of this');
        }

        function callAndApply(args) {
            console.log(this, 'normal function, bind');
        }
    
        doSomethingElse();
        arrowFunction();
        callAndApply.call(this);  //theFunction.call(valueForThis, arg1, arg2, ...)
        callAndApply.apply(this); //theFunction.apply(valueForThis, arrayOfArgs)
    }
}

export default Mustang;