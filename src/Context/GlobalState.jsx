import { createContext, useContext, useReducer } from "react";
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
  const [state, dispatch] = useReducer(AppReducer, initialState); //es un objeto y lo espera el useReducer

  // funcio para anadir
  const addTransaction = (transaction) => {// console.log("add transaction");
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
