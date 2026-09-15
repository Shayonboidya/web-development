interface TodoPropsType{
    task : string,
    time ?: string
}

function Todo(props:TodoPropsType){
    console.log(props);
    // const {task, time} = props;
    return(
        // <h2>Do work :{props.task} </h2>
        <h2>Do Work : {props.task} {(props.time != undefined ? "at" : "")} {props.time} </h2>

    )
}

export default Todo;