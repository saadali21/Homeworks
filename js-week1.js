// prints something to the console

console.log("Hello every body");

// a function that takes 3 arguments and returns the sum of the three arguments

function sumFun(a,b,c){
	return a+b+c;
}
sumFun(1,2,3);

// store multiple types in an array? Numbers and strings?

var myArr=["hello", 3 , "World"];
for (var i=0 ; i<myArr.length ; i++){
	console.log(myArr[i]);
}
// compare inifities? - does 6/0 == 10/0? How can you test this?

var x=6/0;
var y=10/0;
if(x==y){
	console.log("compare inifities: yes we can");
 }else{
	console.log("compare inifities: no we can't");
}

// an object and a function that takes the object as a parameter 
// and prints out all of its names and values.

var myObj={
	"name":"saad",
	"age":29,
	"height":188
}

function propVal(ObName) {
	for (var n in ObName){
		if (ObName.hasOwnProperty(n)){
		console.log(n + ' = ' +ObName[n]);
		}
	}
}
propVal(myObj);