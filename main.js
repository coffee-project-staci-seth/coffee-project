(() =>  {
"use strict";


function renderCoffee(coffee) {
	let html = `
    <div>
        <h3>${coffee.name}</h3>
        <p>${coffee.roast}</p>
    </div>
    `;
	return html;
}


// Dynamically generate coffee list
function renderCoffees(coffees) {
	let html = '';
	for (let i = 0; i < coffees.length; i++) {
		html += renderCoffee(coffees[i]);
	}
	return html;
}



// Filters coffee by roast type
function updateCoffees(event) {
	event.preventDefault(); // don't submit the form, we just want to update the data
	let selectedRoast = event.target.id;
	const filteredCoffees = [];
	coffees.forEach(coffee => {
		if (coffee.roast === selectedRoast) {
			filteredCoffees.push(coffee);
		}
	});
	section.innerHTML = renderCoffees(filteredCoffees);
}

// Filters coffee by user input
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

// const coffeesMain = [
// 	{id: 1, name: 'Light City', roast: 'light'},
// 	{id: 2, name: 'Half City', roast: 'light'},
// 	{id: 3, name: 'Cinnamon', roast: 'light'},
// 	{id: 4, name: 'City', roast: 'medium'},
// 	{id: 5, name: 'American', roast: 'medium'},
// 	{id: 6, name: 'Breakfast', roast: 'medium'},
// 	{id: 7, name: 'High', roast: 'dark'},
// 	{id: 8, name: 'Continental', roast: 'dark'},
// 	{id: 9, name: 'New Orleans', roast: 'dark'},
// 	{id: 10, name: 'European', roast: 'dark'},
// 	{id: 11, name: 'Espresso', roast: 'dark'},
// 	{id: 12, name: 'Viennese', roast: 'dark'},
// 	{id: 13, name: 'Italian', roast: 'dark'},
// 	{id: 14, name: 'French', roast: 'dark'},
// ];

const section = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const searchButton = document.querySelector('#submit')
const roastSelection = document.querySelector('#roast-selection');
const userSearchInput = document.querySelector("#coffee-search");

section.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
userSearchInput.addEventListener('input', searchCoffees);
searchButton.addEventListener('click', searchCoffees);
roastSelection.addEventListener('click', updateCoffees);

})();