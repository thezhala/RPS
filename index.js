// Game Data
var letterChoices = ["r","p","s"]
var userTotalScore = 0
var compTotalScore = 0
var player1Img = document.querySelector("#player1Img")
var player2Img = document.querySelector("#player2Img")
var userScore = document.querySelector("#userScore")
var compScore = document.querySelector("#compScore")
var loseOrWinPanel = document.querySelector("#loseOrWinPanel")

// Functions
var getCompChoices = (arr) => arr[Math.floor(Math.random()*letterChoices.length)]

function startGame(e) {
    var userChoice = e.key
    var compChoice = getCompChoices(letterChoices)
    // console.log("Comp", compChoice)
    // console.log("User", userChoice)
    player1Img.src = `./img/${userChoice}.png`
    player2Img.src = `./img/${compChoice}.png`

    if(letterChoices.indexOf(userChoice) === -1) {
        player1Img.src = `./img/none image.png`
        alert("Please, choose one of the r,p,s letters")
        return
    }

    compareChoices(userChoice, compChoice)
    
    compareResults(userTotalScore, compTotalScore)
}

function compareChoices(user, computer) {
    if(user === computer) {
        updateDOM(user, computer)
        // console.log("Tie game!")
        // console.log("--------------------")
    } else if(
        user === "r" && computer === "s" ||
        user === "s" && computer === "p" ||
        user === "p" && computer === "r" 
    ) {
        userTotalScore++
        updateDOM()
        // console.log("user wins")
        // console.log("--------------------")
    } else {
        compTotalScore++
        updateDOM()
        // console.log("computer wins")
        // console.log("--------------------")  
    }
}

function compareResults(score1, score2) {
    if(score1 === 5 && score1 > score2 ) {
        loseOrWinPanel.classList.remove("d-none")
        loseOrWinPanel.classList.add("d-block")
        loseOrWinPanel.classList.remove("alert-primary")
        loseOrWinPanel.classList.add("alert-success")
        loseOrWinPanel.innerHTML = `Congratulations!!! User Won`
        resetGame()
    } else if (score2 === 5 && score2 > score1 ) {
         loseOrWinPanel.classList.remove("d-none")
         loseOrWinPanel.classList.add("d-block")
         loseOrWinPanel.classList.remove("alert-primary")
         loseOrWinPanel.classList.add("alert-success")
         loseOrWinPanel.innerHTML = `Do not be sad, try one more again:)`
        resetGame()
    }
}

function updateDOM() {
     userScore.innerHTML = userTotalScore
     compScore.innerHTML = compTotalScore
}

function resetGame() {
    userTotalScore = 0
    compTotalScore = 0
    userScore.innerHTML = "0"
    compScore.innerHTML = "0"
}

window.onkeydown = startGame

