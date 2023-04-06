class Player {
    constructor() {
      this.width = 100;
      this.height = 140;
      this.x = 600;
      this.y = 430;
      this.velocity = 0;
      this.score = 0;
      this.gravity = 0.5 ;
      this.shoots = []
      
    }
  
    draw() {
     
        if (keyIsDown(UP_ARROW)) {
            if (this.y > 0){
                this.walkUp()
                image(game.moveUpPlayer, this.x, this.y, this.width, this.height);
            }
            }
           
        else if (keyIsDown(DOWN_ARROW)) {
            if(this.y < height - this.height){
                this.walkDown()
                image(game.moveDownPlayer, this.x, this.y, this.width, this.height);
            }
            }
           
        else
            image(this.playerImage, this.x, this.y, this.width, this.height);

    }
    
    walkDown(){
        this.y += +5;
    }

    walkUp(){
        this.y -= 5;
    } 

    shoots() {
        let shoot = new Shoot(this);
        this.shoots.push(shoot);
      }

}
  
 
