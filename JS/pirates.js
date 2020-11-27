class Pirates {

    constructor(x,y){

        this.sprite = createSprite(x,y,55,55);
        this.sprite.shapeColor = "red";
        this.sprite.addAnimation("Npcleft",idleNPC);
        
        this.sprite.scale = 0.7
    }

    display(){

        this.sprite.velocityY+=0.9;

    }

}