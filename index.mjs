// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
let isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

const isDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
  if ((n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) >= 0) {
    console.log('Divisible By 5');
  } else {
    console.log('Not Div By 5');
  }

  const isLargerThanN4 = (n1 > n4);
  if (n1 > n4) {
    console.log('It\'s Bigger');
  } else {
    console.log('It\'s not Bigger')
  }

const firstResult = n2 - n1;
const secondResult = firstResult * n3;
const thirdResult = secondResult / n4;
console.log("The Answer Is", thirdResult);

let speed1MPG = 30;
let speed2MPG = 28;
let speed3MPG = 23;

let speed1MPH = 55;
let speed2MPH = 60;
let speed3MPH = 75;


let budget = 175;
let gasGallon = 3;

let distance = 1500;

if (speed1MPG * (budget/gasGallon) >= distance) {
  console.log("You\'ll need", distance/speed1MPG, "Gallons.", 'You\'ll make it in', distance/speed1MPH, "hours")
} else {
  console.log("You won't make it")
}

if (speed2MPG * (budget/gasGallon) >= distance) {
  console.log("You\'ll need", distance/speed2MPG, "Gallons.", 'You\'ll make it in', distance/speed2MPH, "hours")
} else {
  console.log("You won't make it")
}

if (speed3MPG * (budget/gasGallon) >= distance) {
  console.log("You\'ll need", distance/speed3MPG, "Gallons.", 'You\'ll make it in', distance/speed3MPH, "hours")
} else {
  console.log("You won't make it")
}