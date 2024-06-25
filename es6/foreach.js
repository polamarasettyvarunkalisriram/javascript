let a1=[10,20,30,40,50];
a1.forEach(mutiple);
function mutiple(a){
    console.log(a*5,"<br>");
}

//arrow function
let ar1=[10,20,30];
let mutiple1=(a)=>{
    console.log(a*10+"<br>");
}
ar1.forEach(mutiple1);