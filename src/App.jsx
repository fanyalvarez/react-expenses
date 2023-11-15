import Balance from "./Components/Balance";
import Header from "./Components/Header";
import ExpenseChart from "./Components/Transactions/ExpenseChart";
import IncomeExpenses from "./Components/Transactions/IncomeExpenses";
import TransactionForm from "./Components/Transactions/TransactionForm";
import TransactionList from "./Components/Transactions/TransactionList";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
          <div className="container mx-auto w-3/6">
            <div className="bg-zinc-700 p-10 rounded-lg  gap-x-5 grid grid-cols-2">
              <div>
                <Header />
                <div className="w-80 mx-auto"><ExpenseChart /></div>
                <IncomeExpenses />
                <Balance />
                <TransactionForm />
              </div>

              <TransactionList />
            </div>
          </div>
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
