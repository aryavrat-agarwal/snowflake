class Bg{
    constructor(x,y,r){
        var option = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("snow3.jpg")
        this.body = Bodies.circle(this.x,this.y,this.r,option)
        World.add(world,this.body)
    }
    display(){
        var snowpos=this.body.position
        push()
        translate(snowpos.x,snowpos.y)
        rotate(this.body.angle) 
        fill(225,0,225)
        imageMode(CENTER)
        ellipseMode(RADIUS)
        image (this.image,0,0,this.r*2,this.r*2)
        pop() 
    }
}
