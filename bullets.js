/**
 * Created by Duy_2 on 2016-05-18.
 */
class Bullets{
    constructor(x,y,direction){
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.sprite = new Image();
        this.spriteUp = new Image();
        this.spriteDown = new Image();
        this.spriteLeft = new Image();
        this.spriteRight = new Image();
        this.sprite = "images/bullet_right.png"
        this.spriteUp.src = "images/bullet_up.png";
        this.spriteDown.src = "images/bullet_down.png";
        this.spriteLeft.src = "images/bullet_left.png";
        this.spriteRight.src = "images/bullet_right.png";
        this.direction = 1;
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY
    }

    draw(context){
        context.drawImage(this.sprite,this.x,this.y);
    }

    fire(direction){
        switch(direction) {
            case 1: // Up
                this.sprite = this.spriteUp;
                this.direction = direction;
                this.speedY = -10;
                this.speedX = 0;
                break;
            case 2: // Down
                this.sprite = this.spriteDown;
                this.direction = direction;
                this.speedY = 10;
                this.speedX = 0;
                break;
            case 3: // Left
                this.sprite = this.spriteLeft;
                this.direction = direction;
                this.speedY = 0;
                this.speedX = -10;
                break;
            case 4: // Right
                this.sprite = this.spriteRight;
                this.direction = direction;
                this.speedY = 0;
                this.speedX = 10;
                break
        }
    }
}

