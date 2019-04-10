//Business Logic for Game

function Game () {
  this.gamePlayers = [];
  this.scoreTurn = 0;
}

Game.prototype.addPlayers = function(player) {
  this.gamePlayers.push(player)
  console.log(game.gamePlayers);
}

Game.prototype.startNewGame = function() {
  if (game.gamePlayers[1].id === "player2") {
    $("#startTheGame").show();
    $("#startGame").click(function(){
      $("#form").hide();
      $("#startTheGame").hide();
      $("#gamePlayArea").show();
    })
      // roll(game.gamePlayers[0]);
  }
}

// game.gamePlayers.player.id

// Game.prototype.startNewGame = function() {
//     if (Player.id === "player1" && Player.id === "player2") {
//         console.log("hey");
//   //  roll(player1);
//
//     }
//
// }

//Business Logic for Players--------

function Player (name, age, id, experience) {
  this.name = name,
  this.age = age,
  this.id = id,
  this.experience = experience
  // this.score = score,
  // this.active = true
}


Player.prototype.roll = function() {
  var randomNum = Math.floor(Math.random()* (6)+1);

  if(randomNum === 1){
    game.scoreTurn = 0;
    appendScores();
    switchPlayer();
  }else if (randomNum > 1){
    game.scoreTurn += randomNum
    alert("hi")
    appendScores();
  }
}

Player.prototype.addScoreToTotal = function() {
  var scoreTurn = roll();
  scoreGame += scoreTurn;
}

Player.prototype.hold = function () {
  addScoretoTotal(game.scoreTurn);
  switchPlayer();
}

Player.prototype.switchPlayer = function(player) {
  if (this.id === "player1") {
    roll(player2);
  } else if (this.id === "player2") {
    roll(player1);
  }
}

// var scoreTurn = roll();
// var scoreGame = 0;

//User Interface Logic------------
var game = new Game();
function attachRollListeners() {
  $("#roll").click(function() {
      game.gamePlayers[0].roll();
    });
  };

function attachHoldListeners() {
  $("#hold").click(function() {
      hold();
  });
};

function appendScores(roll){
  $("ul#player1Score").append("<li>" + randomNum + "</li>");
  $("#runningTotalPlayer1").text(scoreTurn)
}

$(document).ready(function() {
  attachHoldListeners();
  attachRollListeners()
  $("form#form").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#nameInput").val();
    var inputtedAge = $("input#ageInput").val();
    console.log(typeof inputtedAge)
    var inputtedPlayerId = $("input:radio[name=playerId]:checked").val();
    var inputtedExperience = $("input#experienceInput").val();
    var history = [];
    var newPlayer = new Player(inputtedName, inputtedAge, inputtedPlayerId, inputtedExperience);
    console.log(newPlayer instanceof Player);
    game.addPlayers(newPlayer);
    game.startNewGame();
  });
});
