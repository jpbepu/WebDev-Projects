


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

var buyLemonsBtn = document.getElementById('buy-lemons');

//enable-disable buttons

function disableLemonsBtn() {
  buyLemonsBtn.disabled = true;
}

function enableLemonsBtn() {
  buyLemonsBtn.disabled = false;
}




// ANCHOR buy lemons button
buyLemonsBtn.addEventListener('click', () => {

  disableLemonsBtn();

    //progress bar



        i = 1;
        var width = 0;
        var id = setInterval(frame, 50);
        function frame() {
          if (width < 100) {
            width++;
            document.getElementById("lemon-pbar").style.width = width + "%";

          } else {

            lemon.n++

            enableLemonsBtn();


            clearInterval(id);
            i = 0;
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


