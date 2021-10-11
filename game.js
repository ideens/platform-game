const canvas = document.getElementById('game')
const context =canvas.getContext('2d')

let gameStarted = false
const keys = []
const friction = 0.8
const gravity = 0.98
let levelOneCompleted = false
let levelTwoCompleted = false
let levelThreeCompleted = false



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
    grounded: false,
    color: "#ff99a9",
    draw: function() {
        context.fillStyle = this.color
        context.fillRect(this.x,this.y,this.width, this.height)
    }
}

    const doorLevelOne = {
        x: canvas.width - 30,
        y: 145,
        width: 25,
        height: 35,
        color: "#e6c653",
        draw: function() {
            context.fillStyle = this.color
            context.fillRect(this.x,this.y,this.width, this.height)
        }
    }
    
    const doorLevelTwo = {
        x: 320,
        y: 165,
        width: 25,
        height: 35,
        color: "#1fab99",
        draw: function() {
            context.fillStyle = this.color
            context.fillRect(this.x,this.y,this.width, this.height)
        }
    }

    const doorLevelThree = {
        x: 90,
        y: 325,
        width: 25,
        height: 35,
        color: "#99abdd",
        draw: function() {
            context.fillStyle = this.color
            context.fillRect(this.x,this.y,this.width, this.height)
        }
    }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------
// PLATFORMS 
const platformsLevelOne = []
const platformsLevelTwo = []
const platformsLevelThree =[]

platformsLevelOne.push({
    x: 100,
    y: 300,
    width: 120,
    height: 10,
})
platformsLevelOne.push({
    x: 240,
    y: 260,
    width: 120,
    height: 10,
})
platformsLevelOne.push({
    x: 380,
    y: 220,
    width: 120,
    height: 10,
})
platformsLevelOne.push({
    x: 520,
    y: 180,
    width: 120,
    height: 10,
})
platformsLevelOne.push({ //floor
    x: 0,
    y: canvas.height-5,
    width: canvas.width,
    height: 10,
})
platformsLevelOne.push({ //wall left
    x: 0 -10,
    y: 0,
    width: 10,
    height: canvas.height,
})
platformsLevelOne.push({ //wall right
    x: canvas.width,
    y: 0,
    width: 10,
    height: canvas.height,
})
platformsLevelOne.push({ //ceiling
    x: 0,
    y: -10,
    width: canvas.width,
    height: 10,
})

//-----------------------------------Level Two

platformsLevelTwo.push({
    x: 320,
    y: 100,
    width: 120,
    height: 10,
})
platformsLevelTwo.push({
    x: 500,
    y: 180,
    width: 120,
    height: 10,
})
platformsLevelTwo.push({
    x: 320,
    y: 190,
    width: 120,
    height: 10,
})

platformsLevelTwo.push({ //floor
    x: 0,
    y: canvas.height-5,
    width: canvas.width,
    height: 10,
})
platformsLevelTwo.push({ //wall left
    x: 0 -10,
    y: 0,
    width: 10,
    height: canvas.height,
})
platformsLevelTwo.push({ //wall right
    x: canvas.width,
    y: 0,
    width: 10,
    height: canvas.height,
})
platformsLevelTwo.push({ //ceiling
    x: 0,
    y: -10,
    width: canvas.width,
    height: 10,
})

//-----------------------------------Level Three

platformsLevelThree.push({ //floor
    x: 0,
    y: canvas.height-5,
    width: canvas.width,
    height: 10,
})
platformsLevelThree.push({ //wall left
    x: 0 -10,
    y: 0,
    width: 10,
    height: canvas.height,
})
platformsLevelThree.push({ //wall right
    x: canvas.width,
    y: 0,
    width: 10,
    height: canvas.height,
})
platformsLevelThree.push({ //ceiling
    x: 0,
    y: -10,
    width: canvas.width,
    height: 10,
})

platformsLevelThree.push({
    x: 20,
    y: 300,
    width: 120,
    height: 10,
})
platformsLevelThree.push({
    x:90,
    y: 360,
    width: 120,
    height: 10,
})
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
    

// START KEYS
document.addEventListener ("keydown", function(e){
    if (e.key == "Enter" && !gameStarted){
        startGame()
    }
    keys[e.key] = true
})
document.addEventListener ("keyup", function(e){
    keys[e.key] = false
})



