let myFunction = function() {
    console.log('anonymous function stored in a variable');
}

//curried function
function sum(num1) {
    return function(num2) {
        return num1 + num2;
    }
}

sum(2)(3); //5

let mySum = sum(4);

mySum(4); //8

//high order function
const lettersWithoutSpaces = ['a ', 'b   ', 'c'].map(function(letter) {
    return letter.trim();
});

console.log(lettersWithoutSpaces); //['a', 'b', 'c']

['a ', 'b   ', 'c'].map(letter => letter.trim()); //['a', 'b', 'c'], same result 