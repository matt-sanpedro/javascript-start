// All exercise on 5X5 map
// Website: https://stanford.edu/~cpiech/karel/ide.html

// Exercise 1
// move to top right spot
function main(){
   //your code here
   moveFour();
   turnLeft();
   moveFour();
}

function moveFour() {
   move();
   move();
   move();
   move();
}

// Exercise 2
// place beepers on diagonol
function main(){
   //your code here
   putBeeper();
   moveDiagonalAndPutBeeper();
   moveDiagonalAndPutBeeper();
   moveDiagonalAndPutBeeper();
   moveDiagonalAndPutBeeper();
}

function moveDiagonalAndPutBeeper() {
   move();
   turnLeft();
   move();
   putBeeper();
   turnRight();
}

// Exercise 3
// place beepers in chessboard pattern
function main(){
   //your code here
   putBeeper();
   moveTwiceAndBeeper();
   moveTwiceAndBeeper();
   turnLeftAndMoveTwiceAndBeeper();
   moveTwiceAndBeeper();
   move();
   turnRightAndMoveAndBeeperTurnRight();
   moveTwiceAndBeeper();
   moveTwiceAndBeeper();
   turnLeftAndMoveTwiceAndBeeper();
   moveTwiceAndBeeper();
   move();
   turnRightAndMoveAndBeeperTurnRight();
   moveTwiceAndBeeper();
   moveTwiceAndBeeper();
}

function moveTwiceAndBeeper() {
   move();
   move();
   putBeeper();
}

function turnLeftAndMoveTwiceAndBeeper() {
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
}

function turnRightAndMoveAndBeeperTurnRight() {
   turnRight();
   move();
   putBeeper();
   turnRight();
}

// Exercise 3 instructor solution
// place beepers in chessboard pattern
function main(){
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
}

function goUpTurnRight() {
   turnRight();
   move();
   turnRight();
}

function goUpTurnLeft() {
   turnLeft();
   move();
   turnLeft();
}

function beepersRight() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}

function beepersLeft() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}
