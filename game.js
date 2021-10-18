const jumpAudio = document.getElementById('jump')
const collectAudio = document.getElementById('collect')
const levelTransitionAudio = document.getElementById('level')
const deathAudio = document.getElementById('death')
const swooshAudio = document.getElementById('swoosh')
const laserAudio = document.getElementById('laser')

const canvas = document.getElementById('game')
const context =canvas.getContext('2d')

let gameStarted = false
const keys = []
const friction = 0.7
const gravity = 0.98
let died = false

let playerImage = new Image()
playerImage.src = "batman-main.png"

let rockImage = new Image()
rockImage.src = "rocks-long.png"

let gunImage1 = new Image()
gunImage1.src = "gun.png"
let gunImage2 = new Image()
gunImage2.src = "gun.png"
let gunImage3 = new Image()
gunImage3.src = "gun.png"
let gunImage4 = new Image()
gunImage4.src = "gun.png"
let gunImage5 = new Image()
gunImage5.src = "gun.png"

function drawRocks() {
    context.drawImage(rockImage, 0, 0, 2667, 834, 0, canvas.height-145, canvas.width, 150)
}

function drawGuns() {
    context.drawImage(gunImage1, 0,0,209,209, 82,0,36,30)
    context.drawImage(gunImage2, 0,0,209,209, 182,0,36,30)
    context.drawImage(gunImage3, 0,0,209,209, 282,0,36,30)
    context.drawImage(gunImage4, 0,0,209,209, 382,0,36,30)
    context.drawImage(gunImage5, 0,0,209,209, 482,0,36,30)
}

function jumpSound() {
    jumpAudio.src = "jump.wav"
    jumpAudio.volume = 0.2
    jumpAudio.play()
}

function collectSound(){
    collectAudio.src = "collecting-coins.wav"
    collectAudio.volume = 0.2
    collectAudio.play()
}

function transitionSound(){
    levelTransitionAudio.src = "batman-intro.mp3"
    levelTransitionAudio.volume = 0.08
    levelTransitionAudio.play()

}

function deathSound(){
    deathAudio.src = "you-died.mp3"
    deathAudio.volume = 0.08
    deathAudio.play()
}

function swooshSound() {
    swooshAudio.src = "cape-swoosh-trimmed.wav"
    swooshAudio.volume = 0.5
    swooshAudio.play()
}


    laserAudio.src = "laser.mp3"
    laserAudio.volume = 0.05
    


const moveArrayRight = [137,273,409,545,681,817,963,1089,1225,1361,1497,1633,1769]
const moveArrayLeft = [122,258,394,530,666,802,948,107,1210,1346,1482,1618,1754]


const player = {
    x: canvas.width - 50,
    y: canvas.height - 129,
    width: 35,
    height: 45,
    speed: 5,
    velX: 0,
    velY: 0,
    jumpStrength: 7,
    jumping: false,
    grounded: false,
    color: "#ff99a9",
    position: "idle",
    draw: 
    
    function(frame) {
        startX = 1
        startY = 1
        if(this.position === "left") {
            startX = moveArrayLeft[frame]
        } else if(this.position ==="right") {
            startX = moveArrayRight[frame]
            startY = 126
        }
        context.drawImage(playerImage, startX, startY, 134, 126, this.x, this.y, 45, 42)
    }
}

// let villainImage = new Image()
// villainImage.src = "clayface-spritesheet.png"

// class Villain {
//     constructor(x,y,width,height,speed) {
//         this.x = x
//         this.y = y
//         this.width = width
//         this.height = height
//         this.speed = speed
        
