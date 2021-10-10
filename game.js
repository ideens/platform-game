const canvas = document.getElementById('game')
const context =canvas.getContext('2d')

let gameStarted = false
const keys = []
const friction = 0.8
const gravity = 0.98

const player = {
    x: 5,
    y: canvas.height - 20,
    width: 20,
    height: 20,
    speed: 5,
    velX: 0,
    velY: 0,
    jumpStrength: 7,
    jumping: false,
    color: "#ff99a9",
    draw: function() {
        context.fillStyle = this.color
        context.fillRect(this.x,this.y,this.width, this.height)
    }
}

// PLATFORMS
const platforms = []
platforms.push({
    x: 100,
    y: 300,
    width: 120,
    height: 10,
})
platforms.push({
    x: 240,
    y: 260,
    width: 120,
    height: 10,
})
platforms.push({
    x: 380,
    y: 220,
    width: 120,
    height: 10,
})


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

// Function to draw platforms
function drawPlatforms() {
    context.fillStyle = "#3f754e"
    for (let i = 0; i < platforms.length; i++) {
        context.fillRect(platforms[i].x , platforms[i].y , platforms[i].width , platforms[i].height)
    }

}



// Main game loop
function gameLoop() {
    console.log("Game Running")
    player.draw()
    drawPlatforms()
    if(keys["ArrowUp"] || keys[" "]) {
        console.log("Up Key or Space Pressed")
        if(!player.jumping){
            player.velY = -player.jumpStrength*1.5
            player.jumping = true
        }
    }
    
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
    player.velX *= friction //friction for player to stop on keyup
    player.y += player.velY
    player.velY += gravity //increase gravity when jumped

    if(player.y >= canvas.height - player.height) {
        player.y = canvas.height - player.height
        player.jumping = false
    }


}