

//Problem-03: Weekly Expense Tracker
const calculateWeeklyTotal = (expenses:number[]):number => {
    // write your code here
    if(expenses.length === 0)return 0;
    return expenses.reduce((sum: number, val:number) => sum + val,0);
};
