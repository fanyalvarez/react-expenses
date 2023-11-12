import { useGlobalState } from "../Context/GlobalState";

function Balance() {
  const { transactions } = useGlobalState();
  // console.log(transactions);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      {JSON.stringify(total, null, 2)}

      <div>Balance</div>
    </>
  );
}

export default Balance;
