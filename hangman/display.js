function display(letter){
  correct = correct + 1; 

  print("correct answers " + correct);
      
  if(aa===0){
        text(letter, 110, y);
      }else if(aa===1){
        text(letter, 180, y);
      }else if(aa===2){
        text(letter, 250, y);
      }else if(aa===3){
        text(letter, 320, y);
      }else if(aa===4){
        text(letter, 390, y);
      }else if(aa===5){
        text(letter, 460, y);
      }else if(aa===6){
        text(letter, 530, y);
      } 
    corrected(); 
} 

function lines(){
  
   fill(300);
   xpos = 100;
   ypos = 280;
  
  
  for (let x = 0; x<FirstLength; x++){
   
    rect(xpos, ypos, size, size/5);
    xpos = xpos + (size *2);
    
  }
  
}
