var strH = "Javascript";
var sentH = " is awesome";
strH += sentH;
console.log(strH); //print
console.log(strH.length); //length
console.log(strH[0]); //index
sentH[0] = "X"; //strings are immutable
sentH = "is an amazing language to learn";
console.log(strH); //this var are local and wont show new results
console.log(sentH.length);
console.log(sentH[sentH.length - 1]); //finding the last index of string

function wordBlocks(noun, verb) {
  //code below
  var result = "";
  result += "The " + noun + " is " + verb;
  //code above
  return result;
}
console.log(wordBlocks("baby", "sleeping"));
//Array store multiple values (list)
var myArry = ["Rae", "Marc", 2];
//nested Arrays - two arrays within an array
var nestArry = [
  ["Mark", 45],
  ["Rae", 30],
];
console.log(myArry[0]);
console.log(nestArry[0]);
console.log(nestArry[0][1]);
nestArry[2] = ["Mike", 60];
console.log(nestArry);
nestArry.pop(); //removes last item from array [2]
console.log(nestArry);
nestArry.push(["John", 25]); //adds item to end of array [2]
console.log(nestArry);
nestArry.shift(); //removes first item from the array [0]
console.log(nestArry);
nestArry.unshift(["lady", 24]); //adds item at the beginning of the array
console.log(nestArry);

//reusable functions

function greeting() {
  //code goes below
  console.log("Im watching a movie now");
  //code goes above this line
}
greeting();

// function with args

function args(a, b) {
  console.log(b - a);
}
args(1000, 23);

//GLOBAL SCOPE & LOCAL VARs
//1.global var
var age = 12;

function myAge() {
  strTime = "now"; //it becomes a global var since there is no data type var!
  console.log("I am " + age + " old " + strTime);
}
myAge();

//2. local var
function localVar() {
  var hisAge = 19; //this is the local var
  console.log("His only " + hisAge + " years old");
}
localVar();
//console.log(hisAge); // will return error because it is looking for a defined global var hisAge which ain't defined.

//3 global and local in one function

var globalVar = "I'm a Global variable";
function strVar() {
  localVar = "I'm a local variable";
  return localVar;
}
console.log(strVar()); //local var will override the global to return an output.
console.log(globalVar); //global var still exists anywhere

//Return a value with return function
//1
function val(a, b) {
  var result = a + b;
  return result;
}
console.log(val(10, 4));
//2
var x = 20;
function multiple() {
  x *= 3;
  return x;
}
console.log(multiple());

//storing the returned value in a new attribute.
var age = 10;
function ageDiff() {
  return 2020 - age;
}
dob = ageDiff(); //return value is stored in dob
console.log(dob);

//Stand Inline.
// adds item at the end and returns the first item

function nextInLine(arr, item) {
  arr.push(item); // adds value at the end of array
  return arr.shift(); // removes value at the beginning of the array
}
var standInArr = [1, 2, 3, 4];

console.log("Before: " + JSON.stringify(standInArr));
console.log(nextInLine(standInArr, 6));
console.log("After: " + JSON.stringify(standInArr));

//Booleans
function booleanStt() {
  return false;
}
//equal sign operand ==
//1
function booleanOne(a) {
  if (a == 1) {
    return "a equal to 1";
  }
  return "a is not equal to 1";
}
console.log(booleanOne(2));
//2
function booleanTwo(x) {
  if (x == 10) {
    return "x is equal to ten";
  }
  return "x is not equal to ten";
}
console.log(booleanTwo(12));
//3
function strictEqualSignX(d, e) {
  if (d == e) {
    return "D is equal to E";
  }
  return "D is not equal to E";
}
console.log(strictEqualSignX(44, "44")); //equal sign will convert the string to integer thus being equal d = e

//strictly equal sign operand
//1
function strictEqualSign(c) {
  if (c === 3) {
    return "c is strictly equal to 3";
  }
  return "c is not strictly equal to 3";
}
console.log(strictEqualSign("3"));
//2
function strictEqualSignTwo(a, b) {
  if (a === b) {
    return "a is equal to b";
  }
  return "a is not equal to b";
}
console.log(strictEqualSignTwo(44, "44"));

//inequality operator
//1
function notEqual(k, j) {
  if (k != j) {
    return "K is not equal to J";
  }
  return "K is equal to J";
}
console.log(notEqual(10, "10"));
//2
function notEqual(k, j) {
  if (k != j) {
    return "K is not equal to J";
  }
  return "K is equal to J";
}
console.log(notEqual(10, 20));
//3
function notEqual(k, j) {
  if (k != j) {
    return "K is not equal to J";
  }
  return "K is equal to J";
}
console.log(notEqual(10, "Not Equal"));

//Strictly no Equal to operator

function notStrictlyEqual(m, n) {
  if (m !== n) {
    return "M is not equal to N";
  }
  return "M is equal to N";
}
console.log(notStrictlyEqual(2, "2"));

//greater than, less than , greater than or equal to, less than or equal

function greaterThan(w, x) {
  if (w > x) {
    return "W is greater than X";
  }
  if (w < x) {
    return "W is less than X";
  }
  return "W is equal to X";
}
console.log(greaterThan(2, 8));

// && to fulfill both (AND)

function andOp(y) {
  if (y >= 1 && y <= 10) {
    return "Y is between 1-10";
  }
  return "Is either 0 or more than 11";
}
console.log(andOp(2));

// the or operator is to fullfill either side thats true ||

function orOp(z) {
  if (z >= 1 || z <= 5) {
    return "Z is a number between 1 to 5";
  }
  return "Z is either 0 more than 6";
}
console.log(orOp(8));

//else statement helps eliminate over use of nested if sttmts

function elseSttmt(x) {
  if (x <= 10) {
    return "X is less than 10";
  } else {
    return "X is greater than 11";
  }
}
console.log(elseSttmt(11));

//else if sttmts

function elseIfSttmt(m) {
  if (m <= 10) {
    return "M is less than 10";
  } else if (m <= 20) {
    return "M is greater than 10 but less than or equal to 20";
  } else {
    return "M is greater than or equal to 20";
  }
}
console.log(elseIfSttmt(11));

//SWITCH STTMTS

function switchSttmt(x) {
  var result = "";
  switch (x) {
    case 1:
      result = "Mark";
      break;
    case 2:
      result = "Racheal";
      break;
    case 3:
      result = "Mike";
      break;
    case 4:
      result = "John";
      break;
  }
  return result;
}
console.log(switchSttmt(3));

//default
//default is like the else statement

function defaultSttmt(val) {
  result = "";
  switch (val) {
    case "a":
      result = "Apple";
      break;
    case "b":
      result = "Bird";
      break;
    default:
      result = "Missing Animal not listed";
      break;
  }
  return result;
}
console.log(defaultSttmt("a"));

//sequential switch statements
function sequenceSttmt(y) {
  var size = "";
  switch (y) {
    case 1:
    case 2:
    case 3:
      size = "Low";
      break;

    case 4:
    case 5:
    case 6:
      size = "Medium";
      break;

    case 7:
    case 8:
    case 9:
      size = "High";
      break;
  }
  return size;
}
console.log(sequenceSttmt(7));


//Returning booleans from functions

function booleanTest(a,b){
  return a<b;
}
console.log(booleanTest(10,9));