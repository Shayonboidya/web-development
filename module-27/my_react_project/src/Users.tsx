import UserCard from "./UserCard";

interface User{
    name : string,
    isLoggedin : boolean
};

const users:User[] = [
    {name : "Omer sunny", isLoggedin : true},
    {name : "Bappa raz", isLoggedin: true},
    {name : "Salnam shah", isLoggedin: false},
    {name : "Sakib khan", isLoggedin: true},
    {name : "Razzak", isLoggedin: false},
    
];

function Users(){
    return (
        <div>
            {
                users.map(user => <UserCard name = {user.name}></UserCard> )
            }
        </div>
    )
}
export default Users