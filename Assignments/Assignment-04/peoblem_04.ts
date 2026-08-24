

//Problem-04: Traffic Light Action
type  Light =   "red" | "yellow" | "green";
const getTrafficAction = (light :Light):string => {
    // write your code here
    if(light === 'red')return `Stop`;
    if(light === 'yellow')return `Slow Down`;
    if(light === 'green')return `Go`;
    return '';
};

