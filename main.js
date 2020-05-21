// codeAcademy teamStats project

const razorBacks = { //object razorBacks
    _players: [ // _players a property of object razorBacks _players is an array
        {
            firstName: 'Brighton', // properties and values of _players, populates the _players array. Each player listed on a new line.
            lastName: 'Young',
            age: 13
        },
        {
            firstName: 'Blake',
            lastName: 'Young',
            age: 13
        },
        {
            firstName: 'Zach',
            lastName: 'Burns',
            age: 13
        }
    ],
    _games: [ // _games a property of object razorBacks _games is an array
        {
            opponent: 'Bengals',  // properties and values of _games, populates the _games array. Each game listed on a new line.
            teamPoints: 8,
            opponentPoints: 4
        },
        {
            opponent: 'Sentinals',
            teamPoints: 12,
            opponentPoints: 3
        },
        {
            opponent: 'Miners',
            teamPoints: 4,
            opponentPoints: 1
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) { // Method that creates player object with three parameters.
        let player = { // player object
            firstName,
            lastName,
            age,
        };
        this.players.push(player); // adds player to the _players array.
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent,
            teamPoints,
            opponentPoints,
        };
        this.games.push(game);
    }
};

razorBacks.addPlayer('Steph', 'Curry', 28); // invoke addPlayer method adding players to our razorBacks object _players array.
razorBacks.addPlayer('Lisa', 'Leslie', 44);
razorBacks.addPlayer('Bugs', 'Bunny', 76);

razorBacks.addGame('RBF', 30, 0); // invoke addGame method adding games to the razorback object _games array
razorBacks.addGame('Hornets', 13, 8);
razorBacks.addGame('Eagles', 2, 1);

console.log(razorBacks._players); // logs each players first name, last name, and age.
console.log(razorBacks._games); // logs each game opponent and scores.
 