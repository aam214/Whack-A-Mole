window.addEventListener('load', function() {
  setUpGame();
});

let currentBug;
let currentMonkey;
let score = 0;
let gameOver = false;
let game = document.getElementById("game");



function setUpGame() {
  for (let i= 0; i < 9; i++) {
  let hole = document.createElement("div");
  hole.id = i.toString();
  hole.addEventListener("click", selectHole);
  game.appendChild(hole);
  }
  setInterval(showBug, 1000);
  setInterval(showMonkey, 2000);
}

function showRandomImg() {
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
let shown = showRandomImg();
if (currentMonkey && currentMonkey.id == shown) {
return;
}

currentBug = document.getElementById(shown);
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
let shown = showRandomImg();
if (currentBug && currentBug.id == shown) {
  return;
}
currentMonkey = document.getElementById(shown);
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
  else if (this== currentMonkey) {
  document.getElementById("score").innerHTML =
  "Game Over! " + "Score: " + score.toString();
  gameOver = true;
}
}