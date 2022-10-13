let game = (() => {
    let gameBoard = (() => {
        let board = [];
        let boardFiller = (() => {
            for (let i = 0 ; i < 9 ; i++){
                board.push("");
            }
            return {board} 
        })();
        let fill = boardFiller.board;
        return {fill}
    })();
    let player = (playerName , playerMark) => {
        let name = playerName + "a";
        if (playerMark === "x" || playerMark === "o"){
            let mark = playerMark;
            return {name , mark};
        } else {
            let mark = "x"
            return {name , mark};
        } 
    };
    let start = () => {
        let board = gameBoard.fill;
        return console.log(board)
    }
    return { start , player}
})();
let playerOne = game.player("jafar" , 'x');

let playerTwo = game.player("michael" , "o")
game.start()
console.log(playerOne.mark)
console.log(playerTwo.mark)