import img1 from "url:../img/dice-1.png";
import img2 from "url:../img/dice-2.png";
import img3 from "url:../img/dice-3.png";
import img4 from "url:../img/dice-4.png";
import img5 from "url:../img/dice-5.png";
import img6 from "url:../img/dice-6.png";

const diceImages = [img1, img2, img3, img4, img5, img6];

const diceImg = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");

btnRoll.addEventListener("click", function () {
	const dice = Math.trunc(Math.random() * 6 + 1);

	const srcDice = diceImages[dice - 1];
	diceImg.setAttribute("src", `${srcDice}`);
});
