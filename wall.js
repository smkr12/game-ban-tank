/**
 * Created by Duy_2 on 2016-05-19.
 */

class Wall{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.sprite = new Image();
        this.spriteBrick = new Image();
        this.spriteSteel = new Image();
        this.spriteTree  = new Image();
        this.spriteWater = new Image();
        this.sprite.src = "images/wall_brick.png";
        this.spriteBrick.src = "images/wall_brick.png"
        this.spriteSteel.src = "images/wall_steel.png";
        this.spriteTree.src = "images/trees.png";
        this.spriteWater.src = "images/water_1.png"
    }
    
    draw(context){
        context.drawImage(this.sprite, this.x, this.y);
        context.drawImage(this.sprite, this.x, this.y+16);
        context.drawImage(this.sprite, this.x+16, this.y+16);
        context.drawImage(this.sprite, this.x+16, this.y);
    }
}