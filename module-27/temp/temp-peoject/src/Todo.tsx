interface TodoType{
    task:String;
    time?:string;
    date ?:string
}

function Todo(props:TodoType){
    return (
        <div>
            <p>I have work : {props.task} at {props.time} by {props.date} </p>
        </div>
    )
}

export default Todo;