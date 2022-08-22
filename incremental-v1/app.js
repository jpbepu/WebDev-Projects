

//buttons
const clicker = document.getElementById("clicker");
const hireDetective = document.getElementById('findPiece');
const assemblePuzzle = document.getElementById('assemblePuzzle');
const sellPuzzle = document.getElementById('sellPuzzle');



//checks


//---------increments---------//

//PRICES!!!

var detectivePrice

//puzzles

//---------------------------//

//items
var totalPieces = 0;
var totalPuzzles = 0;
var totalGold = 0;
var detectives = 0;

//log

const logTest = document.getElementById('logTest');
const clearLog = document.getElementById('clearLog');
const logContainer = document.getElementById('log-container');


// main button
clicker.addEventListener('click', () => {
    
    totalPieces++;
    newLogItem('+1 puzzle piece');
    if (totalPieces == 10) {

        newLogItem('time to assemble');

    }
})


//puzzles - assemble
assemblePuzzle.addEventListener('click', () => {
    if (totalPieces >= 10){
        totalPieces = totalPieces - 10;
        totalPuzzles = totalPuzzles + 1;
    } else {
        newLogItem('not enough pieces');
    }
    
})


//sell - puzzles
sellPuzzle.addEventListener('click', () => {
    if (totalPuzzles >= 1){
        totalPuzzles --;
        totalGold += 10;
        newLogItem('+1 gold');
    } else {
        newLogItem('not enough completed puzzles');
    }
    
})

//increment - pieces
hireDetective.addEventListener('click', () => {
    if (totalGold >= 20){
        detectives++ ;
        totalGold = totalGold - 20;
        newLogItem('Hired detective! +0.3 pcs/s');
    } else {
        newLogItem('Not enough money!')
    }
})

//increment function
function addPiece (n, increment)  {

    totalPieces = n*(totalPieces + increment);
    
}


//price increase function







//-------------------- log - add item 
function newLogItem (message) {

    const newLogItem = document.createElement("p");
    
        newLogItem.appendChild(document.createTextNode(message));
        logContainer.insertBefore(newLogItem, logContainer.firstChild);
        console.log(message);
}


// log - clear log button
clearLog.addEventListener('click', () =>{
    logContainer.innerHTML = '';
})


//update--------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------



//display update
setInterval( () => {

    document.getElementById('detect').innerText = detectives;
    document.getElementById("puzzlep").innerText = totalPieces;
    document.getElementById('puzzle').innerText = totalPuzzles;
    document.getElementById('gold').innerText = totalGold;




}, 10
)

// pieces update
setInterval( () => {

    if (detectives >= 1){

        addPiece(1,detectives);

    }


    
}, 3000
)


