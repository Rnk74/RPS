/*get choice of computer between Rock, Paper, Scissors*/
let compscore = 0
let playscore = 0
let playerchoice = "None"
function getComputerChoice(){
    
    var choice = Math.random()
        if (choice < 0.33) {
            return "Rock";}
        else if (choice >= 0.33 && choice <0.66 ){
            return "Paper";}
        else {
            return "Scissors"; }
            
    }




/*get choice of the player between Rock, Paper, Scissors*/
function choose() {

const Rock = document.querySelector('.Rock');

function showRockMsg() {
  return playerchoice = "Rock", 
  console.log(playerchoice), 
  playRound(playerchoice)
 }
    
Rock.addEventListener("click", showRockMsg);

const Paper = document.querySelector('.Paper');

function showPaperMsg() {
  return playerchoice = "Paper", 
  console.log(playerchoice), 
  playRound(playerchoice)
 }
    
Paper.addEventListener("click", showPaperMsg);

const Scissors = document.querySelector('.Scissors');
function showScissorsMsg() {
    return playerchoice = "Scissors", 
    console.log(playerchoice), 
    playRound(playerchoice)
   }
   Scissors.addEventListener("click", showScissorsMsg);
}
/* 
compare choice of the player and choice of the computer 
return a winner between both*/

function playRound(playerchoice) {

    let compAnswer=getComputerChoice()

    if (playerchoice === "Rock"){ 
        if (compAnswer === "Rock"){
            document.getElementById("result").innerHTML = "It's a Draw!";}
        else if (compAnswer ==="Paper"){
            document.getElementById("result").innerHTML = "You Lose! Paper beats Rock",compscore++; 
}

        else if (compAnswer === "Scissors"){
            document.getElementById("result").innerHTML = "You Win! Rock beats Scissors",playscore++; 
 }}

    if (playerchoice === "Paper"){ 
        if (compAnswer === "Paper"){
            document.getElementById("result").innerHTML = "It's a Draw!";}
        else if (compAnswer === "Rock"){
            document.getElementById("result").innerHTML = "You Win! Paper beats Rock",playscore++; 
}
        else if (compAnswer === "Scissors"){
            document.getElementById("result").innerHTML = "You Lose! Scissors beats Paper",compscore++; 
 }}

    if (playerchoice === "Scissors") {
        if (compAnswer === "Scissors"){
            document.getElementById("result").innerHTML = "It's a Draw!"}
        else if (compAnswer === "Paper"){
            document.getElementById("result").innerHTML = "You Win! Scissors beats Paper",playscore++; }
        else if (compAnswer === "Rock"){
            document.getElementById("result").innerHTML = "You Lose! Rock beats Scissors",compscore++; }
        }
    document.getElementById("compscore").innerHTML = "Computer score : "+ compscore;
    document.getElementById("playscore").innerHTML = "Player score : "+ playscore;
    if ( compscore === 5)
        endgamecomp()
    if ( playscore === 5)
        endgameplay()
    }
function endgamecomp(){
    document.getElementById("result").innerHTML = "Game over, You loose " + compscore+ " to " + playscore+ " Select a figure to play again!";
    compscore = 0
    playscore = 0
    choose()
}   
function endgameplay(){
    document.getElementById("result").innerHTML = "Congratulation ! You win  " + compscore+ " to " + playscore+ " Select a figure to play again!";
    compscore = 0
    playscore = 0
    choose()
}   
    ;


choose()

