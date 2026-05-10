const Square_Count=3;
const Timer_Speed=16.6;
const Speed=5;

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

    Array.from(box.children).forEach((element) => {
        let dx = Speed*(Math.random()*2-1);
        let dy = Speed*(Math.random()*2-1);

        let x = parseInt(element.computedStyleMap.left) || 0;
        let y = parseInt(element.computedStyleMap.top) || 0;
        setInterval(() => {
            x += dx;
            y += dy;

            element.style.left = x + "px";
            element.style.top = y + "px";
        }, Timer_Speed)
    });
    

});