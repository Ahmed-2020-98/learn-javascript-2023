//buit in Function
var x = "55";
console.log(parseInt(x));

//define function

function myFunction() {
  //  statment code

  return 5;
}

var s = myFunction();
console.log(s);

function sum(x, y) {
  console.log(x + y);
}

sum(5, 4);

//ternary operator
// (condition) ? "true" : "false"
var num1 = 2;
console.log(num1 > 5 ? "done" : "fail");

function triangle(x, y) {
  // x= (x==undefined)? 1 : x;
  // y= (y==undefined)? 1: y;
  if (x == undefined) {
    x = 0;
  }
  if (y == undefined) {
    y = 0;
  }
  console.log("result is " + x * y);
}

function triangle2(x = 0, y = 0) {
  console.log("result is " + x * y);
}

triangle();
triangle2();

var num = 5;
function test() {
  var num = 4;
  console.log(num);

  function z() {
    var num = 6;
    console.log(num);
  }
  z();
}

test();
