// write reusable code with the help of the functions

function printMessage() {
  console.log("JavaScript is Awesome!!");
}

// function invoke/ called
// printMessage();

function findDivision(a, b) {
  console.log(a / b);
}

// findDivision(123, 74);

/* Scole resolution of the variables */
function calculateSum(a, b) {
  // sumOfTwoNumbers is local to this function only
  // if you want to access it outside this function
  // it will throw error that this is not define.
  var sumOfTwoNumbers = a + b;
  console.log(sumOfTwoNumbers);
}

// called sum
calculateSum(12, 78);

// this will throw an error saying sumOfTwoNumbers is
// not defined in this scope
// console.log(sumOfTwoNumbers);
