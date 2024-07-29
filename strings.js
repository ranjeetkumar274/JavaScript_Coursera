//all the methods used with strings

var str = "Hello world!";

var n = str.length;

console.log(n); 

//charAt() method

for(var i = 0; i < n; i++){
    console.log(str.charAt(i));
}


// concat() method
var str2 = "Hello ashu!";

console.log(str.concat(" ").concat(str2));

