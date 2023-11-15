import { useGlobalState } from "../../Context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();
  // console.log(transactions);

  const amounts = transactions.map((transaction) => transaction.amount);
  // console.log(amounts);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  // console.log(income, expense);

  return (
    <>
      <div className="flex justify-between my-2">
        <h3>Ingresos</h3>
        <p>${income}</p>
      </div>

      <div className="flex justify-between my-2">
        <h3>Egresos</h3>
        <p>${expense}</p>
      </div>
    </>
  );
}

export default IncomeExpenses;
