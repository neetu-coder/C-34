class Rope {
    constructer (body,Fixedpoint){

      var  ropeOptions = {
            bodyA : body,
            pointB : Fixedpoint,
            stiffness : 1.2,
            length : 150 
        }
    this.pointB = Fixedpoint 
    this.rope = Constraint.create (ropeOptions)
    World.add(world,this.rope)

    }
    display(){
        push ()
        stroke (0)
        strokeWeight(4)
        line(this.pointB.x,this.pointB.y,this.rope.bodyA.position.x,this.rope.bodyA.position.y)
   pop ()
    }
}