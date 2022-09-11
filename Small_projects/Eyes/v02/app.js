
//=========VARIABLES============//

//debug button
const debug = document.getElementById('debug');

//debug text
var text = document.getElementById('text');

//pointer dot
var dot = document.getElementById("dot");
var dotX;
var dotY;
//eyes nodes(HTML collection)
var eyes = document.getElementsByClassName("eye");
//fetch --eye-size variable from stylesheet for easy styling
var eyeSize = String(getComputedStyle(document.querySelector(':root')).getPropertyValue('--eye-size')).replace('px','');
//corrects eye center
var eyesOffset = Math.floor(eyeSize) - 15 ;

//================================//

//debug button
debug.onclick = () => {
    
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
}


//get mouse coordinates on variables (pointer x coord. / pointer y coord.)
document.onmousemove = function(event) {

	pointerX = event.pageX;
	pointerY = event.pageY;
}

//mouse pointer's dot coordinates function
function pointerCheck(dot) {

    //animate dot
    var dotX = pointerX + "px";
    var dotY = pointerY + "px";
    dot.style.marginTop = dotY;
    dot.style.marginLeft = dotX;

    //writes coords on top text
    var coords = "X coord: " + pointerX + "<br> Y coord: " + pointerY
    text.innerHTML = coords;
}

//calculates angle relative to cursor
function calcAngle(x, y) {
    return Math.atan2(y, x) * 180 / Math.PI;
}

//updates dot position to mouse cursor
setInterval(pointerCheck, 10, dot);

//updates eye rotation CSS parameters
function eyeAngle(obj, angle){
    obj.style.transform = 'rotate('+ angle +'deg)';
}

//updates eye rotation
setInterval( () => {

    //loops for every eye in the 'eyes' HTML collection
    for (let i = 0; i < eyes.length; i++) {
        let eyeX = Math.floor(eyes[i].getBoundingClientRect().left)+eyesOffset;
        let eyeY = Math.floor(eyes[i].getBoundingClientRect().top)+eyesOffset;

        //-------debug
        //console.log(eyeX + '/' + eyeY);

        //finds difference between eyes and cursor coordinates
        eyeAngle(eyes[i], calcAngle((pointerX - eyeX),(pointerY - eyeY))); 
    }
//update interval in ms
}, 10);
