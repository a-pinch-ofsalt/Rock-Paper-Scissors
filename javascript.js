//getting player's input to be valid
//-----------------------------------------------

function getPlayerInput() {
    return prompt("Type rock, paper or scissors.").toLowerCase()
}

function isRockPaperOrScissors(userInput) {
    return ['rock', 'paper', 'scissors'].includes(userInput);
}

function notifyPlayerOfInvalidInput() {
    console.log('That is not a valid input.\n');
}

function getPlayerFinalChoice() {
    userInput = getPlayerInput();

    if (isRockPaperOrScissors(userInput))
        return userInput
    else
        notifyPlayerOfInvalidInput();
        return getPlayerFinalChoice();
}

//getting the computer's choice (it's just random)
//-----------------------------------------------

function chooseRandomPositiveIntegerUpTo(maximum) {
    return Math.floor(Math.random() * maximum) + 1
}

function pickRockPaperOrScissorsRandomly() {
    return ['rock', 'paper', 'scissors'][chooseRandomPositiveIntegerUpTo(3) - 1]
}

function getComputerChoice() {
    return pickRockPaperOrScissorsRandomly()
}

//calculating the winning move (rock vs scissors, paper vs rock, etc.)
//-----------------------------------------------

function getPlayerAndComputerChoices() {
    return {'player': getPlayerFinalChoice(), 'computer': getComputerChoice()}
}

function wasRockPlayed(choices) {
    return [choices.player, choices.computer].includes('rock')
}

function wasPaperPlayed(choices) {
    return [choices.player, choices.computer].includes('paper')
}

function wasScissorsPlayed(choices) {
    return [choices.player, choices.computer].includes('scissors')
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

function determineWinningMove(choices) {
    if (wasRockPlayed(choices) && wasPaperPlayed(choices))
        return determinePaperVsRock()
    else if (wasRockPlayed(choices) && wasScissorsPlayed(choices))
        return determineRockVsScissors()
    else if (wasScissorsPlayed(choices) && wasPaperPlayed(choices))
        return determineScissorsVsPaper()
    return 'tie';
}

//determine the winner based on who picked rock, paper or scissors

function didPlayerWin(choices) {
    return choices.player === determineWinningMove(choices);
}

function didComputerWin(choices) {
    return choices.player === determineWinningMove(choices);
}

function checkWhoWon(choices) {
    if (didPlayerWin(choices))
        return 'player'
    else if (didComputerWin(choices))
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

function outputChoices(choices) {
    console.log(`You picked ${choices.player}. Computer picked ${choices.computer}.`)
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
    choices = getPlayerAndComputerChoices();
    outputChoices(choices);
    return checkWhoWon(choices)
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
        outputScores(scores);
    }
}

playRounds(5);



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