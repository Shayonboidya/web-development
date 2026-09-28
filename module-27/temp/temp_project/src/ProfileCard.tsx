import type { ProfileCardType } from "./Type"


export function ProfileCard(){
    const Profile:ProfileCardType ={
        name: "shayon",
        age: 22,
        favoriteHobby : "codding"

    }
    
    return(
        <>
        <h1>About Me</h1>
        <h2>Name: {Profile.name} </h2>
        <h2>Age: {Profile.age} </h2>
        <h2>Favorite Hobby: {Profile.favoriteHobby} </h2>

        </>
    )
}