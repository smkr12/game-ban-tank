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
        this.sprite.src = "images/tank_power_right_c0_t2_f.png"
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(context) {
        context.drawImage(this.sprite,this.x,this.y);
    }
}