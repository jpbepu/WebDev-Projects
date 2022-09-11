



function dotPos(event) {

    //function variables defining and formating coordinates 
    var x = event.clientX - 25 +"px";
    var y = event.clientY - 25 +"px";
    
    //display coords on <p> element
    var coords = "X coord: " + x + ", Y coord: " + y
    document.getElementById("text").innerHTML = coords;

    //animate dot
    var dot = document.getElementById("dot");
    dot.style.marginTop = y;
    dot.style.marginLeft = x;

}