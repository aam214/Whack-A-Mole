window.onload = function() {
  playGame();
}


function playGame() {
  for (let i= 0; i < 9; i++) {
    let hole = document.createElement("div");
    hole.id = i.toString();
    document.getElementById("game").appendChild(hole);
  }
  setInterval(showBug, 2000);
}
function getRandomBug() {
  let random = Math.floor(Math.random() * 9);
  return random.toString();
}


function showBug() {
let bug = document.createElement("img");
bug.src = "./bug.png";
let random = getRandomBug();

currentMole = document.getElementById(random);
currentMole.appendChild(bug);

}