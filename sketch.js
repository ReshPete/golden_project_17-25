var player,pirates ;
var ground;
var idlePC,runningPC,runBackPC,idleLeftPC;
var idleNPC,attackrightPC;
var jumprightPC,attackleftPC;

    function preload(){

        idlePC = loadAnimation("./Animations/Idle_Animations/Idle1.png","./Animations/Idle_Animations/Idle2.png",
        "./Animations/Idle_Animations/Idle3.png","./Animations/Idle_Animations/Idle4.png","./Animations/Idle_Animations/Idle5.png");

        runningPC = loadAnimation("./Animations/Running_Animations/Run1.png","./Animations/Running_Animations/Run2.png",
        "./Animations/Running_Animations/Run3.png","./Animations/Running_Animations/Run4.png","./Animations/Running_Animations/Run5.png",
        "./Animations/Running_Animations/Run6.png")

        runBackPC = loadAnimation("./Animations/Run_back/Rb1.png","./Animations/Run_back/Rb2.png","./Animations/Run_back/Rb3.png",
        "./Animations/Run_back/Rb4.png","./Animations/Run_back/Rb5.png","./Animations/Run_back/Rb6.png");

        idleLeftPC = loadAnimation("./Animations/Idle_left/il1.png","./Animations/Idle_left/il2.png","./Animations/Idle_left/il3.png",
        "./Animations/Idle_left/il4.png","./Animations/Idle_left/il5.png");

        idleNPC = loadAnimation("./Animations/Npc_back/Nb1.png","./Animations/Npc_back/Nb2.png");
        idleNPC.frameDelay = 6;

        jumprightPC = loadAnimation("./Animations/Jumpfront/Nf1.png","./Animations/Jumpfront/Nf2.png","./Animations/Jumpfront/Nf3.png",
        "./Animations/Jumpfront/Nf4.png","./Animations/Jumpfront/Nf5.png");

        attackrightPC = loadAnimation("./Animations/Attackright/sprite_1.png","./Animations/Attackright/sprite_2.png",
        "./Animations/Attackright/sprite_3.png","./Animations/Attackright/sprite_4.png");

        attackrightPC.frameDelay = 1;

        attackleftPC = loadAnimation("./Animations/Attackleft/sprite_1.png","./Animations/Attackleft/sprite_2.png",
        "./Animations/Attackleft/sprite_3.png","./Animations/Attackleft/sprite_4.png");

    }

function setup() {
createCanvas(windowWidth,windowHeight);
ground = createSprite(windowWidth/2,windowHeight*10/11,windowWidth*100,windowHeight*1/3);
player = new Player(windowWidth/5,windowHeight*2/3);

pirates = [];
pirates.push(new Pirates(windowWidth/2,windowHeight*2/3));
pirates.push(new Pirates(windowWidth/1.5,windowHeight*2/3));

}

function draw(){
background("black");
    player.sprite.collide(ground);

    
  for (var p in pirates){

    pirates[p].display();
    pirates[p].sprite.collide(ground);

}

player.display();

drawSprites();

}