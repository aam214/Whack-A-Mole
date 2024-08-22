
window.addEventListener('load', function() {
  setUpGame();
});
let currentBug;
let currentMonkey;
let score = 0;
let gameOver = false;

function setUpGame() {
  for (let i= 0; i < 9; i++) {
    let hole = document.createElement("div");
    hole.id = i.toString();
    hole.addEventListener("click", selectHole);
    document.getElementById("game").appendChild(hole);
  }
  setInterval(showBug, 1500);
  setInterval(showMonkey, 3000)
}

function getRandomImg() {
  let random = Math.floor(Math.random() * 9);
  return random.toString();
}

function showBug() {
if (gameOver) {
  return;
}
if (currentBug) {
currentBug.innerHTML = '';
}
let bug = document.createElement("img");
bug.src = "./bug.png";
let random = getRandomImg();
if(currentMonkey && currentMonkey.id == random) {
  return;
}

currentBug = document.getElementById(random);
currentBug.appendChild(bug);
}

function showMonkey() {
  if (gameOver) {
    return;
  }
if (currentMonkey) {
  currentMonkey.innerHTML = "";
}
let monkey = document.createElement("img");
monkey.src ="./monkey.png";

let random = getRandomImg();
if(currentBug && currentBug.id == random) {
  return;
}
currentMonkey = document.getElementById(random);
currentMonkey.appendChild(monkey);
}

function selectHole() {
  if (gameOver) {
    return;
  }
  if (this == currentBug) {
    score +=10;
    document.getElementById("score").innerHTML=
    score.toString();
  }
  else (this== currentMonkey).innerHTML= "Game Over!" + score.toString();
  gameOver = true;
}