let a=[1,2,3,4,5,6];

function mutiple(a){
    if(a>3){
        return a;
    }
}
let a1=a.filter(mutiple);
console.log(a1);

// arrow function

let ar1=[10,20,30,40,50,60];

let mutiple3=(a)=>{
    if (a>=20){
        return a;
    }
}

let ar2=ar1.filter(mutiple3);
console.log(ar2);