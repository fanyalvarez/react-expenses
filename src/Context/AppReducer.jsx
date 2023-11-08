export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state, // si recibe otros datos
        transactions: [...state.transactions, action.payload], // push al arreglo y mandarle lo que viene del ADD_TRANSACTION, payload
      };

    case "DELETE_TRANSACTION": //fitra las transacciones por el id
      return {
        ...state, // copia todo el estado
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ), // si es diferente lo mantiene en el arreglo y si es igual lo quita
      };

    default:
      return state;
  }
};

// funcion anonima
// state = arreglo vacio    ---- action = accion que queremos realizar

// {recibe esto en el switch
//     type:"ADD_TRANSACTION",
//     payload:200
// }
