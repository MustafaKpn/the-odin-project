import { createInterface } from "node:readline/promises";

class gameBoard {
  constructor(player1, player2) {
    this.totalMoves = 0;
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer;
    this.positions = {
      0.0: "",
      0.1: "",
      0.2: "",
      1.0: "",
      1.1: "",
      1.2: "",
      2.0: "",
      2.1: "",
      2.2: "",
    };
  }

  placeMove(position) {
    if (this.positions[position] !== "") {
      throw "The position is not empty";
    } else {
      this.positions[position] = this.currentPlayer.marker;
      this.totalMoves += 1;
    }
  }

  checkBoard() {
    if (
      (this.positions[0] === this.currentPlayer.marker &&
        this.positions[0.1] === this.currentPlayer.marker &&
        this.positions[0.2] === this.currentPlayer.marker) ||
      (this.positions[1] === this.currentPlayer.marker &&
        this.positions[1.1] === this.currentPlayer.marker &&
        this.positions[1.2] === this.currentPlayer.marker) ||
      (this.positions[2] === this.currentPlayer.marker &&
        this.positions[2.1] === this.currentPlayer.marker &&
        this.positions[2.2] === this.currentPlayer.marker) ||
      (this.positions[0] === this.currentPlayer.marker &&
        this.positions[1] === this.currentPlayer.marker &&
        this.positions[2] === this.currentPlayer.marker) ||
      (this.positions[0.1] === this.currentPlayer.marker &&
        this.positions[1.1] === this.currentPlayer.marker &&
        this.positions[2.1] === this.currentPlayer.marker) ||
      (this.positions[2] === this.currentPlayer.marker &&
        this.positions[2.1] === this.currentPlayer.marker &&
        this.positions[2.2] === this.currentPlayer.marker) ||
      (this.positions[0] === this.currentPlayer.marker &&
        this.positions[1.1] === this.currentPlayer.marker &&
        this.positions[2.2] === this.currentPlayer.marker) ||
      (this.positions[1] === this.currentPlayer.marker &&
        this.positions[1.1] === this.currentPlayer.marker &&
        this.positions[2.0] === this.currentPlayer.marker)
    ) {
      return 1;
    } else {
      return 0;
    }
  }

  displayGameBoard() {
    return `${this.positions[0]} | ${this.positions[0.1]} | ${this.positions[0.2]}\n---------\n${this.positions[1]} | ${this.positions[1.1]} | ${this.positions[1.2]}\n---------\n${this.positions[2]} | ${this.positions[2.1]} | ${this.positions[2.2]}\n`;
  }

  switchPlayer() {
    this.currentPlayer === this.player1
      ? (this.currentPlayer = this.player2)
      : (this.currentPlayer = this.player1);
  }
}

class player {
  constructor(name, marker) {
    this.name = name;
    this.marker = marker;
  }

  playerInfo() {
    return `Name: ${this.name}, Marker: ${this.marker}`;
  }
}

const player1 = new player("Mustafa", "O");
const player2 = new player("Julia", "X");
const game = new gameBoard(player1, player2);
game.currentPlayer = player1;

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

var check = game.checkBoard();

while (!check && game.totalMoves !== 9) {
  var input = await rl.question(
    `${game.currentPlayer.name} it's your turn\nChoose a position: `,
  );

  game.placeMove(input);
  check = game.checkBoard();
  if (check) {
    console.log("We have a winner");
  } else if (game.totalMoves === 9) {
    console.log("No more moves are available");
  }
  game.switchPlayer();
  console.log(game.displayGameBoard());
}

rl.close();
