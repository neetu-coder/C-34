class Ball {
    constructor(x,y,r){
      var  ballOptions = {
          isStatic : false,
           density : 1,
           frictionAir : 0.004
  }

  this.r = r 
  this.body = Bodies.circle (x,y,r,ballOptions)
  World.add(world,this.body)

    }
display (){

    push ()
    translate (this.body.position.x,this.body.position.y)
    rotate (this.body.angle)
 circle(0,0,this.r)
 pop ()
}

}