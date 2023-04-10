var subject = "Hello Javascript23";

console.log(subject);
console.log(subject.length); //16
console.log(subject.indexOf("J")); //6
console.log(subject.substring(0, 5)); //hello
console.log(subject.includes("H")); //true
console.log(subject.concat(" add")); //Hello Javascript add
console.log(subject.endsWith("pt")); //true
console.log(subject.toLowerCase());
console.log(subject.toUpperCase());


/*
==============task====================== 
Write a script to determine whether the entered string is
palindrome or not. Request the string to be entered via prompt, ask the
user whether to consider case sensitivity of the entered string or not via
confirm, handle both cases in your script
i.e. RADAR NOON MOOM are palindrome.
Note: raDaR is not a palindrome if user requested considering case of
entered string, it will be palindrome if user requested ignoring case
sensitivity. 
*/
console.log("***************************************************");

var myArray = [1, 2, 11, 23, 43, 54, 65, 7, 8, 9, "ahmed", 54, 6, 5];
console.log(myArray);

console.log(myArray.length);

// for (var i = 0; i <= myArray.length - 1; i++) {
//   console.log(myArray[i]);
// }

// for (var index in myArray) {
//   console.log(myArray[index]);
// }

var newArr = [1, 2, 11, 23, 43, 54, 65, 7, 8, 9, 54, 6, 5];
console.log(newArr);
console.log(newArr.join("-"));
console.log(newArr.pop());
console.log(newArr.push("new value"));
console.log(newArr);
console.log(newArr.shift());
console.log(newArr);
console.log(newArr.unshift(1));
console.log(newArr);
console.log(newArr.reverse());
console.log(newArr.sort(comaprison));

function comaprison(a, b) {
  return a - b;
}

var associativeArray = [];
associativeArray["name"] = "ahmed";
associativeArray["age"] = 24;

console.log(associativeArray);

// Date
var myDate = new Date();
console.log(myDate);

document.write(`<h1>${myDate.getDay()}</h1>`);
document.write(`<h1>${myDate.getMonth()}</h1>`);
document.write(`<h1>${myDate.getFullYear()}</h1>`);
document.write(`<h1>${myDate.getHours()}</h1>`);
document.write(`<h1>${myDate.getMinutes()}</h1>`);

//1900

/*

1-	Make function that write “welcome to my page” 6 times using h1 to h6 header sizes using one line (document.Write)  JavaScript code “see attached image” . (Use for loop, and don’t use h1 to h6 explicitly)
*/
