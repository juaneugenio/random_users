/** @format */
import reviews from "./data.json";
const usersArray = reviews.data;

// Catching Items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let randomUser = Math.floor(Math.random() * usersArray.length);
console.log("%c ▶︎▶︎ -16-「main」", "font-size:13px; background:#993441; color:#ffb8b1;", randomUser);

//Funcion carga inicial de la pagina con un usuario aleatorio
window.addEventListener("DOMContentLoaded", function () {
	let item = usersArray[randomUser];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
});

function getPerson(user) {
	const item = usersArray[user];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

//Eventos para los botones: anterior, siguiente y aleatorio.
prevBtn.addEventListener("click", function () {
	randomUser--;
	if (randomUser < 0) {
		randomUser = usersArray.length - 1;
	}
	getPerson(randomUser);
});
nextBtn.addEventListener("click", function () {
	randomUser++;
	if (randomUser > usersArray.length - 1) {
		randomUser = 0;
	}
	getPerson(randomUser);
});

randomBtn.addEventListener("click", function () {
	const newRandomUser = Math.floor(Math.random() * usersArray.length);
	getPerson(newRandomUser);
});
