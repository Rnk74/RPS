


/*get choice of computer between Rock, Paper, Scissors*/
let compscore = 0
let playscore = 0

function getComputerChoice(){
    
    var choice = Math.random()
        if (choice < 0.33) {
            return "Rock";}
        else if (choice >= 0.33 && choice <0.66 ){
            return "Paper";}
        else {
            return "Scissors"; }
            
    }




/*get choice of the player between Rock, Paper, Scissors
compare choice of the player and choice of the computer 
return a winner between both*/

function playRound() {

    let compAnswer=getComputerChoice()
    let playerSelection = prompt("ROCK, PAPER OR SCISSORS?");
    let capitalizedPlayerSelection = playerSelection;
    if (capitalizedPlayerSelection === "ROCK"){ 
        if (compAnswer === "Rock"){
            return console.log("It's a Draw!");}
        else if (compAnswer ==="Paper"){
            return console.log("You Lose! Paper beats Rock"),compscore++; 
}

        else if (compAnswer === "Scissors"){
            return console.log("You Win! Rock beats Scissors"),playscore++; 
 }}

    if (capitalizedPlayerSelection === "PAPER"){ 
        if (compAnswer === "Paper"){
            return console.log("It's a Draw!");}
        else if (compAnswer === "Rock"){
            return console.log("You Win! Paper beats Rock"),playscore++; 
}
        else if (compAnswer === "Scissors"){
            return console.log("You Lose! Scissors beats Paper"),compscore++; 
 }}

    if (capitalizedPlayerSelection === "SCISSORS") {
        if (compAnswer === "Scissors"){
            return console.log("It's a Draw!")}
        else if (compAnswer === "Paper"){
            return console.log("You Win! Scissors beats Paper"),playscore++; }
        else if (compAnswer === "Rock"){
            return console.log("You Lose! Rock beats Scissors"),compscore++; }
        }
    }



  
  
 
  /*make a 5 round game in that*/

function game(){
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    
    console.log("Computer score :",compscore)
    console.log("Player score :",playscore)
}

game()



