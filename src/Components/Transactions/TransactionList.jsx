import { useGlobalState } from "../../Context/GlobalState";

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();
  console.log(transactions)

  return (
    <>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
          <button
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            X
          </button>
          
        </div>
      ))}
    </>
  );
}

export default TransactionList;
