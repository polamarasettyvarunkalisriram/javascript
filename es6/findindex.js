let a1=[1,2,4,31,5];

function mutiple2(a){
    if(a>3){
        return a;
    }
}

let a2=a1.findIndex(mutiple2);
console.log(a2);

//arrow function

let arr1=[10,30,40,50];

let sriram=(a)=>{
    if(a==30){
        return a;
    }
}
let arr2=arr1.findIndex(sriram);
console.log(arr2);