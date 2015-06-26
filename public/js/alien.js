var countAlien=0;
var speed=1;
function Alien(canvas,scene,stage){
    if(countAlien%10==0){
        speed+=.3;
    }
    
    
    var that=this;
    this.scene=scene;
    this.canvas=canvas;
    this.stage=stage;
    this.number=countAlien++;
    
    this.entity= Class.New("Entity", [stage]);
    this.entity.rect(90,70); // square
    
    
    this.entity.position(Math.random()*(width-100), -100);
    //this.entity.el.fillStyle = "red";
    
    this.el=this.entity.el;
    this.el.that=this;
    
    
     //this.el.fillStyle = "red";
     //   this.el.fillRect(0, 0, 90, 70);
    this.stage.append(this.el);
    this.animation=null;
    
    
    this.createAnimation();

    this.el.on('click',function(e,mouse){
       console.log("holaaaaa mundo"+that.number); 
    });
    this.delete=function(){
        this.el.remove();
        console.log("Remove");
        this.scene.delete(this);
    };
    
   this.el.x=200;
    
    this.direction=Math.random()>.5;
    this.shock=false;
};

Alien.prototype.createAnimation=function(){
    this.animation = this.canvas.Animation.new({
        images: "greenAlienSprite",
        animations: {
            move: {
               frames: [0, 9],
                    size: {
                        width: 100,
                        height: 100
                    },
                frequence: 1.5
            }
        }
    });
    this.animation.add(this.el);
};
 
Alien.prototype.render = function(){
    if(this.shock){
        return;
    }
   // console.log("X:"+this.x);
    //   console.log("W"+width);
   if(this.el.x>(width-100)){
       this.direction=false;
   }
   if(this.el.x < 0){
       this.direction=true;
   }

   if(this.direction){
       this.entity.move(1*speed,.5*speed);
   }else{
       this.entity.move(-1*speed,.5*speed);
   }
   if(this.el.y > height){
      this.delete(this);
      this.scene.end();
      // alert("has perdido u.u");
   } 
}   






function AlienShip(canvas,scene,stage){
    Alien.call(this, canvas,scene,stage);
};

AlienShip.prototype= Object.create(Alien.prototype);
AlienShip.prototype.constructor=Alien;

AlienShip.prototype.createAnimation=function(){
    this.animation = this.canvas.Animation.new({
       images: "shipAlienSprite",
       animations: {
           move: {
              frames: [0, 9],
                   size: {
                       width: 100,
                       height: 100
                   },
               frequence: 1.5
           }
       }
   });
   this.animation.add(this.el);
};

AlienShip.prototype.render = function(){
    if(this.shock){
        return;
    }

   if(this.el.x>(width-100)){
       this.direction=false;
   }
   if(this.el.x < 0){
       this.direction=true;
   }

   if(this.direction){
       this.entity.move(2*speed,.5*speed);
   }else{
       this.entity.move(-2*speed,.5*speed);
   }
   if(this.el.y > height){
       this.delete(this);
        this.scene.end();
   } 
}   




function Pig(canvas,scene,stage){
    Alien.call(this, canvas,scene,stage);
};

Pig.prototype= Object.create(Alien.prototype);
Pig.prototype.constructor=Alien;

Pig.prototype.createAnimation=function(){
    this.animation = this.canvas.Animation.new({
       images: "pigSprite",
       animations: {
           move: {
              frames: [0, 9],
                   size: {
                       width: 100,
                       height: 100
                   },
               frequence: 1.5
           }
       }
   });
   this.animation.add(this.el);
};

Pig.prototype.render = function(){
    if(this.shock){
        return;
    }

   if(this.el.x>(width-100)){
       this.direction=false;
   }
   if(this.el.x < 0){
       this.direction=true;
   }

   if(this.direction){
       this.entity.move(2*speed,.5*speed);
   }else{
       this.entity.move(-2*speed,.5*speed);
   }
   if(this.el.y > height){
      this.delete();
      this.scene.end();
   } 
}   