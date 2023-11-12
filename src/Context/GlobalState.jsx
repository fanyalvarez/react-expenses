import { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};
export const Context = createContext();

export const useGlobalState = () => {
  const contextData = useContext(Context);
  return contextData;
};

export const GlobalProvider = ({ children }) => {
  //es un objeto y lo espera el useReducer
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    // darle la indicacionde que inie con la info que hay en el local,
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : initialState; //local si noy hay initail state = linea 4
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state),[state])})
  

  // funcio para anadir
  const addTransaction = (transaction) => {
    // console.log("add transaction");
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  // eliminar operacion por id
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
