//food buttons
const bunBtn = document.getElementById('bun');
const pattyBtn = document.getElementById('patty');
const cheeseBtn = document.getElementById('cheese');
const baconBtn = document.getElementById('bacon');
const lettuceBtn = document.getElementById('lettuce');
const onionBtn = document.getElementById('onion');
const tomatoBtn = document.getElementById('tomato');
const picklesBtn = document.getElementById('pickles');

const startOverBtn = document.getElementById('start-over');


//ingredient placement

var ingredientIndex = 40


//food container
var foodContainer = document.getElementById('food-container');


bunBtn.addEventListener('click', () => {

    createIngredient('bun');
    
})

pattyBtn.addEventListener('click', () => {
    createIngredient('patty');
    
})

cheeseBtn.addEventListener('click', () => {

    createIngredient('cheese');
    
})

baconBtn.addEventListener('click', () => {

    createIngredient('bacon');
    
})

lettuceBtn.addEventListener('click', () => {

    createIngredient('lettuce');
    
})

onionBtn.addEventListener('click', () => {

    createIngredient('onion');
    
})

tomatoBtn.addEventListener('click', () => {

    createIngredient('tomato');
    
})

picklesBtn.addEventListener('click', () => {

    createIngredient('pickles');
    
})

startOverBtn.addEventListener('click', () => {

    reload();
    
})



function createIngredient(name){

    console.log(name);
    var newIngredient = document.createElement('img');
    

    newIngredient.style.position = 'absolute';
    newIngredient.style.maxBlockSize = '300px';

    newIngredient.src = name + ".png";



    foodContainer.appendChild(newIngredient);
    
    newIngredient.style.bottom = ingredientIndex + 'px';
    console.log(newIngredient.style.bottom)

    
    ingredientIndex = ingredientIndex + 40;

}



function reload(){

    location.reload()

}