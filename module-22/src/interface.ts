interface Employe {
    name: string,
    selary?: number,
    id: number,
    dep: string
}


const employee1: Employe[] = [
    {
        name: "shayon",
        selary: 12200,
        id: 102,
        dep: "softere engg."
    }, {
        name: "karim",
        id: 452,
        dep: "desigener"
    }
]



function printEmployee(employee: Employe): void {
    console.log(`Name : ${employee.name}`);
    console.log(`ID: ${employee.id}`);
    console.log(`Deperment : ${employee.dep}`);
    console.log(`selary : ${employee.selary}`);
}

printEmployee({ name: "Elon Musk", id: 202, dep: "SpaceX" });


function printEmployeeDetels({name , id, dep}: Employe):void {
    console.log(`Name : ${name}`);
    console.log(`ID: ${id}`);
    console.log(`Deperment : ${dep}`);
    // console.log(`selary : ${selary}`);

}

printEmployeeDetels({name : "Elon muck", id: 102, dep: "space X"});
// printEmployeeDetels()