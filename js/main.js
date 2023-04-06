const game = new Game()

function preload(){
    game.preload()
}

function setup(){
    const canvas = createCanvas(750,550)
    canvas.parent("page2")
}

function draw(){
    game.draw()
}



function keyPressed() {
    /* if (keyCode === 38) {
        game.player.jump()
    }

    if (keyCode === 38) {
        game.player.walkUp()
    }

    if (keyCode === 40) {
        game.player.walkDown()
    } */
    if (keyIsDown(ENTER)) {
        location.reload()
    }
}