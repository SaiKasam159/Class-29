class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingshot1 = loadImage('sprites/sling1.png')
        this.slingshot2 = loadImage('sprites/sling2.png')
        this.slingshot3 = loadImage('sprites/sling3.png')
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        image(this.slingshot1, 210, 50)
        image(this.slingshot2, 180, 50)
        
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(7);
            if(pointA.x<220){
                line(pointA.x+10, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+10, pointA.y, pointB.x+30, pointB.y);
                image(this.slingshot3, pointA.x-30, pointA.y-10, 15, 30)
            
            }
            
            else{

                line(pointA.x+10, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+10, pointA.y, pointB.x+30, pointB.y);
                image(this.slingshot3, pointA.x+25, pointA.y-10, 15, 30)
            }



            
        }
    }
    
}