interface propsTaskType{
    name : string,
    isDone : boolean
}

function Task({name, isDone}:propsTaskType){
    // if(isDone === true){
    //    return <li>complite: {name} </li>
    // }
    // return <li>pending : {name} </li>

    return (
        // isDone === true ? <li>complite: {name} </li> : <li>pending : {name} </li>
        /*when one is true*/
        // isDone === true && <li>complite: {name} </li>//when first condition is true
        isDone === true || <li>pending: {name} </li>//when the condition false
        
    )
}


export default Task
