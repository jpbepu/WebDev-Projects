const title = document.querySelector('#title');
const button = document.querySelector('#button');
const bg = document.querySelector('body');


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomHexa(){
  const hexaList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  const hexaNum = [0,0,0,0,0,0];
  for(let i=0; i<6; i++){
    hexaNum[i] = hexaList[getRandomInt(0, 15)];
    console.log(hexaNum);
  }
  return '#' + hexaNum.join('');
}


button.addEventListener('click', () => {
    bg.style.backgroundColor = randomHexa() ;
});
