import UserCard from "./UserCard";
interface CardType{
    name : string;
    isLoggedin: boolean;
}

function Card(){
    const users : CardType[] = [
        {name : "Omer sunny", isLoggedin : true},
    {name : "Bappa raz", isLoggedin: true},
    {name : "Salnam shah", isLoggedin: false},
    {name : "Sakib khan", isLoggedin: true},
    {name : "Razzak", isLoggedin: false}
    ]

    // const books:string[] = ["physics" , "boilogy", "chemistry"];
    return(
        <>
            {
                users.map(user => <UserCard name={user.name} isLoggedin={user.isLoggedin}></UserCard>)
            }
        </>
    )
}

export default Card