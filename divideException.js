const safeDivide=(numerator,denominatoe)=>{
    try{
        if(denominatoe===0)
        {
            throw new Error("Cannot divide by zero");
        }
        return numerator/denominatoe;

    }catch(error){
            console.error(`An error occured:${error.message}`);
    }
}
console.log(safeDivide(5,0));