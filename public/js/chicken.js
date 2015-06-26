    
var gravity= 9.81/2;
var count=0;
function Chicken(canvas,scene,stage){
    var that=this;
    this.count=count++;
    
    this.scene=scene;
    this.canvas=canvas;
    this.stage=stage;
    
    this.entity= Class.New("Entity", [stage]);
    this.el=this.entity.el;
    stage.append(this.el);
    
    this.el.that=this;
    
    this.dragging = false;
    this.clicked = false;
    this.flying=false;
    this.originX = width / 2 - 50;
    this.originY = height * (2 / 3) ;
    this.t=0;

    this.entity.rect(80,60);
    this.entity.position(this.originX,this.originY);
   
  // this.el.fillStyle = "red";
   //     this.el.fillRect(0, 0, 80, 60);
    this.static = function () {
        this.animation.play("quiet");
    };
    this.pointMultiplier=100;
    this.fly = function(){
        this.t+=.2;
        var t=this.t;
        this.entity.position(
                this.velX*t +this.x0,
                gravity*(t*t)+this.velY*t+this.y0);
        if(this.el.y>height){
            this.entity.position(this.originX,this.originY);
           
            this.flying=false;
            this.t=0;
            this.pointMultiplier=100;
        }
    };

    
    this.move = function (e) {
        var maxRadious = 120;
        this.entity.position(
                this.startX + e.gesture.deltaX,
                this.startY + e.gesture.deltaY);
        var deltaX = this.el.x - this.originX;
        var deltaY = this.el.y - this.originY;
        var actualRadious = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (actualRadious > maxRadious) {
            this.entity.position(
                this.originX + maxRadious * deltaX / actualRadious,
                this.originY + maxRadious * deltaY / actualRadious);
        }
    };
    
    this.animation = this.canvas.Animation.new({
        images: "chicken_sprite",
        animations: {
            quiet:{
                frames: [0, 0],
                frequence:1,
                size: {
                        width: 100,
                        height: 100
                    },
            },
            move: {
               frames: [1, 14],
                    size: {
                        width: 100,
                        height: 100
                    },
                frequence: 1.5
            }
        }
    });
    
    this.animation.add(this.el);
    
    this.el.on("dragstart", function (e, mouse) {
        if(!that.dragging){
            that.startX = that.el.x;
            that.startY = that.el.y;
            that.dragging = true;
            that.scene.circle.opacity=.25;
        }
       // that.text.refresh("Start Dragging");
    });
    
    this.el.on("dragend", function (e, mouse) {
        that.dragging = false;
        that.velX=that.startX-that.el.x;
        that.velY=that.startY-that.el.y;
        that.x0=that.el.x;
        that.y0=that.el.y;

        that.flying=true;
        canvas.Sound.get("chicken").play();
        //that.text.refresh("Dragging END Chicken");
         that.scene.circle.opacity=0;
        console.log("DragEnd chicken");
    });
    
    this.el.on("click", function (e, mouse) {
         //  that.text.refresh("Click chicken");
         //console.log("Click chicken");
          console.log("Click Chicken inside"+that.count);
         if(!that.dragging && !that.flying){
            if(that.clicked){
                that.velX=that.startX-mouse.x+50;
                that.velY=that.startY-mouse.y+50;
                that.x0=that.el.x;
                that.y0=that.el.y;
                that.flying=true;
                canvas.Sound.get("chicken").play();
            }else{
                that.startX = that.el.x;
                that.startY = that.el.y;
            }
            that.clicked = !that.clicked;
        }
    });
    
    
    
    this.el.on("drag", function (e, mouse) {
        that.move(e);

        //that.text.refresh("Dragging");
        var line2=that.line2;
      //  line1.x=(this.el.x+10)/that.line1.scaleX;
       // line1.scaleY=e.gesture.deltaY;
    //   console.log(e.gesture.angle);
        //that.line1.rotate(e.gesture.angle);
        /*
        line2.strokeStyle="#552200"; 
        line2.beginPath();
        line2.moveTo(that.originX+90,that.originY+50);
        line2.lineTo(that.el.x+80,that.el.y+50);
        line2.stroke(); 
        line2.lineWidth=2;
        */
    });
    
    this.stop=false;
    this.render = function () {
        if(this.stop){
            return;
        }
        if (this.dragging || this.clicked) {
            this.animation.play("move", "loop");
        } else if(this.flying){
            this.animation.play("move", "loop");
            this.fly();
        } else {
            this.static();
        }
    };
}

