function add2(num1 :number, num2 :number):number[]{
    const total = num1 + num2;
    return [total];
}

function add3 (num1 :number, num2 : number) : {total ?: number}{
    const total = num1 + num2;
    return {total: total}
}

function add4 (num1 :number, num2 : number) :[string , number] {
    const total = num1 + num2;
    return ["total" , total];
}



