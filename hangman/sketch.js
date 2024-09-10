let WORD = [];
let LETTERS = [];
let BUTTONS = [];
let PLAY = [];
let START = [];

let ready = 0;

let start;

let correct = 0;

let FirstWORD;
let FirstLength;

let tries = 6;

let xpos = 100;
let ypos = 280;
let x = 110;
let y = 275;

let lfill = 300;
let lx = 100;
let ly = 320;

let size = 35;

function setup() {
  createCanvas(700, 700);
  WORD = [
    "boy",
    "fries",
    "bread",
    "sad",
    "rainbow",
    "cow",
    "phone",
    "water",
    "hungry",
    "comb",
    "ponytail",
    "hugs",
    "words",
    "wildcat",
    "ring",
    "fish",
  ];
  LETTERS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  BUTTONS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  PLAY = ["PLAY"];

  START = ["play", "restart", "play again"];
  starting();
}

function draw() {
  background(220);
  textSize(25);
  text("Welcome to the Hangman Game", 80, 150);

  if (ready === 1) {
    background(220);

    start.html("restart");
    WORDchoice();
    lines();

    letterA();
    letterB();
    letterC();
    letterD();
    letterE();
    letterF();
    letterG();
    letterH();
    letterI();
    letterJ();
    letterK();
    letterL();
    letterM();
    letterN();
    letterO();
    letterP();
    letterQ();
    letterR();
    letterS();
    letterT();
    letterU();
    letterV();
    letterW();
    letterX();
    letterY();
    letterZ();

    stand();

    dead();

    corrected();
  }
}

function stand() {
  fill(0);
  rect(450, 100, 80, 3);
  rect(450, 100, 3, 20);
  rect(530, 100, 3, 130);
  rect(500, 230, 60, 3);

  noFill();
  strokeWeight(2);
}

function dead() {
  if (tries === 6) {
    noStroke();
    fill(220);
    rect(130, 80, 200, 30);
    stroke(0);
    fill(0);
    strokeWeight(1);
    textSize(15);
    text("you have 6 choices left", 150, 100);
  }
  if (tries === 5) {
    noStroke();
    fill(220);
    rect(130, 80, 200, 30);
    stroke(0);
    strokeWeight(1);
    textSize(15);
    fill(0);
    text("you have 5 choices left", 150, 100);

    noFill();
    strokeWeight(2);

    //head
    ellipse(450, 135, 30, 30);
  }
  if (tries === 4) {
    noStroke();
    fill(220);
    rect(130, 80, 200, 30);
    stroke(0);
    strokeWeight(1);
    textSize(15);
    fill(0);
    text("you have 4 choices left", 150, 100);

    noFill();
    strokeWeight(2);

    //spine
    line(450, 150, 450, 200);
  }

  if (tries === 3) {
    noStroke();
    fill(220);
    rect(130, 80, 200, 30);
    stroke(0);
    strokeWeight(1);
    textSize(15);
    fill(0);
    text("you have 3 choices left", 150, 100);

    noFill();
    strokeWeight(2);

    ////left arm
    line(450, 165, 420, 170);
  }
  if (tries === 2) {
    noStroke();
    fill(220);
    rect(130, 80, 200, 30);
    stroke(0);
    strokeWeight(1);
    textSize(15);
    fill(0);
    text("you have 2 choices left", 150, 100);

    noFill();
    strokeWeight(2);

    //right arm
    line(450, 165, 480, 170);
  }

  if (tries === 1) {
    noStroke();
    fill(220);
    rect(130, 80, 200, 30);
    stroke(0);
    strokeWeight(1);
    textSize(15);
    fill(0);
    text("you have 1 choice left", 150, 100);

    noFill();
    strokeWeight(2);

    //left leg
    line(450, 200, 430, 230);
  }

  if (tries === 0) {
    background(250, 40, 20);
    strokeWeight(1);
    textSize(15);
    fill(0);
    text("you have 0 choices left, the word was: " + FirstWORD, 100, 100);
    text(" game over. he is dead. click the button to play again", 85, 150);

    fill(0);
    rect(450, 100, 80, 3);
    rect(450, 100, 3, 20);
    rect(530, 100, 3, 130);
    rect(500, 230, 60, 3);
    noFill();
    strokeWeight(2);

    //head
    ellipse(450, 135, 30, 30);
    //spine
    line(450, 150, 450, 200);
    ////left arm
    line(450, 165, 420, 170);
    //right arm
    line(450, 165, 480, 170);
    //left leg
    line(450, 200, 430, 230);
    //right leg
    line(450, 200, 470, 230);

    for (x in BUTTONS) {
      BUTTONS[x].attribute("disabled", "");
    }

    start.html("play again");

    ready = 2;
  }
}

function corrected() {
  if (correct === FirstWORD.length) {
    start.html("play again");
    background(90, 250, 30);
    strokeWeight(1);
    stroke(300);
    fill(0);
    text("you guessed it, word was: " + FirstWORD, 150, 100);
    text("good job. click the button to play again", 100, 150);

    for (x in BUTTONS) {
      BUTTONS[x].attribute("disabled", "");
    }
    ready = 2;
  }
}
