class Box {

    constructor(x,y,width,height){
var boxOptions = {
    restitution :0.7,
    friction : 1.0,
    density :0.4

}
this.body = Bodies.rectangle (x,y,width,height,boxOptions) 
this.width = width 
this.height = height 
World.add(world,this.body)

    }
    display(){
        push ()
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        stroke("red")
        strokeWeight (4)
        rectMode(CENTER)
        fill ("yellow")
        rect(0,0,this.width,this.height)
        pop ()
    }
}