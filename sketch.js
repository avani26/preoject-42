
var hr,mn,sc;

function setup() {
  createCanvas(800,400);
angleMode(DEGREES);


}

/*
text('Current hour:\n'+ h,5,50)
text('Current minute:\n'+ m ,5,50)
(text('Current second:\n'+ s,5,50)
*/

function draw() {
  background(255,255,255);  

      text("clock",150,20);
      translate(200,200);
      hr=hour();
      mn=minute();
      sc=second();

      rotate(-90);
      strokeWeight(8);
      stroke("blue");
      noFill();

      var sec=map(sc,0,60,0,360);
      arc(0,0,300,300,0,sec);
      push ();
      rotate(sec);
      strokeWeight(7);
      stroke("blue");
      line(0,0,100,0);
      pop ();


 strokeWeight(8);
      stroke("yellow");
      noFill();
      
      var min=map(mn,0,60,0,360);
      arc(0,0,280,280,0,min);
      push ();
      rotate(min);
      strokeWeight(7);
      stroke("yellow");
      line(0,0,75,0);
      pop ();

strokeWeight(8);
      stroke("red");
      noFill();
      
      var h=map(hr%12,0,12,0,360);
      arc(0,0,260,260,0,h);
      push ();
      rotate(h);
      strokeWeight(7);
      stroke("red");
      line(0,0,50,0);
      pop ();

      push ();
      stroke("white");
      point(0,0);
      pop ();

}