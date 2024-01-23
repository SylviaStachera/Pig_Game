import img1 from "url:../img/dice-1.png";
import img2 from "url:../img/dice-2.png";
import img3 from "url:../img/dice-3.png";
import img4 from "url:../img/dice-4.png";
import img5 from "url:../img/dice-5.png";
import img6 from "url:../img/dice-6.png";

const diceImages = [img1, img2, img3, img4, img5, img6];
let currentScore, activePlayer;
const maxScore = 50;
const scores = [0, 0];

const diceImg = document.querySelector(".dice");
const players = document.querySelectorAll(".player");
const currentScores = document.querySelectorAll(".current-score");
const totalScore = document.querySelectorAll(".score");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

const init = function () {
	currentScore = 0;
	activePlayer = 0;

	diceImg.classList.add("hidden");

	currentScores.forEach((score) => (score.textContent = 0));
	totalScore.forEach((score) => (score.textContent = 0));

	players.forEach((player, index) => {
		player.classList.toggle("player--active", index === 0);
		player.classList.remove("player--winner");
	});

	btnHold.disabled = false;
	btnRoll.disabled = false;
};

const changePlayer = function () {
	currentScores[activePlayer].textContent = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	currentScore = 0;
	players.forEach((player) => player.classList.toggle("player--active"));
};

btnRoll.addEventListener("click", function () {
	const dice = Math.trunc(Math.random() * 6 + 1);
	diceImg.classList.remove("hidden");

	diceImg.setAttribute("src", diceImages[dice - 1]);

	if (dice !== 1) {
		currentScore += dice;
		currentScores[activePlayer].textContent = currentScore;
	} else {
		changePlayer();
	}
});

btnHold.addEventListener("click", function () {
	scores[activePlayer] += currentScore;

	totalScore[activePlayer].textContent = scores[activePlayer];

	if (scores[activePlayer] >= maxScore) {
		players[activePlayer].classList.add("player--winner");
		players[activePlayer].classList.remove("player--active");

		diceImg.classList.add("hidden");

		btnHold.disabled = true;
		btnRoll.disabled = true;

		alert(`Player ${activePlayer + 1} wins!`);
	} else {
		changePlayer();
	}
});

btnNew.addEventListener("click", init);

init();
