class Bat {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("bat1.png");
        this.bat = Bodies.circle(x,y,10,options);
        this.radius = 10;
        World.add(world, this.bat)
    }

    display(){
        var pos = this.bat.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}