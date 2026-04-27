class player {
  constructor(name, marker) {
    this.name = name;
    this.marker = marker;
  }

  playerInfo() {
    return `Name: ${this.name}, Marker: ${this.marker}`;
  }
}

class gameBoard {
  constructor(player1, player2) {
    this.totalMoves = 0;
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = "x";
    this.positions = {
      "0,0": "",
      "0,1": "",
      "0,2": "",
      "1,0": "",
      "1,1": "",
      "1,2": "",
      "2,0": "",
      "2,1": "",
      "2,2": "",
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
      (this.positions["0,0"] === this.currentPlayer.marker &&
        this.positions["0,1"] === this.currentPlayer.marker &&
        this.positions["0,2"] === this.currentPlayer.marker) ||
      (this.positions["1,0"] === this.currentPlayer.marker &&
        this.positions["1,1"] === this.currentPlayer.marker &&
        this.positions["1,2"] === this.currentPlayer.marker) ||
      (this.positions["2,0"] === this.currentPlayer.marker &&
        this.positions["2,1"] === this.currentPlayer.marker &&
        this.positions["2,2"] === this.currentPlayer.marker) ||
      (this.positions["0,0"] === this.currentPlayer.marker &&
        this.positions["1,0"] === this.currentPlayer.marker &&
        this.positions["2,0"] === this.currentPlayer.marker) ||
      (this.positions["0,1"] === this.currentPlayer.marker &&
        this.positions["1,1"] === this.currentPlayer.marker &&
        this.positions["2,1"] === this.currentPlayer.marker) ||
      (this.positions["2,0"] === this.currentPlayer.marker &&
        this.positions["2,1"] === this.currentPlayer.marker &&
        this.positions["2,2"] === this.currentPlayer.marker) ||
      (this.positions["0,0"] === this.currentPlayer.marker &&
        this.positions["1,1"] === this.currentPlayer.marker &&
        this.positions["2,2"] === this.currentPlayer.marker) ||
      (this.positions["0,2"] === this.currentPlayer.marker &&
        this.positions["1,1"] === this.currentPlayer.marker &&
        this.positions["2,0"] === this.currentPlayer.marker)
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

let currentGame;

function handleSelectCell(e) {
  const el = e.target;
  const value = el.dataset.value;
  currentGame.placeMove(value);
  el.textContent = currentGame.positions[value];
  el.classList.add("locked");

  if (currentGame.checkBoard()) {
    console.log(currentGame.currentPlayer);
    document.querySelector(".players-prompts-form").classList.add("hidden");
    document.querySelector(".reset-btn").classList.remove("hidden");
    document.querySelector(".game-status").classList.remove("hidden");
    document.querySelector(".message").textContent =
      `${currentGame.currentPlayer.name} WINS`;
    document.querySelectorAll(".boardcellbutton").forEach((btn) => {
      console.log(btn.classList.add("locked"));
    });
  } else if (currentGame.totalMoves === 9) {
    document.querySelector(".players-prompts-form").classList.add("hidden");
    document.querySelector(".reset-btn").classList.add("hidden");
    document.querySelector(".game-status").classList.remove("hidden");
    document.querySelector(".message").textContent = "DRAW!";
  } else {
    currentGame.switchPlayer();
  }
}

function runGame(gameBoardInstance) {
  document.querySelector(".players-prompts-form").classList.add("hidden");
  document.querySelector(".start-btn").classList.add("hidden");
  document.querySelector(".reset-btn").classList.remove("hidden");
  document.querySelector(".game-status").classList.remove("hidden");
  console.log("Game started");

  // while (!gameBoardInstance.checkBoard()) {
  //   gameBoardInstance.switchPlayer();
  // }
}

function handleStartButton(e) {
  const p1 = document.getElementById("player1-name");
  const p2 = document.getElementById("player2-name");
  const player1 = new player(p1.value.trim(), "X");
  const player2 = new player(p2.value.trim(), "O");
  currentGame = new gameBoard(player1, player2);
  currentGame.currentPlayer = player1;
  runGame(currentGame);
  document.querySelectorAll(".boardcellbutton").forEach((btn) => {
    console.log(btn.classList.remove("locked"));
  });
}

function handleResetButton(e) {
  document.querySelector(".players-prompts-form").classList.remove("hidden");
  document.querySelector(".start-btn").classList.remove("hidden");
  document.querySelector(".reset-btn").classList.add("hidden");
  document.querySelector(".game-status").classList.add("hidden");
  document.querySelectorAll(".boardcellbutton").forEach((btn) => {
    btn.textContent = "";
  });
}

let buttons = document.querySelectorAll(".boardcellbutton");
buttons.forEach((btn) => {
  btn.addEventListener("click", handleSelectCell);
});

document
  .querySelector(".start-btn")
  .addEventListener("click", handleStartButton);

document
  .querySelector(".reset-btn")
  .addEventListener("click", handleResetButton);
