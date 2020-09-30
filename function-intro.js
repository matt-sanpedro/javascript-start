function getMilk(money, costPerBottle) {
  // robot instructions for round trip to store
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk")
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(money, costPerBottle);
}

function calcBottles(money, cost) {
  var numberBottles = Math.floor(money / cost);
  return numberBottles;
}

function calcChange(money, cost) {
  var change = money % cost;
  return change;
}

// console.log("Hello master, here is your $" + getMilk(5, 2) + " in change.");

function lifeInWeeks(age) {

  /************Don't change the code above************/

  //Write your code here.
  var liveUntil = 90; // years
  var yearsLeft = liveUntil - age;
  var monthsLeft = yearsLeft * 12;
  var weeksLeft = yearsLeft * 52;
  var daysLeft = yearsLeft * 365;

  console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.");


  /*************Don't change the code below**********/
}

// lifeInWeeks(56);

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
// function bmiCalculator(weight, height) {
//   var bmi = weight / (Math.pow(height,2));
//   return Math.round(bmi);
// }

function bmiCalculator(weight, height) {
  var bmi = weight / (height**2);
  return Math.round(bmi);
}

console.log(bmiCalculator(65, 1.8));

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8);

bmi should equal 20 when it's rounded to the nearest whole number.

*/
