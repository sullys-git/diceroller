
let theRoll = ""

let score = 0
function displayDice() {
let diceResults = [];
let sortDice = [];
    let numDice = document.getElementById('num-dice');
    let diceDisplay = document.getElementById('dice-display');
    diceDisplay.innerHTML = '';
    numDice = numDice.options[numDice.selectedIndex].value;
    let smallestDice = document.getElementById('smallestDice');
    let diceToRemoveDiv = document.createElement('div')
    smallestDice.innerHTML = '';

    for(i = 0; i < numDice ; i ++) {
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        diceResults.push(diceRoll);
        sortDice.push(diceRoll);
        score += diceRoll
    }

    for(let value of diceResults) {
        diceDisplay.innerHTML += `<div><img src="dice${value}.png" class="dice-img" /></div>`;
        theRoll += value + ' ';
        diceResults=[];
    }

    let smallestRemoved = sortDice.sort().shift();
    console.log(`You rolled ${theRoll}`)
    console.log('smallest Removed:' + smallestRemoved)
    diceToRemoveDiv.innerHTML = `<img src="dice${smallestRemoved}.png" class="dice-img" />`;
    smallestDice.appendChild(diceToRemoveDiv)    
    theRoll = ""
    sortDice = []; 
    
    for(let value of sortDice) {
        score += value
    }
    let scoreDisplay = document.getElementById('score-display');
    scoreDisplay.textContent = score;
    console.log('Score: ' + score)
    score = 0;
    
}