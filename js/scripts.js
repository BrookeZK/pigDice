//Business Logic for Game
function Game (players, winners) {

}

Game.prototype.startNewGame = function() {
  while (Player.id === "player1" && Player.id === "player2") {
    roll(player1);
  }
}

//Business Logic for Players--------
function Player (name, age, id, experience, score, active) {
  this.name = name,
  this.age = age,
  this.id = id,
  this.experience = experience,
  this.score = score,
  this.active = true
}
Player.prototype.addPlayers = function(player) {
  var gamePlayers = [];
  gamePlayers.push(player)
}

Player.prototype.roll = function() {
  var randomNum = Math.floor(Math.random()* (7-1)+1);
    if (randomNum===1){
      this.score +=0;
      switchPlayer();
  }
}

Player.prototype.switchPlayer = function() {
  player.id

  player.score
}

//User Interface Logic------------

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#nameInput").val();
    var inputtedAge = $("input#ageInput").val();
    console.log(typeof inputtedAge)
    var inputtedPlayerId = $("input:radio[name=playerId]:checked").val();
    var inputtedExperience = $("input#experienceInput").val();
    var score = 0;
    var history = [];
    var newPlayer = new Player(inputtedName, inputtedAge, inputtedPlayerId, inputtedExperience, score);
    addPlayers(newPlayer);
    console.log(newPlayer);
    console.log(typeof score);
  })
})
