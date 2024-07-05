//getting input
//-----------------------------------------------

function getComputerChoice() {

}

function convertComputerChoiceIntoRockPaperOrScissors() {

}

function getPlayerChoice() {

}


//calculating the winning move (rock vs scissors, paper vs rock, etc.)
//-----------------------------------------------

function calculateWinningMove(choice1, choice2) {
    if (wasRockPlayed(choice1, choice2) && wasPaperPlayed(choice1, choice2))
        return calculatePaperVsRock()
    else if (wasRockPlayed(choice1, choice2) && wasScissorsPlayed(choice1, choice2)) 
        return calculateRockVsScissors()
    else if (wasScissorsPlayed(choice1, choice2) && wasPaperPlayed(choice1, choice2))
        return calculateScissorsVsPaper()
    else return 'tie'
}

function wasRockPlayed(choice1, choice2) {
    return [choice1, choice2].includes('rock')
}

function wasPaperPlayed(choice1, choice2) {
    return [choice1, choice2].includes('paper')
}

function wasScissorsPlayed(choice1, choice2) {
    return [choice1, choice2].includes('scissors')
}

function determineRockVsScissors() {
    return 'rock'
}

function determinePaperVsRock() {
    return 'paper'
}

function determineScissorsVsPaper() {
    return 'scissors'
}

//determine the winner based on who picked rock, paper or scissors

function didPlayerWin(playerMove, winningMove) {
    return playerMove === winningMove;
}

function didComputerWin(computerMove, winningMove) {
    return computerMove === winningMove;
}

function checkWhoWon(playerMove, computerMove) {
    if (playerMove === calculateWinningMove(playerMove, computerMove))
        return 'player'
    else if (computerMove === calculateWinningMove(playerMove, computerMove))
        return 'computer'
    else return 'tie'
}

//announce current game's stats

function outputWinner(winner) {
    console.log('The ' + winner + ' wins this round!');
}

function outputScores(scores) {
    console.log(`You: ${scores.player} wins\n Computer: ${scores.computer} wins\n`);
}

//play rounds and keep track of score

function getNewScoresAfterRound(winner, scores) {
    if (winner === 'player') 
        scores.player++;
    else if (winner === 'computer') 
        scores.computer++;
    return scores
}

function playRoundThenGetWinner() {
    return checkWhoWon(getPlayerChoice(), getComputerChoice())
}

function playRounds(maxNumberOfRounds) 
{
    for (
        let round = 1,
        scores = {'player': 0, 'computer': 0}
        ; round <= maxNumberOfRounds
        ; round++
    )
    {
        winner = playRoundThenGetWinner();
        scores = getNewScoresAfterRound(scores, winner);
        outputWinner(winner);
        announceScores(scores);
    }
}




/*
function playMultipleRounds(numberOfRounds) {
    playerScore = 0;
    computerScore = 0;

    for (round = 1; round <= numberOfRounds; round++)
        {
            outcome = playRoundAndGetOutcome();
            if (outcome === "PLAYER WINS") playerScore++;
            else if (outcome === "COMPUTER WINS") computerScore++;
            console.log(outcome);
            console.log(`Your score: ${playerScore}`)
            console.log(`Computer's score: ${computerScore}`);
        }
}

function outputCurrentRoundResults(playerScore, computerScore, outcome);
{

}

function getWinnersNewScore(winner, playerScore, computerScore)
{
    if (winner === "PLAYER WINS") return playerScore + 1;
    else if (winner == "")
}

function playRoundAndGetOutcome() 
{
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    winningChoice = evaluateWinningChoiceInRockPaperScissors(playerChoice, computerChoice);
    outcome = evaluateWhoIsTheWinner(winningChoice, playerChoice, computerChoice);
    return outcome;
}

function evaluateWhoIsTheWinner(winningChoice, playerChoice, computerChoice) {
    if (playerChoice === winningChoice)
    {
        return "PLAYER WINS"
    }
    else if (computerChoice === winningChoice)
    {
        return "COMPUTER WINS"
    }
    else return "TIE";
}

function evaluateWinningChoiceInRockPaperScissors(choice1, choice2)
{
    containsROCK = [choice1, choice2].includes("ROCK");
    containsSCISSORS = [choice1, choice2].includes("SCISSORS");
    containsPAPER = [choice1, choice2].includes("PAPER");

    if (containsROCK) 
    {
        if (containsSCISSORS) return "ROCK";
        else if (containsPAPER) return "PAPER";
    }
    else if (containsSCISSORS && containsPAPER) return "SCISSORS";
    else return "TIE";
}

function getHumanChoice(no parameters)
{
    create a prompt containing the text "Choose rock, paper or scissors."
    convert user text to all uppercase so input isn't case sensitive
}

function getComputerChoice()
{
    randomIntegerBetween1and3 = Math.ceiling(Math.random() * 3);
    return randomIntegerBetween1and3
}

function convertComputerChoiceToRockPaperOrScissors(computerChoice)
{
    switch:
        case (1 === computerChoice):
            return "ROCK";
        case (2 === computerChoice):
            return "PAPER";
        case (3 === computerChoice):
            return "SCISSORS";
        default:
            throw new Error("The computer chose neither rock, paper nor scissors!")
}
*/