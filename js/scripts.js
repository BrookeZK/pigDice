//Business Logic for Game

function Game () {
  this.gamePlayers = [];
  // this.scoreTurn = 0;
}

Game.prototype.addPlayers = function(player) {
  this.gamePlayers.push(player)
  console.log(game.gamePlayers);
}

Game.prototype.startNewGame = function() {
    $("#form2").hide();
    $("#gamePlayArea").show();
    game.gamePlayers[1].active = false
    console.log(game.gamePlayers[1])
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
  console.log(currentPlayer.gameScore);
}

Player.prototype.switchPlayer = function(player) {
  if (this.id === "player1" && game.scoreTurn >=0) {
    roll(player2);
  } else if (this.id === "player2") {
    roll(player1);
  }
}

//User Interface Logic------------
var currentPlayer = {};
var game = new Game();

function whichPlayerIsActive() {
  for (var i = 0; i <= game.gamePlayers.length; i++)
  if (game.gamePlayers[i].active === true) {
    currentPlayer = game.gamePlayers[i];
    return currentPlayer
  }
  console.log(currentPlayer)
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

function roll() {
  whichPlayerIsActive();
  console.log(currentPlayer);
  var randomNum = Math.floor(Math.random()* (6)+1);
  $("ul#gamePlay").prepend("<li>" + randomNum + "</li>");
  if(randomNum === 1){
    currentPlayer.scoreTurn = 0;
    $("#runningTotal").text(currentPlayer.scoreTurn)
    currentPlayer.addScoreToTotal();
    console.log(currentPlayer);
  }if (randomNum > 1){
    currentPlayer.scoreTurn += randomNum
    $("#runningTotal").text(currentPlayer.scoreTurn)
  }
}


function hold() {
  currentPlayer = whichPlayerIsActive();
  currentPlayer.addScoreToTotal();
}

$(document).ready(function() {
  attachHoldListeners();
  attachRollListeners();
  $("form#form1").submit(function(event) {
    event.preventDefault();
    var inputtedName1 = $("input#nameInput1").val();
    var newPlayer = new Player(inputtedName1);
    game.addPlayers(newPlayer);
    $("#form1").hide();
    $("#form2").show();
  });
  $("form#form2").submit(function(event) {
    event.preventDefault();
    var inputtedName2 = $("input#nameInput2").val();
    var newPlayer = new Player(inputtedName2);
    game.addPlayers(newPlayer);
    game.startNewGame();
  });
});