//     }
//     draw() {
//         context.fillStyle = "#c43241"
//         context.fillRect(this.x, this.y, this.width, this.height)
//     }
//     update() {
//         this.x +=this.speed
//         if(this.x > 450){
//             speed = -speed
//         }
//     }
// }



    const doorLevelOne = {
        x: canvas.width - 40,
        y: 60,
        width: 35,
        height: 50,
        color: "#e6c653",
        draw: function() {
            context.fillStyle = this.color
            context.fillRect(this.x,this.y,this.width, this.height)
        }
    }
    
    const doorLevelTwo = {
        x: canvas.width - 40,
        y: 130,
        width: 35,
        height: 50,
        color: "#e6c653",
        draw: function() {
            context.fillStyle = this.color
            context.fillRect(this.x,this.y,this.width, this.height)
        }
    }

    const doorLevelThree = {
        x: 30,
        y: 250,
        width: 35,
        height: 50,
        color: "#e6c653",
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

platformsLevelOne.push({ //1
    x: 520,
    y: 300,
    width: 120,
    height: 10,
})
platformsLevelOne.push({ //2
    x: 460,
    y: 240,
    width: 30,
    height: 10,
})
platformsLevelOne.push({ //3 
    x: 400,
    y: 180,
    width: 30,
    height: 10,
})
platformsLevelOne.push({ //4
    x: 530,
    y: 110,
    width: 110,
    height: 10,
})
platformsLevelOne.push({ //5 
    x: 300,
    y: 220,
    width: 60,
    height: 12,
})
platformsLevelOne.push({ //6
    x: 160,
    y: 300,
    width: 60,
    height: 12,
})
platformsLevelOne.push({ //7
    x: 90,
    y: 260,
    width: 40,
    height: 10,
})
platformsLevelOne.push({ //8
    x: 160,
    y: 200,
    width: 40,
    height: 10,
})
platformsLevelOne.push({ //9
    x: 240,
    y: 90,
    width: 240,
    height: 10,
})
platformsLevelOne.push({ //10
    x: 40,
    y: 200,
    width: 30,
    height: 10,
})
platformsLevelOne.push({ //11
    x: 90,
    y: 140,
    width: 40,
    height: 10,
})
platformsLevelOne.push({ //12
    x: 165,
    y: 120,
    width: 40,
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

platformsLevelTwo.push({ //1
    x: 0,
    y: 110,
    width: 80,
    height: 10,
})
platformsLevelTwo.push({
    x: 120,
    y: 220,
    width: 400,
    height: 15,
})
platformsLevelTwo.push({
    x: canvas.width-80,
    y: 180,
    width: 80,
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
    x: canvas.width-80,
    y: 180,
    width: 80,
    height: 10,
})
platformsLevelThree.push({
    x: 20,
    y: 300,
    width: 120,
    height: 10,
})
platformsLevelThree.push({
    x: 220,
    y: 300,
    width: 230,
    height: 10,
})
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
    




// START KEYS
document.addEventListener ("keydown", function(e){
    if (e.key == "Enter" && !gameStarted){
        startGame()
    }
    if (e.key == "Enter" && died){
        gameReset()
    }
    if (e.key == "Enter" && completed){ ////// DOESN'T WORK
        gameReset()
    }

    keys[e.key] = true
})
document.addEventListener ("keyup", function(e){
    keys[e.key] = false
})



// Start page title
function introScreen(){

    context.fillStyle = "#e6c653"
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.font = "100px VT323, Trebuchet MS"
    context.fillStyle = "#303030"
    context.textAlign = "center"
    context.fillText("THE BATGAME", canvas.width/2, canvas.height/2-20)
    context.font = "25px VT323,Trebuchet MS"
    context.fillStyle = "#303030"
    context.textAlign = "center"
    context.fillText("Press Enter To Start", canvas.width/2, canvas.height/2 + 30)
    context.fillStyle = "#4a9171"
    context.fillRect(170, 250, canvas.width-340, 70)
    context.font = "16px VT323, Trebuchet MS"
    context.fillStyle = "#dbe0c5"
    context.textAlign = "center"
    context.fillText("Use the arrow keys to move and jump.", canvas.width/2, canvas.height/2 + 100)
    context.font = "16px VT323, Trebuchet MS"
    context.fillStyle = "#dbe0c5"
    context.textAlign = "center"
    context.fillText("Reach the final door to win!", canvas.width/2, canvas.height/2 + 120)
}

// Function to clear the canvas
function clearCanvas() {
    context.clearRect(0,0,640,640)
}

// Function to start the game
function startGame(){
    gameStarted = true
    clearCanvas()
    startNextLevel()
    requestAnimationFrame(gameLoop)

    // const interval = setInterval(function(){
    //     clearCanvas()
    //     gameLoop()
    // }, 1000/60)
}

const groundDeath = {
    x: 0,
    y: canvas.height-20,
    width: canvas.width,
    height: 70,
    color: "#303030",
    draw: function() {
        context.fillStyle = this.color
        context.fillRect(this.x,this.y,this.width, this.height)
    }
}

let coinsLevelOne = []
let coinsLevelTwo = []
let coinsLevelThree = []

function drawCoins() {
    context.fillStyle = "#FFF333"
    for (let i = 0; i < coins.length; i++) {
        if(!coins[i].isAbsorbed){
        context.beginPath()
        context.arc(coins[i].x , coins[i].y , 5, 0, 2*Math.PI, true)
        context.fill()
        context.closePath()
    }}
}

let score = 0

function drawScore() {
    context.font = "20px VT323"
    context.fillStyle = "#000000"
    context.textAlign = "center"
    context.fillText(`SCORE: ${score}/300`, canvas.width/2, 25)
}


function drawLevel() {
    context.font = "20px VT323"
    context.fillStyle = "#000000"
    context.textAlign = "center"
    context.fillText(levelDisplay, 40, 25)
}

function detectCoins(){
    coins.forEach((coin, index) => {
        if (coin.isAbsorbed){
            return
        }
        const dist = Math.hypot(coin.x - player.x-player.width/2, coin.y - player.y-player.height/2)
        //console.log(dist)
        if (dist < 26){
            score += 10
            coin.isAbsorbed = true
            collectSound()
        }
    })

}



// COINS IN LEVEL ONE
coinsLevelOne.push({
    x: 415,
    y: 155,
    isAbsorbed: false
})
coinsLevelOne.push({
    x:315,
    y:195,
    isAbsorbed: false
})
coinsLevelOne.push({
    x:345,
    y:195,
    isAbsorbed: false
})
coinsLevelOne.push({
    x:180,
    y:175,
    isAbsorbed: false
})
coinsLevelOne.push({
    x:55,
    y:175,
    isAbsorbed: false
})
coinsLevelOne.push({
    x:300,
    y:65,
    isAbsorbed: false
})
coinsLevelOne.push({
    x:330,
    y:65,
    isAbsorbed: false
})
coinsLevelOne.push({
    x:360,
    y:65,
    isAbsorbed: false
})
coinsLevelOne.push({
    x:390,
    y:65,
    isAbsorbed: false
})
coinsLevelOne.push({
    x:420,
    y:65,
    isAbsorbed: false
})

// COINS IN LEVEL TWO

coinsLevelTwo.push({
    x:140,
    y:195,
    isAbsorbed: false
})
coinsLevelTwo.push({
    x:180,
    y:170,
    isAbsorbed: false
})
coinsLevelTwo.push({
    x:220,
    y:195,
    isAbsorbed: false
})
coinsLevelTwo.push({
    x:260,
    y:195,
    isAbsorbed: false
})
coinsLevelTwo.push({
    x:300,
    y:170,
    isAbsorbed: false
})
coinsLevelTwo.push({
    x:340,
    y:170,
    isAbsorbed: false
})
coinsLevelTwo.push({
    x:380,
    y:195,
    isAbsorbed: false
})
coinsLevelTwo.push({
    x:420,
    y:195,
    isAbsorbed: false
})
coinsLevelTwo.push({
    x:460,
    y:170,
    isAbsorbed: false
})
coinsLevelTwo.push({
    x:500,
    y:195,
    isAbsorbed: false
})

// COINS IN LEVEL 3
coinsLevelThree.push({
    x:550,
    y:155,
    isAbsorbed: false
})
coinsLevelThree.push({
    x:530,
    y:130,
    isAbsorbed: false
})
coinsLevelThree.push({
    x:500,
    y:115,
    isAbsorbed: false
})
coinsLevelThree.push({
    x:470,
    y:130,
    isAbsorbed: false
})
coinsLevelThree.push({
    x:450,
    y:155,
    isAbsorbed: false
})
coinsLevelThree.push({
    x:440,
    y:185,
    isAbsorbed: false
})
coinsLevelThree.push({
    x:435,
    y:215,
    isAbsorbed: false
})
coinsLevelThree.push({
    x:160,
    y:200,
    isAbsorbed: false
})
coinsLevelThree.push({
    x:180,
    y:195,
    isAbsorbed: false
})
coinsLevelThree.push({
    x:200,
    y:200,
    isAbsorbed: false
})



// LEVEL TWO OBSTACLES
let obstaclesArray =[]

class Obstacle {
    constructor(x,y,width,height,speed) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = speed
        
    }
    draw() {
        context.fillStyle = "#c43241"
        context.fillRect(this.x, this.y, this.width, this.height)
    }
    update() {
        this.y +=this.speed
        if(this.y > canvas.height+this.height){
            this.y = - 300
        }
    }
}

function levelTwoObstacles1(){
    for(let i=0; i < 100; i++){
        let spaceY = i*50
        obstaclesArray.push(new Obstacle(100, spaceY, 2, 10, 3))
    }
}
function levelTwoObstacles2(){
    for(let i=0; i < 50; i++){
        let spaceY = i*40
        obstaclesArray.push(new Obstacle(200, spaceY, 2, 8, 5))
    }
}
function levelTwoObstacles3(){
    for(let i=0; i < 80; i++){
        let spaceY = i*60
        obstaclesArray.push(new Obstacle(300, spaceY, 2, 10, 8))
    }
}
function levelTwoObstacles4(){
    for(let i=0; i < 10; i++){
        let spaceY = i*20
        obstaclesArray.push(new Obstacle(400, spaceY, 2, 5, 6))
    }
}
function levelTwoObstacles5(){
    for(let i=0; i < 80; i++){
        let spaceY = i*30
        obstaclesArray.push(new Obstacle(500, spaceY, 2, 10, 5))
    }
}



function handleObstacles(){
    for(let i=0; i < obstaclesArray.length; i++){
        obstaclesArray[i].update()
        obstaclesArray[i].draw()
    }
}

function detectLaser(){
    obstaclesArray.forEach((laser)=> {
       const distance = Math.hypot(laser.x - player.x-player.width/2, laser.y - player.y-player.height/2)
       if (distance < 24){
           console.log("LASER HIT")
           deathSound()
           playerDied()
       }
    })
}





function playerDied() {
    //clearCanvas()
    died = true
    
    context.fillStyle = "#e6c653"
    context.fillRect(canvas.width/2 -200, canvas.height/2 -100, 400, 200)

    context.font = "60px VT323"
    context.fillStyle = "#303030"
    context.textAlign = "center"
    context.fillText("YOU DIED", canvas.width/2, 150)

    context.font = "30px VT323"
    context.fillStyle = "#303030"
    context.textAlign = "center"
    context.fillText(`YOUR SCORE WAS: ${score}/300`, canvas.width/2, 200)

    context.font = "20px VT323"
    context.fillStyle = "#303030"
    context.textAlign = "center"
    context.fillText("Press Enter to try again", canvas.width/2, 250)
    
}


function gameReset(){
    player.x = canvas.width - 50
    player.y = canvas.height - 129
    player.speed = 5
    player.velX = 0
    player.velY = 0
    died = false
    completed = false
    score = 0
    startNextLevel = levelOne
    startNextLevel()
    
    clearCanvas()
    gameLoop()

    //requestAnimationFrame(gameLoop)
}

function coinsReset() {
    coins.forEach((coin) => {
        coin.isAbsorbed = false
    })
}


// Function to draw platforms
function drawPlatforms() {
    context.fillStyle = "#303030"
    for (let i = 0; i < platforms.length; i++) {
        context.fillRect(platforms[i].x , platforms[i].y , platforms[i].width , platforms[i].height)
    }
}



let platforms 
let door 
let coins 

// Function for key consequences and player movement + door collision
function playerMovement(){
    if(keys["ArrowUp"] || keys[" "]) {
        //console.log("Up Key or Space Pressed")
        if(!player.jumping){
            player.velY = -player.jumpStrength*1.5
            player.jumping = true
        }
        jumpSound()
    }
    if(keys["ArrowRight"]) {
        //console.log("Right Key Pressed")
        player.position = "right"
        if(player.velX < player.speed){ //speed of player right
            player.velX++
            swooshSound()
        }
        
    }
    if(keys["ArrowLeft"]) {
        //console.log("Left Key Pressed")
        player.position = "left"
        if(player.velX > -player.speed){ //speed of player left
            player.velX--
            swooshSound()
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
    //COLLIDING WITH THE DOOR
    if (collisionDetection(player, door) ){
        transitionSound()
        startNextLevel()
    } 
    //COLLIDING WITH THE GROUND
    if (collisionDetection(player, groundDeath)){
        deathSound()
        playerDied()
        console.log("DEAD")
    }
    
    if(!died && !completed){
    requestAnimationFrame(gameLoop)
    }
}

let levelDisplay = null
let completed = false
let startNextLevel = levelOne

// Main game loop
function gameLoop(timeStamp) {
    clearCanvas()
    const frame = Math.floor(timeStamp/80) % 13
    canvas.classList.add('levelOne')
    drawCoins()
    player.draw(frame)
    door.draw()
    drawPlatforms()
    detectCoins()
    drawLevel()
    detectLaser()
    handleObstacles()
    groundDeath.draw()
    drawRocks()
    drawGuns()
    drawScore()
    player.position = "idle"
    playerMovement()

    
}

function levelOne(){
    clearCanvas()
    platforms = platformsLevelOne
    door = doorLevelOne
    startNextLevel = levelTwo
    coins = coinsLevelOne
    coinsReset()
    levelDisplay = "Level 1"
    laserAudio.pause()
    player.x = canvas.width - 50
    player.y = canvas.height - 129
    obstaclesArray =[]

}

function levelTwo() {
    clearCanvas()
    platforms = platformsLevelTwo
    door = doorLevelTwo
    startNextLevel = levelThree
    coins = coinsLevelTwo
    coinsReset()
    levelDisplay = "Level 2"
    levelTwoObstacles1()
    levelTwoObstacles2()
    levelTwoObstacles3()
    levelTwoObstacles4()
    levelTwoObstacles5()
    laserAudio.play()
    player.x = 10
    player.y = 80
    

}
function levelThree() {
    clearCanvas()
    platforms = platformsLevelThree
    door = doorLevelThree
    startNextLevel = endGame
    coins = coinsLevelThree
    coinsReset()
    levelDisplay = "Level 3"
    laserAudio.pause()
    player.x = 580
    player.y = 110
    obstaclesArray = []
}

function endGame(){
    clearCanvas()
    context.fillStyle = "#e6c653"
    context.fillRect(canvas.width/2 -200, canvas.height/2 -100, 400, 200)

    context.font = "60px VT323"
    context.fillStyle = "#303030"
    context.textAlign = "center"
    context.fillText("YOU WON!", canvas.width/2, 150)

    context.font = "30px VT323"
    context.fillStyle = "#303030"
    context.textAlign = "center"
    context.fillText(`YOUR SCORE WAS: ${score}/300`, canvas.width/2, 200)

    context.font = "20px VT323"
    context.fillStyle = "#303030"
    context.textAlign = "center"
    context.fillText("Press Enter to play again", canvas.width/2, 250)
    completed= true
    laserAudio.pause()
    obstaclesArray = []
    
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