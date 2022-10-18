let game = (() => {
    // set an array to contain players
    const players = [];
    let gameBoard = (() => {
        let board = [];
        let boardFiller = (() => {
            for (let i = 0 ; i < 9 ; i++){
                board.push("");
            }
        })();
        const fill = board;
        return {fill}
    })();
    const player = (playerName , playerMark) => {
        const name = playerName;
        let turn = false;
        let winner = false
        let mark = ""
        
        // add each player into players array
        if (playerMark === "X" || playerMark === "O"){
            mark = playerMark;
            if(playerMark === "X"){
                turn = true;
            }
        } else {
            mark = "X";
            turn = true;
        } 
        return {name , mark , turn , winner};
    };
    
    // if not we move to second method
    // run a loop 3 times 
    // declare y variable to be equal to i
    // add 3 to y
    // check if board[0] is equal to board[y]
    // if its not true 
    // change isWinner to false
    // if isWinner is true
    // we have a winner
    // ...
    // if not to the third method
    // loop for 3 times
    // make a y varibale equal to i
    // add 4 to y
    // check if board[y] is equal to board[0]
    // if its not true 
    // change isWinner to false
    // if iswinner is true
    // we have a winner
    // ...
    // if board[0] is a  empty string
    // check if board[1] is other tha empty string
    // if it is loop for 3 times
    // make a y variable to store i value in it
    // add 3 to y 
    // check if board[y] is equal to board[1]
    // if its not true
    // change isWinner to false
    // if isWinner is true
    // we have a winner
    // if board[1] is empty string check for board[2]
    // if its anything other than empty string
    // make to methods one for y plus 2 and one for y plus 3
    // and loop throgh each for 3 times
    // if board[2] is empty string check for board[3]
    // if its anything other than empty string
    // make a method for y plus 1 and loop throgh for 3 times
    // at the end if none declare any winner
    // check a y plus 1 method for board[6]
    
    // its better to make function for when a winner is found
    // so we can call it and avoid repeatation

    // also at the end we should call winner function at
    // ...at start function on eventlistener


    // for the foundWinner function it should ...
    // check for a wiiner property on each player 
    // and see which one is true then announcethat player as winner
    // also change the background color of winning line


    // 123 
    // 456
    // 789
    // 147
    // 258
    // 369
    // 159
    // 357
    const marks = document.querySelectorAll(".mark");
    let playerMark = "";
    for(let mark of marks) {
        mark.addEventListener("click", () => {
            for(let marker of marks){
                if(marker.id === "clicked-mark"){
                    marker.id = ""
                }
            }
            mark.id = "clicked-mark";
            playerMark = mark.textContent;
        })
    }
    // create a function to display every item on board
    const start = () => {
        const playerName = document.querySelector(".name-input").value
        const _usedBoard = document.querySelector(".playBoard")
        if(_usedBoard){
            _usedBoard.remove()
            let board = gameBoard.fill;
            for(let i = 0; i < board.length; i++){
                board.splice(i , 1, "")
            }
            console.log("cleared-board")
            const result = document.querySelector(".result")
            result.style.display = "none"
            
        }
        console.log("starts")
        let playerOne = player(playerName , playerMark);
        game.players.push(playerOne)
        if(playerOne.mark === "X"){
            let playerTwo = player("michael" , "O")
            game.players.push(playerTwo); 
            console.log(playerOne)
            console.log(playerTwo)   
        } else {
            let playerTwo = player("michael" , "X")
            game.players.push(playerTwo)
            console.log(playerOne)
            console.log(playerTwo)
        }
        const footer = document.querySelector("footer");
        footer.style.backgroundColor = "#f4decb";
        const board = gameBoard.fill;
        const mainNode = document.querySelector("main");
        const body = document.querySelector("body");
        let playBoard = document.createElement("div");
        playBoard.remove()
        let homePage = document.querySelector(".home-page");
        playBoard.classList.add("playBoard");
        mainNode.appendChild(playBoard);
        for (let i = 0 ; i < board.length ; i++){
            let pieceContainer = document.createElement("div");
            pieceContainer.classList.add("pieceContainer");
            playBoard.appendChild(pieceContainer);
            pieceContainer.id = i;
        }
        body.style.backgroundColor = "#f8eee7"; 
        homePage.style.display = "none";
        playBoard.style.display = "flex";

        let pieces = document.querySelectorAll(".pieceContainer");
        // set eventListener on each board item
        let _markedBoard = 0
        for (let piece of pieces){
            piece.addEventListener("click" , () => {
                             
                // check if the board piece is not marked before
                if (piece.textContent === ""){
                    for (let i = 0 ; i < players.length ; i++){
                        // check which player turn is true
                        // if its true

                        if(players[i].turn === true){
                            // add the player mark to board array
                            board.splice(piece.id , 1 , players[i].mark)
                            console.log(board)
                            // print the mark of player on board piece
                            piece.textContent = players[i].mark
                            // add 1 to _markedBoard
                            _markedBoard += 1
                            // change the turn to false and otherplayer's turn to true
                            players[i].turn = false;
                        } else { // else change the turn to other player
                            players[i].turn = true;
                        }
                    }
                }
                // check if markedBoard is more than equal to 5
                if(_markedBoard >= 5){
                    // if it's true
                    // check for winner
                    // 
                    const result = (() => {
                        
                        
                        let i = 0;
                        // declare a array to store index for winner line
                        let winnersBox = [];
                        // declare haveWinner as false 
                        let haveWinner = false;
                        console.log("result started")
                        // create a function to do the stuff necessary when someone wins
                        const gameOver = () => {
                            for(let x = 0; x < winnersBox.length; x++){
                                let index = +winnersBox[x];
                                pieces[index].id = "winner";
                            }
                            // change the winner status to true on the player object
                            for(let p = 0; p < players.length; p++){
                                if(board[i] === players[p].mark){
                                    players[p].winner = true;
                                    const resultNode = document.querySelector(".result");
                                    resultNode.style.display = "flex";
                                    const resultNodeText = document.querySelector(".result-text");
                                    resultNodeText.textContent = `${players[p].name} Won the Match`;
                                    console.log(`${players[p].name} Won the match`)
                                    let restart = document.querySelector("#restart");
                                    restart.addEventListener("click", game.start);
                                }
                            }
                        }
                        // check if board[i] is other than empty string 
                        ifStatement:
                        if (board[i] !== ""){
                            // if its true check 3 different ways for winner
                            winnersBox.push(pieces[i].id);
                            console.log("first piece not empty")
                            // make a while loop to work until y is less than 3
                            forLoop:
                            for(let y = 1; y < 3; y++){
                                if(board[i] === board[y]){
                                    winnersBox.push(pieces[y].id);
                                    haveWinner = true;
                                } else {
                                    haveWinner = false;
                                    break forLoop;
                                }
                            }
                            // if we have a Winner change each piece id to winner to show the winning line 
                            if (haveWinner === true){
                                gameOver();
                            } else {
                                // if we don't have a winner here clear the index box and push first piece id again
                                winnersBox = [];
                                winnersBox.push(pieces[i].id);
                            }
                            
                            
                                const foundWinner = (() => {
                                    // make a layer to announce the winner on it
                                    // make a button on that layer to restart the game
                                    // make a button to go to home
                                    //
                                })()
                                
                            
                                // if we have a winner finish the game
                                // announce the winner
                                // if we don't have a winner yet continue
                        
                        
                        
                        }
                    })()
                }
                
            })
        }
    }
    return { start , player , players}
})();

let button = document.querySelector(".button")
button.addEventListener("click", game.start)







