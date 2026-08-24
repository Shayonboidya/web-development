interface Deposit {
  type: "deposit";
  amount: number;
}

interface Withdrawal {
  type: "withdraw";
  amount: number;
}

const processTransaction = (
  balance: number,
  transaction: Deposit | Withdrawal
): number => {
  if (transaction.type === "deposit") {
    return balance + transaction.amount;
  }

  if (transaction.amount > balance) {
    return balance;
  }

  return balance - transaction.amount;
};

console.log(processTransaction(5000, { type: "deposit", amount: 2000 }));
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 }));
console.log(processTransaction(5000, { type: "withdraw", amount: 7000 }));