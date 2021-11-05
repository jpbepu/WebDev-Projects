// app com opcoes de numeros de vertices
// precisa linkar com o index.html
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const canvasData = ctx.getImageData(0,0,500,500);
const a = {
  x:Math.floor((Math.random() * 500) + 0),
  y:Math.floor((Math.random() * 500) + 0)
};
const b = {
  x:Math.floor((Math.random() * 500) + 0),
  y:Math.floor((Math.random() * 500) + 0)
};
const c = {
  x:Math.floor((Math.random() * 500) + 0),
  y:Math.floor((Math.random() * 500) + 0)
};
const d = {
  x:Math.floor((Math.random() * 500) + 0),
  y:Math.floor((Math.random() * 500) + 0)
};
const e = {
  x:Math.floor((Math.random() * 500) + 0),
  y:Math.floor((Math.random() * 500) + 0)
};
const f = {
  x:Math.floor((Math.random() * 500) + 0),
  y:Math.floor((Math.random() * 500) + 0)
};
const r = {
  x:Math.floor((Math.random() * 500) + 0),
  y:Math.floor((Math.random() * 500) + 0)
};




const objArray = [a, b, c, d ,e ,f ];
const clearButton = document.querySelector('button');
const drawButton = document.querySelector('#draw');
let dotSize = 1;
let iterNum = 10000;
let rand = Math.random();
let nOfPoints = 4
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function updateCanvas() {
    ctx.putImageData(canvasData, 0, 0);
}

function average(a, b){
  return (a + b)/2
}

function drawNewPoints(x){
  r.x = average(x.x, r.x);
  r.y = average(x.y, r.y);
  ctx.fillRect(r.x, r.y,dotSize,dotSize);
}
function randomHexa(){
  const hexaList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  const hexaNum = [0,0,0,0,0,0];
  for(let i=0; i<6; i++){
    hexaNum[i] = hexaList[getRandomInt(0, 15)];
    console.log(hexaNum);
  }
  return '#' + hexaNum.join('');
};//generates random hexadec color
//----------------------------------
ctx.fillStyle = "#FF0000"; //set graph color

drawButton.addEventListener('click', () => {
  for (let i=0; i< iterNum; i++){
    drawNewPoints(objArray[randomInt(0, nOfPoints)])//  <---------------executes
  };
})


clearButton.addEventListener('click', () => {
  location.reload();
})
