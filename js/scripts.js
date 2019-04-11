//Business Logic for Game
var currentPlayer = {};
var game = new Game();
var winnerName = "";

function Game () {
  this.gamePlayers = [];
  // this.scoreTurn = 0;
}

Game.prototype.addPlayers = function(player) {
  this.gamePlayers.push(player)
}

Game.prototype.startNewGame = function() {
    $("#form2").hide();
    $("#gamePlayArea").show();
    game.gamePlayers[1].active = false
  }

Game.prototype.switchPlayer = function(player) {
  clearGamePlay();
  for (var i = 0; i < game.gamePlayers.length; i++) {
    if (game.gamePlayers[i].active === true) {
      game.gamePlayers[i].active = false;
    } else if (game.gamePlayers[i].active === false) {
      game.gamePlayers[i].active = true;
    }
  }

  console.log(game.gamePlayers);
}

Game.prototype.endGame = function() {
  for (var i = 0; i < game.gamePlayers.length; i++) {
    if (game.gamePlayers[i].gameScore >= 100) {
      winnerName = game.gamePlayers[i].name
      winner();
    }
  }
}

//Business Logic for Players--------

function Player (name, gameScore, scoreTurn, active) {
  this.name = name,
  this.gameScore = 0,
  this.scoreTurn = 0,
  this.active = true
}

Player.prototype.addScoreToTotal = function() {
  var currentPlayer = whichPlayerIsActive();
  currentPlayer.gameScore += currentPlayer.scoreTurn
}

//User Interface Logic------------
// var currentPlayer = {};
// var game = new Game();

function whichPlayerIsActive() {
  for (var i = 0; i <= game.gamePlayers.length; i++)
  if (game.gamePlayers[i].active === true) {
    currentPlayer = game.gamePlayers[i];
    return currentPlayer
  }
}

function attachRollListeners() {
  $("#roll").click(function() {
      roll();
    });
  };

function attachHoldListeners() {
  $("#hold").click(function() {
      hold();
  });
};

function winner() {
  $("#gamePlayArea").hide();
  $("#winnerName").text(winnerName)
  $("#winner").show();
}

function roll() {
  whichPlayerIsActive();
  var randomNum = Math.floor(Math.random()* (6)+1);
  $("ul#gamePlay").prepend("<li>" + randomNum + "</li>");
  if(randomNum === 1){
    currentPlayer.scoreTurn = 0;
    $("#runningTotal").text(currentPlayer.scoreTurn)
    currentPlayer.addScoreToTotal();
    if (currentPlayer.id === 1) {
      $("#player1Score").text(currentPlayer.gameScore);
    } else if (currentPlayer.id === 2) {
    $("#player2Score").text(currentPlayer.gameScore);
    }
    game.endGame();
    game.switchPlayer();
  }if (randomNum > 1){
    currentPlayer.scoreTurn += randomNum
    $("#runningTotal").text(currentPlayer.scoreTurn)
  }
}

function hold() {
  currentPlayer = whichPlayerIsActive();
  currentPlayer.addScoreToTotal();
  if (currentPlayer.id === 1) {
    $("#player1Score").text(currentPlayer.gameScore);
  } else if (currentPlayer.id === 2) {
  $("#player2Score").text(currentPlayer.gameScore);
  }
  game.endGame();
  game.switchPlayer();
}

function clearGamePlay() {
  $("#gamePlay").empty();
  $("#runningTotal").empty();
  currentPlayer.scoreTurn = 0;
}

$(document).ready(function() {
  attachHoldListeners();
  attachRollListeners();
  $("form#form1").submit(function(event) {
    event.preventDefault();
    var inputtedName1 = $("input#nameInput1").val();
    var newPlayer = new Player(inputtedName1);
    newPlayer.id = 1;
    game.addPlayers(newPlayer);
    $("#form1").hide();
    $("#form2").show();
  });
  $("form#form2").submit(function(event) {
    event.preventDefault();
    var inputtedName2 = $("input#nameInput2").val();
    var newPlayer = new Player(inputtedName2);
    newPlayer.id = 2;
    game.addPlayers(newPlayer);
    game.startNewGame();
  });
});
