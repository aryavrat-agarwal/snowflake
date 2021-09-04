class Snow2{
    constructor(x,y,r){
        var option = {
            restitution:0,
        }
        this.r=r
        this.x=x
        this.y=y
        this.image=loadImage("snow4.webp")
        this.body = Bodies.circle(this.x,this.y,this.r,option)
        World.add(world,this.body)
    }
    display(){
        var snowpos=this.body.position
        var angle=this.body.angle 
        push()
        translate(snowpos.x,snowpos.y)
        rotate(this.body.angle) 
        fill(225,0,225)
        imageMode(CENTER)
        ellipseMode(RADIUS)
        image (this.image,100,0,this.r*2,this.r*2)
        pop() 
    }
}