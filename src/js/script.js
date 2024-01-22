import img1 from "url:../img/dice-1.png";
import img2 from "url:../img/dice-2.png";
import img3 from "url:../img/dice-3.png";
import img4 from "url:../img/dice-4.png";
import img5 from "url:../img/dice-5.png";
import img6 from "url:../img/dice-6.png";

// https://pig-game-v2.netlify.app
const diceImages = [img1, img2, img3, img4, img5, img6];
let currentScore, activePlayer;
const score = [0, 0];

const diceImg = document.querySelector(".dice");
const player01 = document.querySelector(".player--0");
const player02 = document.querySelector(".player--1");
const current01 = document.querySelector("#current--0");
const current02 = document.querySelector("#current--1");
const score01 = document.querySelector("#score--0");
const score02 = document.querySelector("#score--1");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const init = function () {
	currentScore = 0;
	activePlayer = 0;

	score01.textContent = 0;
	score02.textContent = 0;
	current01.textContent = 0;
	current02.textContent = 0;

	diceImg.classList.add("hidden");
	player01.classList.add("player--active");
	player02.classList.remove("player--active");
};
init();

const changePlayer = function () {
	document.querySelector(`#current--${activePlayer}`).textContent = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	currentScore = 0;
	player01.classList.toggle("player--active");
	player02.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
	const dice = Math.trunc(Math.random() * 6 + 1);

	diceImg.classList.remove("hidden");

	let srcDice = diceImages[dice - 1];
	diceImg.setAttribute("src", `${srcDice}`);
	if (dice !== 1) {
		currentScore += dice;
		document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
	} else {
		changePlayer();
	}
});

btnHold.addEventListener("click", function () {
	score[activePlayer] += Number(document.querySelector(`#current--${activePlayer}`).textContent);

	document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];

	if (score[activePlayer] >= 10) {
		document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
		document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
		diceImg.classList.add("hidden");
		btnHold.disabled = true;
		btnRoll.disabled = true;
	}

	changePlayer();
	console.log(score);
});
