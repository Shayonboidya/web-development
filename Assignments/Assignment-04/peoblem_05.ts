
//Problem-05: Quiz Score Summary
interface Result {
   total : number;
    average : number;
}
const getQuizSummary = (scores :number[]):Result => {
    // write your code here
    if(scores.length === 0) return {total : 0, average : 0};
    let total = scores.reduce((sum : number , val:number) => sum + val, 0);
    return {
        total,
        average : total/scores.length
    }
};

