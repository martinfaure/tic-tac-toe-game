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
const player1 = true;
const player2 = false;
const playerWin = "";
const tablGame = ["", "", "", "", "", "", "", "", ""];
const winningCombinations = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
];

function winPlayer() {
	if (player1 == winningCombinations) {
		player1 = true;
		popupO.style.display = "block";
	} else player2 == winningCombinations;
	player2 = true;
	popupX.style.display = "block";
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
	const img = document.createElement("img");
	img.src = "./assets/Oval Copy2.svg";

	button.addEventListener("click", () => {
		button.appendChild(img);
		const newButton = document.createElement("button");
		newButton.id = "btn" + document.querySelectorAll("button").length;

		newButton.addEventListener("click", () => {
			const newImg = document.createElement("img");
			newImg.src = "./assets/Oval Copy2.svg";
			newButton.appendChild(newImg);
		});

		document.getElementById("button-container").appendChild(newButton);
	});
}

addImageToButton("btn0");
addImageToButton("btn1");
addImageToButton("btn2");
addImageToButton("btn3");
addImageToButton("btn4");
addImageToButton("btn5");
addImageToButton("btn6");
addImageToButton("btn7");
addImageToButton("btn8");
