//const divideByZero= 5/0;
try{
    console.log(divideByZero);
}
catch(error){
    console.error(error.message);
}
console.log("This after try catch");
console.log(divideByZero);  