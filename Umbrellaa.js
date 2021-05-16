class Umbrellaa{
    constructor(x,y){
        var option = {
            isStatic: true
        }
        this.img = loadImage("walking_1.png");
        this.body= Bodies.circle(x,y,150,option);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        fill("blue");
        imageMode(CENTER);
        image(this.img,pos.x, pos.y,400,400);
    }
}