//Problem-01: Battery Level Status
const getBatteryStatus = (percentage:number) : string => {
    // write your code here
    if(percentage >= 0 && percentage <= 20) return `Low`;
    else if(percentage >= 21 && percentage <= 50) return `Medium`;
    else if(percentage >= 51 && percentage <= 90) return `High`;
    else if(percentage >= 91 && percentage <= 100) return `Full`;
    return '';
};
