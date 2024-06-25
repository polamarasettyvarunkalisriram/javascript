let a1=[1,2,3,4,5];

function sriram(a,b){
    return a+b;
}

let a2=a1.reduce(sriram);
console.log(a2);
// arrow function 
let ar1=[10,20,30,40];

let sriram=(a,b)=>{
    return a+b;
}
let ar2=ar1.reduce(sriram);
console.log(ar2);