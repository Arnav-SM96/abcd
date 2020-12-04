class Dustbin{
    constructor(x,y,width,height)
    {
         var options= {
        restitution: 0.3 ,
        friction:0.5,
            density:1.2,
            isStatic:true
      
    } 
    this.image = loadImage("dustbingreen.png");
	
    this.bb1=Bodies.rectangle(1380,650,250,70,{isStatic:true});
//	this.b1=createSprite(1380,650,250,30);
//	this.b1.shapeColor=color(225,0,0);
	

	this.bb2=Bodies.rectangle(1260,560,70,200,{isStatic:true});
//	this.b2=createSprite(1260,560,30,200);
//	this.b2.shapeColor=color(225,0,0);

	this.bb3=Bodies.rectangle(1500,560,70,200,{isStatic:true});
//	this.b3=createSprite(1500,560,30,200);
//	this.b3.shapeColor=color(225,0,0);
    
    //World.add(world,this.b1); 
   // World.add(world,this.b2);
  //  World.add(world,this.b3);
    World.add(world,this.bb1);
    World.add(world,this.bb2);
    World.add(world,this.bb3);
    
    }
    display()
    { //var pos = this.body.position;
        //var angle=this.body.angle;
        push();
        //translate(pos.x,pos.y);
       
        
	

    //image(this.image,0,0,this.r,this.r);
    //ellipse(0,0,this.width,this.height);
    imageMode(CENTER);
    image(this.image,1380,560,280,200);
    image.scale=15;
    pop();
    }
    }