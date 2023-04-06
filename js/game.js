class Game {
    
    constructor() {
		this.background = new Background()
		this.player = new Player()
		this.backgroundImage 
		this.playerImage
		this.zombies = []
		this.coinImage
        this.score = 0

        this.moveDownPlayer
        this.moveUpPlayer
    
	}

    preload(){
        this.backgroundImage = loadImage("./assets/images/cemetary-night.jpg")

        
        this.moveUpPlayer = loadGif("./assets/images/player/walking-up-unscreen.gif")
        this.player.playerImage = loadImage("./assets/images/player/standing.png")
        this.moveDownPlayer = loadGif("./assets/images/player/walking-down-unscreen.gif")
        this.gameOverImage = loadImage("./assets/images/BloodOverlay-game-over.png")
        this.bulletImage = loadImage("./assets/images/bullet-g7b8e6e7b8_1280.png")
        this.skullImage = loadImage("./assets/images/png-transparent-embroidered-patch-totenkopf-applique-skull-biker-totenkopf-white-bone-totenkopf-removebg-preview.png")
       
        this.zombiesImages = [
			{ src: loadGif("./assets/images/zombies/pink-hair-walking-unscreen.gif")},
			{ src: loadGif("./assets/images/zombies/normal-walking-unscreen.gif")},
			{ src: loadGif("./assets/images/zombies/normal-zombie-walking-unscreen.gif")},
			{ src: loadGif("./assets/images/zombies/girl-43-unscreen.gif")},
			{ src: loadGif("./assets/images/zombies/bald-walking-unscreen.gif")}
		]

    }

    draw(){
            clear()
            image(game.backgroundImage, 0, 0, width, height)
            
            this.player.draw()

            if (keyIsPressed)  {
                if (keyCode === 32){
                    this.player.shoots.push(new Shoot(this.player.y))
                }
            }
    
            this.player.shoots.forEach(function (shoot) {
                shoot.draw()
                shoot.update()
            }) 
            
        
        if (frameCount % 90 === 0) {
			this.zombies.push(new Zombies(this.zombiesImages[Math.floor(random(4))].src))
		}

        this.zombies.forEach(function (zombie) {
			zombie.draw()
		})
        
        this.zombies = this.zombies.filter(zombies => {
			

			if (zombies.collision(this.player) || zombies.x < 0 - zombies.width) {
				return false
			} else {
				return true
			}
		})

        for (let i = 0; i < this.zombies.length; i++) {
            for (let j = 0; j < this.player.shoots.length; j++) {
              const zombie = this.zombies[i];
              if (zombie.collisionWithBullet(this.player.shoots[j])) {
                // Increase score by 100
                this.score += 1;
                document.querySelector("span").innerHTML = this.score;
                // Remove bullet
                this.player.shoots.splice(j, 1);
                // Remove enemy
                this.zombies.splice(i, 1);
                // Exit loop, because bullet can only hit one enemy
                break;
              }
            }
        
    }
}

}
