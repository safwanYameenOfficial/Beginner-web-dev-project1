let homeScore = 0;
let awayScore = 0;

function homePlusOne() {
    homeScore += 1;
    document.getElementById("home-score").textContent = homeScore;
}

function homePlusTwo() {
    homeScore += 2;
    document.getElementById("home-score").textContent = homeScore;
}

function homePlusThree() {
    homeScore += 3;
    document.getElementById("home-score").textContent = homeScore;
}

function awayPlusOne() {
    awayScore += 1;
    document.getElementById("away-score").textContent = awayScore;
}

function awayPlusTwo() {
    awayScore += 2;
    document.getElementById("away-score").textContent = awayScore;
}

function awayPlusThree() {
    awayScore += 3;
    document.getElementById("away-score").textContent = awayScore;
}

function resetBtn() {
    homeScore = 0
    awayScore = 0;
    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("away-score").textContent = homeScore;
}