/**
 * Created by Duy_2 on 2016-05-16.
 */
var context;
var tank;
var bullets;

window.onload = function(){
    var canvas =  document.createElement("canvas");
    context = canvas.getContext("2d"); // draw
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    gameStart();
    createMap();
    
    map[0][10]=1;
    
    setInterval(()=>{
        tank.update();
        bullets.update();
        gameUpdate();
        gameDrawer(context);
    }, 17);
};

function gameStart(){
    tank = new Tank(100,100);
    bullets = new Bullets(0,0,1);
}

function gameDrawer(context){
    context.fillStyle = "black";
    context.fillRect(0,0,window.innerWidth,window.innerHeight);
    tank.draw(context);
    bullets.draw(context);
    drawmap(context);
}

function gameUpdate(){
    tank.update();
    bullets.update();
}

window.onkeydown = function(e){
    switch (e.keyCode){
        case 87: // W
            tank.move(1);
            break; 
        case 83: // S
            tank.move(2);
            break;
        case 65: // A
            tank.move(3);
            break;
        case 68: // D
            tank.move(4);
            break;
        case 32: // Spacebar
            bullets.x = tank.x;
            bullets.y = tank.y;
            bullets.fire(tank.direction);
            break;
    }
}

window.onkeyup = function(e){
    switch(e.keyCode) {
        case 87:
            if (tank.speedY < 0) {
                tank.speedY = 0;
                tank.sprite = tank.spriteUp;
            }
            break;
        case 83:
            if (tank.speedY > 0) {
                tank.speedY = 0;
                tank.sprite = tank.spriteDown;
            }
            break;
        case 65:
            if (tank.speedX < 0) {
                tank.speedX = 0;
                tank.sprite = tank.spriteLeft;
            }
            break;
        case 68:
            if (tank.speedX > 0) {
                tank.speedX = 0;
                tank.sprite = tank.spriteRight;
            }
            break;
        case 32:
            if(bullets.speedX != 0 || bullets.speedY !=0){
                bullets.speedX = 0;
                bullets.speedY = 0;
                bullets.fire(tank.direction);
            }
            break;
    }
}



