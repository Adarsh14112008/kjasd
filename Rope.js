class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.Rope =Matter.Constraint.create(options);
        World.add(world, this.Rope);
    }
    attach(inputBody){
        this.Rope.bodyA = inputBody.body;
    }
    
    fly(){
        this.Rope.bodyA = null;
    }
}