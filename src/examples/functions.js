//function definition
function myFunction() {
    console.log('a normal function definition');
}

myFunction(); //function invocation, this is bound to the global object or parent object



let functionExpression = function() {
    console.log('this is a function expression');
};

functionExpression();

let car = {
    brand: 'Ford',
    run: function(){
        console.log('this a method from the Car object, the brand is ' + this.brand);
    }
};

car.run();

//prefer the new constructor method for function objects creation that will serve as classes for your program
function Teacher() {
    let self = this;
    let arrowFunction;
    this.name = 'Jorge';
    this.teach = function() {
        console.log(this.name + ' is teaching');
    }
    
    function printTeacher() {
        console.log(this); //this here would be the context of Algo, this is a bug of the language
        console.log(self); //workaround using a variable, another names are _self
    }
    printTeacher();

    arrowFunction = () => {
        console.log(this); //with an arrow function we can preserve the value of this, arrow function are anonymous and serves as lambda expressions
    }

    arrowFunction();
}

let teacher = new Teacher(); //constructor invocation

console.log(teacher);
console.log(teacher.teach()); //Jorge is teaching