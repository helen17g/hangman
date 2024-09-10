let aa;
function letterA(){
  
     BUTTONS[0] = createButton(LETTERS[0]);
     BUTTONS[0].position(lx, ly);
     BUTTONS[0].style('background-color',lfill);
     BUTTONS[0].mousePressed(clicked0);
}
function clicked0(){
  
  
    BUTTONS[0].attribute('disabled', '');
  if(FirstWORD.includes("a")){ 
      print("yay an A");
      aa = FirstWORD.search("a");
      print(aa);
      display("A"); 

  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }
  }

function letterB(){
  
     BUTTONS[1] = createButton(LETTERS[1]);
     BUTTONS[1].position(lx+30, ly);
     BUTTONS[1].style('background-color',lfill);
    BUTTONS[1].mousePressed(clicked1);
}
function clicked1(){
  
        BUTTONS[1].attribute('disabled', '');

  
  if(FirstWORD.includes("b")){
      print("yay a B");
    aa = FirstWORD.search("b");
      print(aa);
    display("B");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }
  }
function letterC(){
  
     BUTTONS[2] = createButton(LETTERS[2]);
     BUTTONS[2].position(lx+60, ly);
     BUTTONS[2].style('background-color',lfill);
    BUTTONS[2].mousePressed(clicked2);
}
function clicked2(){
  
        BUTTONS[2].attribute('disabled', '');

  
 if(FirstWORD.includes("c")){
      print("yay a C");
   aa = FirstWORD.search("c");
      print(aa);
    display("C");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }
}

function letterD(){
  
     BUTTONS[3] = createButton(LETTERS[3]);
     BUTTONS[3].position(lx+90, ly);
     BUTTONS[3].style('background-color',lfill);
    BUTTONS[3].mousePressed(clicked3);
}
function clicked3(){
  
        BUTTONS[3].attribute('disabled', '');

  
 if(FirstWORD.includes("d")){
      print("yay a D");
   aa = FirstWORD.search("d");
      print(aa);
    display("D");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }
}


function letterE(){
  
     BUTTONS[4] = createButton(LETTERS[4]);
     BUTTONS[4].position(lx+120, ly);
     BUTTONS[4].style('background-color',lfill);
    BUTTONS[4].mousePressed(clicked4);
}
function clicked4(){
  
  
  BUTTONS[4].attribute('disabled', '');

  
  if(FirstWORD.includes("e")){
      print("yay an E");
    aa = FirstWORD.search("e");
      print(aa);
    display("E");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }
}


