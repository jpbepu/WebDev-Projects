
var clearBtn = document.getElementById('clear');

var equal = document.getElementById('equal');

var display = document.getElementById('display');


//--display spans

var digitDisp1 = document.getElementById('digit1');
var digitDisp2 = document.getElementById('digit2');
var digitDispOp = document.getElementById('op-digit');
var digitDispEq = document.getElementById('eq-digit');
var digitDispTotal = document.getElementById('total');


var firstDigit = '0';
var operatorDigit = ' _ '; 
var secondDigit = '0';
var total = '0';




const buttons = document.querySelectorAll('button');




function clearDigits() {

    firstDigit = '0';
    digitDisp1.style.display = 'none';

    operatorDigit = ' _ ';
    digitDispOp.style.display = 'none';

    secondDigit = '0';
    digitDisp2.style.display = 'none';

    total = '0';
    digitDispTotal.style.display = 'none';

    digitDispEq.style.display = 'none';
    
}



for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', () =>{



        //check if operator was inserted
        if (operatorDigit == ' _ '){



            //first digit check
            if (isNaN(parseInt(buttons[i].innerText))){
                if (firstDigit == 0){
                    console.log('select a number first')
                }else{
                    digitDispOp.style.display = 'inline-block';
                    operatorDigit = buttons[i].innerText;
                }
            } else {

                //if statement for decimals
                firstDigit = firstDigit * 10 + parseInt(buttons[i].innerText);
                console.log(firstDigit); 
            }

            digitDisp1.style.display = 'inline-block';

        } else {


            //second operator check
            if (isNaN(parseInt(buttons[i].innerText))){
                console.log('select the second number')
            } else {
                secondDigit = secondDigit * 10 + parseInt(buttons[i].innerText);
                console.log(secondDigit); 
            }

            digitDisp2.style.display = 'inline-block';

        }

        
    
    })

}


equal.addEventListener('click', () => {



    switch (operatorDigit) {
        case '/' :
            if (secondDigit == 0) {
                console.log('dont divide by 0, plz')
            } else {
                total = firstDigit / secondDigit; 
            }
            break;

        case '*' :
            total = firstDigit * secondDigit; 
            break;

        case '+':
            total = firstDigit + secondDigit; 
            break;

        case '-':
            total = firstDigit - secondDigit; 
            break;
    
        default:
            console.log('fill digits first')
            break;
    }

    digitDispEq.style.display = 'inline-block';
    digitDispTotal.style.display = 'inline-block';


})


clearBtn.addEventListener('click', () => {
    clearDigits();
})



// display --- need to implement this with react

setInterval(() => {

    digitDisp1.innerText = firstDigit;
    digitDisp2.innerText = secondDigit;
    digitDispOp.innerText = operatorDigit;
    digitDispTotal.innerText = total;

}, 10);