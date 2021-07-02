//Team Selection Game
//Annabelle Yee
//28/06/2021

 
 console.log ('Welcome to this virtual random selection tool! \n\nFrom a list of names, this tool will randomly file the names into 2 teams');

// this is the list of players ready to be picked from 
let players = [' Anna', ' Abi' , ' Annabelle', ' Zoe', ' Xanthe', ' Georgia', ' Lily', ' Ella', ' Samantha', ' Bob', ' Sal', ' Jo'];

let teamNumber = prompt('\nHow many players do you want in each team?');

//coping with valid, invalid and boundry inputs (expected and unexpected)
if (teamNumber <= 0) {
  console.log('Error: invalid number');
  
} else if (isNaN(teamNumber)) {
  console.log('Error: not a number')

} else if (teamNumber == '' || null) {
  console.log('Error: no input')
  
}


play();
function play() {
console.log ('\nThis programme will select two teams of ' + teamNumber + ' from the following list of people: \n[' + players + '] \n');

//having two empty teams waiting to have players to be added
let team1 = [];
let team2 = [];
//setting the round number to 1 and length to the number of players in our 'players' list
let round = 1;
let length = teamNumber * 2 ;

 
do {
  //pick a random member from 'players' list
  let player1 = Math.floor(Math.random() * length + 0);
  let player1Name = players[player1];
  
 //to remove the random person picked from the 'players' list 
  players.splice(player1, 1);
  //to add the random person picked to Team1
  console.log('Team 1: ' + player1Name);
  team1.push (player1Name)
  //adding a round and telling the programme that it has one less name to pick from.
  round++;
  length--;

  //give Team2 a member 
  //pick a random member from 'players' list
  let player2 = Math.floor(Math.random() * length + 0);
  
  let player2Name = players[player2];

  //to remove the random person picked from the 'players' list 
  players.splice(player2, 1);
  

  //to add the random person picked to Team2
  console.log('Team 2: ' + player2Name);
  team2.push(player2Name)

  round++;
  length--;

} while (round <= teamNumber * 2);
console.log('\nTeam 1 is: ' + team1);
console.log('Team 2 is: ' + team2);

}

