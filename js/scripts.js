


//Business Logic for Players--------
function Player (name, age, oneOrTwo, experience, score) {
  this.name = name,
  this.age = age,
  this.oneOrTwo = oneOrTwo,
  this.experience = experience,
  this.score = score
}


//User Interface Logic------------

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#nameInput").val();
    var inputtedAge = $("input#ageInput").val();
    console.log(typeof inputtedAge)
    var inputtedPlayerNumber = $("input:radio[name=playerOneOrTwo]:checked").val();
    var inputtedExperience = $("input#experienceInput").val();
    var score = 0
    var newPlayer = new Player(inputtedName, inputtedAge, inputtedPlayerNumber, inputtedExperience, score);
    console.log(newPlayer);
    console.log(typeof score);
  })
})
