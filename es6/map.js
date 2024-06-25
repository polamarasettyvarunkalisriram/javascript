let a1=[1,2,3,4,5,6];

function mutiple(a){
    return a*6;
}
let a2=a1.map(mutiple);
console.log(a2);
//arrow function
let ar1=[10,20,30];
let mutiple1=(a)=>{
    return  a*7;
}
let ar2=ar1.map(mutiple1);
console.log(ar2);