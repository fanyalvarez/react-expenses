import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../../Context/GlobalState";

function ExpenseChart() {
  const { transactions } = useGlobalState();

  // total
  const total = transactions.reduce(
    (acc, transaction) => (acc += transaction.amount),
    0
  );
  //total ingresos
  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);
  //total gastos
  const totalExpense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  //  totales en porcentajes
  const totalIncPercentage = Math.round((totalExpense / totalIncome) * 100);
  const totalExpPercentage = Math.round(100 - totalIncPercentage);

  return (
    <VictoryPie
      colorScale={["#6E60E0", "#60A5E0"]}
      data={[
        { x: "Expenses", y: totalExpPercentage },
        { x: "Incomes", y: totalIncPercentage },
      ]}
      animate={{ duration: 2000 }}
      labels={({ datum }) => `${datum.y}%`}
      porcentajes
      labelComponent={
        <VictoryLabel
          // angle={65}
          style={{
            fill: "white",
          }}
        />
      }
    />
  );
}

export default ExpenseChart;