// Start page title
function introScreen(){
    context.font = "50px Arial"
    context.fillStyle = "#00b9CC"
    context.textAlign = "center"
    context.fillText("Platform Game", canvas.width/2, canvas.height/2)

    context.font = "20px Arial"
    context.fillStyle = "#00b9CC"
    context.textAlign = "center"
    context.fillText("Press Enter To Start", canvas.width/2, canvas.height/2 + 50)
}

// Function to clear the canvas
function clearCanvas() {
    context.clearRect(0,0,640,640)
}

// Function to start the game
function startGame(){
    gameStarted = true
    clearCanvas()
    requestAnimationFrame(gameLoop)

    // setInterval(function(){
    //     clearCanvas()
    //     gameLoop()
    // }, 1000/30)
}


// Function to draw platforms
function drawPlatforms() {
    context.fillStyle = "#3f754e"
    for (let i = 0; i < platforms.length; i++) {
        context.fillRect(platforms[i].x , platforms[i].y , platforms[i].width , platforms[i].height)
    }
}


let platforms = platformsLevelOne
let door = doorLevelOne

// Function for key consequences and player movement + door collision
function playerMovement(){
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

    player.grounded = false

    // Looping through platforms to check for collisions
    for(let i = 0; i < platforms.length; i++){
        let direction = collisionDetection(player, platforms[i])
        //console.log(direction)
        
        if(direction === "left" || direction === "right"){
            player.velX = 0
        } else if (direction === "bottom") {
            player.jumping = false
            player.grounded = true
        } else if (direction === "top") {
            player.velY *= -1
        }
    }
    if (player.grounded) {
        player.velY = 0
    }

    if (collisionDetection(player, doorLevelOne)) {
        levelTwo()
        console.log("level two now")
    } else if (collisionDetection(player, doorLevelTwo)){
        levelThree()
        console.log("level three now")
    } else if (collisionDetection(player, doorLevelThree)){
        endGame()
    }

    // if(player.y >= canvas.height - player.height) {
    //     player.y = canvas.height - player.height
    //     player.jumping = false
    // }
}

// Main game loop
function gameLoop() {
    clearCanvas()
    player.draw()
    door.draw()
    drawPlatforms()
    playerMovement()
    requestAnimationFrame(gameLoop)
}

function levelTwo() {
    clearCanvas()
    levelOneCompleted = true
    platforms = platformsLevelTwo
    door = doorLevelTwo
    
}

function levelThree() {
    clearCanvas()
    levelTwoCompleted = true
    platforms = platformsLevelThree
    door = doorLevelThree
}

function endGame(){
    clearCanvas()
    context.font = "20px Arial"
    context.fillStyle = "#00b9CC"
    context.textAlign = "center"
    context.fillText("Game completed", canvas.width/2, canvas.height/2)
}

    function collisionDetection(player, platform) {
        // x axis
        // distance between objects colliding
        // get sum of half of the widths of the objects
        // same for y axis
        // collision on right side is -ive (player.x - platform.x)

        const checkX = (player.x + (player.width/2)) - (platform.x + (platform.width/2))
        const checkY = (player.y + (player.height/2)) - (platform.y + (platform.height/2))
    
        const checkWidth = (player.width/2) + (platform.width/2)
        const checkHeight = (player.height/2) + (platform.height/2)
        
        // Direction player is colliding with platform
        let collisionDirection = null

        if(Math.abs(checkX) < checkWidth && Math.abs(checkY) < checkHeight) {
            //console.log("Collision Detected")
            
            // Checking where the collision is
            const offsetX = checkWidth - Math.abs(checkX)
            const offsetY = checkHeight - Math.abs(checkY)
            if (offsetX < offsetY) {
                if(checkX > 0) {
                    collisionDirection = "left"
                    player.x += offsetX //makes sure it doesnt overlap with object
                } else {
                    collisionDirection = "right"
                    player.x -= offsetX 
                }
            } else {
                if(checkY > 0) {
                    collisionDirection = "top"
                    player.y += offsetY //makes sure it doesnt overlap with object
                } else {
                    collisionDirection = "bottom"
                    player.y -= offsetY 
                }
            }
        }

        return collisionDirection
    }



    // GLOBAL STUFF
    introScreen()