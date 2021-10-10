const canvas = document.getElementById('game')
const context =canvas.getContext('2d')

let gameStarted = false
const keys = []

const player = {
    x: 5,
    y: canvas.height - 20,
    width: 20,
    height: 20,
    speed: 5,
    velX: 0,
    velY: 0,
    color: "#ff0000",
    draw: function() {
        context.fillStyle = this.color
        context.fillRect(this.x,this.y,this.width, this.height)
    }
}

// KEYS
document.addEventListener ("keydown", function(e){
    if (e.key == "Enter" && !gameStarted){
        startGame()
    }
    keys[e.key] = true
})

document.addEventListener ("keyup", function(e){
    keys[e.key] = false
})

introScreen()

// Start page title
function introScreen(){
context.font = "50px Impact"
context.fillStyle = "#0099CC"
context.textAlign = "center"
context.fillText("Platform Game", canvas.width/2, canvas.height/2)

context.font = "20px Arial"
context.fillStyle = "#0099CC"
context.textAlign = "center"
context.fillText("Press Enter To Start", canvas.width/2, canvas.height/2 + 50)

}

// Function to start the game
function startGame(){
    gameStarted = true
    clearCanvas()
    console.log("Game Started")

    setInterval(function(){
        clearCanvas()
        gameLoop()
    }, 1000/30)


}

// Function to clear the canvas
function clearCanvas() {
    context.clearRect(0,0,640,640)
}


// Main game loop
function gameLoop() {
    console.log("Game Running")
    player.draw()
    
    if(keys["ArrowRight"]) {
        console.log("Right Key Pressed")
        
        if(player.velX < player.speed){ //speed of player right
            player.velX++
        }
    }

    if(keys["ArrowLeft"]) {
        console.log("Left Key Pressed")
        
        if(player.velX > -player.speed){ //speed of player left
            player.velX--
        }
    }

    player.x += player.velX

}