class Player {

    constructor(x,y){

        this.sprite = createSprite(x,y,50,50);
        this.direction = "right"
        this.status = "normal";
        this.sprite.addAnimation("Idle",idlePC);
        this.sprite.addAnimation("Run",runningPC);
        this.sprite.addAnimation("Runback",runBackPC);
        this.sprite.addAnimation("IdleLeft",idleLeftPC);
        this.sprite.addAnimation("Jumpright",jumprightPC);
        this.sprite.addAnimation("Attackright",attackrightPC);
        this.sprite.addAnimation("Attackleft",attackleftPC); 

        this.sprite.scale = 1.2;

        this.sprite.debug = true;

    }

    display(){

    // Gravity
    this.sprite.velocityY+= 0.8;

    if(keyDown(LEFT_ARROW)){

        this.sprite.x-=5;
        this.sprite.changeAnimation("Runback");
        this.direction = "left";
    
    }  else if(keyDown(RIGHT_ARROW)){
    
        this.sprite.x+=5;
        this.sprite.changeAnimation("Run");
        this.direction = "right";
     
    }   else if (this.status == "normal"){
    
        if(this.direction == "right"){
           this.sprite.changeAnimation("Idle");
        }   else{
    
            this.sprite.changeAnimation("IdleLeft");
    
        }
    } 
        
    if(keyWentDown(UP_ARROW)){
    
        this.sprite.velocityY = -12;
        if(this.direction == "right"){
        this.sprite.changeAnimation("Jumpright");
        }else if(this.direction == "left"){

            this.sprite.changeAnimation("Jumpleft");

        }

    }

    if(keyDown("space")){

        this.status = "attack";
       if(this.direction == "right"){
        this.sprite.changeAnimation("Attackright");
       }else{

        this.sprite.changeAnimation("Attackleft");

       }
        setTimeout(()=>{

            this.status ="normal";

        },250);

    }

    }

}