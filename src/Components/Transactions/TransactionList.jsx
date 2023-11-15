import { useGlobalState } from "../../Context/GlobalState";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions } = useGlobalState();
  // console.log(transactions)

  return (
    <div>
      <h2 className="text-slate-300 text-2xl font-bold mb-5" >History</h2>
      {transactions.map((transaction) => (
        <TransactionItem transaction={transaction} key={transaction.id} />
      ))}
    </div>
  );
}

export default TransactionList;
