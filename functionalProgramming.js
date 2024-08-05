var a = 10; //global scope
var b = 5;

function addition(a,b){
    return a+b;  //local scope
}

console.log(addition(a,b));