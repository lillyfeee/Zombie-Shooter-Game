class Zombies {
    constructor(image){
        this.image = image 
        this.x = 0
        this.width = 60
		this.height = 80
		this.velocity = 1
        this.y = Math.floor(Math.random() * ((height-80) - (height/2) +1) + height/2)
    }

    draw() {
		this.x += 1
		image(this.image, this.x, this.y, this.width, this.height)
	}

     collision(playerInfo) {

		let zombiesX = this.x + this.width / 2
		let zombiesY = this.y + this.height / 2

		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		
		if (dist(zombiesX, zombiesY, playerX, playerY) > 25) {
			return false
		} else {
            background("black")
		    fill("red")
            textSize(30)
            text("YOU ARE A ZOMBIE NOW!", 200, 300)
            text("press enter to replay", 200,400)
            image(game.gameOverImage, 0, 0, 750, 550) 
            image(game.skullImage, 330, 160, 100, 100)
            


            noLoop()
			
			return true
		}
	} 

    collisionWithBullet(playerInfo) {

		let zombiesX = this.x + this.width / 2
		let zombiesY = this.y + this.height / 2

		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		
		if (dist(zombiesX, zombiesY, playerX, playerY) > 25) {
			return false
		} else {
			
			return true
		}
	} 
}