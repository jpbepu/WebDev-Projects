

//declaring global var
var text = document.getElementById('text');

var pointerX;
var pointerY;

var dot = document.getElementById("dot");
var dotX;
var dotY;

const eye = document.getElementById("eye");
var eyeX = Math.floor(eye.getBoundingClientRect().left);
var eyeY = Math.floor(eye.getBoundingClientRect().top);


//get mouse coord (onmousemove) on variables
document.onmousemove = function(event) {
	pointerX = event.pageX;
	pointerY = event.pageY;
}

//mouse coord function
function pointerCheck(dot) {

    //animate dot
    var dotX = pointerX - 25 + "px";
    var dotY = pointerY - 25 + "px";
    dot.style.marginTop = dotY;
    dot.style.marginLeft = dotX;

    var coords = "X coord: " + pointerX + ", Y coord: " + pointerY
    text.innerText = coords;
}

//calculates angle relative to cursor
function calcAngle(x, y) {
    return Math.atan2(y, x) * 180 / Math.PI;
}

//updates eye rotation CSS parameters
function eyeAngle(angle){
    eye.style.transform = 'rotate('+ angle +'deg)';
}

//mouse coord update
setInterval(pointerCheck, 10, dot);

//updates eye rotation
setInterval(() => {
   eyeAngle(calcAngle((pointerX - eyeX),(pointerY - eyeY))); 
}, 10);
