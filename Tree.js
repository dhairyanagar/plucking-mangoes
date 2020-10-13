class Tree {
constructor(x,y,width,height){
var options={
    isStatic:true,
    'restitution':0,
    'friction':1.0,
    'density':1.2,
}
this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking+mangoes/tree.png");
        World.add(world,this.body);
}
display(){

this.image(this.image,0,0,this.width,this.width);
rectMode(CENTER);
rect(0,0, this.width, this.height);
}

}