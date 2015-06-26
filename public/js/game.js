var $canvas = $('#chickenGame');



var chickenOut;
var scene;
var canvas = CE.defines("chickenGame").
        extend(Input).
        extend(Animation).
        extend(Text).
        extend(Hit).
        ready(function () {
            canvas.Scene.call("MyScene");
        });
var canvas2 = document.getElementById("chickenGame");

canvas2.width = document.body.clientWidth; //document.width is obsolete
canvas2.height = document.body.clientHeight; //document.height is obsolete
var width = canvas2.width;
var height = canvas2.height;

var line;

var line11;

var alien1,alien2;

canvas.Scene.new({
    name: "MyScene",
    materials: {
        images: [
            {chicken_sprite: "img/chicken_sprite.png"},
            {greenAlienSprite: "img/greenAlienSprite.png"},
            {shipAlienSprite: "img/shipAlienSprite.png"},
            {pigSprite: "img/pigSprite.png"},
            {background: "img/background.png"},
            {alien: "img/balien0.png"},
            {alienr: "img/ralien0.png"}
        ], 
        sounds: [
            {chicken: "sound/chicken2.mp3"},
            {hit0: "sound/pop.mp3"},
            {hit1: "sound/pop.mp3"},
            {hit2: "sound/pop.mp3"},
            {hit3: "sound/pop.mp3"},
            {music: "sound/main.mp3"}
        ]
    },
    called: function (stage) {
        scene=this;
        var that=this;
        //Chicken.prototype=this.createElement();
        
        var chicken,line1,line2,background;
       
        this.line1 = line1 = this.createElement();
        this.line2 = line2 = this.createElement();
        this.background = background =this.createElement(width,height);
        this.background.fillStyle="white";
        this.background.fillRect();
        this.circle=this.createElement(200,200);
        
        this.circle.x=width / 2 ;
        this.circle.y=height * (2 / 3)+50;
        this.circle.opacity=0;
        this.circle.fillStyle="black";
        this.circle.fillCircle();
        
        stage.append(this.background,this.line1,this.line2,this.circle);
        
        
        
        this.aliens=[];
        this.delete=function(el){
            for( var i=0; i<this.aliens.length; i++ ){
                if(this.aliens[i]===el){
                    delete this.aliens[i];
                    return;
                }
            }
        };
        console.log("Aliens",that.aliens);
        
        this.aliens.push(new Alien(canvas,this,stage));
        this.aliens.push(new AlienShip(canvas,this,stage));
      
        this.textElement=this.createElement();
        this.text = canvas.Text.new(this, "Papantla");
        this.text.style({
            size: "18px",
            lineWidth: 300,
            color: "black"
        }).draw(this.textElement, 20, 20, {
            line: { // Animation
                frames: 50
            }
        });
        
        this.textElement2=this.createElement();
        this.text2 = canvas.Text.new(this, "Papantla");
        this.text2.style({
            size: "25px",
            lineWidth: 300,
            color: "black",
            border: "2px solid white"
        }).draw(this.textElement2,  0, 0, {
            line: { // Animation
                frames: 50
            }
        });
        
        this.endCounter=0;
        this.finalizar=false;
        this.end=function(){
            this.textElementFinish=this.createElement();
            this.textFinish = canvas.Text.new(this, "Game Over"+"\nTus puntos\n son:"+this.hitCounter);
            this.textFinish.style({
                size: "50px",
                lineWidth: 300,
                color: "black", 
                border: "2px solid white"
            }).draw(this.textElementFinish, 0,0, {
                line: { // Animation
                    frames: 10
                }
            });
            this.textElementFinish.x=width/2-120;
            this.textElementFinish.y=height/2-20;
          
            stage.append(this.textElementFinish);
          //  stage.append(this.textPointsA);
            
            this.finalizar=true;
        };
        
      
        stage.append(this.textElement,this.textElement2);
        this.chicken = chicken = chickenOut = new Chicken(canvas,this,stage);
        
    

        background.on("drag", function (e, mouse) {
            that.chicken.move(e);
            console.log("Draggin on back");
        });


        background.on("dragstart", function (e, mouse) {
            if(!that.dragging){
                that.chicken.startX = that.chicken.el.x;
                that.chicken.startY = that.chicken.el.y;
                that.dragging = true;
            }
        //     that.text.refresh("Start Dragging");
        });

        background.on("click", function (e, mouse) {
            console.log(mouse.x-50,mouse.y-50, chicken.startX,chicken.startY);
            // that.text.refresh("Click back"+chicken.clicked);
            if(chicken.clicked){
                chicken.velX=chicken.startX-mouse.x+50;
                chicken.velY=chicken.startY-mouse.y+50;
                chicken.x0=chicken.el.x;
                chicken.y0=chicken.el.y;
                chicken.flying=true;
                chicken.clicked = !chicken.clicked;
                canvas.Sound.get("chicken").play();
            }
        });
        
        background.on("dragend", function (e, mouse) {
            chicken.dragging = false;

            chicken.velX=chicken.startX-chicken.el.x;
            chicken.velY=chicken.startY-chicken.el.y;
            chicken.x0=chicken.el.x;
            chicken.y0=chicken.el.y;
            
            chicken.flying=true;
            //that.text.refresh("Dragging END");
            canvas.Sound.get("chicken").play();
         //   console.log("DragEnd Back");
        });

        
    },
    preload: function (stage, pourcent, material) {
        console.log(material);
        //this.chicken.draw("chicken",200,200,pourcent+'%');
    },
    ready: function (stage) {
        this.background.drawImage("background",(width-800)/2,(height-600)/2);
     
        canvas.Input.keyDown(Input.A, function (e) {
            console.log("A is pressed");
        });
        this.index = 0;
        
   
        
        this.aliens.forEach(function(alien){
            alien.animation.play('move','loop');
        });
        
        
         
        this.counter=0;
        this.time=100;
        canvas.Sound.get("music").play();
        this.hitCounter=0;
        this.endCounter=0;
    },
    render: function (stage) {
        
        var points = this.hitCounter;
        if(this.finalizar){
            this.endCounter++;
            console.log(this.endCounter);
            if(this.endCounter>100){
              this.pause(true);
                setTimeout(function(){
                    ajax('post','Games/insertPoints/'+user_id+'/'+points,null, function(){
                        window.location="profile";
                    }, function(){
                        console.error("Error");
                    })
                },5000);
            }
        }
        
        
        var that=this;
        this.aliens.forEach(function(alien){
            alien.render();
           // console.log(that.chicken.entity);
            alien.entity.hit([that.chicken.entity], function(state, el) {
                if(that.chicken.flying){
                    el.remove();
                    
                    that.text2.refresh("+"+that.chicken.pointMultiplier);
                    that.textElement2.x=el.x;
                    that.textElement2.y=el.y;
                    that.hitCounter+=that.chicken.pointMultiplier;
                    that.chicken.pointMultiplier*=2;
                    canvas.Sound.get("hit"+that.hitCounter%4).play();
                    
                    that.delete(el.that);

                } 
            });
        });
       
        this.chicken.render();
        
        this.counter++;
 
    if(this.counter%this.time===0){
        var random=Math.floor(Math.random()*3);
        switch(random){
            case 0:
                var nuevoAlien=new AlienShip(canvas,this,stage);
                break;
            case 1:
                var nuevoAlien=new Alien(canvas,this,stage);
                break;
            default:
                var nuevoAlien= new Pig(canvas,this,stage);
                break;
        }
       
        nuevoAlien.animation.play('move','loop');
        this.aliens.push(nuevoAlien);
        this.text.refresh("Puntos:"+this.hitCounter);
    }
    
        stage.refresh();
    }
});	