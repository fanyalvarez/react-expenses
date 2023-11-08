// funcion anonima
// state = arreglo vacio    ---- action = accion que queremos realizar

// {recibe esto en el switch
//     type:"ADD_TRANSACTION",
//     payload:200
// }
export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,  // si recibe otros datos
        transactions: [...state.transactions, action.payload],// push al arreglo y mandarle lo que viene del ADD_TRANSACTION, payload
      };
    default:
      return state;
  }
};
