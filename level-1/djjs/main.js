var square = document.querySelector("#square");

/*
Blue when the mouse hovers over the square
Red when the mouse button is held down over the square
Yellow when the mouse button is let go over the square
Green when the mouse is double clicked in the square
Orange when the mouse scroll is used somewhere in the window (not just over the square).
*/

square.addEventListener("mouseover", function(){square.style.backgroundColor = "blue"});
square.addEventListener("mousedown", function(){square.style.backgroundColor = "red"});
square.addEventListener("mouseup", function(){square.style.backgroundColor = "yellow"});
square.addEventListener("dblclick", function(){square.style.backgroundColor = "green"});
window.addEventListener("scroll", function(){square.style.backgroundColor = "orange"});
document.addEventListener("keydown", function(event) {
    if (event.which == 66) {
        square.style.backgroundColor = "blue"
    }
    else if (event.which == 82) {
        square.style.backgroundColor = "red"
    }
    else if (event.which == 89) {
        square.style.backgroundColor = "yellow"
    }
    else if (event.which == 71) {
        square.style.backgroundColor = "green"
    }
    else if (event.which == 79) {
        square.style.backgroundColor = "orange"
    }
});