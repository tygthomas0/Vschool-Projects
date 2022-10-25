window.addEventListener("load", function(){
    const canvas = document.getElementById("canvas1")
    const ctx = canvas.getContext("2d")
    canvas.width = 512
    canvas.height = 380

    class InputHandler {
        constructor() {
            console.log("Constructor fired")
            this.keys = [];
            window.addEventListener("keydown", function(e){
                console.log("A key was pressed")
                console.log(e)
            })
        }
    }

    class Player {

    }

    class Background {

    }

    class Enemy {

    }

    function handleEnemies() {

    }

    function displayStatusText() {

    }

    const input = new InputHandler();

    function animate() {

    }
})