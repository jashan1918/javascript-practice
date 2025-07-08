const fibonacci = function(countArg) {

    let count;
    //first check if the passed argument is a number or not and if not then turn it into integer and put it in the current value

    if(typeof countArg !== "number"){
        
        count = parseInt(countArg);
    }else{
        count = countArg;
    }

    //setup the edge cases 
    if(count < 0) return "OOPS"
    if(count == 0) return 0;

    //the main logic to return the correct number to the user

    let firstPrev = 1;
    let secondPrev = 0;

    for(let i = 2; i <= count; i++) {
        
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
