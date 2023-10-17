"use strict"

function renderCoffee(coffee) {
	let html = `
    <div>
        <h3>${coffee.name}</h3>
        <p>${coffee.roast}</p>
    </div>
    `;
	return html;
}


function renderCoffees(coffees) {
	let html = '';
	for (let i = 0; i < coffees.length; i++) {
		html += renderCoffee(coffees[i]);
	}
	return html;
}

function updateCoffees(e) {
	e.preventDefault(); // don't submit the form, we just want to update the data
	const selectedRoast = roastSelection.value;
	const filteredCoffees = [];
	coffees.forEach(coffee => {
		if (coffee.roast === selectedRoast) {
			filteredCoffees.push(coffee);
		}
	});
	section.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffees(event) {
	event.preventDefault();
	let coffeeChoice = userSearchInput.value;
	let searchedCoffees = [];
	coffees.forEach(coffee => {
		if (coffee.name.toLowerCase().includes(coffeeChoice.toLowerCase())) {
			searchedCoffees.push(coffee);
		}
	});
	section.innerHTML = renderCoffees(searchedCoffees);
}

// function addCoffee(event) {
// 	event.preventDefault();
// 	coffees.push ({
// 		id: coffeeID,
// 		name: newCoffeeName,
// 		roast: 	roastType
// 	})
// }

function searchRoasts(event) {
	event.preventDefault(); // don't submit the form, we just want to update the data
	// const selectedRoast = roastSelection.value;
	const lightRoasts = [];
	const mediumRoasts = [];
	const darkRoasts = [];
	coffees.forEach(coffee => {
		if (coffee.roast === "light") {
			lightRoasts.push(coffee);
			section.innerHTML = renderCoffees(lightRoasts);
		} else if (coffee.roast === "medium") {
			mediumRoasts.push(coffee);
			section.innerHTML = renderCoffees(mediumRoasts);
		 } else if (coffee.roast === "dark") {
			darkRoasts.push(coffee);
			section.innerHTML = renderCoffees(darkRoasts);
		}
	});
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
	{id: 1, name: 'Light City', roast: 'light'},
	{id: 2, name: 'Half City', roast: 'light'},
	{id: 3, name: 'Cinnamon', roast: 'light'},
	{id: 4, name: 'City', roast: 'medium'},
	{id: 5, name: 'American', roast: 'medium'},
	{id: 6, name: 'Breakfast', roast: 'medium'},
	{id: 7, name: 'High', roast: 'dark'},
	{id: 8, name: 'Continental', roast: 'dark'},
	{id: 9, name: 'New Orleans', roast: 'dark'},
	{id: 10, name: 'European', roast: 'dark'},
	{id: 11, name: 'Espresso', roast: 'dark'},
	{id: 12, name: 'Viennese', roast: 'dark'},
	{id: 13, name: 'Italian', roast: 'dark'},
	{id: 14, name: 'French', roast: 'dark'},
];

const section = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const searchButton = document.querySelector('#submit')
// const roastSelection = document.querySelector('#roast-selection');
const userSearchInput = document.querySelector("#coffee-search");
const roastLightImg = document.querySelector("#light");
const roastMediumImg = document.querySelector("#medium");
const roastDarkImg = document.querySelector("#dark");
// const roastTypeInput = document.querySelector();
// let roastType = roastTypeInput.value;
// const newCoffeeNameInput = document.querySelector();
// let newCoffeeName = newCoffeeNameInput.value;
// let coffeeID = coffees.length[coffees.length-1];

section.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
userSearchInput.addEventListener('input', searchCoffees);
searchButton.addEventListener('click', searchCoffees);
roastLightImg.addEventListener('click', searchRoasts);
roastMediumImg.addEventListener('click', searchRoasts);
roastDarkImg.addEventListener('click', searchRoasts);

// roastSelection.addEventListener('click', searchRoasts);