function letterF(){
  
     BUTTONS[5] = createButton(LETTERS[5]);
     BUTTONS[5].position(lx+150, ly);
     BUTTONS[5].style('background-color',lfill);
    BUTTONS[5].mousePressed(clicked5);
}
function clicked5(){
  
   BUTTONS[5].attribute('disabled', '');

  
if(FirstWORD.includes("f")){
      print("yay a F");
  aa = FirstWORD.search("f");
      print(aa);
    display("F");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  
}

function letterG(){
  
     BUTTONS[6] = createButton(LETTERS[6]);
     BUTTONS[6].position(lx+180, ly);
     BUTTONS[6].style('background-color',lfill);
    BUTTONS[6].mousePressed(clicked6);
}
function clicked6(){
  
        BUTTONS[6].attribute('disabled', '');

  
  if(FirstWORD.includes("g")){
      print("yay a G");
    aa = FirstWORD.search("g");
      print(aa);
    display("G");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }
}

function letterH(){
  
     BUTTONS[7] = createButton(LETTERS[7]);
     BUTTONS[7].position(lx+210, ly);
     BUTTONS[7].style('background-color',lfill);
    BUTTONS[7].mousePressed(clicked7);
}
function clicked7(){
  
        BUTTONS[7].attribute('disabled', '');

  
if(FirstWORD.includes("h")){
      print("yay an h");
  aa = FirstWORD.search("h");
      print(aa);
    display("H");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  
}

function letterI(){
  
     BUTTONS[8] = createButton(LETTERS[8]);
     BUTTONS[8].position(lx +240, ly);
     BUTTONS[8].style('background-color',lfill);
    BUTTONS[8].mousePressed(clicked8);
}
function clicked8(){
  
        BUTTONS[8].attribute('disabled', '');

  
if(FirstWORD.includes("i")){
      print("yay an i");
  aa = FirstWORD.search("i");
      print(aa);
    display("I");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  
}

function letterJ(){
  
     BUTTONS[9] = createButton(LETTERS[9]);
     BUTTONS[9].position(lx+270, ly);
     BUTTONS[9].style('background-color',lfill);
    BUTTONS[9].mousePressed(clicked9);
}
function clicked9(){
 
        BUTTONS[9].attribute('disabled', '');

  
if(FirstWORD.includes("j")){
      print("yay a j");
  aa = FirstWORD.search("j");
      print(aa);
     display("J");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  
}

function letterK(){
  
     BUTTONS[10] = createButton(LETTERS[10]);
     BUTTONS[10].position(lx+300, ly);
     BUTTONS[10].style('background-color',lfill);
    BUTTONS[10].mousePressed(clicked10);
}
function clicked10(){
 
        BUTTONS[10].attribute('disabled', '');

  
if(FirstWORD.includes("k")){
      print("yay a k");
  aa = FirstWORD.search("k");
      print(aa);
      display("K");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  }

function letterL(){
  
     BUTTONS[11] = createButton(LETTERS[11]);
     BUTTONS[11].position(lx+330, ly);
     BUTTONS[11].style('background-color',lfill);
    BUTTONS[11].mousePressed(clicked11);
}
function clicked11(){
 BUTTONS[11].attribute('disabled', '');

  
if(FirstWORD.includes("l")){
      print("yay an l");
  aa = FirstWORD.search("l");
      print(aa);
      display("L");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  }


function letterM(){
  
     BUTTONS[12] = createButton(LETTERS[12]);
     BUTTONS[12].position(lx+360, ly);
     BUTTONS[12].style('background-color',lfill);
    BUTTONS[12].mousePressed(clicked12);
}
function clicked12(){
 
        BUTTONS[12].attribute('disabled', '');

  
if(FirstWORD.includes("m")){
      print("yay an m");
  aa = FirstWORD.search("m");
      print(aa);
      display("M");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  }
function letterN(){
  
     BUTTONS[13] = createButton(LETTERS[13]);
     BUTTONS[13].position(lx, ly+30);
     BUTTONS[13].style('background-color',lfill);
    BUTTONS[13].mousePressed(clicked13);
}
function clicked13(){
  
        BUTTONS[13].attribute('disabled', '');

  
if(FirstWORD.includes("n")){
      print("yay an n");
  aa = FirstWORD.search("n");
      print(aa);
      display("N");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  }

function letterO(){
  
     BUTTONS[14] = createButton(LETTERS[14]);
     BUTTONS[14].position(lx+30, ly+30);
     BUTTONS[14].style('background-color',lfill);
    BUTTONS[14].mousePressed(clicked14);
}
function clicked14(){
 
        BUTTONS[14].attribute('disabled', '');

  
if(FirstWORD.includes("o")){
      print("yay an o");
  aa = FirstWORD.search("o");
      print(aa);
      display("O");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  }

function letterP(){
  
     BUTTONS[15] = createButton(LETTERS[15]);
     BUTTONS[15].position(lx+60, ly+30);
     BUTTONS[15].style('background-color',lfill);
    BUTTONS[15].mousePressed(clicked15);
}
function clicked15(){
  
        BUTTONS[15].attribute('disabled', '');

  
if(FirstWORD.includes("p")){
      print("yay a p");
  aa = FirstWORD.search("p");
      print(aa);
      display("P");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  }
function letterQ(){
  
     BUTTONS[16] = createButton(LETTERS[16]);
     BUTTONS[16].position(lx+90, ly+30);
     BUTTONS[16].style('background-color',lfill);
    BUTTONS[16].mousePressed(clicked16);
}
function clicked16(){
  
        BUTTONS[16].attribute('disabled', '');

  
if(FirstWORD.includes("q")){
      print("yay a q");
  aa = FirstWORD.search("q");
      print(aa);
      display("Q");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  }
function letterR(){
  
     BUTTONS[17] = createButton(LETTERS[17]);
     BUTTONS[17].position(lx+120, ly+30);
     BUTTONS[17].style('background-color',lfill);
    BUTTONS[17].mousePressed(clicked17);
}
function clicked17(){
 
      BUTTONS[17].attribute('disabled', '');

if(FirstWORD.includes("r")){
      print("yay a r");
  aa = FirstWORD.search("r");
      print(aa);
      display("R");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
    } }

function letterS(){
  
     BUTTONS[18] = createButton(LETTERS[18]);
     BUTTONS[18].position(lx+150, ly+30);
     BUTTONS[18].style('background-color',lfill);
    BUTTONS[18].mousePressed(clicked18);
}
function clicked18(){
  
        BUTTONS[18].attribute('disabled', '');

  
if(FirstWORD.includes("s")){
      print("yay an s");
  aa = FirstWORD.search("s");
      print(aa);
      display("S");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  }

function letterT(){
  
     BUTTONS[19] = createButton(LETTERS[19]);
     BUTTONS[19].position(lx+180, ly+30);
     BUTTONS[19].style('background-color',lfill);
     BUTTONS[19].mousePressed(clicked19);
}
function clicked19(){
  
        BUTTONS[19].attribute('disabled', '');

  
if(FirstWORD.includes("t")){
      print("yay a t");
  aa = FirstWORD.search("t");
      print(aa);
      display("T");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  }


function letterU(){
  
     BUTTONS[20] = createButton(LETTERS[20]);
     BUTTONS[20].position(lx+210, ly+30);
     BUTTONS[20].style('background-color',lfill);
    BUTTONS[20].mousePressed(clicked20);
}
function clicked20(){
  
        BUTTONS[20].attribute('disabled', '');

  
if(FirstWORD.includes("u")){
      print("yay a u");
  aa = FirstWORD.search("u");
      print(aa);
      display("U");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  }

function letterV(){
  
     BUTTONS[21] = createButton(LETTERS[21]);
     BUTTONS[21].position(lx+240, ly+30);
     BUTTONS[21].style('background-color',lfill);
    BUTTONS[21].mousePressed(clicked21);
}
function clicked21(){
 
        BUTTONS[21].attribute('disabled', '');

  
if(FirstWORD.includes("v")){
      print("yay a v");
  aa = FirstWORD.search("v");
      print(aa);
      display("V");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  }

function letterW(){
  
     BUTTONS[22] = createButton(LETTERS[22]);
     BUTTONS[22].position(lx+270, ly+30);
     BUTTONS[22].style('background-color',lfill);
    BUTTONS[22].mousePressed(clicked22);
}
function clicked22(){
 
        BUTTONS[22].attribute('disabled', '');

  
if(FirstWORD.includes("w")){
      print("yay a w");
  aa = FirstWORD.search("w");
      print(aa);
      display("W");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  }


function letterX(){
  
     BUTTONS[23] = createButton(LETTERS[23]);
     BUTTONS[23].position(lx+300, ly+30);
     BUTTONS[23].style('background-color',lfill);
    BUTTONS[23].mousePressed(clicked23);
}
function clicked23(){
 
          BUTTONS[23].attribute('disabled', '');

  
  
if(FirstWORD.includes("x")){
      print("yay a x");
  aa = FirstWORD.search("x");
      print(aa);
      display("X");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  }


function letterY(){
  
     BUTTONS[24] = createButton(LETTERS[24]);
     BUTTONS[24].position(lx+330, ly+30);
     BUTTONS[24].style('background-color',lfill);
    BUTTONS[24].mousePressed(clicked24);
}
function clicked24(){
 
          BUTTONS[24].attribute('disabled', '');

  
if(FirstWORD.includes("y")){
      print("yay a y");
  aa = FirstWORD.search("y");
      print(aa);
      display("Y");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  }


function letterZ(){
  
     BUTTONS[25] = createButton(LETTERS[25]);
     BUTTONS[25].position(lx+360, ly+30);
     BUTTONS[25].style('background-color',lfill);
    BUTTONS[25].mousePressed(clicked25);
}
function clicked25(){
 
          BUTTONS[25].attribute('disabled', '');

  
if(FirstWORD.includes("z")){
      print("yay a z");
  aa = FirstWORD.search("z");
      print(aa);
      display("Z");

    
  }else{
    print("nah");
    tries = tries -1;
    print("tries left " + tries);
    dead();
  }  }
