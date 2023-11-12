import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncomeExpenses from "./Components/Transactions/IncomeExpenses";
import TransactionForm from "./Components/Transactions/TransactionForm";
import TransactionList from "./Components/Transactions/TransactionList";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <TransactionForm />
        <TransactionList />
        <IncomeExpenses />
        <Balance />
        <Header />
      </GlobalProvider>
    </>
  );
}

export default App;
