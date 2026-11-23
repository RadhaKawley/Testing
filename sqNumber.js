//this with debugger which we write and programme stops at the debugger

function squareNumber(numbers){
    const squared=[];
    for (let i=0;i<numbers.length;i++){
        debugger;
        squared.push(numbers[i]**2);
    }
    return squared;

}
const inputs =[1,2,3,4,5];
console.log("squared numbers:",squareNumber(inputs));