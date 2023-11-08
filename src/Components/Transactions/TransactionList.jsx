import { useGlobalState } from "../../Context/GlobalState";

function TransactionList() {
  const { transactions } = useGlobalState();

  return (
    <>{
        transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
        </div>
      ))}</>
  );
}

export default TransactionList;
