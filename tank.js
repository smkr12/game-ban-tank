/**
 * Created by Duy_2 on 2016-05-16.
 */
class Tank{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.sprite = new Image();
        this.spriteUp = new Image();
        this.spriteDown = new Image();
        this.spriteLeft = new Image();
        this.spriteRight = new Image();
        this.sprite.src = "images/tank_power_right_c0_t2_f.png"
        this.spriteUp.src = "images/tank_power_up_c0_t2_f.png"
        this.spriteDown.src = "images/tank_power_down_c0_t2_f.png"
        this.spriteLeft.src = "images/tank_power_left_c0_t2_f.png"
        this.spriteRight.src = "images/tank_power_right_c0_t2_f.png"
        this.direction = 1;
    }
    
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(context) {
        context.drawImage(this.sprite,this.x,this.y);
    }
    move(direction){
        switch(direction) {
            case 1: // UP
                this.speedY = -3;
                this.speedX = 0;
                this.sprite = this.spriteUp;
                this.direction = direction;
                break;
            case 2: // Down
                this.speedY = 3;
                this.speedX = 0;
                this.sprite = this.spriteDown;
                this.direction = direction;
                break;
            case 3: // Left
                this.speedX = -3;
                this.speedY = 0;
                this.sprite = this.spriteLeft;
                this.direction = direction;
                break;
            case 4: //Right
                this.speedX = 3;
                this.speedY = 0;
                this.sprite = this.spriteRight;
                this.direction = direction;
                break;
        }
    }
}