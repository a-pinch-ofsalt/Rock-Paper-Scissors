//getting player's input to be valid
//-----------------------------------------------

function getPlayerInput() {
    return prompt("Type rock, paper or scissors.").toLowerCase();
}

function isInvalidInput(userInput) {
    return !(['rock', 'paper', 'scissors'].includes(userInput));
}

function notifyPlayerOfInvalidInput() {
    alert('That is not a valid input.\n');
}

function getValidPlayerChoice() {
    let userInput = getPlayerInput();
    if (isInvalidInput(userInput)) {
        notifyPlayerOfInvalidInput();
        return getValidPlayerChoice();
    } else {
        return userInput;
    }
}

//getting the computer's choice (it's just random)
//-----------------------------------------------

function chooseRandomPositiveIntegerUpTo(maximum) {
    return Math.floor(Math.random() * maximum) + 1;
}

function pickRockPaperOrScissorsRandomly() {
    return ['rock', 'paper', 'scissors'][chooseRandomPositiveIntegerUpTo(3) - 1];
}

function getComputerChoice() {
    return pickRockPaperOrScissorsRandomly();
}

//calculating the winning move (rock vs scissors, paper vs rock, etc.)
//-----------------------------------------------

function getPlayerAndComputerChoices() {
    return { 'player': getValidPlayerChoice(), 'computer': getComputerChoice() };
}

function wasRockPlayed(choices) {
    return [choices.player, choices.computer].includes('rock');
}

function wasPaperPlayed(choices) {
    return [choices.player, choices.computer].includes('paper');
}

function wasScissorsPlayed(choices) {
    return [choices.player, choices.computer].includes('scissors');
}

function wereRockAndPaperPlayed(choices) {
    return wasRockPlayed(choices) && wasPaperPlayed(choices);
}

function werePaperAndScissorsPlayed(choices) {
    return wasPaperPlayed(choices) && wasScissorsPlayed(choices);
}

function wereRockAndScissorsPlayed(choices) {
    return wasRockPlayed(choices) && wasScissorsPlayed(choices);
}

function determineWinningMove(choices) {
    if (wereRockAndPaperPlayed(choices)) {
        return 'paper';
    } else if (werePaperAndScissorsPlayed(choices)) {
        return 'scissors';
    } else if (wereRockAndScissorsPlayed(choices)) {
        return 'rock';
    } else {
        return 'tie';
    }
}

//determine the winner based on who picked rock, paper or scissors

function didPlayerWin(choices) {
    return choices.player === determineWinningMove(choices);
}

function didComputerWin(choices) {
    return choices.computer === determineWinningMove(choices);
}

function wasntATie(choices) {
    return determineWinningMove(choices) != 'tie';
}

function getRoundOutcome(choices) {
    if (didPlayerWin(choices)) {
        return 'player';
    } else if (didComputerWin(choices)) {
        return 'computer';
    } else {
        return 'tie';
    }
}

function getWinnerIfNotATie(choices) {
    if (wasntATie(choices)) {
        return getRoundOutcome(choices);
    } else {
        throw new Error("Tried to get the winner even though it was a tie!");
    }
}

//announce current game's stats

function alertPlayerAndComputerChoices(choices) {
    alert(`You picked: ${choices.player}. The computer picked ${choices.computer}`);
}

function alertRoundOutcome(outcome) {
    alert(`The results of this round are: ${outcome}!`);
}

function alertScores(scores) {
    alert(`The scores are:\nPlayer: ${scores.player}\nComputer: ${scores.computer}`);
}

//play rounds and keep track of score

function givePointToWinner(scores, choices) {
    if (wasntATie(choices)) {
        scores[getWinnerIfNotATie(choices)]++;
    }

    return scores;
}

function playRoundAndGetScores(scores) {
    let choices = getPlayerAndComputerChoices();

    alertPlayerAndComputerChoices(choices);
    alertRoundOutcome(getRoundOutcome(choices));

    givePointToWinner(scores, choices);
    alertScores(scores);

    return scores;
}

function playRounds(maxRounds) {
    let scores = { 'player': 0, 'computer': 0 }
    for (let round = 1; round <= maxRounds; round++) {
        scores = playRoundAndGetScores(scores);
    }
}

playRounds(5);