class Shoot {
    constructor(playerY) {
        this.width = 20;
        this.height = 20;
        this.x = 600;
        this.y = playerY +50;
        
      }

      draw(){
        
        image(game.bulletImage, this.x, this.y, this.width, this.height)
      }

      update(){
        this.x -= 20
      }

      collision(oneZombie) {

		let x = this.x + this.width / 2
		let y = this.y + this.height / 2

		let zombiesX = oneZombie.x + oneZombie.width / 2
		let zombiesY = oneZombie.y + oneZombie.height / 2
		
		if (dist(x, y, zombiesX, zombiesY) > 25) {
			return false
		} else {
            
			
			return true
		}
	} 
}

