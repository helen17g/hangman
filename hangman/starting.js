function starting(){
     noLoop();
  
     start = createButton("play");
     start.position(200, 200);
     start.style('background-color', color(300));
     start.mousePressed(readyy);
}

function readyy(){
  loop();
  stroke(0);
  correct = 0;
  lfill = 300;
  tries = 6;
  if(ready==2){
  for(var x in BUTTONS){
      BUTTONS[x].removeAttribute('disabled', '');     
    }
  } 
    ready = 1;

  
}
