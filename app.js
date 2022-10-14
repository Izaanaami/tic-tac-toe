let game = (() => {
    // set an array to contain players
    let players = [];
    let gameBoard = (() => {
        let board = [];
        let boardFiller = (() => {
            for (let i = 0 ; i < 9 ; i++){
                board.push("");
            }
        })();
        let fill = board;
        return {fill}
    })();
    let player = (playerName , playerMark) => {
        let name = playerName + "a";
        let turn = false;
        
        if(playerMark === "x"){
            turn = true;
        }
        // add each player into players array
        if (playerMark === "x" || playerMark === "o"){
            let mark = playerMark;
            return {name , mark , turn};
        } else {
            let mark = "x";
            return {name , mark , turn};
        } 
    };
    // create a function to display every item on board
    let start = () => {
        let board = gameBoard.fill;
        let mainNode = document.querySelector("main");
        let playBoard = document.createElement("div");
        playBoard.classList.add("playBoard");
        mainNode.appendChild(playBoard);
        for (let i = 0 ; i < board.length ; i++){
            let pieceContainer = document.createElement("div");
            pieceContainer.classList.add("pieceContainer");
            playBoard.appendChild(pieceContainer);
        }
        let pieces = document.querySelectorAll(".pieceContainer");
        // set eventListener on each board item
        for (let piece of pieces){
            piece.addEventListener("click" , () => {
                // check if the board piece is not marked before
                if (piece.textContent === ""){
                    for (let i = 0 ; i < players.length ; i++){
                        // check which player turn is true
                        // if its true
                        if(players[i].turn === true){
                            // print the mark of player on board piece
                            piece.textContent = players[i].mark;
                            console.log(piece.textContent)
                            // change the turn to false and otherplayer's turn to true
                            players[i].turn = false;
                            console.log("works")
                        } else { // else change the turn to other player
                            players[i].turn = true;
                        }
                    }
                }
                
            })
        }
        console.log(players)
    }
    return { start , player , players}
})();
let playerOne = game.player("jafar" , 'x');
game.players.push(playerOne)
let playerTwo = game.player("michael" , "o")
game.players.push(playerTwo)
game.start()
console.log(playerOne)
console.log(playerTwo)






