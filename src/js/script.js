import img1 from "url:../img/dice-1.png";
import img2 from "url:../img/dice-2.png";
import img3 from "url:../img/dice-3.png";
import img4 from "url:../img/dice-4.png";
import img5 from "url:../img/dice-5.png";
import img6 from "url:../img/dice-6.png";

const diceImages = [img1, img2, img3, img4, img5, img6];
let currentScore;
const score = [0, 0];

const diceImg = document.querySelector(".dice");
const current01 = document.querySelector("#current--0");
const current02 = document.querySelector("#current--1");
const score01 = document.querySelector("#score--0");
const score02 = document.querySelector("#score--1");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const init = function () {
	currentScore = 0;

	score01.textContent = 0;
	current01.textContent = 0;
};
init();

btnRoll.addEventListener("click", function () {
	const dice = Math.trunc(Math.random() * 6 + 1);

	let srcDice = diceImages[dice - 1];
	diceImg.setAttribute("src", `${srcDice}`);
	if (dice !== 1) {
		currentScore += dice;
		current01.textContent = currentScore;
	} else {
		currentScore = 0;
		current01.textContent = 0;
		console.log("STOP");
	}
});

btnHold.addEventListener("click", function () {
	score[0] += Number(current01.textContent);
	currentScore = 0;
	current01.textContent = 0;
	score01.textContent = score[0];
});
