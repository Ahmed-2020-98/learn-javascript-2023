var subject = "Hello Javascript";

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
