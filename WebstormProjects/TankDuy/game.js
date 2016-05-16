/**
 * Created by Duy_2 on 2016-05-16.
 */
var context;
var tank;
var tankX = 100;
var tankY = 100;
var speedX = 0;
var speedY = 0;

window.onLoad = function(){
    var canvas =  document.createElement("canvas");
    context = canvas.getContext("2d"); // draw
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    gameStart();
    setInterval(gameLoop, 17);
};

function gameStart(){
    tank = new Tank(100,100);
}

function gameDrawer(context){
    context.fillStyle = "black";
    context.fillRect(0,0,window.innerWidth,window.innerHeight);
    context.drawImage(tank,tank.tankX,tank.tankY);
}

var gameLoop = function(){
    gameUpdate();
    gameDrawer(context);
}

window.onkeydown = function(e){
    switch (e.keyCode){
        case 65: // A
            tank.speedX = -3
            tank.src = "images/tank_power_left_c0_t2_f.png"
            break;
        case 68: // D
            tank.speedX = 3;
            tank.src = "images/tank_power_right_c0_t2.png"
            break;
        case 83: // S
            tank.speedY = 3;
            tank.src = "images/tank_power_down_c0_t2_f.png"
            break;
        case 87: // W
            tank.speedY = -3;
            tank.src = "images/tank_power_up_c0_t2_f.png"
            break;
    }
}

window.onkeyup = function(e){
    speedX = 0;
    speedY = 0;
}

function gameUpdate(){
    tankX += speedX;
    tankY += speedY;
}

