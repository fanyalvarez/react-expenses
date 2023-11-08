import Balance from "./Components/Balance";
import Header from "./Components/Header";
import TransactionForm from "./Components/Transactions/TransactionForm";
import TransactionList from "./Components/Transactions/TransactionList";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <TransactionForm />
        <TransactionList />
        <Balance />
        <Header />
        <h1>hello</h1>
      </GlobalProvider>
    </>
  );
}

export default App;
