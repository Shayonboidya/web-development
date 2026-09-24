interface CardType{
    name : string;
    isLoggedin: boolean;
}

function UserCard(props:CardType){
    return (
        props.isLoggedin ? <h2>The menber  is {props.name} is log in </h2> : <h2>ther user {props.name} is not log in</h2>
    )
}

export default UserCard