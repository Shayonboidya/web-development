type Role = "admin" | "editor" | "viewer";


const canEdit = (role :Role):boolean => {
    return (role === 'admin' || role === 'editor') ? true : false;
}


console.log(canEdit("admin"));
console.log(canEdit("editor"));
console.log(canEdit("viewer"));
// console.log(canEdit("guest"));
