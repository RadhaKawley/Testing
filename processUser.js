function processUser(jasonString){
    try {
        //step 1:focus on try block
        //step2:parse jason string
        const user=JSON.parse(jasonString);
        //step3:
        if(!user.username){
            //step 4:
            throw new Error("Field 'username'is missing");
        
        }
        //step5:
        console.log("user verified");

    }
    //step 6 
    catch (error) {
        //step7:
        console.error(error.message);
        //fallback message
        console.log("Switiching to guest mode");
        
    }
}
//step8:
const apiResponse1="{username:'alice'";
const apiResponse2='{"age":24}';
const apiResponse3='{"username":"alice","age":25}';

processUser(apiResponse3);