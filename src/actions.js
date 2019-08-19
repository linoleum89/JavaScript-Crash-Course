import eventEmitter from './eventEmitter';
const jsonData = require('./cars.json');
const row = document.querySelector('.album .row');

const actions = {
    fetchData: function() {
        eventEmitter.emit('isLoading', true);
        return new Promise(function (resolve, reject) {
            setTimeout(function() {
                resolve(jsonData);
            }, 1000);
        });
    },
    addCar: function(car, carsSize = 0) {
        const parentElement = this.createCarCard(car, carsSize);
        row.append(parentElement);
    },
    createDOMElement: function(type) {
        return document.createElement(type);
    },
    createCarCard: function(car, carsSize) {
        const {id, brand, name, engine, model, color, price } = car;
        const parentElement = document.createElement('div');
        const cardElement = document.createElement('div');
        const imageElement = document.createElement('img');
        const cardBodyElement = document.createElement('div');
        const titleElement = document.createElement('h3');
        const nameElement = document.createElement('p');
        const colorElement = document.createElement('p');
        const priceElement = document.createElement('p');
        const engineElement = document.createElement('small');
        const btnGroup = document.createElement('div');
        const editButton = document.createElement('button');
        const removeButton = document.createElement('button');

        //set properties of parent element
        parentElement.className = 'col-md-4';
        parentElement.id = id;
        //set properties of card element
        cardElement.className = 'card mb-4 shadow-sm';
        //set properties of image element
        imageElement.src = 'https://auto.ndtvimg.com/car-images/big/ford/mustang/ford-mustang.webp?v=32';
        //set properties of cardBody element
        cardBodyElement.className = 'card-body';
        //set properties of cardBody elements
        nameElement.className = 'card-text name';
        nameElement.innerHTML = name;
        colorElement.className = 'card-text color';
        colorElement.innerHTML = color;
        priceElement.className = 'card-text price';
        priceElement.innerHTML = '$ ' + price;
        engineElement.className = 'text-muted';
        engineElement.innerHTML = engine;

        titleElement.innerHTML = brand;

        btnGroup.className = 'btn-group';
        editButton.className = 'btn btn-primary';
        editButton.innerHTML = 'Edit';
        editButton.setAttribute('data-id', id);
        removeButton.className = 'btn btn-danger';
        removeButton.innerHTML = 'Remove';
        removeButton.setAttribute('data-id', id);

        btnGroup.append(editButton);
        btnGroup.append(removeButton);
        cardBodyElement.append(titleElement);
        cardBodyElement.append(nameElement);
        cardBodyElement.append(colorElement);
        cardBodyElement.append(priceElement);
        cardBodyElement.append(btnGroup);
        cardBodyElement.append(engineElement);
        cardElement.append(imageElement);
        cardElement.append(cardBodyElement);
        parentElement.append(cardElement);

        this.setEventListeners(editButton, removeButton);

        return parentElement;
    },
    setEventListeners: function(editButton, removeButton) {
        editButton.addEventListener('click', (ev) => {
            const id = ev.target.getAttribute('data-id');
            eventEmitter.emit('editCar', id);
        });
        removeButton.addEventListener('click', (ev) => {
            const id = ev.target.getAttribute('data-id');
            eventEmitter.emit('deleteCar', id);
        });
    }
};

export default actions;