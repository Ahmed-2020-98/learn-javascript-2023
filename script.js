//spread Array
var myArr=[1,2,3,4,5,"ahmed"];
var newArr=[...myArr,23,4,3,2,"new Array"]
console.log(myArr);
console.log(newArr);

//object 
var employes={
    emp1:{
        name:"ali",
        age:24,
    },
    emp2:{
        name:"mohamed",
        age:20,
    },
    emp3:{
        name:"ahmed",
        age:24,
    },
};

console.log(employes);

let arr1=[1,2,3,4,5]

let arr2=arr1.map((item)=>{
return item === 3 ? 'done' : '';
})

console.log(arr2);

let arr3=arr1.filter((array)=>{

    return array
})

console.log(arr3);

let arr4= arr1.reduce((total,current)=>{

    return total + current;
})

console.log(arr4);