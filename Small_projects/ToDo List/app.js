var form = document.getElementById('add-item');





var itemInput = document.getElementById('todo-text');
var dateInput = document.getElementById('todo-date');



var date = new Date();

var today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();


//resolver depois
dateInput.min = today;


function createItem(text, date) {

    var table = document.getElementById('todo-list');
    var row = table.insertRow(0);
    

    var cellTxt = row.insertCell(0);
    var cellDate = row.insertCell(1);
    var cellBtn = row.insertCell(2);
    

    cellTxt.innerHTML = text;
    cellDate.innerHTML = date;


    var btn = document.createElement("button");
    btn.innerHTML = "x";
    btn.onclick = function(){

        var index = btn.parentNode.parentNode.rowIndex;
        console.log(index);
        table.deleteRow(index);
    }

    cellBtn.appendChild(btn);


}



form.addEventListener('submit', function(e){

    e.preventDefault();

    createItem(itemInput.value, dateInput.value);


})



