import { useState } from "react";
import { useGlobalState } from "../../Context/GlobalState";

function TransactionForm() {
  const { addTransaction } = useGlobalState(); // obtener info
  
  // capturar los valores
  const [description, setDescription] = useState(); // gaurdar la descripcion en que hemos gastado
  const [amount, setAmount] = useState(0); // el monto ingresado comienza con 0 k

  const onSubmit = (event) => {
    event.preventDefault(); // previene que se reinicie el navegador al dar click
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount
    });  // console.log(description, amount); // obtiene la info del form
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="ingresa el detalle de la operacion"
          onChange={(event) => setDescription(event.target.value)}
        />

        <input
          type="number"
          step="0.01"
          placeholder="ingresa un monto"
          onChange={(event) => setAmount(event.target.value)}
        />

        <button>add transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
