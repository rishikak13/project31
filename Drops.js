class Drops{
    constructor(x,y){
        var option = {
            friction : 0.001,
            restitution: 0.1
        }
        this.rain= Bodies.circle(x,y,5,option);
        World.add(world,this.rain);
    }
    display(){
        var pos = this.rain.position
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y,5,5);
    }
    updateY(){
        if(this.rain.position.y >height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,200)})
        }
    }
}