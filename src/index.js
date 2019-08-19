//import _ from 'lodash';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Car from './car';
import Mustang from './mustang';
import eventEmitter from './eventEmitter';

import actions from './actions';
import runTests from './car.spec';

const json = require('./cars.json');

const APP = (function (Car) {
    const cars = [];

    eventEmitter.on('isLoading', (isLoading) => {
        const overlayElement = document.getElementById('overlay');
        overlayElement.style.display = isLoading ? 'block' : 'none';
    });

    eventEmitter.on('createCar', (args) => {
        console.log('create car!', args);
        const { brand, name } = args;
        let car;

        try {
            if (name === 'Mustang') {
                car = new Mustang({
                    model: '2017'
                });
            } else {
                car = new Car({
                    brand,
                    name
                });
            }

            cars.push(car);
            actions.addCar(car, cars.length);

        } catch (err) {
            console.error('Cannot create car: ', err);
        }
    });

    eventEmitter.on('deleteCar', () => {
        console.info('delete car!');
    });

    eventEmitter.on('editCar', (id) => {
        console.info('edit car!', id);
        const selectedCar = cars.find(car => car.id === id); // high order function
        console.log(selectedCar);
        selectedCar.name = 'FOCUS';

        const carCard = document.getElementById(id);
        //const nameElement = carCard.querySelector('.name');
        //nameElement.innerHTML = selectedCar.name;
        $('#editModal').modal('show');
    });

    eventEmitter.on('getCars', () => {
        console.info('get cars!');
        return cars;
    });

    const createForm = document.querySelector('#createModal form');
    createForm.addEventListener('submit', function (ev) {
        console.info('submit!');
        ev.preventDefault();
        const brand = ev.target.querySelector('#brand').value;
        const name = ev.target.querySelector('#name').value;
        eventEmitter.emit('createCar', {
            brand,
            name
        });
        $('#createModal').modal('hide');
    });

    const createMustang = document.getElementById('createMustang');
    createMustang.addEventListener('click', () => {
        eventEmitter.emit('createCar', {
            name: 'Mustang'
        });
    });

    //TYPICAL FETCH OF AN API
    // fetch(url).then((response) => {
    //     const cars = JSON.parse(response).cars;
    //     response.cars.forEach((car) => {
    //         eventEmitter.emit('createCar', car);
    //     });
    // });

    actions.fetchData().then((response) => {
        console.log(response);
        const cars = response.cars;
        cars.forEach((car) => {
            eventEmitter.emit('createCar', car);
        });
        eventEmitter.emit('isLoading', false);
    });

    return {
        a: 'hello',
        b: {
            a: 'hey!'
        },
        createCar: () => eventEmitter.emit('createCar'),
        deleteCar: () => eventEmitter.emit('deleteCar'),
        editCar: () => eventEmitter.emit('editCar'),
        getCars: () => eventEmitter.emit('getCars'),
        eventEmitter, //shortcut for properties with same value name, its the same as eventEmitter: eventEmitter
        cars,
        carsSize: cars.length
    }
})(Car);

Object.freeze(APP);

export default APP;

console.log(APP.a);

//APP.a = 'world';

console.log(APP.a);

console.log(APP.b.a);

APP.b.a = 'asdf';

console.log(APP.b.a);

//APP.createCar();

console.log(APP.cars);

window.APP = APP; //use this only for development purposes, never expose the main module of your app as public

runTests();