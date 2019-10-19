var price; //var was the default way to declare variables until the introduction of let & const
           //this variable definition is available inside the scope where it lives, for default it scope its function scope
           //prefer const and let

const MY_CONSTANT_VALUE = 100; //a constant will never change its value, 
                               //for convention sometimes its good to name it as uppercase
                               //this type needs to be initialized


let someCondition = true;
if(someCondition) {
    let scopedVariable = 'hello'; //let is block scope, so this variable will not be availble outside this block
    console.log(scopedVariable); //'hello'
    console.log(price); //undefined
    price = 30; 
    console.log(price); //30
    console.log(MY_CONSTANT_VALUE); //100
}


price = 20;
console.log(price); //20
console.log(scopedVariable); //this will throw an error, scopedVariable is not defined
console.log(MY_CONSTANT_VALUE); //100
MY_CONSTANT_VALUE = 50 //this will throw an error