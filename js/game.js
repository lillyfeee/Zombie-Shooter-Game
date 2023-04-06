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
        this.backgroundImage = loadImage("assetsimagescemetary-night.jpg")

        
        this.moveUpPlayer = loadGif("assetsimagesplayerwalking-up-unscreen.gif")
        this.player.playerImage = loadImage("assetsimagesplayerstanding.png")
        this.moveDownPlayer = loadGif("assetsimagesplayerwalking-down-unscreen.gif")
        this.gameOverImage = loadImage("assetsimagesBloodOverlay-game-over.png")
        this.bulletImage = loadImage("assetsimagesbullet-g7b8e6e7b8_1280.png")
        this.skullImage = loadImage("assetsimagespng-transparent-embroidered-patch-totenkopf-applique-skull-biker-totenkopf-white-bone-totenkopf-removebg-preview.png")
       
        this.zombiesImages = [
			{ src: loadGif("assetsimageszombiespink-hair-walking-unscreen.gif")},
			{ src: loadGif("assetsimageszombiesnormal-walking-unscreen.gif")},
			{ src: loadGif("assetsimageszombiesnormal-zombie-walking-unscreen.gif")},
			{ src: loadGif("assetsimageszombiesgirl-43-unscreen.gif")},
			{ src: loadGif("assetsimageszombiesbald-walking-unscreen.gif")}
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
console.log("array", this.shoots)
        
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
