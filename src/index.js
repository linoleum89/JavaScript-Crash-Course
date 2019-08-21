//import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import "bootstrap";

import Car from "./car";
import Mustang from "./mustang";
import eventEmitter from "./eventEmitter";

import actions from "./actions";
import runCarClassTests from "./car.spec";

const APP = (function (Car) {
	const cars = [];
	const createForm = document.querySelector("#createModal form");
	const createMustang = document.getElementById("createMustang");
	const editForm = document.querySelector("#editModal form");

	eventEmitter.on("isLoading", isLoading => {
		const overlayElement = document.getElementById("overlay");
		overlayElement.style.display = isLoading ? "block" : "none";
	});

	eventEmitter.on("createCar", newCar => {
		console.log("create car!", newCar);
		const { brand, name, model, color, engine, price, image } = newCar;
		let car;

		try {
			eventEmitter.emit('isLoading', true);
			//Simulate a POST request to the server
        	//fetch('api/car')
			setTimeout(() => {
				if (name === "Mustang") {
					car = new Mustang({
						model: "2017"
					});
				} else {
					car = new Car({
						brand,
						name,
						model,
						color,
						engine,
						price,
						image
					});
				}

				cars.push(car);
				actions.addCar(car);
				eventEmitter.emit('isLoading', false);
			}, 1000);
		} catch (err) {
			console.error("Cannot create car: ", err);
		} finally {
			//After completion we can do something here regardless of success or fail
		}
	});

	eventEmitter.on("deleteCar", () => {
		console.info("delete car!");
	});

	eventEmitter.on("editCar", id => {
		console.info("edit car!", id);
		const selectedCar = cars.find(car => car.id === id); // high order function
		console.log(selectedCar);
		//selectedCar.name = "FOCUS";

		//const carCard = document.getElementById(id);
		//const nameElement = carCard.querySelector('.name');
		//nameElement.innerHTML = selectedCar.name;
		$("#editModal").modal("show");

		actions.editCarFormValues(selectedCar);

		editForm.addEventListener("submit", function (ev) {
			ev.preventDefault();
			console.info("edit!");
			const brand = ev.target.querySelector("#brand-edit").value;
			const name = ev.target.querySelector("#name-edit").value;
			const color = ev.target.querySelector("#color-edit").value;
			const model = ev.target.querySelector("#model-edit").value;
			const engine = ev.target.querySelector("#engine-edit").value;
			const image = ev.target.querySelector("#image-edit").value;
			const price = ev.target.querySelector("#price-edit").value;
			eventEmitter.emit('updateCar', {
				id,
				brand,
				name,
				color,
				model,
				engine,
				image,
				price
			});
			$("#editModal").modal("hide");
		});
	});

	eventEmitter.on("updateCar", updatedCar => {
		const { id, brand, name, model, color, engine, price, image } = updatedCar;
		try {
			eventEmitter.emit('isLoading', true);
			//Simulate a PUT request to the server
        	//fetch('api/car/id')
			setTimeout(() => {
				const selectedCar = cars.find(car => car.id === id); // high order function
				//console.log(selectedCar);
				selectedCar.brand = brand;
				selectedCar.name = name;
				selectedCar.model = model;
				selectedCar.color = color;
				selectedCar.engine = engine;
				selectedCar.price = price;
				selectedCar.image = image;
				console.log(selectedCar);
				//actions.addCar(car);
				eventEmitter.emit('isLoading', false);
			}, 1000);
		} catch (err) {
			console.error("Cannot update car: ", err);
		} finally {
			//After completion we can do something here regardless of success or fail
		}
	});

	createForm.addEventListener("submit", function (ev) {
		ev.preventDefault();
		console.info("submit!");
		const brand = ev.target.querySelector("#brand").value;
		const name = ev.target.querySelector("#name").value;
		const color = ev.target.querySelector("#color").value;
		const model = ev.target.querySelector("#model").value;
		const engine = ev.target.querySelector("#engine").value;
		const image = ev.target.querySelector("#image").value;
		const price = ev.target.querySelector("#price").value;
		eventEmitter.emit("createCar", {
			brand,
			name,
			color,
			model,
			engine,
			image,
			price
		});
		$("#createModal").modal("hide");
	});

	createMustang.addEventListener("click", () => {
		eventEmitter.emit("createCar", {
			name: "Mustang"
		});
	});

	//TYPICAL FETCH OF AN API
	// fetch(url).then((response) => {
	//     const cars = JSON.parse(response).cars;
	//     response.cars.forEach((car) => {
	//         eventEmitter.emit('createCar', car);
	//     });
	// });

	actions.fetchData().then(response => {
		console.log(response);
		const cars = response.cars;
		cars.forEach(car => {
			eventEmitter.emit("createCar", car);
		});
	});

	return {
		a: "hello",
		b: {
			a: "hey!"
		},
		eventEmitter, //shortcut for properties with same value name, its the same as eventEmitter: eventEmitter
		cars,
		carsSize: cars.length
	};
})(Car);

Object.freeze(APP);

export default APP;

console.log(APP.a);

//APP.a = 'world';

console.log(APP.a);

console.log(APP.b.a);

APP.b.a = "some value";

console.log(APP.b.a);

//APP.createCar();

console.log(APP.cars);

window.APP = APP; //use this only for development purposes, never expose the main module of your app as public

runCarClassTests();
