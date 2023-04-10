//document.write(`<h1>Welcome page</h1>`)

// for(var i=1;i<=100;i++){
//     document.write(`<h3>welcome page ${i} </h3>`)
// }

// 1,12,4,5,6,5,43,23

var arr=[1,12,4,5,6,5,43,23];

document.write(`<h1>ascending ${arr.sort((a,b)=>a-b)} </h1>`)
document.write(`<h1>descending ${arr.sort((a,b)=>a-b).reverse()} </h1>`)

// Print the odd numbers less than 100

for(var i=0; i<100;i++){
    if(i % 2==1){
        console.log(i);
    }
}

// Calculate the sum of numbers from 1 to 10

var sum=0;
for(var i=1; i<=10;i++){
    sum+=i;
}
console.log(sum);

//Create a function that will convert from Celsius to Fahrenheit
//cels = (fahr - 32.0) * 5.0/9.0; //Fahr to cels
//fahr = (cels * 9.0/5.0) + 32.0; //Cels to fahr  

function celsiusToFahr(cels){
    return fahr = (cels * 9.0/5.0) + 32.0;
}

console.log(celsiusToFahr(32));

// create a function that will calculate  area of traingle

var area ;
function a(x,y){
    return  area = x * y;
}
console.log(a(3,5));


// Find the maximum number in an array of numbers
// odd numbers by using map method 

