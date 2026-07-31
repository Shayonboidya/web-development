function isElevatorSafe(weights) {
    // Write your code here
    if(!Array.isArray(weights)){
        return "Invalid";
    }

    let sum = 0;
    for (const wt of weights) {
        sum += wt;
    }
    if(sum <= 400){
        return true;
    }else{
        return false;
    }
}