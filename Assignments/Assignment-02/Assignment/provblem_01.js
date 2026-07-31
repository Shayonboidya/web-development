function matchWinner(teamAGoals, teamBGoals) {
    // Write your code here...
    if (!Number.isInteger(teamAGoals) || !Number.isInteger(teamBGoals)) {
        return "Invalid";
    }
    if (teamAGoals > teamBGoals) {
        return "Team A Won";
    } else if (teamAGoals < teamBGoals) {
        return "Team B Won";
    }else{
        return "Draw";
    }
}




// console.log(matchWinner("1", 0));