var button = document.querySelector("button");
var addDiv = document.getElementById("addDiv");

var container = document.getElementById("container");

button.addEventListener("click", () => {
    if (window.confirm("Close the tab?")){
        window.close();
    }

})

addDiv.addEventListener("click", () => {

    const div = document.createElement("div");
    div.classList.add("newDiv")
    console.log('ok');
    container.append(div);

})

