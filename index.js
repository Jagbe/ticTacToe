const gameMenu = (() => {
    const fullBoard = [];
    const playerOneEntries = [];
    const playerTwoEntries = [];
    
    const welcomeScreen = document.querySelector('.welcomeDiv');
    const startButton = document.querySelector('.gameStart');

    const gameOverMessage = document.querySelector('#gameOverMessage');
    gameOverMessage.addEventListener('click', message => {
        gamePlay.startGame();
    })

    const dataScreen = document.querySelector('.nameForm');
    const dataButton = document.querySelector('#nameSubmit');

    const gameBoard = document.querySelector('.gameBoard');

    const gameSquares = document.querySelectorAll('.tableDiv');

   
    const squares = Array.from(gameSquares);
    squares.forEach((square) => {
        square.addEventListener('click', (e) => {
            console.log(e.target);
            console.log(squares.indexOf(e.target));

            if (gamePlay.gameIsRunning) {
                if (playerOneEntries.includes(squares.indexOf(e.target)) || playerTwoEntries.includes(squares.indexOf(e.target)) || squares.indexOf(e.target) == -1) {
                    console.log('SPOT IS TAKEN');
                } else {

                    console.log(playerOne.turn)
                    console.log(playerTwo.turn);
    
                    if (playerOne.turn == true) {
                        playerOne.turn = false;
                        playerTwo.turn = true;

                        console.log(playerTwoEntries.includes(squares.indexOf(e.target)));
    
                        gameMenu.fullBoard[squares.indexOf(e.target)] = 'X';
    
                        
                        playerOneEntries.push(squares.indexOf(e.target));
                        console.table(playerOneEntries);

                        gamePlay.addTurn();
                        renderer.render();
                        gamePlay.winCheck();
    
                    } else if (playerTwo.turn == true) { 
                        playerTwo.turn = false;
                        playerOne.turn = true;

                        console.log(playerTwoEntries.includes(squares.indexOf(e.target)));
    
                        gameMenu.fullBoard[squares.indexOf(e.target)] = 'O';
    
                        playerTwoEntries.push(squares.indexOf(e.target));
                        console.table(playerTwoEntries);

                        gamePlay.addTurn();
                        renderer.render();
                        gamePlay.winCheck();
                    } 
                }
            } else { console.log('Game is not running!'); }
            
            
        })
    })

    startButton.addEventListener('click', () => {
        welcomeScreen.style['visibility'] = 'hidden';
        dataScreen.style['visibility'] = 'visible';

    });

    dataButton.addEventListener('click', () => {
        dataScreen.style['visibility'] = 'hidden';
        gameBoard.style['visibility'] = 'visible';
        gamePlay.startGame();
    });

    return {
        playerOneEntries,
        playerTwoEntries,
        squares,
        gameSquares,
        gameOverMessage,
        fullBoard

    }
}) ();

const Player = (name) => {
    let turn = false;
    let winner = false;

    const getName = () => name;

    return { getName, turn, name, winner }
}

