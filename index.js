var randomNumber1;
randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", randomImageSource);
img2.setAttribute("src", randomDiceImage2);

var h1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "🚩 Player 1 Won!";
} else if (randomNumber2 > randomNumber1) {
    h1.innerHTML = "🚩 Player 2 Won!";
} else if (randomNumber1 === randomNumber2) {
    h1.innerHTML = "🚩 Draw!";
}



