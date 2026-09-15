interface propsButtonType{
    type:string;
}
function Button(props:propsButtonType){
    return (
        <button>{props.type}</button>
    )
}

export default Button;