const gamePlay = (() => {
    const startGame = () => {
        gameMenu.fullBoard.splice(0, gameMenu.fullBoard.length);
        gameMenu.playerOneEntries.splice(0, gameMenu.playerOneEntries.length);
        gameMenu.playerTwoEntries.splice(0, gameMenu.playerTwoEntries.length);

        playerOne.name = getData.getNames()[0];
        playerTwo.name = getData.getNames()[1];

        gameMenu.gameOverMessage.style['visibility'] = 'hidden';
        turnCounter = 0;

        playerOne.turn = true;
        gameIsRunning = true;
        renderer.render();
        
    }

   

    const winCheck = () => {
        if (gameMenu.fullBoard[0] == 'X' && gameMenu.fullBoard[1] == 'X' && gameMenu.fullBoard[2] == 'X') {
            playerOne.winner = true;
            gameOver(playerOne);

        } else if (gameMenu.fullBoard[3] == 'X' && gameMenu.fullBoard[4] == 'X' && gameMenu.fullBoard[5] == 'X') {
            playerOne.winner = true;
            gameOver(playerOne);
    
        } else if (gameMenu.fullBoard[6] == 'X' && gameMenu.fullBoard[7] == 'X' && gameMenu.fullBoard[8] == 'X') {
            playerOne.winner = true;
            gameOver(playerOne);
    
        } else if (gameMenu.fullBoard[0] == 'X' && gameMenu.fullBoard[3] == 'X' && gameMenu.fullBoard[6] == 'X') {
            playerOne.winner = true;
            gameOver(playerOne);
    
        } else if (gameMenu.fullBoard[1] == 'X' && gameMenu.fullBoard[4] == 'X' && gameMenu.fullBoard[7] == 'X') {
            playerOne.winner = true;
            gameOver(playerOne);
    
        } else if (gameMenu.fullBoard[2] == 'X' && gameMenu.fullBoard[5] == 'X' && gameMenu.fullBoard[8] == '8') {
            playerOne.winner = true;
            gameOver(playerOne);
    
        } else if (gameMenu.fullBoard[0] == 'X' && gameMenu.fullBoard[4] == 'X' && gameMenu.fullBoard[8] == 'X') {
            playerOne.winner = true;
            gameOver(playerOne);
    
        } else if (gameMenu.fullBoard[2] == 'X' && gameMenu.fullBoard[4] == 'X' && gameMenu.fullBoard[6] == 'X') {
            playerOne.winner = true;
            gameOver(playerOne);
    
        } else if (gameMenu.fullBoard[0] == 'O' && gameMenu.fullBoard[1] == 'O' && gameMenu.fullBoard[2] == 'O') {
            playerTwo.winner = true;
            gameOver(playerTwo);

        } else if (gameMenu.fullBoard[3] == 'O' && gameMenu.fullBoard[4] == 'O' && gameMenu.fullBoard[5] == 'O') {
            playerTwo.winner = true;
            gameOver(playerTwo);

        } else if (gameMenu.fullBoard[6] == 'O' && gameMenu.fullBoard[7] == 'O' && gameMenu.fullBoard[8] == 'O') {
            playerTwo.winner = true;
            gameOver(playerTwo);
            
        } else if (gameMenu.fullBoard[0] == 'O' && gameMenu.fullBoard[3] == 'O' && gameMenu.fullBoard[6] == 'O') {
            playerTwo.winner = true;
            gameOver(playerTwo);

        } else if (gameMenu.fullBoard[1] == 'O' && gameMenu.fullBoard[4] == 'O' && gameMenu.fullBoard[7] == 'O') {
            playerTwo.winner = true;
            gameOver(playerTwo);

        } else if (gameMenu.fullBoard[2] == 'O' && gameMenu.fullBoard[5] == 'O' && gameMenu.fullBoard[8] == 'O') {
            playerTwo.winner = true;
            gameOver(playerTwo);

        } else if (gameMenu.fullBoard[0] == 'O' && gameMenu.fullBoard[4] == 'O' && gameMenu.fullBoard[8] == 'O') {
            playerTwo.winner = true;
            gameOver(playerTwo);

        } else if (gameMenu.fullBoard[2] == 'O' && gameMenu.fullBoard[4] == 'O' && gameMenu.fullBoard[6] == 'O') {
            playerTwo.winner = true;
            gameOver(playerTwo);

        } else if (turnCounter >= 9) {
            gameTie();
        }
    }

    const gameOver = (player) => {
        gameIsRunning = false;
        gameMenu.gameOverMessage.textContent = "Congratulations " + player.name + ". You win! Click here to play again.";
        gameMenu.gameOverMessage.style['visibility'] = 'visible';
        

    }
    let turnCounter = 0;

    let addTurn = () => {
        turnCounter++;
    }

    const gameTie = () => {
        gameIsRunning = false;
        gameMenu.gameOverMessage.textContent = "A close match! Both " + playerOne.name + " and " + playerTwo.name +  " tied. Click here to play again.";
        gameMenu.gameOverMessage.style['visibility'] = 'visible';
        

    }

    let gameIsRunning = true;
    
    return { startGame, winCheck, gameOver, gameTie, gameIsRunning, addTurn, turnCounter }
}) ();

const renderer = (() => {

    const render = () => {
        let allIcons = Array.from(document.querySelectorAll('i'));
        allIcons.forEach(icon => {
            icon.remove();
        })
        

        
        console.table(gameMenu.fullBoard);


        gameMenu.playerOneEntries.forEach(entry => {
            console.log(entry);
            console.log(gameMenu.squares[entry]);
            gameMenu.squares[entry].appendChild(createX.getX());
        })

        gameMenu.playerTwoEntries.forEach(entry => {
            console.log(entry);
            console.log(gameMenu.squares[entry]);
            gameMenu.squares[entry].appendChild(createO.getO());
        })
    }
    
    return { render };
}) ();

const createX = (() => {
    const getX = () => {
        let X = document.createElement('i'); X.classList.add("fas", "fa-times");
        return X;
    }
    
    return { getX };
}) ();

const createO = (() => {
    const getO = () => {
        let O = document.createElement('i'); O.classList.add("far", "fa-circle");
        return O;
    }
    
    return { getO };
}) ();

const getData = (() => {

    const getNames = () => {
        let input = document.querySelector('.nameForm');
        let inputArray = [];

    for (i = 0; i < input.length ;i++) {
        inputArray.push(input.elements[i].value);
      }

      console.log(inputArray);
      return inputArray;
    }


      return { getNames }

}) ();




let playerOne = Player('James');
let playerTwo = Player('John');