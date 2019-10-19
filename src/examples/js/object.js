const car = {
    price: 100,
    color: 'blue',
    'needs-fuel': true,
    parts: ['motor', 'seats'],
    startEngine: function() {
        console.log('engine start!');
    }
};

console.log(car.price); //dot notation to retrieve a value from property price
console.log(car['needs-fuel']); //bracket notation since car.needs-fuel would be invalid, needs to be camel case

car = 'override the object!';

car.price = 20;

Object.freeze(car);

car.price = 50;