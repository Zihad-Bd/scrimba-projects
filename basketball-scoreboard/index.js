let playerHomeElement = document.getElementById("home");
let playerGuestElement = document.getElementById("guest");

function IncrementButtonClicked(player, valueToAdd) {
    //console.log(player, valueToAdd);
    if (player == "home") {
        let prevScore = parseInt(playerHomeElement.textContent);
        let currentScore = prevScore + valueToAdd;
        playerHomeElement.textContent = currentScore;
    } else {
        let prevScore = parseInt(playerGuestElement.textContent);
        let currentScore = prevScore + valueToAdd;
        playerGuestElement.textContent = currentScore;
    }
    if (parseInt(playerHomeElement.textContent) >
     parseInt(playerGuestElement.textContent)) {
        document.getElementById("home-display").setAttribute("style",
        "background: gold");
        document.getElementById("guest-display").setAttribute("style",
        "background: #080001");
    } else if (parseInt(playerHomeElement.textContent) <
     parseInt(playerGuestElement.textContent)) {
        document.getElementById("guest-display").setAttribute("style",
        "background: gold");
        document.getElementById("home-display").setAttribute("style",
        "background: #080001");
    } else {
        document.getElementById("guest-display").setAttribute("style",
        "background: #080001");
        document.getElementById("home-display").setAttribute("style",
        "background: #080001");
    }
}

function newGameClicked() {
    playerHomeElement.textContent = 0;
    playerGuestElement.textContent = 0;
    document.getElementById("guest-display").setAttribute("style",
    "background: #080001");
    document.getElementById("home-display").setAttribute("style",
    "background: #080001");
}