

//declaring global var
var pointerX;
var pointerY;
var text = document.getElementById("text");
var dot = document.getElementById("dot");
var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dotX;
var dotY;


//get mouse coord (onmousemove) on variables
document.onmousemove = function(event) {
	pointerX = event.pageX;
	pointerY = event.pageY;
}





function pointerCheck(dot) {

    //animate dot
    var dotX = pointerX - 25 + "px";
    var dotY = pointerY -25 + "px";
    dot.style.marginTop = dotY;
    dot.style.marginLeft = dotX;

    var coords = "X coord: " + pointerX + ", Y coord: " + pointerY
    text.innerText = coords;

}


//update text with (setInterval)
setInterval(pointerCheck, 10, dot);
setInterval(pointerCheck, 10, dot1);
setInterval(pointerCheck, 10, dot2);