


//-- objects --//

const lemon = {

    n : 0,

    price : 0,

    trees : 0,

    stands : 0,

    sugar : 0,

    ice: 0,

}


let lemonPbar = document.getElementById('lemon-pbar');






// ANCHOR buy lemons button
document.getElementById('buy-lemons').addEventListener('click', () => {

    //progress bar

    var i = 0;

    if (i == 0) {

        i = 1;
        var elem = document.getElementById("lemon-pbar");
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }

          


        }
      }

})







// ANCHOR increment function
function increment (n, increment)  {

    lemon.n = n*(lemon.n + increment);
    
}





//update--------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------



// ANCHOR display update
setInterval( () => {

    document.getElementById('total-lemons').innerText = lemon.n;




}, 10
)

// ANCHOR increment update
setInterval( () => {

    if (lemon.trees >= 1){

        increment(1,detectives);

    }


    
}, 1000
)


