// Close the rules
const closeRules = () => {
	const gameRule = document.getElementById("gameRule");

	if (gameRule.style.display === "flex") {
		gameRule.style.display = "none";
	} else {
		gameRule.style.display = "flex";
	}
};

// Playing

const playagain = () => {
    document.getElementById('choiceMaker').style.display = "flex"
    document.getElementById('choiceResult').style.display = "none"
}

const play = (userChoice) => {
    document.getElementById('choiceMaker').style.display = 'none';
    document.getElementById('choiceResult').style.display = "flex";

    
	const choices = ["rock", "paper", "scissor"];
	const randomIndex = Math.floor(Math.random() * 3);
	const computerChoice = choices[randomIndex];

	let result = "";

	if (userChoice === computerChoice) {
		result = "It's a tie!";
        document.getElementById('yourTitle').innerHTML = "TIE UP"
        document.getElementById('resultTie').innerHTML = ""
	} else if (
        (userChoice === "rock" && computerChoice === "scissor") ||
		(userChoice === "paper" && computerChoice === "rock") ||
		(userChoice === "scissor" && computerChoice === "paper")
        ) {
            result = "You win!";
            document.getElementById('yourTitle').innerHTML = "You Win"
            document.getElementById('resultTie').innerHTML = "against pc"
        } else {
            result = "You lose!";
            document.getElementById('yourTitle').innerHTML = "You Lost"
            document.getElementById('resultTie').innerHTML = "against pc"
	}
    console.log("userChoice " + userChoice)
    console.log("PCChoice "+computerChoice)

	console.log(result)
};
