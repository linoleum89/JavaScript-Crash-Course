//SPREAD

let arr1 = [1, 2, 3]
let arr2 = ['a', 'b', 'c']
let arr3 = [...arr1, ...arr2]

console.log(arr3) // [1, 2, 3, "a", "b", "c"]

let arr1 = [1, 2, 3]
let sum = (a, b, c) => a + b + c

console.log(sum(...arr1)) // 6

//REST

function sum(num1, num2, ...args) {
    const restTotal = args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return num1 + num2 + restTotal;
}

sum(1, 3, 4, 5)