var diamR = 150;
var diamB=150;
var diamP=150;
var diamG=150;
var diamO=150;
var diamN=150;

function setup() {
  // put setup code here
    createCanvas(1000,1000);
}

function draw() {
  // put drawing code here
    background("yellow");
    noStroke();
    fill("darkred");
    ellipse(100,100,100,diamR);
    fill("red");
    ellipse(250,150,100,diamR);
    fill("green");
    ellipse(375,100,100,diamG);
    fill("orange");
    ellipse(490,150,100,diamO);
    fill("pink");
    ellipse(650,100,100,diamP);
    fill("lightgreen");
    ellipse(775,150,100,diamG);
    fill("lightblue");
    ellipse(890,100,100,diamB);
    fill("darkblue");
    ellipse(375,280,100,diamB);
    fill("brown");
    ellipse(600,280,100,diamN);
    fill("pink");
    ellipse(100,600,100,diamP);
    fill("blue");
    ellipse(250,680,100,diamB);
    fill("lightgreen")
    ellipse(400,800,100,diamG);
    fill("red")
    ellipse(400,600,100,diamR);
    fill("darkred")
    ellipse(550,600,100,diamR);
    fill("orange")
    ellipse(600,780,100,diamO);
    fill("darkblue");
    ellipse(690,600,100,diamB);
    fill("green")
    ellipse(780,780,100,diamG);
    fill("lightblue");
    ellipse(850,600,100,diamB);
    fill("brown")
    ellipse(150,850,100,diamN);
    fill("black");
    textSize(100);
    textFont("Georgia");
    textStyle(ITALIC);
    text('Happy Birthday',125,450);
    //diam1 = diam1+5;
}
function keyTyped(){
    if (key==="r"){
        diamR=0;
    }else if (key==="b"){
        diamB=0;
    }else if (key==="p"){
        diamP=0;
    }else if (key==="g"){
        diamG=0;
    }else if (key==="o"){
        diamO=0;
    }else if (key==="n"){
        diamN=0;
    }
        
}
   