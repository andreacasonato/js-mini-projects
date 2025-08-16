const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput
    } else {
        console.log('Error, please type: rock, paper or scissors.')
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'This game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "Computer won!";
        } else {
            return "You won!";
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return "Computer won!";
        } else {
            return "You won!";
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "Computer won!";
        } else {
            return "You won!";
        }
    }

    // Cheat code
    if (userChoice === 'bomb') {
        return 'You won!'
    }
};

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    // console.log(`You threw ${userChoice}`);
    console.log('The computer threw: ' + computerChoice);
    // console.log(`Computer threw ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice));
};

playGame()