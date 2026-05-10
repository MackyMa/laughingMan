const Square_Count=3;

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#square").addEventListener("click", function() {
        alert("YOU GOT ME!");
    });

    let box = document.querySelector("#box");

    for(let i = 0; i < Square_Count; i++) {
        //make the element
        let square = document.createElement("img");
        //set attributes/property of the element 
        square.src = "laughing_man.jpg";
        square.alt = "Catch the Laughing Man!";
        square.className = "square";
        box.appendChild(square);
    }
});