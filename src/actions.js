import eventEmitter from './eventEmitter';
const jsonData = require('./cars.json');
const row = document.querySelector('.album .row');

const actions = {
    //GET Actions
    fetchData: function () {
        eventEmitter.emit('isLoading', true);
        //Simulate a GET request to the server
        //fetch('api/cars')
        return new Promise(function (resolve, reject) {
            resolve(jsonData); //simulate success GET
            //reject(jsonData) //simulate fail GET, due to 400, 500 errors, etc.
        });
    },
    // POST Actions
    addCar: function (car) {
        const parentElement = this.createCarCard(car);
        row.append(parentElement);
    },
    createCarCard: function (car) {
        const { id, brand, name, engine, model, color, price, image } = car;
        const parentElement = document.createElement('div');
        const cardElement = document.createElement('div');
        const imageElement = document.createElement('div');
        const cardBodyElement = document.createElement('div');
        const titleElement = document.createElement('h3');
        const nameElement = document.createElement('p');
        const modelElement = document.createElement('p');
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
        imageElement.className = 'img';
        //imageElement.style.backgroundImage = "url("+image+")";
        imageElement.style.backgroundImage = `url(${image})`; //Template literals
        //set properties of cardBody element
        cardBodyElement.className = 'card-body';
        //set properties of cardBody elements
        nameElement.className = 'card-text name';
        nameElement.innerHTML = name;
        modelElement.className = 'card-text model';
        modelElement.innerHTML = model;
        colorElement.className = 'card-text color';
        colorElement.innerHTML = color;
        priceElement.className = 'card-text price';
        priceElement.innerHTML = '$ ' + price;
        engineElement.className = 'text-muted engine';
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
        cardBodyElement.append(modelElement);
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
    setEventListeners: function (editButton, removeButton) {
        editButton.addEventListener('click', (ev) => {
            const id = ev.target.getAttribute('data-id');
            eventEmitter.emit('editCar', id);
        });
        removeButton.addEventListener('click', (ev) => {
            const id = ev.target.getAttribute('data-id');
            eventEmitter.emit('deleteCar', id);
        });
    },
    //UPDATE Actions
    editCarFormValues: function({id, brand, name, color, engine, model, price, image}) {
        document.getElementById('car-id').value = id;
        document.getElementById('brand-edit').value = brand;
        document.getElementById('name-edit').value = name;
        document.getElementById('color-edit').value = color;
        document.getElementById('engine-edit').value = engine;
        document.getElementById('model-edit').value = model;
        document.getElementById('price-edit').value = price;
        document.getElementById('image-edit').value = image;
    },
    updateCarCard: function(selectedCar) {
        const {id, brand, name, color, engine, model, price, image} = selectedCar;
        const editForm = document.querySelector("#editModal form");
        const parentElement = document.getElementById(id);
        const brandElement = parentElement.querySelector('h3');
        const nameElement = parentElement.querySelector('.name');
        const modelElement = parentElement.querySelector('.model');
        const colorElement = parentElement.querySelector('.color');
        const priceElement = parentElement.querySelector('.price');
        const engineElement = parentElement.querySelector('.engine');
        const imageElement = parentElement.querySelector('.img');

        const editButton = parentElement.querySelector('.btn-primary');
        const removeButton = parentElement.querySelector('.btn-danger');

        brandElement.innerHTML = brand;
        nameElement.innerHTML = name;
        modelElement.innerHTML = model;
        colorElement.innerHTML = color;
        priceElement.innerHTML = '$ ' + price;
        engineElement.innerHTML = engine;
        imageElement.style.backgroundImage = `url(${image})`;
    }
};

export default actions;