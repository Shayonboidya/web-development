function filterActiveUsers(users) {
    // Write your code here
    if(!Array.isArray(users) || users.length === 0){
        return 'Invalid'
    }
    for (const item of users) {
        if(item.isActive == undefined){
            return "Invalid";
        }
    }
    return users.filter((item) => item.isActive === true);
}

console.log(filterActiveUsers([]));
console.log(filterActiveUsers([{"name":"A"}]));
console.log(filterActiveUsers([{ "name": "Rafi", "isActive": true }, { "name": "Sadia", "isActive": true }]));