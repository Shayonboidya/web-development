interface Bookprops{
    name:string
}

export default function Book({name}:Bookprops ){
    return (
        <li>Book name: {name} </li>
    )

}