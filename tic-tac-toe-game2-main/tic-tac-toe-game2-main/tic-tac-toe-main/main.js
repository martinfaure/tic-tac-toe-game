document.addEventListener("DOMContentLoaded", function () {
	const resetButton = document.querySelector(".btn-reset");
	const popup = document.querySelector(".popup");

	resetButton.addEventListener("click", function () {
		popup.style.display = "block";
	});

	popup.querySelector("#closePopup").addEventListener("click", function () {
		popup.style.display = "none";
	});
});

const popupO = document.querySelector(".popupO");
const popupX = document.querySelector(".popupX");
let player1 = true;
let player2 = false;
let playerWin = "";
let tablGame = ["", "", "", "", "", "", "", "", ""];
const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function checkWin() {
	for (let combination of winningCombinations) {
		let [a, b, c] = combination;
		if (
			tablGame[a] &&
			tablGame[a] === tablGame[b] &&
			tablGame[a] === tablGame[c]
		) {
			playerWin = tablGame[a];
			if (playerWin === "X") {
				popupX.style.display = "block";
			} else if (playerWin === "O") {
				popupO.style.display = "block";
			}
			return true;
		}
	}
	return false;
}

const btnDisable = document.querySelector(".btn-yellow");
const overlay = document.querySelector(".overlay-start-game");
const btnCroix = document.querySelector(".btn-croix-select");
const btnRond = document.querySelector(".btn-rond-select");
const imgcroix = document.querySelector(".imgjsp");
const imgRond = document.querySelector(".imgjsp2");

btnDisable.addEventListener("click", () => {
	overlay.remove();
});

btnCroix.addEventListener("click", () => {
	btnCroix.style.background = "#a8bfc9";
	btnRond.style.background = "transparent";
	imgcroix.src = "./assets/croix - Copie.svg";
	imgRond.src = "./assets/Oval Copy - Copie.svg";
});

btnRond.addEventListener("click", () => {
	btnRond.style.background = "#a8bfc9";
	btnCroix.style.background = "transparent";
	imgcroix.src = "./assets/croix - Copie.svg";
	imgRond.src = "./assets/Oval Copy - Copie.svg";
});

function addImageToButton(buttonId) {
	const button = document.getElementById(buttonId);
	button.addEventListener("click", () => {
		if (!tablGame[buttonId]) {
			const img = document.createElement("img");
			img.src = player1
				? "./assets/Oval Copy2.svg"
				: "./assets/croix - Copie.svg";
			button.appendChild(img);
			tablGame[buttonId] = player1 ? "O" : "X";
			if (!checkWin()) {
				player1 = !player1;
				player2 = !player2;
			}
		}
	});
}

for (let i = 0; i < 9; i++) {
	addImageToButton(`btn${i}`);
}
