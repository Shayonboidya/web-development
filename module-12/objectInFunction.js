// Object in function
function objectInArray(studentInfo){
    console.log("Studnt info : ", studentInfo);
    const marks = studentInfo.mark;
    if(marks >= 80){
        return true;
    }else{
        return false
    }
}


const student = {
    name : "shayon boidya",
    age : 21,
    mark : 89
};

let isGotAPlus =  objectInArray(student);
console.log("He/She got A+: ",isGotAPlus);