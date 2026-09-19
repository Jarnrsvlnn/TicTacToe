function createPlayer(name, symbol) {
    let points = 0

    const getPoints = () => points;
    const givePoints = () => points++;

    return { name, symbol, getPoints, givePoints }
}

function playGame(playerOne, playerTwo) {

}

const john = createPlayer("John", "x");
const irene = createPlayer("Irene", "o");

playGame(john, irene);